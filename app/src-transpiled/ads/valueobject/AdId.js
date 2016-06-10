'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AdId = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _InvalidAdIdException = require('./InvalidAdIdException');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdId = exports.AdId = function () {
    function AdId(id) {
        _classCallCheck(this, AdId);

        if (!this.validate(id)) {
            throw new _InvalidAdIdException.InvalidAdIdException();
        }
        this.id = id;
    }

    _createClass(AdId, [{
        key: 'validate',
        value: function validate(id) {
            return id > 0;
        }
    }, {
        key: 'getId',
        value: function getId() {
            return this.id;
        }
    }]);

    return AdId;
}();