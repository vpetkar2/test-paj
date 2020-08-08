function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-login-login-module"], {
  /***/
  "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js ***!
    \*************************************************************************/

  /*! exports provided: DEFAULT_LANGUAGE, FakeMissingTranslationHandler, MissingTranslationHandler, TranslateCompiler, TranslateDefaultParser, TranslateDirective, TranslateFakeCompiler, TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateParser, TranslatePipe, TranslateService, TranslateStore, USE_DEFAULT_LANG, USE_EXTEND, USE_STORE */

  /***/
  function node_modulesNgxTranslateCoreFesm2015NgxTranslateCoreJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_LANGUAGE", function () {
      return DEFAULT_LANGUAGE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FakeMissingTranslationHandler", function () {
      return FakeMissingTranslationHandler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MissingTranslationHandler", function () {
      return MissingTranslationHandler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateCompiler", function () {
      return TranslateCompiler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateDefaultParser", function () {
      return TranslateDefaultParser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateDirective", function () {
      return TranslateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateFakeCompiler", function () {
      return TranslateFakeCompiler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateFakeLoader", function () {
      return TranslateFakeLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateLoader", function () {
      return TranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateModule", function () {
      return TranslateModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateParser", function () {
      return TranslateParser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslatePipe", function () {
      return TranslatePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateService", function () {
      return TranslateService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateStore", function () {
      return TranslateStore;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "USE_DEFAULT_LANG", function () {
      return USE_DEFAULT_LANG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "USE_EXTEND", function () {
      return USE_EXTEND;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "USE_STORE", function () {
      return USE_STORE;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @abstract
     */


    var TranslateLoader = function TranslateLoader() {
      _classCallCheck(this, TranslateLoader);
    };

    if (false) {}
    /**
     * This loader is just a placeholder that does nothing, in case you don't need a loader at all
     */


    var TranslateFakeLoader = /*#__PURE__*/function (_TranslateLoader) {
      _inherits(TranslateFakeLoader, _TranslateLoader);

      var _super = _createSuper(TranslateFakeLoader);

      function TranslateFakeLoader() {
        _classCallCheck(this, TranslateFakeLoader);

        return _super.apply(this, arguments);
      }

      _createClass(TranslateFakeLoader, [{
        key: "getTranslation",

        /**
         * @param {?} lang
         * @return {?}
         */
        value: function getTranslation(lang) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
        }
      }]);

      return TranslateFakeLoader;
    }(TranslateLoader);

    TranslateFakeLoader.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */

    function MissingTranslationHandlerParams() {}

    if (false) {}
    /**
     * @abstract
     */


    var MissingTranslationHandler = function MissingTranslationHandler() {
      _classCallCheck(this, MissingTranslationHandler);
    };

    if (false) {}
    /**
     * This handler is just a placeholder that does nothing, in case you don't need a missing translation handler at all
     */


    var FakeMissingTranslationHandler = /*#__PURE__*/function () {
      function FakeMissingTranslationHandler() {
        _classCallCheck(this, FakeMissingTranslationHandler);
      }

      _createClass(FakeMissingTranslationHandler, [{
        key: "handle",

        /**
         * @param {?} params
         * @return {?}
         */
        value: function handle(params) {
          return params.key;
        }
      }]);

      return FakeMissingTranslationHandler;
    }();

    FakeMissingTranslationHandler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /* tslint:disable */

    /**
     * Determines if two objects or two values are equivalent.
     *
     * Two objects or values are considered equivalent if at least one of the following is true:
     *
     * * Both objects or values pass `===` comparison.
     * * Both objects or values are of the same type and all of their properties are equal by
     *   comparing them with `equals`.
     *
     * @param {?} o1 Object or value to compare.
     * @param {?} o2 Object or value to compare.
     * @return {?} true if arguments are equal.
     */

    function equals(o1, o2) {
      if (o1 === o2) return true;
      if (o1 === null || o2 === null) return false;
      if (o1 !== o1 && o2 !== o2) return true; // NaN === NaN
      // NaN === NaN

      /** @type {?} */

      var t1 = typeof o1;
      /** @type {?} */

      var t2 = typeof o2;
      /** @type {?} */

      var length;
      /** @type {?} */

      var key;
      /** @type {?} */

      var keySet;

      if (t1 == t2 && t1 == 'object') {
        if (Array.isArray(o1)) {
          if (!Array.isArray(o2)) return false;

          if ((length = o1.length) == o2.length) {
            for (key = 0; key < length; key++) {
              if (!equals(o1[key], o2[key])) return false;
            }

            return true;
          }
        } else {
          if (Array.isArray(o2)) {
            return false;
          }

          keySet = Object.create(null);

          for (key in o1) {
            if (!equals(o1[key], o2[key])) {
              return false;
            }

            keySet[key] = true;
          }

          for (key in o2) {
            if (!(key in keySet) && typeof o2[key] !== 'undefined') {
              return false;
            }
          }

          return true;
        }
      }

      return false;
    }
    /* tslint:enable */

    /**
     * @param {?} value
     * @return {?}
     */


    function isDefined(value) {
      return typeof value !== 'undefined' && value !== null;
    }
    /**
     * @param {?} item
     * @return {?}
     */


    function isObject(item) {
      return item && typeof item === 'object' && !Array.isArray(item);
    }
    /**
     * @param {?} target
     * @param {?} source
     * @return {?}
     */


    function mergeDeep(target, source) {
      /** @type {?} */
      var output = Object.assign({}, target);

      if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(
        /**
        * @param {?} key
        * @return {?}
        */
        function (key) {
          if (isObject(source[key])) {
            if (!(key in target)) {
              Object.assign(output, _defineProperty({}, key, source[key]));
            } else {
              output[key] = mergeDeep(target[key], source[key]);
            }
          } else {
            Object.assign(output, _defineProperty({}, key, source[key]));
          }
        });
      }

      return output;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @abstract
     */


    var TranslateParser = function TranslateParser() {
      _classCallCheck(this, TranslateParser);
    };

    if (false) {}

    var TranslateDefaultParser = /*#__PURE__*/function (_TranslateParser) {
      _inherits(TranslateDefaultParser, _TranslateParser);

      var _super2 = _createSuper(TranslateDefaultParser);

      function TranslateDefaultParser() {
        var _this;

        _classCallCheck(this, TranslateDefaultParser);

        _this = _super2.apply(this, arguments);
        _this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
        return _this;
      }
      /**
       * @param {?} expr
       * @param {?=} params
       * @return {?}
       */


      _createClass(TranslateDefaultParser, [{
        key: "interpolate",
        value: function interpolate(expr, params) {
          /** @type {?} */
          var result;

          if (typeof expr === 'string') {
            result = this.interpolateString(expr, params);
          } else if (typeof expr === 'function') {
            result = this.interpolateFunction(expr, params);
          } else {
            // this should not happen, but an unrelated TranslateService test depends on it
            result =
            /** @type {?} */
            expr;
          }

          return result;
        }
        /**
         * @param {?} target
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "getValue",
        value: function getValue(target, key) {
          /** @type {?} */
          var keys = typeof key === 'string' ? key.split('.') : [key];
          key = '';

          do {
            key += keys.shift();

            if (isDefined(target) && isDefined(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
              target = target[key];
              key = '';
            } else if (!keys.length) {
              target = undefined;
            } else {
              key += '.';
            }
          } while (keys.length);

          return target;
        }
        /**
         * @private
         * @param {?} fn
         * @param {?=} params
         * @return {?}
         */

      }, {
        key: "interpolateFunction",
        value: function interpolateFunction(fn, params) {
          return fn(params);
        }
        /**
         * @private
         * @param {?} expr
         * @param {?=} params
         * @return {?}
         */

      }, {
        key: "interpolateString",
        value: function interpolateString(expr, params) {
          var _this2 = this;

          if (!params) {
            return expr;
          }

          return expr.replace(this.templateMatcher,
          /**
          * @param {?} substring
          * @param {?} b
          * @return {?}
          */
          function (substring, b) {
            /** @type {?} */
            var r = _this2.getValue(params, b);

            return isDefined(r) ? r : substring;
          });
        }
      }]);

      return TranslateDefaultParser;
    }(TranslateParser);

    TranslateDefaultParser.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @abstract
     */


    var TranslateCompiler = function TranslateCompiler() {
      _classCallCheck(this, TranslateCompiler);
    };

    if (false) {}
    /**
     * This compiler is just a placeholder that does nothing, in case you don't need a compiler at all
     */


    var TranslateFakeCompiler = /*#__PURE__*/function (_TranslateCompiler) {
      _inherits(TranslateFakeCompiler, _TranslateCompiler);

      var _super3 = _createSuper(TranslateFakeCompiler);

      function TranslateFakeCompiler() {
        _classCallCheck(this, TranslateFakeCompiler);

        return _super3.apply(this, arguments);
      }

      _createClass(TranslateFakeCompiler, [{
        key: "compile",

        /**
         * @param {?} value
         * @param {?} lang
         * @return {?}
         */
        value: function compile(value, lang) {
          return value;
        }
        /**
         * @param {?} translations
         * @param {?} lang
         * @return {?}
         */

      }, {
        key: "compileTranslations",
        value: function compileTranslations(translations, lang) {
          return translations;
        }
      }]);

      return TranslateFakeCompiler;
    }(TranslateCompiler);

    TranslateFakeCompiler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var TranslateStore = function TranslateStore() {
      _classCallCheck(this, TranslateStore);

      /**
       * The lang currently used
       */
      this.currentLang = this.defaultLang;
      /**
       * a list of translations per lang
       */

      this.translations = {};
      /**
       * an array of langs
       */

      this.langs = [];
      /**
       * An EventEmitter to listen to translation change events
       * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
       *     // do something
       * });
       */

      this.onTranslationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      /**
       * An EventEmitter to listen to lang change events
       * onLangChange.subscribe((params: LangChangeEvent) => {
       *     // do something
       * });
       */

      this.onLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      /**
       * An EventEmitter to listen to default lang change events
       * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
       *     // do something
       * });
       */

      this.onDefaultLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var USE_STORE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('USE_STORE');
    /** @type {?} */

    var USE_DEFAULT_LANG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('USE_DEFAULT_LANG');
    /** @type {?} */

    var DEFAULT_LANGUAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('DEFAULT_LANGUAGE');
    /** @type {?} */

    var USE_EXTEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('USE_EXTEND');
    /**
     * @record
     */

    function TranslationChangeEvent() {}

    if (false) {}
    /**
     * @record
     */


    function LangChangeEvent() {}

    if (false) {}
    /**
     * @record
     */


    function DefaultLangChangeEvent() {}

    if (false) {}

    var TranslateService = /*#__PURE__*/function () {
      /**
       *
       * @param {?} store an instance of the store (that is supposed to be unique)
       * @param {?} currentLoader An instance of the loader currently used
       * @param {?} compiler An instance of the compiler currently used
       * @param {?} parser An instance of the parser currently used
       * @param {?} missingTranslationHandler A handler for missing translations.
       * @param {?=} useDefaultLang whether we should use default language translation when current language translation is missing.
       * @param {?=} isolate whether this service should use the store or not
       * @param {?=} extend To make a child module extend (and use) translations from parent modules.
       * @param {?=} defaultLanguage Set the default language using configuration
       */
      function TranslateService(store, currentLoader, compiler, parser, missingTranslationHandler) {
        var useDefaultLang = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
        var isolate = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
        var extend = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
        var defaultLanguage = arguments.length > 8 ? arguments[8] : undefined;

        _classCallCheck(this, TranslateService);

        this.store = store;
        this.currentLoader = currentLoader;
        this.compiler = compiler;
        this.parser = parser;
        this.missingTranslationHandler = missingTranslationHandler;
        this.useDefaultLang = useDefaultLang;
        this.isolate = isolate;
        this.extend = extend;
        this.pending = false;
        this._onTranslationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._onLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._onDefaultLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._langs = [];
        this._translations = {};
        this._translationRequests = {};
        /** set the default language from configuration */

        if (defaultLanguage) {
          this.setDefaultLang(defaultLanguage);
        }
      }
      /**
       * An EventEmitter to listen to translation change events
       * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
       *     // do something
       * });
       * @return {?}
       */


      _createClass(TranslateService, [{
        key: "setDefaultLang",

        /**
         * Sets the default language to use as a fallback
         * @param {?} lang
         * @return {?}
         */
        value: function setDefaultLang(lang) {
          var _this3 = this;

          if (lang === this.defaultLang) {
            return;
          }
          /** @type {?} */


          var pending = this.retrieveTranslations(lang);

          if (typeof pending !== "undefined") {
            // on init set the defaultLang immediately
            if (this.defaultLang == null) {
              this.defaultLang = lang;
            }

            pending.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(
            /**
            * @param {?} res
            * @return {?}
            */
            function (res) {
              _this3.changeDefaultLang(lang);
            });
          } else {
            // we already have this language
            this.changeDefaultLang(lang);
          }
        }
        /**
         * Gets the default language used
         * @return {?}
         */

      }, {
        key: "getDefaultLang",
        value: function getDefaultLang() {
          return this.defaultLang;
        }
        /**
         * Changes the lang currently used
         * @param {?} lang
         * @return {?}
         */

      }, {
        key: "use",
        value: function use(lang) {
          var _this4 = this;

          // don't change the language if the language given is already selected
          if (lang === this.currentLang) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.translations[lang]);
          }
          /** @type {?} */


          var pending = this.retrieveTranslations(lang);

          if (typeof pending !== "undefined") {
            // on init set the currentLang immediately
            if (!this.currentLang) {
              this.currentLang = lang;
            }

            pending.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(
            /**
            * @param {?} res
            * @return {?}
            */
            function (res) {
              _this4.changeLang(lang);
            });
            return pending;
          } else {
            // we have this language, return an Observable
            this.changeLang(lang);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.translations[lang]);
          }
        }
        /**
         * Retrieves the given translations
         * @private
         * @param {?} lang
         * @return {?}
         */

      }, {
        key: "retrieveTranslations",
        value: function retrieveTranslations(lang) {
          /** @type {?} */
          var pending; // if this language is unavailable or extend is true, ask for it

          if (typeof this.translations[lang] === "undefined" || this.extend) {
            this._translationRequests[lang] = this._translationRequests[lang] || this.getTranslation(lang);
            pending = this._translationRequests[lang];
          }

          return pending;
        }
        /**
         * Gets an object of translations for a given language with the current loader
         * and passes it through the compiler
         * @param {?} lang
         * @return {?}
         */

      }, {
        key: "getTranslation",
        value: function getTranslation(lang) {
          var _this5 = this;

          this.pending = true;
          /** @type {?} */

          var loadingTranslations = this.currentLoader.getTranslation(lang).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
          this.loadingTranslations = loadingTranslations.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
          /**
          * @param {?} res
          * @return {?}
          */
          function (res) {
            return _this5.compiler.compileTranslations(res, lang);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
          this.loadingTranslations.subscribe({
            next:
            /**
            * @param {?} res
            * @return {?}
            */
            function next(res) {
              _this5.translations[lang] = _this5.extend && _this5.translations[lang] ? Object.assign(Object.assign({}, res), _this5.translations[lang]) : res;

              _this5.updateLangs();

              _this5.pending = false;
            },
            error:
            /**
            * @param {?} err
            * @return {?}
            */
            function error(err) {
              _this5.pending = false;
            }
          });
          return loadingTranslations;
        }
        /**
         * Manually sets an object of translations for a given language
         * after passing it through the compiler
         * @param {?} lang
         * @param {?} translations
         * @param {?=} shouldMerge
         * @return {?}
         */

      }, {
        key: "setTranslation",
        value: function setTranslation(lang, translations) {
          var shouldMerge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          translations = this.compiler.compileTranslations(translations, lang);

          if ((shouldMerge || this.extend) && this.translations[lang]) {
            this.translations[lang] = mergeDeep(this.translations[lang], translations);
          } else {
            this.translations[lang] = translations;
          }

          this.updateLangs();
          this.onTranslationChange.emit({
            lang: lang,
            translations: this.translations[lang]
          });
        }
        /**
         * Returns an array of currently available langs
         * @return {?}
         */

      }, {
        key: "getLangs",
        value: function getLangs() {
          return this.langs;
        }
        /**
         * Add available langs
         * @param {?} langs
         * @return {?}
         */

      }, {
        key: "addLangs",
        value: function addLangs(langs) {
          var _this6 = this;

          langs.forEach(
          /**
          * @param {?} lang
          * @return {?}
          */
          function (lang) {
            if (_this6.langs.indexOf(lang) === -1) {
              _this6.langs.push(lang);
            }
          });
        }
        /**
         * Update the list of available langs
         * @private
         * @return {?}
         */

      }, {
        key: "updateLangs",
        value: function updateLangs() {
          this.addLangs(Object.keys(this.translations));
        }
        /**
         * Returns the parsed result of the translations
         * @param {?} translations
         * @param {?} key
         * @param {?=} interpolateParams
         * @return {?}
         */

      }, {
        key: "getParsedResult",
        value: function getParsedResult(translations, key, interpolateParams) {
          /** @type {?} */
          var res;

          if (key instanceof Array) {
            /** @type {?} */
            var result = {};
            /** @type {?} */

            var observables = false;

            var _iterator = _createForOfIteratorHelper(key),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var k = _step.value;
                result[k] = this.getParsedResult(translations, k, interpolateParams);

                if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(result[k])) {
                  observables = true;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (observables) {
              /** @type {?} */
              var sources = key.map(
              /**
              * @param {?} k
              * @return {?}
              */
              function (k) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(result[k]) ? result[k] : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(
                /** @type {?} */
                result[k]);
              });
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(sources).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
              /**
              * @param {?} arr
              * @return {?}
              */
              function (arr) {
                /** @type {?} */
                var obj = {};
                arr.forEach(
                /**
                * @param {?} value
                * @param {?} index
                * @return {?}
                */
                function (value, index) {
                  obj[key[index]] = value;
                });
                return obj;
              }));
            }

            return result;
          }

          if (translations) {
            res = this.parser.interpolate(this.parser.getValue(translations, key), interpolateParams);
          }

          if (typeof res === "undefined" && this.defaultLang != null && this.defaultLang !== this.currentLang && this.useDefaultLang) {
            res = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], key), interpolateParams);
          }

          if (typeof res === "undefined") {
            /** @type {?} */
            var params = {
              key: key,
              translateService: this
            };

            if (typeof interpolateParams !== 'undefined') {
              params.interpolateParams = interpolateParams;
            }

            res = this.missingTranslationHandler.handle(params);
          }

          return typeof res !== "undefined" ? res : key;
        }
        /**
         * Gets the translated value of a key (or an array of keys)
         * @param {?} key
         * @param {?=} interpolateParams
         * @return {?} the translated key, or an object of translated keys
         */

      }, {
        key: "get",
        value: function get(key, interpolateParams) {
          var _this7 = this;

          if (!isDefined(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
          } // check if we are loading a new translation to use


          if (this.pending) {
            return this.loadingTranslations.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(
            /**
            * @param {?} res
            * @return {?}
            */
            function (res) {
              res = _this7.getParsedResult(res, key, interpolateParams);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res) ? res : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(res);
            }));
          } else {
            /** @type {?} */
            var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res) ? res : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(res);
          }
        }
        /**
         * Returns a stream of translated values of a key (or an array of keys) which updates
         * whenever the translation changes.
         * @param {?} key
         * @param {?=} interpolateParams
         * @return {?} A stream of the translated key, or an object of translated keys
         */

      }, {
        key: "getStreamOnTranslationChange",
        value: function getStreamOnTranslationChange(key, interpolateParams) {
          var _this8 = this;

          if (!isDefined(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(
          /**
          * @return {?}
          */
          function () {
            return _this8.get(key, interpolateParams);
          }), this.onTranslationChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            /** @type {?} */
            var res = _this8.getParsedResult(event.translations, key, interpolateParams);

            if (typeof res.subscribe === 'function') {
              return res;
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(res);
            }
          })));
        }
        /**
         * Returns a stream of translated values of a key (or an array of keys) which updates
         * whenever the language changes.
         * @param {?} key
         * @param {?=} interpolateParams
         * @return {?} A stream of the translated key, or an object of translated keys
         */

      }, {
        key: "stream",
        value: function stream(key, interpolateParams) {
          var _this9 = this;

          if (!isDefined(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])(
          /**
          * @return {?}
          */
          function () {
            return _this9.get(key, interpolateParams);
          }), this.onLangChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            /** @type {?} */
            var res = _this9.getParsedResult(event.translations, key, interpolateParams);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res) ? res : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(res);
          })));
        }
        /**
         * Returns a translation instantly from the internal state of loaded translation.
         * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
         * @param {?} key
         * @param {?=} interpolateParams
         * @return {?}
         */

      }, {
        key: "instant",
        value: function instant(key, interpolateParams) {
          if (!isDefined(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
          }
          /** @type {?} */


          var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);

          if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res)) {
            if (key instanceof Array) {
              /** @type {?} */
              var obj = {};
              key.forEach(
              /**
              * @param {?} value
              * @param {?} index
              * @return {?}
              */
              function (value, index) {
                obj[key[index]] = key[index];
              });
              return obj;
            }

            return key;
          } else {
            return res;
          }
        }
        /**
         * Sets the translated value of a key, after compiling it
         * @param {?} key
         * @param {?} value
         * @param {?=} lang
         * @return {?}
         */

      }, {
        key: "set",
        value: function set(key, value) {
          var lang = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.currentLang;
          this.translations[lang][key] = this.compiler.compile(value, lang);
          this.updateLangs();
          this.onTranslationChange.emit({
            lang: lang,
            translations: this.translations[lang]
          });
        }
        /**
         * Changes the current lang
         * @private
         * @param {?} lang
         * @return {?}
         */

      }, {
        key: "changeLang",
        value: function changeLang(lang) {
          this.currentLang = lang;
          this.onLangChange.emit({
            lang: lang,
            translations: this.translations[lang]
          }); // if there is no default lang, use the one that we just set

          if (this.defaultLang == null) {
            this.changeDefaultLang(lang);
          }
        }
        /**
         * Changes the default lang
         * @private
         * @param {?} lang
         * @return {?}
         */

      }, {
        key: "changeDefaultLang",
        value: function changeDefaultLang(lang) {
          this.defaultLang = lang;
          this.onDefaultLangChange.emit({
            lang: lang,
            translations: this.translations[lang]
          });
        }
        /**
         * Allows to reload the lang file from the file
         * @param {?} lang
         * @return {?}
         */

      }, {
        key: "reloadLang",
        value: function reloadLang(lang) {
          this.resetLang(lang);
          return this.getTranslation(lang);
        }
        /**
         * Deletes inner translation
         * @param {?} lang
         * @return {?}
         */

      }, {
        key: "resetLang",
        value: function resetLang(lang) {
          this._translationRequests[lang] = undefined;
          this.translations[lang] = undefined;
        }
        /**
         * Returns the language code name from the browser, e.g. "de"
         * @return {?}
         */

      }, {
        key: "getBrowserLang",
        value: function getBrowserLang() {
          if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
          }
          /** @type {?} */


          var browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
          browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;

          if (typeof browserLang === 'undefined') {
            return undefined;
          }

          if (browserLang.indexOf('-') !== -1) {
            browserLang = browserLang.split('-')[0];
          }

          if (browserLang.indexOf('_') !== -1) {
            browserLang = browserLang.split('_')[0];
          }

          return browserLang;
        }
        /**
         * Returns the culture language code name from the browser, e.g. "de-DE"
         * @return {?}
         */

      }, {
        key: "getBrowserCultureLang",
        value: function getBrowserCultureLang() {
          if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
          }
          /** @type {?} */


          var browserCultureLang = window.navigator.languages ? window.navigator.languages[0] : null;
          browserCultureLang = browserCultureLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
          return browserCultureLang;
        }
      }, {
        key: "onTranslationChange",
        get: function get() {
          return this.isolate ? this._onTranslationChange : this.store.onTranslationChange;
        }
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         * @return {?}
         */

      }, {
        key: "onLangChange",
        get: function get() {
          return this.isolate ? this._onLangChange : this.store.onLangChange;
        }
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         * @return {?}
         */

      }, {
        key: "onDefaultLangChange",
        get: function get() {
          return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange;
        }
        /**
         * The default lang to fallback when translations are missing on the current lang
         * @return {?}
         */

      }, {
        key: "defaultLang",
        get: function get() {
          return this.isolate ? this._defaultLang : this.store.defaultLang;
        }
        /**
         * @param {?} defaultLang
         * @return {?}
         */
        ,
        set: function set(defaultLang) {
          if (this.isolate) {
            this._defaultLang = defaultLang;
          } else {
            this.store.defaultLang = defaultLang;
          }
        }
        /**
         * The lang currently used
         * @return {?}
         */

      }, {
        key: "currentLang",
        get: function get() {
          return this.isolate ? this._currentLang : this.store.currentLang;
        }
        /**
         * @param {?} currentLang
         * @return {?}
         */
        ,
        set: function set(currentLang) {
          if (this.isolate) {
            this._currentLang = currentLang;
          } else {
            this.store.currentLang = currentLang;
          }
        }
        /**
         * an array of langs
         * @return {?}
         */

      }, {
        key: "langs",
        get: function get() {
          return this.isolate ? this._langs : this.store.langs;
        }
        /**
         * @param {?} langs
         * @return {?}
         */
        ,
        set: function set(langs) {
          if (this.isolate) {
            this._langs = langs;
          } else {
            this.store.langs = langs;
          }
        }
        /**
         * a list of translations per lang
         * @return {?}
         */

      }, {
        key: "translations",
        get: function get() {
          return this.isolate ? this._translations : this.store.translations;
        }
        /**
         * @param {?} translations
         * @return {?}
         */
        ,
        set: function set(translations) {
          if (this.isolate) {
            this._translations = translations;
          } else {
            this.store.translations = translations;
          }
        }
      }]);

      return TranslateService;
    }();

    TranslateService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    TranslateService.ctorParameters = function () {
      return [{
        type: TranslateStore
      }, {
        type: TranslateLoader
      }, {
        type: TranslateCompiler
      }, {
        type: TranslateParser
      }, {
        type: MissingTranslationHandler
      }, {
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [USE_DEFAULT_LANG]
        }]
      }, {
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [USE_STORE]
        }]
      }, {
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [USE_EXTEND]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [DEFAULT_LANGUAGE]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TranslateDirective = /*#__PURE__*/function () {
      /**
       * @param {?} translateService
       * @param {?} element
       * @param {?} _ref
       */
      function TranslateDirective(translateService, element, _ref) {
        var _this10 = this;

        _classCallCheck(this, TranslateDirective);

        this.translateService = translateService;
        this.element = element;
        this._ref = _ref; // subscribe to onTranslationChange event, in case the translations of the current lang change

        if (!this.onTranslationChangeSub) {
          this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            if (event.lang === _this10.translateService.currentLang) {
              _this10.checkNodes(true, event.translations);
            }
          });
        } // subscribe to onLangChange event, in case the language changes


        if (!this.onLangChangeSub) {
          this.onLangChangeSub = this.translateService.onLangChange.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this10.checkNodes(true, event.translations);
          });
        } // subscribe to onDefaultLangChange event, in case the default language changes


        if (!this.onDefaultLangChangeSub) {
          this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this10.checkNodes(true);
          });
        }
      }
      /**
       * @param {?} key
       * @return {?}
       */


      _createClass(TranslateDirective, [{
        key: "ngAfterViewChecked",

        /**
         * @return {?}
         */
        value: function ngAfterViewChecked() {
          this.checkNodes();
        }
        /**
         * @param {?=} forceUpdate
         * @param {?=} translations
         * @return {?}
         */

      }, {
        key: "checkNodes",
        value: function checkNodes() {
          var forceUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var translations = arguments.length > 1 ? arguments[1] : undefined;

          /** @type {?} */
          var nodes = this.element.nativeElement.childNodes; // if the element is empty

          if (!nodes.length) {
            // we add the key as content
            this.setContent(this.element.nativeElement, this.key);
            nodes = this.element.nativeElement.childNodes;
          }

          for (var i = 0; i < nodes.length; ++i) {
            /** @type {?} */
            var node = nodes[i];

            if (node.nodeType === 3) {
              // node type 3 is a text node
              // node type 3 is a text node

              /** @type {?} */
              var key = void 0;

              if (forceUpdate) {
                node.lastKey = null;
              }

              if (isDefined(node.lookupKey)) {
                key = node.lookupKey;
              } else if (this.key) {
                key = this.key;
              } else {
                /** @type {?} */
                var content = this.getContent(node);
                /** @type {?} */

                var trimmedContent = content.trim();

                if (trimmedContent.length) {
                  node.lookupKey = trimmedContent; // we want to use the content as a key, not the translation value

                  if (content !== node.currentValue) {
                    key = trimmedContent; // the content was changed from the user, we'll use it as a reference if needed

                    node.originalContent = content || node.originalContent;
                  } else if (node.originalContent) {
                    // the content seems ok, but the lang has changed
                    // the current content is the translation, not the key, use the last real content as key
                    key = node.originalContent.trim();
                  } else if (content !== node.currentValue) {
                    // we want to use the content as a key, not the translation value
                    key = trimmedContent; // the content was changed from the user, we'll use it as a reference if needed

                    node.originalContent = content || node.originalContent;
                  }
                }
              }

              this.updateValue(key, node, translations);
            }
          }
        }
        /**
         * @param {?} key
         * @param {?} node
         * @param {?} translations
         * @return {?}
         */

      }, {
        key: "updateValue",
        value: function updateValue(key, node, translations) {
          var _this11 = this;

          if (key) {
            if (node.lastKey === key && this.lastParams === this.currentParams) {
              return;
            }

            this.lastParams = this.currentParams;
            /** @type {?} */

            var onTranslation =
            /**
            * @param {?} res
            * @return {?}
            */
            function onTranslation(res) {
              if (res !== key) {
                node.lastKey = key;
              }

              if (!node.originalContent) {
                node.originalContent = _this11.getContent(node);
              }

              node.currentValue = isDefined(res) ? res : node.originalContent || key; // we replace in the original content to preserve spaces that we might have trimmed

              _this11.setContent(node, _this11.key ? node.currentValue : node.originalContent.replace(key, node.currentValue));

              _this11._ref.markForCheck();
            };

            if (isDefined(translations)) {
              /** @type {?} */
              var res = this.translateService.getParsedResult(translations, key, this.currentParams);

              if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res)) {
                res.subscribe(onTranslation);
              } else {
                onTranslation(res);
              }
            } else {
              this.translateService.get(key, this.currentParams).subscribe(onTranslation);
            }
          }
        }
        /**
         * @param {?} node
         * @return {?}
         */

      }, {
        key: "getContent",
        value: function getContent(node) {
          return isDefined(node.textContent) ? node.textContent : node.data;
        }
        /**
         * @param {?} node
         * @param {?} content
         * @return {?}
         */

      }, {
        key: "setContent",
        value: function setContent(node, content) {
          if (isDefined(node.textContent)) {
            node.textContent = content;
          } else {
            node.data = content;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.onLangChangeSub) {
            this.onLangChangeSub.unsubscribe();
          }

          if (this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub.unsubscribe();
          }

          if (this.onTranslationChangeSub) {
            this.onTranslationChangeSub.unsubscribe();
          }
        }
      }, {
        key: "translate",
        set: function set(key) {
          if (key) {
            this.key = key;
            this.checkNodes();
          }
        }
        /**
         * @param {?} params
         * @return {?}
         */

      }, {
        key: "translateParams",
        set: function set(params) {
          if (!equals(this.currentParams, params)) {
            this.currentParams = params;
            this.checkNodes(true);
          }
        }
      }]);

      return TranslateDirective;
    }();

    TranslateDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[translate],[ngx-translate]'
      }]
    }];
    /** @nocollapse */

    TranslateDirective.ctorParameters = function () {
      return [{
        type: TranslateService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    TranslateDirective.propDecorators = {
      translate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      translateParams: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TranslatePipe = /*#__PURE__*/function () {
      /**
       * @param {?} translate
       * @param {?} _ref
       */
      function TranslatePipe(translate, _ref) {
        _classCallCheck(this, TranslatePipe);

        this.translate = translate;
        this._ref = _ref;
        this.value = '';
      }
      /**
       * @param {?} key
       * @param {?=} interpolateParams
       * @param {?=} translations
       * @return {?}
       */


      _createClass(TranslatePipe, [{
        key: "updateValue",
        value: function updateValue(key, interpolateParams, translations) {
          var _this12 = this;

          /** @type {?} */
          var onTranslation =
          /**
          * @param {?} res
          * @return {?}
          */
          function onTranslation(res) {
            _this12.value = res !== undefined ? res : key;
            _this12.lastKey = key;

            _this12._ref.markForCheck();
          };

          if (translations) {
            /** @type {?} */
            var res = this.translate.getParsedResult(translations, key, interpolateParams);

            if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res.subscribe)) {
              res.subscribe(onTranslation);
            } else {
              onTranslation(res);
            }
          }

          this.translate.get(key, interpolateParams).subscribe(onTranslation);
        }
        /**
         * @param {?} query
         * @param {...?} args
         * @return {?}
         */

      }, {
        key: "transform",
        value: function transform(query) {
          var _this13 = this;

          if (!query || !query.length) {
            return query;
          } // if we ask another time for the same key, return the last value


          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          if (equals(query, this.lastKey) && equals(args, this.lastParams)) {
            return this.value;
          }
          /** @type {?} */


          var interpolateParams;

          if (isDefined(args[0]) && args.length) {
            if (typeof args[0] === 'string' && args[0].length) {
              // we accept objects written in the template such as {n:1}, {'n':1}, {n:'v'}
              // which is why we might need to change it to real JSON objects such as {"n":1} or {"n":"v"}

              /** @type {?} */
              var validArgs = args[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":').replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');

              try {
                interpolateParams = JSON.parse(validArgs);
              } catch (e) {
                throw new SyntaxError("Wrong parameter in TranslatePipe. Expected a valid Object, received: ".concat(args[0]));
              }
            } else if (typeof args[0] === 'object' && !Array.isArray(args[0])) {
              interpolateParams = args[0];
            }
          } // store the query, in case it changes


          this.lastKey = query; // store the params, in case they change

          this.lastParams = args; // set the value

          this.updateValue(query, interpolateParams); // if there is a subscription to onLangChange, clean it

          this._dispose(); // subscribe to onTranslationChange event, in case the translations change


          if (!this.onTranslationChange) {
            this.onTranslationChange = this.translate.onTranslationChange.subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              if (_this13.lastKey && event.lang === _this13.translate.currentLang) {
                _this13.lastKey = null;

                _this13.updateValue(query, interpolateParams, event.translations);
              }
            });
          } // subscribe to onLangChange event, in case the language changes


          if (!this.onLangChange) {
            this.onLangChange = this.translate.onLangChange.subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              if (_this13.lastKey) {
                _this13.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated

                _this13.updateValue(query, interpolateParams, event.translations);
              }
            });
          } // subscribe to onDefaultLangChange event, in case the default language changes


          if (!this.onDefaultLangChange) {
            this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe(
            /**
            * @return {?}
            */
            function () {
              if (_this13.lastKey) {
                _this13.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated

                _this13.updateValue(query, interpolateParams);
              }
            });
          }

          return this.value;
        }
        /**
         * Clean any existing subscription to change events
         * @private
         * @return {?}
         */

      }, {
        key: "_dispose",
        value: function _dispose() {
          if (typeof this.onTranslationChange !== 'undefined') {
            this.onTranslationChange.unsubscribe();
            this.onTranslationChange = undefined;
          }

          if (typeof this.onLangChange !== 'undefined') {
            this.onLangChange.unsubscribe();
            this.onLangChange = undefined;
          }

          if (typeof this.onDefaultLangChange !== 'undefined') {
            this.onDefaultLangChange.unsubscribe();
            this.onDefaultLangChange = undefined;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._dispose();
        }
      }]);

      return TranslatePipe;
    }();

    TranslatePipe.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
      args: [{
        name: 'translate',
        pure: false // required to update the value when the promise is resolved

      }]
    }];
    /** @nocollapse */

    TranslatePipe.ctorParameters = function () {
      return [{
        type: TranslateService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function TranslateModuleConfig() {}

    if (false) {}

    var TranslateModule = /*#__PURE__*/function () {
      function TranslateModule() {
        _classCallCheck(this, TranslateModule);
      }

      _createClass(TranslateModule, null, [{
        key: "forRoot",

        /**
         * Use this method in your root module to provide the TranslateService
         * @param {?=} config
         * @return {?}
         */
        value: function forRoot() {
          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: TranslateModule,
            providers: [config.loader || {
              provide: TranslateLoader,
              useClass: TranslateFakeLoader
            }, config.compiler || {
              provide: TranslateCompiler,
              useClass: TranslateFakeCompiler
            }, config.parser || {
              provide: TranslateParser,
              useClass: TranslateDefaultParser
            }, config.missingTranslationHandler || {
              provide: MissingTranslationHandler,
              useClass: FakeMissingTranslationHandler
            }, TranslateStore, {
              provide: USE_STORE,
              useValue: config.isolate
            }, {
              provide: USE_DEFAULT_LANG,
              useValue: config.useDefaultLang
            }, {
              provide: USE_EXTEND,
              useValue: config.extend
            }, {
              provide: DEFAULT_LANGUAGE,
              useValue: config.defaultLanguage
            }, TranslateService]
          };
        }
        /**
         * Use this method in your other (non root) modules to import the directive/pipe
         * @param {?=} config
         * @return {?}
         */

      }, {
        key: "forChild",
        value: function forChild() {
          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: TranslateModule,
            providers: [config.loader || {
              provide: TranslateLoader,
              useClass: TranslateFakeLoader
            }, config.compiler || {
              provide: TranslateCompiler,
              useClass: TranslateFakeCompiler
            }, config.parser || {
              provide: TranslateParser,
              useClass: TranslateDefaultParser
            }, config.missingTranslationHandler || {
              provide: MissingTranslationHandler,
              useClass: FakeMissingTranslationHandler
            }, {
              provide: USE_STORE,
              useValue: config.isolate
            }, {
              provide: USE_DEFAULT_LANG,
              useValue: config.useDefaultLang
            }, {
              provide: USE_EXTEND,
              useValue: config.extend
            }, {
              provide: DEFAULT_LANGUAGE,
              useValue: config.defaultLanguage
            }, TranslateService]
          };
        }
      }]);

      return TranslateModule;
    }();

    TranslateModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [TranslatePipe, TranslateDirective],
        exports: [TranslatePipe, TranslateDirective]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-translate-core.js.map

    /***/
  },

  /***/
  "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js ***!
    \***************************************************************************************/

  /*! exports provided: TranslateHttpLoader */

  /***/
  function node_modulesNgxTranslateHttpLoaderFesm2015NgxTranslateHttpLoaderJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateHttpLoader", function () {
      return TranslateHttpLoader;
    });

    var TranslateHttpLoader = /*#__PURE__*/function () {
      function TranslateHttpLoader(http) {
        var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/assets/i18n/";
        var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ".json";

        _classCallCheck(this, TranslateHttpLoader);

        this.http = http;
        this.prefix = prefix;
        this.suffix = suffix;
      }
      /**
       * Gets the translations from the server
       */


      _createClass(TranslateHttpLoader, [{
        key: "getTranslation",
        value: function getTranslation(lang) {
          return this.http.get("".concat(this.prefix).concat(lang).concat(this.suffix));
        }
      }]);

      return TranslateHttpLoader;
    }();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-translate-http-loader.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/login.page.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/login.page.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublicLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\n  <div class=\"login-logo\">\n    <img src=\"../../../assets/images/paj-logo.png\">\n  </div>\n  <div class=\"field-box\">\n    <!-- {{ 'HOME.text' | translate }} -->\n    <ion-list>\n      <form #f=\"ngForm\" (ngSubmit)=\"login(f)\">\n        <ion-item>\n          <ion-icon class=\"flaticon-email\" slot=\"start\"></ion-icon>\n          <ion-input type=\"text\" placeholder=\"Email\" ngModel name=\"email\" [(ngModel)]=\"email\" required class=\"ion-margin-start\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-icon class=\"flaticon-key\" slot=\"start\"></ion-icon>\n          <ion-input [type]=\"passwordType\" placeholder=\"Password\" ngModel name=\"password\" [(ngModel)]=\"password\" required class=\"ion-margin-start\"></ion-input>\n          <ion-icon [name]=\"passwordIcon\" (click)='hideShowPassword()' slot=\"end\"></ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-icon class=\"flaticon-world\" slot=\"start\"></ion-icon>\n          <ion-label>Language</ion-label>\n          <ion-select placeholder=\"Select One\" name=\"language\" [(ngModel)]=\"selectedLanguage\" (ionChange)=\"languageChanged()\">\n            <ion-select-option value=\"en\">English</ion-select-option>\n            <ion-select-option value=\"ko\">Korean</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </form>\n      <ion-item class=\"login-link ion-text-center\">\n        Forgot Your <a href=\"javascript:void(0);\" (click)=\"vergessenPasswort()\"> Password?</a> \n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"block\" size=\"large\" [disabled]=\"!f.valid\" (click)=\"login(f);\">\n      Login <ion-icon class=\"flaticon-arrow-pointing-to-right\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/public/login/login.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/public/login/login.module.ts ***!
    \**********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPublicLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/public/login/login.page.ts");
    /* harmony import */


    var src_app_shared_language_language_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/language/language.module */
    "./src/app/shared/language/language.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }];

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [src_app_shared_language_language_module__WEBPACK_IMPORTED_MODULE_7__["LanguageModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/public/login/login.page.scss":
  /*!**********************************************!*\
    !*** ./src/app/public/login/login.page.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPublicLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  padding: 10px;\n}\nion-header ion-toolbar {\n  --background: transparent;\n}\nion-content ion-input {\n  --padding-top: 11px;\n}\nion-content::after {\n  content: \"\";\n  background: url('splash.jpg') no-repeat 52% center/cover;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n}\nion-content .login-logo {\n  text-align: center;\n  padding: 50px 0 0;\n  position: relative;\n  z-index: 2;\n}\nion-content .login-logo img {\n  width: 200px;\n}\n.field-box {\n  color: var(--white);\n  padding: 20px;\n  position: relative;\n  z-index: 2;\n}\n.field-box ion-list {\n  background: transparent;\n}\n.field-box ion-list ion-item {\n  display: block;\n  --background: rgba(255, 255, 255, 0.2);\n  --color: var(--white);\n  border-radius: 5px;\n  opacity: 10;\n  margin-bottom: 13px;\n}\n.field-box ion-list ion-item ion-icon {\n  color: var(--white);\n  margin-right: 6px;\n  font-size: 17px;\n  line-height: 18px;\n  width: 24px;\n  line-height: 18px;\n}\n.field-box ion-list ion-item .flaticon-visibility-button {\n  margin: 0;\n  color: #a49d9d;\n}\n.field-box ion-list ion-item.login-link {\n  --background: transparent;\n  color: var(--white);\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  width: 100%;\n}\n.field-box ion-list ion-item.login-link .item-inner {\n  --text-align: center;\n}\n.field-box ion-list ion-item.login-link a {\n  margin: 0 0 0 6px;\n}\n.field-box ion-list ion-select {\n  width: 100%;\n  display: contents;\n}\nion-footer {\n  padding: 10px;\n}\nion-footer ion-toolbar {\n  --background: transparent;\n}\nion-footer ion-toolbar ion-button {\n  text-transform: capitalize;\n  font-weight: normal;\n  font-size: 17px;\n}\nion-footer ion-toolbar ion-button ion-icon {\n  font-size: 16px;\n  margin: 4px 0 0 5px;\n  width: 29px;\n  height: 20px;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL2FwcHMvdGVzdC1wYWovc3JjL2FwcC9wdWJsaWMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wdWJsaWMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtBQ0FKO0FEQ0k7RUFDSSx5QkFBQTtBQ0NSO0FEaUJJO0VBQ0ksbUJBQUE7QUNkUjtBRGdCSTtFQUNJLFdBQUE7RUFDQSx3REFBQTtFQUNBLGVBQUE7RUFBaUIsTUFBQTtFQUFRLFFBQUE7RUFBVSxTQUFBO0VBQVcsT0FBQTtFQUFRLFVBQUE7QUNUOUQ7QURZSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNWUjtBRFdRO0VBQ0ksWUFBQTtBQ1RaO0FEY0E7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNYSjtBRGFJO0VBQ0ksdUJBQUE7QUNYUjtBRFlRO0VBQ0ksY0FBQTtFQUNBLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ1ZaO0FEV1k7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0FDVmhCO0FEWVk7RUFDSSxTQUFBO0VBQ0EsY0FBQTtBQ1ZoQjtBRFlZO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDVmhCO0FEV2dCO0VBQ0ksb0JBQUE7QUNUcEI7QURXZ0I7RUFDSSxpQkFBQTtBQ1RwQjtBRGFRO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDWFo7QURnQkE7RUFDSSxhQUFBO0FDYko7QURjSTtFQUNJLHlCQUFBO0FDWlI7QURjUTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDWlo7QURhWTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNYaEIiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24taGVhZGVye1xuICAgIHBhZGRpbmc6IDEwcHg7IFxuICAgIGlvbi10b29sYmFye1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBcbiAgICAgICAgLy8gaW9uLWJ1dHRvbntcbiAgICAgICAgLy8gICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAvLyAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgLy8gICAgIGlvbi1pY29ue1xuICAgICAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgLy8gICAgICAgICBtYXJnaW46IDAgMCAwIDdweDtcbiAgICAgICAgLy8gICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxufVxuXG5cblxuaW9uLWNvbnRlbnR7XG4gICAgaW9uLWlucHV0IHtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMTFweDtcbiAgICB9XG4gICAgJjo6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NwbGFzaC5qcGcpIG5vLXJlcGVhdCA1MiUgY2VudGVyL2NvdmVyO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IHRvcDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDsgbGVmdDogMDt6LWluZGV4OjE7XG4gICAgfVxuICAgXG4gICAgLmxvZ2luLWxvZ297XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNTBweCAwIDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICB9XG4gICAgfVxuICBcbn1cbi5maWVsZC1ib3h7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgaW9uLWxpc3R7XG4gICAgICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mbGF0aWNvbi12aXNpYmlsaXR5LWJ1dHRvbntcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNhNDlkOWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmxvZ2luLWxpbmt7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIC5pdGVtLWlubmVye1xuICAgICAgICAgICAgICAgICAgICAtLXRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCA2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1zZWxlY3R7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzOyAgIFxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tZm9vdGVye1xuICAgIHBhZGRpbmc6IDEwcHg7IFxuICAgIGlvbi10b29sYmFye1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBcbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDRweCAwIDAgNXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyOXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCJpb24taGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tY29udGVudCBpb24taW5wdXQge1xuICAtLXBhZGRpbmctdG9wOiAxMXB4O1xufVxuaW9uLWNvbnRlbnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3BsYXNoLmpwZykgbm8tcmVwZWF0IDUyJSBjZW50ZXIvY292ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuaW9uLWNvbnRlbnQgLmxvZ2luLWxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUwcHggMCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG5pb24tY29udGVudCAubG9naW4tbG9nbyBpbWcge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5maWVsZC1ib3gge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG4uZmllbGQtYm94IGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uZmllbGQtYm94IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3BhY2l0eTogMTA7XG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XG59XG4uZmllbGQtYm94IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbi5maWVsZC1ib3ggaW9uLWxpc3QgaW9uLWl0ZW0gLmZsYXRpY29uLXZpc2liaWxpdHktYnV0dG9uIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogI2E0OWQ5ZDtcbn1cbi5maWVsZC1ib3ggaW9uLWxpc3QgaW9uLWl0ZW0ubG9naW4tbGluayB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbi5maWVsZC1ib3ggaW9uLWxpc3QgaW9uLWl0ZW0ubG9naW4tbGluayAuaXRlbS1pbm5lciB7XG4gIC0tdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZpZWxkLWJveCBpb24tbGlzdCBpb24taXRlbS5sb2dpbi1saW5rIGEge1xuICBtYXJnaW46IDAgMCAwIDZweDtcbn1cbi5maWVsZC1ib3ggaW9uLWxpc3QgaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuaW9uLWZvb3RlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogNHB4IDAgMCA1cHg7XG4gIHdpZHRoOiAyOXB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/public/login/login.page.ts":
  /*!********************************************!*\
    !*** ./src/app/public/login/login.page.ts ***!
    \********************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPublicLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _constants_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../constants.enum */
    "./src/app/constants.enum.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/translate-config.service */
    "./src/app/translate-config.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(authService, loadingCtrl, toastCtrl, router, platform, authenticationService, storage, translateConfigService) {
        _classCallCheck(this, LoginPage);

        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.platform = platform;
        this.authenticationService = authenticationService;
        this.storage = storage;
        this.translateConfigService = translateConfigService;
        this.passwordType = 'password';
        this.passwordIcon = 'eye'; // email: string = 'testkunde@paj-gps.de';
        // password: string = 'app123#.';

        this.email = '';
        this.password = '';
        this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
      }

      _createClass(LoginPage, [{
        key: "languageChanged",
        value: function languageChanged() {
          this.translateConfigService.setLanguage(this.selectedLanguage);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // console.log('View Called');
                    this.subscription = this.platform.backButton.subscribe(function () {
                      navigator['app'].exitApp();
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "login",
        value: function login(form) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    // this.authService.login();
                    // const loading = await this.loadingCtrl.create({
                    //   message: 'Please Wait',
                    //   translucent: true,
                    // });
                    // await loading.present();
                    this.storage.set(_constants_enum__WEBPACK_IMPORTED_MODULE_5__["Constants"].MAP, 'osm'); // by default open street maps

                    this.storage.set(_constants_enum__WEBPACK_IMPORTED_MODULE_5__["Constants"].ROUTE_ICON, 'circle'); // bydefault its circle

                    this.storage.set(_constants_enum__WEBPACK_IMPORTED_MODULE_5__["Constants"].UPDATE_MAP, 0);
                    this.storage.set(_constants_enum__WEBPACK_IMPORTED_MODULE_5__["Constants"].UPDATE_STYLE, 0);
                    _context2.next = 6;
                    return this.authService.login(form.value.email, form.value.password);

                  case 6:
                    // await this.authenticationService.authenticationState.subscribe(state => {
                    // });
                    // loading.dismiss();
                    this.email = '';
                    this.password = ''; // console.log(data);

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "vergessenPasswort",
        value: function vergessenPasswort() {
          this.router.navigate(['/forget-password']);
        }
      }, {
        key: "hideShowPassword",
        value: function hideShowPassword() {
          this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
          this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_7__["TranslateConfigService"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/public/login/login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_7__["TranslateConfigService"]])], LoginPage);
    /***/
  },

  /***/
  "./src/app/shared/language/language.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/language/language.module.ts ***!
    \****************************************************/

  /*! exports provided: LanguageLoader, LanguageModule */

  /***/
  function srcAppSharedLanguageLanguageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageLoader", function () {
      return LanguageLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageModule", function () {
      return LanguageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _translate_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../translate-config.service */
    "./src/app/translate-config.service.ts"); // Multiple Language


    function LanguageLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
    }

    var LanguageModule = function LanguageModule() {
      _classCallCheck(this, LanguageModule);
    };

    LanguageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
          useFactory: LanguageLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
        }
      })],
      providers: [_translate_config_service__WEBPACK_IMPORTED_MODULE_6__["TranslateConfigService"]]
    })], LanguageModule);
    /***/
  },

  /***/
  "./src/app/translate-config.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/translate-config.service.ts ***!
    \*********************************************/

  /*! exports provided: TranslateConfigService */

  /***/
  function srcAppTranslateConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateConfigService", function () {
      return TranslateConfigService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var TranslateConfigService = /*#__PURE__*/function () {
      function TranslateConfigService(translate) {
        _classCallCheck(this, TranslateConfigService);

        this.translate = translate;
      }

      _createClass(TranslateConfigService, [{
        key: "getDefaultLanguage",
        value: function getDefaultLanguage() {
          var language = this.translate.getBrowserLang();
          this.translate.setDefaultLang(language);
          return language;
        }
      }, {
        key: "setLanguage",
        value: function setLanguage(setLang) {
          this.translate.use(setLang);
        }
      }]);

      return TranslateConfigService;
    }();

    TranslateConfigService.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }];
    };

    TranslateConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])], TranslateConfigService);
    /***/
  }
}]);
//# sourceMappingURL=public-login-login-module-es5.js.map