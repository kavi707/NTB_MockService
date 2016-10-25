/**
 * Created by kavi707 on 11/18/14.
 * @author Kavimal Wijewardana <kavi707@gmail.com>
 */
 
var logger = require('./log');
var fs = require('fs');

/**
 * This method is for check the logs directory existence
 * and if dir is not exists, then create
 */
module.exports.createLoggerDir = function () {
 	var path = __dirname + '/logs';
  	console.log('NTBMockService:util/createLoggerDir - Logs dir path: [' + path + ']');
  	fs.exists(path, function(exists) {
    	if (!exists) {
        	fs.mkdir(path, function(err) {
        		if (err) {
        			console.log('AdGo:util/createLoggerDir - Error occurred @ dir creating. ERROR: ' + err);
        		}
        	});
    	} else {
    		logger.info('NTBMockService:util/createLoggerDir - Logs dir is exists');
    	}
  	}); 
 };

/**
 * This method is for create final response object
 * @param res NodeJS res object
 * @param statusCode HTTP status code
 * @param statusMessage status message
 * @param dataObject return data object
 */
module.exports.sendResponse = function (res, statusCode, statusMessage, dataObject) {

    var responseObj;
    if (dataObject != 'EMPTY') {
        responseObj = {
            "status":"ERROR",
            "msg":statusMessage,
            "data":dataObject
        };
    } else {
        responseObj = {
            "status":"ERROR",
            "msg":statusMessage
        };
    }

    if (statusCode == 200) {
        logger.info('NTBMockService:util/sendResponse - [' + statusCode + '] success response sent');
        responseObj.status = "SUCCESS";
        res.send(responseObj);
    } else {
        logger.info('NTBMockService:util/sendResponse - [' + statusCode + '] error response sent');
        responseObj.status = "ERROR";
        res.send(statusCode, responseObj);
    }
};
