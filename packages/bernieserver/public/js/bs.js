var templateBaseUrl = 'http://s3-us-west-1.amazonaws.com/bernieapp/decorations/';




var addClass= function(el,className){
    document.body
    if (el.classList)
      el.classList.add(className);
    else
      el.className += ' ' + className;
}
addClass(document.body,window.appMode === 'prod' ? 'prodMode' : 'devMode');

//=========================
//
// Money Patches
//
//-------------------------
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

//=========================
//
// App namespace
//
//-------------------------
window.bs = {};

//=========================
//
// Loading spinner
//
//-------------------------
window.bs.loader = (function(){
    var Loader = function(){
        this.el = $('body');
    };
    Loader.prototype.load = function(){
        this.el.addClass('spinnerShowing');
    };

    Loader.prototype.unload = function(){
        this.el.removeClass('spinnerShowing');
    };
    return new Loader();
})();

//=========================
//
// Utils
//
//-------------------------

window.bs.util = (function(){
    var BsUtil = function(){};
    BsUtil.prototype.getPageUrl = function(inputUrlInfoInfo){
        inputUrlInfoInfo = !!inputUrlInfoInfo ? inputUrlInfoInfo : window.urlInfo;
        return (window.location.protocol+'//'+window.location.host+inputUrlInfoInfo.pathname);
    };
    var $body;
    BsUtil.prototype.imgOnLoad = function(src){
        var dfd = jQuery.Deferred();
        var $img = $([
            '<img src ="',
            src,
            '" style="position:absolute;width:1px;height:1px;opacity:0;">'
        ].join(''));
        (!!$body ? $body : $('body')).append($img);
        $img.one('load',function(){
            dfd.resolve();
        }).error(function(){
            dfd.reject();
        });
        if($img[0].complete){
            $img.load();
        } 
        return dfd.promise();
    };
    return new BsUtil();
})();

//=========================
//
// Stats
//=========================
// mixpanel.track("mixpanel test");
window.bs.stat = function(){
    mixpanel.track.apply(null,arguments);
};

//=========================
//
// Feature detection
//
//-------------------------
window.bs.featureDetection = {
    is_touch_device: 'ontouchstart' in document.documentElement
}

window.bs.heightTweak = window.bs.featureDetection.is_touch_device ? 75  : 0;


//=========================
//
// Facebook integration
//
//-------------------------

