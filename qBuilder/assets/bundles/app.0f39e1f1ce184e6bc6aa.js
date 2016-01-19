webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(229);
	module.exports = __webpack_require__(492);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(247), __esModule: true };

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(237);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(238);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(236);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(135);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(135);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = catchErrors;
	
	function catchErrors(_ref) {
	  var filename = _ref.filename;
	  var components = _ref.components;
	  var imports = _ref.imports;
	
	  var _imports = _slicedToArray(imports, 3);
	
	  var React = _imports[0];
	  var ErrorReporter = _imports[1];
	  var reporterOptions = _imports[2];
	
	  if (!React || !React.Component) {
	    throw new Error('imports[0] for react-transform-catch-errors does not look like React.');
	  }
	  if (typeof ErrorReporter !== 'function') {
	    throw new Error('imports[1] for react-transform-catch-errors does not look like a React component.');
	  }
	
	  return function wrapToCatchErrors(ReactClass, componentId) {
	    var originalRender = ReactClass.prototype.render;
	
	    ReactClass.prototype.render = function tryRender() {
	      try {
	        return originalRender.apply(this, arguments);
	      } catch (err) {
	        setTimeout(function () {
	          if (typeof console.reportErrorsAsExceptions !== 'undefined') {
	            var prevReportErrorAsExceptions = console.reportErrorsAsExceptions;
	            // We're in React Native. Don't throw.
	            // Stop react-native from triggering its own error handler
	            console.reportErrorsAsExceptions = false;
	            // Log an error
	            console.error(err);
	            // Reactivate it so other errors are still handled
	            console.reportErrorsAsExceptions = prevReportErrorAsExceptions;
	          } else {
	            throw err;
	          }
	        });
	
	        return React.createElement(ErrorReporter, _extends({
	          error: err,
	          filename: filename
	        }, reporterOptions));
	      }
	    };
	
	    return ReactClass;
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	exports['default'] = proxyReactComponents;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reactProxy = __webpack_require__(381);
	
	var _globalWindow = __webpack_require__(306);
	
	var _globalWindow2 = _interopRequireDefault(_globalWindow);
	
	var componentProxies = undefined;
	if (_globalWindow2['default'].__reactComponentProxies) {
	  componentProxies = _globalWindow2['default'].__reactComponentProxies;
	} else {
	  componentProxies = {};
	  Object.defineProperty(_globalWindow2['default'], '__reactComponentProxies', {
	    configurable: true,
	    enumerable: false,
	    writable: false,
	    value: componentProxies
	  });
	}
	
	function proxyReactComponents(_ref) {
	  var filename = _ref.filename;
	  var components = _ref.components;
	  var imports = _ref.imports;
	  var locals = _ref.locals;
	
	  var _imports = _slicedToArray(imports, 1);
	
	  var React = _imports[0];
	
	  var _locals = _slicedToArray(locals, 1);
	
	  var hot = _locals[0].hot;
	
	  if (!React.Component) {
	    throw new Error('imports[0] for react-transform-hmr does not look like React.');
	  }
	
	  if (!hot || typeof hot.accept !== 'function') {
	    throw new Error('locals[0] does not appear to be a `module` object with Hot Module ' + 'replacement API enabled. You should disable react-transform-hmr in ' + 'production by using `env` section in Babel configuration. See the ' + 'example in README: https://github.com/gaearon/react-transform-hmr');
	  }
	
	  if (Object.keys(components).some(function (key) {
	    return !components[key].isInFunction;
	  })) {
	    hot.accept(function (err) {
	      if (err) {
	        console.warn('[React Transform HMR] There was an error updating ' + filename + ':');
	        console.error(err);
	      }
	    });
	  }
	
	  var forceUpdate = (0, _reactProxy.getForceUpdate)(React);
	
	  return function wrapWithProxy(ReactClass, uniqueId) {
	    var _components$uniqueId = components[uniqueId];
	    var _components$uniqueId$isInFunction = _components$uniqueId.isInFunction;
	    var isInFunction = _components$uniqueId$isInFunction === undefined ? false : _components$uniqueId$isInFunction;
	    var _components$uniqueId$displayName = _components$uniqueId.displayName;
	    var displayName = _components$uniqueId$displayName === undefined ? uniqueId : _components$uniqueId$displayName;
	
	    if (isInFunction) {
	      return ReactClass;
	    }
	
	    var globalUniqueId = filename + '$' + uniqueId;
	    if (componentProxies[globalUniqueId]) {
	      (function () {
	        console.info('[React Transform HMR] Patching ' + displayName);
	        var instances = componentProxies[globalUniqueId].update(ReactClass);
	        setTimeout(function () {
	          return instances.forEach(forceUpdate);
	        });
	      })();
	    } else {
	      componentProxies[globalUniqueId] = (0, _reactProxy.createProxy)(ReactClass);
	    }
	
	    return componentProxies[globalUniqueId].get();
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styleJs = __webpack_require__(465);
	
	var _styleJs2 = _interopRequireDefault(_styleJs);
	
	var _errorStackParser = __webpack_require__(290);
	
	var _errorStackParser2 = _interopRequireDefault(_errorStackParser);
	
	var _objectAssign = __webpack_require__(348);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _lib = __webpack_require__(464);
	
	var __$Getters__ = [];
	var __$Setters__ = [];
	var __$Resetters__ = [];
	
	function __GetDependency__(name) {
	  return __$Getters__[name]();
	}
	
	function __Rewire__(name, value) {
	  __$Setters__[name](value);
	}
	
	function __ResetDependency__(name) {
	  __$Resetters__[name]();
	}
	
	var __RewireAPI__ = {
	  '__GetDependency__': __GetDependency__,
	  '__get__': __GetDependency__,
	  '__Rewire__': __Rewire__,
	  '__set__': __Rewire__,
	  '__ResetDependency__': __ResetDependency__
	};
	var React = _react2['default'];
	var Component = _react.Component;
	var PropTypes = _react.PropTypes;
	
	__$Getters__['React'] = function () {
	  return React;
	};
	
	__$Setters__['React'] = function (value) {
	  React = value;
	};
	
	__$Resetters__['React'] = function () {
	  React = _react2['default'];
	};
	
	__$Getters__['Component'] = function () {
	  return Component;
	};
	
	__$Setters__['Component'] = function (value) {
	  Component = value;
	};
	
	__$Resetters__['Component'] = function () {
	  Component = _react.Component;
	};
	
	__$Getters__['PropTypes'] = function () {
	  return PropTypes;
	};
	
	__$Setters__['PropTypes'] = function (value) {
	  PropTypes = value;
	};
	
	__$Resetters__['PropTypes'] = function () {
	  PropTypes = _react.PropTypes;
	};
	
	var style = _styleJs2['default'];
	
	__$Getters__['style'] = function () {
	  return style;
	};
	
	__$Setters__['style'] = function (value) {
	  style = value;
	};
	
	__$Resetters__['style'] = function () {
	  style = _styleJs2['default'];
	};
	
	var ErrorStackParser = _errorStackParser2['default'];
	
	__$Getters__['ErrorStackParser'] = function () {
	  return ErrorStackParser;
	};
	
	__$Setters__['ErrorStackParser'] = function (value) {
	  ErrorStackParser = value;
	};
	
	__$Resetters__['ErrorStackParser'] = function () {
	  ErrorStackParser = _errorStackParser2['default'];
	};
	
	var assign = _objectAssign2['default'];
	
	__$Getters__['assign'] = function () {
	  return assign;
	};
	
	__$Setters__['assign'] = function (value) {
	  assign = value;
	};
	
	__$Resetters__['assign'] = function () {
	  assign = _objectAssign2['default'];
	};
	
	var isFilenameAbsolute = _lib.isFilenameAbsolute;
	var makeUrl = _lib.makeUrl;
	var makeLinkText = _lib.makeLinkText;
	
	__$Getters__['isFilenameAbsolute'] = function () {
	  return isFilenameAbsolute;
	};
	
	__$Setters__['isFilenameAbsolute'] = function (value) {
	  isFilenameAbsolute = value;
	};
	
	__$Resetters__['isFilenameAbsolute'] = function () {
	  isFilenameAbsolute = _lib.isFilenameAbsolute;
	};
	
	__$Getters__['makeUrl'] = function () {
	  return makeUrl;
	};
	
	__$Setters__['makeUrl'] = function (value) {
	  makeUrl = value;
	};
	
	__$Resetters__['makeUrl'] = function () {
	  makeUrl = _lib.makeUrl;
	};
	
	__$Getters__['makeLinkText'] = function () {
	  return makeLinkText;
	};
	
	__$Setters__['makeLinkText'] = function (value) {
	  makeLinkText = value;
	};
	
	__$Resetters__['makeLinkText'] = function () {
	  makeLinkText = _lib.makeLinkText;
	};
	
	var RedBox = (function (_Component) {
	  _inherits(RedBox, _Component);
	
	  function RedBox() {
	    _classCallCheck(this, RedBox);
	
	    _Component.apply(this, arguments);
	  }
	
	  RedBox.prototype.render = function render() {
	    var _props = this.props;
	    var error = _props.error;
	    var filename = _props.filename;
	    var editorScheme = _props.editorScheme;
	    var useLines = _props.useLines;
	    var useColumns = _props.useColumns;
	
	    var _assign = assign({}, style, this.props.style);
	
	    var redbox = _assign.redbox;
	    var message = _assign.message;
	    var stack = _assign.stack;
	    var frame = _assign.frame;
	    var file = _assign.file;
	    var linkToFile = _assign.linkToFile;
	
	    var frames = ErrorStackParser.parse(error).map(function (f, index) {
	      var text = undefined;
	      var url = undefined;
	
	      if (index === 0 && filename && !isFilenameAbsolute(f.fileName)) {
	        url = makeUrl(filename, editorScheme);
	        text = makeLinkText(filename);
	      } else {
	        var lines = useLines ? f.lineNumber : null;
	        var columns = useColumns ? f.columnNumber : null;
	        url = makeUrl(f.fileName, editorScheme, lines, columns);
	        text = makeLinkText(f.fileName, lines, columns);
	      }
	
	      return React.createElement(
	        'div',
	        { style: frame, key: index },
	        React.createElement(
	          'div',
	          null,
	          f.functionName
	        ),
	        React.createElement(
	          'div',
	          { style: file },
	          React.createElement(
	            'a',
	            { href: url, style: linkToFile },
	            text
	          )
	        )
	      );
	    });
	    return React.createElement(
	      'div',
	      { style: redbox },
	      React.createElement(
	        'div',
	        { style: message },
	        error.name,
	        ': ',
	        error.message
	      ),
	      React.createElement(
	        'div',
	        { style: stack },
	        frames
	      )
	    );
	  };
	
	  _createClass(RedBox, null, [{
	    key: 'propTypes',
	    value: {
	      error: PropTypes.instanceOf(Error).isRequired,
	      filename: PropTypes.string,
	      editorScheme: PropTypes.string,
	      useLines: PropTypes.bool,
	      useColumns: PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'displayName',
	    value: 'RedBox',
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      useLines: true,
	      useColumns: true
	    },
	    enumerable: true
	  }]);
	
	  return RedBox;
	})(Component);
	
	var _defaultExport = RedBox;
	
	if (typeof _defaultExport === 'object' || typeof _defaultExport === 'function') {
	  Object.defineProperty(_defaultExport, '__Rewire__', {
	    'value': __Rewire__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__set__', {
	    'value': __Rewire__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__ResetDependency__', {
	    'value': __ResetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__GetDependency__', {
	    'value': __GetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__get__', {
	    'value': __GetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__RewireAPI__', {
	    'value': __RewireAPI__,
	    'enumberable': false
	  });
	}
	
	exports['default'] = _defaultExport;
	exports.__GetDependency__ = __GetDependency__;
	exports.__get__ = __GetDependency__;
	exports.__Rewire__ = __Rewire__;
	exports.__set__ = __Rewire__;
	exports.__ResetDependency__ = __ResetDependency__;
	exports.__RewireAPI__ = __RewireAPI__;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(141)('wks')
	  , uid    = __webpack_require__(143)
	  , Symbol = __webpack_require__(61).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(334),
	    isLength = __webpack_require__(67);
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(66),
	    isLength = __webpack_require__(67),
	    isObjectLike = __webpack_require__(45);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;


/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(61)
	  , core      = __webpack_require__(24)
	  , ctx       = __webpack_require__(83)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 43 */,
/* 44 */
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);
	
	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}
	
	module.exports = restParam;


/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var baseForIn = __webpack_require__(327),
	    isArguments = __webpack_require__(68),
	    isObjectLike = __webpack_require__(45);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * **Note:** This method assumes objects created by the `Object` constructor
	 * have no inherited enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  var Ctor;
	
	  // Exit early for non `Object` objects.
	  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	    return false;
	  }
	  // IE < 9 iterates inherited properties before own properties. If the first
	  // iterated property is an object's own property then there are no inherited
	  // enumerable properties.
	  var result;
	  // In most environments an object's own properties are iterated before
	  // its inherited properties. If the last iterated property is an object's
	  // own property then there are no inherited enumerable properties.
	  baseForIn(value, function(subValue, key) {
	    result = key;
	  });
	  return result === undefined || hasOwnProperty.call(value, result);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RECEIVE_DATA = exports.REQUEST_DATA = exports.FETCH_DATA = exports.SAVE_DATA = exports.SWAP_BLOCKS = exports.SET_BLOCKS = exports.ADD_BLOCK = exports.initialState = exports.getID = undefined;
	exports.addBlock = addBlock;
	exports.setBlocks = setBlocks;
	exports.swapBlocks = swapBlocks;
	exports.saveData = saveData;
	exports.requestData = requestData;
	exports.fetchData = fetchData;
	exports.receiveData = receiveData;
	
	var _toConsumableArray2 = __webpack_require__(241);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _stringify = __webpack_require__(235);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _assign = __webpack_require__(134);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _update = __webpack_require__(463);
	
	var _update2 = _interopRequireDefault(_update);
	
	var _shortid = __webpack_require__(476);
	
	var _shortid2 = _interopRequireDefault(_shortid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// #TODO: use flux standard action style
	
	var getID = exports.getID = function getID() {
	  return _shortid2.default.generate();
	};
	
	var initialState = exports.initialState = function initialState() {
	  return [];
	};
	
	var headers = {
	  'Accept': 'application/json',
	  'Content-Type': 'application/json'
	};
	
	var URL = 'http://localhost:3003/data/';
	
	/*
	 * action types
	 */
	
	var ADD_BLOCK = exports.ADD_BLOCK = 'ADD_BLOCK';
	var SET_BLOCKS = exports.SET_BLOCKS = 'SET_BLOCKS';
	var SWAP_BLOCKS = exports.SWAP_BLOCKS = 'SWAP_BLOCKS';
	
	var SAVE_DATA = exports.SAVE_DATA = 'SAVE_DATA';
	var FETCH_DATA = exports.FETCH_DATA = 'FETCH_DATA';
	var REQUEST_DATA = exports.REQUEST_DATA = 'REQUEST_DATA';
	var RECEIVE_DATA = exports.RECEIVE_DATA = 'RECEIVE_DATA';
	
	/*
	 * action creators
	 */
	
	function addBlock(block) {
	  return {
	    type: ADD_BLOCK,
	    block: (0, _assign2.default)({}, block, {
	      id: getID()
	    })
	  };
	}
	
	function setBlocks(blocks) {
	  return {
	    type: SET_BLOCKS,
	    blocks: blocks
	  };
	}
	
	function swapBlocks(swapSourceIndex, swapTargetIndex) {
	  return {
	    type: SWAP_BLOCKS,
	    swapSourceIndex: swapSourceIndex,
	    swapTargetIndex: swapTargetIndex
	  };
	}
	
	function save(dispatch, getState) {
	  var _getState = getState();
	
	  var blocks = _getState.blocks;
	
	  return fetch(URL, {
	    method: 'put',
	    headers: headers,
	    body: (0, _stringify2.default)({ 'blocks': blocks })
	  });
	}
	
	function saveData() {
	  return function (dispatch, getState) {
	    return save(dispatch, getState).then(function (response) {
	      return response.json();
	    }).then(function (data) {
	      console.log('parsed data: ', data);
	    }).catch(function (ex) {
	      console.log('parsing failed: ', ex);
	    });
	  };
	}
	
	function requestData() {
	  return {
	    type: REQUEST_DATA
	  };
	}
	
	function fetchData() {
	  return function (dispatch) {
	    dispatch(requestData());
	    return fetch(URL, {
	      method: 'get',
	      headers: headers
	    }).then(function (response) {
	      return response.json();
	    }).then(function (data) {
	      return dispatch(receiveData(data.blocks));
	    });
	  };
	}
	
	function receiveData(data) {
	  return {
	    type: RECEIVE_DATA,
	    blocks: data
	  };
	}
	
	/*
	 * reducers
	 */
	
	function blocks() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState() : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case ADD_BLOCK:
	      return [].concat((0, _toConsumableArray3.default)(state), [action.block]);
	    case SET_BLOCKS:
	      return (0, _assign2.default)({}, state, action.blocks);
	    case SWAP_BLOCKS:
	      var swapSourceIndex = action.swapSourceIndex;
	      var swapTargetIndex = action.swapTargetIndex;
	
	      var dragCard = state[swapSourceIndex];
	      var newState = (0, _update2.default)(state, {
	        $splice: [[swapSourceIndex, 1], [swapTargetIndex, 0, dragCard]]
	      });
	      return newState;
	    case SAVE_DATA:
	      console.log('save data');
	      return state;
	    case REQUEST_DATA:
	      console.log('request data');
	      return state;
	    case FETCH_DATA:
	      console.log('fetch data');
	      return state;
	    case RECEIVE_DATA:
	      console.log('receive_data');
	      return action.blocks;
	    default:
	      return state;
	  }
	}
	
	exports.default = blocks;

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.beginDrag = beginDrag;
	exports.publishDragSource = publishDragSource;
	exports.hover = hover;
	exports.drop = drop;
	exports.endDrag = endDrag;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsMatchesType = __webpack_require__(147);
	
	var _utilsMatchesType2 = _interopRequireDefault(_utilsMatchesType);
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashLangIsArray = __webpack_require__(30);
	
	var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);
	
	var _lodashLangIsObject = __webpack_require__(31);
	
	var _lodashLangIsObject2 = _interopRequireDefault(_lodashLangIsObject);
	
	var BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
	exports.BEGIN_DRAG = BEGIN_DRAG;
	var PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
	exports.PUBLISH_DRAG_SOURCE = PUBLISH_DRAG_SOURCE;
	var HOVER = 'dnd-core/HOVER';
	exports.HOVER = HOVER;
	var DROP = 'dnd-core/DROP';
	exports.DROP = DROP;
	var END_DRAG = 'dnd-core/END_DRAG';
	
	exports.END_DRAG = END_DRAG;
	
	function beginDrag(sourceIds) {
	  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var _ref$publishSource = _ref.publishSource;
	  var publishSource = _ref$publishSource === undefined ? true : _ref$publishSource;
	  var _ref$clientOffset = _ref.clientOffset;
	  var clientOffset = _ref$clientOffset === undefined ? null : _ref$clientOffset;
	  var getSourceClientOffset = _ref.getSourceClientOffset;
	
	  _invariant2['default'](_lodashLangIsArray2['default'](sourceIds), 'Expected sourceIds to be an array.');
	
	  var monitor = this.getMonitor();
	  var registry = this.getRegistry();
	  _invariant2['default'](!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
	
	  for (var i = 0; i < sourceIds.length; i++) {
	    _invariant2['default'](registry.getSource(sourceIds[i]), 'Expected sourceIds to be registered.');
	  }
	
	  var sourceId = null;
	  for (var i = sourceIds.length - 1; i >= 0; i--) {
	    if (monitor.canDragSource(sourceIds[i])) {
	      sourceId = sourceIds[i];
	      break;
	    }
	  }
	  if (sourceId === null) {
	    return;
	  }
	
	  var sourceClientOffset = null;
	  if (clientOffset) {
	    _invariant2['default'](typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
	    sourceClientOffset = getSourceClientOffset(sourceId);
	  }
	
	  var source = registry.getSource(sourceId);
	  var item = source.beginDrag(monitor, sourceId);
	  _invariant2['default'](_lodashLangIsObject2['default'](item), 'Item must be an object.');
	
	  registry.pinSource(sourceId);
	
	  var itemType = registry.getSourceType(sourceId);
	  return {
	    type: BEGIN_DRAG,
	    itemType: itemType,
	    item: item,
	    sourceId: sourceId,
	    clientOffset: clientOffset,
	    sourceClientOffset: sourceClientOffset,
	    isSourcePublic: publishSource
	  };
	}
	
	function publishDragSource(manager) {
	  var monitor = this.getMonitor();
	  if (!monitor.isDragging()) {
	    return;
	  }
	
	  return {
	    type: PUBLISH_DRAG_SOURCE
	  };
	}
	
	function hover(targetIds) {
	  var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var _ref2$clientOffset = _ref2.clientOffset;
	  var clientOffset = _ref2$clientOffset === undefined ? null : _ref2$clientOffset;
	
	  _invariant2['default'](_lodashLangIsArray2['default'](targetIds), 'Expected targetIds to be an array.');
	  targetIds = targetIds.slice(0);
	
	  var monitor = this.getMonitor();
	  var registry = this.getRegistry();
	  _invariant2['default'](monitor.isDragging(), 'Cannot call hover while not dragging.');
	  _invariant2['default'](!monitor.didDrop(), 'Cannot call hover after drop.');
	
	  var draggedItemType = monitor.getItemType();
	  for (var i = 0; i < targetIds.length; i++) {
	    var targetId = targetIds[i];
	    _invariant2['default'](targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
	
	    var target = registry.getTarget(targetId);
	    _invariant2['default'](target, 'Expected targetIds to be registered.');
	
	    var targetType = registry.getTargetType(targetId);
	    if (_utilsMatchesType2['default'](targetType, draggedItemType)) {
	      target.hover(monitor, targetId);
	    }
	  }
	
	  return {
	    type: HOVER,
	    targetIds: targetIds,
	    clientOffset: clientOffset
	  };
	}
	
	function drop() {
	  var _this = this;
	
	  var monitor = this.getMonitor();
	  var registry = this.getRegistry();
	  _invariant2['default'](monitor.isDragging(), 'Cannot call drop while not dragging.');
	  _invariant2['default'](!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
	
	  var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
	
	  targetIds.reverse();
	  targetIds.forEach(function (targetId, index) {
	    var target = registry.getTarget(targetId);
	
	    var dropResult = target.drop(monitor, targetId);
	    _invariant2['default'](typeof dropResult === 'undefined' || _lodashLangIsObject2['default'](dropResult), 'Drop result must either be an object or undefined.');
	    if (typeof dropResult === 'undefined') {
	      dropResult = index === 0 ? {} : monitor.getDropResult();
	    }
	
	    _this.store.dispatch({
	      type: DROP,
	      dropResult: dropResult
	    });
	  });
	}
	
	function endDrag() {
	  var monitor = this.getMonitor();
	  var registry = this.getRegistry();
	  _invariant2['default'](monitor.isDragging(), 'Cannot call endDrag while not dragging.');
	
	  var sourceId = monitor.getSourceId();
	  var source = registry.getSource(sourceId, true);
	  source.endDrag(monitor, sourceId);
	
	  registry.unpinSource();
	
	  return {
	    type: END_DRAG
	  };
	}

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.addSource = addSource;
	exports.addTarget = addTarget;
	exports.removeSource = removeSource;
	exports.removeTarget = removeTarget;
	var ADD_SOURCE = 'dnd-core/ADD_SOURCE';
	exports.ADD_SOURCE = ADD_SOURCE;
	var ADD_TARGET = 'dnd-core/ADD_TARGET';
	exports.ADD_TARGET = ADD_TARGET;
	var REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
	exports.REMOVE_SOURCE = REMOVE_SOURCE;
	var REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
	
	exports.REMOVE_TARGET = REMOVE_TARGET;
	
	function addSource(sourceId) {
	  return {
	    type: ADD_SOURCE,
	    sourceId: sourceId
	  };
	}
	
	function addTarget(targetId) {
	  return {
	    type: ADD_TARGET,
	    targetId: targetId
	  };
	}
	
	function removeSource(sourceId) {
	  return {
	    type: REMOVE_SOURCE,
	    sourceId: sourceId
	  };
	}
	
	function removeTarget(targetId) {
	  return {
	    type: REMOVE_TARGET,
	    targetId: targetId
	  };
	}

/***/ },
/* 64 */,
/* 65 */,
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(344);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(29),
	    isObjectLike = __webpack_require__(45);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _DragDropContext = __webpack_require__(362);
	
	exports.DragDropContext = _interopRequire(_DragDropContext);
	
	var _DragLayer = __webpack_require__(363);
	
	exports.DragLayer = _interopRequire(_DragLayer);
	
	var _DragSource = __webpack_require__(364);
	
	exports.DragSource = _interopRequire(_DragSource);
	
	var _DropTarget = __webpack_require__(365);
	
	exports.DropTarget = _interopRequire(_DropTarget);
	
	if (true) {
	  Object.defineProperty(exports, 'default', {
	    get: function get() {
	      console.error( // eslint-disable-line no-console
	      'React DnD does not provide a default export. ' + 'You are probably missing the curly braces in the import statement. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#react-dnd-does-not-provide-a-default-export');
	    }
	  });
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = checkDecoratorArguments;
	
	function checkDecoratorArguments(functionName, signature) {
	  if (true) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }
	
	    for (var i = 0; i < args.length; i++) {
	      var arg = args[i];
	      if (arg && arg.prototype && arg.prototype.render) {
	        console.error( // eslint-disable-line no-console
	        'You seem to be applying the arguments in the wrong order. ' + ('It should be ' + functionName + '(' + signature + ')(Component), not the other way around. ') + 'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#you-seem-to-be-applying-the-arguments-in-the-wrong-order');
	        return;
	      }
	    }
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var constants = {
	  DRAGGABLE_BLOCK: 'DraggableBlock',
	  DRAGGABLE_QUESTION: 'DraggableQuestion',
	  DROP_SECTION: 'DropSection'
	};
	
	console.log(constants);
	
	exports.default = constants;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(34);
	
	var _reduxSimpleRouter = __webpack_require__(130);
	
	var _blocks = __webpack_require__(59);
	
	var _blocks2 = _interopRequireDefault(_blocks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _redux.combineReducers)({
	  blocks: _blocks2.default,
	  router: _reduxSimpleRouter.routeReducer
	});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(138);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(250);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 84 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 85 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(19)
	  , createDesc = __webpack_require__(88);
	module.exports = __webpack_require__(136) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(19).setDesc
	  , has = __webpack_require__(85)
	  , TAG = __webpack_require__(28)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(137)
	  , defined = __webpack_require__(84);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(84);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(50)();
	// imports
	
	
	// module
	exports.push([module.id, ".block{padding:10px;font-size:13px;cursor:pointer;border-radius:3px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.block:hover{background-color:#565555}", "", {"version":3,"sources":["/./qBuilder/assets/components/Block.scss"],"names":[],"mappings":"AAAA,OACE,aAAc,eACE,eACA,kBACG,yBACnB,sBAAA,qBAAA,gBAAkB,CAAE,aAElB,wBAA0B,CAAE","file":"Block.scss","sourcesContent":[".block {\n  padding: 10px;\n  font-size: 13px;\n  cursor: pointer;\n  border-radius: 3px;\n  user-select: none; }\n  .block:hover {\n    background-color: #565555; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(50)();
	// imports
	
	
	// module
	exports.push([module.id, ".button{-webkit-appearance:none;padding:10px 30px;background:#4d4d4d;color:#fff;border:none;border-radius:3px;margin-top:20px}.button:active,.button:focus{outline:none}", "", {"version":3,"sources":["/./qBuilder/assets/components/Button.scss"],"names":[],"mappings":"AAAA,QACE,wBAAyB,kBACN,mBACC,WACP,YACA,kBACM,eACF,CAAE,6BAEjB,YAAc,CAAE","file":"Button.scss","sourcesContent":[".button {\n  -webkit-appearance: none;\n  padding: 10px 30px;\n  background: #4d4d4d;\n  color: white;\n  border: none;\n  border-radius: 3px;\n  margin-top: 20px; }\n  .button:active, .button:focus {\n    outline: none; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(50)();
	// imports
	
	
	// module
	exports.push([module.id, ".question{display:block;padding:10px 20px;border:1px solid #e2e1e1;background:#fff;color:#4d4d4d;border-radius:3px;width:100%;margin:10px 0;cursor:move}", "", {"version":3,"sources":["/./qBuilder/assets/components/Question.scss"],"names":[],"mappings":"AAAA,UACE,cAAe,kBACI,yBACO,gBACT,cACF,kBACI,WACP,cACG,WACF,CAAE","file":"Question.scss","sourcesContent":[".question {\n  display: block;\n  padding: 10px 20px;\n  border: 1px solid #E2E1E1;\n  background: #fff;\n  color: #4d4d4d;\n  border-radius: 3px;\n  width: 100%;\n  margin: 10px 0;\n  cursor: move; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(50)();
	// imports
	
	
	// module
	exports.push([module.id, ".section{width:100%;border:1px solid #e2e1e1;text-align:center;padding:100px}.section.isActive{border:1px solid #e2e1e1;background-color:#efefef}.sectionTitle{font-size:20px;font-weight:700;margin:20px auto}", "", {"version":3,"sources":["/./qBuilder/assets/components/Section.scss"],"names":[],"mappings":"AAAA,SACE,WAAY,yBACc,kBACP,aACJ,CAAE,kBAEf,yBAA0B,wBACA,CAAE,cAG9B,eAAgB,gBACE,gBACA,CAAE","file":"Section.scss","sourcesContent":[".section {\n  width: 100%;\n  border: 1px solid #E2E1E1;\n  text-align: center;\n  padding: 100px; }\n  .section.isActive {\n    border: 1px solid #E2E1E1;\n    background-color: #efefef; }\n\n.sectionTitle {\n  font-size: 20px;\n  font-weight: bold;\n  margin: 20px auto; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(50)();
	// imports
	
	
	// module
	exports.push([module.id, "html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}@font-face{{font-family:Frutiger Neue;font-style:normal;font-weight:500;src:url(/fonts/04e8f83f-ff22-47f9-b6de-f1a16df7feff.eot?#iefix);src:url(/fonts/04e8f83f-ff22-47f9-b6de-f1a16df7feff.eot?#iefix) format(\"eot\"),url(/fonts/539f6f1a-0c4b-4f30-9f94-93d8fecc17e9.woff2) format(\"woff2\"),url(/fonts/2c4bc2a0-6c0c-4a07-964d-ca4b46d894ea.woff) format(\"woff\"),url(/fonts/b793bcb8-7a6f-43fd-ae6b-d60e13ba6f4d.ttf) format(\"truetype\"),url(/fonts/bedd7bf6-49ac-4496-a7eb-3e3c6ed92f16.svg#bedd7bf6-49ac-4496-a7eb-3e3c6ed92f16) format(\"svg\");font-style:italic;src:url(/fonts/e2e74e1c-9e18-4127-adfd-feb8f6a9ceaf.eot?#iefix);src:url(/fonts/e2e74e1c-9e18-4127-adfd-feb8f6a9ceaf.eot?#iefix) format(\"eot\"),url(/fonts/9edf3443-80c6-4de6-b582-122401f63ad4.woff2) format(\"woff2\"),url(/fonts/aa94077e-cdcd-4e33-abe0-ddcfe27e3485.woff) format(\"woff\"),url(/fonts/22dfb43f-26df-46f9-aa0f-30038f8da834.ttf) format(\"truetype\"),url(/fonts/36ad2de1-95ea-4eb3-a836-29c86179a248.svg#36ad2de1-95ea-4eb3-a836-29c86179a248) format(\"svg\");font-weight:700;src:url(/fonts/62057895-1f9e-4d70-bd1a-65751a20a878.eot?#iefix);src:url(/fonts/62057895-1f9e-4d70-bd1a-65751a20a878.eot?#iefix) format(\"eot\"),url(/fonts/26f1236c-a914-477f-9d0f-10d758702626.woff2) format(\"woff2\"),url(/fonts/7875f3d5-b62b-445c-8c9e-d65da1514e9d.woff) format(\"woff\"),url(/fonts/1c242f4e-0c64-47cc-8cbc-e53d949280ba.ttf) format(\"truetype\"),url(/fonts/ec132df9-012a-4594-bbd9-c86574bee7b0.svg#ec132df9-012a-4594-bbd9-c86574bee7b0) format(\"svg\");src:url(/fonts/45f1e5f6-f69d-4e88-bf17-183db0f9c6b6.eot?#iefix);src:url(/fonts/45f1e5f6-f69d-4e88-bf17-183db0f9c6b6.eot?#iefix) format(\"eot\"),url(/fonts/2c94541b-311c-4a3b-8fa1-991a75cd925d.woff2) format(\"woff2\"),url(/fonts/98a7ec92-51b0-444c-91ac-8702b3d7a29b.woff) format(\"woff\"),url(/fonts/7c492427-6dd9-4cc0-ae4b-8e26ba4b9e16.ttf) format(\"truetype\"),url(/fonts/303a2020-b96a-4c08-840d-448fd2b241d1.svg#303a2020-b96a-4c08-840d-448fd2b241d1) format(\"svg\")}}.h1,h1{font-size:26px;margin:0}body,html{margin:0;padding:0;height:100%}html{overflow:hidden;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:\"smcp\";font-feature-settings:\"smcp\";box-sizing:border-box}body,html{width:100%;height:100%;-webkit-font-smoothing:antialiased}body{position:relative;font-size:16px;font-family:Frutiger Neue,Helvetica Neue,Helvetica,sans-serif;line-height:1.4;color:#333}p{margin:0 0 1em}a{color:blue}*,:after,:before{box-sizing:inherit}.root{height:100%}body:before{background-color:#fcf8e3;border-bottom:1px solid #fbeed5;border-left:1px solid #fbeed5;color:#c09853;font:small-caption;padding:3px 6px;position:absolute;right:0;top:0;z-index:100}.grid{letter-spacing:-.32em;margin-left:-2rem}.grid--center{text-align:center}.grid--center .grid__col{text-align:left}.grid--center-all{text-align:center}.grid--reverse{direction:rtl}.grid--reverse .grid__col{direction:ltr}.grid--spaced .grid__col{margin-bottom:2rem}.grid--spaced.grid--tight .grid__col{margin-bottom:1rem}.grid--align-mid .grid__col{vertical-align:middle}.grid--stagger-align .grid__col:nth-of-type(1n){text-align:right}.grid--stagger-align .grid__col:nth-of-type(2n){text-align:left}.grid--tight{margin-left:-1em}.grid--tight .grid__col{padding-left:1em}.grid--gutterless{margin-left:0}.grid--gutterless .grid__col{padding-left:0}.grid--pixelgutter{margin-left:1px}.grid--pixelgutter .grid__col{padding-left:1px;margin-bottom:1px}.grid--flex{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-flex;display:-ms-flexbox;display:flex}.grid--flex.grid--center{-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.grid__col{display:inline-block;width:100%;vertical-align:top;letter-spacing:normal;word-spacing:normal;padding-left:2rem}.grid--float .grid__col{float:left;display:block}.grid__col--flex{display:-webkit-flex;display:-ms-flexbox;display:flex}@media all and (min-width:18.75em){.xs-1{width:8.33333%}.xs-2{width:16.66667%}.xs-3{width:25%}.xs-4{width:33.33333%}.xs-5{width:41.66667%}.xs-6{width:50%}.xs-7{width:58.33333%;width:58.33319%}.xs-8{width:66.66667%}.xs-9{width:75%;width:75.00019%}.xs-10{width:83.33333%}.xs-11{width:91.66667%;width:91.66659%}.xs-12{width:100%}}@media all and (min-width:31.25em){.s-1{width:8.33333%}.s-2{width:16.66667%}.s-3{width:25%}.s-4{width:33.33333%}.s-5{width:41.66667%}.s-6{width:50%}.s-7{width:58.33333%;width:58.33319%}.s-8{width:66.66667%}.s-9{width:75%;width:75.00019%}.s-10{width:83.33333%}.s-11{width:91.66667%;width:91.66659%}.s-12{width:100%}}@media all and (min-width:46.25em){.m-1{width:8.33333%}.m-2{width:16.66667%}.m-3{width:25%}.m-4{width:33.33333%}.m-5{width:41.66667%}.m-6{width:50%}.m-7{width:58.33333%;width:58.33319%}.m-8{width:66.66667%}.m-9{width:75%;width:75.00019%}.m-10{width:83.33333%}.m-11{width:91.66667%;width:91.66659%}.m-12{width:100%}}@media all and (min-width:61.25em){.l-1{width:8.33333%}.l-2{width:16.66667%}.l-3{width:25%}.l-4{width:33.33333%}.l-5{width:41.66667%}.l-6{width:50%}.l-7{width:58.33333%;width:58.33319%}.l-8{width:66.66667%}.l-9{width:75%;width:75.00019%}.l-10{width:83.33333%}.l-11{width:91.66667%;width:91.66659%}.l-12{width:100%}}@media all and (min-width:81.25em){.xl-1{width:8.33333%}.xl-2{width:16.66667%}.xl-3{width:25%}.xl-4{width:33.33333%}.xl-5{width:41.66667%}.xl-6{width:50%}.xl-7{width:58.33333%;width:58.33319%}.xl-8{width:66.66667%}.xl-9{width:75%;width:75.00019%}.xl-10{width:83.33333%}.xl-11{width:91.66667%;width:91.66659%}.xl-12{width:100%}}@media all and (min-width:100em){.xxl-1{width:8.33333%}.xxl-2{width:16.66667%}.xxl-3{width:25%}.xxl-4{width:33.33333%}.xxl-5{width:41.66667%}.xxl-6{width:50%}.xxl-7{width:58.33333%;width:58.33319%}.xxl-8{width:66.66667%}.xxl-9{width:75%;width:75.00019%}.xxl-10{width:83.33333%}.xxl-11{width:91.66667%;width:91.66659%}.xxl-12{width:100%}}.wrapper{max-width:1200px;margin:0 auto}.view{width:100%;height:100vh}.view__header{height:72px;background:#fff;box-shadow:0 1px 4px 0 rgba(0,0,0,.19);position:relative;z-index:100;padding:15px 20px;text-align:center}.view__main{background:#fbfafa;height:calc(100vh - 72px);width:calc(100% - 250px);padding:20px}.view__sidebar{background:#4d4d4d;color:#fff;width:250px;height:calc(100vh - 72px);position:fixed;top:72px;right:0;padding:20px}", "", {"version":3,"sources":["/./qBuilder/assets/styles/core.scss"],"names":[],"mappings":"AAmKE,KACE,uBAAwB,0BAEG,6BAEI,CACtB,KAET,QAAU,CAAE,2FAcZ,aAAe,CAAE,4BAKjB,qBAAsB,uBAEG,CAChB,sBAET,aAAc,QACJ,CAAE,kBAGZ,YAAc,CAAE,EAEhB,4BAA8B,CAAE,iBAGhC,SAAW,CAAE,YAEb,wBAA0B,CAAE,SAG5B,eAAkB,CAAE,IAEpB,iBAAmB,CAAE,GAErB,cAAe,cACE,CAAE,KAEnB,gBAAiB,UACL,CAAE,MAEd,aAAe,CAAE,QAGjB,cAAe,cACA,kBACI,uBACM,CAAE,IAE3B,SAAY,CAAE,IAEd,aAAgB,CAAE,IAElB,QAAU,CAAE,eAEZ,eAAiB,CAAE,OAEnB,eAAiB,CAAE,GAGnB,uBAAwB,QACd,CAAE,IAEZ,aAAe,CAAE,kBAKjB,sBAAkC,aACnB,CAAE,sCAMjB,cAAe,aAED,QAEJ,CACD,OAET,gBAAkB,CAAE,cAGpB,mBAAqB,CAAE,oEAKvB,0BAA2B,cAEX,CACP,sCAGT,cAAgB,CAAE,iDAGlB,SAAU,SACC,CAAE,MAEb,kBAAoB,CAAE,uCAGtB,sBAAuB,SAEZ,CACF,4FAGT,WAAa,CAAE,mBAEf,6BAA8B,sBAKN,CAAE,+FAG1B,uBAAyB,CAAE,SAE3B,wBAA0B,aACZ,0BACiB,CAAE,OAEjC,SAAU,SAEC,CACF,SAET,aAAe,CAAE,SAEjB,eAAkB,CAAE,MAEpB,yBAA0B,gBACR,CAAE,MAGpB,SAAW,CAAE,WAGf,CACE,0BAA6B,kBACV,gBACF,gEACkD,0YACsV,kBAKtY,gEAEgD,0YACsV,gBAMxY,gEACkD,0YACsV,gEAOtV,yYACsV,CAxBE,CAAE,OA0B7Z,eAAgB,QACN,CAAE,UAGZ,SAAU,UACC,WACE,CAAE,KAIf,gBAAiB,kCAEkB,qCAEG,6BACR,qBACP,CAAE,UARzB,WAAY,YACC,kCAEuB,CAMtC,KACE,kBAAmB,eAGH,8DACsD,gBACrD,UACL,CAC0B,EAEtC,cAAkB,CAAE,EAEpB,UAAY,CAAE,iBAId,kBAAoB,CAAE,MAEtB,WAAa,CAAE,YAEf,yBAA0B,gCACO,8BACF,cAChB,mBACK,gBACH,kBACE,QACV,MACF,WACM,CAAE,MAEf,sBAAwB,iBAEL,CAAE,cAErB,iBAAmB,CAAE,yBAEnB,eAAiB,CAAE,kBAErB,iBAAmB,CAAE,eAErB,aAAe,CAAE,0BAEf,aAAe,CAAE,yBAEnB,kBAAoB,CAAE,qCAEtB,kBAAoB,CAAE,4BAEtB,qBAAuB,CAAE,gDAEzB,gBAAkB,CAAE,gDAEpB,eAAiB,CAAE,aAEnB,gBAAkB,CAAE,wBAElB,gBAAkB,CAAE,kBAEtB,aAAe,CAAE,6BAEf,cAAgB,CAAE,mBAEpB,eAAiB,CAAE,8BAEjB,iBAAkB,iBACC,CAAE,YAEvB,uBAAA,mBAAA,eAAgB,qBAChB,oBAAA,YAAc,CAAE,yBAEd,+BAAA,qBAAA,sBAAwB,CAAE,WAE5B,qBAAsB,WACV,mBACQ,sBACG,oBACF,iBACF,CAAE,wBAEnB,WAAY,aACG,CAAE,iBAEnB,qBAAA,oBAAA,YAAc,CAAE,mCAEhB,MAEE,cAAuB,CAAE,MAGzB,eAAsB,CAAE,MAGxB,SAAsB,CAAE,MAGxB,eAAsB,CAAE,MAGxB,eAAwB,CAAE,MAG1B,SAAsB,CAAE,MAExB,gBAAiB,eACW,CAAE,MAG9B,eAAwB,CAAE,MAE1B,UAAW,eACiB,CAAE,OAG9B,eAAwB,CAAE,OAE1B,gBAAiB,eACW,CAAE,OAG9B,UAAsB,CAAE,CAAE,mCAE5B,KAEE,cAAuB,CAAE,KAGzB,eAAsB,CAAE,KAGxB,SAAsB,CAAE,KAGxB,eAAsB,CAAE,KAGxB,eAAwB,CAAE,KAG1B,SAAsB,CAAE,KAExB,gBAAiB,eACW,CAAE,KAG9B,eAAwB,CAAE,KAE1B,UAAW,eACiB,CAAE,MAG9B,eAAwB,CAAE,MAE1B,gBAAiB,eACW,CAAE,MAG9B,UAAsB,CAAE,CAAE,mCAE5B,KAEE,cAAuB,CAAE,KAGzB,eAAsB,CAAE,KAGxB,SAAsB,CAAE,KAGxB,eAAsB,CAAE,KAGxB,eAAwB,CAAE,KAG1B,SAAsB,CAAE,KAExB,gBAAiB,eACW,CAAE,KAG9B,eAAwB,CAAE,KAE1B,UAAW,eACiB,CAAE,MAG9B,eAAwB,CAAE,MAE1B,gBAAiB,eACW,CAAE,MAG9B,UAAsB,CAAE,CAAE,mCAE5B,KAEE,cAAuB,CAAE,KAGzB,eAAsB,CAAE,KAGxB,SAAsB,CAAE,KAGxB,eAAsB,CAAE,KAGxB,eAAwB,CAAE,KAG1B,SAAsB,CAAE,KAExB,gBAAiB,eACW,CAAE,KAG9B,eAAwB,CAAE,KAE1B,UAAW,eACiB,CAAE,MAG9B,eAAwB,CAAE,MAE1B,gBAAiB,eACW,CAAE,MAG9B,UAAsB,CAAE,CAAE,mCAE5B,MAEE,cAAuB,CAAE,MAGzB,eAAsB,CAAE,MAGxB,SAAsB,CAAE,MAGxB,eAAsB,CAAE,MAGxB,eAAwB,CAAE,MAG1B,SAAsB,CAAE,MAExB,gBAAiB,eACW,CAAE,MAG9B,eAAwB,CAAE,MAE1B,UAAW,eACiB,CAAE,OAG9B,eAAwB,CAAE,OAE1B,gBAAiB,eACW,CAAE,OAG9B,UAAsB,CAAE,CAAE,iCAE5B,OAEE,cAAuB,CAAE,OAGzB,eAAsB,CAAE,OAGxB,SAAsB,CAAE,OAGxB,eAAsB,CAAE,OAGxB,eAAwB,CAAE,OAG1B,SAAsB,CAAE,OAExB,gBAAiB,eACW,CAAE,OAG9B,eAAwB,CAAE,OAE1B,UAAW,eACiB,CAAE,QAG9B,eAAwB,CAAE,QAE1B,gBAAiB,eACW,CAAE,QAG9B,UAAsB,CAAE,CAAE,SAE5B,iBAAkB,aACH,CAAE,MAEjB,WAAY,YACE,CAAE,cAEhB,YAAa,gBACI,uCAC2B,kBACzB,YACN,kBACM,iBACA,CAAE,YAErB,mBAAoB,0BACO,yBACD,YACZ,CAAE,eAEhB,mBAAoB,WACR,YACC,0BACc,eACX,SACN,QACD,YACK,CAAE","file":"core.scss","sourcesContent":[":global {\n  /*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n  /**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n  /**\n * Remove default margin.\n */\n  /* HTML5 display definitions\n   ========================================================================== */\n  /**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n  /**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n  /**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n  /**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n  /* Links\n   ========================================================================== */\n  /**\n * Remove the gray background color from active links in IE 10.\n */\n  /**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n  /* Text-level semantics\n   ========================================================================== */\n  /**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n  /**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n  /**\n * Address styling not present in Safari and Chrome.\n */\n  /**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n  /**\n * Address styling not present in IE 8/9.\n */\n  /**\n * Address inconsistent and variable font size in all browsers.\n */\n  /**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n  /* Embedded content\n   ========================================================================== */\n  /**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n  /**\n * Correct overflow not hidden in IE 9/10/11.\n */\n  /* Grouping content\n   ========================================================================== */\n  /**\n * Address margin not present in IE 8/9 and Safari.\n */\n  /**\n * Address differences between Firefox and other browsers.\n */\n  /**\n * Contain overflow in all browsers.\n */\n  /**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n  /* Forms\n   ========================================================================== */\n  /**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n  /**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n  /**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n  /**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n  /**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n  /**\n * Re-set default cursor for disabled elements.\n */\n  /**\n * Remove inner padding and border in Firefox 4+.\n */\n  /**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n  /**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n  /**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n  /**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n  /**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n  /**\n * Define consistent border, margin, and padding.\n */\n  /**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n  /**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n  /**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n  /* Tables\n   ========================================================================== */\n  /**\n * Remove most spacing between table cells.\n */ }\n  :global html {\n    font-family: sans-serif;\n    /* 1 */\n    -ms-text-size-adjust: 100%;\n    /* 2 */\n    -webkit-text-size-adjust: 100%;\n    /* 2 */ }\n  :global body {\n    margin: 0; }\n  :global article,\n  :global aside,\n  :global details,\n  :global figcaption,\n  :global figure,\n  :global footer,\n  :global header,\n  :global hgroup,\n  :global main,\n  :global menu,\n  :global nav,\n  :global section,\n  :global summary {\n    display: block; }\n  :global audio,\n  :global canvas,\n  :global progress,\n  :global video {\n    display: inline-block;\n    /* 1 */\n    vertical-align: baseline;\n    /* 2 */ }\n  :global audio:not([controls]) {\n    display: none;\n    height: 0; }\n  :global [hidden],\n  :global template {\n    display: none; }\n  :global a {\n    background-color: transparent; }\n  :global a:active,\n  :global a:hover {\n    outline: 0; }\n  :global abbr[title] {\n    border-bottom: 1px dotted; }\n  :global b,\n  :global strong {\n    font-weight: bold; }\n  :global dfn {\n    font-style: italic; }\n  :global h1 {\n    font-size: 2em;\n    margin: 0.67em 0; }\n  :global mark {\n    background: #ff0;\n    color: #000; }\n  :global small {\n    font-size: 80%; }\n  :global sub,\n  :global sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline; }\n  :global sup {\n    top: -0.5em; }\n  :global sub {\n    bottom: -0.25em; }\n  :global img {\n    border: 0; }\n  :global svg:not(:root) {\n    overflow: hidden; }\n  :global figure {\n    margin: 1em 40px; }\n  :global hr {\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n    height: 0; }\n  :global pre {\n    overflow: auto; }\n  :global code,\n  :global kbd,\n  :global pre,\n  :global samp {\n    font-family: monospace, monospace;\n    font-size: 1em; }\n  :global button,\n  :global input,\n  :global optgroup,\n  :global select,\n  :global textarea {\n    color: inherit;\n    /* 1 */\n    font: inherit;\n    /* 2 */\n    margin: 0;\n    /* 3 */ }\n  :global button {\n    overflow: visible; }\n  :global button,\n  :global select {\n    text-transform: none; }\n  :global button,\n  :global html input[type=\"button\"],\n  :global input[type=\"reset\"],\n  :global input[type=\"submit\"] {\n    -webkit-appearance: button;\n    /* 2 */\n    cursor: pointer;\n    /* 3 */ }\n  :global button[disabled],\n  :global html input[disabled] {\n    cursor: default; }\n  :global button::-moz-focus-inner,\n  :global input::-moz-focus-inner {\n    border: 0;\n    padding: 0; }\n  :global input {\n    line-height: normal; }\n  :global input[type=\"checkbox\"],\n  :global input[type=\"radio\"] {\n    box-sizing: border-box;\n    /* 1 */\n    padding: 0;\n    /* 2 */ }\n  :global input[type=\"number\"]::-webkit-inner-spin-button,\n  :global input[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto; }\n  :global input[type=\"search\"] {\n    -webkit-appearance: textfield;\n    /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box;\n    /* 2 */\n    box-sizing: content-box; }\n  :global input[type=\"search\"]::-webkit-search-cancel-button,\n  :global input[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none; }\n  :global fieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em; }\n  :global legend {\n    border: 0;\n    /* 1 */\n    padding: 0;\n    /* 2 */ }\n  :global textarea {\n    overflow: auto; }\n  :global optgroup {\n    font-weight: bold; }\n  :global table {\n    border-collapse: collapse;\n    border-spacing: 0; }\n  :global td,\n  :global th {\n    padding: 0; }\n\n@font-face {\n  :global {\n    font-family: \"Frutiger Neue\";\n    font-style: normal;\n    font-weight: 500;\n    src: url(\"/fonts/04e8f83f-ff22-47f9-b6de-f1a16df7feff.eot?#iefix\");\n    src: url(\"/fonts/04e8f83f-ff22-47f9-b6de-f1a16df7feff.eot?#iefix\") format(\"eot\"), url(\"/fonts/539f6f1a-0c4b-4f30-9f94-93d8fecc17e9.woff2\") format(\"woff2\"), url(\"/fonts/2c4bc2a0-6c0c-4a07-964d-ca4b46d894ea.woff\") format(\"woff\"), url(\"/fonts/b793bcb8-7a6f-43fd-ae6b-d60e13ba6f4d.ttf\") format(\"truetype\"), url(\"/fonts/bedd7bf6-49ac-4496-a7eb-3e3c6ed92f16.svg#bedd7bf6-49ac-4496-a7eb-3e3c6ed92f16\") format(\"svg\"); } }\n\n@font-face {\n  :global {\n    font-family: \"Frutiger Neue\";\n    font-style: italic;\n    font-weight: 500;\n    src: url(\"/fonts/e2e74e1c-9e18-4127-adfd-feb8f6a9ceaf.eot?#iefix\");\n    src: url(\"/fonts/e2e74e1c-9e18-4127-adfd-feb8f6a9ceaf.eot?#iefix\") format(\"eot\"), url(\"/fonts/9edf3443-80c6-4de6-b582-122401f63ad4.woff2\") format(\"woff2\"), url(\"/fonts/aa94077e-cdcd-4e33-abe0-ddcfe27e3485.woff\") format(\"woff\"), url(\"/fonts/22dfb43f-26df-46f9-aa0f-30038f8da834.ttf\") format(\"truetype\"), url(\"/fonts/36ad2de1-95ea-4eb3-a836-29c86179a248.svg#36ad2de1-95ea-4eb3-a836-29c86179a248\") format(\"svg\"); } }\n\n@font-face {\n  :global {\n    font-family: \"Frutiger Neue\";\n    font-style: normal;\n    font-weight: 700;\n    src: url(\"/fonts/62057895-1f9e-4d70-bd1a-65751a20a878.eot?#iefix\");\n    src: url(\"/fonts/62057895-1f9e-4d70-bd1a-65751a20a878.eot?#iefix\") format(\"eot\"), url(\"/fonts/26f1236c-a914-477f-9d0f-10d758702626.woff2\") format(\"woff2\"), url(\"/fonts/7875f3d5-b62b-445c-8c9e-d65da1514e9d.woff\") format(\"woff\"), url(\"/fonts/1c242f4e-0c64-47cc-8cbc-e53d949280ba.ttf\") format(\"truetype\"), url(\"/fonts/ec132df9-012a-4594-bbd9-c86574bee7b0.svg#ec132df9-012a-4594-bbd9-c86574bee7b0\") format(\"svg\"); } }\n\n@font-face {\n  :global {\n    font-family: \"Frutiger Neue\";\n    font-style: italic;\n    font-weight: 700;\n    src: url(\"/fonts/45f1e5f6-f69d-4e88-bf17-183db0f9c6b6.eot?#iefix\");\n    src: url(\"/fonts/45f1e5f6-f69d-4e88-bf17-183db0f9c6b6.eot?#iefix\") format(\"eot\"), url(\"/fonts/2c94541b-311c-4a3b-8fa1-991a75cd925d.woff2\") format(\"woff2\"), url(\"/fonts/98a7ec92-51b0-444c-91ac-8702b3d7a29b.woff\") format(\"woff\"), url(\"/fonts/7c492427-6dd9-4cc0-ae4b-8e26ba4b9e16.ttf\") format(\"truetype\"), url(\"/fonts/303a2020-b96a-4c08-840d-448fd2b241d1.svg#303a2020-b96a-4c08-840d-448fd2b241d1\") format(\"svg\"); } }\n  :global h1, :global .h1 {\n    font-size: 26px;\n    margin: 0; }\n  :global html,\n  :global body {\n    margin: 0;\n    padding: 0;\n    height: 100%; }\n  :global html {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -moz-font-feature-settings: \"smcp\";\n    -webkit-font-feature-settings: \"smcp\";\n    font-feature-settings: \"smcp\";\n    box-sizing: border-box; }\n  :global body {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    font-size: 16px;\n    font-family: \"Frutiger Neue\", \"Helvetica Neue\", Helvetica, sans-serif;\n    line-height: 1.4;\n    color: #333;\n    -webkit-font-smoothing: antialiased; }\n  :global p {\n    margin: 0 0 1em 0; }\n  :global a {\n    color: blue; }\n  :global *,\n  :global *:before,\n  :global *:after {\n    box-sizing: inherit; }\n  :global .root {\n    height: 100%; }\n  :global body:before {\n    background-color: #FCF8E3;\n    border-bottom: 1px solid #FBEED5;\n    border-left: 1px solid #FBEED5;\n    color: #C09853;\n    font: small-caption;\n    padding: 3px 6px;\n    position: absolute;\n    right: 0;\n    top: 0;\n    z-index: 100; }\n  :global .grid {\n    letter-spacing: -0.32em;\n    /*word-spacing: -.43em;*/\n    margin-left: -2rem; }\n  :global .grid--center {\n    text-align: center; }\n    :global .grid--center .grid__col {\n      text-align: left; }\n  :global .grid--center-all {\n    text-align: center; }\n  :global .grid--reverse {\n    direction: rtl; }\n    :global .grid--reverse .grid__col {\n      direction: ltr; }\n  :global .grid--spaced .grid__col {\n    margin-bottom: 2rem; }\n  :global .grid--spaced.grid--tight .grid__col {\n    margin-bottom: 1rem; }\n  :global .grid--align-mid .grid__col {\n    vertical-align: middle; }\n  :global .grid--stagger-align .grid__col:nth-of-type(1n) {\n    text-align: right; }\n  :global .grid--stagger-align .grid__col:nth-of-type(2n) {\n    text-align: left; }\n  :global .grid--tight {\n    margin-left: -1em; }\n    :global .grid--tight .grid__col {\n      padding-left: 1em; }\n  :global .grid--gutterless {\n    margin-left: 0; }\n    :global .grid--gutterless .grid__col {\n      padding-left: 0; }\n  :global .grid--pixelgutter {\n    margin-left: 1px; }\n    :global .grid--pixelgutter .grid__col {\n      padding-left: 1px;\n      margin-bottom: 1px; }\n  :global .grid--flex {\n    flex-wrap: wrap;\n    display: flex; }\n    :global .grid--flex.grid--center {\n      justify-content: center; }\n  :global .grid__col {\n    display: inline-block;\n    width: 100%;\n    vertical-align: top;\n    letter-spacing: normal;\n    word-spacing: normal;\n    padding-left: 2rem; }\n    .grid--float :global .grid__col {\n      float: left;\n      display: block; }\n  :global .grid__col--flex {\n    display: flex; }\n  @media all and (min-width: 18.75em) {\n    :global .xs-1 {\n      width: 8.33333%;\n      width: calc(100% / 12); }\n    :global .xs-2 {\n      width: 16.66667%;\n      width: calc(100% / 6); }\n    :global .xs-3 {\n      width: 25%;\n      width: calc(100% / 4); }\n    :global .xs-4 {\n      width: 33.33333%;\n      width: calc(100% / 3); }\n    :global .xs-5 {\n      width: 41.66667%;\n      width: calc(100% / 2.4); }\n    :global .xs-6 {\n      width: 50%;\n      width: calc(100% / 2); }\n    :global .xs-7 {\n      width: 58.33333%;\n      width: calc(100% / 1.71429); }\n    :global .xs-8 {\n      width: 66.66667%;\n      width: calc(100% / 1.5); }\n    :global .xs-9 {\n      width: 75%;\n      width: calc(100% / 1.33333); }\n    :global .xs-10 {\n      width: 83.33333%;\n      width: calc(100% / 1.2); }\n    :global .xs-11 {\n      width: 91.66667%;\n      width: calc(100% / 1.09091); }\n    :global .xs-12 {\n      width: 100%;\n      width: calc(100% / 1); } }\n  @media all and (min-width: 31.25em) {\n    :global .s-1 {\n      width: 8.33333%;\n      width: calc(100% / 12); }\n    :global .s-2 {\n      width: 16.66667%;\n      width: calc(100% / 6); }\n    :global .s-3 {\n      width: 25%;\n      width: calc(100% / 4); }\n    :global .s-4 {\n      width: 33.33333%;\n      width: calc(100% / 3); }\n    :global .s-5 {\n      width: 41.66667%;\n      width: calc(100% / 2.4); }\n    :global .s-6 {\n      width: 50%;\n      width: calc(100% / 2); }\n    :global .s-7 {\n      width: 58.33333%;\n      width: calc(100% / 1.71429); }\n    :global .s-8 {\n      width: 66.66667%;\n      width: calc(100% / 1.5); }\n    :global .s-9 {\n      width: 75%;\n      width: calc(100% / 1.33333); }\n    :global .s-10 {\n      width: 83.33333%;\n      width: calc(100% / 1.2); }\n    :global .s-11 {\n      width: 91.66667%;\n      width: calc(100% / 1.09091); }\n    :global .s-12 {\n      width: 100%;\n      width: calc(100% / 1); } }\n  @media all and (min-width: 46.25em) {\n    :global .m-1 {\n      width: 8.33333%;\n      width: calc(100% / 12); }\n    :global .m-2 {\n      width: 16.66667%;\n      width: calc(100% / 6); }\n    :global .m-3 {\n      width: 25%;\n      width: calc(100% / 4); }\n    :global .m-4 {\n      width: 33.33333%;\n      width: calc(100% / 3); }\n    :global .m-5 {\n      width: 41.66667%;\n      width: calc(100% / 2.4); }\n    :global .m-6 {\n      width: 50%;\n      width: calc(100% / 2); }\n    :global .m-7 {\n      width: 58.33333%;\n      width: calc(100% / 1.71429); }\n    :global .m-8 {\n      width: 66.66667%;\n      width: calc(100% / 1.5); }\n    :global .m-9 {\n      width: 75%;\n      width: calc(100% / 1.33333); }\n    :global .m-10 {\n      width: 83.33333%;\n      width: calc(100% / 1.2); }\n    :global .m-11 {\n      width: 91.66667%;\n      width: calc(100% / 1.09091); }\n    :global .m-12 {\n      width: 100%;\n      width: calc(100% / 1); } }\n  @media all and (min-width: 61.25em) {\n    :global .l-1 {\n      width: 8.33333%;\n      width: calc(100% / 12); }\n    :global .l-2 {\n      width: 16.66667%;\n      width: calc(100% / 6); }\n    :global .l-3 {\n      width: 25%;\n      width: calc(100% / 4); }\n    :global .l-4 {\n      width: 33.33333%;\n      width: calc(100% / 3); }\n    :global .l-5 {\n      width: 41.66667%;\n      width: calc(100% / 2.4); }\n    :global .l-6 {\n      width: 50%;\n      width: calc(100% / 2); }\n    :global .l-7 {\n      width: 58.33333%;\n      width: calc(100% / 1.71429); }\n    :global .l-8 {\n      width: 66.66667%;\n      width: calc(100% / 1.5); }\n    :global .l-9 {\n      width: 75%;\n      width: calc(100% / 1.33333); }\n    :global .l-10 {\n      width: 83.33333%;\n      width: calc(100% / 1.2); }\n    :global .l-11 {\n      width: 91.66667%;\n      width: calc(100% / 1.09091); }\n    :global .l-12 {\n      width: 100%;\n      width: calc(100% / 1); } }\n  @media all and (min-width: 81.25em) {\n    :global .xl-1 {\n      width: 8.33333%;\n      width: calc(100% / 12); }\n    :global .xl-2 {\n      width: 16.66667%;\n      width: calc(100% / 6); }\n    :global .xl-3 {\n      width: 25%;\n      width: calc(100% / 4); }\n    :global .xl-4 {\n      width: 33.33333%;\n      width: calc(100% / 3); }\n    :global .xl-5 {\n      width: 41.66667%;\n      width: calc(100% / 2.4); }\n    :global .xl-6 {\n      width: 50%;\n      width: calc(100% / 2); }\n    :global .xl-7 {\n      width: 58.33333%;\n      width: calc(100% / 1.71429); }\n    :global .xl-8 {\n      width: 66.66667%;\n      width: calc(100% / 1.5); }\n    :global .xl-9 {\n      width: 75%;\n      width: calc(100% / 1.33333); }\n    :global .xl-10 {\n      width: 83.33333%;\n      width: calc(100% / 1.2); }\n    :global .xl-11 {\n      width: 91.66667%;\n      width: calc(100% / 1.09091); }\n    :global .xl-12 {\n      width: 100%;\n      width: calc(100% / 1); } }\n  @media all and (min-width: 100em) {\n    :global .xxl-1 {\n      width: 8.33333%;\n      width: calc(100% / 12); }\n    :global .xxl-2 {\n      width: 16.66667%;\n      width: calc(100% / 6); }\n    :global .xxl-3 {\n      width: 25%;\n      width: calc(100% / 4); }\n    :global .xxl-4 {\n      width: 33.33333%;\n      width: calc(100% / 3); }\n    :global .xxl-5 {\n      width: 41.66667%;\n      width: calc(100% / 2.4); }\n    :global .xxl-6 {\n      width: 50%;\n      width: calc(100% / 2); }\n    :global .xxl-7 {\n      width: 58.33333%;\n      width: calc(100% / 1.71429); }\n    :global .xxl-8 {\n      width: 66.66667%;\n      width: calc(100% / 1.5); }\n    :global .xxl-9 {\n      width: 75%;\n      width: calc(100% / 1.33333); }\n    :global .xxl-10 {\n      width: 83.33333%;\n      width: calc(100% / 1.2); }\n    :global .xxl-11 {\n      width: 91.66667%;\n      width: calc(100% / 1.09091); }\n    :global .xxl-12 {\n      width: 100%;\n      width: calc(100% / 1); } }\n  :global .wrapper {\n    max-width: 1200px;\n    margin: 0 auto; }\n  :global .view {\n    width: 100%;\n    height: 100vh; }\n  :global .view__header {\n    height: 72px;\n    background: #fff;\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n    position: relative;\n    z-index: 100;\n    padding: 15px 20px;\n    text-align: center; }\n  :global .view__main {\n    background: #fbfafa;\n    height: calc(100vh - 72px);\n    width: calc(100% - 250px);\n    padding: 20px; }\n  :global .view__sidebar {\n    background: #4d4d4d;\n    color: #fff;\n    width: 250px;\n    height: calc(100vh - 72px);\n    position: fixed;\n    top: 72px;\n    right: 0;\n    padding: 20px; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	exports.__esModule = true;
	
	var _isDisposable2 = __webpack_require__(98);
	
	var _isDisposable3 = _interopRequireWildcard(_isDisposable2);
	
	exports.isDisposable = _isDisposable3['default'];
	
	var _Disposable2 = __webpack_require__(278);
	
	var _Disposable3 = _interopRequireWildcard(_Disposable2);
	
	exports.Disposable = _Disposable3['default'];
	
	var _CompositeDisposable2 = __webpack_require__(277);
	
	var _CompositeDisposable3 = _interopRequireWildcard(_CompositeDisposable2);
	
	exports.CompositeDisposable = _CompositeDisposable3['default'];
	
	var _SerialDisposable2 = __webpack_require__(279);
	
	var _SerialDisposable3 = _interopRequireWildcard(_SerialDisposable2);
	
	exports.SerialDisposable = _SerialDisposable3['default'];

/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = isDisposable;
	
	function isDisposable(obj) {
	  return Boolean(obj && typeof obj.dispose === 'function');
	}
	
	module.exports = exports['default'];

/***/ },
/* 99 */,
/* 100 */,
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(102),
	    cacheIndexOf = __webpack_require__(103),
	    createCache = __webpack_require__(104);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * The base implementation of `_.difference` which accepts a single array
	 * of values to exclude.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values) {
	  var length = array ? array.length : 0,
	      result = [];
	
	  if (!length) {
	    return result;
	  }
	  var index = -1,
	      indexOf = baseIndexOf,
	      isCommon = true,
	      cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	      valuesLength = values.length;
	
	  if (cache) {
	    indexOf = cacheIndexOf;
	    isCommon = false;
	    values = cache;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index];
	
	    if (isCommon && value === value) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === value) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (indexOf(values, value, 0) < 0) {
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseDifference;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(335);
	
	/**
	 * The base implementation of `_.indexOf` without support for binary searches.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseIndexOf;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(31);
	
	/**
	 * Checks if `value` is in `cache` mimicking the return signature of
	 * `_.indexOf` by returning `0` if the value is found, else `-1`.
	 *
	 * @private
	 * @param {Object} cache The cache to search.
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `0` if `value` is found, else `-1`.
	 */
	function cacheIndexOf(cache, value) {
	  var data = cache.data,
	      result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];
	
	  return result ? 0 : -1;
	}
	
	module.exports = cacheIndexOf;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var SetCache = __webpack_require__(321),
	    getNative = __webpack_require__(66);
	
	/** Native method references. */
	var Set = getNative(global, 'Set');
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');
	
	/**
	 * Creates a `Set` cache object to optimize linear searches of large arrays.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	 */
	function createCache(values) {
	  return (nativeCreate && Set) ? new SetCache(values) : null;
	}
	
	module.exports = createCache;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 105 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 106 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var FILE = '__NATIVE_FILE__';
	exports.FILE = FILE;
	var URL = '__NATIVE_URL__';
	exports.URL = URL;
	var TEXT = '__NATIVE_TEXT__';
	exports.TEXT = TEXT;

/***/ },
/* 107 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = shallowEqual;
	
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	
	    var valA = objA[keysA[i]];
	    var valB = objB[keysA[i]];
	
	    if (valA !== valB) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports["default"];

/***/ },
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomFromSeed = __webpack_require__(482);
	
	var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
	var alphabet;
	var previousSeed;
	
	var shuffled;
	
	function reset() {
	    shuffled = false;
	}
	
	function setCharacters(_alphabet_) {
	    if (!_alphabet_) {
	        if (alphabet !== ORIGINAL) {
	            alphabet = ORIGINAL;
	            reset();
	        }
	        return;
	    }
	
	    if (_alphabet_ === alphabet) {
	        return;
	    }
	
	    if (_alphabet_.length !== ORIGINAL.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
	    }
	
	    var unique = _alphabet_.split('').filter(function(item, ind, arr){
	       return ind !== arr.lastIndexOf(item);
	    });
	
	    if (unique.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
	    }
	
	    alphabet = _alphabet_;
	    reset();
	}
	
	function characters(_alphabet_) {
	    setCharacters(_alphabet_);
	    return alphabet;
	}
	
	function setSeed(seed) {
	    randomFromSeed.seed(seed);
	    if (previousSeed !== seed) {
	        reset();
	        previousSeed = seed;
	    }
	}
	
	function shuffle() {
	    if (!alphabet) {
	        setCharacters(ORIGINAL);
	    }
	
	    var sourceArray = alphabet.split('');
	    var targetArray = [];
	    var r = randomFromSeed.nextValue();
	    var characterIndex;
	
	    while (sourceArray.length > 0) {
	        r = randomFromSeed.nextValue();
	        characterIndex = Math.floor(r * sourceArray.length);
	        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
	    }
	    return targetArray.join('');
	}
	
	function getShuffled() {
	    if (shuffled) {
	        return shuffled;
	    }
	    shuffled = shuffle();
	    return shuffled;
	}
	
	/**
	 * lookup shuffled letter
	 * @param index
	 * @returns {string}
	 */
	function lookup(index) {
	    var alphabetShuffled = getShuffled();
	    return alphabetShuffled[index];
	}
	
	module.exports = {
	    characters: characters,
	    seed: setSeed,
	    lookup: lookup,
	    shuffled: getShuffled
	};


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _class, _temp;
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(10);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(11);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(12);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(14);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(13);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _index = __webpack_require__(18);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(15);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(16);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _Question = __webpack_require__(488);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _components = {
	  Question: {
	    displayName: 'Question'
	  }
	};
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/components/Question.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/components/Question.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2(_UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var Question = _wrapComponent('Question')((_temp = _class = function (_Component) {
	  (0, _inherits3.default)(Question, _Component);
	
	  function Question() {
	    (0, _classCallCheck3.default)(this, Question);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Question).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Question, [{
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        'div',
	        { className: _Question.question, id: this.props.id, style: this.props.style },
	        this.props.title
	      );
	    }
	  }]);
	  return Question;
	}(_react2.Component), _class.propTypes = {
	  id: _react2.PropTypes.number.isRequired,
	  title: _react2.PropTypes.string.isRequired
	}, _temp));
	
	exports.default = Question;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(244), __esModule: true };

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _symbol = __webpack_require__(239);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _typeof(obj) { return obj && typeof _Symbol !== "undefined" && obj.constructor === _Symbol ? "symbol" : typeof obj; }
	
	exports.default = function (obj) {
	  return obj && typeof _symbol2.default !== "undefined" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(60)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(82);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 138 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(86);

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(61)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 142 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 143 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _typeof(obj) { return obj && obj.constructor === Symbol ? 'symbol' : typeof obj; }
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashLangIsArray = __webpack_require__(30);
	
	var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);
	
	var _utilsGetNextUniqueId = __webpack_require__(289);
	
	var _utilsGetNextUniqueId2 = _interopRequireDefault(_utilsGetNextUniqueId);
	
	var _actionsRegistry = __webpack_require__(63);
	
	var HandlerRoles = {
	  SOURCE: 'SOURCE',
	  TARGET: 'TARGET'
	};
	
	function validateSourceContract(source) {
	  _invariant2['default'](typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
	  _invariant2['default'](typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
	  _invariant2['default'](typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
	}
	
	function validateTargetContract(target) {
	  _invariant2['default'](typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
	  _invariant2['default'](typeof target.hover === 'function', 'Expected hover to be a function.');
	  _invariant2['default'](typeof target.drop === 'function', 'Expected beginDrag to be a function.');
	}
	
	function validateType(type, allowArray) {
	  if (allowArray && _lodashLangIsArray2['default'](type)) {
	    type.forEach(function (t) {
	      return validateType(t, false);
	    });
	    return;
	  }
	
	  _invariant2['default'](typeof type === 'string' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
	}
	
	function getNextHandlerId(role) {
	  var id = _utilsGetNextUniqueId2['default']().toString();
	  switch (role) {
	    case HandlerRoles.SOURCE:
	      return 'S' + id;
	    case HandlerRoles.TARGET:
	      return 'T' + id;
	    default:
	      _invariant2['default'](false, 'Unknown role: ' + role);
	  }
	}
	
	function parseRoleFromHandlerId(handlerId) {
	  switch (handlerId[0]) {
	    case 'S':
	      return HandlerRoles.SOURCE;
	    case 'T':
	      return HandlerRoles.TARGET;
	    default:
	      _invariant2['default'](false, 'Cannot parse handler ID: ' + handlerId);
	  }
	}
	
	var HandlerRegistry = (function () {
	  function HandlerRegistry(store) {
	    _classCallCheck(this, HandlerRegistry);
	
	    this.store = store;
	
	    this.types = {};
	    this.handlers = {};
	
	    this.pinnedSourceId = null;
	    this.pinnedSource = null;
	  }
	
	  HandlerRegistry.prototype.addSource = function addSource(type, source) {
	    validateType(type);
	    validateSourceContract(source);
	
	    var sourceId = this.addHandler(HandlerRoles.SOURCE, type, source);
	    this.store.dispatch(_actionsRegistry.addSource(sourceId));
	    return sourceId;
	  };
	
	  HandlerRegistry.prototype.addTarget = function addTarget(type, target) {
	    validateType(type, true);
	    validateTargetContract(target);
	
	    var targetId = this.addHandler(HandlerRoles.TARGET, type, target);
	    this.store.dispatch(_actionsRegistry.addTarget(targetId));
	    return targetId;
	  };
	
	  HandlerRegistry.prototype.addHandler = function addHandler(role, type, handler) {
	    var id = getNextHandlerId(role);
	    this.types[id] = type;
	    this.handlers[id] = handler;
	
	    return id;
	  };
	
	  HandlerRegistry.prototype.containsHandler = function containsHandler(handler) {
	    var _this = this;
	
	    return Object.keys(this.handlers).some(function (key) {
	      return _this.handlers[key] === handler;
	    });
	  };
	
	  HandlerRegistry.prototype.getSource = function getSource(sourceId, includePinned) {
	    _invariant2['default'](this.isSourceId(sourceId), 'Expected a valid source ID.');
	
	    var isPinned = includePinned && sourceId === this.pinnedSourceId;
	    var source = isPinned ? this.pinnedSource : this.handlers[sourceId];
	
	    return source;
	  };
	
	  HandlerRegistry.prototype.getTarget = function getTarget(targetId) {
	    _invariant2['default'](this.isTargetId(targetId), 'Expected a valid target ID.');
	    return this.handlers[targetId];
	  };
	
	  HandlerRegistry.prototype.getSourceType = function getSourceType(sourceId) {
	    _invariant2['default'](this.isSourceId(sourceId), 'Expected a valid source ID.');
	    return this.types[sourceId];
	  };
	
	  HandlerRegistry.prototype.getTargetType = function getTargetType(targetId) {
	    _invariant2['default'](this.isTargetId(targetId), 'Expected a valid target ID.');
	    return this.types[targetId];
	  };
	
	  HandlerRegistry.prototype.isSourceId = function isSourceId(handlerId) {
	    var role = parseRoleFromHandlerId(handlerId);
	    return role === HandlerRoles.SOURCE;
	  };
	
	  HandlerRegistry.prototype.isTargetId = function isTargetId(handlerId) {
	    var role = parseRoleFromHandlerId(handlerId);
	    return role === HandlerRoles.TARGET;
	  };
	
	  HandlerRegistry.prototype.removeSource = function removeSource(sourceId) {
	    _invariant2['default'](this.getSource(sourceId), 'Expected an existing source.');
	    this.store.dispatch(_actionsRegistry.removeSource(sourceId));
	    delete this.handlers[sourceId];
	    delete this.types[sourceId];
	  };
	
	  HandlerRegistry.prototype.removeTarget = function removeTarget(targetId) {
	    _invariant2['default'](this.getTarget(targetId), 'Expected an existing target.');
	    this.store.dispatch(_actionsRegistry.removeTarget(targetId));
	    delete this.handlers[targetId];
	    delete this.types[targetId];
	  };
	
	  HandlerRegistry.prototype.pinSource = function pinSource(sourceId) {
	    var source = this.getSource(sourceId);
	    _invariant2['default'](source, 'Expected an existing source.');
	
	    this.pinnedSourceId = sourceId;
	    this.pinnedSource = source;
	  };
	
	  HandlerRegistry.prototype.unpinSource = function unpinSource() {
	    _invariant2['default'](this.pinnedSource, 'No source is pinned at the time.');
	
	    this.pinnedSourceId = null;
	    this.pinnedSource = null;
	  };
	
	  return HandlerRegistry;
	})();
	
	exports['default'] = HandlerRegistry;
	module.exports = exports['default'];

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = dirtyHandlerIds;
	exports.areDirty = areDirty;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashArrayXor = __webpack_require__(318);
	
	var _lodashArrayXor2 = _interopRequireDefault(_lodashArrayXor);
	
	var _lodashArrayIntersection = __webpack_require__(316);
	
	var _lodashArrayIntersection2 = _interopRequireDefault(_lodashArrayIntersection);
	
	var _actionsDragDrop = __webpack_require__(62);
	
	var _actionsRegistry = __webpack_require__(63);
	
	var NONE = [];
	var ALL = [];
	
	function dirtyHandlerIds(state, action, dragOperation) {
	  if (state === undefined) state = NONE;
	
	  switch (action.type) {
	    case _actionsDragDrop.HOVER:
	      break;
	    case _actionsRegistry.ADD_SOURCE:
	    case _actionsRegistry.ADD_TARGET:
	    case _actionsRegistry.REMOVE_TARGET:
	    case _actionsRegistry.REMOVE_SOURCE:
	      return NONE;
	    case _actionsDragDrop.BEGIN_DRAG:
	    case _actionsDragDrop.PUBLISH_DRAG_SOURCE:
	    case _actionsDragDrop.END_DRAG:
	    case _actionsDragDrop.DROP:
	    default:
	      return ALL;
	  }
	
	  var targetIds = action.targetIds;
	  var prevTargetIds = dragOperation.targetIds;
	
	  var dirtyHandlerIds = _lodashArrayXor2['default'](targetIds, prevTargetIds);
	
	  var didChange = false;
	  if (dirtyHandlerIds.length === 0) {
	    for (var i = 0; i < targetIds.length; i++) {
	      if (targetIds[i] !== prevTargetIds[i]) {
	        didChange = true;
	        break;
	      }
	    }
	  } else {
	    didChange = true;
	  }
	
	  if (!didChange) {
	    return NONE;
	  }
	
	  var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
	  var innermostTargetId = targetIds[targetIds.length - 1];
	
	  if (prevInnermostTargetId !== innermostTargetId) {
	    if (prevInnermostTargetId) {
	      dirtyHandlerIds.push(prevInnermostTargetId);
	    }
	    if (innermostTargetId) {
	      dirtyHandlerIds.push(innermostTargetId);
	    }
	  }
	
	  return dirtyHandlerIds;
	}
	
	function areDirty(state, handlerIds) {
	  if (state === NONE) {
	    return false;
	  }
	
	  if (state === ALL || typeof handlerIds === 'undefined') {
	    return true;
	  }
	
	  return _lodashArrayIntersection2['default'](handlerIds, state).length > 0;
	}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = dragOffset;
	exports.getSourceClientOffset = getSourceClientOffset;
	exports.getDifferenceFromInitialOffset = getDifferenceFromInitialOffset;
	
	var _actionsDragDrop = __webpack_require__(62);
	
	var initialState = {
	  initialSourceClientOffset: null,
	  initialClientOffset: null,
	  clientOffset: null
	};
	
	function areOffsetsEqual(offsetA, offsetB) {
	  if (offsetA === offsetB) {
	    return true;
	  }
	  return offsetA && offsetB && offsetA.x === offsetB.x && offsetA.y === offsetB.y;
	}
	
	function dragOffset(state, action) {
	  if (state === undefined) state = initialState;
	
	  switch (action.type) {
	    case _actionsDragDrop.BEGIN_DRAG:
	      return {
	        initialSourceClientOffset: action.sourceClientOffset,
	        initialClientOffset: action.clientOffset,
	        clientOffset: action.clientOffset
	      };
	    case _actionsDragDrop.HOVER:
	      if (areOffsetsEqual(state.clientOffset, action.clientOffset)) {
	        return state;
	      }
	      return _extends({}, state, {
	        clientOffset: action.clientOffset
	      });
	    case _actionsDragDrop.END_DRAG:
	    case _actionsDragDrop.DROP:
	      return initialState;
	    default:
	      return state;
	  }
	}
	
	function getSourceClientOffset(state) {
	  var clientOffset = state.clientOffset;
	  var initialClientOffset = state.initialClientOffset;
	  var initialSourceClientOffset = state.initialSourceClientOffset;
	
	  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
	    return null;
	  }
	  return {
	    x: clientOffset.x + initialSourceClientOffset.x - initialClientOffset.x,
	    y: clientOffset.y + initialSourceClientOffset.y - initialClientOffset.y
	  };
	}
	
	function getDifferenceFromInitialOffset(state) {
	  var clientOffset = state.clientOffset;
	  var initialClientOffset = state.initialClientOffset;
	
	  if (!clientOffset || !initialClientOffset) {
	    return null;
	  }
	  return {
	    x: clientOffset.x - initialClientOffset.x,
	    y: clientOffset.y - initialClientOffset.y
	  };
	}

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = matchesType;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashLangIsArray = __webpack_require__(30);
	
	var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);
	
	function matchesType(targetType, draggedItemType) {
	  if (_lodashLangIsArray2['default'](targetType)) {
	    return targetType.some(function (t) {
	      return t === draggedItemType;
	    });
	  } else {
	    return targetType === draggedItemType;
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(101),
	    isArrayLike = __webpack_require__(29),
	    restParam = __webpack_require__(44);
	
	/**
	 * Creates an array excluding all provided values using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to filter.
	 * @param {...*} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @example
	 *
	 * _.without([1, 2, 1, 3], 1, 2);
	 * // => [3]
	 */
	var without = restParam(function(array, values) {
	  return isArrayLike(array)
	    ? baseDifference(array, values)
	    : [];
	});
	
	module.exports = without;


/***/ },
/* 166 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(166),
	    isArguments = __webpack_require__(68),
	    isArray = __webpack_require__(30),
	    isArrayLike = __webpack_require__(29),
	    isObjectLike = __webpack_require__(45);
	
	/**
	 * The base implementation of `_.flatten` with added support for restricting
	 * flattening and specifying the start index.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {boolean} [isDeep] Specify a deep flatten.
	 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, isDeep, isStrict, result) {
	  result || (result = []);
	
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    var value = array[index];
	    if (isObjectLike(value) && isArrayLike(value) &&
	        (isStrict || isArray(value) || isArguments(value))) {
	      if (isDeep) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, isDeep, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = baseFlatten;


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(102),
	    cacheIndexOf = __webpack_require__(103),
	    createCache = __webpack_require__(104);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * The base implementation of `_.uniq` without support for callback shorthands
	 * and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The function invoked per iteration.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee) {
	  var index = -1,
	      indexOf = baseIndexOf,
	      length = array.length,
	      isCommon = true,
	      isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
	      seen = isLarge ? createCache() : null,
	      result = [];
	
	  if (seen) {
	    indexOf = cacheIndexOf;
	    isCommon = false;
	  } else {
	    isLarge = false;
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value, index, array) : value;
	
	    if (isCommon && value === value) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (indexOf(seen, computed, 0) < 0) {
	      if (iteratee || isLarge) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseUniq;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var assignWith = __webpack_require__(323),
	    baseAssign = __webpack_require__(324),
	    createAssigner = __webpack_require__(331);
	
	/**
	 * Assigns own enumerable properties of source object(s) to the destination
	 * object. Subsequent sources overwrite property assignments of previous sources.
	 * If `customizer` is provided it's invoked to produce the assigned values.
	 * The `customizer` is bound to `thisArg` and invoked with five arguments:
	 * (objectValue, sourceValue, key, object, source).
	 *
	 * **Note:** This method mutates `object` and is based on
	 * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
	 *
	 * @static
	 * @memberOf _
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	 * // => { 'user': 'fred', 'age': 40 }
	 *
	 * // using a customizer callback
	 * var defaults = _.partialRight(_.assign, function(value, other) {
	 *   return _.isUndefined(value) ? other : value;
	 * });
	 *
	 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	 * // => { 'user': 'barney', 'age': 36 }
	 */
	var assign = createAssigner(function(object, source, customizer) {
	  return customizer
	    ? assignWith(object, source, customizer)
	    : baseAssign(object, source);
	});
	
	module.exports = assign;


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(66),
	    isArrayLike = __webpack_require__(29),
	    isObject = __webpack_require__(31),
	    shimKeys = __webpack_require__(341);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	module.exports = keys;


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(68),
	    isArray = __webpack_require__(30),
	    isIndex = __webpack_require__(105),
	    isLength = __webpack_require__(67),
	    isObject = __webpack_require__(31);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashFunctionMemoize = __webpack_require__(319);
	
	var _lodashFunctionMemoize2 = _interopRequireDefault(_lodashFunctionMemoize);
	
	var isFirefox = _lodashFunctionMemoize2['default'](function () {
	  return (/firefox/i.test(navigator.userAgent)
	  );
	});
	
	exports.isFirefox = isFirefox;
	var isSafari = _lodashFunctionMemoize2['default'](function () {
	  return Boolean(window.safari);
	});
	exports.isSafari = isSafari;

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	exports['default'] = decorateHandler;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _disposables = __webpack_require__(97);
	
	var _utilsShallowEqual = __webpack_require__(107);
	
	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);
	
	var _utilsShallowEqualScalar = __webpack_require__(175);
	
	var _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar);
	
	var _lodashLangIsPlainObject = __webpack_require__(46);
	
	var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _bindConnector2 = __webpack_require__(366);
	
	var _bindConnector3 = _interopRequireDefault(_bindConnector2);
	
	function decorateHandler(_ref) {
	  var DecoratedComponent = _ref.DecoratedComponent;
	  var createHandler = _ref.createHandler;
	  var createMonitor = _ref.createMonitor;
	  var createConnector = _ref.createConnector;
	  var registerHandler = _ref.registerHandler;
	  var containerDisplayName = _ref.containerDisplayName;
	  var getType = _ref.getType;
	  var collect = _ref.collect;
	  var options = _ref.options;
	  var _options$arePropsEqual = options.arePropsEqual;
	  var arePropsEqual = _options$arePropsEqual === undefined ? _utilsShallowEqualScalar2['default'] : _options$arePropsEqual;
	
	  var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';
	
	  return (function (_Component) {
	    _inherits(DragDropContainer, _Component);
	
	    DragDropContainer.prototype.getHandlerId = function getHandlerId() {
	      return this.handlerId;
	    };
	
	    DragDropContainer.prototype.getDecoratedComponentInstance = function getDecoratedComponentInstance() {
	      return this.decoratedComponentInstance;
	    };
	
	    DragDropContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	      return !arePropsEqual(nextProps, this.props) || !_utilsShallowEqual2['default'](nextState, this.state);
	    };
	
	    _createClass(DragDropContainer, null, [{
	      key: 'DecoratedComponent',
	      value: DecoratedComponent,
	      enumerable: true
	    }, {
	      key: 'displayName',
	      value: containerDisplayName + '(' + displayName + ')',
	      enumerable: true
	    }, {
	      key: 'contextTypes',
	      value: {
	        dragDropManager: _react.PropTypes.object.isRequired
	      },
	      enumerable: true
	    }]);
	
	    function DragDropContainer(props, context) {
	      _classCallCheck(this, DragDropContainer);
	
	      _Component.call(this, props, context);
	      this.handleChange = this.handleChange.bind(this);
	      this.handleChildRef = this.handleChildRef.bind(this);
	
	      _invariant2['default'](typeof this.context.dragDropManager === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);
	
	      this.manager = this.context.dragDropManager;
	      this.handlerMonitor = createMonitor(this.manager);
	      this.handler = createHandler(this.handlerMonitor);
	      this.disposable = new _disposables.SerialDisposable();
	
	      this.receiveProps(props);
	      this.state = this.getCurrentState();
	    }
	
	    DragDropContainer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      if (!arePropsEqual(nextProps, this.props)) {
	        this.receiveProps(nextProps);
	        this.handleChange();
	      }
	    };
	
	    DragDropContainer.prototype.componentWillUnmount = function componentWillUnmount() {
	      this.disposable.dispose();
	    };
	
	    DragDropContainer.prototype.receiveProps = function receiveProps(props) {
	      this.handler.receiveProps(props);
	      this.receiveType(getType(props));
	    };
	
	    DragDropContainer.prototype.receiveType = function receiveType(type) {
	      if (type === this.currentType) {
	        return;
	      }
	
	      this.currentType = type;
	
	      var _registerHandler = registerHandler(type, this.handler, this.manager);
	
	      var handlerId = _registerHandler.handlerId;
	      var unregister = _registerHandler.unregister;
	
	      var connector = createConnector(this.manager.getBackend());
	
	      var _bindConnector = _bindConnector3['default'](connector, handlerId);
	
	      var handlerConnector = _bindConnector.handlerConnector;
	      var connectorDisposable = _bindConnector.disposable;
	
	      this.handlerId = handlerId;
	      this.handlerConnector = handlerConnector;
	      this.handlerMonitor.receiveHandlerId(handlerId);
	
	      var globalMonitor = this.manager.getMonitor();
	      var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, { handlerIds: [handlerId] });
	
	      this.disposable.setDisposable(new _disposables.CompositeDisposable(new _disposables.Disposable(unsubscribe), new _disposables.Disposable(unregister), connectorDisposable));
	    };
	
	    DragDropContainer.prototype.handleChange = function handleChange() {
	      var nextState = this.getCurrentState();
	      if (!_utilsShallowEqual2['default'](nextState, this.state)) {
	        this.setState(nextState);
	      }
	    };
	
	    DragDropContainer.prototype.handleChildRef = function handleChildRef(component) {
	      this.decoratedComponentInstance = component;
	      this.handler.receiveComponent(component);
	    };
	
	    DragDropContainer.prototype.getCurrentState = function getCurrentState() {
	      var nextState = collect(this.handlerConnector, this.handlerMonitor);
	      if (true) {
	        _invariant2['default'](_lodashLangIsPlainObject2['default'](nextState), 'Expected `collect` specified as the second argument to ' + '%s for %s to return a plain object of props to inject. ' + 'Instead, received %s.', containerDisplayName, displayName, nextState);
	      }
	      return nextState;
	    };
	
	    DragDropContainer.prototype.render = function render() {
	      return _react2['default'].createElement(DecoratedComponent, _extends({}, this.props, this.state, {
	        ref: this.handleChildRef }));
	    };
	
	    return DragDropContainer;
	  })(_react.Component);
	}
	
	module.exports = exports['default'];

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = isValidType;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashLangIsArray = __webpack_require__(30);
	
	var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);
	
	function isValidType(type, allowArray) {
	       return typeof type === 'string' || typeof type === 'symbol' || allowArray && _lodashLangIsArray2['default'](type) && type.every(function (t) {
	              return isValidType(t, false);
	       });
	}
	
	module.exports = exports['default'];

/***/ },
/* 175 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = shallowEqualScalar;
	
	function shallowEqualScalar(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i])) {
	      return false;
	    }
	
	    var valA = objA[keysA[i]];
	    var valB = objB[keysA[i]];
	
	    if (valA !== valB || typeof valA === 'object' || typeof valB === 'object') {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports['default'];

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(192);


/***/ },
/* 177 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = supportsProtoAssignment;
	var x = {};
	var y = { supports: true };
	try {
	  x.__proto__ = y;
	} catch (err) {}
	
	function supportsProtoAssignment() {
	  return x.supports || false;
	};

/***/ },
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _class, _temp;
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(240);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(10);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(11);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(12);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(14);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(13);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _index = __webpack_require__(18);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(15);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(16);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _Block = __webpack_require__(486);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _components = {
	  Block: {
	    displayName: 'Block'
	  }
	};
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/components/Block.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/components/Block.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2(_UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var Block = _wrapComponent('Block')((_temp = _class = function (_React$Component) {
	  (0, _inherits3.default)(Block, _React$Component);
	
	  function Block() {
	    (0, _classCallCheck3.default)(this, Block);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Block).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Block, [{
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        'div',
	        (0, _extends3.default)({ className: _Block.block }, this.props),
	        this.props.title
	      );
	    }
	  }]);
	  return Block;
	}(_react3.default.Component), _class.propTypes = {
	  title: _react2.PropTypes.string.isRequired
	}, _temp));
	
	exports.default = Block;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _class, _temp;
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(10);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(11);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(12);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(14);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(13);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _index = __webpack_require__(18);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(15);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(16);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _Button = __webpack_require__(487);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _components = {
	  Button: {
	    displayName: 'Button'
	  }
	};
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/components/Button.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/components/Button.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2(_UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var Button = _wrapComponent('Button')((_temp = _class = function (_React$Component) {
	  (0, _inherits3.default)(Button, _React$Component);
	
	  function Button() {
	    (0, _classCallCheck3.default)(this, Button);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Button).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Button, [{
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        'button',
	        { className: _Button.button, onClick: this.props.onClick },
	        this.props.title
	      );
	    }
	  }]);
	  return Button;
	}(_react3.default.Component), _class.propTypes = {
	  title: _react2.PropTypes.string.isRequired
	}, _temp));
	
	exports.default = Button;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _class, _temp;
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(10);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(11);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(12);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(14);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(13);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _index = __webpack_require__(18);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(15);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(16);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _Section = __webpack_require__(489);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _components = {
	  Section: {
	    displayName: 'Section'
	  }
	};
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/components/Section.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/components/Section.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2(_UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var Section = _wrapComponent('Section')((_temp = _class = function (_React$Component) {
	  (0, _inherits3.default)(Section, _React$Component);
	
	  function Section() {
	    (0, _classCallCheck3.default)(this, Section);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Section).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Section, [{
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        'section',
	        { className: _Section.section + ' ' + (this.props.isActive ? _Section.isActive : '') },
	        _react3.default.createElement(
	          'div',
	          { className: _Section.sectionTitle },
	          this.props.isActive ? 'Release to drop' : 'Add questions here'
	        ),
	        this.props.children
	      );
	    }
	  }]);
	  return Section;
	}(_react3.default.Component), _class.propTypes = {
	  isActive: _react2.PropTypes.bool
	}, _temp));
	
	exports.default = Section;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _class, _temp;
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(10);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(11);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(12);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(14);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(13);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _index = __webpack_require__(18);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(15);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(16);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _redux = __webpack_require__(34);
	
	var _reactDnd = __webpack_require__(69);
	
	var _Block = __webpack_require__(218);
	
	var _Block2 = _interopRequireDefault(_Block);
	
	var _Question = __webpack_require__(133);
	
	var _Question2 = _interopRequireDefault(_Question);
	
	var _ItemTypes = __webpack_require__(79);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _components = {
	  DraggableBlock: {
	    displayName: 'DraggableBlock'
	  }
	};
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/containers/DraggableBlock.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/containers/DraggableBlock.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2(_UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var blockSource = {
	  beginDrag: function beginDrag(props) {
	    var title = props.title;
	    var type = props.type;
	
	    return { title: title, type: type };
	  },
	  endDrag: function endDrag(props, monitor, component) {
	    if (monitor.getDropResult()) {
	      // console.log(component);
	      // component.onDropped(monitor.getItem());
	    }
	  }
	};
	
	var DraggableBlock = _wrapComponent('DraggableBlock')((_temp = _class = function (_React$Component) {
	  (0, _inherits3.default)(DraggableBlock, _React$Component);
	
	  function DraggableBlock() {
	    (0, _classCallCheck3.default)(this, DraggableBlock);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DraggableBlock).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(DraggableBlock, [{
	    key: 'render',
	    value: function render() {
	      // <Question title={title} style={{ opacity: 1 }}/>
	      var _props = this.props;
	      var type = _props.type;
	      var title = _props.title;
	      var isDragging = _props.isDragging;
	      var connectDragSource = _props.connectDragSource;
	
	      var block = isDragging ? _react3.default.createElement(_Block2.default, { title: title, type: type, isDragging: isDragging }) : _react3.default.createElement(_Block2.default, { title: title, type: type, isDragging: isDragging });
	      return connectDragSource(_react3.default.createElement(
	        'div',
	        null,
	        block
	      ));
	    }
	  }]);
	  return DraggableBlock;
	}(_react3.default.Component), _class.propTypes = {
	  connectDragSource: _react2.PropTypes.func.isRequired,
	  isDragging: _react2.PropTypes.bool.isRequired,
	  title: _react2.PropTypes.string.isRequired,
	  type: _react2.PropTypes.string.isRequired
	}, _temp));
	
	exports.default = (0, _redux.compose)((0, _reactDnd.DragSource)(_ItemTypes.DRAGGABLE_BLOCK, blockSource, function (connect, monitor) {
	  return {
	    connectDragSource: connect.dragSource(),
	    isDragging: monitor.isDragging()
	  };
	}))(DraggableBlock);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _class, _temp;
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(10);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(11);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(12);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(14);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(13);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _index = __webpack_require__(18);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(15);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(16);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _reactDom = __webpack_require__(176);
	
	var _reactRedux = __webpack_require__(47);
	
	var _redux = __webpack_require__(34);
	
	var _reactDnd = __webpack_require__(69);
	
	var _blocks = __webpack_require__(59);
	
	var _Question = __webpack_require__(133);
	
	var _Question2 = _interopRequireDefault(_Question);
	
	var _ItemTypes = __webpack_require__(79);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _components = {
	  DraggableQuestion: {
	    displayName: 'DraggableQuestion'
	  }
	};
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/containers/DraggableQuestion.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/containers/DraggableQuestion.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2(_UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	console.log(_ItemTypes.DRAGGABLE_QUESTION);
	
	var style = {};
	
	var DraggableQuestion = _wrapComponent('DraggableQuestion')((_temp = _class = function (_React$Component) {
	  (0, _inherits3.default)(DraggableQuestion, _React$Component);
	
	  function DraggableQuestion() {
	    (0, _classCallCheck3.default)(this, DraggableQuestion);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DraggableQuestion).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(DraggableQuestion, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var title = _props.title;
	      var connectDropTarget = _props.connectDropTarget;
	      var connectDragSource = _props.connectDragSource;
	      var isDragging = _props.isDragging;
	
	      var opacity = isDragging ? 0 : 1;
	      return connectDragSource(connectDropTarget(_react3.default.createElement(
	        'div',
	        { className: 'draggableQuestion', style: style },
	        _react3.default.createElement(_Question2.default, { title: title, style: { opacity: opacity } })
	      )));
	    }
	  }]);
	  return DraggableQuestion;
	}(_react3.default.Component), _class.propTypes = {
	  connectDragSource: _react2.PropTypes.func.isRequired,
	  connectDropTarget: _react2.PropTypes.func.isRequired,
	  index: _react2.PropTypes.number.isRequired,
	  isDragging: _react2.PropTypes.bool.isRequired,
	  title: _react2.PropTypes.string.isRequired
	}, _temp));
	
	var dragSourceOpts = {
	  beginDrag: function beginDrag(props) {
	    var id = props.id;
	    var index = props.index;
	
	    return { id: id, index: index };
	  }
	};
	
	var dropTargetOpts = {
	  hover: function hover(props, monitor, component) {
	    var dispatch = props.dispatch;
	
	    var dragIndex = monitor.getItem().index;
	    var hoverIndex = props.index;
	    // Don't replace items with themselves
	    if (dragIndex === hoverIndex) {
	      return;
	    }
	    // Determine rectangle on screen
	    var hoverBoundingRect = (0, _reactDom.findDOMNode)(component).getBoundingClientRect();
	    // Get vertical middle
	    var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
	    // Determine mouse position
	    var clientOffset = monitor.getClientOffset();
	    // Get pixels to the top
	    var hoverClientY = clientOffset.y - hoverBoundingRect.top;
	    // Only perform the move when the mouse has crossed half of the items height
	    // When dragging downwards, only move when the cursor is below 50%
	    // When dragging upwards, only move when the cursor is above 50%
	    // Dragging downwards
	    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
	      return;
	    }
	    // Dragging upwards
	    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
	      return;
	    }
	    dispatch((0, _blocks.swapBlocks)(dragIndex, hoverIndex));
	    // Note: we're mutating the monitor item here!
	    // Generally it's better to avoid mutations,
	    // but it's good here for the sake of performance
	    // to avoid expensive index searches.
	    monitor.getItem().index = hoverIndex;
	  }
	};
	
	exports.default = (0, _redux.compose)((0, _reactRedux.connect)(function (state) {
	  return state;
	}), (0, _reactDnd.DropTarget)(_ItemTypes.DRAGGABLE_QUESTION, dropTargetOpts, function (connect) {
	  return {
	    connectDropTarget: connect.dropTarget()
	  };
	}), (0, _reactDnd.DragSource)(_ItemTypes.DRAGGABLE_QUESTION, dragSourceOpts, function (connect, monitor) {
	  return {
	    connectDragSource: connect.dragSource(),
	    isDragging: monitor.isDragging()
	  };
	}))(DraggableQuestion);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _class, _temp;
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(10);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(11);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(12);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(14);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(13);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _index = __webpack_require__(18);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(15);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(16);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _redux = __webpack_require__(34);
	
	var _reactRedux = __webpack_require__(47);
	
	var _reactDnd = __webpack_require__(69);
	
	var _blocks = __webpack_require__(59);
	
	var _Section = __webpack_require__(220);
	
	var _Section2 = _interopRequireDefault(_Section);
	
	var _DraggableQuestion = __webpack_require__(222);
	
	var _DraggableQuestion2 = _interopRequireDefault(_DraggableQuestion);
	
	var _ItemTypes = __webpack_require__(79);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _components = {
	  DropSection: {
	    displayName: 'DropSection'
	  }
	};
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/containers/DropSection.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/containers/DropSection.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2(_UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var sectionTarget = {
	  drop: function drop(props, monitor, component) {
	    component.onDropped(monitor.getItem());
	    return { name: _ItemTypes.DROP_SECTION };
	  }
	};
	
	var DropSection = _wrapComponent('DropSection')((_temp = _class = function (_React$Component) {
	  (0, _inherits3.default)(DropSection, _React$Component);
	
	  function DropSection() {
	    (0, _classCallCheck3.default)(this, DropSection);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DropSection).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(DropSection, [{
	    key: 'onDropped',
	    value: function onDropped(item) {
	      var dispatch = this.props.dispatch;
	
	      dispatch((0, _blocks.addBlock)(item));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var canDrop = _props.canDrop;
	      var isOver = _props.isOver;
	      var connectDropTarget = _props.connectDropTarget;
	      var blocks = _props.blocks;
	
	      console.log(blocks);
	      return connectDropTarget(_react3.default.createElement(
	        'div',
	        null,
	        _react3.default.createElement(
	          _Section2.default,
	          { isActive: canDrop && isOver },
	          blocks.map(function (block, index) {
	            return _react3.default.createElement(_DraggableQuestion2.default, { key: block.id, id: block.id, index: index, title: block.title });
	          })
	        )
	      ));
	    }
	  }]);
	  return DropSection;
	}(_react3.default.Component), _class.propTypes = {
	  blocks: _react2.PropTypes.array,
	  canDrop: _react2.PropTypes.bool.isRequired,
	  connectDropTarget: _react2.PropTypes.func.isRequired,
	  dispatch: _react2.PropTypes.func.isRequired,
	  isOver: _react2.PropTypes.bool.isRequired
	}, _temp));
	
	exports.default = (0, _redux.compose)((0, _reactRedux.connect)(function (state) {
	  return state;
	}), (0, _reactDnd.DropTarget)(_ItemTypes.DRAGGABLE_BLOCK, sectionTarget, function (connect, monitor) {
	  return {
	    connectDropTarget: connect.dropTarget(),
	    isOver: monitor.isOver(),
	    canDrop: monitor.canDrop()
	  };
	}))(DropSection);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(10);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(11);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(12);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(14);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(13);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _index = __webpack_require__(18);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(15);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(16);
	
	var _index6 = _interopRequireDefault(_index5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _components = {
	  Header: {
	    displayName: 'Header'
	  }
	};
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/containers/Header.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/containers/Header.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2(_UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var Header = _wrapComponent('Header')(function (_React$Component) {
	  (0, _inherits3.default)(Header, _React$Component);
	
	  function Header() {
	    (0, _classCallCheck3.default)(this, Header);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Header).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Header, [{
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        'header',
	        null,
	        _react3.default.createElement(
	          'h1',
	          null,
	          'Survey Builder'
	        )
	      );
	    }
	  }]);
	  return Header;
	}(_react3.default.Component));
	
	exports.default = Header;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _class, _temp;
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(10);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(11);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(12);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(14);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(13);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _index = __webpack_require__(18);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(15);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(16);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _reactRedux = __webpack_require__(47);
	
	var _DropSection = __webpack_require__(223);
	
	var _DropSection2 = _interopRequireDefault(_DropSection);
	
	var _Button = __webpack_require__(219);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _blocks = __webpack_require__(59);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _components = {
	  Main: {
	    displayName: 'Main'
	  }
	};
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/containers/Main.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/containers/Main.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2(_UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var Main = _wrapComponent('Main')((_temp = _class = function (_React$Component) {
	  (0, _inherits3.default)(Main, _React$Component);
	
	  function Main() {
	    (0, _classCallCheck3.default)(this, Main);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Main).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Main, [{
	    key: 'render',
	    value: function render() {
	      var dispatch = this.props.dispatch;
	
	      return _react3.default.createElement(
	        'div',
	        { className: 'main' },
	        _react3.default.createElement(
	          'h2',
	          null,
	          'Survey Name'
	        ),
	        _react3.default.createElement(_DropSection2.default, null),
	        _react3.default.createElement(_Button2.default, { title: 'Save', onClick: function onClick() {
	            return dispatch((0, _blocks.saveData)());
	          } }),
	        ' ',
	        _react3.default.createElement(_Button2.default, { title: 'Load', onClick: function onClick() {
	            return dispatch((0, _blocks.fetchData)());
	          } })
	      );
	    }
	  }]);
	  return Main;
	}(_react3.default.Component), _class.propTypes = {
	  dispatch: _react2.PropTypes.func.isRequired
	}, _temp));
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return state;
	})(Main);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _class, _temp;
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(10);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(11);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(12);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(14);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(13);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _index = __webpack_require__(18);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(15);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(16);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _reactRedux = __webpack_require__(47);
	
	var _reactRouter = __webpack_require__(53);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _components = {
	  Root: {
	    displayName: 'Root'
	  }
	};
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/containers/Root.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/containers/Root.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2(_UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var Root = _wrapComponent('Root')((_temp = _class = function (_React$Component) {
	  (0, _inherits3.default)(Root, _React$Component);
	
	  function Root() {
	    (0, _classCallCheck3.default)(this, Root);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Root).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Root, [{
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        _reactRedux.Provider,
	        { store: this.props.store },
	        _react3.default.createElement(
	          'div',
	          { style: { height: '100%' } },
	          this.content
	        )
	      );
	    }
	  }, {
	    key: 'content',
	    get: function get() {
	      return _react3.default.createElement(
	        _reactRouter.Router,
	        { history: this.props.history },
	        this.props.routes
	      );
	    }
	  }]);
	  return Root;
	}(_react3.default.Component), _class.propTypes = {
	  history: _react3.default.PropTypes.object.isRequired,
	  routes: _react3.default.PropTypes.element.isRequired,
	  store: _react3.default.PropTypes.object.isRequired
	}, _temp));
	
	exports.default = Root;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(10);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(11);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(12);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(14);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(13);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _index = __webpack_require__(18);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(15);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(16);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _DraggableBlock = __webpack_require__(221);
	
	var _DraggableBlock2 = _interopRequireDefault(_DraggableBlock);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _components = {
	  Sidebar: {
	    displayName: 'Sidebar'
	  }
	};
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/containers/Sidebar.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/containers/Sidebar.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2(_UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var blockTypes = ['Text Question', 'Numeric Question', 'Check Box Question', 'Multiple Choice Single Answer', 'Dropdown Question', 'Rich Text Field', 'Date Question'];
	
	var Sidebar = _wrapComponent('Sidebar')(function (_React$Component) {
	  (0, _inherits3.default)(Sidebar, _React$Component);
	
	  function Sidebar() {
	    (0, _classCallCheck3.default)(this, Sidebar);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Sidebar).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Sidebar, [{
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        'div',
	        { className: 'sidebar' },
	        blockTypes.map(function (type) {
	          var key = type.split(' ').join('-').toLowerCase();
	          return _react3.default.createElement(_DraggableBlock2.default, { title: type, key: key, type: key });
	        })
	      );
	    }
	  }]);
	  return Sidebar;
	}(_react3.default.Component));
	
	exports.default = Sidebar;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(490);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Note: Stateless/function components *will not* hot reload!
	// react-transform *only* works on component classes.
	//
	// Since layouts rarely change, they are a good place to
	// leverage React's new Statelesss Functions:
	// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
	//
	// CoreLayout is a pure function of it's props, so we can
	// define it with a plain javascript function...
	function CoreLayout(_ref) {
	  var children = _ref.children;
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'global-wrapper' },
	    children
	  );
	}
	
	CoreLayout.propTypes = {
	  children: _react2.default.PropTypes.element
	};
	
	exports.default = CoreLayout;

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(176);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(53);
	
	var _history = __webpack_require__(161);
	
	var _routes = __webpack_require__(231);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _Root = __webpack_require__(226);
	
	var _Root2 = _interopRequireDefault(_Root);
	
	var _configureStore = __webpack_require__(230);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var historyConfig = { basename: ("") };
	var history = (0, _reactRouter.useRouterHistory)(_history.createHistory)(historyConfig);
	
	var initialState = window.__INITIAL_STATE__;
	var store = (0, _configureStore2.default)({ initialState: initialState, history: history });
	
	// Render the React application to the DOM
	_reactDom2.default.render(_react2.default.createElement(_Root2.default, { history: history, routes: _routes2.default, store: store }), document.getElementById('root'));

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;
	
	var _redux = __webpack_require__(34);
	
	var _reduxSimpleRouter = __webpack_require__(130);
	
	var _reduxThunk = __webpack_require__(471);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _rootReducer = __webpack_require__(80);
	
	var _rootReducer2 = _interopRequireDefault(_rootReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function withDevTools(middleware) {
	  var devTools = window.devToolsExtension ? window.devToolsExtension() : false;
	  return (0, _redux.compose)(middleware, devTools);
	}
	
	function configureStore(_ref) {
	  var _ref$initialState = _ref.initialState;
	  var initialState = _ref$initialState === undefined ? {} : _ref$initialState;
	  var history = _ref.history;
	
	  // Sync with router via history instance (main.js)
	  var routerMiddleware = (0, _reduxSimpleRouter.syncHistory)(history);
	
	  // Compose final middleware and use devtools in debug environment
	  var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, routerMiddleware);
	  if (true) middleware = withDevTools(middleware);
	
	  // Create final store and subscribe router in debug env ie. for devtools
	  var store = middleware(_redux.createStore)(_rootReducer2.default, initialState);
	  if (true) routerMiddleware.listenForReplays(store, function (_ref2) {
	    var router = _ref2.router;
	    return router;
	  });
	
	  if (true) {
	    module.hot.accept(80, function () {
	      var nextRootReducer = __webpack_require__(80).default;
	
	      store.replaceReducer(nextRootReducer);
	    });
	  }
	  return store;
	}

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(53);
	
	var _CoreLayout = __webpack_require__(228);
	
	var _CoreLayout2 = _interopRequireDefault(_CoreLayout);
	
	var _HomeView = __webpack_require__(232);
	
	var _HomeView2 = _interopRequireDefault(_HomeView);
	
	var _NotFoundView = __webpack_require__(233);
	
	var _NotFoundView2 = _interopRequireDefault(_NotFoundView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _CoreLayout2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomeView2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/404', component: _NotFoundView2.default }),
	  _react2.default.createElement(_reactRouter.Redirect, { from: '*', to: '/404' })
	);

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HomeView = undefined;
	
	var _getPrototypeOf = __webpack_require__(10);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(11);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(12);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(14);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(13);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _index = __webpack_require__(18);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(15);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(16);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _reactRedux = __webpack_require__(47);
	
	var _redux = __webpack_require__(34);
	
	var _reactDnd = __webpack_require__(69);
	
	var _reactDndHtml5Backend = __webpack_require__(360);
	
	var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);
	
	var _Header = __webpack_require__(224);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Main = __webpack_require__(225);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	var _Sidebar = __webpack_require__(227);
	
	var _Sidebar2 = _interopRequireDefault(_Sidebar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _components = {
	  HomeView: {
	    displayName: 'HomeView'
	  }
	};
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/views/HomeView.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/views/HomeView.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2(_UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var HomeView = exports.HomeView = _wrapComponent('HomeView')(function (_React$Component) {
	  (0, _inherits3.default)(HomeView, _React$Component);
	
	  function HomeView() {
	    (0, _classCallCheck3.default)(this, HomeView);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(HomeView).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(HomeView, [{
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        'div',
	        { className: 'view' },
	        _react3.default.createElement(
	          'div',
	          { className: 'view__header' },
	          _react3.default.createElement(_Header2.default, null)
	        ),
	        _react3.default.createElement(
	          'div',
	          { className: 'view__main' },
	          _react3.default.createElement(_Main2.default, null)
	        ),
	        _react3.default.createElement(
	          'div',
	          { className: 'view__sidebar' },
	          _react3.default.createElement(_Sidebar2.default, null)
	        )
	      );
	    }
	  }]);
	  return HomeView;
	}(_react3.default.Component));
	
	exports.default = (0, _redux.compose)((0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default), (0, _reactRedux.connect)(function (state) {
	  return state;
	}))(HomeView);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NotFoundView = undefined;
	
	var _getPrototypeOf = __webpack_require__(10);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(11);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(12);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(14);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(13);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _index = __webpack_require__(18);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(15);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(16);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _reactRouter = __webpack_require__(53);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _components = {
	  NotFoundView: {
	    displayName: 'NotFoundView'
	  }
	};
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/views/NotFoundView.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});
	
	var _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: '/Users/hamishtaplin/Sites/eq/public/eq-author/qBuilder/assets/views/NotFoundView.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformHmrLibIndexJs2(_UsersHamishtaplinSitesEqPublicEqAuthorNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}
	
	var NotFoundView = exports.NotFoundView = _wrapComponent('NotFoundView')(function (_React$Component) {
	  (0, _inherits3.default)(NotFoundView, _React$Component);
	
	  function NotFoundView() {
	    (0, _classCallCheck3.default)(this, NotFoundView);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(NotFoundView).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(NotFoundView, [{
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        'div',
	        { className: '' },
	        _react3.default.createElement(
	          'h1',
	          null,
	          'This is a demo 404 page!'
	        ),
	        _react3.default.createElement('hr', null),
	        _react3.default.createElement(
	          _reactRouter.Link,
	          { to: '/' },
	          'Back To Home View'
	        )
	      );
	    }
	  }]);
	  return NotFoundView;
	}(_react3.default.Component));
	
	exports.default = NotFoundView;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(242), __esModule: true };

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(243), __esModule: true };

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(245), __esModule: true };

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(246), __esModule: true };

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(248), __esModule: true };

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(249), __esModule: true };

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(134);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(234);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(272);
	__webpack_require__(267);
	module.exports = __webpack_require__(24).Array.from;

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(24);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(268);
	module.exports = __webpack_require__(24).Object.assign;

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(19);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(19);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(269);
	module.exports = __webpack_require__(24).Object.getPrototypeOf;

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(270);
	module.exports = __webpack_require__(24).Object.setPrototypeOf;

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(273);
	__webpack_require__(271);
	module.exports = __webpack_require__(24).Symbol;

