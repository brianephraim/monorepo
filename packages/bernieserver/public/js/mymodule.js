;var mymoduleName = 'mymodule';


var templateBaseUrl = 'http://s3-us-west-1.amazonaws.com/bernieapp/decorations/';

var rawImagePrefix = 'http://s3-us-west-1.amazonaws.com/bernieapp/selfies/';


var isNode= (function(){
	var isNode = false;    
	if (typeof process === 'object') {
	  if (typeof process.versions === 'object') {
	    if (typeof process.versions.node !== 'undefined') {
	      isNode = true;
	    }
	  }
	}
	return isNode;
})();

;(function(exports){

	var standardModes = [
		{
			mode:'f',
			featured:false,
			old:true
		},
		{
			mode:'ut',
			featured:false
		},
		{
			mode:'b',
			featured:false,
			old:true
		},
		{
			mode:'h',
			featured:false,
			old:true
		},
		{
			mode:'selfie',
			featured:false,
			old:true
		},
		{
			mode:'h3',
			featured:true
		},
		{
			mode:'h4',
			featured:true
		},
		{
			mode:'wg',
			featured:true
		}
	];
	exports.standardModes = standardModes;
	exports.getStandardModesRegex = function(nameSpace){
		var pipedString = ''
		for(var i =0,l=exports.standardModes.length;i<l;i++){
			var mode = exports.standardModes[i].mode;
			mode = nameSpace ? (nameSpace + '\/' + mode) : mode;
			console.log('mode',mode);
			pipedString += i > 0 ? ('|' + mode) : mode;

		}
		return new RegExp('^[/]('+pipedString+')[/](.+)');
	};

	exports.oldModes = (function(){
		var a = []
		for(var i =0,l=exports.standardModes.length;i<l;i++){
			if(!!exports.standardModes[i].old){
				a.push(exports.standardModes[i]);
			}
		}
		return a;
	})();

	exports.isOldMode = function(toCompare){
		var is = false;
		for(var i =0,l=exports.oldModes.length;i<l;i++){
			is = is || toCompare === exports.oldModes[i].mode;
		}
		return is;
	};

	var containsStardardModeCache = {};
	exports.containsStardardMode = function(url){
		var contains = false;
		if(typeof containsStardardModeCache[url] === 'undefined'){
			for(var i =0,l=exports.standardModes.length;i<l;i++){
				var mode = exports.standardModes[i].mode;
				contains = contains || url.indexOf(mode) !== -1;
			}
			containsStardardModeCache[url] = contains;
		}
		return containsStardardModeCache[url];
	};

	

	var DeriveUrlInfo = function({pathname,offline,nameSpace}){
		this.init({pathname,offline,nameSpace})
		
		
	};
	DeriveUrlInfo.prototype.init = function({pathname,offline,nameSpace}){
		this.nameSpace = nameSpace;
		this.nameSpaceWithLeadingSlash = nameSpace ? `/${nameSpace}` : '';
		var nameSpaceWithLeadingSlash = this.nameSpaceWithLeadingSlash;
		this.offline = offline;
		var defaultPathname = '/h3/zephyr1476401787491/180_3_218_218_553_553/';
		pathname = !!pathname !== 0 ? pathname : defaultPathname;
		pathname = pathname === nameSpaceWithLeadingSlash || pathname === nameSpaceWithLeadingSlash + '/' ? defaultPathname : pathname;
		if (pathname && pathname.indexOf(this.nameSpaceWithLeadingSlash) === 0) {
			pathname = pathname.replace(this.nameSpaceWithLeadingSlash, '');
		}
		pathname = pathname ? pathname : defaultPathname;

		this.slashSplit = pathname.split('/');
		if(pathname.indexOf('/f/') === 0){
			this.idX = this.slashSplit[4];
			this.customTemplate = this.slashSplit[2];
		} else if(pathname.indexOf('/selfie/') === 0){
			pathname = '/selfie/v1438476536/bernie/' + this.slashSplit[4];
			this.slashSplit = pathname.split('/');
			this.idX = this.slashSplit[4];
			this.customTemplate = 'i4hiodnsy2yaqavpowm1';
		} else {
			//pathname.indexOf('/h/') === 0
			//pathname.indexOf('/h3/') === 0
			this.idX = this.slashSplit[2];
		}

		if(pathname.indexOf('/ut/') === 0){
			this.customTemplate = this.slashSplit[4];
		}

		if(pathname.indexOf('/h/') === 0){
			this.customTemplate = 'hairglasses';
		}

		this.pathname = this.nameSpaceWithLeadingSlash + pathname;
		console.log('this.slashSplit',this.slashSplit);
		this.coords = this.slashSplit[3].split('_');

		for(var i=0,l=this.coords.length;i<l;i++){
			this.coords[i] = +this.coords[i];
		}

		this.dims = this.coords.splice(4,2);
		this.width = +this.dims[0];
		this.height = +this.dims[1];
		this.x = this.coords[0];
		this.y = +this.coords[1];
		this.cropWidth = this.coords[2];
		this.cropHeight = this.coords[3];
		
		this.format = '.jpg';

		this.customUrl = '';
		this.customUrlQueryString = '';
		this.makeCustomUrl({

		});
	};
	DeriveUrlInfo.prototype.normalize = function(val,def){
		def = typeof def !== 'undefined' ? def : true;
		val = typeof val !== 'undefined' ? val : def;
		if(typeof def === 'number'){
			val = typeof val === 'string' ? +val : val;
			val = !isNaN(val) ? val : def;
			val = Math.round(val);
		}
		
		return val;
	}
	DeriveUrlInfo.prototype.doubleNormalize = function(val,prexisting,def){
		var def = this.normalize(prexisting,def);
		return this.normalize(val,def);
	}
	DeriveUrlInfo.prototype.doubleNormalizeInterface = function(dest,options,defaults){
		for(var name in defaults){
			var def = defaults[name];
			dest[name] = this.doubleNormalize(options[name],dest[name],def);
		}
	};

	DeriveUrlInfo.prototype.makeCustomUrl = function(settings){
		var mode = this.slashSplit[1].toLowerCase();
		
		var toNormalize = {
			'x':mode !== 'selfie' ? 0 : 142,
			'y':mode !== 'selfie' ? 0 : 98,
			'cropWidth':mode !== 'selfie' ? 1200 : 305,
			'cropHeight':mode !== 'selfie' ? 1200 : 305,
			'width':1200,
			'height':1200,
			'idX':'zephyr1476401787491.png',
			'mode':mode
		};
		if(!!settings.customTemplate){
			toNormalize.customTemplate = settings.customTemplate;
		}
		this.doubleNormalizeInterface(this,settings,toNormalize);
		this.idX = this.idX.split('.');
		if(this.idX.length > 1){
			this.idX.pop();
		}
		this.idX = this.idX.join('.');
		this.rawImage = rawImagePrefix + this.idX;
		this.rawImage = !!this.offline ? '/images/mock-selfie-raw.jpg' : this.rawImage;
		if(this.rawImage.indexOf('.') === -1){
			this.rawImage += '.png';
		}
		if(this.mode === 'f' || this.mode === 'selfie'){
			this.customTemplate = 'wg';
			this.doStandardSquare();
		}else{
			this.doStandardSquare()
		}
	};
	DeriveUrlInfo.prototype.serialize = function(obj, prefix) {
		if(typeof obj !== 'object'){
			obj = {whatever:obj};
		}
	    var str = [];
	    for (var p in obj) {
	        if (obj.hasOwnProperty(p)) {
	            var k = prefix ? prefix + "[" + p + "]" : p,
	                v = obj[p];
	            str.push(typeof v == "object" ?
	                serialize(v, k) :
	                encodeURIComponent(k) + "=" + encodeURIComponent(v));
	        }
	    }
	    str = str.join("&");
	    str = str.replace('whatever=','')
	    return str;
	};

	DeriveUrlInfo.prototype.doStandardSquare = function(){
		this.pathname = '/'+this.mode+'/'+this.idX+'/'+this.x+'_'+this.y+'_'+this.cropWidth+'_'+this.cropHeight+'_'+this.width+'_'+this.height+'/'
		if(!!this.customTemplate && this.mode !== 'h'){
			this.pathname += this.customTemplate + '/';
		}
		
		var userPhotoKey = this.idX;
		userPhotoKey = userPhotoKey.split('.');
		if(userPhotoKey.length > 1){
			userPhotoKey.pop();
		}
		userPhotoKey = userPhotoKey.join('.');
		userPhotoKey = userPhotoKey;
		
		var customUrlSettings = {
			cropWidth: this.cropWidth,
			cropHeight: this.cropHeight,
			x: this.x,
			y: this.y,
			template:(!!this.customTemplate ? this.customTemplate : this.mode),
			userPhotoKey: userPhotoKey
		};
		var s = customUrlSettings;

		this.customUrl = ('' +
			'/image/' + 
			s.template +
			'/' +
			s.userPhotoKey +
			'_' + s.cropWidth + '_' + s.cropHeight + '_' + s.x + '_' + s.y + '.jpg' +
		'');
		this.customUrl = !!this.offline ? '/images/mock-selfie.png' : this.customUrl;
		this.customUrlQueryString = this.serialize(this.customUrl);

		return this.customUrl;
	};

	exports.generateTemplateImgListHtml = function(userTemplates,offline){
		var imgsHtml = '';
		if(offline){
			;(function(){
				var offlineTemplates = [
                    {customTemplate:'/images/h3.png'},
                    {customTemplate:'/images/h4.png'},
                    {customTemplate:'/images/h3.png'}
                ];
	            for(var i=0,l=offlineTemplates.length;i<l;i++){
	            	imgsHtml += '<div class="designFrame">';
	            		imgsHtml += '<div class="designFrame_innerWrap">';
	                		imgsHtml += '<img class="designFrame_design userTemplate" src="'+offlineTemplates[i].customTemplate+'">'
	            		imgsHtml += '</div>';
	            	imgsHtml += '</div>';
	            }
	            
	        })();
		}else{
			;(function(){
	            for(var i=0,l=standardModes.length;i<l;i++){
	                if(!!standardModes[i].featured){
	                	imgsHtml += '<div class="designFrame">';
		                	imgsHtml += '<div class="designFrame_innerWrap">';
		                    	imgsHtml += '<img class="designFrame_design standardTemplate" src="' + templateBaseUrl +standardModes[i].mode+'.png">';
		                	imgsHtml += '</div>';
	                	imgsHtml += '</div>';
	                }
	            }
	        })();
	        ;(function(){
	            for(var i=0,l=userTemplates.length;i<l;i++){
	            	imgsHtml += '<div class="designFrame">';
		            	imgsHtml += '<div class="designFrame_innerWrap">';
		                	imgsHtml += '<img class="designFrame_design userTemplate" src="' + templateBaseUrl +userTemplates[i].customTemplate+'.png">'
		            	imgsHtml += '</div>';
	            	imgsHtml += '</div>';
	            }
	            
	        })();
        }
        return imgsHtml;
	};
	exports.deriveUrlInfo = function({pathname,offline,nameSpace}){
		return new DeriveUrlInfo({pathname,offline,nameSpace});
	};

})(typeof exports === 'undefined'? this[mymoduleName]={}: exports);