(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-login-login-module"],{

/***/ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js ***!
  \*************************************************************************/
/*! exports provided: DEFAULT_LANGUAGE, FakeMissingTranslationHandler, MissingTranslationHandler, TranslateCompiler, TranslateDefaultParser, TranslateDirective, TranslateFakeCompiler, TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateParser, TranslatePipe, TranslateService, TranslateStore, USE_DEFAULT_LANG, USE_EXTEND, USE_STORE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LANGUAGE", function() { return DEFAULT_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeMissingTranslationHandler", function() { return FakeMissingTranslationHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingTranslationHandler", function() { return MissingTranslationHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateCompiler", function() { return TranslateCompiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateDefaultParser", function() { return TranslateDefaultParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateDirective", function() { return TranslateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateFakeCompiler", function() { return TranslateFakeCompiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateFakeLoader", function() { return TranslateFakeLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateLoader", function() { return TranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateModule", function() { return TranslateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateParser", function() { return TranslateParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateStore", function() { return TranslateStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_DEFAULT_LANG", function() { return USE_DEFAULT_LANG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_EXTEND", function() { return USE_EXTEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_STORE", function() { return USE_STORE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class TranslateLoader {
}
if (false) {}
/**
 * This loader is just a placeholder that does nothing, in case you don't need a loader at all
 */
class TranslateFakeLoader extends TranslateLoader {
    /**
     * @param {?} lang
     * @return {?}
     */
    getTranslation(lang) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
    }
}
TranslateFakeLoader.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MissingTranslationHandlerParams() { }
if (false) {}
/**
 * @abstract
 */
class MissingTranslationHandler {
}
if (false) {}
/**
 * This handler is just a placeholder that does nothing, in case you don't need a missing translation handler at all
 */
class FakeMissingTranslationHandler {
    /**
     * @param {?} params
     * @return {?}
     */
    handle(params) {
        return params.key;
    }
}
FakeMissingTranslationHandler.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

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
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true; // NaN === NaN
    // NaN === NaN
    /** @type {?} */
    let t1 = typeof o1;
    /** @type {?} */
    let t2 = typeof o2;
    /** @type {?} */
    let length;
    /** @type {?} */
    let key;
    /** @type {?} */
    let keySet;
    if (t1 == t2 && t1 == 'object') {
        if (Array.isArray(o1)) {
            if (!Array.isArray(o2))
                return false;
            if ((length = o1.length) == o2.length) {
                for (key = 0; key < length; key++) {
                    if (!equals(o1[key], o2[key]))
                        return false;
                }
                return true;
            }
        }
        else {
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
    return (item && typeof item === 'object' && !Array.isArray(item));
}
/**
 * @param {?} target
 * @param {?} source
 * @return {?}
 */
function mergeDeep(target, source) {
    /** @type {?} */
    let output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, { [key]: source[key] });
                }
                else {
                    output[key] = mergeDeep(target[key], source[key]);
                }
            }
            else {
                Object.assign(output, { [key]: source[key] });
            }
        }));
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
class TranslateParser {
}
if (false) {}
class TranslateDefaultParser extends TranslateParser {
    constructor() {
        super(...arguments);
        this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
    }
    /**
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    interpolate(expr, params) {
        /** @type {?} */
        let result;
        if (typeof expr === 'string') {
            result = this.interpolateString(expr, params);
        }
        else if (typeof expr === 'function') {
            result = this.interpolateFunction(expr, params);
        }
        else {
            // this should not happen, but an unrelated TranslateService test depends on it
            result = (/** @type {?} */ (expr));
        }
        return result;
    }
    /**
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    getValue(target, key) {
        /** @type {?} */
        let keys = typeof key === 'string' ? key.split('.') : [key];
        key = '';
        do {
            key += keys.shift();
            if (isDefined(target) && isDefined(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
                target = target[key];
                key = '';
            }
            else if (!keys.length) {
                target = undefined;
            }
            else {
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
    interpolateFunction(fn, params) {
        return fn(params);
    }
    /**
     * @private
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    interpolateString(expr, params) {
        if (!params) {
            return expr;
        }
        return expr.replace(this.templateMatcher, (/**
         * @param {?} substring
         * @param {?} b
         * @return {?}
         */
        (substring, b) => {
            /** @type {?} */
            let r = this.getValue(params, b);
            return isDefined(r) ? r : substring;
        }));
    }
}
TranslateDefaultParser.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class TranslateCompiler {
}
if (false) {}
/**
 * This compiler is just a placeholder that does nothing, in case you don't need a compiler at all
 */