/***/ },
/* 250 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(82)
	  , TAG = __webpack_require__(28)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(19);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(90)
	  , getNames  = __webpack_require__(19).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(87)
	  , ITERATOR   = __webpack_require__(28)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(82);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(81);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(19)
	  , descriptor     = __webpack_require__(88)
	  , setToStringTag = __webpack_require__(89)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(86)(IteratorPrototype, __webpack_require__(28)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(139)
	  , $export        = __webpack_require__(42)
	  , redefine       = __webpack_require__(140)
	  , hide           = __webpack_require__(86)
	  , has            = __webpack_require__(85)
	  , Iterators      = __webpack_require__(87)
	  , $iterCreate    = __webpack_require__(257)
	  , setToStringTag = __webpack_require__(89)
	  , getProto       = __webpack_require__(19).getProto
	  , ITERATOR       = __webpack_require__(28)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(28)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(19)
	  , toIObject = __webpack_require__(90);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(19)
	  , toObject = __webpack_require__(91)
	  , IObject  = __webpack_require__(137);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(60)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(42)
	  , core    = __webpack_require__(24)
	  , fails   = __webpack_require__(60);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(19).getDesc
	  , isObject = __webpack_require__(138)
	  , anObject = __webpack_require__(81);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(83)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(142)
	  , defined   = __webpack_require__(84);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(142)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(251)
	  , ITERATOR  = __webpack_require__(28)('iterator')
	  , Iterators = __webpack_require__(87);
	module.exports = __webpack_require__(24).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(83)
	  , $export     = __webpack_require__(42)
	  , toObject    = __webpack_require__(91)
	  , call        = __webpack_require__(256)
	  , isArrayIter = __webpack_require__(254)
	  , toLength    = __webpack_require__(265)
	  , getIterFn   = __webpack_require__(266);
	$export($export.S + $export.F * !__webpack_require__(259)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(42);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(261)});

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(91);
	
	__webpack_require__(262)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(42);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(263).set});

/***/ },
/* 271 */
/***/ function(module, exports) {



/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(264)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(258)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(19)
	  , global         = __webpack_require__(61)
	  , has            = __webpack_require__(85)
	  , DESCRIPTORS    = __webpack_require__(136)
	  , $export        = __webpack_require__(42)
	  , redefine       = __webpack_require__(140)
	  , $fails         = __webpack_require__(60)
	  , shared         = __webpack_require__(141)
	  , setToStringTag = __webpack_require__(89)
	  , uid            = __webpack_require__(143)
	  , wks            = __webpack_require__(28)
	  , keyOf          = __webpack_require__(260)
	  , $names         = __webpack_require__(253)
	  , enumKeys       = __webpack_require__(252)
	  , isArray        = __webpack_require__(255)
	  , anObject       = __webpack_require__(81)
	  , toIObject      = __webpack_require__(90)
	  , createDesc     = __webpack_require__(88)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(139)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	exports.__esModule = true;
	
	var _isDisposable = __webpack_require__(98);
	
	var _isDisposable2 = _interopRequireWildcard(_isDisposable);
	
	/**
	 * Represents a group of disposable resources that are disposed together.
	 */
	
	var CompositeDisposable = (function () {
	  function CompositeDisposable() {
	    for (var _len = arguments.length, disposables = Array(_len), _key = 0; _key < _len; _key++) {
	      disposables[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, CompositeDisposable);
	
	    if (Array.isArray(disposables[0]) && disposables.length === 1) {
	      disposables = disposables[0];
	    }
	
	    for (var i = 0; i < disposables.length; i++) {
	      if (!_isDisposable2['default'](disposables[i])) {
	        throw new Error('Expected a disposable');
	      }
	    }
	
	    this.disposables = disposables;
	    this.isDisposed = false;
	  }
	
	  /**
	   * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
	   * @param {Disposable} item Disposable to add.
	   */
	
	  CompositeDisposable.prototype.add = function add(item) {
	    if (this.isDisposed) {
	      item.dispose();
	    } else {
	      this.disposables.push(item);
	    }
	  };
	
	  /**
	   * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
	   * @param {Disposable} item Disposable to remove.
	   * @returns {Boolean} true if found; false otherwise.
	   */
	
	  CompositeDisposable.prototype.remove = function remove(item) {
	    if (this.isDisposed) {
	      return false;
	    }
	
	    var index = this.disposables.indexOf(item);
	    if (index === -1) {
	      return false;
	    }
	
	    this.disposables.splice(index, 1);
	    item.dispose();
	    return true;
	  };
	
	  /**
	   * Disposes all disposables in the group and removes them from the group.
	   */
	
	  CompositeDisposable.prototype.dispose = function dispose() {
	    if (this.isDisposed) {
	      return;
	    }
	
	    var len = this.disposables.length;
	    var currentDisposables = new Array(len);
	    for (var i = 0; i < len; i++) {
	      currentDisposables[i] = this.disposables[i];
	    }
	
	    this.isDisposed = true;
	    this.disposables = [];
	    this.length = 0;
	
	    for (var i = 0; i < len; i++) {
	      currentDisposables[i].dispose();
	    }
	  };
	
	  return CompositeDisposable;
	})();
	
	exports['default'] = CompositeDisposable;
	module.exports = exports['default'];

/***/ },
/* 278 */
/***/ function(module, exports) {

	"use strict";
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	exports.__esModule = true;
	var noop = function noop() {};
	
	/**
	 * The basic disposable.
	 */
	
	var Disposable = (function () {
	  function Disposable(action) {
	    _classCallCheck(this, Disposable);
	
	    this.isDisposed = false;
	    this.action = action || noop;
	  }
	
	  Disposable.prototype.dispose = function dispose() {
	    if (!this.isDisposed) {
	      this.action.call(null);
	      this.isDisposed = true;
	    }
	  };
	
	  _createClass(Disposable, null, [{
	    key: "empty",
	    enumerable: true,
	    value: { dispose: noop }
	  }]);
	
	  return Disposable;
	})();
	
	exports["default"] = Disposable;
	module.exports = exports["default"];

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };
	
	exports.__esModule = true;
	
	var _isDisposable = __webpack_require__(98);
	
	var _isDisposable2 = _interopRequireWildcard(_isDisposable);
	
	var SerialDisposable = (function () {
	  function SerialDisposable() {
	    _classCallCheck(this, SerialDisposable);
	
	    this.isDisposed = false;
	    this.current = null;
	  }
	
	  /**
	   * Gets the underlying disposable.
	   * @return The underlying disposable.
	   */
	
	  SerialDisposable.prototype.getDisposable = function getDisposable() {
	    return this.current;
	  };
	
	  /**
	   * Sets the underlying disposable.
	   * @param {Disposable} value The new underlying disposable.
	   */
	
	  SerialDisposable.prototype.setDisposable = function setDisposable() {
	    var value = arguments[0] === undefined ? null : arguments[0];
	
	    if (value != null && !_isDisposable2['default'](value)) {
	      throw new Error('Expected either an empty value or a valid disposable');
	    }
	
	    var isDisposed = this.isDisposed;
	    var previous = undefined;
	
	    if (!isDisposed) {
	      previous = this.current;
	      this.current = value;
	    }
	
	    if (previous) {
	      previous.dispose();
	    }
	
	    if (isDisposed && value) {
	      value.dispose();
	    }
	  };
	
	  /**
	   * Disposes the underlying disposable as well as all future replacements.
	   */
	
	  SerialDisposable.prototype.dispose = function dispose() {
	    if (this.isDisposed) {
	      return;
	    }
	
	    this.isDisposed = true;
	    var previous = this.current;
	    this.current = null;
	
	    if (previous) {
	      previous.dispose();
	    }
	  };
	
	  return SerialDisposable;
	})();
	
	exports['default'] = SerialDisposable;
	module.exports = exports['default'];

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _reduxLibCreateStore = __webpack_require__(131);
	
	var _reduxLibCreateStore2 = _interopRequireDefault(_reduxLibCreateStore);
	
	var _reducers = __webpack_require__(287);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _actionsDragDrop = __webpack_require__(62);
	
	var dragDropActions = _interopRequireWildcard(_actionsDragDrop);
	
	var _DragDropMonitor = __webpack_require__(281);
	
	var _DragDropMonitor2 = _interopRequireDefault(_DragDropMonitor);
	
	var _HandlerRegistry = __webpack_require__(144);
	
	var _HandlerRegistry2 = _interopRequireDefault(_HandlerRegistry);
	
	var DragDropManager = (function () {
	  function DragDropManager(createBackend) {
	    _classCallCheck(this, DragDropManager);
	
	    var store = _reduxLibCreateStore2['default'](_reducers2['default']);
	
	    this.store = store;
	    this.monitor = new _DragDropMonitor2['default'](store);
	    this.registry = this.monitor.registry;
	    this.backend = createBackend(this);
	
	    store.subscribe(this.handleRefCountChange.bind(this));
	  }
	
	  DragDropManager.prototype.handleRefCountChange = function handleRefCountChange() {
	    var shouldSetUp = this.store.getState().refCount > 0;
	    if (shouldSetUp && !this.isSetUp) {
	      this.backend.setup();
	      this.isSetUp = true;
	    } else if (!shouldSetUp && this.isSetUp) {
	      this.backend.teardown();
	      this.isSetUp = false;
	    }
	  };
	
	  DragDropManager.prototype.getMonitor = function getMonitor() {
	    return this.monitor;
	  };
	
	  DragDropManager.prototype.getBackend = function getBackend() {
	    return this.backend;
	  };
	
	  DragDropManager.prototype.getRegistry = function getRegistry() {
	    return this.registry;
	  };
	
	  DragDropManager.prototype.getActions = function getActions() {
	    var manager = this;
	    var dispatch = this.store.dispatch;
	
	    function bindActionCreator(actionCreator) {
	      return function () {
	        var action = actionCreator.apply(manager, arguments);
	        if (typeof action !== 'undefined') {
	          dispatch(action);
	        }
	      };
	    }
	
	    return Object.keys(dragDropActions).filter(function (key) {
	      return typeof dragDropActions[key] === 'function';
	    }).reduce(function (boundActions, key) {
	      boundActions[key] = bindActionCreator(dragDropActions[key]);
	      return boundActions;
	    }, {});
	  };
	
	  return DragDropManager;
	})();
	
	exports['default'] = DragDropManager;
	module.exports = exports['default'];

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _utilsMatchesType = __webpack_require__(147);
	
	var _utilsMatchesType2 = _interopRequireDefault(_utilsMatchesType);
	
	var _lodashLangIsArray = __webpack_require__(30);
	
	var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);
	
	var _HandlerRegistry = __webpack_require__(144);
	
	var _HandlerRegistry2 = _interopRequireDefault(_HandlerRegistry);
	
	var _reducersDragOffset = __webpack_require__(146);
	
	var _reducersDirtyHandlerIds = __webpack_require__(145);
	
	var DragDropMonitor = (function () {
	  function DragDropMonitor(store) {
	    _classCallCheck(this, DragDropMonitor);
	
	    this.store = store;
	    this.registry = new _HandlerRegistry2['default'](store);
	  }
	
	  DragDropMonitor.prototype.subscribeToStateChange = function subscribeToStateChange(listener) {
	    var _this = this;
	
	    var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var handlerIds = _ref.handlerIds;
	
	    _invariant2['default'](typeof listener === 'function', 'listener must be a function.');
	    _invariant2['default'](typeof handlerIds === 'undefined' || _lodashLangIsArray2['default'](handlerIds), 'handlerIds, when specified, must be an array of strings.');
	
	    var handleChange = function handleChange() {
	      if (_reducersDirtyHandlerIds.areDirty(_this.store.getState().dirtyHandlerIds, handlerIds)) {
	        listener();
	      }
	    };
	
	    return this.store.subscribe(handleChange);
	  };
	
	  DragDropMonitor.prototype.subscribeToOffsetChange = function subscribeToOffsetChange(listener) {
	    var _this2 = this;
	
	    _invariant2['default'](typeof listener === 'function', 'listener must be a function.');
	
	    var previousState = this.store.getState().dragOffset;
	    var handleChange = function handleChange() {
	      var nextState = _this2.store.getState().dragOffset;
	      if (nextState === previousState) {
	        return;
	      }
	
	      previousState = nextState;
	      listener();
	    };
	
	    return this.store.subscribe(handleChange);
	  };
	
	  DragDropMonitor.prototype.canDragSource = function canDragSource(sourceId) {
	    var source = this.registry.getSource(sourceId);
	    _invariant2['default'](source, 'Expected to find a valid source.');
	
	    if (this.isDragging()) {
	      return false;
	    }
	
	    return source.canDrag(this, sourceId);
	  };
	
	  DragDropMonitor.prototype.canDropOnTarget = function canDropOnTarget(targetId) {
	    var target = this.registry.getTarget(targetId);
	    _invariant2['default'](target, 'Expected to find a valid target.');
	
	    if (!this.isDragging() || this.didDrop()) {
	      return false;
	    }
	
	    var targetType = this.registry.getTargetType(targetId);
	    var draggedItemType = this.getItemType();
	    return _utilsMatchesType2['default'](targetType, draggedItemType) && target.canDrop(this, targetId);
	  };
	
	  DragDropMonitor.prototype.isDragging = function isDragging() {
	    return Boolean(this.getItemType());
	  };
	
	  DragDropMonitor.prototype.isDraggingSource = function isDraggingSource(sourceId) {
	    var source = this.registry.getSource(sourceId, true);
	    _invariant2['default'](source, 'Expected to find a valid source.');
	
	    if (!this.isDragging() || !this.isSourcePublic()) {
	      return false;
	    }
	
	    var sourceType = this.registry.getSourceType(sourceId);
	    var draggedItemType = this.getItemType();
	    if (sourceType !== draggedItemType) {
	      return false;
	    }
	
	    return source.isDragging(this, sourceId);
	  };
	
	  DragDropMonitor.prototype.isOverTarget = function isOverTarget(targetId) {
	    var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var _ref2$shallow = _ref2.shallow;
	    var shallow = _ref2$shallow === undefined ? false : _ref2$shallow;
	
	    if (!this.isDragging()) {
	      return false;
	    }
	
	    var targetType = this.registry.getTargetType(targetId);
	    var draggedItemType = this.getItemType();
	    if (!_utilsMatchesType2['default'](targetType, draggedItemType)) {
	      return false;
	    }
	
	    var targetIds = this.getTargetIds();
	    if (!targetIds.length) {
	      return false;
	    }
	
	    var index = targetIds.indexOf(targetId);
	    if (shallow) {
	      return index === targetIds.length - 1;
	    } else {
	      return index > -1;
	    }
	  };
	
	  DragDropMonitor.prototype.getItemType = function getItemType() {
	    return this.store.getState().dragOperation.itemType;
	  };
	
	  DragDropMonitor.prototype.getItem = function getItem() {
	    return this.store.getState().dragOperation.item;
	  };
	
	  DragDropMonitor.prototype.getSourceId = function getSourceId() {
	    return this.store.getState().dragOperation.sourceId;
	  };
	
	  DragDropMonitor.prototype.getTargetIds = function getTargetIds() {
	    return this.store.getState().dragOperation.targetIds;
	  };
	
	  DragDropMonitor.prototype.getDropResult = function getDropResult() {
	    return this.store.getState().dragOperation.dropResult;
	  };
	
	  DragDropMonitor.prototype.didDrop = function didDrop() {
	    return this.store.getState().dragOperation.didDrop;
	  };
	
	  DragDropMonitor.prototype.isSourcePublic = function isSourcePublic() {
	    return this.store.getState().dragOperation.isSourcePublic;
	  };
	
	  DragDropMonitor.prototype.getInitialClientOffset = function getInitialClientOffset() {
	    return this.store.getState().dragOffset.initialClientOffset;
	  };
	
	  DragDropMonitor.prototype.getInitialSourceClientOffset = function getInitialSourceClientOffset() {
	    return this.store.getState().dragOffset.initialSourceClientOffset;
	  };
	
	  DragDropMonitor.prototype.getClientOffset = function getClientOffset() {
	    return this.store.getState().dragOffset.clientOffset;
	  };
	
	  DragDropMonitor.prototype.getSourceClientOffset = function getSourceClientOffset() {
	    return _reducersDragOffset.getSourceClientOffset(this.store.getState().dragOffset);
	  };
	
	  DragDropMonitor.prototype.getDifferenceFromInitialOffset = function getDifferenceFromInitialOffset() {
	    return _reducersDragOffset.getDifferenceFromInitialOffset(this.store.getState().dragOffset);
	  };
	
	  return DragDropMonitor;
	})();
	
	exports['default'] = DragDropMonitor;
	module.exports = exports['default'];

