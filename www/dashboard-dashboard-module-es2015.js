(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/dashboard/dashboard.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/dashboard/dashboard.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-side-bar slot=\"end\"></app-side-bar>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/map\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content direction=\"y\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title><img src=\"./../../../assets/images/meter.png\"> Speed </ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"white\">\n      <div id=\"SpeedChart\" style=\"height: 370px; width: 100%;\"></div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>  <img src=\"./../../../assets/images/location-home.png\"> Distance </ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"white\">\n      <ion-searchbar type=\"text\" autocorrect=\"on\" autocomplete=\"on\" debounce=\"700\"  [(ngModel)]=\"searchTerm\" (ionChange)=\"setFilteredItems()\"></ion-searchbar>\n    </ion-card-content>\n  </ion-card>\n\n  <div id=\"body\" *ngIf=\"searchItem\">\n    <ion-card *ngFor=\"let device of searchItem\" [ngStyle]=\"{'border-color': device.color}\">\n      <ion-card-header>\n        <ion-card-title>  \n          <img alt=\"Image not Found\" *ngIf=\"!device.iconusecustom\" src=\"./../../../assets/icons/map/devices/device_markers/{{device.iconname}}.png\">\n          <img alt=\"Image not Found\" *ngIf=\"device.iconusecustom\" [src]=\"(this.url+'/upload/images/users/'+this.userId+'/devices/'+device.id+'/customImg/'+device.iconcustomimage)\">\n          <ion-label>{{device.name}}</ion-label>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content class=\"device-detail\">\n\n          <ion-list lines=\"none\">\n            <ion-item>\n              <ion-label>24 Hours</ion-label>\n            </ion-item>\n            <ion-item>\n              <p class=\"distance\">\n                <span class=\"fontBig\" style=\"color: brown;\" *ngIf=\"device.device_distance.day1!='undefined'\">\n                  {{((device.device_distance.day1).toFixed(2))}}\n                </span> km\n              </p>\n            </ion-item>\n            <ion-item>\n              <ion-label>7 Days</ion-label>\n            </ion-item>\n            <ion-item>\n              <p class=\"distance\">\n                <span class=\"fontBig\" style=\"color: chocolate;\" *ngIf=\"device.device_distance.day1!='undefined'\">\n                {{(device.device_distance.day7).toFixed(2)}}\n                </span> km\n              </p>\n            </ion-item>\n            <ion-item>\n              <ion-label>30 Days</ion-label>\n            </ion-item>\n            <ion-item>\n              <p>\n                <span class=\"fontBig\" style=\"color: bisque;\" *ngIf=\"device.device_distance.day1!='undefined'\">\n                {{(device.device_distance.day30).toFixed(2)}}\n                </span> km\n              </p>\n            </ion-item>\n          </ion-list>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n\n<!-- <ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-button >\n          <ion-back-button defaultHref=\"/map\"></ion-back-button>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content direction=\"y\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Speed</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <div id=\"SpeedChart\" style=\"height: 370px; width: 100%;\"></div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Distance</ion-card-title>\n    </ion-card-header>\n    <ion-searchbar type=\"text\" autocorrect=\"on\" autocomplete=\"on\" debounce=\"700\"  [(ngModel)]=\"searchTerm\" (ionChange)=\"setFilteredItems()\"></ion-searchbar>\n    <ion-card-content id=\"body\">\n      <div *ngIf=\"searchItem\">\n        <ion-card class=\"devices-warper\" *ngFor=\"let device of searchItem\" [ngStyle]=\"{'border-color': device.color}\">\n          <ion-card-header [ngStyle]=\"{'border-color': device.color}\">\n            <ion-item lines=\"none\">\n              <ion-avatar slot=\"start\">\n                <img alt=\"Image not Found\" *ngIf=\"!device.iconusecustom\" src=\"../../../assets/icons/map/devices/device_markers/{{device.iconname}}.png\">\n                <img alt=\"Image not Found\" *ngIf=\"device.iconusecustom\" [src]=\"(this.url+'/upload/images/users/'+this.userId+'/devices/'+device.id+'/customImg/'+device.iconcustomimage)\">\n              </ion-avatar>\n              <ion-label>\n              <h2>{{device.name}}</h2>\n              </ion-label>\n            </ion-item>\n          </ion-card-header>\n            <ion-grid>\n              <ion-row>\n                <ion-col col-12>\n                  <ion-list lines=\"none\">\n                    <ion-item>\n                      <div style=\"width: 100%;\">\n                        <ion-label>24 Hours</ion-label>\n                        <p class=\"distance\">\n                          <span class=\"fontBig\" style=\"color: brown;\" >{{((device.device_distance.day1).toFixed(2))}}</span> km\n                        </p>\n                      </div>\n                    </ion-item>\n                    <ion-item>\n                    <div style=\"width: 100%;\">\n                      <ion-label>7 Days</ion-label>\n                      <p class=\"distance\">\n                        <span class=\"fontBig\" style=\"color: chocolate;\">{{(device.device_distance.day7).toFixed(2)}}</span> km\n                      </p>\n                    </div>\n                  </ion-item>\n                  <ion-item>\n                    <div style=\"width: 100%;\">\n                      <ion-label>30 Days</ion-label>\n                      <p>\n                        <span class=\"fontBig\" style=\"color: bisque;\">{{(device.device_distance.day30).toFixed(2)}}</span> km\n                      </p>\n                    </div>\n                  </ion-item>\n                  </ion-list>\n                  <div class=\"buttonHolder\">  \n                    <ion-buttons slot=\"end\">\n                    </ion-buttons>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <ion-card-content>\n            </ion-card-content>    \n          </ion-card>\n          </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content> -->");

/***/ }),

/***/ "./src/app/members/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/members/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/members/dashboard/dashboard.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }
];
let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/members/dashboard/dashboard.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/members/dashboard/dashboard.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--contentbg);\n}\nion-content .device-list .flaticon-move {\n  color: #adadad;\n  font-size: 20px;\n}\nion-content .device-list ion-list ion-item {\n  --background: var(--lightgrey);\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\nion-content .device-list ion-list ion-item ion-avatar {\n  width: 30px;\n  height: 30px;\n  margin-right: 10px;\n}\nion-content .device-list ion-list ion-item ion-avatar img {\n  border-radius: 5px;\n}\nion-content .device-list ion-list ion-item ion-toggle {\n  margin: 0;\n  padding: 5px 8px;\n}\nion-content .device-list ion-list ion-item .item-inner {\n  border: 0 !important;\n}\nion-content ion-card {\n  border-bottom: solid 1px var(--bordercolor);\n  border-radius: 0;\n  margin: 0 0 10px;\n  box-shadow: none;\n}\nion-content ion-card .white {\n  background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\nion-content ion-card:last-child {\n  margin-bottom: 0;\n}\nion-content ion-card ion-card-header {\n  text-align: left;\n  background: var(--lightgrey);\n}\nion-content ion-card ion-card-header ion-card-title {\n  font-size: 14px;\n  color: var(--black);\n  margin: 0;\n}\nion-content ion-card ion-card-header ion-card-title img {\n  display: inline;\n  width: 25px;\n  vertical-align: middle;\n  margin: -3px 5px 0 0;\n}\nion-content ion-card ion-card-header i {\n  position: absolute;\n  color: var(--primary);\n  right: 15px;\n  bottom: 15px;\n  font-size: 16px;\n}\nion-content ion-card ion-card-content {\n  padding: 10px;\n}\nion-content ion-card ion-card-content.device-detail {\n  padding: 0;\n}\nion-content ion-card ion-card-content ion-list {\n  padding: 0;\n}\nion-content ion-card ion-card-content ion-list ion-item {\n  border-bottom: solid 1px var(--bordercolor);\n  --min-height: 40px;\n}\nion-content ion-card ion-card-content ion-list ion-item:last-child {\n  border: 0;\n}\nion-content ion-card ion-card-content ion-list ion-item ion-avatar {\n  width: 20px;\n  height: 20px;\n}\nion-content ion-card ion-card-content ion-list ion-item ion-avatar img {\n  border-radius: 0;\n}\nion-content ion-card ion-card-content ion-list ion-item ion-icon {\n  font-size: 17px;\n  color: var(--primary);\n  margin: 1px 15px 0 0;\n  height: 25px;\n}\nion-content ion-card ion-card-content ion-list ion-item ion-label {\n  font-size: 14px;\n}\nion-content ion-card ion-card-content ion-list ion-item ion-select {\n  width: 100%;\n  display: contents;\n}\nion-content ion-card ion-card-content ion-list ion-item .color-box {\n  border-radius: 5px;\n  height: 35px;\n  width: 90px;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvZGF0YWxvZ3kvcGFqcG9ydGFsdjIvc3JjL2FwcC9tZW1iZXJzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9tZW1iZXJzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUNDSjtBREVRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNBWjtBREdZO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDRGhCO0FERWdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FwQjtBRENvQjtFQUNJLGtCQUFBO0FDQ3hCO0FERWdCO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0FDQXBCO0FERWdCO0VBQ0ksb0JBQUE7QUNBcEI7QURPSTtFQUNHLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNDLGdCQUFBO0FDTFI7QURNUTtFQUNJLHlFQUFBO0FDSlo7QURNUTtFQUNJLGdCQUFBO0FDSlo7QURNUTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUNKWjtBRE1ZO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQ0poQjtBREtnQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ0hwQjtBRE1ZO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0poQjtBRFFRO0VBSUksYUFBQTtBQ1RaO0FETVk7RUFDSSxVQUFBO0FDSmhCO0FET1k7RUFDSSxVQUFBO0FDTGhCO0FETWdCO0VBQ0ksMkNBQUE7RUFDQSxrQkFBQTtBQ0pwQjtBREtvQjtFQUNJLFNBQUE7QUNIeEI7QURLb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0h4QjtBREl3QjtFQUNJLGdCQUFBO0FDRjVCO0FES29CO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDSHhCO0FES29CO0VBQ0ksZUFBQTtBQ0h4QjtBREtvQjtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQ0h4QjtBREtvQjtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSHhCIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tY29udGVudGJnKTtcbiAgICAuZGV2aWNlLWxpc3R7XG4gICAgICAgIC8vcGFkZGluZzozcHggMTBweCAxMHB4O1xuICAgICAgICAuZmxhdGljb24tbW92ZXtcbiAgICAgICAgICAgIGNvbG9yOiAjYWRhZGFkO1xuICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxpc3R7XG4gICAgICAgICAgICBpb24taXRlbXtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWxpZ2h0Z3JleSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgaW9uLWF2YXRhcntcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLXRvZ2dsZXtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjVweCA4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pdGVtLWlubmVye1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tY2FyZHtcbiAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyY29sb3IpO1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgLndoaXRlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2ZmZikpO1xuICAgICAgICB9XG4gICAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWNhcmQtaGVhZGVye1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0Z3JleSk7XG4gICAgICAgICAgICAvL3BhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBpb24tY2FyZC10aXRsZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC0zcHggNXB4IDAgMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgICBpb24tY2FyZC1jb250ZW50e1xuICAgICAgICAgICAgJi5kZXZpY2UtZGV0YWlse1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgaW9uLWxpc3R7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBpb24taXRlbXtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWJvcmRlcmNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgLS1taW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpb24tYXZhdGFye1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFweCAxNXB4IDAgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW9uLXNlbGVjdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7ICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNvbG9yLWJveHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50YmcpO1xufVxuaW9uLWNvbnRlbnQgLmRldmljZS1saXN0IC5mbGF0aWNvbi1tb3ZlIHtcbiAgY29sb3I6ICNhZGFkYWQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbmlvbi1jb250ZW50IC5kZXZpY2UtbGlzdCBpb24tbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tbGlnaHRncmV5KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLmRldmljZS1saXN0IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1hdmF0YXIge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5pb24tY29udGVudCAuZGV2aWNlLWxpc3QgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWF2YXRhciBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5pb24tY29udGVudCAuZGV2aWNlLWxpc3QgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXRvZ2dsZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNXB4IDhweDtcbn1cbmlvbi1jb250ZW50IC5kZXZpY2UtbGlzdCBpb24tbGlzdCBpb24taXRlbSAuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgLndoaXRlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRncmV5KTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXRpdGxlIGltZyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2lkdGg6IDI1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogLTNweCA1cHggMCAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50LmRldmljZS1kZXRhaWwge1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWJvcmRlcmNvbG9yKTtcbiAgLS1taW4taGVpZ2h0OiA0MHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGlzdCBpb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tYXZhdGFyIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWF2YXRhciBpbWcge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBtYXJnaW46IDFweCAxNXB4IDAgMDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIC5jb2xvci1ib3gge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/members/dashboard/dashboard.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/members/dashboard/dashboard.page.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _assets_js_canvasjs_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/js/canvasjs.min */ "./src/assets/js/canvasjs.min.js");
/* harmony import */ var _assets_js_canvasjs_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_js_canvasjs_min__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _constants_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants.enum */ "./src/app/constants.enum.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);








let DashboardPage = class DashboardPage {
    constructor(storage, authService, loadingCtrl) {
        this.storage = storage;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.devices = null;
        this.searchTerm = '';
        this.searching = false;
        this.url = _constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].ROUTE;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.storage.get(_constants_enum__WEBPACK_IMPORTED_MODULE_6__["Constants"].USER_ID).then(res => {
                this.userId = res;
            });
            this.getDashboard();
        });
    }
    getDashboard() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Please Wait',
                translucent: true,
            });
            yield loading.present();
            yield this.authService.getDashboard().then(res => {
                this.devices = res.dashboardData;
                this.setFilteredItems();
                const chart = new _assets_js_canvasjs_min__WEBPACK_IMPORTED_MODULE_4__["Chart"]('SpeedChart', {
                    theme: 'light2',
                    zoomEnabled: true,
                    toolTip: {
                        content: '{name}: {y}km/h - {x}'
                    },
                    data: this.devices,
                    legend: {
                        cursor: 'pointer',
                        fontFamily: 'roboto',
                        itemclick(e) {
                            console.log(e);
                            if (typeof (e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
                                e.dataSeries.visible = false;
                                this.visibility = false;
                            }
                            else {
                                e.dataSeries.visible = true;
                                this.visibility = true;
                            }
                            e.chart.render();
                        }
                    },
                    axisX: {
                        labelFontFamily: 'roboto',
                        labelFontSize: 10,
                        labelAngle: -40,
                        valueFormatString: 'DD.MM - HH:mm',
                        gridThickness: 1,
                        gridDashType: 'dot'
                    },
                    axisY: {
                        title: ('Speed') + ' [' + ('km/h') + ']',
                        titleFontFamily: 'roboto',
                        titleFontSize: 10,
                        labelFontFamily: 'roboto',
                        labelFontSize: 10,
                        gridThickness: 1
                    },
                });
                chart.render();
                jquery__WEBPACK_IMPORTED_MODULE_7__('.canvasjs-chart-credit').hide();
            }).catch(e => {
                console.log(e);
            });
            yield loading.dismiss();
        });
    }
    setFilteredItems() {
        this.searchItem = this.filterDevices(this.searchTerm);
    }
    filterDevices(searchTerm) {
        console.log(this.devices);
        const deviceArr = this.devices.map(item => {
            if ('device_distance' in item) {
                console.log('in if');
            }
            else {
                console.log('in else');
                item.device_distance = { day1: 0, day7: 0, day30: 0 };
            }
            return item;
        });
        return deviceArr.filter(item => {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/dashboard/dashboard.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/members/dashboard/dashboard.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], DashboardPage);



/***/ }),

/***/ "./src/assets/js/canvasjs.min.js":
/*!***************************************!*\
  !*** ./src/assets/js/canvasjs.min.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 CanvasJS HTML5 & JavaScript Charts - v2.2 GA - https://canvasjs.com/ 
 Copyright 2018 fenopix

  --------------------- License Information --------------------
 CanvasJS is a commercial product which requires purchase of license. Without a commercial license you can use it for evaluation purposes for upto 30 days. Please refer to the following link for further details.
     https://canvasjs.com/license/

*/
/*eslint-disable*/
/*jshint ignore:start*/
(function(){function na(m,s){m.prototype=$a(s.prototype);m.prototype.constructor=m;m.base=s.prototype}function $a(m){function s(){}s.prototype=m;return new s}function Ta(m,s,q){"millisecond"===q?m.setMilliseconds(m.getMilliseconds()+1*s):"second"===q?m.setSeconds(m.getSeconds()+1*s):"minute"===q?m.setMinutes(m.getMinutes()+1*s):"hour"===q?m.setHours(m.getHours()+1*s):"day"===q?m.setDate(m.getDate()+1*s):"week"===q?m.setDate(m.getDate()+7*s):"month"===q?m.setMonth(m.getMonth()+1*s):"year"===q&&m.setFullYear(m.getFullYear()+
1*s);return m}function ha(m,s){var q=!1;0>m&&(q=!0,m*=-1);m=""+m;for(s=s?s:1;m.length<s;)m="0"+m;return q?"-"+m:m}function Fa(m){if(!m)return m;m=m.replace(/^\s\s*/,"");for(var s=/\s/,q=m.length;s.test(m.charAt(--q)););return m.slice(0,q+1)}function Ba(m){m.roundRect=function(m,q,v,y,x,z,S,C){S&&(this.fillStyle=S);C&&(this.strokeStyle=C);"undefined"===typeof x&&(x=5);this.lineWidth=z;this.beginPath();this.moveTo(m+x,q);this.lineTo(m+v-x,q);this.quadraticCurveTo(m+v,q,m+v,q+x);this.lineTo(m+v,q+y-
x);this.quadraticCurveTo(m+v,q+y,m+v-x,q+y);this.lineTo(m+x,q+y);this.quadraticCurveTo(m,q+y,m,q+y-x);this.lineTo(m,q+x);this.quadraticCurveTo(m,q,m+x,q);this.closePath();S&&this.fill();C&&0<z&&this.stroke()}}function Pa(m,s){return m-s}function R(m){var s=((m&16711680)>>16).toString(16),q=((m&65280)>>8).toString(16);m=((m&255)>>0).toString(16);s=2>s.length?"0"+s:s;q=2>q.length?"0"+q:q;m=2>m.length?"0"+m:m;return"#"+s+q+m}function ab(m,s){var q=this.length>>>0,v=Number(s)||0,v=0>v?Math.ceil(v):Math.floor(v);
for(0>v&&(v+=q);v<q;v++)if(v in this&&this[v]===m)return v;return-1}function y(m){return null===m||"undefined"===typeof m}function Ca(m){m.indexOf||(m.indexOf=ab);return m}function bb(m){if(W.fSDec)m[ga("`eeDwdouMhrudods")](ga("e`u`@ohl`uhnoHuds`uhnoDoe"),function(){W._fTWm&&W._fTWm(m)})}function Ua(m,s,q){q=q||"normal";var v=m+"_"+s+"_"+q,y=Va[v];if(isNaN(y)){try{m="position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:"+m+"; font-size:"+
s+"px; font-weight:"+q+";";if(!pa){var x=document.body;pa=document.createElement("span");pa.innerHTML="";var z=document.createTextNode("Mpgyi");pa.appendChild(z);x.appendChild(pa)}pa.style.display="";pa.setAttribute("style",m);y=Math.round(pa.offsetHeight);pa.style.display="none"}catch(S){y=Math.ceil(1.1*s)}y=Math.max(y,s);Va[v]=y}return y}function F(m,s){var q=[];if(q={solid:[],shortDash:[3,1],shortDot:[1,1],shortDashDot:[3,1,1,1],shortDashDotDot:[3,1,1,1,1,1],dot:[1,2],dash:[4,2],dashDot:[4,2,1,
2],longDash:[8,2],longDashDot:[8,2,1,2],longDashDotDot:[8,2,1,2,1,2]}[m||"solid"])for(var v=0;v<q.length;v++)q[v]*=s;else q=[];return q}function P(m,s,q,v,y){v=v||[];y=y||!1;v.push([m,s,q,y]);return m.addEventListener?(m.addEventListener(s,q,y),q):m.attachEvent?(v=function(s){s=s||window.event;s.preventDefault=s.preventDefault||function(){s.returnValue=!1};s.stopPropagation=s.stopPropagation||function(){s.cancelBubble=!0};q.call(m,s)},m.attachEvent("on"+s,v),v):!1}function Wa(m,s,q){m*=ia;s*=ia;m=
q.getImageData(m,s,2,2).data;s=!0;for(q=0;4>q;q++)if(m[q]!==m[q+4]|m[q]!==m[q+8]|m[q]!==m[q+12]){s=!1;break}return s?m[0]<<16|m[1]<<8|m[2]:0}function ja(m,s,q){return m in s?s[m]:q[m]}function Ga(m,s,q){if(v&&Xa){var y=m.getContext("2d");La=y.webkitBackingStorePixelRatio||y.mozBackingStorePixelRatio||y.msBackingStorePixelRatio||y.oBackingStorePixelRatio||y.backingStorePixelRatio||1;ia=Qa/La;m.width=s*ia;m.height=q*ia;Qa!==La&&(m.style.width=s+"px",m.style.height=q+"px",y.scale(ia,ia))}else m.width=
s,m.height=q}function cb(m){if(!db){var s=!1,q=!1;"undefined"===typeof qa.Chart.creditHref?(m.creditHref=ga("iuuqr;..b`ow`rkr/bnl."),m.creditText=ga("B`ow`rKR/bnl")):(s=m.updateOption("creditText"),q=m.updateOption("creditHref"));if(m.creditHref&&m.creditText){m._creditLink||(m._creditLink=document.createElement("a"),m._creditLink.setAttribute("class","canvasjs-chart-credit"),m._creditLink.setAttribute("title","JavaScript Charts"),m._creditLink.setAttribute("style","outline:none;margin:0px;position:absolute;right:2px;top:"+
(m.height-14)+"px;color:dimgrey;text-decoration:none;font-size:11px;font-family: Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"),m._creditLink.setAttribute("tabIndex",-1),m._creditLink.setAttribute("target","_blank"));if(0===m.renderCount||s||q)m._creditLink.setAttribute("href",m.creditHref),m._creditLink.innerHTML=m.creditText;m._creditLink&&m.creditHref&&m.creditText?(m._creditLink.parentElement||m._canvasJSContainer.appendChild(m._creditLink),m._creditLink.style.top=m.height-14+
"px"):m._creditLink.parentElement&&m._canvasJSContainer.removeChild(m._creditLink)}}}function ta(m,s){var q=document.createElement("canvas");q.setAttribute("class","canvasjs-chart-canvas");Ga(q,m,s);v||"undefined"===typeof G_vmlCanvasManager||G_vmlCanvasManager.initElement(q);return q}function oa(m,s,q){for(var v in q)s.style[v]=q[v]}function ua(m,s,q){s.getAttribute("state")||(s.style.backgroundColor=m.toolbar.backgroundColor,s.style.color=m.toolbar.fontColor,s.style.border="none",oa(m,s,{WebkitUserSelect:"none",
MozUserSelect:"none",msUserSelect:"none",userSelect:"none"}));s.getAttribute("state")!==q&&(s.setAttribute("state",q),s.setAttribute("type","button"),oa(m,s,{padding:"5px 12px",cursor:"pointer","float":"left",width:"40px",height:"25px",outline:"0px",verticalAlign:"baseline",lineHeight:"0"}),s.setAttribute("title",m._cultureInfo[q+"Text"]),s.innerHTML="<img style='height:95%;' src='"+eb[q].image+"' alt='"+m._cultureInfo[q+"Text"]+"' />")}function Ma(){for(var m=null,s=0;s<arguments.length;s++)m=arguments[s],
m.style&&(m.style.display="inline")}function va(){for(var m=null,s=0;s<arguments.length;s++)(m=arguments[s])&&m.style&&(m.style.display="none")}function Y(m,s,q,v,x){this._defaultsKey=m;this._themeOptionsKey=s;this._index=v;this.parent=x;this._eventListeners=[];m={};this.theme&&y(s)&&y(v)?m=y(xa[this.theme])?xa.light1:xa[this.theme]:this.parent&&(this.parent.themeOptions&&this.parent.themeOptions[s])&&(null===v?m=this.parent.themeOptions[s]:0<this.parent.themeOptions[s].length&&(v=Math.min(this.parent.themeOptions[s].length-
1,v),m=this.parent.themeOptions[s][v]));this.themeOptions=m;this.options=q?q:{_isPlaceholder:!0};this.setOptions(this.options,m)}function Da(m,s,q,v,y){"undefined"===typeof y&&(y=0);this._padding=y;this._x1=m;this._y1=s;this._x2=q;this._y2=v;this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=this._padding}function ka(m,s){ka.base.constructor.call(this,"TextBlock",null,s,null,null);this.ctx=m;this._isDirty=!0;this._wrappedText=null;this._initialize()}function Ra(m,s){Ra.base.constructor.call(this,
"Toolbar","toolbar",s,null,m);this.chart=m;this.canvas=m.canvas;this.ctx=this.chart.ctx;this.optionsName="toolbar"}function Ha(m,s){Ha.base.constructor.call(this,"Title","title",s,null,m);this.chart=m;this.canvas=m.canvas;this.ctx=this.chart.ctx;this.optionsName="title";if(y(this.options.margin)&&m.options.subtitles)for(var q=m.options.subtitles,v=0;v<q.length;v++)if((y(q[v].horizontalAlign)&&"center"===this.horizontalAlign||q[v].horizontalAlign===this.horizontalAlign)&&(y(q[v].verticalAlign)&&"top"===
this.verticalAlign||q[v].verticalAlign===this.verticalAlign)&&!q[v].dockInsidePlotArea===!this.dockInsidePlotArea){this.margin=0;break}"undefined"===typeof this.options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.height=this.width=null;this.bounds={x1:null,y1:null,x2:null,y2:null}}function Na(m,s,q){Na.base.constructor.call(this,"Subtitle","subtitles",s,q,m);this.chart=m;this.canvas=m.canvas;this.ctx=this.chart.ctx;this.optionsName="subtitles";this.isOptionsInArray=!0;
"undefined"===typeof this.options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.height=this.width=null;this.bounds={x1:null,y1:null,x2:null,y2:null}}function Ia(m){var s;m&&Ja[m]&&(s=Ja[m]);Ia.base.constructor.call(this,"CultureInfo",null,s,null,null)}var W={},v=!!document.createElement("canvas").getContext,qa={Chart:{width:500,height:400,zoomEnabled:!1,zoomType:"x",backgroundColor:"white",theme:"light1",animationEnabled:!1,animationDuration:1200,dataPointWidth:null,dataPointMinWidth:null,
dataPointMaxWidth:null,colorSet:"colorSet1",culture:"en",creditHref:"",creditText:"CanvasJS",interactivityEnabled:!0,exportEnabled:!1,exportFileName:"Chart",rangeChanging:null,rangeChanged:null,publicProperties:{title:"readWrite",subtitles:"readWrite",toolbar:"readWrite",toolTip:"readWrite",legend:"readWrite",axisX:"readWrite",axisY:"readWrite",axisX2:"readWrite",axisY2:"readWrite",data:"readWrite",options:"readWrite",bounds:"readOnly",container:"readOnly"}},Title:{padding:0,text:null,verticalAlign:"top",
horizontalAlign:"center",fontSize:20,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:v?"transparent":null,margin:5,wrap:!0,maxWidth:null,dockInsidePlotArea:!1,publicProperties:{options:"readWrite",bounds:"readOnly",chart:"readOnly"}},Subtitle:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:14,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,
borderColor:"black",cornerRadius:0,backgroundColor:null,margin:2,wrap:!0,maxWidth:null,dockInsidePlotArea:!1,publicProperties:{options:"readWrite",bounds:"readOnly",chart:"readOnly"}},Toolbar:{backgroundColor:"white",backgroundColorOnHover:"#2196f3",borderColor:"#2196f3",borderThickness:1,fontColor:"black",fontColorOnHover:"white",publicProperties:{options:"readWrite",chart:"readOnly"}},Legend:{name:null,verticalAlign:"center",horizontalAlign:"right",fontSize:14,fontFamily:"calibri",fontWeight:"normal",
fontColor:"black",fontStyle:"normal",cursor:null,itemmouseover:null,itemmouseout:null,itemmousemove:null,itemclick:null,dockInsidePlotArea:!1,reversed:!1,backgroundColor:v?"transparent":null,borderColor:v?"transparent":null,borderThickness:0,cornerRadius:0,maxWidth:null,maxHeight:null,markerMargin:null,itemMaxWidth:null,itemWidth:null,itemWrap:!0,itemTextFormatter:null,publicProperties:{options:"readWrite",bounds:"readOnly",chart:"readOnly"}},ToolTip:{enabled:!0,shared:!1,animationEnabled:!0,content:null,
contentFormatter:null,reversed:!1,backgroundColor:v?"rgba(255,255,255,.9)":"rgb(255,255,255)",borderColor:null,borderThickness:2,cornerRadius:5,fontSize:14,fontColor:"black",fontFamily:"Calibri, Arial, Georgia, serif;",fontWeight:"normal",fontStyle:"italic",publicProperties:{options:"readWrite",chart:"readOnly"}},Axis:{minimum:null,maximum:null,viewportMinimum:null,viewportMaximum:null,interval:null,intervalType:null,reversed:!1,logarithmic:!1,logarithmBase:10,title:null,titleFontColor:"black",titleFontSize:20,
titleFontFamily:"arial",titleFontWeight:"normal",titleFontStyle:"normal",titleWrap:!0,titleMaxWidth:null,titleBackgroundColor:v?"transparent":null,titleBorderColor:v?"transparent":null,titleBorderThickness:0,titleCornerRadius:0,labelAngle:0,labelFontFamily:"arial",labelFontColor:"black",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelAutoFit:!0,labelWrap:!0,labelMaxWidth:null,labelFormatter:null,labelBackgroundColor:v?"transparent":null,labelBorderColor:v?"transparent":null,
labelBorderThickness:0,labelCornerRadius:0,labelPlacement:"outside",prefix:"",suffix:"",includeZero:!0,tickLength:5,tickColor:"black",tickThickness:1,lineColor:"black",lineThickness:1,lineDashType:"solid",gridColor:"A0A0A0",gridThickness:0,gridDashType:"solid",interlacedColor:v?"transparent":null,valueFormatString:null,margin:2,publicProperties:{options:"readWrite",stripLines:"readWrite",scaleBreaks:"readWrite",crosshair:"readWrite",bounds:"readOnly",chart:"readOnly"}},StripLine:{value:null,startValue:null,
endValue:null,color:"orange",opacity:null,thickness:2,lineDashType:"solid",label:"",labelPlacement:"inside",labelAlign:"far",labelWrap:!0,labelMaxWidth:null,labelBackgroundColor:null,labelBorderColor:v?"transparent":null,labelBorderThickness:0,labelCornerRadius:0,labelFontFamily:"arial",labelFontColor:"orange",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelFormatter:null,showOnTop:!1,publicProperties:{options:"readWrite",axis:"readOnly",bounds:"readOnly",chart:"readOnly"}},
ScaleBreaks:{autoCalculate:!1,collapsibleThreshold:"25%",maxNumberOfAutoBreaks:2,spacing:8,type:"straight",color:"#FFFFFF",fillOpacity:0.9,lineThickness:2,lineColor:"#E16E6E",lineDashType:"solid",publicProperties:{options:"readWrite",customBreaks:"readWrite",axis:"readOnly",autoBreaks:"readOnly",bounds:"readOnly",chart:"readOnly"}},Break:{startValue:null,endValue:null,spacing:8,type:"straight",color:"#FFFFFF",fillOpacity:0.9,lineThickness:2,lineColor:"#E16E6E",lineDashType:"solid",publicProperties:{options:"readWrite",
scaleBreaks:"readOnly",bounds:"readOnly",chart:"readOnly"}},Crosshair:{enabled:!1,snapToDataPoint:!1,color:"grey",opacity:null,thickness:2,lineDashType:"solid",label:"",labelWrap:!0,labelMaxWidth:null,labelBackgroundColor:v?"grey":null,labelBorderColor:v?"grey":null,labelBorderThickness:0,labelCornerRadius:0,labelFontFamily:v?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontSize:12,labelFontColor:"#fff",labelFontWeight:"normal",labelFontStyle:"normal",labelFormatter:null,
valueFormatString:null,publicProperties:{options:"readWrite",axis:"readOnly",bounds:"readOnly",chart:"readOnly"}},DataSeries:{name:null,dataPoints:null,label:"",bevelEnabled:!1,highlightEnabled:!0,cursor:"default",indexLabel:"",indexLabelPlacement:"auto",indexLabelOrientation:"horizontal",indexLabelFontColor:"black",indexLabelFontSize:12,indexLabelFontStyle:"normal",indexLabelFontFamily:"Arial",indexLabelFontWeight:"normal",indexLabelBackgroundColor:null,indexLabelLineColor:"gray",indexLabelLineThickness:1,
indexLabelLineDashType:"solid",indexLabelMaxWidth:null,indexLabelWrap:!0,indexLabelFormatter:null,lineThickness:2,lineDashType:"solid",connectNullData:!1,nullDataLineDashType:"dash",color:null,lineColor:null,risingColor:"white",fallingColor:"red",fillOpacity:null,startAngle:0,radius:null,innerRadius:null,neckHeight:null,neckWidth:null,reversed:!1,valueRepresents:null,linkedDataSeriesIndex:null,whiskerThickness:2,whiskerDashType:"solid",whiskerColor:null,whiskerLength:null,stemThickness:2,stemColor:null,
stemDashType:"solid",upperBoxColor:"white",lowerBoxColor:"white",type:"column",xValueType:"number",axisXType:"primary",axisYType:"primary",axisXIndex:0,axisYIndex:0,xValueFormatString:null,yValueFormatString:null,zValueFormatString:null,percentFormatString:null,showInLegend:null,legendMarkerType:null,legendMarkerColor:null,legendText:null,legendMarkerBorderColor:v?"transparent":null,legendMarkerBorderThickness:0,markerType:"circle",markerColor:null,markerSize:null,markerBorderColor:v?"transparent":
null,markerBorderThickness:0,mouseover:null,mouseout:null,mousemove:null,click:null,toolTipContent:null,visible:!0,publicProperties:{options:"readWrite",axisX:"readWrite",axisY:"readWrite",chart:"readOnly"}},TextBlock:{x:0,y:0,width:null,height:null,maxWidth:null,maxHeight:null,padding:0,angle:0,text:"",horizontalAlign:"center",fontSize:12,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,textBaseline:"top"},
CultureInfo:{decimalSeparator:".",digitGroupSeparator:",",zoomText:"Zoom",panText:"Pan",resetText:"Reset",menuText:"More Options",saveJPGText:"Save as JPEG",savePNGText:"Save as PNG",printText:"Print",days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),shortDays:"Sun Mon Tue Wed Thu Fri Sat".split(" "),months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")}},
Ja={en:{}},x=v?"Trebuchet MS, Helvetica, sans-serif":"Arial",Ea=v?"Impact, Charcoal, sans-serif":"Arial",za={colorSet1:"#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "),colorSet2:"#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "),colorSet3:"#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")},
J,fa,T,Z,ea;fa="#333333";T="#000000";J="#666666";ea=Z="#000000";var ba=20,z=14,Sa={colorSet:"colorSet1",backgroundColor:"#FFFFFF",title:{fontFamily:Ea,fontSize:32,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5},subtitles:[{fontFamily:Ea,fontSize:z,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5}],data:[{indexLabelFontFamily:x,indexLabelFontSize:z,indexLabelFontColor:fa,indexLabelFontWeight:"normal",indexLabelLineThickness:1}],axisX:[{titleFontFamily:x,titleFontSize:ba,
titleFontColor:fa,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:T,labelFontWeight:"normal",lineThickness:1,lineColor:J,tickThickness:1,tickColor:J,gridThickness:0,gridColor:J,stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},
scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisX2:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:fa,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:T,labelFontWeight:"normal",lineThickness:1,lineColor:J,tickThickness:1,tickColor:J,gridThickness:0,gridColor:J,stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,
labelFontSize:z,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisY:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:fa,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:T,labelFontWeight:"normal",lineThickness:1,lineColor:J,tickThickness:1,tickColor:J,gridThickness:1,gridColor:J,stripLines:[{labelFontFamily:x,
labelFontSize:z,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisY2:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:fa,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,
labelFontColor:T,labelFontWeight:"normal",lineThickness:1,lineColor:J,tickThickness:1,tickColor:J,gridThickness:1,gridColor:J,stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,
lineDashType:"solid"}}],legend:{fontFamily:x,fontSize:14,fontColor:fa,fontWeight:"bold",verticalAlign:"bottom",horizontalAlign:"center"},toolTip:{fontFamily:x,fontSize:14,fontStyle:"normal",cornerRadius:0,borderThickness:1}};T=fa="#F5F5F5";J="#FFFFFF";Z="#40BAF1";ea="#F5F5F5";var ba=20,z=14,Ya={colorSet:"colorSet2",title:{fontFamily:x,fontSize:33,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:5},subtitles:[{fontFamily:x,fontSize:z,fontColor:"#3A3A3A",fontWeight:"normal",verticalAlign:"top",
margin:5}],data:[{indexLabelFontFamily:x,indexLabelFontSize:z,indexLabelFontColor:"#666666",indexLabelFontWeight:"normal",indexLabelLineThickness:1}],axisX:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:"#666666",titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:"#666666",labelFontWeight:"normal",lineThickness:1,lineColor:"#BBBBBB",tickThickness:1,tickColor:"#BBBBBB",gridThickness:1,gridColor:"#BBBBBB",stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FFA500",
labelFontWeight:"normal",labelBackgroundColor:null,color:"#FFA500",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:"black",color:"black",thickness:1,lineDashType:"dot"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisX2:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:"#666666",titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:"#666666",
labelFontWeight:"normal",lineThickness:1,lineColor:"#BBBBBB",tickColor:"#BBBBBB",tickThickness:1,gridThickness:1,gridColor:"#BBBBBB",stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FFA500",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FFA500",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:"black",color:"black",thickness:1,lineDashType:"dot"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",
lineThickness:1,lineDashType:"solid"}}],axisY:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:"#666666",titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:"#666666",labelFontWeight:"normal",lineThickness:0,lineColor:"#BBBBBB",tickColor:"#BBBBBB",tickThickness:1,gridThickness:1,gridColor:"#BBBBBB",stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FFA500",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FFA500",thickness:1}],crosshair:{labelFontFamily:x,
labelFontSize:z,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:"black",color:"black",thickness:1,lineDashType:"dot"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisY2:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:"#666666",titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:"#666666",labelFontWeight:"normal",lineThickness:0,lineColor:"#BBBBBB",tickColor:"#BBBBBB",tickThickness:1,gridThickness:1,
gridColor:"#BBBBBB",stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FFA500",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FFA500",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:"black",color:"black",thickness:1,lineDashType:"dot"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],legend:{fontFamily:x,fontSize:14,fontColor:"#3A3A3A",fontWeight:"bold",
verticalAlign:"bottom",horizontalAlign:"center"},toolTip:{fontFamily:x,fontSize:14,fontStyle:"normal",cornerRadius:0,borderThickness:1}};T=fa="#F5F5F5";J="#FFFFFF";Z="#40BAF1";ea="#F5F5F5";ba=20;z=14;Ea={colorSet:"colorSet12",backgroundColor:"#2A2A2A",title:{fontFamily:Ea,fontSize:32,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5},subtitles:[{fontFamily:Ea,fontSize:z,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5}],toolbar:{backgroundColor:"#666666",backgroundColorOnHover:"#FF7372",
borderColor:"#FF7372",borderThickness:1,fontColor:"#F5F5F5",fontColorOnHover:"#F5F5F5"},data:[{indexLabelFontFamily:x,indexLabelFontSize:z,indexLabelFontColor:T,indexLabelFontWeight:"normal",indexLabelLineThickness:1}],axisX:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:T,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:T,labelFontWeight:"normal",lineThickness:1,lineColor:J,tickThickness:1,tickColor:J,gridThickness:0,gridColor:J,stripLines:[{labelFontFamily:x,labelFontSize:z,
labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisX2:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:T,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,
labelFontColor:T,labelFontWeight:"normal",lineThickness:1,lineColor:J,tickThickness:1,tickColor:J,gridThickness:0,gridColor:J,stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,
lineDashType:"solid",color:"#111111"}}],axisY:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:T,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:T,labelFontWeight:"normal",lineThickness:1,lineColor:J,tickThickness:1,tickColor:J,gridThickness:1,gridColor:J,stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#000000",
labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisY2:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:T,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:T,labelFontWeight:"normal",lineThickness:1,lineColor:J,tickThickness:1,tickColor:J,gridThickness:1,gridColor:J,stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FF7300",
labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],legend:{fontFamily:x,fontSize:14,fontColor:fa,fontWeight:"bold",verticalAlign:"bottom",horizontalAlign:"center"},toolTip:{fontFamily:x,fontSize:14,
fontStyle:"normal",cornerRadius:0,borderThickness:1,fontColor:T,backgroundColor:"rgba(0, 0, 0, .7)"}};J="#FFFFFF";T=fa="#FAFAFA";Z="#40BAF1";ea="#F5F5F5";var ba=20,z=14,xa={light1:Sa,light2:Ya,dark1:Ea,dark2:{colorSet:"colorSet2",backgroundColor:"#32373A",title:{fontFamily:x,fontSize:32,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5},subtitles:[{fontFamily:x,fontSize:z,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5}],toolbar:{backgroundColor:"#666666",backgroundColorOnHover:"#FF7372",
borderColor:"#FF7372",borderThickness:1,fontColor:"#F5F5F5",fontColorOnHover:"#F5F5F5"},data:[{indexLabelFontFamily:x,indexLabelFontSize:z,indexLabelFontColor:T,indexLabelFontWeight:"normal",indexLabelLineThickness:1}],axisX:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:T,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:T,labelFontWeight:"normal",lineThickness:1,lineColor:J,tickThickness:1,tickColor:J,gridThickness:0,gridColor:J,stripLines:[{labelFontFamily:x,labelFontSize:z,
labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisX2:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:T,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,
labelFontColor:T,labelFontWeight:"normal",lineThickness:1,lineColor:J,tickThickness:1,tickColor:J,gridThickness:0,gridColor:J,stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,
lineDashType:"solid",color:"#111111"}}],axisY:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:T,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:T,labelFontWeight:"normal",lineThickness:0,lineColor:J,tickThickness:1,tickColor:J,gridThickness:1,gridColor:J,stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#000000",
labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisY2:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:T,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:T,labelFontWeight:"normal",lineThickness:0,lineColor:J,tickThickness:1,tickColor:J,gridThickness:1,gridColor:J,stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FF7300",
labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],legend:{fontFamily:x,fontSize:14,fontColor:fa,fontWeight:"bold",verticalAlign:"bottom",horizontalAlign:"center"},toolTip:{fontFamily:x,fontSize:14,
fontStyle:"normal",cornerRadius:0,borderThickness:1,fontColor:T,backgroundColor:"rgba(0, 0, 0, .7)"}},theme1:Sa,theme2:Ya,theme3:Sa},U={numberDuration:1,yearDuration:314496E5,monthDuration:2592E6,weekDuration:6048E5,dayDuration:864E5,hourDuration:36E5,minuteDuration:6E4,secondDuration:1E3,millisecondDuration:1,dayOfWeekFromInt:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")};(function(){W.fSDec=function(m){for(var s="",q=0;q<m.length;q++)s+=String.fromCharCode(Math.ceil(m.length/
57/5)^m.charCodeAt(q));return s};W.obj={trVs:"Ush`m!Wdsrhno",fntStr:"qy!B`mhcsh-!Mtbhe`!Fs`oed-!Mtbhe`!R`or!Tohbned-!@sh`m-!r`or,rdshg",txtBl:"udyuC`rdmhod",fnt:"gnou",fSy:"ghmmRuxmd",fTx:"ghmmUdyu",grClr:"fsdx",cntx:"buy",tp:"unq"};delete qa[W.fSDec("Bi`su")][W.fSDec("bsdehuIsdg")];W.pro={sCH:qa[W.fSDec("Bi`su")][W.fSDec("bsdehuIsdg")]};W._fTWm=function(m){if("undefined"===typeof W.pro.sCH&&!Za)try{var s=m[W.fSDec(W.obj.cntx)];s[W.fSDec(W.obj.txtBl)]=W.fSDec(W.obj.tp);s[W.fSDec(W.obj.fnt)]=11+W.fSDec(W.obj.fntStr);
s[W.fSDec(W.obj.fSy)]=W.fSDec(W.obj.grClr);s[W.fSDec(W.obj.fTx)](W.fSDec(W.obj.trVs),2,m.height-11-2)}catch(q){}}})();var Va={},pa=null,Aa=function(){var m=/D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,s="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),q="Sun Mon Tue Wed Thu Fri Sat".split(" "),v="January February March April May June July August September October November December".split(" "),y="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
x=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,z=/[^-+\dA-Z]/g;return function(S,C,I){var F=I?I.days:s,J=I?I.months:v,R=I?I.shortDays:q,P=I?I.shortMonths:y;I="";var U=!1;S=S&&S.getTime?S:S?new Date(S):new Date;if(isNaN(S))throw SyntaxError("invalid date");"UTC:"===C.slice(0,4)&&(C=C.slice(4),U=!0);I=U?"getUTC":"get";var W=S[I+"Date"](),X=S[I+"Day"](),Y=S[I+"Month"](),T=S[I+"FullYear"](),O=S[I+"Hours"](),V=S[I+
"Minutes"](),a=S[I+"Seconds"](),f=S[I+"Milliseconds"](),b=U?0:S.getTimezoneOffset();return I=C.replace(m,function(c){switch(c){case "D":return W;case "DD":return ha(W,2);case "DDD":return R[X];case "DDDD":return F[X];case "M":return Y+1;case "MM":return ha(Y+1,2);case "MMM":return P[Y];case "MMMM":return J[Y];case "Y":return parseInt(String(T).slice(-2));case "YY":return ha(String(T).slice(-2),2);case "YYY":return ha(String(T).slice(-3),3);case "YYYY":return ha(T,4);case "h":return O%12||12;case "hh":return ha(O%
12||12,2);case "H":return O;case "HH":return ha(O,2);case "m":return V;case "mm":return ha(V,2);case "s":return a;case "ss":return ha(a,2);case "f":return String(f).slice(0,1);case "ff":return ha(String(f).slice(0,2),2);case "fff":return ha(String(f).slice(0,3),3);case "t":return 12>O?"a":"p";case "tt":return 12>O?"am":"pm";case "T":return 12>O?"A":"P";case "TT":return 12>O?"AM":"PM";case "K":return U?"UTC":(String(S).match(x)||[""]).pop().replace(z,"");case "z":return(0<b?"-":"+")+Math.floor(Math.abs(b)/
60);case "zz":return(0<b?"-":"+")+ha(Math.floor(Math.abs(b)/60),2);case "zzz":return(0<b?"-":"+")+ha(Math.floor(Math.abs(b)/60),2)+ha(Math.abs(b)%60,2);default:return c.slice(1,c.length-1)}})}}(),V=function(m,s,q){if(null===m)return"";if(!isFinite(m))return m;m=Number(m);var v=0>m?!0:!1;v&&(m*=-1);var y=q?q.decimalSeparator:".",x=q?q.digitGroupSeparator:",",z="";s=String(s);var z=1,S=q="",C=-1,I=[],F=[],J=0,R=0,U=0,P=!1,W=0,S=s.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);s=null;for(var X=
0;S&&X<S.length;X++)if(s=S[X],"."===s&&0>C)C=X;else{if("%"===s)z*=100;else if("\u2030"===s){z*=1E3;continue}else if(","===s[0]&&"."===s[s.length-1]){z/=Math.pow(1E3,s.length-1);C=X+s.length-1;continue}else"E"!==s[0]&&"e"!==s[0]||"0"!==s[s.length-1]||(P=!0);0>C?(I.push(s),"#"===s||"0"===s?J++:","===s&&U++):(F.push(s),"#"!==s&&"0"!==s||R++)}P&&(s=Math.floor(m),S=-Math.floor(Math.log(m)/Math.LN10+1),W=0===m?0:0===s?-(J+S):String(s).length-J,z/=Math.pow(10,W));0>C&&(C=X);z=(m*z).toFixed(R);s=z.split(".");
z=(s[0]+"").split("");m=(s[1]+"").split("");z&&"0"===z[0]&&z.shift();for(P=S=X=R=C=0;0<I.length;)if(s=I.pop(),"#"===s||"0"===s)if(C++,C===J){var Y=z,z=[];if("0"===s)for(s=J-R-(Y?Y.length:0);0<s;)Y.unshift("0"),s--;for(;0<Y.length;)q=Y.pop()+q,P++,0===P%S&&(X===U&&0<Y.length)&&(q=x+q)}else 0<z.length?(q=z.pop()+q,R++,P++):"0"===s&&(q="0"+q,R++,P++),0===P%S&&(X===U&&0<z.length)&&(q=x+q);else"E"!==s[0]&&"e"!==s[0]||"0"!==s[s.length-1]||!/[eE][+-]*[0]+/.test(s)?","===s?(X++,S=P,P=0,0<z.length&&(q=x+q)):
q=1<s.length&&('"'===s[0]&&'"'===s[s.length-1]||"'"===s[0]&&"'"===s[s.length-1])?s.slice(1,s.length-1)+q:s+q:(s=0>W?s.replace("+","").replace("-",""):s.replace("-",""),q+=s.replace(/[0]+/,function(m){return ha(W,m.length)}));x="";for(I=!1;0<F.length;)s=F.shift(),"#"===s||"0"===s?0<m.length&&0!==Number(m.join(""))?(x+=m.shift(),I=!0):"0"===s&&(x+="0",I=!0):1<s.length&&('"'===s[0]&&'"'===s[s.length-1]||"'"===s[0]&&"'"===s[s.length-1])?x+=s.slice(1,s.length-1):"E"!==s[0]&&"e"!==s[0]||"0"!==s[s.length-
1]||!/[eE][+-]*[0]+/.test(s)?x+=s:(s=0>W?s.replace("+","").replace("-",""):s.replace("-",""),x+=s.replace(/[0]+/,function(m){return ha(W,m.length)}));q+=(I?y:"")+x;return v?"-"+q:q},Oa=function(m){var s=0,q=0;m=m||window.event;m.offsetX||0===m.offsetX?(s=m.offsetX,q=m.offsetY):m.layerX||0==m.layerX?(s=m.layerX,q=m.layerY):(s=m.pageX-m.target.offsetLeft,q=m.pageY-m.target.offsetTop);return{x:s,y:q}},Xa=!0,Qa=window.devicePixelRatio||1,La=1,ia=Xa?Qa/La:1,ga=function(m){for(var s="",q=0;q<m.length;q++)s+=
String.fromCharCode(Math.ceil(m.length/57/5)^m.charCodeAt(q));return s},Za=window&&window[ga("mnb`uhno")]&&window[ga("mnb`uhno")].href&&window[ga("mnb`uhno")].href.indexOf&&(-1!==window[ga("mnb`uhno")].href.indexOf(ga("b`ow`rkr/bnl"))||-1!==window[ga("mnb`uhno")].href.indexOf(ga("gdonqhy/bnl"))||-1!==window[ga("mnb`uhno")].href.indexOf(ga("gheemd"))),db=Za&&-1===window[ga("mnb`uhno")].href.indexOf(ga("gheemd")),eb={reset:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg=="},
pan:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC"},
zoom:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII="},
menu:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC"}};
Y.prototype.setOptions=function(m,s){if(qa[this._defaultsKey]){var q=qa[this._defaultsKey],v;for(v in q)"publicProperties"!==v&&q.hasOwnProperty(v)&&(this[v]=m&&v in m?m[v]:s&&v in s?s[v]:q[v])}};Y.prototype.get=function(m){var s=qa[this._defaultsKey];if("options"===m)return this.options&&this.options._isPlaceholder?null:this.options;if(s.hasOwnProperty(m)||s.publicProperties&&s.publicProperties.hasOwnProperty(m))return this[m];window.console&&window.console.log('Property "'+m+"\" doesn't exist. Please check for typo.")};
Y.prototype.set=function(m,s,q){q="undefined"===typeof q?!0:q;var v=qa[this._defaultsKey];if("options"===m)this.createUserOptions(s);else if(v.hasOwnProperty(m)||v.publicProperties&&v.publicProperties.hasOwnProperty(m)&&"readWrite"===v.publicProperties[m])this.options._isPlaceholder&&this.createUserOptions(),this.options[m]=s;else{window.console&&(v.publicProperties&&v.publicProperties.hasOwnProperty(m)&&"readOnly"===v.publicProperties[m]?window.console.log('Property "'+m+'" is read-only.'):window.console.log('Property "'+
m+"\" doesn't exist. Please check for typo."));return}q&&(this.chart||this).render()};Y.prototype.addTo=function(m,s,q,v){v="undefined"===typeof v?!0:v;var y=qa[this._defaultsKey];y.hasOwnProperty(m)||y.publicProperties&&y.publicProperties.hasOwnProperty(m)&&"readWrite"===y.publicProperties[m]?(this.options._isPlaceholder&&this.createUserOptions(),"undefined"===typeof this.options[m]&&(this.options[m]=[]),m=this.options[m],q="undefined"===typeof q||null===q?m.length:q,m.splice(q,0,s),v&&(this.chart||
this).render()):window.console&&(y.publicProperties&&y.publicProperties.hasOwnProperty(m)&&"readOnly"===y.publicProperties[m]?window.console.log('Property "'+m+'" is read-only.'):window.console.log('Property "'+m+"\" doesn't exist. Please check for typo."))};Y.prototype.createUserOptions=function(m){if("undefined"!==typeof m||this.options._isPlaceholder)if(this.parent.options._isPlaceholder&&this.parent.createUserOptions(),this.isOptionsInArray){this.parent.options[this.optionsName]||(this.parent.options[this.optionsName]=
[]);var s=this.parent.options[this.optionsName],v=s.length;this.options._isPlaceholder||(Ca(s),v=s.indexOf(this.options));this.options="undefined"===typeof m?{}:m;s[v]=this.options}else this.options="undefined"===typeof m?{}:m,m=this.parent.options,this.optionsName?s=this.optionsName:(s=this._defaultsKey)&&0!==s.length?(v=s.charAt(0).toLowerCase(),1<s.length&&(v=v.concat(s.slice(1))),s=v):s=void 0,m[s]=this.options};Y.prototype.remove=function(m){m="undefined"===typeof m?!0:m;if(this.isOptionsInArray){var s=
this.parent.options[this.optionsName];Ca(s);var v=s.indexOf(this.options);0<=v&&s.splice(v,1)}else delete this.parent.options[this.optionsName];m&&(this.chart||this).render()};Y.prototype.updateOption=function(m){var s=qa[this._defaultsKey],v={},x=this[m],z=this._themeOptionsKey,F=this._index;this.theme&&y(z)&&y(F)?v=y(xa[this.theme])?xa.light1:xa[this.theme]:this.parent&&(this.parent.themeOptions&&this.parent.themeOptions[z])&&(null===F?v=this.parent.themeOptions[z]:0<this.parent.themeOptions[z].length&&
(v=Math.min(this.parent.themeOptions[z].length-1,F),v=this.parent.themeOptions[z][v]));this.themeOptions=v;m in s&&(x=m in this.options?this.options[m]:v&&m in v?v[m]:s[m]);if(x===this[m])return!1;this[m]=x;return!0};Y.prototype.trackChanges=function(m){if(!this.sessionVariables)throw"Session Variable Store not set";this.sessionVariables[m]=this.options[m]};Y.prototype.isBeingTracked=function(m){this.options._oldOptions||(this.options._oldOptions={});return this.options._oldOptions[m]?!0:!1};Y.prototype.hasOptionChanged=
function(m){if(!this.sessionVariables)throw"Session Variable Store not set";return this.sessionVariables[m]!==this.options[m]};Y.prototype.addEventListener=function(m,s,v){m&&s&&(this._eventListeners[m]=this._eventListeners[m]||[],this._eventListeners[m].push({context:v||this,eventHandler:s}))};Y.prototype.removeEventListener=function(m,v){if(m&&v&&this._eventListeners[m])for(var q=this._eventListeners[m],y=0;y<q.length;y++)if(q[y].eventHandler===v){q[y].splice(y,1);break}};Y.prototype.removeAllEventListeners=
function(){this._eventListeners=[]};Y.prototype.dispatchEvent=function(m,v,q){if(m&&this._eventListeners[m]){v=v||{};for(var y=this._eventListeners[m],x=0;x<y.length;x++)y[x].eventHandler.call(y[x].context,v)}"function"===typeof this[m]&&this[m].call(q||this.chart,v)};Da.prototype.registerSpace=function(m,v){"top"===m?this._topOccupied+=v.height:"bottom"===m?this._bottomOccupied+=v.height:"left"===m?this._leftOccupied+=v.width:"right"===m&&(this._rightOccupied+=v.width)};Da.prototype.unRegisterSpace=
function(m,v){"top"===m?this._topOccupied-=v.height:"bottom"===m?this._bottomOccupied-=v.height:"left"===m?this._leftOccupied-=v.width:"right"===m&&(this._rightOccupied-=v.width)};Da.prototype.getFreeSpace=function(){return{x1:this._x1+this._leftOccupied,y1:this._y1+this._topOccupied,x2:this._x2-this._rightOccupied,y2:this._y2-this._bottomOccupied,width:this._x2-this._x1-this._rightOccupied-this._leftOccupied,height:this._y2-this._y1-this._bottomOccupied-this._topOccupied}};Da.prototype.reset=function(){this._rightOccupied=
this._leftOccupied=this._bottomOccupied=this._topOccupied=this._padding};na(ka,Y);ka.prototype._initialize=function(){y(this.padding)||"object"!==typeof this.padding?this.topPadding=this.rightPadding=this.bottomPadding=this.leftPadding=Number(this.padding)|0:(this.topPadding=y(this.padding.top)?0:Number(this.padding.top)|0,this.rightPadding=y(this.padding.right)?0:Number(this.padding.right)|0,this.bottomPadding=y(this.padding.bottom)?0:Number(this.padding.bottom)|0,this.leftPadding=y(this.padding.left)?
0:Number(this.padding.left)|0)};ka.prototype.render=function(m){if(0!==this.fontSize){m&&this.ctx.save();var v=this.ctx.font;this.ctx.textBaseline=this.textBaseline;var q=0;this._isDirty&&this.measureText(this.ctx);this.ctx.translate(this.x,this.y+q);"middle"===this.textBaseline&&(q=-this._lineHeight/2);this.ctx.font=this._getFontString();this.ctx.rotate(Math.PI/180*this.angle);var y=0,x=this.topPadding,z=null;this.ctx.roundRect||Ba(this.ctx);(0<this.borderThickness&&this.borderColor||this.backgroundColor)&&
this.ctx.roundRect(0,q,this.width,this.height,this.cornerRadius,this.borderThickness,this.backgroundColor,this.borderColor);this.ctx.fillStyle=this.fontColor;for(q=0;q<this._wrappedText.lines.length;q++)z=this._wrappedText.lines[q],"right"===this.horizontalAlign?y=(this.width-(this.leftPadding+this.rightPadding))/2-z.width/2+this.leftPadding:"left"===this.horizontalAlign?y=this.leftPadding:"center"===this.horizontalAlign&&(y=(this.width-(this.leftPadding+this.rightPadding))/2-z.width/2+this.leftPadding),
this.ctx.fillText(z.text,y,x),x+=z.height;this.ctx.font=v;m&&this.ctx.restore()}};ka.prototype.setText=function(m){this.text=m;this._isDirty=!0;this._wrappedText=null};ka.prototype.measureText=function(){this._lineHeight=Ua(this.fontFamily,this.fontSize,this.fontWeight);if(null===this.maxWidth)throw"Please set maxWidth and height for TextBlock";this._wrapText(this.ctx);this._isDirty=!1;return{width:this.width,height:this.height}};ka.prototype._getLineWithWidth=function(m,v,q){m=String(m);if(!m)return{text:"",
width:0};var y=q=0,x=m.length-1,z=Infinity;for(this.ctx.font=this._getFontString();y<=x;){var z=Math.floor((y+x)/2),F=m.substr(0,z+1);q=this.ctx.measureText(F).width;if(q<v)y=z+1;else if(q>v)x=z-1;else break}q>v&&1<F.length&&(F=F.substr(0,F.length-1),q=this.ctx.measureText(F).width);v=!0;if(F.length===m.length||" "===m[F.length])v=!1;v&&(m=F.split(" "),1<m.length&&m.pop(),F=m.join(" "),q=this.ctx.measureText(F).width);return{text:F,width:q}};ka.prototype._wrapText=function(){var m=new String(Fa(String(this.text))),
v=[],q=this.ctx.font,y=0,x=0;this.ctx.font=this._getFontString();if(0===this.frontSize)x=y=0;else for(;0<m.length;){var z=this.maxHeight-(this.topPadding+this.bottomPadding),F=this._getLineWithWidth(m,this.maxWidth-(this.leftPadding+this.rightPadding),!1);F.height=this._lineHeight;v.push(F);var S=x,x=Math.max(x,F.width),y=y+F.height,m=Fa(m.slice(F.text.length,m.length));z&&y>z&&(F=v.pop(),y-=F.height,x=S)}this._wrappedText={lines:v,width:x,height:y};this.width=x+(this.leftPadding+this.rightPadding);
this.height=y+(this.topPadding+this.bottomPadding);this.ctx.font=q};ka.prototype._getFontString=function(){var m;m=""+(this.fontStyle?this.fontStyle+" ":"");m+=this.fontWeight?this.fontWeight+" ":"";m+=this.fontSize?this.fontSize+"px ":"";var s=this.fontFamily?this.fontFamily+"":"";!v&&s&&(s=s.split(",")[0],"'"!==s[0]&&'"'!==s[0]&&(s="'"+s+"'"));return m+=s};na(Ra,Y);na(Ha,Y);Ha.prototype.render=function(){if(this.text){var m=this.dockInsidePlotArea?this.chart.plotArea:this.chart,v=m.layoutManager.getFreeSpace(),
q=v.x1,x=v.y1,z=0,F=0,R=this.chart._menuButton&&this.chart.exportEnabled&&"top"===this.verticalAlign?22:0,S,C;"top"===this.verticalAlign||"bottom"===this.verticalAlign?(null===this.maxWidth&&(this.maxWidth=v.width-4-R*("center"===this.horizontalAlign?2:1)),F=0.5*v.height-this.margin-2,z=0):"center"===this.verticalAlign&&("left"===this.horizontalAlign||"right"===this.horizontalAlign?(null===this.maxWidth&&(this.maxWidth=v.height-4),F=0.5*v.width-this.margin-2):"center"===this.horizontalAlign&&(null===
this.maxWidth&&(this.maxWidth=v.width-4),F=0.5*v.height-4));var I;y(this.padding)||"number"!==typeof this.padding?y(this.padding)||"object"!==typeof this.padding||(I=this.padding.top?this.padding.top:this.padding.bottom?this.padding.bottom:0,I+=this.padding.bottom?this.padding.bottom:this.padding.top?this.padding.top:0,I*=1.25):I=2.5*this.padding;this.wrap||(F=Math.min(F,Math.max(1.5*this.fontSize,this.fontSize+I)));F=new ka(this.ctx,{fontSize:this.fontSize,fontFamily:this.fontFamily,fontColor:this.fontColor,
fontStyle:this.fontStyle,fontWeight:this.fontWeight,horizontalAlign:this.horizontalAlign,verticalAlign:this.verticalAlign,borderColor:this.borderColor,borderThickness:this.borderThickness,backgroundColor:this.backgroundColor,maxWidth:this.maxWidth,maxHeight:F,cornerRadius:this.cornerRadius,text:this.text,padding:this.padding,textBaseline:"top"});I=F.measureText();"top"===this.verticalAlign||"bottom"===this.verticalAlign?("top"===this.verticalAlign?(x=v.y1+2,C="top"):"bottom"===this.verticalAlign&&
(x=v.y2-2-I.height,C="bottom"),"left"===this.horizontalAlign?q=v.x1+2:"center"===this.horizontalAlign?q=v.x1+v.width/2-I.width/2:"right"===this.horizontalAlign&&(q=v.x2-2-I.width-R),S=this.horizontalAlign,this.width=I.width,this.height=I.height):"center"===this.verticalAlign&&("left"===this.horizontalAlign?(q=v.x1+2,x=v.y2-2-(this.maxWidth/2-I.width/2),z=-90,C="left",this.width=I.height,this.height=I.width):"right"===this.horizontalAlign?(q=v.x2-2,x=v.y1+2+(this.maxWidth/2-I.width/2),z=90,C="right",
this.width=I.height,this.height=I.width):"center"===this.horizontalAlign&&(x=m.y1+(m.height/2-I.height/2),q=m.x1+(m.width/2-I.width/2),C="center",this.width=I.width,this.height=I.height),S="center");F.x=q;F.y=x;F.angle=z;F.horizontalAlign=S;F.render(!0);m.layoutManager.registerSpace(C,{width:this.width+("left"===C||"right"===C?this.margin+2:0),height:this.height+("top"===C||"bottom"===C?this.margin+2:0)});this.bounds={x1:q,y1:x,x2:q+this.width,y2:x+this.height};this.ctx.textBaseline="top"}};na(Na,
Y);Na.prototype.render=Ha.prototype.render;na(Ia,Y);var Ka={addTheme:function(m,v){xa[m]=v},addColorSet:function(m,v){za[m]=v},addCultureInfo:function(m,v){Ja[m]=v},formatNumber:function(m,v,q){q=q||"en";if(Ja[q])return V(m,v||"#,##0.##",new Ia(q));throw"Unknown Culture Name";},formatDate:function(m,v,q){q=q||"en";if(Ja[q])return Aa(m,v||"DD MMM YYYY",new Ia(q));throw"Unknown Culture Name";}}; true&&"undefined"!==typeof module.exports?module.exports=Ka: true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Ka}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;Ka.Chart=function(){function m(a,f){return a.x-f.x}function s(a,f,b){if(a&&f&&b){b=b+"."+f;var c="image/"+f;a=a.toDataURL(c);var e=!1,g=document.createElement("a");g.download=b;g.href=a;if("undefined"!==typeof Blob&&new Blob){for(var h=a.replace(/^data:[a-z\/]*;base64,/,""),h=atob(h),l=new ArrayBuffer(h.length),l=new Uint8Array(l),t=0;t<h.length;t++)l[t]=h.charCodeAt(t);f=new Blob([l.buffer],{type:"image/"+f});try{window.navigator.msSaveBlob(f,
b),e=!0}catch(k){g.dataset.downloadurl=[c,g.download,g.href].join(":"),g.href=window.URL.createObjectURL(f)}}if(!e)try{event=document.createEvent("MouseEvents"),event.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),g.dispatchEvent?g.dispatchEvent(event):g.fireEvent&&g.fireEvent("onclick")}catch(r){f=window.open(),f.document.write("<img src='"+a+"'></img><div>Please right click on the image and save it to your device</div>"),f.document.close()}}}function q(a,f){f=f||{};this.theme=
y(f.theme)||y(xa[f.theme])?"light1":f.theme;q.base.constructor.call(this,"Chart",null,f,null,null);var b=this;this._containerId=a;this._objectsInitialized=!1;this.overlaidCanvasCtx=this.ctx=null;this._indexLabels=[];this._panTimerId=0;this._lastTouchEventType="";this._lastTouchData=null;this.isAnimating=!1;this.renderCount=0;this.disableToolTip=this.animatedRender=!1;this.allDOMEventHandlers=[];this.panEnabled=!1;this._defaultCursor="default";this.plotArea={canvas:null,ctx:null,x1:0,y1:0,x2:0,y2:0,
width:0,height:0};this._dataInRenderedOrder=[];if(this.container="string"===typeof this._containerId?document.getElementById(this._containerId):this._containerId){this.container.innerHTML="";var c=0,e=0,c=this.options.width?this.width:0<this.container.clientWidth?this.container.clientWidth:this.width,e=this.options.height?this.height:0<this.container.clientHeight?this.container.clientHeight:this.height;this.width=c;this.height=e;this.x1=this.y1=0;this.x2=this.width;this.y2=this.height;this._selectedColorSet=
"undefined"!==typeof za[this.colorSet]?za[this.colorSet]:za.colorSet1;this._canvasJSContainer=document.createElement("div");this._canvasJSContainer.setAttribute("class","canvasjs-chart-container");this._canvasJSContainer.style.position="relative";this._canvasJSContainer.style.textAlign="left";this._canvasJSContainer.style.cursor="auto";v||(this._canvasJSContainer.style.height="0px");this.container.appendChild(this._canvasJSContainer);this.canvas=ta(c,e);this._preRenderCanvas=ta(c,e);this.canvas.style.position=
"absolute";this.canvas.getContext&&(this._canvasJSContainer.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctx.textBaseline="top",Ba(this.ctx),this._preRenderCtx=this._preRenderCanvas.getContext("2d"),this._preRenderCtx.textBaseline="top",Ba(this._preRenderCtx),v?this.plotArea.ctx=this.ctx:(this.plotArea.canvas=ta(c,e),this.plotArea.canvas.style.position="absolute",this.plotArea.canvas.setAttribute("class","plotAreaCanvas"),this._canvasJSContainer.appendChild(this.plotArea.canvas),
this.plotArea.ctx=this.plotArea.canvas.getContext("2d")),this.overlaidCanvas=ta(c,e),this.overlaidCanvas.style.position="absolute",this.overlaidCanvas.style.webkitTapHighlightColor="transparent",this.overlaidCanvas.getContext&&(this._canvasJSContainer.appendChild(this.overlaidCanvas),this.overlaidCanvasCtx=this.overlaidCanvas.getContext("2d"),this.overlaidCanvasCtx.textBaseline="top",Ba(this.overlaidCanvasCtx)),this._eventManager=new ea(this),this.windowResizeHandler=P(window,"resize",function(){b._updateSize()&&
b.render()},this.allDOMEventHandlers),this._toolBar=document.createElement("div"),this._toolBar.setAttribute("class","canvasjs-chart-toolbar"),this._toolBar.style.cssText="position: absolute; right: 1px; top: 1px;",this._canvasJSContainer.appendChild(this._toolBar),this.bounds={x1:0,y1:0,x2:this.width,y2:this.height},P(this.overlaidCanvas,"click",function(a){b._mouseEventHandler(a)},this.allDOMEventHandlers),P(this.overlaidCanvas,"mousemove",function(a){b._mouseEventHandler(a)},this.allDOMEventHandlers),
P(this.overlaidCanvas,"mouseup",function(a){b._mouseEventHandler(a)},this.allDOMEventHandlers),P(this.overlaidCanvas,"mousedown",function(a){b._mouseEventHandler(a);va(b._dropdownMenu)},this.allDOMEventHandlers),P(this.overlaidCanvas,"mouseout",function(a){b._mouseEventHandler(a)},this.allDOMEventHandlers),P(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerDown":"touchstart",function(a){b._touchEventHandler(a)},this.allDOMEventHandlers),P(this.overlaidCanvas,window.navigator.msPointerEnabled?
"MSPointerMove":"touchmove",function(a){b._touchEventHandler(a)},this.allDOMEventHandlers),P(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerUp":"touchend",function(a){b._touchEventHandler(a)},this.allDOMEventHandlers),P(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerCancel":"touchcancel",function(a){b._touchEventHandler(a)},this.allDOMEventHandlers),this.toolTip=new Z(this,this.options.toolTip),this.data=null,this.axisX=[],this.axisX2=[],this.axisY=[],this.axisY2=
[],this.sessionVariables={axisX:[],axisX2:[],axisY:[],axisY2:[]})}else window.console&&window.console.log('CanvasJS Error: Chart Container with id "'+this._containerId+'" was not found')}function x(a,f){for(var b=[],c,e=0;e<a.length;e++)if(0==e)b.push(a[0]);else{var g,h,l;l=e-1;g=0===l?0:l-1;h=l===a.length-1?l:l+1;c=Math.abs((a[h].x-a[g].x)/(0===a[h].x-a[l].x?0.01:a[h].x-a[l].x))*(f-1)/2+1;var t=(a[h].x-a[g].x)/c;c=(a[h].y-a[g].y)/c;b[b.length]=a[l].x>a[g].x&&0<t||a[l].x<a[g].x&&0>t?{x:a[l].x+t/3,
y:a[l].y+c/3}:{x:a[l].x,y:a[l].y+c/9};l=e;g=0===l?0:l-1;h=l===a.length-1?l:l+1;c=Math.abs((a[h].x-a[g].x)/(0===a[l].x-a[g].x?0.01:a[l].x-a[g].x))*(f-1)/2+1;t=(a[h].x-a[g].x)/c;c=(a[h].y-a[g].y)/c;b[b.length]=a[l].x>a[g].x&&0<t||a[l].x<a[g].x&&0>t?{x:a[l].x-t/3,y:a[l].y-c/3}:{x:a[l].x,y:a[l].y-c/9};b[b.length]=a[e]}return b}function z(a,f,b,c,e,g,h,l,t,k){var r=0;k?(h.color=g,l.color=g):k=1;r=t?Math.abs(e-b):Math.abs(c-f);r=0<h.trimLength?Math.abs(r*h.trimLength/100):Math.abs(r-h.length);t?(b+=r/2,
e-=r/2):(f+=r/2,c-=r/2);var r=1===Math.round(h.thickness)%2?0.5:0,p=1===Math.round(l.thickness)%2?0.5:0;a.save();a.globalAlpha=k;a.strokeStyle=l.color||g;a.lineWidth=l.thickness||2;a.setLineDash&&a.setLineDash(F(l.dashType,l.thickness));a.beginPath();t&&0<l.thickness?(a.moveTo(c-h.thickness/2,Math.round((b+e)/2)-p),a.lineTo(f+h.thickness/2,Math.round((b+e)/2)-p)):0<l.thickness&&(a.moveTo(Math.round((f+c)/2)-p,b+h.thickness/2),a.lineTo(Math.round((f+c)/2)-p,e-h.thickness/2));a.stroke();a.strokeStyle=
h.color||g;a.lineWidth=h.thickness||2;a.setLineDash&&a.setLineDash(F(h.dashType,h.thickness));a.beginPath();t&&0<h.thickness?(a.moveTo(c-r,b),a.lineTo(c-r,e),a.moveTo(f+r,b),a.lineTo(f+r,e)):0<h.thickness&&(a.moveTo(f,b+r),a.lineTo(c,b+r),a.moveTo(f,e-r),a.lineTo(c,e-r));a.stroke();a.restore()}function J(a,f,b,c,e){if(null===a||"undefined"===typeof a)return"undefined"===typeof b?f:b;a=parseFloat(a.toString())*(0<=a.toString().indexOf("%")?f/100:1);"undefined"!==typeof c&&(a=Math.min(c,a),"undefined"!==
typeof e&&(a=Math.max(e,a)));return!isNaN(a)&&a<=f&&0<=a?a:"undefined"===typeof b?f:b}function T(a,f){T.base.constructor.call(this,"Legend","legend",f,null,a);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.ghostCtx=this.chart._eventManager.ghostCtx;this.items=[];this.optionsName="legend";this.height=this.width=0;this.orientation=null;this.dataSeries=[];this.bounds={x1:null,y1:null,x2:null,y2:null};"undefined"===typeof this.options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));
this.lineHeight=Ua(this.fontFamily,this.fontSize,this.fontWeight);this.horizontalSpacing=this.fontSize}function S(a,f,b,c){S.base.constructor.call(this,"DataSeries","data",f,b,a);this.chart=a;this.canvas=a.canvas;this._ctx=a.canvas.ctx;this.index=b;this.noDataPointsInPlotArea=0;this.id=c;this.chart._eventManager.objectMap[c]={id:c,objectType:"dataSeries",dataSeriesIndex:b};a=f.dataPoints?f.dataPoints.length:0;this.dataPointEOs=[];for(f=0;f<a;f++)this.dataPointEOs[f]={};this.dataPointIds=[];this.plotUnit=
[];this.axisY=this.axisX=null;this.optionsName="data";this.isOptionsInArray=!0;null===this.fillOpacity&&(this.type.match(/area/i)?this.fillOpacity=0.7:this.fillOpacity=1);this.axisPlacement=this.getDefaultAxisPlacement();"undefined"===typeof this.options.indexLabelFontSize&&(this.indexLabelFontSize=this.chart.getAutoFontSize(this.indexLabelFontSize))}function C(a,f,b,c,e,g){C.base.constructor.call(this,"Axis",f,b,c,a);this.chart=a;this.canvas=a.canvas;this.ctx=a.ctx;this.intervalStartPosition=this.maxHeight=
this.maxWidth=0;this.labels=[];this.dataSeries=[];this._stripLineLabels=this._ticks=this._labels=null;this.dataInfo={min:Infinity,max:-Infinity,viewPortMin:Infinity,viewPortMax:-Infinity,minDiff:Infinity};this.isOptionsInArray=!0;"axisX"===e?("left"===g||"bottom"===g?(this.optionsName="axisX",y(this.chart.sessionVariables.axisX[c])&&(this.chart.sessionVariables.axisX[c]={}),this.sessionVariables=this.chart.sessionVariables.axisX[c]):(this.optionsName="axisX2",y(this.chart.sessionVariables.axisX2[c])&&
(this.chart.sessionVariables.axisX2[c]={}),this.sessionVariables=this.chart.sessionVariables.axisX2[c]),this.options.interval||(this.intervalType=null)):"left"===g||"bottom"===g?(this.optionsName="axisY",y(this.chart.sessionVariables.axisY[c])&&(this.chart.sessionVariables.axisY[c]={}),this.sessionVariables=this.chart.sessionVariables.axisY[c]):(this.optionsName="axisY2",y(this.chart.sessionVariables.axisY2[c])&&(this.chart.sessionVariables.axisY2[c]={}),this.sessionVariables=this.chart.sessionVariables.axisY2[c]);
"undefined"===typeof this.options.titleFontSize&&(this.titleFontSize=this.chart.getAutoFontSize(this.titleFontSize));"undefined"===typeof this.options.labelFontSize&&(this.labelFontSize=this.chart.getAutoFontSize(this.labelFontSize));this.type=e;"axisX"!==e||b&&"undefined"!==typeof b.gridThickness||(this.gridThickness=0);this._position=g;this.lineCoordinates={x1:null,y1:null,x2:null,y2:null,width:null};this.labelAngle=(this.labelAngle%360+360)%360;90<this.labelAngle&&270>this.labelAngle?this.labelAngle-=
180:270<=this.labelAngle&&360>=this.labelAngle&&(this.labelAngle-=360);this.options.scaleBreaks&&(this.scaleBreaks=new I(this.chart,this.options.scaleBreaks,++this.chart._eventManager.lastObjectId,this));this.stripLines=[];if(this.options.stripLines&&0<this.options.stripLines.length)for(a=0;a<this.options.stripLines.length;a++)this.stripLines.push(new fa(this.chart,this.options.stripLines[a],a,++this.chart._eventManager.lastObjectId,this));this.options.crosshair&&(this.crosshair=new ha(this.chart,
this.options.crosshair,this));this._titleTextBlock=null;this.hasOptionChanged("viewportMinimum")&&null===this.viewportMinimum&&(this.options.viewportMinimum=void 0,this.sessionVariables.viewportMinimum=null);this.hasOptionChanged("viewportMinimum")||isNaN(this.sessionVariables.newViewportMinimum)||null===this.sessionVariables.newViewportMinimum?this.sessionVariables.newViewportMinimum=null:this.viewportMinimum=this.sessionVariables.newViewportMinimum;this.hasOptionChanged("viewportMaximum")&&null===
this.viewportMaximum&&(this.options.viewportMaximum=void 0,this.sessionVariables.viewportMaximum=null);this.hasOptionChanged("viewportMaximum")||isNaN(this.sessionVariables.newViewportMaximum)||null===this.sessionVariables.newViewportMaximum?this.sessionVariables.newViewportMaximum=null:this.viewportMaximum=this.sessionVariables.newViewportMaximum;null!==this.minimum&&null!==this.viewportMinimum&&(this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum));null!==this.maximum&&null!==this.viewportMaximum&&
(this.viewportMaximum=Math.min(this.viewportMaximum,this.maximum));this.trackChanges("viewportMinimum");this.trackChanges("viewportMaximum")}function I(a,f,b,c){I.base.constructor.call(this,"ScaleBreaks","scaleBreaks",f,null,c);this.id=b;this.chart=a;this.ctx=this.chart.ctx;this.axis=c;this.optionsName="scaleBreaks";this.isOptionsInArray=!1;this._appliedBreaks=[];this.customBreaks=[];this.autoBreaks=[];"string"===typeof this.spacing?(this.spacing=parseFloat(this.spacing),this.spacing=isNaN(this.spacing)?
8:(10<this.spacing?10:this.spacing)+"%"):"number"!==typeof this.spacing&&(this.spacing=8);this.autoCalculate&&(this.maxNumberOfAutoBreaks=Math.min(this.maxNumberOfAutoBreaks,5));if(this.options.customBreaks&&0<this.options.customBreaks.length){for(a=0;a<this.options.customBreaks.length;a++)this.customBreaks.push(new ba(this.chart,"customBreaks",this.options.customBreaks[a],a,++this.chart._eventManager.lastObjectId,this)),"number"===typeof this.customBreaks[a].startValue&&("number"===typeof this.customBreaks[a].endValue&&
this.customBreaks[a].endValue!==this.customBreaks[a].startValue)&&this._appliedBreaks.push(this.customBreaks[a]);this._appliedBreaks.sort(function(a,c){return a.startValue-c.startValue});for(a=0;a<this._appliedBreaks.length-1;a++)this._appliedBreaks[a].endValue>=this._appliedBreaks[a+1].startValue&&(this._appliedBreaks[a].endValue=Math.max(this._appliedBreaks[a].endValue,this._appliedBreaks[a+1].endValue),window.console&&window.console.log("CanvasJS Error: Breaks "+a+" and "+(a+1)+" are overlapping."),
this._appliedBreaks.splice(a,2),a--)}}function ba(a,f,b,c,e,g){ba.base.constructor.call(this,"Break",f,b,c,g);this.id=e;this.chart=a;this.ctx=this.chart.ctx;this.scaleBreaks=g;this.optionsName=f;this.isOptionsInArray=!0;this.type=b.type?this.type:g.type;this.fillOpacity=y(b.fillOpacity)?g.fillOpacity:this.fillOpacity;this.lineThickness=y(b.lineThickness)?g.lineThickness:this.lineThickness;this.color=b.color?this.color:g.color;this.lineColor=b.lineColor?this.lineColor:g.lineColor;this.lineDashType=
b.lineDashType?this.lineDashType:g.lineDashType;!y(this.startValue)&&this.startValue.getTime&&(this.startValue=this.startValue.getTime());!y(this.endValue)&&this.endValue.getTime&&(this.endValue=this.endValue.getTime());"number"===typeof this.startValue&&("number"===typeof this.endValue&&this.endValue<this.startValue)&&(a=this.startValue,this.startValue=this.endValue,this.endValue=a);this.spacing="undefined"===typeof b.spacing?g.spacing:b.spacing;"string"===typeof this.options.spacing?(this.spacing=
parseFloat(this.spacing),this.spacing=isNaN(this.spacing)?0:(10<this.spacing?10:this.spacing)+"%"):"number"!==typeof this.options.spacing&&(this.spacing=g.spacing);this.size=g.parent.logarithmic?1:0}function fa(a,f,b,c,e){fa.base.constructor.call(this,"StripLine","stripLines",f,b,e);this.id=c;this.chart=a;this.ctx=this.chart.ctx;this.label=this.label;this.axis=e;this.optionsName="stripLines";this.isOptionsInArray=!0;this._thicknessType="pixel";null!==this.startValue&&null!==this.endValue&&(this.value=
e.logarithmic?Math.sqrt((this.startValue.getTime?this.startValue.getTime():this.startValue)*(this.endValue.getTime?this.endValue.getTime():this.endValue)):((this.startValue.getTime?this.startValue.getTime():this.startValue)+(this.endValue.getTime?this.endValue.getTime():this.endValue))/2,this._thicknessType=null)}function ha(a,f,b){ha.base.constructor.call(this,"Crosshair","crosshair",f,null,b);this.chart=a;this.ctx=this.chart.ctx;this.axis=b;this.optionsName="crosshair";this._thicknessType="pixel"}
function Z(a,f){Z.base.constructor.call(this,"ToolTip","toolTip",f,null,a);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.currentDataPointIndex=this.currentSeriesIndex=-1;this._prevY=this._prevX=NaN;this.containerTransitionDuration=0.1;this.mozContainerTransition=this.getContainerTransition(this.containerTransitionDuration);this.optionsName="toolTip";this._initialize()}function ea(a){this.chart=a;this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=[];this.previousDataPointEventObject=
null;this.ghostCanvas=ta(this.chart.width,this.chart.height);this.ghostCtx=this.ghostCanvas.getContext("2d");this.mouseoveredObjectMaps=[]}function ga(a){this.chart=a;this.ctx=this.chart.plotArea.ctx;this.animations=[];this.animationRequestId=null}na(q,Y);q.prototype.destroy=function(){var a=this.allDOMEventHandlers;this._animator&&this._animator.cancelAllAnimations();this._panTimerId&&clearTimeout(this._panTimerId);for(i=0;i<a.length;i++){var f=a[i][0],b=a[i][1],c=a[i][2],e=a[i][3],e=e||!1;f.removeEventListener?
f.removeEventListener(b,c,e):f.detachEvent&&f.detachEvent("on"+b,c)}this.allDOMEventHandlers=[];for(this.removeAllEventListeners();this._canvasJSContainer&&this._canvasJSContainer.hasChildNodes();)this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);for(;this.container&&this.container.hasChildNodes();)this.container.removeChild(this.container.lastChild);for(;this._dropdownMenu&&this._dropdownMenu.hasChildNodes();)this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);this.overlaidCanvas=
this.canvas=this.container=this._canvasJSContainer=null;this._toolBar=this._dropdownMenu=this._menuButton=this._resetButton=this._zoomButton=this._breaksCanvas=this._preRenderCanvas=this.toolTip.container=null};q.prototype._updateOptions=function(){var a=this;this.updateOption("width");this.updateOption("height");this.updateOption("dataPointWidth");this.updateOption("dataPointMinWidth");this.updateOption("dataPointMaxWidth");this.updateOption("interactivityEnabled");this.updateOption("theme");this.updateOption("colorSet")&&
(this._selectedColorSet="undefined"!==typeof za[this.colorSet]?za[this.colorSet]:za.colorSet1);this.updateOption("backgroundColor");this.backgroundColor||(this.backgroundColor="rgba(0,0,0,0)");this.updateOption("culture");this._cultureInfo=new Ia(this.options.culture);this.updateOption("animationEnabled");this.animationEnabled=this.animationEnabled&&v;this.updateOption("animationDuration");this.updateOption("rangeChanging");this.updateOption("rangeChanged");this.updateOption("exportEnabled");this.updateOption("exportFileName");
this.updateOption("zoomType");if(this.options.zoomEnabled){if(!this._zoomButton){var f=!1;va(this._zoomButton=document.createElement("button"));ua(this,this._zoomButton,"pan");this._toolBar.appendChild(this._zoomButton);this._zoomButton.style.borderRight=this.toolbar.borderThickness+"px solid "+this.toolbar.borderColor;P(this._zoomButton,"touchstart",function(a){f=!0},this.allDOMEventHandlers);P(this._zoomButton,"click",function(){a.zoomEnabled?(a.zoomEnabled=!1,a.panEnabled=!0,ua(a,a._zoomButton,
"zoom")):(a.zoomEnabled=!0,a.panEnabled=!1,ua(a,a._zoomButton,"pan"));a.render()},this.allDOMEventHandlers);P(this._zoomButton,"mouseover",function(){f?f=!1:(oa(a,a._zoomButton,{backgroundColor:a.toolbar.backgroundColorOnHover,color:a.toolbar.fontColorOnHover,transition:"0.4s",WebkitTransition:"0.4s"}),0>=navigator.userAgent.search("MSIE")&&oa(a,a._zoomButton.childNodes[0],{WebkitFilter:"invert(100%)",filter:"invert(100%)"}))},this.allDOMEventHandlers);P(this._zoomButton,"mouseout",function(){f||
(oa(a,a._zoomButton,{backgroundColor:a.toolbar.backgroundColor,color:a.toolbar.fontColor,transition:"0.4s",WebkitTransition:"0.4s"}),0>=navigator.userAgent.search("MSIE")&&oa(a,a._zoomButton.childNodes[0],{WebkitFilter:"invert(0%)",filter:"invert(0%)"}))},this.allDOMEventHandlers)}this._resetButton||(f=!1,va(this._resetButton=document.createElement("button")),ua(this,this._resetButton,"reset"),this._resetButton.style.borderRight=(this.exportEnabled?this.toolbar.borderThickness:0)+"px solid "+this.toolbar.borderColor,
this._toolBar.appendChild(this._resetButton),P(this._resetButton,"touchstart",function(a){f=!0},this.allDOMEventHandlers),P(this._resetButton,"click",function(){a.toolTip.hide();a.zoomEnabled||a.panEnabled?(a.zoomEnabled=!0,a.panEnabled=!1,ua(a,a._zoomButton,"pan"),a._defaultCursor="default",a.overlaidCanvas.style.cursor=a._defaultCursor):(a.zoomEnabled=!1,a.panEnabled=!1);if(a.sessionVariables.axisX)for(var c=0;c<a.sessionVariables.axisX.length;c++)a.sessionVariables.axisX[c].newViewportMinimum=
null,a.sessionVariables.axisX[c].newViewportMaximum=null;if(a.sessionVariables.axisX2)for(c=0;c<a.sessionVariables.axisX2.length;c++)a.sessionVariables.axisX2[c].newViewportMinimum=null,a.sessionVariables.axisX2[c].newViewportMaximum=null;if(a.sessionVariables.axisY)for(c=0;c<a.sessionVariables.axisY.length;c++)a.sessionVariables.axisY[c].newViewportMinimum=null,a.sessionVariables.axisY[c].newViewportMaximum=null;if(a.sessionVariables.axisY2)for(c=0;c<a.sessionVariables.axisY2.length;c++)a.sessionVariables.axisY2[c].newViewportMinimum=
null,a.sessionVariables.axisY2[c].newViewportMaximum=null;a.resetOverlayedCanvas();va(a._zoomButton,a._resetButton);a._dispatchRangeEvent("rangeChanging","reset");a.render();a._dispatchRangeEvent("rangeChanged","reset")},this.allDOMEventHandlers),P(this._resetButton,"mouseover",function(){f||(oa(a,a._resetButton,{backgroundColor:a.toolbar.backgroundColorOnHover,color:a.toolbar.hoverFfontColorOnHoverontColor,transition:"0.4s",WebkitTransition:"0.4s"}),0>=navigator.userAgent.search("MSIE")&&oa(a,a._resetButton.childNodes[0],
{WebkitFilter:"invert(100%)",filter:"invert(100%)"}))},this.allDOMEventHandlers),P(this._resetButton,"mouseout",function(){f||(oa(a,a._resetButton,{backgroundColor:a.toolbar.backgroundColor,color:a.toolbar.fontColor,transition:"0.4s",WebkitTransition:"0.4s"}),0>=navigator.userAgent.search("MSIE")&&oa(a,a._resetButton.childNodes[0],{WebkitFilter:"invert(0%)",filter:"invert(0%)"}))},this.allDOMEventHandlers),this.overlaidCanvas.style.cursor=a._defaultCursor);this.zoomEnabled||this.panEnabled||(this._zoomButton?
(a._zoomButton.getAttribute("state")===a._cultureInfo.zoomText?(this.panEnabled=!0,this.zoomEnabled=!1):(this.zoomEnabled=!0,this.panEnabled=!1),Ma(a._zoomButton,a._resetButton)):(this.zoomEnabled=!0,this.panEnabled=!1))}else this.panEnabled=this.zoomEnabled=!1;this._menuButton?this.exportEnabled?Ma(this._menuButton):va(this._menuButton):this.exportEnabled&&v&&(f=!1,this._menuButton=document.createElement("button"),ua(this,this._menuButton,"menu"),this._toolBar.appendChild(this._menuButton),P(this._menuButton,
"touchstart",function(a){f=!0},this.allDOMEventHandlers),P(this._menuButton,"click",function(){"none"!==a._dropdownMenu.style.display||a._dropDownCloseTime&&500>=(new Date).getTime()-a._dropDownCloseTime.getTime()||(a._dropdownMenu.style.display="block",a._menuButton.blur(),a._dropdownMenu.focus())},this.allDOMEventHandlers,!0),P(this._menuButton,"mouseover",function(){f||(oa(a,a._menuButton,{backgroundColor:a.toolbar.backgroundColorOnHover,color:a.toolbar.fontColorOnHover}),0>=navigator.userAgent.search("MSIE")&&
oa(a,a._menuButton.childNodes[0],{WebkitFilter:"invert(100%)",filter:"invert(100%)"}))},this.allDOMEventHandlers,!0),P(this._menuButton,"mouseout",function(){f||(oa(a,a._menuButton,{backgroundColor:a.toolbar.backgroundColor,color:a.toolbar.fontColor}),0>=navigator.userAgent.search("MSIE")&&oa(a,a._menuButton.childNodes[0],{WebkitFilter:"invert(0%)",filter:"invert(0%)"}))},this.allDOMEventHandlers,!0));if(!this._dropdownMenu&&this.exportEnabled&&v){f=!1;this._dropdownMenu=document.createElement("div");
this._dropdownMenu.setAttribute("tabindex",-1);var b=-1!==this.theme.indexOf("dark")?"black":"#888888";this._dropdownMenu.style.cssText="position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 0px;top: 25px;min-width: 120px;outline: 0;font-size: 14px; font-family: Arial, Helvetica, sans-serif;padding: 5px 0px 5px 0px;text-align: left;line-height: 10px;background-color:"+this.toolbar.backgroundColor+";box-shadow: 2px 2px 10px "+
b;a._dropdownMenu.style.display="none";this._toolBar.appendChild(this._dropdownMenu);P(this._dropdownMenu,"blur",function(){va(a._dropdownMenu);a._dropDownCloseTime=new Date},this.allDOMEventHandlers,!0);b=document.createElement("div");b.style.cssText="padding: 12px 8px 12px 8px";b.innerHTML=this._cultureInfo.printText;b.style.backgroundColor=this.toolbar.backgroundColor;b.style.color=this.toolbar.fontColor;this._dropdownMenu.appendChild(b);P(b,"touchstart",function(a){f=!0},this.allDOMEventHandlers);
P(b,"mouseover",function(){f||(this.style.backgroundColor=a.toolbar.backgroundColorOnHover,this.style.color=a.toolbar.fontColorOnHover)},this.allDOMEventHandlers,!0);P(b,"mouseout",function(){f||(this.style.backgroundColor=a.toolbar.backgroundColor,this.style.color=a.toolbar.fontColor)},this.allDOMEventHandlers,!0);P(b,"click",function(){a.print();va(a._dropdownMenu)},this.allDOMEventHandlers,!0);b=document.createElement("div");b.style.cssText="padding: 12px 8px 12px 8px";b.innerHTML=this._cultureInfo.saveJPGText;
b.style.backgroundColor=this.toolbar.backgroundColor;b.style.color=this.toolbar.fontColor;this._dropdownMenu.appendChild(b);P(b,"touchstart",function(a){f=!0},this.allDOMEventHandlers);P(b,"mouseover",function(){f||(this.style.backgroundColor=a.toolbar.backgroundColorOnHover,this.style.color=a.toolbar.fontColorOnHover)},this.allDOMEventHandlers,!0);P(b,"mouseout",function(){f||(this.style.backgroundColor=a.toolbar.backgroundColor,this.style.color=a.toolbar.fontColor)},this.allDOMEventHandlers,!0);
P(b,"click",function(){s(a.canvas,"jpeg",a.exportFileName);va(a._dropdownMenu)},this.allDOMEventHandlers,!0);b=document.createElement("div");b.style.cssText="padding: 12px 8px 12px 8px";b.innerHTML=this._cultureInfo.savePNGText;b.style.backgroundColor=this.toolbar.backgroundColor;b.style.color=this.toolbar.fontColor;this._dropdownMenu.appendChild(b);P(b,"touchstart",function(a){f=!0},this.allDOMEventHandlers);P(b,"mouseover",function(){f||(this.style.backgroundColor=a.toolbar.backgroundColorOnHover,
this.style.color=a.toolbar.fontColorOnHover)},this.allDOMEventHandlers,!0);P(b,"mouseout",function(){f||(this.style.backgroundColor=a.toolbar.backgroundColor,this.style.color=a.toolbar.fontColor)},this.allDOMEventHandlers,!0);P(b,"click",function(){s(a.canvas,"png",a.exportFileName);va(a._dropdownMenu)},this.allDOMEventHandlers,!0)}"none"!==this._toolBar.style.display&&this._zoomButton&&(this.panEnabled?ua(a,a._zoomButton,"zoom"):ua(a,a._zoomButton,"pan"),a._resetButton.getAttribute("state")!==a._cultureInfo.resetText&&
ua(a,a._resetButton,"reset"));this.options.toolTip&&this.toolTip.options!==this.options.toolTip&&(this.toolTip.options=this.options.toolTip);for(var c in this.toolTip.options)this.toolTip.options.hasOwnProperty(c)&&this.toolTip.updateOption(c)};q.prototype._updateSize=function(){var a=0,f=0;this.options.width?a=this.width:this.width=a=0<this.container.clientWidth?this.container.clientWidth:this.width;this.options.height?f=this.height:this.height=f=0<this.container.clientHeight?this.container.clientHeight:
this.height;return this.canvas.width!==a*ia||this.canvas.height!==f*ia?(Ga(this.canvas,a,f),Ga(this._preRenderCanvas,a,f),Ga(this.overlaidCanvas,a,f),Ga(this._eventManager.ghostCanvas,a,f),this.bounds={x1:0,y1:0,x2:this.width,y2:this.height},!0):!1};q.prototype._initialize=function(){this.toolbar=new Ra(this,this.options.toolbar);this._animator?this._animator.cancelAllAnimations():this._animator=new ga(this);this.removeAllEventListeners();this.disableToolTip=!1;this._axes=[];this.funnelPyramidClickHandler=
this.pieDoughnutClickHandler=null;this._updateOptions();this.animatedRender=v&&this.animationEnabled&&0===this.renderCount;this._updateSize();this.clearCanvas();this.ctx.beginPath();this.axisX=[];this.axisX2=[];this.axisY=[];this.axisY2=[];this._indexLabels=[];this._dataInRenderedOrder=[];this._events=[];this._eventManager&&this._eventManager.reset();this.plotInfo={axisPlacement:null,plotTypes:[]};this.layoutManager=new Da(0,0,this.width,this.height,2);this.plotArea.layoutManager&&this.plotArea.layoutManager.reset();
this.data=[];var a=0,f=null;if(this.options.data){for(var b=0;b<this.options.data.length;b++)if(a++,!this.options.data[b].type||0<=q._supportedChartTypes.indexOf(this.options.data[b].type)){var c=new S(this,this.options.data[b],a-1,++this._eventManager.lastObjectId);"error"===c.type&&(c.linkedDataSeriesIndex=y(this.options.data[b].linkedDataSeriesIndex)?b-1:this.options.data[b].linkedDataSeriesIndex,0>c.linkedDataSeriesIndex||c.linkedDataSeriesIndex>=this.options.data.length||"number"!==typeof c.linkedDataSeriesIndex||
"error"===this.options.data[c.linkedDataSeriesIndex].type)&&(c.linkedDataSeriesIndex=null);null===c.name&&(c.name="DataSeries "+a);null===c.color?1<this.options.data.length?(c._colorSet=[this._selectedColorSet[c.index%this._selectedColorSet.length]],c.color=this._selectedColorSet[c.index%this._selectedColorSet.length]):c._colorSet="line"===c.type||"stepLine"===c.type||"spline"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"stackedArea"===c.type||"stackedArea100"===c.type||
"rangeArea"===c.type||"rangeSplineArea"===c.type||"candlestick"===c.type||"ohlc"===c.type||"waterfall"===c.type||"boxAndWhisker"===c.type?[this._selectedColorSet[0]]:this._selectedColorSet:c._colorSet=[c.color];null===c.markerSize&&(("line"===c.type||"stepLine"===c.type||"spline"===c.type||0<=c.type.toLowerCase().indexOf("area"))&&c.dataPoints&&c.dataPoints.length<this.width/16||"scatter"===c.type)&&(c.markerSize=8);"bubble"!==c.type&&"scatter"!==c.type||!c.dataPoints||(c.dataPoints.some?c.dataPoints.some(function(a){return a.x})&&
c.dataPoints.sort(m):c.dataPoints.sort(m));this.data.push(c);var e=c.axisPlacement,f=f||e,g;"normal"===e?"xySwapped"===this.plotInfo.axisPlacement?g='You cannot combine "'+c.type+'" with bar chart':"none"===this.plotInfo.axisPlacement?g='You cannot combine "'+c.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="normal"):"xySwapped"===e?"normal"===this.plotInfo.axisPlacement?g='You cannot combine "'+c.type+'" with line, area, column or pie chart':"none"===this.plotInfo.axisPlacement?
g='You cannot combine "'+c.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="xySwapped"):"none"===e?"normal"===this.plotInfo.axisPlacement?g='You cannot combine "'+c.type+'" with line, area, column or bar chart':"xySwapped"===this.plotInfo.axisPlacement?g='You cannot combine "'+c.type+'" with bar chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="none"):null===e&&"none"===this.plotInfo.axisPlacement&&(g='You cannot combine "'+c.type+'" with pie chart');
if(g&&window.console){window.console.log(g);return}}for(b=0;b<this.data.length;b++){if("none"==f&&"error"===this.data[b].type&&window.console){window.console.log('You cannot combine "'+c.type+'" with error chart');return}"error"===this.data[b].type&&(this.data[b].axisPlacement=this.plotInfo.axisPlacement=f||"normal",this.data[b]._linkedSeries=null===this.data[b].linkedDataSeriesIndex?null:this.data[this.data[b].linkedDataSeriesIndex])}}this._objectsInitialized=!0};q._supportedChartTypes=Ca("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));
q.prototype.render=function(a){a&&(this.options=a);this._initialize();var f=[];for(a=0;a<this.data.length;a++)if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement){if(!this.data[a].axisYType||"primary"===this.data[a].axisYType)if(this.options.axisY&&0<this.options.axisY.length){if(!this.axisY.length)for(var b=0;b<this.options.axisY.length;b++)"normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY[b]=new C(this,"axisY",this.options.axisY[b],b,"axisY","left")):
"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY[b]=new C(this,"axisY",this.options.axisY[b],b,"axisY","bottom"));this.data[a].axisY=this.axisY[0<=this.data[a].axisYIndex&&this.data[a].axisYIndex<this.axisY.length?this.data[a].axisYIndex:0];this.axisY[0<=this.data[a].axisYIndex&&this.data[a].axisYIndex<this.axisY.length?this.data[a].axisYIndex:0].dataSeries.push(this.data[a])}else this.axisY.length||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY[0]=new C(this,
"axisY",this.options.axisY,0,"axisY","left")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY[0]=new C(this,"axisY",this.options.axisY,0,"axisY","bottom"))),this.data[a].axisY=this.axisY[0],this.axisY[0].dataSeries.push(this.data[a]);if("secondary"===this.data[a].axisYType)if(this.options.axisY2&&0<this.options.axisY2.length){if(!this.axisY2.length)for(b=0;b<this.options.axisY2.length;b++)"normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY2[b]=new C(this,"axisY2",
this.options.axisY2[b],b,"axisY","right")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY2[b]=new C(this,"axisY2",this.options.axisY2[b],b,"axisY","top"));this.data[a].axisY=this.axisY2[0<=this.data[a].axisYIndex&&this.data[a].axisYIndex<this.axisY2.length?this.data[a].axisYIndex:0];this.axisY2[0<=this.data[a].axisYIndex&&this.data[a].axisYIndex<this.axisY2.length?this.data[a].axisYIndex:0].dataSeries.push(this.data[a])}else this.axisY2.length||("normal"===this.plotInfo.axisPlacement?
this._axes.push(this.axisY2[0]=new C(this,"axisY2",this.options.axisY2,0,"axisY","right")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY2[0]=new C(this,"axisY2",this.options.axisY2,0,"axisY","top"))),this.data[a].axisY=this.axisY2[0],this.axisY2[0].dataSeries.push(this.data[a]);if(!this.data[a].axisXType||"primary"===this.data[a].axisXType)if(this.options.axisX&&0<this.options.axisX.length){if(!this.axisX.length)for(b=0;b<this.options.axisX.length;b++)"normal"===this.plotInfo.axisPlacement?
this._axes.push(this.axisX[b]=new C(this,"axisX",this.options.axisX[b],b,"axisX","bottom")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisX[b]=new C(this,"axisX",this.options.axisX[b],b,"axisX","left"));this.data[a].axisX=this.axisX[0<=this.data[a].axisXIndex&&this.data[a].axisXIndex<this.axisX.length?this.data[a].axisXIndex:0];this.axisX[0<=this.data[a].axisXIndex&&this.data[a].axisXIndex<this.axisX.length?this.data[a].axisXIndex:0].dataSeries.push(this.data[a])}else this.axisX.length||
("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisX[0]=new C(this,"axisX",this.options.axisX,0,"axisX","bottom")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisX[0]=new C(this,"axisX",this.options.axisX,0,"axisX","left"))),this.data[a].axisX=this.axisX[0],this.axisX[0].dataSeries.push(this.data[a]);if("secondary"===this.data[a].axisXType)if(this.options.axisX2&&0<this.options.axisX2.length){if(!this.axisX2.length)for(b=0;b<this.options.axisX2.length;b++)"normal"===
this.plotInfo.axisPlacement?this._axes.push(this.axisX2[b]=new C(this,"axisX2",this.options.axisX2[b],b,"axisX","top")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisX2[b]=new C(this,"axisX2",this.options.axisX2[b],b,"axisX","right"));this.data[a].axisX=this.axisX2[0<=this.data[a].axisXIndex&&this.data[a].axisXIndex<this.axisX2.length?this.data[a].axisXIndex:0];this.axisX2[0<=this.data[a].axisXIndex&&this.data[a].axisXIndex<this.axisX2.length?this.data[a].axisXIndex:0].dataSeries.push(this.data[a])}else this.axisX2.length||
("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisX2[0]=new C(this,"axisX2",this.options.axisX2,0,"axisX","top")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisX2[0]=new C(this,"axisX2",this.options.axisX2,0,"axisX","right"))),this.data[a].axisX=this.axisX2[0],this.axisX2[0].dataSeries.push(this.data[a])}if(this.axisY){for(b=1;b<this.axisY.length;b++)"undefined"===typeof this.axisY[b].options.gridThickness&&(this.axisY[b].gridThickness=0);for(b=0;b<this.axisY.length-
1;b++)"undefined"===typeof this.axisY[b].options.margin&&(this.axisY[b].margin=10)}if(this.axisY2){for(b=1;b<this.axisY2.length;b++)"undefined"===typeof this.axisY2[b].options.gridThickness&&(this.axisY2[b].gridThickness=0);for(b=0;b<this.axisY2.length-1;b++)"undefined"===typeof this.axisY2[b].options.margin&&(this.axisY2[b].margin=10)}this.axisY&&0<this.axisY.length&&(this.axisY2&&0<this.axisY2.length)&&(0<this.axisY[0].gridThickness&&"undefined"===typeof this.axisY2[0].options.gridThickness?this.axisY2[0].gridThickness=
0:0<this.axisY2[0].gridThickness&&"undefined"===typeof this.axisY[0].options.gridThickness&&(this.axisY[0].gridThickness=0));if(this.axisX)for(b=0;b<this.axisX.length;b++)"undefined"===typeof this.axisX[b].options.gridThickness&&(this.axisX[b].gridThickness=0);if(this.axisX2)for(b=0;b<this.axisX2.length;b++)"undefined"===typeof this.axisX2[b].options.gridThickness&&(this.axisX2[b].gridThickness=0);this.axisX&&0<this.axisX.length&&(this.axisX2&&0<this.axisX2.length)&&(0<this.axisX[0].gridThickness&&
"undefined"===typeof this.axisX2[0].options.gridThickness?this.axisX2[0].gridThickness=0:0<this.axisX2[0].gridThickness&&"undefined"===typeof this.axisX[0].options.gridThickness&&(this.axisX[0].gridThickness=0));b=!1;if(0<this._axes.length&&(this.zoomEnabled||this.panEnabled))for(a=0;a<this._axes.length;a++)if(null!==this._axes[a].viewportMinimum||null!==this._axes[a].viewportMaximum){b=!0;break}b?(Ma(this._zoomButton,this._resetButton),this._toolBar.style.border=this.toolbar.borderThickness+"px solid "+
this.toolbar.borderColor,this._zoomButton.style.borderRight=this.toolbar.borderThickness+"px solid "+this.toolbar.borderColor,this._resetButton.style.borderRight=(this.exportEnabled?this.toolbar.borderThickness:0)+"px solid "+this.toolbar.borderColor):(va(this._zoomButton,this._resetButton),this._toolBar.style.border=this.toolbar.borderThickness+"px solid transparent",this.options.zoomEnabled&&(this.zoomEnabled=!0,this.panEnabled=!1));bb(this);this._processData();this.options.title&&(this.title=new Ha(this,
this.options.title),this.title.dockInsidePlotArea?f.push(this.title):this.title.render());if(this.options.subtitles)for(this.subtitles=[],a=0;a<this.options.subtitles.length;a++)b=new Na(this,this.options.subtitles[a],a),this.subtitles.push(b),b.dockInsidePlotArea?f.push(b):b.render();this.legend=new T(this,this.options.legend);for(a=0;a<this.data.length;a++)(this.data[a].showInLegend||"pie"===this.data[a].type||"doughnut"===this.data[a].type||"funnel"===this.data[a].type||"pyramid"===this.data[a].type)&&
this.legend.dataSeries.push(this.data[a]);this.legend.dockInsidePlotArea?f.push(this.legend):this.legend.render();for(a=0;a<this._axes.length;a++)if(this._axes[a].scaleBreaks&&this._axes[a].scaleBreaks._appliedBreaks.length){v?(this._breaksCanvas=ta(this.width,this.height,!0),this._breaksCanvasCtx=this._breaksCanvas.getContext("2d")):(this._breaksCanvas=this.canvas,this._breaksCanvasCtx=this.ctx);break}this._preRenderCanvas=ta(this.width,this.height);this._preRenderCtx=this._preRenderCanvas.getContext("2d");
if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)C.setLayoutAndRender(this.axisX,this.axisX2,this.axisY,this.axisY2,this.plotInfo.axisPlacement,this.layoutManager.getFreeSpace());else if("none"===this.plotInfo.axisPlacement)this.preparePlotArea();else return;for(a=0;a<f.length;a++)f[a].render();var c=[];if(this.animatedRender){var e=ta(this.width,this.height);e.getContext("2d").drawImage(this.canvas,0,0,this.width,this.height)}cb(this);var f=this.ctx.miterLimit,
g;this.ctx.miterLimit=3;v&&this._breaksCanvas&&(this._preRenderCtx.drawImage(this.canvas,0,0,this.width,this.height),this._preRenderCtx.drawImage(this._breaksCanvas,0,0,this.width,this.height),this._breaksCanvasCtx.globalCompositeOperation="source-atop",this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),this._preRenderCtx.clearRect(0,0,this.width,this.height));for(a=0;a<this.plotInfo.plotTypes.length;a++)for(var h=this.plotInfo.plotTypes[a],l=0;l<h.plotUnits.length;l++){var t=
h.plotUnits[l],k=null;t.targetCanvas=null;this.animatedRender&&(t.targetCanvas=ta(this.width,this.height),t.targetCanvasCtx=t.targetCanvas.getContext("2d"),g=t.targetCanvasCtx.miterLimit,t.targetCanvasCtx.miterLimit=3);"line"===t.type?k=this.renderLine(t):"stepLine"===t.type?k=this.renderStepLine(t):"spline"===t.type?k=this.renderSpline(t):"column"===t.type?k=this.renderColumn(t):"bar"===t.type?k=this.renderBar(t):"area"===t.type?k=this.renderArea(t):"stepArea"===t.type?k=this.renderStepArea(t):"splineArea"===
t.type?k=this.renderSplineArea(t):"stackedColumn"===t.type?k=this.renderStackedColumn(t):"stackedColumn100"===t.type?k=this.renderStackedColumn100(t):"stackedBar"===t.type?k=this.renderStackedBar(t):"stackedBar100"===t.type?k=this.renderStackedBar100(t):"stackedArea"===t.type?k=this.renderStackedArea(t):"stackedArea100"===t.type?k=this.renderStackedArea100(t):"bubble"===t.type?k=k=this.renderBubble(t):"scatter"===t.type?k=this.renderScatter(t):"pie"===t.type?this.renderPie(t):"doughnut"===t.type?
this.renderPie(t):"funnel"===t.type?k=this.renderFunnel(t):"pyramid"===t.type?k=this.renderFunnel(t):"candlestick"===t.type?k=this.renderCandlestick(t):"ohlc"===t.type?k=this.renderCandlestick(t):"rangeColumn"===t.type?k=this.renderRangeColumn(t):"error"===t.type?k=this.renderError(t):"rangeBar"===t.type?k=this.renderRangeBar(t):"rangeArea"===t.type?k=this.renderRangeArea(t):"rangeSplineArea"===t.type?k=this.renderRangeSplineArea(t):"waterfall"===t.type?k=this.renderWaterfall(t):"boxAndWhisker"===
t.type&&(k=this.renderBoxAndWhisker(t));for(b=0;b<t.dataSeriesIndexes.length;b++)this._dataInRenderedOrder.push(this.data[t.dataSeriesIndexes[b]]);this.animatedRender&&(t.targetCanvasCtx.miterLimit=g,k&&c.push(k))}this.ctx.miterLimit=f;this.animatedRender&&this._breaksCanvasCtx&&c.push({source:this._breaksCanvasCtx,dest:this.plotArea.ctx,animationCallback:O.fadeInAnimation,easingFunction:O.easing.easeInQuad,animationBase:0,startTimePercent:0.7});this.animatedRender&&0<this._indexLabels.length&&(g=
ta(this.width,this.height).getContext("2d"),c.push(this.renderIndexLabels(g)));var r=this;if(0<c.length)r.disableToolTip=!0,r._animator.animate(200,r.animationDuration,function(a){r.ctx.clearRect(0,0,r.width,r.height);r.ctx.drawImage(e,0,0,Math.floor(r.width*ia),Math.floor(r.height*ia),0,0,r.width,r.height);for(var b=0;b<c.length;b++)k=c[b],1>a&&"undefined"!==typeof k.startTimePercent?a>=k.startTimePercent&&k.animationCallback(k.easingFunction(a-k.startTimePercent,0,1,1-k.startTimePercent),k):k.animationCallback(k.easingFunction(a,
0,1,1),k);r.dispatchEvent("dataAnimationIterationEnd",{chart:r})},function(){c=[];for(var a=0;a<r.plotInfo.plotTypes.length;a++)for(var b=r.plotInfo.plotTypes[a],d=0;d<b.plotUnits.length;d++)b.plotUnits[d].targetCanvas=null;e=null;r.disableToolTip=!1});else{}this.attachPlotAreaEventHandlers();
this.zoomEnabled||(this.panEnabled||!this._zoomButton||"none"===this._zoomButton.style.display)||va(this._zoomButton,this._resetButton);this.toolTip._updateToolTip();this.renderCount++;this._breaksCanvas&&(delete this._breaksCanvas,delete this._breaksCanvasCtx);for(b=0;b<this._axes.length;b++)this._axes[b].maskCanvas&&(delete this._axes[b].maskCanvas,delete this._axes[b].maskCtx)};q.prototype.attachPlotAreaEventHandlers=function(){this.attachEvent({context:this,chart:this,mousedown:this._plotAreaMouseDown,
mouseup:this._plotAreaMouseUp,mousemove:this._plotAreaMouseMove,cursor:this.panEnabled?"move":"default",capture:!0,bounds:this.plotArea})};q.prototype.categoriseDataSeries=function(){for(var a="",f=0;f<this.data.length;f++)if(a=this.data[f],a.dataPoints&&(0!==a.dataPoints.length&&a.visible)&&0<=q._supportedChartTypes.indexOf(a.type)){for(var b=null,c=!1,e=null,g=!1,h=0;h<this.plotInfo.plotTypes.length;h++)if(this.plotInfo.plotTypes[h].type===a.type){c=!0;b=this.plotInfo.plotTypes[h];break}c||(b={type:a.type,
totalDataSeries:0,plotUnits:[]},this.plotInfo.plotTypes.push(b));for(h=0;h<b.plotUnits.length;h++)if(b.plotUnits[h].axisYType===a.axisYType&&b.plotUnits[h].axisXType===a.axisXType&&b.plotUnits[h].axisYIndex===a.axisYIndex&&b.plotUnits[h].axisXIndex===a.axisXIndex){g=!0;e=b.plotUnits[h];break}g||(e={type:a.type,previousDataSeriesCount:0,index:b.plotUnits.length,plotType:b,axisXType:a.axisXType,axisYType:a.axisYType,axisYIndex:a.axisYIndex,axisXIndex:a.axisXIndex,axisY:"primary"===a.axisYType?this.axisY[0<=
a.axisYIndex&&a.axisYIndex<this.axisY.length?a.axisYIndex:0]:this.axisY2[0<=a.axisYIndex&&a.axisYIndex<this.axisY2.length?a.axisYIndex:0],axisX:"primary"===a.axisXType?this.axisX[0<=a.axisXIndex&&a.axisXIndex<this.axisX.length?a.axisXIndex:0]:this.axisX2[0<=a.axisXIndex&&a.axisXIndex<this.axisX2.length?a.axisXIndex:0],dataSeriesIndexes:[],yTotals:[]},b.plotUnits.push(e));b.totalDataSeries++;e.dataSeriesIndexes.push(f);a.plotUnit=e}for(f=0;f<this.plotInfo.plotTypes.length;f++)for(b=this.plotInfo.plotTypes[f],
h=a=0;h<b.plotUnits.length;h++)b.plotUnits[h].previousDataSeriesCount=a,a+=b.plotUnits[h].dataSeriesIndexes.length};q.prototype.assignIdToDataPoints=function(){for(var a=0;a<this.data.length;a++){var f=this.data[a];if(f.dataPoints)for(var b=f.dataPoints.length,c=0;c<b;c++)f.dataPointIds[c]=++this._eventManager.lastObjectId}};q.prototype._processData=function(){this.assignIdToDataPoints();this.categoriseDataSeries();for(var a=0;a<this.plotInfo.plotTypes.length;a++)for(var f=this.plotInfo.plotTypes[a],
b=0;b<f.plotUnits.length;b++){var c=f.plotUnits[b];"line"===c.type||"stepLine"===c.type||"spline"===c.type||"column"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"bar"===c.type||"bubble"===c.type||"scatter"===c.type?this._processMultiseriesPlotUnit(c):"stackedColumn"===c.type||"stackedBar"===c.type||"stackedArea"===c.type?this._processStackedPlotUnit(c):"stackedColumn100"===c.type||"stackedBar100"===c.type||"stackedArea100"===c.type?this._processStacked100PlotUnit(c):"candlestick"===
c.type||"ohlc"===c.type||"rangeColumn"===c.type||"rangeBar"===c.type||"rangeArea"===c.type||"rangeSplineArea"===c.type||"error"===c.type||"boxAndWhisker"===c.type?this._processMultiYPlotUnit(c):"waterfall"===c.type&&this._processSpecificPlotUnit(c)}this.calculateAutoBreaks()};q.prototype._processMultiseriesPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var f=a.axisY.dataInfo,b=a.axisX.dataInfo,c,e,g=!1,h=0;h<a.dataSeriesIndexes.length;h++){var l=this.data[a.dataSeriesIndexes[h]],
t=0,k=!1,r=!1,p;if("normal"===l.axisPlacement||"xySwapped"===l.axisPlacement)var n=a.axisX.sessionVariables.newViewportMinimum?a.axisX.sessionVariables.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:a.axisX.logarithmic?0:-Infinity,d=a.axisX.sessionVariables.newViewportMaximum?a.axisX.sessionVariables.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?
this.options.axisX.viewportMaximum:this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;if(l.dataPoints[t].x&&l.dataPoints[t].x.getTime||"dateTime"===l.xValueType)g=!0;for(t=0;t<l.dataPoints.length;t++){"undefined"===typeof l.dataPoints[t].x&&(l.dataPoints[t].x=t+(a.axisX.logarithmic?1:0));l.dataPoints[t].x.getTime?(g=!0,c=l.dataPoints[t].x.getTime()):c=l.dataPoints[t].x;e=l.dataPoints[t].y;c<b.min&&(b.min=c);c>b.max&&(b.max=c);e<f.min&&"number"===typeof e&&(f.min=e);
e>f.max&&"number"===typeof e&&(f.max=e);if(0<t){if(a.axisX.logarithmic){var w=c/l.dataPoints[t-1].x;1>w&&(w=1/w);b.minDiff>w&&1!==w&&(b.minDiff=w)}else w=c-l.dataPoints[t-1].x,0>w&&(w*=-1),b.minDiff>w&&0!==w&&(b.minDiff=w);null!==e&&null!==l.dataPoints[t-1].y&&(a.axisY.logarithmic?(w=e/l.dataPoints[t-1].y,1>w&&(w=1/w),f.minDiff>w&&1!==w&&(f.minDiff=w)):(w=e-l.dataPoints[t-1].y,0>w&&(w*=-1),f.minDiff>w&&0!==w&&(f.minDiff=w)))}if(c<n&&!k)null!==e&&(p=c);else{if(!k&&(k=!0,0<t)){t-=2;continue}if(c>d&&
!r)r=!0;else if(c>d&&r)continue;l.dataPoints[t].label&&(a.axisX.labels[c]=l.dataPoints[t].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);null===e?b.viewPortMin===c&&p<c&&(b.viewPortMin=p):(e<f.viewPortMin&&"number"===typeof e&&(f.viewPortMin=e),e>f.viewPortMax&&"number"===typeof e&&(f.viewPortMax=e))}}l.axisX.valueType=l.xValueType=g?"dateTime":"number"}};q.prototype._processStackedPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var f=
a.axisY.dataInfo,b=a.axisX.dataInfo,c,e,g=!1,h=[],l=[],t=Infinity,k=-Infinity,r=0;r<a.dataSeriesIndexes.length;r++){var p=this.data[a.dataSeriesIndexes[r]],n=0,d=!1,w=!1,ya;if("normal"===p.axisPlacement||"xySwapped"===p.axisPlacement)var D=a.axisX.sessionVariables.newViewportMinimum?a.axisX.sessionVariables.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:-Infinity,
u=a.axisX.sessionVariables.newViewportMaximum?a.axisX.sessionVariables.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?this.options.axisX.viewportMaximum:this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;if(p.dataPoints[n].x&&p.dataPoints[n].x.getTime||"dateTime"===p.xValueType)g=!0;for(n=0;n<p.dataPoints.length;n++){"undefined"===typeof p.dataPoints[n].x&&(p.dataPoints[n].x=n+(a.axisX.logarithmic?1:0));p.dataPoints[n].x.getTime?(g=!0,c=p.dataPoints[n].x.getTime()):
c=p.dataPoints[n].x;e=y(p.dataPoints[n].y)?0:p.dataPoints[n].y;c<b.min&&(b.min=c);c>b.max&&(b.max=c);if(0<n){if(a.axisX.logarithmic){var m=c/p.dataPoints[n-1].x;1>m&&(m=1/m);b.minDiff>m&&1!==m&&(b.minDiff=m)}else m=c-p.dataPoints[n-1].x,0>m&&(m*=-1),b.minDiff>m&&0!==m&&(b.minDiff=m);null!==e&&null!==p.dataPoints[n-1].y&&(a.axisY.logarithmic?0<e&&(m=e/p.dataPoints[n-1].y,1>m&&(m=1/m),f.minDiff>m&&1!==m&&(f.minDiff=m)):(m=e-p.dataPoints[n-1].y,0>m&&(m*=-1),f.minDiff>m&&0!==m&&(f.minDiff=m)))}if(c<D&&
!d)null!==p.dataPoints[n].y&&(ya=c);else{if(!d&&(d=!0,0<n)){n-=2;continue}if(c>u&&!w)w=!0;else if(c>u&&w)continue;p.dataPoints[n].label&&(a.axisX.labels[c]=p.dataPoints[n].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);null===p.dataPoints[n].y?b.viewPortMin===c&&ya<c&&(b.viewPortMin=ya):(a.yTotals[c]=(a.yTotals[c]?a.yTotals[c]:0)+e,0<=e?h[c]?h[c]+=e:(h[c]=e,t=Math.min(e,t)):l[c]?l[c]+=e:(l[c]=e,k=Math.max(e,k)))}}a.axisY.scaleBreaks&&(a.axisY.scaleBreaks.autoCalculate&&
1<=a.axisY.scaleBreaks.maxNumberOfAutoBreaks)&&(f.dataPointYPositiveSums?(f.dataPointYPositiveSums.push.apply(f.dataPointYPositiveSums,h),f.dataPointYNegativeSums.push.apply(f.dataPointYPositiveSums,l)):(f.dataPointYPositiveSums=h,f.dataPointYNegativeSums=l));p.axisX.valueType=p.xValueType=g?"dateTime":"number"}for(n in h)h.hasOwnProperty(n)&&!isNaN(n)&&(a=h[n],a<f.min&&(f.min=Math.min(a,t)),a>f.max&&(f.max=a),n<b.viewPortMin||n>b.viewPortMax||(a<f.viewPortMin&&(f.viewPortMin=Math.min(a,t)),a>f.viewPortMax&&
(f.viewPortMax=a)));for(n in l)l.hasOwnProperty(n)&&!isNaN(n)&&(a=l[n],a<f.min&&(f.min=a),a>f.max&&(f.max=Math.max(a,k)),n<b.viewPortMin||n>b.viewPortMax||(a<f.viewPortMin&&(f.viewPortMin=a),a>f.viewPortMax&&(f.viewPortMax=Math.max(a,k))))}};q.prototype._processStacked100PlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var f=a.axisY.dataInfo,b=a.axisX.dataInfo,c,e,g=!1,h=!1,l=!1,t=[],k=0;k<a.dataSeriesIndexes.length;k++){var r=this.data[a.dataSeriesIndexes[k]],p=0,
n=!1,d=!1,w;if("normal"===r.axisPlacement||"xySwapped"===r.axisPlacement)var m=a.axisX.sessionVariables.newViewportMinimum?a.axisX.sessionVariables.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:-Infinity,D=a.axisX.sessionVariables.newViewportMaximum?a.axisX.sessionVariables.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?this.options.axisX.viewportMaximum:
this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;if(r.dataPoints[p].x&&r.dataPoints[p].x.getTime||"dateTime"===r.xValueType)g=!0;for(p=0;p<r.dataPoints.length;p++){"undefined"===typeof r.dataPoints[p].x&&(r.dataPoints[p].x=p+(a.axisX.logarithmic?1:0));r.dataPoints[p].x.getTime?(g=!0,c=r.dataPoints[p].x.getTime()):c=r.dataPoints[p].x;e=y(r.dataPoints[p].y)?null:r.dataPoints[p].y;c<b.min&&(b.min=c);c>b.max&&(b.max=c);if(0<p){if(a.axisX.logarithmic){var u=c/r.dataPoints[p-
1].x;1>u&&(u=1/u);b.minDiff>u&&1!==u&&(b.minDiff=u)}else u=c-r.dataPoints[p-1].x,0>u&&(u*=-1),b.minDiff>u&&0!==u&&(b.minDiff=u);y(e)||null===r.dataPoints[p-1].y||(a.axisY.logarithmic?0<e&&(u=e/r.dataPoints[p-1].y,1>u&&(u=1/u),f.minDiff>u&&1!==u&&(f.minDiff=u)):(u=e-r.dataPoints[p-1].y,0>u&&(u*=-1),f.minDiff>u&&0!==u&&(f.minDiff=u)))}if(c<m&&!n)null!==e&&(w=c);else{if(!n&&(n=!0,0<p)){p-=2;continue}if(c>D&&!d)d=!0;else if(c>D&&d)continue;r.dataPoints[p].label&&(a.axisX.labels[c]=r.dataPoints[p].label);
c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);null===e?b.viewPortMin===c&&w<c&&(b.viewPortMin=w):(a.yTotals[c]=(a.yTotals[c]?a.yTotals[c]:0)+e,0<=e?h=!0:0>e&&(l=!0),t[c]=t[c]?t[c]+Math.abs(e):Math.abs(e))}}r.axisX.valueType=r.xValueType=g?"dateTime":"number"}a.axisY.logarithmic?(f.max=y(f.viewPortMax)?99*Math.pow(a.axisY.logarithmBase,-0.05):Math.max(f.viewPortMax,99*Math.pow(a.axisY.logarithmBase,-0.05)),f.min=y(f.viewPortMin)?1:Math.min(f.viewPortMin,1)):h&&!l?(f.max=y(f.viewPortMax)?
99:Math.max(f.viewPortMax,99),f.min=y(f.viewPortMin)?1:Math.min(f.viewPortMin,1)):h&&l?(f.max=y(f.viewPortMax)?99:Math.max(f.viewPortMax,99),f.min=y(f.viewPortMin)?-99:Math.min(f.viewPortMin,-99)):!h&&l&&(f.max=y(f.viewPortMax)?-1:Math.max(f.viewPortMax,-1),f.min=y(f.viewPortMin)?-99:Math.min(f.viewPortMin,-99));f.viewPortMin=f.min;f.viewPortMax=f.max;a.dataPointYSums=t}};q.prototype._processMultiYPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var f=a.axisY.dataInfo,
b=a.axisX.dataInfo,c,e,g,h,l=!1,t=0;t<a.dataSeriesIndexes.length;t++){var k=this.data[a.dataSeriesIndexes[t]],r=0,p=!1,n=!1,d,w,m;if("normal"===k.axisPlacement||"xySwapped"===k.axisPlacement)var D=a.axisX.sessionVariables.newViewportMinimum?a.axisX.sessionVariables.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:a.axisX.logarithmic?0:-Infinity,u=a.axisX.sessionVariables.newViewportMaximum?
a.axisX.sessionVariables.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?this.options.axisX.viewportMaximum:this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;if(k.dataPoints[r].x&&k.dataPoints[r].x.getTime||"dateTime"===k.xValueType)l=!0;for(r=0;r<k.dataPoints.length;r++){"undefined"===typeof k.dataPoints[r].x&&(k.dataPoints[r].x=r+(a.axisX.logarithmic?1:0));k.dataPoints[r].x.getTime?(l=!0,c=k.dataPoints[r].x.getTime()):c=k.dataPoints[r].x;
if((e=k.dataPoints[r].y)&&e.length){g=Math.min.apply(null,e);h=Math.max.apply(null,e);w=!0;for(var v=0;v<e.length;v++)null===e.k&&(w=!1);w&&(p||(m=d),d=c)}c<b.min&&(b.min=c);c>b.max&&(b.max=c);g<f.min&&(f.min=g);h>f.max&&(f.max=h);0<r&&(a.axisX.logarithmic?(w=c/k.dataPoints[r-1].x,1>w&&(w=1/w),b.minDiff>w&&1!==w&&(b.minDiff=w)):(w=c-k.dataPoints[r-1].x,0>w&&(w*=-1),b.minDiff>w&&0!==w&&(b.minDiff=w)),e&&(null!==e[0]&&k.dataPoints[r-1].y&&null!==k.dataPoints[r-1].y[0])&&(a.axisY.logarithmic?(w=e[0]/
k.dataPoints[r-1].y[0],1>w&&(w=1/w),f.minDiff>w&&1!==w&&(f.minDiff=w)):(w=e[0]-k.dataPoints[r-1].y[0],0>w&&(w*=-1),f.minDiff>w&&0!==w&&(f.minDiff=w))));if(!(c<D)||p){if(!p&&(p=!0,0<r)){r-=2;d=m;continue}if(c>u&&!n)n=!0;else if(c>u&&n)continue;k.dataPoints[r].label&&(a.axisX.labels[c]=k.dataPoints[r].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);if(b.viewPortMin===c&&e)for(v=0;v<e.length;v++)if(null===e[v]&&d<c){b.viewPortMin=d;break}null===e?b.viewPortMin===c&&d<c&&
(b.viewPortMin=d):(g<f.viewPortMin&&(f.viewPortMin=g),h>f.viewPortMax&&(f.viewPortMax=h))}}k.axisX.valueType=k.xValueType=l?"dateTime":"number"}};q.prototype._processSpecificPlotUnit=function(a){if("waterfall"===a.type&&a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var f=a.axisY.dataInfo,b=a.axisX.dataInfo,c,e,g=!1,h=0;h<a.dataSeriesIndexes.length;h++){var l=this.data[a.dataSeriesIndexes[h]],t=0,k=!1,r=!1,p=c=0;if("normal"===l.axisPlacement||"xySwapped"===l.axisPlacement)var n=a.axisX.sessionVariables.newViewportMinimum?
a.axisX.sessionVariables.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:a.axisX.logarithmic?0:-Infinity,d=a.axisX.sessionVariables.newViewportMaximum?a.axisX.sessionVariables.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?this.options.axisX.viewportMaximum:this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;
if(l.dataPoints[t].x&&l.dataPoints[t].x.getTime||"dateTime"===l.xValueType)g=!0;for(t=0;t<l.dataPoints.length;t++)"undefined"!==typeof l.dataPoints[t].isCumulativeSum&&!0===l.dataPoints[t].isCumulativeSum?(l.dataPointEOs[t].cumulativeSumYStartValue=0,l.dataPointEOs[t].cumulativeSum=0===t?0:l.dataPointEOs[t-1].cumulativeSum,l.dataPoints[t].y=0===t?0:l.dataPointEOs[t-1].cumulativeSum):"undefined"!==typeof l.dataPoints[t].isIntermediateSum&&!0===l.dataPoints[t].isIntermediateSum?(l.dataPointEOs[t].cumulativeSumYStartValue=
p,l.dataPointEOs[t].cumulativeSum=0===t?0:l.dataPointEOs[t-1].cumulativeSum,l.dataPoints[t].y=0===t?0:c,p=0===t?0:l.dataPointEOs[t-1].cumulativeSum,c=0):(e="number"!==typeof l.dataPoints[t].y?0:l.dataPoints[t].y,l.dataPointEOs[t].cumulativeSumYStartValue=0===t?0:l.dataPointEOs[t-1].cumulativeSum,l.dataPointEOs[t].cumulativeSum=0===t?e:l.dataPointEOs[t-1].cumulativeSum+e,c+=e);for(t=0;t<l.dataPoints.length;t++)if("undefined"===typeof l.dataPoints[t].x&&(l.dataPoints[t].x=t+(a.axisX.logarithmic?1:0)),
l.dataPoints[t].x.getTime?(g=!0,c=l.dataPoints[t].x.getTime()):c=l.dataPoints[t].x,e=l.dataPoints[t].y,c<b.min&&(b.min=c),c>b.max&&(b.max=c),l.dataPointEOs[t].cumulativeSum<f.min&&(f.min=l.dataPointEOs[t].cumulativeSum),l.dataPointEOs[t].cumulativeSum>f.max&&(f.max=l.dataPointEOs[t].cumulativeSum),0<t&&(a.axisX.logarithmic?(p=c/l.dataPoints[t-1].x,1>p&&(p=1/p),b.minDiff>p&&1!==p&&(b.minDiff=p)):(p=c-l.dataPoints[t-1].x,0>p&&(p*=-1),b.minDiff>p&&0!==p&&(b.minDiff=p)),null!==e&&null!==l.dataPoints[t-
1].y&&(a.axisY.logarithmic?(e=l.dataPointEOs[t].cumulativeSum/l.dataPointEOs[t-1].cumulativeSum,1>e&&(e=1/e),f.minDiff>e&&1!==e&&(f.minDiff=e)):(e=l.dataPointEOs[t].cumulativeSum-l.dataPointEOs[t-1].cumulativeSum,0>e&&(e*=-1),f.minDiff>e&&0!==e&&(f.minDiff=e)))),!(c<n)||k){if(!k&&(k=!0,0<t)){t-=2;continue}if(c>d&&!r)r=!0;else if(c>d&&r)continue;l.dataPoints[t].label&&(a.axisX.labels[c]=l.dataPoints[t].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);0<t&&(l.dataPointEOs[t-
1].cumulativeSum<f.viewPortMin&&(f.viewPortMin=l.dataPointEOs[t-1].cumulativeSum),l.dataPointEOs[t-1].cumulativeSum>f.viewPortMax&&(f.viewPortMax=l.dataPointEOs[t-1].cumulativeSum));l.dataPointEOs[t].cumulativeSum<f.viewPortMin&&(f.viewPortMin=l.dataPointEOs[t].cumulativeSum);l.dataPointEOs[t].cumulativeSum>f.viewPortMax&&(f.viewPortMax=l.dataPointEOs[t].cumulativeSum)}l.axisX.valueType=l.xValueType=g?"dateTime":"number"}};q.prototype.calculateAutoBreaks=function(){function a(a,c,b,e){if(e)return b=
Math.pow(Math.min(b*a/c,c/a),0.2),1>=b&&(b=Math.pow(1>a?1/a:Math.min(c/a,a),0.25)),{startValue:a*b,endValue:c/b};b=0.2*Math.min(b-c+a,c-a);0>=b&&(b=0.25*Math.min(c-a,Math.abs(a)));return{startValue:a+b,endValue:c-b}}function f(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){var c=a.axisX.scaleBreaks&&a.axisX.scaleBreaks.autoCalculate&&1<=a.axisX.scaleBreaks.maxNumberOfAutoBreaks,b=a.axisY.scaleBreaks&&a.axisY.scaleBreaks.autoCalculate&&1<=a.axisY.scaleBreaks.maxNumberOfAutoBreaks;if(c||
b)for(var f=a.axisY.dataInfo,g=a.axisX.dataInfo,k,h=g.min,n=g.max,l=f.min,t=f.max,g=g._dataRanges,f=f._dataRanges,p,r=0,m=0;m<a.dataSeriesIndexes.length;m++){var v=e.data[a.dataSeriesIndexes[m]];if(!(4>v.dataPoints.length))for(r=0;r<v.dataPoints.length;r++)if(c&&(p=(n+1-h)*Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold)||10,10)/100,k=v.dataPoints[r].x.getTime?v.dataPoints[r].x.getTime():v.dataPoints[r].x,p=Math.floor((k-h)/p),k<g[p].min&&(g[p].min=k),k>g[p].max&&(g[p].max=k)),b){var q=
(t+1-l)*Math.max(parseFloat(a.axisY.scaleBreaks.collapsibleThreshold)||10,10)/100;if((k="waterfall"===a.type?v.dataPointEOs[r].cumulativeSum:v.dataPoints[r].y)&&k.length)for(var s=0;s<k.length;s++)p=Math.floor((k[s]-l)/q),k[s]<f[p].min&&(f[p].min=k[s]),k[s]>f[p].max&&(f[p].max=k[s]);else y(k)||(p=Math.floor((k-l)/q),k<f[p].min&&(f[p].min=k),k>f[p].max&&(f[p].max=k))}}}}function b(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)&&a.axisX.scaleBreaks&&a.axisX.scaleBreaks.autoCalculate&&1<=
a.axisX.scaleBreaks.maxNumberOfAutoBreaks)for(var c=a.axisX.dataInfo,b=c.min,f=c.max,g=c._dataRanges,k,h=0,n=0;n<a.dataSeriesIndexes.length;n++){var l=e.data[a.dataSeriesIndexes[n]];if(!(4>l.dataPoints.length))for(h=0;h<l.dataPoints.length;h++)k=(f+1-b)*Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold)||10,10)/100,c=l.dataPoints[h].x.getTime?l.dataPoints[h].x.getTime():l.dataPoints[h].x,k=Math.floor((c-b)/k),c<g[k].min&&(g[k].min=c),c>g[k].max&&(g[k].max=c)}}for(var c,e=this,g=!1,h=0;h<
this._axes.length;h++)if(this._axes[h].scaleBreaks&&this._axes[h].scaleBreaks.autoCalculate&&1<=this._axes[h].scaleBreaks.maxNumberOfAutoBreaks){g=!0;this._axes[h].dataInfo._dataRanges=[];for(var l=0;l<100/Math.max(parseFloat(this._axes[h].scaleBreaks.collapsibleThreshold)||10,10);l++)this._axes[h].dataInfo._dataRanges.push({min:Infinity,max:-Infinity})}if(g){for(h=0;h<this.plotInfo.plotTypes.length;h++)for(g=this.plotInfo.plotTypes[h],l=0;l<g.plotUnits.length;l++)c=g.plotUnits[l],"line"===c.type||
"stepLine"===c.type||"spline"===c.type||"column"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"bar"===c.type||"bubble"===c.type||"scatter"===c.type||"candlestick"===c.type||"ohlc"===c.type||"rangeColumn"===c.type||"rangeBar"===c.type||"rangeArea"===c.type||"rangeSplineArea"===c.type||"waterfall"===c.type||"error"===c.type||"boxAndWhisker"===c.type?f(c):0<=c.type.indexOf("stacked")&&b(c);for(h=0;h<this._axes.length;h++)if(this._axes[h].dataInfo._dataRanges){var t=this._axes[h].dataInfo.min;
c=(this._axes[h].dataInfo.max+1-t)*Math.max(parseFloat(this._axes[h].scaleBreaks.collapsibleThreshold)||10,10)/100;var k=this._axes[h].dataInfo._dataRanges,r,p,g=[];if(this._axes[h].dataInfo.dataPointYPositiveSums){var n=this._axes[h].dataInfo.dataPointYPositiveSums;r=k;for(l in n)n.hasOwnProperty(l)&&!isNaN(l)&&(p=n[l],y(p)||(index=Math.floor((p-t)/c),p<r[index].min&&(r[index].min=p),p>r[index].max&&(r[index].max=p)));delete this._axes[h].dataInfo.dataPointYPositiveSums}if(this._axes[h].dataInfo.dataPointYNegativeSums){n=
this._axes[h].dataInfo.dataPointYNegativeSums;r=k;for(l in n)n.hasOwnProperty(l)&&!isNaN(l)&&(p=-1*n[l],y(p)||(index=Math.floor((p-t)/c),p<r[index].min&&(r[index].min=p),p>r[index].max&&(r[index].max=p)));delete this._axes[h].dataInfo.dataPointYNegativeSums}for(l=0;l<k.length-1;l++)if(r=k[l].max,isFinite(r))for(;l<k.length-1;)if(t=k[l+1].min,isFinite(t)){p=t-r;p>c&&g.push({diff:p,start:r,end:t});break}else l++;if(this._axes[h].scaleBreaks.customBreaks)for(l=0;l<this._axes[h].scaleBreaks.customBreaks.length;l++)for(c=
0;c<g.length;c++)if(this._axes[h].scaleBreaks.customBreaks[l].startValue<=g[c].start&&g[c].start<=this._axes[h].scaleBreaks.customBreaks[l].endValue||this._axes[h].scaleBreaks.customBreaks[l].startValue<=g[c].start&&g[c].start<=this._axes[h].scaleBreaks.customBreaks[l].endValue||g[c].start<=this._axes[h].scaleBreaks.customBreaks[l].startValue&&this._axes[h].scaleBreaks.customBreaks[l].startValue<=g[c].end||g[c].start<=this._axes[h].scaleBreaks.customBreaks[l].endValue&&this._axes[h].scaleBreaks.customBreaks[l].endValue<=
g[c].end)g.splice(c,1),c--;g.sort(function(a,c){return c.diff-a.diff});for(l=0;l<Math.min(g.length,this._axes[h].scaleBreaks.maxNumberOfAutoBreaks);l++)c=a(g[l].start,g[l].end,this._axes[h].logarithmic?this._axes[h].dataInfo.max/this._axes[h].dataInfo.min:this._axes[h].dataInfo.max-this._axes[h].dataInfo.min,this._axes[h].logarithmic),this._axes[h].scaleBreaks.autoBreaks.push(new ba(this,"autoBreaks",c,l,++this._eventManager.lastObjectId,this._axes[h].scaleBreaks)),this._axes[h].scaleBreaks._appliedBreaks.push(this._axes[h].scaleBreaks.autoBreaks[this._axes[h].scaleBreaks.autoBreaks.length-
1]);this._axes[h].scaleBreaks._appliedBreaks.sort(function(a,c){return a.startValue-c.startValue})}}};q.prototype.getDataPointAtXY=function(a,f,b){b=b||!1;for(var c=[],e=this._dataInRenderedOrder.length-1;0<=e;e--){var g=null;(g=this._dataInRenderedOrder[e].getDataPointAtXY(a,f,b))&&c.push(g)}a=null;f=!1;for(b=0;b<c.length;b++)if("line"===c[b].dataSeries.type||"stepLine"===c[b].dataSeries.type||"area"===c[b].dataSeries.type||"stepArea"===c[b].dataSeries.type)if(e=ja("markerSize",c[b].dataPoint,c[b].dataSeries)||
8,c[b].distance<=e/2){f=!0;break}for(b=0;b<c.length;b++)f&&"line"!==c[b].dataSeries.type&&"stepLine"!==c[b].dataSeries.type&&"area"!==c[b].dataSeries.type&&"stepArea"!==c[b].dataSeries.type||(a?c[b].distance<=a.distance&&(a=c[b]):a=c[b]);return a};q.prototype.getObjectAtXY=function(a,f,b){var c=null;if(b=this.getDataPointAtXY(a,f,b||!1))c=b.dataSeries.dataPointIds[b.dataPointIndex];else if(v)c=Wa(a,f,this._eventManager.ghostCtx);else for(b=0;b<this.legend.items.length;b++){var e=this.legend.items[b];
a>=e.x1&&(a<=e.x2&&f>=e.y1&&f<=e.y2)&&(c=e.id)}return c};q.prototype.getAutoFontSize=function(a,f,b){f=Math.min(this.width,this.height);return Math.max("theme4"===this.theme?0:300<=f?12:10,Math.round(f*(a/400)))};q.prototype.resetOverlayedCanvas=function(){this.overlaidCanvasCtx.clearRect(0,0,this.width,this.height)};q.prototype.clearCanvas=function(){this.ctx.clearRect(0,0,this.width,this.height);this.backgroundColor&&(this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(0,0,this.width,this.height))};
q.prototype.attachEvent=function(a){this._events.push(a)};q.prototype._touchEventHandler=function(a){if(a.changedTouches&&this.interactivityEnabled){var f=[],b=a.changedTouches,c=b?b[0]:a,e=null;switch(a.type){case "touchstart":case "MSPointerDown":f=["mousemove","mousedown"];this._lastTouchData=Oa(c);this._lastTouchData.time=new Date;break;case "touchmove":case "MSPointerMove":f=["mousemove"];break;case "touchend":case "MSPointerUp":var g=this._lastTouchData&&this._lastTouchData.time?new Date-this._lastTouchData.time:
0,f="touchstart"===this._lastTouchEventType||"MSPointerDown"===this._lastTouchEventType||300>g?["mouseup","click"]:["mouseup"];break;default:return}if(!(b&&1<b.length)){e=Oa(c);e.time=new Date;try{var h=e.y-this._lastTouchData.y,g=e.time-this._lastTouchData.time;if(15<Math.abs(h)&&(this._lastTouchData.scroll||300>g)){this._lastTouchData.scroll=!0;var l=window.parent||window;l&&l.scrollBy&&l.scrollBy(0,-h)}}catch(t){}this._lastTouchEventType=a.type;if(this._lastTouchData.scroll&&this.zoomEnabled)this.isDrag&&
this.resetOverlayedCanvas(),this.isDrag=!1;else for(b=0;b<f.length;b++)e=f[b],g=document.createEvent("MouseEvent"),g.initMouseEvent(e,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),c.target.dispatchEvent(g),a.preventManipulation&&a.preventManipulation(),a.preventDefault&&a.preventDefault()}}};q.prototype._dispatchRangeEvent=function(a,f){var b={chart:this};b.type=a;b.trigger=f;var c=[];this.axisX&&0<this.axisX.length&&c.push("axisX");this.axisX2&&0<this.axisX2.length&&
c.push("axisX2");this.axisY&&0<this.axisY.length&&c.push("axisY");this.axisY2&&0<this.axisY2.length&&c.push("axisY2");for(var e=0;e<c.length;e++)if(y(b[c[e]])&&(b[c[e]]=[]),"axisY"===c[e])for(var g=0;g<this.axisY.length;g++)b[c[e]].push({viewportMinimum:this[c[e]][g].sessionVariables.newViewportMinimum,viewportMaximum:this[c[e]][g].sessionVariables.newViewportMaximum});else if("axisY2"===c[e])for(g=0;g<this.axisY2.length;g++)b[c[e]].push({viewportMinimum:this[c[e]][g].sessionVariables.newViewportMinimum,
viewportMaximum:this[c[e]][g].sessionVariables.newViewportMaximum});else if("axisX"===c[e])for(g=0;g<this.axisX.length;g++)b[c[e]].push({viewportMinimum:this[c[e]][g].sessionVariables.newViewportMinimum,viewportMaximum:this[c[e]][g].sessionVariables.newViewportMaximum});else if("axisX2"===c[e])for(g=0;g<this.axisX2.length;g++)b[c[e]].push({viewportMinimum:this[c[e]][g].sessionVariables.newViewportMinimum,viewportMaximum:this[c[e]][g].sessionVariables.newViewportMaximum});this.dispatchEvent(a,b,this)};
q.prototype._mouseEventHandler=function(a){"undefined"===typeof a.target&&a.srcElement&&(a.target=a.srcElement);var f=Oa(a),b=a.type,c,e;a.which?e=3==a.which:a.button&&(e=2==a.button);q.capturedEventParam&&(c=q.capturedEventParam,"mouseup"===b&&(q.capturedEventParam=null,c.chart.overlaidCanvas.releaseCapture?c.chart.overlaidCanvas.releaseCapture():document.documentElement.removeEventListener("mouseup",c.chart._mouseEventHandler,!1)),c.hasOwnProperty(b)&&("mouseup"!==b||c.chart.overlaidCanvas.releaseCapture?
a.target!==c.chart.overlaidCanvas&&v||c[b].call(c.context,f.x,f.y):a.target!==c.chart.overlaidCanvas&&(c.chart.isDrag=!1)));if(this.interactivityEnabled)if(this._ignoreNextEvent)this._ignoreNextEvent=!1;else if(a.preventManipulation&&a.preventManipulation(),a.preventDefault&&a.preventDefault(),!e){if(!q.capturedEventParam&&this._events){for(var g=0;g<this._events.length;g++)if(this._events[g].hasOwnProperty(b))if(c=this._events[g],e=c.bounds,f.x>=e.x1&&f.x<=e.x2&&f.y>=e.y1&&f.y<=e.y2){c[b].call(c.context,
f.x,f.y);"mousedown"===b&&!0===c.capture?(q.capturedEventParam=c,this.overlaidCanvas.setCapture?this.overlaidCanvas.setCapture():document.documentElement.addEventListener("mouseup",this._mouseEventHandler,!1)):"mouseup"===b&&(c.chart.overlaidCanvas.releaseCapture?c.chart.overlaidCanvas.releaseCapture():document.documentElement.removeEventListener("mouseup",this._mouseEventHandler,!1));break}else c=null;a.target.style.cursor=c&&c.cursor?c.cursor:this._defaultCursor}b=this.plotArea;if(f.x<b.x1||f.x>
b.x2||f.y<b.y1||f.y>b.y2)this.toolTip&&this.toolTip.enabled?this.toolTip.hide():this.resetOverlayedCanvas();this.isDrag&&this.zoomEnabled||!this._eventManager||this._eventManager.mouseEventHandler(a)}};q.prototype._plotAreaMouseDown=function(a,f){this.isDrag=!0;this.dragStartPoint={x:a,y:f}};q.prototype._plotAreaMouseUp=function(a,f){if(("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)&&this.isDrag){var b=f-this.dragStartPoint.y,c=a-this.dragStartPoint.x,e=0<=this.zoomType.indexOf("x"),
g=0<=this.zoomType.indexOf("y"),h=!1;this.resetOverlayedCanvas();if("xySwapped"===this.plotInfo.axisPlacement)var l=g,g=e,e=l;if(this.panEnabled||this.zoomEnabled){if(this.panEnabled)for(e=g=0;e<this._axes.length;e++)b=this._axes[e],b.logarithmic?b.viewportMinimum<b.minimum?(g=b.minimum/b.viewportMinimum,b.sessionVariables.newViewportMinimum=b.viewportMinimum*g,b.sessionVariables.newViewportMaximum=b.viewportMaximum*g,h=!0):b.viewportMaximum>b.maximum&&(g=b.viewportMaximum/b.maximum,b.sessionVariables.newViewportMinimum=
b.viewportMinimum/g,b.sessionVariables.newViewportMaximum=b.viewportMaximum/g,h=!0):b.viewportMinimum<b.minimum?(g=b.minimum-b.viewportMinimum,b.sessionVariables.newViewportMinimum=b.viewportMinimum+g,b.sessionVariables.newViewportMaximum=b.viewportMaximum+g,h=!0):b.viewportMaximum>b.maximum&&(g=b.viewportMaximum-b.maximum,b.sessionVariables.newViewportMinimum=b.viewportMinimum-g,b.sessionVariables.newViewportMaximum=b.viewportMaximum-g,h=!0);else if((!e||2<Math.abs(c))&&(!g||2<Math.abs(b))&&this.zoomEnabled){if(!this.dragStartPoint)return;
b=e?this.dragStartPoint.x:this.plotArea.x1;c=g?this.dragStartPoint.y:this.plotArea.y1;e=e?a:this.plotArea.x2;g=g?f:this.plotArea.y2;2<Math.abs(b-e)&&2<Math.abs(c-g)&&this._zoomPanToSelectedRegion(b,c,e,g)&&(h=!0)}h&&(this._ignoreNextEvent=!0,this._dispatchRangeEvent("rangeChanging","zoom"),this.render(),this._dispatchRangeEvent("rangeChanged","zoom"),h&&(this.zoomEnabled&&"none"===this._zoomButton.style.display)&&(Ma(this._zoomButton,this._resetButton),ua(this,this._zoomButton,"pan"),ua(this,this._resetButton,
"reset")))}}this.isDrag=!1;if("none"!==this.plotInfo.axisPlacement){this.resetOverlayedCanvas();if(this.axisX&&0<this.axisX.length)for(h=0;h<this.axisX.length;h++)this.axisX[h].crosshair&&this.axisX[h].crosshair.enabled&&this.axisX[h].renderCrosshair(a,f);if(this.axisX2&&0<this.axisX2.length)for(h=0;h<this.axisX2.length;h++)this.axisX2[h].crosshair&&this.axisX2[h].crosshair.enabled&&this.axisX2[h].renderCrosshair(a,f);if(this.axisY&&0<this.axisY.length)for(h=0;h<this.axisY.length;h++)this.axisY[h].crosshair&&
this.axisY[h].crosshair.enabled&&this.axisY[h].renderCrosshair(a,f);if(this.axisY2&&0<this.axisY2.length)for(h=0;h<this.axisY2.length;h++)this.axisY2[h].crosshair&&this.axisY2[h].crosshair.enabled&&this.axisY2[h].renderCrosshair(a,f)}};q.prototype._plotAreaMouseMove=function(a,f){if(this.isDrag&&"none"!==this.plotInfo.axisPlacement){var b=0,c=0,e=b=null,e=0<=this.zoomType.indexOf("x"),g=0<=this.zoomType.indexOf("y"),h=this;"xySwapped"===this.plotInfo.axisPlacement&&(b=g,g=e,e=b);b=this.dragStartPoint.x-
a;c=this.dragStartPoint.y-f;2<Math.abs(b)&&8>Math.abs(b)&&(this.panEnabled||this.zoomEnabled)?this.toolTip.hide():this.panEnabled||this.zoomEnabled||this.toolTip.mouseMoveHandler(a,f);if((!e||2<Math.abs(b)||!g||2<Math.abs(c))&&(this.panEnabled||this.zoomEnabled))if(this.panEnabled)e={x1:e?this.plotArea.x1+b:this.plotArea.x1,y1:g?this.plotArea.y1+c:this.plotArea.y1,x2:e?this.plotArea.x2+b:this.plotArea.x2,y2:g?this.plotArea.y2+c:this.plotArea.y2},clearTimeout(h._panTimerId),h._panTimerId=setTimeout(function(c,
b,e,d){return function(){h._zoomPanToSelectedRegion(c,b,e,d,!0)&&(h._dispatchRangeEvent("rangeChanging","pan"),h.render(),h._dispatchRangeEvent("rangeChanged","pan"),h.dragStartPoint.x=a,h.dragStartPoint.y=f)}}(e.x1,e.y1,e.x2,e.y2),0);else if(this.zoomEnabled){this.resetOverlayedCanvas();b=this.overlaidCanvasCtx.globalAlpha;this.overlaidCanvasCtx.fillStyle="#A89896";var c=e?this.dragStartPoint.x:this.plotArea.x1,l=g?this.dragStartPoint.y:this.plotArea.y1,t=e?a-this.dragStartPoint.x:this.plotArea.x2-
this.plotArea.x1,k=g?f-this.dragStartPoint.y:this.plotArea.y2-this.plotArea.y1;this.validateRegion(c,l,e?a:this.plotArea.x2-this.plotArea.x1,g?f:this.plotArea.y2-this.plotArea.y1,"xy"!==this.zoomType).isValid&&(this.resetOverlayedCanvas(),this.overlaidCanvasCtx.fillStyle="#99B2B5");this.overlaidCanvasCtx.globalAlpha=0.7;this.overlaidCanvasCtx.fillRect(c,l,t,k);this.overlaidCanvasCtx.globalAlpha=b}}else if(this.toolTip.mouseMoveHandler(a,f),"none"!==this.plotInfo.axisPlacement){if(this.axisX&&0<this.axisX.length)for(e=
0;e<this.axisX.length;e++)this.axisX[e].crosshair&&this.axisX[e].crosshair.enabled&&this.axisX[e].renderCrosshair(a,f);if(this.axisX2&&0<this.axisX2.length)for(e=0;e<this.axisX2.length;e++)this.axisX2[e].crosshair&&this.axisX2[e].crosshair.enabled&&this.axisX2[e].renderCrosshair(a,f);if(this.axisY&&0<this.axisY.length)for(e=0;e<this.axisY.length;e++)this.axisY[e].crosshair&&this.axisY[e].crosshair.enabled&&this.axisY[e].renderCrosshair(a,f);if(this.axisY2&&0<this.axisY2.length)for(e=0;e<this.axisY2.length;e++)this.axisY2[e].crosshair&&
this.axisY2[e].crosshair.enabled&&this.axisY2[e].renderCrosshair(a,f)}};q.prototype._zoomPanToSelectedRegion=function(a,f,b,c,e){a=this.validateRegion(a,f,b,c,e);f=a.axesWithValidRange;b=a.axesRanges;if(a.isValid)for(c=0;c<f.length;c++)e=b[c],f[c].setViewPortRange(e.val1,e.val2);return a.isValid};q.prototype.validateRegion=function(a,f,b,c,e){e=e||!1;for(var g=0<=this.zoomType.indexOf("x"),h=0<=this.zoomType.indexOf("y"),l=!1,t=[],k=[],r=[],p=0;p<this._axes.length;p++)("axisX"===this._axes[p].type&&
g||"axisY"===this._axes[p].type&&h)&&k.push(this._axes[p]);for(h=0;h<k.length;h++){var p=k[h],g=!1,n=p.convertPixelToValue({x:a,y:f}),d=p.convertPixelToValue({x:b,y:c});if(n>d)var w=d,d=n,n=w;if(p.scaleBreaks)for(w=0;!g&&w<p.scaleBreaks._appliedBreaks.length;w++)g=p.scaleBreaks._appliedBreaks[w].startValue<=n&&p.scaleBreaks._appliedBreaks[w].endValue>=d;if(isFinite(p.dataInfo.minDiff))if(w=p.getApparentDifference(n,d,null,!0),!(g||!(this.panEnabled&&p.scaleBreaks&&p.scaleBreaks._appliedBreaks.length)&&
(p.logarithmic&&w<Math.pow(p.dataInfo.minDiff,3)||!p.logarithmic&&w<3*Math.abs(p.dataInfo.minDiff))||n<p.minimum||d>p.maximum))t.push(p),r.push({val1:n,val2:d}),l=!0;else if(!e){l=!1;break}}return{isValid:l,axesWithValidRange:t,axesRanges:r}};q.prototype.preparePlotArea=function(){var a=this.plotArea;!v&&(0<a.x1||0<a.y1)&&a.ctx.translate(a.x1,a.y1);if((this.axisX[0]||this.axisX2[0])&&(this.axisY[0]||this.axisY2[0])){var f=this.axisX[0]?this.axisX[0].lineCoordinates:this.axisX2[0].lineCoordinates;
if(this.axisY&&0<this.axisY.length&&this.axisY[0]){var b=this.axisY[0];a.x1=f.x1<f.x2?f.x1:b.lineCoordinates.x1;a.y1=f.y1<b.lineCoordinates.y1?f.y1:b.lineCoordinates.y1;a.x2=f.x2>b.lineCoordinates.x2?f.x2:b.lineCoordinates.x2;a.y2=f.y2>f.y1?f.y2:b.lineCoordinates.y2;a.width=a.x2-a.x1;a.height=a.y2-a.y1}this.axisY2&&0<this.axisY2.length&&this.axisY2[0]&&(b=this.axisY2[0],a.x1=f.x1<f.x2?f.x1:b.lineCoordinates.x1,a.y1=f.y1<b.lineCoordinates.y1?f.y1:b.lineCoordinates.y1,a.x2=f.x2>b.lineCoordinates.x2?
f.x2:b.lineCoordinates.x2,a.y2=f.y2>f.y1?f.y2:b.lineCoordinates.y2,a.width=a.x2-a.x1,a.height=a.y2-a.y1)}else f=this.layoutManager.getFreeSpace(),a.x1=f.x1,a.x2=f.x2,a.y1=f.y1,a.y2=f.y2,a.width=f.width,a.height=f.height;v||(a.canvas.width=a.width,a.canvas.height=a.height,a.canvas.style.left=a.x1+"px",a.canvas.style.top=a.y1+"px",(0<a.x1||0<a.y1)&&a.ctx.translate(-a.x1,-a.y1));a.layoutManager=new Da(a.x1,a.y1,a.x2,a.y2,2)};q.prototype.renderIndexLabels=function(a){var f=a||this.plotArea.ctx,b=this.plotArea,
c=0,e=0,g=0,h=0,l=c=h=e=g=0,t=0;for(a=0;a<this._indexLabels.length;a++){var k=this._indexLabels[a],r=k.chartType.toLowerCase(),p,n,l=ja("indexLabelFontColor",k.dataPoint,k.dataSeries),t=ja("indexLabelFontSize",k.dataPoint,k.dataSeries);p=ja("indexLabelFontFamily",k.dataPoint,k.dataSeries);n=ja("indexLabelFontStyle",k.dataPoint,k.dataSeries);var h=ja("indexLabelFontWeight",k.dataPoint,k.dataSeries),d=ja("indexLabelBackgroundColor",k.dataPoint,k.dataSeries),e=ja("indexLabelMaxWidth",k.dataPoint,k.dataSeries),
g=ja("indexLabelWrap",k.dataPoint,k.dataSeries),w=ja("indexLabelLineDashType",k.dataPoint,k.dataSeries),m=ja("indexLabelLineColor",k.dataPoint,k.dataSeries),D=y(k.dataPoint.indexLabelLineThickness)?y(k.dataSeries.options.indexLabelLineThickness)?0:k.dataSeries.options.indexLabelLineThickness:k.dataPoint.indexLabelLineThickness,c=0<D?Math.min(10,("normal"===this.plotInfo.axisPlacement?this.plotArea.height:this.plotArea.width)<<0):0,u={percent:null,total:null},Q=null;if(0<=k.dataSeries.type.indexOf("stacked")||
"pie"===k.dataSeries.type||"doughnut"===k.dataSeries.type)u=this.getPercentAndTotal(k.dataSeries,k.dataPoint);if(k.dataSeries.indexLabelFormatter||k.dataPoint.indexLabelFormatter)Q={chart:this,dataSeries:k.dataSeries,dataPoint:k.dataPoint,index:k.indexKeyword,total:u.total,percent:u.percent};var H=k.dataPoint.indexLabelFormatter?k.dataPoint.indexLabelFormatter(Q):k.dataPoint.indexLabel?this.replaceKeywordsWithValue(k.dataPoint.indexLabel,k.dataPoint,k.dataSeries,null,k.indexKeyword):k.dataSeries.indexLabelFormatter?
k.dataSeries.indexLabelFormatter(Q):k.dataSeries.indexLabel?this.replaceKeywordsWithValue(k.dataSeries.indexLabel,k.dataPoint,k.dataSeries,null,k.indexKeyword):null;if(null!==H&&""!==H){var u=ja("indexLabelPlacement",k.dataPoint,k.dataSeries),Q=ja("indexLabelOrientation",k.dataPoint,k.dataSeries),q=k.direction,s=k.dataSeries.axisX,A=k.dataSeries.axisY,x=!1,d=new ka(f,{x:0,y:0,maxWidth:e?e:0.5*this.width,maxHeight:g?5*t:1.5*t,angle:"horizontal"===Q?0:-90,text:H,padding:0,backgroundColor:d,horizontalAlign:"left",
fontSize:t,fontFamily:p,fontWeight:h,fontColor:l,fontStyle:n,textBaseline:"top"});d.measureText();k.dataSeries.indexLabelMaxWidth=d.maxWidth;if("stackedarea100"===r){if(k.point.x<b.x1||k.point.x>b.x2||k.point.y<b.y1-1||k.point.y>b.y2+1)continue}else if("rangearea"===r||"rangesplinearea"===r){if(k.dataPoint.x<s.viewportMinimum||k.dataPoint.x>s.viewportMaximum||Math.max.apply(null,k.dataPoint.y)<A.viewportMinimum||Math.min.apply(null,k.dataPoint.y)>A.viewportMaximum)continue}else if(0<=r.indexOf("line")||
0<=r.indexOf("area")||0<=r.indexOf("bubble")||0<=r.indexOf("scatter")){if(k.dataPoint.x<s.viewportMinimum||k.dataPoint.x>s.viewportMaximum||k.dataPoint.y<A.viewportMinimum||k.dataPoint.y>A.viewportMaximum)continue}else if(0<=r.indexOf("column")||"waterfall"===r||"error"===r&&!k.axisSwapped){if(k.dataPoint.x<s.viewportMinimum||k.dataPoint.x>s.viewportMaximum||k.bounds.y1>b.y2||k.bounds.y2<b.y1)continue}else if(0<=r.indexOf("bar")||"error"===r){if(k.dataPoint.x<s.viewportMinimum||k.dataPoint.x>s.viewportMaximum||
k.bounds.x1>b.x2||k.bounds.x2<b.x1)continue}else if("candlestick"===r||"ohlc"===r){if(k.dataPoint.x<s.viewportMinimum||k.dataPoint.x>s.viewportMaximum||Math.max.apply(null,k.dataPoint.y)<A.viewportMinimum||Math.min.apply(null,k.dataPoint.y)>A.viewportMaximum)continue}else if(k.dataPoint.x<s.viewportMinimum||k.dataPoint.x>s.viewportMaximum)continue;e=h=2;"horizontal"===Q?(l=d.width,t=d.height):(t=d.width,l=d.height);if("normal"===this.plotInfo.axisPlacement){if(0<=r.indexOf("line")||0<=r.indexOf("area"))u=
"auto",h=4;else if(0<=r.indexOf("stacked"))"auto"===u&&(u="inside");else if("bubble"===r||"scatter"===r)u="inside";p=k.point.x-l/2;"inside"!==u?(e=b.y1,g=b.y2,0<q?(n=k.point.y-t-h-c,n<e&&(n="auto"===u?Math.max(k.point.y,e)+h+c:e+h+c,x=n+t>k.point.y)):(n=k.point.y+h+c,n>g-t-h-c&&(n="auto"===u?Math.min(k.point.y,g)-t-h-c:g-t-h-c,x=n<k.point.y))):(e=Math.max(k.bounds.y1,b.y1),g=Math.min(k.bounds.y2,b.y2),c=0<=r.indexOf("range")||"error"===r?0<q?Math.max(k.bounds.y1,b.y1)+t/2+h:Math.min(k.bounds.y2,b.y2)-
t/2-h:(Math.max(k.bounds.y1,b.y1)+Math.min(k.bounds.y2,b.y2))/2,0<q?(n=Math.max(k.point.y,c)-t/2,n<e&&("bubble"===r||"scatter"===r)&&(n=Math.max(k.point.y-t-h,b.y1+h))):(n=Math.min(k.point.y,c)-t/2,n>g-t-h&&("bubble"===r||"scatter"===r)&&(n=Math.min(k.point.y+h,b.y2-t-h))),n=Math.min(n,g-t))}else 0<=r.indexOf("line")||0<=r.indexOf("area")||0<=r.indexOf("scatter")?(u="auto",e=4):0<=r.indexOf("stacked")?"auto"===u&&(u="inside"):"bubble"===r&&(u="inside"),n=k.point.y-t/2,"inside"!==u?(h=b.x1,g=b.x2,
0>q?(p=k.point.x-l-e-c,p<h&&(p="auto"===u?Math.max(k.point.x,h)+e+c:h+e+c,x=p+l>k.point.x)):(p=k.point.x+e+c,p>g-l-e-c&&(p="auto"===u?Math.min(k.point.x,g)-l-e-c:g-l-e-c,x=p<k.point.x))):(h=Math.max(k.bounds.x1,b.x1),Math.min(k.bounds.x2,b.x2),c=0<=r.indexOf("range")||"error"===r?0>q?Math.max(k.bounds.x1,b.x1)+l/2+e:Math.min(k.bounds.x2,b.x2)-l/2-e:(Math.max(k.bounds.x1,b.x1)+Math.min(k.bounds.x2,b.x2))/2,p=0>q?Math.max(k.point.x,c)-l/2:Math.min(k.point.x,c)-l/2,p=Math.max(p,h));"vertical"===Q&&(n+=
t);d.x=p;d.y=n;d.render(!0);D&&("inside"!==u&&(0>r.indexOf("bar")&&("error"!==r||!k.axisSwapped)&&k.point.x>b.x1&&k.point.x<b.x2||!x)&&(0>r.indexOf("column")&&("error"!==r||k.axisSwapped)&&k.point.y>b.y1&&k.point.y<b.y2||!x))&&(f.lineWidth=D,f.strokeStyle=m?m:"gray",f.setLineDash&&f.setLineDash(F(w,D)),f.beginPath(),f.moveTo(k.point.x,k.point.y),0<=r.indexOf("bar")||"error"===r&&k.axisSwapped?f.lineTo(p+(0<k.direction?0:l),n+("horizontal"===Q?t:-t)/2):0<=r.indexOf("column")||"error"===r&&!k.axisSwapped?
f.lineTo(p+l/2,n+((0<k.direction?t:-t)+("horizontal"===Q?t:-t))/2):f.lineTo(p+l/2,n+((n<k.point.y?t:-t)+("horizontal"===Q?t:-t))/2),f.stroke())}}f={source:f,dest:this.plotArea.ctx,animationCallback:O.fadeInAnimation,easingFunction:O.easing.easeInQuad,animationBase:0,startTimePercent:0.7};for(a=0;a<this._indexLabels.length;a++)k=this._indexLabels[a],d=ja("indexLabelBackgroundColor",k.dataPoint,k.dataSeries),k.dataSeries.indexLabelBackgroundColor=y(d)?v?"transparent":null:d;return f};q.prototype.renderLine=
function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=this._eventManager.ghostCtx;b.save();var e=this.plotArea;b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();for(var g=[],h,l=0;l<a.dataSeriesIndexes.length;l++){var t=a.dataSeriesIndexes[l],k=this.data[t];b.lineWidth=k.lineThickness;var r=k.dataPoints,p="solid";if(b.setLineDash){var n=F(k.nullDataLineDashType,k.lineThickness),p=k.lineDashType,d=F(p,k.lineThickness);b.setLineDash(d)}var w=
k.id;this._eventManager.objectMap[w]={objectType:"dataSeries",dataSeriesIndex:t};w=R(w);c.strokeStyle=w;c.lineWidth=0<k.lineThickness?Math.max(k.lineThickness,4):0;var w=k._colorSet,m=w=k.lineColor=k.options.lineColor?k.options.lineColor:w[0];b.strokeStyle=w;var D=!0,u=0,Q,H;b.beginPath();if(0<r.length){for(var q=!1,u=0;u<r.length;u++)if(Q=r[u].x.getTime?r[u].x.getTime():r[u].x,!(Q<a.axisX.dataInfo.viewPortMin||Q>a.axisX.dataInfo.viewPortMax&&(!k.connectNullData||!q)))if("number"!==typeof r[u].y)0<
u&&!(k.connectNullData||q||D)&&(b.stroke(),v&&c.stroke()),q=!0;else{Q=a.axisX.convertValueToPixel(Q);H=a.axisY.convertValueToPixel(r[u].y);var s=k.dataPointIds[u];this._eventManager.objectMap[s]={id:s,objectType:"dataPoint",dataSeriesIndex:t,dataPointIndex:u,x1:Q,y1:H};D||q?(!D&&k.connectNullData?(b.setLineDash&&(k.options.nullDataLineDashType||p===k.lineDashType&&k.lineDashType!==k.nullDataLineDashType)&&(b.stroke(),b.beginPath(),b.moveTo(h.x,h.y),p=k.nullDataLineDashType,b.setLineDash(n)),b.lineTo(Q,
H),v&&c.lineTo(Q,H)):(b.beginPath(),b.moveTo(Q,H),v&&(c.beginPath(),c.moveTo(Q,H))),q=D=!1):(b.lineTo(Q,H),v&&c.lineTo(Q,H),0==u%500&&(b.stroke(),b.beginPath(),b.moveTo(Q,H),v&&(c.stroke(),c.beginPath(),c.moveTo(Q,H))));h={x:Q,y:H};u<r.length-1&&(m!==(r[u].lineColor||w)||p!==(r[u].lineDashType||k.lineDashType))&&(b.stroke(),b.beginPath(),b.moveTo(Q,H),m=r[u].lineColor||w,b.strokeStyle=m,b.setLineDash&&(r[u].lineDashType?(p=r[u].lineDashType,b.setLineDash(F(p,k.lineThickness))):(p=k.lineDashType,b.setLineDash(d))));
if(0<r[u].markerSize||0<k.markerSize){var A=k.getMarkerProperties(u,Q,H,b);g.push(A);s=R(s);v&&g.push({x:Q,y:H,ctx:c,type:A.type,size:A.size,color:s,borderColor:s,borderThickness:A.borderThickness})}(r[u].indexLabel||k.indexLabel||r[u].indexLabelFormatter||k.indexLabelFormatter)&&this._indexLabels.push({chartType:"line",dataPoint:r[u],dataSeries:k,point:{x:Q,y:H},direction:0>r[u].y===a.axisY.reversed?1:-1,color:w})}b.stroke();v&&c.stroke()}}$.drawMarkers(g);v&&(f.drawImage(this._preRenderCanvas,0,
0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),c.beginPath());b.restore();b.beginPath();return{source:f,dest:this.plotArea.ctx,animationCallback:O.xClipAnimation,easingFunction:O.easing.linear,
animationBase:0}}};q.prototype.renderStepLine=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=this._eventManager.ghostCtx;b.save();var e=this.plotArea;b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();for(var g=[],h,l=0;l<a.dataSeriesIndexes.length;l++){var t=a.dataSeriesIndexes[l],k=this.data[t];b.lineWidth=k.lineThickness;var r=k.dataPoints,p="solid";if(b.setLineDash){var n=F(k.nullDataLineDashType,k.lineThickness),
p=k.lineDashType,d=F(p,k.lineThickness);b.setLineDash(d)}var w=k.id;this._eventManager.objectMap[w]={objectType:"dataSeries",dataSeriesIndex:t};w=R(w);c.strokeStyle=w;c.lineWidth=0<k.lineThickness?Math.max(k.lineThickness,4):0;var w=k._colorSet,m=w=k.lineColor=k.options.lineColor?k.options.lineColor:w[0];b.strokeStyle=w;var D=!0,u=0,Q,H;b.beginPath();if(0<r.length){for(var q=!1,u=0;u<r.length;u++)if(Q=r[u].getTime?r[u].x.getTime():r[u].x,!(Q<a.axisX.dataInfo.viewPortMin||Q>a.axisX.dataInfo.viewPortMax&&
(!k.connectNullData||!q)))if("number"!==typeof r[u].y)0<u&&!(k.connectNullData||q||D)&&(b.stroke(),v&&c.stroke()),q=!0;else{var s=H;Q=a.axisX.convertValueToPixel(Q);H=a.axisY.convertValueToPixel(r[u].y);var A=k.dataPointIds[u];this._eventManager.objectMap[A]={id:A,objectType:"dataPoint",dataSeriesIndex:t,dataPointIndex:u,x1:Q,y1:H};D||q?(!D&&k.connectNullData?(b.setLineDash&&(k.options.nullDataLineDashType||p===k.lineDashType&&k.lineDashType!==k.nullDataLineDashType)&&(b.stroke(),b.beginPath(),b.moveTo(h.x,
h.y),p=k.nullDataLineDashType,b.setLineDash(n)),b.lineTo(Q,s),b.lineTo(Q,H),v&&(c.lineTo(Q,s),c.lineTo(Q,H))):(b.beginPath(),b.moveTo(Q,H),v&&(c.beginPath(),c.moveTo(Q,H))),q=D=!1):(b.lineTo(Q,s),v&&c.lineTo(Q,s),b.lineTo(Q,H),v&&c.lineTo(Q,H),0==u%500&&(b.stroke(),b.beginPath(),b.moveTo(Q,H),v&&(c.stroke(),c.beginPath(),c.moveTo(Q,H))));h={x:Q,y:H};u<r.length-1&&(m!==(r[u].lineColor||w)||p!==(r[u].lineDashType||k.lineDashType))&&(b.stroke(),b.beginPath(),b.moveTo(Q,H),m=r[u].lineColor||w,b.strokeStyle=
m,b.setLineDash&&(r[u].lineDashType?(p=r[u].lineDashType,b.setLineDash(F(p,k.lineThickness))):(p=k.lineDashType,b.setLineDash(d))));if(0<r[u].markerSize||0<k.markerSize)s=k.getMarkerProperties(u,Q,H,b),g.push(s),A=R(A),v&&g.push({x:Q,y:H,ctx:c,type:s.type,size:s.size,color:A,borderColor:A,borderThickness:s.borderThickness});(r[u].indexLabel||k.indexLabel||r[u].indexLabelFormatter||k.indexLabelFormatter)&&this._indexLabels.push({chartType:"stepLine",dataPoint:r[u],dataSeries:k,point:{x:Q,y:H},direction:0>
r[u].y===a.axisY.reversed?1:-1,color:w})}b.stroke();v&&c.stroke()}}$.drawMarkers(g);v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),c.beginPath());
b.restore();b.beginPath();return{source:f,dest:this.plotArea.ctx,animationCallback:O.xClipAnimation,easingFunction:O.easing.linear,animationBase:0}}};q.prototype.renderSpline=function(a){function f(a){a=x(a,2);if(0<a.length){c.beginPath();v&&e.beginPath();c.moveTo(a[0].x,a[0].y);a[0].newStrokeStyle&&(c.strokeStyle=a[0].newStrokeStyle);a[0].newLineDashArray&&c.setLineDash(a[0].newLineDashArray);v&&e.moveTo(a[0].x,a[0].y);for(var b=0;b<a.length-3;b+=3)if(c.bezierCurveTo(a[b+1].x,a[b+1].y,a[b+2].x,a[b+
2].y,a[b+3].x,a[b+3].y),v&&e.bezierCurveTo(a[b+1].x,a[b+1].y,a[b+2].x,a[b+2].y,a[b+3].x,a[b+3].y),0<b&&0===b%3E3||a[b+3].newStrokeStyle||a[b+3].newLineDashArray)c.stroke(),c.beginPath(),c.moveTo(a[b+3].x,a[b+3].y),a[b+3].newStrokeStyle&&(c.strokeStyle=a[b+3].newStrokeStyle),a[b+3].newLineDashArray&&c.setLineDash(a[b+3].newLineDashArray),v&&(e.stroke(),e.beginPath(),e.moveTo(a[b+3].x,a[b+3].y));c.stroke();v&&e.stroke()}}var b=a.targetCanvasCtx||this.plotArea.ctx,c=v?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=
this._eventManager.ghostCtx;c.save();var g=this.plotArea;c.beginPath();c.rect(g.x1,g.y1,g.width,g.height);c.clip();for(var h=[],l=0;l<a.dataSeriesIndexes.length;l++){var t=a.dataSeriesIndexes[l],k=this.data[t];c.lineWidth=k.lineThickness;var r=k.dataPoints,p="solid";if(c.setLineDash){var n=F(k.nullDataLineDashType,k.lineThickness),p=k.lineDashType,d=F(p,k.lineThickness);c.setLineDash(d)}var w=k.id;this._eventManager.objectMap[w]={objectType:"dataSeries",dataSeriesIndex:t};w=R(w);e.strokeStyle=w;e.lineWidth=
0<k.lineThickness?Math.max(k.lineThickness,4):0;var w=k._colorSet,m=w=k.lineColor=k.options.lineColor?k.options.lineColor:w[0];c.strokeStyle=w;var D=0,u,Q,H=[];c.beginPath();if(0<r.length)for(Q=!1,D=0;D<r.length;D++)if(u=r[D].getTime?r[D].x.getTime():r[D].x,!(u<a.axisX.dataInfo.viewPortMin||u>a.axisX.dataInfo.viewPortMax&&(!k.connectNullData||!Q)))if("number"!==typeof r[D].y)0<D&&!Q&&(k.connectNullData?c.setLineDash&&(0<H.length&&(k.options.nullDataLineDashType||!r[D-1].lineDashType))&&(H[H.length-
1].newLineDashArray=n,p=k.nullDataLineDashType):(f(H),H=[])),Q=!0;else{u=a.axisX.convertValueToPixel(u);Q=a.axisY.convertValueToPixel(r[D].y);var s=k.dataPointIds[D];this._eventManager.objectMap[s]={id:s,objectType:"dataPoint",dataSeriesIndex:t,dataPointIndex:D,x1:u,y1:Q};H[H.length]={x:u,y:Q};D<r.length-1&&(m!==(r[D].lineColor||w)||p!==(r[D].lineDashType||k.lineDashType))&&(m=r[D].lineColor||w,H[H.length-1].newStrokeStyle=m,c.setLineDash&&(r[D].lineDashType?(p=r[D].lineDashType,H[H.length-1].newLineDashArray=
F(p,k.lineThickness)):(p=k.lineDashType,H[H.length-1].newLineDashArray=d)));if(0<r[D].markerSize||0<k.markerSize){var q=k.getMarkerProperties(D,u,Q,c);h.push(q);s=R(s);v&&h.push({x:u,y:Q,ctx:e,type:q.type,size:q.size,color:s,borderColor:s,borderThickness:q.borderThickness})}(r[D].indexLabel||k.indexLabel||r[D].indexLabelFormatter||k.indexLabelFormatter)&&this._indexLabels.push({chartType:"spline",dataPoint:r[D],dataSeries:k,point:{x:u,y:Q},direction:0>r[D].y===a.axisY.reversed?1:-1,color:w});Q=!1}f(H)}$.drawMarkers(h);
v&&(b.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(g.x1,g.y1,g.width,g.height),e.beginPath());c.restore();c.beginPath();return{source:b,dest:this.plotArea.ctx,animationCallback:O.xClipAnimation,
easingFunction:O.easing.linear,animationBase:0}}};var X=function(a,f,b,c,e,g,h,l,t,k,r,p,n){"undefined"===typeof n&&(n=1);h=h||0;l=l||"black";var d=15<c-f&&15<e-b?8:0.35*Math.min(c-f,e-b);a.beginPath();a.moveTo(f,b);a.save();a.fillStyle=g;a.globalAlpha=n;a.fillRect(f,b,c-f,e-b);a.globalAlpha=1;0<h&&(n=0===h%2?0:0.5,a.beginPath(),a.lineWidth=h,a.strokeStyle=l,a.moveTo(f,b),a.rect(f-n,b-n,c-f+2*n,e-b+2*n),a.stroke());a.restore();!0===t&&(a.save(),a.beginPath(),a.moveTo(f,b),a.lineTo(f+d,b+d),a.lineTo(c-
d,b+d),a.lineTo(c,b),a.closePath(),h=a.createLinearGradient((c+f)/2,b+d,(c+f)/2,b),h.addColorStop(0,g),h.addColorStop(1,"rgba(255, 255, 255, .4)"),a.fillStyle=h,a.fill(),a.restore());!0===k&&(a.save(),a.beginPath(),a.moveTo(f,e),a.lineTo(f+d,e-d),a.lineTo(c-d,e-d),a.lineTo(c,e),a.closePath(),h=a.createLinearGradient((c+f)/2,e-d,(c+f)/2,e),h.addColorStop(0,g),h.addColorStop(1,"rgba(255, 255, 255, .4)"),a.fillStyle=h,a.fill(),a.restore());!0===r&&(a.save(),a.beginPath(),a.moveTo(f,b),a.lineTo(f+d,b+
d),a.lineTo(f+d,e-d),a.lineTo(f,e),a.closePath(),h=a.createLinearGradient(f+d,(e+b)/2,f,(e+b)/2),h.addColorStop(0,g),h.addColorStop(1,"rgba(255, 255, 255, 0.1)"),a.fillStyle=h,a.fill(),a.restore());!0===p&&(a.save(),a.beginPath(),a.moveTo(c,b),a.lineTo(c-d,b+d),a.lineTo(c-d,e-d),a.lineTo(c,e),h=a.createLinearGradient(c-d,(e+b)/2,c,(e+b)/2),h.addColorStop(0,g),h.addColorStop(1,"rgba(255, 255, 255, 0.1)"),a.fillStyle=h,h.addColorStop(0,g),h.addColorStop(1,"rgba(255, 255, 255, 0.1)"),a.fillStyle=h,a.fill(),
a.closePath(),a.restore())};q.prototype.renderColumn=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=0,h,l,t,k=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),g=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1,r=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:Math.min(0.15*
this.width,0.9*(this.plotArea.width/a.plotType.totalDataSeries))<<0,p=a.axisX.dataInfo.minDiff;isFinite(p)||(p=0.3*Math.abs(a.axisX.range));p=this.dataPointWidth=this.options.dataPointWidth?this.dataPointWidth:0.9*(e.width*(a.axisX.logarithmic?Math.log(p)/Math.log(a.axisX.range):Math.abs(p)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&g>r&&(g=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,r));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&r<
g)&&(r=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,g));p<g&&(p=g);p>r&&(p=r);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(r=0;r<a.dataSeriesIndexes.length;r++){var n=a.dataSeriesIndexes[r],d=this.data[n],w=d.dataPoints;if(0<w.length)for(var m=5<p&&d.bevelEnabled?!0:!1,g=0;g<
w.length;g++)if(w[g].getTime?t=w[g].x.getTime():t=w[g].x,!(t<a.axisX.dataInfo.viewPortMin||t>a.axisX.dataInfo.viewPortMax)&&"number"===typeof w[g].y){h=a.axisX.convertValueToPixel(t);l=a.axisY.convertValueToPixel(w[g].y);h=a.axisX.reversed?h+a.plotType.totalDataSeries*p/2-(a.previousDataSeriesCount+r)*p<<0:h-a.plotType.totalDataSeries*p/2+(a.previousDataSeriesCount+r)*p<<0;var D=a.axisX.reversed?h-p<<0:h+p<<0,u;0<=w[g].y?u=k:(u=l,l=k);l>u&&(c=l,l=u,u=c);c=w[g].color?w[g].color:d._colorSet[g%d._colorSet.length];
X(b,h,l,D,u,c,0,null,m&&0<=w[g].y,0>w[g].y&&m,!1,!1,d.fillOpacity);c=d.dataPointIds[g];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:g,x1:h,y1:l,x2:D,y2:u};c=R(c);v&&X(this._eventManager.ghostCtx,h,l,D,u,c,0,null,!1,!1,!1,!1);(w[g].indexLabel||d.indexLabel||w[g].indexLabelFormatter||d.indexLabelFormatter)&&this._indexLabels.push({chartType:"column",dataPoint:w[g],dataSeries:d,point:{x:h+(D-h)/2,y:0>w[g].y===a.axisY.reversed?l:u},direction:0>w[g].y===
a.axisY.reversed?1:-1,bounds:{x1:h,y1:Math.min(l,u),x2:D,y2:Math.max(l,u)},color:c})}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());
b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:O.yScaleAnimation,easingFunction:O.easing.easeOutQuart,animationBase:k<a.axisY.bounds.y1?a.axisY.bounds.y1:k>a.axisY.bounds.y2?a.axisY.bounds.y2:k}}};q.prototype.renderStackedColumn=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=[],h=[],l=[],t=[],k=0,r,p,n=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),k=
this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1;r=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:0.15*this.width<<0;var d=a.axisX.dataInfo.minDiff;isFinite(d)||(d=0.3*Math.abs(a.axisX.range));d=this.options.dataPointWidth?this.dataPointWidth:0.9*(e.width*(a.axisX.logarithmic?Math.log(d)/Math.log(a.axisX.range):Math.abs(d)/Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&
k>r&&(k=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,r));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&r<k)&&(r=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,k));d<k&&(d=k);d>r&&(d=r);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var w=0;w<a.dataSeriesIndexes.length;w++){var m=
a.dataSeriesIndexes[w],D=this.data[m],u=D.dataPoints;if(0<u.length){var Q=5<d&&D.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(k=0;k<u.length;k++)if(c=u[k].x.getTime?u[k].x.getTime():u[k].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&"number"===typeof u[k].y){r=a.axisX.convertValueToPixel(c);var H=r-a.plotType.plotUnits.length*d/2+a.index*d<<0,s=H+d<<0,q;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0<u[k].y)l[c]=u[k].y+(l[c]?l[c]:
0),0<l[c]&&(p=a.axisY.convertValueToPixel(l[c]),q="undefined"!==typeof g[c]?g[c]:n,g[c]=p);else if(a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0>=u[k].y)t[c]=u[k].y+(t[c]?t[c]:0),q=a.axisY.convertValueToPixel(t[c]),p="undefined"!==typeof h[c]?h[c]:n,h[c]=q;else if(p=a.axisY.convertValueToPixel(u[k].y),0<=u[k].y){var y="undefined"!==typeof g[c]?g[c]:0;p-=y;q=n-y;g[c]=y+(q-p)}else y=h[c]?h[c]:0,q=p+y,p=n+y,h[c]=y+(q-p);c=u[k].color?u[k].color:D._colorSet[k%D._colorSet.length];
X(b,H,p,s,q,c,0,null,Q&&0<=u[k].y,0>u[k].y&&Q,!1,!1,D.fillOpacity);c=D.dataPointIds[k];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:k,x1:H,y1:p,x2:s,y2:q};c=R(c);v&&X(this._eventManager.ghostCtx,H,p,s,q,c,0,null,!1,!1,!1,!1);(u[k].indexLabel||D.indexLabel||u[k].indexLabelFormatter||D.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedColumn",dataPoint:u[k],dataSeries:D,point:{x:r,y:0<=u[k].y?p:q},direction:0>u[k].y===a.axisY.reversed?1:
-1,bounds:{x1:H,y1:Math.min(p,q),x2:s,y2:Math.max(p,q)},color:c})}}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());
b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:O.yScaleAnimation,easingFunction:O.easing.easeOutQuart,animationBase:n<a.axisY.bounds.y1?a.axisY.bounds.y1:n>a.axisY.bounds.y2?a.axisY.bounds.y2:n}}};q.prototype.renderStackedColumn100=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=[],h=[],l=[],t=[],k=0,r,p,n=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),
k=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1;r=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:0.15*this.width<<0;var d=a.axisX.dataInfo.minDiff;isFinite(d)||(d=0.3*Math.abs(a.axisX.range));d=this.options.dataPointWidth?this.dataPointWidth:0.9*(e.width*(a.axisX.logarithmic?Math.log(d)/Math.log(a.axisX.range):Math.abs(d)/Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&
k>r&&(k=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,r));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&r<k)&&(r=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,k));d<k&&(d=k);d>r&&(d=r);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var w=0;w<a.dataSeriesIndexes.length;w++){var m=
a.dataSeriesIndexes[w],D=this.data[m],u=D.dataPoints;if(0<u.length)for(var Q=5<d&&D.bevelEnabled?!0:!1,k=0;k<u.length;k++)if(c=u[k].x.getTime?u[k].x.getTime():u[k].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&"number"===typeof u[k].y){r=a.axisX.convertValueToPixel(c);p=0!==a.dataPointYSums[c]?100*(u[k].y/a.dataPointYSums[c]):0;var q=r-a.plotType.plotUnits.length*d/2+a.index*d<<0,s=q+d<<0,y;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&
0<u[k].y){l[c]=p+("undefined"!==typeof l[c]?l[c]:0);if(0>=l[c])continue;p=a.axisY.convertValueToPixel(l[c]);y=g[c]?g[c]:n;g[c]=p}else if(a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0>=u[k].y)t[c]=p+("undefined"!==typeof t[c]?t[c]:0),y=a.axisY.convertValueToPixel(t[c]),p=h[c]?h[c]:n,h[c]=y;else if(p=a.axisY.convertValueToPixel(p),0<=u[k].y){var A="undefined"!==typeof g[c]?g[c]:0;p-=A;y=n-A;a.dataSeriesIndexes.length-1===w&&1>=Math.abs(e.y1-p)&&(p=e.y1);g[c]=A+(y-p)}else A="undefined"!==
typeof h[c]?h[c]:0,y=p+A,p=n+A,a.dataSeriesIndexes.length-1===w&&1>=Math.abs(e.y2-y)&&(y=e.y2),h[c]=A+(y-p);c=u[k].color?u[k].color:D._colorSet[k%D._colorSet.length];X(b,q,p,s,y,c,0,null,Q&&0<=u[k].y,0>u[k].y&&Q,!1,!1,D.fillOpacity);c=D.dataPointIds[k];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:k,x1:q,y1:p,x2:s,y2:y};c=R(c);v&&X(this._eventManager.ghostCtx,q,p,s,y,c,0,null,!1,!1,!1,!1);(u[k].indexLabel||D.indexLabel||u[k].indexLabelFormatter||D.indexLabelFormatter)&&
this._indexLabels.push({chartType:"stackedColumn100",dataPoint:u[k],dataSeries:D,point:{x:r,y:0<=u[k].y?p:y},direction:0>u[k].y===a.axisY.reversed?1:-1,bounds:{x1:q,y1:Math.min(p,y),x2:s,y2:Math.max(p,y)},color:c})}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&
this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:O.yScaleAnimation,easingFunction:O.easing.easeOutQuart,animationBase:n<a.axisY.bounds.y1?a.axisY.bounds.y1:n>a.axisY.bounds.y2?a.axisY.bounds.y2:n}}};q.prototype.renderBar=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=
null,e=this.plotArea,g=0,h,l,t,k=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),g=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1,r=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.height,0.9*(this.plotArea.height/a.plotType.totalDataSeries))<<0,p=a.axisX.dataInfo.minDiff;isFinite(p)||(p=0.3*Math.abs(a.axisX.range));p=this.options.dataPointWidth?
this.dataPointWidth:0.9*(e.height*(a.axisX.logarithmic?Math.log(p)/Math.log(a.axisX.range):Math.abs(p)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&g>r&&(g=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,r));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&r<g)&&(r=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,g));p<g&&(p=g);p>r&&(p=r);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);
b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(r=0;r<a.dataSeriesIndexes.length;r++){var n=a.dataSeriesIndexes[r],d=this.data[n],w=d.dataPoints;if(0<w.length){var m=5<p&&d.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(g=0;g<w.length;g++)if(w[g].getTime?t=w[g].x.getTime():t=w[g].x,!(t<a.axisX.dataInfo.viewPortMin||t>a.axisX.dataInfo.viewPortMax)&&"number"===typeof w[g].y){l=a.axisX.convertValueToPixel(t);
h=a.axisY.convertValueToPixel(w[g].y);l=a.axisX.reversed?l+a.plotType.totalDataSeries*p/2-(a.previousDataSeriesCount+r)*p<<0:l-a.plotType.totalDataSeries*p/2+(a.previousDataSeriesCount+r)*p<<0;var D=a.axisX.reversed?l-p<<0:l+p<<0,u;0<=w[g].y?u=k:(u=h,h=k);c=w[g].color?w[g].color:d._colorSet[g%d._colorSet.length];X(b,u,l,h,D,c,0,null,m,!1,!1,!1,d.fillOpacity);c=d.dataPointIds[g];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:g,x1:u,y1:l,x2:h,y2:D};c=R(c);
v&&X(this._eventManager.ghostCtx,u,l,h,D,c,0,null,!1,!1,!1,!1);(w[g].indexLabel||d.indexLabel||w[g].indexLabelFormatter||d.indexLabelFormatter)&&this._indexLabels.push({chartType:"bar",dataPoint:w[g],dataSeries:d,point:{x:0<=w[g].y?h:u,y:l+(D-l)/2},direction:0>w[g].y===a.axisY.reversed?1:-1,bounds:{x1:Math.min(u,h),y1:l,x2:Math.max(u,h),y2:D},color:c})}}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,
0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:O.xScaleAnimation,easingFunction:O.easing.easeOutQuart,animationBase:k<a.axisY.bounds.x1?a.axisY.bounds.x1:k>a.axisY.bounds.x2?a.axisY.bounds.x2:
k}}};q.prototype.renderStackedBar=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=[],h=[],l=[],t=[],k=0,r,p,n=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),k=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1;p=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:0.15*this.height<<
0;var d=a.axisX.dataInfo.minDiff;isFinite(d)||(d=0.3*Math.abs(a.axisX.range));d=this.options.dataPointWidth?this.dataPointWidth:0.9*(e.height*(a.axisX.logarithmic?Math.log(d)/Math.log(a.axisX.range):Math.abs(d)/Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&k>p&&(k=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,p));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&p<k)&&(p=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,k));d<
k&&(d=k);d>p&&(d=p);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var w=0;w<a.dataSeriesIndexes.length;w++){var m=a.dataSeriesIndexes[w],D=this.data[m],u=D.dataPoints;if(0<u.length){var q=5<d&&D.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(k=0;k<u.length;k++)if(c=u[k].x.getTime?u[k].x.getTime():
u[k].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&"number"===typeof u[k].y){p=a.axisX.convertValueToPixel(c);var s=p-a.plotType.plotUnits.length*d/2+a.index*d<<0,y=s+d<<0,B;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0<u[k].y)l[c]=u[k].y+(l[c]?l[c]:0),0<l[c]&&(B=g[c]?g[c]:n,g[c]=r=a.axisY.convertValueToPixel(l[c]));else if(a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0>=u[k].y)t[c]=u[k].y+(t[c]?t[c]:0),r=h[c]?
h[c]:n,h[c]=B=a.axisY.convertValueToPixel(t[c]);else if(r=a.axisY.convertValueToPixel(u[k].y),0<=u[k].y){var A=g[c]?g[c]:0;B=n+A;r+=A;g[c]=A+(r-B)}else A=h[c]?h[c]:0,B=r-A,r=n-A,h[c]=A+(r-B);c=u[k].color?u[k].color:D._colorSet[k%D._colorSet.length];X(b,B,s,r,y,c,0,null,q,!1,!1,!1,D.fillOpacity);c=D.dataPointIds[k];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:k,x1:B,y1:s,x2:r,y2:y};c=R(c);v&&X(this._eventManager.ghostCtx,B,s,r,y,c,0,null,!1,!1,!1,!1);
(u[k].indexLabel||D.indexLabel||u[k].indexLabelFormatter||D.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedBar",dataPoint:u[k],dataSeries:D,point:{x:0<=u[k].y?r:B,y:p},direction:0>u[k].y===a.axisY.reversed?1:-1,bounds:{x1:Math.min(B,r),y1:s,x2:Math.max(B,r),y2:y},color:c})}}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,
0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:O.xScaleAnimation,easingFunction:O.easing.easeOutQuart,animationBase:n<a.axisY.bounds.x1?a.axisY.bounds.x1:n>a.axisY.bounds.x2?a.axisY.bounds.x2:n}}};q.prototype.renderStackedBar100=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,
b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=[],h=[],l=[],t=[],k=0,r,p,n=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),k=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1;p=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:0.15*this.height<<0;var d=a.axisX.dataInfo.minDiff;isFinite(d)||(d=0.3*Math.abs(a.axisX.range));d=
this.options.dataPointWidth?this.dataPointWidth:0.9*(e.height*(a.axisX.logarithmic?Math.log(d)/Math.log(a.axisX.range):Math.abs(d)/Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&k>p&&(k=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,p));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&p<k)&&(p=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,k));d<k&&(d=k);d>p&&(d=p);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();
b.rect(e.x1,e.y1,e.width,e.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var w=0;w<a.dataSeriesIndexes.length;w++){var m=a.dataSeriesIndexes[w],D=this.data[m],u=D.dataPoints;if(0<u.length){var q=5<d&&D.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(k=0;k<u.length;k++)if(c=u[k].x.getTime?u[k].x.getTime():u[k].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&"number"===
typeof u[k].y){p=a.axisX.convertValueToPixel(c);var s;s=0!==a.dataPointYSums[c]?100*(u[k].y/a.dataPointYSums[c]):0;var y=p-a.plotType.plotUnits.length*d/2+a.index*d<<0,B=y+d<<0;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0<u[k].y){l[c]=s+(l[c]?l[c]:0);if(0>=l[c])continue;s=g[c]?g[c]:n;g[c]=r=a.axisY.convertValueToPixel(l[c])}else if(a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0>=u[k].y)t[c]=s+(t[c]?t[c]:0),r=h[c]?h[c]:n,h[c]=s=a.axisY.convertValueToPixel(t[c]);
else if(r=a.axisY.convertValueToPixel(s),0<=u[k].y){var A=g[c]?g[c]:0;s=n+A;r+=A;a.dataSeriesIndexes.length-1===w&&1>=Math.abs(e.x2-r)&&(r=e.x2);g[c]=A+(r-s)}else A=h[c]?h[c]:0,s=r-A,r=n-A,a.dataSeriesIndexes.length-1===w&&1>=Math.abs(e.x1-s)&&(s=e.x1),h[c]=A+(r-s);c=u[k].color?u[k].color:D._colorSet[k%D._colorSet.length];X(b,s,y,r,B,c,0,null,q,!1,!1,!1,D.fillOpacity);c=D.dataPointIds[k];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:k,x1:s,y1:y,x2:r,
y2:B};c=R(c);v&&X(this._eventManager.ghostCtx,s,y,r,B,c,0,null,!1,!1,!1,!1);(u[k].indexLabel||D.indexLabel||u[k].indexLabelFormatter||D.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedBar100",dataPoint:u[k],dataSeries:D,point:{x:0<=u[k].y?r:s,y:p},direction:0>u[k].y===a.axisY.reversed?1:-1,bounds:{x1:Math.min(s,r),y1:y,x2:Math.max(s,r),y2:B},color:c})}}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,
0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:O.xScaleAnimation,easingFunction:O.easing.easeOutQuart,animationBase:n<a.axisY.bounds.x1?a.axisY.bounds.x1:n>a.axisY.bounds.x2?a.axisY.bounds.x2:
n}}};q.prototype.renderArea=function(a){var f,b;function c(){A&&(0<w.lineThickness&&g.stroke(),a.axisY.logarithmic||0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?B=y:0>a.axisY.viewportMaximum?B=t.y1:0<a.axisY.viewportMinimum&&(B=l.y2),g.lineTo(u,B),g.lineTo(A.x,B),g.closePath(),g.globalAlpha=w.fillOpacity,g.fill(),g.globalAlpha=1,v&&(h.lineTo(u,B),h.lineTo(A.x,B),h.closePath(),h.fill()),g.beginPath(),g.moveTo(u,s),h.beginPath(),h.moveTo(u,s),A={x:u,y:s})}var e=a.targetCanvasCtx||this.plotArea.ctx,
g=v?this._preRenderCtx:e;if(!(0>=a.dataSeriesIndexes.length)){var h=this._eventManager.ghostCtx,l=a.axisX.lineCoordinates,t=a.axisY.lineCoordinates,k=[],r=this.plotArea,p;g.save();v&&h.save();g.beginPath();g.rect(r.x1,r.y1,r.width,r.height);g.clip();v&&(h.beginPath(),h.rect(r.x1,r.y1,r.width,r.height),h.clip());for(var n=0;n<a.dataSeriesIndexes.length;n++){var d=a.dataSeriesIndexes[n],w=this.data[d],m=w.dataPoints,k=w.id;this._eventManager.objectMap[k]={objectType:"dataSeries",dataSeriesIndex:d};
k=R(k);h.fillStyle=k;k=[];f=!0;var D=0,u,s,q,y=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),B,A=null;if(0<m.length){var x=w._colorSet[D%w._colorSet.length],z=w.lineColor=w.options.lineColor||x,L=z;g.fillStyle=x;g.strokeStyle=z;g.lineWidth=w.lineThickness;b="solid";if(g.setLineDash){var K=F(w.nullDataLineDashType,w.lineThickness);b=w.lineDashType;var da=F(b,w.lineThickness);g.setLineDash(da)}for(var ca=!0;D<m.length;D++)if(q=m[D].x.getTime?m[D].x.getTime():m[D].x,!(q<
a.axisX.dataInfo.viewPortMin||q>a.axisX.dataInfo.viewPortMax&&(!w.connectNullData||!ca)))if("number"!==typeof m[D].y)w.connectNullData||(ca||f)||c(),ca=!0;else{u=a.axisX.convertValueToPixel(q);s=a.axisY.convertValueToPixel(m[D].y);f||ca?(!f&&w.connectNullData?(g.setLineDash&&(w.options.nullDataLineDashType||b===w.lineDashType&&w.lineDashType!==w.nullDataLineDashType)&&(f=u,b=s,u=p.x,s=p.y,c(),g.moveTo(p.x,p.y),u=f,s=b,A=p,b=w.nullDataLineDashType,g.setLineDash(K)),g.lineTo(u,s),v&&h.lineTo(u,s)):
(g.beginPath(),g.moveTo(u,s),v&&(h.beginPath(),h.moveTo(u,s)),A={x:u,y:s}),ca=f=!1):(g.lineTo(u,s),v&&h.lineTo(u,s),0==D%250&&c());p={x:u,y:s};D<m.length-1&&(L!==(m[D].lineColor||z)||b!==(m[D].lineDashType||w.lineDashType))&&(c(),L=m[D].lineColor||z,g.strokeStyle=L,g.setLineDash&&(m[D].lineDashType?(b=m[D].lineDashType,g.setLineDash(F(b,w.lineThickness))):(b=w.lineDashType,g.setLineDash(da))));var aa=w.dataPointIds[D];this._eventManager.objectMap[aa]={id:aa,objectType:"dataPoint",dataSeriesIndex:d,
dataPointIndex:D,x1:u,y1:s};0!==m[D].markerSize&&(0<m[D].markerSize||0<w.markerSize)&&(q=w.getMarkerProperties(D,u,s,g),k.push(q),aa=R(aa),v&&k.push({x:u,y:s,ctx:h,type:q.type,size:q.size,color:aa,borderColor:aa,borderThickness:q.borderThickness}));(m[D].indexLabel||w.indexLabel||m[D].indexLabelFormatter||w.indexLabelFormatter)&&this._indexLabels.push({chartType:"area",dataPoint:m[D],dataSeries:w,point:{x:u,y:s},direction:0>m[D].y===a.axisY.reversed?1:-1,color:x})}c();$.drawMarkers(k)}}v&&(e.drawImage(this._preRenderCanvas,
0,0,this.width,this.height),g.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&g.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&g.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),g.clearRect(r.x1,r.y1,r.width,r.height),this._eventManager.ghostCtx.restore());g.restore();return{source:e,dest:this.plotArea.ctx,animationCallback:O.xClipAnimation,easingFunction:O.easing.linear,
animationBase:0}}};q.prototype.renderSplineArea=function(a){function f(){var b=x(q,2);if(0<b.length){if(0<p.lineThickness){c.beginPath();c.moveTo(b[0].x,b[0].y);b[0].newStrokeStyle&&(c.strokeStyle=b[0].newStrokeStyle);b[0].newLineDashArray&&c.setLineDash(b[0].newLineDashArray);for(var d=0;d<b.length-3;d+=3)if(c.bezierCurveTo(b[d+1].x,b[d+1].y,b[d+2].x,b[d+2].y,b[d+3].x,b[d+3].y),v&&e.bezierCurveTo(b[d+1].x,b[d+1].y,b[d+2].x,b[d+2].y,b[d+3].x,b[d+3].y),b[d+3].newStrokeStyle||b[d+3].newLineDashArray)c.stroke(),
c.beginPath(),c.moveTo(b[d+3].x,b[d+3].y),b[d+3].newStrokeStyle&&(c.strokeStyle=b[d+3].newStrokeStyle),b[d+3].newLineDashArray&&c.setLineDash(b[d+3].newLineDashArray);c.stroke()}c.beginPath();c.moveTo(b[0].x,b[0].y);v&&(e.beginPath(),e.moveTo(b[0].x,b[0].y));for(d=0;d<b.length-3;d+=3)c.bezierCurveTo(b[d+1].x,b[d+1].y,b[d+2].x,b[d+2].y,b[d+3].x,b[d+3].y),v&&e.bezierCurveTo(b[d+1].x,b[d+1].y,b[d+2].x,b[d+2].y,b[d+3].x,b[d+3].y);a.axisY.logarithmic||0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?
u=D:0>a.axisY.viewportMaximum?u=h.y1:0<a.axisY.viewportMinimum&&(u=g.y2);s={x:b[0].x,y:b[0].y};c.lineTo(b[b.length-1].x,u);c.lineTo(s.x,u);c.closePath();c.globalAlpha=p.fillOpacity;c.fill();c.globalAlpha=1;v&&(e.lineTo(b[b.length-1].x,u),e.lineTo(s.x,u),e.closePath(),e.fill())}}var b=a.targetCanvasCtx||this.plotArea.ctx,c=v?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=this._eventManager.ghostCtx,g=a.axisX.lineCoordinates,h=a.axisY.lineCoordinates,l=[],t=this.plotArea;c.save();v&&
e.save();c.beginPath();c.rect(t.x1,t.y1,t.width,t.height);c.clip();v&&(e.beginPath(),e.rect(t.x1,t.y1,t.width,t.height),e.clip());for(var k=0;k<a.dataSeriesIndexes.length;k++){var r=a.dataSeriesIndexes[k],p=this.data[r],n=p.dataPoints,l=p.id;this._eventManager.objectMap[l]={objectType:"dataSeries",dataSeriesIndex:r};l=R(l);e.fillStyle=l;var l=[],d=0,w,m,D=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),u,s=null,q=[];if(0<n.length){var y=p._colorSet[d%p._colorSet.length],
B=p.lineColor=p.options.lineColor||y,A=B;c.fillStyle=y;c.strokeStyle=B;c.lineWidth=p.lineThickness;var z="solid";if(c.setLineDash){var la=F(p.nullDataLineDashType,p.lineThickness),z=p.lineDashType,L=F(z,p.lineThickness);c.setLineDash(L)}for(m=!1;d<n.length;d++)if(w=n[d].x.getTime?n[d].x.getTime():n[d].x,!(w<a.axisX.dataInfo.viewPortMin||w>a.axisX.dataInfo.viewPortMax&&(!p.connectNullData||!m)))if("number"!==typeof n[d].y)0<d&&!m&&(p.connectNullData?c.setLineDash&&(0<q.length&&(p.options.nullDataLineDashType||
!n[d-1].lineDashType))&&(q[q.length-1].newLineDashArray=la,z=p.nullDataLineDashType):(f(),q=[])),m=!0;else{w=a.axisX.convertValueToPixel(w);m=a.axisY.convertValueToPixel(n[d].y);var K=p.dataPointIds[d];this._eventManager.objectMap[K]={id:K,objectType:"dataPoint",dataSeriesIndex:r,dataPointIndex:d,x1:w,y1:m};q[q.length]={x:w,y:m};d<n.length-1&&(A!==(n[d].lineColor||B)||z!==(n[d].lineDashType||p.lineDashType))&&(A=n[d].lineColor||B,q[q.length-1].newStrokeStyle=A,c.setLineDash&&(n[d].lineDashType?(z=
n[d].lineDashType,q[q.length-1].newLineDashArray=F(z,p.lineThickness)):(z=p.lineDashType,q[q.length-1].newLineDashArray=L)));if(0!==n[d].markerSize&&(0<n[d].markerSize||0<p.markerSize)){var da=p.getMarkerProperties(d,w,m,c);l.push(da);K=R(K);v&&l.push({x:w,y:m,ctx:e,type:da.type,size:da.size,color:K,borderColor:K,borderThickness:da.borderThickness})}(n[d].indexLabel||p.indexLabel||n[d].indexLabelFormatter||p.indexLabelFormatter)&&this._indexLabels.push({chartType:"splineArea",dataPoint:n[d],dataSeries:p,
point:{x:w,y:m},direction:0>n[d].y===a.axisY.reversed?1:-1,color:y});m=!1}f();$.drawMarkers(l)}}v&&(b.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(t.x1,t.y1,t.width,t.height),
this._eventManager.ghostCtx.restore());c.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:O.xClipAnimation,easingFunction:O.easing.linear,animationBase:0}}};q.prototype.renderStepArea=function(a){var f,b;function c(){A&&(0<w.lineThickness&&g.stroke(),a.axisY.logarithmic||0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?B=y:0>a.axisY.viewportMaximum?B=t.y1:0<a.axisY.viewportMinimum&&(B=l.y2),g.lineTo(u,B),g.lineTo(A.x,B),g.closePath(),g.globalAlpha=w.fillOpacity,g.fill(),g.globalAlpha=
1,v&&(h.lineTo(u,B),h.lineTo(A.x,B),h.closePath(),h.fill()),g.beginPath(),g.moveTo(u,s),h.beginPath(),h.moveTo(u,s),A={x:u,y:s})}var e=a.targetCanvasCtx||this.plotArea.ctx,g=v?this._preRenderCtx:e;if(!(0>=a.dataSeriesIndexes.length)){var h=this._eventManager.ghostCtx,l=a.axisX.lineCoordinates,t=a.axisY.lineCoordinates,k=[],r=this.plotArea,p;g.save();v&&h.save();g.beginPath();g.rect(r.x1,r.y1,r.width,r.height);g.clip();v&&(h.beginPath(),h.rect(r.x1,r.y1,r.width,r.height),h.clip());for(var n=0;n<a.dataSeriesIndexes.length;n++){var d=
a.dataSeriesIndexes[n],w=this.data[d],m=w.dataPoints,k=w.id;this._eventManager.objectMap[k]={objectType:"dataSeries",dataSeriesIndex:d};k=R(k);h.fillStyle=k;k=[];f=!0;var D=0,u,s,q,y=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),B,A=null;b=!1;if(0<m.length){var x=w._colorSet[D%w._colorSet.length],z=w.lineColor=w.options.lineColor||x,L=z;g.fillStyle=x;g.strokeStyle=z;g.lineWidth=w.lineThickness;var K="solid";if(g.setLineDash){var da=F(w.nullDataLineDashType,w.lineThickness),
K=w.lineDashType,ca=F(K,w.lineThickness);g.setLineDash(ca)}for(;D<m.length;D++)if(q=m[D].x.getTime?m[D].x.getTime():m[D].x,!(q<a.axisX.dataInfo.viewPortMin||q>a.axisX.dataInfo.viewPortMax&&(!w.connectNullData||!b))){var aa=s;"number"!==typeof m[D].y?(w.connectNullData||(b||f)||c(),b=!0):(u=a.axisX.convertValueToPixel(q),s=a.axisY.convertValueToPixel(m[D].y),f||b?(!f&&w.connectNullData?(g.setLineDash&&(w.options.nullDataLineDashType||K===w.lineDashType&&w.lineDashType!==w.nullDataLineDashType)&&(f=
u,b=s,u=p.x,s=p.y,c(),g.moveTo(p.x,p.y),u=f,s=b,A=p,K=w.nullDataLineDashType,g.setLineDash(da)),g.lineTo(u,aa),g.lineTo(u,s),v&&(h.lineTo(u,aa),h.lineTo(u,s))):(g.beginPath(),g.moveTo(u,s),v&&(h.beginPath(),h.moveTo(u,s)),A={x:u,y:s}),b=f=!1):(g.lineTo(u,aa),v&&h.lineTo(u,aa),g.lineTo(u,s),v&&h.lineTo(u,s),0==D%250&&c()),p={x:u,y:s},D<m.length-1&&(L!==(m[D].lineColor||z)||K!==(m[D].lineDashType||w.lineDashType))&&(c(),L=m[D].lineColor||z,g.strokeStyle=L,g.setLineDash&&(m[D].lineDashType?(K=m[D].lineDashType,
g.setLineDash(F(K,w.lineThickness))):(K=w.lineDashType,g.setLineDash(ca)))),q=w.dataPointIds[D],this._eventManager.objectMap[q]={id:q,objectType:"dataPoint",dataSeriesIndex:d,dataPointIndex:D,x1:u,y1:s},0!==m[D].markerSize&&(0<m[D].markerSize||0<w.markerSize)&&(aa=w.getMarkerProperties(D,u,s,g),k.push(aa),q=R(q),v&&k.push({x:u,y:s,ctx:h,type:aa.type,size:aa.size,color:q,borderColor:q,borderThickness:aa.borderThickness})),(m[D].indexLabel||w.indexLabel||m[D].indexLabelFormatter||w.indexLabelFormatter)&&
this._indexLabels.push({chartType:"stepArea",dataPoint:m[D],dataSeries:w,point:{x:u,y:s},direction:0>m[D].y===a.axisY.reversed?1:-1,color:x}))}c();$.drawMarkers(k)}}v&&(e.drawImage(this._preRenderCanvas,0,0,this.width,this.height),g.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&g.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&g.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
0,0,this.width,this.height),g.clearRect(r.x1,r.y1,r.width,r.height),this._eventManager.ghostCtx.restore());g.restore();return{source:e,dest:this.plotArea.ctx,animationCallback:O.xClipAnimation,easingFunction:O.easing.linear,animationBase:0}}};q.prototype.renderStackedArea=function(a){function f(){if(!(1>t.length)){for(0<A.lineThickness&&c.stroke();0<t.length;){var a=t.pop();c.lineTo(a.x,a.y);v&&D.lineTo(a.x,a.y)}c.closePath();c.globalAlpha=A.fillOpacity;c.fill();c.globalAlpha=1;c.beginPath();v&&(D.closePath(),
D.fill(),D.beginPath());t=[]}}var b=a.targetCanvasCtx||this.plotArea.ctx,c=v?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=null,g=[],h=this.plotArea,l=[],t=[],k=[],r=[],p=0,n,d,w,m=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),D=this._eventManager.ghostCtx,u,s,q;v&&D.beginPath();c.save();v&&D.save();c.beginPath();c.rect(h.x1,h.y1,h.width,h.height);c.clip();v&&(D.beginPath(),D.rect(h.x1,h.y1,h.width,h.height),D.clip());for(var e=[],y=0;y<a.dataSeriesIndexes.length;y++){var B=
a.dataSeriesIndexes[y],A=this.data[B],x=A.dataPoints;A.dataPointIndexes=[];for(p=0;p<x.length;p++)B=x[p].x.getTime?x[p].x.getTime():x[p].x,A.dataPointIndexes[B]=p,e[B]||(k.push(B),e[B]=!0);k.sort(Pa)}for(y=0;y<a.dataSeriesIndexes.length;y++){B=a.dataSeriesIndexes[y];A=this.data[B];x=A.dataPoints;s=!0;t=[];p=A.id;this._eventManager.objectMap[p]={objectType:"dataSeries",dataSeriesIndex:B};p=R(p);D.fillStyle=p;if(0<k.length){var e=A._colorSet[0],z=A.lineColor=A.options.lineColor||e,L=z;c.fillStyle=e;
c.strokeStyle=z;c.lineWidth=A.lineThickness;q="solid";if(c.setLineDash){var K=F(A.nullDataLineDashType,A.lineThickness);q=A.lineDashType;var da=F(q,A.lineThickness);c.setLineDash(da)}for(var ca=!0,p=0;p<k.length;p++){w=k[p];var aa=null,aa=0<=A.dataPointIndexes[w]?x[A.dataPointIndexes[w]]:{x:w,y:null};if(!(w<a.axisX.dataInfo.viewPortMin||w>a.axisX.dataInfo.viewPortMax&&(!A.connectNullData||!ca)))if("number"!==typeof aa.y)A.connectNullData||(ca||s)||f(),ca=!0;else{n=a.axisX.convertValueToPixel(w);var wa=
l[w]?l[w]:0;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length){r[w]=aa.y+(r[w]?r[w]:0);if(0>=r[w]&&a.axisY.logarithmic)continue;d=a.axisY.convertValueToPixel(r[w])}else d=a.axisY.convertValueToPixel(aa.y),d-=wa;t.push({x:n,y:m-wa});l[w]=m-d;s||ca?(!s&&A.connectNullData?(c.setLineDash&&(A.options.nullDataLineDashType||q===A.lineDashType&&A.lineDashType!==A.nullDataLineDashType)&&(s=t.pop(),q=t[t.length-1],f(),c.moveTo(u.x,u.y),t.push(q),t.push(s),q=A.nullDataLineDashType,
c.setLineDash(K)),c.lineTo(n,d),v&&D.lineTo(n,d)):(c.beginPath(),c.moveTo(n,d),v&&(D.beginPath(),D.moveTo(n,d))),ca=s=!1):(c.lineTo(n,d),v&&D.lineTo(n,d),0==p%250&&(f(),c.moveTo(n,d),v&&D.moveTo(n,d),t.push({x:n,y:m-wa})));u={x:n,y:d};p<x.length-1&&(L!==(x[p].lineColor||z)||q!==(x[p].lineDashType||A.lineDashType))&&(f(),c.beginPath(),c.moveTo(n,d),t.push({x:n,y:m-wa}),L=x[p].lineColor||z,c.strokeStyle=L,c.setLineDash&&(x[p].lineDashType?(q=x[p].lineDashType,c.setLineDash(F(q,A.lineThickness))):(q=
A.lineDashType,c.setLineDash(da))));if(0<=A.dataPointIndexes[w]){var ma=A.dataPointIds[A.dataPointIndexes[w]];this._eventManager.objectMap[ma]={id:ma,objectType:"dataPoint",dataSeriesIndex:B,dataPointIndex:A.dataPointIndexes[w],x1:n,y1:d}}0<=A.dataPointIndexes[w]&&0!==aa.markerSize&&(0<aa.markerSize||0<A.markerSize)&&(w=A.getMarkerProperties(A.dataPointIndexes[w],n,d,c),g.push(w),markerColor=R(ma),v&&g.push({x:n,y:d,ctx:D,type:w.type,size:w.size,color:markerColor,borderColor:markerColor,borderThickness:w.borderThickness}));
(aa.indexLabel||A.indexLabel||aa.indexLabelFormatter||A.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedArea",dataPoint:aa,dataSeries:A,point:{x:n,y:d},direction:0>x[p].y===a.axisY.reversed?1:-1,color:e})}}f();c.moveTo(n,d);v&&D.moveTo(n,d)}delete A.dataPointIndexes}$.drawMarkers(g);v&&(b.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&
c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(h.x1,h.y1,h.width,h.height),D.restore());c.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:O.xClipAnimation,easingFunction:O.easing.linear,animationBase:0}}};q.prototype.renderStackedArea100=function(a){function f(){for(0<A.lineThickness&&c.stroke();0<t.length;){var a=t.pop();c.lineTo(a.x,a.y);v&&y.lineTo(a.x,
a.y)}c.closePath();c.globalAlpha=A.fillOpacity;c.fill();c.globalAlpha=1;c.beginPath();v&&(y.closePath(),y.fill(),y.beginPath());t=[]}var b=a.targetCanvasCtx||this.plotArea.ctx,c=v?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=null,g=this.plotArea,h=[],l=[],t=[],k=[],r=[],p=0,n,d,w,m,s,u,q=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),y=this._eventManager.ghostCtx;c.save();v&&y.save();c.beginPath();c.rect(g.x1,g.y1,g.width,g.height);c.clip();v&&(y.beginPath(),
y.rect(g.x1,g.y1,g.width,g.height),y.clip());for(var e=[],x=0;x<a.dataSeriesIndexes.length;x++){var B=a.dataSeriesIndexes[x],A=this.data[B],z=A.dataPoints;A.dataPointIndexes=[];for(p=0;p<z.length;p++)B=z[p].x.getTime?z[p].x.getTime():z[p].x,A.dataPointIndexes[B]=p,e[B]||(k.push(B),e[B]=!0);k.sort(Pa)}for(x=0;x<a.dataSeriesIndexes.length;x++){B=a.dataSeriesIndexes[x];A=this.data[B];z=A.dataPoints;s=!0;e=A.id;this._eventManager.objectMap[e]={objectType:"dataSeries",dataSeriesIndex:B};e=R(e);y.fillStyle=
e;t=[];if(0<k.length){var e=A._colorSet[p%A._colorSet.length],C=A.lineColor=A.options.lineColor||e,L=C;c.fillStyle=e;c.strokeStyle=C;c.lineWidth=A.lineThickness;u="solid";if(c.setLineDash){var K=F(A.nullDataLineDashType,A.lineThickness);u=A.lineDashType;var da=F(u,A.lineThickness);c.setLineDash(da)}for(var ca=!0,p=0;p<k.length;p++){w=k[p];var aa=null,aa=0<=A.dataPointIndexes[w]?z[A.dataPointIndexes[w]]:{x:w,y:null};if(!(w<a.axisX.dataInfo.viewPortMin||w>a.axisX.dataInfo.viewPortMax&&(!A.connectNullData||
!ca)))if("number"!==typeof aa.y)A.connectNullData||(ca||s)||f(),ca=!0;else{var wa;wa=0!==a.dataPointYSums[w]?100*(aa.y/a.dataPointYSums[w]):0;n=a.axisX.convertValueToPixel(w);var ma=l[w]?l[w]:0;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length){r[w]=wa+(r[w]?r[w]:0);if(0>=r[w]&&a.axisY.logarithmic)continue;d=a.axisY.convertValueToPixel(r[w])}else d=a.axisY.convertValueToPixel(wa),d-=ma;t.push({x:n,y:q-ma});l[w]=q-d;s||ca?(!s&&A.connectNullData?(c.setLineDash&&
(A.options.nullDataLineDashType||u===A.lineDashType&&A.lineDashType!==A.nullDataLineDashType)&&(s=t.pop(),u=t[t.length-1],f(),c.moveTo(m.x,m.y),t.push(u),t.push(s),u=A.nullDataLineDashType,c.setLineDash(K)),c.lineTo(n,d),v&&y.lineTo(n,d)):(c.beginPath(),c.moveTo(n,d),v&&(y.beginPath(),y.moveTo(n,d))),ca=s=!1):(c.lineTo(n,d),v&&y.lineTo(n,d),0==p%250&&(f(),c.moveTo(n,d),v&&y.moveTo(n,d),t.push({x:n,y:q-ma})));m={x:n,y:d};p<z.length-1&&(L!==(z[p].lineColor||C)||u!==(z[p].lineDashType||A.lineDashType))&&
(f(),c.beginPath(),c.moveTo(n,d),t.push({x:n,y:q-ma}),L=z[p].lineColor||C,c.strokeStyle=L,c.setLineDash&&(z[p].lineDashType?(u=z[p].lineDashType,c.setLineDash(F(u,A.lineThickness))):(u=A.lineDashType,c.setLineDash(da))));if(0<=A.dataPointIndexes[w]){var E=A.dataPointIds[A.dataPointIndexes[w]];this._eventManager.objectMap[E]={id:E,objectType:"dataPoint",dataSeriesIndex:B,dataPointIndex:A.dataPointIndexes[w],x1:n,y1:d}}0<=A.dataPointIndexes[w]&&0!==aa.markerSize&&(0<aa.markerSize||0<A.markerSize)&&
(w=A.getMarkerProperties(p,n,d,c),h.push(w),markerColor=R(E),v&&h.push({x:n,y:d,ctx:y,type:w.type,size:w.size,color:markerColor,borderColor:markerColor,borderThickness:w.borderThickness}));(aa.indexLabel||A.indexLabel||aa.indexLabelFormatter||A.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedArea100",dataPoint:aa,dataSeries:A,point:{x:n,y:d},direction:0>z[p].y===a.axisY.reversed?1:-1,color:e})}}f();c.moveTo(n,d);v&&y.moveTo(n,d)}delete A.dataPointIndexes}$.drawMarkers(h);v&&(b.drawImage(this._preRenderCanvas,
0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(g.x1,g.y1,g.width,g.height),y.restore());c.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:O.xClipAnimation,easingFunction:O.easing.linear,
animationBase:0}}};q.prototype.renderBubble=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=this.plotArea,e=0,g,h;b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(c.x1,c.y1,c.width,c.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.clip());for(var l=-Infinity,t=Infinity,k=0;k<a.dataSeriesIndexes.length;k++)for(var r=
a.dataSeriesIndexes[k],p=this.data[r],n=p.dataPoints,d=0,e=0;e<n.length;e++)g=n[e].getTime?g=n[e].x.getTime():g=n[e].x,g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax||"undefined"===typeof n[e].z||(d=n[e].z,d>l&&(l=d),d<t&&(t=d));for(var w=25*Math.PI,m=Math.max(Math.pow(0.25*Math.min(c.height,c.width)/2,2)*Math.PI,w),k=0;k<a.dataSeriesIndexes.length;k++)if(r=a.dataSeriesIndexes[k],p=this.data[r],n=p.dataPoints,0<n.length)for(b.strokeStyle="#4572A7 ",e=0;e<n.length;e++)if(g=n[e].getTime?
g=n[e].x.getTime():g=n[e].x,!(g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax)&&"number"===typeof n[e].y){g=a.axisX.convertValueToPixel(g);h=a.axisY.convertValueToPixel(n[e].y);var d=n[e].z,s=2*Math.max(Math.sqrt((l===t?m/2:w+(m-w)/(l-t)*(d-t))/Math.PI)<<0,1),d=p.getMarkerProperties(e,b);d.size=s;b.globalAlpha=p.fillOpacity;$.drawMarker(g,h,b,d.type,d.size,d.color,d.borderColor,d.borderThickness);b.globalAlpha=1;var u=p.dataPointIds[e];this._eventManager.objectMap[u]={id:u,objectType:"dataPoint",
dataSeriesIndex:r,dataPointIndex:e,x1:g,y1:h,size:s};s=R(u);v&&$.drawMarker(g,h,this._eventManager.ghostCtx,d.type,d.size,s,s,d.borderThickness);(n[e].indexLabel||p.indexLabel||n[e].indexLabelFormatter||p.indexLabelFormatter)&&this._indexLabels.push({chartType:"bubble",dataPoint:n[e],dataSeries:p,point:{x:g,y:h},direction:1,bounds:{x1:g-d.size/2,y1:h-d.size/2,x2:g+d.size/2,y2:h+d.size/2},color:null})}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",
a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.restore());b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:O.fadeInAnimation,easingFunction:O.easing.easeInQuad,animationBase:0}}};q.prototype.renderScatter=
function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=this.plotArea,e=0,g,h;b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(c.x1,c.y1,c.width,c.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.clip());for(var l=0;l<a.dataSeriesIndexes.length;l++){var t=a.dataSeriesIndexes[l],k=this.data[t],r=k.dataPoints;if(0<
r.length){b.strokeStyle="#4572A7 ";Math.pow(0.3*Math.min(c.height,c.width)/2,2);for(var p=0,n=0,e=0;e<r.length;e++)if(g=r[e].getTime?g=r[e].x.getTime():g=r[e].x,!(g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax)&&"number"===typeof r[e].y){g=a.axisX.convertValueToPixel(g);h=a.axisY.convertValueToPixel(r[e].y);var d=k.getMarkerProperties(e,g,h,b);b.globalAlpha=k.fillOpacity;$.drawMarker(d.x,d.y,d.ctx,d.type,d.size,d.color,d.borderColor,d.borderThickness);b.globalAlpha=1;Math.sqrt((p-
g)*(p-g)+(n-h)*(n-h))<Math.min(d.size,5)&&r.length>Math.min(this.plotArea.width,this.plotArea.height)||(p=k.dataPointIds[e],this._eventManager.objectMap[p]={id:p,objectType:"dataPoint",dataSeriesIndex:t,dataPointIndex:e,x1:g,y1:h},p=R(p),v&&$.drawMarker(d.x,d.y,this._eventManager.ghostCtx,d.type,d.size,p,p,d.borderThickness),(r[e].indexLabel||k.indexLabel||r[e].indexLabelFormatter||k.indexLabelFormatter)&&this._indexLabels.push({chartType:"scatter",dataPoint:r[e],dataSeries:k,point:{x:g,y:h},direction:1,
bounds:{x1:g-d.size/2,y1:h-d.size/2,x2:g+d.size/2,y2:h+d.size/2},color:null}),p=g,n=h)}}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.restore());
b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:O.fadeInAnimation,easingFunction:O.easing.easeInQuad,animationBase:0}}};q.prototype.renderCandlestick=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f,c=this._eventManager.ghostCtx;if(!(0>=a.dataSeriesIndexes.length)){var e=null,g=null,h=this.plotArea,l=0,t,k,r,p,n,d,e=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1,g=this.options.dataPointMaxWidth?
this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:0.015*this.width,w=a.axisX.dataInfo.minDiff;isFinite(w)||(w=0.3*Math.abs(a.axisX.range));w=this.options.dataPointWidth?this.dataPointWidth:0.7*h.width*(a.axisX.logarithmic?Math.log(w)/Math.log(a.axisX.range):Math.abs(w)/Math.abs(a.axisX.range))<<0;this.dataPointMaxWidth&&e>g&&(e=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,g));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&g<e)&&(g=Math.max(this.options.dataPointWidth?
this.dataPointWidth:-Infinity,e));w<e&&(w=e);w>g&&(w=g);b.save();v&&c.save();b.beginPath();b.rect(h.x1,h.y1,h.width,h.height);b.clip();v&&(c.beginPath(),c.rect(h.x1,h.y1,h.width,h.height),c.clip());for(var m=0;m<a.dataSeriesIndexes.length;m++){var s=a.dataSeriesIndexes[m],u=this.data[s],q=u.dataPoints;if(0<q.length)for(var H=5<w&&u.bevelEnabled?!0:!1,l=0;l<q.length;l++)if(q[l].getTime?d=q[l].x.getTime():d=q[l].x,!(d<a.axisX.dataInfo.viewPortMin||d>a.axisX.dataInfo.viewPortMax)&&!y(q[l].y)&&q[l].y.length&&
"number"===typeof q[l].y[0]&&"number"===typeof q[l].y[1]&&"number"===typeof q[l].y[2]&&"number"===typeof q[l].y[3]){t=a.axisX.convertValueToPixel(d);k=a.axisY.convertValueToPixel(q[l].y[0]);r=a.axisY.convertValueToPixel(q[l].y[1]);p=a.axisY.convertValueToPixel(q[l].y[2]);n=a.axisY.convertValueToPixel(q[l].y[3]);var x=t-w/2<<0,B=x+w<<0,g=u.options.fallingColor?u.fallingColor:u._colorSet[0],e=q[l].color?q[l].color:u._colorSet[0],A=Math.round(Math.max(1,0.15*w)),z=0===A%2?0:0.5,C=u.dataPointIds[l];this._eventManager.objectMap[C]=
{id:C,objectType:"dataPoint",dataSeriesIndex:s,dataPointIndex:l,x1:x,y1:k,x2:B,y2:r,x3:t,y3:p,x4:t,y4:n,borderThickness:A,color:e};b.strokeStyle=e;b.beginPath();b.lineWidth=A;c.lineWidth=Math.max(A,4);"candlestick"===u.type?(b.moveTo(t-z,r),b.lineTo(t-z,Math.min(k,n)),b.stroke(),b.moveTo(t-z,Math.max(k,n)),b.lineTo(t-z,p),b.stroke(),X(b,x,Math.min(k,n),B,Math.max(k,n),q[l].y[0]<=q[l].y[3]?u.risingColor:g,A,e,H,H,!1,!1,u.fillOpacity),v&&(e=R(C),c.strokeStyle=e,c.moveTo(t-z,r),c.lineTo(t-z,Math.min(k,
n)),c.stroke(),c.moveTo(t-z,Math.max(k,n)),c.lineTo(t-z,p),c.stroke(),X(c,x,Math.min(k,n),B,Math.max(k,n),e,0,null,!1,!1,!1,!1))):"ohlc"===u.type&&(b.moveTo(t-z,r),b.lineTo(t-z,p),b.stroke(),b.beginPath(),b.moveTo(t,k),b.lineTo(x,k),b.stroke(),b.beginPath(),b.moveTo(t,n),b.lineTo(B,n),b.stroke(),v&&(e=R(C),c.strokeStyle=e,c.moveTo(t-z,r),c.lineTo(t-z,p),c.stroke(),c.beginPath(),c.moveTo(t,k),c.lineTo(x,k),c.stroke(),c.beginPath(),c.moveTo(t,n),c.lineTo(B,n),c.stroke()));(q[l].indexLabel||u.indexLabel||
q[l].indexLabelFormatter||u.indexLabelFormatter)&&this._indexLabels.push({chartType:u.type,dataPoint:q[l],dataSeries:u,point:{x:x+(B-x)/2,y:a.axisY.reversed?p:r},direction:1,bounds:{x1:x,y1:Math.min(r,p),x2:B,y2:Math.max(r,p)},color:e})}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),
this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(h.x1,h.y1,h.width,h.height),c.restore());b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:O.fadeInAnimation,easingFunction:O.easing.easeInQuad,animationBase:0}}};q.prototype.renderBoxAndWhisker=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f,c=this._eventManager.ghostCtx;if(!(0>=a.dataSeriesIndexes.length)){var e=null,g=this.plotArea,
h=0,l,t,k,r,p,n,d,e=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1,h=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:0.015*this.width,w=a.axisX.dataInfo.minDiff;isFinite(w)||(w=0.3*Math.abs(a.axisX.range));w=this.options.dataPointWidth?this.dataPointWidth:0.7*g.width*(a.axisX.logarithmic?Math.log(w)/Math.log(a.axisX.range):Math.abs(w)/Math.abs(a.axisX.range))<<0;this.dataPointMaxWidth&&e>
h&&(e=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,h));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&h<e)&&(h=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,e));w<e&&(w=e);w>h&&(w=h);b.save();v&&c.save();b.beginPath();b.rect(g.x1,g.y1,g.width,g.height);b.clip();v&&(c.beginPath(),c.rect(g.x1,g.y1,g.width,g.height),c.clip());for(var m=!1,m=!!a.axisY.reversed,s=0;s<a.dataSeriesIndexes.length;s++){var u=a.dataSeriesIndexes[s],q=this.data[u],H=q.dataPoints;
if(0<H.length)for(var x=5<w&&q.bevelEnabled?!0:!1,h=0;h<H.length;h++)if(H[h].getTime?d=H[h].x.getTime():d=H[h].x,!(d<a.axisX.dataInfo.viewPortMin||d>a.axisX.dataInfo.viewPortMax)&&!y(H[h].y)&&H[h].y.length&&"number"===typeof H[h].y[0]&&"number"===typeof H[h].y[1]&&"number"===typeof H[h].y[2]&&"number"===typeof H[h].y[3]&&"number"===typeof H[h].y[4]&&5===H[h].y.length){l=a.axisX.convertValueToPixel(d);t=a.axisY.convertValueToPixel(H[h].y[0]);k=a.axisY.convertValueToPixel(H[h].y[1]);r=a.axisY.convertValueToPixel(H[h].y[2]);
p=a.axisY.convertValueToPixel(H[h].y[3]);n=a.axisY.convertValueToPixel(H[h].y[4]);var B=l-w/2<<0,A=l+w/2<<0,e=H[h].color?H[h].color:q._colorSet[0],z=Math.round(Math.max(1,0.15*w)),C=0===z%2?0:0.5,L=H[h].whiskerColor?H[h].whiskerColor:H[h].color?q.whiskerColor?q.whiskerColor:H[h].color:q.whiskerColor?q.whiskerColor:e,K="number"===typeof H[h].whiskerThickness?H[h].whiskerThickness:"number"===typeof q.options.whiskerThickness?q.whiskerThickness:z,da=H[h].whiskerDashType?H[h].whiskerDashType:q.whiskerDashType,
ca=y(H[h].whiskerLength)?y(q.options.whiskerLength)?w:q.whiskerLength:H[h].whiskerLength,ca="number"===typeof ca?0>=ca?0:ca>=w?w:ca:"string"===typeof ca?parseInt(ca)*w/100>w?w:parseInt(ca)*w/100:w,aa=1===Math.round(K)%2?0.5:0,wa=H[h].stemColor?H[h].stemColor:H[h].color?q.stemColor?q.stemColor:H[h].color:q.stemColor?q.stemColor:e,ma="number"===typeof H[h].stemThickness?H[h].stemThickness:"number"===typeof q.options.stemThickness?q.stemThickness:z,E=1===Math.round(ma)%2?0.5:0,fb=H[h].stemDashType?H[h].stemDashType:
q.stemDashType,I=H[h].lineColor?H[h].lineColor:H[h].color?q.lineColor?q.lineColor:H[h].color:q.lineColor?q.lineColor:e,J="number"===typeof H[h].lineThickness?H[h].lineThickness:"number"===typeof q.options.lineThickness?q.lineThickness:z,S=H[h].lineDashType?H[h].lineDashType:q.lineDashType,M=1===Math.round(J)%2?0.5:0,P=q.upperBoxColor,U=q.lowerBoxColor,ra=y(q.options.fillOpacity)?1:q.fillOpacity,N=q.dataPointIds[h];this._eventManager.objectMap[N]={id:N,objectType:"dataPoint",dataSeriesIndex:u,dataPointIndex:h,
x1:B,y1:t,x2:A,y2:k,x3:l,y3:r,x4:l,y4:p,y5:n,borderThickness:z,color:e,stemThickness:ma,stemColor:wa,whiskerThickness:K,whiskerLength:ca,whiskerColor:L,lineThickness:J,lineColor:I};b.save();0<ma&&(b.beginPath(),b.strokeStyle=wa,b.lineWidth=ma,b.setLineDash&&b.setLineDash(F(fb,ma)),b.moveTo(l-E,k),b.lineTo(l-E,t),b.stroke(),b.moveTo(l-E,p),b.lineTo(l-E,r),b.stroke());b.restore();c.lineWidth=Math.max(z,4);b.beginPath();X(b,B,Math.min(n,k),A,Math.max(k,n),U,0,e,m?x:!1,m?!1:x,!1,!1,ra);b.beginPath();
X(b,B,Math.min(r,n),A,Math.max(n,r),P,0,e,m?!1:x,m?x:!1,!1,!1,ra);b.beginPath();b.lineWidth=z;b.strokeStyle=e;b.rect(B-C,Math.min(k,r)-C,A-B+2*C,Math.max(k,r)-Math.min(k,r)+2*C);b.stroke();b.save();0<J&&(b.beginPath(),b.globalAlpha=1,b.setLineDash&&b.setLineDash(F(S,J)),b.strokeStyle=I,b.lineWidth=J,b.moveTo(B,n-M),b.lineTo(A,n-M),b.stroke());b.restore();b.save();0<K&&(b.beginPath(),b.setLineDash&&b.setLineDash(F(da,K)),b.strokeStyle=L,b.lineWidth=K,b.moveTo(l-ca/2<<0,p-aa),b.lineTo(l+ca/2<<0,p-aa),
b.stroke(),b.moveTo(l-ca/2<<0,t+aa),b.lineTo(l+ca/2<<0,t+aa),b.stroke());b.restore();v&&(e=R(N),c.strokeStyle=e,c.lineWidth=ma,0<ma&&(c.moveTo(l-C-E,k),c.lineTo(l-C-E,Math.max(t,p)),c.stroke(),c.moveTo(l-C-E,Math.min(t,p)),c.lineTo(l-C-E,r),c.stroke()),X(c,B,Math.max(k,r),A,Math.min(k,r),e,0,null,!1,!1,!1,!1),0<K&&(c.beginPath(),c.lineWidth=K,c.moveTo(l+ca/2,p-aa),c.lineTo(l-ca/2,p-aa),c.stroke(),c.moveTo(l+ca/2,t+aa),c.lineTo(l-ca/2,t+aa),c.stroke()));(H[h].indexLabel||q.indexLabel||H[h].indexLabelFormatter||
q.indexLabelFormatter)&&this._indexLabels.push({chartType:q.type,dataPoint:H[h],dataSeries:q,point:{x:B+(A-B)/2,y:a.axisY.reversed?t:p},direction:1,bounds:{x1:B,y1:Math.min(t,p),x2:A,y2:Math.max(t,p)},color:e})}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
0,0,this.width,this.height),b.clearRect(g.x1,g.y1,g.width,g.height),c.restore());b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:O.fadeInAnimation,easingFunction:O.easing.easeInQuad,animationBase:0}}};q.prototype.renderRangeColumn=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=0,h,l,t,g=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:
1;h=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:0.03*this.width;var k=a.axisX.dataInfo.minDiff;isFinite(k)||(k=0.3*Math.abs(a.axisX.range));k=this.options.dataPointWidth?this.dataPointWidth:0.9*(e.width*(a.axisX.logarithmic?Math.log(k)/Math.log(a.axisX.range):Math.abs(k)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&g>h&&(g=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,h));!this.dataPointMaxWidth&&
(this.dataPointMinWidth&&h<g)&&(h=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,g));k<g&&(k=g);k>h&&(k=h);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var r=0;r<a.dataSeriesIndexes.length;r++){var p=a.dataSeriesIndexes[r],n=this.data[p],d=n.dataPoints;if(0<d.length)for(var w=
5<k&&n.bevelEnabled?!0:!1,g=0;g<d.length;g++)if(d[g].getTime?t=d[g].x.getTime():t=d[g].x,!(t<a.axisX.dataInfo.viewPortMin||t>a.axisX.dataInfo.viewPortMax)&&!y(d[g].y)&&d[g].y.length&&"number"===typeof d[g].y[0]&&"number"===typeof d[g].y[1]){c=a.axisX.convertValueToPixel(t);h=a.axisY.convertValueToPixel(d[g].y[0]);l=a.axisY.convertValueToPixel(d[g].y[1]);var m=a.axisX.reversed?c+a.plotType.totalDataSeries*k/2-(a.previousDataSeriesCount+r)*k<<0:c-a.plotType.totalDataSeries*k/2+(a.previousDataSeriesCount+
r)*k<<0,q=a.axisX.reversed?m-k<<0:m+k<<0,c=d[g].color?d[g].color:n._colorSet[g%n._colorSet.length];if(h>l){var u=h;h=l;l=u}u=n.dataPointIds[g];this._eventManager.objectMap[u]={id:u,objectType:"dataPoint",dataSeriesIndex:p,dataPointIndex:g,x1:m,y1:h,x2:q,y2:l};X(b,m,h,q,l,c,0,c,w,w,!1,!1,n.fillOpacity);c=R(u);v&&X(this._eventManager.ghostCtx,m,h,q,l,c,0,null,!1,!1,!1,!1);if(d[g].indexLabel||n.indexLabel||d[g].indexLabelFormatter||n.indexLabelFormatter)this._indexLabels.push({chartType:"rangeColumn",
dataPoint:d[g],dataSeries:n,indexKeyword:0,point:{x:m+(q-m)/2,y:d[g].y[1]>=d[g].y[0]?l:h},direction:d[g].y[1]>=d[g].y[0]?-1:1,bounds:{x1:m,y1:Math.min(h,l),x2:q,y2:Math.max(h,l)},color:c}),this._indexLabels.push({chartType:"rangeColumn",dataPoint:d[g],dataSeries:n,indexKeyword:1,point:{x:m+(q-m)/2,y:d[g].y[1]>=d[g].y[0]?h:l},direction:d[g].y[1]>=d[g].y[0]?1:-1,bounds:{x1:m,y1:Math.min(h,l),x2:q,y2:Math.max(h,l)},color:c})}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation=
"source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:O.fadeInAnimation,easingFunction:O.easing.easeInQuad,animationBase:0}}};q.prototype.renderError=
function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f,c=a.axisY._position?"left"===a.axisY._position||"right"===a.axisY._position?!1:!0:!1;if(!(0>=a.dataSeriesIndexes.length)){var e=null,g=!1,h=this.plotArea,l=0,t,k,r,p,n,d,w,m=a.axisX.dataInfo.minDiff;isFinite(m)||(m=0.3*Math.abs(a.axisX.range));b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(h.x1,h.y1,h.width,h.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(h.x1,
h.y1,h.width,h.height),this._eventManager.ghostCtx.clip());for(var q=0,u=0;u<this.data.length;u++)!this.data[u].type.match(/(bar|column)/ig)||!this.data[u].visible||this.data[u].type.match(/(stacked)/ig)&&q||q++;for(var s=0;s<a.dataSeriesIndexes.length;s++){var H=a.dataSeriesIndexes[s],x=this.data[H],B=x.dataPoints,A=y(x._linkedSeries)?!1:x._linkedSeries.type.match(/(bar|column)/ig)&&x._linkedSeries.visible?!0:!1,C=0;if(A)for(e=x._linkedSeries.id,u=0;u<e;u++)!this.data[u].type.match(/(bar|column)/ig)||
!this.data[u].visible||this.data[u].type.match(/(stacked)/ig)&&C||(this.data[u].type.match(/(range)/ig)&&(g=!0),C++);e=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1;l=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:c?Math.min(0.15*this.height,0.9*(this.plotArea.height/(A?q:1)))<<0:0.3*this.width;g&&(l=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:
c?Math.min(0.15*this.height,0.9*(this.plotArea.height/(A?q:1)))<<0:0.03*this.width);u=this.options.dataPointWidth?this.dataPointWidth:0.9*((c?h.height:h.width)*(a.axisX.logarithmic?Math.log(m)/Math.log(a.axisX.range):Math.abs(m)/Math.abs(a.axisX.range))/(A?q:1))<<0;this.dataPointMaxWidth&&e>l&&(e=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,l));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&l<e)&&(l=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,e));u<e&&
(u=e);u>l&&(u=l);if(0<B.length)for(var F=x._colorSet,l=0;l<B.length;l++){var e=x.lineColor=x.options.color?x.options.color:F[0],L={color:B[l].whiskerColor?B[l].whiskerColor:B[l].color?x.whiskerColor?x.whiskerColor:B[l].color:x.whiskerColor?x.whiskerColor:e,thickness:y(B[l].whiskerThickness)?x.whiskerThickness:B[l].whiskerThickness,dashType:B[l].whiskerDashType?B[l].whiskerDashType:x.whiskerDashType,length:y(B[l].whiskerLength)?y(x.options.whiskerLength)?u:x.options.whiskerLength:B[l].whiskerLength,
trimLength:y(B[l].whiskerLength)?y(x.options.whiskerLength)?50:0:0};L.length="number"===typeof L.length?0>=L.length?0:L.length>=u?u:L.length:"string"===typeof L.length?parseInt(L.length)*u/100>u?u:parseInt(L.length)*u/100>u:u;L.thickness="number"===typeof L.thickness?0>L.thickness?0:Math.round(L.thickness):2;var K={color:B[l].stemColor?B[l].stemColor:B[l].color?x.stemColor?x.stemColor:B[l].color:x.stemColor?x.stemColor:e,thickness:B[l].stemThickness?B[l].stemThickness:x.stemThickness,dashType:B[l].stemDashType?
B[l].stemDashType:x.stemDashType};K.thickness="number"===typeof K.thickness?0>K.thickness?0:Math.round(K.thickness):2;B[l].getTime?w=B[l].x.getTime():w=B[l].x;if(!(w<a.axisX.dataInfo.viewPortMin||w>a.axisX.dataInfo.viewPortMax)&&!y(B[l].y)&&B[l].y.length&&"number"===typeof B[l].y[0]&&"number"===typeof B[l].y[1]){var da=a.axisX.convertValueToPixel(w);c?k=da:t=da;da=a.axisY.convertValueToPixel(B[l].y[0]);c?r=da:n=da;da=a.axisY.convertValueToPixel(B[l].y[1]);c?p=da:d=da;c?(n=a.axisX.reversed?k+(A?q:
1)*u/2-(A?C-1:0)*u<<0:k-(A?q:1)*u/2+(A?C-1:0)*u<<0,d=a.axisX.reversed?n-u<<0:n+u<<0):(r=a.axisX.reversed?t+(A?q:1)*u/2-(A?C-1:0)*u<<0:t-(A?q:1)*u/2+(A?C-1:0)*u<<0,p=a.axisX.reversed?r-u<<0:r+u<<0);!c&&n>d&&(da=n,n=d,d=da);c&&r>p&&(da=r,r=p,p=da);da=x.dataPointIds[l];this._eventManager.objectMap[da]={id:da,objectType:"dataPoint",dataSeriesIndex:H,dataPointIndex:l,x1:Math.min(r,p),y1:Math.min(n,d),x2:Math.max(p,r),y2:Math.max(d,n),isXYSwapped:c,stemProperties:K,whiskerProperties:L};z(b,Math.min(r,p),
Math.min(n,d),Math.max(p,r),Math.max(d,n),e,L,K,c);v&&z(this._eventManager.ghostCtx,r,n,p,d,e,L,K,c);if(B[l].indexLabel||x.indexLabel||B[l].indexLabelFormatter||x.indexLabelFormatter)this._indexLabels.push({chartType:"error",dataPoint:B[l],dataSeries:x,indexKeyword:0,point:{x:c?B[l].y[1]>=B[l].y[0]?r:p:r+(p-r)/2,y:c?n+(d-n)/2:B[l].y[1]>=B[l].y[0]?d:n},direction:B[l].y[1]>=B[l].y[0]?-1:1,bounds:{x1:c?Math.min(r,p):r,y1:c?n:Math.min(n,d),x2:c?Math.max(r,p):p,y2:c?d:Math.max(n,d)},color:e,axisSwapped:c}),
this._indexLabels.push({chartType:"error",dataPoint:B[l],dataSeries:x,indexKeyword:1,point:{x:c?B[l].y[1]>=B[l].y[0]?p:r:r+(p-r)/2,y:c?n+(d-n)/2:B[l].y[1]>=B[l].y[0]?n:d},direction:B[l].y[1]>=B[l].y[0]?1:-1,bounds:{x1:c?Math.min(r,p):r,y1:c?n:Math.min(n,d),x2:c?Math.max(r,p):p,y2:c?d:Math.max(n,d)},color:e,axisSwapped:c})}}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),
a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(h.x1,h.y1,h.width,h.height),this._eventManager.ghostCtx.restore());b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:O.fadeInAnimation,easingFunction:O.easing.easeInQuad,animationBase:0}}};q.prototype.renderRangeBar=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:
f;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=0,h,l,t,k,g=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1;h=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.height,0.9*(this.plotArea.height/a.plotType.totalDataSeries))<<0;var r=a.axisX.dataInfo.minDiff;isFinite(r)||(r=0.3*Math.abs(a.axisX.range));r=this.options.dataPointWidth?this.dataPointWidth:0.9*
(e.height*(a.axisX.logarithmic?Math.log(r)/Math.log(a.axisX.range):Math.abs(r)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&g>h&&(g=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,h));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&h<g)&&(h=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,g));r<g&&(r=g);r>h&&(r=h);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),
this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var p=0;p<a.dataSeriesIndexes.length;p++){var n=a.dataSeriesIndexes[p],d=this.data[n],w=d.dataPoints;if(0<w.length){var m=5<r&&d.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(g=0;g<w.length;g++)if(w[g].getTime?k=w[g].x.getTime():k=w[g].x,!(k<a.axisX.dataInfo.viewPortMin||k>a.axisX.dataInfo.viewPortMax)&&!y(w[g].y)&&w[g].y.length&&"number"===typeof w[g].y[0]&&"number"===typeof w[g].y[1]){h=a.axisY.convertValueToPixel(w[g].y[0]);
l=a.axisY.convertValueToPixel(w[g].y[1]);t=a.axisX.convertValueToPixel(k);t=a.axisX.reversed?t+a.plotType.totalDataSeries*r/2-(a.previousDataSeriesCount+p)*r<<0:t-a.plotType.totalDataSeries*r/2+(a.previousDataSeriesCount+p)*r<<0;var q=a.axisX.reversed?t-r<<0:t+r<<0;h>l&&(c=h,h=l,l=c);c=w[g].color?w[g].color:d._colorSet[g%d._colorSet.length];X(b,h,t,l,q,c,0,null,m,!1,!1,!1,d.fillOpacity);c=d.dataPointIds[g];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:g,
x1:h,y1:t,x2:l,y2:q};c=R(c);v&&X(this._eventManager.ghostCtx,h,t,l,q,c,0,null,!1,!1,!1,!1);if(w[g].indexLabel||d.indexLabel||w[g].indexLabelFormatter||d.indexLabelFormatter)this._indexLabels.push({chartType:"rangeBar",dataPoint:w[g],dataSeries:d,indexKeyword:0,point:{x:w[g].y[1]>=w[g].y[0]?h:l,y:t+(q-t)/2},direction:w[g].y[1]>=w[g].y[0]?-1:1,bounds:{x1:Math.min(h,l),y1:t,x2:Math.max(h,l),y2:q},color:c}),this._indexLabels.push({chartType:"rangeBar",dataPoint:w[g],dataSeries:d,indexKeyword:1,point:{x:w[g].y[1]>=
w[g].y[0]?l:h,y:t+(q-t)/2},direction:w[g].y[1]>=w[g].y[0]?1:-1,bounds:{x1:Math.min(h,l),y1:t,x2:Math.max(h,l),y2:q},color:c})}}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,
e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:O.fadeInAnimation,easingFunction:O.easing.easeInQuad,animationBase:0}}};q.prototype.renderRangeArea=function(a){function f(){if(s){var a=null;0<r.lineThickness&&c.stroke();for(var b=t.length-1;0<=b;b--)a=t[b],c.lineTo(a.x,a.y),e.lineTo(a.x,a.y);c.closePath();c.globalAlpha=r.fillOpacity;c.fill();c.globalAlpha=1;e.fill();if(0<r.lineThickness){c.beginPath();c.moveTo(a.x,
a.y);for(b=0;b<t.length;b++)a=t[b],c.lineTo(a.x,a.y);c.stroke()}c.beginPath();c.moveTo(w,m);e.beginPath();e.moveTo(w,m);s={x:w,y:m};t=[];t.push({x:w,y:q})}}var b=a.targetCanvasCtx||this.plotArea.ctx,c=v?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=this._eventManager.ghostCtx,g=[],h=this.plotArea;c.save();v&&e.save();c.beginPath();c.rect(h.x1,h.y1,h.width,h.height);c.clip();v&&(e.beginPath(),e.rect(h.x1,h.y1,h.width,h.height),e.clip());for(var l=0;l<a.dataSeriesIndexes.length;l++){var t=
[],k=a.dataSeriesIndexes[l],r=this.data[k],p=r.dataPoints,g=r.id;this._eventManager.objectMap[g]={objectType:"dataSeries",dataSeriesIndex:k};g=R(g);e.fillStyle=g;var g=[],n=!0,d=0,w,m,q,u,s=null;if(0<p.length){var y=r._colorSet[d%r._colorSet.length],x=r.lineColor=r.options.lineColor||y,B=x;c.fillStyle=y;c.strokeStyle=x;c.lineWidth=r.lineThickness;var A="solid";if(c.setLineDash){var z=F(r.nullDataLineDashType,r.lineThickness),A=r.lineDashType,C=F(A,r.lineThickness);c.setLineDash(C)}for(var L=!0;d<
p.length;d++)if(u=p[d].x.getTime?p[d].x.getTime():p[d].x,!(u<a.axisX.dataInfo.viewPortMin||u>a.axisX.dataInfo.viewPortMax&&(!r.connectNullData||!L)))if(null!==p[d].y&&p[d].y.length&&"number"===typeof p[d].y[0]&&"number"===typeof p[d].y[1]){w=a.axisX.convertValueToPixel(u);m=a.axisY.convertValueToPixel(p[d].y[0]);q=a.axisY.convertValueToPixel(p[d].y[1]);n||L?(r.connectNullData&&!n?(c.setLineDash&&(r.options.nullDataLineDashType||A===r.lineDashType&&r.lineDashType!==r.nullDataLineDashType)&&(t[t.length-
1].newLineDashArray=C,A=r.nullDataLineDashType,c.setLineDash(z)),c.lineTo(w,m),v&&e.lineTo(w,m),t.push({x:w,y:q})):(c.beginPath(),c.moveTo(w,m),s={x:w,y:m},t=[],t.push({x:w,y:q}),v&&(e.beginPath(),e.moveTo(w,m))),L=n=!1):(c.lineTo(w,m),t.push({x:w,y:q}),v&&e.lineTo(w,m),0==d%250&&f());u=r.dataPointIds[d];this._eventManager.objectMap[u]={id:u,objectType:"dataPoint",dataSeriesIndex:k,dataPointIndex:d,x1:w,y1:m,y2:q};d<p.length-1&&(B!==(p[d].lineColor||x)||A!==(p[d].lineDashType||r.lineDashType))&&(f(),
B=p[d].lineColor||x,t[t.length-1].newStrokeStyle=B,c.strokeStyle=B,c.setLineDash&&(p[d].lineDashType?(A=p[d].lineDashType,t[t.length-1].newLineDashArray=F(A,r.lineThickness),c.setLineDash(t[t.length-1].newLineDashArray)):(A=r.lineDashType,t[t.length-1].newLineDashArray=C,c.setLineDash(C))));if(0!==p[d].markerSize&&(0<p[d].markerSize||0<r.markerSize)){var K=r.getMarkerProperties(d,w,q,c);g.push(K);var da=R(u);v&&g.push({x:w,y:q,ctx:e,type:K.type,size:K.size,color:da,borderColor:da,borderThickness:K.borderThickness});
K=r.getMarkerProperties(d,w,m,c);g.push(K);da=R(u);v&&g.push({x:w,y:m,ctx:e,type:K.type,size:K.size,color:da,borderColor:da,borderThickness:K.borderThickness})}if(p[d].indexLabel||r.indexLabel||p[d].indexLabelFormatter||r.indexLabelFormatter)this._indexLabels.push({chartType:"rangeArea",dataPoint:p[d],dataSeries:r,indexKeyword:0,point:{x:w,y:m},direction:p[d].y[0]>p[d].y[1]===a.axisY.reversed?-1:1,color:y}),this._indexLabels.push({chartType:"rangeArea",dataPoint:p[d],dataSeries:r,indexKeyword:1,point:{x:w,
y:q},direction:p[d].y[0]>p[d].y[1]===a.axisY.reversed?1:-1,color:y})}else L||n||f(),L=!0;f();$.drawMarkers(g)}}v&&(b.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(h.x1,h.y1,
h.width,h.height),this._eventManager.ghostCtx.restore());c.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:O.xClipAnimation,easingFunction:O.easing.linear,animationBase:0}}};q.prototype.renderRangeSplineArea=function(a){function f(a,b){var d=x(m,2);if(0<d.length){if(0<k.lineThickness){c.strokeStyle=b;c.setLineDash&&c.setLineDash(a);c.beginPath();c.moveTo(d[0].x,d[0].y);for(var f=0;f<d.length-3;f+=3){if(d[f].newStrokeStyle||d[f].newLineDashArray)c.stroke(),c.beginPath(),c.moveTo(d[f].x,
d[f].y),d[f].newStrokeStyle&&(c.strokeStyle=d[f].newStrokeStyle),d[f].newLineDashArray&&c.setLineDash(d[f].newLineDashArray);c.bezierCurveTo(d[f+1].x,d[f+1].y,d[f+2].x,d[f+2].y,d[f+3].x,d[f+3].y)}c.stroke()}c.beginPath();c.moveTo(d[0].x,d[0].y);v&&(e.beginPath(),e.moveTo(d[0].x,d[0].y));for(f=0;f<d.length-3;f+=3)c.bezierCurveTo(d[f+1].x,d[f+1].y,d[f+2].x,d[f+2].y,d[f+3].x,d[f+3].y),v&&e.bezierCurveTo(d[f+1].x,d[f+1].y,d[f+2].x,d[f+2].y,d[f+3].x,d[f+3].y);d=x(q,2);c.lineTo(q[q.length-1].x,q[q.length-
1].y);for(f=d.length-1;2<f;f-=3)c.bezierCurveTo(d[f-1].x,d[f-1].y,d[f-2].x,d[f-2].y,d[f-3].x,d[f-3].y),v&&e.bezierCurveTo(d[f-1].x,d[f-1].y,d[f-2].x,d[f-2].y,d[f-3].x,d[f-3].y);c.closePath();c.globalAlpha=k.fillOpacity;c.fill();v&&(e.closePath(),e.fill());c.globalAlpha=1;if(0<k.lineThickness){c.strokeStyle=b;c.setLineDash&&c.setLineDash(a);c.beginPath();c.moveTo(d[0].x,d[0].y);for(var g=f=0;f<d.length-3;f+=3,g++){if(m[g].newStrokeStyle||m[g].newLineDashArray)c.stroke(),c.beginPath(),c.moveTo(d[f].x,
d[f].y),m[g].newStrokeStyle&&(c.strokeStyle=m[g].newStrokeStyle),m[g].newLineDashArray&&c.setLineDash(m[g].newLineDashArray);c.bezierCurveTo(d[f+1].x,d[f+1].y,d[f+2].x,d[f+2].y,d[f+3].x,d[f+3].y)}c.stroke()}c.beginPath()}}var b=a.targetCanvasCtx||this.plotArea.ctx,c=v?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=this._eventManager.ghostCtx,g=[],h=this.plotArea;c.save();v&&e.save();c.beginPath();c.rect(h.x1,h.y1,h.width,h.height);c.clip();v&&(e.beginPath(),e.rect(h.x1,h.y1,h.width,
h.height),e.clip());for(var l=0;l<a.dataSeriesIndexes.length;l++){var t=a.dataSeriesIndexes[l],k=this.data[t],r=k.dataPoints,g=k.id;this._eventManager.objectMap[g]={objectType:"dataSeries",dataSeriesIndex:t};g=R(g);e.fillStyle=g;var g=[],p=0,n,d,w,m=[],q=[];if(0<r.length){var u=k._colorSet[p%k._colorSet.length],s=k.lineColor=k.options.lineColor||u,y=s;c.fillStyle=u;c.lineWidth=k.lineThickness;var z="solid",B;if(c.setLineDash){var A=F(k.nullDataLineDashType,k.lineThickness),z=k.lineDashType;B=F(z,
k.lineThickness)}for(d=!1;p<r.length;p++)if(n=r[p].x.getTime?r[p].x.getTime():r[p].x,!(n<a.axisX.dataInfo.viewPortMin||n>a.axisX.dataInfo.viewPortMax&&(!k.connectNullData||!d)))if(null!==r[p].y&&r[p].y.length&&"number"===typeof r[p].y[0]&&"number"===typeof r[p].y[1]){n=a.axisX.convertValueToPixel(n);d=a.axisY.convertValueToPixel(r[p].y[0]);w=a.axisY.convertValueToPixel(r[p].y[1]);var C=k.dataPointIds[p];this._eventManager.objectMap[C]={id:C,objectType:"dataPoint",dataSeriesIndex:t,dataPointIndex:p,
x1:n,y1:d,y2:w};m[m.length]={x:n,y:d};q[q.length]={x:n,y:w};p<r.length-1&&(y!==(r[p].lineColor||s)||z!==(r[p].lineDashType||k.lineDashType))&&(y=r[p].lineColor||s,m[m.length-1].newStrokeStyle=y,c.setLineDash&&(r[p].lineDashType?(z=r[p].lineDashType,m[m.length-1].newLineDashArray=F(z,k.lineThickness)):(z=k.lineDashType,m[m.length-1].newLineDashArray=B)));if(0!==r[p].markerSize&&(0<r[p].markerSize||0<k.markerSize)){var la=k.getMarkerProperties(p,n,d,c);g.push(la);var L=R(C);v&&g.push({x:n,y:d,ctx:e,
type:la.type,size:la.size,color:L,borderColor:L,borderThickness:la.borderThickness});la=k.getMarkerProperties(p,n,w,c);g.push(la);L=R(C);v&&g.push({x:n,y:w,ctx:e,type:la.type,size:la.size,color:L,borderColor:L,borderThickness:la.borderThickness})}if(r[p].indexLabel||k.indexLabel||r[p].indexLabelFormatter||k.indexLabelFormatter)this._indexLabels.push({chartType:"rangeSplineArea",dataPoint:r[p],dataSeries:k,indexKeyword:0,point:{x:n,y:d},direction:r[p].y[0]<=r[p].y[1]?-1:1,color:u}),this._indexLabels.push({chartType:"rangeSplineArea",
dataPoint:r[p],dataSeries:k,indexKeyword:1,point:{x:n,y:w},direction:r[p].y[0]<=r[p].y[1]?1:-1,color:u});d=!1}else 0<p&&!d&&(k.connectNullData?c.setLineDash&&(0<m.length&&(k.options.nullDataLineDashType||!r[p-1].lineDashType))&&(m[m.length-1].newLineDashArray=A,z=k.nullDataLineDashType):(f(B,s),m=[],q=[])),d=!0;f(B,s);$.drawMarkers(g)}}v&&(b.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,this.width,
this.height),a.axisY.maskCanvas&&c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(h.x1,h.y1,h.width,h.height),this._eventManager.ghostCtx.restore());c.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:O.xClipAnimation,easingFunction:O.easing.linear,animationBase:0}}};q.prototype.renderWaterfall=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:
f;if(!(0>=a.dataSeriesIndexes.length)){var c=this._eventManager.ghostCtx,e=null,g=this.plotArea,h=0,l,t,k,r,p=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),h=this.options.dataPointMinWidth?this.dataPointMinWidth:this.options.dataPointWidth?this.dataPointWidth:1;t=this.options.dataPointMaxWidth?this.dataPointMaxWidth:this.options.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.width,0.9*(this.plotArea.width/a.plotType.totalDataSeries))<<0;var n=a.axisX.dataInfo.minDiff;
isFinite(n)||(n=0.3*Math.abs(a.axisX.range));n=this.options.dataPointWidth?this.dataPointWidth:0.6*(g.width*(a.axisX.logarithmic?Math.log(n)/Math.log(a.axisX.range):Math.abs(n)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&h>t&&(h=Math.min(this.options.dataPointWidth?this.dataPointWidth:Infinity,t));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&t<h)&&(t=Math.max(this.options.dataPointWidth?this.dataPointWidth:-Infinity,h));n<h&&(n=h);n>t&&(n=t);b.save();v&&this._eventManager.ghostCtx.save();
b.beginPath();b.rect(g.x1,g.y1,g.width,g.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(g.x1,g.y1,g.width,g.height),this._eventManager.ghostCtx.clip());for(var d=0;d<a.dataSeriesIndexes.length;d++){var w=a.dataSeriesIndexes[d],m=this.data[w],q=m.dataPoints,e=m._colorSet[0];m.risingColor=m.options.risingColor?m.options.risingColor:e;m.fallingColor=m.options.fallingColor?m.options.fallingColor:"#e40a0a";var u="number"===typeof m.options.lineThickness?Math.round(m.lineThickness):
1,s=1===Math.round(u)%2?-0.5:0;if(0<q.length)for(var y=5<n&&m.bevelEnabled?!0:!1,x=!1,z=null,A=null,h=0;h<q.length;h++)if(q[h].getTime?r=q[h].x.getTime():r=q[h].x,"number"!==typeof q[h].y){if(0<h&&!x&&m.connectNullData)var C=m.options.nullDataLineDashType||!q[h-1].lineDashType?m.nullDataLineDashType:q[h-1].lineDashType;x=!0}else{l=a.axisX.convertValueToPixel(r);t=0===m.dataPointEOs[h].cumulativeSum?p:a.axisY.convertValueToPixel(m.dataPointEOs[h].cumulativeSum);k=0===m.dataPointEOs[h].cumulativeSumYStartValue?
p:a.axisY.convertValueToPixel(m.dataPointEOs[h].cumulativeSumYStartValue);l=a.axisX.reversed?l+a.plotType.totalDataSeries*n/2-(a.previousDataSeriesCount+d)*n<<0:l-a.plotType.totalDataSeries*n/2+(a.previousDataSeriesCount+d)*n<<0;var la=a.axisX.reversed?l-n<<0:l+n<<0;t>k&&(e=t,t=k,k=e);a.axisY.reversed&&(e=t,t=k,k=e);e=m.dataPointIds[h];this._eventManager.objectMap[e]={id:e,objectType:"dataPoint",dataSeriesIndex:w,dataPointIndex:h,x1:l,y1:t,x2:la,y2:k};var L=q[h].color?q[h].color:0<q[h].y?m.risingColor:
m.fallingColor;X(b,l,t,la,k,L,0,L,y,y,!1,!1,m.fillOpacity);e=R(e);v&&X(this._eventManager.ghostCtx,l,t,la,k,e,0,null,!1,!1,!1,!1);var K,L=l;K="undefined"!==typeof q[h].isIntermediateSum&&!0===q[h].isIntermediateSum||"undefined"!==typeof q[h].isCumulativeSum&&!0===q[h].isCumulativeSum?0<q[h].y?t:k:0<q[h].y?k:t;0<h&&z&&(!x||m.connectNullData)&&(x&&b.setLineDash&&b.setLineDash(F(C,u)),b.beginPath(),b.moveTo(z,A-s),b.lineTo(L,K-s),0<u&&b.stroke(),v&&(c.beginPath(),c.moveTo(z,A-s),c.lineTo(L,K-s),0<u&&
c.stroke()));x=!1;z=la;A=0<q[h].y?t:k;L=q[h].lineDashType?q[h].lineDashType:m.options.lineDashType?m.options.lineDashType:"shortDash";b.strokeStyle=q[h].lineColor?q[h].lineColor:m.options.lineColor?m.options.lineColor:"#9e9e9e";b.lineWidth=u;b.setLineDash&&(L=F(L,u),b.setLineDash(L));(q[h].indexLabel||m.indexLabel||q[h].indexLabelFormatter||m.indexLabelFormatter)&&this._indexLabels.push({chartType:"waterfall",dataPoint:q[h],dataSeries:m,point:{x:l+(la-l)/2,y:0<=q[h].y?t:k},direction:0>q[h].y===a.axisY.reversed?
1:-1,bounds:{x1:l,y1:Math.min(t,k),x2:la,y2:Math.max(t,k)},color:e})}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(g.x1,g.y1,g.width,g.height),this._eventManager.ghostCtx.restore());
b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:O.fadeInAnimation,easingFunction:O.easing.easeInQuad,animationBase:0}}};var pa=function(a,f,b,c,e,g,h,l,t){if(!(0>b)){"undefined"===typeof l&&(l=1);if(!v){var k=Number((h%(2*Math.PI)).toFixed(8));Number((g%(2*Math.PI)).toFixed(8))===k&&(h-=1E-4)}a.save();a.globalAlpha=l;"pie"===e?(a.beginPath(),a.moveTo(f.x,f.y),a.arc(f.x,f.y,b,g,h,!1),a.fillStyle=c,a.strokeStyle="white",a.lineWidth=2,a.closePath(),a.fill()):"doughnut"===e&&(a.beginPath(),
a.arc(f.x,f.y,b,g,h,!1),0<=t&&a.arc(f.x,f.y,t*b,h,g,!0),a.closePath(),a.fillStyle=c,a.strokeStyle="white",a.lineWidth=2,a.fill());a.globalAlpha=1;a.restore()}};q.prototype.renderPie=function(a){function f(){if(k&&r){for(var a=0,b=0,c=0,e=0,f=0;f<r.length;f++){var g=r[f],h=k.dataPointIds[f];d[f].id=h;d[f].objectType="dataPoint";d[f].dataPointIndex=f;d[f].dataSeriesIndex=0;var l=d[f],p={percent:null,total:null},m=null,p=t.getPercentAndTotal(k,g);if(k.indexLabelFormatter||g.indexLabelFormatter)m={chart:t.options,
dataSeries:k,dataPoint:g,total:p.total,percent:p.percent};p=g.indexLabelFormatter?g.indexLabelFormatter(m):g.indexLabel?t.replaceKeywordsWithValue(g.indexLabel,g,k,f):k.indexLabelFormatter?k.indexLabelFormatter(m):k.indexLabel?t.replaceKeywordsWithValue(k.indexLabel,g,k,f):g.label?g.label:"";t._eventManager.objectMap[h]=l;l.center={x:x.x,y:x.y};l.y=g.y;l.radius=A;l.percentInnerRadius=O;l.indexLabelText=p;l.indexLabelPlacement=k.indexLabelPlacement;l.indexLabelLineColor=g.indexLabelLineColor?g.indexLabelLineColor:
k.options.indexLabelLineColor?k.options.indexLabelLineColor:g.color?g.color:k._colorSet[f%k._colorSet.length];l.indexLabelLineThickness=y(g.indexLabelLineThickness)?k.indexLabelLineThickness:g.indexLabelLineThickness;l.indexLabelLineDashType=g.indexLabelLineDashType?g.indexLabelLineDashType:k.indexLabelLineDashType;l.indexLabelFontColor=g.indexLabelFontColor?g.indexLabelFontColor:k.indexLabelFontColor;l.indexLabelFontStyle=g.indexLabelFontStyle?g.indexLabelFontStyle:k.indexLabelFontStyle;l.indexLabelFontWeight=
g.indexLabelFontWeight?g.indexLabelFontWeight:k.indexLabelFontWeight;l.indexLabelFontSize=y(g.indexLabelFontSize)?k.indexLabelFontSize:g.indexLabelFontSize;l.indexLabelFontFamily=g.indexLabelFontFamily?g.indexLabelFontFamily:k.indexLabelFontFamily;l.indexLabelBackgroundColor=g.indexLabelBackgroundColor?g.indexLabelBackgroundColor:k.options.indexLabelBackgroundColor?k.options.indexLabelBackgroundColor:k.indexLabelBackgroundColor;l.indexLabelMaxWidth=g.indexLabelMaxWidth?g.indexLabelMaxWidth:k.indexLabelMaxWidth?
k.indexLabelMaxWidth:0.33*n.width;l.indexLabelWrap="undefined"!==typeof g.indexLabelWrap?g.indexLabelWrap:k.indexLabelWrap;l.startAngle=0===f?k.startAngle?k.startAngle/180*Math.PI:0:d[f-1].endAngle;l.startAngle=(l.startAngle+2*Math.PI)%(2*Math.PI);l.endAngle=l.startAngle+2*Math.PI/z*Math.abs(g.y);g=(l.endAngle+l.startAngle)/2;g=(g+2*Math.PI)%(2*Math.PI);l.midAngle=g;if(l.midAngle>Math.PI/2-u&&l.midAngle<Math.PI/2+u){if(0===a||d[c].midAngle>l.midAngle)c=f;a++}else if(l.midAngle>3*Math.PI/2-u&&l.midAngle<
3*Math.PI/2+u){if(0===b||d[e].midAngle>l.midAngle)e=f;b++}l.hemisphere=g>Math.PI/2&&g<=3*Math.PI/2?"left":"right";l.indexLabelTextBlock=new ka(t.plotArea.ctx,{fontSize:l.indexLabelFontSize,fontFamily:l.indexLabelFontFamily,fontColor:l.indexLabelFontColor,fontStyle:l.indexLabelFontStyle,fontWeight:l.indexLabelFontWeight,horizontalAlign:"left",backgroundColor:l.indexLabelBackgroundColor,maxWidth:l.indexLabelMaxWidth,maxHeight:l.indexLabelWrap?5*l.indexLabelFontSize:1.5*l.indexLabelFontSize,text:l.indexLabelText,
padding:0,textBaseline:"top"});l.indexLabelTextBlock.measureText()}h=g=0;p=!1;for(f=0;f<r.length;f++)l=d[(c+f)%r.length],1<a&&(l.midAngle>Math.PI/2-u&&l.midAngle<Math.PI/2+u)&&(g<=a/2&&!p?(l.hemisphere="right",g++):(l.hemisphere="left",p=!0));p=!1;for(f=0;f<r.length;f++)l=d[(e+f)%r.length],1<b&&(l.midAngle>3*Math.PI/2-u&&l.midAngle<3*Math.PI/2+u)&&(h<=b/2&&!p?(l.hemisphere="left",h++):(l.hemisphere="right",p=!0))}}function b(a){var b=t.plotArea.ctx;b.clearRect(n.x1,n.y1,n.width,n.height);b.fillStyle=
t.backgroundColor;b.fillRect(n.x1,n.y1,n.width,n.height);for(b=0;b<r.length;b++){var c=d[b].startAngle,e=d[b].endAngle;if(e>c){var f=0.07*A*Math.cos(d[b].midAngle),g=0.07*A*Math.sin(d[b].midAngle),h=!1;if(r[b].exploded){if(1E-9<Math.abs(d[b].center.x-(x.x+f))||1E-9<Math.abs(d[b].center.y-(x.y+g)))d[b].center.x=x.x+f*a,d[b].center.y=x.y+g*a,h=!0}else if(0<Math.abs(d[b].center.x-x.x)||0<Math.abs(d[b].center.y-x.y))d[b].center.x=x.x+f*(1-a),d[b].center.y=x.y+g*(1-a),h=!0;h&&(f={},f.dataSeries=k,f.dataPoint=
k.dataPoints[b],f.index=b,t.toolTip.highlightObjects([f]));pa(t.plotArea.ctx,d[b].center,d[b].radius,r[b].color?r[b].color:k._colorSet[b%k._colorSet.length],k.type,c,e,k.fillOpacity,d[b].percentInnerRadius)}}a=t.plotArea.ctx;a.save();a.fillStyle="black";a.strokeStyle="grey";a.textBaseline="middle";a.lineJoin="round";for(b=b=0;b<r.length;b++)c=d[b],c.indexLabelText&&(c.indexLabelTextBlock.y-=c.indexLabelTextBlock.height/2,e=0,e="left"===c.hemisphere?"inside"!==k.indexLabelPlacement?-(c.indexLabelTextBlock.width+
p):-c.indexLabelTextBlock.width/2:"inside"!==k.indexLabelPlacement?p:-c.indexLabelTextBlock.width/2,c.indexLabelTextBlock.x+=e,c.indexLabelTextBlock.render(!0),c.indexLabelTextBlock.x-=e,c.indexLabelTextBlock.y+=c.indexLabelTextBlock.height/2,"inside"!==c.indexLabelPlacement&&0<c.indexLabelLineThickness&&(e=c.center.x+A*Math.cos(c.midAngle),f=c.center.y+A*Math.sin(c.midAngle),a.strokeStyle=c.indexLabelLineColor,a.lineWidth=c.indexLabelLineThickness,a.setLineDash&&a.setLineDash(F(c.indexLabelLineDashType,
c.indexLabelLineThickness)),a.beginPath(),a.moveTo(e,f),a.lineTo(c.indexLabelTextBlock.x,c.indexLabelTextBlock.y),a.lineTo(c.indexLabelTextBlock.x+("left"===c.hemisphere?-p:p),c.indexLabelTextBlock.y),a.stroke()),a.lineJoin="miter");a.save()}function c(a,b){var c=0,c=a.indexLabelTextBlock.y-a.indexLabelTextBlock.height/2,d=a.indexLabelTextBlock.y+a.indexLabelTextBlock.height/2,e=b.indexLabelTextBlock.y-b.indexLabelTextBlock.height/2,f=b.indexLabelTextBlock.y+b.indexLabelTextBlock.height/2;return c=
b.indexLabelTextBlock.y>a.indexLabelTextBlock.y?e-d:c-f}function e(a){for(var b=null,e=1;e<r.length;e++)if(b=(a+e+d.length)%d.length,d[b].hemisphere!==d[a].hemisphere){b=null;break}else if(d[b].indexLabelText&&b!==a&&(0>c(d[b],d[a])||("right"===d[a].hemisphere?d[b].indexLabelTextBlock.y>=d[a].indexLabelTextBlock.y:d[b].indexLabelTextBlock.y<=d[a].indexLabelTextBlock.y)))break;else b=null;return b}function g(a,b,f){f=(f||0)+1;if(1E3<f)return 0;b=b||0;var k=0,h=x.y-1*q,n=x.y+1*q;if(0<=a&&a<r.length){var l=
d[a];if(0>b&&l.indexLabelTextBlock.y<h||0<b&&l.indexLabelTextBlock.y>n)return 0;var t=0,p=0,p=t=t=0;0>b?l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2>h&&l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2+b<h&&(b=-(h-(l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2+b))):l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2<h&&l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2+b>n&&(b=l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2+b-n);b=l.indexLabelTextBlock.y+b;h=
0;h="right"===l.hemisphere?x.x+Math.sqrt(Math.pow(q,2)-Math.pow(b-x.y,2)):x.x-Math.sqrt(Math.pow(q,2)-Math.pow(b-x.y,2));p=x.x+A*Math.cos(l.midAngle);t=x.y+A*Math.sin(l.midAngle);t=Math.sqrt(Math.pow(h-p,2)+Math.pow(b-t,2));p=Math.acos(A/q);t=Math.acos((q*q+A*A-t*t)/(2*A*q));b=t<p?b-l.indexLabelTextBlock.y:0;h=null;for(n=1;n<r.length;n++)if(h=(a-n+d.length)%d.length,d[h].hemisphere!==d[a].hemisphere){h=null;break}else if(d[h].indexLabelText&&d[h].hemisphere===d[a].hemisphere&&h!==a&&(0>c(d[h],d[a])||
("right"===d[a].hemisphere?d[h].indexLabelTextBlock.y<=d[a].indexLabelTextBlock.y:d[h].indexLabelTextBlock.y>=d[a].indexLabelTextBlock.y)))break;else h=null;p=h;t=e(a);n=h=0;0>b?(n="right"===l.hemisphere?p:t,k=b,null!==n&&(p=-b,b=l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2-(d[n].indexLabelTextBlock.y+d[n].indexLabelTextBlock.height/2),b-p<m&&(h=-p,n=g(n,h,f+1),+n.toFixed(v)>+h.toFixed(v)&&(k=b>m?-(b-m):-(p-(n-h)))))):0<b&&(n="right"===l.hemisphere?t:p,k=b,null!==n&&(p=b,b=d[n].indexLabelTextBlock.y-
d[n].indexLabelTextBlock.height/2-(l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2),b-p<m&&(h=p,n=g(n,h,f+1),+n.toFixed(v)<+h.toFixed(v)&&(k=b>m?b-m:p-(h-n)))));k&&(f=l.indexLabelTextBlock.y+k,b=0,b="right"===l.hemisphere?x.x+Math.sqrt(Math.pow(q,2)-Math.pow(f-x.y,2)):x.x-Math.sqrt(Math.pow(q,2)-Math.pow(f-x.y,2)),l.midAngle>Math.PI/2-u&&l.midAngle<Math.PI/2+u?(h=(a-1+d.length)%d.length,h=d[h],a=d[(a+1+d.length)%d.length],"left"===l.hemisphere&&"right"===h.hemisphere&&b>h.indexLabelTextBlock.x?
b=h.indexLabelTextBlock.x-15:"right"===l.hemisphere&&("left"===a.hemisphere&&b<a.indexLabelTextBlock.x)&&(b=a.indexLabelTextBlock.x+15)):l.midAngle>3*Math.PI/2-u&&l.midAngle<3*Math.PI/2+u&&(h=(a-1+d.length)%d.length,h=d[h],a=d[(a+1+d.length)%d.length],"right"===l.hemisphere&&"left"===h.hemisphere&&b<h.indexLabelTextBlock.x?b=h.indexLabelTextBlock.x+15:"left"===l.hemisphere&&("right"===a.hemisphere&&b>a.indexLabelTextBlock.x)&&(b=a.indexLabelTextBlock.x-15)),l.indexLabelTextBlock.y=f,l.indexLabelTextBlock.x=
b,l.indexLabelAngle=Math.atan2(l.indexLabelTextBlock.y-x.y,l.indexLabelTextBlock.x-x.x))}return k}function h(){var a=t.plotArea.ctx;a.fillStyle="grey";a.strokeStyle="grey";a.font="16px Arial";a.textBaseline="middle";for(var b=a=0,f=0,h=!0,b=0;10>b&&(1>b||0<f);b++){if(k.radius||!k.radius&&"undefined"!==typeof k.innerRadius&&null!==k.innerRadius&&A-f<=C)h=!1;h&&(A-=f);f=0;if("inside"!==k.indexLabelPlacement){q=A*s;for(a=0;a<r.length;a++){var l=d[a];l.indexLabelTextBlock.x=x.x+q*Math.cos(l.midAngle);
l.indexLabelTextBlock.y=x.y+q*Math.sin(l.midAngle);l.indexLabelAngle=l.midAngle;l.radius=A;l.percentInnerRadius=O}for(var u,y,a=0;a<r.length;a++){var l=d[a],z=e(a);if(null!==z){u=d[a];y=d[z];var B=0,B=c(u,y)-m;if(0>B){for(var F=y=0,sa=0;sa<r.length;sa++)sa!==a&&d[sa].hemisphere===l.hemisphere&&(d[sa].indexLabelTextBlock.y<l.indexLabelTextBlock.y?y++:F++);y=B/(y+F||1)*F;var F=-1*(B-y),J=sa=0;"right"===l.hemisphere?(sa=g(a,y),F=-1*(B-sa),J=g(z,F),+J.toFixed(v)<+F.toFixed(v)&&+sa.toFixed(v)<=+y.toFixed(v)&&
g(a,-(F-J))):(sa=g(z,y),F=-1*(B-sa),J=g(a,F),+J.toFixed(v)<+F.toFixed(v)&&+sa.toFixed(v)<=+y.toFixed(v)&&g(z,-(F-J)))}}}}else for(a=0;a<r.length;a++)l=d[a],q="pie"===k.type?0.7*A:0.8*A,z=x.x+q*Math.cos(l.midAngle),y=x.y+q*Math.sin(l.midAngle),l.indexLabelTextBlock.x=z,l.indexLabelTextBlock.y=y;for(a=0;a<r.length;a++)if(l=d[a],z=l.indexLabelTextBlock.measureText(),0!==z.height&&0!==z.width)z=z=0,"right"===l.hemisphere?(z=n.x2-(l.indexLabelTextBlock.x+l.indexLabelTextBlock.width+p),z*=-1):z=n.x1-(l.indexLabelTextBlock.x-
l.indexLabelTextBlock.width-p),0<z&&(!h&&l.indexLabelText&&(y="right"===l.hemisphere?n.x2-l.indexLabelTextBlock.x:l.indexLabelTextBlock.x-n.x1,0.3*l.indexLabelTextBlock.maxWidth>y?l.indexLabelText="":l.indexLabelTextBlock.maxWidth=0.85*y,0.3*l.indexLabelTextBlock.maxWidth<y&&(l.indexLabelTextBlock.x-="right"===l.hemisphere?2:-2)),Math.abs(l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2-x.y)<A||Math.abs(l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2-x.y)<A)&&(z/=Math.abs(Math.cos(l.indexLabelAngle)),
9<z&&(z*=0.3),z>f&&(f=z)),z=z=0,0<l.indexLabelAngle&&l.indexLabelAngle<Math.PI?(z=n.y2-(l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2+5),z*=-1):z=n.y1-(l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2-5),0<z&&(!h&&l.indexLabelText&&(y=0<l.indexLabelAngle&&l.indexLabelAngle<Math.PI?-1:1,0===g(a,z*y)&&g(a,2*y)),Math.abs(l.indexLabelTextBlock.x-x.x)<A&&(z/=Math.abs(Math.sin(l.indexLabelAngle)),9<z&&(z*=0.3),z>f&&(f=z)));var M=function(a,b,c){for(var e=[],f=0;e.push(d[b]),b!==c;b=(b+1+
r.length)%r.length);e.sort(function(a,b){return a.y-b.y});for(b=0;b<e.length;b++)if(c=e[b],f<0.7*a)f+=c.indexLabelTextBlock.height,c.indexLabelTextBlock.text="",c.indexLabelText="",c.indexLabelTextBlock.measureText();else break};(function(){for(var a=-1,b=-1,f=0,g=!1,h=0;h<r.length;h++)if(g=!1,u=d[h],u.indexLabelText){var k=e(h);if(null!==k){var l=d[k];B=0;B=c(u,l);var n;if(n=0>B){n=u.indexLabelTextBlock.x;var t=u.indexLabelTextBlock.y-u.indexLabelTextBlock.height/2,m=u.indexLabelTextBlock.y+u.indexLabelTextBlock.height/
2,w=l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2,q=l.indexLabelTextBlock.x+l.indexLabelTextBlock.width,s=l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2;n=u.indexLabelTextBlock.x+u.indexLabelTextBlock.width<l.indexLabelTextBlock.x-p||n>q+p||t>s+p||m<w-p?!1:!0}n?(0>a&&(a=h),k!==a&&(b=k,f+=-B),0===h%Math.max(r.length/10,3)&&(g=!0)):g=!0;g&&(0<f&&0<=a&&0<=b)&&(M(f,a,b),b=a=-1,f=0)}}0<f&&M(f,a,b)})()}}function l(){t.plotArea.layoutManager.reset();t.title&&(t.title.dockInsidePlotArea||
"center"===t.title.horizontalAlign&&"center"===t.title.verticalAlign)&&t.title.render();if(t.subtitles)for(var a=0;a<t.subtitles.length;a++){var b=t.subtitles[a];(b.dockInsidePlotArea||"center"===b.horizontalAlign&&"center"===b.verticalAlign)&&b.render()}t.legend&&(t.legend.dockInsidePlotArea||"center"===t.legend.horizontalAlign&&"center"===t.legend.verticalAlign)&&t.legend.render()}var t=this;if(!(0>=a.dataSeriesIndexes.length)){var k=this.data[a.dataSeriesIndexes[0]],r=k.dataPoints,p=10,n=this.plotArea,
d=k.dataPointEOs,m=2,q,s=1.3,u=20/180*Math.PI,v=6,x={x:(n.x2+n.x1)/2,y:(n.y2+n.y1)/2},z=0;a=!1;for(var B=0;B<r.length;B++)z+=Math.abs(r[B].y),!a&&("undefined"!==typeof r[B].indexLabel&&null!==r[B].indexLabel&&0<r[B].indexLabel.toString().length)&&(a=!0),!a&&("undefined"!==typeof r[B].label&&null!==r[B].label&&0<r[B].label.toString().length)&&(a=!0);if(0!==z){a=a||"undefined"!==typeof k.indexLabel&&null!==k.indexLabel&&0<k.indexLabel.toString().length;var A="inside"!==k.indexLabelPlacement&&a?0.75*
Math.min(n.width,n.height)/2:0.92*Math.min(n.width,n.height)/2;k.radius&&(A=J(k.radius,A));var C="undefined"!==typeof k.innerRadius&&null!==k.innerRadius?J(k.innerRadius,A):0.7*A;k.radius=A;"doughnut"===k.type&&(k.innerRadius=C);var O=Math.min(C/A,(A-1)/A);this.pieDoughnutClickHandler=function(a){t.isAnimating||!y(a.dataSeries.explodeOnClick)&&!a.dataSeries.explodeOnClick||(a=a.dataPoint,a.exploded=a.exploded?!1:!0,1<this.dataPoints.length&&t._animator.animate(0,500,function(a){b(a);l()}))};f();h();
h();h();h();this.disableToolTip=!0;this._animator.animate(0,this.animatedRender?this.animationDuration:0,function(a){var b=t.plotArea.ctx;b.clearRect(n.x1,n.y1,n.width,n.height);b.fillStyle=t.backgroundColor;b.fillRect(n.x1,n.y1,n.width,n.height);a=d[0].startAngle+2*Math.PI*a;for(b=0;b<r.length;b++){var c=0===b?d[b].startAngle:e,e=c+(d[b].endAngle-d[b].startAngle),f=!1;e>a&&(e=a,f=!0);var g=r[b].color?r[b].color:k._colorSet[b%k._colorSet.length];e>c&&pa(t.plotArea.ctx,d[b].center,d[b].radius,g,k.type,
c,e,k.fillOpacity,d[b].percentInnerRadius);if(f)break}l()},function(){t.disableToolTip=!1;t._animator.animate(0,t.animatedRender?500:0,function(a){b(a);l()})})}}};var qa=function(a,f,b,c){"undefined"===typeof b&&(b=1);0>=Math.round(f.y4-f.y1)||(a.save(),a.globalAlpha=b,a.beginPath(),a.moveTo(Math.round(f.x1),Math.round(f.y1)),a.lineTo(Math.round(f.x2),Math.round(f.y2)),a.lineTo(Math.round(f.x3),Math.round(f.y3)),a.lineTo(Math.round(f.x4),Math.round(f.y4)),"undefined"!==f.x5&&(a.lineTo(Math.round(f.x5),
Math.round(f.y5)),a.lineTo(Math.round(f.x6),Math.round(f.y6))),a.closePath(),a.fillStyle=c?c:f.color,a.fill(),a.globalAplha=1,a.restore())};q.prototype.renderFunnel=function(a){function f(){for(var a=0,b=[],c=0;c<x.length;c++){if("undefined"===typeof x[c].y)return-1;x[c].y="number"===typeof x[c].y?x[c].y:0;a+=Math.abs(x[c].y)}if(0===a)return-1;for(c=b[0]=0;c<x.length;c++)b.push(Math.abs(x[c].y)*J/a);return b}function b(){var a=Y,b=X,c=M,d=Z,e,f;e=ca;f=aa-P;headArea=(f-e)*(b-a+(d-c))/2;headArea=Math.abs(headArea);
c=Z-M;e=f-e;f=c*(f-aa);f=Math.abs(f);f=headArea+f;for(var d=[],g=0,h=0;h<x.length;h++){if("undefined"===typeof x[h].y)return-1;x[h].y="number"===typeof x[h].y?x[h].y:0;g+=Math.abs(x[h].y)}if(0===g)return-1;for(var k=d[0]=0,l=0,n,b=b-a,t=!1,h=0;h<x.length;h++)a=Math.abs(x[h].y)*f/g,t?k=0==Number(c.toFixed(3))?0:a/c:(sqrt=ea*ea*b*b-4*Math.abs(ea)*a,0>sqrt?(n=c,k=(b+n)*(e-l)/2,a-=k,k=e-l,l+=e-l,k+=0==n?0:a/n,l+=a/n,t=!0):(k=(Math.abs(ea)*b-Math.sqrt(sqrt))/2,n=b-2*k/Math.abs(ea),l+=k,l>e&&(l-=k,n=c,
k=(b+n)*(e-l)/2,a-=k,k=e-l,l+=e-l,k+=a/n,l+=a/n,t=!0),b=n)),d.push(k);return d}function c(){if(u&&x){for(var a,b,c,e,f,g,h,k,l,n,t,p,r,m,w=[],q=[],z={percent:null,total:null},A=null,B=0;B<x.length;B++)m=N[B],m="undefined"!==typeof m.x5?(m.y2+m.y4)/2:(m.y2+m.y3)/2,m=d(m).x2+1,w[B]=S-m-U;m=0.5*U;for(var B=0,ya=x.length-1;B<x.length||0<=ya;B++,ya--){b=u.reversed?x[ya]:x[B];a=b.color?b.color:u.reversed?u._colorSet[(x.length-1-B)%u._colorSet.length]:u._colorSet[B%u._colorSet.length];c=b.indexLabelPlacement||
u.indexLabelPlacement||"outside";e=b.indexLabelBackgroundColor||u.indexLabelBackgroundColor||(v?"transparent":null);f=b.indexLabelFontColor||u.indexLabelFontColor||"#979797";g=y(b.indexLabelFontSize)?u.indexLabelFontSize:b.indexLabelFontSize;h=b.indexLabelFontStyle||u.indexLabelFontStyle||"normal";k=b.indexLabelFontFamily||u.indexLabelFontFamily||"arial";l=b.indexLabelFontWeight||u.indexLabelFontWeight||"normal";a=b.indexLabelLineColor||u.options.indexLabelLineColor||a;n="number"===typeof b.indexLabelLineThickness?
b.indexLabelLineThickness:"number"===typeof u.indexLabelLineThickness?u.indexLabelLineThickness:2;t=b.indexLabelLineDashType||u.indexLabelLineDashType||"solid";p="undefined"!==typeof b.indexLabelWrap?b.indexLabelWrap:"undefined"!==typeof u.indexLabelWrap?u.indexLabelWrap:!0;r=u.dataPointIds[B];s._eventManager.objectMap[r]={id:r,objectType:"dataPoint",dataPointIndex:B,dataSeriesIndex:0,funnelSection:N[u.reversed?x.length-1-B:B]};"inside"===u.indexLabelPlacement&&(w[B]=B!==fa?u.reversed?N[B].x2-N[B].x1:
N[B].x3-N[B].x4:N[B].x3-N[B].x6,20>w[B]&&(w[B]=B!==fa?u.reversed?N[B].x3-N[B].x4:N[B].x2-N[B].x1:N[B].x2-N[B].x1,w[B]/=2));r=b.indexLabelMaxWidth?b.indexLabelMaxWidth:u.options.indexLabelMaxWidth?u.indexLabelMaxWidth:w[B];if(r>w[B]||0>r)r=w[B];q[B]="inside"===u.indexLabelPlacement?N[B].height:!1;z=s.getPercentAndTotal(u,b);if(u.indexLabelFormatter||b.indexLabelFormatter)A={chart:s.options,dataSeries:u,dataPoint:b,total:z.total,percent:z.percent};b=b.indexLabelFormatter?b.indexLabelFormatter(A):b.indexLabel?
s.replaceKeywordsWithValue(b.indexLabel,b,u,B):u.indexLabelFormatter?u.indexLabelFormatter(A):u.indexLabel?s.replaceKeywordsWithValue(u.indexLabel,b,u,B):b.label?b.label:"";0>=n&&(n=0);1E3>r&&1E3-r<m&&(r+=1E3-r);R.roundRect||Ba(R);c=new ka(R,{fontSize:g,fontFamily:k,fontColor:f,fontStyle:h,fontWeight:l,horizontalAlign:c,backgroundColor:e,maxWidth:r,maxHeight:!1===q[B]?p?4.28571429*g:1.5*g:q[B],text:b,padding:ga});c.measureText();G.push({textBlock:c,id:u.reversed?ya:B,isDirty:!1,lineColor:a,lineThickness:n,
lineDashType:t,height:c.height<c.maxHeight?c.height:c.maxHeight,width:c.width<c.maxWidth?c.width:c.maxWidth})}}}function e(){var a,b,c,d,e,f=[];e=!1;c=0;for(var g=S-X-U/2,g=u.options.indexLabelMaxWidth?u.indexLabelMaxWidth>g?g:u.indexLabelMaxWidth:g,h=G.length-1;0<=h;h--){dataPoint=x[G[h].id];c=G[h];d=c.textBlock;b=(a=n(h)<N.length?G[n(h)]:null)?a.textBlock:null;c=c.height;a&&d.y+c+ga>b.y&&(e=!0);c=dataPoint.indexLabelMaxWidth||g;if(c>g||0>c)c=g;f.push(c)}if(e)for(h=G.length-1;0<=h;h--)a=N[h],G[h].textBlock.maxWidth=
f[f.length-(h+1)],G[h].textBlock.measureText(),G[h].textBlock.x=S-g,c=G[h].textBlock.height<G[h].textBlock.maxHeight?G[h].textBlock.height:G[h].textBlock.maxHeight,e=G[h].textBlock.width<G[h].textBlock.maxWidth?G[h].textBlock.width:G[h].textBlock.maxWidth,G[h].height=c,G[h].width=e,c="undefined"!==typeof a.x5?(a.y2+a.y4)/2:(a.y2+a.y3)/2,G[h].textBlock.y=c-G[h].height/2,u.reversed?(G[h].textBlock.y+G[h].height>T+C&&(G[h].textBlock.y=T+C-G[h].height),G[h].textBlock.y<ra-C&&(G[h].textBlock.y=ra-C)):
(G[h].textBlock.y<T-C&&(G[h].textBlock.y=T-C),G[h].textBlock.y+G[h].height>ra+C&&(G[h].textBlock.y=ra+C-G[h].height))}function g(){var a,b,c,e;if("inside"!==u.indexLabelPlacement)for(var f=0;f<N.length;f++)0==G[f].textBlock.text.length?G[f].isDirty=!0:(a=N[f],c="undefined"!==typeof a.x5?(a.y2+a.y4)/2:(a.y2+a.y3)/2,b=u.reversed?"undefined"!==typeof a.x5?c>ba?d(c).x2+1:(a.x2+a.x3)/2+1:(a.x2+a.x3)/2+1:"undefined"!==typeof a.x5?c<ba?d(c).x2+1:(a.x4+a.x3)/2+1:(a.x2+a.x3)/2+1,G[f].textBlock.x=b+U,G[f].textBlock.y=
c-G[f].height/2,u.reversed?(G[f].textBlock.y+G[f].height>T+C&&(G[f].textBlock.y=T+C-G[f].height),G[f].textBlock.y<ra-C&&(G[f].textBlock.y=ra-C)):(G[f].textBlock.y<T-C&&(G[f].textBlock.y=T-C),G[f].textBlock.y+G[f].height>ra+C&&(G[f].textBlock.y=ra+C-G[f].height)));else for(f=0;f<N.length;f++)0==G[f].textBlock.text.length?G[f].isDirty=!0:(a=N[f],b=a.height,c=G[f].height,e=G[f].width,b>=c?(b=f!=fa?(a.x4+a.x3)/2-e/2:(a.x5+a.x4)/2-e/2,c=f!=fa?(a.y1+a.y3)/2-c/2:(a.y1+a.y4)/2-c/2,G[f].textBlock.x=b,G[f].textBlock.y=
c):G[f].isDirty=!0)}function h(){function a(b,c){var d;if(0>b||b>=G.length)return 0;var e,f=G[b].textBlock;if(0>c){c*=-1;e=p(b);d=l(e,b);if(d>=c)return f.y-=c,c;if(0==b)return 0<d&&(f.y-=d),d;d+=a(e,-(c-d));0<d&&(f.y-=d);return d}e=n(b);d=l(b,e);if(d>=c)return f.y+=c,c;if(b==N.length-1)return 0<d&&(f.y+=d),d;d+=a(e,c-d);0<d&&(f.y+=d);return d}function b(){var a,d,e,f,g=0,h;f=(aa-ca+2*C)/t;h=t;for(var k,l=1;l<h;l++){e=l*f;for(var r=G.length-1;0<=r;r--)!G[r].isDirty&&(G[r].textBlock.y<e&&G[r].textBlock.y+
G[r].height>e)&&(k=n(r),!(k>=G.length-1)&&G[r].textBlock.y+G[r].height+ga>G[k].textBlock.y&&(G[r].textBlock.y=G[r].textBlock.y+G[r].height-e>e-G[r].textBlock.y?e+1:e-G[r].height-1))}for(k=N.length-1;0<k;k--)if(!G[k].isDirty){e=p(k);if(0>e&&(e=0,G[e].isDirty))break;if(G[k].textBlock.y<G[e].textBlock.y+G[e].height){d=d||k;f=k;for(h=0;G[f].textBlock.y<G[e].textBlock.y+G[e].height+ga;){a=a||G[f].textBlock.y+G[f].height;h+=G[f].height;h+=ga;f=e;if(0>=f){f=0;h+=G[f].height;break}e=p(f);if(0>e){f=0;h+=G[f].height;
break}}if(f!=k){g=G[f].textBlock.y;a-=g;a=h-a;g=c(a,d,f);break}}}return g}function c(a,b,d){var e=[],f=0,g=0;for(a=Math.abs(a);d<=b;d++)e.push(N[d]);e.sort(function(a,b){return a.height-b.height});for(d=0;d<e.length;d++)if(b=e[d],f<a)g++,f+=G[b.id].height+ga,G[b.id].textBlock.text="",G[b.id].indexLabelText="",G[b.id].isDirty=!0,G[b.id].textBlock.measureText();else break;return g}for(var d,e,f,g,h,k,t=1,r=0;r<2*t;r++){for(var m=G.length-1;0<=m&&!(previousTextBlock=(previousLabel=0<=p(m)?G[p(m)]:null)?
previousLabel.textBlock:null,f=G[m],g=f.textBlock,k=(h=n(m)<N.length?G[n(m)]:null)?h.textBlock:null,d=+f.height.toFixed(6),e=+g.y.toFixed(6),!f.isDirty&&(h&&e+d+ga>+k.y.toFixed(6))&&(d=g.y+d+ga-k.y,e=a(m,-d),e<d&&(0<e&&(d-=e),e=a(n(m),d),e!=d)));m--);b()}}function l(a,b){return(b<N.length?G[b].textBlock.y:u.reversed?T+C:ra+C)-(0>a?u.reversed?ra-C:T-C:G[a].textBlock.y+G[a].height+ga)}function t(a,b,c){var d,e,f,h=[],l=C,n=[];-1!==b&&(0<=$.indexOf(b)?(e=$.indexOf(b),$.splice(e,1)):($.push(b),$=$.sort(function(a,
b){return a-b})));if(0===$.length)h=ja;else{e=C*(1!=$.length||0!=$[0]&&$[0]!=N.length-1?2:1)/k();for(var t=0;t<N.length;t++){if(1==$.length&&0==$[0]){if(0===t){h.push(ja[t]);d=l;continue}}else 0===t&&(d=-1*l);h.push(ja[t]+d);if(0<=$.indexOf(t)||t<N.length&&0<=$.indexOf(t+1))d+=e}}f=function(){for(var a=[],b=0;b<N.length;b++)a.push(h[b]-N[b].y1);return a}();var p={startTime:(new Date).getTime(),duration:c||500,easingFunction:function(a,b,c,d){return O.easing.easeOutQuart(a,b,c,d)},changeSection:function(a){for(var b,
c,d=0;d<N.length;d++)b=f[d],c=N[d],newY=b*a,"undefined"===typeof n[d]&&(n[d]=0),0>n&&(n*=-1),c.y1+=newY-n[d],c.y2+=newY-n[d],c.y3+=newY-n[d],c.y4+=newY-n[d],c.y5&&(c.y5+=newY-n[d],c.y6+=newY-n[d]),n[d]=newY}};a._animator.animate(0,c,function(c){var d=a.plotArea.ctx||a.ctx;ia=!0;d.clearRect(z.x1,z.y1,z.x2-z.x1,z.y2-z.y1);d.fillStyle=a.backgroundColor;d.fillRect(z.x1,z.y1,z.width,z.height);p.changeSection(c,b);var e={};e.dataSeries=u;e.dataPoint=u.reversed?u.dataPoints[x.length-1-b]:u.dataPoints[b];
e.index=u.reversed?x.length-1-b:b;a.toolTip.highlightObjects([e]);for(e=0;e<N.length;e++)qa(d,N[e],u.fillOpacity);q(d);L&&("inside"!==u.indexLabelPlacement?r(d):g(),m(d));1<=c&&(ia=!1)},null,O.easing.easeOutQuart)}function k(){for(var a=0,b=0;b<N.length-1;b++)(0<=$.indexOf(b)||0<=$.indexOf(b+1))&&a++;return a}function r(a){for(var b,c,e,f,g=0;g<N.length;g++)f=1===G[g].lineThickness%2?0.5:0,c=((N[g].y2+N[g].y4)/2<<0)+f,b=d(c).x2-1,e=G[g].textBlock.x,f=(G[g].textBlock.y+G[g].height/2<<0)+f,G[g].isDirty||
0==G[g].lineThickness||(a.strokeStyle=G[g].lineColor,a.lineWidth=G[g].lineThickness,a.setLineDash&&a.setLineDash(F(G[g].lineDashType,G[g].lineThickness)),a.beginPath(),a.moveTo(b,c),a.lineTo(e,f),a.stroke())}function p(a){for(a-=1;-1<=a&&-1!=a&&G[a].isDirty;a--);return a}function n(a){for(a+=1;a<=N.length&&a!=N.length&&G[a].isDirty;a++);return a}function d(a){for(var b,c=0;c<x.length;c++)if(N[c].y1<a&&N[c].y4>a){b=N[c];break}return b?(a=b.y6?a>b.y6?b.x3+(b.x4-b.x3)/(b.y4-b.y3)*(a-b.y3):b.x2+(b.x3-
b.x2)/(b.y3-b.y2)*(a-b.y2):b.x2+(b.x3-b.x2)/(b.y3-b.y2)*(a-b.y2),{x1:a,x2:a}):-1}function m(a){for(var b=0;b<N.length;b++)G[b].isDirty||(a&&(G[b].textBlock.ctx=a),G[b].textBlock.render(!0))}function q(a){s.plotArea.layoutManager.reset();a.roundRect||Ba(a);s.title&&(s.title.dockInsidePlotArea||"center"===s.title.horizontalAlign&&"center"===s.title.verticalAlign)&&(s.title.ctx=a,s.title.render());if(s.subtitles)for(var b=0;b<s.subtitles.length;b++){var c=s.subtitles[b];if(c.dockInsidePlotArea||"center"===
c.horizontalAlign&&"center"===c.verticalAlign)s.subtitles.ctx=a,c.render()}s.legend&&(s.legend.dockInsidePlotArea||"center"===s.legend.horizontalAlign&&"center"===s.legend.verticalAlign)&&(s.legend.ctx=a,s.legend.render());W.fNg&&W.fNg(s)}var s=this;if(!(0>=a.dataSeriesIndexes.length)){for(var u=this.data[a.dataSeriesIndexes[0]],x=u.dataPoints,z=this.plotArea,C=0.025*z.width,B=0.01*z.width,A=0,J=z.height-2*C,I=Math.min(z.width-2*B,2.8*z.height),L=!1,K=0;K<x.length;K++)if(!L&&("undefined"!==typeof x[K].indexLabel&&
null!==x[K].indexLabel&&0<x[K].indexLabel.toString().length)&&(L=!0),!L&&("undefined"!==typeof x[K].label&&null!==x[K].label&&0<x[K].label.toString().length)&&(L=!0),!L&&"function"===typeof u.indexLabelFormatter||"function"===typeof x[K].indexLabelFormatter)L=!0;L=L||"undefined"!==typeof u.indexLabel&&null!==u.indexLabel&&0<u.indexLabel.toString().length;"inside"!==u.indexLabelPlacement&&L||(B=(z.width-0.75*I)/2);var K=z.x1+B,S=z.x2-B,ca=z.y1+C,aa=z.y2-C,R=a.targetCanvasCtx||this.plotArea.ctx||this.ctx;
if(0!=u.length&&(u.dataPoints&&u.visible)&&0!==x.length){var P,E;a=75*I/100;var U=30*(S-a)/100;"funnel"===u.type?(P=y(u.options.neckHeight)?0.35*J:u.neckHeight,E=y(u.options.neckWidth)?0.25*a:u.neckWidth,"string"===typeof P&&P.match(/%$/)?(P=parseInt(P),P=P*J/100):P=parseInt(P),"string"===typeof E&&E.match(/%$/)?(E=parseInt(E),E=E*a/100):E=parseInt(E),P>J?P=J:0>=P&&(P=0),E>a?E=a-0.5:0>=E&&(E=0)):"pyramid"===u.type&&(E=P=0,u.reversed=u.reversed?!1:!0);var B=K+a/2,Y=K,X=K+a,T=u.reversed?aa:ca,M=B-E/
2,Z=B+E/2,ba=u.reversed?ca+P:aa-P,ra=u.reversed?ca:aa;a=[];var B=[],N=[],I=[],V=ca,fa,ea=(ba-T)/(M-Y),ha=-ea,K="area"===(u.valueRepresents?u.valueRepresents:"height")?b():f();if(-1!==K){if(u.reversed)for(I.push(V),E=K.length-1;0<E;E--)V+=K[E],I.push(V);else for(E=0;E<K.length;E++)V+=K[E],I.push(V);if(u.reversed)for(E=0;E<K.length;E++)I[E]<ba?(a.push(M),B.push(Z),fa=E):(a.push((I[E]-T+ea*Y)/ea),B.push((I[E]-T+ha*X)/ha));else for(E=0;E<K.length;E++)I[E]<ba?(a.push((I[E]-T+ea*Y)/ea),B.push((I[E]-T+ha*
X)/ha),fa=E):(a.push(M),B.push(Z));for(E=0;E<K.length-1;E++)V=u.reversed?x[x.length-1-E].color?x[x.length-1-E].color:u._colorSet[(x.length-1-E)%u._colorSet.length]:x[E].color?x[E].color:u._colorSet[E%u._colorSet.length],E===fa?N.push({x1:a[E],y1:I[E],x2:B[E],y2:I[E],x3:Z,y3:ba,x4:B[E+1],y4:I[E+1],x5:a[E+1],y5:I[E+1],x6:M,y6:ba,id:E,height:I[E+1]-I[E],color:V}):N.push({x1:a[E],y1:I[E],x2:B[E],y2:I[E],x3:B[E+1],y3:I[E+1],x4:a[E+1],y4:I[E+1],id:E,height:I[E+1]-I[E],color:V});var ga=2,G=[],ia=!1,$=[],
ja=[],K=!1;a=a=0;Ca($);for(E=0;E<x.length;E++)x[E].exploded&&(K=!0,u.reversed?$.push(x.length-1-E):$.push(E));R.clearRect(z.x1,z.y1,z.width,z.height);R.fillStyle=s.backgroundColor;R.fillRect(z.x1,z.y1,z.width,z.height);if(L&&u.visible&&(c(),g(),e(),"inside"!==u.indexLabelPlacement)){h();for(E=0;E<x.length;E++)G[E].isDirty||(a=G[E].textBlock.x+G[E].width,a=(S-a)/2,0==E&&(A=a),A>a&&(A=a));for(E=0;E<N.length;E++)N[E].x1+=A,N[E].x2+=A,N[E].x3+=A,N[E].x4+=A,N[E].x5&&(N[E].x5+=A,N[E].x6+=A),G[E].textBlock.x+=
A}for(E=0;E<N.length;E++)A=N[E],qa(R,A,u.fillOpacity),ja.push(A.y1);q(R);L&&u.visible&&("inside"===u.indexLabelPlacement||s.animationEnabled||r(R),s.animationEnabled||m());if(!L)for(E=0;E<x.length;E++)A=u.dataPointIds[E],a={id:A,objectType:"dataPoint",dataPointIndex:E,dataSeriesIndex:0,funnelSection:N[u.reversed?x.length-1-E:E]},s._eventManager.objectMap[A]=a;!s.animationEnabled&&K?t(s,-1,0):s.animationEnabled&&!s.animatedRender&&t(s,-1,0);this.funnelPyramidClickHandler=function(a){var b=-1;if(!ia&&
!s.isAnimating&&(y(a.dataSeries.explodeOnClick)||a.dataSeries.explodeOnClick)&&(b=u.reversed?x.length-1-a.dataPointIndex:a.dataPointIndex,0<=b)){a=b;if("funnel"===u.type||"pyramid"===u.type)u.reversed?x[x.length-1-a].exploded=x[x.length-1-a].exploded?!1:!0:x[a].exploded=x[a].exploded?!1:!0;t(s,b,500)}};return{source:R,dest:this.plotArea.ctx,animationCallback:function(a,b){O.fadeInAnimation(a,b);1<=a&&(t(s,-1,500),q(s.plotArea.ctx||s.ctx))},easingFunction:O.easing.easeInQuad,animationBase:0}}}}};q.prototype.requestAnimFrame=
function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();q.prototype.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout;q.prototype.set=function(a,f,b){b="undefined"===
typeof b?!0:b;"options"===a?(this.options=f,b&&this.render()):q.base.set.call(this,a,f,b)};q.prototype.exportChart=function(a){a="undefined"===typeof a?{}:a;var f=a.format?a.format:"png",b=a.fileName?a.fileName:this.exportFileName;if(a.toDataURL)return this.canvas.toDataURL("image/"+f);s(this.canvas,f,b)};q.prototype.print=function(){var a=this.exportChart({toDataURL:!0}),f=document.createElement("iframe");f.setAttribute("class","canvasjs-chart-print-frame");f.setAttribute("style","position:absolute; width:100%; border: 0px; margin: 0px 0px 0px 0px; padding 0px 0px 0px 0px;");
f.style.height=this.height+"px";this._canvasJSContainer.appendChild(f);var b=this,c=f.contentWindow||f.contentDocument.document||f.contentDocument;c.document.open();c.document.write('<!DOCTYPE HTML>\n<html><body style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;"><img src="'+a+'"/><body/></html>');c.document.close();setTimeout(function(){c.focus();c.print();setTimeout(function(){b._canvasJSContainer.removeChild(f)},1E3)},500)};q.prototype.getPercentAndTotal=function(a,f){var b=null,c=null,
e=null;if(0<=a.type.indexOf("stacked"))c=0,b=f.x.getTime?f.x.getTime():f.x,b in a.plotUnit.yTotals&&(c=a.plotUnit.yTotals[b],e=isNaN(f.y)?0:100*(f.y/c));else if("pie"===a.type||"doughnut"===a.type||"funnel"===a.type||"pyramid"===a.type){for(i=c=0;i<a.dataPoints.length;i++)isNaN(a.dataPoints[i].y)||(c+=a.dataPoints[i].y);e=isNaN(f.y)?0:100*(f.y/c)}return{percent:e,total:c}};q.prototype.replaceKeywordsWithValue=function(a,f,b,c,e){var g=this;e="undefined"===typeof e?0:e;if((0<=b.type.indexOf("stacked")||
"pie"===b.type||"doughnut"===b.type||"funnel"===b.type||"pyramid"===b.type)&&(0<=a.indexOf("#percent")||0<=a.indexOf("#total"))){var h="#percent",l="#total",t=this.getPercentAndTotal(b,f),l=isNaN(t.total)?l:t.total,h=isNaN(t.percent)?h:t.percent;do{t="";if(b.percentFormatString)t=b.percentFormatString;else{var t="#,##0.",k=Math.max(Math.ceil(Math.log(1/Math.abs(h))/Math.LN10),2);if(isNaN(k)||!isFinite(k))k=2;for(var r=0;r<k;r++)t+="#";b.percentFormatString=t}a=a.replace("#percent",V(h,t,g._cultureInfo));
a=a.replace("#total",V(l,b.yValueFormatString?b.yValueFormatString:"#,##0.########",g._cultureInfo))}while(0<=a.indexOf("#percent")||0<=a.indexOf("#total"))}return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g,function(a){if('"'===a[0]&&'"'===a[a.length-1]||"'"===a[0]&&"'"===a[a.length-1])return a.slice(1,a.length-1);a=Fa(a.slice(1,a.length-1));a=a.replace("#index",e);var h=null;try{var d=a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);d&&0<d.length&&(h=Fa(d[2]),a=Fa(d[1]))}catch(k){}d=null;if("color"===a)return"waterfall"===
b.type?f.color?f.color:0<f.y?b.risingColor:b.fallingColor:"error"===b.type?b.color?b.color:b._colorSet[h%b._colorSet.length]:f.color?f.color:b.color?b.color:b._colorSet[c%b._colorSet.length];if(f.hasOwnProperty(a))d=f;else if(b.hasOwnProperty(a))d=b;else return"";d=d[a];null!==h&&(d=d[h]);if("x"===a)if("dateTime"===b.axisX.valueType||"dateTime"===b.xValueType||f.x&&f.x.getTime){if(g.plotInfo.plotTypes[0].plotUnits[0].axisX&&!g.plotInfo.plotTypes[0].plotUnits[0].axisX.logarithmic)return Aa(d,f.xValueFormatString?
f.xValueFormatString:b.xValueFormatString?b.xValueFormatString:b.xValueFormatString=g.axisX&&g.axisX.autoValueFormatString?g.axisX.autoValueFormatString:"DD MMM YY",g._cultureInfo)}else return V(d,f.xValueFormatString?f.xValueFormatString:b.xValueFormatString?b.xValueFormatString:b.xValueFormatString="#,##0.########",g._cultureInfo);else return"y"===a?V(d,f.yValueFormatString?f.yValueFormatString:b.yValueFormatString?b.yValueFormatString:b.yValueFormatString="#,##0.########",g._cultureInfo):"z"===
a?V(d,f.zValueFormatString?f.zValueFormatString:b.zValueFormatString?b.zValueFormatString:b.zValueFormatString="#,##0.########",g._cultureInfo):d})};na(T,Y);T.prototype.render=function(){var a=this.dockInsidePlotArea?this.chart.plotArea:this.chart,f=a.layoutManager.getFreeSpace(),b=null,c=0,e=0,g=0,h=0,l=this.markerMargin=this.chart.options.legend&&!y(this.chart.options.legend.markerMargin)?this.chart.options.legend.markerMargin:0.3*this.fontSize;this.height=0;var t=[],k=[];"top"===this.verticalAlign||
"bottom"===this.verticalAlign?(this.orientation="horizontal",b=this.verticalAlign,g=this.maxWidth=null!==this.maxWidth?this.maxWidth:f.width,h=this.maxHeight=null!==this.maxHeight?this.maxHeight:0.5*f.height):"center"===this.verticalAlign&&(this.orientation="vertical",b=this.horizontalAlign,g=this.maxWidth=null!==this.maxWidth?this.maxWidth:0.5*f.width,h=this.maxHeight=null!==this.maxHeight?this.maxHeight:f.height);for(var r=[],p=0;p<this.dataSeries.length;p++){var n=this.dataSeries[p];if(n.dataPoints&&
n.dataPoints.length)if("pie"!==n.type&&"doughnut"!==n.type&&"funnel"!==n.type&&"pyramid"!==n.type){var d=n.legendMarkerType=n.legendMarkerType?n.legendMarkerType:"line"!==n.type&&"stepLine"!==n.type&&"spline"!==n.type&&"scatter"!==n.type&&"bubble"!==n.type||!n.markerType?"error"===n.type&&n._linkedSeries?n._linkedSeries.legendMarkerType?n._linkedSeries.legendMarkerType:S.getDefaultLegendMarker(n._linkedSeries.type):S.getDefaultLegendMarker(n.type):n.markerType,m=n.legendText?n.legendText:this.itemTextFormatter?
this.itemTextFormatter({chart:this.chart,legend:this.options,dataSeries:n,dataPoint:null}):n.name,q=n.legendMarkerColor=n.legendMarkerColor?n.legendMarkerColor:n.markerColor?n.markerColor:"error"===n.type?y(n.whiskerColor)?n._colorSet[0]:n.whiskerColor:n._colorSet[0],s=n.markerSize||"line"!==n.type&&"stepLine"!==n.type&&"spline"!==n.type?0.75*this.lineHeight:0,u=n.legendMarkerBorderColor?n.legendMarkerBorderColor:n.markerBorderColor,v=n.legendMarkerBorderThickness?n.legendMarkerBorderThickness:n.markerBorderThickness?
Math.max(1,Math.round(0.2*s)):0;"error"===n.type&&r.push(q);m=this.chart.replaceKeywordsWithValue(m,n.dataPoints[0],n,p);d={markerType:d,markerColor:q,text:m,textBlock:null,chartType:n.type,markerSize:s,lineColor:n._colorSet[0],dataSeriesIndex:n.index,dataPointIndex:null,markerBorderColor:u,markerBorderThickness:v};t.push(d)}else for(var x=0;x<n.dataPoints.length;x++){var z=n.dataPoints[x],d=z.legendMarkerType?z.legendMarkerType:n.legendMarkerType?n.legendMarkerType:S.getDefaultLegendMarker(n.type),
m=z.legendText?z.legendText:n.legendText?n.legendText:this.itemTextFormatter?this.itemTextFormatter({chart:this.chart,legend:this.options,dataSeries:n,dataPoint:z}):z.name?z.name:"DataPoint: "+(x+1),q=z.legendMarkerColor?z.legendMarkerColor:n.legendMarkerColor?n.legendMarkerColor:z.color?z.color:n.color?n.color:n._colorSet[x%n._colorSet.length],s=0.75*this.lineHeight,u=z.legendMarkerBorderColor?z.legendMarkerBorderColor:n.legendMarkerBorderColor?n.legendMarkerBorderColor:z.markerBorderColor?z.markerBorderColor:
n.markerBorderColor,v=z.legendMarkerBorderThickness?z.legendMarkerBorderThickness:n.legendMarkerBorderThickness?n.legendMarkerBorderThickness:z.markerBorderThickness||n.markerBorderThickness?Math.max(1,Math.round(0.2*s)):0,m=this.chart.replaceKeywordsWithValue(m,z,n,x),d={markerType:d,markerColor:q,text:m,textBlock:null,chartType:n.type,markerSize:s,dataSeriesIndex:p,dataPointIndex:x,markerBorderColor:u,markerBorderThickness:v};(z.showInLegend||n.showInLegend&&!1!==z.showInLegend)&&t.push(d)}}!0===
this.reversed&&t.reverse();if(0<t.length){n=null;m=x=z=v=0;z=null!==this.itemWidth?null!==this.itemMaxWidth?Math.min(this.itemWidth,this.itemMaxWidth,g):this.itemMaxWidth=Math.min(this.itemWidth,g):null!==this.itemMaxWidth?Math.min(this.itemMaxWidth,g):this.itemMaxWidth=g;s=0===s?0.75*this.lineHeight:s;z-=s+l;for(p=0;p<t.length;p++){d=t[p];q=z;if("line"===d.chartType||"spline"===d.chartType||"stepLine"===d.chartType)q-=2*0.1*this.lineHeight;if(!(0>=h||"undefined"===typeof h||0>=q||"undefined"===typeof q)){if("horizontal"===
this.orientation){d.textBlock=new ka(this.ctx,{x:0,y:0,maxWidth:q,maxHeight:this.itemWrap?h:this.lineHeight,angle:0,text:d.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"middle"});d.textBlock.measureText();null!==this.itemWidth&&(d.textBlock.width=this.itemWidth-(s+l+("line"===d.chartType||"spline"===d.chartType||"stepLine"===d.chartType?2*0.1*this.lineHeight:0)));if(!n||n.width+
Math.round(d.textBlock.width+s+l+(0===n.width?0:this.horizontalSpacing)+("line"===d.chartType||"spline"===d.chartType||"stepLine"===d.chartType?2*0.1*this.lineHeight:0))>g)n={items:[],width:0},k.push(n),this.height+=x,x=0;x=Math.max(x,d.textBlock.height)}else d.textBlock=new ka(this.ctx,{x:0,y:0,maxWidth:z,maxHeight:!0===this.itemWrap?h:1.5*this.fontSize,angle:0,text:d.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,
fontStyle:this.fontStyle,textBaseline:"middle"}),d.textBlock.measureText(),null!==this.itemWidth&&(d.textBlock.width=this.itemWidth-(s+l+("line"===d.chartType||"spline"===d.chartType||"stepLine"===d.chartType?2*0.1*this.lineHeight:0))),this.height<h-this.lineHeight?(n={items:[],width:0},k.push(n)):(n=k[v],v=(v+1)%k.length),this.height+=d.textBlock.height;d.textBlock.x=n.width;d.textBlock.y=0;n.width+=Math.round(d.textBlock.width+s+l+(0===n.width?0:this.horizontalSpacing)+("line"===d.chartType||"spline"===
d.chartType||"stepLine"===d.chartType?2*0.1*this.lineHeight:0));n.items.push(d);this.width=Math.max(n.width,this.width);m=d.textBlock.width+(s+l+("line"===d.chartType||"spline"===d.chartType||"stepLine"===d.chartType?2*0.1*this.lineHeight:0))}}this.itemWidth=m;this.height=!1===this.itemWrap?k.length*this.lineHeight:this.height+x;this.height=Math.min(h,this.height);this.width=Math.min(g,this.width)}"top"===this.verticalAlign?(e="left"===this.horizontalAlign?f.x1:"right"===this.horizontalAlign?f.x2-
this.width:f.x1+f.width/2-this.width/2,c=f.y1):"center"===this.verticalAlign?(e="left"===this.horizontalAlign?f.x1:"right"===this.horizontalAlign?f.x2-this.width:f.x1+f.width/2-this.width/2,c=f.y1+f.height/2-this.height/2):"bottom"===this.verticalAlign&&(e="left"===this.horizontalAlign?f.x1:"right"===this.horizontalAlign?f.x2-this.width:f.x1+f.width/2-this.width/2,c=f.y2-this.height);this.items=t;for(p=0;p<this.items.length;p++)d=t[p],d.id=++this.chart._eventManager.lastObjectId,this.chart._eventManager.objectMap[d.id]=
{id:d.id,objectType:"legendItem",legendItemIndex:p,dataSeriesIndex:d.dataSeriesIndex,dataPointIndex:d.dataPointIndex};(0<this.borderThickness&&this.borderColor||this.backgroundColor)&&this.ctx.roundRect(e,c,this.width,this.height,this.cornerRadius,this.borderThickness,this.backgroundColor,this.borderColor);for(p=f=0;p<k.length;p++){n=k[p];for(z=x=0;z<n.items.length;z++){d=n.items[z];q=d.textBlock.x+e+(0===z?0.2*s:this.horizontalSpacing);u=c+f;m=q;this.chart.data[d.dataSeriesIndex].visible||(this.ctx.globalAlpha=
0.5);this.ctx.save();this.ctx.beginPath();this.ctx.rect(e,c,g,Math.max(h-h%this.lineHeight,0));this.ctx.clip();if("line"===d.chartType||"stepLine"===d.chartType||"spline"===d.chartType)this.ctx.strokeStyle=d.lineColor,this.ctx.lineWidth=Math.ceil(this.lineHeight/8),this.ctx.beginPath(),this.ctx.moveTo(q-0.1*this.lineHeight,u+this.lineHeight/2),this.ctx.lineTo(q+0.85*this.lineHeight,u+this.lineHeight/2),this.ctx.stroke(),m-=0.1*this.lineHeight;if("error"===d.chartType){this.ctx.strokeStyle=r[0];v=
s/8;this.ctx.lineWidth=v;this.ctx.beginPath();var v=q-0.08*this.lineHeight+0.1*this.lineHeight,B=u+0.15*this.lineHeight,A=0.7*this.lineHeight,C=A+0.02*this.lineHeight;this.ctx.moveTo(v,B);this.ctx.lineTo(v+A,B);this.ctx.stroke();this.ctx.beginPath();this.ctx.moveTo(v+A/2,B);this.ctx.lineTo(v+A/2,B+C);this.ctx.stroke();this.ctx.beginPath();this.ctx.moveTo(v,B+C);this.ctx.lineTo(v+A,B+C);this.ctx.stroke();r.shift()}$.drawMarker(q+s/2,u+this.lineHeight/2,this.ctx,d.markerType,"error"===d.chartType||
"line"===d.chartType||"spline"===d.chartType?d.markerSize/2:d.markerSize,d.markerColor,d.markerBorderColor,d.markerBorderThickness);d.textBlock.x=q+l+s;if("line"===d.chartType||"stepLine"===d.chartType||"spline"===d.chartType)d.textBlock.x+=0.1*this.lineHeight;d.textBlock.y=Math.round(u+this.lineHeight/2);d.textBlock.render(!0);this.ctx.restore();x=0<z?Math.max(x,d.textBlock.height):d.textBlock.height;this.chart.data[d.dataSeriesIndex].visible||(this.ctx.globalAlpha=1);v=R(d.id);this.ghostCtx.fillStyle=
v;this.ghostCtx.beginPath();this.ghostCtx.fillRect(m,d.textBlock.y-this.lineHeight/2,d.textBlock.x+d.textBlock.width-m,d.textBlock.height);d.x1=this.chart._eventManager.objectMap[d.id].x1=m;d.y1=this.chart._eventManager.objectMap[d.id].y1=d.textBlock.y-this.lineHeight/2;d.x2=this.chart._eventManager.objectMap[d.id].x2=d.textBlock.x+d.textBlock.width;d.y2=this.chart._eventManager.objectMap[d.id].y2=d.textBlock.y+d.textBlock.height-this.lineHeight/2}f+=x}0<t.length&&a.layoutManager.registerSpace(b,
{width:this.width+2+2,height:this.height+5+5});this.bounds={x1:e,y1:c,x2:e+this.width,y2:c+this.height}};na(S,Y);S.prototype.getDefaultAxisPlacement=function(){var a=this.type;if("column"===a||"line"===a||"stepLine"===a||"spline"===a||"area"===a||"stepArea"===a||"splineArea"===a||"stackedColumn"===a||"stackedLine"===a||"bubble"===a||"scatter"===a||"stackedArea"===a||"stackedColumn100"===a||"stackedLine100"===a||"stackedArea100"===a||"candlestick"===a||"ohlc"===a||"rangeColumn"===a||"rangeArea"===
a||"rangeSplineArea"===a||"boxAndWhisker"===a||"waterfall"===a)return"normal";if("bar"===a||"stackedBar"===a||"stackedBar100"===a||"rangeBar"===a)return"xySwapped";if("pie"===a||"doughnut"===a||"funnel"===a||"pyramid"===a)return"none";"error"!==a&&window.console.log("Unknown Chart Type: "+a);return null};S.getDefaultLegendMarker=function(a){if("column"===a||"stackedColumn"===a||"stackedLine"===a||"bar"===a||"stackedBar"===a||"stackedBar100"===a||"bubble"===a||"scatter"===a||"stackedColumn100"===a||
"stackedLine100"===a||"stepArea"===a||"candlestick"===a||"ohlc"===a||"rangeColumn"===a||"rangeBar"===a||"rangeArea"===a||"rangeSplineArea"===a||"boxAndWhisker"===a||"waterfall"===a)return"square";if("line"===a||"stepLine"===a||"spline"===a||"pie"===a||"doughnut"===a)return"circle";if("area"===a||"splineArea"===a||"stackedArea"===a||"stackedArea100"===a||"funnel"===a||"pyramid"===a)return"triangle";if("error"===a)return"none";window.console.log("Unknown Chart Type: "+a);return null};S.prototype.getDataPointAtX=
function(a,f){if(!this.dataPoints||0===this.dataPoints.length)return null;var b={dataPoint:null,distance:Infinity,index:NaN},c=null,e=0,g=0,h=1,l=Infinity,t=0,k=0,r=0;"none"!==this.chart.plotInfo.axisPlacement&&(this.axisX.logarithmic?(r=Math.log(this.dataPoints[this.dataPoints.length-1].x/this.dataPoints[0].x),r=1<r?Math.min(Math.max((this.dataPoints.length-1)/r*Math.log(a/this.dataPoints[0].x)>>0,0),this.dataPoints.length):0):(r=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,r=
0<r?Math.min(Math.max((this.dataPoints.length-1)/r*(a-this.dataPoints[0].x)>>0,0),this.dataPoints.length):0));for(;;){g=0<h?r+e:r-e;if(0<=g&&g<this.dataPoints.length){var c=this.dataPoints[g],p=this.axisX.logarithmic?c.x>a?c.x/a:a/c.x:Math.abs(c.x-a);p<b.distance&&(b.dataPoint=c,b.distance=p,b.index=g);c=p;c<=l?l=c:0<h?t++:k++;if(1E3<t&&1E3<k)break}else if(0>r-e&&r+e>=this.dataPoints.length)break;-1===h?(e++,h=1):h=-1}return f||b.dataPoint.x!==a?f&&null!==b.dataPoint?b:null:b};S.prototype.getDataPointAtXY=
function(a,f,b){if(!this.dataPoints||0===this.dataPoints.length||a<this.chart.plotArea.x1||a>this.chart.plotArea.x2||f<this.chart.plotArea.y1||f>this.chart.plotArea.y2)return null;b=b||!1;var c=[],e=0,g=0,h=1,l=!1,t=Infinity,k=0,r=0,p=0;if("none"!==this.chart.plotInfo.axisPlacement)if(p=(this.chart.axisX[0]?this.chart.axisX[0]:this.chart.axisX2[0]).getXValueAt({x:a,y:f}),this.axisX.logarithmic)var n=Math.log(this.dataPoints[this.dataPoints.length-1].x/this.dataPoints[0].x),p=1<n?Math.min(Math.max((this.dataPoints.length-
1)/n*Math.log(p/this.dataPoints[0].x)>>0,0),this.dataPoints.length):0;else n=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,p=0<n?Math.min(Math.max((this.dataPoints.length-1)/n*(p-this.dataPoints[0].x)>>0,0),this.dataPoints.length):0;for(;;){g=0<h?p+e:p-e;if(0<=g&&g<this.dataPoints.length){var n=this.chart._eventManager.objectMap[this.dataPointIds[g]],d=this.dataPoints[g],m=null;if(n){switch(this.type){case "column":case "stackedColumn":case "stackedColumn100":case "bar":case "stackedBar":case "stackedBar100":case "rangeColumn":case "rangeBar":case "waterfall":case "error":a>=
n.x1&&(a<=n.x2&&f>=n.y1&&f<=n.y2)&&(c.push({dataPoint:d,dataPointIndex:g,dataSeries:this,distance:Math.min(Math.abs(n.x1-a),Math.abs(n.x2-a),Math.abs(n.y1-f),Math.abs(n.y2-f))}),l=!0);break;case "line":case "stepLine":case "spline":case "area":case "stepArea":case "stackedArea":case "stackedArea100":case "splineArea":case "scatter":var q=ja("markerSize",d,this)||4,s=b?20:q,m=Math.sqrt(Math.pow(n.x1-a,2)+Math.pow(n.y1-f,2));m<=s&&c.push({dataPoint:d,dataPointIndex:g,dataSeries:this,distance:m});n=
Math.abs(n.x1-a);n<=t?t=n:0<h?k++:r++;m<=q/2&&(l=!0);break;case "rangeArea":case "rangeSplineArea":q=ja("markerSize",d,this)||4;s=b?20:q;m=Math.min(Math.sqrt(Math.pow(n.x1-a,2)+Math.pow(n.y1-f,2)),Math.sqrt(Math.pow(n.x1-a,2)+Math.pow(n.y2-f,2)));m<=s&&c.push({dataPoint:d,dataPointIndex:g,dataSeries:this,distance:m});n=Math.abs(n.x1-a);n<=t?t=n:0<h?k++:r++;m<=q/2&&(l=!0);break;case "bubble":q=n.size;m=Math.sqrt(Math.pow(n.x1-a,2)+Math.pow(n.y1-f,2));m<=q/2&&(c.push({dataPoint:d,dataPointIndex:g,dataSeries:this,
distance:m}),l=!0);break;case "pie":case "doughnut":q=n.center;s="doughnut"===this.type?n.percentInnerRadius*n.radius:0;m=Math.sqrt(Math.pow(q.x-a,2)+Math.pow(q.y-f,2));m<n.radius&&m>s&&(m=Math.atan2(f-q.y,a-q.x),0>m&&(m+=2*Math.PI),m=Number(((180*(m/Math.PI)%360+360)%360).toFixed(12)),q=Number(((180*(n.startAngle/Math.PI)%360+360)%360).toFixed(12)),s=Number(((180*(n.endAngle/Math.PI)%360+360)%360).toFixed(12)),0===s&&1<n.endAngle&&(s=360),q>=s&&0!==d.y&&(s+=360,m<q&&(m+=360)),m>q&&m<s&&(c.push({dataPoint:d,
dataPointIndex:g,dataSeries:this,distance:0}),l=!0));break;case "funnel":case "pyramid":m=n.funnelSection;f>m.y1&&f<m.y4&&(m.y6?f>m.y6?(g=m.x6+(m.x5-m.x6)/(m.y5-m.y6)*(f-m.y6),m=m.x3+(m.x4-m.x3)/(m.y4-m.y3)*(f-m.y3)):(g=m.x1+(m.x6-m.x1)/(m.y6-m.y1)*(f-m.y1),m=m.x2+(m.x3-m.x2)/(m.y3-m.y2)*(f-m.y2)):(g=m.x1+(m.x4-m.x1)/(m.y4-m.y1)*(f-m.y1),m=m.x2+(m.x3-m.x2)/(m.y3-m.y2)*(f-m.y2)),a>g&&a<m&&(c.push({dataPoint:d,dataPointIndex:n.dataPointIndex,dataSeries:this,distance:0}),l=!0));break;case "boxAndWhisker":if(a>=
n.x1-n.borderThickness/2&&a<=n.x2+n.borderThickness/2&&f>=n.y4-n.borderThickness/2&&f<=n.y1+n.borderThickness/2||Math.abs(n.x2-a+n.x1-a)<n.borderThickness&&f>=n.y1&&f<=n.y4)c.push({dataPoint:d,dataPointIndex:g,dataSeries:this,distance:Math.min(Math.abs(n.x1-a),Math.abs(n.x2-a),Math.abs(n.y2-f),Math.abs(n.y3-f))}),l=!0;break;case "candlestick":if(a>=n.x1-n.borderThickness/2&&a<=n.x2+n.borderThickness/2&&f>=n.y2-n.borderThickness/2&&f<=n.y3+n.borderThickness/2||Math.abs(n.x2-a+n.x1-a)<n.borderThickness&&
f>=n.y1&&f<=n.y4)c.push({dataPoint:d,dataPointIndex:g,dataSeries:this,distance:Math.min(Math.abs(n.x1-a),Math.abs(n.x2-a),Math.abs(n.y2-f),Math.abs(n.y3-f))}),l=!0;break;case "ohlc":if(Math.abs(n.x2-a+n.x1-a)<n.borderThickness&&f>=n.y2&&f<=n.y3||a>=n.x1&&a<=(n.x2+n.x1)/2&&f>=n.y1-n.borderThickness/2&&f<=n.y1+n.borderThickness/2||a>=(n.x1+n.x2)/2&&a<=n.x2&&f>=n.y4-n.borderThickness/2&&f<=n.y4+n.borderThickness/2)c.push({dataPoint:d,dataPointIndex:g,dataSeries:this,distance:Math.min(Math.abs(n.x1-a),
Math.abs(n.x2-a),Math.abs(n.y2-f),Math.abs(n.y3-f))}),l=!0}if(l||1E3<k&&1E3<r)break}}else if(0>p-e&&p+e>=this.dataPoints.length)break;-1===h?(e++,h=1):h=-1}a=null;for(f=0;f<c.length;f++)a?c[f].distance<=a.distance&&(a=c[f]):a=c[f];return a};S.prototype.getMarkerProperties=function(a,f,b,c){var e=this.dataPoints;return{x:f,y:b,ctx:c,type:e[a].markerType?e[a].markerType:this.markerType,size:e[a].markerSize?e[a].markerSize:this.markerSize,color:e[a].markerColor?e[a].markerColor:this.markerColor?this.markerColor:
e[a].color?e[a].color:this.color?this.color:this._colorSet[a%this._colorSet.length],borderColor:e[a].markerBorderColor?e[a].markerBorderColor:this.markerBorderColor?this.markerBorderColor:null,borderThickness:e[a].markerBorderThickness?e[a].markerBorderThickness:this.markerBorderThickness?this.markerBorderThickness:null}};na(C,Y);C.prototype.createExtraLabelsForLog=function(a){a=(a||0)+1;if(!(5<a)){var f=this.logLabelValues[0]||this.intervalStartPosition;if(Math.log(this.range)/Math.log(f/this.viewportMinimum)<
this.noTicks-1){for(var b=C.getNiceNumber((f-this.viewportMinimum)/Math.min(Math.max(2,this.noTicks-this.logLabelValues.length),3),!0),c=Math.ceil(this.viewportMinimum/b)*b;c<f;c+=b)c<this.viewportMinimum||this.logLabelValues.push(c);this.logLabelValues.sort(Pa);this.createExtraLabelsForLog(a)}}};C.prototype.createLabels=function(){var a,f,b=0,c=0,e,g=0,h=0,c=0,c=this.interval,l=0,t,k=0.6*this.chart.height,m;a=!1;var p=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[],n=p.length?y(this.scaleBreaks.firstBreakIndex)?
0:this.scaleBreaks.firstBreakIndex:0;if("axisX"!==this.type||"dateTime"!==this.valueType||this.logarithmic){e=this.viewportMaximum;if(this.labels){a=Math.ceil(c);for(var c=Math.ceil(this.intervalStartPosition),d=!1,b=c;b<this.viewportMaximum;b+=a)if(this.labels[b])d=!0;else{d=!1;break}d&&(this.interval=a,this.intervalStartPosition=c)}if(this.logarithmic&&!this.equidistantInterval)for(this.logLabelValues||(this.logLabelValues=[],this.createExtraLabelsForLog()),c=0,d=n;c<this.logLabelValues.length;c++)if(b=
this.logLabelValues[c],b<this.viewportMinimum)c++;else{for(;d<p.length&&b>p[d].endValue;d++);a=d<p.length&&b>=p[d].startValue&&b<=p[d].endValue;m=b;a||(a=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.options,value:m,label:this.labels[m]?this.labels[m]:null}):"axisX"===this.type&&this.labels[m]?this.labels[m]:V(m,this.valueFormatString,this.chart._cultureInfo),a=new ka(this.ctx,{x:0,y:0,maxWidth:g,maxHeight:h,angle:this.labelAngle,text:this.prefix+a+this.suffix,backgroundColor:this.labelBackgroundColor,
borderColor:this.labelBorderColor,borderThickness:this.labelBorderThickness,cornerRadius:this.labelCornerRadius,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle",borderThickness:0}),this._labels.push({position:m,textBlock:a,effectiveHeight:null}))}d=n;for(b=this.intervalStartPosition;b<=e;b=parseFloat(1E-12>this.interval?this.logarithmic&&this.equidistantInterval?
b*Math.pow(this.logarithmBase,this.interval):b+this.interval:(this.logarithmic&&this.equidistantInterval?b*Math.pow(this.logarithmBase,this.interval):b+this.interval).toFixed(12))){for(;d<p.length&&b>p[d].endValue;d++);a=d<p.length&&b>=p[d].startValue&&b<=p[d].endValue;m=b;a||(a=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.options,value:m,label:this.labels[m]?this.labels[m]:null}):"axisX"===this.type&&this.labels[m]?this.labels[m]:V(m,this.valueFormatString,this.chart._cultureInfo),
a=new ka(this.ctx,{x:0,y:0,maxWidth:g,maxHeight:h,angle:this.labelAngle,text:this.prefix+a+this.suffix,horizontalAlign:"left",backgroundColor:this.labelBackgroundColor,borderColor:this.labelBorderColor,borderThickness:this.labelBorderThickness,cornerRadius:this.labelCornerRadius,fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"}),this._labels.push({position:m,textBlock:a,effectiveHeight:null}))}}else for(this.intervalStartPosition=
this.getLabelStartPoint(new Date(this.viewportMinimum),this.intervalType,this.interval),e=Ta(new Date(this.viewportMaximum),this.interval,this.intervalType),d=n,b=this.intervalStartPosition;b<e;Ta(b,c,this.intervalType)){for(a=b.getTime();d<p.length&&a>p[d].endValue;d++);m=a;a=d<p.length&&a>=p[d].startValue&&a<=p[d].endValue;a||(a=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.options,value:new Date(m),label:this.labels[m]?this.labels[m]:null}):"axisX"===this.type&&this.labels[m]?
this.labels[m]:Aa(m,this.valueFormatString,this.chart._cultureInfo),a=new ka(this.ctx,{x:0,y:0,maxWidth:g,backgroundColor:this.labelBackgroundColor,borderColor:this.labelBorderColor,borderThickness:this.labelBorderThickness,cornerRadius:this.labelCornerRadius,maxHeight:h,angle:this.labelAngle,text:this.prefix+a+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"}),
this._labels.push({position:m,textBlock:a,effectiveHeight:null,breaksLabelType:void 0}))}if("bottom"===this._position||"top"===this._position)l=this.logarithmic&&!this.equidistantInterval&&2<=this._labels.length?this.lineCoordinates.width*Math.log(Math.min(this._labels[this._labels.length-1].position/this._labels[this._labels.length-2].position,this._labels[1].position/this._labels[0].position))/Math.log(this.range):this.lineCoordinates.width/(this.logarithmic&&this.equidistantInterval?Math.log(this.range)/
Math.log(this.logarithmBase):Math.abs(this.range))*U[this.intervalType+"Duration"]*this.interval,g="undefined"===typeof this.options.labelMaxWidth?0.5*this.chart.width>>0:this.options.labelMaxWidth,this.chart.panEnabled||(h="undefined"===typeof this.options.labelWrap||this.labelWrap?0.8*this.chart.height>>0:1.5*this.labelFontSize);else if("left"===this._position||"right"===this._position)l=this.logarithmic&&!this.equidistantInterval&&2<=this._labels.length?this.lineCoordinates.height*Math.log(Math.min(this._labels[this._labels.length-
1].position/this._labels[this._labels.length-2].position,this._labels[1].position/this._labels[0].position))/Math.log(this.range):this.lineCoordinates.height/(this.logarithmic&&this.equidistantInterval?Math.log(this.range)/Math.log(this.logarithmBase):Math.abs(this.range))*U[this.intervalType+"Duration"]*this.interval,this.chart.panEnabled||(g="undefined"===typeof this.options.labelMaxWidth?0.3*this.chart.width>>0:this.options.labelMaxWidth),h="undefined"===typeof this.options.labelWrap||this.labelWrap?
0.3*this.chart.height>>0:1.5*this.labelFontSize;for(c=0;c<this._labels.length;c++){a=this._labels[c].textBlock;a.maxWidth=g;a.maxHeight=h;var q=a.measureText();t=q.height}e=[];n=p=0;if(this.labelAutoFit||this.options.labelAutoFit)if(y(this.labelAngle)||(this.labelAngle=(this.labelAngle%360+360)%360,90<this.labelAngle&&270>this.labelAngle?this.labelAngle-=180:270<=this.labelAngle&&360>=this.labelAngle&&(this.labelAngle-=360)),"bottom"===this._position||"top"===this._position)if(g=0.9*l>>0,n=0,!this.chart.panEnabled&&
1<=this._labels.length){this.sessionVariables.labelFontSize=this.labelFontSize;this.sessionVariables.labelMaxWidth=g;this.sessionVariables.labelMaxHeight=h;this.sessionVariables.labelAngle=this.labelAngle;this.sessionVariables.labelWrap=this.labelWrap;for(b=0;b<this._labels.length;b++)if(!this._labels[b].breaksLabelType){a=this._labels[b].textBlock;for(var s,d=a.text.split(" "),c=0;c<d.length;c++)m=d[c],this.ctx.font=a.fontStyle+" "+a.fontWeight+" "+a.fontSize+"px "+a.fontFamily,m=this.ctx.measureText(m),
m.width>n&&(s=b,n=m.width)}b=0;for(b=this.intervalStartPosition<this.viewportMinimum?1:0;b<this._labels.length;b++)if(!this._labels[b].breaksLabelType){a=this._labels[b].textBlock;q=a.measureText();for(d=b+1;d<this._labels.length;d++)if(!this._labels[d].breaksLabelType){f=this._labels[d].textBlock;f=f.measureText();break}e.push(a.height);this.sessionVariables.labelMaxHeight=Math.max.apply(Math,e);Math.cos(Math.PI/180*Math.abs(this.labelAngle));Math.sin(Math.PI/180*Math.abs(this.labelAngle));c=g*Math.sin(Math.PI/
180*Math.abs(this.labelAngle))+(h-a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle));if(y(this.options.labelAngle)&&isNaN(this.options.labelAngle)&&0!==this.options.labelAngle)if(this.sessionVariables.labelMaxHeight=0===this.labelAngle?h:Math.min((c-g*Math.cos(Math.PI/180*Math.abs(this.labelAngle)))/Math.sin(Math.PI/180*Math.abs(this.labelAngle)),c),m=(k-(t+a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(-25)))/Math.sin(Math.PI/180*Math.abs(-25)),!y(this.options.labelWrap))this.labelWrap?y(this.options.labelMaxWidth)?
(this.sessionVariables.labelMaxWidth=Math.min(Math.max(g,n),m),this.sessionVariables.labelWrap=this.labelWrap,q.width+f.width>>0>2*g&&(this.sessionVariables.labelAngle=-25)):(this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth,this.sessionVariables.labelAngle=this.sessionVariables.labelMaxWidth>g?-25:this.sessionVariables.labelAngle):y(this.options.labelMaxWidth)?(this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxHeight=
h,this.sessionVariables.labelMaxWidth=g,q.width+f.width>>0>2*g&&(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=m)):(this.sessionVariables.labelAngle=this.sessionVariables.labelMaxWidth>g?-25:this.sessionVariables.labelAngle,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth,this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelWrap=this.labelWrap);else{if(y(this.options.labelWrap))if(!y(this.options.labelMaxWidth))this.options.labelMaxWidth<g?(this.sessionVariables.labelMaxWidth=
this.options.labelMaxWidth,this.sessionVariables.labelMaxHeight=c):(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth,this.sessionVariables.labelMaxHeight=h);else if(!y(f))if(c=q.width+f.width>>0,d=this.labelFontSize,n<g)c-2*g>p&&(p=c-2*g,c>=2*g&&c<2.2*g?(this.sessionVariables.labelMaxWidth=g,y(this.options.labelFontSize)&&12<d&&(d=Math.floor(12/13*d),a.measureText()),this.sessionVariables.labelFontSize=y(this.options.labelFontSize)?d:this.options.labelFontSize,
this.sessionVariables.labelAngle=this.labelAngle):c>=2.2*g&&c<2.8*g?(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=m,this.sessionVariables.labelFontSize=d):c>=2.8*g&&c<3.2*g?(this.sessionVariables.labelMaxWidth=Math.max(g,n),this.sessionVariables.labelWrap=!0,y(this.options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=y(this.options.labelFontSize)?d:this.options.labelFontSize,
this.sessionVariables.labelAngle=this.labelAngle):c>=3.2*g&&c<3.6*g?(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelMaxWidth=m,this.sessionVariables.labelFontSize=this.labelFontSize):c>3.6*g&&c<5*g?(y(this.options.labelFontSize)&&12<d&&(d=Math.floor(12/13*d),a.measureText()),this.sessionVariables.labelFontSize=y(this.options.labelFontSize)?d:this.options.labelFontSize,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=
m):c>5*g&&(this.sessionVariables.labelWrap=!0,this.sessionVariables.labelMaxWidth=g,this.sessionVariables.labelFontSize=d,this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelAngle=this.labelAngle));else if(s===b&&(0===s&&n+this._labels[s+1].textBlock.measureText().width-2*g>p||s===this._labels.length-1&&n+this._labels[s-1].textBlock.measureText().width-2*g>p||0<s&&s<this._labels.length-1&&n+this._labels[s+1].textBlock.measureText().width-2*g>p&&n+this._labels[s-1].textBlock.measureText().width-
2*g>p))p=0===s?n+this._labels[s+1].textBlock.measureText().width-2*g:n+this._labels[s-1].textBlock.measureText().width-2*g,this.sessionVariables.labelFontSize=y(this.options.labelFontSize)?d:this.options.labelFontSize,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=m;else if(0===p)for(this.sessionVariables.labelFontSize=y(this.options.labelFontSize)?d:this.options.labelFontSize,this.sessionVariables.labelWrap=!0,c=0;c<this._labels.length;c++)a=
this._labels[c].textBlock,a.maxWidth=this.sessionVariables.labelMaxWidth=Math.min(Math.max(g,n),m),q=a.measureText(),c<this._labels.length-1&&(d=c+1,f=this._labels[d].textBlock,f.maxWidth=this.sessionVariables.labelMaxWidth=Math.min(Math.max(g,n),m),f=f.measureText(),q.width+f.width>>0>2*g&&(this.sessionVariables.labelAngle=-25))}else(this.sessionVariables.labelAngle=this.labelAngle,this.sessionVariables.labelMaxHeight=0===this.labelAngle?h:Math.min((c-g*Math.cos(Math.PI/180*Math.abs(this.labelAngle)))/
Math.sin(Math.PI/180*Math.abs(this.labelAngle)),c),m=0!=this.labelAngle?(k-(t+a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle)))/Math.sin(Math.PI/180*Math.abs(this.labelAngle)):g,this.sessionVariables.labelMaxHeight=h=this.labelWrap?(k-m*Math.sin(Math.PI/180*Math.abs(this.labelAngle)))/Math.cos(Math.PI/180*Math.abs(this.labelAngle)):1.5*this.labelFontSize,y(this.options.labelWrap))?y(this.options.labelWrap)&&(this.labelWrap&&!y(this.options.labelMaxWidth)?(this.sessionVariables.labelWrap=
this.labelWrap,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:m,this.sessionVariables.labelMaxHeight=h):(this.sessionVariables.labelAngle=this.labelAngle,this.sessionVariables.labelMaxWidth=m,this.sessionVariables.labelMaxHeight=c<0.9*l?0.9*l:c,this.sessionVariables.labelWrap=this.labelWrap)):(this.options.labelWrap?(this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:m):
(y(this.options.labelMaxWidth),this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:m,this.sessionVariables.labelWrap=this.labelWrap),this.sessionVariables.labelMaxHeight=h)}for(c=0;c<this._labels.length;c++)a=this._labels[c].textBlock,a.maxWidth=this.labelMaxWidth=this.sessionVariables.labelMaxWidth,a.fontSize=this.sessionVariables.labelFontSize,a.angle=this.labelAngle=this.sessionVariables.labelAngle,a.wrap=this.labelWrap=this.sessionVariables.labelWrap,a.maxHeight=
this.sessionVariables.labelMaxHeight,a.measureText()}else for(b=0;b<this._labels.length;b++)a=this._labels[b].textBlock,a.maxWidth=this.labelMaxWidth=y(this.options.labelMaxWidth)?this.sessionVariables.labelMaxWidth:this.options.labelMaxWidth,a.fontSize=this.labelFontSize=y(this.options.labelFontSize)?this.sessionVariables.labelFontSize:this.options.labelFontSize,a.angle=this.labelAngle=y(this.options.labelAngle)?this.sessionVariables.labelAngle:this.labelAngle,a.wrap=this.labelWrap=y(this.options.labelWrap)?
this.sessionVariables.labelWrap:this.options.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText();else if("left"===this._position||"right"===this._position)if(g=y(this.options.labelMaxWidth)?0.3*this.chart.width>>0:this.options.labelMaxWidth,h="undefined"===typeof this.options.labelWrap||this.labelWrap?0.3*this.chart.height>>0:1.5*this.labelFontSize,!this.chart.panEnabled&&1<=this._labels.length){this.sessionVariables.labelFontSize=this.labelFontSize;this.sessionVariables.labelMaxWidth=
g;this.sessionVariables.labelMaxHeight=h;this.sessionVariables.labelAngle=y(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle;this.sessionVariables.labelWrap=this.labelWrap;for(b=0;b<this._labels.length;b++)if(!this._labels[b].breaksLabelType){a=this._labels[b].textBlock;q=a.measureText();for(d=b+1;d<this._labels.length;d++)if(!this._labels[d].breaksLabelType){f=this._labels[d].textBlock;f=f.measureText();break}e.push(a.height);this.sessionVariables.labelMaxHeight=Math.max.apply(Math,
e);c=g*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(h-a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle));Math.cos(Math.PI/180*Math.abs(this.labelAngle));Math.sin(Math.PI/180*Math.abs(this.labelAngle));y(this.options.labelAngle)&&isNaN(this.options.labelAngle)&&0!==this.options.labelAngle?y(this.options.labelWrap)?y(this.options.labelWrap)&&(y(this.options.labelMaxWidth)?y(f)||(l=q.height+f.height>>0,l-2*h>n&&(n=l-2*h,l>=2*h&&l<2.4*h?(y(this.options.labelFontSize)&&12<this.labelFontSize&&
(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelFontSize=y(this.options.labelFontSize)?this.labelFontSize:this.options.labelFontSize):l>=2.4*h&&l<2.8*h?(this.sessionVariables.labelMaxHeight=c,this.sessionVariables.labelFontSize=this.labelFontSize,this.sessionVariables.labelWrap=!0):l>=2.8*h&&l<3.2*h?(this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelWrap=!0,y(this.options.labelFontSize)&&12<
this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=y(this.options.labelFontSize)?this.labelFontSize:this.options.labelFontSize,this.sessionVariables.labelAngle=y(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle):l>=3.2*h&&l<3.6*h?(this.sessionVariables.labelMaxHeight=c,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelFontSize=this.labelFontSize):l>3.6*h&&l<10*h?(y(this.options.labelFontSize)&&
12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=y(this.options.labelFontSize)?this.labelFontSize:this.options.labelFontSize,this.sessionVariables.labelMaxWidth=g,this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelAngle=y(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle):l>10*h&&l<50*h&&(y(this.options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),
a.measureText()),this.sessionVariables.labelFontSize=y(this.options.labelFontSize)?this.labelFontSize:this.options.labelFontSize,this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelMaxWidth=g,this.sessionVariables.labelAngle=y(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle))):(this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth)):(this.sessionVariables.labelMaxWidth=
this.labelWrap?this.options.labelMaxWidth?this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth:this.labelMaxWidth?this.options.labelMaxWidth?this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth:g,this.sessionVariables.labelMaxHeight=h):(this.sessionVariables.labelAngle=this.labelAngle,this.sessionVariables.labelMaxWidth=0===this.labelAngle?g:Math.min((c-h*Math.sin(Math.PI/180*Math.abs(this.labelAngle)))/Math.cos(Math.PI/180*Math.abs(this.labelAngle)),h),y(this.options.labelWrap))?
y(this.options.labelWrap)&&(this.labelWrap&&!y(this.options.labelMaxWidth)?(this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth>this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth,this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxHeight=c):(this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:g,this.sessionVariables.labelMaxHeight=0===this.labelAngle?h:c,y(this.options.labelMaxWidth)&&
(this.sessionVariables.labelAngle=this.labelAngle))):this.options.labelWrap?(this.sessionVariables.labelMaxHeight=0===this.labelAngle?h:c,this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxWidth=g):(this.sessionVariables.labelMaxHeight=h,y(this.options.labelMaxWidth),this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth,this.sessionVariables.labelWrap=this.labelWrap)}for(c=0;c<this._labels.length;c++)a=
this._labels[c].textBlock,a.maxWidth=this.labelMaxWidth=this.sessionVariables.labelMaxWidth,a.fontSize=this.labelFontSize=this.sessionVariables.labelFontSize,a.angle=this.labelAngle=this.sessionVariables.labelAngle,a.wrap=this.labelWrap=this.sessionVariables.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText()}else for(b=0;b<this._labels.length;b++)a=this._labels[b].textBlock,a.maxWidth=this.labelMaxWidth=y(this.options.labelMaxWidth)?this.sessionVariables.labelMaxWidth:this.options.labelMaxWidth,
a.fontSize=this.labelFontSize=y(this.options.labelFontSize)?this.sessionVariables.labelFontSize:this.options.labelFontSize,a.angle=this.labelAngle=y(this.options.labelAngle)?this.sessionVariables.labelAngle:this.labelAngle,a.wrap=this.labelWrap=y(this.options.labelWrap)?this.sessionVariables.labelWrap:this.options.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText();for(b=0;b<this.stripLines.length;b++){var g=this.stripLines[b],x;if("outside"===g.labelPlacement){h=this.sessionVariables.labelMaxWidth;
if("bottom"===this._position||"top"===this._position)x=y(g.options.labelWrap)?this.sessionVariables.labelMaxHeight:g.labelWrap?0.8*this.chart.height>>0:1.5*this.labelFontSize;if("left"===this._position||"right"===this._position)x=y(g.options.labelWrap)?this.sessionVariables.labelMaxHeight:g.labelWrap?0.8*this.chart.width>>0:1.5*this.labelFontSize;y(g.labelBackgroundColor)&&(g.labelBackgroundColor="#EEEEEE")}else h="bottom"===this._position||"top"===this._position?0.9*this.chart.width>>0:0.9*this.chart.height>>
0,x=y(g.options.labelWrap)||g.labelWrap?"bottom"===this._position||"top"===this._position?0.8*this.chart.width>>0:0.8*this.chart.height>>0:1.5*this.labelFontSize,y(g.labelBackgroundColor)&&(y(g.startValue)&&0!==g.startValue?g.labelBackgroundColor=v?"transparent":null:g.labelBackgroundColor="#EEEEEE");a=new ka(this.ctx,{x:0,y:0,backgroundColor:g.labelBackgroundColor,borderColor:g.labelBorderColor,borderThickness:g.labelBorderThickness,cornerRadius:g.labelCornerRadius,maxWidth:g.options.labelMaxWidth?
g.options.labelMaxWidth:h,maxHeight:x,angle:this.labelAngle,text:g.labelFormatter?g.labelFormatter({chart:this.chart,axis:this,stripLine:g}):g.label,horizontalAlign:"left",fontSize:"outside"===g.labelPlacement?g.options.labelFontSize?g.labelFontSize:this.labelFontSize:g.labelFontSize,fontFamily:"outside"===g.labelPlacement?g.options.labelFontFamily?g.labelFontFamily:this.labelFontFamily:g.labelFontFamily,fontWeight:"outside"===g.labelPlacement?g.options.labelFontWeight?g.labelFontWeight:this.labelFontWeight:
g.labelFontWeight,fontColor:g.labelFontColor||g.color,fontStyle:"outside"===g.labelPlacement?g.options.labelFontStyle?g.labelFontStyle:this.fontWeight:g.labelFontStyle,textBaseline:"middle"});this._stripLineLabels.push({position:g.value,textBlock:a,effectiveHeight:null,stripLine:g})}};C.prototype.createLabelsAndCalculateWidth=function(){var a=0,f=0;this._labels=[];this._stripLineLabels=[];if("left"===this._position||"right"===this._position){this.createLabels();for(f=0;f<this._labels.length;f++){var b=
this._labels[f].textBlock,c=b.measureText(),e=0,e=0===this.labelAngle?c.width:c.width*Math.cos(Math.PI/180*Math.abs(this.labelAngle))+(c.height-b.fontSize/2)*Math.sin(Math.PI/180*Math.abs(this.labelAngle));a<e&&(a=e);this._labels[f].effectiveWidth=e}for(f=0;f<this._stripLineLabels.length;f++)"outside"===this._stripLineLabels[f].stripLine.labelPlacement&&(this._stripLineLabels[f].stripLine.value>=this.viewportMinimum&&this._stripLineLabels[f].stripLine.value<=this.viewportMaximum)&&(b=this._stripLineLabels[f].textBlock,
c=b.measureText(),e=0===this.labelAngle?c.width:c.width*Math.cos(Math.PI/180*Math.abs(this.labelAngle))+(c.height-b.fontSize/2)*Math.sin(Math.PI/180*Math.abs(this.labelAngle)),a<e&&(a=e),this._stripLineLabels[f].effectiveWidth=e)}f=this.title?this._titleTextBlock.measureText().height+2:0;return b="inside"===this.labelPlacement?b=f+5:f+a+this.tickLength+5};C.prototype.createLabelsAndCalculateHeight=function(){var a=0;this._labels=[];this._stripLineLabels=[];var f,b=0;this.createLabels();if("bottom"===
this._position||"top"===this._position){for(b=0;b<this._labels.length;b++){f=this._labels[b].textBlock;var c=f.measureText(),e=0,e=0===this.labelAngle?c.height:c.width*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(c.height-f.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle));a<e&&(a=e);this._labels[b].effectiveHeight=e}for(b=0;b<this._stripLineLabels.length;b++)"outside"===this._stripLineLabels[b].stripLine.labelPlacement&&(this._stripLineLabels[b].stripLine.value>=this.viewportMinimum&&
this._stripLineLabels[b].stripLine.value<=this.viewportMaximum)&&(f=this._stripLineLabels[b].textBlock,c=f.measureText(),e=0===this.labelAngle?c.height:c.width*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(c.height-f.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle)),a<e&&(a=e),this._stripLineLabels[b].effectiveHeight=e)}f=this.title?this._titleTextBlock.measureText().height+2:0;return b="inside"===this.labelPlacement?b=f+5:f+a+this.tickLength+5};C.setLayoutAndRender=function(a,f,b,c,
e,g){var h,l,t,k,m=a[0]?a[0].chart:f[0].chart,p=m.ctx,n=m._axes;if(a&&0<a.length)for(var d=0;d<a.length;d++)a[d]&&a[d].calculateAxisParameters();if(f&&0<f.length)for(d=0;d<f.length;d++)f[d].calculateAxisParameters();if(b&&0<b.length)for(d=0;d<b.length;d++)b[d].calculateAxisParameters();if(c&&0<c.length)for(d=0;d<c.length;d++)c[d].calculateAxisParameters();for(d=0;d<n.length;d++)if(n[d]&&n[d].scaleBreaks&&n[d].scaleBreaks._appliedBreaks.length)for(var q=n[d].scaleBreaks._appliedBreaks,s=0;s<q.length&&
!(q[s].startValue>n[d].viewportMaximum);s++)q[s].endValue<n[d].viewportMinimum||(y(n[d].scaleBreaks.firstBreakIndex)&&(n[d].scaleBreaks.firstBreakIndex=s),q[s].startValue>=n[d].viewPortMinimum&&(n[d].scaleBreaks.lastBreakIndex=s));for(var x=s=0,u=0,z=0,C=0,F=0,B=0,A,I,J=l=0,L,K,O,q=L=K=O=!1,d=0;d<n.length;d++)n[d]&&n[d].title&&(n[d]._titleTextBlock=new ka(n[d].ctx,{text:n[d].title,horizontalAlign:"center",fontSize:n[d].titleFontSize,fontFamily:n[d].titleFontFamily,fontWeight:n[d].titleFontWeight,
fontColor:n[d].titleFontColor,fontStyle:n[d].titleFontStyle,borderColor:n[d].titleBorderColor,borderThickness:n[d].titleBorderThickness,backgroundColor:n[d].titleBackgroundColor,cornerRadius:n[d].titleCornerRadius,textBaseline:"top"}));for(d=0;d<n.length;d++)if(n[d].title)switch(n[d]._position){case "left":n[d]._titleTextBlock.maxWidth=n[d].titleMaxWidth||g.height;n[d]._titleTextBlock.maxHeight=n[d].titleWrap?0.8*g.width:1.5*n[d].titleFontSize;n[d]._titleTextBlock.angle=-90;break;case "right":n[d]._titleTextBlock.maxWidth=
n[d].titleMaxWidth||g.height;n[d]._titleTextBlock.maxHeight=n[d].titleWrap?0.8*g.width:1.5*n[d].titleFontSize;n[d]._titleTextBlock.angle=90;break;default:n[d]._titleTextBlock.maxWidth=n[d].titleMaxWidth||g.width,n[d]._titleTextBlock.maxHeight=n[d].titleWrap?0.8*g.height:1.5*n[d].titleFontSize,n[d]._titleTextBlock.angle=0}if("normal"===e){for(var z=[],C=[],F=[],B=[],P=[],R=[],S=[],T=[];4>s;){var E=0,U=0,Y=0,X=0,W=e=0,M=0,$=0,Z=0,V=0,N=0,ba=0;if(b&&0<b.length)for(F=[],d=N=0;d<b.length;d++)F.push(Math.ceil(b[d]?
b[d].createLabelsAndCalculateWidth():0)),N+=F[d],M+=b[d]?b[d].margin:0;else F.push(Math.ceil(b[0]?b[0].createLabelsAndCalculateWidth():0));S.push(F);if(c&&0<c.length)for(B=[],d=ba=0;d<c.length;d++)B.push(Math.ceil(c[d]?c[d].createLabelsAndCalculateWidth():0)),ba+=B[d],$+=c[d]?c[d].margin:0;else B.push(Math.ceil(c[0]?c[0].createLabelsAndCalculateWidth():0));T.push(B);h=Math.round(g.x1+N+M);t=Math.round(g.x2-ba-$>m.width-10?m.width-10:g.x2-ba-$);if(a&&0<a.length)for(z=[],d=Z=0;d<a.length;d++)a[d]&&
(a[d].lineCoordinates={}),a[d].lineCoordinates.width=Math.abs(t-h),a[d].title&&(a[d]._titleTextBlock.maxWidth=0<a[d].titleMaxWidth&&a[d].titleMaxWidth<a[d].lineCoordinates.width?a[d].titleMaxWidth:a[d].lineCoordinates.width),z.push(Math.ceil(a[d]?a[d].createLabelsAndCalculateHeight():0)),Z+=z[d],e+=a[d]?a[d].margin:0;else z.push(Math.ceil(a[0]?a[0].createLabelsAndCalculateHeight():0));P.push(z);if(f&&0<f.length)for(C=[],d=V=0;d<f.length;d++)f[d]&&(f[d].lineCoordinates={}),f[d].lineCoordinates.width=
Math.abs(t-h),f[d].title&&(f[d]._titleTextBlock.maxWidth=0<f[d].titleMaxWidth&&f[d].titleMaxWidth<f[d].lineCoordinates.width?f[d].titleMaxWidth:f[d].lineCoordinates.width),C.push(Math.ceil(f[d]?f[d].createLabelsAndCalculateHeight():0)),V+=C[d],W+=f[d]?f[d].margin:0;else C.push(Math.ceil(f[0]?f[0].createLabelsAndCalculateHeight():0));R.push(C);if(a&&0<a.length)for(d=0;d<a.length;d++)a[d]&&(a[d].lineCoordinates.x1=h,t=Math.round(g.x2-ba-$>m.width-10?m.width-10:g.x2-ba-$),a[d]._labels&&1<a[d]._labels.length&&
(l=k=0,k=a[d]._labels[1],l="dateTime"===a[d].valueType?a[d]._labels[a[d]._labels.length-2]:a[d]._labels[a[d]._labels.length-1],x=k.textBlock.width*Math.cos(Math.PI/180*Math.abs(k.textBlock.angle))+(k.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(k.textBlock.angle)),u=l.textBlock.width*Math.cos(Math.PI/180*Math.abs(l.textBlock.angle))+(l.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(l.textBlock.angle))),a[d]&&(a[d].labelAutoFit&&!y(A)&&!y(I))&&(l=0,
0<a[d].labelAngle?I+u>t&&(l+=0<a[d].labelAngle?I+u-t-ba:0):0>a[d].labelAngle?A-x<h&&A-x<a[d].viewportMinimum&&(J=h-(M+a[d].tickLength+F+A-x+a[d].labelFontSize/2)):0===a[d].labelAngle&&(I+u>t&&(l=I+u/2-t-ba),A-x<h&&A-x<a[d].viewportMinimum&&(J=h-M-a[d].tickLength-F-A+x/2)),a[d].viewportMaximum===a[d].maximum&&a[d].viewportMinimum===a[d].minimum&&0<a[d].labelAngle&&0<l?t-=l:a[d].viewportMaximum===a[d].maximum&&a[d].viewportMinimum===a[d].minimum&&0>a[d].labelAngle&&0<J?h+=J:a[d].viewportMaximum===a[d].maximum&&
a[d].viewportMinimum===a[d].minimum&&0===a[d].labelAngle&&(0<J&&(h+=J),0<l&&(t-=l))),m.panEnabled?Z=m.sessionVariables.axisX.height:m.sessionVariables.axisX.height=Z,l=Math.round(g.y2-Z-e+E),k=Math.round(g.y2),a[d].lineCoordinates.x2=t,a[d].lineCoordinates.width=t-h,a[d].lineCoordinates.y1=l,a[d].lineCoordinates.y2=l,a[d].bounds={x1:h,y1:l,x2:t,y2:k-(Z+e-z[d]-E),width:t-h,height:k-l}),E+=z[d]+a[d].margin;if(f&&0<f.length)for(d=0;d<f.length;d++)f[d].lineCoordinates.x1=Math.round(g.x1+N+M),f[d].lineCoordinates.x2=
Math.round(g.x2-ba-$>m.width-10?m.width-10:g.x2-ba-$),f[d].lineCoordinates.width=Math.abs(t-h),f[d]._labels&&1<f[d]._labels.length&&(k=f[d]._labels[1],l="dateTime"===f[d].valueType?f[d]._labels[f[d]._labels.length-2]:f[d]._labels[f[d]._labels.length-1],x=k.textBlock.width*Math.cos(Math.PI/180*Math.abs(k.textBlock.angle))+(k.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(k.textBlock.angle)),u=l.textBlock.width*Math.cos(Math.PI/180*Math.abs(l.textBlock.angle))+(l.textBlock.height-
l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(l.textBlock.angle))),m.panEnabled?V=m.sessionVariables.axisX2.height:m.sessionVariables.axisX2.height=V,l=Math.round(g.y1),k=Math.round(g.y2+f[d].margin),f[d].lineCoordinates.y1=l+V+W-U,f[d].lineCoordinates.y2=l,f[d].bounds={x1:h,y1:l+(V+W-C[d]-U),x2:t,y2:k,width:t-h,height:k-l},U+=C[d]+f[d].margin;if(b&&0<b.length)for(d=0;d<b.length;d++)M=10,b[d]&&(h=Math.round(a[0]?a[0].lineCoordinates.x1:f[0].lineCoordinates.x1),M=b[d]._labels&&0<b[d]._labels.length?
b[d]._labels[b[d]._labels.length-1].textBlock.height/2:10,l=Math.round(g.y1+V+W<Math.max(M,10)?Math.max(M,10):g.y1+V+W),t=Math.round(a[0]?a[0].lineCoordinates.x1:f[0].lineCoordinates.x1),M=0<a.length?0:b[d]._labels&&0<b[d]._labels.length?b[d]._labels[0].textBlock.height/2:10,k=Math.round(g.y2-Z-e-M),b[d].lineCoordinates={x1:t-Y,y1:l,x2:t-Y,y2:k,height:Math.abs(k-l)},b[d].bounds={x1:h-(F[d]+Y),y1:l,x2:t,y2:k,width:t-h,height:k-l},b[d].title&&(b[d]._titleTextBlock.maxWidth=0<b[d].titleMaxWidth&&b[d].titleMaxWidth<
b[d].lineCoordinates.height?b[d].titleMaxWidth:b[d].lineCoordinates.height),Y+=F[d]+b[d].margin);if(c&&0<c.length)for(d=0;d<c.length;d++)c[d]&&(h=Math.round(a[0]?a[0].lineCoordinates.x2:f[0].lineCoordinates.x2),t=Math.round(h),M=c[d]._labels&&0<c[d]._labels.length?c[d]._labels[c[d]._labels.length-1].textBlock.height/2:0,l=Math.round(g.y1+V+W<Math.max(M,10)?Math.max(M,10):g.y1+V+W),M=0<a.length?0:c[d]._labels&&0<c[d]._labels.length?c[d]._labels[0].textBlock.height/2:0,k=Math.round(g.y2-(Z+e+M)),c[d].lineCoordinates=
{x1:h+X,y1:l,x2:h+X,y2:k,height:Math.abs(k-l)},c[d].bounds={x1:h,y1:l,x2:t+(B[d]+X),y2:k,width:t-h,height:k-l},c[d].title&&(c[d]._titleTextBlock.maxWidth=0<c[d].titleMaxWidth&&c[d].titleMaxWidth<c[d].lineCoordinates.height?c[d].titleMaxWidth:c[d].lineCoordinates.height),X+=B[d]+c[d].margin);if(a&&0<a.length)for(d=0;d<a.length;d++)a[d]&&(a[d].calculateValueToPixelConversionParameters(),a[d].calculateBreaksSizeInValues(),a[d]._labels&&1<a[d]._labels.length&&(A=(a[d].logarithmic?Math.log(a[d]._labels[1].position/
a[d].viewportMinimum)/a[d].conversionParameters.lnLogarithmBase:a[d]._labels[1].position-a[d].viewportMinimum)*Math.abs(a[d].conversionParameters.pixelPerUnit)+a[d].lineCoordinates.x1,h=a[d]._labels[a[d]._labels.length-("dateTime"===a[d].valueType?2:1)].position,h=a[d].getApparentDifference(a[d].viewportMinimum,h),I=a[d].logarithmic?(1<h?Math.log(h)/a[d].conversionParameters.lnLogarithmBase*Math.abs(a[d].conversionParameters.pixelPerUnit):0)+a[d].lineCoordinates.x1:(0<h?h*Math.abs(a[d].conversionParameters.pixelPerUnit):
0)+a[d].lineCoordinates.x1));if(f&&0<f.length)for(d=0;d<f.length;d++)f[d].calculateValueToPixelConversionParameters(),f[d].calculateBreaksSizeInValues(),f[d]._labels&&1<f[d]._labels.length&&(A=(f[d].logarithmic?Math.log(f[d]._labels[1].position/f[d].viewportMinimum)/f[d].conversionParameters.lnLogarithmBase:f[d]._labels[1].position-f[d].viewportMinimum)*Math.abs(f[d].conversionParameters.pixelPerUnit)+f[d].lineCoordinates.x1,h=f[d]._labels[f[d]._labels.length-("dateTime"===f[d].valueType?2:1)].position,
h=f[d].getApparentDifference(f[d].viewportMinimum,h),I=f[d].logarithmic?(1<h?Math.log(h)/f[d].conversionParameters.lnLogarithmBase*Math.abs(f[d].conversionParameters.pixelPerUnit):0)+f[d].lineCoordinates.x1:(0<h?h*Math.abs(f[d].conversionParameters.pixelPerUnit):0)+f[d].lineCoordinates.x1);for(d=0;d<n.length;d++)"axisY"===n[d].type&&(n[d].calculateValueToPixelConversionParameters(),n[d].calculateBreaksSizeInValues());if(0<s){if(a&&0<a.length)for(d=0;d<a.length;d++)q=P[s-1][d]===P[s][d]?!0:!1;else q=
!0;if(f&&0<f.length)for(d=0;d<f.length;d++)L=R[s-1][d]===R[s][d]?!0:!1;else L=!0;if(b&&0<b.length)for(d=0;d<b.length;d++)K=S[s-1][d]===S[s][d]?!0:!1;else K=!0;if(c&&0<c.length)for(d=0;d<c.length;d++)O=T[s-1][d]===T[s][d]?!0:!1;else O=!0}if(q&&L&&K&&O)break;s++}p.save();p.beginPath();a[0]&&p.rect(5,a[0].bounds.y1,a[0].chart.width-10,a[0].bounds.height);f[0]&&p.rect(5,f[f.length-1].bounds.y1,f[0].chart.width-10,f[0].bounds.height);p.clip();if(a&&0<a.length)for(d=0;d<a.length;d++)a[d].calculateStripLinesThicknessInValues(),
a[d].calculateBreaksInPixels(),a[d].renderLabelsTicksAndTitle();if(f&&0<f.length)for(d=0;d<f.length;d++)f[d].calculateStripLinesThicknessInValues(),f[d].calculateBreaksInPixels(),f[d].renderLabelsTicksAndTitle();p.restore();if(b&&0<b.length)for(d=0;d<b.length;d++)b[d].calculateStripLinesThicknessInValues(),b[d].calculateBreaksInPixels(),b[d].renderLabelsTicksAndTitle();if(c&&0<c.length)for(d=0;d<c.length;d++)c[d].calculateStripLinesThicknessInValues(),c[d].calculateBreaksInPixels(),c[d].renderLabelsTicksAndTitle()}else{A=
[];J=[];x=[];I=[];u=[];P=[];R=[];for(S=[];4>s;){V=Z=N=X=$=M=W=e=Y=T=U=E=0;if(a&&0<a.length)for(x=[],d=Z=0;d<a.length;d++)x.push(Math.ceil(a[d]?a[d].createLabelsAndCalculateWidth():0)),Z+=x[d],e+=a[d]?a[d].margin:0;else x.push(Math.ceil(a[0]?a[0].createLabelsAndCalculateWidth():0));R.push(x);if(f&&0<f.length)for(I=[],d=V=0;d<f.length;d++)I.push(Math.ceil(f[d]?f[d].createLabelsAndCalculateWidth():0)),V+=I[d],W+=f[d]?f[d].margin:0;else I.push(Math.ceil(f[0]?f[0].createLabelsAndCalculateWidth():0));S.push(I);
if(b&&0<b.length)for(d=0;d<b.length;d++)b[d].lineCoordinates={},h=Math.round(g.x1+Z+e),t=Math.round(g.x2-V-W>m.width-10?m.width-10:g.x2-V-W),b[d].labelAutoFit&&!y(z)&&(0<!a.length&&(h=0>b[d].labelAngle?Math.max(h,z):0===b[d].labelAngle?Math.max(h,z/2):h),0<!f.length&&(t=0<b[d].labelAngle?t-C/2:0===b[d].labelAngle?t-C/2:t)),b[d].lineCoordinates.x1=h,b[d].lineCoordinates.x2=t,b[d].lineCoordinates.width=Math.abs(t-h),b[d].title&&(b[d]._titleTextBlock.maxWidth=0<b[d].titleMaxWidth&&b[d].titleMaxWidth<
b[d].lineCoordinates.width?b[d].titleMaxWidth:b[d].lineCoordinates.width);if(c&&0<c.length)for(d=0;d<c.length;d++)c[d].lineCoordinates={},h=Math.round(g.x1+Z+e),t=Math.round(g.x2-V-W>c[d].chart.width-10?c[d].chart.width-10:g.x2-V-W),c[d]&&c[d].labelAutoFit&&!y(F)&&(0<!a.length&&(h=0<c[d].labelAngle?Math.max(h,F):0===c[d].labelAngle?Math.max(h,F/2):h),0<!f.length&&(t-=B/2)),c[d].lineCoordinates.x1=h,c[d].lineCoordinates.x2=t,c[d].lineCoordinates.width=Math.abs(t-h),c[d].title&&(c[d]._titleTextBlock.maxWidth=
0<c[d].titleMaxWidth&&c[d].titleMaxWidth<c[d].lineCoordinates.width?c[d].titleMaxWidth:c[d].lineCoordinates.width);if(b&&0<b.length)for(A=[],d=X=0;d<b.length;d++)A.push(Math.ceil(b[d]?b[d].createLabelsAndCalculateHeight():0)),X+=A[d]+b[d].margin,M+=b[d].margin;else A.push(Math.ceil(b[0]?b[0].createLabelsAndCalculateHeight():0));u.push(A);if(c&&0<c.length)for(J=[],d=N=0;d<c.length;d++)J.push(Math.ceil(c[d]?c[d].createLabelsAndCalculateHeight():0)),N+=J[d],$+=c[d].margin;else J.push(Math.ceil(c[0]?
c[0].createLabelsAndCalculateHeight():0));P.push(J);if(b&&0<b.length)for(d=0;d<b.length;d++)0<b[d]._labels.length&&(k=b[d]._labels[0],l=b[d]._labels[b[d]._labels.length-1],z=k.textBlock.width*Math.cos(Math.PI/180*Math.abs(k.textBlock.angle))+(k.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(k.textBlock.angle)),C=l.textBlock.width*Math.cos(Math.PI/180*Math.abs(l.textBlock.angle))+(l.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(l.textBlock.angle)));
if(c&&0<c.length)for(d=0;d<c.length;d++)c[d]&&0<c[d]._labels.length&&(k=c[d]._labels[0],l=c[d]._labels[c[d]._labels.length-1],F=k.textBlock.width*Math.cos(Math.PI/180*Math.abs(k.textBlock.angle))+(k.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(k.textBlock.angle)),B=l.textBlock.width*Math.cos(Math.PI/180*Math.abs(l.textBlock.angle))+(l.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(l.textBlock.angle)));if(m.panEnabled)for(d=0;d<b.length;d++)A[d]=m.sessionVariables.axisY.height;
else for(d=0;d<b.length;d++)m.sessionVariables.axisY.height=A[d];if(b&&0<b.length)for(d=b.length-1;0<=d;d--)l=Math.round(g.y2),k=Math.round(g.y2>b[d].chart.height-10?b[d].chart.height-10:g.y2),b[d].lineCoordinates.y1=l-(A[d]+b[d].margin+E),b[d].lineCoordinates.y2=l-(A[d]+b[d].margin+E),b[d].bounds={x1:h,y1:l-(A[d]+E+b[d].margin),x2:t,y2:k-(E+b[d].margin),width:t-h,height:A[d]},b[d].title&&(b[d]._titleTextBlock.maxWidth=0<b[d].titleMaxWidth&&b[d].titleMaxWidth<b[d].lineCoordinates.width?b[d].titleMaxWidth:
b[d].lineCoordinates.width),E+=A[d]+b[d].margin;if(c&&0<c.length)for(d=c.length-1;0<=d;d--)c[d]&&(l=Math.round(g.y1),k=Math.round(g.y1+(J[d]+c[d].margin+U)),c[d].lineCoordinates.y1=k,c[d].lineCoordinates.y2=k,c[d].bounds={x1:h,y1:l+(c[d].margin+U),x2:t,y2:k,width:t-h,height:N},c[d].title&&(c[d]._titleTextBlock.maxWidth=0<c[d].titleMaxWidth&&c[d].titleMaxWidth<c[d].lineCoordinates.width?c[d].titleMaxWidth:c[d].lineCoordinates.width),U+=J[d]+c[d].margin);if(a&&0<a.length)for(d=0;d<a.length;d++){M=a[d]._labels&&
0<a[d]._labels.length?a[d]._labels[0].textBlock.fontSize/2:0;h=Math.round(g.x1+e);l=c&&0<c.length?Math.round(c[0]?c[0].lineCoordinates.y2:g.y1<Math.max(M,10)?Math.max(M,10):g.y1):g.y1<Math.max(M,10)?Math.max(M,10):g.y1;t=Math.round(g.x1+Z+e);k=b&&0<b.length?Math.round(b[0]?b[0].lineCoordinates.y1:g.y2-X>m.height-Math.max(M,10)?m.height-Math.max(M,10):g.y2-X):g.y2>m.height-Math.max(M,10)?m.height-Math.max(M,10):g.y2;if(b&&0<b.length)for(M=0;M<b.length;M++)b[M]&&b[M].labelAutoFit&&(t=0>b[M].labelAngle?
Math.max(t,z):0===b[M].labelAngle?Math.max(t,z/2):t,h=0>b[M].labelAngle||0===b[M].labelAngle?t-Z:h);if(c&&0<c.length)for(M=0;M<c.length;M++)c[M]&&c[M].labelAutoFit&&(t=c[M].lineCoordinates.x1,h=t-Z);a[d].lineCoordinates={x1:t-T,y1:l,x2:t-T,y2:k,height:Math.abs(k-l)};a[d].bounds={x1:t-(x[d]+T),y1:l,x2:t,y2:k,width:t-h,height:k-l};a[d].title&&(a[d]._titleTextBlock.maxWidth=0<a[d].titleMaxWidth&&a[d].titleMaxWidth<a[d].lineCoordinates.height?a[d].titleMaxWidth:a[d].lineCoordinates.height);a[d].calculateValueToPixelConversionParameters();
a[d].calculateBreaksSizeInValues();T+=x[d]+a[d].margin}if(f&&0<f.length)for(d=0;d<f.length;d++){M=f[d]._labels&&0<f[d]._labels.length?f[d]._labels[0].textBlock.fontSize/2:0;h=Math.round(g.x1-e);l=c&&0<c.length?Math.round(c[0]?c[0].lineCoordinates.y2:g.y1<Math.max(M,10)?Math.max(M,10):g.y1):g.y1<Math.max(M,10)?Math.max(M,10):g.y1;t=Math.round(g.x2-V-W);k=b&&0<b.length?Math.round(b[0]?b[0].lineCoordinates.y1:g.y2-X>m.height-Math.max(M,10)?m.height-Math.max(M,10):g.y2-X):g.y2>m.height-Math.max(M,10)?
m.height-Math.max(M,10):g.y2;if(b&&0<b.length)for(M=0;M<b.length;M++)b[M]&&b[M].labelAutoFit&&(t=0>b[M].labelAngle?Math.max(t,z):0===b[M].labelAngle?Math.max(t,z/2):t,h=0>b[M].labelAngle||0===b[M].labelAngle?t-V:h);if(c&&0<c.length)for(M=0;M<c.length;M++)c[M]&&c[M].labelAutoFit&&(t=c[M].lineCoordinates.x2,h=t-V);f[d].lineCoordinates={x1:t+Y,y1:l,x2:t+Y,y2:k,height:Math.abs(k-l)};f[d].bounds={x1:h,y1:l,x2:t+I[d]+Y,y2:k,width:t-h,height:k-l};f[d].title&&(f[d]._titleTextBlock.maxWidth=0<f[d].titleMaxWidth&&
f[d].titleMaxWidth<f[d].lineCoordinates.height?f[d].titleMaxWidth:f[d].lineCoordinates.height);f[d].calculateValueToPixelConversionParameters();f[d].calculateBreaksSizeInValues();Y+=I[d]+f[d].margin}for(d=0;d<n.length;d++)"axisY"===n[d].type&&(n[d].calculateValueToPixelConversionParameters(),n[d].calculateBreaksSizeInValues());if(0<s){if(a&&0<a.length)for(d=0;d<a.length;d++)q=R[s-1][d]===R[s][d]?!0:!1;else q=!0;if(f&&0<f.length)for(d=0;d<f.length;d++)L=S[s-1][d]===S[s][d]?!0:!1;else L=!0;if(b&&0<
b.length)for(d=0;d<b.length;d++)K=u[s-1][d]===u[s][d]?!0:!1;else K=!0;if(c&&0<c.length)for(d=0;d<c.length;d++)O=P[s-1][d]===P[s][d]?!0:!1;else O=!0}if(q&&L&&K&&O)break;s++}if(b&&0<b.length)for(d=0;d<b.length;d++)b[d].calculateStripLinesThicknessInValues(),b[d].calculateBreaksInPixels(),b[d].renderLabelsTicksAndTitle();if(c&&0<c.length)for(d=0;d<c.length;d++)c[d].calculateStripLinesThicknessInValues(),c[d].calculateBreaksInPixels(),c[d].renderLabelsTicksAndTitle();if(a&&0<a.length)for(d=0;d<a.length;d++)a[d].calculateStripLinesThicknessInValues(),
a[d].calculateBreaksInPixels(),a[d].renderLabelsTicksAndTitle();if(f&&0<f.length)for(d=0;d<f.length;d++)f[d].calculateStripLinesThicknessInValues(),f[d].calculateBreaksInPixels(),f[d].renderLabelsTicksAndTitle()}m.preparePlotArea();g=m.plotArea;p.save();p.beginPath();p.rect(g.x1,g.y1,Math.abs(g.x2-g.x1),Math.abs(g.y2-g.y1));p.clip();if(a&&0<a.length)for(d=0;d<n.length;d++)n[d].renderStripLinesOfThicknessType("value");if(f&&0<f.length)for(d=0;d<f.length;d++)f[d].renderStripLinesOfThicknessType("value");
if(b&&0<b.length)for(d=0;d<b.length;d++)b[d].renderStripLinesOfThicknessType("value");if(c&&0<c.length)for(d=0;d<c.length;d++)c[d].renderStripLinesOfThicknessType("value");if(a&&0<a.length)for(d=0;d<a.length;d++)a[d].renderInterlacedColors();if(f&&0<f.length)for(d=0;d<f.length;d++)f[d].renderInterlacedColors();if(b&&0<b.length)for(d=0;d<b.length;d++)b[d].renderInterlacedColors();if(c&&0<c.length)for(d=0;d<c.length;d++)c[d].renderInterlacedColors();p.restore();if(a&&0<a.length)for(d=0;d<a.length;d++)a[d].renderGrid(),
v&&(a[d].createMask(),a[d].renderBreaksBackground());if(f&&0<f.length)for(d=0;d<f.length;d++)f[d].renderGrid(),v&&(f[d].createMask(),f[d].renderBreaksBackground());if(b&&0<b.length)for(d=0;d<b.length;d++)b[d].renderGrid(),v&&(b[d].createMask(),b[d].renderBreaksBackground());if(c&&0<c.length)for(d=0;d<c.length;d++)c[d].renderGrid(),v&&(c[d].createMask(),c[d].renderBreaksBackground());if(a&&0<a.length)for(d=0;d<a.length;d++)a[d].renderAxisLine();if(f&&0<f.length)for(d=0;d<f.length;d++)f[d].renderAxisLine();
if(b&&0<b.length)for(d=0;d<b.length;d++)b[d].renderAxisLine();if(c&&0<c.length)for(d=0;d<c.length;d++)c[d].renderAxisLine();if(a&&0<a.length)for(d=0;d<a.length;d++)a[d].renderStripLinesOfThicknessType("pixel");if(f&&0<f.length)for(d=0;d<f.length;d++)f[d].renderStripLinesOfThicknessType("pixel");if(b&&0<b.length)for(d=0;d<b.length;d++)b[d].renderStripLinesOfThicknessType("pixel");if(c&&0<c.length)for(d=0;d<c.length;d++)c[d].renderStripLinesOfThicknessType("pixel")};C.prototype.calculateStripLinesThicknessInValues=
function(){for(var a=0;a<this.stripLines.length;a++)if(null!==this.stripLines[a].startValue&&null!==this.stripLines[a].endValue){var f=Math.min(this.stripLines[a].startValue,this.stripLines[a].endValue),b=Math.max(this.stripLines[a].startValue,this.stripLines[a].endValue),f=this.getApparentDifference(f,b);this.stripLines[a].value=this.logarithmic?this.stripLines[a].value*Math.sqrt(Math.log(this.stripLines[a].endValue/this.stripLines[a].startValue)/Math.log(f)):this.stripLines[a].value+(Math.abs(this.stripLines[a].endValue-
this.stripLines[a].startValue)-f)/2;this.stripLines[a].thickness=f;this.stripLines[a]._thicknessType="value"}};C.prototype.calculateBreaksSizeInValues=function(){for(var a="left"===this._position||"right"===this._position?this.lineCoordinates.height||this.chart.height:this.lineCoordinates.width||this.chart.width,f=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[],b=this.conversionParameters.pixelPerUnit||a/(this.logarithmic?this.conversionParameters.maximum/this.conversionParameters.minimum:this.conversionParameters.maximum-
this.conversionParameters.minimum),c=this.scaleBreaks&&!y(this.scaleBreaks.options.spacing),e,g=0;g<f.length;g++)e=c||!y(f[g].options.spacing),f[g].spacing=J(f[g].spacing,a,8,e?0.1*a:8,e?0:3)<<0,f[g].size=0>f[g].spacing?0:Math.abs(f[g].spacing/b),this.logarithmic&&(f[g].size=Math.pow(this.logarithmBase,f[g].size))};C.prototype.calculateBreaksInPixels=function(){if(!(this.scaleBreaks&&0>=this.scaleBreaks._appliedBreaks.length)){var a=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[];a.length&&(this.scaleBreaks.firstBreakIndex=
this.scaleBreaks.lastBreakIndex=null);for(var f=0;f<a.length&&!(a[f].startValue>this.conversionParameters.maximum);f++)a[f].endValue<this.conversionParameters.minimum||(y(this.scaleBreaks.firstBreakIndex)&&(this.scaleBreaks.firstBreakIndex=f),a[f].startValue>=this.conversionParameters.minimum&&(a[f].startPixel=this.convertValueToPixel(a[f].startValue),this.scaleBreaks.lastBreakIndex=f),a[f].endValue<=this.conversionParameters.maximum&&(a[f].endPixel=this.convertValueToPixel(a[f].endValue)))}};C.prototype.renderLabelsTicksAndTitle=
function(){var a=this,f=!1,b=0,c=0,e=1,g=0;0!==this.labelAngle&&360!==this.labelAngle&&(e=1.2);if("undefined"===typeof this.options.interval){if("bottom"===this._position||"top"===this._position)if(this.logarithmic&&!this.equidistantInterval&&this.labelAutoFit){for(var b=[],e=0!==this.labelAngle&&360!==this.labelAngle?1:1.2,h,l=this.viewportMaximum,m=this.lineCoordinates.width/Math.log(this.range),k=this._labels.length-1;0<=k;k--){p=this._labels[k];if(p.position<this.viewportMinimum)break;p.position>
this.viewportMaximum||!(k===this._labels.length-1||h<Math.log(l/p.position)*m/e)||(b.push(p),l=p.position,h=p.textBlock.width*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+p.textBlock.height*Math.abs(Math.sin(Math.PI/180*this.labelAngle)))}this._labels=b}else{for(k=0;k<this._labels.length;k++)p=this._labels[k],p.position<this.viewportMinimum||(h=p.textBlock.width*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+p.textBlock.height*Math.abs(Math.sin(Math.PI/180*this.labelAngle)),b+=h);b>this.lineCoordinates.width*
e&&this.labelAutoFit&&(f=!0)}if("left"===this._position||"right"===this._position)if(this.logarithmic&&!this.equidistantInterval&&this.labelAutoFit){for(var b=[],r,l=this.viewportMaximum,m=this.lineCoordinates.height/Math.log(this.range),k=this._labels.length-1;0<=k;k--){p=this._labels[k];if(p.position<this.viewportMinimum)break;p.position>this.viewportMaximum||!(k===this._labels.length-1||r<Math.log(l/p.position)*m)||(b.push(p),l=p.position,r=p.textBlock.height*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+
p.textBlock.width*Math.abs(Math.sin(Math.PI/180*this.labelAngle)))}this._labels=b}else{for(k=0;k<this._labels.length;k++)p=this._labels[k],p.position<this.viewportMinimum||(r=p.textBlock.height*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+p.textBlock.width*Math.abs(Math.sin(Math.PI/180*this.labelAngle)),c+=r);c>this.lineCoordinates.height*e&&this.labelAutoFit&&(f=!0)}}this.logarithmic&&(!this.equidistantInterval&&this.labelAutoFit)&&this._labels.sort(function(a,b){return a.position-b.position});
var k=0,p,n;if("bottom"===this._position){for(k=0;k<this._labels.length;k++)p=this._labels[k],p.position<this.viewportMinimum||(p.position>this.viewportMaximum||f&&0!==g++%2&&this.labelAutoFit)||(n=this.getPixelCoordinatesOnAxis(p.position),this.tickThickness&&"inside"!=this.labelPlacement&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,c=1===this.ctx.lineWidth%2?(n.x<<0)+0.5:n.x<<0,this.ctx.beginPath(),this.ctx.moveTo(c,n.y<<0),this.ctx.lineTo(c,n.y+this.tickLength<<0),
this.ctx.stroke()),0===p.textBlock.angle?(n.x-=p.textBlock.width/2,n.y="inside"===this.labelPlacement?n.y-(this.tickLength+p.textBlock.fontSize/2):n.y+this.tickLength+p.textBlock.fontSize/2):(n.x="inside"===this.labelPlacement?0>this.labelAngle?n.x:n.x-p.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):n.x-(0>this.labelAngle?p.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0),n.y="inside"===this.labelPlacement?0>this.labelAngle?n.y-this.tickLength-5:n.y-this.tickLength-Math.abs(p.textBlock.width*
Math.sin(Math.PI/180*this.labelAngle)+5):n.y+this.tickLength+Math.abs(0>this.labelAngle?p.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)-5:5)),p.textBlock.x=n.x,p.textBlock.y=n.y);"inside"===this.labelPlacement&&this.chart.addEventListener("dataAnimationIterationEnd",function(){for(k=0;k<a._labels.length;k++)if(p=a._labels[k],!(p.position<a.viewportMinimum||p.position>a.viewportMaximum||f&&0!==g++%2&&a.labelAutoFit)&&(n=a.getPixelCoordinatesOnAxis(p.position),a.tickThickness)){a.ctx.lineWidth=
a.tickThickness;a.ctx.strokeStyle=a.tickColor;var b=1===a.ctx.lineWidth%2?(n.x<<0)+0.5:n.x<<0;a.ctx.save();a.ctx.beginPath();a.ctx.moveTo(b,n.y<<0);a.ctx.lineTo(b,n.y-a.tickLength<<0);a.ctx.stroke();a.ctx.restore()}},this);this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.y=this.bounds.y2-this._titleTextBlock.height-3,this.titleMaxWidth=this._titleTextBlock.maxWidth,this._titleTextBlock.render(!0))}else if("top"===
this._position){for(k=0;k<this._labels.length;k++)p=this._labels[k],p.position<this.viewportMinimum||(p.position>this.viewportMaximum||f&&0!==g++%2&&this.labelAutoFit)||(n=this.getPixelCoordinatesOnAxis(p.position),this.tickThickness&&"inside"!=this.labelPlacement&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,c=1===this.ctx.lineWidth%2?(n.x<<0)+0.5:n.x<<0,this.ctx.beginPath(),this.ctx.moveTo(c,n.y<<0),this.ctx.lineTo(c,n.y-this.tickLength<<0),this.ctx.stroke()),0===p.textBlock.angle?
(n.x-=p.textBlock.width/2,n.y="inside"===this.labelPlacement?n.y+this.labelFontSize/2+this.tickLength+5:n.y-(this.tickLength+p.textBlock.height-p.textBlock.fontSize/2)):(n.x="inside"===this.labelPlacement?0<this.labelAngle?n.x:n.x-p.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):n.x+(p.textBlock.height-this.tickLength-this.labelFontSize)*Math.sin(Math.PI/180*this.labelAngle)-(0<this.labelAngle?p.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0),n.y="inside"===this.labelPlacement?0<this.labelAngle?
n.y+this.tickLength+5:n.y-p.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)+this.tickLength+5:n.y-(this.tickLength+((p.textBlock.height-p.textBlock.fontSize/2)*Math.cos(Math.PI/180*this.labelAngle)+(0<this.labelAngle?p.textBlock.width*Math.sin(Math.PI/180*this.labelAngle):0)))),p.textBlock.x=n.x,p.textBlock.y=n.y);"inside"===this.labelPlacement&&this.chart.addEventListener("dataAnimationIterationEnd",function(){for(k=0;k<a._labels.length;k++)if(p=a._labels[k],!(p.position<a.viewportMinimum||
p.position>a.viewportMaximum||f&&0!==g++%2&&a.labelAutoFit)&&(n=a.getPixelCoordinatesOnAxis(p.position),a.tickThickness)){a.ctx.lineWidth=a.tickThickness;a.ctx.strokeStyle=a.tickColor;var b=1===this.ctx.lineWidth%2?(n.x<<0)+0.5:n.x<<0;a.ctx.save();a.ctx.beginPath();a.ctx.moveTo(b,n.y<<0);a.ctx.lineTo(b,n.y+a.tickLength<<0);a.ctx.stroke();a.ctx.restore()}},this);this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/
2,this._titleTextBlock.y=this.bounds.y1+1,this.titleMaxWidth=this._titleTextBlock.maxWidth,this._titleTextBlock.render(!0))}else if("left"===this._position){for(k=0;k<this._labels.length;k++)p=this._labels[k],p.position<this.viewportMinimum||(p.position>this.viewportMaximum||f&&0!==g++%2&&this.labelAutoFit)||(n=this.getPixelCoordinatesOnAxis(p.position),this.tickThickness&&"inside"!=this.labelPlacement&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,c=1===this.ctx.lineWidth%
2?(n.y<<0)+0.5:n.y<<0,this.ctx.beginPath(),this.ctx.moveTo(n.x<<0,c),this.ctx.lineTo(n.x-this.tickLength<<0,c),this.ctx.stroke()),0===this.labelAngle?(p.textBlock.y=n.y,p.textBlock.x="inside"===this.labelPlacement?n.x+this.tickLength+5:n.x-p.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5):(p.textBlock.y="inside"===this.labelPlacement?n.y:n.y-p.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),p.textBlock.x="inside"===this.labelPlacement?n.x+this.tickLength+5:0<this.labelAngle?
n.x-p.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5:n.x-p.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)+(p.textBlock.height-p.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)-this.tickLength));"inside"===this.labelPlacement&&this.chart.addEventListener("dataAnimationIterationEnd",function(){for(k=0;k<a._labels.length;k++)if(p=a._labels[k],!(p.position<a.viewportMinimum||p.position>a.viewportMaximum||f&&0!==g++%2&&a.labelAutoFit)&&(n=a.getPixelCoordinatesOnAxis(p.position),
a.tickThickness)){a.ctx.lineWidth=a.tickThickness;a.ctx.strokeStyle=a.tickColor;var b=1===a.ctx.lineWidth%2?(n.y<<0)+0.5:n.y<<0;a.ctx.save();a.ctx.beginPath();a.ctx.moveTo(n.x<<0,b);a.ctx.lineTo(n.x+a.tickLength<<0,b);a.ctx.stroke();a.ctx.restore()}},this);this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.bounds.x1+1,this._titleTextBlock.y=this.lineCoordinates.height/2+this._titleTextBlock.width/2+this.lineCoordinates.y1,this.titleMaxWidth=this._titleTextBlock.maxWidth,this._titleTextBlock.render(!0))}else if("right"===
this._position){for(k=0;k<this._labels.length;k++)p=this._labels[k],p.position<this.viewportMinimum||(p.position>this.viewportMaximum||f&&0!==g++%2&&this.labelAutoFit)||(n=this.getPixelCoordinatesOnAxis(p.position),this.tickThickness&&"inside"!=this.labelPlacement&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,c=1===this.ctx.lineWidth%2?(n.y<<0)+0.5:n.y<<0,this.ctx.beginPath(),this.ctx.moveTo(n.x<<0,c),this.ctx.lineTo(n.x+this.tickLength<<0,c),this.ctx.stroke()),0===this.labelAngle?
(p.textBlock.y=n.y,p.textBlock.x="inside"===this.labelPlacement?n.x-p.textBlock.width-this.tickLength-5:n.x+this.tickLength+5):(p.textBlock.y="inside"===this.labelPlacement?n.y-p.textBlock.width*Math.sin(Math.PI/180*this.labelAngle):0>this.labelAngle?n.y:n.y-(p.textBlock.height-p.textBlock.fontSize/2-5)*Math.cos(Math.PI/180*this.labelAngle),p.textBlock.x="inside"===this.labelPlacement?n.x-p.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5:0<this.labelAngle?n.x+(p.textBlock.height-
p.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)+this.tickLength:n.x+this.tickLength+5));"inside"===this.labelPlacement&&this.chart.addEventListener("dataAnimationIterationEnd",function(){for(k=0;k<a._labels.length;k++)if(p=a._labels[k],!(p.position<a.viewportMinimum||p.position>a.viewportMaximum||f&&0!==g++%2&&a.labelAutoFit)&&(n=a.getPixelCoordinatesOnAxis(p.position),a.tickThickness)){a.ctx.lineWidth=a.tickThickness;a.ctx.strokeStyle=a.tickColor;var b=1===a.ctx.lineWidth%2?(n.y<<
0)+0.5:n.y<<0;a.ctx.save();a.ctx.beginPath();a.ctx.moveTo(n.x<<0,b);a.ctx.lineTo(n.x-a.tickLength<<0,b);a.ctx.stroke();a.ctx.restore()}},this);this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.bounds.x2-1,this._titleTextBlock.y=this.lineCoordinates.height/2-this._titleTextBlock.width/2+this.lineCoordinates.y1,this.titleMaxWidth=this._titleTextBlock.maxWidth,this._titleTextBlock.render(!0))}g=0;if("inside"===this.labelPlacement)this.chart.addEventListener("dataAnimationIterationEnd",
function(){for(k=0;k<a._labels.length;k++)p=a._labels[k],p.position<a.viewportMinimum||(p.position>a.viewportMaximum||f&&0!==g++%2&&a.labelAutoFit)||(a.ctx.save(),a.ctx.beginPath(),p.textBlock.render(!0),a.ctx.restore())},p.textBlock);else for(k=0;k<this._labels.length;k++)p=this._labels[k],p.position<this.viewportMinimum||(p.position>this.viewportMaximum||f&&0!==g++%2&&this.labelAutoFit)||p.textBlock.render(!0)};C.prototype.renderInterlacedColors=function(){var a=this.chart.plotArea.ctx,f,b,c=this.chart.plotArea,
e=0;f=!0;if(("bottom"===this._position||"top"===this._position)&&this.interlacedColor)for(a.fillStyle=this.interlacedColor,e=0;e<this._labels.length;e++)f?(f=this.getPixelCoordinatesOnAxis(this._labels[e].position),b=e+1>this._labels.length-1?this.getPixelCoordinatesOnAxis(this.viewportMaximum):this.getPixelCoordinatesOnAxis(this._labels[e+1].position),a.fillRect(Math.min(b.x,f.x),c.y1,Math.abs(b.x-f.x),Math.abs(c.y1-c.y2)),f=!1):f=!0;else if(("left"===this._position||"right"===this._position)&&this.interlacedColor)for(a.fillStyle=
this.interlacedColor,e=0;e<this._labels.length;e++)f?(b=this.getPixelCoordinatesOnAxis(this._labels[e].position),f=e+1>this._labels.length-1?this.getPixelCoordinatesOnAxis(this.viewportMaximum):this.getPixelCoordinatesOnAxis(this._labels[e+1].position),a.fillRect(c.x1,Math.min(b.y,f.y),Math.abs(c.x1-c.x2),Math.abs(f.y-b.y)),f=!1):f=!0;a.beginPath()};C.prototype.renderStripLinesOfThicknessType=function(a){if(this.stripLines&&0<this.stripLines.length&&a){for(var f=this,b,c=0,e=0,g=!1,h=!1,l=[],m=[],
h=!1,c=0;c<this.stripLines.length;c++){var k=this.stripLines[c];k._thicknessType===a&&("pixel"===a&&(k.value<this.viewportMinimum||k.value>this.viewportMaximum||y(k.value)||isNaN(this.range))||l.push(k))}for(c=0;c<this._stripLineLabels.length;c++)if(k=this.stripLines[c],b=this._stripLineLabels[c],!(b.position<this.viewportMinimum||b.position>this.viewportMaximum||isNaN(this.range))){a=this.getPixelCoordinatesOnAxis(b.position);if("outside"===b.stripLine.labelPlacement)if(k&&(this.ctx.strokeStyle=
k.color,"pixel"===k._thicknessType&&(this.ctx.lineWidth=k.thickness)),"bottom"===this._position){var r=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0;this.ctx.beginPath();this.ctx.moveTo(r,a.y<<0);this.ctx.lineTo(r,a.y+this.tickLength<<0);this.ctx.stroke();0===this.labelAngle?(a.x-=b.textBlock.width/2,a.y+=this.tickLength+b.textBlock.fontSize/2):(a.x-=0>this.labelAngle?b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0,a.y+=this.tickLength+Math.abs(0>this.labelAngle?b.textBlock.width*Math.sin(Math.PI/
180*this.labelAngle)-5:5))}else"top"===this._position?(r=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0,this.ctx.beginPath(),this.ctx.moveTo(r,a.y<<0),this.ctx.lineTo(r,a.y-this.tickLength<<0),this.ctx.stroke(),0===this.labelAngle?(a.x-=b.textBlock.width/2,a.y-=this.tickLength+b.textBlock.height):(a.x+=(b.textBlock.height-this.tickLength-this.labelFontSize/2)*Math.sin(Math.PI/180*this.labelAngle)-(0<this.labelAngle?b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0),a.y-=this.tickLength+(b.textBlock.height*
Math.cos(Math.PI/180*this.labelAngle)+(0<this.labelAngle?b.textBlock.width*Math.sin(Math.PI/180*this.labelAngle):0)))):"left"===this._position?(r=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,this.ctx.beginPath(),this.ctx.moveTo(a.x<<0,r),this.ctx.lineTo(a.x-this.tickLength<<0,r),this.ctx.stroke(),0===this.labelAngle?a.x=a.x-b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5:(a.y-=b.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),a.x=0<this.labelAngle?a.x-b.textBlock.width*
Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5:a.x-b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)+(b.textBlock.height-b.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)-this.tickLength)):"right"===this._position&&(r=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,this.ctx.beginPath(),this.ctx.moveTo(a.x<<0,r),this.ctx.lineTo(a.x+this.tickLength<<0,r),this.ctx.stroke(),0===this.labelAngle?a.x=a.x+this.tickLength+5:(a.y=0>this.labelAngle?a.y:a.y-(b.textBlock.height-b.textBlock.fontSize/
2-5)*Math.cos(Math.PI/180*this.labelAngle),a.x=0<this.labelAngle?a.x+(b.textBlock.height-b.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)+this.tickLength:a.x+this.tickLength+5));else b.textBlock.angle=-90,"bottom"===this._position?(b.textBlock.maxWidth=this.options.stripLines[c].labelMaxWidth?this.options.stripLines[c].labelMaxWidth:this.chart.plotArea.height-3,b.textBlock.measureText(),a.x-b.textBlock.height>this.chart.plotArea.x1?y(k.startValue)?a.x-=b.textBlock.height-b.textBlock.fontSize/
2:a.x-=b.textBlock.height/2-b.textBlock.fontSize/2+3:(b.textBlock.angle=90,y(k.startValue)?a.x+=b.textBlock.height-b.textBlock.fontSize/2:a.x+=b.textBlock.height/2-b.textBlock.fontSize/2+3),a.y=-90===b.textBlock.angle?"near"===b.stripLine.labelAlign?this.chart.plotArea.y2-3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1+b.textBlock.width)/2:this.chart.plotArea.y1+b.textBlock.width+3:"near"===b.stripLine.labelAlign?this.chart.plotArea.y2-b.textBlock.width-3:"center"===
b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1-b.textBlock.width)/2:this.chart.plotArea.y1+3):"top"===this._position?(b.textBlock.maxWidth=this.options.stripLines[c].labelMaxWidth?this.options.stripLines[c].labelMaxWidth:this.chart.plotArea.height-3,b.textBlock.measureText(),a.x-b.textBlock.height>this.chart.plotArea.x1?y(k.startValue)?a.x-=b.textBlock.height-b.textBlock.fontSize/2:a.x-=b.textBlock.height/2-b.textBlock.fontSize/2+3:(b.textBlock.angle=90,y(k.startValue)?a.x+=
b.textBlock.height-b.textBlock.fontSize/2:a.x+=b.textBlock.height/2-b.textBlock.fontSize/2+3),a.y=-90===b.textBlock.angle?"near"===b.stripLine.labelAlign?this.chart.plotArea.y1+b.textBlock.width+3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1+b.textBlock.width)/2:this.chart.plotArea.y2-3:"near"===b.stripLine.labelAlign?this.chart.plotArea.y1+3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1-b.textBlock.width)/2:this.chart.plotArea.y2-
b.textBlock.width-3):"left"===this._position?(b.textBlock.maxWidth=this.options.stripLines[c].labelMaxWidth?this.options.stripLines[c].labelMaxWidth:this.chart.plotArea.width-3,b.textBlock.angle=0,b.textBlock.measureText(),a.y-b.textBlock.height>this.chart.plotArea.y1?y(k.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/2-b.textBlock.fontSize+3:a.y-b.textBlock.height<this.chart.plotArea.y2?a.y+=b.textBlock.fontSize/2+3:y(k.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/
2:a.y-=b.textBlock.height/2-b.textBlock.fontSize+3,a.x="near"===b.stripLine.labelAlign?this.chart.plotArea.x1+3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.x2+this.chart.plotArea.x1)/2-b.textBlock.width/2:this.chart.plotArea.x2-b.textBlock.width-3):"right"===this._position&&(b.textBlock.maxWidth=this.options.stripLines[c].labelMaxWidth?this.options.stripLines[c].labelMaxWidth:this.chart.plotArea.width-3,b.textBlock.angle=0,b.textBlock.measureText(),a.y-+b.textBlock.height>this.chart.plotArea.y1?
y(k.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/2-b.textBlock.fontSize/2-3:a.y-b.textBlock.height<this.chart.plotArea.y2?a.y+=b.textBlock.fontSize/2+3:y(k.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/2-b.textBlock.fontSize/2+3,a.x="near"===b.stripLine.labelAlign?this.chart.plotArea.x2-b.textBlock.width-3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.x2+this.chart.plotArea.x1)/2-b.textBlock.width/2:this.chart.plotArea.x1+
3);b.textBlock.x=a.x;b.textBlock.y=a.y;m.push(b)}if(!h){h=!1;this.ctx.save();this.ctx.beginPath();this.ctx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height);this.ctx.clip();for(c=0;c<l.length;c++)k=l[c],k.showOnTop?g||(g=!0,this.chart.addEventListener("dataAnimationIterationEnd",function(){this.ctx.save();this.ctx.beginPath();this.ctx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height);this.ctx.clip();
for(e=0;e<l.length;e++)k=l[e],k.showOnTop&&k.render();this.ctx.restore()},k)):k.render();for(c=0;c<m.length;c++)b=m[c],b.stripLine.showOnTop?h||(h=!0,this.chart.addEventListener("dataAnimationIterationEnd",function(){for(e=0;e<m.length;e++)b=m[e],"inside"===b.stripLine.labelPlacement&&b.stripLine.showOnTop&&(f.ctx.save(),f.ctx.beginPath(),f.ctx.rect(f.chart.plotArea.x1,f.chart.plotArea.y1,f.chart.plotArea.width,f.chart.plotArea.height),f.ctx.clip(),b.textBlock.render(!0),f.ctx.restore())},b.textBlock)):
"inside"===b.stripLine.labelPlacement&&b.textBlock.render(!0);this.ctx.restore();h=!0}if(h)for(h=!1,c=0;c<m.length;c++)b=m[c],b.stripLine.showOnTop?h||(h=!0,this.chart.addEventListener("dataAnimationIterationEnd",function(){for(e=0;e<m.length;e++)b=m[e],"outside"===b.stripLine.labelPlacement&&b.stripLine.showOnTop&&b.textBlock.render(!0)},b.textBlock)):"outside"===b.stripLine.labelPlacement&&b.textBlock.render(!0)}};C.prototype.renderBreaksBackground=function(){this.chart._breaksCanvas&&(this.scaleBreaks&&
0<this.scaleBreaks._appliedBreaks.length&&this.maskCanvas)&&(this.chart._breaksCanvasCtx.save(),this.chart._breaksCanvasCtx.beginPath(),this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height),this.chart._breaksCanvasCtx.clip(),this.chart._breaksCanvasCtx.drawImage(this.maskCanvas,0,0,this.chart.width,this.chart.height),this.chart._breaksCanvasCtx.restore())};C.prototype.createMask=function(){if(this.scaleBreaks&&0<this.scaleBreaks._appliedBreaks.length){var a=
this.scaleBreaks._appliedBreaks;v?(this.maskCanvas=ta(this.chart.width,this.chart.height),this.maskCtx=this.maskCanvas.getContext("2d")):(this.maskCanvas=this.chart.plotArea.canvas,this.maskCtx=this.chart.plotArea.ctx);this.maskCtx.save();this.maskCtx.beginPath();this.maskCtx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height);this.maskCtx.clip();for(var f=0;f<a.length;f++)a[f].endValue<this.viewportMinimum||(a[f].startValue>this.viewportMaximum||
isNaN(this.range))||a[f].render(this.maskCtx);this.maskCtx.restore()}};C.prototype.renderCrosshair=function(a,f){this.crosshair.render(a,f)};C.prototype.renderGrid=function(){if(this.gridThickness&&0<this.gridThickness){var a=this.chart.ctx;a.save();var f,b=this.chart.plotArea;a.lineWidth=this.gridThickness;a.strokeStyle=this.gridColor;a.setLineDash&&a.setLineDash(F(this.gridDashType,this.gridThickness));if("bottom"===this._position||"top"===this._position)for(c=0;c<this._labels.length;c++)this._labels[c].position<
this.viewportMinimum||(this._labels[c].position>this.viewportMaximum||this._labels[c].breaksLabelType)||(a.beginPath(),f=this.getPixelCoordinatesOnAxis(this._labels[c].position),f=1===a.lineWidth%2?(f.x<<0)+0.5:f.x<<0,a.moveTo(f,b.y1<<0),a.lineTo(f,b.y2<<0),a.stroke());else if("left"===this._position||"right"===this._position)for(var c=0;c<this._labels.length;c++)this._labels[c].position<this.viewportMinimum||(this._labels[c].position>this.viewportMaximum||this._labels[c].breaksLabelType)||(a.beginPath(),
f=this.getPixelCoordinatesOnAxis(this._labels[c].position),f=1===a.lineWidth%2?(f.y<<0)+0.5:f.y<<0,a.moveTo(b.x1<<0,f),a.lineTo(b.x2<<0,f),a.stroke());a.restore()}};C.prototype.renderAxisLine=function(){var a=this.chart.ctx,f=v?this.chart._preRenderCtx:a,b=Math.ceil(this.tickThickness/(this.reversed?-2:2)),c=Math.ceil(this.tickThickness/(this.reversed?2:-2)),e,g;f.save();if("bottom"===this._position||"top"===this._position){if(this.lineThickness){this.reversed?(e=this.lineCoordinates.x2,g=this.lineCoordinates.x1):
(e=this.lineCoordinates.x1,g=this.lineCoordinates.x2);f.lineWidth=this.lineThickness;f.strokeStyle=this.lineColor?this.lineColor:"black";f.setLineDash&&f.setLineDash(F(this.lineDashType,this.lineThickness));var h=1===this.lineThickness%2?(this.lineCoordinates.y1<<0)+0.5:this.lineCoordinates.y1<<0;f.beginPath();if(this.scaleBreaks&&!y(this.scaleBreaks.firstBreakIndex))if(y(this.scaleBreaks.lastBreakIndex))e=this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel+c;else for(var l=
this.scaleBreaks.firstBreakIndex;l<=this.scaleBreaks.lastBreakIndex;l++)f.moveTo(e,h),f.lineTo(this.scaleBreaks._appliedBreaks[l].startPixel+b,h),e=this.scaleBreaks._appliedBreaks[l].endPixel+c;e&&(f.moveTo(e,h),f.lineTo(g,h));f.stroke()}}else if(("left"===this._position||"right"===this._position)&&this.lineThickness){this.reversed?(e=this.lineCoordinates.y1,g=this.lineCoordinates.y2):(e=this.lineCoordinates.y2,g=this.lineCoordinates.y1);f.lineWidth=this.lineThickness;f.strokeStyle=this.lineColor;
f.setLineDash&&f.setLineDash(F(this.lineDashType,this.lineThickness));h=1===this.lineThickness%2?(this.lineCoordinates.x1<<0)+0.5:this.lineCoordinates.x1<<0;f.beginPath();if(this.scaleBreaks&&!y(this.scaleBreaks.firstBreakIndex))if(y(this.scaleBreaks.lastBreakIndex))e=this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel+b;else for(l=this.scaleBreaks.firstBreakIndex;l<=this.scaleBreaks.lastBreakIndex;l++)f.moveTo(h,e),f.lineTo(h,this.scaleBreaks._appliedBreaks[l].startPixel+c),
e=this.scaleBreaks._appliedBreaks[l].endPixel+b;e&&(f.moveTo(h,e),f.lineTo(h,g));f.stroke()}v&&(a.drawImage(this.chart._preRenderCanvas,0,0,this.chart.width,this.chart.height),this.chart._breaksCanvasCtx&&this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas,0,0,this.chart.width,this.chart.height),f.clearRect(0,0,this.chart.width,this.chart.height));f.restore()};C.prototype.getPixelCoordinatesOnAxis=function(a){var f={};if("bottom"===this._position||"top"===this._position)f.x=this.convertValueToPixel(a),
f.y=this.lineCoordinates.y1;if("left"===this._position||"right"===this._position)f.y=this.convertValueToPixel(a),f.x=this.lineCoordinates.x2;return f};C.prototype.convertPixelToValue=function(a){if("undefined"===typeof a)return null;var f=0,b=0,c,f=!0,e=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[],b="number"===typeof a?a:"left"===this._position||"right"===this._position?a.y:a.x;if(this.logarithmic){a=c=Math.pow(this.logarithmBase,(b-this.conversionParameters.reference)/this.conversionParameters.pixelPerUnit);
if(b<=this.conversionParameters.reference===("left"===this._position||"right"===this._position)!==this.reversed)for(b=0;b<e.length;b++){if(!(e[b].endValue<this.conversionParameters.minimum))if(f)if(e[b].startValue<this.conversionParameters.minimum){if(1<e[b].size&&this.conversionParameters.minimum*Math.pow(e[b].endValue/e[b].startValue,Math.log(c)/Math.log(e[b].size))<e[b].endValue){a=Math.pow(e[b].endValue/e[b].startValue,Math.log(c)/Math.log(e[b].size));break}else a*=e[b].endValue/this.conversionParameters.minimum/
Math.pow(e[b].size,Math.log(e[b].endValue/this.conversionParameters.minimum)/Math.log(e[b].endValue/e[b].startValue)),c/=Math.pow(e[b].size,Math.log(e[b].endValue/this.conversionParameters.minimum)/Math.log(e[b].endValue/e[b].startValue));f=!1}else if(c>e[b].startValue/this.conversionParameters.minimum){c/=e[b].startValue/this.conversionParameters.minimum;if(c<e[b].size){a*=Math.pow(e[b].endValue/e[b].startValue,1===e[b].size?1:Math.log(c)/Math.log(e[b].size))/c;break}else a*=e[b].endValue/e[b].startValue/
e[b].size;c/=e[b].size;f=!1}else break;else if(c>e[b].startValue/e[b-1].endValue){c/=e[b].startValue/e[b-1].endValue;if(c<e[b].size){a*=Math.pow(e[b].endValue/e[b].startValue,1===e[b].size?1:Math.log(c)/Math.log(e[b].size))/c;break}else a*=e[b].endValue/e[b].startValue/e[b].size;c/=e[b].size}else break}else for(b=e.length-1;0<=b;b--)if(!(e[b].startValue>this.conversionParameters.minimum))if(f)if(e[b].endValue>this.conversionParameters.minimum){if(1<e[b].size&&this.conversionParameters.minimum*Math.pow(e[b].endValue/
e[b].startValue,Math.log(c)/Math.log(e[b].size))>e[b].startValue){a=Math.pow(e[b].endValue/e[b].startValue,Math.log(c)/Math.log(e[b].size));break}else a*=e[b].startValue/this.conversionParameters.minimum*Math.pow(e[b].size,Math.log(e[b].startValue/this.conversionParameters.minimum)/Math.log(e[b].endValue/e[b].startValue))*c,c*=Math.pow(e[b].size,Math.log(this.conversionParameters.minimum/e[b].startValue)/Math.log(e[b].endValue/e[b].startValue));f=!1}else if(c<e[b].endValue/this.conversionParameters.minimum){c/=
e[b].endValue/this.conversionParameters.minimum;if(c>1/e[b].size){a*=Math.pow(e[b].endValue/e[b].startValue,1>=e[b].size?1:Math.log(c)/Math.log(e[b].size))*c;break}else a/=e[b].endValue/e[b].startValue/e[b].size;c*=e[b].size;f=!1}else break;else if(c<e[b].endValue/e[b+1].startValue){c/=e[b].endValue/e[b+1].startValue;if(c>1/e[b].size){a*=Math.pow(e[b].endValue/e[b].startValue,1>=e[b].size?1:Math.log(c)/Math.log(e[b].size))*c;break}else a/=e[b].endValue/e[b].startValue/e[b].size;c*=e[b].size}else break;
f=a*this.viewportMinimum}else{a=c=(b-this.conversionParameters.reference)/this.conversionParameters.pixelPerUnit;if(b<=this.conversionParameters.reference===("left"===this._position||"right"===this._position)!==this.reversed)for(b=0;b<e.length;b++){if(!(e[b].endValue<this.conversionParameters.minimum))if(f)if(e[b].startValue<this.conversionParameters.minimum){if(e[b].size&&this.conversionParameters.minimum+c*(e[b].endValue-e[b].startValue)/e[b].size<e[b].endValue){a=0>=e[b].size?0:c*(e[b].endValue-
e[b].startValue)/e[b].size;break}else a+=e[b].endValue-this.conversionParameters.minimum-e[b].size*(e[b].endValue-this.conversionParameters.minimum)/(e[b].endValue-e[b].startValue),c-=e[b].size*(e[b].endValue-this.conversionParameters.minimum)/(e[b].endValue-e[b].startValue);f=!1}else if(c>e[b].startValue-this.conversionParameters.minimum){c-=e[b].startValue-this.conversionParameters.minimum;if(c<e[b].size){a+=(e[b].endValue-e[b].startValue)*(0===e[b].size?1:c/e[b].size)-c;break}else a+=e[b].endValue-
e[b].startValue-e[b].size;c-=e[b].size;f=!1}else break;else if(c>e[b].startValue-e[b-1].endValue){c-=e[b].startValue-e[b-1].endValue;if(c<e[b].size){a+=(e[b].endValue-e[b].startValue)*(0===e[b].size?1:c/e[b].size)-c;break}else a+=e[b].endValue-e[b].startValue-e[b].size;c-=e[b].size}else break}else for(b=e.length-1;0<=b;b--)if(!(e[b].startValue>this.conversionParameters.minimum))if(f)if(e[b].endValue>this.conversionParameters.minimum)if(e[b].size&&this.conversionParameters.minimum+c*(e[b].endValue-
e[b].startValue)/e[b].size>e[b].startValue){a=0>=e[b].size?0:c*(e[b].endValue-e[b].startValue)/e[b].size;break}else a+=e[b].startValue-this.conversionParameters.minimum+e[b].size*(this.conversionParameters.minimum-e[b].startValue)/(e[b].endValue-e[b].startValue),c+=e[b].size*(this.conversionParameters.minimum-e[b].startValue)/(e[b].endValue-e[b].startValue),f=!1;else if(c<e[b].endValue-this.conversionParameters.minimum){c-=e[b].endValue-this.conversionParameters.minimum;if(c>-1*e[b].size){a+=(e[b].endValue-
e[b].startValue)*(0===e[b].size?1:c/e[b].size)+c;break}else a-=e[b].endValue-e[b].startValue-e[b].size;c+=e[b].size;f=!1}else break;else if(c<e[b].endValue-e[b+1].startValue){c-=e[b].endValue-e[b+1].startValue;if(c>-1*e[b].size){a+=(e[b].endValue-e[b].startValue)*(0===e[b].size?1:c/e[b].size)+c;break}else a-=e[b].endValue-e[b].startValue-e[b].size;c+=e[b].size}else break;f=this.conversionParameters.minimum+a}return f};C.prototype.convertValueToPixel=function(a){a=this.getApparentDifference(this.conversionParameters.minimum,
a,a);return this.logarithmic?this.conversionParameters.reference+this.conversionParameters.pixelPerUnit*Math.log(a/this.conversionParameters.minimum)/this.conversionParameters.lnLogarithmBase+0.5<<0:"axisX"===this.type?this.conversionParameters.reference+this.conversionParameters.pixelPerUnit*(a-this.conversionParameters.minimum)+0.5<<0:this.conversionParameters.reference+this.conversionParameters.pixelPerUnit*(a-this.conversionParameters.minimum)+0.5};C.prototype.getApparentDifference=function(a,
f,b,c){var e=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[];if(this.logarithmic){b=y(b)?f/a:b;for(var g=0;g<e.length&&!(f<e[g].startValue);g++)a>e[g].endValue||(a<=e[g].startValue&&f>=e[g].endValue?b=b/e[g].endValue*e[g].startValue*e[g].size:a>=e[g].startValue&&f>=e[g].endValue?b=b/e[g].endValue*a*Math.pow(e[g].size,Math.log(e[g].endValue/a)/Math.log(e[g].endValue/e[g].startValue)):a<=e[g].startValue&&f<=e[g].endValue?b=b/f*e[g].startValue*Math.pow(e[g].size,Math.log(f/e[g].startValue)/Math.log(e[g].endValue/
e[g].startValue)):!c&&(a>e[g].startValue&&f<e[g].endValue)&&(b=a*Math.pow(e[g].size,Math.log(f/a)/Math.log(e[g].endValue/e[g].startValue))))}else for(b=y(b)?Math.abs(f-a):b,g=0;g<e.length&&!(f<e[g].startValue);g++)a>e[g].endValue||(a<=e[g].startValue&&f>=e[g].endValue?b=b-e[g].endValue+e[g].startValue+e[g].size:a>e[g].startValue&&f>=e[g].endValue?b=b-e[g].endValue+a+e[g].size*(e[g].endValue-a)/(e[g].endValue-e[g].startValue):a<=e[g].startValue&&f<e[g].endValue?b=b-f+e[g].startValue+e[g].size*(f-e[g].startValue)/
(e[g].endValue-e[g].startValue):!c&&(a>e[g].startValue&&f<e[g].endValue)&&(b=a+e[g].size*(f-a)/(e[g].endValue-e[g].startValue)));return b};C.prototype.setViewPortRange=function(a,f){this.sessionVariables.newViewportMinimum=this.viewportMinimum=Math.min(a,f);this.sessionVariables.newViewportMaximum=this.viewportMaximum=Math.max(a,f)};C.prototype.getXValueAt=function(a){if(!a)return null;var f=null;"left"===this._position?f=this.convertPixelToValue(a.y):"bottom"===this._position&&(f=this.convertPixelToValue(a.x));
return f};C.prototype.calculateValueToPixelConversionParameters=function(a){a=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[];var f={pixelPerUnit:null,minimum:null,reference:null},b=this.lineCoordinates.width,c=this.lineCoordinates.height,b="bottom"===this._position||"top"===this._position?b:c,c=Math.abs(this.range);if(this.logarithmic)for(var e=0;e<a.length&&!(this.viewportMaximum<a[e].startValue);e++)this.viewportMinimum>a[e].endValue||(this.viewportMinimum>=a[e].startValue&&this.viewportMaximum<=
a[e].endValue?b=0:this.viewportMinimum<=a[e].startValue&&this.viewportMaximum>=a[e].endValue?(c=c/a[e].endValue*a[e].startValue,b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100):b-Math.min(a[e].spacing,0.1*b)):this.viewportMinimum>a[e].startValue&&this.viewportMaximum>=a[e].endValue?(c=c/a[e].endValue*this.viewportMinimum,b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100*Math.log(a[e].endValue/this.viewportMinimum)/Math.log(a[e].endValue/a[e].startValue)):
b-Math.min(a[e].spacing,0.1*b)*Math.log(a[e].endValue/this.viewportMinimum)/Math.log(a[e].endValue/a[e].startValue)):this.viewportMinimum<=a[e].startValue&&this.viewportMaximum<a[e].endValue&&(c=c/this.viewportMaximum*a[e].startValue,b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100*Math.log(this.viewportMaximum/a[e].startValue)/Math.log(a[e].endValue/a[e].startValue)):b-Math.min(a[e].spacing,0.1*b)*Math.log(this.viewportMaximum/a[e].startValue)/Math.log(a[e].endValue/a[e].startValue)));
else for(e=0;e<a.length&&!(this.viewportMaximum<a[e].startValue);e++)this.viewportMinimum>a[e].endValue||(this.viewportMinimum>=a[e].startValue&&this.viewportMaximum<=a[e].endValue?b=0:this.viewportMinimum<=a[e].startValue&&this.viewportMaximum>=a[e].endValue?(c=c-a[e].endValue+a[e].startValue,b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100):b-Math.min(a[e].spacing,0.1*b)):this.viewportMinimum>a[e].startValue&&this.viewportMaximum>=a[e].endValue?(c=c-a[e].endValue+this.viewportMinimum,
b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100*(a[e].endValue-this.viewportMinimum)/(a[e].endValue-a[e].startValue)):b-Math.min(a[e].spacing,0.1*b)*(a[e].endValue-this.viewportMinimum)/(a[e].endValue-a[e].startValue)):this.viewportMinimum<=a[e].startValue&&this.viewportMaximum<a[e].endValue&&(c=c-this.viewportMaximum+a[e].startValue,b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100*(this.viewportMaximum-a[e].startValue)/(a[e].endValue-a[e].startValue)):
b-Math.min(a[e].spacing,0.1*b)*(this.viewportMaximum-a[e].startValue)/(a[e].endValue-a[e].startValue)));f.minimum=this.viewportMinimum;f.maximum=this.viewportMaximum;f.range=c;if("bottom"===this._position||"top"===this._position)this.logarithmic?(f.lnLogarithmBase=Math.log(this.logarithmBase),f.pixelPerUnit=(this.reversed?-1:1)*b*f.lnLogarithmBase/Math.log(Math.abs(c))):f.pixelPerUnit=(this.reversed?-1:1)*b/Math.abs(c),f.reference=this.reversed?this.lineCoordinates.x2:this.lineCoordinates.x1;if("left"===
this._position||"right"===this._position)this.logarithmic?(f.lnLogarithmBase=Math.log(this.logarithmBase),f.pixelPerUnit=(this.reversed?1:-1)*b*f.lnLogarithmBase/Math.log(Math.abs(c))):f.pixelPerUnit=(this.reversed?1:-1)*b/Math.abs(c),f.reference=this.reversed?this.lineCoordinates.y1:this.lineCoordinates.y2;this.conversionParameters=f};C.prototype.calculateAxisParameters=function(){if(this.logarithmic)this.calculateLogarithmicAxisParameters();else{var a=this.chart.layoutManager.getFreeSpace(),f=!1,
b=!1;"bottom"===this._position||"top"===this._position?(this.maxWidth=a.width,this.maxHeight=a.height):(this.maxWidth=a.height,this.maxHeight=a.width);var a="axisX"===this.type?"xySwapped"===this.chart.plotInfo.axisPlacement?62:70:"xySwapped"===this.chart.plotInfo.axisPlacement?50:40,c=4;"axisX"===this.type&&(c=600>this.maxWidth?8:6);var a=Math.max(c,Math.floor(this.maxWidth/a)),e,g,h,c=0;!y(this.options.viewportMinimum)&&(!y(this.options.viewportMaximum)&&this.options.viewportMinimum>=this.options.viewportMaximum)&&
(this.viewportMinimum=this.viewportMaximum=null);if(y(this.options.viewportMinimum)&&!y(this.sessionVariables.newViewportMinimum)&&!isNaN(this.sessionVariables.newViewportMinimum))this.viewportMinimum=this.sessionVariables.newViewportMinimum;else if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=this.minimum;if(y(this.options.viewportMaximum)&&!y(this.sessionVariables.newViewportMaximum)&&!isNaN(this.sessionVariables.newViewportMaximum))this.viewportMaximum=this.sessionVariables.newViewportMaximum;
else if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=this.maximum;if(this.scaleBreaks)for(c=0;c<this.scaleBreaks._appliedBreaks.length;c++)if((!y(this.sessionVariables.newViewportMinimum)&&this.sessionVariables.newViewportMinimum>=this.scaleBreaks._appliedBreaks[c].startValue||!y(this.options.minimum)&&this.options.minimum>=this.scaleBreaks._appliedBreaks[c].startValue||!y(this.options.viewportMinimum)&&this.viewportMinimum>=this.scaleBreaks._appliedBreaks[c].startValue)&&
(!y(this.sessionVariables.newViewportMaximum)&&this.sessionVariables.newViewportMaximum<=this.scaleBreaks._appliedBreaks[c].endValue||!y(this.options.maximum)&&this.options.maximum<=this.scaleBreaks._appliedBreaks[c].endValue||!y(this.options.viewportMaximum)&&this.viewportMaximum<=this.scaleBreaks._appliedBreaks[c].endValue)){this.scaleBreaks._appliedBreaks.splice(c,1);break}if("axisX"===this.type){if(this.dataSeries&&0<this.dataSeries.length)for(e=0;e<this.dataSeries.length;e++)"dateTime"===this.dataSeries[e].xValueType&&
(b=!0);e=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin;g=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax;0===g-e&&(c="undefined"===typeof this.options.interval?0.4:this.options.interval,g+=c,e-=c);Infinity!==this.dataInfo.minDiff?h=this.dataInfo.minDiff:1<g-e?h=0.5*Math.abs(g-e):(h=1,b&&(f=!0))}else"axisY"===this.type&&(e=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,g=null!==this.viewportMaximum?this.viewportMaximum:
this.dataInfo.viewPortMax,isFinite(e)||isFinite(g)?isFinite(e)?isFinite(g)||(g=e):e=g:(g="undefined"===typeof this.options.interval?-Infinity:this.options.interval,e="undefined"!==typeof this.options.interval||isFinite(this.dataInfo.minDiff)?0:Infinity),0===e&&0===g?(g+=9,e=0):0===g-e?(c=Math.min(Math.abs(0.01*Math.abs(g)),5),g+=c,e-=c):e>g?(c=Math.min(0.01*Math.abs(this.getApparentDifference(g,e,null,!0)),5),0<=g?e=g-c:g=isFinite(e)?e+c:0):(c=Math.min(0.01*Math.abs(this.getApparentDifference(e,g,
null,!0)),0.05),0!==g&&(g+=c),0!==e&&(e-=c)),h=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<g-e?0.5*Math.abs(g-e):1,this.includeZero&&(null===this.viewportMinimum||isNaN(this.viewportMinimum))&&0<e&&(e=0),this.includeZero&&(null===this.viewportMaximum||isNaN(this.viewportMaximum))&&0>g&&(g=0));c=this.getApparentDifference(isNaN(this.viewportMinimum)||null===this.viewportMinimum?e:this.viewportMinimum,isNaN(this.viewportMaximum)||null===this.viewportMaximum?g:this.viewportMaximum,null,
!0);if("axisX"===this.type&&b){this.intervalType||(c/1<=a?(this.interval=1,this.intervalType="millisecond"):c/2<=a?(this.interval=2,this.intervalType="millisecond"):c/5<=a?(this.interval=5,this.intervalType="millisecond"):c/10<=a?(this.interval=10,this.intervalType="millisecond"):c/20<=a?(this.interval=20,this.intervalType="millisecond"):c/50<=a?(this.interval=50,this.intervalType="millisecond"):c/100<=a?(this.interval=100,this.intervalType="millisecond"):c/200<=a?(this.interval=200,this.intervalType=
"millisecond"):c/250<=a?(this.interval=250,this.intervalType="millisecond"):c/300<=a?(this.interval=300,this.intervalType="millisecond"):c/400<=a?(this.interval=400,this.intervalType="millisecond"):c/500<=a?(this.interval=500,this.intervalType="millisecond"):c/(1*U.secondDuration)<=a?(this.interval=1,this.intervalType="second"):c/(2*U.secondDuration)<=a?(this.interval=2,this.intervalType="second"):c/(5*U.secondDuration)<=a?(this.interval=5,this.intervalType="second"):c/(10*U.secondDuration)<=a?(this.interval=
10,this.intervalType="second"):c/(15*U.secondDuration)<=a?(this.interval=15,this.intervalType="second"):c/(20*U.secondDuration)<=a?(this.interval=20,this.intervalType="second"):c/(30*U.secondDuration)<=a?(this.interval=30,this.intervalType="second"):c/(1*U.minuteDuration)<=a?(this.interval=1,this.intervalType="minute"):c/(2*U.minuteDuration)<=a?(this.interval=2,this.intervalType="minute"):c/(5*U.minuteDuration)<=a?(this.interval=5,this.intervalType="minute"):c/(10*U.minuteDuration)<=a?(this.interval=
10,this.intervalType="minute"):c/(15*U.minuteDuration)<=a?(this.interval=15,this.intervalType="minute"):c/(20*U.minuteDuration)<=a?(this.interval=20,this.intervalType="minute"):c/(30*U.minuteDuration)<=a?(this.interval=30,this.intervalType="minute"):c/(1*U.hourDuration)<=a?(this.interval=1,this.intervalType="hour"):c/(2*U.hourDuration)<=a?(this.interval=2,this.intervalType="hour"):c/(3*U.hourDuration)<=a?(this.interval=3,this.intervalType="hour"):c/(6*U.hourDuration)<=a?(this.interval=6,this.intervalType=
"hour"):c/(1*U.dayDuration)<=a?(this.interval=1,this.intervalType="day"):c/(2*U.dayDuration)<=a?(this.interval=2,this.intervalType="day"):c/(4*U.dayDuration)<=a?(this.interval=4,this.intervalType="day"):c/(1*U.weekDuration)<=a?(this.interval=1,this.intervalType="week"):c/(2*U.weekDuration)<=a?(this.interval=2,this.intervalType="week"):c/(3*U.weekDuration)<=a?(this.interval=3,this.intervalType="week"):c/(1*U.monthDuration)<=a?(this.interval=1,this.intervalType="month"):c/(2*U.monthDuration)<=a?(this.interval=
2,this.intervalType="month"):c/(3*U.monthDuration)<=a?(this.interval=3,this.intervalType="month"):c/(6*U.monthDuration)<=a?(this.interval=6,this.intervalType="month"):(this.interval=c/(1*U.yearDuration)<=a?1:c/(2*U.yearDuration)<=a?2:c/(4*U.yearDuration)<=a?4:Math.floor(C.getNiceNumber(c/(a-1),!0)/U.yearDuration),this.intervalType="year"));if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=e-h/2;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=
g+h/2;f?this.autoValueFormatString="MMM DD YYYY HH:mm":"year"===this.intervalType?this.autoValueFormatString="YYYY":"month"===this.intervalType?this.autoValueFormatString="MMM YYYY":"week"===this.intervalType?this.autoValueFormatString="MMM DD YYYY":"day"===this.intervalType?this.autoValueFormatString="MMM DD YYYY":"hour"===this.intervalType?this.autoValueFormatString="hh:mm TT":"minute"===this.intervalType?this.autoValueFormatString="hh:mm TT":"second"===this.intervalType?this.autoValueFormatString=
"hh:mm:ss TT":"millisecond"===this.intervalType&&(this.autoValueFormatString="fff'ms'");this.valueFormatString||(this.valueFormatString=this.autoValueFormatString)}else{this.intervalType="number";c=C.getNiceNumber(c,!1);this.interval=this.options&&0<this.options.interval?this.options.interval:C.getNiceNumber(c/(a-1),!0);if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum="axisX"===this.type?e-h/2:Math.floor(e/this.interval)*this.interval;if(null===this.viewportMaximum||
isNaN(this.viewportMaximum))this.viewportMaximum="axisX"===this.type?g+h/2:Math.ceil(g/this.interval)*this.interval;0===this.viewportMaximum&&0===this.viewportMinimum&&(0===this.options.viewportMinimum?this.viewportMaximum+=10:0===this.options.viewportMaximum&&(this.viewportMinimum-=10),this.options&&"undefined"===typeof this.options.interval&&(this.interval=C.getNiceNumber((this.viewportMaximum-this.viewportMinimum)/(a-1),!0)))}if(null===this.minimum||null===this.maximum)if("axisX"===this.type?(e=
null!==this.minimum?this.minimum:this.dataInfo.min,g=null!==this.maximum?this.maximum:this.dataInfo.max,0===g-e&&(c="undefined"===typeof this.options.interval?0.4:this.options.interval,g+=c,e-=c),h=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<g-e?0.5*Math.abs(g-e):1):"axisY"===this.type&&(e=null!==this.minimum?this.minimum:this.dataInfo.min,g=null!==this.maximum?this.maximum:this.dataInfo.max,isFinite(e)||isFinite(g)?0===e&&0===g?(g+=9,e=0):0===g-e?(c=Math.min(Math.abs(0.01*Math.abs(g)),
5),g+=c,e-=c):e>g?(c=Math.min(0.01*Math.abs(this.getApparentDifference(g,e,null,!0)),5),0<=g?e=g-c:g=isFinite(e)?e+c:0):(c=Math.min(0.01*Math.abs(this.getApparentDifference(e,g,null,!0)),0.05),0!==g&&(g+=c),0!==e&&(e-=c)):(g="undefined"===typeof this.options.interval?-Infinity:this.options.interval,e="undefined"!==typeof this.options.interval||isFinite(this.dataInfo.minDiff)?0:Infinity),h=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<g-e?0.5*Math.abs(g-e):1,this.includeZero&&(null===this.minimum||
isNaN(this.minimum))&&0<e&&(e=0),this.includeZero&&(null===this.maximum||isNaN(this.maximum))&&0>g&&(g=0)),Math.abs(this.getApparentDifference(e,g,null,!0)),"axisX"===this.type&&b){this.valueType="dateTime";if(null===this.minimum||isNaN(this.minimum))this.minimum=e-h/2;if(null===this.maximum||isNaN(this.maximum))this.maximum=g+h/2}else this.intervalType=this.valueType="number",null===this.minimum&&(this.minimum="axisX"===this.type?e-h/2:Math.floor(e/this.interval)*this.interval,this.minimum=Math.min(this.minimum,
null===this.sessionVariables.viewportMinimum||isNaN(this.sessionVariables.viewportMinimum)?Infinity:this.sessionVariables.viewportMinimum)),null===this.maximum&&(this.maximum="axisX"===this.type?g+h/2:Math.ceil(g/this.interval)*this.interval,this.maximum=Math.max(this.maximum,null===this.sessionVariables.viewportMaximum||isNaN(this.sessionVariables.viewportMaximum)?-Infinity:this.sessionVariables.viewportMaximum)),0===this.maximum&&0===this.minimum&&(0===this.options.minimum?this.maximum+=10:0===
this.options.maximum&&(this.minimum-=10));y(this.sessionVariables.newViewportMinimum)&&(this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum));y(this.sessionVariables.newViewportMaximum)&&(this.viewportMaximum=Math.min(this.viewportMaximum,this.maximum));this.range=this.viewportMaximum-this.viewportMinimum;this.intervalStartPosition="axisX"===this.type&&b?this.getLabelStartPoint(new Date(this.viewportMinimum),this.intervalType,this.interval):Math.floor((this.viewportMinimum+0.2*this.interval)/
this.interval)*this.interval;this.valueFormatString||(this.valueFormatString=C.generateValueFormatString(this.range,2))}};C.prototype.calculateLogarithmicAxisParameters=function(){var a=this.chart.layoutManager.getFreeSpace(),f=Math.log(this.logarithmBase),b;"bottom"===this._position||"top"===this._position?(this.maxWidth=a.width,this.maxHeight=a.height):(this.maxWidth=a.height,this.maxHeight=a.width);var a="axisX"===this.type?500>this.maxWidth?7:Math.max(7,Math.floor(this.maxWidth/100)):Math.max(Math.floor(this.maxWidth/
50),3),c,e,g,h;h=1;if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=this.minimum;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=this.maximum;if(this.scaleBreaks)for(h=0;h<this.scaleBreaks._appliedBreaks.length;h++)if((!y(this.sessionVariables.newViewportMinimum)&&this.sessionVariables.newViewportMinimum>=this.scaleBreaks._appliedBreaks[h].startValue||!y(this.options.minimum)&&this.options.minimum>=this.scaleBreaks._appliedBreaks[h].startValue||
!y(this.options.viewportMinimum)&&this.viewportMinimum>=this.scaleBreaks._appliedBreaks[h].startValue)&&(!y(this.sessionVariables.newViewportMaximum)&&this.sessionVariables.newViewportMaximum<=this.scaleBreaks._appliedBreaks[h].endValue||!y(this.options.maximum)&&this.options.maximum<=this.scaleBreaks._appliedBreaks[h].endValue||!y(this.options.viewportMaximum)&&this.viewportMaximum<=this.scaleBreaks._appliedBreaks[h].endValue)){this.scaleBreaks._appliedBreaks.splice(h,1);break}"axisX"===this.type?
(c=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,e=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax,1===e/c&&(h=Math.pow(this.logarithmBase,"undefined"===typeof this.options.interval?0.4:this.options.interval),e*=h,c/=h),g=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:e/c>this.logarithmBase?e/c*Math.pow(this.logarithmBase,0.5):this.logarithmBase):"axisY"===this.type&&(c=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,
e=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax,0>=c&&!isFinite(e)?(e="undefined"===typeof this.options.interval?0:this.options.interval,c=1):0>=c?c=e:isFinite(e)||(e=c),1===c&&1===e?(e*=this.logarithmBase-1/this.logarithmBase,c=1):1===e/c?(h=Math.min(e*Math.pow(this.logarithmBase,0.01),Math.pow(this.logarithmBase,5)),e*=h,c/=h):c>e?(h=Math.min(c/e*Math.pow(this.logarithmBase,0.01),Math.pow(this.logarithmBase,5)),1<=e?c=e/h:e=c*h):(h=Math.min(e/c*Math.pow(this.logarithmBase,
0.01),Math.pow(this.logarithmBase,0.04)),1!==e&&(e*=h),1!==c&&(c/=h)),g=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:e/c>this.logarithmBase?e/c*Math.pow(this.logarithmBase,0.5):this.logarithmBase,this.includeZero&&(null===this.viewportMinimum||isNaN(this.viewportMinimum))&&1<c&&(c=1),this.includeZero&&(null===this.viewportMaximum||isNaN(this.viewportMaximum))&&1>e&&(e=1));h=(isNaN(this.viewportMaximum)||null===this.viewportMaximum?e:this.viewportMaximum)/(isNaN(this.viewportMinimum)||null===
this.viewportMinimum?c:this.viewportMinimum);linearRange=(isNaN(this.viewportMaximum)||null===this.viewportMaximum?e:this.viewportMaximum)-(isNaN(this.viewportMinimum)||null===this.viewportMinimum?c:this.viewportMinimum);this.intervalType="number";h=Math.pow(this.logarithmBase,C.getNiceNumber(Math.abs(Math.log(h)/f),!1));this.options&&0<this.options.interval?this.interval=this.options.interval:(this.interval=C.getNiceExponent(Math.log(h)/f/(a-1),!0),b=C.getNiceNumber(linearRange/(a-1),!0));if(null===
this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum="axisX"===this.type?c/Math.sqrt(g):Math.pow(this.logarithmBase,this.interval*Math.floor(Math.log(c)/f/this.interval));if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum="axisX"===this.type?e*Math.sqrt(g):Math.pow(this.logarithmBase,this.interval*Math.ceil(Math.log(e)/f/this.interval));1===this.viewportMaximum&&1===this.viewportMinimum&&(1===this.options.viewportMinimum?this.viewportMaximum*=this.logarithmBase-
1/this.logarithmBase:1===this.options.viewportMaximum&&(this.viewportMinimum/=this.logarithmBase-1/this.logarithmBase),this.options&&"undefined"===typeof this.options.interval&&(this.interval=C.getNiceExponent(Math.ceil(Math.log(h)/f)/(a-1)),b=C.getNiceNumber((this.viewportMaximum-this.viewportMinimum)/(a-1),!0)));if(null===this.minimum||null===this.maximum)"axisX"===this.type?(c=null!==this.minimum?this.minimum:this.dataInfo.min,e=null!==this.maximum?this.maximum:this.dataInfo.max,1===e/c&&(h=Math.pow(this.logarithmBase,
"undefined"===typeof this.options.interval?0.4:this.options.interval),e*=h,c/=h),g=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:e/c>this.logarithmBase?e/c*Math.pow(this.logarithmBase,0.5):this.logarithmBase):"axisY"===this.type&&(c=null!==this.minimum?this.minimum:this.dataInfo.min,e=null!==this.maximum?this.maximum:this.dataInfo.max,isFinite(c)||isFinite(e)?1===c&&1===e?(e*=this.logarithmBase,c/=this.logarithmBase):1===e/c?(h=Math.pow(this.logarithmBase,this.interval),e*=h,c/=h):c>e?(h=
Math.min(0.01*(c/e),5),1<=e?c=e/h:e=c*h):(h=Math.min(e/c*Math.pow(this.logarithmBase,0.01),Math.pow(this.logarithmBase,0.04)),1!==e&&(e*=h),1!==c&&(c/=h)):(e="undefined"===typeof this.options.interval?0:this.options.interval,c=1),g=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:e/c>this.logarithmBase?e/c*Math.pow(this.logarithmBase,0.5):this.logarithmBase,this.includeZero&&(null===this.minimum||isNaN(this.minimum))&&1<c&&(c=1),this.includeZero&&(null===this.maximum||isNaN(this.maximum))&&
1>e&&(e=1)),this.intervalType="number",null===this.minimum&&(this.minimum="axisX"===this.type?c/Math.sqrt(g):Math.pow(this.logarithmBase,this.interval*Math.floor(Math.log(c)/f/this.interval)),this.minimum=Math.min(this.minimum,null===this.sessionVariables.viewportMinimum||isNaN(this.sessionVariables.viewportMinimum)?"undefined"===typeof this.sessionVariables.newViewportMinimum?Infinity:this.sessionVariables.newViewportMinimum:this.sessionVariables.viewportMinimum)),null===this.maximum&&(this.maximum=
"axisX"===this.type?e*Math.sqrt(g):Math.pow(this.logarithmBase,this.interval*Math.ceil(Math.log(e)/f/this.interval)),this.maximum=Math.max(this.maximum,null===this.sessionVariables.viewportMaximum||isNaN(this.sessionVariables.viewportMaximum)?"undefined"===typeof this.sessionVariables.newViewportMaximum?0:this.sessionVariables.newViewportMaximum:this.sessionVariables.viewportMaximum)),1===this.maximum&&1===this.minimum&&(1===this.options.minimum?this.maximum*=this.logarithmBase-1/this.logarithmBase:
1===this.options.maximum&&(this.minimum/=this.logarithmBase-1/this.logarithmBase));this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum);this.viewportMaximum=Math.min(this.viewportMaximum,this.maximum);this.viewportMinimum>this.viewportMaximum&&(!this.options.viewportMinimum&&!this.options.minimum||this.options.viewportMaximum||this.options.maximum?this.options.viewportMinimum||this.options.minimum||!this.options.viewportMaximum&&!this.options.maximum||(this.viewportMinimum=this.minimum=
(this.options.viewportMaximum||this.options.maximum)/Math.pow(this.logarithmBase,2*Math.ceil(this.interval))):this.viewportMaximum=this.maximum=this.options.viewportMinimum||this.options.minimum);c=Math.pow(this.logarithmBase,Math.floor(Math.log(this.viewportMinimum)/(f*this.interval)+0.2)*this.interval);this.range=this.viewportMaximum/this.viewportMinimum;this.noTicks=a;if(!this.options.interval&&this.range<Math.pow(this.logarithmBase,8>this.viewportMaximum||3>a?2:3)){for(f=Math.floor(this.viewportMinimum/
b+0.5)*b;f<this.viewportMinimum;)f+=b;this.equidistantInterval=!1;this.intervalStartPosition=f;this.interval=b}else this.options.interval||(b=Math.ceil(this.interval),this.range>this.interval&&(this.interval=b,c=Math.pow(this.logarithmBase,Math.floor(Math.log(this.viewportMinimum)/(f*this.interval)+0.2)*this.interval))),this.equidistantInterval=!0,this.intervalStartPosition=c;if(!this.valueFormatString&&(this.valueFormatString="#,##0.##",1>this.viewportMinimum)){f=Math.floor(Math.abs(Math.log(this.viewportMinimum)/
Math.LN10))+2;if(isNaN(f)||!isFinite(f))f=2;if(2<f)for(h=0;h<f-2;h++)this.valueFormatString+="#"}};C.generateValueFormatString=function(a,f){var b="#,##0.",c=f;1>a&&(c+=Math.floor(Math.abs(Math.log(a)/Math.LN10)),isNaN(c)||!isFinite(c))&&(c=f);for(var e=0;e<c;e++)b+="#";return b};C.getNiceExponent=function(a,f){var b=Math.floor(Math.log(a)/Math.LN10),c=a/Math.pow(10,b),c=0>b?1>=c?1:5>=c?5:10:Math.max(Math.floor(c),1);return-20>b?Number(c*Math.pow(10,b)):Number((c*Math.pow(10,b)).toFixed(20))};C.getNiceNumber=
function(a,f){var b=Math.floor(Math.log(a)/Math.LN10),c=a/Math.pow(10,b),c=f?1.5>c?1:3>c?2:7>c?5:10:1>=c?1:2>=c?2:5>=c?5:10;return-20>b?Number(c*Math.pow(10,b)):Number((c*Math.pow(10,b)).toFixed(20))};C.prototype.getLabelStartPoint=function(){var a=U[this.intervalType+"Duration"]*this.interval,a=new Date(Math.floor(this.viewportMinimum/a)*a);if("millisecond"!==this.intervalType)if("second"===this.intervalType)0<a.getMilliseconds()&&(a.setSeconds(a.getSeconds()+1),a.setMilliseconds(0));else if("minute"===
this.intervalType){if(0<a.getSeconds()||0<a.getMilliseconds())a.setMinutes(a.getMinutes()+1),a.setSeconds(0),a.setMilliseconds(0)}else if("hour"===this.intervalType){if(0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setHours(a.getHours()+1),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("day"===this.intervalType){if(0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("week"===
this.intervalType){if(0<a.getDay()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+(7-a.getDay())),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("month"===this.intervalType){if(1<a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setMonth(a.getMonth()+1),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else"year"===this.intervalType&&(0<a.getMonth()||1<
a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())&&(a.setFullYear(a.getFullYear()+1),a.setMonth(0),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0));return a};na(I,Y);na(ba,Y);ba.prototype.createUserOptions=function(a){if("undefined"!==typeof a||this.options._isPlaceholder){var f=0;this.parent.options._isPlaceholder&&this.parent.createUserOptions();this.options._isPlaceholder||(Ca(this.parent[this.optionsName]),f=this.parent.options[this.optionsName].indexOf(this.options));
this.options="undefined"===typeof a?{}:a;this.parent.options[this.optionsName][f]=this.options}};ba.prototype.render=function(a){if(0!==this.spacing||0!==this.options.lineThickness&&("undefined"!==typeof this.options.lineThickness||0!==this.parent.lineThickness)){var f=this.ctx,b=this.ctx.globalAlpha;this.ctx=a||this.ctx;this.ctx.save();this.ctx.beginPath();this.ctx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height);this.ctx.clip();var c=this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue),
e=this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);this.ctx.strokeStyle=this.lineColor;this.ctx.fillStyle=this.color;this.ctx.beginPath();this.ctx.globalAlpha=1;R(this.id);var g,h,l,m,k,r;a=Math.max(this.spacing,3);var p=Math.max(0,this.lineThickness);this.ctx.lineWidth=p;this.ctx.setLineDash&&this.ctx.setLineDash(F(this.lineDashType,p));if("bottom"===this.scaleBreaks.parent._position||"top"===this.scaleBreaks.parent._position)if(c=1===p%2?(c.x<<0)+0.5:c.x<<0,h=1===p%2?(e.x<<0)+0.5:
e.x<<0,"top"===this.scaleBreaks.parent._position?(e=this.chart.plotArea.y1,l=this.chart.plotArea.y2+p/2+0.5<<0):(e=this.chart.plotArea.y2,l=this.chart.plotArea.y1-p/2+0.5<<0,a*=-1),this.bounds={x1:c-p/2,y1:e,x2:h+p/2,y2:l},this.ctx.moveTo(c,e),"straight"===this.type||"top"===this.scaleBreaks.parent._position&&0>=a||"bottom"===this.scaleBreaks.parent._position&&0<=a)this.ctx.lineTo(c,l),this.ctx.lineTo(h,l),this.ctx.lineTo(h,e);else if("wavy"===this.type){m=c;k=e;g=0.5;r=(l-k)/a/3;for(var n=0;n<r;n++)this.ctx.bezierCurveTo(m+
g*a,k+a,m+g*a,k+2*a,m,k+3*a),k+=3*a,g*=-1;this.ctx.bezierCurveTo(m+g*a,k+a,m+g*a,k+2*a,m,k+3*a);m=h;g*=-1;this.ctx.lineTo(m,k);for(n=0;n<r;n++)this.ctx.bezierCurveTo(m+g*a,k-a,m+g*a,k-2*a,m,k-3*a),k-=3*a,g*=-1}else{if("zigzag"===this.type){g=-1;k=e+a;m=c+a;r=(l-k)/a/2;for(n=0;n<r;n++)this.ctx.lineTo(m,k),m+=2*g*a,k+=2*a,g*=-1;this.ctx.lineTo(m,k);m+=h-c;for(n=0;n<r+1;n++)this.ctx.lineTo(m,k),m+=2*g*a,k-=2*a,g*=-1;this.ctx.lineTo(m+g*a,k+a)}}else if("left"===this.scaleBreaks.parent._position||"right"===
this.scaleBreaks.parent._position)if(e=1===p%2?(e.y<<0)+0.5:e.y<<0,l=1===p%2?(c.y<<0)+0.5:c.y<<0,"left"===this.scaleBreaks.parent._position?(c=this.chart.plotArea.x1,h=this.chart.plotArea.x2+p/2+0.5<<0):(c=this.chart.plotArea.x2,h=this.chart.plotArea.x1-p/2+0.5<<0,a*=-1),this.bounds={x1:c,y1:e-p/2,x2:h,y2:l+p/2},this.ctx.moveTo(c,e),"straight"===this.type||"left"===this.scaleBreaks.parent._position&&0>=a||"right"===this.scaleBreaks.parent._position&&0<=a)this.ctx.lineTo(h,e),this.ctx.lineTo(h,l),
this.ctx.lineTo(c,l);else if("wavy"===this.type){m=c;k=e;g=0.5;r=(h-m)/a/3;for(n=0;n<r;n++)this.ctx.bezierCurveTo(m+a,k+g*a,m+2*a,k+g*a,m+3*a,k),m+=3*a,g*=-1;this.ctx.bezierCurveTo(m+a,k+g*a,m+2*a,k+g*a,m+3*a,k);k=l;g*=-1;this.ctx.lineTo(m,k);for(n=0;n<r;n++)this.ctx.bezierCurveTo(m-a,k+g*a,m-2*a,k+g*a,m-3*a,k),m-=3*a,g*=-1}else if("zigzag"===this.type){g=1;k=e-a;m=c+a;r=(h-m)/a/2;for(n=0;n<r;n++)this.ctx.lineTo(m,k),k+=2*g*a,m+=2*a,g*=-1;this.ctx.lineTo(m,k);k+=l-e;for(n=0;n<r+1;n++)this.ctx.lineTo(m,
k),k+=2*g*a,m-=2*a,g*=-1;this.ctx.lineTo(m+a,k+g*a)}0<p&&this.ctx.stroke();this.ctx.closePath();this.ctx.globalAlpha=this.fillOpacity;this.ctx.globalCompositeOperation="destination-over";this.ctx.fill();this.ctx.restore();this.ctx.globalAlpha=b;this.ctx=f}};na(fa,Y);fa.prototype.createUserOptions=function(a){if("undefined"!==typeof a||this.options._isPlaceholder){var f=0;this.parent.options._isPlaceholder&&this.parent.createUserOptions();this.options._isPlaceholder||(Ca(this.parent.stripLines),f=
this.parent.options.stripLines.indexOf(this.options));this.options="undefined"===typeof a?{}:a;this.parent.options.stripLines[f]=this.options}};fa.prototype.render=function(){this.ctx.save();var a=this.parent.getPixelCoordinatesOnAxis(this.value),f=Math.abs("pixel"===this._thicknessType?this.thickness:this.parent.conversionParameters.pixelPerUnit*this.thickness);if(0<f){var b=null===this.opacity?1:this.opacity;this.ctx.strokeStyle=this.color;this.ctx.beginPath();var c=this.ctx.globalAlpha;this.ctx.globalAlpha=
b;R(this.id);var e,g,h,l;this.ctx.lineWidth=f;this.ctx.setLineDash&&this.ctx.setLineDash(F(this.lineDashType,f));if("bottom"===this.parent._position||"top"===this.parent._position)e=g=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0,h=this.chart.plotArea.y1,l=this.chart.plotArea.y2,this.bounds={x1:e-f/2,y1:h,x2:g+f/2,y2:l};else if("left"===this.parent._position||"right"===this.parent._position)h=l=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,e=this.chart.plotArea.x1,g=this.chart.plotArea.x2,this.bounds=
{x1:e,y1:h-f/2,x2:g,y2:l+f/2};this.ctx.moveTo(e,h);this.ctx.lineTo(g,l);this.ctx.stroke();this.ctx.globalAlpha=c}this.ctx.restore()};na(ha,Y);ha.prototype.render=function(a,f){var b,c,e,g,h=null,l=h=null,m="";if(!this.valueFormatString)if("dateTime"===this.parent.valueType)this.valueFormatString=this.parent.valueFormatString;else{var k=0,k="xySwapped"===this.chart.plotInfo.axisPlacement?50<this.parent.range?0:500<this.chart.width&&25>this.parent.range?2:Math.floor(Math.abs(Math.log(this.parent.range)/
Math.LN10))+(5>this.parent.range?2:10>this.parent.range?1:0):50<this.parent.range?0:Math.floor(Math.abs(Math.log(this.parent.range)/Math.LN10))+(5>this.parent.range?2:10>this.parent.range?1:0);this.valueFormatString=C.generateValueFormatString(this.parent.range,k)}var l=null===this.opacity?1:this.opacity,k=Math.abs("pixel"===this._thicknessType?this.thickness:this.parent.conversionParameters.pixelPerUnit*this.thickness),r=this.chart.overlaidCanvasCtx,p=r.globalAlpha;r.globalAlpha=l;r.beginPath();
r.strokeStyle=this.color;r.lineWidth=k;r.save();this.labelFontSize=y(this.options.labelFontSize)?this.parent.labelFontSize:this.labelFontSize;if("left"===this.parent._position||"right"===this.parent._position)this.labelMaxWidth=y(this.options.labelMaxWidth)?this.parent.bounds.x2-this.parent.bounds.x1:this.labelMaxWidth,this.labelMaxHeight=y(this.options.labelWrap)||this.labelWrap?3*this.chart.height:2*this.labelFontSize;else if("top"===this.parent._position||"bottom"===this.parent._position)this.labelMaxWidth=
y(this.options.labelMaxWidth)?3*this.chart.width:this.labelMaxWidth,this.labelMaxHeight=y(this.options.labelWrap)||this.labelWrap?this.parent.bounds.height:2*this.labelFontSize;0<k&&r.setLineDash&&r.setLineDash(F(this.lineDashType,k));l=new ka(r,{x:0,y:0,padding:{top:2,right:3,bottom:2,left:4},backgroundColor:this.labelBackgroundColor,borderColor:this.labelBorderColor,borderThickness:this.labelBorderThickness,cornerRadius:this.labelCornerRadius,maxWidth:this.labelMaxWidth,maxHeight:this.labelMaxHeight,
angle:this.labelAngle,text:m,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"});if(this.snapToDataPoint){var n=0,h=[];if("xySwapped"===this.chart.plotInfo.axisPlacement){var d=null;if("bottom"===this.parent._position||"top"===this.parent._position)n=this.parent.dataSeries[0].axisX.convertPixelToValue({y:f});else if("left"===this.parent._position||"right"===
this.parent._position)n=this.parent.convertPixelToValue({y:f});for(var q=0;q<this.parent.dataSeries.length;q++)(d=this.parent.dataSeries[q].getDataPointAtX(n,!0))&&0<=d.index&&(d.dataSeries=this.parent.dataSeries[q],null!==d.dataPoint.y&&h.push(d));d=null;if(0===h.length)return;h.sort(function(a,b){return a.distance-b.distance});d=Math.abs(a-this.parent.convertValueToPixel(h[0].dataPoint.y));q=0;if("rangeBar"===h[0].dataSeries.type||"error"===h[0].dataSeries.type)for(var d=Math.abs(a-this.parent.convertValueToPixel(h[q].dataPoint.y[0])),
s=0,n=0;n<h.length;n++)if(h[n].dataPoint.y&&h[n].dataPoint.y.length)for(m=0;m<h[n].dataPoint.y.length;m++)s=Math.abs(a-this.parent.convertValueToPixel(h[n].dataPoint.y[m])),s<d&&(d=s,q=n);else s=Math.abs(a-this.parent.convertValueToPixel(h[n].dataPoint.y)),s<d&&(d=s,q=n);else if("stackedBar"===h[0].dataSeries.type)for(var d=Math.abs(a-this.parent.convertValueToPixel(h[0].dataPoint.y)),v=s=0,n=q=0;n<h.length;n++)if(h[n].dataPoint.y&&h[n].dataPoint.y.length)for(m=0;m<h[n].dataPoint.y.length;m++)s=Math.abs(a-
this.parent.convertValueToPixel(h[n].dataPoint.y[m])),s<d&&(d=s,q=n);else v+=h[n].dataPoint.y,s=Math.abs(a-this.parent.convertValueToPixel(v)),s<d&&(d=s,q=n);else if("stackedBar100"===h[0].dataSeries.type)for(var d=Math.abs(a-this.parent.convertValueToPixel(h[0].dataPoint.y)),u=v=s=0,n=0;n<h.length;n++)if(h[n].dataPoint.y&&h[n].dataPoint.y.length)for(m=0;m<h[n].dataPoint.y.length;m++)s=Math.abs(a-this.parent.convertValueToPixel(h[n].dataPoint.y[m])),s<d&&(d=s,q=n);else v+=h[n].dataPoint.y,u=h[n].dataPoint.x.getTime?
h[n].dataPoint.x.getTime():h[n].dataPoint.x,u=100*(v/h[n].dataSeries.plotUnit.dataPointYSums[u]),s=Math.abs(a-this.parent.convertValueToPixel(u)),s<d&&(d=s,q=n);else for(d=Math.abs(a-this.parent.convertValueToPixel(h[0].dataPoint.y)),n=q=s=0;n<h.length;n++)if(h[n].dataPoint.y&&h[n].dataPoint.y.length)for(m=0;m<h[n].dataPoint.y.length;m++)s=Math.abs(a-this.parent.convertValueToPixel(h[n].dataPoint.y[m])),s<d&&(d=s,q=n);else s=Math.abs(a-this.parent.convertValueToPixel(h[n].dataPoint.y)),s<d&&(d=s,
q=n);m=h[q];if("bottom"===this.parent._position||"top"===this.parent._position){b=0;if("rangeBar"===this.parent.dataSeries[q].type||"error"===this.parent.dataSeries[q].type){d=Math.abs(a-this.parent.convertValueToPixel(m.dataPoint.y[0]));for(n=s=0;n<m.dataPoint.y.length;n++)s=Math.abs(a-this.parent.convertValueToPixel(m.dataPoint.y[n])),s<d&&(d=s,b=n);h=1===r.lineWidth%2?(this.parent.convertValueToPixel(m.dataPoint.y[b])<<0)+0.5:this.parent.convertValueToPixel(m.dataPoint.y[b])<<0;l.text=this.labelFormatter?
this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:m.dataPoint.y[b]}):y(this.options.label)?V(m.dataPoint.y[b],this.valueFormatString,this.chart._cultureInfo):this.label}else if("stackedBar"===this.parent.dataSeries[q].type){d=Math.abs(a-this.parent.convertValueToPixel(h[0].dataPoint.y));v=s=0;for(n=q;0<=n;n--)v+=h[n].dataPoint.y,s=Math.abs(a-this.parent.convertValueToPixel(v)),s<d&&(d=s,b=n);h=1===r.lineWidth%2?(this.parent.convertValueToPixel(v)<<0)+0.5:
this.parent.convertValueToPixel(v)<<0;l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:m.dataPoint.y}):y(this.options.label)?V(m.dataPoint.y,this.valueFormatString,this.chart._cultureInfo):this.label}else if("stackedBar100"===this.parent.dataSeries[q].type){d=Math.abs(a-this.parent.convertValueToPixel(h[0].dataPoint.y));u=v=s=0;for(n=q;0<=n;n--)v+=h[n].dataPoint.y,u=h[n].dataPoint.x.getTime?h[n].dataPoint.x.getTime():h[n].dataPoint.x,
u=100*(v/h[n].dataSeries.plotUnit.dataPointYSums[u]),s=Math.abs(a-this.parent.convertValueToPixel(u)),s<d&&(d=s,b=n);h=1===r.lineWidth%2?(this.parent.convertValueToPixel(u)<<0)+0.5:this.parent.convertValueToPixel(u)<<0;l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:u}):y(this.options.label)?V(u,this.valueFormatString,this.chart._cultureInfo):this.label}else h=1===r.lineWidth%2?(this.parent.convertValueToPixel(m.dataPoint.y)<<
0)+0.5:this.parent.convertValueToPixel(m.dataPoint.y)<<0,l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:m.dataPoint.y}):y(this.options.label)?V(m.dataPoint.y,this.valueFormatString,this.chart._cultureInfo):this.label;b=c=h;e=this.chart.plotArea.y1;g=this.chart.plotArea.y2;this.bounds={x1:b-k/2,y1:e,x2:c+k/2,y2:g};l.x=b-l.measureText().width/2;l.x+l.width>this.chart.bounds.x2?l.x=this.chart.bounds.x2-l.width:l.x<this.chart.bounds.x1&&
(l.x=this.chart.bounds.x1);l.y=this.parent.lineCoordinates.y2+l.fontSize/2+2}else if("left"===this.parent._position||"right"===this.parent._position){e=g=h=1===r.lineWidth%2?(this.parent.convertValueToPixel(m.dataPoint.x)<<0)+0.5:this.parent.convertValueToPixel(m.dataPoint.x)<<0;b=this.chart.plotArea.x1;c=this.chart.plotArea.x2;this.bounds={x1:b,y1:e-k/2,x2:c,y2:g+k/2};u=!1;if(this.parent.labels)for(h=Math.ceil(this.parent.interval),n=0;n<this.parent.viewportMaximum;n+=h)if(this.parent.labels[n])u=
!0;else{u=!1;break}if(u){if("axisX"===this.parent.type)for(n=this.parent.convertPixelToValue({y:f}),d=null,q=0;q<this.parent.dataSeries.length;q++)(d=this.parent.dataSeries[q].getDataPointAtX(n,!0))&&0<=d.index&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:m.dataPoint.x}):y(this.options.label)?d.dataPoint.label:this.label)}else"dateTime"===this.parent.valueType?l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,
axis:this.parent.options,crosshair:this.options,value:m.dataPoint.x}):y(this.options.label)?Aa(m.dataPoint.x,this.valueFormatString,this.chart._cultureInfo):this.label:"number"===this.parent.valueType&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:m.dataPoint.x}):y(this.options.label)?V(m.dataPoint.x,this.valueFormatString,this.chart._cultureInfo):this.label);l.y=g+l.fontSize/2-l.measureText().height/2+2;l.y-l.fontSize/2<this.chart.bounds.y1?
l.y=this.chart.bounds.y1+l.fontSize/2+2:l.y+l.measureText().height-l.fontSize/2>this.chart.bounds.y2&&(l.y=this.chart.bounds.y2-l.measureText().height+l.fontSize/2);"left"===this.parent._position?l.x=this.parent.lineCoordinates.x2-l.measureText().width:"right"===this.parent._position&&(l.x=this.parent.lineCoordinates.x2)}}else if("bottom"===this.parent._position||"top"===this.parent._position){n=this.parent.convertPixelToValue({x:a});for(q=0;q<this.parent.dataSeries.length;q++)(d=this.parent.dataSeries[q].getDataPointAtX(n,
!0))&&0<=d.index&&(d.dataSeries=this.parent.dataSeries[q],null!==d.dataPoint.y&&h.push(d));if(0===h.length)return;h.sort(function(a,b){return a.distance-b.distance});m=h[0];b=c=h=1===r.lineWidth%2?(this.parent.convertValueToPixel(m.dataPoint.x)<<0)+0.5:this.parent.convertValueToPixel(m.dataPoint.x)<<0;e=this.chart.plotArea.y1;g=this.chart.plotArea.y2;this.bounds={x1:b-k/2,y1:e,x2:c+k/2,y2:g};u=!1;if(this.parent.labels)for(h=Math.ceil(this.parent.interval),n=0;n<this.parent.viewportMaximum;n+=h)if(this.parent.labels[n])u=
!0;else{u=!1;break}if(u){if("axisX"===this.parent.type)for(n=this.parent.convertPixelToValue({x:a}),d=null,q=0;q<this.parent.dataSeries.length;q++)(d=this.parent.dataSeries[q].getDataPointAtX(n,!0))&&0<=d.index&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:m.dataPoint.x}):y(this.options.label)?d.dataPoint.label:this.label)}else"dateTime"===this.parent.valueType?l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,
axis:this.parent.options,crosshair:this.options,value:m.dataPoint.x}):y(this.options.label)?Aa(m.dataPoint.x,this.valueFormatString,this.chart._cultureInfo):this.label:"number"===this.parent.valueType&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:m.dataPoint.x}):y(this.options.label)?V(m.dataPoint.x,this.valueFormatString,this.chart._cultureInfo):this.label);l.x=b-l.measureText().width/2;l.x+l.width>this.chart.bounds.x2&&(l.x=
this.chart.bounds.x2-l.width);l.x<this.chart.bounds.x1&&(l.x=this.chart.bounds.x1);"bottom"===this.parent._position?l.y=this.parent.lineCoordinates.y2+l.fontSize/2+2:"top"===this.parent._position&&(l.y=this.parent.lineCoordinates.y1-l.height+l.fontSize/2+2)}else if("left"===this.parent._position||"right"===this.parent._position){!y(this.parent.dataSeries)&&0<this.parent.dataSeries.length&&(n=this.parent.dataSeries[0].axisX.convertPixelToValue({x:a}));for(q=0;q<this.parent.dataSeries.length;q++)(d=
this.parent.dataSeries[q].getDataPointAtX(n,!0))&&0<=d.index&&(d.dataSeries=this.parent.dataSeries[q],null!==d.dataPoint.y&&h.push(d));if(0===h.length)return;h.sort(function(a,b){return a.distance-b.distance});q=0;if("rangeColumn"===h[0].dataSeries.type||"rangeArea"===h[0].dataSeries.type||"error"===h[0].dataSeries.type||"rangeSplineArea"===h[0].dataSeries.type||"candlestick"===h[0].dataSeries.type||"ohlc"===h[0].dataSeries.type||"boxAndWhisker"===h[0].dataSeries.type)for(d=Math.abs(f-this.parent.convertValueToPixel(h[0].dataPoint.y[0])),
n=s=0;n<h.length;n++)if(h[n].dataPoint.y&&h[n].dataPoint.y.length)for(m=0;m<h[n].dataPoint.y.length;m++)s=Math.abs(f-this.parent.convertValueToPixel(h[n].dataPoint.y[m])),s<d&&(d=s,q=n);else s=Math.abs(f-this.parent.convertValueToPixel(h[n].dataPoint.y)),s<d&&(d=s,q=n);else if("stackedColumn"===h[0].dataSeries.type||"stackedArea"===h[0].dataSeries.type)for(d=Math.abs(f-this.parent.convertValueToPixel(h[0].dataPoint.y)),n=v=s=0;n<h.length;n++)if(h[n].dataPoint.y&&h[n].dataPoint.y.length)for(m=0;m<
h[n].dataPoint.y.length;m++)s=Math.abs(f-this.parent.convertValueToPixel(h[n].dataPoint.y[m])),s<d&&(d=s,q=n);else v+=h[n].dataPoint.y,s=Math.abs(f-this.parent.convertValueToPixel(v)),s<d&&(d=s,q=n);else if("stackedColumn100"===h[0].dataSeries.type||"stackedArea100"===h[0].dataSeries.type)for(d=Math.abs(f-this.parent.convertValueToPixel(h[0].dataPoint.y)),n=u=v=s=0;n<h.length;n++)if(h[n].dataPoint.y&&h[n].dataPoint.y.length)for(m=0;m<h[n].dataPoint.y.length;m++)s=Math.abs(f-this.parent.convertValueToPixel(h[n].dataPoint.y[m])),
s<d&&(d=s,q=n);else v+=h[n].dataPoint.y,u=h[n].dataPoint.x.getTime?h[n].dataPoint.x.getTime():h[n].dataPoint.x,u=100*(v/h[n].dataSeries.plotUnit.dataPointYSums[u]),s=Math.abs(f-this.parent.convertValueToPixel(u)),s<d&&(d=s,q=n);else for(d=Math.abs(f-this.parent.convertValueToPixel(h[0].dataPoint.y)),n=s=0;n<h.length;n++)if(h[n].dataPoint.y&&h[n].dataPoint.y.length)for(m=0;m<h[n].dataPoint.y.length;m++)s=Math.abs(f-this.parent.convertValueToPixel(h[n].dataPoint.y[m])),s<d&&(d=s,q=n);else s=Math.abs(f-
this.parent.convertValueToPixel(h[n].dataPoint.y)),s<d&&(d=s,q=n);m=h[q];b=0;if("rangeColumn"===this.parent.dataSeries[q].type||"rangeArea"===this.parent.dataSeries[q].type||"error"===this.parent.dataSeries[q].type||"rangeSplineArea"===this.parent.dataSeries[q].type||"candlestick"===this.parent.dataSeries[q].type||"ohlc"===this.parent.dataSeries[q].type||"boxAndWhisker"===this.parent.dataSeries[q].type){d=Math.abs(f-this.parent.convertValueToPixel(m.dataPoint.y[0]));for(n=s=0;n<m.dataPoint.y.length;n++)s=
Math.abs(f-this.parent.convertValueToPixel(m.dataPoint.y[n])),s<d&&(d=s,b=n);h=1===r.lineWidth%2?(this.parent.convertValueToPixel(m.dataPoint.y[b])<<0)+0.5:this.parent.convertValueToPixel(m.dataPoint.y[b])<<0;l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:m.dataPoint.y[b]}):y(this.options.label)?V(m.dataPoint.y[b],this.valueFormatString,this.chart._cultureInfo):this.label}else if("stackedColumn"===this.parent.dataSeries[q].type||
"stackedArea"===this.parent.dataSeries[q].type){d=Math.abs(f-this.parent.convertValueToPixel(h[0].dataPoint.y));v=s=0;for(n=q;0<=n;n--)v+=h[n].dataPoint.y,s=Math.abs(f-this.parent.convertValueToPixel(v)),s<d&&(d=s,b=n);h=1===r.lineWidth%2?(this.parent.convertValueToPixel(v)<<0)+0.5:this.parent.convertValueToPixel(v)<<0;l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:m.dataPoint.y}):y(this.options.label)?V(m.dataPoint.y,this.valueFormatString,
this.chart._cultureInfo):this.label}else if("stackedColumn100"===this.parent.dataSeries[q].type||"stackedArea100"===this.parent.dataSeries[q].type){d=Math.abs(f-this.parent.convertValueToPixel(h[0].dataPoint.y));v=s=0;for(n=q;0<=n;n--)v+=h[n].dataPoint.y,u=h[n].dataPoint.x.getTime?h[n].dataPoint.x.getTime():h[n].dataPoint.x,u=100*(v/h[n].dataSeries.plotUnit.dataPointYSums[u]),s=Math.abs(f-this.parent.convertValueToPixel(u)),s<d&&(d=s,b=n);h=1===r.lineWidth%2?(this.parent.convertValueToPixel(u)<<0)+
0.5:this.parent.convertValueToPixel(u)<<0;l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:u}):y(this.options.label)?V(u,this.valueFormatString,this.chart._cultureInfo):this.label}else"waterfall"===this.parent.dataSeries[q].type?(h=1===r.lineWidth%2?(this.parent.convertValueToPixel(m.dataSeries.dataPointEOs[m.index].cumulativeSum)<<0)+0.5:this.parent.convertValueToPixel(m.dataSeries.dataPointEOs[m.index].cumulativeSum)<<0,l.text=
this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:m.dataSeries.dataPointEOs[m.index].cumulativeSum}):y(this.options.label)?V(m.dataSeries.dataPointEOs[m.index].cumulativeSum,this.valueFormatString,this.chart._cultureInfo):this.label):(h=1===r.lineWidth%2?(this.parent.convertValueToPixel(m.dataPoint.y)<<0)+0.5:this.parent.convertValueToPixel(m.dataPoint.y)<<0,l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,
crosshair:this.options,value:m.dataPoint.y}):y(this.options.label)?V(m.dataPoint.y,this.valueFormatString,this.chart._cultureInfo):this.label);e=g=h;b=this.chart.plotArea.x1;c=this.chart.plotArea.x2;this.bounds={x1:b,y1:e-k/2,x2:c,y2:g+k/2};l.y=g+l.fontSize/2-l.measureText().height/2+2;l.y-l.fontSize/2<this.chart.bounds.y1?l.y=this.chart.bounds.y1+l.fontSize/2+2:l.y+l.measureText().height-l.fontSize/2>this.chart.bounds.y2&&(l.y=this.chart.bounds.y2-l.measureText().height+l.fontSize/2);"left"===this.parent._position?
l.x=this.parent.lineCoordinates.x2-l.measureText().width:"right"===this.parent._position&&(l.x=this.parent.lineCoordinates.x2)}h=null;("bottom"===this.parent._position||"top"===this.parent._position)&&(b>=this.parent.convertValueToPixel(this.parent.viewportMinimum)&&c<=this.parent.convertValueToPixel(this.parent.viewportMaximum))&&(0<k&&(r.moveTo(b,e),r.lineTo(c,g),r.stroke()),r.restore(),!y(l.text)&&("number"===typeof l.text.valueOf()||0<l.text.length)&&l.render(!0));("left"===this.parent._position||
"right"===this.parent._position)&&(g>=this.parent.convertValueToPixel(this.parent.viewportMaximum)&&e<=this.parent.convertValueToPixel(this.parent.viewportMinimum))&&(0<k&&(r.moveTo(b,e),r.lineTo(c,g),r.stroke()),r.restore(),!y(l.text)&&("number"===typeof l.text.valueOf()||0<l.text.length)&&l.render(!0))}else{if("bottom"===this.parent._position||"top"===this.parent._position)b=c=h=1===r.lineWidth%2?(a<<0)+0.5:a<<0,e=this.chart.plotArea.y1,g=this.chart.plotArea.y2,this.bounds={x1:b-k/2,y1:e,x2:c+k/
2,y2:g};else if("left"===this.parent._position||"right"===this.parent._position)e=g=h=1===r.lineWidth%2?(f<<0)+0.5:f<<0,b=this.chart.plotArea.x1,c=this.chart.plotArea.x2,this.bounds={x1:b,y1:e-k/2,x2:c,y2:g+k/2};if("xySwapped"===this.chart.plotInfo.axisPlacement)if("left"===this.parent._position||"right"===this.parent._position){u=!1;if(this.parent.labels)for(h=Math.ceil(this.parent.interval),n=0;n<this.parent.viewportMaximum;n+=h)if(this.parent.labels[n])u=!0;else{u=!1;break}if(u){if("axisX"===this.parent.type)for(n=
this.parent.convertPixelToValue({y:f}),d=null,q=0;q<this.parent.dataSeries.length;q++)(d=this.parent.dataSeries[q].getDataPointAtX(n,!0))&&0<=d.index&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(a)}):y(this.options.label)?d.dataPoint.label:this.label)}else"dateTime"===this.parent.valueType?l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,
value:this.parent.convertPixelToValue(f)}):y(this.options.label)?Aa(this.parent.convertPixelToValue(f),this.valueFormatString,this.chart._cultureInfo):this.label:"number"===this.parent.valueType&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(f)}):y(this.options.label)?V(this.parent.convertPixelToValue(f),this.valueFormatString,this.chart._cultureInfo):this.label);l.y=f+l.fontSize/2-l.measureText().height/
2+2;l.y-l.fontSize/2<this.chart.bounds.y1?l.y=this.chart.bounds.y1+l.fontSize/2+2:l.y+l.measureText().height-l.fontSize/2>this.chart.bounds.y2&&(l.y=this.chart.bounds.y2-l.measureText().height+l.fontSize/2);"left"===this.parent._position?l.x=this.parent.lineCoordinates.x1-l.measureText().width:"right"===this.parent._position&&(l.x=this.parent.lineCoordinates.x2)}else{if("bottom"===this.parent._position||"top"===this.parent._position)l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,
axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(a)}):y(this.options.label)?V(this.parent.convertPixelToValue(a),this.valueFormatString,this.chart._cultureInfo):this.label,l.x=b-l.measureText().width/2,l.x+l.width>this.chart.bounds.x2&&(l.x=this.chart.bounds.x2-l.width),l.x<this.chart.bounds.x1&&(l.x=this.chart.bounds.x1),"bottom"===this.parent._position&&(l.y=this.parent.lineCoordinates.y2+l.fontSize/2+2),"top"===this.parent._position&&(l.y=this.parent.lineCoordinates.y1-
l.height+l.fontSize/2+2)}else if("bottom"===this.parent._position||"top"===this.parent._position){u=!1;m="";if(this.parent.labels)for(h=Math.ceil(this.parent.interval),n=0;n<this.parent.viewportMaximum;n+=h)if(this.parent.labels[n])u=!0;else{u=!1;break}if(u){if("axisX"===this.parent.type)for(n=this.parent.convertPixelToValue({x:a}),d=null,q=0;q<this.parent.dataSeries.length;q++)(d=this.parent.dataSeries[q].getDataPointAtX(n,!0))&&0<=d.index&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,
axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(a)}):y(this.options.label)?d.dataPoint.label:this.label)}else"dateTime"===this.parent.valueType?l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(a)}):y(this.options.label)?Aa(this.parent.convertPixelToValue(a),this.valueFormatString,this.chart._cultureInfo):this.label:"number"===this.parent.valueType&&(l.text=this.labelFormatter?
this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:0<this.parent.dataSeries.length?this.parent.convertPixelToValue(a):""}):y(this.options.label)?V(this.parent.convertPixelToValue(a),this.valueFormatString,this.chart._cultureInfo):this.label);l.x=b-l.measureText().width/2;l.x+l.width>this.chart.bounds.x2&&(l.x=this.chart.bounds.x2-l.width);l.x<this.chart.bounds.x1&&(l.x=this.chart.bounds.x1);"bottom"===this.parent._position?l.y=this.parent.lineCoordinates.y2+
l.fontSize/2+2:"top"===this.parent._position&&(l.y=this.parent.lineCoordinates.y1-l.height+l.fontSize/2+2)}else if("left"===this.parent._position||"right"===this.parent._position)l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(f)}):y(this.options.label)?V(this.parent.convertPixelToValue(f),this.valueFormatString,this.chart._cultureInfo):this.label,l.y=f+l.fontSize/2-l.measureText().height/2+2,l.y-
l.fontSize/2<this.chart.bounds.y1?l.y=this.chart.bounds.y1+l.fontSize/2+2:l.y+l.measureText().height-l.fontSize/2>this.chart.bounds.y2&&(l.y=this.chart.bounds.y2-l.measureText().height+l.fontSize/2),"left"===this.parent._position?l.x=this.parent.lineCoordinates.x2-l.measureText().width:"right"===this.parent._position&&(l.x=this.parent.lineCoordinates.x2);0<k&&(r.moveTo(b,e),r.lineTo(c,g),r.stroke());r.restore();!y(l.text)&&("number"===typeof l.text.valueOf()||0<l.text.length)&&l.render(!0)}r.globalAlpha=
p};na(Z,Y);Z.prototype._initialize=function(){if(this.enabled){this.container=document.createElement("div");this.container.setAttribute("class","canvasjs-chart-tooltip");this.container.style.position="absolute";this.container.style.height="auto";this.container.style.boxShadow="1px 1px 2px 2px rgba(0,0,0,0.1)";this.container.style.zIndex="1000";this.container.style.pointerEvents="none";this.container.style.display="none";var a;a='<div style=" width: auto;height: auto;min-width: 50px;';a+="line-height: auto;";
a+="margin: 0px 0px 0px 0px;";a+="padding: 5px;";a+="font-family: Calibri, Arial, Georgia, serif;";a+="font-weight: normal;";a+="font-style: "+(v?"italic;":"normal;");a+="font-size: 14px;";a+="color: #000000;";a+="text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";a+="text-align: left;";a+="border: 2px solid gray;";a+=v?"background: rgba(255,255,255,.9);":"background: rgb(255,255,255);";a+="text-indent: 0px;";a+="white-space: nowrap;";a+="border-radius: 5px;";a+="-moz-user-select:none;";a+="-khtml-user-select: none;";
a+="-webkit-user-select: none;";a+="-ms-user-select: none;";a+="user-select: none;";v||(a+="filter: alpha(opacity = 90);",a+="filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");a+='} "> Sample Tooltip</div>';this.container.innerHTML=a;this.contentDiv=this.container.firstChild;this.container.style.borderRadius=this.contentDiv.style.borderRadius;this.chart._canvasJSContainer.appendChild(this.container)}};Z.prototype.mouseMoveHandler=function(a,f){this._lastUpdated&&
4>(new Date).getTime()-this._lastUpdated||(this._lastUpdated=(new Date).getTime(),this.chart.resetOverlayedCanvas(),this._updateToolTip(a,f))};Z.prototype._updateToolTip=function(a,f,b){b="undefined"===typeof b?!0:b;this.container||this._initialize();this.enabled||this.hide();if(!this.chart.disableToolTip){if("undefined"===typeof a||"undefined"===typeof f){if(isNaN(this._prevX)||isNaN(this._prevY))return;a=this._prevX;f=this._prevY}else this._prevX=a,this._prevY=f;var c=null,e=null,g=[],h=0;if(this.shared&&
this.enabled&&"none"!==this.chart.plotInfo.axisPlacement){if("xySwapped"===this.chart.plotInfo.axisPlacement){var l=[];if(this.chart.axisX)for(var m=0;m<this.chart.axisX.length;m++){for(var h=this.chart.axisX[m].convertPixelToValue({y:f}),k=null,c=0;c<this.chart.axisX[m].dataSeries.length;c++)(k=this.chart.axisX[m].dataSeries[c].getDataPointAtX(h,b))&&0<=k.index&&(k.dataSeries=this.chart.axisX[m].dataSeries[c],null!==k.dataPoint.y&&l.push(k));k=null}if(this.chart.axisX2)for(m=0;m<this.chart.axisX2.length;m++){h=
this.chart.axisX2[m].convertPixelToValue({y:f});k=null;for(c=0;c<this.chart.axisX2[m].dataSeries.length;c++)(k=this.chart.axisX2[m].dataSeries[c].getDataPointAtX(h,b))&&0<=k.index&&(k.dataSeries=this.chart.axisX2[m].dataSeries[c],null!==k.dataPoint.y&&l.push(k));k=null}}else{l=[];if(this.chart.axisX)for(m=0;m<this.chart.axisX.length;m++)for(h=this.chart.axisX[m].convertPixelToValue({x:a}),k=null,c=0;c<this.chart.axisX[m].dataSeries.length;c++)(k=this.chart.axisX[m].dataSeries[c].getDataPointAtX(h,
b))&&0<=k.index&&(k.dataSeries=this.chart.axisX[m].dataSeries[c],null!==k.dataPoint.y&&l.push(k));if(this.chart.axisX2)for(m=0;m<this.chart.axisX2.length;m++)for(h=this.chart.axisX2[m].convertPixelToValue({x:a}),k=null,c=0;c<this.chart.axisX2[m].dataSeries.length;c++)(k=this.chart.axisX2[m].dataSeries[c].getDataPointAtX(h,b))&&0<=k.index&&(k.dataSeries=this.chart.axisX2[m].dataSeries[c],null!==k.dataPoint.y&&l.push(k))}if(0===l.length)return;l.sort(function(a,b){return a.distance-b.distance});b=l[0];
for(c=0;c<l.length;c++)l[c].dataPoint.x.valueOf()===b.dataPoint.x.valueOf()&&g.push(l[c]);l=null}else{if(k=this.chart.getDataPointAtXY(a,f,b))this.currentDataPointIndex=k.dataPointIndex,this.currentSeriesIndex=k.dataSeries.index;else if(v)if(k=Wa(a,f,this.chart._eventManager.ghostCtx),0<k&&"undefined"!==typeof this.chart._eventManager.objectMap[k]){k=this.chart._eventManager.objectMap[k];if("legendItem"===k.objectType)return;this.currentSeriesIndex=k.dataSeriesIndex;this.currentDataPointIndex=0<=
k.dataPointIndex?k.dataPointIndex:-1}else this.currentDataPointIndex=-1;else this.currentDataPointIndex=-1;if(0<=this.currentSeriesIndex){e=this.chart.data[this.currentSeriesIndex];k={};if(0<=this.currentDataPointIndex)c=e.dataPoints[this.currentDataPointIndex],k.dataSeries=e,k.dataPoint=c,k.index=this.currentDataPointIndex,k.distance=Math.abs(c.x-h),"waterfall"===e.type&&(k.cumulativeSumYStartValue=e.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue,k.cumulativeSum=e.dataPointEOs[this.currentDataPointIndex].cumulativeSum);
else{if(!this.enabled||"line"!==e.type&&"stepLine"!==e.type&&"spline"!==e.type&&"area"!==e.type&&"stepArea"!==e.type&&"splineArea"!==e.type&&"stackedArea"!==e.type&&"stackedArea100"!==e.type&&"rangeArea"!==e.type&&"rangeSplineArea"!==e.type&&"candlestick"!==e.type&&"ohlc"!==e.type&&"boxAndWhisker"!==e.type)return;h=e.axisX.convertPixelToValue({x:a});k=e.getDataPointAtX(h,b);k.dataSeries=e;this.currentDataPointIndex=k.index;c=k.dataPoint}if(!y(k.dataPoint.y))if(k.dataSeries.axisY)if(0<k.dataPoint.y.length){for(c=
b=0;c<k.dataPoint.y.length;c++)k.dataPoint.y[c]<k.dataSeries.axisY.viewportMinimum?b--:k.dataPoint.y[c]>k.dataSeries.axisY.viewportMaximum&&b++;b<k.dataPoint.y.length&&b>-k.dataPoint.y.length&&g.push(k)}else"column"===e.type||"bar"===e.type?0>k.dataPoint.y?0>k.dataSeries.axisY.viewportMinimum&&k.dataSeries.axisY.viewportMaximum>=k.dataPoint.y&&g.push(k):k.dataSeries.axisY.viewportMinimum<=k.dataPoint.y&&0<=k.dataSeries.axisY.viewportMaximum&&g.push(k):"bubble"===e.type?(b=this.chart._eventManager.objectMap[e.dataPointIds[k.index]].size/
2,k.dataPoint.y>=k.dataSeries.axisY.viewportMinimum-b&&k.dataPoint.y<=k.dataSeries.axisY.viewportMaximum+b&&g.push(k)):"waterfall"===e.type?(b=0,k.cumulativeSumYStartValue<k.dataSeries.axisY.viewportMinimum?b--:k.cumulativeSumYStartValue>k.dataSeries.axisY.viewportMaximum&&b++,k.cumulativeSum<k.dataSeries.axisY.viewportMinimum?b--:k.cumulativeSum>k.dataSeries.axisY.viewportMaximum&&b++,2>b&&-2<b&&g.push(k)):(0<=k.dataSeries.type.indexOf("100")||"stackedColumn"===e.type||"stackedBar"===e.type||k.dataPoint.y>=
k.dataSeries.axisY.viewportMinimum&&k.dataPoint.y<=k.dataSeries.axisY.viewportMaximum)&&g.push(k);else g.push(k)}}if(0<g.length&&(this.highlightObjects(g),this.enabled))if(b="",b=this.getToolTipInnerHTML({entries:g}),null!==b){this.contentDiv.innerHTML=b;b=!1;"none"===this.container.style.display&&(b=!0,this.container.style.display="block");try{this.contentDiv.style.background=this.backgroundColor?this.backgroundColor:v?"rgba(255,255,255,.9)":"rgb(255,255,255)",this.borderColor="waterfall"===g[0].dataSeries.type?
this.contentDiv.style.borderRightColor=this.contentDiv.style.borderLeftColor=this.contentDiv.style.borderColor=this.options.borderColor?this.options.borderColor:g[0].dataPoint.color?g[0].dataPoint.color:0<g[0].dataPoint.y?g[0].dataSeries.risingColor:g[0].dataSeries.fallingColor:"error"===g[0].dataSeries.type?this.contentDiv.style.borderRightColor=this.contentDiv.style.borderLeftColor=this.contentDiv.style.borderColor=this.options.borderColor?this.options.borderColor:g[0].dataSeries.color?g[0].dataSeries.color:
g[0].dataSeries._colorSet[e.index%g[0].dataSeries._colorSet.length]:this.contentDiv.style.borderRightColor=this.contentDiv.style.borderLeftColor=this.contentDiv.style.borderColor=this.options.borderColor?this.options.borderColor:g[0].dataPoint.color?g[0].dataPoint.color:g[0].dataSeries.color?g[0].dataSeries.color:g[0].dataSeries._colorSet[g[0].index%g[0].dataSeries._colorSet.length],this.contentDiv.style.borderWidth=this.borderThickness||0===this.borderThickness?this.borderThickness+"px":"2px",this.contentDiv.style.borderRadius=
this.cornerRadius||0===this.cornerRadius?this.cornerRadius+"px":"5px",this.container.style.borderRadius=this.contentDiv.style.borderRadius,this.contentDiv.style.fontSize=this.fontSize||0===this.fontSize?this.fontSize+"px":"14px",this.contentDiv.style.color=this.fontColor?this.fontColor:"#000000",this.contentDiv.style.fontFamily=this.fontFamily?this.fontFamily:"Calibri, Arial, Georgia, serif;",this.contentDiv.style.fontWeight=this.fontWeight?this.fontWeight:"normal",this.contentDiv.style.fontStyle=
this.fontStyle?this.fontStyle:v?"italic":"normal"}catch(q){}"pie"===g[0].dataSeries.type||"doughnut"===g[0].dataSeries.type||"funnel"===g[0].dataSeries.type||"pyramid"===g[0].dataSeries.type||"bar"===g[0].dataSeries.type||"rangeBar"===g[0].dataSeries.type||"stackedBar"===g[0].dataSeries.type||"stackedBar100"===g[0].dataSeries.type?a=a-10-this.container.clientWidth:(a=g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x)-this.container.clientWidth<<0,a-=10);0>a&&(a+=this.container.clientWidth+
20);a+this.container.clientWidth>Math.max(this.chart.container.clientWidth,this.chart.width)&&(a=Math.max(0,Math.max(this.chart.container.clientWidth,this.chart.width)-this.container.clientWidth));f=1!==g.length||this.shared||"line"!==g[0].dataSeries.type&&"stepLine"!==g[0].dataSeries.type&&"spline"!==g[0].dataSeries.type&&"area"!==g[0].dataSeries.type&&"stepArea"!==g[0].dataSeries.type&&"splineArea"!==g[0].dataSeries.type?"bar"===g[0].dataSeries.type||"rangeBar"===g[0].dataSeries.type||"stackedBar"===
g[0].dataSeries.type||"stackedBar100"===g[0].dataSeries.type?g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x):f:g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y);f=-f+10;0<f+this.container.clientHeight+5&&(f-=f+this.container.clientHeight+5-0);this.fixMozTransitionDelay(a,f);!this.animationEnabled||b?this.disableAnimation():(this.enableAnimation(),this.container.style.MozTransition=this.mozContainerTransition);this.container.style.left=a+"px";this.container.style.bottom=f+"px"}else this.hide(!1)}};
Z.prototype.highlightObjects=function(a){var f=this.chart.overlaidCanvasCtx;this.chart.resetOverlayedCanvas();f.clearRect(0,0,this.chart.width,this.chart.height);f.save();var b=this.chart.plotArea,c=0;f.beginPath();f.rect(b.x1,b.y1,b.x2-b.x1,b.y2-b.y1);f.clip();for(b=0;b<a.length;b++){var e=a[b];if((e=this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]])&&e.objectType&&"dataPoint"===e.objectType){var c=this.chart.data[e.dataSeriesIndex],g=c.dataPoints[e.dataPointIndex],h=e.dataPointIndex;
!1===g.highlightEnabled||!0!==c.highlightEnabled&&!0!==g.highlightEnabled||("line"===c.type||"stepLine"===c.type||"spline"===c.type||"scatter"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"stackedArea"===c.type||"stackedArea100"===c.type||"rangeArea"===c.type||"rangeSplineArea"===c.type?(g=c.getMarkerProperties(h,e.x1,e.y1,this.chart.overlaidCanvasCtx),g.size=Math.max(1.5*g.size<<0,10),g.borderColor=g.borderColor||"#FFFFFF",g.borderThickness=g.borderThickness||Math.ceil(0.1*
g.size),$.drawMarkers([g]),"undefined"!==typeof e.y2&&(g=c.getMarkerProperties(h,e.x1,e.y2,this.chart.overlaidCanvasCtx),g.size=Math.max(1.5*g.size<<0,10),g.borderColor=g.borderColor||"#FFFFFF",g.borderThickness=g.borderThickness||Math.ceil(0.1*g.size),$.drawMarkers([g]))):"bubble"===c.type?(g=c.getMarkerProperties(h,e.x1,e.y1,this.chart.overlaidCanvasCtx),g.size=e.size,g.color="white",g.borderColor="white",f.globalAlpha=0.3,$.drawMarkers([g]),f.globalAlpha=1):"column"===c.type||"stackedColumn"===
c.type||"stackedColumn100"===c.type||"bar"===c.type||"rangeBar"===c.type||"stackedBar"===c.type||"stackedBar100"===c.type||"rangeColumn"===c.type||"waterfall"===c.type?X(f,e.x1,e.y1,e.x2,e.y2,"white",0,null,!1,!1,!1,!1,0.3):"pie"===c.type||"doughnut"===c.type?pa(f,e.center,e.radius,"white",c.type,e.startAngle,e.endAngle,0.3,e.percentInnerRadius):"funnel"===c.type||"pyramid"===c.type?qa(f,e.funnelSection,0.3,"white"):"candlestick"===c.type?(f.globalAlpha=1,f.strokeStyle=e.color,f.lineWidth=2*e.borderThickness,
c=0===f.lineWidth%2?0:0.5,f.beginPath(),f.moveTo(e.x3-c,Math.min(e.y2,e.y3)),f.lineTo(e.x3-c,Math.min(e.y1,e.y4)),f.stroke(),f.beginPath(),f.moveTo(e.x3-c,Math.max(e.y1,e.y4)),f.lineTo(e.x3-c,Math.max(e.y2,e.y3)),f.stroke(),X(f,e.x1,Math.min(e.y1,e.y4),e.x2,Math.max(e.y1,e.y4),"transparent",2*e.borderThickness,e.color,!1,!1,!1,!1),f.globalAlpha=1):"ohlc"===c.type?(f.globalAlpha=1,f.strokeStyle=e.color,f.lineWidth=2*e.borderThickness,c=0===f.lineWidth%2?0:0.5,f.beginPath(),f.moveTo(e.x3-c,e.y2),f.lineTo(e.x3-
c,e.y3),f.stroke(),f.beginPath(),f.moveTo(e.x3,e.y1),f.lineTo(e.x1,e.y1),f.stroke(),f.beginPath(),f.moveTo(e.x3,e.y4),f.lineTo(e.x2,e.y4),f.stroke(),f.globalAlpha=1):"boxAndWhisker"===c.type?(f.save(),f.globalAlpha=1,f.strokeStyle=e.stemColor,f.lineWidth=2*e.stemThickness,0<e.stemThickness&&(f.beginPath(),f.moveTo(e.x3,e.y2+e.borderThickness/2),f.lineTo(e.x3,e.y1+e.whiskerThickness/2),f.stroke(),f.beginPath(),f.moveTo(e.x3,e.y4-e.whiskerThickness/2),f.lineTo(e.x3,e.y3-e.borderThickness/2),f.stroke()),
f.beginPath(),X(f,e.x1-e.borderThickness/2,Math.max(e.y2+e.borderThickness/2,e.y3+e.borderThickness/2),e.x2+e.borderThickness/2,Math.min(e.y2-e.borderThickness/2,e.y3-e.borderThickness/2),"transparent",e.borderThickness,e.color,!1,!1,!1,!1),f.globalAlpha=1,f.strokeStyle=e.whiskerColor,f.lineWidth=2*e.whiskerThickness,0<e.whiskerThickness&&(f.beginPath(),f.moveTo(Math.floor(e.x3-e.whiskerLength/2),e.y4),f.lineTo(Math.ceil(e.x3+e.whiskerLength/2),e.y4),f.stroke(),f.beginPath(),f.moveTo(Math.floor(e.x3-
e.whiskerLength/2),e.y1),f.lineTo(Math.ceil(e.x3+e.whiskerLength/2),e.y1),f.stroke()),f.globalAlpha=1,f.strokeStyle=e.lineColor,f.lineWidth=2*e.lineThickness,0<e.lineThickness&&(f.beginPath(),f.moveTo(e.x1,e.y5),f.lineTo(e.x2,e.y5),f.stroke()),f.restore(),f.globalAlpha=1):"error"===c.type&&z(f,e.x1,e.y1,e.x2,e.y2,"white",e.whiskerProperties,e.stemProperties,e.isXYSwapped,0.3))}}f.restore();f.globalAlpha=1;f.beginPath()};Z.prototype.getToolTipInnerHTML=function(a){a=a.entries;for(var f=null,b=null,
c=null,e=0,g="",h=!0,l=0;l<a.length;l++)if(a[l].dataSeries.toolTipContent||a[l].dataPoint.toolTipContent){h=!1;break}if(h&&(this.content&&"function"===typeof this.content||this.contentFormatter))a={chart:this.chart,toolTip:this.options,entries:a},f=this.contentFormatter?this.contentFormatter(a):this.content(a);else if(this.shared&&"none"!==this.chart.plotInfo.axisPlacement){for(var m=null,k="",l=0;l<a.length;l++)b=a[l].dataSeries,c=a[l].dataPoint,e=a[l].index,g="",0===l&&(h&&!this.content)&&(this.chart.axisX&&
0<this.chart.axisX.length?k+="undefined"!==typeof this.chart.axisX[0].labels[c.x]?this.chart.axisX[0].labels[c.x]:"{x}":this.chart.axisX2&&0<this.chart.axisX2.length&&(k+="undefined"!==typeof this.chart.axisX2[0].labels[c.x]?this.chart.axisX2[0].labels[c.x]:"{x}"),k+="</br>",k=this.chart.replaceKeywordsWithValue(k,c,b,e)),null===c.toolTipContent||"undefined"===typeof c.toolTipContent&&null===b.options.toolTipContent||("line"===b.type||"stepLine"===b.type||"spline"===b.type||"area"===b.type||"stepArea"===
b.type||"splineArea"===b.type||"column"===b.type||"bar"===b.type||"scatter"===b.type||"stackedColumn"===b.type||"stackedColumn100"===b.type||"stackedBar"===b.type||"stackedBar100"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type||"waterfall"===b.type?(this.chart.axisX&&1<this.chart.axisX.length&&(g+=m!=b.axisXIndex?b.axisX.title?b.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),g+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?
this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y}",m=b.axisXIndex):"bubble"===b.type?(this.chart.axisX&&1<this.chart.axisX.length&&(g+=m!=b.axisXIndex?b.axisX.title?b.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),g+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}"):
"rangeColumn"===b.type||"rangeBar"===b.type||"rangeArea"===b.type||"rangeSplineArea"===b.type||"error"===b.type?(this.chart.axisX&&1<this.chart.axisX.length&&(g+=m!=b.axisXIndex?b.axisX.title?b.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),g+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}"):"candlestick"===
b.type||"ohlc"===b.type?(this.chart.axisX&&1<this.chart.axisX.length&&(g+=m!=b.axisXIndex?b.axisX.title?b.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),g+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}"):"boxAndWhisker"===
b.type&&(this.chart.axisX&&1<this.chart.axisX.length&&(g+=m!=b.axisXIndex?b.axisX.title?b.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),g+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}"),
null===f&&(f=""),!0===this.reversed?(f=this.chart.replaceKeywordsWithValue(g,c,b,e)+f,l<a.length-1&&(f="</br>"+f)):(f+=this.chart.replaceKeywordsWithValue(g,c,b,e),l<a.length-1&&(f+="</br>")));null!==f&&(f=k+f)}else{b=a[0].dataSeries;c=a[0].dataPoint;e=a[0].index;if(null===c.toolTipContent||"undefined"===typeof c.toolTipContent&&null===b.options.toolTipContent)return null;"line"===b.type||"stepLine"===b.type||"spline"===b.type||"area"===b.type||"stepArea"===b.type||"splineArea"===b.type||"column"===
b.type||"bar"===b.type||"scatter"===b.type||"stackedColumn"===b.type||"stackedColumn100"===b.type||"stackedBar"===b.type||"stackedBar100"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type||"waterfall"===b.type?g=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(c.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}":"bubble"===b.type?g=c.toolTipContent?
c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(c.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}":"pie"===b.type||"doughnut"===b.type||"funnel"===b.type||"pyramid"===b.type?g=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":
"'color:{color};'")+"\"'>"+(c.name?"{name}:</span>&nbsp;&nbsp;":c.label?"{label}:</span>&nbsp;&nbsp;":"</span>")+"{y}":"rangeColumn"===b.type||"rangeBar"===b.type||"rangeArea"===b.type||"rangeSplineArea"===b.type||"error"===b.type?g=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(c.label?"{label}":"{x}")+" :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}":
"candlestick"===b.type||"ohlc"===b.type?g=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(c.label?"{label}":"{x}")+"</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}":"boxAndWhisker"===b.type&&(g=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:
this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(c.label?"{label}":"{x}")+"</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
null===f&&(f="");f+=this.chart.replaceKeywordsWithValue(g,c,b,e)}return f};Z.prototype.enableAnimation=function(){if(!this.container.style.WebkitTransition){var a=this.getContainerTransition(this.containerTransitionDuration);this.container.style.WebkitTransition=a;this.container.style.MsTransition=a;this.container.style.transition=a;this.container.style.MozTransition=this.mozContainerTransition}};Z.prototype.disableAnimation=function(){this.container.style.WebkitTransition&&(this.container.style.WebkitTransition=
"",this.container.style.MozTransition="",this.container.style.MsTransition="",this.container.style.transition="")};Z.prototype.hide=function(a){this.container&&(this.container.style.display="none",this.currentSeriesIndex=-1,this._prevY=this._prevX=NaN,("undefined"===typeof a||a)&&this.chart.resetOverlayedCanvas())};Z.prototype.show=function(a,f,b){this._updateToolTip(a,f,"undefined"===typeof b?!1:b)};Z.prototype.fixMozTransitionDelay=function(a,f){if(20<this.chart._eventManager.lastObjectId)this.mozContainerTransition=
this.getContainerTransition(0);else{var b=parseFloat(this.container.style.left),b=isNaN(b)?0:b,c=parseFloat(this.container.style.bottom),c=isNaN(c)?0:c;10<Math.sqrt(Math.pow(b-a,2)+Math.pow(c-f,2))?this.mozContainerTransition=this.getContainerTransition(0.1):this.mozContainerTransition=this.getContainerTransition(0)}};Z.prototype.getContainerTransition=function(a){return"left "+a+"s ease-out 0s, bottom "+a+"s ease-out 0s"};ea.prototype.reset=function(){this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=
[];this.previousDataPointEventObject=null;this.eventObjects=[];v&&(this.ghostCtx.clearRect(0,0,this.chart.width,this.chart.height),this.ghostCtx.beginPath())};ea.prototype.getNewObjectTrackingId=function(){return++this.lastObjectId};ea.prototype.mouseEventHandler=function(a){if("mousemove"===a.type||"click"===a.type){var f=[],b=Oa(a),c=null;if((c=this.chart.getObjectAtXY(b.x,b.y,!1))&&"undefined"!==typeof this.objectMap[c])if(c=this.objectMap[c],"dataPoint"===c.objectType){var e=this.chart.data[c.dataSeriesIndex],
g=e.dataPoints[c.dataPointIndex],h=c.dataPointIndex;c.eventParameter={x:b.x,y:b.y,dataPoint:g,dataSeries:e.options,dataPointIndex:h,dataSeriesIndex:e.index,chart:this.chart};c.eventContext={context:g,userContext:g,mouseover:"mouseover",mousemove:"mousemove",mouseout:"mouseout",click:"click"};f.push(c);c=this.objectMap[e.id];c.eventParameter={x:b.x,y:b.y,dataPoint:g,dataSeries:e.options,dataPointIndex:h,dataSeriesIndex:e.index,chart:this.chart};c.eventContext={context:e,userContext:e.options,mouseover:"mouseover",
mousemove:"mousemove",mouseout:"mouseout",click:"click"};f.push(this.objectMap[e.id])}else"legendItem"===c.objectType&&(e=this.chart.data[c.dataSeriesIndex],g=null!==c.dataPointIndex?e.dataPoints[c.dataPointIndex]:null,c.eventParameter={x:b.x,y:b.y,dataSeries:e.options,dataPoint:g,dataPointIndex:c.dataPointIndex,dataSeriesIndex:c.dataSeriesIndex,chart:this.chart},c.eventContext={context:this.chart.legend,userContext:this.chart.legend.options,mouseover:"itemmouseover",mousemove:"itemmousemove",mouseout:"itemmouseout",
click:"itemclick"},f.push(c));e=[];for(b=0;b<this.mouseoveredObjectMaps.length;b++){g=!0;for(c=0;c<f.length;c++)if(f[c].id===this.mouseoveredObjectMaps[b].id){g=!1;break}g?this.fireEvent(this.mouseoveredObjectMaps[b],"mouseout",a):e.push(this.mouseoveredObjectMaps[b])}this.mouseoveredObjectMaps=e;for(b=0;b<f.length;b++){e=!1;for(c=0;c<this.mouseoveredObjectMaps.length;c++)if(f[b].id===this.mouseoveredObjectMaps[c].id){e=!0;break}e||(this.fireEvent(f[b],"mouseover",a),this.mouseoveredObjectMaps.push(f[b]));
"click"===a.type?this.fireEvent(f[b],"click",a):"mousemove"===a.type&&this.fireEvent(f[b],"mousemove",a)}}};ea.prototype.fireEvent=function(a,f,b){if(a&&f){var c=a.eventParameter,e=a.eventContext,g=a.eventContext.userContext;g&&(e&&g[e[f]])&&g[e[f]].call(g,c);"mouseout"!==f?g.cursor&&g.cursor!==b.target.style.cursor&&(b.target.style.cursor=g.cursor):(b.target.style.cursor=this.chart._defaultCursor,delete a.eventParameter,delete a.eventContext);"click"===f&&("dataPoint"===a.objectType&&this.chart.pieDoughnutClickHandler)&&
this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex],c);"click"===f&&("dataPoint"===a.objectType&&this.chart.funnelPyramidClickHandler)&&this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex],c)}};ga.prototype.animate=function(a,f,b,c,e){var g=this;this.chart.isAnimating=!0;e=e||O.easing.linear;b&&this.animations.push({startTime:(new Date).getTime()+(a?a:0),duration:f,animationCallback:b,onComplete:c});for(a=[];0<this.animations.length;)if(f=this.animations.shift(),
b=(new Date).getTime(),c=0,f.startTime<=b&&(c=e(Math.min(b-f.startTime,f.duration),0,1,f.duration),c=Math.min(c,1),isNaN(c)||!isFinite(c))&&(c=1),1>c&&a.push(f),f.animationCallback(c),1<=c&&f.onComplete)f.onComplete();this.animations=a;0<this.animations.length?this.animationRequestId=this.chart.requestAnimFrame.call(window,function(){g.animate.call(g)}):this.chart.isAnimating=!1};ga.prototype.cancelAllAnimations=function(){this.animations=[];this.animationRequestId&&this.chart.cancelRequestAnimFrame.call(window,
this.animationRequestId);this.animationRequestId=null;this.chart.isAnimating=!1};var O={yScaleAnimation:function(a,f){if(0!==a){var b=f.dest,c=f.source.canvas,e=f.animationBase;b.drawImage(c,0,0,c.width,c.height,0,e-e*a,b.canvas.width/ia,a*b.canvas.height/ia)}},xScaleAnimation:function(a,f){if(0!==a){var b=f.dest,c=f.source.canvas,e=f.animationBase;b.drawImage(c,0,0,c.width,c.height,e-e*a,0,a*b.canvas.width/ia,b.canvas.height/ia)}},xClipAnimation:function(a,f){if(0!==a){var b=f.dest,c=f.source.canvas;
b.save();0<a&&b.drawImage(c,0,0,c.width*a,c.height,0,0,c.width*a/ia,c.height/ia);b.restore()}},fadeInAnimation:function(a,f){if(0!==a){var b=f.dest,c=f.source.canvas;b.save();b.globalAlpha=a;b.drawImage(c,0,0,c.width,c.height,0,0,b.canvas.width/ia,b.canvas.height/ia);b.restore()}},easing:{linear:function(a,f,b,c){return b*a/c+f},easeOutQuad:function(a,f,b,c){return-b*(a/=c)*(a-2)+f},easeOutQuart:function(a,f,b,c){return-b*((a=a/c-1)*a*a*a-1)+f},easeInQuad:function(a,f,b,c){return b*(a/=c)*a+f},easeInQuart:function(a,
f,b,c){return b*(a/=c)*a*a*a+f}}},$={drawMarker:function(a,f,b,c,e,g,h,l){if(b){var m=1;b.fillStyle=g?g:"#000000";b.strokeStyle=h?h:"#000000";b.lineWidth=l?l:0;b.setLineDash&&b.setLineDash(F("solid",l));"circle"===c?(b.moveTo(a,f),b.beginPath(),b.arc(a,f,e/2,0,2*Math.PI,!1),g&&b.fill(),l&&(h?b.stroke():(m=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=m))):"square"===c?(b.beginPath(),b.rect(a-e/2,f-e/2,e,e),g&&b.fill(),l&&(h?b.stroke():(m=b.globalAlpha,b.globalAlpha=
0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=m))):"triangle"===c?(b.beginPath(),b.moveTo(a-e/2,f+e/2),b.lineTo(a+e/2,f+e/2),b.lineTo(a,f-e/2),b.closePath(),g&&b.fill(),l&&(h?b.stroke():(m=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=m)),b.beginPath()):"cross"===c&&(b.strokeStyle=g,b.lineWidth=e/4,b.beginPath(),b.moveTo(a-e/2,f-e/2),b.lineTo(a+e/2,f+e/2),b.stroke(),b.moveTo(a+e/2,f-e/2),b.lineTo(a-e/2,f+e/2),b.stroke())}},drawMarkers:function(a){for(var f=
0;f<a.length;f++){var b=a[f];$.drawMarker(b.x,b.y,b.ctx,b.type,b.size,b.color,b.borderColor,b.borderThickness)}}};return q}();Ka.Chart.version="v2.2 GA"})();

/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext||function(){function V(){return this.context_||(this.context_=new C(this))}function W(a,b,c){var g=M.call(arguments,2);return function(){return a.apply(b,g.concat(M.call(arguments)))}}function N(a){return String(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function O(a){a.namespaces.g_vml_||a.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");a.namespaces.g_o_||a.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");
a.styleSheets.ex_canvas_||(a=a.createStyleSheet(),a.owningElement.id="ex_canvas_",a.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")}function X(a){var b=a.srcElement;switch(a.propertyName){case "width":b.getContext().clearRect();b.style.width=b.attributes.width.nodeValue+"px";b.firstChild.style.width=b.clientWidth+"px";break;case "height":b.getContext().clearRect(),b.style.height=b.attributes.height.nodeValue+"px",b.firstChild.style.height=b.clientHeight+
"px"}}function Y(a){a=a.srcElement;a.firstChild&&(a.firstChild.style.width=a.clientWidth+"px",a.firstChild.style.height=a.clientHeight+"px")}function D(){return[[1,0,0],[0,1,0],[0,0,1]]}function t(a,b){for(var c=D(),g=0;3>g;g++)for(var e=0;3>e;e++){for(var f=0,d=0;3>d;d++)f+=a[g][d]*b[d][e];c[g][e]=f}return c}function P(a,b){b.fillStyle=a.fillStyle;b.lineCap=a.lineCap;b.lineJoin=a.lineJoin;b.lineWidth=a.lineWidth;b.miterLimit=a.miterLimit;b.shadowBlur=a.shadowBlur;b.shadowColor=a.shadowColor;b.shadowOffsetX=
a.shadowOffsetX;b.shadowOffsetY=a.shadowOffsetY;b.strokeStyle=a.strokeStyle;b.globalAlpha=a.globalAlpha;b.font=a.font;b.textAlign=a.textAlign;b.textBaseline=a.textBaseline;b.arcScaleX_=a.arcScaleX_;b.arcScaleY_=a.arcScaleY_;b.lineScale_=a.lineScale_}function Q(a){var b=a.indexOf("(",3),c=a.indexOf(")",b+1),b=a.substring(b+1,c).split(",");if(4!=b.length||"a"!=a.charAt(3))b[3]=1;return b}function E(a,b,c){return Math.min(c,Math.max(b,a))}function F(a,b,c){0>c&&c++;1<c&&c--;return 1>6*c?a+6*(b-a)*c:
1>2*c?b:2>3*c?a+6*(b-a)*(2/3-c):a}function G(a){if(a in H)return H[a];var b,c=1;a=String(a);if("#"==a.charAt(0))b=a;else if(/^rgb/.test(a)){c=Q(a);b="#";for(var g,e=0;3>e;e++)g=-1!=c[e].indexOf("%")?Math.floor(255*(parseFloat(c[e])/100)):+c[e],b+=v[E(g,0,255)];c=+c[3]}else if(/^hsl/.test(a)){e=c=Q(a);b=parseFloat(e[0])/360%360;0>b&&b++;g=E(parseFloat(e[1])/100,0,1);e=E(parseFloat(e[2])/100,0,1);if(0==g)g=e=b=e;else{var f=0.5>e?e*(1+g):e+g-e*g,d=2*e-f;g=F(d,f,b+1/3);e=F(d,f,b);b=F(d,f,b-1/3)}b="#"+
v[Math.floor(255*g)]+v[Math.floor(255*e)]+v[Math.floor(255*b)];c=c[3]}else b=Z[a]||a;return H[a]={color:b,alpha:c}}function C(a){this.m_=D();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.fillStyle=this.strokeStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=1*q;this.globalAlpha=1;this.font="10px sans-serif";this.textAlign="left";this.textBaseline="alphabetic";this.canvas=a;var b="width:"+a.clientWidth+"px;height:"+a.clientHeight+"px;overflow:hidden;position:absolute",
c=a.ownerDocument.createElement("div");c.style.cssText=b;a.appendChild(c);b=c.cloneNode(!1);b.style.backgroundColor="red";b.style.filter="alpha(opacity=0)";a.appendChild(b);this.element_=c;this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}function R(a,b,c,g){a.currentPath_.push({type:"bezierCurveTo",cp1x:b.x,cp1y:b.y,cp2x:c.x,cp2y:c.y,x:g.x,y:g.y});a.currentX_=g.x;a.currentY_=g.y}function S(a,b){var c=G(a.strokeStyle),g=c.color,c=c.alpha*a.globalAlpha,e=a.lineScale_*a.lineWidth;1>e&&(c*=e);b.push("<g_vml_:stroke",
' opacity="',c,'"',' joinstyle="',a.lineJoin,'"',' miterlimit="',a.miterLimit,'"',' endcap="',$[a.lineCap]||"square",'"',' weight="',e,'px"',' color="',g,'" />')}function T(a,b,c,g){var e=a.fillStyle,f=a.arcScaleX_,d=a.arcScaleY_,k=g.x-c.x,n=g.y-c.y;if(e instanceof w){var h=0,l=g=0,u=0,m=1;if("gradient"==e.type_){h=e.x1_/f;c=e.y1_/d;var p=s(a,e.x0_/f,e.y0_/d),h=s(a,h,c),h=180*Math.atan2(h.x-p.x,h.y-p.y)/Math.PI;0>h&&(h+=360);1E-6>h&&(h=0)}else p=s(a,e.x0_,e.y0_),g=(p.x-c.x)/k,l=(p.y-c.y)/n,k/=f*q,
n/=d*q,m=x.max(k,n),u=2*e.r0_/m,m=2*e.r1_/m-u;f=e.colors_;f.sort(function(a,b){return a.offset-b.offset});d=f.length;p=f[0].color;c=f[d-1].color;k=f[0].alpha*a.globalAlpha;a=f[d-1].alpha*a.globalAlpha;for(var n=[],r=0;r<d;r++){var t=f[r];n.push(t.offset*m+u+" "+t.color)}b.push('<g_vml_:fill type="',e.type_,'"',' method="none" focus="100%"',' color="',p,'"',' color2="',c,'"',' colors="',n.join(","),'"',' opacity="',a,'"',' g_o_:opacity2="',k,'"',' angle="',h,'"',' focusposition="',g,",",l,'" />')}else e instanceof
I?k&&n&&b.push("<g_vml_:fill",' position="',-c.x/k*f*f,",",-c.y/n*d*d,'"',' type="tile"',' src="',e.src_,'" />'):(e=G(a.fillStyle),b.push('<g_vml_:fill color="',e.color,'" opacity="',e.alpha*a.globalAlpha,'" />'))}function s(a,b,c){a=a.m_;return{x:q*(b*a[0][0]+c*a[1][0]+a[2][0])-r,y:q*(b*a[0][1]+c*a[1][1]+a[2][1])-r}}function z(a,b,c){isFinite(b[0][0])&&(isFinite(b[0][1])&&isFinite(b[1][0])&&isFinite(b[1][1])&&isFinite(b[2][0])&&isFinite(b[2][1]))&&(a.m_=b,c&&(a.lineScale_=aa(ba(b[0][0]*b[1][1]-b[0][1]*
b[1][0]))))}function w(a){this.type_=a;this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0;this.colors_=[]}function I(a,b){if(!a||1!=a.nodeType||"IMG"!=a.tagName)throw new A("TYPE_MISMATCH_ERR");if("complete"!=a.readyState)throw new A("INVALID_STATE_ERR");switch(b){case "repeat":case null:case "":this.repetition_="repeat";break;case "repeat-x":case "repeat-y":case "no-repeat":this.repetition_=b;break;default:throw new A("SYNTAX_ERR");}this.src_=a.src;this.width_=a.width;this.height_=a.height}
function A(a){this.code=this[a];this.message=a+": DOM Exception "+this.code}var x=Math,k=x.round,J=x.sin,K=x.cos,ba=x.abs,aa=x.sqrt,q=10,r=q/2;navigator.userAgent.match(/MSIE ([\d.]+)?/);var M=Array.prototype.slice;O(document);var U={init:function(a){a=a||document;a.createElement("canvas");a.attachEvent("onreadystatechange",W(this.init_,this,a))},init_:function(a){a=a.getElementsByTagName("canvas");for(var b=0;b<a.length;b++)this.initElement(a[b])},initElement:function(a){if(!a.getContext){a.getContext=
V;O(a.ownerDocument);a.innerHTML="";a.attachEvent("onpropertychange",X);a.attachEvent("onresize",Y);var b=a.attributes;b.width&&b.width.specified?a.style.width=b.width.nodeValue+"px":a.width=a.clientWidth;b.height&&b.height.specified?a.style.height=b.height.nodeValue+"px":a.height=a.clientHeight}return a}};U.init();for(var v=[],d=0;16>d;d++)for(var B=0;16>B;B++)v[16*d+B]=d.toString(16)+B.toString(16);var Z={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",
bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",
darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",
ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",
mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",
peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"},
H={},L={},$={butt:"flat",round:"round"},d=C.prototype;d.clearRect=function(){this.textMeasureEl_&&(this.textMeasureEl_.removeNode(!0),this.textMeasureEl_=null);this.element_.innerHTML=""};d.beginPath=function(){this.currentPath_=[]};d.moveTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"moveTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.lineTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"lineTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.bezierCurveTo=
function(a,b,c,g,e,f){e=s(this,e,f);a=s(this,a,b);c=s(this,c,g);R(this,a,c,e)};d.quadraticCurveTo=function(a,b,c,g){a=s(this,a,b);c=s(this,c,g);g={x:this.currentX_+2/3*(a.x-this.currentX_),y:this.currentY_+2/3*(a.y-this.currentY_)};R(this,g,{x:g.x+(c.x-this.currentX_)/3,y:g.y+(c.y-this.currentY_)/3},c)};d.arc=function(a,b,c,g,e,f){c*=q;var d=f?"at":"wa",k=a+K(g)*c-r,n=b+J(g)*c-r;g=a+K(e)*c-r;e=b+J(e)*c-r;k!=g||f||(k+=0.125);a=s(this,a,b);k=s(this,k,n);g=s(this,g,e);this.currentPath_.push({type:d,
x:a.x,y:a.y,radius:c,xStart:k.x,yStart:k.y,xEnd:g.x,yEnd:g.y})};d.rect=function(a,b,c,g){this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+g);this.lineTo(a,b+g);this.closePath()};d.strokeRect=function(a,b,c,g){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+g);this.lineTo(a,b+g);this.closePath();this.stroke();this.currentPath_=e};d.fillRect=function(a,b,c,g){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+
c,b+g);this.lineTo(a,b+g);this.closePath();this.fill();this.currentPath_=e};d.createLinearGradient=function(a,b,c,g){var e=new w("gradient");e.x0_=a;e.y0_=b;e.x1_=c;e.y1_=g;return e};d.createRadialGradient=function(a,b,c,g,e,f){var d=new w("gradientradial");d.x0_=a;d.y0_=b;d.r0_=c;d.x1_=g;d.y1_=e;d.r1_=f;return d};d.drawImage=function(a,b){var c,g,e,d,r,y,n,h;e=a.runtimeStyle.width;d=a.runtimeStyle.height;a.runtimeStyle.width="auto";a.runtimeStyle.height="auto";var l=a.width,u=a.height;a.runtimeStyle.width=
e;a.runtimeStyle.height=d;if(3==arguments.length)c=arguments[1],g=arguments[2],r=y=0,n=e=l,h=d=u;else if(5==arguments.length)c=arguments[1],g=arguments[2],e=arguments[3],d=arguments[4],r=y=0,n=l,h=u;else if(9==arguments.length)r=arguments[1],y=arguments[2],n=arguments[3],h=arguments[4],c=arguments[5],g=arguments[6],e=arguments[7],d=arguments[8];else throw Error("Invalid number of arguments");var m=s(this,c,g),p=[];p.push(" <g_vml_:group",' coordsize="',10*q,",",10*q,'"',' coordorigin="0,0"',' style="width:',
10,"px;height:",10,"px;position:absolute;");if(1!=this.m_[0][0]||this.m_[0][1]||1!=this.m_[1][1]||this.m_[1][0]){var t=[];t.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",k(m.x/q),",","Dy=",k(m.y/q),"");var v=s(this,c+e,g),w=s(this,c,g+d);c=s(this,c+e,g+d);m.x=x.max(m.x,v.x,w.x,c.x);m.y=x.max(m.y,v.y,w.y,c.y);p.push("padding:0 ",k(m.x/q),"px ",k(m.y/q),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",t.join(""),", sizingmethod='clip');")}else p.push("top:",
k(m.y/q),"px;left:",k(m.x/q),"px;");p.push(' ">','<g_vml_:image src="',a.src,'"',' style="width:',q*e,"px;"," height:",q*d,'px"',' cropleft="',r/l,'"',' croptop="',y/u,'"',' cropright="',(l-r-n)/l,'"',' cropbottom="',(u-y-h)/u,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",p.join(""))};d.stroke=function(a){var b=[];b.push("<g_vml_:shape",' filled="',!!a,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0,0"',' coordsize="',10*q,",",10*q,'"',
' stroked="',!a,'"',' path="');for(var c={x:null,y:null},d={x:null,y:null},e=0;e<this.currentPath_.length;e++){var f=this.currentPath_[e];switch(f.type){case "moveTo":b.push(" m ",k(f.x),",",k(f.y));break;case "lineTo":b.push(" l ",k(f.x),",",k(f.y));break;case "close":b.push(" x ");f=null;break;case "bezierCurveTo":b.push(" c ",k(f.cp1x),",",k(f.cp1y),",",k(f.cp2x),",",k(f.cp2y),",",k(f.x),",",k(f.y));break;case "at":case "wa":b.push(" ",f.type," ",k(f.x-this.arcScaleX_*f.radius),",",k(f.y-this.arcScaleY_*
f.radius)," ",k(f.x+this.arcScaleX_*f.radius),",",k(f.y+this.arcScaleY_*f.radius)," ",k(f.xStart),",",k(f.yStart)," ",k(f.xEnd),",",k(f.yEnd))}if(f){if(null==c.x||f.x<c.x)c.x=f.x;if(null==d.x||f.x>d.x)d.x=f.x;if(null==c.y||f.y<c.y)c.y=f.y;if(null==d.y||f.y>d.y)d.y=f.y}}b.push(' ">');a?T(this,b,c,d):S(this,b);b.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",b.join(""))};d.fill=function(){this.stroke(!0)};d.closePath=function(){this.currentPath_.push({type:"close"})};d.save=function(){var a=
{};P(this,a);this.aStack_.push(a);this.mStack_.push(this.m_);this.m_=t(D(),this.m_)};d.restore=function(){this.aStack_.length&&(P(this.aStack_.pop(),this),this.m_=this.mStack_.pop())};d.translate=function(a,b){z(this,t([[1,0,0],[0,1,0],[a,b,1]],this.m_),!1)};d.rotate=function(a){var b=K(a);a=J(a);z(this,t([[b,a,0],[-a,b,0],[0,0,1]],this.m_),!1)};d.scale=function(a,b){this.arcScaleX_*=a;this.arcScaleY_*=b;z(this,t([[a,0,0],[0,b,0],[0,0,1]],this.m_),!0)};d.transform=function(a,b,c,d,e,f){z(this,t([[a,
b,0],[c,d,0],[e,f,1]],this.m_),!0)};d.setTransform=function(a,b,c,d,e,f){z(this,[[a,b,0],[c,d,0],[e,f,1]],!0)};d.drawText_=function(a,b,c,d,e){var f=this.m_;d=0;var r=1E3,t=0,n=[],h;h=this.font;if(L[h])h=L[h];else{var l=document.createElement("div").style;try{l.font=h}catch(u){}h=L[h]={style:l.fontStyle||"normal",variant:l.fontVariant||"normal",weight:l.fontWeight||"normal",size:l.fontSize||10,family:l.fontFamily||"sans-serif"}}var l=h,m=this.element_;h={};for(var p in l)h[p]=l[p];p=parseFloat(m.currentStyle.fontSize);
m=parseFloat(l.size);"number"==typeof l.size?h.size=l.size:-1!=l.size.indexOf("px")?h.size=m:-1!=l.size.indexOf("em")?h.size=p*m:-1!=l.size.indexOf("%")?h.size=p/100*m:-1!=l.size.indexOf("pt")?h.size=m/0.75:h.size=p;h.size*=0.981;p=h.style+" "+h.variant+" "+h.weight+" "+h.size+"px "+h.family;m=this.element_.currentStyle;l=this.textAlign.toLowerCase();switch(l){case "left":case "center":case "right":break;case "end":l="ltr"==m.direction?"right":"left";break;case "start":l="rtl"==m.direction?"right":
"left";break;default:l="left"}switch(this.textBaseline){case "hanging":case "top":t=h.size/1.75;break;case "middle":break;default:case null:case "alphabetic":case "ideographic":case "bottom":t=-h.size/2.25}switch(l){case "right":d=1E3;r=0.05;break;case "center":d=r=500}b=s(this,b+0,c+t);n.push('<g_vml_:line from="',-d,' 0" to="',r,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!e,'" stroked="',!!e,'" style="position:absolute;width:1px;height:1px;">');e?S(this,n):T(this,n,{x:-d,y:0},
{x:r,y:h.size});e=f[0][0].toFixed(3)+","+f[1][0].toFixed(3)+","+f[0][1].toFixed(3)+","+f[1][1].toFixed(3)+",0,0";b=k(b.x/q)+","+k(b.y/q);n.push('<g_vml_:skew on="t" matrix="',e,'" ',' offset="',b,'" origin="',d,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',N(a),'" style="v-text-align:',l,";font:",N(p),'" /></g_vml_:line>');this.element_.insertAdjacentHTML("beforeEnd",n.join(""))};d.fillText=function(a,b,c,d){this.drawText_(a,b,c,d,!1)};d.strokeText=function(a,
b,c,d){this.drawText_(a,b,c,d,!0)};d.measureText=function(a){this.textMeasureEl_||(this.element_.insertAdjacentHTML("beforeEnd",'<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'),this.textMeasureEl_=this.element_.lastChild);var b=this.element_.ownerDocument;this.textMeasureEl_.innerHTML="";this.textMeasureEl_.style.font=this.font;this.textMeasureEl_.appendChild(b.createTextNode(a));return{width:this.textMeasureEl_.offsetWidth}};d.clip=function(){};
d.arcTo=function(){};d.createPattern=function(a,b){return new I(a,b)};w.prototype.addColorStop=function(a,b){b=G(b);this.colors_.push({offset:a,color:b.color,alpha:b.alpha})};d=A.prototype=Error();d.INDEX_SIZE_ERR=1;d.DOMSTRING_SIZE_ERR=2;d.HIERARCHY_REQUEST_ERR=3;d.WRONG_DOCUMENT_ERR=4;d.INVALID_CHARACTER_ERR=5;d.NO_DATA_ALLOWED_ERR=6;d.NO_MODIFICATION_ALLOWED_ERR=7;d.NOT_FOUND_ERR=8;d.NOT_SUPPORTED_ERR=9;d.INUSE_ATTRIBUTE_ERR=10;d.INVALID_STATE_ERR=11;d.SYNTAX_ERR=12;d.INVALID_MODIFICATION_ERR=
13;d.NAMESPACE_ERR=14;d.INVALID_ACCESS_ERR=15;d.VALIDATION_ERR=16;d.TYPE_MISMATCH_ERR=17;G_vmlCanvasManager=U;CanvasRenderingContext2D=C;CanvasGradient=w;CanvasPattern=I;DOMException=A}();
/*jshint ignore:end*/

/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map