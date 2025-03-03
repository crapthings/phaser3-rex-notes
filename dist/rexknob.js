(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.rexknob = factory());
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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
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

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = _superPropBase(target, property);

        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);

          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            return false;
          }
        }

        desc = Object.getOwnPropertyDescriptor(receiver, property);

        if (desc) {
          if (!desc.writable) {
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          _defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);

    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
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

  var Zone = Phaser.GameObjects.Zone;
  var AddItem = Phaser.Utils.Array.Add;
  var RemoveItem$2 = Phaser.Utils.Array.Remove;

  var Base$1 = /*#__PURE__*/function (_Zone) {
    _inherits(Base, _Zone);

    var _super = _createSuper(Base);

    function Base(scene, x, y, width, height) {
      var _this;

      _classCallCheck(this, Base);

      if (x === undefined) {
        x = 0;
      }

      if (y === undefined) {
        y = 0;
      }

      if (width === undefined) {
        width = 1;
      }

      if (height === undefined) {
        height = 1;
      }

      _this = _super.call(this, scene, x, y, width, height);
      _this.children = [];
      return _this;
    }

    _createClass(Base, [{
      key: "destroy",
      value: function destroy(fromScene) {
        //  This Game Object has already been destroyed
        if (!this.scene) {
          return;
        }

        if (fromScene) {
          // Stop scene
          var child;

          for (var i = this.children.length - 1; i >= 0; i--) {
            child = this.children[i];

            if (!child.parentContainer && // Not in container
            !child.displayList // Not in scene, neither in layer
            ) {
              // Destroy child which is not in scene, container, or layer manually
              child.destroy(fromScene);
            }
          }
        } // Destroy/remove children


        this.clear(!fromScene);

        _get(_getPrototypeOf(Base.prototype), "destroy", this).call(this, fromScene);
      }
    }, {
      key: "contains",
      value: function contains(gameObject) {
        return this.children.indexOf(gameObject) !== -1;
      }
    }, {
      key: "add",
      value: function add(gameObjects) {
        var parent = this;
        AddItem(this.children, gameObjects, 0, // Callback of item added
        function (gameObject) {
          gameObject.once('destroy', parent.onChildDestroy, parent);
        }, this);
        return this;
      }
    }, {
      key: "remove",
      value: function remove(gameObjects, destroyChild) {
        var parent = this;
        RemoveItem$2(this.children, gameObjects, // Callback of item removed
        function (gameObject) {
          gameObject.off('destroy', parent.onChildDestroy, parent);

          if (destroyChild) {
            gameObject.destroy();
          }
        });
        return this;
      }
    }, {
      key: "onChildDestroy",
      value: function onChildDestroy(child, fromScene) {
        // Only remove reference
        this.remove(child, false);
      }
    }, {
      key: "clear",
      value: function clear(destroyChild) {
        var parent = this;
        var gameObject;

        for (var i = 0, cnt = this.children.length; i < cnt; i++) {
          gameObject = this.children[i];
          gameObject.off('destroy', parent.onChildDestroy, parent);

          if (destroyChild) {
            gameObject.destroy();
          }
        }

        this.children.length = 0;
        return this;
      }
    }]);

    return Base;
  }(Zone);

  var Components = Phaser.GameObjects.Components;
  Phaser.Class.mixin(Base$1, [Components.Alpha, Components.Flip]);

  var GetParent = function GetParent(gameObject) {
    var parent;

    if (gameObject.hasOwnProperty('rexContainer')) {
      parent = gameObject.rexContainer.parent;
    }

    return parent;
  };

  var GetTopmostParent = function GetTopmostParent(gameObject) {
    var parent = GetParent(gameObject);

    while (parent) {
      gameObject = parent;
      parent = GetParent(parent);
    }

    return gameObject;
  };

  var DegToRad$2 = Phaser.Math.DegToRad;
  var RadToDeg$1 = Phaser.Math.RadToDeg;

  var GetLocalState = function GetLocalState(gameObject) {
    if (!gameObject.hasOwnProperty('rexContainer')) {
      var rexContainer = {
        parent: null,
        self: null,
        x: 0,
        y: 0,
        rotation: 0,
        scaleX: 0,
        scaleY: 0,
        alpha: 0,
        visible: true,
        active: true
      };
      Object.defineProperty(rexContainer, 'angle', {
        get: function get() {
          return RadToDeg$1(this.rotation);
        },
        set: function set(value) {
          this.rotation = DegToRad$2(value);
        }
      });
      Object.defineProperty(rexContainer, 'displayWidth', {
        get: function get() {
          return gameObject.width * this.scaleX;
        },
        set: function set(width) {
          this.scaleX = width / gameObject.width;
        }
      });
      Object.defineProperty(rexContainer, 'displayHeight', {
        get: function get() {
          return gameObject.height * this.scaleY;
        },
        set: function set(height) {
          this.scaleY = height / gameObject.height;
        }
      });
      gameObject.rexContainer = rexContainer;
    }

    return gameObject.rexContainer;
  };

  var Parent = {
    setParent: function setParent(gameObject, parent) {
      if (parent === undefined) {
        parent = this;
      }

      var localState = GetLocalState(gameObject);

      if (parent) {
        // Add to parent
        localState.parent = parent;
        localState.self = gameObject;
      } else {
        // Remove from parent
        localState.parent = null;
        localState.self = null;
      }

      return this;
    },
    getParent: function getParent(gameObject) {
      if (gameObject === undefined) {
        gameObject = this;
      }

      return GetParent(gameObject);
    },
    getTopmostParent: function getTopmostParent(gameObject) {
      if (gameObject === undefined) {
        gameObject = this;
      }

      return GetTopmostParent(gameObject);
    }
  };

  var BaseAdd = Base$1.prototype.add;

  var Add$1 = function Add(gameObject) {
    this.setParent(gameObject);
    this.resetChildState(gameObject) // Reset local state of child
    .updateChildVisible(gameObject) // Apply parent's visible to child
    .updateChildActive(gameObject) // Apply parent's active to child
    .updateChildScrollFactor(gameObject) // Apply parent's scroll factor to child
    .updateChildMask(gameObject); // Apply parent's mask to child

    BaseAdd.call(this, gameObject);
    return this;
  };

  var AddLocal = function AddLocal(gameObject) {
    this.setParent(gameObject); // Set local state from child directly

    var state = GetLocalState(gameObject); // Position

    state.x = gameObject.x;
    state.y = gameObject.y;
    state.rotation = gameObject.rotation;
    state.scaleX = gameObject.scaleX;
    state.scaleY = gameObject.scaleY; // Alpha

    state.alpha = gameObject.alpha; // Visible

    state.visible = gameObject.visible; // Active

    state.active = gameObject.active;
    this.updateChildPosition(gameObject).updateChildAlpha(gameObject).updateChildVisible(gameObject) // Apply parent's visible to child
    .updateChildActive(gameObject) // Apply parent's active to child
    .updateChildScrollFactor(gameObject) // Apply parent's scroll factor to child
    .updateChildMask(gameObject); // Apply parent's mask to child

    BaseAdd.call(this, gameObject);
    return this;
  };

  var AddChild$1 = {
    // Can override this method
    add: function add(gameObject) {
      if (Array.isArray(gameObject)) {
        this.addMultiple(gameObject);
      } else {
        Add$1.call(this, gameObject);
      }

      return this;
    },
    // Don't override this method
    pin: function pin(gameObject) {
      if (Array.isArray(gameObject)) {
        this.addMultiple(gameObject);
      } else {
        Add$1.call(this, gameObject);
      }

      return this;
    },
    addMultiple: function addMultiple(gameObjects) {
      for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
        Add$1.call(this, gameObjects[i]);
      }

      return this;
    },
    addLocal: function addLocal(gameObject) {
      if (Array.isArray(gameObject)) {
        this.addMultiple(gameObject);
      } else {
        AddLocal.call(this, gameObject);
      }

      return this;
    },
    addLocalMultiple: function addLocalMultiple(gameObjects) {
      for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
        AddLocal.call(this, gameObjects[i]);
      }

      return this;
    }
  };

  var BaseRemove = Base$1.prototype.remove;
  var BaseClear = Base$1.prototype.clear;
  var RemoveChild$1 = {
    remove: function remove(gameObject, destroyChild) {
      if (GetParent(gameObject) !== this) {
        return this;
      }

      this.setParent(gameObject, null);
      BaseRemove.call(this, gameObject, destroyChild);
      return this;
    },
    clear: function clear(destroyChild) {
      for (var i = 0, cnt = this.children.length; i < cnt; i++) {
        this.setParent(this.children[i], null);
      }

      BaseClear.call(this, destroyChild);
      return this;
    }
  };

  var ChildState = {
    getLocalState: function getLocalState(gameObject) {
      return GetLocalState(gameObject);
    },
    resetChildState: function resetChildState(gameObject) {
      this.resetChildPositionState(gameObject).resetChildVisibleState(gameObject).resetChildAlphaState(gameObject).resetChildActiveState(gameObject);
      return this;
    },
    resetChildrenState: function resetChildrenState(gameObjects) {
      for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
        this.resetChildState(gameObjects[i]);
      }

      return this;
    },
    syncProperties: function syncProperties() {
      this.syncPosition().syncVisible().syncAlpha().syncActive().syncScrollFactor().syncMask();
      return this;
    }
  };

  var RotateAround$1 = Phaser.Math.RotateAround;
  var Transform = {
    worldToLocal: function worldToLocal(point) {
      // Transform
      point.x -= this.x;
      point.y -= this.y; // Rotate

      RotateAround$1(point, 0, 0, -this.rotation); // Scale

      point.x /= this.scaleX;
      point.y /= this.scaleY;
      return point;
    },
    localToWorld: function localToWorld(point) {
      // Scale
      point.x *= this.scaleX;
      point.y *= this.scaleY; // Rotate

      RotateAround$1(point, 0, 0, this.rotation); // Transform

      point.x += this.x;
      point.y += this.y;
      return point;
    }
  };

  var GetScale = function GetScale(a, b) {
    if (a === b) {
      return 1;
    } else {
      return a / b;
    }
  };

  var Position = {
    updateChildPosition: function updateChildPosition(child) {
      if (child.isRexContainerLite) {
        child.syncChildrenEnable = false;
      }

      var state = GetLocalState(child);
      var parent = state.parent;
      child.x = state.x;
      child.y = state.y;
      parent.localToWorld(child);
      child.scaleX = state.scaleX * parent.scaleX;
      child.scaleY = state.scaleY * parent.scaleY;
      child.rotation = state.rotation + parent.rotation;

      if (child.isRexContainerLite) {
        child.syncChildrenEnable = true;
        child.syncPosition();
      }

      return this;
    },
    syncPosition: function syncPosition() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildPosition, this);
      }

      return this;
    },
    resetChildPositionState: function resetChildPositionState(child) {
      var state = GetLocalState(child);
      var parent = state.parent;
      state.x = child.x;
      state.y = child.y;
      parent.worldToLocal(state);
      state.scaleX = GetScale(child.scaleX, parent.scaleX);
      state.scaleY = GetScale(child.scaleY, parent.scaleY);
      state.rotation = child.rotation - parent.rotation;
      return this;
    },
    setChildPosition: function setChildPosition(child, x, y) {
      child.x = x;
      child.y = y;
      this.resetChildPositionState(child);
      return this;
    },
    setChildLocalPosition: function setChildLocalPosition(child, x, y) {
      var state = GetLocalState(child);
      state.x = x;
      state.y = y;
      this.updateChildPosition(child);
      return this;
    },
    resetLocalPositionState: function resetLocalPositionState() {
      var parent = GetLocalState(this).parent;

      if (parent) {
        parent.resetChildPositionState(this);
      }

      return this;
    }
  };

  var Rotation = {
    updateChildRotation: function updateChildRotation(child) {
      var localState = GetLocalState(child);
      var parent = localState.parent;
      child.rotation = parent.rotation + localState.rotation;
      return this;
    },
    syncRotation: function syncRotation() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildRotation, this);
      }

      return this;
    },
    resetChildRotationState: function resetChildRotationState(child) {
      var localState = GetLocalState(child);
      var parent = localState.parent;
      localState.rotation = child.rotation - parent.rotation;
      return this;
    },
    setChildRotation: function setChildRotation(child, rotation) {
      child.rotation = rotation;
      this.resetChildRotationState(child);
      return this;
    },
    setChildAngle: function setChildAngle(child, angle) {
      child.angle = angle;
      this.resetChildRotationState(child);
      return this;
    },
    setChildLocalRotation: function setChildLocalRotation(child, rotation) {
      var localState = GetLocalState(child);
      localState.rotation = rotation;
      this.updateChildRotation(child);
      return this;
    },
    resetLocalRotationState: function resetLocalRotationState() {
      var parent = GetLocalState(this).parent;

      if (parent) {
        parent.resetChildRotationState(this);
      }

      return this;
    }
  };

  var Scale$1 = {
    updateChildScale: function updateChildScale(child) {
      var localState = GetLocalState(child);
      var parent = localState.parent;
      child.scaleX = parent.scaleX * localState.scaleX;
      child.scaleY = parent.scaleY * localState.scaleY;
      return this;
    },
    syncScale: function syncScale() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildScale, this);
      }

      return this;
    },
    resetChildScaleState: function resetChildScaleState(child) {
      var localState = GetLocalState(child);
      var parent = localState.parent;
      localState.scaleX = GetScale(child.scaleX, parent.scaleX);
      localState.scaleY = GetScale(child.scaleY, parent.scaleY);
      return this;
    },
    setChildScale: function setChildScale(child, scaleX, scaleY) {
      if (scaleY === undefined) {
        scaleY = scaleX;
      }

      child.scaleX = scaleX;
      child.scaleY = scaleY;
      this.resetChildScaleState(child);
      return this;
    },
    setChildLocalScale: function setChildLocalScale(child, scaleX, scaleY) {
      if (scaleY === undefined) {
        scaleY = scaleX;
      }

      var localState = GetLocalState(child);
      localState.scaleX = scaleX;
      localState.scaleY = scaleY;
      this.updateChildScale(child);
      return this;
    },
    setChildDisplaySize: function setChildDisplaySize(child, width, height) {
      child.setDisplaySize(width, height);
      this.resetChildScaleState(child);
      return this;
    },
    resetLocalScaleState: function resetLocalScaleState() {
      var parent = GetLocalState(this).parent;

      if (parent) {
        parent.resetChildScaleState(this);
      }

      return this;
    }
  };

  /*

  Visible in localState:

    - visible: original visible of child
    - maskVisible: invisible by parent mask, see MaskChildren.js
        - undefined (not in masking) : Equal to mask visible
        - true (mask visible) : Inside, or across parent's visible area
        - false (maske invisible) : Out of parent's visible area

  Visible result of child = (parent visible) && (child visible) && (mask visible)
  */
  var Visible = {
    updateChildVisible: function updateChildVisible(child) {
      var localState = GetLocalState(child);
      var parent = localState.parent;
      var maskVisible = localState.hasOwnProperty('maskVisible') ? localState.maskVisible : true;
      child.visible = parent.visible && localState.visible && maskVisible;
      return this;
    },
    syncVisible: function syncVisible() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildVisible, this);
      }

      return this;
    },
    resetChildVisibleState: function resetChildVisibleState(child) {
      var localState = GetLocalState(child); // Delete maskVisible property

      if (localState.hasOwnProperty('maskVisible')) {
        delete localState.maskVisible;
      }

      localState.visible = child.visible;
      return this;
    },
    setChildVisible: function setChildVisible(child, visible) {
      // Visible of child will be affect by parent's visible, and mask visible
      this.setChildLocalVisible(child, visible);
      return this;
    },
    // Internal method
    setChildLocalVisible: function setChildLocalVisible(child, visible) {
      if (visible === undefined) {
        visible = true;
      }

      var localState = GetLocalState(child);
      localState.visible = visible;
      this.updateChildVisible(child);
      return this;
    },
    // Internal method
    setChildMaskVisible: function setChildMaskVisible(child, visible) {
      if (visible === undefined) {
        visible = true;
      }

      var localState = GetLocalState(child);
      localState.maskVisible = visible;
      this.updateChildVisible(child);
      return this;
    },
    resetLocalVisibleState: function resetLocalVisibleState() {
      var parent = GetLocalState(this).parent;

      if (parent) {
        parent.resetChildVisibleState(this);
      }

      return this;
    }
  };

  var Alpha = {
    updateChildAlpha: function updateChildAlpha(child) {
      var localState = GetLocalState(child);
      var parent = localState.parent;
      child.alpha = parent.alpha * localState.alpha;
      return this;
    },
    syncAlpha: function syncAlpha() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildAlpha, this);
      }

      return this;
    },
    resetChildAlphaState: function resetChildAlphaState(child) {
      var localState = GetLocalState(child);
      var parent = localState.parent;
      localState.alpha = GetScale(child.alpha, parent.alpha);
      return this;
    },
    setChildAlpha: function setChildAlpha(child, alpha) {
      child.alpha = alpha;
      this.resetChildAlphaState(child);
      return this;
    },
    setChildLocalAlpha: function setChildLocalAlpha(child, alpha) {
      var localState = GetLocalState(child);
      localState.alpha = alpha;
      this.updateChildAlpha(child);
      return this;
    },
    resetLocalAlphaState: function resetLocalAlphaState() {
      var parent = GetLocalState(this).parent;

      if (parent) {
        parent.resetChildAlphaState(this);
      }

      return this;
    }
  };

  var Active = {
    updateChildActive: function updateChildActive(child) {
      var localState = GetLocalState(child);
      var parent = localState.parent;
      child.active = parent.active && localState.active;
      return this;
    },
    syncActive: function syncActive() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildActive, this);
      }

      return this;
    },
    resetChildActiveState: function resetChildActiveState(child) {
      var localState = GetLocalState(child);
      localState.active = child.active;
      return this;
    },
    setChildActive: function setChildActive(child, active) {
      child.active = active;
      this.resetChildActiveState(child);
      return this;
    },
    setChildLocalActive: function setChildLocalActive(child, active) {
      if (active === undefined) {
        active = true;
      }

      var localState = GetLocalState(child);
      localState.active = active;
      this.updateChildActive(child);
      return this;
    },
    resetLocalActiveState: function resetLocalActiveState() {
      var parent = GetLocalState(this).parent;

      if (parent) {
        parent.resetChildActiveState(this);
      }

      return this;
    }
  };

  var ScrollFactor = {
    updateChildScrollFactor: function updateChildScrollFactor(child) {
      var localState = GetLocalState(child);
      var parent = localState.parent;
      child.setScrollFactor(parent.scrollFactorX, parent.scrollFactorY);
      return this;
    },
    syncScrollFactor: function syncScrollFactor() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildScrollFactor, this);
      }

      return this;
    }
  };

  var Mask = {
    updateChildMask: function updateChildMask(child) {
      // Don't propagate null mask to clear children's mask
      if (this.mask == null) {
        return this;
      }

      var maskGameObject = this.mask.hasOwnProperty('geometryMask') ? this.mask.geometryMask : this.mask.bitmapMask;

      if (maskGameObject !== child) {
        child.mask = this.mask;
      }

      return this;
    },
    syncMask: function syncMask() {
      if (this.syncChildrenEnable) {
        this.children.forEach(this.updateChildMask, this);
      }

      return this;
    },
    setMask: function setMask(mask) {
      this.mask = mask;
      return this;
    },
    clearMask: function clearMask(destroyMask) {
      if (destroyMask === undefined) {
        destroyMask = false;
      }

      if (destroyMask && this.mask) {
        this.mask.destroy();
      }

      this.mask = null;
      return this;
    }
  };

  var SortGameObjectsByDepth = function SortGameObjectsByDepth(gameObjects, descending) {
    if (gameObjects.length === 0) {
      return gameObjects;
    }

    if (descending === undefined) {
      descending = false;
    }

    var scene = gameObjects[0].scene;
    var displayList = scene.sys.displayList;
    displayList.depthSort();

    if (descending) {
      gameObjects.sort(function (childA, childB) {
        return displayList.getIndex(childB) - displayList.getIndex(childA);
      });
    } else {
      gameObjects.sort(function (childA, childB) {
        return displayList.getIndex(childA) - displayList.getIndex(childB);
      });
    }

    return gameObjects;
  };

  var Depth = {
    setDepth: function setDepth(value, containerOnly) {
      this.depth = value;

      if (!containerOnly && this.children) {
        var children = this.getAllChildren();

        for (var i = 0, cnt = children.length; i < cnt; i++) {
          children[i].depth = value;
        }
      }

      return this;
    },
    swapDepth: function swapDepth(containerB) {
      var depthA = this.depth;
      var depthB = containerB.depth;
      this.setDepth(depthB);
      containerB.setDepth(depthA);
      return this;
    },
    incDepth: function incDepth(inc) {
      this.depth += inc;

      if (this.children) {
        var children = this.getAllChildren();

        for (var i = 0, cnt = children.length; i < cnt; i++) {
          children[i].depth += inc;
        }
      }

      return this;
    },
    moveDepthBelow: function moveDepthBelow(gameObject) {
      var displayList = gameObject.scene.children;
      var children = this.getAllChildren([this]);
      SortGameObjectsByDepth(children);

      for (var i = 0, cnt = children.length; i < cnt; i++) {
        var child = children[i];

        if (displayList.exists(child)) {
          displayList.moveBelow(gameObject, child);
          break;
        }
      }

      return this;
    },
    moveDepthAbove: function moveDepthAbove(gameObject) {
      var displayList = gameObject.scene.children;
      var children = this.getAllChildren([this]);
      SortGameObjectsByDepth(children, true);

      for (var i = 0, cnt = children.length; i < cnt; i++) {
        var child = children[i];

        if (displayList.exists(child)) {
          displayList.moveAbove(gameObject, child);
          break;
        }
      }

      return this;
    }
  };

  var DepthFirstSearch = function DepthFirstSearch(root, callback) {
    var skip = callback(root);

    if (!skip && root.isRexContainerLite) {
      var children = root.children;

      for (var i = 0, cnt = children.length; i < cnt; i++) {
        DepthFirstSearch(children[i], callback);
      }
    }
  };

  var BreadthFirstSearch = function BreadthFirstSearch(root, callback) {
    var queue = [root];

    while (queue.length > 0) {
      var current = queue.shift();
      var skip = callback(current);

      if (!skip && current.isRexContainerLite) {
        queue.push.apply(queue, _toConsumableArray(current.children));
      }
    }
  };

  var ArrayUtils = Phaser.Utils.Array;
  var Children = {
    getChildren: function getChildren(out) {
      if (!out) {
        out = this.children; // Return internal children array
      } else {
        for (var i = 0, cnt = this.children.length; i < cnt; i++) {
          out.push(this.children[i]);
        } // Copy children

      }

      return out;
    },
    getAllChildren: function getAllChildren(out) {
      if (out === undefined) {
        out = [];
      }

      var root = this;
      BreadthFirstSearch(root, function (child) {
        // Don't add root
        if (child === root) {
          return;
        }

        out.push(child);
      });
      return out;
    },
    getAllVisibleChildren: function getAllVisibleChildren(out) {
      if (out === undefined) {
        out = [];
      }

      var root = this;
      BreadthFirstSearch(root, function (child) {
        // Don't add root
        if (child === root) {
          return;
        } // Don't add invisible child


        if (!child.visible) {
          return true;
        }

        out.push(child);
      });
      return out;
    },
    bfs: function bfs(callback, root) {
      if (root === undefined) {
        root = this;
      }

      BreadthFirstSearch(root, callback);
      return this;
    },
    dfs: function dfs(callback, root) {
      if (root === undefined) {
        root = this;
      }

      DepthFirstSearch(root, callback);
      return this;
    },
    contains: function contains(gameObject) {
      // Override Base.contains method
      var parent = GetParent(gameObject);

      if (!parent) {
        return false;
      } else if (parent === this) {
        return true;
      } else {
        return this.contains(parent);
      }
    },
    getByName: function getByName(name, recursive) {
      if (!recursive) {
        return ArrayUtils.GetFirst(this.children, 'name', name); // object, or null if not found
      } else {
        // recursive
        // Breadth-first search
        var queue = [this];
        var parent, child;

        while (queue.length) {
          parent = queue.shift();

          for (var i = 0, cnt = parent.children.length; i < cnt; i++) {
            child = parent.children[i];

            if (child.name === name) {
              return child;
            } else if (child.isRexContainerLite) {
              queue.push(child);
            }
          }
        }

        return null;
      }
    },
    getRandom: function getRandom(startIndex, length) {
      return ArrayUtils.GetRandom(this.children, startIndex, length);
    },
    getFirst: function getFirst(property, value, startIndex, endIndex) {
      return ArrayUtils.GetFirstElement(this.children, property, value, startIndex, endIndex);
    },
    getAll: function getAll(property, value, startIndex, endIndex) {
      return ArrayUtils.GetAll(this.children, property, value, startIndex, endIndex);
    },
    count: function count(property, value, startIndex, endIndex) {
      return ArrayUtils.CountAllMatching(this.children, property, value, startIndex, endIndex);
    },
    swap: function swap(child1, child2) {
      ArrayUtils.Swap(this.children, child1, child2);
      return this;
    },
    setAll: function setAll(property, value, startIndex, endIndex) {
      ArrayUtils.SetAll(this.children, property, value, startIndex, endIndex);
      return this;
    }
  };

  var IsArray = function IsArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  var Tween = {
    tweenChild: function tweenChild(tweenConfig) {
      var targets = tweenConfig.targets;

      if (!IsArray(targets)) {
        targets = [targets];
      }

      var scene,
          localTargets = [];
      var child;

      for (var i = 0, cnt = targets.length; i < cnt; i++) {
        child = targets[i];

        if (!child.hasOwnProperty('rexContainer')) {
          continue;
        }

        scene = child.scene;
        localTargets.push(child.rexContainer);
      }

      if (!scene) {
        return;
      }

      tweenConfig.targets = localTargets;
      var tween = scene.tweens.add(tweenConfig);

      var tweenUpdateListener = function tweenUpdateListener(tween, key, target) {
        if (!target.parent) {
          // target object was removed, so remove this tween too to avoid crashing
          scene.tweens.remove(tween);
          return;
        }

        var parent = target.parent;
        var child = target.self;

        switch (key) {
          case 'x':
          case 'y':
            parent.updateChildPosition(child);
            break;

          case 'angle':
          case 'rotation':
            parent.updateChildRotation(child);
            break;

          case 'scaleX':
          case 'scaleY':
          case 'displayWidth':
          case 'displayHeight':
            parent.updateChildScale(child);
            break;

          case 'alpha':
            parent.updateChildAlpha(child);
            break;
        }
      };

      tween.on('update', tweenUpdateListener);
      return tween;
    },
    tween: function tween(tweenConfig) {
      var scene = this.scene;

      if (!tweenConfig.targets) {
        tweenConfig.targets = this;
      }

      return scene.tweens.add(tweenConfig);
    }
  };

  var AddToLayer = function AddToLayer(layer) {
    var gameObjects = this.getAllChildren([this]);
    SortGameObjectsByDepth(gameObjects);
    layer.add(gameObjects);
    return this;
  };

  var AddToContainer = {
    addToLayer: AddToLayer,
    addToContainer: AddToLayer
  };

  var RotateAround = Phaser.Math.RotateAround;

  var ChangeOrigin$1 = function ChangeOrigin(gameObject, originX, originY) {
    if (originY === undefined) {
      originY = originX;
    }

    var deltaXY = {
      x: (originX - gameObject.originX) * gameObject.displayWidth,
      y: (originY - gameObject.originY) * gameObject.displayHeight
    };
    RotateAround(deltaXY, 0, 0, gameObject.rotation);
    gameObject.originX = originX;
    gameObject.originY = originY;
    gameObject.x = gameObject.x + deltaXY.x;
    gameObject.y = gameObject.y + deltaXY.y;
    return gameObject;
  };

  var ChangeOrigin = function ChangeOrigin(originX, originY) {
    this.syncChildrenEnable = false;
    ChangeOrigin$1(this, originX, originY);
    this.syncChildrenEnable = true;
    var children = this.getAllChildren();

    for (var i = 0, cnt = children.length; i < cnt; i++) {
      this.resetChildPositionState(children[i]);
    }

    return this;
  };

  var methods$2 = {
    changeOrigin: ChangeOrigin
  };
  Object.assign(methods$2, Parent, AddChild$1, RemoveChild$1, ChildState, Transform, Position, Rotation, Scale$1, Visible, Alpha, Active, ScrollFactor, Mask, Depth, Children, Tween, AddToContainer);

  var ContainerLite = /*#__PURE__*/function (_Base) {
    _inherits(ContainerLite, _Base);

    var _super = _createSuper(ContainerLite);

    function ContainerLite(scene, x, y, width, height, children) {
      var _this;

      _classCallCheck(this, ContainerLite);

      _this = _super.call(this, scene, x, y, width, height);
      _this.type = 'rexContainerLite';
      _this.isRexContainerLite = true;
      _this.syncChildrenEnable = true;
      _this._active = true;
      _this._mask = null;
      _this._scrollFactorX = 1;
      _this._scrollFactorY = 1;

      if (children) {
        _this.add(children);
      }

      return _this;
    }

    _createClass(ContainerLite, [{
      key: "destroy",
      value: function destroy(fromScene) {
        //  This Game Object has already been destroyed
        if (!this.scene) {
          return;
        }

        this.syncChildrenEnable = false; // Don't sync properties changing anymore

        _get(_getPrototypeOf(ContainerLite.prototype), "destroy", this).call(this, fromScene);
      }
    }, {
      key: "resize",
      value: function resize(width, height) {
        this.setSize(width, height);
        return this;
      }
    }, {
      key: "x",
      get: function get() {
        return this._x;
      },
      set: function set(value) {
        if (this._x === value) {
          return;
        }

        this._x = value;
        this.syncPosition();
      }
    }, {
      key: "y",
      get: function get() {
        return this._y;
      },
      set: function set(value) {
        if (this._y === value) {
          return;
        }

        this._y = value;
        this.syncPosition();
      } // Override

    }, {
      key: "rotation",
      get: function get() {
        return _get(_getPrototypeOf(ContainerLite.prototype), "rotation", this);
      },
      set: function set(value) {
        if (this.rotation === value) {
          return;
        }

        _set(_getPrototypeOf(ContainerLite.prototype), "rotation", value, this, true);

        this.syncPosition();
      } // Override

    }, {
      key: "scaleX",
      get: function get() {
        return _get(_getPrototypeOf(ContainerLite.prototype), "scaleX", this);
      },
      set: function set(value) {
        if (this.scaleX === value) {
          return;
        }

        _set(_getPrototypeOf(ContainerLite.prototype), "scaleX", value, this, true);

        this.syncPosition();
      } // Override

    }, {
      key: "scaleY",
      get: function get() {
        return _get(_getPrototypeOf(ContainerLite.prototype), "scaleY", this);
      },
      set: function set(value) {
        if (this.scaleY === value) {
          return;
        }

        _set(_getPrototypeOf(ContainerLite.prototype), "scaleY", value, this, true);

        this.syncPosition();
      } // Override

    }, {
      key: "visible",
      get: function get() {
        return _get(_getPrototypeOf(ContainerLite.prototype), "visible", this);
      },
      set: function set(value) {
        if (_get(_getPrototypeOf(ContainerLite.prototype), "visible", this) === value) {
          return;
        }

        _set(_getPrototypeOf(ContainerLite.prototype), "visible", value, this, true);

        this.syncVisible();
      } // Override

    }, {
      key: "alpha",
      get: function get() {
        return _get(_getPrototypeOf(ContainerLite.prototype), "alpha", this);
      },
      set: function set(value) {
        if (_get(_getPrototypeOf(ContainerLite.prototype), "alpha", this) === value) {
          return;
        }

        _set(_getPrototypeOf(ContainerLite.prototype), "alpha", value, this, true);

        this.syncAlpha();
      } // Override

    }, {
      key: "active",
      get: function get() {
        return this._active;
      },
      set: function set(value) {
        if (this._active === value) {
          return;
        }

        this._active = value;
        this.syncActive();
      } // Override

    }, {
      key: "mask",
      get: function get() {
        return this._mask;
      },
      set: function set(mask) {
        if (this._mask === mask) {
          return;
        }

        this._mask = mask;
        this.syncMask();
      } // Override

    }, {
      key: "scrollFactorX",
      get: function get() {
        return this._scrollFactorX;
      },
      set: function set(value) {
        if (this._scrollFactorX === value) {
          return;
        }

        this._scrollFactorX = value;
        this.syncScrollFactor();
      }
    }, {
      key: "scrollFactorY",
      get: function get() {
        return this._scrollFactorY;
      },
      set: function set(value) {
        if (this._scrollFactorY === value) {
          return;
        }

        this._scrollFactorY = value;
        this.syncScrollFactor();
      } // Compatiable with container plugin

    }, {
      key: "list",
      get: function get() {
        return this.children;
      }
    }], [{
      key: "GetParent",
      value: function GetParent$1(child) {
        return GetParent(child);
      }
    }]);

    return ContainerLite;
  }(Base$1);

  Object.assign(ContainerLite.prototype, methods$2);

  var GetSizerConfig = function GetSizerConfig(gameObject) {
    if (!gameObject.hasOwnProperty('rexSizer')) {
      gameObject.rexSizer = {};
    }

    return gameObject.rexSizer;
  };

  var GetChildPrevState = function GetChildPrevState(child) {
    var childConfig = GetSizerConfig(child);

    if (!childConfig.hasOwnProperty('prevState')) {
      childConfig.prevState = {};
    }

    return childConfig.prevState;
  };

  var GetDefaultBounds = function GetDefaultBounds(scene, out) {
    if (out === undefined) {
      if (GlobRectangle === undefined) {
        GlobRectangle = new Phaser.Geom.Rectangle();
      }

      out = GlobRectangle;
    }

    var gameConfig = scene.game.config;
    out.setTo(0, 0, gameConfig.width, gameConfig.height);
    return out;
  };

  var GlobRectangle;

  var PushIntoBounds = function PushIntoBounds(bounds) {
    if (bounds === undefined) {
      bounds = GetDefaultBounds(this.scene);
    }

    this.left = Math.max(this.left, bounds.left);
    this.right = Math.min(this.right, bounds.right);
    this.top = Math.max(this.top, bounds.top);
    this.bottom = Math.min(this.bottom, bounds.bottom);
    return this;
  };

  var ALIGN = Phaser.Display.Align;
  var ALIGNMODE = {
    center: ALIGN.CENTER,
    left: ALIGN.LEFT_CENTER,
    right: ALIGN.RIGHT_CENTER,
    top: ALIGN.TOP_CENTER,
    bottom: ALIGN.BOTTOM_CENTER,
    'left-top': ALIGN.TOP_LEFT,
    'left-center': ALIGN.LEFT_CENTER,
    'left-bottom': ALIGN.BOTTOM_LEFT,
    'center-top': ALIGN.TOP_CENTER,
    'center-center': ALIGN.CENTER,
    'center-bottom': ALIGN.BOTTOM_CENTER,
    'right-top': ALIGN.TOP_RIGHT,
    'right-center': ALIGN.RIGHT_CENTER,
    'right-bottom': ALIGN.BOTTOM_RIGHT
  };

  var NOOP = function NOOP() {//  NOOP
  };

  var globZone = new Phaser.GameObjects.Zone({
    sys: {
      queueDepthSort: NOOP,
      events: {
        once: NOOP
      }
    }
  }, 0, 0, 1, 1);
  globZone.setOrigin(0);

  var ALIGN_CONST = {
    /**
    * A constant representing a top-left alignment or position.
    * @constant
    * @name Phaser.Display.Align.TOP_LEFT
    * @since 3.0.0
    * @type {integer}
    */
    TOP_LEFT: 0,

    /**
    * A constant representing a top-center alignment or position.
    * @constant
    * @name Phaser.Display.Align.TOP_CENTER
    * @since 3.0.0
    * @type {integer}
    */
    TOP_CENTER: 1,

    /**
    * A constant representing a top-right alignment or position.
    * @constant
    * @name Phaser.Display.Align.TOP_RIGHT
    * @since 3.0.0
    * @type {integer}
    */
    TOP_RIGHT: 2,

    /**
    * A constant representing a left-top alignment or position.
    * @constant
    * @name Phaser.Display.Align.LEFT_TOP
    * @since 3.0.0
    * @type {integer}
    */
    LEFT_TOP: 3,

    /**
    * A constant representing a left-center alignment or position.
    * @constant
    * @name Phaser.Display.Align.LEFT_CENTER
    * @since 3.0.0
    * @type {integer}
    */
    LEFT_CENTER: 4,

    /**
    * A constant representing a left-bottom alignment or position.
    * @constant
    * @name Phaser.Display.Align.LEFT_BOTTOM
    * @since 3.0.0
    * @type {integer}
    */
    LEFT_BOTTOM: 5,

    /**
    * A constant representing a center alignment or position.
    * @constant
    * @name Phaser.Display.Align.CENTER
    * @since 3.0.0
    * @type {integer}
    */
    CENTER: 6,

    /**
    * A constant representing a right-top alignment or position.
    * @constant
    * @name Phaser.Display.Align.RIGHT_TOP
    * @since 3.0.0
    * @type {integer}
    */
    RIGHT_TOP: 7,

    /**
    * A constant representing a right-center alignment or position.
    * @constant
    * @name Phaser.Display.Align.RIGHT_CENTER
    * @since 3.0.0
    * @type {integer}
    */
    RIGHT_CENTER: 8,

    /**
    * A constant representing a right-bottom alignment or position.
    * @constant
    * @name Phaser.Display.Align.RIGHT_BOTTOM
    * @since 3.0.0
    * @type {integer}
    */
    RIGHT_BOTTOM: 9,

    /**
    * A constant representing a bottom-left alignment or position.
    * @constant
    * @name Phaser.Display.Align.BOTTOM_LEFT
    * @since 3.0.0
    * @type {integer}
    */
    BOTTOM_LEFT: 10,

    /**
    * A constant representing a bottom-center alignment or position.
    * @constant
    * @name Phaser.Display.Align.BOTTOM_CENTER
    * @since 3.0.0
    * @type {integer}
    */
    BOTTOM_CENTER: 11,

    /**
    * A constant representing a bottom-right alignment or position.
    * @constant
    * @name Phaser.Display.Align.BOTTOM_RIGHT
    * @since 3.0.0
    * @type {integer}
    */
    BOTTOM_RIGHT: 12
  };

  var GetDisplayWidth = function GetDisplayWidth(gameObject) {
    if (gameObject.displayWidth !== undefined) {
      return gameObject.displayWidth;
    } else {
      return gameObject.width;
    }
  };

  var GetDisplayHeight = function GetDisplayHeight(gameObject) {
    if (gameObject.displayHeight !== undefined) {
      return gameObject.displayHeight;
    } else {
      return gameObject.height;
    }
  };

  var GetBottom = function GetBottom(gameObject) {
    var height = GetDisplayHeight(gameObject);
    return gameObject.y + height - height * gameObject.originY;
  };

  var GetCenterX = function GetCenterX(gameObject) {
    var width = GetDisplayWidth(gameObject);
    return gameObject.x - width * gameObject.originX + width * 0.5;
  };

  var SetBottom = function SetBottom(gameObject, value) {
    var height = GetDisplayHeight(gameObject);
    gameObject.y = value - height + height * gameObject.originY;
    return gameObject;
  };

  var SetCenterX = function SetCenterX(gameObject, x) {
    var width = GetDisplayWidth(gameObject);
    var offsetX = width * gameObject.originX;
    gameObject.x = x + offsetX - width * 0.5;
    return gameObject;
  };

  var BottomCenter = function BottomCenter(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }

    if (offsetY === undefined) {
      offsetY = 0;
    }

    SetCenterX(gameObject, GetCenterX(alignIn) + offsetX);
    SetBottom(gameObject, GetBottom(alignIn) + offsetY);
    return gameObject;
  };

  var GetLeft = function GetLeft(gameObject) {
    var width = GetDisplayWidth(gameObject);
    return gameObject.x - width * gameObject.originX;
  };

  var SetLeft = function SetLeft(gameObject, value) {
    var width = GetDisplayWidth(gameObject);
    gameObject.x = value + width * gameObject.originX;
    return gameObject;
  };

  var BottomLeft = function BottomLeft(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }

    if (offsetY === undefined) {
      offsetY = 0;
    }

    SetLeft(gameObject, GetLeft(alignIn) - offsetX);
    SetBottom(gameObject, GetBottom(alignIn) + offsetY);
    return gameObject;
  };

  var GetRight = function GetRight(gameObject) {
    var width = GetDisplayWidth(gameObject);
    return gameObject.x + width - width * gameObject.originX;
  };

  var SetRight = function SetRight(gameObject, value) {
    var width = GetDisplayWidth(gameObject);
    gameObject.x = value - width + width * gameObject.originX;
    return gameObject;
  };

  var BottomRight = function BottomRight(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }

    if (offsetY === undefined) {
      offsetY = 0;
    }

    SetRight(gameObject, GetRight(alignIn) + offsetX);
    SetBottom(gameObject, GetBottom(alignIn) + offsetY);
    return gameObject;
  };

  var SetCenterY = function SetCenterY(gameObject, y) {
    var height = GetDisplayHeight(gameObject);
    var offsetY = height * gameObject.originY;
    gameObject.y = y + offsetY - height * 0.5;
    return gameObject;
  };

  var CenterOn = function CenterOn(gameObject, x, y) {
    SetCenterX(gameObject, x);
    return SetCenterY(gameObject, y);
  };

  var GetCenterY = function GetCenterY(gameObject) {
    var height = GetDisplayHeight(gameObject);
    return gameObject.y - height * gameObject.originY + height * 0.5;
  };

  var Center = function Center(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }

    if (offsetY === undefined) {
      offsetY = 0;
    }

    CenterOn(gameObject, GetCenterX(alignIn) + offsetX, GetCenterY(alignIn) + offsetY);
    return gameObject;
  };

  var LeftCenter = function LeftCenter(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }

    if (offsetY === undefined) {
      offsetY = 0;
    }

    SetLeft(gameObject, GetLeft(alignIn) - offsetX);
    SetCenterY(gameObject, GetCenterY(alignIn) + offsetY);
    return gameObject;
  };

  var RightCenter = function RightCenter(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }

    if (offsetY === undefined) {
      offsetY = 0;
    }

    SetRight(gameObject, GetRight(alignIn) + offsetX);
    SetCenterY(gameObject, GetCenterY(alignIn) + offsetY);
    return gameObject;
  };

  var GetTop = function GetTop(gameObject) {
    var height = GetDisplayHeight(gameObject);
    return gameObject.y - height * gameObject.originY;
  };

  var SetTop = function SetTop(gameObject, value) {
    var height = GetDisplayHeight(gameObject);
    gameObject.y = value + height * gameObject.originY;
    return gameObject;
  };

  var TopCenter = function TopCenter(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }

    if (offsetY === undefined) {
      offsetY = 0;
    }

    SetCenterX(gameObject, GetCenterX(alignIn) + offsetX);
    SetTop(gameObject, GetTop(alignIn) - offsetY);
    return gameObject;
  };

  var TopLeft = function TopLeft(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }

    if (offsetY === undefined) {
      offsetY = 0;
    }

    SetLeft(gameObject, GetLeft(alignIn) - offsetX);
    SetTop(gameObject, GetTop(alignIn) - offsetY);
    return gameObject;
  };

  var TopRight = function TopRight(gameObject, alignIn, offsetX, offsetY) {
    if (offsetX === undefined) {
      offsetX = 0;
    }

    if (offsetY === undefined) {
      offsetY = 0;
    }

    SetRight(gameObject, GetRight(alignIn) + offsetX);
    SetTop(gameObject, GetTop(alignIn) - offsetY);
    return gameObject;
  };

  var AlignInMap = [];
  AlignInMap[ALIGN_CONST.BOTTOM_CENTER] = BottomCenter;
  AlignInMap[ALIGN_CONST.BOTTOM_LEFT] = BottomLeft;
  AlignInMap[ALIGN_CONST.BOTTOM_RIGHT] = BottomRight;
  AlignInMap[ALIGN_CONST.CENTER] = Center;
  AlignInMap[ALIGN_CONST.LEFT_CENTER] = LeftCenter;
  AlignInMap[ALIGN_CONST.RIGHT_CENTER] = RightCenter;
  AlignInMap[ALIGN_CONST.TOP_CENTER] = TopCenter;
  AlignInMap[ALIGN_CONST.TOP_LEFT] = TopLeft;
  AlignInMap[ALIGN_CONST.TOP_RIGHT] = TopRight;

  var QuickSet = function QuickSet(child, alignIn, position, offsetX, offsetY) {
    return AlignInMap[position](child, alignIn, offsetX, offsetY);
  };

  var AlignIn = function AlignIn(child, x, y, width, height, align) {
    globZone.setPosition(x, y).setSize(width, height);
    QuickSet(child, globZone, align);
  };

  var GetValue$g = Phaser.Utils.Objects.GetValue;
  var Group = Phaser.GameObjects.Group;

  var DrawBounds = function DrawBounds(graphics, config) {
    var scene = graphics.scene;
    var color;
    var createTextCallback, createTextCallbackScope, textAlign;

    if (typeof config === 'number') {
      color = config;
    } else {
      color = GetValue$g(config, 'color', 0xffffff);
      var nameTextConfig = GetValue$g(config, 'name', false);

      if (nameTextConfig) {
        createTextCallback = GetValue$g(nameTextConfig, 'createTextCallback', DefaultCreateTextCallback);
        createTextCallbackScope = GetValue$g(nameTextConfig, 'createTextCallbackScope', undefined);
        textAlign = GetValue$g(nameTextConfig, 'align', 'left-top');

        if (typeof textAlign === 'string') {
          textAlign = ALIGNMODE[textAlign];
        }
      }
    }

    if (createTextCallback && !graphics.children) {
      graphics.children = new Group(scene);
      graphics.once('destroy', function (graphics, fromScene) {
        graphics.children.destroy(!fromScene);
        graphics.children = undefined;
      });
      var graphicsClear = graphics.clear.bind(graphics);

      graphics.clear = function () {
        graphicsClear();
        graphics.children.clear(false, true);
      };
    }

    var children = this.getAllShownChildren([this]),
        child;
    var nameText;

    for (var i = 0, cnt = children.length; i < cnt; i++) {
      child = children[i];

      if (!child.getBounds) {
        continue;
      }

      if (color) {
        graphics.lineStyle(1, color).strokeRectShape(child.getBounds(GlobRect));
      }

      if (child.name && createTextCallback) {
        if (createTextCallbackScope) {
          nameText = createTextCallback.call(createTextCallbackScope, scene);
        } else {
          nameText = createTextCallback(scene);
        }

        if (nameText) {
          nameText.setText(child.name);
          graphics.children.add(nameText);
          AlignIn(nameText, GlobRect.x, GlobRect.y, GlobRect.width, GlobRect.height, textAlign);
        }
      }
    }

    return this;
  };

  var DefaultCreateTextCallback = function DefaultCreateTextCallback(scene, child, childBoundsRect) {
    return scene.add.text(0, 0, '');
  };

  var GlobRect = new Phaser.Geom.Rectangle();

  var GetValue$f = Phaser.Utils.Objects.GetValue;

  var GetBoundsConfig = function GetBoundsConfig(config, out) {
    if (out === undefined) {
      out = {};
    }

    if (typeof config === 'number') {
      out.left = config;
      out.right = config;
      out.top = config;
      out.bottom = config;
    } else {
      out.left = GetValue$f(config, 'left', 0);
      out.right = GetValue$f(config, 'right', 0);
      out.top = GetValue$f(config, 'top', 0);
      out.bottom = GetValue$f(config, 'bottom', 0);
    }

    return out;
  };

  var ContainerAdd = ContainerLite.prototype.add;

  var AddChild = function AddChild(gameObject) {
    ContainerAdd.call(this, gameObject);

    if (this.sizerEventsEnable) {
      gameObject.emit('sizer.add', gameObject, this);
      this.emit('add', gameObject, this);
    }

    return this;
  };

  var AddChildMethods$1 = {
    addBackground: function addBackground(gameObject, paddingConfig, childKey) {
      if (this.backgroundChildren === undefined) {
        this.backgroundChildren = [];
      }

      if (typeof paddingConfig === 'string') {
        childKey = paddingConfig;
        paddingConfig = undefined;
      }

      if (paddingConfig === undefined) {
        paddingConfig = 0;
      }

      AddChild.call(this, gameObject);
      this.backgroundChildren.push(gameObject);
      var config = this.getSizerConfig(gameObject);
      config.padding = GetBoundsConfig(paddingConfig);

      if (childKey !== undefined) {
        this.addChildrenMap(childKey, gameObject);
      }

      return this;
    },
    isBackground: function isBackground(gameObject) {
      if (this.backgroundChildren === undefined) {
        return false;
      }

      return this.backgroundChildren.indexOf(gameObject) !== -1;
    }
  };

  var AddChildrenMap = function AddChildrenMap(key, gameObject) {
    if (this.childrenMap === undefined) {
      this.childrenMap = {};
    }

    this.childrenMap[key] = gameObject;
    return this;
  };

  var GetElement = function GetElement(mapNameList, recursive) {
    if (typeof mapNameList === 'string') {
      mapNameList = mapNameList.split('.');
    }

    if (mapNameList.length === 0) {
      return undefined;
    }

    var name = mapNameList.shift(),
        element = null;

    if (name.charAt(0) === '#') {
      // Get element by name
      name = name.substring(1);
      element = this.getByName(name, recursive);
    } else if (name.indexOf('[') === -1) {
      // Get element by key
      if (this.childrenMap) {
        element = this.childrenMap[name];
      }
    } else {
      // Get element by key[]
      var innerMatch = name.match(RE_OBJ);

      if (innerMatch != null) {
        if (this.childrenMap) {
          var elements = this.childrenMap[innerMatch[1]];

          if (elements) {
            element = elements[innerMatch[2]];
          }
        }
      }
    }

    if (mapNameList.length === 0) {
      return element;
    } else if (element && element.childrenMap) {
      return element.getElement(mapNameList);
    } else {
      return null;
    }
  };

  var RE_OBJ = /(\S+)\[(\d+)\]/i;

  var GetValue$e = Phaser.Utils.Objects.GetValue;

  var GetPadding = function GetPadding(padding, key) {
    if (key === undefined) {
      return padding;
    }

    return padding[key];
  };

  var SetPadding = function SetPadding(padding, key, value) {
    var keyType = _typeof(key);

    if (keyType === 'string') {
      padding[key] = value;
    } else if (keyType === 'number') {
      padding.left = key;
      padding.right = key;
      padding.top = key;
      padding.bottom = key;
    } else {
      padding.left = GetValue$e(key, 'left', 0);
      padding.right = GetValue$e(key, 'right', 0);
      padding.top = GetValue$e(key, 'top', 0);
      padding.bottom = GetValue$e(key, 'bottom', 0);
    }
  };

  var PaddingMethods = {
    getInnerPadding: function getInnerPadding(key) {
      return GetPadding(this.space, key);
    },
    setInnerPadding: function setInnerPadding(key, value) {
      SetPadding(this.space, key, value);
      return this;
    },
    getOutterPadding: function getOutterPadding(key) {
      return GetPadding(this.getSizerConfig(this).padding, key);
    },
    setOuterPadding: function setOuterPadding(key, value) {
      SetPadding(this.getSizerConfig(this).padding, key, value);
      return this;
    },
    getChildOutterPadding: function getChildOutterPadding(child, key) {
      if (typeof child === 'string') {
        child = this.getElement(child);
      }

      return GetPadding(this.getSizerConfig(child).padding, key);
    },
    setChildOuterPadding: function setChildOuterPadding(child, key, value) {
      if (typeof child === 'string') {
        child = this.getElement(child);
      }

      SetPadding(this.getSizerConfig(child).padding, key, value);
      return this;
    }
  };

  var ResolveWidth = function ResolveWidth(width) {
    if (width === undefined) {
      width = Math.max(this.childrenWidth, this.minWidth);
    }

    return width;
  };

  var ResolveChildrenWidth = function ResolveChildrenWidth(parentWidth) {
    // Resolve width of sizer children
    var child, childWidth;

    for (var i in this.sizerChildren) {
      child = this.sizerChildren[i];

      if (child && child.isRexSizer && !child.ignoreLayout) {
        childWidth = this.getExpandedChildWidth(child, parentWidth);
        childWidth = child.resolveWidth(childWidth);
        child.resolveChildrenWidth(childWidth);
      }
    }
  };

  var ResolveHeight = function ResolveHeight(height) {
    var minHeight = Math.max(this.childrenHeight, this.minHeight);

    if (height === undefined) {
      height = minHeight;
    }

    return height;
  };

  var GetChildWidth = function GetChildWidth(child) {
    var childWidth;

    if (child.isRexSizer) {
      // Sizer game object
      childWidth = Math.max(child.minWidth, child.childrenWidth);
    } else {
      // Normal game object
      if (child.minWidth !== undefined) {
        // Force minWidth
        childWidth = child.minWidth;
      } else {
        childWidth = GetDisplayWidth(child);
      }
    }

    return childWidth;
  };

  var GetChildHeight = function GetChildHeight(child) {
    var childHeight;

    if (child.isRexSizer) {
      // Sizer game object
      childHeight = Math.max(child.minHeight, child.childrenHeight);
    } else {
      // Normal game object
      if (child.minHeight !== undefined) {
        // Force minHeight
        childHeight = child.minHeight;
      } else {
        childHeight = GetDisplayHeight(child);
      }
    }

    return childHeight;
  };

  // Override
  var GetExpandedChildWidth$1 = function GetExpandedChildWidth(child, parentWidth) {
    return parentWidth;
  };

  // Override
  var GetExpandedChildHeight$1 = function GetExpandedChildHeight(child, parentHeight) {
    return parentHeight;
  };

  // Override
  var GetChildrenWidth$1 = function GetChildrenWidth() {
    return 0;
  };

  // Override
  var GetChildrenHeight$1 = function GetChildrenHeight() {
    return 0;
  };

  var GetAllChildrenSizers = function GetAllChildrenSizers(out) {
    if (out === undefined) {
      out = [];
    }

    var startIdx = out.length;
    var children = this.getChildrenSizers(out);
    var endIdx = out.length;

    for (var i = startIdx; i < endIdx; i++) {
      children[i].getAllChildrenSizers(out);
    }

    return out;
  };

  // Default method
  var GetChildrenSizers$1 = function GetChildrenSizers(out) {
    if (out === undefined) {
      out = [];
    }

    return out;
  };

  var GetShownChildrenMethods = {
    getShownChildren: function getShownChildren(out) {
      if (out === undefined) {
        out = [];
      }

      var children = this.children,
          child;

      for (var i = 0, cnt = children.length; i < cnt; i++) {
        child = children[i];

        if (child.rexSizer && child.rexSizer.hidden) {
          // Don't add hidden child
          continue;
        }

        out.push(child);
      }

      return out;
    },
    getAllShownChildren: function getAllShownChildren(out) {
      if (out === undefined) {
        out = [];
      }

      var children = this.children,
          child;

      for (var i = 0, cnt = children.length; i < cnt; i++) {
        child = children[i];

        if (child.rexSizer && child.rexSizer.hidden) {
          // Don't add hidden child
          continue;
        }

        out.push(child);

        if (child.hasOwnProperty('isRexContainerLite')) {
          var _out;

          (_out = out).push.apply(_out, _toConsumableArray(child.getAllShownChildren()));
        }
      }

      return out;
    }
  };

  var PreLayout = function PreLayout() {
    this._childrenWidth = undefined;
    this._childrenHeight = undefined;
    var children = this.getChildrenSizers(),
        child;

    for (var i = 0, cnt = children.length; i < cnt; i++) {
      child = children[i];

      if (child.ignoreLayout) {
        continue;
      }

      child.preLayout();
    }
  };

  var Layout = function Layout() {
    this.runLayout();
    return this;
  };

  // Override
  var RunLayout = function RunLayout(parent, newWidth, newHeight) {
    // Skip hidden or !dirty sizer
    if (this.ignoreLayout) {
      return this;
    }

    var isTopmostParent = !parent; // Preprocessor, top parent only

    if (isTopmostParent) {
      this.preLayout();
    } // Calculate parent width


    newWidth = this.resolveWidth(newWidth); // Calculate all children width, run width wrap

    if (isTopmostParent) {
      this.resolveChildrenWidth(newWidth);
      this.runWidthWrap(newWidth);
    } // Calculate parent height


    newHeight = this.resolveHeight(newHeight); // Resize parent

    this.resize(newWidth, newHeight);

    if (this.sizerEventsEnable) {
      if (this.layoutedChildren === undefined) {
        this.layoutedChildren = [];
      }
    } // Layout children    


    this.layoutChildren(); // Layout background children

    this.layoutBackgrounds();

    if (this.sizerEventsEnable) {
      this.emit('postlayout', this.layoutedChildren, this);
      this.layoutedChildren.length = 0;
    }

    return this.postLayout();
  };

  // Override
  var LayoutChildren$1 = function LayoutChildren() {};

  var PostLayout = function PostLayout(parent, newWidth, newHeight) {
    if (this._anchor) {
      this._anchor.updatePosition();
    }

    return this;
  };

  // Default method
  var RunWidthWrap = function RunWidthWrap(parentWidth) {
    var child, childWidth;

    for (var i in this.sizerChildren) {
      child = this.sizerChildren[i];

      if (!child || child.isRexSizer && child.ignoreLayout || !child.runWidthWrap) {
        continue;
      }

      childWidth = this.getExpandedChildWidth(child, parentWidth);

      if (child.isRexSizer) {
        childWidth = child.resolveWidth(childWidth);
      }

      child.runWidthWrap(childWidth);
    }

    return this;
  };

  var EventEmitterMethods = {
    setEventEmitter: function setEventEmitter(eventEmitter, EventEmitterClass) {
      if (EventEmitterClass === undefined) {
        EventEmitterClass = Phaser.Events.EventEmitter; // Use built-in EventEmitter class by default
      }

      this._privateEE = eventEmitter === true || eventEmitter === undefined;
      this._eventEmitter = this._privateEE ? new EventEmitterClass() : eventEmitter;
      return this;
    },
    destroyEventEmitter: function destroyEventEmitter() {
      if (this._eventEmitter && this._privateEE) {
        this._eventEmitter.shutdown();
      }

      return this;
    },
    getEventEmitter: function getEventEmitter() {
      return this._eventEmitter;
    },
    on: function on() {
      if (this._eventEmitter) {
        this._eventEmitter.on.apply(this._eventEmitter, arguments);
      }

      return this;
    },
    once: function once() {
      if (this._eventEmitter) {
        this._eventEmitter.once.apply(this._eventEmitter, arguments);
      }

      return this;
    },
    off: function off() {
      if (this._eventEmitter) {
        this._eventEmitter.off.apply(this._eventEmitter, arguments);
      }

      return this;
    },
    emit: function emit(event) {
      if (this._eventEmitter && event) {
        this._eventEmitter.emit.apply(this._eventEmitter, arguments);
      }

      return this;
    },
    addListener: function addListener() {
      if (this._eventEmitter) {
        this._eventEmitter.addListener.apply(this._eventEmitter, arguments);
      }

      return this;
    },
    removeListener: function removeListener() {
      if (this._eventEmitter) {
        this._eventEmitter.removeListener.apply(this._eventEmitter, arguments);
      }

      return this;
    },
    removeAllListeners: function removeAllListeners() {
      if (this._eventEmitter) {
        this._eventEmitter.removeAllListeners.apply(this._eventEmitter, arguments);
      }

      return this;
    },
    listenerCount: function listenerCount() {
      if (this._eventEmitter) {
        return this._eventEmitter.listenerCount.apply(this._eventEmitter, arguments);
      }

      return 0;
    },
    listeners: function listeners() {
      if (this._eventEmitter) {
        return this._eventEmitter.listeners.apply(this._eventEmitter, arguments);
      }

      return [];
    },
    eventNames: function eventNames() {
      if (this._eventEmitter) {
        return this._eventEmitter.eventNames.apply(this._eventEmitter, arguments);
      }

      return [];
    }
  };

  var SceneClass = Phaser.Scene;

  var IsSceneObject = function IsSceneObject(object) {
    return object instanceof SceneClass;
  };

  var GetSceneObject = function GetSceneObject(object) {
    if (object == null || _typeof(object) !== 'object') {
      return null;
    } else if (IsSceneObject(object)) {
      // object = scene
      return object;
    } else if (object.scene && IsSceneObject(object.scene)) {
      // object = game object
      return object.scene;
    } else if (object.parent && object.parent.scene && IsSceneObject(object.parent.scene)) {
      // parent = bob object
      return object.parent.scene;
    }
  };

  var GetValue$d = Phaser.Utils.Objects.GetValue;

  var ComponentBase = /*#__PURE__*/function () {
    function ComponentBase(parent, config) {
      _classCallCheck(this, ComponentBase);

      this.parent = parent; // gameObject or scene

      this.scene = GetSceneObject(parent);
      this.isShutdown = false; // Event emitter, default is private event emitter

      this.setEventEmitter(GetValue$d(config, 'eventEmitter', true)); // Register callback of parent destroy event, also see `shutdown` method

      if (this.parent && this.parent === this.scene) {
        // parent is a scene
        this.scene.events.once('shutdown', this.onSceneDestroy, this);
      } else if (this.parent && this.parent.once) {
        // bob object does not have event emitter
        this.parent.once('destroy', this.onParentDestroy, this);
      }
    }

    _createClass(ComponentBase, [{
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        } // parent might not be shutdown yet


        if (this.parent && this.parent === this.scene) {
          // parent is a scene
          this.scene.events.off('shutdown', this.onSceneDestroy, this);
        } else if (this.parent && this.parent.once) {
          // bob object does not have event emitter
          this.parent.off('destroy', this.onParentDestroy, this);
        }

        this.destroyEventEmitter();
        this.parent = undefined;
        this.scene = undefined;
        this.isShutdown = true;
      }
    }, {
      key: "destroy",
      value: function destroy(fromScene) {
        this.shutdown(fromScene);
      }
    }, {
      key: "onSceneDestroy",
      value: function onSceneDestroy() {
        this.destroy(true);
      }
    }, {
      key: "onParentDestroy",
      value: function onParentDestroy(parent, fromScene) {
        this.destroy(fromScene);
      }
    }]);

    return ComponentBase;
  }();
  Object.assign(ComponentBase.prototype, EventEmitterMethods);

  var Rectangle = Phaser.Geom.Rectangle;
  Phaser.Scale.Center;

  var GetViewport = function GetViewport(scene, out) {
    if (out === undefined) {
      out = new Rectangle();
    } else if (out === true) {
      out = globRect$1;
    }

    var scaleManager = scene.scale;
    var baseSize = scaleManager.baseSize;
    var parentSize = scaleManager.parentSize;
    var canvasBounds = scaleManager.canvasBounds;
    var displayScale = scaleManager.displayScale;
    var x = canvasBounds.x >= 0 ? 0 : -(canvasBounds.x * displayScale.x);
    var y = canvasBounds.y >= 0 ? 0 : -(canvasBounds.y * displayScale.y);
    var width;

    if (parentSize.width >= canvasBounds.width) {
      width = baseSize.width;
    } else {
      width = baseSize.width - (canvasBounds.width - parentSize.width) * displayScale.x;
    }

    var height;

    if (parentSize.height >= canvasBounds.height) {
      height = baseSize.height;
    } else {
      height = baseSize.height - (canvasBounds.height - parentSize.height) * displayScale.y;
    }

    out.setTo(x, y, width, height);
    return out;
  };

  var globRect$1 = new Rectangle();

  var Anchor = /*#__PURE__*/function (_ComponentBase) {
    _inherits(Anchor, _ComponentBase);

    var _super = _createSuper(Anchor);

    function Anchor(gameObject, config) {
      var _this;

      _classCallCheck(this, Anchor);

      _this = _super.call(this, gameObject, {
        eventEmitter: false
      }); // No event emitter
      // this.parent = gameObject;

      _this.viewport = undefined;

      _this.resetFromJSON(config);

      _this.boot();

      return _this;
    }

    _createClass(Anchor, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        if (o === undefined) {
          o = {};
        } // Position


        var alignX, configX;

        if (o.x !== undefined) {
          alignX = null;
          configX = o.x;
        } else if (o.left !== undefined) {
          alignX = 0;
          configX = o.left;
        } else if (o.right !== undefined) {
          alignX = 1;
          configX = o.right;
        } else if (o.centerX !== undefined) {
          alignX = 0.5;
          configX = o.centerX;
        }

        var alignY, configY;

        if (o.y !== undefined) {
          alignY = null;
          configY = o.y;
        } else if (o.top !== undefined) {
          alignY = 0;
          configY = o.top;
        } else if (o.bottom !== undefined) {
          alignY = 1;
          configY = o.bottom;
        } else if (o.centerY !== undefined) {
          alignY = 0.5;
          configY = o.centerY;
        }

        var percentageX, offsetX;

        if (configX !== undefined) {
          configX = configX.replace('left', '0%').replace('right', '100%').replace('center', '50%').split('%');
          percentageX = parseFloat(configX[0]) / 100;
          offsetX = configX[1] === '' ? 0 : parseFloat(configX[1]);
        }

        var percentageY, offsetY;

        if (configY !== undefined) {
          configY = configY.replace('top', '0%').replace('bottom', '100%').replace('center', '50%').split('%');
          percentageY = parseFloat(configY[0]) / 100;
          offsetY = configY[1] === '' ? 0 : parseFloat(configY[1]);
        } // Size


        var configWidth = o.width;
        var percentageWidth, paddingWidth;

        if (configWidth !== undefined) {
          configWidth = configWidth.split('%');
          percentageWidth = parseFloat(configWidth[0]) / 100;
          paddingWidth = configWidth[1] === '' ? 0 : parseFloat(configWidth[1]);
        }

        var configHeight = o.height;
        var percentageHeight, paddingHeight;

        if (configHeight !== undefined) {
          configHeight = configHeight.split('%');
          percentageHeight = parseFloat(configHeight[0]) / 100;
          paddingHeight = configHeight[1] === '' ? 0 : parseFloat(configHeight[1]);
        } // Position


        this.setAlign(alignX, alignY);
        this.setPercentage(percentageX, percentageY);
        this.setOffset(offsetX, offsetY); // Size

        this.setSizePercentage(percentageWidth, percentageHeight);
        this.setSizePadding(paddingWidth, paddingHeight);
        var onResizeCallback = o.onResizeCallback;
        var onResizeCallbackScope = o.onResizeCallbackScope;

        if (onResizeCallback !== undefined) {
          this.setResizeCallback(onResizeCallback, onResizeCallbackScope);
        }

        var onUpdateViewportCallback = o.onUpdateViewportCallback;
        var onUpdateViewportCallbackScope = o.onUpdateViewportCallbackScope;

        if (onUpdateViewportCallback !== undefined) {
          this.setUpdateViewportCallback(onUpdateViewportCallback, onUpdateViewportCallbackScope);
        }

        return this;
      }
    }, {
      key: "boot",
      value: function boot() {
        this.scene.scale.on('resize', this.anchor, this);
        this.anchor();
      }
    }, {
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        }

        this.scene.scale.off('resize', this.anchor, this);
        this.viewport = undefined;
        this.onUpdateViewportCallback = undefined;
        this.onUpdateViewportCallbackScope = undefined;
        this.onResizeCallback = undefined;
        this.onResizeCallbackScope = undefined;

        _get(_getPrototypeOf(Anchor.prototype), "shutdown", this).call(this, fromScene);
      } // Position

    }, {
      key: "setAlign",
      value: function setAlign(x, y) {
        this.alignX = x;
        this.alignY = y;
        return this;
      }
    }, {
      key: "setPercentage",
      value: function setPercentage(x, y) {
        this.percentageX = x;
        this.percentageY = y;
        return this;
      }
    }, {
      key: "setOffset",
      value: function setOffset(x, y) {
        this.offsetX = x;
        this.offsetY = y;
        return this;
      } // Size

    }, {
      key: "setSizePercentage",
      value: function setSizePercentage(width, height) {
        this.percentageWidth = width;
        this.percentageHeight = height;
        return this;
      }
    }, {
      key: "setSizePadding",
      value: function setSizePadding(width, height) {
        this.paddingWidth = width;
        this.paddingHeight = height;
        return this;
      }
    }, {
      key: "setResizeCallback",
      value: function setResizeCallback(callback, scope) {
        this.onResizeCallback = callback;
        this.onResizeCallbackScope = scope;
        return this;
      }
    }, {
      key: "setUpdateViewportCallback",
      value: function setUpdateViewportCallback(callback, scope) {
        this.onUpdateViewportCallback = callback;
        this.onUpdateViewportCallbackScope = scope;
        return this;
      }
    }, {
      key: "anchor",
      value: function anchor() {
        this.updateViewport();
        this.updateSize();
        this.updatePosition();
        return this;
      }
    }, {
      key: "updateSize",
      value: function updateSize() {
        var callback = this.onResizeCallback,
            scope = this.onResizeCallbackScope;
        var newWidth = this.anchorWidth,
            newHeight = this.anchorHeight;

        if (newWidth === undefined && newHeight === undefined || !callback) {
          return;
        }

        var gameObject = this.parent;

        if (newWidth === undefined) {
          newWidth = gameObject.width;
        }

        if (newHeight === undefined) {
          newHeight = gameObject.height;
        }

        if (scope) {
          callback.call(scope, newWidth, newHeight, gameObject, this);
        } else {
          callback(newWidth, newHeight, gameObject, this);
        }
      }
    }, {
      key: "updatePosition",
      value: function updatePosition() {
        var gameObject = this.parent;

        if (this.alignX === null) {
          gameObject.x = this.anchorX;
        } else if (this.alignX !== undefined) {
          gameObject.x = this.anchorX + gameObject.displayWidth * (gameObject.originX - this.alignX);
        }

        if (this.alignY === null) {
          gameObject.y = this.anchorY;
        } else if (this.alignY !== undefined) {
          gameObject.y = this.anchorY + gameObject.displayHeight * (gameObject.originY - this.alignY);
        }

        return this;
      }
    }, {
      key: "anchorX",
      get: function get() {
        return this.viewport.x + this.viewport.width * this.percentageX + this.offsetX;
      }
    }, {
      key: "anchorY",
      get: function get() {
        return this.viewport.y + this.viewport.height * this.percentageY + this.offsetY;
      }
    }, {
      key: "anchorWidth",
      get: function get() {
        if (this.percentageWidth === undefined) {
          return undefined;
        }

        return this.viewport.width * this.percentageWidth + this.paddingWidth;
      }
    }, {
      key: "anchorHeight",
      get: function get() {
        if (this.percentageHeight === undefined) {
          return undefined;
        }

        return this.viewport.height * this.percentageHeight + this.paddingHeight;
      }
    }, {
      key: "updateViewport",
      value: function updateViewport() {
        this.viewport = GetViewport(this.scene, this.viewport ? this.viewport : true);
        var callback = this.onUpdateViewportCallback,
            scope = this.onUpdateViewportCallbackScope;

        if (callback) {
          if (scope) {
            callback.call(scope, this.viewport, this.parent, this);
          } else {
            callback(this.viewport, this.parent, this);
          }
        }
      }
    }]);

    return Anchor;
  }(ComponentBase);

  var SetAnchor = function SetAnchor(config) {
    if (config === undefined) {
      config = {};
    } // Assign default onResizeCallback if not given    


    var hasMinWidth = config.hasOwnProperty('width');
    var hasMinHeight = config.hasOwnProperty('height');
    var hasOnResizeCallback = config.hasOwnProperty('onResizeCallback');

    if ((hasMinWidth || hasMinHeight) && !hasOnResizeCallback) {
      config.onResizeCallback = function (width, height, sizer) {
        if (hasMinWidth) {
          sizer.setMinWidth(width);
        }

        if (hasMinHeight) {
          sizer.setMinHeight(height);
        }

        sizer.layout();
      };
    }

    if (this._anchor === undefined) {
      this._anchor = new Anchor(this, config);
    } else {
      this._anchor.resetFromJSON(config);
    }

    return this;
  };

  var GetValue$c = Phaser.Utils.Objects.GetValue;

  var TickTask = /*#__PURE__*/function (_ComponentBase) {
    _inherits(TickTask, _ComponentBase);

    var _super = _createSuper(TickTask);

    function TickTask(parent, config) {
      var _this;

      _classCallCheck(this, TickTask);

      _this = _super.call(this, parent, config);
      _this._isRunning = false;
      _this.isPaused = false;
      _this.tickingState = false;

      _this.setTickingMode(GetValue$c(config, 'tickingMode', 1)); // boot() later


      return _this;
    } // override


    _createClass(TickTask, [{
      key: "boot",
      value: function boot() {
        if (this.tickingMode === 2 && !this.tickingState) {
          this.startTicking();
        }
      } // override

    }, {
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        }

        this.stop();

        if (this.tickingState) {
          this.stopTicking();
        }

        _get(_getPrototypeOf(TickTask.prototype), "shutdown", this).call(this, fromScene);
      }
    }, {
      key: "setTickingMode",
      value: function setTickingMode(mode) {
        if (typeof mode === 'string') {
          mode = TICKINGMODE[mode];
        }

        this.tickingMode = mode;
      } // override

    }, {
      key: "startTicking",
      value: function startTicking() {
        this.tickingState = true;
      } // override

    }, {
      key: "stopTicking",
      value: function stopTicking() {
        this.tickingState = false;
      }
    }, {
      key: "isRunning",
      get: function get() {
        return this._isRunning;
      },
      set: function set(value) {
        if (this._isRunning === value) {
          return;
        }

        this._isRunning = value;

        if (this.tickingMode === 1 && value != this.tickingState) {
          if (value) {
            this.startTicking();
          } else {
            this.stopTicking();
          }
        }
      }
    }, {
      key: "start",
      value: function start() {
        this.isPaused = false;
        this.isRunning = true;
        return this;
      }
    }, {
      key: "pause",
      value: function pause() {
        // Only can ba paused in running state
        if (this.isRunning) {
          this.isPaused = true;
          this.isRunning = false;
        }

        return this;
      }
    }, {
      key: "resume",
      value: function resume() {
        // Only can ba resumed in paused state (paused from running state)
        if (this.isPaused) {
          this.isRunning = true;
        }

        return this;
      }
    }, {
      key: "stop",
      value: function stop() {
        this.isPaused = false;
        this.isRunning = false;
        return this;
      }
    }, {
      key: "complete",
      value: function complete() {
        this.isPaused = false;
        this.isRunning = false;
        this.emit('complete', this.parent, this);
      }
    }]);

    return TickTask;
  }(ComponentBase);

  var TICKINGMODE = {
    'no': 0,
    'lazy': 1,
    'always': 2
  };

  var SceneUpdateTickTask = /*#__PURE__*/function (_TickTask) {
    _inherits(SceneUpdateTickTask, _TickTask);

    var _super = _createSuper(SceneUpdateTickTask);

    function SceneUpdateTickTask() {
      _classCallCheck(this, SceneUpdateTickTask);

      return _super.apply(this, arguments);
    }

    _createClass(SceneUpdateTickTask, [{
      key: "startTicking",
      value: function startTicking() {
        _get(_getPrototypeOf(SceneUpdateTickTask.prototype), "startTicking", this).call(this);

        this.scene.events.on('update', this.update, this);
      }
    }, {
      key: "stopTicking",
      value: function stopTicking() {
        _get(_getPrototypeOf(SceneUpdateTickTask.prototype), "stopTicking", this).call(this);

        if (this.scene) {
          // Scene might be destoryed
          this.scene.events.off('update', this.update, this);
        }
      } // update(time, delta) {
      //     
      // }

    }]);

    return SceneUpdateTickTask;
  }(TickTask);

  var GetValue$b = Phaser.Utils.Objects.GetValue;
  var Clamp$1 = Phaser.Math.Clamp;

  var Timer = /*#__PURE__*/function () {
    function Timer(config) {
      _classCallCheck(this, Timer);

      this.resetFromJSON(config);
    }

    _createClass(Timer, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.state = GetValue$b(o, 'state', IDLE);
        this.timeScale = GetValue$b(o, 'timeScale', 1);
        this.delay = GetValue$b(o, 'delay', 0);
        this.repeat = GetValue$b(o, 'repeat', 0);
        this.repeatCounter = GetValue$b(o, 'repeatCounter', 0);
        this.duration = GetValue$b(o, 'duration', 0);
        this.nowTime = GetValue$b(o, 'nowTime', 0);
        this.justRestart = GetValue$b(o, 'justRestart', false);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          state: this.state,
          timeScale: this.timeScale,
          delay: this.delay,
          repeat: this.repeat,
          repeatCounter: this.repeatCounter,
          duration: this.duration,
          nowTime: this.nowTime,
          justRestart: this.justRestart
        };
      }
    }, {
      key: "destroy",
      value: function destroy() {}
    }, {
      key: "setTimeScale",
      value: function setTimeScale(timeScale) {
        this.timeScale = timeScale;
        return this;
      }
    }, {
      key: "setDelay",
      value: function setDelay(delay) {
        if (delay === undefined) {
          delay = 0;
        }

        this.delay = delay;
        return this;
      }
    }, {
      key: "setDuration",
      value: function setDuration(duration) {
        this.duration = duration;
        return this;
      }
    }, {
      key: "setRepeat",
      value: function setRepeat(repeat) {
        this.repeat = repeat;
        return this;
      }
    }, {
      key: "setRepeatInfinity",
      value: function setRepeatInfinity() {
        this.repeat = -1;
        return this;
      }
    }, {
      key: "start",
      value: function start() {
        this.nowTime = this.delay > 0 ? -this.delay : 0;
        this.state = this.nowTime >= 0 ? COUNTDOWN : DELAY;
        this.repeatCounter = 0;
        return this;
      }
    }, {
      key: "stop",
      value: function stop() {
        this.state = IDLE;
        return this;
      }
    }, {
      key: "update",
      value: function update(time, delta) {
        if (this.state === IDLE || this.state === DONE || delta === 0 || this.timeScale === 0) {
          return;
        }

        this.nowTime += delta * this.timeScale;
        this.state = this.nowTime >= 0 ? COUNTDOWN : DELAY;
        this.justRestart = false;

        if (this.nowTime >= this.duration) {
          if (this.repeat === -1 || this.repeatCounter < this.repeat) {
            this.repeatCounter++;
            this.justRestart = true;
            this.nowTime -= this.duration;
          } else {
            this.nowTime = this.duration;
            this.state = DONE;
          }
        }
      }
    }, {
      key: "t",
      get: function get() {
        var t;

        switch (this.state) {
          case IDLE:
          case DELAY:
            t = 0;
            break;

          case COUNTDOWN:
            t = this.nowTime / this.duration;
            break;

          case DONE:
            t = 1;
            break;
        }

        return Clamp$1(t, 0, 1);
      },
      set: function set(value) {
        value = Clamp$1(value, -1, 1);

        if (value < 0) {
          this.state = DELAY;
          this.nowTime = -this.delay * value;
        } else {
          this.state = COUNTDOWN;
          this.nowTime = this.duration * value;

          if (value === 1 && this.repeat !== 0) {
            this.repeatCounter++;
          }
        }
      }
    }, {
      key: "isIdle",
      get: function get() {
        return this.state === IDLE;
      }
    }, {
      key: "isDelay",
      get: function get() {
        return this.state === DELAY;
      }
    }, {
      key: "isCountDown",
      get: function get() {
        return this.state === COUNTDOWN;
      }
    }, {
      key: "isRunning",
      get: function get() {
        return this.state === DELAY || this.state === COUNTDOWN;
      }
    }, {
      key: "isDone",
      get: function get() {
        return this.state === DONE;
      }
    }, {
      key: "isOddIteration",
      get: function get() {
        return (this.repeatCounter & 1) === 1;
      }
    }, {
      key: "isEvenIteration",
      get: function get() {
        return (this.repeatCounter & 1) === 0;
      }
    }]);

    return Timer;
  }();

  var IDLE = 0;
  var DELAY = 1;
  var COUNTDOWN = 2;
  var DONE = -1;

  var TimerTickTask = /*#__PURE__*/function (_TickTask) {
    _inherits(TimerTickTask, _TickTask);

    var _super = _createSuper(TimerTickTask);

    function TimerTickTask(parent, config) {
      var _this;

      _classCallCheck(this, TimerTickTask);

      _this = _super.call(this, parent, config);
      _this.timer = new Timer(); // boot() later 

      return _this;
    } // override


    _createClass(TimerTickTask, [{
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        }

        _get(_getPrototypeOf(TimerTickTask.prototype), "shutdown", this).call(this, fromScene);

        this.timer.destroy();
        this.timer = undefined;
      }
    }, {
      key: "start",
      value: function start() {
        this.timer.start();

        _get(_getPrototypeOf(TimerTickTask.prototype), "start", this).call(this);

        return this;
      }
    }, {
      key: "stop",
      value: function stop() {
        this.timer.stop();

        _get(_getPrototypeOf(TimerTickTask.prototype), "stop", this).call(this);

        return this;
      }
    }, {
      key: "complete",
      value: function complete() {
        this.timer.stop();

        _get(_getPrototypeOf(TimerTickTask.prototype), "complete", this).call(this);

        return this;
      }
    }]);

    return TimerTickTask;
  }(SceneUpdateTickTask);

  var GetValue$a = Phaser.Utils.Objects.GetValue;
  var GetAdvancedValue$3 = Phaser.Utils.Objects.GetAdvancedValue;
  var GetEaseFunction = Phaser.Tweens.Builders.GetEaseFunction;

  var EaseValueTaskBase = /*#__PURE__*/function (_TickTask) {
    _inherits(EaseValueTaskBase, _TickTask);

    var _super = _createSuper(EaseValueTaskBase);

    function EaseValueTaskBase() {
      _classCallCheck(this, EaseValueTaskBase);

      return _super.apply(this, arguments);
    }

    _createClass(EaseValueTaskBase, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.timer.resetFromJSON(GetValue$a(o, 'timer'));
        this.setEnable(GetValue$a(o, 'enable', true));
        this.setDelay(GetAdvancedValue$3(o, 'delay', 0));
        this.setDuration(GetAdvancedValue$3(o, 'duration', 1000));
        this.setEase(GetValue$a(o, 'ease', 'Linear'));
        this.setRepeat(GetValue$a(o, 'repeat', 0));
        return this;
      }
    }, {
      key: "setEnable",
      value: function setEnable(e) {
        if (e == undefined) {
          e = true;
        }

        this.enable = e;
        return this;
      }
    }, {
      key: "setDelay",
      value: function setDelay(time) {
        this.delay = time;
        return this;
      }
    }, {
      key: "setDuration",
      value: function setDuration(time) {
        this.duration = time;
        return this;
      }
    }, {
      key: "setEase",
      value: function setEase(ease) {
        if (ease === undefined) {
          ease = 'Linear';
        }

        this.ease = ease;
        this.easeFn = GetEaseFunction(ease);
        return this;
      }
    }, {
      key: "setRepeat",
      value: function setRepeat(repeat) {
        this.repeat = repeat;
        return this;
      } // Override

    }, {
      key: "start",
      value: function start() {
        // Ignore start if timer is running, i.e. in DELAY, o RUN state
        if (this.timer.isRunning) {
          return this;
        }

        _get(_getPrototypeOf(EaseValueTaskBase.prototype), "start", this).call(this);

        return this;
      }
    }, {
      key: "restart",
      value: function restart() {
        this.timer.stop();
        this.start.apply(this, arguments);
        return this;
      }
    }, {
      key: "update",
      value: function update(time, delta) {
        if (!this.isRunning || !this.enable) {
          return this;
        }

        var gameObject = this.parent;

        if (!gameObject.active) {
          return this;
        }

        var timer = this.timer;
        timer.update(time, delta); // isDelay, isCountDown, isDone

        if (!timer.isDelay) {
          this.updateGameObject(gameObject, timer);
        }

        this.emit('update', gameObject, this);

        if (timer.isDone) {
          this.complete();
        }

        return this;
      } // Override

    }, {
      key: "updateGameObject",
      value: function updateGameObject(gameObject, timer) {}
    }]);

    return EaseValueTaskBase;
  }(TimerTickTask);

  var GetValue$9 = Phaser.Utils.Objects.GetValue;
  var GetAdvancedValue$2 = Phaser.Utils.Objects.GetAdvancedValue;
  var Linear$5 = Phaser.Math.Linear;

  var Scale = /*#__PURE__*/function (_EaseValueTaskBase) {
    _inherits(Scale, _EaseValueTaskBase);

    var _super = _createSuper(Scale);

    function Scale(gameObject, config) {
      var _this;

      _classCallCheck(this, Scale);

      _this = _super.call(this, gameObject, config); // this.parent = gameObject;
      // this.timer

      _this.scaleStart = {};
      _this.scaleEnd = {};

      _this.resetFromJSON(config);

      _this.boot();

      return _this;
    }

    _createClass(Scale, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        _get(_getPrototypeOf(Scale.prototype), "resetFromJSON", this).call(this, o);

        this.setMode(GetValue$9(o, 'mode', 0));
        this.setScaleRange(GetAdvancedValue$2(o, 'start', undefined), GetAdvancedValue$2(o, 'end', 0));
        return this;
      }
    }, {
      key: "setMode",
      value: function setMode(m) {
        if (typeof m === 'string') {
          m = MODE$2[m];
        }

        this.mode = m;
        return this;
      }
    }, {
      key: "setScaleRange",
      value: function setScaleRange(start, end) {
        if (typeof start === 'number') {
          this.startX = start;
          this.startY = start;
        } else {
          this.startX = GetAdvancedValue$2(start, 'x', this.parent.scaleX);
          this.startY = GetAdvancedValue$2(start, 'y', this.parent.scaleY);
        }

        if (typeof end === 'number') {
          this.endX = end;
          this.endY = end;
        } else {
          this.endX = GetAdvancedValue$2(end, 'x', undefined);
          this.endY = GetAdvancedValue$2(end, 'y', undefined);
        }

        this.hasScaleX = this.startX !== undefined && this.endX !== undefined;
        this.hasScaleY = this.startY !== undefined && this.endY !== undefined;
        return this;
      }
    }, {
      key: "start",
      value: function start() {
        if (this.timer.isRunning) {
          return this;
        }

        var gameObject = this.parent;

        if (this.hasScaleX) {
          gameObject.scaleX = this.startX;
        }

        if (this.hasScaleY) {
          gameObject.scaleY = this.startY;
        }

        this.timer.setDelay(this.delay).setDuration(this.duration).setRepeat(this.mode === 2 ? -1 : 0);

        _get(_getPrototypeOf(Scale.prototype), "start", this).call(this);

        return this;
      }
    }, {
      key: "updateGameObject",
      value: function updateGameObject(gameObject, timer) {
        var t = timer.t;

        if (timer.isOddIteration) {
          // Yoyo
          t = 1 - t;
        }

        t = this.easeFn(t);

        if (this.hasScaleX) {
          gameObject.scaleX = Linear$5(this.startX, this.endX, t);
        }

        if (this.hasScaleY) {
          gameObject.scaleY = Linear$5(this.startY, this.endY, t);
        }
      }
    }, {
      key: "complete",
      value: function complete() {
        _get(_getPrototypeOf(Scale.prototype), "complete", this).call(this);

        if (this.mode === 1) {
          this.parent.destroy(); // Will also destroy this behavior
        }

        return this;
      }
    }]);

    return Scale;
  }(EaseValueTaskBase);

  var MODE$2 = {
    stop: 0,
    destroy: 1,
    yoyo: 2
  };

  var PopUp = function PopUp(gameObject, duration, orientation, ease, scale) {
    var start;

    switch (orientation) {
      case 0:
      case 'x':
        start = {
          x: 0
        };
        break;

      case 1:
      case 'y':
        start = {
          y: 0
        };
        break;

      default:
        start = 0;
        break;
    }

    var config = {
      mode: 0,
      start: start,
      end: 1,
      duration: duration,
      ease: ease === undefined ? 'Cubic' : ease
    };

    if (scale === undefined) {
      scale = new Scale(gameObject, config);
    } else {
      scale.resetFromJSON(config);
    }

    scale.restart();
    return scale;
  };

  var ScaleDownDestroy = function ScaleDownDestroy(gameObject, duration, orientation, ease, destroyMode, scale) {
    if (destroyMode instanceof Scale) {
      scale = destroyMode;
      destroyMode = undefined;
    }

    if (destroyMode === undefined) {
      destroyMode = true;
    }

    var config = {};
    config.mode = destroyMode ? 1 : 0;

    switch (orientation) {
      case 0:
      case 'x':
        config.end = {
          x: 0
        };
        break;

      case 1:
      case 'y':
        config.end = {
          y: 0
        };
        break;

      default:
        config.end = 0;
        break;
    }

    config.duration = duration;
    config.ease = ease === undefined ? 'Linear' : ease;

    if (scale === undefined) {
      scale = new Scale(gameObject, config);
    } else {
      scale.resetFromJSON(config);
    }

    scale.restart();
    return scale;
  };

  var WaitEvent = function WaitEvent(eventEmitter, eventName) {
    return new Promise(function (resolve, reject) {
      eventEmitter.once(eventName, function () {
        resolve();
      });
    });
  };

  var WaitComplete = function WaitComplete(eventEmitter) {
    return WaitEvent(eventEmitter, 'complete');
  };

  var IsPlainObject$6 = Phaser.Utils.Objects.IsPlainObject;

  var OnInitScale = function OnInitScale(gameObject, scale) {
    // Route 'complete' of scale to gameObject
    scale.completeEventName = undefined;
    scale.on('complete', function () {
      if (scale.completeEventName) {
        gameObject.emit(scale.completeEventName, gameObject);
        scale.completeEventName = undefined;
      }
    }); // Update local state

    scale.on('update', function () {
      var parent = gameObject.getParentSizer();

      if (parent) {
        parent.resetChildPositionState(gameObject);
      }
    });
  };

  var ScaleMethods = {
    popUp: function popUp(duration, orientation, ease) {
      if (IsPlainObject$6(duration)) {
        var config = duration;
        duration = config.duration;
        orientation = config.orientation;
        ease = config.ease;
      }

      var isInit = this._scale === undefined;
      this._scale = PopUp(this, duration, orientation, ease, this._scale);

      if (isInit) {
        OnInitScale(this, this._scale);
      }

      this._scale.completeEventName = 'popup.complete';
      return this;
    },
    popUpPromise: function popUpPromise(duration, orientation, ease) {
      this.popUp(duration, orientation, ease);
      return WaitComplete(this._scale);
    },
    scaleDownDestroy: function scaleDownDestroy(duration, orientation, ease, destroyMode) {
      if (IsPlainObject$6(duration)) {
        var config = duration;
        duration = config.duration;
        orientation = config.orientation;
        ease = config.ease;
        destroyMode = config.destroy;
      }

      var isInit = this._scale === undefined;
      this._scale = ScaleDownDestroy(this, duration, orientation, ease, destroyMode, this._scale);

      if (isInit) {
        OnInitScale(this, this._scale);
      }

      this._scale.completeEventName = 'scaledown.complete';
      return this;
    },
    scaleDownDestroyPromise: function scaleDownDestroyPromise(duration, orientation, ease, destroyMode) {
      this.scaleDownDestroy(duration, orientation, ease, destroyMode);
      return WaitComplete(this._scale);
    },
    scaleDown: function scaleDown(duration, orientation, ease) {
      this.scaleDownDestroy(duration, orientation, ease, false);
      return this;
    },
    scaleDownPromise: function scaleDownPromise(duration, orientation, ease) {
      this.scaleDown(duration, orientation, ease);
      return WaitComplete(this._scale);
    }
  };

  var GetValue$8 = Phaser.Utils.Objects.GetValue;
  var GetAdvancedValue$1 = Phaser.Utils.Objects.GetAdvancedValue;
  var Linear$4 = Phaser.Math.Linear;

  var Fade = /*#__PURE__*/function (_EaseValueTaskBase) {
    _inherits(Fade, _EaseValueTaskBase);

    var _super = _createSuper(Fade);

    function Fade(gameObject, config) {
      var _this;

      _classCallCheck(this, Fade);

      _this = _super.call(this, gameObject, config); // this.parent = gameObject;
      // this.timer

      _this.resetFromJSON(config);

      _this.boot();

      return _this;
    }

    _createClass(Fade, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        _get(_getPrototypeOf(Fade.prototype), "resetFromJSON", this).call(this, o);

        this.setMode(GetValue$8(o, 'mode', 0));
        this.setAlphaRange(GetAdvancedValue$1(o, 'start', this.parent.alpha), GetAdvancedValue$1(o, 'end', 0));
        return this;
      }
    }, {
      key: "setMode",
      value: function setMode(m) {
        if (typeof m === 'string') {
          m = MODE$1[m];
        }

        this.mode = m;
        return this;
      }
    }, {
      key: "setAlphaRange",
      value: function setAlphaRange(start, end) {
        this.alphaStart = start;
        this.alphaEnd = end;
        return this;
      }
    }, {
      key: "start",
      value: function start() {
        if (this.timer.isRunning) {
          return this;
        }

        var gameObject = this.parent;
        gameObject.setAlpha(this.alphaStart);
        this.timer.setDelay(this.delay).setDuration(this.duration).setRepeat(this.mode === 2 ? -1 : 0);

        _get(_getPrototypeOf(Fade.prototype), "start", this).call(this);

        return this;
      }
    }, {
      key: "updateGameObject",
      value: function updateGameObject(gameObject, timer) {
        var t = timer.t;

        if (timer.isOddIteration) {
          // Yoyo
          t = 1 - t;
        }

        gameObject.alpha = Linear$4(this.alphaStart, this.alphaEnd, t);
      }
    }, {
      key: "complete",
      value: function complete() {
        _get(_getPrototypeOf(Fade.prototype), "complete", this).call(this);

        if (this.mode === 1) {
          this.parent.destroy(); // Will also destroy this behavior
        }

        return this;
      }
    }]);

    return Fade;
  }(EaseValueTaskBase);

  var MODE$1 = {
    stop: 0,
    destroy: 1,
    yoyo: 2
  };

  var IsPlainObject$5 = Phaser.Utils.Objects.IsPlainObject;

  var FadeIn = function FadeIn(gameObject, duration, alpha, fade) {
    var startAlpha, endAlpha;

    if (IsPlainObject$5(alpha)) {
      startAlpha = alpha.start;
      endAlpha = alpha.end;
    } else {
      endAlpha = alpha;
    }

    if (startAlpha === undefined) {
      startAlpha = 0;
    }

    if (endAlpha === undefined) {
      endAlpha = 1;
    }

    var config = {
      mode: 0,
      start: startAlpha,
      end: endAlpha,
      duration: duration
    };

    if (fade === undefined) {
      fade = new Fade(gameObject, config);
    } else {
      fade.resetFromJSON(config);
    }

    fade.restart();
    return fade;
  };

  var FadeOutDestroy = function FadeOutDestroy(gameObject, duration, destroyMode, fade) {
    if (destroyMode instanceof Fade) {
      fade = destroyMode;
      destroyMode = undefined;
    }

    if (destroyMode === undefined) {
      destroyMode = true;
    }

    var config = {
      mode: destroyMode ? 1 : 0,
      end: 0,
      duration: duration
    };

    if (fade === undefined) {
      fade = new Fade(gameObject, config);
    } else {
      fade.resetFromJSON(config);
    }

    fade.restart();
    return fade;
  };

  var IsPlainObject$4 = Phaser.Utils.Objects.IsPlainObject;

  var OnInitFade = function OnInitFade(gameObject, fade) {
    // Route 'complete' of fade to gameObject
    fade.completeEventName = undefined;
    fade.on('complete', function () {
      if (fade.completeEventName) {
        gameObject.emit(fade.completeEventName, gameObject);
        fade.completeEventName = undefined;
      }
    }); // Update local state

    fade.on('update', function () {
      var parent = gameObject.getParentSizer();

      if (parent) {
        parent.resetChildAlphaState(gameObject);
      }
    });
  };

  var FadeMethods = {
    fadeIn: function fadeIn(duration, alpha) {
      if (IsPlainObject$4(duration)) {
        var config = duration;
        duration = config.duration;
      }

      var isInit = this._fade === undefined;
      this._fade = FadeIn(this, duration, alpha, this._fade);

      if (isInit) {
        OnInitFade(this, this._fade);
      }

      this._fade.completeEventName = 'fadein.complete';
      return this;
    },
    fadeInPromoise: function fadeInPromoise(duration, alpha) {
      this.fadeIn(duration, alpha);
      return WaitComplete(this._fade);
    },
    fadeOutDestroy: function fadeOutDestroy(duration, destroyMode) {
      if (IsPlainObject$4(duration)) {
        var config = duration;
        duration = config.duration;
        destroyMode = config.destroy;
      }

      var isInit = this._fade === undefined;
      this._fade = FadeOutDestroy(this, duration, destroyMode, this._fade);

      if (isInit) {
        OnInitFade(this, this._fade);
      }

      this._fade.completeEventName = 'fadeout.complete';
      return this;
    },
    fadeOutDestroyPromise: function fadeOutDestroyPromise(duration, destroyMode) {
      this.fadeOutDestroy(duration, destroyMode);
      return WaitComplete(this._fade);
    },
    fadeOut: function fadeOut(duration) {
      this.fadeOutDestroy(duration, false);
      return this;
    },
    fadeOutPromise: function fadeOutPromise(duration) {
      this.fadeOut(duration);
      return WaitComplete(this._fade);
    }
  };

  var GetValue$7 = Phaser.Utils.Objects.GetValue;
  var GetAdvancedValue = Phaser.Utils.Objects.GetAdvancedValue;
  var Linear$3 = Phaser.Math.Linear;

  var EaseMove = /*#__PURE__*/function (_EaseValueTaskBase) {
    _inherits(EaseMove, _EaseValueTaskBase);

    var _super = _createSuper(EaseMove);

    function EaseMove(gameObject, config) {
      var _this;

      _classCallCheck(this, EaseMove);

      _this = _super.call(this, gameObject, config); // this.parent = gameObject;
      // this.timer

      _this.resetFromJSON(config);

      _this.boot();

      return _this;
    }

    _createClass(EaseMove, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        _get(_getPrototypeOf(EaseMove.prototype), "resetFromJSON", this).call(this, o);

        this.setMode(GetValue$7(o, 'mode', 0));

        if (o && (o.hasOwnProperty('x') || o.hasOwnProperty('y'))) {
          var endX = GetAdvancedValue(o, 'x', undefined);
          var endY = GetAdvancedValue(o, 'y', undefined);
          this.setTargetPosition(endX, endY);
        } else {
          this.setTargetPosition(o);
        }

        return this;
      }
    }, {
      key: "setMode",
      value: function setMode(m) {
        if (typeof m === 'string') {
          m = MODE[m];
        }

        this.mode = m;
        return this;
      }
    }, {
      key: "setTargetPosition",
      value: function setTargetPosition(x, y) {
        if (typeof x === 'number' || typeof y === 'number') {
          // endX, endY
          // x,y : a number, or undefined
          this.startX = this.parent.x;
          this.startY = this.parent.y;
          this.endX = x;
          this.endY = y;
        } else {
          var config = x;
          this.startX = GetAdvancedValue(config, 'startX', undefined);
          this.startY = GetAdvancedValue(config, 'startY', undefined);
          this.endX = GetAdvancedValue(config, 'endX', undefined);
          this.endY = GetAdvancedValue(config, 'endY', undefined);
        }

        this.hasMoveX = this.startX !== undefined && this.endX !== undefined;
        this.hasMoveY = this.startY !== undefined && this.endY !== undefined;
        return this;
      }
    }, {
      key: "start",
      value: function start() {
        if (this.timer.isRunning) {
          return this;
        }

        var gameObject = this.parent;

        if (this.hasMoveX) {
          gameObject.x = this.startX;
        }

        if (this.hasMoveY) {
          gameObject.y = this.startY;
        }

        this.timer.setDelay(this.delay).setDuration(this.duration).setRepeat(this.mode === 2 ? -1 : 0);

        _get(_getPrototypeOf(EaseMove.prototype), "start", this).call(this);

        return this;
      }
    }, {
      key: "updateGameObject",
      value: function updateGameObject(gameObject, timer) {
        var t = timer.t;

        if (timer.isOddIteration) {
          // Yoyo
          t = 1 - t;
        }

        t = this.easeFn(t);

        if (this.hasMoveX) {
          gameObject.x = Linear$3(this.startX, this.endX, t);
        }

        if (this.hasMoveY) {
          gameObject.y = Linear$3(this.startY, this.endY, t);
        }
      }
    }, {
      key: "complete",
      value: function complete() {
        _get(_getPrototypeOf(EaseMove.prototype), "complete", this).call(this);

        if (this.mode === 1) {
          this.parent.destroy(); // Will also destroy this behavior
        }

        return this;
      }
    }]);

    return EaseMove;
  }(EaseValueTaskBase);

  var MODE = {
    stop: 0,
    destroy: 1,
    yoyo: 2
  };

  var ParseValue = function ParseValue(propertyValue, startValue) {
    // propertyValue : number or string
    if (typeof propertyValue === 'number') {
      return propertyValue;
    } else {
      var op = propertyValue[0];
      var num = parseFloat(propertyValue.substr(2));

      switch (op) {
        case '+':
          return startValue + num;

        case '-':
          return startValue - num;

        case '*':
          return startValue * num;

        case '/':
          return startValue / num;
      }
    }
  };

  var EaseMoveTo = function EaseMoveTo(gameObject, duration, endX, endY, ease, destroyMode, easeMove) {
    if (destroyMode instanceof EaseMove) {
      easeMove = destroyMode;
      destroyMode = undefined;
    }

    if (destroyMode === undefined) {
      destroyMode = false;
    }

    var config = {};
    config.mode = destroyMode ? 1 : 0;

    if (endX !== undefined) {
      config.startX = gameObject.x;
      config.endX = ParseValue(endX, gameObject.x);
    }

    if (endY !== undefined) {
      config.startY = gameObject.y;
      config.endY = ParseValue(endY, gameObject.y);
    }

    config.duration = duration;
    config.ease = ease === undefined ? 'Linear' : ease;

    if (easeMove === undefined) {
      easeMove = new EaseMove(gameObject, config);
    } else {
      easeMove.resetFromJSON(config);
    }

    easeMove.restart();
    return easeMove;
  };

  var EaseMoveFrom = function EaseMoveFrom(gameObject, duration, startX, startY, ease, destroyMode, easeMove) {
    if (destroyMode instanceof EaseMove) {
      easeMove = destroyMode;
      destroyMode = undefined;
    }

    if (destroyMode === undefined) {
      destroyMode = false;
    }

    var config = {};
    config.mode = destroyMode ? 1 : 0;

    if (startX !== undefined) {
      config.startX = ParseValue(startX, gameObject.x);
      config.endX = gameObject.x;
    }

    if (startY !== undefined) {
      config.startY = ParseValue(startY, gameObject.y);
      config.endY = gameObject.y;
    }

    config.duration = duration;
    config.ease = ease === undefined ? 'Linear' : ease;

    if (easeMove === undefined) {
      easeMove = new EaseMove(gameObject, config);
    } else {
      easeMove.resetFromJSON(config);
    }

    easeMove.restart();
    return easeMove;
  };

  var IsPlainObject$3 = Phaser.Utils.Objects.IsPlainObject;
  var DistanceBetween = Phaser.Math.Distance.Between;

  var OnInitEaseMove = function OnInitEaseMove(gameObject, easeMove) {
    // Route 'complete' of easeMove to gameObject
    easeMove.completeEventName = undefined;
    easeMove.on('complete', function () {
      if (easeMove.completeEventName) {
        gameObject.emit(easeMove.completeEventName, gameObject);
        easeMove.completeEventName = undefined;
      }
    }); // Update local state

    easeMove.on('update', function () {
      var parent = gameObject.getParentSizer();

      if (parent) {
        parent.resetChildPositionState(gameObject);
      }
    });
  };

  var EaseMoveMethods = {
    moveFrom: function moveFrom(duration, x, y, ease, destroyMode) {
      if (IsPlainObject$3(duration)) {
        var config = duration;
        x = config.x;
        y = config.y;

        if (config.hasOwnProperty('speed')) {
          duration = DistanceBetween(x, y, this.x, this.y) * 1000 / config.speed;
        } else {
          duration = config.duration;
        }

        ease = config.ease;
      }

      var isInit = this._easeMove === undefined;
      this._easeMove = EaseMoveFrom(this, duration, x, y, ease, destroyMode, this._easeMove);

      if (isInit) {
        OnInitEaseMove(this, this._easeMove);
      }

      this._easeMove.completeEventName = 'movefrom.complete';
      return this;
    },
    moveFromPromise: function moveFromPromise(duration, x, y, ease, destroyMode) {
      this.moveFrom(duration, x, y, ease, destroyMode);
      return WaitComplete(this._easeMove);
    },
    moveFromDestroy: function moveFromDestroy(duration, x, y, ease) {
      this.moveFrom(duration, x, y, ease, true);
      return this;
    },
    moveFromDestroyPromise: function moveFromDestroyPromise(duration, x, y, ease) {
      this.moveFromDestroy(duration, x, y, ease);
      return WaitComplete(this._easeMove);
    },
    moveTo: function moveTo(duration, x, y, ease, destroyMode) {
      if (IsPlainObject$3(duration)) {
        var config = duration;
        x = config.x;
        y = config.y;

        if (config.hasOwnProperty('speed')) {
          duration = DistanceBetween(x, y, this.x, this.y) * 1000 / config.speed;
        } else {
          duration = config.duration;
        }

        ease = config.ease;
      }

      var isInit = this._easeMove === undefined;
      this._easeMove = EaseMoveTo(this, duration, x, y, ease, destroyMode, this._easeMove);

      if (isInit) {
        OnInitEaseMove(this, this._easeMove);
      }

      this._easeMove.completeEventName = 'moveto.complete';
      return this;
    },
    moveToPromise: function moveToPromise(duration, x, y, ease, destroyMode) {
      this.moveTo(duration, x, y, ease, destroyMode);
      return WaitComplete(this._easeMove);
    },
    moveToDestroy: function moveToDestroy(duration, x, y, ease) {
      this.moveTo(duration, x, y, ease, true);
      return this;
    },
    moveToDestroyPromise: function moveToDestroyPromise(duration, x, y, ease) {
      this.moveToDestroy(duration, x, y, ease, true);
      return WaitComplete(this._easeMove);
    }
  };

  var Show = function Show(gameObject) {
    _hide(gameObject, false);
  };

  var Hide = function Hide(gameObject) {
    _hide(gameObject, true);
  };

  var IsShown = function IsShown(gameObject) {
    if (!gameObject) {
      return false;
    }

    var config = GetSizerConfig(gameObject);
    return !config.hidden;
  };

  var _hide = function _hide(gameObject, hidden) {
    if (!gameObject) {
      return;
    }

    var config = GetSizerConfig(gameObject);
    config.hidden = hidden;
    gameObject.rexContainer.parent.setChildVisible(gameObject, !hidden);
  };

  var HideMethods = {
    show: function show(gameObject) {
      if (gameObject === undefined) {
        gameObject = this;
      }

      Show(gameObject);
      return this;
    },
    hide: function hide(gameObject) {
      if (gameObject === undefined) {
        gameObject = this;
      }

      Hide(gameObject);
      return this;
    },
    isShow: function isShow(gameObject) {
      if (gameObject === undefined) {
        gameObject = this;
      }

      return IsShown(gameObject);
    }
  };

  var IsPointInBounds = function IsPointInBounds(gameObject, x, y, preTest, postTest) {
    // Can't get bounds
    if (!gameObject || !gameObject.getBounds) {
      return false;
    }

    if (preTest && !preTest(gameObject, x, y)) {
      return false;
    }

    globRect = gameObject.getBounds(globRect);

    if (!globRect.contains(x, y)) {
      return false;
    }

    if (postTest && !postTest(gameObject, x, y)) {
      return false;
    }

    return true;
  };

  var globRect = undefined;

  var IsPointerInBounds = function IsPointerInBounds(gameObject, pointer, preTest, postTest) {
    if (pointer) {
      return IsPointInBounds(gameObject, pointer.x, pointer.y, preTest, postTest);
    } else {
      var inputManager = gameObject.scene.input.manager;
      var pointersTotal = inputManager.pointersTotal;
      var pointers = inputManager.pointers;

      for (var i = 0; i < pointersTotal; i++) {
        pointer = pointers[i];

        if (IsPointInBounds(gameObject, pointer.x, pointer.y, preTest, postTest)) {
          return true;
        }
      }

      return false;
    }
  };

  var IsInTouching = function IsInTouching(pointer, gameObject) {
    if (gameObject === undefined) {
      gameObject = this;
    }

    return IsPointerInBounds(gameObject, pointer);
  };

  var IsFunction = function IsFunction(obj) {
    return obj && typeof obj === 'function';
  };

  var ContainsPoint = function ContainsPoint(gameObject, x, y, preTest, postTest) {
    return IsPointInBounds(gameObject, x, y, GetPreTestCallback(preTest), GetPostTestCallback(postTest));
  };

  var IsNotHiddenSizer = function IsNotHiddenSizer(gameObject) {
    var isHiddenSizer = gameObject.rexSizer && gameObject.rexSizer.hidden;
    return !isHiddenSizer;
  };

  var GetPreTestCallback = function GetPreTestCallback(preTest) {
    if (!preTest) {
      return IsNotHiddenSizer;
    }

    return function (gameObject, x, y) {
      if (!IsNotHiddenSizer(gameObject)) {
        return false;
      }

      preTest(gameObject, x, y);
      return true;
    };
  };

  var GetPostTestCallback = function GetPostTestCallback(postTest) {
    return postTest;
  };

  var PointToChild = function PointToChild(x, y, preTest, postTest, children) {
    if (!IsFunction(preTest)) {
      children = preTest;
      preTest = undefined;
      postTest = undefined;
    }

    if (children === undefined) {
      if (this.sizerChildren) {
        children = this.sizerChildren;
      } else {
        children = this.children;
      }
    }

    if (IsArray(children)) {
      var child;

      for (var i = 0, cnt = children.length; i < cnt; i++) {
        child = children[i];

        if (ContainsPoint(child, x, y, preTest, postTest)) {
          return child;
        }
      }
    } else {
      var child;

      for (var key in children) {
        child = children[key];

        if (ContainsPoint(child, x, y, preTest, postTest)) {
          return child;
        }
      }
    }

    return null;
  };

  var GetParentSizerMethods = {
    getParentSizer: function getParentSizer(gameObject) {
      return this.getParent(gameObject);
    },
    getTopmostSizer: function getTopmostSizer(gameObject) {
      return this.getTopmostParent(gameObject);
    }
  };

  var ResizeGameObject = function ResizeGameObject(gameObject, newWidth, newHeight) {
    if (!gameObject || newWidth === undefined && newHeight === undefined) {
      return;
    }

    if (gameObject.resize) {
      // Has `resize` method
      if (newWidth === undefined) {
        newWidth = gameObject.width;
      }

      if (newHeight === undefined) {
        newHeight = gameObject.height;
      }

      gameObject.resize(newWidth, newHeight);
    } else {
      // Set display width/height
      if (newWidth !== undefined) {
        gameObject.displayWidth = newWidth;
      }

      if (newHeight !== undefined) {
        gameObject.displayHeight = newHeight;
      }
    }
  };

  var CopyState = function CopyState(gamObject, out) {
    if (out === undefined) {
      out = {};
    } else if (out === true) {
      out = GlobState;
    }

    out.x = gamObject.x;
    out.y = gamObject.y;
    out.scaleX = gamObject.scaleX;
    out.scaleY = gamObject.scaleY;
    out.width = gamObject.width;
    out.height = gamObject.height;
    out.displayWidth = gamObject.displayWidth;
    out.displayHeight = gamObject.displayHeight;
    return out;
  };

  var GlobState = {};

  var PreLayoutChild = function PreLayoutChild(child) {
    if (this.sizerEventsEnable) {
      CopyState(child, this.getChildPrevState(child));
      this.layoutedChildren.push(child);
    }
  };

  var LayoutChild = function LayoutChild(child, x, y, width, height, align, offsetX, offsetY) {
    AlignIn(child, x, y, width, height, align);

    if (offsetX !== undefined) {
      child.x += offsetX;
    }

    if (offsetY !== undefined) {
      child.y += offsetY;
    }

    this.resetChildPositionState(child);

    if (this.sizerEventsEnable) {
      child.emit('sizer.postlayout', child, this);
    }
  };

  var ALIGN_CENTER$1 = Phaser.Display.Align.CENTER;

  var LayoutBackgrounds = function LayoutBackgrounds() {
    if (this.backgroundChildren === undefined) {
      return;
    }

    var backgrounds = this.backgroundChildren;
    var startX = this.left,
        startY = this.top;
    var parentWidth = this.width,
        parentHeight = this.height;
    var child, childConfig, padding, x, y, width, height;

    for (var i = 0, cnt = backgrounds.length; i < cnt; i++) {
      child = backgrounds[i];
      childConfig = child.rexSizer;

      if (childConfig.hidden) {
        continue;
      }

      padding = childConfig.padding;
      PreLayoutChild.call(this, child);
      x = startX + padding.left;
      y = startY + padding.top;
      width = parentWidth - padding.left - padding.right;
      height = parentHeight - padding.top - padding.bottom;
      ResizeGameObject(child, width, height);
      LayoutChild.call(this, child, x, y, width, height, ALIGN_CENTER$1);
    }
  };

  var SetDraggable = function SetDraggable(senser, draggable) {
    var senserType = _typeof(senser);

    if (senserType === 'string') {
      senser = this.getElement(senser);
    } else if (senser === undefined || senserType != 'object') {
      draggable = senser;
      senser = this;
    }

    if (draggable === undefined) {
      draggable = true;
    }

    if (senser.input && senser.input.hasOwnProperty('draggable')) {
      // Draggable is already registered
      senser.input.draggable = draggable;
    } else if (draggable) {
      // Register draggable
      senser.setInteractive();
      senser.scene.input.setDraggable(senser);
      senser.on('drag', function (pointer, dragX, dragY) {
        var topmostParent = this.getTopmostSizer();
        topmostParent.x += dragX - senser.x;
        topmostParent.y += dragY - senser.y;
      }, this);
    } else ;

    return this;
  };

  var GetValue$6 = Phaser.Utils.Objects.GetValue;

  var Button = /*#__PURE__*/function (_ComponentBase) {
    _inherits(Button, _ComponentBase);

    var _super = _createSuper(Button);

    function Button(gameObject, config) {
      var _this;

      _classCallCheck(this, Button);

      _this = _super.call(this, gameObject, config); // this.parent = gameObject;

      _this._enable = undefined;
      gameObject.setInteractive(GetValue$6(config, "inputConfig", undefined));

      _this.resetFromJSON(config);

      _this.boot();

      return _this;
    }

    _createClass(Button, [{
      key: "resetFromJSON",
      value: function resetFromJSON(o) {
        this.pointer = undefined;
        this.lastClickTime = undefined;
        this.setEnable(GetValue$6(o, "enable", true));
        this.setMode(GetValue$6(o, "mode", 1));
        this.setClickInterval(GetValue$6(o, "clickInterval", 100));
        this.setDragThreshold(GetValue$6(o, 'threshold', undefined));
        return this;
      }
    }, {
      key: "boot",
      value: function boot() {
        var gameObject = this.parent;
        gameObject.on('pointerdown', this.onPress, this);
        gameObject.on('pointerup', this.onRelease, this);
        gameObject.on('pointerout', this.onPointOut, this);
        gameObject.on('pointermove', this.onMove, this);
      }
    }, {
      key: "shutdown",
      value: function shutdown(fromScene) {
        // Already shutdown
        if (this.isShutdown) {
          return;
        } // GameObject events will be removed when this gameObject destroyed 
        // this.parent.on('pointerdown', this.onPress, this);
        // this.parent.on('pointerup', this.onRelease, this);
        // this.parent.on('pointerout', this.onPointOut, this);
        // this.parent.on('pointermove', this.onMove, this);


        this.pointer = null;

        _get(_getPrototypeOf(Button.prototype), "shutdown", this).call(this, fromScene);
      }
    }, {
      key: "enable",
      get: function get() {
        return this._enable;
      },
      set: function set(e) {
        if (this._enable === e) {
          return;
        }

        if (!e) {
          this.cancel();
        }

        this._enable = e;
        var eventName = e ? 'enable' : 'disable';
        this.emit(eventName, this, this.parent);
      }
    }, {
      key: "setEnable",
      value: function setEnable(e) {
        if (e === undefined) {
          e = true;
        }

        this.enable = e;
        return this;
      }
    }, {
      key: "toggleEnable",
      value: function toggleEnable() {
        this.setEnable(!this.enable);
        return this;
      }
    }, {
      key: "setMode",
      value: function setMode(m) {
        if (typeof m === 'string') {
          m = CLICKMODE[m];
        }

        this.mode = m;
        return this;
      }
    }, {
      key: "setClickInterval",
      value: function setClickInterval(interval) {
        this.clickInterval = interval; // ms

        return this;
      }
    }, {
      key: "setDragThreshold",
      value: function setDragThreshold(distance) {
        this.dragThreshold = distance;
        return this;
      } // internal

    }, {
      key: "onPress",
      value: function onPress(pointer, localX, localY, event) {
        if (this.pointer !== undefined) {
          return;
        }

        this.pointer = pointer;

        if (this.mode === 0) {
          this.click(pointer.downTime, pointer, event);
        }
      }
    }, {
      key: "onRelease",
      value: function onRelease(pointer, localX, localY, event) {
        if (this.pointer !== pointer) {
          return;
        }

        if (this.mode === 1) {
          this.click(pointer.upTime, pointer, event);
        }

        this.pointer = undefined;
      }
    }, {
      key: "onPointOut",
      value: function onPointOut(pointer, event) {
        if (this.pointer !== pointer) {
          return;
        }

        this.cancel();
      }
    }, {
      key: "onMove",
      value: function onMove(pointer, localX, localY, event) {
        if (this.pointer !== pointer) {
          return;
        }

        if (this.dragThreshold === undefined) {
          return;
        }

        if (pointer.getDistance() >= this.dragThreshold) {
          this.cancel();
        }
      }
    }, {
      key: "click",
      value: function click(nowTime, pointer, event) {
        if (!this.enable) {
          return this;
        }

        if (nowTime === undefined) {
          // fires 'click' event manually
          this.emit('click', this, this.parent, pointer, event);
          return this;
        }

        this.pointer = undefined;
        var lastClickTime = this.lastClickTime;

        if (lastClickTime !== undefined && nowTime - lastClickTime <= this.clickInterval) {
          return this;
        }

        this.lastClickTime = nowTime;
        this.emit('click', this, this.parent, pointer, event);
        return this;
      }
    }, {
      key: "cancel",
      value: function cancel() {
        this.pointer = undefined;
        return this;
      }
    }]);

    return Button;
  }(ComponentBase);

  var CLICKMODE = {
    press: 0,
    pointerdown: 0,
    release: 1,
    pointerup: 1
  };

  var ClickMethods = {
    onClick: function onClick(callback, scope, config) {
      if (!callback) {
        return this;
      }

      if (this._click === undefined) {
        this._click = new Button(this, config);
      }

      this._click.on('click', callback, scope);

      return this;
    },
    offClick: function offClick(callback, scope) {
      if (this._click === undefined) {
        return this;
      }

      this._click.off('click', callback, scope);

      return this;
    },
    enableClick: function enableClick(enabled) {
      if (this._click === undefined) {
        return this;
      }

      this._click.setEnable(enabled);

      return this;
    },
    disableClick: function disableClick() {
      if (this._click === undefined) {
        return this;
      }

      this._click.setEnable(false);

      return this;
    }
  };

  var BroadcastEvent = function BroadcastEvent() {
    var gameObjects = this.getAllChildren([this]);

    for (var i = 0, cnt = gameObjects.length; i < cnt; i++) {
      var gameObject = gameObjects[i];
      gameObject.emit.apply(gameObject, arguments);
    }

    return this;
  };

  var methods$1 = {
    getSizerConfig: GetSizerConfig,
    getChildPrevState: GetChildPrevState,
    pushIntoBounds: PushIntoBounds,
    drawBounds: DrawBounds,
    resolveWidth: ResolveWidth,
    resolveChildrenWidth: ResolveChildrenWidth,
    resolveHeight: ResolveHeight,
    getChildWidth: GetChildWidth,
    getChildHeight: GetChildHeight,
    getExpandedChildWidth: GetExpandedChildWidth$1,
    getExpandedChildHeight: GetExpandedChildHeight$1,
    getChildrenWidth: GetChildrenWidth$1,
    getChildrenHeight: GetChildrenHeight$1,
    addChildrenMap: AddChildrenMap,
    addElement: AddChildrenMap,
    getElement: GetElement,
    getAllChildrenSizers: GetAllChildrenSizers,
    getChildrenSizers: GetChildrenSizers$1,
    preLayout: PreLayout,
    layout: Layout,
    runLayout: RunLayout,
    layoutChildren: LayoutChildren$1,
    runWidthWrap: RunWidthWrap,
    layoutBackgrounds: LayoutBackgrounds,
    postLayout: PostLayout,
    setAnchor: SetAnchor,
    isInTouching: IsInTouching,
    pointToChild: PointToChild,
    setDraggable: SetDraggable,
    broadcastEvent: BroadcastEvent
  };
  Object.assign(methods$1, PaddingMethods, AddChildMethods$1, GetParentSizerMethods, ScaleMethods, FadeMethods, EaseMoveMethods, ClickMethods, HideMethods, GetShownChildrenMethods);

  var GetValue$5 = Phaser.Utils.Objects.GetValue;

  var Base = /*#__PURE__*/function (_Container) {
    _inherits(Base, _Container);

    var _super = _createSuper(Base);

    function Base(scene, x, y, minWidth, minHeight, config) {
      var _this;

      _classCallCheck(this, Base);

      _this = _super.call(this, scene, x, y, 2, 2);
      _this.isRexSizer = true;

      _this.setMinSize(minWidth, minHeight);

      _this.setName(GetValue$5(config, 'name', ''));

      _this.rexSizer = {};
      _this.space = {};
      _this.backgroundChildren = undefined;
      _this.sizerChildren = undefined; // [] or {}

      _this.layoutedChildren = undefined;
      var anchorConfig = GetValue$5(config, 'anchor', undefined);

      if (anchorConfig) {
        _this.setAnchor(anchorConfig);
      }

      _this.setInnerPadding(GetValue$5(config, 'space', 0));

      _this.setDraggable(GetValue$5(config, 'draggable', false));

      _this.setSizerEventsEnable(GetValue$5(config, 'sizerEvents', false));

      _this.setDirty(true);

      return _this;
    }

    _createClass(Base, [{
      key: "destroy",
      value: function destroy(fromScene) {
        //  This Game Object has already been destroyed
        if (!this.scene) {
          return;
        }

        if (fromScene) {
          // In this case, children will be cleared and destroy in scene level
          var sizers = this.getAllChildrenSizers([this]);

          for (var i = 0, cnt = sizers.length; i < cnt; i++) {
            sizers[i].sizerEventsEnable = false;
          }
        }

        _get(_getPrototypeOf(Base.prototype), "destroy", this).call(this, fromScene);

        this.backgroundChildren = undefined;
        this.sizerChildren = undefined;
        this.childrenMap = undefined;
        this.space = undefined;
        this.rexSizer = undefined;
        this.layoutedChildren = undefined;
      }
    }, {
      key: "setMinSize",
      value: function setMinSize(minWidth, minHeight) {
        this.setMinWidth(minWidth).setMinHeight(minHeight);
        return this;
      }
    }, {
      key: "setMinWidth",
      value: function setMinWidth(minWidth) {
        if (minWidth == null) {
          minWidth = 0;
        }

        this.minWidth = minWidth;
        return this;
      }
    }, {
      key: "setMinHeight",
      value: function setMinHeight(minHeight) {
        if (minHeight == null) {
          minHeight = 0;
        }

        this.minHeight = minHeight;
        return this;
      }
    }, {
      key: "setDirty",
      value: function setDirty(dirty) {
        if (dirty === undefined) {
          dirty = true;
        }

        this.dirty = dirty;
        return this;
      }
    }, {
      key: "setSizerEventsEnable",
      value: function setSizerEventsEnable(enable) {
        if (enable === undefined) {
          enable = true;
        }

        this.sizerEventsEnable = enable;
        return this;
      }
    }, {
      key: "ignoreLayout",
      get: function get() {
        // Skip hidden or !dirty sizer
        return this.rexSizer.hidden || !this.dirty;
      }
    }, {
      key: "childrenWidth",
      get: function get() {
        if (this._childrenWidth === undefined) {
          this._childrenWidth = this.getChildrenWidth();
        }

        return this._childrenWidth;
      }
    }, {
      key: "childrenHeight",
      get: function get() {
        if (this._childrenHeight === undefined) {
          this._childrenHeight = this.getChildrenHeight();
        }

        return this._childrenHeight;
      }
    }, {
      key: "left",
      get: function get() {
        return this.x - GetDisplayWidth(this) * this.originX;
      },
      set: function set(value) {
        this.x += value - this.left;
      }
    }, {
      key: "alignLeft",
      value: function alignLeft(value) {
        this.left = value;
        return this;
      }
    }, {
      key: "right",
      get: function get() {
        return this.left + GetDisplayWidth(this);
      },
      set: function set(value) {
        this.x += value - this.right;
      }
    }, {
      key: "alignRight",
      value: function alignRight(value) {
        this.right = value;
        return this;
      }
    }, {
      key: "centerX",
      get: function get() {
        return this.left + GetDisplayWidth(this) / 2;
      },
      set: function set(value) {
        this.x += value - this.centerX;
      }
    }, {
      key: "alignCenterX",
      value: function alignCenterX(value) {
        this.centerX = value;
        return this;
      }
    }, {
      key: "top",
      get: function get() {
        return this.y - GetDisplayHeight(this) * this.originY;
      },
      set: function set(value) {
        this.y += value - this.top;
      }
    }, {
      key: "alignTop",
      value: function alignTop(value) {
        this.top = value;
        return this;
      }
    }, {
      key: "bottom",
      get: function get() {
        return this.top + GetDisplayHeight(this);
      },
      set: function set(value) {
        this.y += value - this.bottom;
      }
    }, {
      key: "alignBottom",
      value: function alignBottom(value) {
        this.bottom = value;
        return this;
      }
    }, {
      key: "centerY",
      get: function get() {
        return this.top + GetDisplayHeight(this) / 2;
      },
      set: function set(value) {
        this.y += value - this.centerY;
      }
    }, {
      key: "alignCenterY",
      value: function alignCenterY(value) {
        this.centerY = value;
        return this;
      }
    }, {
      key: "innerLeft",
      get: function get() {
        return this.left + this.space.left;
      }
    }, {
      key: "innerRight",
      get: function get() {
        return this.right - this.space.right;
      }
    }, {
      key: "innerTop",
      get: function get() {
        return this.top + this.space.top;
      }
    }, {
      key: "innerBottom",
      get: function get() {
        return this.bottom - this.space.bottom;
      }
    }, {
      key: "innerWidth",
      get: function get() {
        return this.width - this.space.left - this.space.right;
      }
    }, {
      key: "innerHeight",
      get: function get() {
        return this.height - this.space.top - this.space.bottom;
      }
    }, {
      key: "minInnerWidth",
      get: function get() {
        var result = this.minWidth - this.space.left - this.space.right;
        return Math.max(result, 0);
      }
    }, {
      key: "minInnerHeight",
      get: function get() {
        var result = this.minHeight - this.space.top - this.space.bottom;
        return Math.max(result, 0);
      }
    }]);

    return Base;
  }(ContainerLite);

  Object.assign(Base.prototype, methods$1);

  var GetChildrenWidth = function GetChildrenWidth() {
    if (this.rexSizer.hidden) {
      return 0;
    }

    var result = 0;
    var children = this.sizerChildren;
    var child, padding, childWidth;

    for (var key in children) {
      child = children[key];
      padding = child.rexSizer.padding;
      childWidth = this.getChildWidth(child) + padding.left + padding.right;
      result = Math.max(childWidth, result);
    }

    return result + this.space.left + this.space.right;
  };

  var GetChildrenHeight = function GetChildrenHeight() {
    if (this.rexSizer.hidden) {
      return 0;
    }

    var result = 0;
    var children = this.sizerChildren;
    var child, padding, childHeight;

    for (var key in children) {
      child = children[key];
      childHeight = child.isRexSizer ? Math.max(child.minHeight, child.childrenHeight) : child.minHeight !== undefined ? child.minHeight : GetDisplayHeight(child);
      padding = child.rexSizer.padding;
      childHeight += padding.top + padding.bottom;
      result = Math.max(childHeight, result);
    }

    return result + this.space.top + this.space.bottom;
  };

  var GetExpandedChildWidth = function GetExpandedChildWidth(child, parentWidth) {
    if (parentWidth === undefined) {
      parentWidth = this.width;
    }

    var childWidth;
    var childConfig = child.rexSizer;

    if (childConfig.expandWidth) {
      var innerWidth = parentWidth - this.space.left - this.space.right;
      var padding = childConfig.padding;
      childWidth = innerWidth - padding.left - padding.right;
    }

    return childWidth;
  };

  var GetExpandedChildHeight = function GetExpandedChildHeight(child, parentHeight) {
    if (parentHeight === undefined) {
      parentHeight = this.height;
    }

    var childHeight;
    var childConfig = child.rexSizer;

    if (childConfig.expandHeight) {
      var innerHeight = parentHeight - this.space.top - this.space.bottom;
      var padding = childConfig.padding;
      childHeight = innerHeight - padding.top - padding.bottom;
    }

    return childHeight;
  };

  var GetChildrenSizers = function GetChildrenSizers(out) {
    if (out === undefined) {
      out = [];
    }

    var children = this.sizerChildren,
        child;

    for (var key in children) {
      child = children[key];

      if (child.isRexSizer) {
        out.push(child);
      }
    }

    return out;
  };

  var CheckSize = function CheckSize(child, parent) {
    if (child.width < child.childrenWidth) {
      // Warning
      console.warn("Layout width error: Parent=".concat(parent.constructor.name, ", Child=").concat(child.constructor.name));
    }

    if (child.height < child.childrenHeight) {
      // Warning
      console.warn("Layout height error: Parent=".concat(parent.constructor.name, ", Child=").concat(child.constructor.name));
    }
  };

  var LayoutChildren = function LayoutChildren() {
    var child, childConfig, padding;
    var startX = this.innerLeft,
        startY = this.innerTop;
    var innerWidth = this.innerWidth,
        innerHeight = this.innerHeight;
    var x, y, width, height; // Align zone

    var childWidth, childHeight; // Layout current page

    var children = this.sizerChildren;

    for (var key in children) {
      child = children[key];

      if (child.rexSizer.hidden) {
        continue;
      }

      childConfig = child.rexSizer;
      padding = childConfig.padding;
      PreLayoutChild.call(this, child); // Set size

      if (child.isRexSizer) {
        child.runLayout(this, this.getExpandedChildWidth(child), this.getExpandedChildHeight(child));
        CheckSize(child, this);
      } else {
        childWidth = undefined;
        childHeight = undefined;

        if (childConfig.expandWidth) {
          // Expand width
          childWidth = innerWidth - padding.left - padding.right;
        }

        if (childConfig.expandHeight) {
          // Expand height
          childHeight = innerHeight - padding.top - padding.bottom;
        }

        ResizeGameObject(child, childWidth, childHeight);
      } // Set position


      x = startX + padding.left;
      width = innerWidth - padding.left - padding.right;
      y = startY + padding.top;
      height = innerHeight - padding.top - padding.bottom;
      LayoutChild.call(this, child, x, y, width, height, childConfig.align, childConfig.alignOffsetX, childConfig.alignOffsetY);
    }
  };

  var IsPlainObject$2 = Phaser.Utils.Objects.IsPlainObject;
  var GetValue$4 = Phaser.Utils.Objects.GetValue;
  var ALIGN_CENTER = Phaser.Display.Align.CENTER;
  var UUID = Phaser.Utils.String.UUID;

  var Add = function Add(gameObject, childKey, align, padding, expand, minWidth, minHeight, offsetX, offsetY) {
    AddChild.call(this, gameObject);

    if (IsPlainObject$2(childKey)) {
      var config = childKey;
      childKey = GetValue$4(config, 'key', undefined);
      align = GetValue$4(config, 'align', ALIGN_CENTER);
      offsetX = GetValue$4(config, 'offsetX', 0);
      offsetY = GetValue$4(config, 'offsetY', 0);
      padding = GetValue$4(config, 'padding', 0);
      expand = GetValue$4(config, 'expand', true);

      if (!gameObject.isRexSizer) {
        // Get minWidth,minHeight from config
        minWidth = GetValue$4(config, 'minWidth', gameObject._minWidth);
        minHeight = GetValue$4(config, 'minHeight', gameObject._minHeighted);
      }
    }

    var hasValidKey = childKey !== undefined;

    if (!hasValidKey) {
      childKey = UUID();
    }

    if (typeof align === 'string') {
      align = ALIGNMODE[align];
    }

    if (align === undefined) {
      align = ALIGN_CENTER;
    }

    if (offsetX === undefined) {
      offsetX = 0;
    }

    if (offsetY === undefined) {
      offsetY = 0;
    }

    if (padding === undefined) {
      padding = 0;
    }

    if (expand === undefined) {
      expand = true;
    }

    if (!gameObject.isRexSizer) {
      // Get minWidth,minHeight from game object
      if (minWidth === undefined) {
        minWidth = gameObject._minWidth;
      }

      if (minHeight === undefined) {
        minHeight = gameObject._minHeight;
      }
    }

    var config = this.getSizerConfig(gameObject);
    config.align = align;
    config.alignOffsetX = offsetX;
    config.alignOffsetY = offsetY;
    config.padding = GetBoundsConfig(padding);

    if (IsPlainObject$2(expand)) {
      config.expandWidth = GetValue$4(expand, 'width', false);
      config.expandHeight = GetValue$4(expand, 'height', false);
    } else {
      config.expandWidth = expand;
      config.expandHeight = expand;
    }

    if (!gameObject.isRexSizer) {
      // Expand normal game object
      if (config.expandWidth) {
        // minWidth is still undefined, uses current display width
        gameObject.minWidth = minWidth === undefined ? GetDisplayWidth(gameObject) : minWidth;
      } else {
        gameObject.minWidth = undefined;
      }

      if (config.expandHeight) {
        // minHeight is still undefined, uses current display height
        gameObject.minHeight = minHeight === undefined ? GetDisplayHeight(gameObject) : minHeight;
      } else {
        gameObject.minHeight = undefined;
      }
    }

    if (this.sizerChildren.hasOwnProperty(childKey)) {
      this.sizerChildren[childKey].destroy();
    }

    this.sizerChildren[childKey] = gameObject;

    if (hasValidKey) {
      this.addChildrenMap(childKey, gameObject);
    }

    return this;
  };

  var AddChildMethods = {
    add: Add
  };

  var RemoveItem$1 = Phaser.Utils.Array.Remove;
  var ContainerRemove = ContainerLite.prototype.remove;

  var RemoveChild = function RemoveChild(gameObject, destroyChild) {
    if (this.isBackground(gameObject)) {
      RemoveItem$1(this.backgroundChildren, gameObject);
    }

    ContainerRemove.call(this, gameObject, destroyChild);

    if (!destroyChild && this.sizerEventsEnable) {
      gameObject.emit('sizer.remove', gameObject, this);
      this.emit('remove', gameObject, this);
    }

    return this;
  };

  var ContainerClear = ContainerLite.prototype.clear;

  var ClearChildren = function ClearChildren(destroyChild) {
    if (this.backgroundChildren) {
      this.backgroundChildren.length = 0;
    }

    var fireRemoveEvent = !destroyChild && this.sizerEventsEnable;
    var children;

    if (fireRemoveEvent) {
      children = this.getChildren([]);
    }

    ContainerClear.call(this, destroyChild);

    if (fireRemoveEvent) {
      var gameObject;

      for (var i = 0, cnt = children.length; i < cnt; i++) {
        gameObject = children[i];
        gameObject.emit('sizer.remove', gameObject, this);
        this.emit('remove', gameObject, this);
      }
    }

    return this;
  };

  var RemoveChildMethods = {
    remove: function remove(gameObject, destroyChild) {
      var key;

      if (typeof gameObject === 'string') {
        key = gameObject;
        gameObject = this.sizerChildren[key];

        if (!gameObject) {
          return this;
        }
      } else if (this.getParentSizer(gameObject) !== this) {
        return this;
      } else {
        key = this.childToKey(gameObject);
      }

      if (key) {
        delete this.sizerChildren[key];

        if (this.childrenMap.hasOwnProperty(key)) {
          delete this.childrenMap[key];
        }
      }

      RemoveChild.call(this, gameObject, destroyChild);
      return this;
    },
    removeAll: function removeAll(destroyChild) {
      for (var key in this.sizerChildren) {
        this.remove(key, destroyChild);
      }

      return this;
    },
    clear: function clear(destroyChild) {
      for (var key in this.sizerChildren) {
        delete this.sizerChildren[key];

        if (this.childrenMap.hasOwnProperty(key)) {
          delete this.childrenMap[key];
        }
      }

      ClearChildren.call(this, destroyChild);
      return this;
    }
  };

  var methods = {
    getChildrenWidth: GetChildrenWidth,
    getChildrenHeight: GetChildrenHeight,
    getExpandedChildWidth: GetExpandedChildWidth,
    getExpandedChildHeight: GetExpandedChildHeight,
    getChildrenSizers: GetChildrenSizers,
    layoutChildren: LayoutChildren
  };
  Object.assign(methods, AddChildMethods, RemoveChildMethods);

  var Clear = function Clear(obj) {
    if (Array.isArray(obj)) {
      obj.length = 0;
    } else {
      for (var key in obj) {
        delete obj[key];
      }
    }
  };

  var IndexOf = function IndexOf(obj, child) {
    if (Array.isArray(obj)) {
      return obj.indexOf(child);
    } else {
      for (var key in obj) {
        if (obj[key] === child) {
          return key;
        }
      }

      return null;
    }
  };

  var IsPlainObject$1 = Phaser.Utils.Objects.IsPlainObject;
  var GetValue$3 = Phaser.Utils.Objects.GetValue;

  var OverlapSizer = /*#__PURE__*/function (_BaseSizer) {
    _inherits(OverlapSizer, _BaseSizer);

    var _super = _createSuper(OverlapSizer);

    function OverlapSizer(scene, x, y, minWidth, minHeight, config) {
      var _this;

      _classCallCheck(this, OverlapSizer);

      if (IsPlainObject$1(x)) {
        config = x;
        x = GetValue$3(config, 'x', 0);
        y = GetValue$3(config, 'y', 0);
        minWidth = GetValue$3(config, 'width', undefined);
        minHeight = GetValue$3(config, 'height', undefined);
      } else if (IsPlainObject$1(minWidth)) {
        config = minWidth;
        minWidth = GetValue$3(config, 'width', undefined);
        minHeight = GetValue$3(config, 'height', undefined);
      }

      _this = _super.call(this, scene, x, y, minWidth, minHeight, config);
      _this.type = 'rexOverlapSizer';
      _this.sizerChildren = {};

      _this.addChildrenMap('items', _this.sizerChildren);

      return _this;
    }

    _createClass(OverlapSizer, [{
      key: "childToKey",
      value: function childToKey(gameObject) {
        if (typeof gameObject === 'string') {
          var key = gameObject;

          if (this.sizerChildren.hasOwnPropery(key)) {
            return key;
          }
        } else {
          return IndexOf(this.sizerChildren, gameObject);
        }

        return null;
      }
    }]);

    return OverlapSizer;
  }(Base);

  Object.assign(OverlapSizer.prototype, methods);

  /**
   * @author       Richard Davey <rich@photonstorm.com>
   * @copyright    2020 Photon Storm Ltd.
   * @license      {@link https://opensource.org/licenses/MIT|MIT License}
   */
  var TransformMatrix = Phaser.GameObjects.Components.TransformMatrix;
  var tempMatrix1 = new TransformMatrix();
  var tempMatrix2 = new TransformMatrix();
  var tempMatrix3 = new TransformMatrix();
  var result = {
    camera: tempMatrix1,
    sprite: tempMatrix2,
    calc: tempMatrix3
  };
  /**
   * Calculates the Transform Matrix of the given Game Object and Camera, factoring in
   * the parent matrix if provided.
   *
   * Note that the object this results contains _references_ to the Transform Matrices,
   * not new instances of them. Therefore, you should use their values immediately, or
   * copy them to your own matrix, as they will be replaced as soon as another Game
   * Object is rendered.
   *
   * @function Phaser.GameObjects.GetCalcMatrix
   * @memberof Phaser.GameObjects
   * @since 3.50.0
   *
   * @param {Phaser.GameObjects.GameObject} src - The Game Object to calculate the transform matrix for.
   * @param {Phaser.Cameras.Scene2D.Camera} camera - The camera being used to render the Game Object.
   * @param {Phaser.GameObjects.Components.TransformMatrix} [parentMatrix] - The transform matrix of the parent container, if any.
   *
   * @return {Phaser.Types.GameObjects.GetCalcMatrixResults} The results object containing the updated transform matrices.
   */

  var GetCalcMatrix = function GetCalcMatrix(src, camera, parentMatrix) {
    var camMatrix = tempMatrix1;
    var spriteMatrix = tempMatrix2;
    var calcMatrix = tempMatrix3;
    spriteMatrix.applyITRS(src.x, src.y, src.rotation, src.scaleX, src.scaleY);
    camMatrix.copyFrom(camera.matrix);

    if (parentMatrix) {
      //  Multiply the camera by the parent matrix
      camMatrix.multiplyWithOffset(parentMatrix, -camera.scrollX * src.scrollFactorX, -camera.scrollY * src.scrollFactorY); //  Undo the camera scroll

      spriteMatrix.e = src.x;
      spriteMatrix.f = src.y;
    } else {
      spriteMatrix.e -= camera.scrollX * src.scrollFactorX;
      spriteMatrix.f -= camera.scrollY * src.scrollFactorY;
    } //  Multiply by the Sprite matrix, store result in calcMatrix


    camMatrix.multiply(spriteMatrix, calcMatrix);
    return result;
  };

  var WebGLRenderer = function WebGLRenderer(renderer, src, camera, parentMatrix) {
    src.updateData();
    camera.addToRenderList(src);
    var pipeline = renderer.pipelines.set(src.pipeline);
    var result = GetCalcMatrix(src, camera, parentMatrix);
    var calcMatrix = pipeline.calcMatrix.copyFrom(result.calc);
    var dx = src._displayOriginX;
    var dy = src._displayOriginY;
    var alpha = camera.alpha * src.alpha;
    renderer.pipelines.preBatch(src);
    var shapes = src.geom;

    for (var i = 0, cnt = shapes.length; i < cnt; i++) {
      shapes[i].webglRender(pipeline, calcMatrix, alpha, dx, dy);
    }

    renderer.pipelines.postBatch(src);
  };

  var SetTransform = Phaser.Renderer.Canvas.SetTransform;

  var CanvasRenderer = function CanvasRenderer(renderer, src, camera, parentMatrix) {
    src.updateData();
    camera.addToRenderList(src);
    var ctx = renderer.currentContext;

    if (SetTransform(renderer, ctx, src, camera, parentMatrix)) {
      var dx = src._displayOriginX;
      var dy = src._displayOriginY;
      var shapes = src.geom;

      for (var i = 0, cnt = shapes.length; i < cnt; i++) {
        shapes[i].canvasRender(ctx, dx, dy);
      } //  Restore the context saved in SetTransform


      ctx.restore();
    }
  };

  var Render = {
    renderWebGL: WebGLRenderer,
    renderCanvas: CanvasRenderer
  };

  var Shape = Phaser.GameObjects.Shape;
  var RemoveItem = Phaser.Utils.Array.Remove;

  var BaseShapes = /*#__PURE__*/function (_Shape) {
    _inherits(BaseShapes, _Shape);

    var _super = _createSuper(BaseShapes);

    function BaseShapes(scene, x, y, width, height) {
      var _this;

      _classCallCheck(this, BaseShapes);

      if (x === undefined) {
        x = 0;
      }

      if (y === undefined) {
        y = 0;
      }

      if (width === undefined) {
        width = 0;
      }

      if (height === undefined) {
        height = width;
      }

      _this = _super.call(this, scene, 'rexShapes', []);
      _this._width = -1;
      _this._height = -1;
      _this.dirty = true;
      _this.isSizeChanged = true;
      _this.shapes = {};

      _this.setPosition(x, y);

      _this.setSize(width, height);

      _this.updateDisplayOrigin();

      return _this;
    }

    _createClass(BaseShapes, [{
      key: "width",
      get: function get() {
        return this._width;
      },
      set: function set(value) {
        this.setSize(value, this._height);
      }
    }, {
      key: "height",
      get: function get() {
        return this._height;
      },
      set: function set(value) {
        this.setSize(this._width, value);
      }
    }, {
      key: "setDirty",
      value: function setDirty(value) {
        if (value === undefined) {
          value = true;
        }

        this.dirty = value;
        return this;
      }
    }, {
      key: "setSize",
      value: function setSize(width, height) {
        this.isSizeChanged = this.isSizeChanged || this._width !== width || this._height !== height;
        this.dirty = this.dirty || this.isSizeChanged;
        this._width = width;
        this._height = height;
        this.updateDisplayOrigin();
        var input = this.input;

        if (input && !input.customHitArea) {
          input.hitArea.width = width;
          input.hitArea.height = height;
        }

        return this;
      }
    }, {
      key: "resize",
      value: function resize(width, height) {
        this.setSize(width, height);
        return this;
      }
    }, {
      key: "setFillStyle",
      value: function setFillStyle(color, alpha) {
        if (alpha === undefined) {
          alpha = 1;
        }

        this.dirty = this.dirty || this.fillColor !== color || this.fillAlpha !== alpha;
        this.fillColor = color;
        this.fillAlpha = alpha;
        return this;
      }
    }, {
      key: "setStrokeStyle",
      value: function setStrokeStyle(lineWidth, color, alpha) {
        if (alpha === undefined) {
          alpha = 1;
        }

        this.dirty = this.dirty || this.lineWidth !== lineWidth || this.strokeColor !== color || this.strokeAlpha !== alpha;
        this.lineWidth = lineWidth;
        this.strokeColor = color;
        this.strokeAlpha = alpha;
        return this;
      }
    }, {
      key: "updateShapes",
      value: function updateShapes() {}
    }, {
      key: "updateData",
      value: function updateData() {
        if (!this.dirty) {
          return this;
        }

        this.updateShapes();
        var shapes = this.geom;

        for (var i = 0, cnt = shapes.length; i < cnt; i++) {
          var shape = shapes[i];

          if (shape.dirty) {
            shape.updateData();
          }
        }

        this.dirty = false;
        this.isSizeChanged = false;
        return this;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.geom.length = 0;
        Clear(this.shapes);
        return this;
      }
    }, {
      key: "getShape",
      value: function getShape(name) {
        return this.shapes[name];
      }
    }, {
      key: "getShapes",
      value: function getShapes() {
        return this.geom;
      }
    }, {
      key: "addShape",
      value: function addShape(shape) {
        this.geom.push(shape);
        var name = shape.name;

        if (name) {
          this.shapes[name] = shape;
        }

        this.dirty = true;
        return this;
      }
    }, {
      key: "deleteShape",
      value: function deleteShape(name) {
        var shape = this.getShape(name);

        if (shape) {
          delete this.shapes[name];
          RemoveItem(this.geom, shape);
        }

        return this;
      }
    }]);

    return BaseShapes;
  }(Shape);

  Object.assign(BaseShapes.prototype, Render);

  var FillStyle = function FillStyle(color, alpha) {
    if (color === undefined) {
      this.isFilled = false;
    } else {
      if (alpha === undefined) {
        alpha = 1;
      }

      this.isFilled = true;
      this.fillColor = color;
      this.fillAlpha = alpha;
    }

    return this;
  };

  var LineStyle = function LineStyle(lineWidth, color, alpha) {
    if (lineWidth === undefined || color === undefined) {
      this.isStroked = false;
    } else {
      if (alpha === undefined) {
        alpha = 1;
      }

      this.isStroked = true;
      this.lineWidth = lineWidth;
      this.strokeColor = color;
      this.strokeAlpha = alpha;
    }

    return this;
  };

  var StyleMethods = {
    fillStyle: FillStyle,
    lineStyle: LineStyle
  };

  var SetData = function SetData(key, value) {
    if (this.data === undefined) {
      this.data = {};
    }

    this.data[key] = value;
    return this;
  };

  var GetData = function GetData(key, defaultValue) {
    if (this.data === undefined) {
      this.data = {};
    }

    if (!this.data.hasOwnProperty(key)) {
      this.data[key] = defaultValue;
    }

    return this.data[key];
  };

  var DataMethods = {
    setData: SetData,
    getData: GetData
  };

  var BaseGeom = /*#__PURE__*/function () {
    function BaseGeom() {
      _classCallCheck(this, BaseGeom);

      this.name = undefined;
      this.dirty = true;
      this.data = undefined;
      this.isFilled = false;
      this.fillColor = undefined;
      this.fillAlpha = 1;
      this.isStroked = false;
      this.lineWidth = 1;
      this.strokeColor = undefined;
      this.strokeAlpha = 1;
    }

    _createClass(BaseGeom, [{
      key: "setName",
      value: function setName(name) {
        this.name = name;
        return this;
      }
    }, {
      key: "reset",
      value: function reset() {
        this.fillStyle();
        this.lineStyle();
        return this;
      }
    }, {
      key: "webglRender",
      value: function webglRender(pipeline, calcMatrix, alpha, dx, dy) {}
    }, {
      key: "canvasRender",
      value: function canvasRender(ctx, dx, dy) {}
    }, {
      key: "updateData",
      value: function updateData() {}
    }]);

    return BaseGeom;
  }();

  Object.assign(BaseGeom.prototype, StyleMethods, DataMethods);

  /*
  src: {
      fillColor, 
      fillAlpha, 
      pathData, 
      pathIndexes  // Earcut(pathData)
  }
  */
  var Utils$1 = Phaser.Renderer.WebGL.Utils;

  var FillPathWebGL = function FillPathWebGL(pipeline, calcMatrix, src, alpha, dx, dy) {
    var fillTintColor = Utils$1.getTintAppendFloatAlpha(src.fillColor, src.fillAlpha * alpha);
    var path = src.pathData;
    var pathIndexes = src.pathIndexes;

    for (var i = 0; i < pathIndexes.length; i += 3) {
      var p0 = pathIndexes[i] * 2;
      var p1 = pathIndexes[i + 1] * 2;
      var p2 = pathIndexes[i + 2] * 2;
      var x0 = path[p0 + 0] - dx;
      var y0 = path[p0 + 1] - dy;
      var x1 = path[p1 + 0] - dx;
      var y1 = path[p1 + 1] - dy;
      var x2 = path[p2 + 0] - dx;
      var y2 = path[p2 + 1] - dy;
      var tx0 = calcMatrix.getX(x0, y0);
      var ty0 = calcMatrix.getY(x0, y0);
      var tx1 = calcMatrix.getX(x1, y1);
      var ty1 = calcMatrix.getY(x1, y1);
      var tx2 = calcMatrix.getX(x2, y2);
      var ty2 = calcMatrix.getY(x2, y2);
      pipeline.batchTri(src, tx0, ty0, tx1, ty1, tx2, ty2, 0, 0, 1, 1, fillTintColor, fillTintColor, fillTintColor, 2);
    }
  };

  /*
  src: {
      strokeColor,
      strokeAlpha,
      pathData,
      lineWidth,
      closePath
  }
  */
  var Utils = Phaser.Renderer.WebGL.Utils;

  var StrokePathWebGL = function StrokePathWebGL(pipeline, src, alpha, dx, dy) {
    var strokeTint = pipeline.strokeTint;
    var strokeTintColor = Utils.getTintAppendFloatAlpha(src.strokeColor, src.strokeAlpha * alpha);
    strokeTint.TL = strokeTintColor;
    strokeTint.TR = strokeTintColor;
    strokeTint.BL = strokeTintColor;
    strokeTint.BR = strokeTintColor;
    var path = src.pathData;
    var pathLength = path.length - 1;
    var lineWidth = src.lineWidth;
    var halfLineWidth = lineWidth / 2;
    var px1 = path[0] - dx;
    var py1 = path[1] - dy;

    if (!src.closePath) {
      pathLength -= 2;
    }

    for (var i = 2; i < pathLength; i += 2) {
      var px2 = path[i] - dx;
      var py2 = path[i + 1] - dy;
      pipeline.batchLine(px1, py1, px2, py2, halfLineWidth, halfLineWidth, lineWidth, i - 2, src.closePath ? i === pathLength - 1 : false);
      px1 = px2;
      py1 = py2;
    }
  };

  var FillStyleCanvas = function FillStyleCanvas(ctx, src, altColor, altAlpha) {
    var fillColor = altColor ? altColor : src.fillColor;
    var fillAlpha = altAlpha ? altAlpha : src.fillAlpha;
    var red = (fillColor & 0xFF0000) >>> 16;
    var green = (fillColor & 0xFF00) >>> 8;
    var blue = fillColor & 0xFF;
    ctx.fillStyle = 'rgba(' + red + ',' + green + ',' + blue + ',' + fillAlpha + ')';
  };

  var LineStyleCanvas = function LineStyleCanvas(ctx, src, altColor, altAlpha) {
    var strokeColor = altColor ? altColor : src.strokeColor;
    var strokeAlpha = altAlpha ? altAlpha : src.strokeAlpha;
    var red = (strokeColor & 0xFF0000) >>> 16;
    var green = (strokeColor & 0xFF00) >>> 8;
    var blue = strokeColor & 0xFF;
    ctx.strokeStyle = 'rgba(' + red + ',' + green + ',' + blue + ',' + strokeAlpha + ')';
    ctx.lineWidth = src.lineWidth;
  };

  var Earcut = Phaser.Geom.Polygon.Earcut;

  var PathBase = /*#__PURE__*/function (_BaseGeom) {
    _inherits(PathBase, _BaseGeom);

    var _super = _createSuper(PathBase);

    function PathBase() {
      var _this;

      _classCallCheck(this, PathBase);

      _this = _super.call(this);
      _this.pathData = [];
      _this.pathIndexes = [];
      _this.closePath = false;
      return _this;
    }

    _createClass(PathBase, [{
      key: "updateData",
      value: function updateData() {
        this.pathIndexes = Earcut(this.pathData);
        return this;
      }
    }, {
      key: "webglRender",
      value: function webglRender(pipeline, calcMatrix, alpha, dx, dy) {
        if (this.isFilled) {
          FillPathWebGL(pipeline, calcMatrix, this, alpha, dx, dy);
        }

        if (this.isStroked) {
          StrokePathWebGL(pipeline, this, alpha, dx, dy);
        }
      }
    }, {
      key: "canvasRender",
      value: function canvasRender(ctx, dx, dy) {
        var path = this.pathData;
        var pathLength = path.length - 1;
        var px1 = path[0] - dx;
        var py1 = path[1] - dy;
        ctx.beginPath();
        ctx.moveTo(px1, py1);

        if (!this.closePath) {
          pathLength -= 2;
        }

        for (var i = 2; i < pathLength; i += 2) {
          var px2 = path[i] - dx;
          var py2 = path[i + 1] - dy;
          ctx.lineTo(px2, py2);
        }

        if (this.closePath) {
          ctx.closePath();
        }

        if (this.isFilled) {
          FillStyleCanvas(ctx, this);
          ctx.fill();
        }

        if (this.isStroked) {
          LineStyleCanvas(ctx, this);
          ctx.stroke();
        }
      }
    }]);

    return PathBase;
  }(BaseGeom);

  var LineTo = function LineTo(x, y, pathData) {
    var cnt = pathData.length;

    if (cnt >= 2) {
      var lastX = pathData[cnt - 2];
      var lastY = pathData[cnt - 1];

      if (x === lastX && y === lastY) {
        return pathData;
      }
    }

    pathData.push(x, y);
    return pathData;
  };

  var DegToRad$1 = Phaser.Math.DegToRad;

  var ArcTo = function ArcTo(centerX, centerY, radiusX, radiusY, startAngle, endAngle, antiClockWise, iteration, pathData) {
    // startAngle, endAngle: 0 ~ 360
    if (antiClockWise && endAngle > startAngle) {
      endAngle -= 360;
    } else if (!antiClockWise && endAngle < startAngle) {
      endAngle += 360;
    }

    var deltaAngle = endAngle - startAngle;
    var step = DegToRad$1(deltaAngle) / iteration;
    startAngle = DegToRad$1(startAngle);

    for (var i = 0; i <= iteration; i++) {
      var angle = startAngle + step * i;
      var x = centerX + radiusX * Math.cos(angle);
      var y = centerY + radiusY * Math.sin(angle);
      LineTo(x, y, pathData);
    }

    return pathData;
  };

  var DegToRad = Phaser.Math.DegToRad;

  var Arc = /*#__PURE__*/function (_PathBase) {
    _inherits(Arc, _PathBase);

    var _super = _createSuper(Arc);

    function Arc(x, y, radiusX, radiusY, startAngle, endAngle, anticlockwise, pie) {
      var _this;

      _classCallCheck(this, Arc);

      if (x === undefined) {
        x = 0;
      }

      if (y === undefined) {
        y = 0;
      }

      if (radiusX === undefined) {
        radiusX = 0;
      }

      if (radiusY === undefined) {
        radiusY = 0;
      }

      if (startAngle === undefined) {
        startAngle = 0;
      }

      if (endAngle === undefined) {
        endAngle = 360;
      }

      if (anticlockwise === undefined) {
        anticlockwise = false;
      }

      if (pie === undefined) {
        pie = false;
      }

      _this = _super.call(this);

      _this.setCenterPosition(x, y);

      _this.setRadius(radiusX, radiusY);

      _this.setAngle(startAngle, endAngle, anticlockwise);

      _this.setPie(pie);

      _this.setIterations(32);

      return _this;
    }

    _createClass(Arc, [{
      key: "x",
      get: function get() {
        return this._x;
      },
      set: function set(value) {
        this.dirty = this.dirty || this._x !== value;
        this._x = value;
      }
    }, {
      key: "y",
      get: function get() {
        return this._y;
      },
      set: function set(value) {
        this.dirty = this.dirty || this._y !== value;
        this._y = value;
      }
    }, {
      key: "setCenterPosition",
      value: function setCenterPosition(x, y) {
        if (y === undefined) {
          y = x;
        }

        this.x = x;
        this.y = y;
        return this;
      }
    }, {
      key: "radiusX",
      get: function get() {
        return this._radiusX;
      },
      set: function set(value) {
        this.dirty = this.dirty || this._radiusX !== value;
        this._radiusX = value;
      }
    }, {
      key: "radiusY",
      get: function get() {
        return this._radiusY;
      },
      set: function set(value) {
        this.dirty = this.dirty || this._radiusY !== value;
        this._radiusY = value;
      }
    }, {
      key: "setRadius",
      value: function setRadius(radiusX, radiusY) {
        if (radiusY === undefined) {
          radiusY = radiusX;
        }

        this.radiusX = radiusX;
        this.radiusY = radiusY;
        return this;
      }
    }, {
      key: "startAngle",
      get: function get() {
        return this._startAngle;
      },
      set: function set(value) {
        this.dirty = this.dirty || this._startAngle !== value;
        this._startAngle = value;
      }
    }, {
      key: "endAngle",
      get: function get() {
        return this._endAngle;
      },
      set: function set(value) {
        this.dirty = this.dirty || this._endAngle !== value;
        this._endAngle = value;
      }
    }, {
      key: "anticlockwise",
      get: function get() {
        return this._anticlockwise;
      },
      set: function set(value) {
        this.dirty = this.dirty || this._anticlockwise !== value;
        this._anticlockwise = value;
      }
    }, {
      key: "setAngle",
      value: function setAngle(startAngle, endAngle, anticlockwise) {
        // startAngle, endAngle in degrees
        if (anticlockwise === undefined) {
          anticlockwise = false;
        }

        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.anticlockwise = anticlockwise;
        return this;
      }
    }, {
      key: "pie",
      get: function get() {
        return this._pie;
      },
      set: function set(value) {
        this.dirty = this.dirty || this._pie !== value;
        this._pie = value;
      }
    }, {
      key: "setPie",
      value: function setPie(pie) {
        if (pie === undefined) {
          pie = true;
        }

        this.pie = pie;
        return this;
      }
    }, {
      key: "iterations",
      get: function get() {
        return this._iterations;
      },
      set: function set(value) {
        this.dirty = this.dirty || this._iterations !== value;
        this._iterations = value;
      }
    }, {
      key: "setIterations",
      value: function setIterations(iterations) {
        this.iterations = iterations;
        return this;
      }
    }, {
      key: "updateData",
      value: function updateData() {
        this.pathData.length = 0;

        if (this.pie) {
          this.pathData.push(this.x, this.y);
        }

        ArcTo(this.x, this.y, this.radiusX, this.radiusY, this.startAngle, this.endAngle, this.anticlockwise, this.iterations, this.pathData);

        if (this.pie) {
          this.pathData.push(this.x, this.y);
        }

        this.pathData.push(this.pathData[0], this.pathData[1]);

        _get(_getPrototypeOf(Arc.prototype), "updateData", this).call(this);

        return this;
      }
    }, {
      key: "canvasRender",
      value: function canvasRender(ctx, dx, dy) {
        ctx.beginPath();
        var x = this.x - dx,
            y = this.y - dy,
            startAngle = DegToRad(this.startAngle),
            endAngle = DegToRad(this.endAngle);

        if (this.pie) {
          ctx.moveTo(x, y);
          ctx.lineTo(x + Math.cos(startAngle) * this.radiusX, y + Math.sin(startAngle) * this.radiusY);
        }

        ctx.ellipse(x, y, this.radiusX, this.radiusY, 0, startAngle, endAngle, this.anticlockwise);

        if (this.pie) {
          ctx.lineTo(x, y);
        }

        if (this.isFilled) {
          FillStyleCanvas(ctx, this);
          ctx.fill();
        }

        if (this.isStroked) {
          LineStyleCanvas(ctx, this);
          ctx.stroke();
        }
      }
    }]);

    return Arc;
  }(PathBase);

  var Circle = /*#__PURE__*/function (_Arc) {
    _inherits(Circle, _Arc);

    var _super = _createSuper(Circle);

    function Circle(x, y, radius) {
      _classCallCheck(this, Circle);

      return _super.call(this, x, y, radius, radius, 0, 360);
    }

    return Circle;
  }(Arc);

  Phaser.Math.Interpolation.QuadraticBezier;

  Phaser.Math.RotateAround;

  Phaser.Geom.Polygon;

  Phaser.Math.DegToRad;

  Phaser.Math.Distance.Between;
  Phaser.Math.Linear;

  Phaser.Renderer.WebGL.Utils;

  Phaser.Renderer.WebGL.Utils;

  var GetValue$2 = Phaser.Utils.Objects.GetValue;
  var Linear$2 = Phaser.Math.Linear;

  var EaseValueTask = /*#__PURE__*/function (_EaseValueTaskBase) {
    _inherits(EaseValueTask, _EaseValueTaskBase);

    var _super = _createSuper(EaseValueTask);

    function EaseValueTask(gameObject, config) {
      var _this;

      _classCallCheck(this, EaseValueTask);

      _this = _super.call(this, gameObject, config); // this.parent = gameObject;
      // this.timer

      _this.resetFromJSON();

      _this.boot();

      return _this;
    }

    _createClass(EaseValueTask, [{
      key: "start",
      value: function start(config) {
        if (this.timer.isRunning) {
          return this;
        }

        var gameObject = this.parent;
        this.propertyKey = GetValue$2(config, 'key', 'value');
        var currentValue = gameObject[this.propertyKey];
        this.fromValue = GetValue$2(config, 'from', currentValue);
        this.toValue = GetValue$2(config, 'to', currentValue);
        this.setEase(GetValue$2(config, 'ease', this.ease));
        this.setDuration(GetValue$2(config, 'duration', this.duration));
        this.timer.setDuration(this.duration);
        gameObject[this.propertyKey] = this.fromValue;

        _get(_getPrototypeOf(EaseValueTask.prototype), "start", this).call(this);

        return this;
      }
    }, {
      key: "updateGameObject",
      value: function updateGameObject(gameObject, timer) {
        var t = timer.t;
        t = this.easeFn(t);
        gameObject[this.propertyKey] = Linear$2(this.fromValue, this.toValue, t);
      }
    }]);

    return EaseValueTask;
  }(EaseValueTaskBase);

  var Percent$2 = Phaser.Math.Percent;

  var SetEaseValuePropName = function SetEaseValuePropName(name) {
    this.easeValuePropName = name;
    return this;
  };

  var SetEaseValueDuration = function SetEaseValueDuration(duration) {
    this.easeValueDuration = duration;
    return this;
  };

  var SetEaseValueFunction = function SetEaseValueFunction(ease) {
    this.easeFunction = ease;
    return this;
  };

  var StopEaseValue = function StopEaseValue() {
    if (this.easeValueTask) {
      this.easeValueTask.stop();
    }

    return this;
  };

  var EaseValueTo = function EaseValueTo(value, min, max) {
    if (value === undefined || value === null) {
      return this;
    }

    if (min !== undefined) {
      value = Percent$2(value, min, max);
    }

    if (this.easeValueTask === undefined) {
      this.easeValueTask = new EaseValueTask(this, {
        eventEmitter: null
      });
    }

    this.easeValueTask.restart({
      key: this.easeValuePropName,
      to: value,
      duration: this.easeValueDuration,
      ease: this.easeFunction
    });
    return this;
  };

  var EaseValueMethods = {
    setEaseValuePropName: SetEaseValuePropName,
    setEaseValueDuration: SetEaseValueDuration,
    setEaseValueFunction: SetEaseValueFunction,
    stopEaseValue: StopEaseValue,
    easeValueTo: EaseValueTo
  };

  var GetValue$1 = Phaser.Utils.Objects.GetValue;
  var IsPlainObject = Phaser.Utils.Objects.IsPlainObject;
  var Clamp = Phaser.Math.Clamp;
  var Linear$1 = Phaser.Math.Linear;
  var Percent$1 = Phaser.Math.Percent;
  var DefaultStartAngle = Phaser.Math.DegToRad(270);
  var RadToDeg = Phaser.Math.RadToDeg;

  var CircularProgress = /*#__PURE__*/function (_BaseShapes) {
    _inherits(CircularProgress, _BaseShapes);

    var _super = _createSuper(CircularProgress);

    function CircularProgress(scene, x, y, radius, barColor, value, config) {
      var _this;

      _classCallCheck(this, CircularProgress);

      if (IsPlainObject(x)) {
        config = x;
        x = GetValue$1(config, 'x', 0);
        y = GetValue$1(config, 'y', 0);
        radius = GetValue$1(config, 'radius', 1);
        barColor = GetValue$1(config, 'barColor', undefined);
        value = GetValue$1(config, 'value', 0);
      }

      var width = radius * 2;
      _this = _super.call(this, scene, x, y, width, width);
      _this.type = 'rexCircularProgress';
      _this.eventEmitter = GetValue$1(config, 'eventEmitter', _assertThisInitialized(_this));

      _this.addShape(new Circle().setName('track')).addShape(new Arc().setName('bar')).addShape(new Circle().setName('center'));

      _this.setRadius(radius);

      _this.setTrackColor(GetValue$1(config, 'trackColor', undefined));

      _this.setBarColor(barColor);

      _this.setCenterColor(GetValue$1(config, 'centerColor', undefined));

      _this.setThickness(GetValue$1(config, 'thickness', 0.2));

      _this.setStartAngle(GetValue$1(config, 'startAngle', DefaultStartAngle));

      _this.setAnticlockwise(GetValue$1(config, 'anticlockwise', false));

      var callback = GetValue$1(config, 'valuechangeCallback', null);

      if (callback !== null) {
        var scope = GetValue$1(config, 'valuechangeCallbackScope', undefined);

        _this.eventEmitter.on('valuechange', callback, scope);
      }

      _this.setEaseValuePropName('value').setEaseValueDuration(GetValue$1(config, 'easeValue.duration', 0)).setEaseValueFunction(GetValue$1(config, 'easeValue.ease', 'Linear'));

      _this.setValue(value);

      return _this;
    }

    _createClass(CircularProgress, [{
      key: "resize",
      value: function resize(width, height) {
        width = Math.floor(Math.min(width, height));

        if (width === this.width) {
          return this;
        }

        _get(_getPrototypeOf(CircularProgress.prototype), "resize", this).call(this, width, width);

        this.setRadius(width / 2);
        return this;
      }
    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(value) {
        value = Clamp(value, 0, 1);
        var oldValue = this._value;
        var valueChanged = oldValue != value;
        this.dirty = this.dirty || valueChanged;
        this._value = value;

        if (valueChanged) {
          this.eventEmitter.emit('valuechange', this._value, oldValue, this.eventEmitter);
        }
      }
    }, {
      key: "setValue",
      value: function setValue(value, min, max) {
        if (value === undefined || value === null) {
          return this;
        }

        if (min !== undefined) {
          value = Percent$1(value, min, max);
        }

        this.value = value;
        return this;
      }
    }, {
      key: "addValue",
      value: function addValue(inc, min, max) {
        if (min !== undefined) {
          inc = Percent$1(inc, min, max);
        }

        this.value += inc;
        return this;
      }
    }, {
      key: "getValue",
      value: function getValue(min, max) {
        var value = this.value;

        if (min !== undefined) {
          value = Linear$1(min, max, value);
        }

        return value;
      }
    }, {
      key: "radius",
      get: function get() {
        return this._radius;
      },
      set: function set(value) {
        this.dirty = this.dirty || this._radius != value;
        this._radius = value;
        var width = value * 2;
        this.resize(width, width);
      }
    }, {
      key: "setRadius",
      value: function setRadius(radius) {
        this.radius = radius;
        return this;
      }
    }, {
      key: "trackColor",
      get: function get() {
        return this._trackColor;
      },
      set: function set(value) {
        this.dirty = this.dirty || this._trackColor != value;
        this._trackColor = value;
      }
    }, {
      key: "setTrackColor",
      value: function setTrackColor(color) {
        this.trackColor = color;
        return this;
      }
    }, {
      key: "barColor",
      get: function get() {
        return this._barColor;
      },
      set: function set(value) {
        this.dirty = this.dirty || this._barColor != value;
        this._barColor = value;
      }
    }, {
      key: "setBarColor",
      value: function setBarColor(color) {
        this.barColor = color;
        return this;
      }
    }, {
      key: "startAngle",
      get: function get() {
        return this._startAngle;
      },
      set: function set(value) {
        this.dirty = this.dirty || this._startAngle != value;
        this._startAngle = value;
      }
    }, {
      key: "setStartAngle",
      value: function setStartAngle(angle) {
        this.startAngle = angle;
        return this;
      }
    }, {
      key: "anticlockwise",
      get: function get() {
        return this._anticlockwise;
      },
      set: function set(value) {
        this.dirty = this.dirty || this._anticlockwise != value;
        this._anticlockwise = value;
      }
    }, {
      key: "setAnticlockwise",
      value: function setAnticlockwise(anticlockwise) {
        if (anticlockwise === undefined) {
          anticlockwise = true;
        }

        this.anticlockwise = anticlockwise;
        return this;
      }
    }, {
      key: "thickness",
      get: function get() {
        return this._thickness;
      },
      set: function set(value) {
        value = Clamp(value, 0, 1);
        this.dirty = this.dirty || this._thickness != value;
        this._thickness = value;
      }
    }, {
      key: "setThickness",
      value: function setThickness(thickness) {
        this.thickness = thickness;
        return this;
      }
    }, {
      key: "centerColor",
      get: function get() {
        return this._centerColor;
      },
      set: function set(value) {
        this.dirty = this.dirty || this._centerColor != value;
        this._centerColor = value;
      }
    }, {
      key: "setCenterColor",
      value: function setCenterColor(color) {
        this.centerColor = color;
        return this;
      }
    }, {
      key: "updateShapes",
      value: function updateShapes() {
        var x = this.radius;
        var lineWidth = this.thickness * this.radius;
        var barRadius = this.radius - lineWidth / 2;
        var centerRadius = this.radius - lineWidth; // Track shape

        var trackShape = this.getShape('track');

        if (this.trackColor && lineWidth > 0) {
          trackShape.setCenterPosition(x, x).setRadius(barRadius).lineStyle(lineWidth, this.trackColor);
        } else {
          trackShape.reset();
        } // Bar shape


        var barShape = this.getShape('bar');

        if (this.barColor && barRadius > 0) {
          var anticlockwise, startAngle, endAngle;

          if (this.value === 1) {
            anticlockwise = false;
            startAngle = 0;
            endAngle = 360;
          } else {
            anticlockwise = this.anticlockwise;
            startAngle = RadToDeg(this.startAngle);
            var deltaAngle = 360 * (anticlockwise ? 1 - this.value : this.value);
            endAngle = deltaAngle + startAngle;
          }

          barShape.setCenterPosition(x, x).setRadius(barRadius).setAngle(startAngle, endAngle, anticlockwise).lineStyle(lineWidth, this.barColor);
        } else {
          barShape.reset();
        } // Center shape


        var centerShape = this.getShape('center');

        if (this.centerColor && centerRadius > 0) {
          centerShape.setCenterPosition(x, x).setRadius(centerRadius).fillStyle(this.centerColor);
        } else {
          centerShape.reset();
        }
      }
    }]);

    return CircularProgress;
  }(BaseShapes);

  Object.assign(CircularProgress.prototype, EaseValueMethods);

  var GetDistance = Phaser.Math.Distance.Between;

  var IsLocalPointInKnob = function IsLocalPointInKnob(knob, localX, localY) {
    var centerX = knob.width / 2;
    return GetDistance(centerX, centerX, localX, localY) <= centerX;
  };

  var GetAngle$1 = Phaser.Math.Angle.Between;
  var NormalizeAngle = Phaser.Math.Angle.Normalize;

  var OnTouchPad = function OnTouchPad(pointer, localX, localY) {
    if (!this.enable) {
      return;
    }

    if (!pointer.isDown) {
      return;
    }

    var knob = this.sizerChildren.knob;

    if (!IsLocalPointInKnob(knob, localX, localY)) {
      return;
    }

    var centerX = knob.width / 2;
    var startAngle = knob.startAngle;
    var endAngle = GetAngle$1(centerX, centerX, localX, localY);
    var deltaAngle = knob.anticlockwise ? startAngle - endAngle : endAngle - startAngle;
    var value = NormalizeAngle(deltaAngle) / (2 * Math.PI);
    this.stopEaseValue();

    if (this.easeValueDuration === 0 || Math.abs(this.value - value) < 0.1) {
      this.value = value;
    } else {
      this.easeValueTo(value);
    }
  };

  var InstallEvents$1 = function InstallEvents() {
    var knob = this.sizerChildren.knob;
    knob.setInteractive().on('pointerdown', OnTouchPad, this).on('pointermove', OnTouchPad, this);
  };

  var GetAngle = Phaser.Math.Angle.Between;
  var WrapAngle = Phaser.Math.Angle.Wrap;

  var OnPointerDown = function OnPointerDown(pointer, localX, localY) {
    if (!this.enable || this.panPointer) {
      return;
    }

    var knob = this.sizerChildren.knob;

    if (!IsLocalPointInKnob(knob, localX, localY)) {
      return;
    }

    OnPanStart.call(this, pointer);
  };

  var OnPointerMove = function OnPointerMove(pointer, localX, localY) {
    if (!this.enable) {
      return;
    }

    if (!pointer.isDown) {
      return;
    }

    var knob = this.sizerChildren.knob;

    switch (this.panState) {
      case TOUCH0:
        if (IsLocalPointInKnob(knob, localX, localY)) {
          OnPanStart.call(this, pointer);
        }

        break;

      case TOUCH1:
        if (IsLocalPointInKnob(knob, localX, localY)) {
          OnPan.call(this);
        } else {
          OnPanEnd.call(this);
        }

        break;
    }
  };

  var OnPointerUp = function OnPointerUp(pointer, localX, localY) {
    if (!this.enable || this.panPointer !== pointer) {
      return;
    }

    OnPanEnd.call(this);
  };

  var OnPanStart = function OnPanStart(pointer) {
    this.panPointer = pointer;
    this.panState = TOUCH1;
  };

  var OnPanEnd = function OnPanEnd() {
    this.panPointer = undefined;
    this.panState = TOUCH0;
  };

  var OnPan = function OnPan() {
    var p0 = this.panPointer.prevPosition,
        p1 = this.panPointer.position;
    var knob = this.sizerChildren.knob;
    var startAngle = GetAngle(knob.x, knob.y, p0.x, p0.y),
        endAngle = GetAngle(knob.x, knob.y, p1.x, p1.y);
    var deltaAngle = knob.anticlockwise ? startAngle - endAngle : endAngle - startAngle;
    var deltaValue = WrapAngle(deltaAngle) / (Math.PI * 2);
    this.stopEaseValue();
    this.value += deltaValue;
  };

  var TOUCH0 = 0;
  var TOUCH1 = 1;

  var InstallEvents = function InstallEvents() {
    var knob = this.sizerChildren.knob;
    knob.setInteractive().on('pointerdown', OnPointerDown, this).on('pointermove', OnPointerMove, this).on('pointerup', OnPointerUp, this);
    this.panPointer = undefined;
    this.panState = TOUCH0;
  };

  var SetTextFormatCallback = function SetTextFormatCallback(callback, scope) {
    this.textFormatCallback = callback;
    this.textFormatCallbackScope = scope;
    return this;
  };

  var GetFormatText = function GetFormatText(value) {
    if (value === undefined) {
      value = this.value;
    }

    var text;

    if (this.textFormatCallbackScope) {
      text = this.textFormatCallback(value);
    } else {
      text = this.textFormatCallback.call(this.textFormatCallbackScope, value);
    }

    return text;
  };

  var UpdateText = function UpdateText() {
    var textObject = this.sizerChildren.text;

    if (textObject) {
      textObject.setText(GetFormatText.call(this));

      if (textObject.layout) {
        textObject.layout();
      }
    }

    return this;
  };

  var TextObjectMethods = {
    setTextFormatCallback: SetTextFormatCallback,
    getFormatText: GetFormatText,
    updateText: UpdateText
  };

  var GetValue = Phaser.Utils.Objects.GetValue;
  var Linear = Phaser.Math.Linear;
  var Percent = Phaser.Math.Percent;
  var SnapTo = Phaser.Math.Snap.To;

  var Knob = /*#__PURE__*/function (_OverlapSizer) {
    _inherits(Knob, _OverlapSizer);

    var _super = _createSuper(Knob);

    function Knob(scene, config) {
      var _this;

      _classCallCheck(this, Knob);

      if (config === undefined) {
        config = {};
      } // Create sizer


      _this = _super.call(this, scene, config);
      _this.type = 'rexKnob';
      _this.eventEmitter = GetValue(config, 'eventEmitter', _assertThisInitialized(_this)); // Add elements

      var background = GetValue(config, 'background', undefined);
      var textObject = GetValue(config, 'text', undefined);

      if (background) {
        _this.addBackground(background);
      } // Get text object


      if (textObject) {
        // Don't draw text on knob directly
        config.textColor = undefined;
        config.textStrokeColor = undefined;

        _this.setTextFormatCallback(GetValue(config, 'textFormatCallback', undefined), GetValue(config, 'textFormatCallbackScope', undefined));
      } // Create circular progress object


      var knob = new CircularProgress(scene, config);
      knob.setDepth(GetValue(config, 'knobDepth', 0));
      knob._value = -1; // To trigger text updating

      scene.add.existing(knob);

      _this.add(knob, 'knob');

      if (textObject) {
        _this.add(textObject, 'text', 'center', 0, false);
      }

      _this.addChildrenMap('background', background);

      _this.addChildrenMap('knob', knob);

      _this.addChildrenMap('text', textObject);

      var callback = GetValue(config, 'valuechangeCallback', null);

      if (callback !== null) {
        var scope = GetValue(config, 'valuechangeCallbackScope', undefined);

        _this.eventEmitter.on('valuechange', callback, scope);
      }

      _this.setEnable(GetValue(config, 'enable', undefined));

      _this.setEaseValuePropName('value').setEaseValueDuration(GetValue(config, 'easeValue.duration', 0)).setEaseValueFunction(GetValue(config, 'easeValue.ease', 'Linear'));

      _this.setGap(GetValue(config, 'gap', undefined));

      _this.setValue(GetValue(config, 'value', 0), GetValue(config, 'min', undefined), GetValue(config, 'max', undefined)); // Input


      var inputMode = GetValue(config, 'input', 0);

      if (typeof inputMode === 'string') {
        inputMode = INPUTMODE[inputMode];
      }

      switch (inputMode) {
        case 0:
          // 'pan'
          InstallEvents.call(_assertThisInitialized(_this));
          break;

        case 1:
          // 'click'
          InstallEvents$1.call(_assertThisInitialized(_this));
          break;
      }

      return _this;
    }

    _createClass(Knob, [{
      key: "setEnable",
      value: function setEnable(enable) {
        if (enable === undefined) {
          enable = true;
        }

        this.enable = enable;
        return this;
      }
    }, {
      key: "setGap",
      value: function setGap(gap) {
        this.gap = gap;
        return this;
      }
    }, {
      key: "value",
      get: function get() {
        return this.sizerChildren.knob.value;
      },
      set: function set(value) {
        if (this.gap !== undefined) {
          value = SnapTo(value, this.gap);
        }

        var oldValue = this.value;
        this.sizerChildren.knob.value = value;
        var newValue = this.value;

        if (oldValue !== newValue) {
          this.updateText();
          this.eventEmitter.emit('valuechange', newValue, oldValue, this.eventEmitter);
        }
      }
    }, {
      key: "setValue",
      value: function setValue(value, min, max) {
        if (value === undefined || value === null) {
          return this;
        }

        if (min !== undefined) {
          value = Percent(value, min, max);
        }

        this.value = value;
        return this;
      }
    }, {
      key: "addValue",
      value: function addValue(inc, min, max) {
        if (min !== undefined) {
          inc = Percent(inc, min, max);
        }

        this.value += inc;
        return this;
      }
    }, {
      key: "getValue",
      value: function getValue(min, max) {
        var value = this.value;

        if (min !== undefined) {
          value = Linear(min, max, value);
        }

        return value;
      }
    }]);

    return Knob;
  }(OverlapSizer);

  var INPUTMODE = {
    pan: 0,
    drag: 0,
    click: 1,
    none: -1
  };
  Object.assign(Knob.prototype, TextObjectMethods, EaseValueMethods);

  return Knob;

})));
