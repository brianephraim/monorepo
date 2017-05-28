var prepareModuleWithDefaults = require('./prepareModuleWithDefaults');
module.exports = prepareModuleWithDefaults(function(s){
	var res = s.res;
	var isSuccess = typeof s.isSuccess === 'undefined' || !!s.isSuccess;
	delete s.res;
	delete s.isSuccess;
	delete s.accessKeyId;
	delete s.secretAccessKey;
	var status = 200;//ok
	if(s.statusCode){
		status = s.statusCode;
	} else if(!isSuccess){
		status = 500;
	}
	status = status === 0 ? 500 : status;
	
	if(s.error){
		// res.write(s.error);
		// res.render('error', s.error);
		res.status(status).json({
			message:s.error.message,
			error:s.error.error
		})
		// res.json('error', {
	 //        message: s.error.message,
	 //        error: s.error
	 //    });
	} else {
		res.status(status);
		res.write(JSON.stringify(s));
	}
	
	res.end();
});