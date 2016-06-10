'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AdTitle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _InvalidAdTitleException = require('./InvalidAdTitleException');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdTitle = exports.AdTitle = function () {
    function AdTitle(title) {
        _classCallCheck(this, AdTitle);

        if (!this.validate(title)) {
            throw new _InvalidAdTitleException.InvalidAdIdException();
        }
        this.title = title;
    }

    _createClass(AdTitle, [{
        key: 'validate',
        value: function validate(title) {
            return title.length > 0;
        }
    }, {
        key: 'getTitle',
        value: function getTitle() {
            return this.title;
        }
    }]);

    return AdTitle;
}();