window.bs.fbManager = (function(){
    var FbManager = function(){
        var self = this;
        this.attemptedAuth = false;
        self.urlToExport = null;
        this.asyncInitPromise = this.asyncInit();
    };

    FbManager.prototype.loadSdk = function(){
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    };

    FbManager.prototype.asyncInit = function(){
        var dfd = jQuery.Deferred();
        var self = this;
        if(!offline){
            window.fbAsyncInit = function() {
                FB.init({
                    appId: '1633460223596071',
                    cookie: true, // enable cookies to allow the server to access 
                    // the session
                    xfbml: true, // parse social plugins on this page
                    version: 'v2.2' // use version 2.2
                });

                dfd.resolve()
            };
            window.laterScripts.push(function(){
                self.loadSdk();
            });
        } else {
            setTimeout(function(){
                dfd.resolve()
            },300)
        }

        return dfd.promise()
    };

    FbManager.prototype.fbApi = function(){

        var dfd = jQuery.Deferred();
        Array.prototype.push.call(arguments,function(response) {
            if (response && !response.error) {
                dfd.resolve.apply(null, arguments);
            } else {
                dfd.reject.apply(null, arguments);
            }
        });
        FB.api.apply(null,arguments);

        return dfd.promise();
    };

    FbManager.prototype.uploadPhoto = function(response){
        return this.fbApi(
            "/" + response.id + "/photos",
            "post", {
                url: this.urlToExport
            }
        );
    }

    FbManager.prototype.getMyInfo = function() {
        var toReturn;
        if(!offline){
            toReturn =  this.fbApi(
                '/me'
            );
        } else {
            var dfd = jQuery.Deferred();
            setTimeout(function(){
                dfd.resolve({});
            },500);
            toReturn = dfd.promise();
        }
        return toReturn;
    };

    FbManager.prototype.getPhotos = function(response) {
        var toReturn;
        if(!offline){
            toReturn = this.fbApi(
                 "/" + response.id + "/photos"
            );
        } else {
            var dfd = jQuery.Deferred();
            var fakeData = [];
            for(var i=1,l=6;i<l;i++){
                fakeData.push({
                    images:[
                        {source:'/images/mock-fb-image'+i+'.jpg'}
                    ]
                })
            }
            setTimeout(function(){
                dfd.resolve({
                    data:fakeData
                });
            },500);
            toReturn = dfd.promise();
        }

        return toReturn
    };

    FbManager.prototype.login = function(response) {
        var dfd = jQuery.Deferred();
        if(!offline){
            FB.login(function(response) {
                if (response.status === 'connected') {
                    dfd.resolve.apply(null,arguments);
                } else {
                    dfd.reject.apply(null,arguments);
                }                    
            }, {
                scope: 'public_profile,email,user_photos,publish_actions'
            });
        } else {
            dfd.resolve();
        }
        return dfd.promise();
    };
    

    FbManager.prototype.statusChangeCallback = function(response) {
        var dfd = jQuery.Deferred();
        var self = this;
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            dfd.resolve.apply(null,arguments);
        } else if(!self.attemptedAuth) {
            self.attemptedAuth = true;
            FB.login(function(response) {
                if (response.status === 'connected') {
                    console.log('fb connected')
                    dfd.resolve.apply(null,arguments);
                } else {
                    console.log('fb not connected')
                    dfd.reject.apply(null,arguments);
                }                    
            }, {
                scope: 'public_profile,email,user_photos,publish_actions'
            });
        } else {
            dfd.reject.apply(null,arguments);
        }
        return dfd.promise();
    }
    //.then(function(){self.photosJunk();});
    FbManager.prototype.fbGetLoginStatus = function(dfd){
        dfd = !!dfd && !!dfd.then ? dfd : jQuery.Deferred();
        var self = this;
        FB.getLoginStatus(function(response) {

            self.statusChangeCallback(response)
            .then(function(response){
                dfd.resolve();
            })
            .fail(function(response){
                if (response.status === 'not_authorized') {
                    // The person is logged into Facebook, but not your app.
                    // document.getElementById('status').innerHTML = 'Please log into this app.';
                    console.log('Please log into this app.')
                    if(!self.attemptedAuth){
                        self.fbGetLoginStatus(dfd);
                    } else {
                        dfd.reject.apply(null,arguments);
                    }
                } else {
                    // The person is not logged into Facebook, so we're not sure if
                    // they are logged into this app or not.
                    // document.getElementById('status').innerHTML = 'Please log into Facebook.';
                    console.log('Please log into Facebook.');
                    dfd.reject.apply(null,arguments);

                }
            })            
        });
        return dfd.promise();
    };

    FbManager.prototype.postToWall = function(){
        bs.loader.load();
        var self = this;
        return this.asyncInitPromise
        .then(function(){
            FB.ui({
                method: 'share',
                href: bs.util.getPageUrl()
            }, function(response) {
                console.log('DONE');
            });

        })
        .always(function(){
            bs.loader.unload();
        })
    };

    FbManager.prototype.importStuff = function(){
        bs.loader.load();
        var self = this;
        this.attemptedAuth = false;
        return this.asyncInitPromise
        .then(self.login.bind(self))
        .then(self.getMyInfo.bind(self))
        .then(self.getPhotos.bind(self))
        .always(function(){
            bs.loader.unload();
        })
    };

    FbManager.prototype.exportStuff = function(url){
        bs.loader.load();
        var self = this;
        this.attemptedAuth = false;
        self.urlToExport = url;
        return this.asyncInitPromise
        .then(self.login.bind(self))
        .then(self.getMyInfo.bind(self))
        .then(self.uploadPhoto.bind(self))
        // .fail(self.statusChangeCallback.bind(self))
        .then(self.getMyInfo.bind(self))
        .then(self.uploadPhoto.bind(self))
        .fail(function(){
            alert('sorry, that did not work');
        })
        .always(function(){
            self.urlToExport = null;
            bs.loader.unload();
        })
    };

    return new FbManager();
})();


var parseId = function(public_id){
    var idX
    if(!!public_id){
        idX = public_id.indexOf('/') !== -1 ? public_id.split('/')[1] : public_id;
    } else {
        idX = '';
    }
    return idX;
};

window.bs.injectLaterScripts = function(){
    if(window.laterScripts.length > 0){
        for(var ii = 0,ll = window.laterScripts.length ; ii<ll;ii++){
            window.laterScripts[ii]();
        }
    }
    window.laterScripts = [];
};

