'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AdFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Ad = require('./../entity/Ad');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdFactory = exports.AdFactory = function () {
    function AdFactory() {
        _classCallCheck(this, AdFactory);
    }

    _createClass(AdFactory, [{
        key: 'create',
        value: function create() {
            return new _Ad.Ad();
        }
    }]);

    return AdFactory;
}();