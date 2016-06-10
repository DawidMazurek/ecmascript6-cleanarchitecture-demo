'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AdHydrator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AdId = require('./../valueobject/AdId');

var _AdTitle = require('./../valueobject/AdTitle');

var _AdFields = require('./../mapper/AdFields');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdHydrator = exports.AdHydrator = function () {
    function AdHydrator() {
        _classCallCheck(this, AdHydrator);
    }

    _createClass(AdHydrator, [{
        key: 'extract',
        value: function extract(ad) {
            var data = [];

            data[_AdFields.AdFields.FIELD_AD_ID] = ad.id.getId();
            data[_AdFields.AdFields.FIELD_TITLE] = ad.title.getTitle();

            return data;
        }
    }, {
        key: 'hydrate',
        value: function hydrate(ad, adData) {
            ad.id = new _AdId.AdId(adData[_AdFields.AdFields.FIELD_AD_ID]);
            ad.title = new _AdTitle.AdTitle(adData[_AdFields.AdFields.FIELD_TITLE]);

            return ad;
        }
    }]);

    return AdHydrator;
}();