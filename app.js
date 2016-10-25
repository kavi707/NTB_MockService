/**
 * Created by kwijewardana on 10/25/16.
 * app.js
 * @author Kavimal Wijewardana <kavi707@gmail.com>
 */

var express = require('express');
var logger = require('./utils/log');
var utils = require('./utils/utils');
var appEndPoints = require('./app_end_points');

var app = express();
app.set('port', (process.env.PORT || 8000));
app.use(express.bodyParser());

appEndPoints.createAppEndPoints(app);

//starting the server
var server = app.listen(app.get('port'), function () {
    utils.createLoggerDir(); //check logs dir exists or not, if not create logs dir
    logger.info('NTBMockService:app/ NTBMockService app started. Listen on port: ' + server.address().port);
});