;(function(){$(function(){

    function debounce(wait, immediate, cb) {
        cb = !!cb ? cb : function(){};
        var timeout;
        return function() {
            var dfd = jQuery.Deferred();
            var func = dfd.resolve;
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            cb(timeout)
            if (callNow) func.apply(context, args);
            return dfd.promise('asdf');
        };
    };
    



    /*var timeoutManager = (function(){
        var TimeoutManager = function(){
            this.id = 0;
            this.registry = {};
        };
        var TimeoutManager.prototype.register = function($el,cb){
            this.registry[this.id++] = ;
            $el.on('$destroy', function() {
                cb();
            });
        };
        return new TimeoutManager();
    })();*/

    
    var docEl = document.documentElement;
    var docBody = document.body;
    function getWinWidth() {
        return window.innerWidth || docEl.clientWidth || docBody.clientWidth
    }
    function getWinHeight() {
        return window.innerHeight || docEl.clientHeight || docBody.clientHeight
    }
    function getDocumentHeight() {
        return Math.max(
            docBody.scrollHeight, docBody.offsetHeight, 
            docEl.clientHeight, docEl.scrollHeight, docEl.offsetHeight
        );
    }

    var Vanilla = function(){

    };
    Vanilla.prototype.hasClass = function(elem, className) {
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    }
    Vanilla.prototype.addClass = function(elem, className) {
        if (!this.hasClass(elem, className)) {
            elem.className += ' ' + className;
        }
    }

    Vanilla.prototype.removeClass = function(elem, className) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, className)) {
            while (newClass.indexOf(' ' + className + ' ') >= 0) {
                newClass = newClass.replace(' ' + className + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
    }

    Vanilla.prototype.offset = function(elem){
        var rect = elem.getBoundingClientRect();

        return {
          top: rect.top + docBody.scrollTop,
          left: rect.left + docBody.scrollLeft
        }
    };
    Vanilla.prototype.selectBody = function() {
        return document.querySelector('body');
    };
    var vanilla = new Vanilla();

    var lastRefreshHeight = getWinHeight() - window.bs.heightTweak;
    var lastRefreshWidth = getWinWidth();

    var makeResponsive = (function(){
        

        
        var id = 0;
        var contextArray = [];
        var resizeDebTimeout;
        var assessAndStyleDebTimeout;
        var resizeDeb = debounce(300,null,function(timeout){
            resizeDebTimeout = timeout;
        });

        var assessAndStyleDeb = debounce(0,null,function(timeout){
            assessAndStyleDebTimeout = timeout;
        });

        var removeResponsiveClasses = function(context){
            var responsiveClasses = context.activeClass;
            for(var key in responsiveClasses){
                delete context.activeClass[key];
                vanilla.removeClass(docBody,'responsive_'+key);
            }
        };
        var nukeRemoveClassRegistry = function(){
            for(var i=0,l=contextArray.length;i<l;i++){
               removeResponsiveClasses(contextArray[i].context);
            }
        };
        var recursive = function(cb){
            var i=0;
            var l= contextArray.length;
            var r = function(){
                assessAndStyleDeb().then(function(){
                    contextArray[i].context.assessResponseiveClasses(() => {
                        i++;
                        if(i<l){
                            r();
                        } else {
                            cb();
                            bs.injectLaterScripts();
                        }
                    });
                    
                });
            };
            r();
        };


        window.refreshResponsive = !!window.refreshResponsive ? window.refreshResponsive : function(){
            docBody.style.opacity = '0';
            nukeRemoveClassRegistry();
            recursive(function(){
                docBody.style.opacity = '';
                vanilla.removeClass(docBody,'loadingAssets');
            });
            
        };

        
        window.addEventListener('resize', function(){
            var now = new Date();

            //scrolling triggers resize on some mobile browsers (minimizing url when not scrolled to top)
            //don't refresh under these conditions
            var newWindowHeight = getWinHeight() - window.bs.heightTweak;
            var newWindowWidth = getWinWidth();
            var threshTest = Math.abs(lastRefreshHeight - newWindowHeight) > 70;
            if(threshTest || lastRefreshWidth !== newWindowWidth){
                
                resizeDeb().then(function(){
                    clearTimeout(assessAndStyleDebTimeout);
                    refreshResponsive();
                })
            }
        }, false);
        var contextDict = {};
        var ElementResponsiveness = function(priority, $el,responsiveClasses,magicSquareFunction){
            this.id = id++;
            var self = this;
            this.responsiveClasses = responsiveClasses;
            if (contextDict[priority]) {
                throw new Error('Must set unique priority');
            }
            contextDict[priority] = this;
            contextArray = Object.keys(contextDict).reduce((accum, priority) => {
                accum.push({context: contextDict[priority], priority:priority});
                return accum;
            },[]).sort((a, b) => {
                return a.priority - b.priority;
            });
            // contextArray.push({context: this});
            this.$el = $el;
            this.magicSquareFunction = !!magicSquareFunction ? magicSquareFunction : null;
                        
            assessAndStyleDeb().then(function(){
                refreshResponsive();
            })
            this.activeClass = {};
            // return this;

        };
        ElementResponsiveness.prototype.removeResponsiveClasses = function(){
            for(var key in this.responsiveClasses){
                delete this.activeClass[key];
                vanilla.removeClass(docBody,'responsive_'+key);
            }
        };
        ElementResponsiveness.prototype.assessResponseiveClasses = function(next){
            var self = this;
            if(!this.magicSquareFunction){
                var width = this.$el.offsetWidth;
                var leastDif = Infinity;
                var breakPointNameFound = null;
                for(var key in this.responsiveClasses){
                    var breakPoint = this.responsiveClasses[key];
                    var dif = breakPoint - width;
                    if(dif > 0 && dif < leastDif){
                        leastDif = dif;
                        breakPointNameFound = key;
                    }
                }
                if(!!breakPointNameFound){
                    this.activeClass[breakPointNameFound] = true;
                    vanilla.addClass(docBody,'responsive_'+breakPointNameFound);
                }
            } else {
                var magicSquareResultClass = self.magicSquareFunction(self.$el);
                if(!!magicSquareResultClass){
                    this.activeClass[magicSquareResultClass] = true;
                    vanilla.addClass(docBody,'responsive_'+magicSquareResultClass);
                }
                
            }
            next();
        };

        ElementResponsiveness.prototype.makeResponsive = function(){
            return new makeFactory;
        };


        return (function() {
            function F(args) {
                return ElementResponsiveness.apply(this, args);
            }
            F.prototype = ElementResponsiveness.prototype;

            return function() {
                return new F(arguments);
            }
        })();




    })();

    var $mainSelfieFrame = document.getElementsByClassName('js_mainSelfieFrame')[0];
    var $rightPillar = document.getElementsByClassName('app_body_rightPillar')[0];

    var magicSquareFunction = function($el,marginY){
        var getDims = function($el){
            lastRefreshHeight = getWinHeight() - window.bs.heightTweak;
            lastRefreshWidth = getWinWidth();
            return{
                windowHeight:lastRefreshHeight,
                documentHeight:getDocumentHeight(),
                top:vanilla.offset($el).top
            }
        };
        var d = getDims($el);
        
        var heightVal = (d.windowHeight - d.top);
        
        var windowWidth = getWinWidth();
        var val;
        if(windowWidth < heightVal){
            val = windowWidth;
        } else {
            val = heightVal;
        }

        if(val <= windowWidth){
            var gap = d.windowHeight - (d.top + val);
            var margin = !!marginY ? marginY : 0;
            if(gap < margin){
                val -= (margin - gap);
            }
        }
        var min = 250;
        var toReturn = false;
        if(val < min){
            if(windowWidth >= min){
                val = min;
                
            } else {
                val = windowWidth;
            }
        }
        
        if(d.top + val + marginY > d.windowHeight){
            toReturn = 'windowVerticalTooSmall';
        }
        
            
        $el.style.height = val + 'px';
        $el.style.width = val + 'px';

        return toReturn;
    };
    var magicHeightSquare = makeResponsive(1,$mainSelfieFrame,{},function($el){
        magicSquareFunction($el)
    });
    
    var app_body_rightPillar_responsiveness2 = makeResponsive(2,$rightPillar,{
        noFloat:200,
    })
    xx = app_body_rightPillar_responsiveness2.activeClass;

    var magicHeightSquare = makeResponsive(3, $mainSelfieFrame,{},function($el){
        var margin = !!app_body_rightPillar_responsiveness2.activeClass.noFloat ? 75 : 0;
        return magicSquareFunction($el,margin);
    });

    var app_body_rightPillar_responsiveness = makeResponsive(4, $rightPillar,{
        singleCol:390,
        doubleCol:600
    });


});})();