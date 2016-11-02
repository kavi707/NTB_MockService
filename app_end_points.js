/**
 * Created by kwijewardana on 10/25/16.
 * @author Kavimal Wijewardana <kavi707@gmail.com>
 */
var logger = require('./utils/log');
var service = require('./services');

module.exports.createAppEndPoints = function (app) {

    // System Check
    app.get("/ntb/system/status", function(req, res) {
        logger.info("================================================================================================");
        logger.info('NTBMockService:system_end_points/createSystemEndPoints - [GET/ntb/system/status]');
        service.getSystemStatus(req, res);
    });

    // NTB specific
    app.get("/ntb/check/updates/:currentVersion", function(req, res) {
        logger.info("================================================================================================");
        logger.info('NTBMockService:system_end_points/createSystemEndPoints - [GET/ntb/check/updates/:currentVersion]');
        service.getAppUpdateStatus(req, res);
    });

    app.post("/ntb/login", function(req, res) {
        logger.info("================================================================================================");
        logger.info('NTBMockService:system_end_points/createSystemEndPoints - [POST/ntb/login]');
        service.userLogin(req, res);
    });

    app.get("/ntb/atms", function(req, res) {
        logger.info("================================================================================================");
        logger.info('NTBMockService:system_end_points/createSystemEndPoints - [GET/ntb/atms]');
        service.getNTBAtmLocations(req, res);
    });

    app.get("/ntb/branches", function(req, res) {
        logger.info("================================================================================================");
        logger.info('NTBMockService:system_end_points/createSystemEndPoints - [GET/ntb/branches]');
        service.getNTBBranchLocations(req, res);
    });

    app.get("/ntb/gas_stations", function(req, res) {
        logger.info("================================================================================================");
        logger.info('NTBMockService:system_end_points/createSystemEndPoints - [GET/ntb/gas_stations]');
        service.getFuelStationLocations(req, res);
    });

    app.get("/ntb/fd/calculator_prefix", function(req, res) {
        logger.info("================================================================================================");
        logger.info('NTBMockService:system_end_points/createSystemEndPoints - [GET/ntb/fd/calculator_prefix]');
        service.getFDCalculatorData(req, res);
    });

    app.post("/ntb/fd/calculate", function(req, res) {
        logger.info("================================================================================================");
        logger.info('NTBMockService:system_end_points/createSystemEndPoints - [POST/ntb/fd/calculate]');
        service.userLogin(req, res);
    });

    // Sample specific
    app.get("/demo/sample_list", function(req, res) {
        logger.info("================================================================================================");
        logger.info('NTBMockService:system_end_points/createSystemEndPoints - [GET/demo/sample_list]');
        service.getSampleDataList(req, res);
    });

    app.get("/demo/sample_user_list/:startIndex/:endIndex", function(req, res) {
        logger.info("================================================================================================");
        logger.info('NTBMockService:system_end_points/createSystemEndPoints - [GET/demo/sample_user_list]');
        service.getSampleUserList(req, res);
    });
};