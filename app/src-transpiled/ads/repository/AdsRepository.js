'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AdsRepository = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AdFields = require('./../mapper/AdFields');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdsRepository = exports.AdsRepository = function () {
    function AdsRepository(adsGatewayAbstract, adHydrator, adFactory) {
        _classCallCheck(this, AdsRepository);

        this.gateway = adsGatewayAbstract;
        this.hydrator = adHydrator;
        this.factory = adFactory;
    }

    /**
     * 
     * @param adId AdId
     * @returns Ad
     */

    _createClass(AdsRepository, [{
        key: 'findAdById',
        value: function findAdById(adId) {
            var criteria = [];
            criteria[_AdFields.AdFields.FIELD_AD_ID] = adId.getId();
            var adData = this.gateway.findOneBy(criteria);

            var ad = this.factory.create();

            return this.hydrator.hydrate(ad, adData);
        }
    }]);

    return AdsRepository;
}();