window.bs.debounce = function(wait, immediate, cb) {
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



window.bs.setupNewModalManager = function($parentToInject){


    var ModalManager = function($parentToInject){
        var self = this;
        this.$parentToInject = $parentToInject;
        this.debounce = bs.debounce(100,null,function(timeout){
            // resizeDebTimeout = timeout;
        });
        this.modalOpenCbRegistry = [];
        this.methodRegistry = {};
        this.modalOpenCb = function(){
            var reg = self.modalOpenCbRegistry;
            for(var i = reg.length; i--; ){
                if(!!reg[i]()){
                    reg.splice(i,1);
                }
            }
        };
    };
    ModalManager.prototype.registerModalOpenCb = function(cb){
        this.modalOpenCbRegistry.push(cb);
    };

    ModalManager.prototype.processAndNavigateAfterCropModal = function(data){
        var crop = data.crop;
        var mode = typeof data.mode !== 'undefined' ? data.mode : urlInfo.mode;

        var urlInfoDeriver = mymodule.deriveUrlInfo({pathname: urlInfo.pathname, nameSpace: 'bernieBackend'} );
        var settings = {
            x:crop.x,
            y:crop.y,
            cropWidth:crop.cropWidth,
            cropHeight:crop.cropHeight,
            width:data.width,
            height:data.height,
            idX:data.idX,
            mode:mode
        }
        if(!!data.customTemplate){
            settings.customTemplate = data.customTemplate;
        }
        var finish = function(){
            urlInfoDeriver.makeCustomUrl(settings);
            var newUrl = (window.location.protocol+'//'+window.location.host+urlInfoDeriver.pathname);
            window.location.href = newUrl + window.location.search;
        };
        if(window.appMode === 'prod'){
            mixpanel.track('crop complete',{},function(){
                finish();
            });
        } else {
            finish();
        }
    };

    ModalManager.prototype.generateCropModal = function(s){
        //rawImage, forceMode, customTemplate
        this.initiateCropModal(s).then(this.processAndNavigateAfterCropModal);
    };


    ModalManager.prototype.cloneModal = function(options){
        this.modalOpenCb();
        var settings = $.extend({
            close: function(){}
        },options);
        var dfd = jQuery.Deferred();
        var self = this;
        var $modal = $(['<div class="modal designModal">',
            '<div class="closeButton button"><span>X</span></div>',
        '</div>'].join(''));
        // $modal.append(options.clone.wrap('<div>').parent().html());
        $modal.append(options.clone);

        var $closeButton = $modal.find('.closeButton');
        
        $closeButton.on('click',function(){
            $modal.remove();
            if(!!settings.options && !!settings.options.closeGoesToCropModal){
                self.initiateCropModal.call(self,settings.options);
            }else{
                settings.close();
            }
            
        });
        !!settings.options && !!settings.options.almostInjectedCb ? settings.options.almostInjectedCb($modal) : null;
        self.$parentToInject.append($modal);
        return {
            promise:dfd.promise(),
            finish:function(){
                $modal.remove();
            }
        }
    };
    ModalManager.prototype.templateImportModal = function(options){
        this.modalOpenCb();
        var settings = $.extend({
            close: function(){}
        },options);
        var dfd = jQuery.Deferred();
        var self = this;
        var $modal = $([
            '<div class="modal designModal">',
                '<div class="closeButton button"><span>X</span></div>',
                '<div class="textContainer">',
                    '<h2>Upload a template</h2>',
                    '<p>Upload an image with the following specs.  Then you and other users can use it as a template to enhance selfies!</p>',
                    '<p>Your template image must be:</p>',
                    '<ul>',
                    '<li>a .png or .jpg file</li>',
                    '<li>a square (width and height are equal)</li>',
                    '<li>smaller than 5mb</li>',
                    '</ul>',
                    '<p>TIP: Make your template a .png file with transparent areas so users can combine their photos with your template.</p>',
                 '</div>',
                 '<div class="inputContainer">',
                    '<div class="button mainButton templateUploadizer"><span>Upload a template</span></div>',
                '</div>',
        '</div>'].join(''));



        

        bs.uploadizer($modal.find('.templateUploadizer'),{
            success:function(response){
                if(!response.failingSquare){
                    setTimeout(function(){


                        // var data = {
                        //     created:new Date(result.created_at),
                        //     customTemplate: response.customTemplate,
                        //     templateHeight: result.height,
                        //     templateWidth: result.width
                        // };
                        var urlInfoDeriver = mymodule.deriveUrlInfo({pathname: urlInfo.pathname, nameSpace: 'bernieBackend'});
                        urlInfoDeriver.makeCustomUrl({
                            mode:'ut',
                            customTemplate: response.Key.replace('.png','').replace('decorations/','')
                        });
                        window.location.href = urlInfoDeriver.pathname + window.location.search;

                        // window.location.href = bs.util.getPageUrl();
                    },500);
                } else {
                    alert('not square');
                }
                
                // var formattedResponse = modalManager.formatUrlAndResponseForCropModal(response);
            }
        },'decorations',true);


        

        var $closeButton = $modal.find('.closeButton');
        $closeButton.on('click',function(){
            settings.close();
            $modal.remove();
        });


        self.$parentToInject.append($modal);
        return {
            promise:dfd.promise(),
            finish:function(){
                $modal.remove();
            }
        }
    };

    ModalManager.prototype.urlImportModal = function(options){
        this.modalOpenCb();
        var settings = $.extend({
            close: function(){}
        },options);
        var dfd = jQuery.Deferred();
        var self = this;
        var $modal = $([
            '<div class="modal designModal">',
                '<div class="closeButton button"><span>X</span></div>',
                '<h2>Enter the URL to an Image</h2>',
                '<div class="inputContainer">',
                    '<input class="textInput urlInput">',
                '</div>',
                '<div class="modal_buttonGroup">',
                    '<div class="button mainButton urlUploadizerDone"><span>Done</span></div>',
                '</div>',
            '</div>'].join(''));

        var $urlInput = $modal.find('.urlInput');
        var $doneButton = $modal.find('.urlUploadizerDone');
        var $closeButton = $modal.find('.closeButton');
        $doneButton.on('click',function(){
            var url = $urlInput.val();
            url = !!url ? url : 'http://i.imgur.com/ufyLzzQ.jpg';
            bs.loader.load()
            var imgOnLoadPromise = bs.util.imgOnLoad(url)
            .then(function(){
                bs.loader.unload()
                dfd.resolve(url);
            });
            imgOnLoadPromise.fail(function(){
                alert('Error  That URL might be bad or maybe you have a connection issue.')
                bs.loader.unload()
            });
            
            
        });
        $closeButton.on('click',function(){
            settings.close();
            $modal.remove();
        });


        self.$parentToInject.append($modal);
        return {
            promise:dfd.promise(),
            finish:function(){
                $modal.remove();
            }
        }
    };

    ModalManager.prototype.fbImportModal = function(s){
        this.modalOpenCb();
        var fbImportResponse = s.fbImportResponse;

        
        var dfd = jQuery.Deferred();
        var self = this;
        var $closeButton = $('<div class="closeButton button"><span>X</span></div>');
        var $modal = $('<div class="modal designModal"></div>');
        $modal.append($closeButton)
        $modal.append('<h2>Pick a photo</h2>');
        var $imageOptions = $('<div class="imageOptions"></div>');

        var imgsHtml = ''; 

        var archive = fbImportResponse.data;
        for (var i = 0, l = archive.length; i < l; i++) {
            var url = archive[i].images[0].source;
            imgsHtml += '<img class="photoImg" src="' + url + '">';
        }

        $imageOptions.append(imgsHtml)

        $imageOptions.find('img');

        $imageOptions.find('img').on('click',function(){
            var $this = $(this);
            var url = $this.attr('src');
            dfd.resolve(url);
        })

        $modal.append($imageOptions);
        this.$parentToInject.prepend($modal);

        $closeButton.on('click',function(){
            s.close();
            $modal.remove();
        });

        return {
            promise:dfd.promise(),
            finish:function(){
                $modal.remove();
            }
        }
    };

    ModalManager.prototype.webcamImportModal = function(s){
        this.modalOpenCb();
        var dfd = jQuery.Deferred();
        var self = this;
        var $modal = $(['<div class="modal designModal">',
            '<div class="closeButton button"><span>X</span></div>',
            '<h2>Take a photo</h2>',
            '<div id="my_camera" style="width:320px; height:240px; margin:0 auto; padding-bottom:1em;"></div>',
            '<div id="my_result"></div>',
            '<div class="modal_buttonGroup">',
            '<div class="button mainButton webcamizerTakePhoto"><span>Done</span></div>',
            '</div>',
        '</div>'].join(''));
        self.$parentToInject.append($modal);

        var $closeButton = $modal.find('.closeButton');

        Webcam.setSWFLocation('/js/webcam.swf');
        Webcam.set({
            dest_width:640,
            dest_height:480,
        })
        Webcam.attach( '#my_camera' );

        Webcam.on('live',function(){
            console.log('LIVE')
        });
        Webcam.on('error',function(){
             console.log('ERROR');
             dfd.reject.apply(null,arguments);
            
            
        });
        $modal.on('destroyed',function(){
            Webcam.off('live')
            Webcam.off('error')
        });


        $modal.find('.webcamizerTakePhoto').on('click',function(){
            Webcam.snap( function(data_uri) {
                dfd.resolve(data_uri);
            });
        });

        $closeButton.on('click',function(){
            s.close();
            $modal.remove();
        });

        

        return {
            promise:dfd.promise(),
            finish:function(){
                $modal.remove();
            }
        }
    };

    

    ModalManager.prototype.formatUrlAndResponseForCropModal = function(response,url){
        response = !!response ? response : {
            width: 500,
            height: 500,
            public_id:'/asdf/qwer',
            url:'/images/mock-selfie-raw.jpg'
        };
        response = !!response[0] ? response[0] : response;
        response = !!response.result ? response.result : response;
        var width = response.width;
        var height = response.height;
        var idX = parseId(response.public_id);
        var rawImage = !!url ? url : response.url;
        return {
            rawImage:rawImage,
            width:width,
            height:height,
            idX:idX,
            raw:response  
        };
    };

    ModalManager.prototype.uploadDataUriAndFormatResponseForCropModal = function(data_uri){
        var dfd = jQuery.Deferred();
        var self = this;
        bs.loader.load();
        if(!offline){
            Webcam.upload(data_uri, '/bernieBackend/uploadsimple', function(code, result) {
                if(code === 200){
                    result = JSON.parse(result);
                    var formattedResponse = self.formatUrlAndResponseForCropModal({result:result});
                    bs.loader.unload();
                    dfd.resolve(formattedResponse);
                }
            });
        } else {
            setTimeout(function(){
                var formattedResponse = self.formatUrlAndResponseForCropModal();
                bs.loader.unload();
                dfd.resolve(formattedResponse);
            },1000);
            
        }

        return dfd.promise();
    };

    ModalManager.prototype.uploadUrlAndFormatResponseForCropModal = function(url){
        var dfd = jQuery.Deferred();
        var self = this;
        bs.loader.load();
        if(!offline){
            bs.s3Stuff.getNormalizedImageInfo(url)
            .then(function(response){
                var formattedResponse = self.formatUrlAndResponseForCropModal(response,response.url);
                dfd.resolve(formattedResponse);
            })
            .always(function(){
                bs.loader.unload();
            }).fail(function(){
                console.log('fail',arguments);
            });
        }else{
            setTimeout(function(){
                var formattedResponse = self.formatUrlAndResponseForCropModal();
                bs.loader.unload();
                dfd.resolve(formattedResponse);
            },1000);
        }
        return dfd.promise();
    };
    ModalManager.prototype.customizeCropModalSettingsForTemplateSelection = function($el,settings){
        settings = !!settings ? settings : {};
        settings.rawImage = !!settings.rawImage ? settings.rawImage : urlInfo.rawImage;
        var src = $el.attr('src');
        var customTemplate = src.split('/');
        customTemplate = customTemplate[customTemplate.length - 1];
        customTemplate = customTemplate.replace('.png','');
        if($el.hasClass('standardTemplate')){
            settings.forceMode = customTemplate;
            settings.customTemplate = null;
        }else{
            settings.forceMode = 'ut';
            settings.customTemplate = customTemplate;

        }  
        return settings;
    };
    
    ModalManager.prototype.designModal = function(options){
        this.modalOpenCb();
        var dfd = jQuery.Deferred();
        var self = this;

        //template
        var $modal = $('<div class="modal designModal"></div>');
        var $closeButton = $('<div class="closeButton button"><span>X</span></div>');
        $modal.append($closeButton);
        var $uploadStuff = $([
            '<div class="modalFooter clearfix">',
                '<div class="footer_section">',
                    '<div class="button"><span>upload a template</span></div>',
                '</div>',
            '</div>'
        ].join(''));
        var $uploadTemplateButton = $uploadStuff.find('.button')
        $modal.append($uploadStuff);
        $modal.append('<h2>Pick a design</h2>');
        var $imageOptions = $('<div class="imageOptions"></div>');
        var imgsHtml = ''; 
        imgsHtml = mymodule.generateTemplateImgListHtml(userTemplates,offline);
        $imageOptions.append(imgsHtml);
        //

        $imageOptions.find('img').on('click',function(){
            var $this = $(this);
            
            self.customizeCropModalSettingsForTemplateSelection($this,options);
             
            $modal.remove();
            self.generateCropModal.call(self,options);
            
        })

        $closeButton.on('click',function(){
            $modal.remove();
            if(!!options.closeGoesToCropModal){
                self.initiateCropModal.call(self,options);
            }else{
                options.close();
            }
            
        });

        $uploadTemplateButton.on('click',function(){
            $modal.remove();
            self.templateImportModal(options);
        });



        $modal.append($imageOptions);
        this.$parentToInject.prepend($modal);

        return dfd.promise();
    };

    ModalManager.prototype.register = function(methodName,method){
        this.methodRegistry[methodName] = method;
    };


    //initiateCropModal is clean.  can be added to bs or whatever
    
    ModalManager.prototype.initiateCropModal = function(s){//(rawImage,forceMode,customTemplate,dfd,settings)
        this.modalOpenCb();
        var rawImage = s.rawImage;
        var forceMode = s.forceMode;
        var customTemplate = s.customTemplate;
        var dfd = s.dfd;
        var close = s.close;
        s.closeGoesToCropModal = true;

        if(!!forceMode){
            if(forceMode !== 'ut'){
                customTemplate = null;
                delete urlInfo.customTemplate;
            }
        } else if (!!urlInfo.customTemplate){
            customTemplate = urlInfo.customTemplate;
        } else {
            delete urlInfo.customTemplate;
        }
        dfd = !dfd ? jQuery.Deferred() : dfd;
        s.dfd = dfd;
        var self = this;
        rawImage = rawImage ? rawImage : 'http://i.imgur.com/7lvXeOy.png';;
        if(rawImage.split('/').pop().indexOf('.') === -1){
            rawImage += '.png';
            s.rawImage = rawImage;
        }
        this.initiateCropModalArgumentCache = s;

        //GENERATE MODAL DOM
        var $modal = $('<div class="modal cropModal" style="opacity:0;"></div>');
        var $closeButton = $('<div class="closeButton button"><span>X</span></div>');
        $modal.append($closeButton);
        var headerText = 'Crop inside the box.  Pinch and drag.'
        headerText = bs.featureDetection.is_touch_device ? headerText : 'Drag and resize the box to crop';
        var $modalHeader= $('<div class="modalHeader clearfix">');
            var $doneSection = $('<div class="doneSection"><h2>'+headerText+'</h2></div>');
                var $buttonGroup = $('<div class="modal_buttonGroup"></div>');
                    var $cropDoneButton = $('<div class="button mainButton cropDoneButton"><span>Done</span></div>');
                $buttonGroup.append($cropDoneButton);
                $doneSection.append($buttonGroup);
            $modalHeader.append($doneSection);
        var $cropOuterContainer = $('<div class="cropOuterContainer"></div>');
        var $cropContainer = $('<div class="cropContainer"></div>');
        var $img = $('<img src= "'+rawImage+'">');
        $cropContainer.append($img);
        var $modalFooter= $('<div class="modalFooter clearfix">');
            var $imageOptions = $('<div class="footer_section footer_imageOptions"><h3>Change design</h3></div>');
                ;(function(){
                    var $options = mymodule.generateTemplateImgListHtml([],offline);
                    $imageOptions.append($options);
                    $imageOptions.append('<div class="moreimageOptions button"><span class="macro">more options</span><span class="micro">change design</span></div>');
                })();
            $modalFooter.append($imageOptions);
            $modalFooter.append('<div class="footer_section"><h3>&nbsp;</h3><div class="designFrame designFrame-empty"></div><div class="getPhotoButton button"><span>get photo</span></div></div>')
        $cropOuterContainer.append($cropContainer);        
        
        $modal.append($modalFooter);
        $modal.append($cropOuterContainer);
        $modal.append($modalHeader);

        var $getPhotoButton = $modal.find('.getPhotoButton')
        
        //----------


        var mode = !mymodule.isOldMode(urlInfo.mode) ? urlInfo.mode : 'wg';
        mode = !forceMode ? mode : forceMode;
        var displayId = mode;
        mode = !customTemplate ? mode : 'ut';
        displayId = mode !== 'ut' ? displayId : customTemplate;
        
        var $window = $(window);
        var windowHeight = null;
        var containerHeight = null;
        var cropSettingToUse = {
            x:0,
            y:0,
            cropWidth:400,
            cropHeight:400
        }
        var isTemplateMode = true;
        var $sample;
        var resetCropper = function(){
            self.debounce().then(function(){
                $modal.css({
                    'opacity':0
                })
                $img.cropper('destroy');

                windowHeight = $window.height() - window.bs.heightTweak;
                var headerHeight = $modalHeader.outerHeight();
                var footerHeight = $modalFooter.outerHeight();
                
                containerHeight = (windowHeight - headerHeight) - footerHeight;
                // containerHeight -= 20;

                $cropContainer.css({
                    height:containerHeight + 'px'
                });
                $modal.css({
                    height:windowHeight + 'px'
                });

                var doCssOnSample;
                var $cropperViewBox = $();
                
                if(isTemplateMode){
                    !!$sample ? $sample.remove() : null;
                    $sample = $('<img style="width:100px;height:100px;position:absolute;top:0;left:0;z-index:4" src="' + templateBaseUrl +displayId+'.png">');                
                    doCssOnSample = function(){
                        var boxGeo = $img.cropper('getCropBoxData');
                        $sample.css({
                            width:boxGeo.width +'px',
                            height:boxGeo.height +'px',
                            left:boxGeo.left +'px',
                            top:boxGeo.top +'px',
                        });
                        $cropperViewBox.css({
                            opacity:0
                        });
                    };
                }

                $modal.append($sample)
                setTimeout(function(){
                    var options = {
                        mouseWheelZoom:false,
                        aspectRatio: 1/1,
                        responsive:true,
                        guides:false,
                        autoCropArea:.9,
                        rotatable:false,
                        crop: function(data) {
                            var result = {
                                x:data.x,
                                y:data.y,
                                cropWidth:data.width,
                                cropHeight:data.height
                            };
                            cropSettingToUse = result;
                            
                            if(isTemplateMode){
                                doCssOnSample();
                            }
                        }
                    };
                    options.strict = false;
                    

                    if(bs.featureDetection.is_touch_device){
                        $.extend(options,{
                            mouseWheelZoom:false,
                            cropBoxMovable:false,
                            movable:true,
                            cropBoxResizable:false,
                            dragCrop:false,
                            minCropBoxWidth:$window.width() -20
                        })
                    }

                    $img.cropper(options);
                    window.cropy = $img;

                    $img.one('built.cropper',function(){
                        // $img.cropper('move', urlInfo.x, urlInfo.y);
                        if(!bs.featureDetection.is_touch_device){
                            $img.cropper('setData', {
                                x:urlInfo.x,
                                y:urlInfo.y,
                                width:urlInfo.cropWidth,
                                height:urlInfo.cropHeight
                            });
                        }
                        var $widgetContainer = $cropContainer.find('.cropper-container');
                        $cropContainer.find('.cropper-crop-box').css('z-index',6);



                        $cropperViewBox = $cropContainer.find('.cropper-view-box');
                        if(isTemplateMode){
                            doCssOnSample();
                        }

                        $widgetContainer.prepend($sample)


                        $modal.css({
                            'opacity':''
                        });
                    });
                },100)
            })
        };

        $window.on('resize.modalResize',function(){
            resetCropper();
        });

        $modal.on('destroy',function(){
            $window.off('resize.modalResize');
        });


        $imageOptions.find('img').on('click',function(){
            var $this = $(this);
            var src = $this.attr('src');
            var newMode = src.split('/');
            newMode = newMode[newMode.length - 1];
            newMode = newMode.replace('.png','');

            if($this.hasClass('userTempalte')){
                customTemplate = newMode;
                newMode = 'ut';
            } else {
                delete customTemplate;
                displayId = newMode;
            }
            
            mode = newMode;
            resetCropper();
        })

        $imageOptions.find('.moreimageOptions').on('click',function(){
            $modal.remove();
            // self.designModal();
            self.designModal(s);
            /*

            {
            rawImage:urlInfo.rawImage,
            close:standardClose
            }
            */
        });

        self.$parentToInject.prepend($modal);

        resetCropper();

        $cropDoneButton.on('click',function(){
            var toResolve = {
                rawImage:rawImage,
                crop:cropSettingToUse,
                $modal:$modal,
                mode:mode,
                width:s.width,
                height:s.height,
                idX:s.idX

            };
            if(!!customTemplate){
                toResolve.customTemplate = customTemplate;
            }
            dfd.resolve(toResolve);
        });

        $closeButton.on('click',function(){
            close();
            $modal.remove();
        });

        $getPhotoButton.on('click',function(){
            $modal.remove();
            if(!!self.methodRegistry.photoModal){
                self.methodRegistry.photoModal(s)
            } else{
                throw ' ERROR: register a photoModal';
            }

        });

        return dfd.promise();
    };
    return new ModalManager($parentToInject);
};

window.bs.uploadizer = (function(){
    var uploadizerId = 0;
    var Uploadizer = function($el,ajaxOptions,folder,mustBeSquare){
        this.mustBeSquare = mustBeSquare;
        this.id = 'uploadizerId_' + (uploadizerId++);
        this.folder = folder;
        this.$el = $el;
        this.text = $el.text();
        this.$el.html('');
        this.$form = $('<form></form>')
        this.$input = $('<input id="'+this.id+'" class="fileInput" type="file" name="someInputUploadName"/>');
        this.$label = $('<label for="'+this.id+'">'+this.text+'</label>');        
        this.$el.append(this.$form);
        this.$form.append(this.$input);
        this.$form.append(this.$label);
        this.ajaxOptions = !!ajaxOptions ? ajaxOptions : {};
        this.dfd = jQuery.Deferred();
        this.bind();
    };
    Uploadizer.prototype.bind = function(){
        var self = this;

        self.$input.on('change',function(e){
            bs.loader.load();
            // var formData = new FormData(self.$form[0]);
            // jQuery.each(jQuery('.upload')[0].files, function(i, file) {
            //     formData.append('file-'+i, file);
            // });
            var myAjax;
            if(!offline){
                console.log('!!!',self.$input,self.folder,self.mustBeSquare)
                myAjax = window.bs.s3Stuff.initUpload(self.$input,self.folder,self.mustBeSquare);
                if(self.ajaxOptions.success){
                    myAjax.success(self.ajaxOptions.success);
                }
                if(self.ajaxOptions.error){
                    myAjax.error(self.ajaxOptions.error);
                }
            } else {
                myAjax = {
                    success:function(cb){
                        setTimeout(function(){
                            if(!!self.ajaxOptions && !!self.ajaxOptions.success){
                                self.ajaxOptions.success();
                            }
                            cb();
                        },1000);
                    },
                    error:function(){}
                };
            }
            myAjax.success(function(){
                bs.loader.unload();
            });
            myAjax.error(function(){
                bs.loader.unload();
            });
            
        });
    };

    var UploadizerFallback = function($el,ajaxOptions){
        this.$el = $el;
        this.text = $el.text();
        this.$el.wrapInner('<div style="display:none;"></div>');
        // this.$el.html('');
        this.$iframe = $('<iframe class="uploadButtonIframe" src="/iframeuploadbutton?'+$.param({buttonText:this.text})+'" frameborder="0" allowfullscreen></iframe>')
        this.$el.append(this.$iframe);
        this.ajaxOptions = !!ajaxOptions ? ajaxOptions : {};
        this.dfd = jQuery.Deferred();
        this.bind();
    };
    UploadizerFallback.prototype.bind = function(){
        var self = this;
        this.$iframe.on('load',function(){
            var lastData = self.$iframe.contents().find(".lastData").html();
            lastData = !!lastData ? JSON.parse(lastData) : null;
            if(!!lastData){
                !!self.ajaxOptions.success ? self.ajaxOptions.success(lastData) : null;
            }
        })
    };

    return function($el,ajaxOptions,folder,mustBeSquare){
        var ClassTypeToReturn = !!window.FormData ? Uploadizer : UploadizerFallback;
        ClassTypeToReturn = !!iframebutton ? UploadizerFallback : ClassTypeToReturn;

        return new ClassTypeToReturn($el,ajaxOptions,folder,mustBeSquare);
        // return new Uploadizer($el,ajaxOptions)
        // return new UploadizerFallback($el,ajaxOptions)
    };




   

})();
//=============
//=============
//=============
//=============
//=============
window.bs.s3Stuff = (function(){
    function upload_file(file, signed_request, url, response){
        console.log(1,file,signed_request);
        var dfd = jQuery.Deferred();
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", signed_request);
        xhr.setRequestHeader('x-amz-acl', 'public-read');
        xhr.onload = function() {
            if (xhr.status === 200) {
                dfd.resolve(url);
            } else {
                dfd.reject("upload_file failed");
            }
        };
        xhr.onerror = function() {
             dfd.reject("upload_file failed - error");
            // alert("Could not upload file."); 
        };
        xhr.send(file);
        return dfd.promise();
    }

    /*
        Function to get the temporary signed request from the app.
        If request successful, continue to upload the file using this signed
        request.
    */
    function get_signed_request(file,folder,mustBeSquare){
        console.log(2,"/bernieBackend/get_s3_signed_upload_url?file_name="+filename+"&file_type="+file.type);
        folder = !!folder ? folder : 'selfies';
        var dfd = jQuery.Deferred();
        var xhr = new XMLHttpRequest();
        var filename = file.name;
        filename = folder + '/' + filename;
        xhr.open("GET", "/bernieBackend/get_s3_signed_upload_url?file_name="+filename+"&file_type="+file.type);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    console.log(xhr.responseText);
                    var response = JSON.parse(xhr.responseText);
                    console.log('responseresponseresponse',response);
                    upload_file(file, response.signed_request, response.url, response).then(getNormalizedImageInfo(mustBeSquare)).then(dfd.resolve);
                }
                else{
                    var response = JSON.parse(xhr.responseText);
                    var message = "There was a problem.  Try again.";
                    message = response.message ? response.message : message;
                    message = "Error.: " + message
                    dfd.reject(message);
                    alert(message);
                }
            }
        };
        xhr.send();
        return dfd.promise();
    }

    function getNormalizedImageInfo(mustBeSquare){
        return function(image_url){
            console.log(3,"/get_normalized_image_info?image_url="+encodeURIComponent(image_url)+"&must_be_square="+mustBeSquare);
            var dfd = jQuery.Deferred();
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "/bernieBackend/get_normalized_image_info?image_url="+encodeURIComponent(image_url)+"&must_be_square="+mustBeSquare);
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        var response = JSON.parse(xhr.responseText);
                        if(response.failingSquare){
                            dfd.resolve(response)
                        } else {
                            var public_id = response.url.split('/');
                            public_id = public_id.pop();
                            dfd.resolve({
                                width: response.width,
                                height: response.height,
                                public_id: public_id,
                                url: response.url,
                                Key:response.Key,
                                failingSquare:response.failingSquare
                            });
                        }
                        
                    } else{
                        var response = JSON.parse(xhr.responseText);
                        var message = "There was a problem.  Try again.";
                        message = response.message ? response.message : message;
                        message = "Error: " + message
                        dfd.reject(message);
                        alert(message);

                    }
                }
            };
            xhr.send();
            return dfd.promise();
        }
    }

    /*
       Function called when file input updated. If there is a file selected, then
       start upload procedure by asking for a signed request from the app.
    */
    function init_upload($el,folder,mustBeSquare){
        var file = null;
        if($el && $el[0] && $el[0].files && $el[0].files[0]){
            file = $el[0].files[0];
        }
        
        if(file === null){
            alert("No file selected.");
            return;
        }
        var promise = get_signed_request(file,folder,mustBeSquare);

        return {
            success: promise.then,
            error: promise.fail
        }
    }

    return {
        initUpload:init_upload,
        getNormalizedImageInfo:getNormalizedImageInfo(false)
    }
})();

    