/***/ },
/* 282 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DragSource = (function () {
	  function DragSource() {
	    _classCallCheck(this, DragSource);
	  }
	
	  DragSource.prototype.canDrag = function canDrag() {
	    return true;
	  };
	
	  DragSource.prototype.isDragging = function isDragging(monitor, handle) {
	    return handle === monitor.getSourceId();
	  };
	
	  DragSource.prototype.endDrag = function endDrag() {};
	
	  return DragSource;
	})();
	
	exports["default"] = DragSource;
	module.exports = exports["default"];

/***/ },
/* 283 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DropTarget = (function () {
	  function DropTarget() {
	    _classCallCheck(this, DropTarget);
	  }
	
	  DropTarget.prototype.canDrop = function canDrop() {
	    return true;
	  };
	
	  DropTarget.prototype.hover = function hover() {};
	
	  DropTarget.prototype.drop = function drop() {};
	
	  return DropTarget;
	})();
	
	exports["default"] = DropTarget;
	module.exports = exports["default"];

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createBackend;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _lodashUtilityNoop = __webpack_require__(347);
	
	var _lodashUtilityNoop2 = _interopRequireDefault(_lodashUtilityNoop);
	
	var TestBackend = (function () {
	  function TestBackend(manager) {
	    _classCallCheck(this, TestBackend);
	
	    this.actions = manager.getActions();
	  }
	
	  TestBackend.prototype.setup = function setup() {
	    this.didCallSetup = true;
	  };
	
	  TestBackend.prototype.teardown = function teardown() {
	    this.didCallTeardown = true;
	  };
	
	  TestBackend.prototype.connectDragSource = function connectDragSource() {
	    return _lodashUtilityNoop2['default'];
	  };
	
	  TestBackend.prototype.connectDragPreview = function connectDragPreview() {
	    return _lodashUtilityNoop2['default'];
	  };
	
	  TestBackend.prototype.connectDropTarget = function connectDropTarget() {
	    return _lodashUtilityNoop2['default'];
	  };
	
	  TestBackend.prototype.simulateBeginDrag = function simulateBeginDrag(sourceIds, options) {
	    this.actions.beginDrag(sourceIds, options);
	  };
	
	  TestBackend.prototype.simulatePublishDragSource = function simulatePublishDragSource() {
	    this.actions.publishDragSource();
	  };
	
	  TestBackend.prototype.simulateHover = function simulateHover(targetIds, options) {
	    this.actions.hover(targetIds, options);
	  };
	
	  TestBackend.prototype.simulateDrop = function simulateDrop() {
	    this.actions.drop();
	  };
	
	  TestBackend.prototype.simulateEndDrag = function simulateEndDrag() {
	    this.actions.endDrag();
	  };
	
	  return TestBackend;
	})();
	
	function createBackend(manager) {
	  return new TestBackend(manager);
	}
	
	module.exports = exports['default'];

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _DragDropManager = __webpack_require__(280);
	
	exports.DragDropManager = _interopRequire(_DragDropManager);
	
	var _DragSource = __webpack_require__(282);
	
	exports.DragSource = _interopRequire(_DragSource);
	
	var _DropTarget = __webpack_require__(283);
	
	exports.DropTarget = _interopRequire(_DropTarget);
	
	var _backendsCreateTestBackend = __webpack_require__(284);
	
	exports.createTestBackend = _interopRequire(_backendsCreateTestBackend);

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = dragOperation;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _actionsDragDrop = __webpack_require__(62);
	
	var _actionsRegistry = __webpack_require__(63);
	
	var _lodashArrayWithout = __webpack_require__(165);
	
	var _lodashArrayWithout2 = _interopRequireDefault(_lodashArrayWithout);
	
	var initialState = {
	  itemType: null,
	  item: null,
	  sourceId: null,
	  targetIds: [],
	  dropResult: null,
	  didDrop: false,
	  isSourcePublic: null
	};
	
	function dragOperation(state, action) {
	  if (state === undefined) state = initialState;
	
	  switch (action.type) {
	    case _actionsDragDrop.BEGIN_DRAG:
	      return _extends({}, state, {
	        itemType: action.itemType,
	        item: action.item,
	        sourceId: action.sourceId,
	        isSourcePublic: action.isSourcePublic,
	        dropResult: null,
	        didDrop: false
	      });
	    case _actionsDragDrop.PUBLISH_DRAG_SOURCE:
	      return _extends({}, state, {
	        isSourcePublic: true
	      });
	    case _actionsDragDrop.HOVER:
	      return _extends({}, state, {
	        targetIds: action.targetIds
	      });
	    case _actionsDragDrop.PUBLISH_DRAG_SOURCE:
	      return _extends({}, state, {
	        isSourcePublic: true
	      });
	    case _actionsRegistry.REMOVE_TARGET:
	      if (state.targetIds.indexOf(action.targetId) === -1) {
	        return state;
	      }
	      return _extends({}, state, {
	        targetIds: _lodashArrayWithout2['default'](state.targetIds, action.targetId)
	      });
	    case _actionsDragDrop.DROP:
	      return _extends({}, state, {
	        dropResult: action.dropResult,
	        didDrop: true,
	        targetIds: []
	      });
	    case _actionsDragDrop.END_DRAG:
	      return _extends({}, state, {
	        itemType: null,
	        item: null,
	        sourceId: null,
	        dropResult: null,
	        didDrop: false,
	        isSourcePublic: null,
	        targetIds: []
	      });
	    default:
	      return state;
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _dragOffset = __webpack_require__(146);
	
	var _dragOffset2 = _interopRequireDefault(_dragOffset);
	
	var _dragOperation = __webpack_require__(286);
	
	var _dragOperation2 = _interopRequireDefault(_dragOperation);
	
	var _refCount = __webpack_require__(288);
	
	var _refCount2 = _interopRequireDefault(_refCount);
	
	var _dirtyHandlerIds = __webpack_require__(145);
	
	var _dirtyHandlerIds2 = _interopRequireDefault(_dirtyHandlerIds);
	
	exports['default'] = function (state, action) {
	  if (state === undefined) state = {};
	
	  return {
	    dirtyHandlerIds: _dirtyHandlerIds2['default'](state.dirtyHandlerIds, action, state.dragOperation),
	    dragOffset: _dragOffset2['default'](state.dragOffset, action),
	    refCount: _refCount2['default'](state.refCount, action),
	    dragOperation: _dragOperation2['default'](state.dragOperation, action)
	  };
	};
	
	module.exports = exports['default'];

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = refCount;
	
	var _actionsRegistry = __webpack_require__(63);
	
	function refCount(state, action) {
	  if (state === undefined) state = 0;
	
	  switch (action.type) {
	    case _actionsRegistry.ADD_SOURCE:
	    case _actionsRegistry.ADD_TARGET:
	      return state + 1;
	    case _actionsRegistry.REMOVE_SOURCE:
	    case _actionsRegistry.REMOVE_TARGET:
	      return state - 1;
	    default:
	      return state;
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 289 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = getNextUniqueId;
	var nextUniqueId = 0;
	
	function getNextUniqueId() {
	  return nextUniqueId++;
	}
	
	module.exports = exports["default"];

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	    'use strict';
	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.
	
	    /* istanbul ignore next */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(484)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('stackframe'));
	    } else {
	        root.ErrorStackParser = factory(root.StackFrame);
	    }
	}(this, function ErrorStackParser(StackFrame) {
	    'use strict';
	
	    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
	    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
	    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;
	
	    function _map(array, fn, thisArg) {
	        if (typeof Array.prototype.map === 'function') {
	            return array.map(fn, thisArg);
	        } else {
	            var output = new Array(array.length);
	            for (var i = 0; i < array.length; i++) {
	                output[i] = fn.call(thisArg, array[i]);
	            }
	            return output;
	        }
	    }
	
	    function _filter(array, fn, thisArg) {
	        if (typeof Array.prototype.filter === 'function') {
	            return array.filter(fn, thisArg);
	        } else {
	            var output = [];
	            for (var i = 0; i < array.length; i++) {
	                if (fn.call(thisArg, array[i])) {
	                    output.push(array[i]);
	                }
	            }
	            return output;
	        }
	    }
	
	    return {
	        /**
	         * Given an Error object, extract the most information from it.
	         * @param error {Error}
	         * @return Array[StackFrame]
	         */
	        parse: function ErrorStackParser$$parse(error) {
	            if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
	                return this.parseOpera(error);
	            } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
	                return this.parseV8OrIE(error);
	            } else if (error.stack) {
	                return this.parseFFOrSafari(error);
	            } else {
	                throw new Error('Cannot parse given Error object');
	            }
	        },
	
	        /**
	         * Separate line and column numbers from a URL-like string.
	         * @param urlLike String
	         * @return Array[String]
	         */
	        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
	            // Fail-fast but return locations like "(native)"
	            if (urlLike.indexOf(':') === -1) {
	                return [urlLike];
	            }
	
	            var locationParts = urlLike.replace(/[\(\)\s]/g, '').split(':');
	            var lastNumber = locationParts.pop();
	            var possibleNumber = locationParts[locationParts.length - 1];
	            if (!isNaN(parseFloat(possibleNumber)) && isFinite(possibleNumber)) {
	                var lineNumber = locationParts.pop();
	                return [locationParts.join(':'), lineNumber, lastNumber];
	            } else {
	                return [locationParts.join(':'), lastNumber, undefined];
	            }
	        },
	
	        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
	            var filtered = _filter(error.stack.split('\n'), function (line) {
	                return !!line.match(CHROME_IE_STACK_REGEXP);
	            }, this);
	
	            return _map(filtered, function (line) {
	                if (line.indexOf('(eval ') > -1) {
	                    // Throw away eval information until we implement stacktrace.js/stackframe#8
	                    line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
	                }
	                var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionName = tokens.join(' ') || undefined;
	                var fileName = locationParts[0] === 'eval' ? undefined : locationParts[0];
	
	                return new StackFrame(functionName, undefined, fileName, locationParts[1], locationParts[2], line);
	            }, this);
	        },
	
	        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
	            var filtered = _filter(error.stack.split('\n'), function (line) {
	                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
	            }, this);
	
	            return _map(filtered, function (line) {
	                // Throw away eval information until we implement stacktrace.js/stackframe#8
	                if (line.indexOf(' > eval') > -1) {
	                    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
	                }
	
	                if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
	                    // Safari eval frames only have function names and nothing else
	                    return new StackFrame(line);
	                } else {
	                    var tokens = line.split('@');
	                    var locationParts = this.extractLocation(tokens.pop());
	                    var functionName = tokens.shift() || undefined;
	                    return new StackFrame(functionName, undefined, locationParts[0], locationParts[1], locationParts[2], line);
	                }
	            }, this);
	        },
	
	        parseOpera: function ErrorStackParser$$parseOpera(e) {
	            if (!e.stacktrace || (e.message.indexOf('\n') > -1 &&
	                e.message.split('\n').length > e.stacktrace.split('\n').length)) {
	                return this.parseOpera9(e);
	            } else if (!e.stack) {
	                return this.parseOpera10(e);
	            } else {
	                return this.parseOpera11(e);
	            }
	        },
	
	        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
	            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
	            var lines = e.message.split('\n');
	            var result = [];
	
	            for (var i = 2, len = lines.length; i < len; i += 2) {
	                var match = lineRE.exec(lines[i]);
	                if (match) {
	                    result.push(new StackFrame(undefined, undefined, match[2], match[1], undefined, lines[i]));
	                }
	            }
	
	            return result;
	        },
	
	        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
	            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
	            var lines = e.stacktrace.split('\n');
	            var result = [];
	
	            for (var i = 0, len = lines.length; i < len; i += 2) {
	                var match = lineRE.exec(lines[i]);
	                if (match) {
	                    result.push(new StackFrame(match[3] || undefined, undefined, match[2], match[1], undefined, lines[i]));
	                }
	            }
	
	            return result;
	        },
	
	        // Opera 10.65+ Error.stack very similar to FF/Safari
	        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
	            var filtered = _filter(error.stack.split('\n'), function (line) {
	                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) &&
	                    !line.match(/^Error created at/);
	            }, this);
	
	            return _map(filtered, function (line) {
	                var tokens = line.split('@');
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionCall = (tokens.shift() || '');
	                var functionName = functionCall
	                        .replace(/<anonymous function(: (\w+))?>/, '$2')
	                        .replace(/\([^\)]*\)/g, '') || undefined;
	                var argsRaw;
	                if (functionCall.match(/\(([^\)]*)\)/)) {
	                    argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
	                }
	                var args = (argsRaw === undefined || argsRaw === '[arguments not available]') ? undefined : argsRaw.split(',');
	                return new StackFrame(functionName, args, locationParts[0], locationParts[1], locationParts[2], line);
	            }, this);
	        }
	    };
	}));
	


