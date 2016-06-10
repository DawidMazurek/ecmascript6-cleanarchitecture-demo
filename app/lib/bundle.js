/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _AdId = __webpack_require__(1);

	var _GetAdById = __webpack_require__(3);

	var _AdsDummyAjaxGateway = __webpack_require__(4);

	var _AdsRepository = __webpack_require__(6);

	var _AdFactory = __webpack_require__(8);

	var _AdHydrator = __webpack_require__(10);

	var searchForAd = new _GetAdById.GetAdById(new _AdsRepository.AdsRepository(new _AdsDummyAjaxGateway.AdsDummyAjaxGateway(), new _AdHydrator.AdHydrator(), new _AdFactory.AdFactory()), new _AdId.AdId(1));

	var ad = searchForAd.execute();

	console.log(ad);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AdId = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _InvalidAdIdException = __webpack_require__(2);

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

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InvalidAdIdException = exports.InvalidAdIdException = function (_Error) {
	    _inherits(InvalidAdIdException, _Error);

	    function InvalidAdIdException() {
	        _classCallCheck(this, InvalidAdIdException);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(InvalidAdIdException).apply(this, arguments));
	    }

	    return InvalidAdIdException;
	}(Error);

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GetAdById = exports.GetAdById = function () {
	    function GetAdById(adsRepository, adId) {
	        _classCallCheck(this, GetAdById);

	        this.repository = adsRepository;
	        this.adId = adId;
	    }

	    _createClass(GetAdById, [{
	        key: "execute",
	        value: function execute() {
	            return this.repository.findAdById(this.adId);
	        }
	    }]);

	    return GetAdById;
	}();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AdsDummyAjaxGateway = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _AdsGatewayAbstract2 = __webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AdsDummyAjaxGateway = exports.AdsDummyAjaxGateway = function (_AdsGatewayAbstract) {
	    _inherits(AdsDummyAjaxGateway, _AdsGatewayAbstract);

	    function AdsDummyAjaxGateway() {
	        _classCallCheck(this, AdsDummyAjaxGateway);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(AdsDummyAjaxGateway).apply(this, arguments));
	    }

	    _createClass(AdsDummyAjaxGateway, [{
	        key: "findOneBy",
	        value: function findOneBy(criteria) {
	            return { "ad_id": 1, "title": "test" };
	        }
	    }]);

	    return AdsDummyAjaxGateway;
	}(_AdsGatewayAbstract2.AdsGatewayAbstract);

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AdsGatewayAbstract = exports.AdsGatewayAbstract = function () {
	    function AdsGatewayAbstract() {
	        _classCallCheck(this, AdsGatewayAbstract);
	    }

	    _createClass(AdsGatewayAbstract, [{
	        key: "findOneBy",
	        value: function findOneBy(criteria) {}
	    }]);

	    return AdsGatewayAbstract;
	}();

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AdsRepository = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _AdFields = __webpack_require__(7);

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

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AdFields = exports.AdFields = function () {
	    function AdFields() {
	        _classCallCheck(this, AdFields);
	    }

	    _createClass(AdFields, null, [{
	        key: 'FIELD_AD_ID',
	        get: function get() {
	            return 'ad_id';
	        }
	    }, {
	        key: 'FIELD_TITLE',
	        get: function get() {
	            return 'title';
	        }
	    }]);

	    return AdFields;
	}();

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AdFactory = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Ad = __webpack_require__(9);

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

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Ad = exports.Ad = function () {
	    function Ad() {
	        _classCallCheck(this, Ad);
	    }

	    _createClass(Ad, [{
	        key: "id",
	        set: function set(id) {
	            this._id = id;
	        },
	        get: function get() {
	            return this._id;
	        }
	    }, {
	        key: "title",
	        set: function set(title) {
	            this._title = title;
	        },
	        get: function get() {
	            return this._title;
	        }
	    }]);

	    return Ad;
	}();

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AdHydrator = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _AdId = __webpack_require__(1);

	var _AdTitle = __webpack_require__(11);

	var _AdFields = __webpack_require__(7);

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

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AdTitle = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _InvalidAdTitleException = __webpack_require__(12);

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

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InvalidAdTitleException = exports.InvalidAdTitleException = function (_Error) {
	    _inherits(InvalidAdTitleException, _Error);

	    function InvalidAdTitleException() {
	        _classCallCheck(this, InvalidAdTitleException);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(InvalidAdTitleException).apply(this, arguments));
	    }

	    return InvalidAdTitleException;
	}(Error);

/***/ }
/******/ ]);