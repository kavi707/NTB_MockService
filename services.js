/**
 * Created by kwijewardana on 10/25/16.
 * @author Kavimal Wijewardana <kavi707@gmail.com>
 */

var logger = require('./utils/log');
var utils = require('./utils/utils');
var fs = require('fs');

module.exports.getSystemStatus = function (req, res) {
    logger.info('NTBMockService:services/getSystemStatus - Get current system status');
    var status = JSON.parse(fs.readFileSync('./mock_json_responses/system_status.json', 'utf8'));
    utils.sendResponse(res, 200, "System check", status);
};

module.exports.getAppUpdateStatus = function (req, res) {
    logger.info('NTBMockService:services/getAppUpdateStatus - Get app update status');
    var currentVersion = req.params.currentVersion;
    var updateCheck;
    if (currentVersion <= 1.0) {
        // Mandatory Update
        updateCheck = JSON.parse(fs.readFileSync('./mock_json_responses/updateCheck/mandatory_update.json', 'utf8'));
    } else if (currentVersion > 1.0 && currentVersion < 2.0) {
        // Not Mandatory Update
        updateCheck = JSON.parse(fs.readFileSync('./mock_json_responses/updateCheck/not_mandatory_update.json', 'utf8'));
    } else if (currentVersion >= 2.0) {
        // No Updates
        updateCheck = JSON.parse(fs.readFileSync('./mock_json_responses/updateCheck/no_updates.json', 'utf8'));
    }

    utils.sendResponse(res, 200, "App update status check", updateCheck);
};

module.exports.userLogin = function (req, res) {
    logger.info('NTBMockService:services/userLogin - authenticate user via username/password');

    var username = req.body.username;
    console.log("username:" + username);
    var password = req.body.password;
    console.log("password:" + req.body.password);

    var login;
    if (username == 'undefined' || username == null) {
        utils.sendResponse(res, 401, "Authentication Fail - Username can not be empty", null);
    } else if ( password == 'undefined' || password == null) {
        utils.sendResponse(res, 401, "Authentication Fail - Password can not be empty", null);
    } else {
        login = JSON.parse(fs.readFileSync('./mock_json_responses/userLogin/login_success.json', 'utf8'));
        utils.sendResponse(res, 200, "Authentication Success", login);
    }
};

module.exports.getNTBAtmLocations = function (req, res) {
    logger.info('NTBMockService:services/getNTBAtmLocations - Get ATM locations');
    var atmLocations = JSON.parse(fs.readFileSync('./mock_json_responses/ntb_atm_list.json', 'utf8'));
    utils.sendResponse(res, 200, "ATMs retrieve successfully", atmLocations);
};

module.exports.getNTBBranchLocations = function (req, res) {
    logger.info('NTBMockService:services/getNTBBranchLocations - Get branch locations');
    var branchLocations = JSON.parse(fs.readFileSync('./mock_json_responses/ntb_branch_list.json', 'utf8'));
    utils.sendResponse(res, 200, "Branch retrieve successfully", branchLocations);
};

module.exports.getFuelStationLocations = function (req, res) {
    logger.info('NTBMockService:services/getFuelStationLocations - Get fuel stations locations');
    var fuelStations = JSON.parse(fs.readFileSync('./mock_json_responses/fuel_station_list.json', 'utf8'));
    utils.sendResponse(res, 200, "Fuel stations retrieve successfully", fuelStations);
};

module.exports.getSampleDatList = function (req, res) {
    logger.info('NTBMockService:services/getSampleDatList - Get sample data list');
    var sampleDataList = JSON.parse(fs.readFileSync('./mock_json_responses/sample_data_list.json', 'utf8'));
    utils.sendResponse(res, 200, "Sample data content list", sampleDataList);
};