/***/ },
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {if (typeof window !== "undefined") {
	    module.exports = window;
	} else if (typeof global !== "undefined") {
	    module.exports = global;
	} else if (typeof self !== "undefined"){
	    module.exports = self;
	} else {
	    module.exports = {};
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(101),
	    baseFlatten = __webpack_require__(167),
	    isArrayLike = __webpack_require__(29),
	    isObjectLike = __webpack_require__(45),
	    restParam = __webpack_require__(44);
	
	/**
	 * Creates an array of unique `array` values not included in the other
	 * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...Array} [values] The arrays of values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @example
	 *
	 * _.difference([1, 2, 3], [4, 2]);
	 * // => [1, 3]
	 */
	var difference = restParam(function(array, values) {
	  return (isObjectLike(array) && isArrayLike(array))
	    ? baseDifference(array, baseFlatten(values, false, true))
	    : [];
	});
	
	module.exports = difference;


/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(102),
	    cacheIndexOf = __webpack_require__(103),
	    createCache = __webpack_require__(104),
	    isArrayLike = __webpack_require__(29),
	    restParam = __webpack_require__(44);
	
	/**
	 * Creates an array of unique values that are included in all of the provided
	 * arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of shared values.
	 * @example
	 * _.intersection([1, 2], [4, 2], [2, 1]);
	 * // => [2]
	 */
	var intersection = restParam(function(arrays) {
	  var othLength = arrays.length,
	      othIndex = othLength,
	      caches = Array(length),
	      indexOf = baseIndexOf,
	      isCommon = true,
	      result = [];
	
	  while (othIndex--) {
	    var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
	    caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
	  }
	  var array = arrays[0],
	      index = -1,
	      length = array ? array.length : 0,
	      seen = caches[0];
	
	  outer:
	  while (++index < length) {
	    value = array[index];
	    if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
	      var othIndex = othLength;
	      while (--othIndex) {
	        var cache = caches[othIndex];
	        if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
	          continue outer;
	        }
	      }
	      if (seen) {
	        seen.push(value);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	});
	
	module.exports = intersection;


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(167),
	    baseUniq = __webpack_require__(168),
	    restParam = __webpack_require__(44);
	
	/**
	 * Creates an array of unique values, in order, from all of the provided arrays
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of combined values.
	 * @example
	 *
	 * _.union([1, 2], [4, 2], [2, 1]);
	 * // => [1, 2, 4]
	 */
	var union = restParam(function(arrays) {
	  return baseUniq(baseFlatten(arrays, false, true));
	});
	
	module.exports = union;


/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(166),
	    baseDifference = __webpack_require__(101),
	    baseUniq = __webpack_require__(168),
	    isArrayLike = __webpack_require__(29);
	
	/**
	 * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	 * of the provided arrays.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of values.
	 * @example
	 *
	 * _.xor([1, 2], [4, 2]);
	 * // => [1, 4]
	 */
	function xor() {
	  var index = -1,
	      length = arguments.length;
	
	  while (++index < length) {
	    var array = arguments[index];
	    if (isArrayLike(array)) {
	      var result = result
	        ? arrayPush(baseDifference(result, array), baseDifference(array, result))
	        : array;
	    }
	  }
	  return result ? baseUniq(result) : [];
	}
	
	module.exports = xor;


/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(320);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is coerced to a string and used as the
	 * cache key. The `func` is invoked with the `this` binding of the memoized
	 * function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoizing function.
	 * @example
	 *
	 * var upperCase = _.memoize(function(string) {
	 *   return string.toUpperCase();
	 * });
	 *
	 * upperCase('fred');
	 * // => 'FRED'
	 *
	 * // modifying the result cache
	 * upperCase.cache.set('fred', 'BARNEY');
	 * upperCase('fred');
	 * // => 'BARNEY'
	 *
	 * // replacing `_.memoize.Cache`
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'barney' };
	 * var identity = _.memoize(_.identity);
	 *
	 * identity(object);
	 * // => { 'user': 'fred' }
	 * identity(other);
	 * // => { 'user': 'fred' }
	 *
	 * _.memoize.Cache = WeakMap;
	 * var identity = _.memoize(_.identity);
	 *
	 * identity(object);
	 * // => { 'user': 'fred' }
	 * identity(other);
	 * // => { 'user': 'barney' }
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new memoize.Cache;
	  return memoized;
	}
	
	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;
	
	module.exports = memoize;


/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	var mapDelete = __webpack_require__(337),
	    mapGet = __webpack_require__(338),
	    mapHas = __webpack_require__(339),
	    mapSet = __webpack_require__(340);
	
	/**
	 * Creates a cache object to store key/value pairs.
	 *
	 * @private
	 * @static
	 * @name Cache
	 * @memberOf _.memoize
	 */
	function MapCache() {
	  this.__data__ = {};
	}
	
	// Add functions to the `Map` cache.
	MapCache.prototype['delete'] = mapDelete;
	MapCache.prototype.get = mapGet;
	MapCache.prototype.has = mapHas;
	MapCache.prototype.set = mapSet;
	
	module.exports = MapCache;


/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var cachePush = __webpack_require__(330),
	    getNative = __webpack_require__(66);
	
	/** Native method references. */
	var Set = getNative(global, 'Set');
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');
	
	/**
	 *
	 * Creates a cache object to store unique values.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var length = values ? values.length : 0;
	
	  this.data = { 'hash': nativeCreate(null), 'set': new Set };
	  while (length--) {
	    this.push(values[length]);
	  }
	}
	
	// Add functions to the `Set` cache.
	SetCache.prototype.push = cachePush;
	
	module.exports = SetCache;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 322 */
/***/ function(module, exports) {

	/**
	 * Used by `_.defaults` to customize its `_.assign` use.
	 *
	 * @private
	 * @param {*} objectValue The destination object property value.
	 * @param {*} sourceValue The source object property value.
	 * @returns {*} Returns the value to assign to the destination object.
	 */
	function assignDefaults(objectValue, sourceValue) {
	  return objectValue === undefined ? sourceValue : objectValue;
	}
	
	module.exports = assignDefaults;


/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(170);
	
	/**
	 * A specialized version of `_.assign` for customizing assigned values without
	 * support for argument juggling, multiple sources, and `this` binding `customizer`
	 * functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 */
	function assignWith(object, source, customizer) {
	  var index = -1,
	      props = keys(source),
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index],
	        value = object[key],
	        result = customizer(value, source[key], key, object, source);
	
	    if ((result === result ? (result !== value) : (value === value)) ||
	        (value === undefined && !(key in object))) {
	      object[key] = result;
	    }
	  }
	  return object;
	}
	
	module.exports = assignWith;


