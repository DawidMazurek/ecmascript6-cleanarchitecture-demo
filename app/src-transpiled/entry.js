'use strict';

var _AdId = require('./ads/valueobject/AdId');

var _GetAdById = require('./ads/query/GetAdById');

var _AdsDummyAjaxGateway = require('./ads/gateway/AdsDummyAjaxGateway');

var _AdsRepository = require('./ads/repository/AdsRepository');

var _AdFactory = require('./ads/factory/AdFactory');

var _AdHydrator = require('./ads/hydrator/AdHydrator');

var searchForAd = new _GetAdById.GetAdById(new _AdsRepository.AdsRepository(new _AdsDummyAjaxGateway.AdsDummyAjaxGateway(), new _AdHydrator.AdHydrator(), new _AdFactory.AdFactory()), new _AdId.AdId(1));

var ad = searchForAd.execute();

console.log(ad);