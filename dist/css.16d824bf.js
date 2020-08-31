// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.body1{\n    background-color:#EFA41C;\n    margin:30px auto;\n    width:126px;\n    height:200px;\n    border-radius:300px 300px 200px 200px;\n    position: relative;\n    \n    }\n    .ears{\n        width:36px;\n        height:70px;\n        border-radius:100% 100% 0 0;\n        background-color:#EFA41C;\n        position: absolute;\n        z-index: -1;\n    }\n    .ears::before{\n    content:'';\n    display: block;\n    width: 24px;\n    height:40px;\n    background-color: #E86029;\n    position:absolute;\n    left:4px;\n    top:15px;\n    border-radius:100% 100% 0 0;\n    \n    }\n    .ears.left{\n        top:-20px;\n        left:2px;\n    }\n    .ears.right{\n        top:-20px;\n        right:2px;\n    }\n    .ears.left::before{\n      top:18px;\n      left:6px\n    }\n    .eyebrows{\n        width:16px;\n        height:12px;\n        border-radius:8px;\n        background-color:white;\n        position: absolute;\n        ;\n        transform: translate(-50% ,-50%);\n        top:50%;\n    }\n    .eyebrows.left{\n    left:30px;\n    top:22px;\n    }\n    .eyebrows.right{\n        right:22px;\n        top:20px;\n    }\n    .nose{\n        background: #512E27;\n        width: 20px;\n        height: 10px;\n        border-radius: 0 0 30px 30px;\n        position: relative;\n       left:50%;\n       top:45px;\n        transform: translateX(-50%);\n      }\n      .eye{\n        width: 20px;\n        height:20px;\n        border-radius:50%;\n        border:3px solid black;\n        position: absolute;\n        top:34px;\n      \n      }\n      .eye::after{\n        content:'';\n        display: block;\n        width: 23px; \n        height:12px;\n        background-color:#EFA41C;\n        position:absolute;\n        left:-3px;\n        top:50%;\n    \n      }\n      .eye.left{\n    left:30px;\n      }\n      .eye.right{\n    right:30px;\n      }\n      .mouth{\n        width: 20px;\n        height: 20px;\n      background-color:#EA7775;\n    \n        position: absolute;\n        top:62px;\n        left: 0;\n        right: 0;\n        margin: auto;\n        border-radius: 120px 120px 0 0;\n        transform: rotate(180deg);\n      }\n    .whiskers{\n        width: 20px;\n        height: 10px;\n        border:3px solid black;\n       position: absolute;\n       z-index: 3;\n        \n    }\n    .whiskers::after{\n        content:'';\n        display: block;\n        width:10px;\n        height:12px;\n        border-radius:5px;\n        background-color:#EFA41C;\n        position: absolute;\n        top:-6px;\n        left:1px\n    }\n    .whiskers.left{\n        border-top:none;\n         border-radius: 0 0 60px 60px; \n         left:50%;\n         top:60px;\n    \n    \n    }\n    .whiskers.right{\n        border-top:none;\n         border-radius: 0 0 60px 60px; \n         right:50%;\n         top:60px;\n    \n    \n    }\n    .bandana{\n        width:126px;\n        height:10px;\n        background-color:#5DBDB9;\n        position: absolute;\n        top:90px;\n        box-shadow: inset -5px -5px rgba(76,161,160, 0.5);\n    }\n    .bandana>.top{\n    width: 25px; \n    height: 25px;\n    background-color:#5DBDB9;\n      border-radius: 25px 0px;\n      position:absolute;\n      right:-23px;\n      top:-20px;\n      box-shadow:inset  -5px -5px rgba(79,163,161, 0.5)\n    }\n    .bandana>.bottom{\n        width: 25px; \n        height:25px;\n        background-color:#5DBDB9;\n          border-radius: 0 25px;\n          position:absolute;\n          right:-25px;\n          top:-8px;\n          transform:rotate(-30deg) ;\n          box-shadow:inset  -5px -5px rgba(79,163,161, 0.5)\n        }\n        .stomach{\n            width: 72px;\n            height:72px;\n            position:absolute;\n            left:50%;\n            top:105px;\n            transform:translateX(-50%);\n            background-color:white;\n            border-radius:0 0 36px 36px;\n            box-shadow:inset 5px 5px rgb(222,222,222,0.5)\n    \n        }\n        .legs{\n            /* width:140px;\n            position:absolute;\n            top:180px;\n            height:30px;\n            background-color:white;\n            border-radius: */\n        }\n        .leg{\n            width:30px;\n            height:15px;\n            border-radius:15px 15px 0 0;\n            background-color:white;\n            position:absolute;\n            bottom:0px;\n            box-shadow:inset 0 -5px rgb(222,222,222,0.5)\n          \n          \n        }\n        .leg::after{\n            content:'';\n            display:block;\n            width:30px;\n            height:15px;\n            border-radius:15px 15px 0 0;\n            background-color:white;\n            position:absolute;\n            bottom:0px;\n            z-index:-5;\n            box-shadow:inset 0 -4px rgb(222,222,222,0.5)\n           \n        }\n        .leg.left{\n            left:25px;\n        }\n        .leg.left::after{\n            left:-25px;\n    \n        }\n        .leg.right{\n            right:25px;\n        }\n        .leg.right:after{\n            right:-25px;\n        }\n        .tail{\n            width:60px;\n            height:12px;\n            background-color:#EFA41C;\n            border-radius:5px ;\n            position:absolute;\n            top:140px;\n            left:-40px;\n            transition: 300ms;\n            transform: rotate(-30deg);\n            animation:move 200ms infinite  alternate; \n    \n        }\n        @keyframes move{\n            0%{transform: rotate(30deg);}\n            100%{transform: rotate(40deg);}\n        }\n        ";
var _default = string;
exports.default = _default;
},{}],"E:/user/Downloads/npm/node_global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50898" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["E:/user/Downloads/npm/node_global/node_modules/parcel/src/builtins/hmr-runtime.js","css.js"], null)
//# sourceMappingURL=css.16d824bf.js.map