/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(325),
	    keys = __webpack_require__(170);
	
	/**
	 * The base implementation of `_.assign` without support for argument juggling,
	 * multiple sources, and `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return source == null
	    ? object
	    : baseCopy(source, keys(source), object);
	}
	
	module.exports = baseAssign;


/***/ },
/* 325 */
/***/ function(module, exports) {

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}
	
	module.exports = baseCopy;


/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(332);
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(326),
	    keysIn = __webpack_require__(171);
	
	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}
	
	module.exports = baseForIn;


/***/ },
/* 328 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(346);
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	module.exports = bindCallback;


/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(31);
	
	/**
	 * Adds `value` to the cache.
	 *
	 * @private
	 * @name push
	 * @memberOf SetCache
	 * @param {*} value The value to cache.
	 */
	function cachePush(value) {
	  var data = this.data;
	  if (typeof value == 'string' || isObject(value)) {
	    data.set.add(value);
	  } else {
	    data.hash[value] = true;
	  }
	}
	
	module.exports = cachePush;


/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(329),
	    isIterateeCall = __webpack_require__(336),
	    restParam = __webpack_require__(44);
	
	/**
	 * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function(object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;
	
	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(342);
	
	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;
	
	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	var restParam = __webpack_require__(44);
	
	/**
	 * Creates a `_.defaults` or `_.defaultsDeep` function.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Function} Returns the new defaults function.
	 */
	function createDefaults(assigner, customizer) {
	  return restParam(function(args) {
	    var object = args[0];
	    if (object == null) {
	      return object;
	    }
	    args.push(customizer);
	    return assigner.apply(undefined, args);
	  });
	}
	
	module.exports = createDefaults;


/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(328);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 335 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = indexOfNaN;


/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(29),
	    isIndex = __webpack_require__(105),
	    isObject = __webpack_require__(31);
	
	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 337 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf _.memoize.Cache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed successfully, else `false`.
	 */
	function mapDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}
	
	module.exports = mapDelete;


/***/ },
/* 338 */
/***/ function(module, exports) {

	/**
	 * Gets the cached value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf _.memoize.Cache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the cached value.
	 */
	function mapGet(key) {
	  return key == '__proto__' ? undefined : this.__data__[key];
	}
	
	module.exports = mapGet;


/***/ },
/* 339 */
/***/ function(module, exports) {

	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a cached value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf _.memoize.Cache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapHas(key) {
	  return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
	}
	
	module.exports = mapHas;


/***/ },
/* 340 */
/***/ function(module, exports) {

	/**
	 * Sets `value` to `key` of the cache.
	 *
	 * @private
	 * @name set
	 * @memberOf _.memoize.Cache
	 * @param {string} key The key of the value to cache.
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache object.
	 */
	function mapSet(key, value) {
	  if (key != '__proto__') {
	    this.__data__[key] = value;
	  }
	  return this;
	}
	
	module.exports = mapSet;


/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(68),
	    isArray = __webpack_require__(30),
	    isIndex = __webpack_require__(105),
	    isLength = __webpack_require__(67),
	    keysIn = __webpack_require__(171);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = shimKeys;


/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(31);
	
	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}
	
	module.exports = toObject;


/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(31);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(343),
	    isObjectLike = __webpack_require__(45);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	var assign = __webpack_require__(169),
	    assignDefaults = __webpack_require__(322),
	    createDefaults = __webpack_require__(333);
	
	/**
	 * Assigns own enumerable properties of source object(s) to the destination
	 * object for all destination properties that resolve to `undefined`. Once a
	 * property is set, additional values of the same property are ignored.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	 * // => { 'user': 'barney', 'age': 36 }
	 */
	var defaults = createDefaults(assign, assignDefaults);
	
	module.exports = defaults;


