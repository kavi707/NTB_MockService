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
    utils.sendResponse(res, 200, "System check", sampleDataList);
};