class TranslateFakeCompiler extends TranslateCompiler {
    /**
     * @param {?} value
     * @param {?} lang
     * @return {?}
     */
    compile(value, lang) {
        return value;
    }
    /**
     * @param {?} translations
     * @param {?} lang
     * @return {?}
     */
    compileTranslations(translations, lang) {
        return translations;
    }
}
TranslateFakeCompiler.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslateStore {
    constructor() {
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
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const USE_STORE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('USE_STORE');
/** @type {?} */
const USE_DEFAULT_LANG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('USE_DEFAULT_LANG');
/** @type {?} */
const DEFAULT_LANGUAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('DEFAULT_LANGUAGE');
/** @type {?} */
const USE_EXTEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('USE_EXTEND');
/**
 * @record
 */
function TranslationChangeEvent() { }
if (false) {}
/**
 * @record
 */
function LangChangeEvent() { }
if (false) {}
/**
 * @record
 */
function DefaultLangChangeEvent() { }
if (false) {}
class TranslateService {
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
    constructor(store, currentLoader, compiler, parser, missingTranslationHandler, useDefaultLang = true, isolate = false, extend = false, defaultLanguage) {
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
    get onTranslationChange() {
        return this.isolate ? this._onTranslationChange : this.store.onTranslationChange;
    }
    /**
     * An EventEmitter to listen to lang change events
     * onLangChange.subscribe((params: LangChangeEvent) => {
     *     // do something
     * });
     * @return {?}
     */
    get onLangChange() {
        return this.isolate ? this._onLangChange : this.store.onLangChange;
    }
    /**
     * An EventEmitter to listen to default lang change events
     * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
     *     // do something
     * });
     * @return {?}
     */
    get onDefaultLangChange() {
        return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange;
    }
    /**
     * The default lang to fallback when translations are missing on the current lang
     * @return {?}
     */
    get defaultLang() {
        return this.isolate ? this._defaultLang : this.store.defaultLang;
    }
    /**
     * @param {?} defaultLang
     * @return {?}
     */
    set defaultLang(defaultLang) {
        if (this.isolate) {
            this._defaultLang = defaultLang;
        }
        else {
            this.store.defaultLang = defaultLang;
        }
    }
    /**
     * The lang currently used
     * @return {?}
     */
    get currentLang() {
        return this.isolate ? this._currentLang : this.store.currentLang;
    }
    /**
     * @param {?} currentLang
     * @return {?}
     */
    set currentLang(currentLang) {
        if (this.isolate) {
            this._currentLang = currentLang;
        }
        else {
            this.store.currentLang = currentLang;
        }
    }
    /**
     * an array of langs
     * @return {?}
     */
    get langs() {
        return this.isolate ? this._langs : this.store.langs;
    }
    /**
     * @param {?} langs
     * @return {?}
     */
    set langs(langs) {
        if (this.isolate) {
            this._langs = langs;
        }
        else {
            this.store.langs = langs;
        }
    }
    /**
     * a list of translations per lang
     * @return {?}
     */
    get translations() {
        return this.isolate ? this._translations : this.store.translations;
    }
    /**
     * @param {?} translations
     * @return {?}
     */
    set translations(translations) {
        if (this.isolate) {
            this._translations = translations;
        }
        else {
            this.store.translations = translations;
        }
    }
    /**
     * Sets the default language to use as a fallback
     * @param {?} lang
     * @return {?}
     */
    setDefaultLang(lang) {
        if (lang === this.defaultLang) {
            return;
        }
        /** @type {?} */
        let pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the defaultLang immediately
            if (this.defaultLang == null) {
                this.defaultLang = lang;
            }
            pending.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                this.changeDefaultLang(lang);
            }));
        }
        else { // we already have this language
            this.changeDefaultLang(lang);
        }
    }
    /**
     * Gets the default language used
     * @return {?}
     */
    getDefaultLang() {
        return this.defaultLang;
    }
    /**
     * Changes the lang currently used
     * @param {?} lang
     * @return {?}
     */
    use(lang) {
        // don't change the language if the language given is already selected
        if (lang === this.currentLang) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.translations[lang]);
        }
        /** @type {?} */
        let pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the currentLang immediately
            if (!this.currentLang) {
                this.currentLang = lang;
            }
            pending.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                this.changeLang(lang);
            }));
            return pending;
        }
        else { // we have this language, return an Observable
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
    retrieveTranslations(lang) {
        /** @type {?} */
        let pending;
        // if this language is unavailable or extend is true, ask for it
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
    getTranslation(lang) {
        this.pending = true;
        /** @type {?} */
        const loadingTranslations = this.currentLoader.getTranslation(lang).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
        this.loadingTranslations = loadingTranslations.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.compiler.compileTranslations(res, lang))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
        this.loadingTranslations
            .subscribe({
            next: (/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                this.translations[lang] = this.extend && this.translations[lang] ? Object.assign(Object.assign({}, res), this.translations[lang]) : res;
                this.updateLangs();
                this.pending = false;
            }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                this.pending = false;
            })
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
    setTranslation(lang, translations, shouldMerge = false) {
        translations = this.compiler.compileTranslations(translations, lang);
        if ((shouldMerge || this.extend) && this.translations[lang]) {
            this.translations[lang] = mergeDeep(this.translations[lang], translations);
        }
        else {
            this.translations[lang] = translations;
        }
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    }
    /**
     * Returns an array of currently available langs
     * @return {?}
     */
    getLangs() {
        return this.langs;
    }
    /**
     * Add available langs
     * @param {?} langs
     * @return {?}
     */
    addLangs(langs) {
        langs.forEach((/**
         * @param {?} lang
         * @return {?}
         */
        (lang) => {
            if (this.langs.indexOf(lang) === -1) {
                this.langs.push(lang);
            }
        }));
    }
    /**
     * Update the list of available langs
     * @private
     * @return {?}
     */
    updateLangs() {
        this.addLangs(Object.keys(this.translations));
    }
    /**
     * Returns the parsed result of the translations
     * @param {?} translations
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?}
     */
    getParsedResult(translations, key, interpolateParams) {
        /** @type {?} */
        let res;
        if (key instanceof Array) {
            /** @type {?} */
            let result = {};
            /** @type {?} */
            let observables = false;
            for (let k of key) {
                result[k] = this.getParsedResult(translations, k, interpolateParams);
                if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(result[k])) {
                    observables = true;
                }
            }
            if (observables) {
                /** @type {?} */
                const sources = key.map((/**
                 * @param {?} k
                 * @return {?}
                 */
                k => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(result[k]) ? result[k] : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])((/** @type {?} */ (result[k])))));
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(sources).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
                 * @param {?} arr
                 * @return {?}
                 */
                (arr) => {
                    /** @type {?} */
                    let obj = {};
                    arr.forEach((/**
                     * @param {?} value
                     * @param {?} index
                     * @return {?}
                     */
                    (value, index) => {
                        obj[key[index]] = value;
                    }));
                    return obj;
                })));
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
            let params = { key, translateService: this };
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
    get(key, interpolateParams) {
        if (!isDefined(key) || !key.length) {
            throw new Error(`Parameter "key" required`);
        }
        // check if we are loading a new translation to use
        if (this.pending) {
            return this.loadingTranslations.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                res = this.getParsedResult(res, key, interpolateParams);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res) ? res : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(res);
            })));
        }
        else {
            /** @type {?} */
            let res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
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
    getStreamOnTranslationChange(key, interpolateParams) {
        if (!isDefined(key) || !key.length) {
            throw new Error(`Parameter "key" required`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])((/**
         * @return {?}
         */
        () => this.get(key, interpolateParams))), this.onTranslationChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const res = this.getParsedResult(event.translations, key, interpolateParams);
            if (typeof res.subscribe === 'function') {
                return res;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(res);
            }
        }))));
    }
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the language changes.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?} A stream of the translated key, or an object of translated keys
     */
    stream(key, interpolateParams) {
        if (!isDefined(key) || !key.length) {
            throw new Error(`Parameter "key" required`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])((/**
         * @return {?}
         */
        () => this.get(key, interpolateParams))), this.onLangChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const res = this.getParsedResult(event.translations, key, interpolateParams);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res) ? res : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(res);
        }))));
    }
    /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?}
     */
    instant(key, interpolateParams) {
        if (!isDefined(key) || !key.length) {
            throw new Error(`Parameter "key" required`);
        }
        /** @type {?} */
        let res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
        if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res)) {
            if (key instanceof Array) {
                /** @type {?} */
                let obj = {};
                key.forEach((/**
                 * @param {?} value
                 * @param {?} index
                 * @return {?}
                 */
                (value, index) => {
                    obj[key[index]] = key[index];
                }));
                return obj;
            }
            return key;
        }
        else {
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
    set(key, value, lang = this.currentLang) {
        this.translations[lang][key] = this.compiler.compile(value, lang);
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    }
    /**
     * Changes the current lang
     * @private
     * @param {?} lang
     * @return {?}
     */
    changeLang(lang) {
        this.currentLang = lang;
        this.onLangChange.emit({ lang: lang, translations: this.translations[lang] });
        // if there is no default lang, use the one that we just set
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
    changeDefaultLang(lang) {
        this.defaultLang = lang;
        this.onDefaultLangChange.emit({ lang: lang, translations: this.translations[lang] });
    }
    /**
     * Allows to reload the lang file from the file
     * @param {?} lang
     * @return {?}
     */
    reloadLang(lang) {
        this.resetLang(lang);
        return this.getTranslation(lang);
    }
    /**
     * Deletes inner translation
     * @param {?} lang
     * @return {?}
     */
    resetLang(lang) {
        this._translationRequests[lang] = undefined;
        this.translations[lang] = undefined;
    }
    /**
     * Returns the language code name from the browser, e.g. "de"
     * @return {?}
     */
    getBrowserLang() {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        /** @type {?} */
        let browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
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
    getBrowserCultureLang() {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        /** @type {?} */
        let browserCultureLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserCultureLang = browserCultureLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        return browserCultureLang;
    }
}
TranslateService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
TranslateService.ctorParameters = () => [
    { type: TranslateStore },
    { type: TranslateLoader },
    { type: TranslateCompiler },
    { type: TranslateParser },
    { type: MissingTranslationHandler },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [USE_DEFAULT_LANG,] }] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [USE_STORE,] }] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [USE_EXTEND,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [DEFAULT_LANGUAGE,] }] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslateDirective {
    /**
     * @param {?} translateService
     * @param {?} element
     * @param {?} _ref
     */
    constructor(translateService, element, _ref) {
        this.translateService = translateService;
        this.element = element;
        this._ref = _ref;
        // subscribe to onTranslationChange event, in case the translations of the current lang change
        if (!this.onTranslationChangeSub) {
            this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                if (event.lang === this.translateService.currentLang) {
                    this.checkNodes(true, event.translations);
                }
            }));
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChangeSub) {
            this.onLangChangeSub = this.translateService.onLangChange.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                this.checkNodes(true, event.translations);
            }));
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                this.checkNodes(true);
            }));
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    set translate(key) {
        if (key) {
            this.key = key;
            this.checkNodes();
        }
    }
    /**
     * @param {?} params
     * @return {?}
     */
    set translateParams(params) {
        if (!equals(this.currentParams, params)) {
            this.currentParams = params;
            this.checkNodes(true);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.checkNodes();
    }
    /**
     * @param {?=} forceUpdate
     * @param {?=} translations
     * @return {?}
     */
    checkNodes(forceUpdate = false, translations) {
        /** @type {?} */
        let nodes = this.element.nativeElement.childNodes;
        // if the element is empty
        if (!nodes.length) {
            // we add the key as content
            this.setContent(this.element.nativeElement, this.key);
            nodes = this.element.nativeElement.childNodes;
        }
        for (let i = 0; i < nodes.length; ++i) {
            /** @type {?} */
            let node = nodes[i];
            if (node.nodeType === 3) { // node type 3 is a text node
                // node type 3 is a text node
                /** @type {?} */
                let key;
                if (forceUpdate) {
                    node.lastKey = null;
                }
                if (isDefined(node.lookupKey)) {
                    key = node.lookupKey;
                }
                else if (this.key) {
                    key = this.key;
                }
                else {
                    /** @type {?} */
                    let content = this.getContent(node);
                    /** @type {?} */
                    let trimmedContent = content.trim();
                    if (trimmedContent.length) {
                        node.lookupKey = trimmedContent;
                        // we want to use the content as a key, not the translation value
                        if (content !== node.currentValue) {
                            key = trimmedContent;
                            // the content was changed from the user, we'll use it as a reference if needed
                            node.originalContent = content || node.originalContent;
                        }
                        else if (node.originalContent) { // the content seems ok, but the lang has changed
                            // the current content is the translation, not the key, use the last real content as key
                            key = node.originalContent.trim();
                        }
                        else if (content !== node.currentValue) {
                            // we want to use the content as a key, not the translation value
                            key = trimmedContent;
                            // the content was changed from the user, we'll use it as a reference if needed
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
    updateValue(key, node, translations) {
        if (key) {
            if (node.lastKey === key && this.lastParams === this.currentParams) {
                return;
            }
            this.lastParams = this.currentParams;
            /** @type {?} */
            let onTranslation = (/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                if (res !== key) {
                    node.lastKey = key;
                }
                if (!node.originalContent) {
                    node.originalContent = this.getContent(node);
                }
                node.currentValue = isDefined(res) ? res : (node.originalContent || key);
                // we replace in the original content to preserve spaces that we might have trimmed
                this.setContent(node, this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue));
                this._ref.markForCheck();
            });
            if (isDefined(translations)) {
                /** @type {?} */
                let res = this.translateService.getParsedResult(translations, key, this.currentParams);
                if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res)) {
                    res.subscribe(onTranslation);
                }
                else {
                    onTranslation(res);
                }
            }
            else {
                this.translateService.get(key, this.currentParams).subscribe(onTranslation);
            }
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    getContent(node) {
        return isDefined(node.textContent) ? node.textContent : node.data;
    }
    /**
     * @param {?} node
     * @param {?} content
     * @return {?}
     */
    setContent(node, content) {
        if (isDefined(node.textContent)) {
            node.textContent = content;
        }
        else {
            node.data = content;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
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
}
TranslateDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[translate],[ngx-translate]'
            },] }
];
/** @nocollapse */
TranslateDirective.ctorParameters = () => [
    { type: TranslateService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
TranslateDirective.propDecorators = {
    translate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    translateParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslatePipe {
    /**
     * @param {?} translate
     * @param {?} _ref
     */
    constructor(translate, _ref) {
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
    updateValue(key, interpolateParams, translations) {
        /** @type {?} */
        let onTranslation = (/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.value = res !== undefined ? res : key;
            this.lastKey = key;
            this._ref.markForCheck();
        });
        if (translations) {
            /** @type {?} */
            let res = this.translate.getParsedResult(translations, key, interpolateParams);
            if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res.subscribe)) {
                res.subscribe(onTranslation);
            }
            else {
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
    transform(query, ...args) {
        if (!query || !query.length) {
            return query;
        }
        // if we ask another time for the same key, return the last value
        if (equals(query, this.lastKey) && equals(args, this.lastParams)) {
            return this.value;
        }
        /** @type {?} */
        let interpolateParams;
        if (isDefined(args[0]) && args.length) {
            if (typeof args[0] === 'string' && args[0].length) {
                // we accept objects written in the template such as {n:1}, {'n':1}, {n:'v'}
                // which is why we might need to change it to real JSON objects such as {"n":1} or {"n":"v"}
                /** @type {?} */
                let validArgs = args[0]
                    .replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":')
                    .replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
                try {
                    interpolateParams = JSON.parse(validArgs);
                }
                catch (e) {
                    throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${args[0]}`);
                }
            }
            else if (typeof args[0] === 'object' && !Array.isArray(args[0])) {
                interpolateParams = args[0];
            }
        }
        // store the query, in case it changes
        this.lastKey = query;
        // store the params, in case they change
        this.lastParams = args;
        // set the value
        this.updateValue(query, interpolateParams);
        // if there is a subscription to onLangChange, clean it
        this._dispose();
        // subscribe to onTranslationChange event, in case the translations change
        if (!this.onTranslationChange) {
            this.onTranslationChange = this.translate.onTranslationChange.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                if (this.lastKey && event.lang === this.translate.currentLang) {
                    this.lastKey = null;
                    this.updateValue(query, interpolateParams, event.translations);
                }
            }));
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChange) {
            this.onLangChange = this.translate.onLangChange.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                if (this.lastKey) {
                    this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    this.updateValue(query, interpolateParams, event.translations);
                }
            }));
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChange) {
            this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe((/**
             * @return {?}
             */
            () => {
                if (this.lastKey) {
                    this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    this.updateValue(query, interpolateParams);
                }
            }));
        }
        return this.value;
    }
    /**
     * Clean any existing subscription to change events
     * @private
     * @return {?}
     */
    _dispose() {
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
    ngOnDestroy() {
        this._dispose();
    }
}
TranslatePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'translate',
                pure: false // required to update the value when the promise is resolved
            },] }
];
/** @nocollapse */
TranslatePipe.ctorParameters = () => [
    { type: TranslateService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TranslateModuleConfig() { }
if (false) {}
class TranslateModule {
    /**
     * Use this method in your root module to provide the TranslateService
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = {}) {
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: TranslateLoader, useClass: TranslateFakeLoader },
                config.compiler || { provide: TranslateCompiler, useClass: TranslateFakeCompiler },
                config.parser || { provide: TranslateParser, useClass: TranslateDefaultParser },
                config.missingTranslationHandler || { provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler },
                TranslateStore,
                { provide: USE_STORE, useValue: config.isolate },
                { provide: USE_DEFAULT_LANG, useValue: config.useDefaultLang },
                { provide: USE_EXTEND, useValue: config.extend },
                { provide: DEFAULT_LANGUAGE, useValue: config.defaultLanguage },
                TranslateService
            ]
        };
    }
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {?=} config
     * @return {?}
     */
    static forChild(config = {}) {
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: TranslateLoader, useClass: TranslateFakeLoader },
                config.compiler || { provide: TranslateCompiler, useClass: TranslateFakeCompiler },
                config.parser || { provide: TranslateParser, useClass: TranslateDefaultParser },
                config.missingTranslationHandler || { provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler },
                { provide: USE_STORE, useValue: config.isolate },
                { provide: USE_DEFAULT_LANG, useValue: config.useDefaultLang },
                { provide: USE_EXTEND, useValue: config.extend },
                { provide: DEFAULT_LANGUAGE, useValue: config.defaultLanguage },
                TranslateService
            ]
        };
    }
}
TranslateModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    TranslatePipe,
                    TranslateDirective
                ],
                exports: [
                    TranslatePipe,
                    TranslateDirective
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-translate-core.js.map


/***/ }),

/***/ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js ***!
  \***************************************************************************************/
/*! exports provided: TranslateHttpLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateHttpLoader", function() { return TranslateHttpLoader; });
class TranslateHttpLoader {
    constructor(http, prefix = "/assets/i18n/", suffix = ".json") {
        this.http = http;
        this.prefix = prefix;
        this.suffix = suffix;
    }
    /**
     * Gets the translations from the server
     */
    getTranslation(lang) {
        return this.http.get(`${this.prefix}${lang}${this.suffix}`);
    }
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-translate-http-loader.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/login.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/login.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n  <div class=\"login-logo\">\n    <img src=\"../../../assets/images/paj-logo.png\">\n  </div>\n  <div class=\"field-box\">\n    <!-- {{ 'HOME.text' | translate }} -->\n    <ion-list>\n      <form #f=\"ngForm\" (ngSubmit)=\"login(f)\">\n        <ion-item>\n          <ion-icon class=\"flaticon-email\" slot=\"start\"></ion-icon>\n          <ion-input type=\"text\" placeholder=\"Email\" ngModel name=\"email\" [(ngModel)]=\"email\" required class=\"ion-margin-start\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-icon class=\"flaticon-key\" slot=\"start\"></ion-icon>\n          <ion-input [type]=\"passwordType\" placeholder=\"Password\" ngModel name=\"password\" [(ngModel)]=\"password\" required class=\"ion-margin-start\"></ion-input>\n          <ion-icon [name]=\"passwordIcon\" (click)='hideShowPassword()' slot=\"end\"></ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-icon class=\"flaticon-world\" slot=\"start\"></ion-icon>\n          <ion-label>Language</ion-label>\n          <ion-select placeholder=\"Select One\" name=\"language\" [(ngModel)]=\"selectedLanguage\" (ionChange)=\"languageChanged()\">\n            <ion-select-option value=\"en\">English</ion-select-option>\n            <ion-select-option value=\"ko\">Korean</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </form>\n      <ion-item class=\"login-link ion-text-center\">\n        Forgot Your <a href=\"javascript:void(0);\" (click)=\"vergessenPasswort()\"> Password?</a> \n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"block\" size=\"large\" [disabled]=\"!f.valid\" (click)=\"login(f);\">\n      Login <ion-icon class=\"flaticon-arrow-pointing-to-right\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/public/login/login.module.ts":
/*!**********************************************!*\
  !*** ./src/app/public/login/login.module.ts ***!
  \**********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/public/login/login.page.ts");
/* harmony import */ var src_app_shared_language_language_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/language/language.module */ "./src/app/shared/language/language.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_language_language_module__WEBPACK_IMPORTED_MODULE_7__["LanguageModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/public/login/login.page.scss":
/*!**********************************************!*\
  !*** ./src/app/public/login/login.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  padding: 10px;\n}\nion-header ion-toolbar {\n  --background: transparent;\n}\nion-content ion-input {\n  --padding-top: 11px;\n}\nion-content::after {\n  content: \"\";\n  background: url('splash.jpg') no-repeat 52% center/cover;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n}\nion-content .login-logo {\n  text-align: center;\n  padding: 50px 0 0;\n  position: relative;\n  z-index: 2;\n}\nion-content .login-logo img {\n  width: 200px;\n}\n.field-box {\n  color: var(--white);\n  padding: 20px;\n  position: relative;\n  z-index: 2;\n}\n.field-box ion-list {\n  background: transparent;\n}\n.field-box ion-list ion-item {\n  display: block;\n  --background: rgba(255, 255, 255, 0.2);\n  --color: var(--white);\n  border-radius: 5px;\n  opacity: 10;\n  margin-bottom: 13px;\n}\n.field-box ion-list ion-item ion-icon {\n  color: var(--white);\n  margin-right: 6px;\n  font-size: 17px;\n  line-height: 18px;\n  width: 24px;\n  line-height: 18px;\n}\n.field-box ion-list ion-item .flaticon-visibility-button {\n  margin: 0;\n  color: #a49d9d;\n}\n.field-box ion-list ion-item.login-link {\n  --background: transparent;\n  color: var(--white);\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  width: 100%;\n}\n.field-box ion-list ion-item.login-link .item-inner {\n  --text-align: center;\n}\n.field-box ion-list ion-item.login-link a {\n  margin: 0 0 0 6px;\n}\n.field-box ion-list ion-select {\n  width: 100%;\n  display: contents;\n}\nion-footer {\n  padding: 10px;\n}\nion-footer ion-toolbar {\n  --background: transparent;\n}\nion-footer ion-toolbar ion-button {\n  text-transform: capitalize;\n  font-weight: normal;\n  font-size: 17px;\n}\nion-footer ion-toolbar ion-button ion-icon {\n  font-size: 16px;\n  margin: 4px 0 0 5px;\n  width: 29px;\n  height: 20px;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL2FwcHMvdGVzdC1wYWovc3JjL2FwcC9wdWJsaWMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wdWJsaWMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtBQ0FKO0FEQ0k7RUFDSSx5QkFBQTtBQ0NSO0FEaUJJO0VBQ0ksbUJBQUE7QUNkUjtBRGdCSTtFQUNJLFdBQUE7RUFDQSx3REFBQTtFQUNBLGVBQUE7RUFBaUIsTUFBQTtFQUFRLFFBQUE7RUFBVSxTQUFBO0VBQVcsT0FBQTtFQUFRLFVBQUE7QUNUOUQ7QURZSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNWUjtBRFdRO0VBQ0ksWUFBQTtBQ1RaO0FEY0E7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNYSjtBRGFJO0VBQ0ksdUJBQUE7QUNYUjtBRFlRO0VBQ0ksY0FBQTtFQUNBLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ1ZaO0FEV1k7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0FDVmhCO0FEWVk7RUFDSSxTQUFBO0VBQ0EsY0FBQTtBQ1ZoQjtBRFlZO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDVmhCO0FEV2dCO0VBQ0ksb0JBQUE7QUNUcEI7QURXZ0I7RUFDSSxpQkFBQTtBQ1RwQjtBRGFRO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDWFo7QURnQkE7RUFDSSxhQUFBO0FDYko7QURjSTtFQUNJLHlCQUFBO0FDWlI7QURjUTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDWlo7QURhWTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNYaEIiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24taGVhZGVye1xuICAgIHBhZGRpbmc6IDEwcHg7IFxuICAgIGlvbi10b29sYmFye1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBcbiAgICAgICAgLy8gaW9uLWJ1dHRvbntcbiAgICAgICAgLy8gICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAvLyAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgLy8gICAgIGlvbi1pY29ue1xuICAgICAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgLy8gICAgICAgICBtYXJnaW46IDAgMCAwIDdweDtcbiAgICAgICAgLy8gICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxufVxuXG5cblxuaW9uLWNvbnRlbnR7XG4gICAgaW9uLWlucHV0IHtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMTFweDtcbiAgICB9XG4gICAgJjo6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NwbGFzaC5qcGcpIG5vLXJlcGVhdCA1MiUgY2VudGVyL2NvdmVyO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IHRvcDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDsgbGVmdDogMDt6LWluZGV4OjE7XG4gICAgfVxuICAgXG4gICAgLmxvZ2luLWxvZ297XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNTBweCAwIDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICB9XG4gICAgfVxuICBcbn1cbi5maWVsZC1ib3h7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgaW9uLWxpc3R7XG4gICAgICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mbGF0aWNvbi12aXNpYmlsaXR5LWJ1dHRvbntcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNhNDlkOWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmxvZ2luLWxpbmt7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIC5pdGVtLWlubmVye1xuICAgICAgICAgICAgICAgICAgICAtLXRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCA2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1zZWxlY3R7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzOyAgIFxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tZm9vdGVye1xuICAgIHBhZGRpbmc6IDEwcHg7IFxuICAgIGlvbi10b29sYmFye1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBcbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDRweCAwIDAgNXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyOXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCJpb24taGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tY29udGVudCBpb24taW5wdXQge1xuICAtLXBhZGRpbmctdG9wOiAxMXB4O1xufVxuaW9uLWNvbnRlbnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3BsYXNoLmpwZykgbm8tcmVwZWF0IDUyJSBjZW50ZXIvY292ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuaW9uLWNvbnRlbnQgLmxvZ2luLWxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUwcHggMCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG5pb24tY29udGVudCAubG9naW4tbG9nbyBpbWcge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5maWVsZC1ib3gge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG4uZmllbGQtYm94IGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uZmllbGQtYm94IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3BhY2l0eTogMTA7XG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XG59XG4uZmllbGQtYm94IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbi5maWVsZC1ib3ggaW9uLWxpc3QgaW9uLWl0ZW0gLmZsYXRpY29uLXZpc2liaWxpdHktYnV0dG9uIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogI2E0OWQ5ZDtcbn1cbi5maWVsZC1ib3ggaW9uLWxpc3QgaW9uLWl0ZW0ubG9naW4tbGluayB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbi5maWVsZC1ib3ggaW9uLWxpc3QgaW9uLWl0ZW0ubG9naW4tbGluayAuaXRlbS1pbm5lciB7XG4gIC0tdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZpZWxkLWJveCBpb24tbGlzdCBpb24taXRlbS5sb2dpbi1saW5rIGEge1xuICBtYXJnaW46IDAgMCAwIDZweDtcbn1cbi5maWVsZC1ib3ggaW9uLWxpc3QgaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuaW9uLWZvb3RlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogNHB4IDAgMCA1cHg7XG4gIHdpZHRoOiAyOXB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/public/login/login.page.ts":
/*!********************************************!*\
  !*** ./src/app/public/login/login.page.ts ***!
  \********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constants_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants.enum */ "./src/app/constants.enum.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/translate-config.service */ "./src/app/translate-config.service.ts");









let LoginPage = class LoginPage {
    constructor(authService, loadingCtrl, toastCtrl, router, platform, authenticationService, storage, translateConfigService) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.platform = platform;
        this.authenticationService = authenticationService;
        this.storage = storage;
        this.translateConfigService = translateConfigService;
        this.passwordType = 'password';
        this.passwordIcon = 'eye';
        // email: string = 'testkunde@paj-gps.de';
        // password: string = 'app123#.';
        this.email = '';
        this.password = '';
        this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    }
    languageChanged() {
        this.translateConfigService.setLanguage(this.selectedLanguage);
    }
    ngOnInit() {
    }
    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log('View Called');
            this.subscription = this.platform.backButton.subscribe(() => {
                navigator['app'].exitApp();
            });
        });
    }
    login(form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
            yield this.authService.login(form.value.email, form.value.password);
            // await this.authenticationService.authenticationState.subscribe(state => {
            // });
            // loading.dismiss();
            this.email = '';
            this.password = '';
            // console.log(data);
        });
    }
    vergessenPasswort() {
        this.router.navigate(['/forget-password']);
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_7__["TranslateConfigService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/public/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_7__["TranslateConfigService"]])
], LoginPage);



/***/ }),

/***/ "./src/app/shared/language/language.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/language/language.module.ts ***!
  \****************************************************/
/*! exports provided: LanguageLoader, LanguageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageLoader", function() { return LanguageLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageModule", function() { return LanguageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../translate-config.service */ "./src/app/translate-config.service.ts");



// Multiple Language




function LanguageLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
}
let LanguageModule = class LanguageModule {
};
LanguageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                    useFactory: (LanguageLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                }
            }),
        ],
        providers: [_translate_config_service__WEBPACK_IMPORTED_MODULE_6__["TranslateConfigService"]]
    })
], LanguageModule);



/***/ }),

/***/ "./src/app/translate-config.service.ts":
/*!*********************************************!*\
  !*** ./src/app/translate-config.service.ts ***!
  \*********************************************/
/*! exports provided: TranslateConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateConfigService", function() { return TranslateConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let TranslateConfigService = class TranslateConfigService {
    constructor(translate) {
        this.translate = translate;
    }
    getDefaultLanguage() {
        const language = this.translate.getBrowserLang();
        this.translate.setDefaultLang(language);
        return language;
    }
    setLanguage(setLang) {
        this.translate.use(setLang);
    }
};
TranslateConfigService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
TranslateConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
], TranslateConfigService);



/***/ })

}]);
//# sourceMappingURL=public-login-login-module-es2015.js.map