/***/ },
/* 346 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 347 */
/***/ function(module, exports) {

	/**
	 * A no-operation function that returns `undefined` regardless of the
	 * arguments it receives.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.noop(object) === undefined;
	 * // => true
	 */
	function noop() {
	  // No operation performed.
	}
	
	module.exports = noop;


/***/ },
/* 348 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 349 */,
/* 350 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};
	
	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }
	
	  var regexp = /\+/g;
	  qs = qs.split(sep);
	
	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }
	
	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }
	
	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;
	
	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }
	
	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);
	
	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }
	
	  return obj;
	};


/***/ },
/* 351 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;
	
	    case 'boolean':
	      return v ? 'true' : 'false';
	
	    case 'number':
	      return isFinite(v) ? v : '';
	
	    default:
	      return '';
	  }
	};
	
	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }
	
	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);
	
	  }
	
	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(350);
	exports.encode = exports.stringify = __webpack_require__(351);


/***/ },
/* 353 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = getForceUpdate;
	function traverseRenderedChildren(internalInstance, callback, argument) {
	  callback(internalInstance, argument);
	
	  if (internalInstance._renderedComponent) {
	    traverseRenderedChildren(internalInstance._renderedComponent, callback, argument);
	  } else {
	    for (var key in internalInstance._renderedChildren) {
	      if (internalInstance._renderedChildren.hasOwnProperty(key)) {
	        traverseRenderedChildren(internalInstance._renderedChildren[key], callback, argument);
	      }
	    }
	  }
	}
	
	function setPendingForceUpdate(internalInstance) {
	  if (internalInstance._pendingForceUpdate === false) {
	    internalInstance._pendingForceUpdate = true;
	  }
	}
	
	function forceUpdateIfPending(internalInstance, React) {
	  if (internalInstance._pendingForceUpdate === true) {
	    var publicInstance = internalInstance._instance;
	    React.Component.prototype.forceUpdate.call(publicInstance);
	  }
	}
	
	function getForceUpdate(React) {
	  return function (instance) {
	    var internalInstance = instance._reactInternalInstance;
	    traverseRenderedChildren(internalInstance, setPendingForceUpdate);
	    traverseRenderedChildren(internalInstance, forceUpdateIfPending, React);
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _lodashArrayUnion = __webpack_require__(317);
	
	var _lodashArrayUnion2 = _interopRequireDefault(_lodashArrayUnion);
	
	var _lodashArrayWithout = __webpack_require__(165);
	
	var _lodashArrayWithout2 = _interopRequireDefault(_lodashArrayWithout);
	
	var EnterLeaveCounter = (function () {
	  function EnterLeaveCounter() {
	    _classCallCheck(this, EnterLeaveCounter);
	
	    this.entered = [];
	  }
	
	  EnterLeaveCounter.prototype.enter = function enter(enteringNode) {
	    var previousLength = this.entered.length;
	
	    this.entered = _lodashArrayUnion2['default'](this.entered.filter(function (node) {
	      return document.documentElement.contains(node) && (!node.contains || node.contains(enteringNode));
	    }), [enteringNode]);
	
	    return previousLength === 0 && this.entered.length > 0;
	  };
	
	  EnterLeaveCounter.prototype.leave = function leave(leavingNode) {
	    var previousLength = this.entered.length;
	
	    this.entered = _lodashArrayWithout2['default'](this.entered.filter(function (node) {
	      return document.documentElement.contains(node);
	    }), leavingNode);
	
	    return previousLength > 0 && this.entered.length === 0;
	  };
	
	  EnterLeaveCounter.prototype.reset = function reset() {
	    this.entered = [];
	  };
	
	  return EnterLeaveCounter;
	})();
	
	exports['default'] = EnterLeaveCounter;
	module.exports = exports['default'];

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _lodashObjectDefaults = __webpack_require__(345);
	
	var _lodashObjectDefaults2 = _interopRequireDefault(_lodashObjectDefaults);
	
	var _shallowEqual = __webpack_require__(361);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _EnterLeaveCounter = __webpack_require__(354);
	
	var _EnterLeaveCounter2 = _interopRequireDefault(_EnterLeaveCounter);
	
	var _BrowserDetector = __webpack_require__(172);
	
	var _OffsetUtils = __webpack_require__(358);
	
	var _NativeDragSources = __webpack_require__(357);
	
	var _NativeTypes = __webpack_require__(106);
	
	var NativeTypes = _interopRequireWildcard(_NativeTypes);
	
	var HTML5Backend = (function () {
	  function HTML5Backend(manager) {
	    _classCallCheck(this, HTML5Backend);
	
	    this.actions = manager.getActions();
	    this.monitor = manager.getMonitor();
	    this.registry = manager.getRegistry();
	
	    this.sourcePreviewNodes = {};
	    this.sourcePreviewNodeOptions = {};
	    this.sourceNodes = {};
	    this.sourceNodeOptions = {};
	    this.enterLeaveCounter = new _EnterLeaveCounter2['default']();
	
	    this.getSourceClientOffset = this.getSourceClientOffset.bind(this);
	    this.handleTopDragStart = this.handleTopDragStart.bind(this);
	    this.handleTopDragStartCapture = this.handleTopDragStartCapture.bind(this);
	    this.handleTopDragEndCapture = this.handleTopDragEndCapture.bind(this);
	    this.handleTopDragEnter = this.handleTopDragEnter.bind(this);
	    this.handleTopDragEnterCapture = this.handleTopDragEnterCapture.bind(this);
	    this.handleTopDragLeaveCapture = this.handleTopDragLeaveCapture.bind(this);
	    this.handleTopDragOver = this.handleTopDragOver.bind(this);
	    this.handleTopDragOverCapture = this.handleTopDragOverCapture.bind(this);
	    this.handleTopDrop = this.handleTopDrop.bind(this);
	    this.handleTopDropCapture = this.handleTopDropCapture.bind(this);
	    this.handleSelectStart = this.handleSelectStart.bind(this);
	    this.endDragIfSourceWasRemovedFromDOM = this.endDragIfSourceWasRemovedFromDOM.bind(this);
	    this.endDragNativeItem = this.endDragNativeItem.bind(this);
	  }
	
	  HTML5Backend.prototype.setup = function setup() {
	    if (typeof window === 'undefined') {
	      return;
	    }
	
	    if (this.constructor.isSetUp) {
	      throw new Error('Cannot have two HTML5 backends at the same time.');
	    }
	    this.constructor.isSetUp = true;
	    this.addEventListeners(window);
	  };
	
	  HTML5Backend.prototype.teardown = function teardown() {
	    if (typeof window === 'undefined') {
	      return;
	    }
	
	    this.constructor.isSetUp = false;
	    this.removeEventListeners(window);
	    this.clearCurrentDragSourceNode();
	  };
	
	  HTML5Backend.prototype.addEventListeners = function addEventListeners(target) {
	    target.addEventListener('dragstart', this.handleTopDragStart);
	    target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
	    target.addEventListener('dragend', this.handleTopDragEndCapture, true);
	    target.addEventListener('dragenter', this.handleTopDragEnter);
	    target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
	    target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
	    target.addEventListener('dragover', this.handleTopDragOver);
	    target.addEventListener('dragover', this.handleTopDragOverCapture, true);
	    target.addEventListener('drop', this.handleTopDrop);
	    target.addEventListener('drop', this.handleTopDropCapture, true);
	  };
	
	  HTML5Backend.prototype.removeEventListeners = function removeEventListeners(target) {
	    target.removeEventListener('dragstart', this.handleTopDragStart);
	    target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
	    target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
	    target.removeEventListener('dragenter', this.handleTopDragEnter);
	    target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
	    target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
	    target.removeEventListener('dragover', this.handleTopDragOver);
	    target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
	    target.removeEventListener('drop', this.handleTopDrop);
	    target.removeEventListener('drop', this.handleTopDropCapture, true);
	  };
	
	  HTML5Backend.prototype.connectDragPreview = function connectDragPreview(sourceId, node, options) {
	    var _this = this;
	
	    this.sourcePreviewNodeOptions[sourceId] = options;
	    this.sourcePreviewNodes[sourceId] = node;
	
	    return function () {
	      delete _this.sourcePreviewNodes[sourceId];
	      delete _this.sourcePreviewNodeOptions[sourceId];
	    };
	  };
	
	  HTML5Backend.prototype.connectDragSource = function connectDragSource(sourceId, node, options) {
	    var _this2 = this;
	
	    this.sourceNodes[sourceId] = node;
	    this.sourceNodeOptions[sourceId] = options;
	
	    var handleDragStart = function handleDragStart(e) {
	      return _this2.handleDragStart(e, sourceId);
	    };
	    var handleSelectStart = function handleSelectStart(e) {
	      return _this2.handleSelectStart(e, sourceId);
	    };
	
	    node.setAttribute('draggable', true);
	    node.addEventListener('dragstart', handleDragStart);
	    node.addEventListener('selectstart', handleSelectStart);
	
	    return function () {
	      delete _this2.sourceNodes[sourceId];
	      delete _this2.sourceNodeOptions[sourceId];
	
	      node.removeEventListener('dragstart', handleDragStart);
	      node.removeEventListener('selectstart', handleSelectStart);
	      node.setAttribute('draggable', false);
	    };
	  };
	
	  HTML5Backend.prototype.connectDropTarget = function connectDropTarget(targetId, node) {
	    var _this3 = this;
	
	    var handleDragEnter = function handleDragEnter(e) {
	      return _this3.handleDragEnter(e, targetId);
	    };
	    var handleDragOver = function handleDragOver(e) {
	      return _this3.handleDragOver(e, targetId);
	    };
	    var handleDrop = function handleDrop(e) {
	      return _this3.handleDrop(e, targetId);
	    };
	
	    node.addEventListener('dragenter', handleDragEnter);
	    node.addEventListener('dragover', handleDragOver);
	    node.addEventListener('drop', handleDrop);
	
	    return function () {
	      node.removeEventListener('dragenter', handleDragEnter);
	      node.removeEventListener('dragover', handleDragOver);
	      node.removeEventListener('drop', handleDrop);
	    };
	  };
	
	  HTML5Backend.prototype.getCurrentSourceNodeOptions = function getCurrentSourceNodeOptions() {
	    var sourceId = this.monitor.getSourceId();
	    var sourceNodeOptions = this.sourceNodeOptions[sourceId];
	
	    return _lodashObjectDefaults2['default'](sourceNodeOptions || {}, {
	      dropEffect: 'move'
	    });
	  };
	
	  HTML5Backend.prototype.getCurrentDropEffect = function getCurrentDropEffect() {
	    if (this.isDraggingNativeItem()) {
	      // It makes more sense to default to 'copy' for native resources
	      return 'copy';
	    }
	
	    return this.getCurrentSourceNodeOptions().dropEffect;
	  };
	
	  HTML5Backend.prototype.getCurrentSourcePreviewNodeOptions = function getCurrentSourcePreviewNodeOptions() {
	    var sourceId = this.monitor.getSourceId();
	    var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions[sourceId];
	
	    return _lodashObjectDefaults2['default'](sourcePreviewNodeOptions || {}, {
	      anchorX: 0.5,
	      anchorY: 0.5,
	      captureDraggingState: false
	    });
	  };
	
	  HTML5Backend.prototype.getSourceClientOffset = function getSourceClientOffset(sourceId) {
	    return _OffsetUtils.getNodeClientOffset(this.sourceNodes[sourceId]);
	  };
	
	  HTML5Backend.prototype.isDraggingNativeItem = function isDraggingNativeItem() {
	    var itemType = this.monitor.getItemType();
	    return Object.keys(NativeTypes).some(function (key) {
	      return NativeTypes[key] === itemType;
	    });
	  };
	
	  HTML5Backend.prototype.beginDragNativeItem = function beginDragNativeItem(type) {
	    this.clearCurrentDragSourceNode();
	
	    var SourceType = _NativeDragSources.createNativeDragSource(type);
	    this.currentNativeSource = new SourceType();
	    this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
	    this.actions.beginDrag([this.currentNativeHandle]);
	
	    // If mousemove fires, the drag is over but browser failed to tell us.
	    window.addEventListener('mousemove', this.endDragNativeItem, true);
	  };
	
	  HTML5Backend.prototype.endDragNativeItem = function endDragNativeItem() {
	    if (!this.isDraggingNativeItem()) {
	      return;
	    }
	
	    window.removeEventListener('mousemove', this.endDragNativeItem, true);
	
	    this.actions.endDrag();
	    this.registry.removeSource(this.currentNativeHandle);
	    this.currentNativeHandle = null;
	    this.currentNativeSource = null;
	  };
	
	  HTML5Backend.prototype.endDragIfSourceWasRemovedFromDOM = function endDragIfSourceWasRemovedFromDOM() {
	    var node = this.currentDragSourceNode;
	    if (document.body.contains(node)) {
	      return;
	    }
	
	    if (this.clearCurrentDragSourceNode()) {
	      this.actions.endDrag();
	    }
	  };
	
	  HTML5Backend.prototype.setCurrentDragSourceNode = function setCurrentDragSourceNode(node) {
	    this.clearCurrentDragSourceNode();
	    this.currentDragSourceNode = node;
	    this.currentDragSourceNodeOffset = _OffsetUtils.getNodeClientOffset(node);
	    this.currentDragSourceNodeOffsetChanged = false;
	
	    // Receiving a mouse event in the middle of a dragging operation
	    // means it has ended and the drag source node disappeared from DOM,
	    // so the browser didn't dispatch the dragend event.
	    window.addEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
	  };
	
	  HTML5Backend.prototype.clearCurrentDragSourceNode = function clearCurrentDragSourceNode() {
	    if (this.currentDragSourceNode) {
	      this.currentDragSourceNode = null;
	      this.currentDragSourceNodeOffset = null;
	      this.currentDragSourceNodeOffsetChanged = false;
	      window.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
	      return true;
	    }
	
	    return false;
	  };
	
	  HTML5Backend.prototype.checkIfCurrentDragSourceRectChanged = function checkIfCurrentDragSourceRectChanged() {
	    var node = this.currentDragSourceNode;
	    if (!node) {
	      return false;
	    }
	
	    if (this.currentDragSourceNodeOffsetChanged) {
	      return true;
	    }
	
	    this.currentDragSourceNodeOffsetChanged = !_shallowEqual2['default'](_OffsetUtils.getNodeClientOffset(node), this.currentDragSourceNodeOffset);
	
	    return this.currentDragSourceNodeOffsetChanged;
	  };
	
	  HTML5Backend.prototype.handleTopDragStartCapture = function handleTopDragStartCapture() {
	    this.clearCurrentDragSourceNode();
	    this.dragStartSourceIds = [];
	  };
	
	  HTML5Backend.prototype.handleDragStart = function handleDragStart(e, sourceId) {
	    this.dragStartSourceIds.unshift(sourceId);
	  };
	
	  HTML5Backend.prototype.handleTopDragStart = function handleTopDragStart(e) {
	    var _this4 = this;
	
	    var dragStartSourceIds = this.dragStartSourceIds;
	
	    this.dragStartSourceIds = null;
	
	    var clientOffset = _OffsetUtils.getEventClientOffset(e);
	
	    // Don't publish the source just yet (see why below)
	    this.actions.beginDrag(dragStartSourceIds, {
	      publishSource: false,
	      getSourceClientOffset: this.getSourceClientOffset,
	      clientOffset: clientOffset
	    });
	
	    var dataTransfer = e.dataTransfer;
	
	    var nativeType = _NativeDragSources.matchNativeItemType(dataTransfer);
	
	    if (this.monitor.isDragging()) {
	      if (typeof dataTransfer.setDragImage === 'function') {
	        // Use custom drag image if user specifies it.
	        // If child drag source refuses drag but parent agrees,
	        // use parent's node as drag image. Neither works in IE though.
	        var sourceId = this.monitor.getSourceId();
	        var sourceNode = this.sourceNodes[sourceId];
	        var dragPreview = this.sourcePreviewNodes[sourceId] || sourceNode;
	
	        var _getCurrentSourcePreviewNodeOptions = this.getCurrentSourcePreviewNodeOptions();
	
	        var anchorX = _getCurrentSourcePreviewNodeOptions.anchorX;
	        var anchorY = _getCurrentSourcePreviewNodeOptions.anchorY;
	
	        var anchorPoint = { anchorX: anchorX, anchorY: anchorY };
	        var dragPreviewOffset = _OffsetUtils.getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint);
	        dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
	      }
	
	      try {
	        // Firefox won't drag without setting data
	        dataTransfer.setData('application/json', {});
	      } catch (err) {}
	      // IE doesn't support MIME types in setData
	
	      // Store drag source node so we can check whether
	      // it is removed from DOM and trigger endDrag manually.
	      this.setCurrentDragSourceNode(e.target);
	
	      // Now we are ready to publish the drag source.. or are we not?
	
	      var _getCurrentSourcePreviewNodeOptions2 = this.getCurrentSourcePreviewNodeOptions();
	
	      var captureDraggingState = _getCurrentSourcePreviewNodeOptions2.captureDraggingState;
	
	      if (!captureDraggingState) {
	        // Usually we want to publish it in the next tick so that browser
	        // is able to screenshot the current (not yet dragging) state.
	        //
	        // It also neatly avoids a situation where render() returns null
	        // in the same tick for the source element, and browser freaks out.
	        setTimeout(function () {
	          return _this4.actions.publishDragSource();
	        });
	      } else {
	        // In some cases the user may want to override this behavior, e.g.
	        // to work around IE not supporting custom drag previews.
	        //
	        // When using a custom drag layer, the only way to prevent
	        // the default drag preview from drawing in IE is to screenshot
	        // the dragging state in which the node itself has zero opacity
	        // and height. In this case, though, returning null from render()
	        // will abruptly end the dragging, which is not obvious.
	        //
	        // This is the reason such behavior is strictly opt-in.
	        this.actions.publishDragSource();
	      }
	    } else if (nativeType) {
	      // A native item (such as URL) dragged from inside the document
	      this.beginDragNativeItem(nativeType);
	    } else if (!dataTransfer.types && (!e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
	      // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
	      // Just let it drag. It's a native type (URL or text) and will be picked up in dragenter handler.
	      return;
	    } else {
	      // If by this time no drag source reacted, tell browser not to drag.
	      e.preventDefault();
	    }
	  };
	
	  HTML5Backend.prototype.handleTopDragEndCapture = function handleTopDragEndCapture() {
	    if (this.clearCurrentDragSourceNode()) {
	      // Firefox can dispatch this event in an infinite loop
	      // if dragend handler does something like showing an alert.
	      // Only proceed if we have not handled it already.
	      this.actions.endDrag();
	    }
	  };
	
	  HTML5Backend.prototype.handleTopDragEnterCapture = function handleTopDragEnterCapture(e) {
	    this.dragEnterTargetIds = [];
	
	    var isFirstEnter = this.enterLeaveCounter.enter(e.target);
	    if (!isFirstEnter || this.monitor.isDragging()) {
	      return;
	    }
	
	    var dataTransfer = e.dataTransfer;
	
	    var nativeType = _NativeDragSources.matchNativeItemType(dataTransfer);
	
	    if (nativeType) {
	      // A native item (such as file or URL) dragged from outside the document
	      this.beginDragNativeItem(nativeType);
	    }
	  };
	
	  HTML5Backend.prototype.handleDragEnter = function handleDragEnter(e, targetId) {
	    this.dragEnterTargetIds.unshift(targetId);
	  };
	
	  HTML5Backend.prototype.handleTopDragEnter = function handleTopDragEnter(e) {
	    var _this5 = this;
	
	    var dragEnterTargetIds = this.dragEnterTargetIds;
	
	    this.dragEnterTargetIds = [];
	
	    if (!this.monitor.isDragging()) {
	      // This is probably a native item type we don't understand.
	      return;
	    }
	
	    if (!_BrowserDetector.isFirefox()) {
	      // Don't emit hover in `dragenter` on Firefox due to an edge case.
	      // If the target changes position as the result of `dragenter`, Firefox
	      // will still happily dispatch `dragover` despite target being no longer
	      // there. The easy solution is to only fire `hover` in `dragover` on FF.
	      this.actions.hover(dragEnterTargetIds, {
	        clientOffset: _OffsetUtils.getEventClientOffset(e)
	      });
	    }
	
	    var canDrop = dragEnterTargetIds.some(function (targetId) {
	      return _this5.monitor.canDropOnTarget(targetId);
	    });
	
	    if (canDrop) {
	      // IE requires this to fire dragover events
	      e.preventDefault();
	      e.dataTransfer.dropEffect = this.getCurrentDropEffect();
	    }
	  };
	
	  HTML5Backend.prototype.handleTopDragOverCapture = function handleTopDragOverCapture() {
	    this.dragOverTargetIds = [];
	  };
	
	  HTML5Backend.prototype.handleDragOver = function handleDragOver(e, targetId) {
	    this.dragOverTargetIds.unshift(targetId);
	  };
	
	  HTML5Backend.prototype.handleTopDragOver = function handleTopDragOver(e) {
	    var _this6 = this;
	
	    var dragOverTargetIds = this.dragOverTargetIds;
	
	    this.dragOverTargetIds = [];
	
	    if (!this.monitor.isDragging()) {
	      // This is probably a native item type we don't understand.
	      // Prevent default "drop and blow away the whole document" action.
	      e.preventDefault();
	      e.dataTransfer.dropEffect = 'none';
	      return;
	    }
	
	    this.actions.hover(dragOverTargetIds, {
	      clientOffset: _OffsetUtils.getEventClientOffset(e)
	    });
	
	    var canDrop = dragOverTargetIds.some(function (targetId) {
	      return _this6.monitor.canDropOnTarget(targetId);
	    });
	
	    if (canDrop) {
	      // Show user-specified drop effect.
	      e.preventDefault();
	      e.dataTransfer.dropEffect = this.getCurrentDropEffect();
	    } else if (this.isDraggingNativeItem()) {
	      // Don't show a nice cursor but still prevent default
	      // "drop and blow away the whole document" action.
	      e.preventDefault();
	      e.dataTransfer.dropEffect = 'none';
	    } else if (this.checkIfCurrentDragSourceRectChanged()) {
	      // Prevent animating to incorrect position.
	      // Drop effect must be other than 'none' to prevent animation.
	      e.preventDefault();
	      e.dataTransfer.dropEffect = 'move';
	    }
	  };
	
	  HTML5Backend.prototype.handleTopDragLeaveCapture = function handleTopDragLeaveCapture(e) {
	    if (this.isDraggingNativeItem()) {
	      e.preventDefault();
	    }
	
	    var isLastLeave = this.enterLeaveCounter.leave(e.target);
	    if (!isLastLeave) {
	      return;
	    }
	
	    if (this.isDraggingNativeItem()) {
	      this.endDragNativeItem();
	    }
	  };
	
	  HTML5Backend.prototype.handleTopDropCapture = function handleTopDropCapture(e) {
	    this.dropTargetIds = [];
	    e.preventDefault();
	
	    if (this.isDraggingNativeItem()) {
	      this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer);
	    }
	
	    this.enterLeaveCounter.reset();
	  };
	
	  HTML5Backend.prototype.handleDrop = function handleDrop(e, targetId) {
	    this.dropTargetIds.unshift(targetId);
	  };
	
	  HTML5Backend.prototype.handleTopDrop = function handleTopDrop(e) {
	    var dropTargetIds = this.dropTargetIds;
	
	    this.dropTargetIds = [];
	
	    this.actions.hover(dropTargetIds, {
	      clientOffset: _OffsetUtils.getEventClientOffset(e)
	    });
	    this.actions.drop();
	
	    if (this.isDraggingNativeItem()) {
	      this.endDragNativeItem();
	    } else {
	      this.endDragIfSourceWasRemovedFromDOM();
	    }
	  };
	
	  HTML5Backend.prototype.handleSelectStart = function handleSelectStart(e) {
	    // Prevent selection on IE
	    // and instead ask it to consider dragging.
	    if (typeof e.target.dragDrop === 'function') {
	      e.preventDefault();
	      e.target.dragDrop();
	    }
	  };
	
	  return HTML5Backend;
	})();
	
	exports['default'] = HTML5Backend;
	module.exports = exports['default'];

/***/ },
/* 356 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MonotonicInterpolant = (function () {
	  function MonotonicInterpolant(xs, ys) {
	    _classCallCheck(this, MonotonicInterpolant);
	
	    var length = xs.length;
	
	    // Rearrange xs and ys so that xs is sorted
	    var indexes = [];
	    for (var i = 0; i < length; i++) {
	      indexes.push(i);
	    }
	    indexes.sort(function (a, b) {
	      return xs[a] < xs[b] ? -1 : 1;
	    });
	
	    // Get consecutive differences and slopes
	    var dys = [];
	    var dxs = [];
	    var ms = [];
	    var dx = undefined;
	    var dy = undefined;
	    for (var i = 0; i < length - 1; i++) {
	      dx = xs[i + 1] - xs[i];
	      dy = ys[i + 1] - ys[i];
	      dxs.push(dx);
	      dys.push(dy);
	      ms.push(dy / dx);
	    }
	
	    // Get degree-1 coefficients
	    var c1s = [ms[0]];
	    for (var i = 0; i < dxs.length - 1; i++) {
	      var _m = ms[i];
	      var mNext = ms[i + 1];
	      if (_m * mNext <= 0) {
	        c1s.push(0);
	      } else {
	        dx = dxs[i];
	        var dxNext = dxs[i + 1];
	        var common = dx + dxNext;
	        c1s.push(3 * common / ((common + dxNext) / _m + (common + dx) / mNext));
	      }
	    }
	    c1s.push(ms[ms.length - 1]);
	
	    // Get degree-2 and degree-3 coefficients
	    var c2s = [];
	    var c3s = [];
	    var m = undefined;
	    for (var i = 0; i < c1s.length - 1; i++) {
	      m = ms[i];
	      var c1 = c1s[i];
	      var invDx = 1 / dxs[i];
	      var common = c1 + c1s[i + 1] - m - m;
	      c2s.push((m - c1 - common) * invDx);
	      c3s.push(common * invDx * invDx);
	    }
	
	    this.xs = xs;
	    this.ys = ys;
	    this.c1s = c1s;
	    this.c2s = c2s;
	    this.c3s = c3s;
	  }
	
	  MonotonicInterpolant.prototype.interpolate = function interpolate(x) {
	    var xs = this.xs;
	    var ys = this.ys;
	    var c1s = this.c1s;
	    var c2s = this.c2s;
	    var c3s = this.c3s;
	
	    // The rightmost point in the dataset should give an exact result
	    var i = xs.length - 1;
	    if (x === xs[i]) {
	      return ys[i];
	    }
	
	    // Search for the interval x is in, returning the corresponding y if x is one of the original xs
	    var low = 0;
	    var high = c3s.length - 1;
	    var mid = undefined;
	    while (low <= high) {
	      mid = Math.floor(0.5 * (low + high));
	      var xHere = xs[mid];
	      if (xHere < x) {
	        low = mid + 1;
	      } else if (xHere > x) {
	        high = mid - 1;
	      } else {
	        return ys[mid];
	      }
	    }
	    i = Math.max(0, high);
	
	    // Interpolate
	    var diff = x - xs[i];
	    var diffSq = diff * diff;
	    return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
	  };
	
	  return MonotonicInterpolant;
	})();
	
	exports["default"] = MonotonicInterpolant;
	module.exports = exports["default"];

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _nativeTypesConfig;
	
	exports.createNativeDragSource = createNativeDragSource;
	exports.matchNativeItemType = matchNativeItemType;
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _NativeTypes = __webpack_require__(106);
	
	var NativeTypes = _interopRequireWildcard(_NativeTypes);
	
	function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
	  var result = typesToTry.reduce(function (resultSoFar, typeToTry) {
	    return resultSoFar || dataTransfer.getData(typeToTry);
	  }, null);
	
	  return result != null ? // eslint-disable-line eqeqeq
	  result : defaultValue;
	}
	
	var nativeTypesConfig = (_nativeTypesConfig = {}, _defineProperty(_nativeTypesConfig, NativeTypes.FILE, {
	  exposeProperty: 'files',
	  matchesTypes: ['Files'],
	  getData: function getData(dataTransfer) {
	    return Array.prototype.slice.call(dataTransfer.files);
	  }
	}), _defineProperty(_nativeTypesConfig, NativeTypes.URL, {
	  exposeProperty: 'urls',
	  matchesTypes: ['Url', 'text/uri-list'],
	  getData: function getData(dataTransfer, matchesTypes) {
	    return getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\n');
	  }
	}), _defineProperty(_nativeTypesConfig, NativeTypes.TEXT, {
	  exposeProperty: 'text',
	  matchesTypes: ['Text', 'text/plain'],
	  getData: function getData(dataTransfer, matchesTypes) {
	    return getDataFromDataTransfer(dataTransfer, matchesTypes, '');
	  }
	}), _nativeTypesConfig);
	
	function createNativeDragSource(type) {
	  var _nativeTypesConfig$type = nativeTypesConfig[type];
	  var exposeProperty = _nativeTypesConfig$type.exposeProperty;
	  var matchesTypes = _nativeTypesConfig$type.matchesTypes;
	  var getData = _nativeTypesConfig$type.getData;
	
	  return (function () {
	    function NativeDragSource() {
	      _classCallCheck(this, NativeDragSource);
	
	      this.item = Object.defineProperties({}, _defineProperty({}, exposeProperty, {
	        get: function get() {
	          console.warn( // eslint-disable-line no-console
	          'Browser doesn\'t allow reading "' + exposeProperty + '" until the drop event.');
	          return null;
	        },
	        configurable: true,
	        enumerable: true
	      }));
	    }
	
	    NativeDragSource.prototype.mutateItemByReadingDataTransfer = function mutateItemByReadingDataTransfer(dataTransfer) {
	      delete this.item[exposeProperty];
	      this.item[exposeProperty] = getData(dataTransfer, matchesTypes);
	    };
	
	    NativeDragSource.prototype.canDrag = function canDrag() {
	      return true;
	    };
	
	    NativeDragSource.prototype.beginDrag = function beginDrag() {
	      return this.item;
	    };
	
	    NativeDragSource.prototype.isDragging = function isDragging(monitor, handle) {
	      return handle === monitor.getSourceId();
	    };
	
	    NativeDragSource.prototype.endDrag = function endDrag() {};
	
	    return NativeDragSource;
	  })();
	}
	
	function matchNativeItemType(dataTransfer) {
	  var dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
	
	  return Object.keys(nativeTypesConfig).filter(function (nativeItemType) {
	    var matchesTypes = nativeTypesConfig[nativeItemType].matchesTypes;
	
	    return matchesTypes.some(function (t) {
	      return dataTransferTypes.indexOf(t) > -1;
	    });
	  })[0] || null;
	}

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.getNodeClientOffset = getNodeClientOffset;
	exports.getEventClientOffset = getEventClientOffset;
	exports.getDragPreviewOffset = getDragPreviewOffset;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _BrowserDetector = __webpack_require__(172);
	
	var _MonotonicInterpolant = __webpack_require__(356);
	
	var _MonotonicInterpolant2 = _interopRequireDefault(_MonotonicInterpolant);
	
	var ELEMENT_NODE = 1;
	
	function getNodeClientOffset(node) {
	  var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
	
	  if (!el) {
	    return null;
	  }
	
	  var _el$getBoundingClientRect = el.getBoundingClientRect();
	
	  var top = _el$getBoundingClientRect.top;
	  var left = _el$getBoundingClientRect.left;
	
	  return { x: left, y: top };
	}
	
	function getEventClientOffset(e) {
	  return {
	    x: e.clientX,
	    y: e.clientY
	  };
	}
	
	function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint) {
	  // The browsers will use the image intrinsic size under different conditions.
	  // Firefox only cares if it's an image, but WebKit also wants it to be detached.
	  var isImage = dragPreview.nodeName === 'IMG' && (_BrowserDetector.isFirefox() || !document.documentElement.contains(dragPreview));
	  var dragPreviewNode = isImage ? sourceNode : dragPreview;
	
	  var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
	  var offsetFromDragPreview = {
	    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
	    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
	  };
	
	  var sourceWidth = sourceNode.offsetWidth;
	  var sourceHeight = sourceNode.offsetHeight;
	  var anchorX = anchorPoint.anchorX;
	  var anchorY = anchorPoint.anchorY;
	
	  var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
	  var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
	
	  // Work around @2x coordinate discrepancies in browsers
	  if (_BrowserDetector.isSafari() && isImage) {
	    dragPreviewHeight /= window.devicePixelRatio;
	    dragPreviewWidth /= window.devicePixelRatio;
	  } else if (_BrowserDetector.isFirefox() && !isImage) {
	    dragPreviewHeight *= window.devicePixelRatio;
	    dragPreviewWidth *= window.devicePixelRatio;
	  }
	
	  // Interpolate coordinates depending on anchor point
	  // If you know a simpler way to do this, let me know
	  var interpolantX = new _MonotonicInterpolant2['default']([0, 0.5, 1], [
	  // Dock to the left
	  offsetFromDragPreview.x,
	  // Align at the center
	  offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
	  // Dock to the right
	  offsetFromDragPreview.x + dragPreviewWidth - sourceWidth]);
	  var interpolantY = new _MonotonicInterpolant2['default']([0, 0.5, 1], [
	  // Dock to the top
	  offsetFromDragPreview.y,
	  // Align at the center
	  offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
	  // Dock to the bottom
	  offsetFromDragPreview.y + dragPreviewHeight - sourceHeight]);
	  var x = interpolantX.interpolate(anchorX);
	  var y = interpolantY.interpolate(anchorY);
	
	  // Work around Safari 8 positioning bug
	  if (_BrowserDetector.isSafari() && isImage) {
	    // We'll have to wait for @3x to see if this is entirely correct
	    y += (window.devicePixelRatio - 1) * dragPreviewHeight;
	  }
	
	  return { x: x, y: y };
	}

/***/ },
/* 359 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = getEmptyImage;
	var emptyImage = undefined;
	
	function getEmptyImage() {
	  if (!emptyImage) {
	    emptyImage = new Image();
	    emptyImage.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
	  }
	
	  return emptyImage;
	}
	
	module.exports = exports['default'];

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createHTML5Backend;
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _HTML5Backend = __webpack_require__(355);
	
	var _HTML5Backend2 = _interopRequireDefault(_HTML5Backend);
	
	var _getEmptyImage = __webpack_require__(359);
	
	var _getEmptyImage2 = _interopRequireDefault(_getEmptyImage);
	
	var _NativeTypes = __webpack_require__(106);
	
	var NativeTypes = _interopRequireWildcard(_NativeTypes);
	
	exports.NativeTypes = NativeTypes;
	exports.getEmptyImage = _getEmptyImage2['default'];
	
	function createHTML5Backend(manager) {
	  return new _HTML5Backend2['default'](manager);
	}

/***/ },
/* 361 */
107,
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slice = Array.prototype.slice;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	exports['default'] = DragDropContext;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _dndCore = __webpack_require__(285);
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _utilsCheckDecoratorArguments = __webpack_require__(70);
	
	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);
	
	function DragDropContext(backendOrModule) {
	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DragDropContext', 'backend'].concat(_slice.call(arguments)));
	
	  // Auto-detect ES6 default export for people still using ES5
	  var backend = undefined;
	  if (typeof backendOrModule === 'object' && typeof backendOrModule['default'] === 'function') {
	    backend = backendOrModule['default'];
	  } else {
	    backend = backendOrModule;
	  }
	
	  _invariant2['default'](typeof backend === 'function', 'Expected the backend to be a function or an ES6 module exporting a default function. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-drop-context.html');
	
	  var childContext = {
	    dragDropManager: new _dndCore.DragDropManager(backend)
	  };
	
	  return function decorateContext(DecoratedComponent) {
	    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';
	
	    return (function (_Component) {
	      _inherits(DragDropContextContainer, _Component);
	
	      function DragDropContextContainer() {
	        _classCallCheck(this, DragDropContextContainer);
	
	        _Component.apply(this, arguments);
	      }
	
	      DragDropContextContainer.prototype.getDecoratedComponentInstance = function getDecoratedComponentInstance() {
	        return this.refs.child;
	      };
	
	      DragDropContextContainer.prototype.getManager = function getManager() {
	        return childContext.dragDropManager;
	      };
	
	      DragDropContextContainer.prototype.getChildContext = function getChildContext() {
	        return childContext;
	      };
	
	      DragDropContextContainer.prototype.render = function render() {
	        return _react2['default'].createElement(DecoratedComponent, _extends({}, this.props, {
	          ref: 'child' }));
	      };
	
	      _createClass(DragDropContextContainer, null, [{
	        key: 'DecoratedComponent',
	        value: DecoratedComponent,
	        enumerable: true
	      }, {
	        key: 'displayName',
	        value: 'DragDropContext(' + displayName + ')',
	        enumerable: true
	      }, {
	        key: 'childContextTypes',
	        value: {
	          dragDropManager: _react.PropTypes.object.isRequired
	        },
	        enumerable: true
	      }]);
	
	      return DragDropContextContainer;
	    })(_react.Component);
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slice = Array.prototype.slice;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	exports['default'] = DragLayer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsShallowEqual = __webpack_require__(107);
	
	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);
	
	var _utilsShallowEqualScalar = __webpack_require__(175);
	
	var _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar);
	
	var _lodashLangIsPlainObject = __webpack_require__(46);
	
	var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _utilsCheckDecoratorArguments = __webpack_require__(70);
	
	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);
	
	function DragLayer(collect) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DragLayer', 'collect[, options]'].concat(_slice.call(arguments)));
	  _invariant2['default'](typeof collect === 'function', 'Expected "collect" provided as the first argument to DragLayer ' + 'to be a function that collects props to inject into the component. ', 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-layer.html', collect);
	  _invariant2['default'](_lodashLangIsPlainObject2['default'](options), 'Expected "options" provided as the second argument to DragLayer to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-layer.html', options);
	
	  return function decorateLayer(DecoratedComponent) {
	    var _options$arePropsEqual = options.arePropsEqual;
	    var arePropsEqual = _options$arePropsEqual === undefined ? _utilsShallowEqualScalar2['default'] : _options$arePropsEqual;
	
	    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';
	
	    return (function (_Component) {
	      _inherits(DragLayerContainer, _Component);
	
	      DragLayerContainer.prototype.getDecoratedComponentInstance = function getDecoratedComponentInstance() {
	        return this.refs.child;
	      };
	
	      DragLayerContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	        return !arePropsEqual(nextProps, this.props) || !_utilsShallowEqual2['default'](nextState, this.state);
	      };
	
	      _createClass(DragLayerContainer, null, [{
	        key: 'DecoratedComponent',
	        value: DecoratedComponent,
	        enumerable: true
	      }, {
	        key: 'displayName',
	        value: 'DragLayer(' + displayName + ')',
	        enumerable: true
	      }, {
	        key: 'contextTypes',
	        value: {
	          dragDropManager: _react.PropTypes.object.isRequired
	        },
	        enumerable: true
	      }]);
	
	      function DragLayerContainer(props, context) {
	        _classCallCheck(this, DragLayerContainer);
	
	        _Component.call(this, props);
	        this.handleChange = this.handleChange.bind(this);
	
	        this.manager = context.dragDropManager;
	        _invariant2['default'](typeof this.manager === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);
	
	        this.state = this.getCurrentState();
	      }
	
	      DragLayerContainer.prototype.componentDidMount = function componentDidMount() {
	        var monitor = this.manager.getMonitor();
	        this.unsubscribe = monitor.subscribeToOffsetChange(this.handleChange);
	      };
	
	      DragLayerContainer.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.unsubscribe();
	      };
	
	      DragLayerContainer.prototype.handleChange = function handleChange() {
	        var nextState = this.getCurrentState();
	        if (!_utilsShallowEqual2['default'](nextState, this.state)) {
	          this.setState(nextState);
	        }
	      };
	
	      DragLayerContainer.prototype.getCurrentState = function getCurrentState() {
	        var monitor = this.manager.getMonitor();
	        return collect(monitor);
	      };
	
	      DragLayerContainer.prototype.render = function render() {
	        return _react2['default'].createElement(DecoratedComponent, _extends({}, this.props, this.state, {
	          ref: 'child' }));
	      };
	
	      return DragLayerContainer;
	    })(_react.Component);
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports['default'] = DragSource;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashLangIsPlainObject = __webpack_require__(46);
	
	var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);
	
	var _utilsCheckDecoratorArguments = __webpack_require__(70);
	
	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);
	
	var _decorateHandler = __webpack_require__(173);
	
	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);
	
	var _registerSource = __webpack_require__(374);
	
	var _registerSource2 = _interopRequireDefault(_registerSource);
	
	var _createSourceFactory = __webpack_require__(369);
	
	var _createSourceFactory2 = _interopRequireDefault(_createSourceFactory);
	
	var _createSourceMonitor = __webpack_require__(370);
	
	var _createSourceMonitor2 = _interopRequireDefault(_createSourceMonitor);
	
	var _createSourceConnector = __webpack_require__(368);
	
	var _createSourceConnector2 = _interopRequireDefault(_createSourceConnector);
	
	var _utilsIsValidType = __webpack_require__(174);
	
	var _utilsIsValidType2 = _interopRequireDefault(_utilsIsValidType);
	
	function DragSource(type, spec, collect) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DragSource', 'type, spec, collect[, options]'].concat(_slice.call(arguments)));
	  var getType = type;
	  if (typeof type !== 'function') {
	    _invariant2['default'](_utilsIsValidType2['default'](type), 'Expected "type" provided as the first argument to DragSource to be ' + 'a string, or a function that returns a string given the current props. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', type);
	    getType = function () {
	      return type;
	    };
	  }
	  _invariant2['default'](_lodashLangIsPlainObject2['default'](spec), 'Expected "spec" provided as the second argument to DragSource to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', spec);
	  var createSource = _createSourceFactory2['default'](spec);
	  _invariant2['default'](typeof collect === 'function', 'Expected "collect" provided as the third argument to DragSource to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', collect);
	  _invariant2['default'](_lodashLangIsPlainObject2['default'](options), 'Expected "options" provided as the fourth argument to DragSource to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', collect);
	
	  return function decorateSource(DecoratedComponent) {
	    return _decorateHandler2['default']({
	      connectBackend: function connectBackend(backend, sourceId) {
	        return backend.connectDragSource(sourceId);
	      },
	      containerDisplayName: 'DragSource',
	      createHandler: createSource,
	      registerHandler: _registerSource2['default'],
	      createMonitor: _createSourceMonitor2['default'],
	      createConnector: _createSourceConnector2['default'],
	      DecoratedComponent: DecoratedComponent,
	      getType: getType,
	      collect: collect,
	      options: options
	    });
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports['default'] = DropTarget;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashLangIsPlainObject = __webpack_require__(46);
	
	var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);
	
	var _utilsCheckDecoratorArguments = __webpack_require__(70);
	
	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);
	
	var _decorateHandler = __webpack_require__(173);
	
	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);
	
	var _registerTarget = __webpack_require__(375);
	
	var _registerTarget2 = _interopRequireDefault(_registerTarget);
	
	var _createTargetFactory = __webpack_require__(372);
	
	var _createTargetFactory2 = _interopRequireDefault(_createTargetFactory);
	
	var _createTargetMonitor = __webpack_require__(373);
	
	var _createTargetMonitor2 = _interopRequireDefault(_createTargetMonitor);
	
	var _createTargetConnector = __webpack_require__(371);
	
	var _createTargetConnector2 = _interopRequireDefault(_createTargetConnector);
	
	var _utilsIsValidType = __webpack_require__(174);
	
	var _utilsIsValidType2 = _interopRequireDefault(_utilsIsValidType);
	
	function DropTarget(type, spec, collect) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DropTarget', 'type, spec, collect[, options]'].concat(_slice.call(arguments)));
	  var getType = type;
	  if (typeof type !== 'function') {
	    _invariant2['default'](_utilsIsValidType2['default'](type, true), 'Expected "type" provided as the first argument to DropTarget to be ' + 'a string, an array of strings, or a function that returns either given ' + 'the current props. Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', type);
	    getType = function () {
	      return type;
	    };
	  }
	  _invariant2['default'](_lodashLangIsPlainObject2['default'](spec), 'Expected "spec" provided as the second argument to DropTarget to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', spec);
	  var createTarget = _createTargetFactory2['default'](spec);
	  _invariant2['default'](typeof collect === 'function', 'Expected "collect" provided as the third argument to DropTarget to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', collect);
	  _invariant2['default'](_lodashLangIsPlainObject2['default'](options), 'Expected "options" provided as the fourth argument to DropTarget to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', collect);
	
	  return function decorateTarget(DecoratedComponent) {
	    return _decorateHandler2['default']({
	      connectBackend: function connectBackend(backend, targetId) {
	        return backend.connectDropTarget(targetId);
	      },
	      containerDisplayName: 'DropTarget',
	      createHandler: createTarget,
	      registerHandler: _registerTarget2['default'],
	      createMonitor: _createTargetMonitor2['default'],
	      createConnector: _createTargetConnector2['default'],
	      DecoratedComponent: DecoratedComponent,
	      getType: getType,
	      collect: collect,
	      options: options
	    });
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = bindConnector;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _bindConnectorMethod2 = __webpack_require__(367);
	
	var _bindConnectorMethod3 = _interopRequireDefault(_bindConnectorMethod2);
	
	var _disposables = __webpack_require__(97);
	
	function bindConnector(connector, handlerId) {
	  var compositeDisposable = new _disposables.CompositeDisposable();
	  var handlerConnector = {};
	
	  Object.keys(connector).forEach(function (key) {
	    var _bindConnectorMethod = _bindConnectorMethod3['default'](handlerId, connector[key]);
	
	    var disposable = _bindConnectorMethod.disposable;
	    var ref = _bindConnectorMethod.ref;
	
	    compositeDisposable.add(disposable);
	    handlerConnector[key] = function () {
	      return ref;
	    };
	  });
	
	  return {
	    disposable: compositeDisposable,
	    handlerConnector: handlerConnector
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = bindConnectorMethod;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsShallowEqual = __webpack_require__(107);
	
	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);
	
	var _utilsCloneWithRef = __webpack_require__(376);
	
	var _utilsCloneWithRef2 = _interopRequireDefault(_utilsCloneWithRef);
	
	var _disposables = __webpack_require__(97);
	
	var _react = __webpack_require__(1);
	
	function areOptionsEqual(currentOptions, nextOptions) {
	  if (currentOptions === nextOptions) {
	    return true;
	  }
	
	  return currentOptions !== null && nextOptions !== null && _utilsShallowEqual2['default'](currentOptions, nextOptions);
	}
	
	function bindConnectorMethod(handlerId, connect) {
	  var disposable = new _disposables.SerialDisposable();
	
	  var currentNode = null;
	  var currentOptions = null;
	
	  function ref() {
	    var nextWhatever = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	    var nextOptions = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	    // If passed a ReactElement, clone it and attach this function as a ref.
	    // This helps us achieve a neat API where user doesn't even know that refs
	    // are being used under the hood.
	    if (_react.isValidElement(nextWhatever)) {
	      // Custom components can no longer be wrapped directly in React DnD 2.0
	      // so that we don't need to depend on findDOMNode() from react-dom.
	      if (typeof nextWhatever.type !== 'string') {
	        var displayName = nextWhatever.type.displayName || nextWhatever.type.name || 'the component';
	        throw new Error('Only native element nodes can now be passed to ' + connect.name + '(). ' + ('You can either wrap ' + displayName + ' into a <div>, or turn it into a ') + 'drag source or a drop target itself.');
	      }
	
	      var nextElement = nextWhatever;
	      return _utilsCloneWithRef2['default'](nextElement, function (inst) {
	        return ref(inst, nextOptions);
	      });
	    }
	
	    // At this point we can only receive DOM nodes.
	    var nextNode = nextWhatever;
	
	    // If nothing changed, bail out of re-connecting the node to the backend.
	    if (nextNode === currentNode && areOptionsEqual(currentOptions, nextOptions)) {
	      return;
	    }
	
	    currentNode = nextNode;
	    currentOptions = nextOptions;
	
	    if (!nextNode) {
	      disposable.setDisposable(null);
	      return;
	    }
	
	    // Re-connect the node to the backend.
	    var currentDispose = connect(handlerId, nextNode, nextOptions);
	    disposable.setDisposable(new _disposables.Disposable(currentDispose));
	  }
	
	  return {
	    ref: ref,
	    disposable: disposable
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 368 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = createSourceConnector;
	
	function createSourceConnector(backend) {
	  return {
	    dragSource: function connectDragSource() {
	      return backend.connectDragSource.apply(backend, arguments);
	    },
	    dragPreview: function connectDragPreview() {
	      return backend.connectDragPreview.apply(backend, arguments);
	    }
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createSourceFactory;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashLangIsPlainObject = __webpack_require__(46);
	
	var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);
	
	var ALLOWED_SPEC_METHODS = ['canDrag', 'beginDrag', 'canDrag', 'isDragging', 'endDrag'];
	var REQUIRED_SPEC_METHODS = ['beginDrag'];
	
	function createSourceFactory(spec) {
	  Object.keys(spec).forEach(function (key) {
	    _invariant2['default'](ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', ALLOWED_SPEC_METHODS.join(', '), key);
	    _invariant2['default'](typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
	  });
	  REQUIRED_SPEC_METHODS.forEach(function (key) {
	    _invariant2['default'](typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
	  });
	
	  var Source = (function () {
	    function Source(monitor) {
	      _classCallCheck(this, Source);
	
	      this.monitor = monitor;
	      this.props = null;
	      this.component = null;
	    }
	
	    Source.prototype.receiveProps = function receiveProps(props) {
	      this.props = props;
	    };
	
	    Source.prototype.receiveComponent = function receiveComponent(component) {
	      this.component = component;
	    };
	
	    Source.prototype.canDrag = function canDrag() {
	      if (!spec.canDrag) {
	        return true;
	      }
	
	      return spec.canDrag(this.props, this.monitor);
	    };
	
	    Source.prototype.isDragging = function isDragging(globalMonitor, sourceId) {
	      if (!spec.isDragging) {
	        return sourceId === globalMonitor.getSourceId();
	      }
	
	      return spec.isDragging(this.props, this.monitor);
	    };
	
	    Source.prototype.beginDrag = function beginDrag() {
	      var item = spec.beginDrag(this.props, this.monitor, this.component);
	      if (true) {
	        _invariant2['default'](_lodashLangIsPlainObject2['default'](item), 'beginDrag() must return a plain object that represents the dragged item. ' + 'Instead received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', item);
	      }
	      return item;
	    };
	
	    Source.prototype.endDrag = function endDrag() {
	      if (!spec.endDrag) {
	        return;
	      }
	
	      spec.endDrag(this.props, this.monitor, this.component);
	    };
	
	    return Source;
	  })();
	
	  return function createSource(monitor) {
	    return new Source(monitor);
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createSourceMonitor;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var isCallingCanDrag = false;
	var isCallingIsDragging = false;
	
	var SourceMonitor = (function () {
	  function SourceMonitor(manager) {
	    _classCallCheck(this, SourceMonitor);
	
	    this.internalMonitor = manager.getMonitor();
	  }
	
	  SourceMonitor.prototype.receiveHandlerId = function receiveHandlerId(sourceId) {
	    this.sourceId = sourceId;
	  };
	
	  SourceMonitor.prototype.canDrag = function canDrag() {
	    _invariant2['default'](!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source-monitor.html');
	
	    try {
	      isCallingCanDrag = true;
	      return this.internalMonitor.canDragSource(this.sourceId);
	    } finally {
	      isCallingCanDrag = false;
	    }
	  };
	
	  SourceMonitor.prototype.isDragging = function isDragging() {
	    _invariant2['default'](!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source-monitor.html');
	
	    try {
	      isCallingIsDragging = true;
	      return this.internalMonitor.isDraggingSource(this.sourceId);
	    } finally {
	      isCallingIsDragging = false;
	    }
	  };
	
	  SourceMonitor.prototype.getItemType = function getItemType() {
	    return this.internalMonitor.getItemType();
	  };
	
	  SourceMonitor.prototype.getItem = function getItem() {
	    return this.internalMonitor.getItem();
	  };
	
	  SourceMonitor.prototype.getDropResult = function getDropResult() {
	    return this.internalMonitor.getDropResult();
	  };
	
	  SourceMonitor.prototype.didDrop = function didDrop() {
	    return this.internalMonitor.didDrop();
	  };
	
	  SourceMonitor.prototype.getInitialClientOffset = function getInitialClientOffset() {
	    return this.internalMonitor.getInitialClientOffset();
	  };
	
	  SourceMonitor.prototype.getInitialSourceClientOffset = function getInitialSourceClientOffset() {
	    return this.internalMonitor.getInitialSourceClientOffset();
	  };
	
	  SourceMonitor.prototype.getSourceClientOffset = function getSourceClientOffset() {
	    return this.internalMonitor.getSourceClientOffset();
	  };
	
	  SourceMonitor.prototype.getClientOffset = function getClientOffset() {
	    return this.internalMonitor.getClientOffset();
	  };
	
	  SourceMonitor.prototype.getDifferenceFromInitialOffset = function getDifferenceFromInitialOffset() {
	    return this.internalMonitor.getDifferenceFromInitialOffset();
	  };
	
	  return SourceMonitor;
	})();
	
	function createSourceMonitor(manager) {
	  return new SourceMonitor(manager);
	}
	
	module.exports = exports['default'];

/***/ },
/* 371 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = createTargetConnector;
	
	function createTargetConnector(backend) {
	  return {
	    dropTarget: function connectDropTarget() {
	      return backend.connectDropTarget.apply(backend, arguments);
	    }
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createTargetFactory;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _lodashLangIsPlainObject = __webpack_require__(46);
	
	var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);
	
	var ALLOWED_SPEC_METHODS = ['canDrop', 'hover', 'drop'];
	
	function createTargetFactory(spec) {
	  Object.keys(spec).forEach(function (key) {
	    _invariant2['default'](ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', ALLOWED_SPEC_METHODS.join(', '), key);
	    _invariant2['default'](typeof spec[key] === 'function', 'Expected %s in the drop target specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', key, key, spec[key]);
	  });
	
	  var Target = (function () {
	    function Target(monitor) {
	      _classCallCheck(this, Target);
	
	      this.monitor = monitor;
	      this.props = null;
	      this.component = null;
	    }
	
	    Target.prototype.receiveProps = function receiveProps(props) {
	      this.props = props;
	    };
	
	    Target.prototype.receiveMonitor = function receiveMonitor(monitor) {
	      this.monitor = monitor;
	    };
	
	    Target.prototype.receiveComponent = function receiveComponent(component) {
	      this.component = component;
	    };
	
	    Target.prototype.canDrop = function canDrop() {
	      if (!spec.canDrop) {
	        return true;
	      }
	
	      return spec.canDrop(this.props, this.monitor);
	    };
	
	    Target.prototype.hover = function hover() {
	      if (!spec.hover) {
	        return;
	      }
	
	      spec.hover(this.props, this.monitor, this.component);
	    };
	
	    Target.prototype.drop = function drop() {
	      if (!spec.drop) {
	        return;
	      }
	
	      var dropResult = spec.drop(this.props, this.monitor, this.component);
	      if (true) {
	        _invariant2['default'](typeof dropResult === 'undefined' || _lodashLangIsPlainObject2['default'](dropResult), 'drop() must either return undefined, or an object that represents the drop result. ' + 'Instead received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', dropResult);
	      }
	      return dropResult;
	    };
	
	    return Target;
	  })();
	
	  return function createTarget(monitor) {
	    return new Target(monitor);
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createTargetMonitor;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var isCallingCanDrop = false;
	
	var TargetMonitor = (function () {
	  function TargetMonitor(manager) {
	    _classCallCheck(this, TargetMonitor);
	
	    this.internalMonitor = manager.getMonitor();
	  }
	
	  TargetMonitor.prototype.receiveHandlerId = function receiveHandlerId(targetId) {
	    this.targetId = targetId;
	  };
	
	  TargetMonitor.prototype.canDrop = function canDrop() {
	    _invariant2['default'](!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target-monitor.html');
	
	    try {
	      isCallingCanDrop = true;
	      return this.internalMonitor.canDropOnTarget(this.targetId);
	    } finally {
	      isCallingCanDrop = false;
	    }
	  };
	
	  TargetMonitor.prototype.isOver = function isOver(options) {
	    return this.internalMonitor.isOverTarget(this.targetId, options);
	  };
	
	  TargetMonitor.prototype.getItemType = function getItemType() {
	    return this.internalMonitor.getItemType();
	  };
	
	  TargetMonitor.prototype.getItem = function getItem() {
	    return this.internalMonitor.getItem();
	  };
	
	  TargetMonitor.prototype.getDropResult = function getDropResult() {
	    return this.internalMonitor.getDropResult();
	  };
	
	  TargetMonitor.prototype.didDrop = function didDrop() {
	    return this.internalMonitor.didDrop();
	  };
	
	  TargetMonitor.prototype.getInitialClientOffset = function getInitialClientOffset() {
	    return this.internalMonitor.getInitialClientOffset();
	  };
	
	  TargetMonitor.prototype.getInitialSourceClientOffset = function getInitialSourceClientOffset() {
	    return this.internalMonitor.getInitialSourceClientOffset();
	  };
	
	  TargetMonitor.prototype.getSourceClientOffset = function getSourceClientOffset() {
	    return this.internalMonitor.getSourceClientOffset();
	  };
	
	  TargetMonitor.prototype.getClientOffset = function getClientOffset() {
	    return this.internalMonitor.getClientOffset();
	  };
	
	  TargetMonitor.prototype.getDifferenceFromInitialOffset = function getDifferenceFromInitialOffset() {
	    return this.internalMonitor.getDifferenceFromInitialOffset();
	  };
	
	  return TargetMonitor;
	})();
	
	function createTargetMonitor(manager) {
	  return new TargetMonitor(manager);
	}
	
	module.exports = exports['default'];

/***/ },
/* 374 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = registerSource;
	
	function registerSource(type, source, manager) {
	  var registry = manager.getRegistry();
	  var sourceId = registry.addSource(type, source);
	
	  function unregisterSource() {
	    registry.removeSource(sourceId);
	  }
	
	  return {
	    handlerId: sourceId,
	    unregister: unregisterSource
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 375 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = registerTarget;
	
	function registerTarget(type, target, manager) {
	  var registry = manager.getRegistry();
	  var targetId = registry.addTarget(type, target);
	
	  function unregisterTarget() {
	    registry.removeTarget(targetId);
	  }
	
	  return {
	    handlerId: targetId,
	    unregister: unregisterTarget
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = cloneWithRef;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(5);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(1);
	
	function cloneWithRef(element, newRef) {
	  var previousRef = element.ref;
	  _invariant2['default'](typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');
	
	  return _react.cloneElement(element, {
	    ref: function ref(instance) {
	      newRef(instance);
	
	      if (previousRef) {
	        previousRef(instance);
	      }
	    }
	  });
	}
	
	module.exports = exports['default'];

/***/ },
/* 377 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = bindAutoBindMethods;
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of React source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * Original:
	 * https://github.com/facebook/react/blob/6508b1ad273a6f371e8d90ae676e5390199461b4/src/isomorphic/classic/class/ReactClass.js#L650-L713
	 */
	
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	
	  boundMethod.__reactBoundContext = component;
	  boundMethod.__reactBoundMethod = method;
	  boundMethod.__reactBoundArguments = null;
	
	  var componentName = component.constructor.displayName,
	      _bind = boundMethod.bind;
	
	  boundMethod.bind = function (newThis) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    if (newThis !== component && newThis !== null) {
	      console.warn('bind(): React component methods may only be bound to the ' + 'component instance. See ' + componentName);
	    } else if (!args.length) {
	      console.warn('bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See ' + componentName);
	      return boundMethod;
	    }
	
	    var reboundMethod = _bind.apply(boundMethod, arguments);
	    reboundMethod.__reactBoundContext = component;
	    reboundMethod.__reactBoundMethod = method;
	    reboundMethod.__reactBoundArguments = args;
	
	    return reboundMethod;
	  };
	
	  return boundMethod;
	}
	
	function bindAutoBindMethods(component) {
	  for (var autoBindKey in component.__reactAutoBindMap) {
	    if (!component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
	      return;
	    }
	
	    // Tweak: skip methods that are already bound.
	    // This is to preserve method reference in case it is used
	    // as a subscription handler that needs to be detached later.
	    if (component.hasOwnProperty(autoBindKey) && component[autoBindKey].__reactBoundContext === component) {
	      continue;
	    }
	
	    var method = component.__reactAutoBindMap[autoBindKey];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	};

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = proxyClass;
	exports.default = createClassProxy;
	
	var _createPrototypeProxy = __webpack_require__(379);
	
	var _createPrototypeProxy2 = _interopRequireDefault(_createPrototypeProxy);
	
	var _bindAutoBindMethods = __webpack_require__(377);
	
	var _bindAutoBindMethods2 = _interopRequireDefault(_bindAutoBindMethods);
	
	var _deleteUnknownAutoBindMethods = __webpack_require__(380);
	
	var _deleteUnknownAutoBindMethods2 = _interopRequireDefault(_deleteUnknownAutoBindMethods);
	
	var _supportsProtoAssignment = __webpack_require__(177);
	
	var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RESERVED_STATICS = ['length', 'name', 'arguments', 'caller', 'prototype', 'toString'];
	
	function isEqualDescriptor(a, b) {
	  if (!a && !b) {
	    return true;
	  }
	  if (!a || !b) {
	    return false;
	  }
	  for (var key in a) {
	    if (a[key] !== b[key]) {
	      return false;
	    }
	  }
	  return true;
	}
	
	function proxyClass(InitialClass) {
	  // Prevent double wrapping.
	  // Given a proxy class, return the existing proxy managing it.
	  if (Object.prototype.hasOwnProperty.call(InitialClass, '__reactPatchProxy')) {
	    return InitialClass.__reactPatchProxy;
	  }
	
	  var prototypeProxy = (0, _createPrototypeProxy2.default)();
	  var CurrentClass = undefined;
	
	  var staticDescriptors = {};
	  function wasStaticModifiedByUser(key) {
	    // Compare the descriptor with the one we previously set ourselves.
	    var currentDescriptor = Object.getOwnPropertyDescriptor(ProxyClass, key);
	    return !isEqualDescriptor(staticDescriptors[key], currentDescriptor);
	  }
	
	  var ProxyClass = undefined;
	  try {
	    // Create a proxy constructor with matching name
	    ProxyClass = new Function('getCurrentClass', 'return function ' + (InitialClass.name || 'ProxyClass') + '() {\n        return getCurrentClass().apply(this, arguments);\n      }')(function () {
	      return CurrentClass;
	    });
	  } catch (err) {
	    // Some environments may forbid dynamic evaluation
	    ProxyClass = function () {
	      return CurrentClass.apply(this, arguments);
	    };
	  }
	
	  // Point proxy constructor to the proxy prototype
	  ProxyClass.prototype = prototypeProxy.get();
	
	  // Proxy toString() to the current constructor
	  ProxyClass.toString = function toString() {
	    return CurrentClass.toString();
	  };
	
	  function update(NextClass) {
	    if (typeof NextClass !== 'function') {
	      throw new Error('Expected a constructor.');
	    }
	
	    // Prevent proxy cycles
	    if (Object.prototype.hasOwnProperty.call(NextClass, '__reactPatchProxy')) {
	      return update(NextClass.__reactPatchProxy.__getCurrent());
	    }
	
	    // Save the next constructor so we call it
	    CurrentClass = NextClass;
	
	    // Update the prototype proxy with new methods
	    var mountedInstances = prototypeProxy.update(NextClass.prototype);
	
	    // Set up the constructor property so accessing the statics work
	    ProxyClass.prototype.constructor = ProxyClass;
	
	    // Set up the same prototype for inherited statics
	    ProxyClass.__proto__ = NextClass.__proto__;
	
	    // Copy static methods and properties
	    Object.getOwnPropertyNames(NextClass).forEach(function (key) {
	      if (RESERVED_STATICS.indexOf(key) > -1) {
	        return;
	      }
	
	      var staticDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextClass, key), {
	        configurable: true
	      });
	
	      // Copy static unless user has redefined it at runtime
	      if (!wasStaticModifiedByUser(key)) {
	        Object.defineProperty(ProxyClass, key, staticDescriptor);
	        staticDescriptors[key] = staticDescriptor;
	      }
	    });
	
	    // Remove old static methods and properties
	    Object.getOwnPropertyNames(ProxyClass).forEach(function (key) {
	      if (RESERVED_STATICS.indexOf(key) > -1) {
	        return;
	      }
	
	      // Skip statics that exist on the next class
	      if (NextClass.hasOwnProperty(key)) {
	        return;
	      }
	
	      // Skip non-configurable statics
	      var descriptor = Object.getOwnPropertyDescriptor(ProxyClass, key);
	      if (descriptor && !descriptor.configurable) {
	        return;
	      }
	
	      // Delete static unless user has redefined it at runtime
	      if (!wasStaticModifiedByUser(key)) {
	        delete ProxyClass[key];
	        delete staticDescriptors[key];
	      }
	    });
	
	    // Try to infer displayName
	    ProxyClass.displayName = NextClass.displayName || NextClass.name;
	
	    // We might have added new methods that need to be auto-bound
	    mountedInstances.forEach(_bindAutoBindMethods2.default);
	    mountedInstances.forEach(_deleteUnknownAutoBindMethods2.default);
	
	    // Let the user take care of redrawing
	    return mountedInstances;
	  };
	
	  function get() {
	    return ProxyClass;
	  }
	
	  function getCurrent() {
	    return CurrentClass;
	  }
	
	  update(InitialClass);
	
	  var proxy = { get: get, update: update };
	
	  Object.defineProperty(proxy, '__getCurrent', {
	    configurable: false,
	    writable: false,
	    enumerable: false,
	    value: getCurrent
	  });
	
	  Object.defineProperty(ProxyClass, '__reactPatchProxy', {
	    configurable: false,
	    writable: false,
	    enumerable: false,
	    value: proxy
	  });
	
	  return proxy;
	}
	
	function createFallback(Component) {
	  var CurrentComponent = Component;
	
	  return {
	    get: function get() {
	      return CurrentComponent;
	    },
	    update: function update(NextComponent) {
	      CurrentComponent = NextComponent;
	    }
	  };
	}
	
	function createClassProxy(Component) {
	  return Component.__proto__ && (0, _supportsProtoAssignment2.default)() ? proxyClass(Component) : createFallback(Component);
	}

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createPrototypeProxy;
	
	var _assign = __webpack_require__(169);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _difference = __webpack_require__(315);
	
	var _difference2 = _interopRequireDefault(_difference);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createPrototypeProxy() {
	  var proxy = {};
	  var current = null;
	  var mountedInstances = [];
	
	  /**
	   * Creates a proxied toString() method pointing to the current version's toString().
	   */
	  function proxyToString(name) {
	    // Wrap to always call the current version
	    return function toString() {
	      if (typeof current[name] === 'function') {
	        return current[name].toString();
	      } else {
	        return '<method was deleted>';
	      }
	    };
	  }
	
	  /**
	   * Creates a proxied method that calls the current version, whenever available.
	   */
	  function proxyMethod(name) {
	    // Wrap to always call the current version
	    var proxiedMethod = function proxiedMethod() {
	      if (typeof current[name] === 'function') {
	        return current[name].apply(this, arguments);
	      }
	    };
	
	    // Copy properties of the original function, if any
	    (0, _assign2.default)(proxiedMethod, current[name]);
	    proxiedMethod.toString = proxyToString(name);
	
	    return proxiedMethod;
	  }
	
	  /**
	   * Augments the original componentDidMount with instance tracking.
	   */
	  function proxiedComponentDidMount() {
	    mountedInstances.push(this);
	    if (typeof current.componentDidMount === 'function') {
	      return current.componentDidMount.apply(this, arguments);
	    }
	  }
	  proxiedComponentDidMount.toString = proxyToString('componentDidMount');
	
	  /**
	   * Augments the original componentWillUnmount with instance tracking.
	   */
	  function proxiedComponentWillUnmount() {
	    var index = mountedInstances.indexOf(this);
	    // Unless we're in a weird environment without componentDidMount
	    if (index !== -1) {
	      mountedInstances.splice(index, 1);
	    }
	    if (typeof current.componentWillUnmount === 'function') {
	      return current.componentWillUnmount.apply(this, arguments);
	    }
	  }
	  proxiedComponentWillUnmount.toString = proxyToString('componentWillUnmount');
	
	  /**
	   * Defines a property on the proxy.
	   */
	  function defineProxyProperty(name, descriptor) {
	    Object.defineProperty(proxy, name, descriptor);
	  }
	
	  /**
	   * Defines a property, attempting to keep the original descriptor configuration.
	   */
	  function defineProxyPropertyWithValue(name, value) {
	    var _ref = Object.getOwnPropertyDescriptor(current, name) || {};
	
	    var _ref$enumerable = _ref.enumerable;
	    var enumerable = _ref$enumerable === undefined ? false : _ref$enumerable;
	    var _ref$writable = _ref.writable;
	    var writable = _ref$writable === undefined ? true : _ref$writable;
	
	    defineProxyProperty(name, {
	      configurable: true,
	      enumerable: enumerable,
	      writable: writable,
	      value: value
	    });
	  }
	
	  /**
	   * Creates an auto-bind map mimicking the original map, but directed at proxy.
	   */
	  function createAutoBindMap() {
	    if (!current.__reactAutoBindMap) {
	      return;
	    }
	
	    var __reactAutoBindMap = {};
	    for (var name in current.__reactAutoBindMap) {
	      if (typeof proxy[name] === 'function' && current.__reactAutoBindMap.hasOwnProperty(name)) {
	        __reactAutoBindMap[name] = proxy[name];
	      }
	    }
	
	    return __reactAutoBindMap;
	  }
	
	  /**
	   * Applies the updated prototype.
	   */
	  function update(next) {
	    // Save current source of truth
	    current = next;
	
	    // Find changed property names
	    var currentNames = Object.getOwnPropertyNames(current);
	    var previousName = Object.getOwnPropertyNames(proxy);
	    var removedNames = (0, _difference2.default)(previousName, currentNames);
	
	    // Remove properties and methods that are no longer there
	    removedNames.forEach(function (name) {
	      delete proxy[name];
	    });
	
	    // Copy every descriptor
	    currentNames.forEach(function (name) {
	      var descriptor = Object.getOwnPropertyDescriptor(current, name);
	      if (typeof descriptor.value === 'function') {
	        // Functions require additional wrapping so they can be bound later
	        defineProxyPropertyWithValue(name, proxyMethod(name));
	      } else {
	        // Other values can be copied directly
	        defineProxyProperty(name, descriptor);
	      }
	    });
	
	    // Track mounting and unmounting
	    defineProxyPropertyWithValue('componentDidMount', proxiedComponentDidMount);
	    defineProxyPropertyWithValue('componentWillUnmount', proxiedComponentWillUnmount);
	    defineProxyPropertyWithValue('__reactAutoBindMap', createAutoBindMap());
	
	    // Set up the prototype chain
	    proxy.__proto__ = next;
	
	    return mountedInstances;
	  }
	
	  /**
	   * Returns the up-to-date proxy prototype.
	   */
	  function get() {
	    return proxy;
	  }
	
	  return {
	    update: update,
	    get: get
	  };
	};

/***/ },
/* 380 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = deleteUnknownAutoBindMethods;
	function shouldDeleteClassicInstanceMethod(component, name) {
	  if (component.__reactAutoBindMap.hasOwnProperty(name)) {
	    // It's a known autobound function, keep it
	    return false;
	  }
	
	  if (component[name].__reactBoundArguments !== null) {
	    // It's a function bound to specific args, keep it
	    return false;
	  }
	
	  // It's a cached bound method for a function
	  // that was deleted by user, so we delete it from component.
	  return true;
	}
	
	function shouldDeleteModernInstanceMethod(component, name) {
	  var prototype = component.constructor.prototype;
	
	  var prototypeDescriptor = Object.getOwnPropertyDescriptor(prototype, name);
	
	  if (!prototypeDescriptor || !prototypeDescriptor.get) {
	    // This is definitely not an autobinding getter
	    return false;
	  }
	
	  if (prototypeDescriptor.get().length !== component[name].length) {
	    // The length doesn't match, bail out
	    return false;
	  }
	
	  // This seems like a method bound using an autobinding getter on the prototype
	  // Hopefully we won't run into too many false positives.
	  return true;
	}
	
	function shouldDeleteInstanceMethod(component, name) {
	  var descriptor = Object.getOwnPropertyDescriptor(component, name);
	  if (typeof descriptor.value !== 'function') {
	    // Not a function, or something fancy: bail out
	    return;
	  }
	
	  if (component.__reactAutoBindMap) {
	    // Classic
	    return shouldDeleteClassicInstanceMethod(component, name);
	  } else {
	    // Modern
	    return shouldDeleteModernInstanceMethod(component, name);
	  }
	}
	
	/**
	 * Deletes autobound methods from the instance.
	 *
	 * For classic React classes, we only delete the methods that no longer exist in map.
	 * This means the user actually deleted them in code.
	 *
	 * For modern classes, we delete methods that exist on prototype with the same length,
	 * and which have getters on prototype, but are normal values on the instance.
	 * This is usually an indication that an autobinding decorator is being used,
	 * and the getter will re-generate the memoized handler on next access.
	 */
	function deleteUnknownAutoBindMethods(component) {
	  var names = Object.getOwnPropertyNames(component);
	
	  names.forEach(function (name) {
	    if (shouldDeleteInstanceMethod(component, name)) {
	      delete component[name];
	    }
	  });
	}

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getForceUpdate = exports.createProxy = undefined;
	
	var _supportsProtoAssignment = __webpack_require__(177);
	
	var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);
	
	var _createClassProxy = __webpack_require__(378);
	
	var _createClassProxy2 = _interopRequireDefault(_createClassProxy);
	
	var _reactDeepForceUpdate = __webpack_require__(353);
	
	var _reactDeepForceUpdate2 = _interopRequireDefault(_reactDeepForceUpdate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (!(0, _supportsProtoAssignment2.default)()) {
	  console.warn('This JavaScript environment does not support __proto__. ' + 'This means that react-proxy is unable to proxy React components. ' + 'Features that rely on react-proxy, such as react-transform-hmr, ' + 'will not function as expected.');
	}
	
	exports.createProxy = _createClassProxy2.default;
	exports.getForceUpdate = _reactDeepForceUpdate2.default;

/***/ },
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule update
	 */
	
	/* global hasOwnProperty:true */
	
	'use strict';
	
	var assign = __webpack_require__(3);
	var keyOf = __webpack_require__(25);
	var invariant = __webpack_require__(2);
	var hasOwnProperty = ({}).hasOwnProperty;
	
	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && typeof x === 'object') {
	    return assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}
	
	var COMMAND_PUSH = keyOf({ $push: null });
	var COMMAND_UNSHIFT = keyOf({ $unshift: null });
	var COMMAND_SPLICE = keyOf({ $splice: null });
	var COMMAND_SET = keyOf({ $set: null });
	var COMMAND_MERGE = keyOf({ $merge: null });
	var COMMAND_APPLY = keyOf({ $apply: null });
	
	var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];
	
	var ALL_COMMANDS_SET = {};
	
	ALL_COMMANDS_LIST.forEach(function (command) {
	  ALL_COMMANDS_SET[command] = true;
	});
	
	function invariantArrayCase(value, spec, command) {
	  !Array.isArray(value) ?  true ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : invariant(false) : undefined;
	  var specValue = spec[command];
	  !Array.isArray(specValue) ?  true ? invariant(false, 'update(): expected spec of %s to be an array; got %s. ' + 'Did you forget to wrap your parameter in an array?', command, specValue) : invariant(false) : undefined;
	}
	
	function update(value, spec) {
	  !(typeof spec === 'object') ?  true ? invariant(false, 'update(): You provided a key path to update() that did not contain one ' + 'of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : invariant(false) : undefined;
	
	  if (hasOwnProperty.call(spec, COMMAND_SET)) {
	    !(Object.keys(spec).length === 1) ?  true ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : invariant(false) : undefined;
	
	    return spec[COMMAND_SET];
	  }
	
	  var nextValue = shallowCopy(value);
	
	  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    !(mergeObj && typeof mergeObj === 'object') ?  true ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : invariant(false) : undefined;
	    !(nextValue && typeof nextValue === 'object') ?  true ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : invariant(false) : undefined;
	    assign(nextValue, spec[COMMAND_MERGE]);
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function (item) {
	      nextValue.push(item);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function (item) {
	      nextValue.unshift(item);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
	    !Array.isArray(value) ?  true ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : invariant(false) : undefined;
	    !Array.isArray(spec[COMMAND_SPLICE]) ?  true ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
	    spec[COMMAND_SPLICE].forEach(function (args) {
	      !Array.isArray(args) ?  true ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
	      nextValue.splice.apply(nextValue, args);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
	    !(typeof spec[COMMAND_APPLY] === 'function') ?  true ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : invariant(false) : undefined;
	    nextValue = spec[COMMAND_APPLY](nextValue);
	  }
	
	  for (var k in spec) {
	    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
	      nextValue[k] = update(value[k], spec[k]);
	    }
	  }
	
	  return nextValue;
	}
	
	module.exports = update;

/***/ },
/* 464 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var __$Getters__ = [];
	var __$Setters__ = [];
	var __$Resetters__ = [];
	
	function __GetDependency__(name) {
	  return __$Getters__[name]();
	}
	
	function __Rewire__(name, value) {
	  __$Setters__[name](value);
	}
	
	function __ResetDependency__(name) {
	  __$Resetters__[name]();
	}
	
	var __RewireAPI__ = {
	  '__GetDependency__': __GetDependency__,
	  '__get__': __GetDependency__,
	  '__Rewire__': __Rewire__,
	  '__set__': __Rewire__,
	  '__ResetDependency__': __ResetDependency__
	};
	var filenameWithoutLoaders = function filenameWithoutLoaders(filename) {
	  var index = filename.lastIndexOf('!');
	
	  return index < 0 ? filename : filename.substr(index + 1);
	};
	
	var _filenameWithoutLoaders = filenameWithoutLoaders;
	
	__$Getters__['filenameWithoutLoaders'] = function () {
	  return filenameWithoutLoaders;
	};
	
	__$Setters__['filenameWithoutLoaders'] = function (value) {
	  exports.filenameWithoutLoaders = filenameWithoutLoaders = value;
	};
	
	__$Resetters__['filenameWithoutLoaders'] = function () {
	  exports.filenameWithoutLoaders = filenameWithoutLoaders = _filenameWithoutLoaders;
	};
	
	exports.filenameWithoutLoaders = _filenameWithoutLoaders;
	var filenameHasLoaders = function filenameHasLoaders(filename) {
	  var actualFilename = filenameWithoutLoaders(filename);
	
	  return actualFilename !== filename;
	};
	
	var _filenameHasLoaders = filenameHasLoaders;
	
	__$Getters__['filenameHasLoaders'] = function () {
	  return filenameHasLoaders;
	};
	
	__$Setters__['filenameHasLoaders'] = function (value) {
	  exports.filenameHasLoaders = filenameHasLoaders = value;
	};
	
	__$Resetters__['filenameHasLoaders'] = function () {
	  exports.filenameHasLoaders = filenameHasLoaders = _filenameHasLoaders;
	};
	
	exports.filenameHasLoaders = _filenameHasLoaders;
	var filenameHasSchema = function filenameHasSchema(filename) {
	  return /^[\w]+\:/.test(filename);
	};
	
	var _filenameHasSchema = filenameHasSchema;
	
	__$Getters__['filenameHasSchema'] = function () {
	  return filenameHasSchema;
	};
	
	__$Setters__['filenameHasSchema'] = function (value) {
	  exports.filenameHasSchema = filenameHasSchema = value;
	};
	
	__$Resetters__['filenameHasSchema'] = function () {
	  exports.filenameHasSchema = filenameHasSchema = _filenameHasSchema;
	};
	
	exports.filenameHasSchema = _filenameHasSchema;
	var isFilenameAbsolute = function isFilenameAbsolute(filename) {
	  var actualFilename = filenameWithoutLoaders(filename);
	
	  if (actualFilename.indexOf('/') === 0) {
	    return true;
	  }
	
	  return false;
	};
	
	var _isFilenameAbsolute = isFilenameAbsolute;
	
	__$Getters__['isFilenameAbsolute'] = function () {
	  return isFilenameAbsolute;
	};
	
	__$Setters__['isFilenameAbsolute'] = function (value) {
	  exports.isFilenameAbsolute = isFilenameAbsolute = value;
	};
	
	__$Resetters__['isFilenameAbsolute'] = function () {
	  exports.isFilenameAbsolute = isFilenameAbsolute = _isFilenameAbsolute;
	};
	
	exports.isFilenameAbsolute = _isFilenameAbsolute;
	var makeUrl = function makeUrl(filename, scheme, line, column) {
	  var actualFilename = filenameWithoutLoaders(filename);
	
	  if (filenameHasSchema(filename)) {
	    return actualFilename;
	  }
	
	  var url = 'file://' + actualFilename;
	
	  if (scheme) {
	    url = scheme + '://open?url=' + url;
	
	    if (line && actualFilename === filename) {
	      url = url + '&line=' + line;
	
	      if (column) {
	        url = url + '&column=' + column;
	      }
	    }
	  }
	
	  return url;
	};
	
	var _makeUrl = makeUrl;
	
	__$Getters__['makeUrl'] = function () {
	  return makeUrl;
	};
	
	__$Setters__['makeUrl'] = function (value) {
	  exports.makeUrl = makeUrl = value;
	};
	
	__$Resetters__['makeUrl'] = function () {
	  exports.makeUrl = makeUrl = _makeUrl;
	};
	
	exports.makeUrl = _makeUrl;
	var makeLinkText = function makeLinkText(filename, line, column) {
	  var text = filenameWithoutLoaders(filename);
	
	  if (line && text === filename) {
	    text = text + ':' + line;
	
	    if (column) {
	      text = text + ':' + column;
	    }
	  }
	
	  return text;
	};
	var _makeLinkText = makeLinkText;
	
	__$Getters__['makeLinkText'] = function () {
	  return makeLinkText;
	};
	
	__$Setters__['makeLinkText'] = function (value) {
	  exports.makeLinkText = makeLinkText = value;
	};
	
	__$Resetters__['makeLinkText'] = function () {
	  exports.makeLinkText = makeLinkText = _makeLinkText;
	};
	
	exports.makeLinkText = _makeLinkText;
	exports.__GetDependency__ = __GetDependency__;
	exports.__get__ = __GetDependency__;
	exports.__Rewire__ = __Rewire__;
	exports.__set__ = __Rewire__;
	exports.__ResetDependency__ = __ResetDependency__;
	exports.__RewireAPI__ = __RewireAPI__;
	exports['default'] = __RewireAPI__;

/***/ },
/* 465 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var __$Getters__ = [];
	var __$Setters__ = [];
	var __$Resetters__ = [];
	
	function __GetDependency__(name) {
	  return __$Getters__[name]();
	}
	
	function __Rewire__(name, value) {
	  __$Setters__[name](value);
	}
	
	function __ResetDependency__(name) {
	  __$Resetters__[name]();
	}
	
	var __RewireAPI__ = {
	  '__GetDependency__': __GetDependency__,
	  '__get__': __GetDependency__,
	  '__Rewire__': __Rewire__,
	  '__set__': __Rewire__,
	  '__ResetDependency__': __ResetDependency__
	};
	var _defaultExport = {
	  redbox: {
	    boxSizing: 'border-box',
	    fontFamily: 'sans-serif',
	    position: 'fixed',
	    padding: 10,
	    top: 0,
	    left: 0,
	    bottom: 0,
	    right: 0,
	    width: '100%',
	    background: 'rgb(204, 0, 0)',
	    color: 'white',
	    zIndex: 9999,
	    textAlign: 'left',
	    fontSize: '16px',
	    lineHeight: 1.2
	  },
	  message: {
	    fontWeight: 'bold'
	  },
	  stack: {
	    fontFamily: 'monospace',
	    marginTop: '2em'
	  },
	  frame: {
	    marginTop: '1em'
	  },
	  file: {
	    fontSize: '0.8em',
	    color: 'rgba(255, 255, 255, 0.7)'
	  },
	  linkToFile: {
	    textDecoration: 'none',
	    color: 'rgba(255, 255, 255, 0.7)'
	  }
	};
	
	if (typeof _defaultExport === 'object' || typeof _defaultExport === 'function') {
	  Object.defineProperty(_defaultExport, '__Rewire__', {
	    'value': __Rewire__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__set__', {
	    'value': __Rewire__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__ResetDependency__', {
	    'value': __ResetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__GetDependency__', {
	    'value': __GetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__get__', {
	    'value': __GetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__RewireAPI__', {
	    'value': __RewireAPI__,
	    'enumberable': false
	  });
	}
	
	exports['default'] = _defaultExport;
	exports.__GetDependency__ = __GetDependency__;
	exports.__get__ = __GetDependency__;
	exports.__Rewire__ = __Rewire__;
	exports.__set__ = __Rewire__;
	exports.__ResetDependency__ = __ResetDependency__;
	exports.__RewireAPI__ = __RewireAPI__;
	module.exports = exports['default'];

/***/ },
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */
/***/ function(module, exports) {

	'use strict';
	
	function thunkMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;
	
	  return function (next) {
	    return function (action) {
	      return typeof action === 'function' ? action(dispatch, getState) : next(action);
	    };
	  };
	}
	
	module.exports = thunkMiddleware;

/***/ },
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = __webpack_require__(479);


/***/ },
/* 477 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(132);
	
	/**
	 * Decode the id to get the version and worker
	 * Mainly for debugging and testing.
	 * @param id - the shortid-generated id.
	 */
	function decode(id) {
	    var characters = alphabet.shuffled();
	    return {
	        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
	        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
	    };
	}
	
	module.exports = decode;


