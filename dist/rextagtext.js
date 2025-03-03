(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.rextagtext = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2019 Photon Storm Ltd.
   * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
   */
  var Utils = Phaser.Renderer.WebGL.Utils;
  /**
   * Renders this Game Object with the WebGL Renderer to the given Camera.
   * The object will not render if any of its renderFlags are set or it is being actively filtered out by the Camera.
   * This method should not be called directly. It is a utility function of the Render module.
   *
   * @method Phaser.GameObjects.Text#renderWebGL
   * @since 3.0.0
   * @private
   *
   * @param {Phaser.Renderer.WebGL.WebGLRenderer} renderer - A reference to the current active WebGL renderer.
   * @param {Phaser.GameObjects.Text} src - The Game Object being rendered in this call.
   * @param {number} interpolationPercentage - Reserved for future use and custom pipelines.
   * @param {Phaser.Cameras.Scene2D.Camera} camera - The Camera that is rendering the Game Object.
   * @param {Phaser.GameObjects.Components.TransformMatrix} parentMatrix - This transform matrix is defined if the game object is nested
   */

  var TextWebGLRenderer = function TextWebGLRenderer(renderer, src, camera, parentMatrix) {
    if (src.width === 0 || src.height === 0) {
      return;
    }

    camera.addToRenderList(src);
    var frame = src.frame;
    var width = frame.width;
    var height = frame.height;
    var getTint = Utils.getTintAppendFloatAlpha;
    var pipeline = renderer.pipelines.set(src.pipeline, src);
    var textureUnit = pipeline.setTexture2D(frame.glTexture, src);
    renderer.pipelines.preBatch(src);
    pipeline.batchTexture(src, frame.glTexture, width, height, src.x, src.y, width / src.style.resolution, height / src.style.resolution, src.scaleX, src.scaleY, src.rotation, src.flipX, src.flipY, src.scrollFactorX, src.scrollFactorY, src.displayOriginX, src.displayOriginY, 0, 0, width, height, getTint(src.tintTopLeft, camera.alpha * src._alphaTL), getTint(src.tintTopRight, camera.alpha * src._alphaTR), getTint(src.tintBottomLeft, camera.alpha * src._alphaBL), getTint(src.tintBottomRight, camera.alpha * src._alphaBR), src.tintFill, 0, 0, camera, parentMatrix, false, textureUnit);
    renderer.pipelines.postBatch(src);
  };

  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2019 Photon Storm Ltd.
   * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
   */

  /**
   * Renders this Game Object with the Canvas Renderer to the given Camera.
   * The object will not render if any of its renderFlags are set or it is being actively filtered out by the Camera.
   * This method should not be called directly. It is a utility function of the Render module.
   *
   * @method Phaser.GameObjects.Text#renderCanvas
   * @since 3.0.0
   * @private
   *
   * @param {Phaser.Renderer.Canvas.CanvasRenderer} renderer - A reference to the current active Canvas renderer.
   * @param {Phaser.GameObjects.Text} src - The Game Object being rendered in this call.
   * @param {number} interpolationPercentage - Reserved for future use and custom pipelines.
   * @param {Phaser.Cameras.Scene2D.Camera} camera - The Camera that is rendering the Game Object.
   * @param {Phaser.GameObjects.Components.TransformMatrix} parentMatrix - This transform matrix is defined if the game object is nested
   */
  var TextCanvasRenderer = function TextCanvasRenderer(renderer, src, camera, parentMatrix) {
    if (src.width === 0 || src.height === 0) {
      return;
    }

    camera.addToRenderList(src);
    renderer.batchSprite(src, src.frame, camera, parentMatrix);
  };

  var Render = {
    renderWebGL: TextWebGLRenderer,
    renderCanvas: TextCanvasRenderer
  };

  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2018 Photon Storm Ltd.
   * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
   */
  var CanvasPool$2 = Phaser.Display.Canvas.CanvasPool;
  /**
   * Calculates the ascent, descent and fontSize of a given font style.
   *
   * @function Phaser.GameObjects.MeasureText
   * @since 3.0.0
   *
   * @param {Phaser.GameObjects.Text.TextStyle} textStyle - The TextStyle object to measure.
   *
   * @return {object} An object containing the ascent, descent and fontSize of the TextStyle.
   */

  var MeasureText = function MeasureText(textStyle) {
    // @property {HTMLCanvasElement} canvas - The canvas element that the text is rendered.
    var canvas = CanvasPool$2.create(this); // @property {HTMLCanvasElement} context - The context of the canvas element that the text is rendered to.

    var context = canvas.getContext('2d');
    textStyle.syncFont(canvas, context);
    var metrics = context.measureText(textStyle.testString);

    if ('actualBoundingBoxAscent' in metrics) {
      var ascent = metrics.actualBoundingBoxAscent;
      var descent = metrics.actualBoundingBoxDescent;
      var output = {
        ascent: ascent,
        descent: descent,
        fontSize: ascent + descent
      };
      CanvasPool$2.remove(canvas);
      return output;
    }

    var width = Math.ceil(metrics.width * textStyle.baselineX);
    var baseline = width;
    var height = 2 * baseline;
    baseline = baseline * textStyle.baselineY | 0;
    canvas.width = width;
    canvas.height = height;
    context.fillStyle = '#f00';
    context.fillRect(0, 0, width, height);
    context.font = textStyle._font;
    context.textBaseline = 'alphabetic';
    context.fillStyle = '#000';
    context.fillText(textStyle.testString, 0, baseline);
    var output = {
      ascent: 0,
      descent: 0,
      fontSize: 0
    };

    if (!context.getImageData(0, 0, width, height)) {
      output.ascent = baseline;
      output.descent = baseline + 6;
      output.fontSize = output.ascent + output.descent;
      CanvasPool$2.remove(canvas);
      return output;
    }

    var imagedata = context.getImageData(0, 0, width, height).data;
    var pixels = imagedata.length;
    var line = width * 4;
    var i;
    var j;
    var idx = 0;
    var stop = false; // ascent. scan from top to bottom until we find a non red pixel

    for (i = 0; i < baseline; i++) {
      for (j = 0; j < line; j += 4) {
        if (imagedata[idx + j] !== 255) {
          stop = true;
          break;
        }
      }

      if (!stop) {
        idx += line;
      } else {
        break;
      }
    }

    output.ascent = baseline - i;
    idx = pixels - line;
    stop = false; // descent. scan from bottom to top until we find a non red pixel

    for (i = height; i > baseline; i--) {
      for (j = 0; j < line; j += 4) {
        if (imagedata[idx + j] !== 255) {
          stop = true;
          break;
        }
      }

      if (!stop) {
        idx -= line;
      } else {
        break;
      }
    }

    output.descent = i - baseline;
    output.fontSize = output.ascent + output.descent;
    CanvasPool$2.remove(canvas);
    return output;
  };

  var CONST = {
    // new line mode
    NO_NEWLINE: 0,
    RAW_NEWLINE: 1,
    WRAPPED_NEWLINE: 2,
    // wrap mode
    NO_WRAP: 0,
    WORD_WRAP: 1,
    CHAR_WRAP: 2,
    // split lines
    SPLITREGEXP: /(?:\r\n|\r|\n)/
  };

  var Pad = Phaser.Utils.String.Pad;

  var GetStyle = function GetStyle(style, canvas, context) {
    if (style == null) {
      return style;
    }

    switch (_typeof(style)) {
      case 'string':
        return style;

      case 'number':
        return "#".concat(Pad(Math.floor(style).toString(16), 6, '0', 1));

      case 'function':
        return style(canvas, context);

      case 'object':
        if (style.hasOwnProperty('r')) {
          if (style.hasOwnProperty('a')) {
            // rgba
            return "rgba(".concat(style.r, ",").concat(style.g, ",").concat(style.b, ",").concat(style.a, ")");
          } else {
            // rgb
            return "rgb(".concat(style.r, ",").concat(style.g, ",").concat(style.b, ")");
          }
        } else if (style.hasOwnProperty('h')) {
          if (style.hasOwnProperty('a')) {
            // hsla
            return "hsla(".concat(style.h, ",").concat(style.s, ",").concat(style.l, ",").concat(style.a, ")");
          } else {
            // hsl
            return "hsl(".concat(style.h, ",").concat(style.s, ",").concat(style.l, ")");
          }
        } else {
          return style; // Not a valid input
        }

      default:
        return style;
    }
  };

  var GetAdvancedValue = Phaser.Utils.Objects.GetAdvancedValue;
  var GetValue$6 = Phaser.Utils.Objects.GetValue; //  Key: [ Object Key, Default Value, postCallback ]

  var propertyMap = {
    // background
    backgroundColor: ['backgroundColor', null, GetStyle],
    backgroundColor2: ['backgroundColor2', null, GetStyle],
    backgroundHorizontalGradient: ['backgroundHorizontalGradient', true, null],
    backgroundStrokeColor: ['backgroundStrokeColor', null, GetStyle],
    backgroundStrokeLineWidth: ['backgroundStrokeLineWidth', 2, null],
    backgroundCornerRadius: ['backgroundCornerRadius', 0, null],
    backgroundCornerIteration: ['backgroundCornerIteration', null, null],
    // font
    fontFamily: ['fontFamily', 'Courier', null],
    fontSize: ['fontSize', '16px', null],
    fontStyle: ['fontStyle', '', null],
    color: ['color', '#fff', GetStyle],
    stroke: ['stroke', '#fff', GetStyle],
    strokeThickness: ['strokeThickness', 0, null],
    shadowOffsetX: ['shadow.offsetX', 0, null],
    shadowOffsetY: ['shadow.offsetY', 0, null],
    shadowColor: ['shadow.color', '#000', GetStyle],
    shadowBlur: ['shadow.blur', 0, null],
    shadowStroke: ['shadow.stroke', false, null],
    shadowFill: ['shadow.fill', false, null],
    // underline
    underlineColor: ['underline.color', '#000', GetStyle],
    underlineThickness: ['underline.thickness', 0, null],
    underlineOffset: ['underline.offset', 0, null],
    // align
    halign: ['halign', 'left', null],
    valign: ['valign', 'top', null],
    // size
    maxLines: ['maxLines', 0, null],
    fixedWidth: ['fixedWidth', 0, null],
    fixedHeight: ['fixedHeight', 0, null],
    resolution: ['resolution', 0, null],
    lineSpacing: ['lineSpacing', 0, null],
    xOffset: ['xOffset', 0, null],
    rtl: ['rtl', false, null],
    testString: ['testString', '|MÃ‰qgy', null],
    baselineX: ['baselineX', 1.2, null],
    baselineY: ['baselineY', 1.4, null],
    // wrap
    wrapMode: ['wrap.mode', 0, null],
    wrapWidth: ['wrap.width', 0, null],
    wrapCallback: ['wrap.callback', null],
    wrapCallbackScope: ['wrap.callbackScope', null]
  };

  var TextStyle = /*#__PURE__*/function () {
    function TextStyle(text, style) {
      _classCallCheck(this, TextStyle);

      this.parent = text;
      this.backgroundColor;
      this.backgroundColor2;
      this.backgroundHorizontalGradient;
      this.backgroundStrokeColor;
      this.backgroundStrokeLineWidth;
      this.backgroundCornerRadius;
      this.backgroundCornerIteration;
      this.fontFamily;
      this.fontSize;
      this.fontStyle;
      this.color;
      this.stroke;
      this.strokeThickness;
      this.shadowOffsetX;
      this.shadowOffsetY;
      this.shadowColor;
      this.shadowBlur;
      this.shadowStroke;
      this.shadowFill;
      this.underlineColor;
      this.underlineThickness;
      this.underlineOffset;
      this.halign;
      this.valign;
      this.maxLines;
      this.fixedWidth;
      this.fixedHeight;
      this.resolution;
      this.lineSpacing;
      this.xOffset;
      this.rtl;
      this.testString;
      this.baselineX;
      this.baselineY;
      this.wrapMode;
      this.wrapWidth;
      this.wrapCallback;
      this.wrapCallbackScope;
      this._font; //  Set to defaults + user style

      this.setStyle(style, false, true);
      var metrics = GetValue$6(style, 'metrics', false); //  Provide optional TextMetrics in the style object to avoid the canvas look-up / scanning
      //  Doing this is reset if you then change the font of this TextStyle after creation

      if (metrics) {
        this.metrics = {
          ascent: GetValue$6(metrics, 'ascent', 0),
          descent: GetValue$6(metrics, 'descent', 0),
          fontSize: GetValue$6(metrics, 'fontSize', 0)
        };
      } else {
        this.metrics = MeasureText(this);
      }
    }

    _createClass(TextStyle, [{
      key: "canvas",
      get: function get() {
        return this.parent.canvasText.canvas;
      }
    }, {
      key: "context",
      get: function get() {
        return this.parent.canvasText.context;
      }
    }, {
      key: "isWrapFitMode",
      get: function get() {
        return this.fixedWidth > 0 && this.wrapMode !== CONST.NO_WRAP && this.wrapWidth === 0;
      }
    }, {
      key: "setStyle",
      value: function setStyle(style, updateText, setDefaults) {
        if (updateText === undefined) {
          updateText = true;
        }

        if (setDefaults === undefined) {
          setDefaults = false;
        }

        if (style && style.hasOwnProperty('wrap')) {
          var wrap = style.wrap;

          if (wrap.hasOwnProperty('mode')) {
            var mode = wrap.mode;

            if (typeof mode === 'string') {
              wrap.mode = WRAPMODE[mode];
            }
          } else {
            if (wrap.hasOwnProperty('width')) {
              wrap.mode = 1;
            }
          }
        } // default halign of RTL is 'right'


        if (style && style.rtl && setDefaults && !style.hasOwnProperty('halign')) {
          style.halign = 'right';
        } //  Avoid type mutation


        if (style && style.hasOwnProperty('fontSize') && typeof style.fontSize === 'number') {
          style.fontSize = style.fontSize.toString() + 'px';
        }

        for (var key in propertyMap) {
          var prop = propertyMap[key]; // [ Object Key, Default Value, preCallback ]

          var objKey = prop[0];
          var defaultValue = setDefaults ? prop[1] : this[key];
          var postCallback = prop[2];

          if (key === 'wrapCallback' || key === 'wrapCallbackScope') {
            // Callback & scope should be set without processing the values
            this[key] = GetValue$6(style, objKey, defaultValue);
          } else {
            var value = GetAdvancedValue(style, objKey, defaultValue);

            if (postCallback) {
              value = postCallback(value);
            }

            this[key] = value;
          }
        } //  Allow for 'font' override


        var font = GetValue$6(style, 'font', null);

        if (font === null) {
          this._font = this.fontStyle + ' ' + this.fontSize + ' ' + this.fontFamily;
        } else {
          this._font = font;
        } //  Allow for 'fill' to be used in place of 'color'


        var fill = GetValue$6(style, 'fill', null);

        if (fill !== null) {
          this.color = GetStyle(fill);
        }

        var imageData = GetValue$6(style, 'images', undefined);

        if (imageData) {
          this.parent.addImage(imageData);
        }

        if (updateText) {
          return this.update(true);
        } else {
          return this.parent;
        }
      }
    }, {
      key: "syncFont",
      value: function syncFont(canvas, context) {
        context.font = this._font;
      }
    }, {
      key: "syncStyle",
      value: function syncStyle(canvas, context) {
        context.textBaseline = 'alphabetic';
        context.fillStyle = this.color;
        context.strokeStyle = this.stroke;
        context.lineWidth = this.strokeThickness;
        context.lineCap = 'round';
        context.lineJoin = 'round';
      }
    }, {
      key: "syncShadow",
      value: function syncShadow(context, enabled) {
        if (enabled) {
          context.shadowOffsetX = this.shadowOffsetX;
          context.shadowOffsetY = this.shadowOffsetY;
          context.shadowColor = this.shadowColor;
          context.shadowBlur = this.shadowBlur;
        } else {
          context.shadowOffsetX = 0;
          context.shadowOffsetY = 0;
          context.shadowColor = 0;
          context.shadowBlur = 0;
        }
      }
    }, {
      key: "update",
      value: function update(recalculateMetrics) {
        if (recalculateMetrics) {
          this._font = "".concat(this.fontStyle, " ").concat(this.fontSize, " ").concat(this.fontFamily).trim();
          this.metrics = MeasureText(this);
        }

        return this.parent.updateText(recalculateMetrics);
      }
    }, {
      key: "buildFont",
      value: function buildFont() {
        var newFont = "".concat(this.fontStyle, " ").concat(this.fontSize, " ").concat(this.fontFamily).trim();

        if (newFont !== this._font) {
          this._font = newFont; //this.metrics = MeasureText(this);
        }

        return this;
      }
    }, {
      key: "setFont",
      value: function setFont(font) {
        if (typeof font === 'string') {
          this.fontFamily = font;
          this.fontSize = '';
          this.fontStyle = '';
        } else {
          this.fontFamily = GetValue$6(font, 'fontFamily', 'Courier');
          this.fontSize = GetValue$6(font, 'fontSize', '16px');
          this.fontStyle = GetValue$6(font, 'fontStyle', '');
        }

        return this.update(true);
      }
    }, {
      key: "setFontFamily",
      value: function setFontFamily(family) {
        this.fontFamily = family;
        return this.update(true);
      }
    }, {
      key: "setFontStyle",
      value: function setFontStyle(style) {
        this.fontStyle = style;
        return this.update(true);
      }
    }, {
      key: "setFontSize",
      value: function setFontSize(size) {
        if (typeof size === 'number') {
          size = size.toString() + 'px';
        }

        this.fontSize = size;
        return this.update(true);
      }
    }, {
      key: "setTestString",
      value: function setTestString(string) {
        this.testString = string;
        return this.update(true);
      }
    }, {
      key: "setFixedSize",
      value: function setFixedSize(width, height) {
        this.fixedWidth = width;
        this.fixedHeight = height;

        if (width) {
          this.parent.width = width;
        }

        if (height) {
          this.parent.height = height;
        }

        return this.update(this.isWrapFitMode);
      }
    }, {
      key: "setResolution",
      value: function setResolution(value) {
        this.resolution = value;
        return this.update(false);
      }
    }, {
      key: "setLineSpacing",
      value: function setLineSpacing(value) {
        this.lineSpacing = value;
        return this.update(false);
      }
    }, {
      key: "setXOffset",
      value: function setXOffset(value) {
        this.xOffset = value;
        return this.update(false);
      }
    }, {
      key: "setBackgroundColor",
      value: function setBackgroundColor(color, color2, isHorizontalGradient) {
        if (isHorizontalGradient === undefined) {
          isHorizontalGradient = true;
        }

        this.backgroundColor = GetStyle(color, this.canvas, this.context);
        this.backgroundColor2 = GetStyle(color2, this.canvas, this.context);
        this.backgroundHorizontalGradient = isHorizontalGradient;
        return this.update(false);
      }
    }, {
      key: "setBackgroundStrokeColor",
      value: function setBackgroundStrokeColor(color, lineWidth) {
        this.backgroundStrokeColor = GetStyle(color, this.canvas, this.context);
        this.backgroundStrokeLineWidth = lineWidth;
        return this.update(false);
      }
    }, {
      key: "setBackgroundCornerRadius",
      value: function setBackgroundCornerRadius(radius, iteration) {
        this.backgroundCornerRadius = radius;
        this.backgroundCornerIteration = iteration;
        return this.update(false);
      }
    }, {
      key: "setFill",
      value: function setFill(color) {
        this.color = GetStyle(color, this.canvas, this.context);
        return this.update(false);
      }
    }, {
      key: "setColor",
      value: function setColor(color) {
        this.color = GetStyle(color, this.canvas, this.context);
        return this.update(false);
      }
    }, {
      key: "setStroke",
      value: function setStroke(color, thickness) {
        if (color === undefined) {
          //  Reset the stroke to zero (disabling it)
          this.strokeThickness = 0;
        } else {
          if (thickness === undefined) {
            thickness = this.strokeThickness;
          }

          this.stroke = GetStyle(color, this.canvas, this.context);
          this.strokeThickness = thickness;
        }

        return this.update(true);
      }
    }, {
      key: "setShadow",
      value: function setShadow(x, y, color, blur, shadowStroke, shadowFill) {
        if (x === undefined) {
          x = 0;
        }

        if (y === undefined) {
          y = 0;
        }

        if (color === undefined) {
          color = '#000';
        }

        if (blur === undefined) {
          blur = 0;
        }

        if (shadowStroke === undefined) {
          shadowStroke = false;
        }

        if (shadowFill === undefined) {
          shadowFill = true;
        }

        this.shadowOffsetX = x;
        this.shadowOffsetY = y;
        this.shadowColor = GetStyle(color, this.canvas, this.context);
        this.shadowBlur = blur;
        this.shadowStroke = shadowStroke;
        this.shadowFill = shadowFill;
        return this.update(false);
      }
    }, {
      key: "setShadowOffset",
      value: function setShadowOffset(x, y) {
        if (x === undefined) {
          x = 0;
        }

        if (y === undefined) {
          y = x;
        }

        this.shadowOffsetX = x;
        this.shadowOffsetY = y;
        return this.update(false);
      }
    }, {
      key: "setShadowColor",
      value: function setShadowColor(color) {
        if (color === undefined) {
          color = '#000';
        }

        this.shadowColor = GetStyle(color, this.canvas, this.context);
        return this.update(false);
      }
    }, {
      key: "setShadowBlur",
      value: function setShadowBlur(blur) {
        if (blur === undefined) {
          blur = 0;
        }

        this.shadowBlur = blur;
        return this.update(false);
      }
    }, {
      key: "setShadowStroke",
      value: function setShadowStroke(enabled) {
        this.shadowStroke = enabled;
        return this.update(false);
      }
    }, {
      key: "setShadowFill",
      value: function setShadowFill(enabled) {
        this.shadowFill = enabled;
        return this.update(false);
      }
    }, {
      key: "setUnderline",
      value: function setUnderline(color, thickness, offset) {
        if (color === undefined) {
          color = '#000';
        }

        if (thickness === undefined) {
          thickness = 0;
        }

        if (offset === undefined) {
          offset = 0;
        }

        this.underlineColor = GetStyle(color, this.canvas, this.context);
        this.underlineThickness = thickness;
        this.underlineOffset = offset;
        return this.update(false);
      }
    }, {
      key: "setUnderlineColor",
      value: function setUnderlineColor(color) {
        if (color === undefined) {
          color = '#000';
        }

        this.underlineColor = GetStyle(color, this.canvas, this.context);
        return this.update(false);
      }
    }, {
      key: "setUnderlineThickness",
      value: function setUnderlineThickness(thickness) {
        if (thickness === undefined) {
          thickness = 0;
        }

        this.underlineThickness = thickness;
        return this.update(false);
      }
    }, {
      key: "setUnderlineOffset",
      value: function setUnderlineOffset(offset) {
        if (offset === undefined) {
          offset = 0;
        }

        this.underlineOffset = offset;
        return this.update(false);
      }
    }, {
      key: "setWrapMode",
      value: function setWrapMode(mode) {
        if (typeof mode === 'string') {
          mode = WRAPMODE[mode.toLowerCase()] || 0;
        }

        this.wrapMode = mode;
        return this.update(true);
      }
    }, {
      key: "setWrapWidth",
      value: function setWrapWidth(width) {
        this.wrapWidth = width;
        return this.update(false);
      }
    }, {
      key: "setAlign",
      value: function setAlign(halign, valign) {
        if (halign === undefined) {
          halign = 'left';
        }

        if (valign === undefined) {
          valign = 'top';
        }

        this.halign = halign;
        this.valign = valign;
        return this.update(false);
      }
    }, {
      key: "setHAlign",
      value: function setHAlign(halign) {
        if (halign === undefined) {
          halign = 'left';
        }

        this.halign = halign;
        return this.update(false);
      }
    }, {
      key: "setVAlign",
      value: function setVAlign(valign) {
        if (valign === undefined) {
          valign = 'top';
        }

        this.valign = valign;
        return this.update(false);
      }
    }, {
      key: "setMaxLines",
      value: function setMaxLines(max) {
        if (max === undefined) {
          max = 0;
        }

        this.maxLines = max;
        return this.update(false);
      }
    }, {
      key: "getTextMetrics",
      value: function getTextMetrics() {
        var metrics = this.metrics;
        return {
          ascent: metrics.ascent,
          descent: metrics.descent,
          fontSize: metrics.fontSize
        };
      }
    }, {
      key: "setTextMetrics",
      value: function setTextMetrics(metrics, font) {
        this.metrics.ascent = metrics.ascent;
        this.metrics.descent = metrics.descent;
        this.metrics.fontSize = metrics.fontSize;

        if (typeof font === 'string') {
          this.fontFamily = font;
          this.fontSize = '';
          this.fontStyle = '';
        } else {
          this.fontFamily = GetValue$6(font, 'fontFamily', this.fontFamily);
          this.fontSize = GetValue$6(font, 'fontSize', this.fontSize);
          this.fontStyle = GetValue$6(font, 'fontStyle', this.fontStyle);
        }

        return this.parent.updateText(true);
      }
    }, {
      key: "lineHeight",
      get: function get() {
        return this.metrics.fontSize + this.strokeThickness + this.lineSpacing;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var output = {};

        for (var key in propertyMap) {
          output[key] = this[key];
        }

        output.metrics = this.getTextMetrics();
        return output;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.parent = undefined;
      }
    }]);

    return TextStyle;
  }();
  var WRAPMODE = {
    none: CONST.NO_WRAP,
    word: CONST.WORD_WRAP,
    "char": CONST.CHAR_WRAP,
    character: CONST.CHAR_WRAP
  };

  var CanvasPool$1 = Phaser.Display.Canvas.CanvasPool;

  var MeasureTextMargins = function MeasureTextMargins(textStyle, testString, out) {
    if (out === undefined) {
      out = {};
    }

    var canvas = CanvasPool$1.create(this);
    var context = canvas.getContext('2d');
    textStyle.syncFont(canvas, context);
    var metrics = context.measureText(testString);
    var width = Math.ceil(metrics.width * textStyle.baselineX);
    var baseline = width;
    var height = 2 * baseline;
    baseline = baseline * textStyle.baselineY | 0;
    canvas.width = width;
    canvas.height = height;
    context.fillStyle = '#f00';
    context.fillRect(0, 0, width, height);
    context.font = textStyle._font;
    context.textBaseline = 'alphabetic';
    context.fillStyle = '#000';
    context.fillText(textStyle.testString, 0, baseline);
    out.left = 0;

    if (width === 0 || height === 0 || !context.getImageData(0, 0, width, height)) {
      CanvasPool$1.remove(canvas);
      return out;
    }

    var imagedata = context.getImageData(0, 0, width, height).data;
    var stop = false;

    for (var x = 0; x < width; x++) {
      for (var y = 0; y < height; y++) {
        var idx = (y * width + x) * 4;

        if (imagedata[idx] !== 255) {
          out.left = x;
          stop = true;
          break;
        }
      }

      if (stop) {
        break;
      }
    }

    CanvasPool$1.remove(canvas);
    return out;
  };

  var GetValue$5 = Phaser.Utils.Objects.GetValue;

  var RoundRectangle = /*#__PURE__*/function () {
    function RoundRectangle(x, y, width, height, radiusConfig) {
      _classCallCheck(this, RoundRectangle);

      this.cornerRadius = {};
      this._width = 0;
      this._height = 0;
      this.setTo(x, y, width, height, radiusConfig);
    }

    _createClass(RoundRectangle, [{
      key: "setTo",
      value: function setTo(x, y, width, height, radiusConfig) {
        this.setPosition(x, y);
        this.setRadius(radiusConfig);
        this.setSize(width, height);
        return this;
      }
    }, {
      key: "setPosition",
      value: function setPosition(x, y) {
        if (x === undefined) {
          x = 0;
        }

        if (y === undefined) {
          y = x;
        }

        this.x = x;
        this.y = y;
        return this;
      }
    }, {
      key: "setRadius",
      value: function setRadius(config) {
        if (config === undefined) {
          config = 0;
        }

        var defaultRadiusX, defaultRadiusY;

        if (typeof config === 'number') {
          defaultRadiusX = config;
          defaultRadiusY = config;
        } else {
          defaultRadiusX = GetValue$5(config, 'x', 0);
          defaultRadiusY = GetValue$5(config, 'y', 0);
        }

        var radius = this.cornerRadius;
        radius.tl = GetRadius(GetValue$5(config, 'tl', undefined), defaultRadiusX, defaultRadiusY);
        radius.tr = GetRadius(GetValue$5(config, 'tr', undefined), defaultRadiusX, defaultRadiusY);
        radius.bl = GetRadius(GetValue$5(config, 'bl', undefined), defaultRadiusX, defaultRadiusY);
        radius.br = GetRadius(GetValue$5(config, 'br', undefined), defaultRadiusX, defaultRadiusY);
        return this;
      }
    }, {
      key: "setSize",
      value: function setSize(width, height) {
        this.width = width;
        this.height = height;
        return this;
      }
    }, {
      key: "minWidth",
      get: function get() {
        var radius = this.cornerRadius;
        return Math.max(radius.tl.x + radius.tr.x, radius.bl.x + radius.br.x);
      }
    }, {
      key: "minHeight",
      get: function get() {
        var radius = this.cornerRadius;
        return Math.max(radius.tl.y + radius.bl.y, radius.tr.y + radius.br.y);
      }
    }, {
      key: "width",
      get: function get() {
        return this._width;
      },
      set: function set(value) {
        if (value == null) {
          value = 0;
        }

        this._width = Math.max(value, this.minWidth);
      }
    }, {
      key: "height",
      get: function get() {
        return this._height;
      },
      set: function set(value) {
        if (value == null) {
          value = 0;
        }

        this._height = Math.max(value, this.minHeight);
      }
    }, {
      key: "radius",
      get: function get() {
        var radius = this.cornerRadius;
        var max = Math.max(radius.tl.x, radius.tl.y, radius.tr.x, radius.tr.y, radius.bl.x, radius.bl.y, radius.br.x, radius.br.y);
        return max;
      }
    }]);

    return RoundRectangle;
  }();

  var GetRadius = function GetRadius(radius, defaultRadiusX, defaultRadiusY) {
    if (radius === undefined) {
      return {
        x: defaultRadiusX,
        y: defaultRadiusY
      };
    } else if (typeof radius === 'number') {
      return {
        x: radius,
        y: radius
      };
    } else {
      return radius;
    }
  };

  var DegToRad = Phaser.Math.DegToRad;
  var Rad0 = DegToRad(0);
  var Rad90 = DegToRad(90);
  var Rad180 = DegToRad(180);
  var Rad270 = DegToRad(270);

  var AddRoundRectanglePath = function AddRoundRectanglePath(context, x, y, width, height, radiusConfig, iteration) {
    var geom = new RoundRectangle(x, y, width, height, radiusConfig),
        minWidth = geom.minWidth,
        minHeight = geom.minHeight,
        scaleRX = width >= minWidth ? 1 : width / minWidth,
        scaleRY = height >= minHeight ? 1 : height / minHeight;
    var cornerRadius = geom.cornerRadius;
    var radius, radiusX, radiusY, centerX, centerY;
    context.save();
    context.beginPath();
    context.translate(x, y); // Bottom-right

    radius = cornerRadius.br;
    radiusX = radius.x * scaleRX;
    radiusY = radius.y * scaleRY;
    centerX = width - radiusX;
    centerY = height - radiusY;
    context.moveTo(width, centerY);

    if (radiusX > 0 && radiusY > 0) {
      ArcTo(context, centerX, centerY, radiusX, radiusY, Rad0, Rad90, iteration);
    } else {
      context.lineTo(width, height);
      context.lineTo(centerX, height);
    } // Bottom-left


    radius = cornerRadius.bl;
    radiusX = radius.x * scaleRX;
    radiusY = radius.y * scaleRY;
    centerX = radiusX;
    centerY = height - radiusY;
    context.lineTo(radiusX, height);

    if (radiusX > 0 && radiusY > 0) {
      ArcTo(context, centerX, centerY, radiusX, radiusY, Rad90, Rad180, iteration);
    } else {
      context.lineTo(0, height);
      context.lineTo(0, centerY);
    } // Top-left


    radius = cornerRadius.tl;
    radiusX = radius.x * scaleRX;
    radiusY = radius.y * scaleRY;
    centerX = radiusX;
    centerY = radiusY;
    context.lineTo(0, centerY);

    if (radiusX > 0 && radiusY > 0) {
      ArcTo(context, centerX, centerY, radiusX, radiusY, Rad180, Rad270, iteration);
    } else {
      context.lineTo(0, 0);
      context.lineTo(centerX, 0);
    } // Top-right


    radius = cornerRadius.tr;
    radiusX = radius.x * scaleRX;
    radiusY = radius.y * scaleRY;
    centerX = width - radiusX;
    centerY = radiusY;
    context.lineTo(centerX, 0);

    if (radiusX > 0 && radiusY > 0) {
      ArcTo(context, centerX, centerY, radiusX, radiusY, Rad270, Rad0, iteration);
    } else {
      context.lineTo(width, 0);
      context.lineTo(width, centerY);
    }

    context.closePath();
    context.restore();
  };

  var ArcTo = function ArcTo(context, centerX, centerY, radiusX, radiusY, startAngle, endAngle, iteration) {
    if (iteration == null) {
      // undefined, or null
      context.ellipse(centerX, centerY, radiusX, radiusY, 0, startAngle, endAngle);
    } else {
      iteration += 1;
      var x, y, angle;
      var step = (endAngle - startAngle) / iteration;

      for (var i = 0; i <= iteration; i++) {
        angle = startAngle + step * i;
        x = centerX + radiusX * Math.cos(angle);
        y = centerY + radiusY * Math.sin(angle);
        context.lineTo(x, y);
      }
    }
  };

  var DrawRoundRectangle = function DrawRoundRectangle(canvas, context, x, y, width, height, radiusConfig, fillStyle, strokeStyle, lineWidth, fillColor2, isHorizontalGradient, iteration) {
    AddRoundRectanglePath(context, x, y, width, height, radiusConfig, iteration);

    if (fillStyle != null) {
      if (fillColor2 != null) {
        var grd;

        if (isHorizontalGradient) {
          grd = context.createLinearGradient(0, 0, width, 0);
        } else {
          grd = context.createLinearGradient(0, 0, 0, height);
        }

        grd.addColorStop(0, fillStyle);
        grd.addColorStop(1, fillColor2);
        fillStyle = grd;
      }

      context.fillStyle = fillStyle;
      context.fill();
    }

    if (strokeStyle != null && lineWidth > 0) {
      context.strokeStyle = strokeStyle;
      context.lineWidth = lineWidth;
      context.stroke();
    }
  };

  var DrawRoundRectangleBackground = function DrawRoundRectangleBackground(canvasObject, color, strokeColor, strokeLineWidth, radius, color2, isHorizontalGradient, iteration) {
    if (color == null && strokeColor == null) {
      return;
    }

    var width = canvasObject.canvas.width,
        height = canvasObject.canvas.height;

    if (strokeColor == null) {
      strokeLineWidth = 0;
    }

    var x = strokeLineWidth / 2;
    width -= strokeLineWidth;
    height -= strokeLineWidth;
    DrawRoundRectangle(canvasObject.canvas, canvasObject.context, x, x, width, height, radius, color, strokeColor, strokeLineWidth, color2, isHorizontalGradient, iteration);
  };

  var DrawMethods = {
    draw: function draw(startX, startY, textWidth, textHeight) {
      var penManager = this.penManager;
      this.hitAreaManager.clear();
      var context = this.context;
      context.save();
      var defaultStyle = this.defaultStyle;
      this.clear();
      DrawRoundRectangleBackground(this, defaultStyle.backgroundColor, defaultStyle.backgroundStrokeColor, defaultStyle.backgroundStrokeLineWidth, defaultStyle.backgroundCornerRadius, defaultStyle.backgroundColor2, defaultStyle.backgroundHorizontalGradient, defaultStyle.backgroundCornerIteration); // draw lines

      startX += this.startXOffset;
      startY += this.startYOffset;
      var defaultHalign = defaultStyle.halign,
          valign = defaultStyle.valign;
      var lineWidth,
          lineHeight = defaultStyle.lineHeight;
      var lines = penManager.lines;
      var totalLinesNum = lines.length,
          maxLines = defaultStyle.maxLines;
      var drawLinesNum, drawLineStartIdx, drawLineEndIdx;

      if (maxLines > 0 && totalLinesNum > maxLines) {
        drawLinesNum = maxLines;

        if (valign === 'center') {
          // center
          drawLineStartIdx = Math.floor((totalLinesNum - drawLinesNum) / 2);
        } else if (valign === 'bottom') {
          // bottom
          drawLineStartIdx = totalLinesNum - drawLinesNum;
        } else {
          drawLineStartIdx = 0;
        }
      } else {
        drawLinesNum = totalLinesNum;
        drawLineStartIdx = 0;
      }

      drawLineEndIdx = drawLineStartIdx + drawLinesNum;
      var offsetX, offsetY;
      var rtl = this.rtl,
          rtlOffset = rtl ? this.parent.width : undefined;

      if (valign === 'center') {
        // center
        offsetY = Math.max((textHeight - drawLinesNum * lineHeight) / 2, 0);
      } else if (valign === 'bottom') {
        // bottom
        offsetY = Math.max(textHeight - drawLinesNum * lineHeight - 2, 0);
      } else {
        offsetY = 0;
      }

      offsetY += startY;

      for (var lineIdx = drawLineStartIdx; lineIdx < drawLineEndIdx; lineIdx++) {
        lineWidth = penManager.getLineWidth(lineIdx);

        if (lineWidth === 0) {
          continue;
        }

        var pens = lines[lineIdx],
            penCount = pens.length;
        var halign = defaultHalign; // Seek if there has algin tag

        for (var penIdx = 0; penIdx < penCount; penIdx++) {
          var penAlign = pens[penIdx].prop.align;

          if (penAlign) {
            halign = penAlign;
            break;
          }
        }

        if (halign === 'center') {
          // center
          offsetX = (textWidth - lineWidth) / 2;
        } else if (halign === 'right') {
          // right
          offsetX = !rtl ? textWidth - lineWidth : 0;
        } else {
          offsetX = !rtl ? 0 : textWidth - lineWidth;
        }

        offsetX += startX;

        for (var penIdx = 0; penIdx < penCount; penIdx++) {
          this.drawPen(pens[penIdx], offsetX, offsetY, rtlOffset);
        }
      }

      context.restore();
    },
    drawPen: function drawPen(pen, offsetX, offsetY, rtlOffset) {
      offsetX += pen.x;
      offsetY += pen.y + (pen.prop.y || 0);

      if (rtlOffset !== undefined) {
        offsetX = rtlOffset - offsetX;
      }

      var canvas = this.canvas;
      var context = this.context;
      context.save();
      var curStyle = this.parser.propToContextStyle(this.defaultStyle, pen.prop);
      curStyle.buildFont();
      curStyle.syncFont(canvas, context);
      curStyle.syncStyle(canvas, context); // Underline

      if (curStyle.underlineThickness > 0 && pen.width > 0) {
        this.drawUnderline(offsetX, offsetY, pen.width, curStyle);
      } // Text


      if (pen.isTextPen) {
        this.drawText(offsetX, offsetY, pen.text, curStyle);
      } // Image


      if (pen.isImagePen) {
        this.drawImage(offsetX, offsetY, pen.prop.img, curStyle);
      }

      context.restore();

      if (pen.hasAreaMarker && pen.width > 0) {
        this.hitAreaManager.add(pen.prop.area, // key
        offsetX, offsetY - this.startYOffset, // y
        pen.width, // width
        this.defaultStyle.lineHeight // height
        );
      }
    },
    clear: function clear() {
      var canvas = this.canvas;
      this.context.clearRect(0, 0, canvas.width, canvas.height);
    },
    drawUnderline: function drawUnderline(x, y, width, style) {
      y += style.underlineOffset - style.underlineThickness / 2;

      if (this.autoRound) {
        x = Math.round(x);
        y = Math.round(y);
      }

      var context = this.context;
      var savedLineCap = context.lineCap;
      context.lineCap = 'butt';
      context.strokeStyle = style.underlineColor;
      context.lineWidth = style.underlineThickness;
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x + width, y);
      context.stroke();
      context.lineCap = savedLineCap;
    },
    drawText: function drawText(x, y, text, style) {
      if (this.autoRound) {
        x = Math.round(x);
        y = Math.round(y);
      }

      var context = this.context;

      if (style.stroke && style.stroke !== 'none' && style.strokeThickness > 0) {
        style.syncShadow(context, style.shadowStroke);
        context.strokeText(text, x, y);
      }

      if (style.color && style.color !== 'none') {
        style.syncShadow(context, style.shadowFill);
        context.fillText(text, x, y);
      }
    },
    drawImage: function drawImage(x, y, imgKey, style) {
      y -= this.startYOffset;
      this.parent.imageManager.draw(imgKey, this.context, x, y, this.autoRound);
    }
  };

  var Stack = /*#__PURE__*/function () {
    function Stack() {
      _classCallCheck(this, Stack);

      this.items = [];
    }

    _createClass(Stack, [{
      key: "destroy",
      value: function destroy() {
        this.clear();
        this.items = undefined;
      }
    }, {
      key: "pop",
      value: function pop() {
        return this.items.length > 0 ? this.items.pop() : null;
      }
    }, {
      key: "push",
      value: function push(l) {
        this.items.push(l);
        return this;
      }
    }, {
      key: "pushMultiple",
      value: function pushMultiple(arr) {
        this.items.push.apply(this.items, arr);
        arr.length = 0;
        return this;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.items.length = 0;
        return this;
      }
    }]);

    return Stack;
  }();

  var GetValue$4 = Phaser.Utils.Objects.GetValue;
  var NO_NEWLINE$3 = CONST.NO_NEWLINE;
  var RAW_NEWLINE$1 = CONST.RAW_NEWLINE;

  var Pen = /*#__PURE__*/function () {
    function Pen(config) {
      _classCallCheck(this, Pen);

      this.prop = {};
      this.resetFromJSON(config);
    }

    _createClass(Pen, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        // (txt, x, y, width, prop, newLineMode, startIndex)
        this.text = GetValue$4(o, 'text', '');
        this.x = GetValue$4(o, 'x', 0);
        this.y = GetValue$4(o, 'y', 0);
        this.width = GetValue$4(o, 'width', 0);
        var prop = GetValue$4(o, 'prop', null);

        if (prop === null) {
          prop = {};
        }

        this.prop = prop;
        this.newLineMode = GetValue$4(o, 'newLineMode', 0);
        this.startIndex = GetValue$4(o, 'startIndex', 0);
      }
    }, {
      key: "plainText",
      get: function get() {
        var txt = this.text;

        if (this.newLineMode === RAW_NEWLINE$1) {
          txt += "\n";
        }

        return txt;
      }
    }, {
      key: "wrapText",
      get: function get() {
        var txt = this.text;

        if (this.newLineMode !== NO_NEWLINE$3) {
          txt += "\n";
        }

        return txt;
      }
    }, {
      key: "rawTextLength",
      get: function get() {
        var len = this.text.length;

        if (this.newLineMode === RAW_NEWLINE$1) {
          len += 1;
        }

        return len;
      }
    }, {
      key: "endIndex",
      get: function get() {
        return this.startIndex + this.rawTextLength;
      }
    }, {
      key: "lastX",
      get: function get() {
        return this.x + this.width;
      }
    }, {
      key: "isTextPen",
      get: function get() {
        return this.text !== '';
      }
    }, {
      key: "isImagePen",
      get: function get() {
        return !!this.prop.img;
      }
    }, {
      key: "hasAreaMarker",
      get: function get() {
        return !!this.prop.area;
      }
    }]);

    return Pen;
  }();

  var Clear = function Clear(obj) {
    if (Array.isArray(obj)) {
      obj.length = 0;
    } else {
      for (var key in obj) {
        delete obj[key];
      }
    }
  };

  /**
   * Shallow Object Clone. Will not out nested objects.
   * @param {object} obj JSON object
   * @param {object} ret JSON object to return, set null to return a new object
   * @returns {object} this object
   */

  var Clone = function Clone(obj, out) {
    var objIsArray = Array.isArray(obj);

    if (out === undefined) {
      out = objIsArray ? [] : {};
    } else {
      Clear(out);
    }

    if (objIsArray) {
      out.length = obj.length;

      for (var i = 0, cnt = obj.length; i < cnt; i++) {
        out[i] = obj[i];
      }
    } else {
      for (var key in obj) {
        out[key] = obj[key];
      }
    }

    return out;
  };

  var NOOP = function NOOP() {//  NOOP
  };

  var GetFastValue = Phaser.Utils.Objects.GetFastValue;
  var NO_NEWLINE$2 = CONST.NO_NEWLINE;
  var WRAPPED_NEWLINE$1 = CONST.WRAPPED_NEWLINE;
  var PensPool = new Stack(); // default pens pool

  var LinesPool$1 = new Stack(); // default lines pool

  var PenManager = /*#__PURE__*/function () {
    function PenManager(config) {
      _classCallCheck(this, PenManager);

      this.pens = []; // all pens

      this.lines = []; // pens in lines [ [],[],[],.. ]

      this.maxLinesWidth = undefined;
      this.PensPool = GetFastValue(config, 'pensPool', PensPool);
      this.LinesPool = GetFastValue(config, 'linesPool', LinesPool$1);
      this.tagToText = GetFastValue(config, 'tagToText', NOOP);
      this.tagToTextScope = GetFastValue(config, 'tagToTextScope', undefined);
    }

    _createClass(PenManager, [{
      key: "destroy",
      value: function destroy() {
        this.clear();
        this.tagToText = undefined;
        this.tagToTextScope = undefined;
      }
    }, {
      key: "clear",
      value: function clear() {
        for (var i = 0, len = this.lines.length; i < len; i++) {
          this.lines[i].length = 0;
        }

        this.PensPool.pushMultiple(this.pens);
        this.LinesPool.pushMultiple(this.lines);
        this.maxLinesWidth = undefined;
      }
    }, {
      key: "addTextPen",
      value: function addTextPen(text, x, y, width, prop, newLineMode) {
        var pen = this.PensPool.pop();

        if (pen == null) {
          pen = new Pen();
        }

        PEN_CONFIG.text = text;
        PEN_CONFIG.x = x;
        PEN_CONFIG.y = y;
        PEN_CONFIG.width = width;
        PEN_CONFIG.prop = prop;
        PEN_CONFIG.newLineMode = newLineMode;
        pen.resetFromJSON(PEN_CONFIG);
        this.addPen(pen);
        return this;
      }
    }, {
      key: "addImagePen",
      value: function addImagePen(x, y, width, prop) {
        this.addTextPen('', x, y, width, prop, NO_NEWLINE$2);
        return this;
      }
    }, {
      key: "addNewLinePen",
      value: function addNewLinePen() {
        var previousPen = this.lastPen;
        var x = previousPen ? previousPen.lastX : 0;
        var y = previousPen ? previousPen.y : 0;
        var prop = previousPen ? Clone(previousPen.prop) : null;
        this.addTextPen('', x, y, 0, prop, WRAPPED_NEWLINE$1);
        return this;
      }
    }, {
      key: "addPen",
      value: function addPen(pen) {
        var previousPen = this.lastPen;

        if (previousPen == null) {
          pen.startIndex = 0;
        } else {
          pen.startIndex = previousPen.endIndex;
        }

        this.pens.push(pen); // maintan lines

        var line = this.lastLine;

        if (line == null) {
          line = this.LinesPool.pop() || [];
          this.lines.push(line);
        }

        line.push(pen); // new line, add an empty line

        if (pen.newLineMode !== NO_NEWLINE$2) {
          line = this.LinesPool.pop() || [];
          this.lines.push(line);
        }

        this.maxLinesWidth = undefined;
      }
    }, {
      key: "clone",
      value: function clone(targetPenManager) {
        if (targetPenManager == null) targetPenManager = new PenManager();
        targetPenManager.clear();

        for (var li = 0, llen = this.lines.length; li < llen; li++) {
          var pens = this.lines[li];

          for (var pi = 0, plen = pens.length; pi < plen; pi++) {
            var pen = pens[pi];
            targetPenManager.addPen(pen.text, pen.x, pen.y, pen.width, Clone(pen.prop), pen.newLineMode);
          }
        }

        return targetPenManager;
      }
    }, {
      key: "lastPen",
      get: function get() {
        return this.pens[this.pens.length - 1];
      }
    }, {
      key: "lastLine",
      get: function get() {
        return this.lines[this.lines.length - 1];
      }
    }, {
      key: "getLineStartIndex",
      value: function getLineStartIndex(i) {
        if (i >= this.lines.length) {
          return this.getLineEndIndex(i);
        } else {
          var line = this.lines[i];
          return line && line[0] ? line[0].startIndex : 0;
        }
      }
    }, {
      key: "getLineEndIndex",
      value: function getLineEndIndex(i) {
        if (i >= this.lines.length) {
          i = this.lines.length - 1;
        }

        var li,
            hasLastPen = false,
            line;

        for (li = i; li >= 0; li--) {
          line = this.lines[li];
          hasLastPen = line != null && line.length > 0;

          if (hasLastPen) {
            break;
          }
        }

        if (!hasLastPen) {
          return 0;
        }

        var lastPen = line[line.length - 1];
        return lastPen.endIndex;
      }
    }, {
      key: "getLineWidth",
      value: function getLineWidth(i) {
        var line = this.lines[i];

        if (!line) {
          return 0;
        }

        var lastPen = line[line.length - 1];

        if (lastPen == null) {
          return 0;
        }

        var lineWidth = lastPen.lastX; // start from 0

        return lineWidth;
      }
    }, {
      key: "getMaxLineWidth",
      value: function getMaxLineWidth() {
        if (this.maxLinesWidth !== undefined) {
          return this.maxLinesWidth;
        }

        var w,
            maxW = 0;

        for (var i = 0, len = this.lines.length; i < len; i++) {
          w = this.getLineWidth(i);

          if (w > maxW) {
            maxW = w;
          }
        }

        this.maxLinesWidth = maxW;
        return maxW;
      }
    }, {
      key: "getLineWidths",
      value: function getLineWidths() {
        var result = [];

        for (var i = 0, len = this.lines.length; i < len; i++) {
          result.push(this.getLineWidth(i));
        }

        return result;
      }
    }, {
      key: "linesCount",
      get: function get() {
        return this.lines.length;
      }
    }, {
      key: "plainText",
      get: function get() {
        var txt = "",
            pens = this.pens;

        for (var i = 0, len = pens.length; i < len; i++) {
          txt += pens[i].plainText;
        }

        return txt;
      }
    }, {
      key: "rawTextLength",
      get: function get() {
        var l = 0,
            pens = this.pens;

        for (var i = 0, len = this.pens.length; i < len; i++) {
          l += pens[i].rawTextLength;
        }

        return l;
      }
    }, {
      key: "getSliceTagText",
      value: function getSliceTagText(start, end, wrap) {
        if (start === undefined) {
          start = 0;
        }

        if (end === undefined) {
          var lastPen = this.lastPen;

          if (lastPen == null) {
            return "";
          }

          end = lastPen.endIndex;
        }

        if (wrap === undefined) {
          wrap = false;
        }

        var txt = "",
            pen,
            penTxt,
            penStartIdx,
            penEndIdx,
            isInRange;
        var currentProp, previousProp;

        for (var i = 0, len = this.pens.length; i < len; i++) {
          pen = this.pens[i];
          penEndIdx = pen.endIndex;

          if (penEndIdx <= start) {
            continue;
          }

          pen = this.pens[i];
          penTxt = !wrap ? pen.plainText : pen.wrapText;
          currentProp = pen.prop;
          penStartIdx = pen.startIndex;
          isInRange = penStartIdx >= start && penEndIdx <= end;

          if (!isInRange) {
            penTxt = penTxt.substring(start - penStartIdx, end - penStartIdx);
          }

          if (this.tagToTextScope) {
            txt += this.tagToText.call(this.tagToTextScope, penTxt, currentProp, previousProp);
          } else {
            txt += this.tagToText(penTxt, currentProp, previousProp);
          }

          previousProp = currentProp;

          if (penEndIdx >= end) {
            break;
          }
        }

        return txt;
      }
    }, {
      key: "length",
      get: function get() {
        return this.lines.length;
      },
      set: function set(value) {
        // Only for set length to 0 (clear)
        this.clear();
      }
    }]);

    return PenManager;
  }();
  var PEN_CONFIG = {};

  var Rectangle = Phaser.Geom.Rectangle;
  var RectanglePool = new Stack();

  var HitAreaManager = /*#__PURE__*/function () {
    function HitAreaManager() {
      _classCallCheck(this, HitAreaManager);

      this.hitAreas = [];
    }

    _createClass(HitAreaManager, [{
      key: "destroy",
      value: function destroy() {
        this.clear();
      }
    }, {
      key: "clear",
      value: function clear() {
        RectanglePool.pushMultiple(this.hitAreas);
        return this;
      }
    }, {
      key: "add",
      value: function add(key, x, y, width, height) {
        var rectangle = RectanglePool.pop();

        if (rectangle === null) {
          rectangle = new Rectangle(x, y, width, height);
        } else {
          rectangle.setTo(x, y, width, height);
        }

        rectangle.key = key;
        this.hitAreas.push(rectangle);
        return this;
      }
    }, {
      key: "getFirstHitArea",
      value: function getFirstHitArea(x, y) {
        var hitAreas = this.hitAreas,
            hitArea;

        for (var i = 0, cnt = hitAreas.length; i < cnt; i++) {
          hitArea = hitAreas[i];

          if (hitArea.contains(x, y)) {
            return hitArea;
          }
        }

        return null;
      }
    }, {
      key: "drawBounds",
      value: function drawBounds(graphics, color, parent) {
        if (color === undefined) {
          color = 0xffffff;
        }

        if (parent) {
          graphics.save().scaleCanvas(parent.scaleX, parent.scaleY).rotateCanvas(parent.rotation).translateCanvas(parent.x, parent.y);
        }

        var hitAreas = this.hitAreas,
            hitArea;

        for (var i = 0, cnt = hitAreas.length; i < cnt; i++) {
          hitArea = hitAreas[i];
          graphics.lineStyle(1, color).strokeRect(hitArea.x, hitArea.y, hitArea.width, hitArea.height);
        }

        if (parent) {
          graphics.restore();
        }

        return this;
      }
    }]);

    return HitAreaManager;
  }();

  var SetInteractive = function SetInteractive() {
    this.parent.on('pointerdown', function (pointer, localX, localY, event) {
      FireEvent.call(this, 'areadown', pointer, localX, localY);
    }, this).on('pointerup', function (pointer, localX, localY, event) {
      FireEvent.call(this, 'areaup', pointer, localX, localY);
    }, this);
  };

  var FireEvent = function FireEvent(eventName, pointer, localX, localY) {
    var area = this.hitAreaManager.getFirstHitArea(localX, localY);

    if (area === null) {
      return;
    }

    var key = area.key;
    this.parent.emit("".concat(eventName, "-").concat(key), pointer, localX, localY);
    this.parent.emit(eventName, key, pointer, localX, localY);
  };

  var LinesPool = new Stack();

  var FreeLine = function FreeLine(line) {
    if (!line) {
      return;
    }

    LinesPool.push(line);
  };

  var FreeLines = function FreeLines(lines) {
    if (!lines) {
      return;
    }

    LinesPool.pushMultiple(lines);
  };

  var GetLine = function GetLine(text, width, newLineMode) {
    var l = LinesPool.pop();

    if (l === null) {
      l = {};
    }

    l.text = text;
    l.width = width;
    l.newLineMode = newLineMode;
    return l;
  };

  var NO_NEWLINE$1 = CONST.NO_NEWLINE;
  var RAW_NEWLINE = CONST.RAW_NEWLINE;
  var WRAPPED_NEWLINE = CONST.WRAPPED_NEWLINE;
  var NO_WRAP$1 = CONST.NO_WRAP;
  var WORD_WRAP = CONST.WORD_WRAP;
  var CHAR_WRAP = CONST.CHAR_WRAP;
  var splitRegExp = CONST.SPLITREGEXP;

  var WrapText = function WrapText(text, getTextWidth, wrapMode, wrapWidth, offset) {
    if (wrapWidth <= 0) {
      wrapMode = NO_WRAP$1;
    }

    var retLines = [];

    if (!text || !text.length) {
      return retLines;
    }

    var isNoWrap = wrapMode === NO_WRAP$1;
    var isWordWrap = wrapMode === WORD_WRAP;
    var lines = text.split(splitRegExp),
        line,
        remainWidth,
        newLineMode;

    for (var i = 0, linesLen = lines.length; i < linesLen; i++) {
      line = lines[i];
      newLineMode = i === linesLen - 1 ? NO_NEWLINE$1 : RAW_NEWLINE;

      if (isNoWrap) {
        var textWidth = getTextWidth(line);
        retLines.push(GetLine(line, textWidth, newLineMode));
        continue;
      }

      remainWidth = i === 0 ? wrapWidth - offset : wrapWidth; // short string testing

      if (line.length <= 100) {
        var textWidth = getTextWidth(line);

        if (textWidth <= remainWidth) {
          retLines.push(GetLine(line, textWidth, newLineMode));
          continue;
        }
      }

      var tokenArray, isSpaceCharacterEnd;

      if (isWordWrap) {
        // word mode
        tokenArray = line.split(' ');
        isSpaceCharacterEnd = tokenArray[tokenArray.length - 1] === '';

        if (isSpaceCharacterEnd) {
          tokenArray.length -= 1;
        }
      } else {
        tokenArray = line;
      }

      var token, tokenWidth, isLastToken;
      var lineText = '',
          lineWidth = 0;
      var currLineWidth;
      var whiteSpaceWidth = isWordWrap ? getTextWidth(' ') : undefined;

      for (var j = 0, tokenLen = tokenArray.length; j < tokenLen; j++) {
        token = tokenArray[j];
        tokenWidth = getTextWidth(token);
        isLastToken = j === tokenLen - 1;

        if (isWordWrap && (!isLastToken || isSpaceCharacterEnd)) {
          token += ' ';
          tokenWidth += whiteSpaceWidth;
        } // Text width of single token is larger than a line width


        if (isWordWrap && tokenWidth > wrapWidth) {
          if (lineText !== '') {
            // Has pending lineText, flush it out
            retLines.push(GetLine(lineText, lineWidth, WRAPPED_NEWLINE));
          } else if (j === 0 && offset > 0) {
            // No pending lineText, but has previous text. Append a newline
            retLines.push(GetLine('', 0, WRAPPED_NEWLINE));
          } // Word break


          retLines.push.apply(retLines, _toConsumableArray(WrapText(token, getTextWidth, CHAR_WRAP, wrapWidth, 0))); // Continue at last-wordBreak-line

          var lastwordBreakLine = retLines.pop();
          lineText = lastwordBreakLine.text;
          lineWidth = lastwordBreakLine.width; // Free this line

          FreeLine(lastwordBreakLine); // Special case : Start at a space character, discard it

          if (lineText === ' ') {
            lineText = '';
            lineWidth = 0;
          }

          continue;
        }

        currLineWidth = lineWidth + tokenWidth;

        if (currLineWidth > remainWidth) {
          // New line
          retLines.push(GetLine(lineText, lineWidth, WRAPPED_NEWLINE));
          lineText = token;
          lineWidth = tokenWidth;
          remainWidth = wrapWidth;
        } else {
          // Append token, continue
          lineText += token;
          lineWidth = currLineWidth;
        }

        if (isLastToken) {
          // Flush remain text
          retLines.push(GetLine(lineText, lineWidth, newLineMode));
        }
      } // for token in tokenArray

    } // for each line in lines


    return retLines;
  };

  var GetValue$3 = Phaser.Utils.Objects.GetValue;
  var NO_WRAP = CONST.NO_WRAP;
  var NO_NEWLINE = CONST.NO_NEWLINE;

  var CanvasText = /*#__PURE__*/function () {
    function CanvasText(config) {
      _classCallCheck(this, CanvasText);

      this.parent = config.parent;
      this.context = GetValue$3(config, 'context', null);
      this.canvas = this.context.canvas;
      this.parser = GetValue$3(config, 'parser', null);
      this.defaultStyle = GetValue$3(config, 'style', null);
      this.autoRound = true;
      this.pensPool = GetValue$3(config, 'pensPool', null);
      this.penManager = this.newPenManager();
      this._tmpPenManager = null;
      this.hitAreaManager = new HitAreaManager();
      var context = this.context;

      this.getTextWidth = function (text) {
        return context.measureText(text).width;
      };
    }

    _createClass(CanvasText, [{
      key: "destroy",
      value: function destroy() {
        this.context = undefined;
        this.canvas = undefined;
        this.parser = undefined;
        this.defaultStyle = undefined;

        if (this.penManager) {
          this.penManager.destroy();
          this.penManager = undefined;
        }

        if (this._tmpPenManager) {
          this._tmpPenManager.destroy();

          this._tmpPenManager = undefined;
        }

        if (this.hitAreaManager) {
          this.hitAreaManager.destroy();
          this.hitAreaManager = undefined;
        }
      }
    }, {
      key: "updatePenManager",
      value: function updatePenManager(text, wrapMode, wrapWidth, lineHeight, penManager) {
        if (penManager === undefined) {
          penManager = this.penManager;
        }

        penManager.clear();

        if (text === "") {
          return penManager;
        }

        var textStyle = this.parent.style;

        if (textStyle.isWrapFitMode) {
          var padding = this.parent.padding;
          wrapWidth = textStyle.fixedWidth - padding.left - padding.right;
        }

        var canvas = this.canvas;
        var context = this.context;

        var MeasureText = function MeasureText(text) {
          return context.measureText(text).width;
        };

        var cursorX = 0,
            cursorY = 0;
        var customTextWrapCallback = textStyle.wrapCallback,
            customTextWrapCallbackScope = textStyle.wrapCallbackScope;
        var reuseLines = true;
        var plainText, curProp, curStyle;
        var match = this.parser.splitText(text),
            result,
            wrapLines;

        for (var i = 0, len = match.length; i < len; i++) {
          result = this.parser.tagTextToProp(match[i], curProp);
          plainText = result.plainText;
          curProp = result.prop;

          if (curProp.img) {
            // Image tag                
            var imgWidth = this.imageManager.getOuterWidth(curProp.img);

            if (wrapWidth > 0 && wrapMode !== NO_WRAP) {
              // Wrap mode
              if (wrapWidth < cursorX + imgWidth) {
                penManager.addNewLinePen();
                cursorY += lineHeight;
                cursorX = 0;
              }
            }

            penManager.addImagePen(cursorX, cursorY, imgWidth, Clone(curProp));
            cursorX += imgWidth;
          } else if (plainText !== '') {
            // wrap text to lines
            // Save the current context.
            context.save();
            curStyle = this.parser.propToContextStyle(this.defaultStyle, curProp);
            curStyle.buildFont();
            curStyle.syncFont(canvas, context);
            curStyle.syncStyle(canvas, context);

            if (!customTextWrapCallback) {
              wrapLines = WrapText(plainText, MeasureText, wrapMode, wrapWidth, cursorX);
            } else {
              // customTextWrapCallback
              wrapLines = customTextWrapCallback.call(customTextWrapCallbackScope, plainText, MeasureText, wrapWidth, cursorX);

              if (typeof wrapLines === 'string') {
                wrapLines = wrapLines.split('\n');
              }

              var n;

              for (var j = 0, jLen = wrapLines.length; j < jLen; j++) {
                n = wrapLines[j];

                if (typeof n === 'string') {
                  wrapLines[j] = GetLine(n, MeasureText(n), j < jLen - 1 ? 2 : 0);
                } else {
                  reuseLines = false;
                }
              }
            } // customTextWrapCallback
            // add pens


            var n;

            for (var j = 0, jLen = wrapLines.length; j < jLen; j++) {
              n = wrapLines[j];
              penManager.addTextPen(n.text, cursorX, cursorY, n.width, Clone(curProp), n.newLineMode);

              if (n.newLineMode !== NO_NEWLINE) {
                cursorX = 0;
                cursorY += lineHeight;
              } else {
                cursorX += n.width;
              }
            }

            if (reuseLines) {
              FreeLines(wrapLines);
            }

            wrapLines = null;
            context.restore();
          }
        }

        return penManager;
      }
    }, {
      key: "startXOffset",
      get: function get() {
        var defaultStyle = this.defaultStyle;
        return defaultStyle.strokeThickness / 2 + defaultStyle.xOffset;
      }
    }, {
      key: "startYOffset",
      get: function get() {
        var defaultStyle = this.defaultStyle;
        return defaultStyle.strokeThickness / 2 + defaultStyle.metrics.ascent;
      }
    }, {
      key: "lines",
      get: function get() {
        return this.penManager.lines;
      }
    }, {
      key: "desplayLinesCount",
      get: function get() {
        var linesCount = this.penManager.linesCount,
            maxLines = this.defaultStyle.maxLines;

        if (maxLines > 0 && linesCount > maxLines) {
          linesCount = maxLines;
        }

        return linesCount;
      }
    }, {
      key: "linesWidth",
      get: function get() {
        return this.penManager.getMaxLineWidth();
      }
    }, {
      key: "linesHeight",
      get: function get() {
        var linesCount = this.desplayLinesCount;
        var linesHeight = this.defaultStyle.lineHeight * linesCount;

        if (linesCount > 0) {
          linesHeight -= this.defaultStyle.lineSpacing;
        }

        return linesHeight;
      }
    }, {
      key: "imageManager",
      get: function get() {
        return this.parent.imageManager;
      }
    }, {
      key: "rtl",
      get: function get() {
        return this.parent.style.rtl;
      }
    }, {
      key: "newPenManager",
      value: function newPenManager() {
        return new PenManager({
          pensPool: this.pensPool,
          tagToText: this.parser.propToTagText,
          tagToTextScope: this.parser
        });
      }
    }, {
      key: "tmpPenManager",
      get: function get() {
        if (this._tmpPenManager === null) {
          this._tmpPenManager = this.newPenManager();
        }

        return this._tmpPenManager;
      }
    }, {
      key: "getPlainText",
      value: function getPlainText(text, start, end) {
        var plainText;

        if (text == null) {
          plainText = this.penManager.plainText;
        } else {
          var match = this.parser.splitText(text, 1); // PLAINTEXTONLY_MODE

          plainText = "";

          for (var i = 0, len = match.length; i < len; i++) {
            plainText += match[i];
          }
        }

        if (start != null || end != null) {
          if (start == null) {
            start = 0;
          }

          if (end == null) {
            end = plainText.length;
          }

          plainText = plainText.substring(start, end);
        }

        return plainText;
      }
    }, {
      key: "getPenManager",
      value: function getPenManager(text, retPenManager) {
        if (text === undefined) {
          return this.copyPenManager(retPenManager, this.penManager);
        }

        if (retPenManager === undefined) {
          retPenManager = this.newPenManager();
        }

        var defaultStyle = this.defaultStyle;
        this.updatePenManager(text, defaultStyle.wrapMode, defaultStyle.wrapWidth, defaultStyle.lineHeight, retPenManager);
        return retPenManager;
      }
    }, {
      key: "getText",
      value: function getText(text, start, end, wrap) {
        if (text == null) {
          return this.penManager.getSliceTagText(start, end, wrap);
        }

        var penManager = this.tmpPenManager;
        var defaultStyle = this.defaultStyle;
        this.updatePenManager(text, defaultStyle.wrapMode, defaultStyle.wrapWidth, defaultStyle.lineHeight, penManager);
        return penManager.getSliceTagText(start, end, wrap);
      }
    }, {
      key: "copyPenManager",
      value: function copyPenManager(ret, src) {
        if (src === undefined) {
          src = this.penManager;
        }

        return src.copy(ret);
      }
    }, {
      key: "getTextWidth",
      value: function getTextWidth(penManager) {
        if (penManager === undefined) {
          penManager = this.penManager;
        }

        return penManager.getMaxLineWidth();
      }
    }, {
      key: "getLastPen",
      value: function getLastPen(penManager) {
        if (penManager === undefined) {
          penManager = this.penManager;
        }

        return penManager.lastPen;
      }
    }]);

    return CanvasText;
  }();
  var methods$1 = {
    setInteractive: SetInteractive
  };
  Object.assign(CanvasText.prototype, DrawMethods, methods$1);

  var GetValue$2 = Phaser.Utils.Objects.GetValue;

  var AddImage = function AddImage(key, config) {
    if (config === undefined) {
      config = {
        key: key
      };
    }

    if (!config.hasOwnProperty('key')) {
      config.key = key;
    }

    var textureKey = config.key,
        frameKey = config.frame;
    var width = config.width,
        height = config.height;

    if (width === undefined || height === undefined) {
      var frame = this.textureManager.getFrame(textureKey, frameKey);
      var frameWidth = frame ? frame.cutWidth : 0;
      var frameHeight = frame ? frame.cutHeight : 0;

      if (width === undefined && height === undefined) {
        width = frameWidth;
        height = frameHeight;
      } else if (width === undefined) {
        width = frameWidth * (height / frameHeight);
      } else if (height === undefined) {
        height = frameHeight * (width / frameWidth);
      }
    }

    this.images[key] = {
      key: textureKey,
      frame: frameKey,
      width: width,
      height: height,
      y: GetValue$2(config, 'y', 0),
      left: GetValue$2(config, 'left', 0),
      right: GetValue$2(config, 'right', 0)
    };
  };

  var DrawImage = function DrawImage(key, context, x, y, autoRound) {
    var imgData = this.get(key);
    x += imgData.left;
    y += imgData.y;

    if (autoRound) {
      x = Math.round(x);
      y = Math.round(y);
    }

    var frame = this.textureManager.getFrame(imgData.key, imgData.frame);
    context.drawImage(frame.source.image, frame.cutX, frame.cutY, frame.cutWidth, frame.cutHeight, x, y, imgData.width, imgData.height);
  };

  var ImageManager = /*#__PURE__*/function () {
    function ImageManager(scene) {
      _classCallCheck(this, ImageManager);

      this.textureManager = scene.textures;
      this.images = {};
    }

    _createClass(ImageManager, [{
      key: "destroy",
      value: function destroy() {
        this.textureManager = undefined;
        this.images = undefined;
      }
    }, {
      key: "add",
      value: function add(key, config) {
        if (typeof key === 'string') {
          AddImage.call(this, key, config);
        } else if (Array.isArray(key)) {
          var data = key;

          for (var i = 0, cnt = data.length; i < cnt; i++) {
            AddImage.call(this, data[i]);
          }
        } else {
          var data = key;

          for (var key in data) {
            AddImage.call(this, key, data[key]);
          }
        }

        return this;
      }
    }, {
      key: "has",
      value: function has(key) {
        return this.images.hasOwnProperty(key);
      }
    }, {
      key: "remove",
      value: function remove(key) {
        if (this.has(key)) {
          delete this.images[key];
        }

        return this;
      }
    }, {
      key: "get",
      value: function get(key) {
        if (!this.has(key)) {
          if (this.textureManager.exists(key)) {
            this.add(key);
          }
        }

        return this.images[key];
      }
    }, {
      key: "getOuterWidth",
      value: function getOuterWidth(key) {
        var data = this.get(key);
        return data ? data.width + data.left + data.right : 0;
      }
    }, {
      key: "getFrame",
      value: function getFrame(key) {
        var data = this.get(key);
        return data ? this.textureManager.getFrame(data.key, data.frame) : undefined;
      }
    }, {
      key: "hasTexture",
      value: function hasTexture(key) {
        return !!this.getFrame(key);
      }
    }]);

    return ImageManager;
  }();

  var methods = {
    draw: DrawImage
  };
  Object.assign(ImageManager.prototype, methods);

  var CopyCanvasToTexture = function CopyCanvasToTexture(scene, srcCanvas, key, x, y, width, height) {
    var textures = scene.textures;
    var renderer = scene.renderer;

    if (x === undefined) {
      x = 0;
    }

    if (y === undefined) {
      y = 0;
    }

    if (width === undefined) {
      width = srcCanvas.width;
    }

    if (height === undefined) {
      height = srcCanvas.height;
    }

    var texture;

    if (textures.exists(key)) {
      texture = textures.get(key);
    } else {
      texture = textures.createCanvas(key, width, height);
    }

    var destCanvas = texture.getSourceImage();

    if (destCanvas.width !== width) {
      destCanvas.width = width;
    }

    if (destCanvas.height !== height) {
      destCanvas.height = height;
    }

    var destCtx = destCanvas.getContext('2d');
    destCtx.clearRect(0, 0, width, height);
    destCtx.drawImage(srcCanvas, x, y, width, height);

    if (renderer.gl && texture) {
      renderer.canvasToTexture(destCanvas, texture.source[0].glTexture, true, 0);
    }
  };

  var IsPlainObject = Phaser.Utils.Objects.IsPlainObject;
  var AddToDOM = Phaser.DOM.AddToDOM;
  var CanvasPool = Phaser.Display.Canvas.CanvasPool;
  var GameObject = Phaser.GameObjects.GameObject;
  var GetValue$1 = Phaser.Utils.Objects.GetValue;
  var RemoveFromDOM = Phaser.DOM.RemoveFromDOM;
  var SPLITREGEXP = CONST.SPLITREGEXP;
  var PensPools = {};

  var Text = /*#__PURE__*/function (_GameObject) {
    _inherits(Text, _GameObject);

    var _super = _createSuper(Text);

    function Text(scene, x, y, text, style, type, parser) {
      var _this;

      _classCallCheck(this, Text);

      if (IsPlainObject(x)) {
        var config = x;
        x = GetValue$1(config, 'x', 0);
        y = GetValue$1(config, 'y', 0);
        text = GetValue$1(config, 'text', '');
        style = GetValue$1(config, 'style', '');
      }

      if (x === undefined) {
        x = 0;
      }

      if (y === undefined) {
        y = 0;
      }

      _this = _super.call(this, scene, type);
      _this.renderer = scene.sys.game.renderer;

      _this.setPosition(x, y);

      _this.setOrigin(0, 0);

      _this.initPipeline();

      _this.canvas = CanvasPool.create(_assertThisInitialized(_this));
      _this.context = _this.canvas.getContext('2d');
      _this._imageManager = undefined;

      if (style) {
        // Override align
        if (style.hasOwnProperty('align')) {
          var halign = style.align;
          delete style.align;
          style.halign = halign;
        } // Has Stroke color but stroke thinkness, set stroke thinkness to 1


        if (style.hasOwnProperty('stroke') && !style.hasOwnProperty('strokeThickness')) {
          style.strokeThickness = 1;
        }
      }

      _this.style = new TextStyle(_assertThisInitialized(_this), style);
      _this.autoRound = true;
      _this._text = undefined;
      _this.padding = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };
      _this.width = 1;
      _this.height = 1;
      _this.dirty = false; //  If resolution wasn't set, force it to 1

      if (_this.style.resolution === 0) {
        _this.style.resolution = 1;
      }

      _this._crop = _this.resetCropObject(); //  Create a Texture for this Text object

      _this.texture = scene.sys.textures.addCanvas(null, _this.canvas, true); //  Get the frame

      _this.frame = _this.texture.get(); //  Set the resolution

      _this.frame.source.resolution = _this.style.resolution;

      if (_this.renderer.gl) {
        //  Clear the default 1x1 glTexture, as we override it later
        _this.renderer.deleteTexture(_this.frame.source.glTexture);

        _this.frame.source.glTexture = null;
      }

      if (!PensPools.hasOwnProperty(type)) {
        PensPools[type] = new Stack();
      }

      _this.canvasText = new CanvasText({
        parent: _assertThisInitialized(_this),
        context: _this.context,
        parser: parser,
        style: _this.style,
        pensPool: PensPools[type]
      });

      _this.initRTL();

      if (style && style.padding) {
        _this.setPadding(style.padding);
      }

      _this.setText(text);

      scene.sys.game.events.on('contextrestored', _this.onContextRestored, _assertThisInitialized(_this));
      return _this;
    }

    _createClass(Text, [{
      key: "onContextRestored",
      value: function onContextRestored() {
        this.dirty = true;
      }
    }, {
      key: "preDestroy",
      value: function preDestroy() {
        if (this.style.rtl) {
          RemoveFromDOM(this.canvas);
        }

        this.scene.sys.game.events.off('contextrestored', this.onContextRestored, this);
        this.canvasText.destroy();
        this.canvasText = undefined;

        if (this._imageManager) {
          this._imageManager.destroy();

          this._imageManager = undefined;
        }

        CanvasPool.remove(this.canvas);
        this.texture.destroy();
      }
    }, {
      key: "text",
      get: function get() {
        return this._text;
      },
      set: function set(value) {
        this.setText(value);
      }
    }, {
      key: "initRTL",
      value: function initRTL() {
        if (!this.style.rtl) {
          return;
        } //  Here is where the crazy starts.
        //
        //  Due to browser implementation issues, you cannot fillText BiDi text to a canvas
        //  that is not part of the DOM. It just completely ignores the direction property.


        this.canvas.dir = 'rtl'; //  Experimental atm, but one day ...

        this.context.direction = 'rtl'; //  Add it to the DOM, but hidden within the parent canvas.

        this.canvas.style.display = 'none';
        AddToDOM(this.canvas, this.scene.sys.canvas); //  And finally we set the x origin

        this.originX = 1;
      }
    }, {
      key: "setText",
      value: function setText(value) {
        if (value == null) {
          value = '';
        }

        if (Array.isArray(value)) {
          value = value.join('\n');
        }

        if (value !== this._text) {
          this._text = value.toString();
          this.updateText();
        }

        return this;
      }
    }, {
      key: "appendText",
      value: function appendText(value) {
        if (value == null) {
          return this;
        }

        if (Array.isArray(value)) {
          value = value.join('\n');
        }

        this.setText(this.text + value.toString());
        return this;
      }
    }, {
      key: "setStyle",
      value: function setStyle(style) {
        return this.style.setStyle(style);
      }
    }, {
      key: "setFont",
      value: function setFont(font) {
        return this.style.setFont(font);
      }
    }, {
      key: "setFontFamily",
      value: function setFontFamily(family) {
        return this.style.setFontFamily(family);
      }
    }, {
      key: "setFontSize",
      value: function setFontSize(size) {
        return this.style.setFontSize(size);
      }
    }, {
      key: "setFontStyle",
      value: function setFontStyle(style) {
        return this.style.setFontStyle(style);
      }
    }, {
      key: "setTestString",
      value: function setTestString(string) {
        return this.style.setTestString(string);
      }
    }, {
      key: "setFixedSize",
      value: function setFixedSize(width, height) {
        return this.style.setFixedSize(width, height);
      }
    }, {
      key: "setBackgroundColor",
      value: function setBackgroundColor(color, color2, isHorizontalGradient) {
        return this.style.setBackgroundColor(color, color2, isHorizontalGradient);
      }
    }, {
      key: "setBackgroundStrokeColor",
      value: function setBackgroundStrokeColor(color, lineWidth) {
        return this.style.setBackgroundStrokeColor(color, lineWidth);
      }
    }, {
      key: "setBackgroundCornerRadius",
      value: function setBackgroundCornerRadius(radius, iteration) {
        return this.style.setBackgroundCornerRadius(radius, iteration);
      }
    }, {
      key: "setFill",
      value: function setFill(color) {
        return this.style.setFill(color);
      }
    }, {
      key: "setColor",
      value: function setColor(color) {
        return this.style.setColor(color);
      }
    }, {
      key: "setStroke",
      value: function setStroke(color, thickness) {
        return this.style.setStroke(color, thickness);
      }
    }, {
      key: "setShadow",
      value: function setShadow(x, y, color, blur, shadowStroke, shadowFill) {
        return this.style.setShadow(x, y, color, blur, shadowStroke, shadowFill);
      }
    }, {
      key: "setShadowOffset",
      value: function setShadowOffset(x, y) {
        return this.style.setShadowOffset(x, y);
      }
    }, {
      key: "setShadowColor",
      value: function setShadowColor(color) {
        return this.style.setShadowColor(color);
      }
    }, {
      key: "setShadowBlur",
      value: function setShadowBlur(blur) {
        return this.style.setShadowBlur(blur);
      }
    }, {
      key: "setShadowStroke",
      value: function setShadowStroke(enabled) {
        return this.style.setShadowStroke(enabled);
      }
    }, {
      key: "setShadowFill",
      value: function setShadowFill(enabled) {
        return this.style.setShadowFill(enabled);
      }
    }, {
      key: "setWrapMode",
      value: function setWrapMode(mode) {
        return this.style.setWrapMode(mode);
      }
    }, {
      key: "setWrapWidth",
      value: function setWrapWidth(width) {
        return this.style.setWrapWidth(width);
      } // Align with built-in text game object

    }, {
      key: "setWordWrapWidth",
      value: function setWordWrapWidth(width) {
        return this.style.setWrapWidth(width);
      }
    }, {
      key: "setAlign",
      value: function setAlign(align) {
        return this.style.setHAlign(align);
      }
    }, {
      key: "setHAlign",
      value: function setHAlign(align) {
        return this.style.setHAlign(align);
      }
    }, {
      key: "setVAlign",
      value: function setVAlign(align) {
        return this.style.setVAlign(align);
      }
    }, {
      key: "setLineSpacing",
      value: function setLineSpacing(value) {
        return this.style.setLineSpacing(value);
      }
    }, {
      key: "setXOffset",
      value: function setXOffset(value) {
        return this.style.setXOffset(value);
      }
    }, {
      key: "setPadding",
      value: function setPadding(left, top, right, bottom) {
        if (_typeof(left) === 'object') {
          var config = left; //  If they specify x and/or y this applies to all

          var x = GetValue$1(config, 'x', null);

          if (x !== null) {
            left = x;
            right = x;
          } else {
            left = GetValue$1(config, 'left', 0);
            right = GetValue$1(config, 'right', left);
          }

          var y = GetValue$1(config, 'y', null);

          if (y !== null) {
            top = y;
            bottom = y;
          } else {
            top = GetValue$1(config, 'top', 0);
            bottom = GetValue$1(config, 'bottom', top);
          }
        } else {
          if (left === undefined) {
            left = 0;
          }

          if (top === undefined) {
            top = left;
          }

          if (right === undefined) {
            right = left;
          }

          if (bottom === undefined) {
            bottom = top;
          }
        }

        this.padding.left = left;
        this.padding.top = top;
        this.padding.right = right;
        this.padding.bottom = bottom;
        return this.updateText(false);
      }
    }, {
      key: "setMaxLines",
      value: function setMaxLines(max) {
        return this.style.setMaxLines(max);
      }
    }, {
      key: "setResolution",
      value: function setResolution(value) {
        return this.style.setResolution(value);
      }
    }, {
      key: "updateText",
      value: function updateText(runWrap) {
        if (runWrap === undefined) {
          runWrap = true;
        }

        var canvasText = this.canvasText; // wrap text to pens

        var style = this.style;

        if (runWrap) {
          canvasText.updatePenManager(this._text, style.wrapMode, style.wrapWidth, style.lineHeight);
        } // resize


        var padding = this.padding;
        var textWidth, textHeight;

        if (style.fixedWidth === 0) {
          this.width = canvasText.linesWidth + padding.left + padding.right;
          textWidth = canvasText.linesWidth;
        } else {
          this.width = style.fixedWidth;
          textWidth = this.width - padding.left - padding.right;

          if (textWidth < canvasText.linesWidth) {
            textWidth = canvasText.linesWidth;
          }
        }

        if (style.fixedHeight === 0) {
          this.height = canvasText.linesHeight + padding.top + padding.bottom;
          textHeight = canvasText.linesHeight;
        } else {
          this.height = style.fixedHeight;
          textHeight = this.height - padding.top - padding.bottom;

          if (textHeight < canvasText.linesHeight) {
            textHeight = canvasText.linesHeight;
          }
        }

        var w = this.width;
        var h = this.height;
        this.updateDisplayOrigin();
        var resolution = style.resolution;
        w *= resolution;
        h *= resolution;
        w = Math.max(Math.ceil(w), 1);
        h = Math.max(Math.ceil(h), 1);
        var canvas = this.canvas;
        var context = this.context;

        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
          this.frame.setSize(w, h);
        } else {
          context.clearRect(0, 0, w, h);
        }

        context.save();
        context.scale(resolution, resolution); // draw

        var startX = !this.style.rtl ? padding.left : padding.right;
        var startY = padding.top;
        canvasText.draw(startX, startY, textWidth, textHeight);
        context.restore();

        if (this.renderer && this.renderer.gl) {
          this.frame.source.glTexture = this.renderer.canvasToTexture(canvas, this.frame.source.glTexture, true);
          this.frame.glTexture = this.frame.source.glTexture;
        }

        this.dirty = true;
        var input = this.input;

        if (input && !input.customHitArea) {
          input.hitArea.width = this.width;
          input.hitArea.height = this.height;
        }

        return this;
      }
    }, {
      key: "getTextMetrics",
      value: function getTextMetrics() {
        return this.style.getTextMetrics();
      }
    }, {
      key: "setTextMetrics",
      value: function setTextMetrics(metrics, font) {
        return this.style.setTextMetrics(metrics, font);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var out = Components.ToJSON(this); //  Extra Text data is added here

        var data = {
          autoRound: this.autoRound,
          text: this._text,
          style: this.style.toJSON(),
          resolution: this.resolution,
          padding: {
            left: this.padding.left,
            right: this.padding.right,
            top: this.padding.top,
            bottom: this.padding.bottom
          }
        };
        out.data = data;
        return out;
      }
    }, {
      key: "setInteractive",
      value: function setInteractive(shape, callback, dropZone) {
        GameObject.prototype.setInteractive.call(this, shape, callback, dropZone);
        this.canvasText.setInteractive();
        return this;
      }
    }, {
      key: "getWrappedText",
      value: function getWrappedText(text, start, end) {
        text = this.canvasText.getText(text, start, end, true);
        return text.split(SPLITREGEXP);
      }
    }, {
      key: "getPlainText",
      value: function getPlainText(text, start, end) {
        return this.canvasText.getPlainText(text, start, end);
      }
    }, {
      key: "getText",
      value: function getText(text, start, end, wrap) {
        if (wrap === undefined) {
          wrap = false;
        }

        return this.canvasText.getText(text, start, end, wrap);
      }
    }, {
      key: "getSubString",
      value: function getSubString(text, start, end) {
        return this.getText(text, start, end);
      }
    }, {
      key: "copyPenManager",
      value: function copyPenManager(penManager) {
        return this.canvasText.copyPenManager(penManager);
      }
    }, {
      key: "getPenManager",
      value: function getPenManager(text, penManager) {
        return this.canvasText.getPenManager(text, penManager);
      }
    }, {
      key: "setSize",
      value: function setSize(width, height) {
        return this.setFixedSize(width, height);
      }
    }, {
      key: "resize",
      value: function resize(width, height) {
        return this.setFixedSize(width, height);
      }
    }, {
      key: "lineSpacing",
      get: function get() {
        return this.style.lineSpacing;
      },
      set: function set(value) {
        this.setLineSpacing(value);
      }
    }, {
      key: "imageManager",
      get: function get() {
        if (!this._imageManager) {
          this._imageManager = new ImageManager(this.scene);
        }

        return this._imageManager;
      }
    }, {
      key: "addImage",
      value: function addImage(key, config) {
        this.imageManager.add(key, config);
        return this;
      }
    }, {
      key: "drawAreaBounds",
      value: function drawAreaBounds(graphics, color) {
        this.canvasText.hitAreaManager.drawBounds(graphics, color, this);
        return this;
      }
    }, {
      key: "measureTextMargins",
      value: function measureTextMargins(testString, out) {
        return MeasureTextMargins(this.style, testString, out);
      }
    }, {
      key: "generateTexture",
      value: function generateTexture(key, x, y, width, height) {
        var srcCanvas = this.canvas;

        if (width === undefined) {
          width = srcCanvas.width;
        } else {
          width *= this.resolution;
        }

        if (height === undefined) {
          height = srcCanvas.height;
        } else {
          height *= this.resolution;
        }

        CopyCanvasToTexture(this.scene, srcCanvas, key, x, y, width, height);
        return this;
      }
    }]);

    return Text;
  }(GameObject);

  var Components = Phaser.GameObjects.Components;
  Phaser.Class.mixin(Text, [Components.Alpha, Components.BlendMode, Components.ComputedSize, Components.Crop, Components.Depth, Components.Flip, Components.GetBounds, Components.Mask, Components.Origin, Components.Pipeline, Components.ScrollFactor, Components.Tint, Components.Transform, Components.Visible, Render]);

  var GETPROP_RESULT = {
    plainText: null,
    prevProp: null
  };
  var STYLE_RESULT = new TextStyle();

  var parser = /*#__PURE__*/function () {
    function parser(tags) {
      _classCallCheck(this, parser);

      if (tags === undefined) {
        tags = {};
      }

      this.tags = tags;
    }

    _createClass(parser, [{
      key: "addTag",
      value: function addTag(name, prop) {
        this.tags[name] = prop;
      }
    }, {
      key: "getTag",
      value: function getTag(name) {
        return this.tags[name];
      }
    }, {
      key: "splitText",
      value: function splitText(text, mode) {
        var result = [];
        var charIdx = 0;

        while (true) {
          var regexResult = RE_SPLITTEXT.exec(text);

          if (!regexResult) {
            var totalLen = text.length;

            if (charIdx < totalLen) {
              // Push remainder string
              result.push(text.substring(charIdx, totalLen));
            }

            return result; // [text,...]
          }

          var match = regexResult[0];
          var matchStart = RE_SPLITTEXT.lastIndex - match.length;

          if (charIdx < matchStart) {
            result.push(text.substring(charIdx, matchStart));
          }

          if (mode === undefined) {
            result.push(match);
          } else if (mode === 1) {
            // RAWTEXTONLY_MODE
            if (RE_CLASS_HEADER.test(match)) {
              var innerMatch = match.match(RE_CLASS);
              result.push(innerMatch[2]);
            } else if (RE_STYLE_HEADER.test(match)) {
              var innerMatch = match.match(RE_STYLE);
              result.push(innerMatch[2]);
            }
          }

          charIdx = RE_SPLITTEXT.lastIndex;
        }
      }
    }, {
      key: "tagTextToProp",
      value: function tagTextToProp(text, prevProp) {
        var plainText, propOut;

        if (RE_CLASS_HEADER.test(text)) {
          var innerMatch = text.match(RE_CLASS);

          if (innerMatch != null) {
            var name = innerMatch[1];
            var tags = this.tags;

            if (tags.hasOwnProperty(name)) {
              propOut = tags[name];
            } else {
              propOut = {};
            }

            propOut._class = name;
            plainText = innerMatch[2];
          }
        } else if (RE_STYLE_HEADER.test(text)) {
          var innerMatch = text.match(RE_STYLE);

          if (innerMatch != null) {
            var style = innerMatch[1];
            propOut = StyleToProp(style);
            propOut._style = style;
            plainText = innerMatch[2];
          }
        }

        if (plainText == null) {
          plainText = text;
        }

        if (propOut == null) {
          propOut = {};
        }

        var result = GETPROP_RESULT;
        result.plainText = plainText;
        result.prop = propOut;
        return result;
      }
    }, {
      key: "propToContextStyle",
      value: function propToContextStyle(defaultStyle, prop) {
        var result = STYLE_RESULT;

        if (!prop.hasOwnProperty('img')) {
          result.image = null;

          if (prop.hasOwnProperty('family') || prop.hasOwnProperty('fontFamily') || prop.hasOwnProperty('font-family')) {
            var family = prop.hasOwnProperty('family') ? prop.family : prop.hasOwnProperty('fontFamily') ? prop.fontFamily : prop['font-family'];
            result.fontFamily = family;
          } else {
            result.fontFamily = defaultStyle.fontFamily;
          }

          if (prop.hasOwnProperty('size') || prop.hasOwnProperty('fontSize') || prop.hasOwnProperty('font-size')) {
            var size = prop.hasOwnProperty('size') ? prop.size : prop.hasOwnProperty('fontSize') ? prop.fontSize : prop['font-size'];

            if (typeof size === 'number') {
              size = "".concat(size, "px");
            }

            result.fontSize = size;
          } else {
            result.fontSize = defaultStyle.fontSize;
          }

          if (prop.hasOwnProperty('style') || prop.hasOwnProperty('fontStyle') || prop.hasOwnProperty('font-style')) {
            var fontStyle = prop.hasOwnProperty('style') ? prop.style : prop.hasOwnProperty('fontStyle') ? prop.fontStyle : prop['font-style'];
            result.fontStyle = fontStyle;
          } else {
            result.fontStyle = defaultStyle.fontStyle;
          }

          if (prop.hasOwnProperty('color') || prop.hasOwnProperty('font-color')) {
            var color = prop.hasOwnProperty('color') ? prop.color : prop['font-color'];
            result.color = color;
          } else {
            result.color = defaultStyle.color;
          }

          if (prop.hasOwnProperty('stroke')) {
            var stroke = prop.stroke; // {color, thinkness}

            result.stroke = stroke.hasOwnProperty('color') ? stroke.color : defaultStyle.stroke;
            result.strokeThickness = stroke.hasOwnProperty('thinkness') ? stroke.thinkness : defaultStyle.strokeThickness;
          } else {
            result.stroke = defaultStyle.stroke;
            result.strokeThickness = defaultStyle.strokeThickness;
          }
        } else {
          result.image = prop.img;
        }

        if (prop.hasOwnProperty('shadow')) {
          var shadow = prop.shadow; // {color, offsetX, offsetY, blur}

          result.shadowColor = shadow.hasOwnProperty('color') ? shadow.color : defaultStyle.shadowColor;
          result.shadowOffsetX = shadow.hasOwnProperty('offsetX') ? shadow.offsetX : defaultStyle.shadowOffsetX;
          result.shadowOffsetY = shadow.hasOwnProperty('offsetY') ? shadow.offsetY : defaultStyle.shadowOffsetY;
          result.shadowBlur = shadow.hasOwnProperty('blur') ? shadow.blur : defaultStyle.shadowBlur;
          result.shadowStroke = true;
          result.shadowFill = true;
        } else {
          result.shadowColor = defaultStyle.shadowColor;
          result.shadowOffsetX = defaultStyle.shadowOffsetX;
          result.shadowOffsetY = defaultStyle.shadowOffsetY;
          result.shadowBlur = defaultStyle.shadowBlur;
          result.shadowStroke = defaultStyle.shadowStroke;
          result.shadowFill = defaultStyle.shadowFill;
        }

        if (prop.hasOwnProperty('u') || prop.hasOwnProperty('underline')) {
          var u = prop.hasOwnProperty('u') ? prop.u : prop.underline; // {color, thinkness, offset}

          result.underlineColor = u.hasOwnProperty('color') ? u.color : defaultStyle.underlineColor;
          result.underlineThickness = u.hasOwnProperty('thinkness') ? u.thinkness : defaultStyle.underlineThickness;
          result.underlineOffset = u.hasOwnProperty('offset') ? u.offset : defaultStyle.underlineOffset;
        } else {
          result.underlineColor = defaultStyle.underlineColor;
          result.underlineThickness = defaultStyle.underlineThickness;
          result.underlineOffset = defaultStyle.underlineOffset;
        }

        return result;
      }
    }, {
      key: "propToTagText",
      value: function propToTagText(text, prop, prevProp) {
        if (prop.hasOwnProperty('_class')) {
          // class mode
          if (text === '') {
            if (this.isTextTag(prop._class)) {
              return '';
            }
          }

          return "<class='".concat(prop._class, "'>").concat(text, "</class>");
        } else if (prop.hasOwnProperty('_style')) {
          // class mode
          return "<style='".concat(prop._style, "'>").concat(text, "</style>");
        } else {
          return text;
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.tags = undefined;
      }
    }, {
      key: "isTextTag",
      value: function isTextTag(tagName) {
        var tag = this.tags[tagName];

        if (tag) {
          return tag.img == null;
        } else {
          // tag not found
          return false;
        }
      }
    }]);

    return parser;
  }();

  var StyleToProp = function StyleToProp(s) {
    s = s.split(";");
    var result = {},
        prop,
        k,
        v;

    for (var i = 0, slen = s.length; i < slen; i++) {
      prop = s[i].split(":");
      k = prop[0], v = prop[1];

      if (isEmpty(k) || isEmpty(v)) {
        continue;
      }

      switch (k) {
        case 'stroke':
          var stroke = v.split(' '); // stroke:blue 1px

          var len = stroke.length;
          v = {};

          if (len >= 1) {
            v.color = stroke[0];
          }

          if (len >= 2) {
            v.thinkness = parseInt(stroke[1].replace('px', ''));
          }

          break;

        case 'shadow':
          var shadow = v.split(' '); // shadow:blue 2px 2px 2px

          var len = shadow.length;
          v = {};

          if (len >= 1) {
            v.color = shadow[0];
          }

          if (len >= 2) {
            v.offsetX = parseInt(shadow[1].replace('px', ''));
          }

          if (len >= 3) {
            v.offsetY = parseInt(shadow[2].replace('px', ''));
          }

          if (len >= 4) {
            v.blur = parseInt(shadow[3].replace('px', ''));
          }

          break;

        case 'u':
        case 'underline':
          // underline:blue 3px -1px
          var u = v.split(' ');
          var len = u.length;
          v = {};

          if (len >= 1) {
            v.color = u[0];
          }

          if (len >= 2) {
            v.thinkness = parseInt(u[1].replace('px', ''));
          }

          if (len >= 3) {
            v.offset = parseInt(u[2].replace('px', ''));
          }

          break;

        case 'y':
          v = parseFloat(v);
          break;
      }

      result[k] = v;
    }

    return result;
  };

  var isEmpty = function isEmpty(s) {
    // Remove white spaces.
    s = s.replace(RE_SPACE, '');
    return s.length === 0;
  };

  var RE_SPLITTEXT = /<\s*class=["|']([^"|']+)["|']\s*\>([\s\S]*?)<\s*\/class\s*\>|<\s*style=["|']([^"|']+)["|']\s*\>([\s\S]*?)<\s*\/style\s*\>/g;
  var RE_CLASS_HEADER = /<\s*class=/i;
  var RE_CLASS = /<\s*class=["|']([^"|']+)["|']\s*\>([\s\S]*?)<\s*\/class\s*\>/;
  var RE_STYLE_HEADER = /<\s*style=/i;
  var RE_STYLE = /<\s*style=["|']([^"|']+)["|']\s*\>([\s\S]*?)<\s*\/style\s*\>/;
  var RE_SPACE = /^\s+|\s+$/;

  var GetValue = Phaser.Utils.Objects.GetValue;

  var TagText = /*#__PURE__*/function (_Text) {
    _inherits(TagText, _Text);

    var _super = _createSuper(TagText);

    function TagText(scene, x, y, text, style) {
      var _this;

      _classCallCheck(this, TagText);

      var tags = GetValue(style, 'tags', undefined);
      var parser$1 = new parser(tags);
      _this = _super.call(this, scene, x, y, text, style, 'rexTagText', parser$1);
      _this.parser = parser$1;
      return _this;
    }

    _createClass(TagText, [{
      key: "addTag",
      value: function addTag(name, prop) {
        this.parser.addTag(name, prop);
        return this.updateText(true);
      }
    }, {
      key: "addTags",
      value: function addTags(tags) {
        for (var name in tags) {
          this.parser.addTag(name, tags[name]);
        }

        return this.updateText(true);
      }
    }, {
      key: "getTag",
      value: function getTag(name) {
        return this.parser.getTag(name);
      }
    }, {
      key: "preDestroy",
      value: function preDestroy() {
        _get(_getPrototypeOf(TagText.prototype), "preDestroy", this).call(this);

        this.parser.destroy();
        this.parser = undefined;
      }
    }]);

    return TagText;
  }(Text);

  return TagText;

})));