/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomByte = __webpack_require__(481);
	
	function encode(lookup, number) {
	    var loopCounter = 0;
	    var done;
	
	    var str = '';
	
	    while (!done) {
	        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
	        done = number < (Math.pow(16, loopCounter + 1 ) );
	        loopCounter++;
	    }
	    return str;
	}
	
	module.exports = encode;


/***/ },
/* 479 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var alphabet = __webpack_require__(132);
	var encode = __webpack_require__(478);
	var decode = __webpack_require__(477);
	var isValid = __webpack_require__(480);
	
	// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
	// This number should be updated every year or so to keep the generated id short.
	// To regenerate `new Date() - 0` and bump the version. Always bump the version!
	var REDUCE_TIME = 1426452414093;
	
	// don't change unless we change the algos or REDUCE_TIME
	// must be an integer and less than 16
	var version = 5;
	
	// if you are using cluster or multiple servers use this to make each instance
	// has a unique value for worker
	// Note: I don't know if this is automatically set when using third
	// party cluster solutions such as pm2.
	var clusterWorkerId = __webpack_require__(483) || 0;
	
	// Counter is used when shortid is called multiple times in one second.
	var counter;
	
	// Remember the last time shortid was called in case counter is needed.
	var previousSeconds;
	
	/**
	 * Generate unique id
	 * Returns string id
	 */
	function generate() {
	
	    var str = '';
	
	    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);
	
	    if (seconds === previousSeconds) {
	        counter++;
	    } else {
	        counter = 0;
	        previousSeconds = seconds;
	    }
	
	    str = str + encode(alphabet.lookup, version);
	    str = str + encode(alphabet.lookup, clusterWorkerId);
	    if (counter > 0) {
	        str = str + encode(alphabet.lookup, counter);
	    }
	    str = str + encode(alphabet.lookup, seconds);
	
	    return str;
	}
	
	
	/**
	 * Set the seed.
	 * Highly recommended if you don't want people to try to figure out your id schema.
	 * exposed as shortid.seed(int)
	 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
	 */
	function seed(seedValue) {
	    alphabet.seed(seedValue);
	    return module.exports;
	}
	
	/**
	 * Set the cluster worker or machine id
	 * exposed as shortid.worker(int)
	 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
	 * returns shortid module so it can be chained.
	 */
	function worker(workerId) {
	    clusterWorkerId = workerId;
	    return module.exports;
	}
	
	/**
	 *
	 * sets new characters to use in the alphabet
	 * returns the shuffled alphabet
	 */
	function characters(newCharacters) {
	    if (newCharacters !== undefined) {
	        alphabet.characters(newCharacters);
	    }
	
	    return alphabet.shuffled();
	}
	
	
	// Export all other functions as properties of the generate function
	module.exports = generate;
	module.exports.generate = generate;
	module.exports.seed = seed;
	module.exports.worker = worker;
	module.exports.characters = characters;
	module.exports.decode = decode;
	module.exports.isValid = isValid;


/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(132);
	
	function isShortId(id) {
	    if (!id || typeof id !== 'string' || id.length < 6 ) {
	        return false;
	    }
	
	    var characters = alphabet.characters();
	    var invalidCharacters = id.split('').map(function(char){
	        if (characters.indexOf(char) === -1) {
	            return char;
	        }
	    }).join('').split('').join('');
	
	    return invalidCharacters.length === 0;
	}
	
	module.exports = isShortId;


/***/ },
/* 481 */
/***/ function(module, exports) {

	'use strict';
	
	var crypto = window.crypto || window.msCrypto; // IE 11 uses window.msCrypto
	
	function randomByte() {
	    if (!crypto || !crypto.getRandomValues) {
	        return Math.floor(Math.random() * 256) & 0x30;
	    }
	    var dest = new Uint8Array(1);
	    crypto.getRandomValues(dest);
	    return dest[0] & 0x30;
	}
	
	module.exports = randomByte;


/***/ },
/* 482 */
/***/ function(module, exports) {

	'use strict';
	
	// Found this seed-based random generator somewhere
	// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)
	
	var seed = 1;
	
	/**
	 * return a random number based on a seed
	 * @param seed
	 * @returns {number}
	 */
	function getNextValue() {
	    seed = (seed * 9301 + 49297) % 233280;
	    return seed/(233280.0);
	}
	
	function setSeed(_seed_) {
	    seed = _seed_;
	}
	
	module.exports = {
	    nextValue: getNextValue,
	    seed: setSeed
	};


/***/ },
/* 483 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = 0;


/***/ },
/* 484 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	    'use strict';
	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.
	
	    /* istanbul ignore next */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        module.exports = factory();
	    } else {
	        root.StackFrame = factory();
	    }
	}(this, function () {
	    'use strict';
	    function _isNumber(n) {
	        return !isNaN(parseFloat(n)) && isFinite(n);
	    }
	
	    function StackFrame(functionName, args, fileName, lineNumber, columnNumber, source) {
	        if (functionName !== undefined) {
	            this.setFunctionName(functionName);
	        }
	        if (args !== undefined) {
	            this.setArgs(args);
	        }
	        if (fileName !== undefined) {
	            this.setFileName(fileName);
	        }
	        if (lineNumber !== undefined) {
	            this.setLineNumber(lineNumber);
	        }
	        if (columnNumber !== undefined) {
	            this.setColumnNumber(columnNumber);
	        }
	        if (source !== undefined) {
	            this.setSource(source);
	        }
	    }
	
	    StackFrame.prototype = {
	        getFunctionName: function () {
	            return this.functionName;
	        },
	        setFunctionName: function (v) {
	            this.functionName = String(v);
	        },
	
	        getArgs: function () {
	            return this.args;
	        },
	        setArgs: function (v) {
	            if (Object.prototype.toString.call(v) !== '[object Array]') {
	                throw new TypeError('Args must be an Array');
	            }
	            this.args = v;
	        },
	
	        // NOTE: Property name may be misleading as it includes the path,
	        // but it somewhat mirrors V8's JavaScriptStackTraceApi
	        // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi and Gecko's
	        // http://mxr.mozilla.org/mozilla-central/source/xpcom/base/nsIException.idl#14
	        getFileName: function () {
	            return this.fileName;
	        },
	        setFileName: function (v) {
	            this.fileName = String(v);
	        },
	
	        getLineNumber: function () {
	            return this.lineNumber;
	        },
	        setLineNumber: function (v) {
	            if (!_isNumber(v)) {
	                throw new TypeError('Line Number must be a Number');
	            }
	            this.lineNumber = Number(v);
	        },
	
	        getColumnNumber: function () {
	            return this.columnNumber;
	        },
	        setColumnNumber: function (v) {
	            if (!_isNumber(v)) {
	                throw new TypeError('Column Number must be a Number');
	            }
	            this.columnNumber = Number(v);
	        },
	
	        getSource: function () {
	            return this.source;
	        },
	        setSource: function (v) {
	            this.source = String(v);
	        },
	
	        toString: function() {
	            var functionName = this.getFunctionName() || '{anonymous}';
	            var args = '(' + (this.getArgs() || []).join(',') + ')';
	            var fileName = this.getFileName() ? ('@' + this.getFileName()) : '';
	            var lineNumber = _isNumber(this.getLineNumber()) ? (':' + this.getLineNumber()) : '';
	            var columnNumber = _isNumber(this.getColumnNumber()) ? (':' + this.getColumnNumber()) : '';
	            return functionName + args + fileName + lineNumber + columnNumber;
	        }
	    };
	
	    return StackFrame;
	}));


/***/ },
/* 485 */,
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(92);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(58)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(92, function() {
				var newContent = __webpack_require__(92);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(93);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(58)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(93, function() {
				var newContent = __webpack_require__(93);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(94);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(58)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(94, function() {
				var newContent = __webpack_require__(94);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(95);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(58)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(95, function() {
				var newContent = __webpack_require__(95);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 490 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(96);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(58)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(96, function() {
				var newContent = __webpack_require__(96);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 491 */
/***/ function(module, exports) {

	/*eslint-env browser*/
	
	var clientOverlay = document.createElement('div');
	clientOverlay.style.display = 'none';
	clientOverlay.style.background = '#fdd';
	clientOverlay.style.color = '#000';
	clientOverlay.style.whiteSpace = 'pre';
	clientOverlay.style.fontFamily = 'monospace';
	clientOverlay.style.position = 'fixed';
	clientOverlay.style.zIndex = 9999;
	clientOverlay.style.padding = '10px';
	clientOverlay.style.left = 0;
	clientOverlay.style.right = 0;
	clientOverlay.style.top = 0;
	clientOverlay.style.bottom = 0;
	clientOverlay.style.overflow = 'auto';
	
	if (document.body) {
	  document.body.appendChild(clientOverlay);
	}
	
	exports.showProblems =
	function showProblems(lines) {
	  clientOverlay.innerHTML = '';
	  clientOverlay.style.display = 'block';
	  lines.forEach(function(msg) {
	    var div = document.createElement('div');
	    div.textContent = msg;
	    clientOverlay.appendChild(div);
	  });
	};
	
	exports.clear =
	function clear() {
	  clientOverlay.innerHTML = '';
	  clientOverlay.style.display = 'none';
	};
	


/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__resourceQuery, module) {/*eslint-env browser*/
	/*global __resourceQuery*/
	
	var options = {
	  path: "/__webpack_hmr",
	  timeout: 20 * 1000,
	  overlay: true,
	  reload: false,
	  log: true,
	  warn: true
	};
	if (true) {
	  var querystring = __webpack_require__(352);
	  var overrides = querystring.parse(__resourceQuery.slice(1));
	  if (overrides.path) options.path = overrides.path;
	  if (overrides.timeout) options.timeout = overrides.timeout;
	  if (overrides.overlay) options.overlay = overrides.overlay !== 'false';
	  if (overrides.reload) options.reload = overrides.reload !== 'false';
	  if (overrides.noInfo && overrides.noInfo !== 'false') {
	    options.log = false;
	  }
	  if (overrides.quiet && overrides.quiet !== 'false') {
	    options.log = false;
	    options.warn = false;
	  }
	}
	
	if (typeof window.EventSource === 'undefined') {
	  console.warn(
	    "webpack-hot-middleware's client requires EventSource to work. " +
	    "You should include a polyfill if you want to support this browser: " +
	    "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools"
	  );
	} else {
	  connect();
	}
	
	function connect() {
	  var source = new window.EventSource(options.path);
	  var lastActivity = new Date();
	
	  source.onopen = handleOnline;
	  source.onmessage = handleMessage;
	  source.onerror = handleDisconnect;
	
	  var timer = setInterval(function() {
	    if ((new Date() - lastActivity) > options.timeout) {
	      handleDisconnect();
	    }
	  }, options.timeout / 2);
	
	  function handleOnline() {
	    if (options.log) console.log("[HMR] connected");
	    lastActivity = new Date();
	  }
	
	  function handleMessage(event) {
	    lastActivity = new Date();
	    if (event.data == "\uD83D\uDC93") {
	      return;
	    }
	    try {
	      processMessage(JSON.parse(event.data));
	    } catch (ex) {
	      if (options.warn) {
	        console.warn("Invalid HMR message: " + event.data + "\n" + ex);
	      }
	    }
	  }
	
	  function handleDisconnect() {
	    clearInterval(timer);
	    source.close();
	    setTimeout(connect, options.timeout);
	  }
	
	}
	
	var strip = __webpack_require__(494);
	
	var overlay;
	if (options.overlay) {
	  overlay = __webpack_require__(491);
	}
	
	function problems(type, obj) {
	  if (options.warn) console.warn("[HMR] bundle has " + type + ":");
	  var list = [];
	  obj[type].forEach(function(msg) {
	    var clean = strip(msg);
	    if (options.warn) console.warn("[HMR] " + clean);
	    list.push(clean);
	  });
	  if (overlay && type !== 'warnings') overlay.showProblems(list);
	}
	
	function success() {
	  if (overlay) overlay.clear();
	}
	
	var processUpdate = __webpack_require__(495);
	
	var customHandler;
	function processMessage(obj) {
	  if (obj.action == "building") {
	    if (options.log) console.log("[HMR] bundle rebuilding");
	  } else if (obj.action == "built") {
	    if (options.log) console.log("[HMR] bundle rebuilt in " + obj.time + "ms");
	    if (obj.errors.length > 0) {
	      problems('errors', obj);
	    } else {
	      if (obj.warnings.length > 0) problems('warnings', obj);
	      success();
	
	      processUpdate(obj.hash, obj.modules, options);
	    }
	  } else if (customHandler) {
	    customHandler(obj);
	  }
	}
	
	if (module) {
	  module.exports = {
	    subscribe: function subscribe(handler) {
	      customHandler = handler;
	    }
	  };
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, "?path=/__webpack_hmr", __webpack_require__(9)(module)))

/***/ },
/* 493 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function () {
		return /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/g;
	};


/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(493)();
	
	module.exports = function (str) {
		return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
	};


/***/ },
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Based heavily on https://github.com/webpack/webpack/blob/
	 *  c0afdf9c6abc1dd70707c594e473802a566f7b6e/hot/only-dev-server.js
	 * Original copyright Tobias Koppers @sokra (MIT license)
	 */
	
	/* global window __webpack_hash__ */
	
	if (false) {
	  throw new Error("[HMR] Hot Module Replacement is disabled.");
	}
	
	var lastHash;
	var failureStatuses = { abort: 1, fail: 1 };
	var applyOptions = { ignoreUnaccepted: true };
	
	function upToDate(hash) {
	  if (hash) lastHash = hash;
	  return lastHash == __webpack_require__.h();
	}
	
	module.exports = function(hash, moduleMap, options) {
	  var reload = options.reload;
	  if (!upToDate(hash) && module.hot.status() == "idle") {
	    if (options.log) console.log("[HMR] Checking for updates on the server...");
	    check();
	  }
	
	  function check() {
	    module.hot.check(function(err, updatedModules) {
	      if (err) return handleError(err);
	
	      if(!updatedModules) {
	        if (options.warn) {
	          console.warn("[HMR] Cannot find update (Full reload needed)");
	          console.warn("[HMR] (Probably because of restarting the server)");
	        }
	        performReload();
	        return null;
	      }
	
	      module.hot.apply(applyOptions, function(applyErr, renewedModules) {
	        if (applyErr) return handleError(applyErr);
	
	        if (!upToDate()) check();
	
	        logUpdates(updatedModules, renewedModules);
	      });
	    });
	  }
	
	  function logUpdates(updatedModules, renewedModules) {
	    var unacceptedModules = updatedModules.filter(function(moduleId) {
	      return renewedModules && renewedModules.indexOf(moduleId) < 0;
	    });
	
	    if(unacceptedModules.length > 0) {
	      if (options.warn) {
	        console.warn(
	          "[HMR] The following modules couldn't be hot updated: " +
	          "(Full reload needed)"
	        );
	        unacceptedModules.forEach(function(moduleId) {
	          console.warn("[HMR]  - " + moduleMap[moduleId]);
	        });
	      }
	      performReload();
	      return;
	    }
	
	    if (options.log) {
	      if(!renewedModules || renewedModules.length === 0) {
	        console.log("[HMR] Nothing hot updated.");
	      } else {
	        console.log("[HMR] Updated modules:");
	        renewedModules.forEach(function(moduleId) {
	          console.log("[HMR]  - " + moduleMap[moduleId]);
	        });
	      }
	
	      if (upToDate()) {
	        console.log("[HMR] App is up to date.");
	      }
	    }
	  }
	
	  function handleError(err) {
	    if (module.hot.status() in failureStatuses) {
	      if (options.warn) {
	        console.warn("[HMR] Cannot check for update (Full reload needed)");
	        console.warn("[HMR] " + err.stack || err.message);
	      }
	      performReload();
	      return;
	    }
	    if (options.warn) {
	      console.warn("[HMR] Update check failed: " + err.stack || err.message);
	    }
	  }
	
	  function performReload() {
	    if (reload) {
	      if (options.warn) console.warn("[HMR] Reloading page");
	      window.location.reload();
	    }
	  }
	};


/***/ }
]);
//# sourceMappingURL=app.0f39e1f1ce184e6bc6aa.js.map