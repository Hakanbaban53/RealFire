function e(e, n, t, r) {
  Object.defineProperty(e, n, {
    get: t,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
function n(e) {
  return e && e.__esModule ? e.default : e;
}
var t =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  r = {},
  o = {},
  l = t.parcelRequire69a8;
null == l &&
  (((l = function (e) {
    if (e in r) return r[e].exports;
    if (e in o) {
      var n = o[e];
      delete o[e];
      var t = { id: e, exports: {} };
      return (r[e] = t), n.call(t.exports, t, t.exports), t.exports;
    }
    var l = new Error("Cannot find module '" + e + "'");
    throw ((l.code = "MODULE_NOT_FOUND"), l);
  }).register = function (e, n) {
    o[e] = n;
  }),
  (t.parcelRequire69a8 = l)),
  l.register("cjuLU", function (n, t) {
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r, o, a;
    e(
      n.exports,
      "Fragment",
      () => r,
      (e) => (r = e)
    ),
      e(
        n.exports,
        "jsx",
        () => o,
        (e) => (o = e)
      ),
      e(
        n.exports,
        "jsxs",
        () => a,
        (e) => (a = e)
      );
    var i = l("fYo6y"),
      s = Symbol.for("react.element"),
      u = Symbol.for("react.fragment"),
      c = Object.prototype.hasOwnProperty,
      d =
        i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      f = { key: !0, ref: !0, __self: !0, __source: !0 };
    function p(e, n, t) {
      var r,
        o = {},
        l = null,
        a = null;
      for (r in (void 0 !== t && (l = "" + t),
      void 0 !== n.key && (l = "" + n.key),
      void 0 !== n.ref && (a = n.ref),
      n))
        c.call(n, r) && !f.hasOwnProperty(r) && (o[r] = n[r]);
      if (e && e.defaultProps)
        for (r in (n = e.defaultProps)) void 0 === o[r] && (o[r] = n[r]);
      return {
        $$typeof: s,
        type: e,
        key: l,
        ref: a,
        props: o,
        _owner: d.current,
      };
    }
    (r = u), (o = p), (a = p);
  }),
  l.register("fYo6y", function (e, n) {
    e.exports = l("ha5xJ");
  }),
  l.register("ha5xJ", function (n, t) {
    /**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r,
      o,
      l,
      a,
      i,
      s,
      u,
      c,
      d,
      f,
      p,
      h,
      g,
      m,
      b,
      y,
      v,
      k,
      x,
      w,
      S,
      E,
      C,
      N,
      L,
      A,
      T,
      P,
      F,
      O,
      _,
      R,
      D,
      I,
      j;
    e(
      n.exports,
      "Children",
      () => r,
      (e) => (r = e)
    ),
      e(
        n.exports,
        "Component",
        () => o,
        (e) => (o = e)
      ),
      e(
        n.exports,
        "Fragment",
        () => l,
        (e) => (l = e)
      ),
      e(
        n.exports,
        "Profiler",
        () => a,
        (e) => (a = e)
      ),
      e(
        n.exports,
        "PureComponent",
        () => i,
        (e) => (i = e)
      ),
      e(
        n.exports,
        "StrictMode",
        () => s,
        (e) => (s = e)
      ),
      e(
        n.exports,
        "Suspense",
        () => u,
        (e) => (u = e)
      ),
      e(
        n.exports,
        "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
        () => c,
        (e) => (c = e)
      ),
      e(
        n.exports,
        "cloneElement",
        () => d,
        (e) => (d = e)
      ),
      e(
        n.exports,
        "createContext",
        () => f,
        (e) => (f = e)
      ),
      e(
        n.exports,
        "createElement",
        () => p,
        (e) => (p = e)
      ),
      e(
        n.exports,
        "createFactory",
        () => h,
        (e) => (h = e)
      ),
      e(
        n.exports,
        "createRef",
        () => g,
        (e) => (g = e)
      ),
      e(
        n.exports,
        "forwardRef",
        () => m,
        (e) => (m = e)
      ),
      e(
        n.exports,
        "isValidElement",
        () => b,
        (e) => (b = e)
      ),
      e(
        n.exports,
        "lazy",
        () => y,
        (e) => (y = e)
      ),
      e(
        n.exports,
        "memo",
        () => v,
        (e) => (v = e)
      ),
      e(
        n.exports,
        "startTransition",
        () => k,
        (e) => (k = e)
      ),
      e(
        n.exports,
        "unstable_act",
        () => x,
        (e) => (x = e)
      ),
      e(
        n.exports,
        "useCallback",
        () => w,
        (e) => (w = e)
      ),
      e(
        n.exports,
        "useContext",
        () => S,
        (e) => (S = e)
      ),
      e(
        n.exports,
        "useDebugValue",
        () => E,
        (e) => (E = e)
      ),
      e(
        n.exports,
        "useDeferredValue",
        () => C,
        (e) => (C = e)
      ),
      e(
        n.exports,
        "useEffect",
        () => N,
        (e) => (N = e)
      ),
      e(
        n.exports,
        "useId",
        () => L,
        (e) => (L = e)
      ),
      e(
        n.exports,
        "useImperativeHandle",
        () => A,
        (e) => (A = e)
      ),
      e(
        n.exports,
        "useInsertionEffect",
        () => T,
        (e) => (T = e)
      ),
      e(
        n.exports,
        "useLayoutEffect",
        () => P,
        (e) => (P = e)
      ),
      e(
        n.exports,
        "useMemo",
        () => F,
        (e) => (F = e)
      ),
      e(
        n.exports,
        "useReducer",
        () => O,
        (e) => (O = e)
      ),
      e(
        n.exports,
        "useRef",
        () => _,
        (e) => (_ = e)
      ),
      e(
        n.exports,
        "useState",
        () => R,
        (e) => (R = e)
      ),
      e(
        n.exports,
        "useSyncExternalStore",
        () => D,
        (e) => (D = e)
      ),
      e(
        n.exports,
        "useTransition",
        () => I,
        (e) => (I = e)
      ),
      e(
        n.exports,
        "version",
        () => j,
        (e) => (j = e)
      );
    var z = Symbol.for("react.element"),
      M = Symbol.for("react.portal"),
      U = Symbol.for("react.fragment"),
      q = Symbol.for("react.strict_mode"),
      B = Symbol.for("react.profiler"),
      H = Symbol.for("react.provider"),
      $ = Symbol.for("react.context"),
      V = Symbol.for("react.forward_ref"),
      W = Symbol.for("react.suspense"),
      G = Symbol.for("react.memo"),
      Q = Symbol.for("react.lazy"),
      Y = Symbol.iterator;
    var K = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      X = Object.assign,
      J = {};
    function Z(e, n, t) {
      (this.props = e),
        (this.context = n),
        (this.refs = J),
        (this.updater = t || K);
    }
    function ee() {}
    function ne(e, n, t) {
      (this.props = e),
        (this.context = n),
        (this.refs = J),
        (this.updater = t || K);
    }
    (Z.prototype.isReactComponent = {}),
      (Z.prototype.setState = function (e, n) {
        if ("object" != typeof e && "function" != typeof e && null != e)
          throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, n, "setState");
      }),
      (Z.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (ee.prototype = Z.prototype);
    var te = (ne.prototype = new ee());
    (te.constructor = ne), X(te, Z.prototype), (te.isPureReactComponent = !0);
    var re = Array.isArray,
      oe = Object.prototype.hasOwnProperty,
      le = { current: null },
      ae = { key: !0, ref: !0, __self: !0, __source: !0 };
    function ie(e, n, t) {
      var r,
        o = {},
        l = null,
        a = null;
      if (null != n)
        for (r in (void 0 !== n.ref && (a = n.ref),
        void 0 !== n.key && (l = "" + n.key),
        n))
          oe.call(n, r) && !ae.hasOwnProperty(r) && (o[r] = n[r]);
      var i = arguments.length - 2;
      if (1 === i) o.children = t;
      else if (1 < i) {
        for (var s = Array(i), u = 0; u < i; u++) s[u] = arguments[u + 2];
        o.children = s;
      }
      if (e && e.defaultProps)
        for (r in (i = e.defaultProps)) void 0 === o[r] && (o[r] = i[r]);
      return {
        $$typeof: z,
        type: e,
        key: l,
        ref: a,
        props: o,
        _owner: le.current,
      };
    }
    function se(e) {
      return "object" == typeof e && null !== e && e.$$typeof === z;
    }
    var ue = /\/+/g;
    function ce(e, n) {
      return "object" == typeof e && null !== e && null != e.key
        ? (function (e) {
            var n = { "=": "=0", ":": "=2" };
            return (
              "$" +
              e.replace(/[=:]/g, function (e) {
                return n[e];
              })
            );
          })("" + e.key)
        : n.toString(36);
    }
    function de(e, n, t, r, o) {
      var l = typeof e;
      ("undefined" !== l && "boolean" !== l) || (e = null);
      var a = !1;
      if (null === e) a = !0;
      else
        switch (l) {
          case "string":
          case "number":
            a = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case z:
              case M:
                a = !0;
            }
        }
      if (a)
        return (
          (o = o((a = e))),
          (e = "" === r ? "." + ce(a, 0) : r),
          re(o)
            ? ((t = ""),
              null != e && (t = e.replace(ue, "$&/") + "/"),
              de(o, n, t, "", function (e) {
                return e;
              }))
            : null != o &&
              (se(o) &&
                (o = (function (e, n) {
                  return {
                    $$typeof: z,
                    type: e.type,
                    key: n,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner,
                  };
                })(
                  o,
                  t +
                    (!o.key || (a && a.key === o.key)
                      ? ""
                      : ("" + o.key).replace(ue, "$&/") + "/") +
                    e
                )),
              n.push(o)),
          1
        );
      if (((a = 0), (r = "" === r ? "." : r + ":"), re(e)))
        for (var i = 0; i < e.length; i++) {
          var s = r + ce((l = e[i]), i);
          a += de(l, n, t, s, o);
        }
      else if (
        ((s = (function (e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (Y && e[Y]) || e["@@iterator"])
            ? e
            : null;
        })(e)),
        "function" == typeof s)
      )
        for (e = s.call(e), i = 0; !(l = e.next()).done; )
          a += de((l = l.value), n, t, (s = r + ce(l, i++)), o);
      else if ("object" === l)
        throw (
          ((n = String(e)),
          Error(
            "Objects are not valid as a React child (found: " +
              ("[object Object]" === n
                ? "object with keys {" + Object.keys(e).join(", ") + "}"
                : n) +
              "). If you meant to render a collection of children, use an array instead."
          ))
        );
      return a;
    }
    function fe(e, n, t) {
      if (null == e) return e;
      var r = [],
        o = 0;
      return (
        de(e, r, "", "", function (e) {
          return n.call(t, e, o++);
        }),
        r
      );
    }
    function pe(e) {
      if (-1 === e._status) {
        var n = e._result;
        (n = n()).then(
          function (n) {
            (0 !== e._status && -1 !== e._status) ||
              ((e._status = 1), (e._result = n));
          },
          function (n) {
            (0 !== e._status && -1 !== e._status) ||
              ((e._status = 2), (e._result = n));
          }
        ),
          -1 === e._status && ((e._status = 0), (e._result = n));
      }
      if (1 === e._status) return e._result.default;
      throw e._result;
    }
    var he = { current: null },
      ge = { transition: null };
    (r = {
      map: fe,
      forEach: function (e, n, t) {
        fe(
          e,
          function () {
            n.apply(this, arguments);
          },
          t
        );
      },
      count: function (e) {
        var n = 0;
        return (
          fe(e, function () {
            n++;
          }),
          n
        );
      },
      toArray: function (e) {
        return (
          fe(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!se(e))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return e;
      },
    }),
      (o = Z),
      (l = U),
      (a = B),
      (i = ne),
      (s = q),
      (u = W),
      (c = {
        ReactCurrentDispatcher: he,
        ReactCurrentBatchConfig: ge,
        ReactCurrentOwner: le,
      }),
      (d = function (e, n, t) {
        if (null == e)
          throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
              e +
              "."
          );
        var r = X({}, e.props),
          o = e.key,
          l = e.ref,
          a = e._owner;
        if (null != n) {
          if (
            (void 0 !== n.ref && ((l = n.ref), (a = le.current)),
            void 0 !== n.key && (o = "" + n.key),
            e.type && e.type.defaultProps)
          )
            var i = e.type.defaultProps;
          for (s in n)
            oe.call(n, s) &&
              !ae.hasOwnProperty(s) &&
              (r[s] = void 0 === n[s] && void 0 !== i ? i[s] : n[s]);
        }
        var s = arguments.length - 2;
        if (1 === s) r.children = t;
        else if (1 < s) {
          i = Array(s);
          for (var u = 0; u < s; u++) i[u] = arguments[u + 2];
          r.children = i;
        }
        return {
          $$typeof: z,
          type: e.type,
          key: o,
          ref: l,
          props: r,
          _owner: a,
        };
      }),
      (f = function (e) {
        return (
          ((e = {
            $$typeof: $,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          }).Provider = { $$typeof: H, _context: e }),
          (e.Consumer = e)
        );
      }),
      (p = ie),
      (h = function (e) {
        var n = ie.bind(null, e);
        return (n.type = e), n;
      }),
      (g = function () {
        return { current: null };
      }),
      (m = function (e) {
        return { $$typeof: V, render: e };
      }),
      (b = se),
      (y = function (e) {
        return {
          $$typeof: Q,
          _payload: { _status: -1, _result: e },
          _init: pe,
        };
      }),
      (v = function (e, n) {
        return { $$typeof: G, type: e, compare: void 0 === n ? null : n };
      }),
      (k = function (e) {
        var n = ge.transition;
        ge.transition = {};
        try {
          e();
        } finally {
          ge.transition = n;
        }
      }),
      (x = function () {
        throw Error("act(...) is not supported in production builds of React.");
      }),
      (w = function (e, n) {
        return he.current.useCallback(e, n);
      }),
      (S = function (e) {
        return he.current.useContext(e);
      }),
      (E = function () {}),
      (C = function (e) {
        return he.current.useDeferredValue(e);
      }),
      (N = function (e, n) {
        return he.current.useEffect(e, n);
      }),
      (L = function () {
        return he.current.useId();
      }),
      (A = function (e, n, t) {
        return he.current.useImperativeHandle(e, n, t);
      }),
      (T = function (e, n) {
        return he.current.useInsertionEffect(e, n);
      }),
      (P = function (e, n) {
        return he.current.useLayoutEffect(e, n);
      }),
      (F = function (e, n) {
        return he.current.useMemo(e, n);
      }),
      (O = function (e, n, t) {
        return he.current.useReducer(e, n, t);
      }),
      (_ = function (e) {
        return he.current.useRef(e);
      }),
      (R = function (e) {
        return he.current.useState(e);
      }),
      (D = function (e, n, t) {
        return he.current.useSyncExternalStore(e, n, t);
      }),
      (I = function () {
        return he.current.useTransition();
      }),
      (j = "18.2.0");
  }),
  l.register("gAtBI", function (n, t) {
    /**
     * @license React
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r, o, a, i, s, u, c, d, f, p, h, g;
    e(
      n.exports,
      "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
      () => r,
      (e) => (r = e)
    ),
      e(
        n.exports,
        "createPortal",
        () => o,
        (e) => (o = e)
      ),
      e(
        n.exports,
        "createRoot",
        () => a,
        (e) => (a = e)
      ),
      e(
        n.exports,
        "findDOMNode",
        () => i,
        (e) => (i = e)
      ),
      e(
        n.exports,
        "flushSync",
        () => s,
        (e) => (s = e)
      ),
      e(
        n.exports,
        "hydrate",
        () => u,
        (e) => (u = e)
      ),
      e(
        n.exports,
        "hydrateRoot",
        () => c,
        (e) => (c = e)
      ),
      e(
        n.exports,
        "render",
        () => d,
        (e) => (d = e)
      ),
      e(
        n.exports,
        "unmountComponentAtNode",
        () => f,
        (e) => (f = e)
      ),
      e(
        n.exports,
        "unstable_batchedUpdates",
        () => p,
        (e) => (p = e)
      ),
      e(
        n.exports,
        "unstable_renderSubtreeIntoContainer",
        () => h,
        (e) => (h = e)
      ),
      e(
        n.exports,
        "version",
        () => g,
        (e) => (g = e)
      );
    var m = l("fYo6y"),
      b = l("6qr1r");
    function y(e) {
      for (
        var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          t = 1;
        t < arguments.length;
        t++
      )
        n += "&args[]=" + encodeURIComponent(arguments[t]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        n +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var v = new Set(),
      k = {};
    function x(e, n) {
      w(e, n), w(e + "Capture", n);
    }
    function w(e, n) {
      for (k[e] = n, e = 0; e < n.length; e++) v.add(n[e]);
    }
    var S = !(
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      ),
      E = Object.prototype.hasOwnProperty,
      C =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      N = {},
      L = {};
    function A(e, n, t, r, o, l, a) {
      (this.acceptsBooleans = 2 === n || 3 === n || 4 === n),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = t),
        (this.propertyName = e),
        (this.type = n),
        (this.sanitizeURL = l),
        (this.removeEmptyString = a);
    }
    var T = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (e) {
        T[e] = new A(e, 0, !1, e, null, !1, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (e) {
        var n = e[0];
        T[n] = new A(n, 1, !1, e[1], null, !1, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
        e
      ) {
        T[e] = new A(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha",
      ].forEach(function (e) {
        T[e] = new A(e, 2, !1, e, null, !1, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function (e) {
          T[e] = new A(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function (e) {
        T[e] = new A(e, 3, !0, e, null, !1, !1);
      }),
      ["capture", "download"].forEach(function (e) {
        T[e] = new A(e, 4, !1, e, null, !1, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (e) {
        T[e] = new A(e, 6, !1, e, null, !1, !1);
      }),
      ["rowSpan", "start"].forEach(function (e) {
        T[e] = new A(e, 5, !1, e.toLowerCase(), null, !1, !1);
      });
    var P = /[\-:]([a-z])/g;
    function F(e) {
      return e[1].toUpperCase();
    }
    function O(e, n, t, r) {
      var o = T.hasOwnProperty(n) ? T[n] : null;
      (null !== o
        ? 0 !== o.type
        : r ||
          !(2 < n.length) ||
          ("o" !== n[0] && "O" !== n[0]) ||
          ("n" !== n[1] && "N" !== n[1])) &&
        ((function (e, n, t, r) {
          if (
            null == n ||
            (function (e, n, t, r) {
              if (null !== t && 0 === t.type) return !1;
              switch (typeof n) {
                case "function":
                case "symbol":
                  return !0;
                case "boolean":
                  return (
                    !r &&
                    (null !== t
                      ? !t.acceptsBooleans
                      : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                        "aria-" !== e)
                  );
                default:
                  return !1;
              }
            })(e, n, t, r)
          )
            return !0;
          if (r) return !1;
          if (null !== t)
            switch (t.type) {
              case 3:
                return !n;
              case 4:
                return !1 === n;
              case 5:
                return isNaN(n);
              case 6:
                return isNaN(n) || 1 > n;
            }
          return !1;
        })(n, t, o, r) && (t = null),
        r || null === o
          ? (function (e) {
              return (
                !!E.call(L, e) ||
                (!E.call(N, e) && (C.test(e) ? (L[e] = !0) : ((N[e] = !0), !1)))
              );
            })(n) &&
            (null === t ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
          : o.mustUseProperty
          ? (e[o.propertyName] = null === t ? 3 !== o.type && "" : t)
          : ((n = o.attributeName),
            (r = o.attributeNamespace),
            null === t
              ? e.removeAttribute(n)
              : ((t =
                  3 === (o = o.type) || (4 === o && !0 === t) ? "" : "" + t),
                r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var n = e.replace(P, F);
        T[n] = new A(n, 1, !1, e, null, !1, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function (e) {
          var n = e.replace(P, F);
          T[n] = new A(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
        var n = e.replace(P, F);
        T[n] = new A(
          n,
          1,
          !1,
          e,
          "http://www.w3.org/XML/1998/namespace",
          !1,
          !1
        );
      }),
      ["tabIndex", "crossOrigin"].forEach(function (e) {
        T[e] = new A(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (T.xlinkHref = new A(
        "xlinkHref",
        1,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0,
        !1
      )),
      ["src", "href", "action", "formAction"].forEach(function (e) {
        T[e] = new A(e, 1, !1, e.toLowerCase(), null, !0, !0);
      });
    var _ = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      R = Symbol.for("react.element"),
      D = Symbol.for("react.portal"),
      I = Symbol.for("react.fragment"),
      j = Symbol.for("react.strict_mode"),
      z = Symbol.for("react.profiler"),
      M = Symbol.for("react.provider"),
      U = Symbol.for("react.context"),
      q = Symbol.for("react.forward_ref"),
      B = Symbol.for("react.suspense"),
      H = Symbol.for("react.suspense_list"),
      $ = Symbol.for("react.memo"),
      V = Symbol.for("react.lazy");
    Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
    var W = Symbol.for("react.offscreen");
    Symbol.for("react.legacy_hidden"),
      Symbol.for("react.cache"),
      Symbol.for("react.tracing_marker");
    var G = Symbol.iterator;
    function Q(e) {
      return null === e || "object" != typeof e
        ? null
        : "function" == typeof (e = (G && e[G]) || e["@@iterator"])
        ? e
        : null;
    }
    var Y,
      K = Object.assign;
    function X(e) {
      if (void 0 === Y)
        try {
          throw Error();
        } catch (e) {
          var n = e.stack.trim().match(/\n( *(at )?)/);
          Y = (n && n[1]) || "";
        }
      return "\n" + Y + e;
    }
    var J = !1;
    function Z(e, n) {
      if (!e || J) return "";
      J = !0;
      var t = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (n)
          if (
            ((n = function () {
              throw Error();
            }),
            Object.defineProperty(n.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            "object" == typeof Reflect && Reflect.construct)
          ) {
            try {
              Reflect.construct(n, []);
            } catch (e) {
              var r = e;
            }
            Reflect.construct(e, [], n);
          } else {
            try {
              n.call();
            } catch (e) {
              r = e;
            }
            e.call(n.prototype);
          }
        else {
          try {
            throw Error();
          } catch (e) {
            r = e;
          }
          e();
        }
      } catch (n) {
        if (n && r && "string" == typeof n.stack) {
          for (
            var o = n.stack.split("\n"),
              l = r.stack.split("\n"),
              a = o.length - 1,
              i = l.length - 1;
            1 <= a && 0 <= i && o[a] !== l[i];

          )
            i--;
          for (; 1 <= a && 0 <= i; a--, i--)
            if (o[a] !== l[i]) {
              if (1 !== a || 1 !== i)
                do {
                  if ((a--, 0 > --i || o[a] !== l[i])) {
                    var s = "\n" + o[a].replace(" at new ", " at ");
                    return (
                      e.displayName &&
                        s.includes("<anonymous>") &&
                        (s = s.replace("<anonymous>", e.displayName)),
                      s
                    );
                  }
                } while (1 <= a && 0 <= i);
              break;
            }
        }
      } finally {
        (J = !1), (Error.prepareStackTrace = t);
      }
      return (e = e ? e.displayName || e.name : "") ? X(e) : "";
    }
    function ee(e) {
      switch (e.tag) {
        case 5:
          return X(e.type);
        case 16:
          return X("Lazy");
        case 13:
          return X("Suspense");
        case 19:
          return X("SuspenseList");
        case 0:
        case 2:
        case 15:
          return (e = Z(e.type, !1));
        case 11:
          return (e = Z(e.type.render, !1));
        case 1:
          return (e = Z(e.type, !0));
        default:
          return "";
      }
    }
    function ne(e) {
      if (null == e) return null;
      if ("function" == typeof e) return e.displayName || e.name || null;
      if ("string" == typeof e) return e;
      switch (e) {
        case I:
          return "Fragment";
        case D:
          return "Portal";
        case z:
          return "Profiler";
        case j:
          return "StrictMode";
        case B:
          return "Suspense";
        case H:
          return "SuspenseList";
      }
      if ("object" == typeof e)
        switch (e.$$typeof) {
          case U:
            return (e.displayName || "Context") + ".Consumer";
          case M:
            return (e._context.displayName || "Context") + ".Provider";
          case q:
            var n = e.render;
            return (
              (e = e.displayName) ||
                (e =
                  "" !== (e = n.displayName || n.name || "")
                    ? "ForwardRef(" + e + ")"
                    : "ForwardRef"),
              e
            );
          case $:
            return null !== (n = e.displayName || null)
              ? n
              : ne(e.type) || "Memo";
          case V:
            (n = e._payload), (e = e._init);
            try {
              return ne(e(n));
            } catch (e) {}
        }
      return null;
    }
    function te(e) {
      var n = e.type;
      switch (e.tag) {
        case 24:
          return "Cache";
        case 9:
          return (n.displayName || "Context") + ".Consumer";
        case 10:
          return (n._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return (
            (e = (e = n.render).displayName || e.name || ""),
            n.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
          );
        case 7:
          return "Fragment";
        case 5:
          return n;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return ne(n);
        case 8:
          return n === j ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if ("function" == typeof n) return n.displayName || n.name || null;
          if ("string" == typeof n) return n;
      }
      return null;
    }
    function re(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
        case "object":
          return e;
        default:
          return "";
      }
    }
    function oe(e) {
      var n = e.type;
      return (
        (e = e.nodeName) &&
        "input" === e.toLowerCase() &&
        ("checkbox" === n || "radio" === n)
      );
    }
    function le(e) {
      e._valueTracker ||
        (e._valueTracker = (function (e) {
          var n = oe(e) ? "checked" : "value",
            t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
            r = "" + e[n];
          if (
            !e.hasOwnProperty(n) &&
            void 0 !== t &&
            "function" == typeof t.get &&
            "function" == typeof t.set
          ) {
            var o = t.get,
              l = t.set;
            return (
              Object.defineProperty(e, n, {
                configurable: !0,
                get: function () {
                  return o.call(this);
                },
                set: function (e) {
                  (r = "" + e), l.call(this, e);
                },
              }),
              Object.defineProperty(e, n, { enumerable: t.enumerable }),
              {
                getValue: function () {
                  return r;
                },
                setValue: function (e) {
                  r = "" + e;
                },
                stopTracking: function () {
                  (e._valueTracker = null), delete e[n];
                },
              }
            );
          }
        })(e));
    }
    function ae(e) {
      if (!e) return !1;
      var n = e._valueTracker;
      if (!n) return !0;
      var t = n.getValue(),
        r = "";
      return (
        e && (r = oe(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r) !== t && (n.setValue(e), !0)
      );
    }
    function ie(e) {
      if (
        void 0 ===
        (e = e || ("undefined" != typeof document ? document : void 0))
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch (n) {
        return e.body;
      }
    }
    function se(e, n) {
      var t = n.checked;
      return K({}, n, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != t ? t : e._wrapperState.initialChecked,
      });
    }
    function ue(e, n) {
      var t = null == n.defaultValue ? "" : n.defaultValue,
        r = null != n.checked ? n.checked : n.defaultChecked;
      (t = re(null != n.value ? n.value : t)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: t,
          controlled:
            "checkbox" === n.type || "radio" === n.type
              ? null != n.checked
              : null != n.value,
        });
    }
    function ce(e, n) {
      null != (n = n.checked) && O(e, "checked", n, !1);
    }
    function de(e, n) {
      ce(e, n);
      var t = re(n.value),
        r = n.type;
      if (null != t)
        "number" === r
          ? ((0 === t && "" === e.value) || e.value != t) && (e.value = "" + t)
          : e.value !== "" + t && (e.value = "" + t);
      else if ("submit" === r || "reset" === r)
        return void e.removeAttribute("value");
      n.hasOwnProperty("value")
        ? pe(e, n.type, t)
        : n.hasOwnProperty("defaultValue") && pe(e, n.type, re(n.defaultValue)),
        null == n.checked &&
          null != n.defaultChecked &&
          (e.defaultChecked = !!n.defaultChecked);
    }
    function fe(e, n, t) {
      if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
        var r = n.type;
        if (
          !(
            ("submit" !== r && "reset" !== r) ||
            (void 0 !== n.value && null !== n.value)
          )
        )
          return;
        (n = "" + e._wrapperState.initialValue),
          t || n === e.value || (e.value = n),
          (e.defaultValue = n);
      }
      "" !== (t = e.name) && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        "" !== t && (e.name = t);
    }
    function pe(e, n, t) {
      ("number" === n && ie(e.ownerDocument) === e) ||
        (null == t
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
    }
    var he = Array.isArray;
    function ge(e, n, t, r) {
      if (((e = e.options), n)) {
        n = {};
        for (var o = 0; o < t.length; o++) n["$" + t[o]] = !0;
        for (t = 0; t < e.length; t++)
          (o = n.hasOwnProperty("$" + e[t].value)),
            e[t].selected !== o && (e[t].selected = o),
            o && r && (e[t].defaultSelected = !0);
      } else {
        for (t = "" + re(t), n = null, o = 0; o < e.length; o++) {
          if (e[o].value === t)
            return (
              (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
            );
          null !== n || e[o].disabled || (n = e[o]);
        }
        null !== n && (n.selected = !0);
      }
    }
    function me(e, n) {
      if (null != n.dangerouslySetInnerHTML) throw Error(y(91));
      return K({}, n, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
      });
    }
    function be(e, n) {
      var t = n.value;
      if (null == t) {
        if (((t = n.children), (n = n.defaultValue), null != t)) {
          if (null != n) throw Error(y(92));
          if (he(t)) {
            if (1 < t.length) throw Error(y(93));
            t = t[0];
          }
          n = t;
        }
        null == n && (n = ""), (t = n);
      }
      e._wrapperState = { initialValue: re(t) };
    }
    function ye(e, n) {
      var t = re(n.value),
        r = re(n.defaultValue);
      null != t &&
        ((t = "" + t) !== e.value && (e.value = t),
        null == n.defaultValue && e.defaultValue !== t && (e.defaultValue = t)),
        null != r && (e.defaultValue = "" + r);
    }
    function ve(e) {
      var n = e.textContent;
      n === e._wrapperState.initialValue &&
        "" !== n &&
        null !== n &&
        (e.value = n);
    }
    function ke(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function xe(e, n) {
      return null == e || "http://www.w3.org/1999/xhtml" === e
        ? ke(n)
        : "http://www.w3.org/2000/svg" === e && "foreignObject" === n
        ? "http://www.w3.org/1999/xhtml"
        : e;
    }
    var we,
      Se,
      Ee =
        ((Se = function (e, n) {
          if (
            "http://www.w3.org/2000/svg" !== e.namespaceURI ||
            "innerHTML" in e
          )
            e.innerHTML = n;
          else {
            for (
              (we = we || document.createElement("div")).innerHTML =
                "<svg>" + n.valueOf().toString() + "</svg>",
                n = we.firstChild;
              e.firstChild;

            )
              e.removeChild(e.firstChild);
            for (; n.firstChild; ) e.appendChild(n.firstChild);
          }
        }),
        "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (e, n, t, r) {
              MSApp.execUnsafeLocalFunction(function () {
                return Se(e, n);
              });
            }
          : Se);
    function Ce(e, n) {
      if (n) {
        var t = e.firstChild;
        if (t && t === e.lastChild && 3 === t.nodeType)
          return void (t.nodeValue = n);
      }
      e.textContent = n;
    }
    var Ne = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      Le = ["Webkit", "ms", "Moz", "O"];
    function Ae(e, n, t) {
      return null == n || "boolean" == typeof n || "" === n
        ? ""
        : t ||
          "number" != typeof n ||
          0 === n ||
          (Ne.hasOwnProperty(e) && Ne[e])
        ? ("" + n).trim()
        : n + "px";
    }
    function Te(e, n) {
      for (var t in ((e = e.style), n))
        if (n.hasOwnProperty(t)) {
          var r = 0 === t.indexOf("--"),
            o = Ae(t, n[t], r);
          "float" === t && (t = "cssFloat"),
            r ? e.setProperty(t, o) : (e[t] = o);
        }
    }
    Object.keys(Ne).forEach(function (e) {
      Le.forEach(function (n) {
        (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Ne[n] = Ne[e]);
      });
    });
    var Pe = K(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    );
    function Fe(e, n) {
      if (n) {
        if (Pe[e] && (null != n.children || null != n.dangerouslySetInnerHTML))
          throw Error(y(137, e));
        if (null != n.dangerouslySetInnerHTML) {
          if (null != n.children) throw Error(y(60));
          if (
            "object" != typeof n.dangerouslySetInnerHTML ||
            !("__html" in n.dangerouslySetInnerHTML)
          )
            throw Error(y(61));
        }
        if (null != n.style && "object" != typeof n.style) throw Error(y(62));
      }
    }
    function Oe(e, n) {
      if (-1 === e.indexOf("-")) return "string" == typeof n.is;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var _e = null;
    function Re(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement &&
          (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      );
    }
    var De = null,
      Ie = null,
      je = null;
    function ze(e) {
      if ((e = _o(e))) {
        if ("function" != typeof De) throw Error(y(280));
        var n = e.stateNode;
        n && ((n = Do(n)), De(e.stateNode, e.type, n));
      }
    }
    function Me(e) {
      Ie ? (je ? je.push(e) : (je = [e])) : (Ie = e);
    }
    function Ue() {
      if (Ie) {
        var e = Ie,
          n = je;
        if (((je = Ie = null), ze(e), n))
          for (e = 0; e < n.length; e++) ze(n[e]);
      }
    }
    function qe(e, n) {
      return e(n);
    }
    function Be() {}
    var He = !1;
    function $e(e, n, t) {
      if (He) return e(n, t);
      He = !0;
      try {
        return qe(e, n, t);
      } finally {
        (He = !1), (null !== Ie || null !== je) && (Be(), Ue());
      }
    }
    function Ve(e, n) {
      var t = e.stateNode;
      if (null === t) return null;
      var r = Do(t);
      if (null === r) return null;
      t = r[n];
      e: switch (n) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r = !r.disabled) ||
            (r = !(
              "button" === (e = e.type) ||
              "input" === e ||
              "select" === e ||
              "textarea" === e
            )),
            (e = !r);
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (t && "function" != typeof t) throw Error(y(231, n, typeof t));
      return t;
    }
    var We = !1;
    if (S)
      try {
        var Ge = {};
        Object.defineProperty(Ge, "passive", {
          get: function () {
            We = !0;
          },
        }),
          window.addEventListener("test", Ge, Ge),
          window.removeEventListener("test", Ge, Ge);
      } catch (Se) {
        We = !1;
      }
    function Qe(e, n, t, r, o, l, a, i, s) {
      var u = Array.prototype.slice.call(arguments, 3);
      try {
        n.apply(t, u);
      } catch (e) {
        this.onError(e);
      }
    }
    var Ye = !1,
      Ke = null,
      Xe = !1,
      Je = null,
      Ze = {
        onError: function (e) {
          (Ye = !0), (Ke = e);
        },
      };
    function en(e, n, t, r, o, l, a, i, s) {
      (Ye = !1), (Ke = null), Qe.apply(Ze, arguments);
    }
    function nn(e) {
      var n = e,
        t = e;
      if (e.alternate) for (; n.return; ) n = n.return;
      else {
        e = n;
        do {
          0 != (4098 & (n = e).flags) && (t = n.return), (e = n.return);
        } while (e);
      }
      return 3 === n.tag ? t : null;
    }
    function tn(e) {
      if (13 === e.tag) {
        var n = e.memoizedState;
        if (
          (null === n && null !== (e = e.alternate) && (n = e.memoizedState),
          null !== n)
        )
          return n.dehydrated;
      }
      return null;
    }
    function rn(e) {
      if (nn(e) !== e) throw Error(y(188));
    }
    function on(e) {
      return null !==
        (e = (function (e) {
          var n = e.alternate;
          if (!n) {
            if (null === (n = nn(e))) throw Error(y(188));
            return n !== e ? null : e;
          }
          for (var t = e, r = n; ; ) {
            var o = t.return;
            if (null === o) break;
            var l = o.alternate;
            if (null === l) {
              if (null !== (r = o.return)) {
                t = r;
                continue;
              }
              break;
            }
            if (o.child === l.child) {
              for (l = o.child; l; ) {
                if (l === t) return rn(o), e;
                if (l === r) return rn(o), n;
                l = l.sibling;
              }
              throw Error(y(188));
            }
            if (t.return !== r.return) (t = o), (r = l);
            else {
              for (var a = !1, i = o.child; i; ) {
                if (i === t) {
                  (a = !0), (t = o), (r = l);
                  break;
                }
                if (i === r) {
                  (a = !0), (r = o), (t = l);
                  break;
                }
                i = i.sibling;
              }
              if (!a) {
                for (i = l.child; i; ) {
                  if (i === t) {
                    (a = !0), (t = l), (r = o);
                    break;
                  }
                  if (i === r) {
                    (a = !0), (r = l), (t = o);
                    break;
                  }
                  i = i.sibling;
                }
                if (!a) throw Error(y(189));
              }
            }
            if (t.alternate !== r) throw Error(y(190));
          }
          if (3 !== t.tag) throw Error(y(188));
          return t.stateNode.current === t ? e : n;
        })(e))
        ? ln(e)
        : null;
    }
    function ln(e) {
      if (5 === e.tag || 6 === e.tag) return e;
      for (e = e.child; null !== e; ) {
        var n = ln(e);
        if (null !== n) return n;
        e = e.sibling;
      }
      return null;
    }
    var an = b.unstable_scheduleCallback,
      sn = b.unstable_cancelCallback,
      un = b.unstable_shouldYield,
      cn = b.unstable_requestPaint,
      dn = b.unstable_now,
      fn = b.unstable_getCurrentPriorityLevel,
      pn = b.unstable_ImmediatePriority,
      hn = b.unstable_UserBlockingPriority,
      gn = b.unstable_NormalPriority,
      mn = b.unstable_LowPriority,
      bn = b.unstable_IdlePriority,
      yn = null,
      vn = null;
    var kn = Math.clz32
        ? Math.clz32
        : function (e) {
            return (e >>>= 0), 0 === e ? 32 : (31 - ((xn(e) / wn) | 0)) | 0;
          },
      xn = Math.log,
      wn = Math.LN2;
    var Sn = 64,
      En = 4194304;
    function Cn(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return 4194240 & e;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return 130023424 & e;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function Nn(e, n) {
      var t = e.pendingLanes;
      if (0 === t) return 0;
      var r = 0,
        o = e.suspendedLanes,
        l = e.pingedLanes,
        a = 268435455 & t;
      if (0 !== a) {
        var i = a & ~o;
        0 !== i ? (r = Cn(i)) : 0 !== (l &= a) && (r = Cn(l));
      } else 0 !== (a = t & ~o) ? (r = Cn(a)) : 0 !== l && (r = Cn(l));
      if (0 === r) return 0;
      if (
        0 !== n &&
        n !== r &&
        0 == (n & o) &&
        ((o = r & -r) >= (l = n & -n) || (16 === o && 0 != (4194240 & l)))
      )
        return n;
      if ((0 != (4 & r) && (r |= 16 & t), 0 !== (n = e.entangledLanes)))
        for (e = e.entanglements, n &= r; 0 < n; )
          (o = 1 << (t = 31 - kn(n))), (r |= e[t]), (n &= ~o);
      return r;
    }
    function Ln(e, n) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return n + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return n + 5e3;
        default:
          return -1;
      }
    }
    function An(e) {
      return 0 !== (e = -1073741825 & e.pendingLanes)
        ? e
        : 1073741824 & e
        ? 1073741824
        : 0;
    }
    function Tn() {
      var e = Sn;
      return 0 == (4194240 & (Sn <<= 1)) && (Sn = 64), e;
    }
    function Pn(e) {
      for (var n = [], t = 0; 31 > t; t++) n.push(e);
      return n;
    }
    function Fn(e, n, t) {
      (e.pendingLanes |= n),
        536870912 !== n && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        ((e = e.eventTimes)[(n = 31 - kn(n))] = t);
    }
    function On(e, n) {
      var t = (e.entangledLanes |= n);
      for (e = e.entanglements; t; ) {
        var r = 31 - kn(t),
          o = 1 << r;
        (o & n) | (e[r] & n) && (e[r] |= n), (t &= ~o);
      }
    }
    var _n = 0;
    function Rn(e) {
      return 1 < (e &= -e)
        ? 4 < e
          ? 0 != (268435455 & e)
            ? 16
            : 536870912
          : 4
        : 1;
    }
    var Dn,
      In,
      jn,
      zn,
      Mn,
      Un = !1,
      qn = [],
      Bn = null,
      Hn = null,
      $n = null,
      Vn = new Map(),
      Wn = new Map(),
      Gn = [],
      Qn =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " "
        );
    function Yn(e, n) {
      switch (e) {
        case "focusin":
        case "focusout":
          Bn = null;
          break;
        case "dragenter":
        case "dragleave":
          Hn = null;
          break;
        case "mouseover":
        case "mouseout":
          $n = null;
          break;
        case "pointerover":
        case "pointerout":
          Vn.delete(n.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Wn.delete(n.pointerId);
      }
    }
    function Kn(e, n, t, r, o, l) {
      return null === e || e.nativeEvent !== l
        ? ((e = {
            blockedOn: n,
            domEventName: t,
            eventSystemFlags: r,
            nativeEvent: l,
            targetContainers: [o],
          }),
          null !== n && null !== (n = _o(n)) && In(n),
          e)
        : ((e.eventSystemFlags |= r),
          (n = e.targetContainers),
          null !== o && -1 === n.indexOf(o) && n.push(o),
          e);
    }
    function Xn(e) {
      var n = Oo(e.target);
      if (null !== n) {
        var t = nn(n);
        if (null !== t)
          if (13 === (n = t.tag)) {
            if (null !== (n = tn(t)))
              return (
                (e.blockedOn = n),
                void Mn(e.priority, function () {
                  jn(t);
                })
              );
          } else if (3 === n && t.stateNode.current.memoizedState.isDehydrated)
            return void (e.blockedOn =
              3 === t.tag ? t.stateNode.containerInfo : null);
      }
      e.blockedOn = null;
    }
    function Jn(e) {
      if (null !== e.blockedOn) return !1;
      for (var n = e.targetContainers; 0 < n.length; ) {
        var t = ut(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
        if (null !== t)
          return null !== (n = _o(t)) && In(n), (e.blockedOn = t), !1;
        var r = new (t = e.nativeEvent).constructor(t.type, t);
        (_e = r), t.target.dispatchEvent(r), (_e = null), n.shift();
      }
      return !0;
    }
    function Zn(e, n, t) {
      Jn(e) && t.delete(n);
    }
    function et() {
      (Un = !1),
        null !== Bn && Jn(Bn) && (Bn = null),
        null !== Hn && Jn(Hn) && (Hn = null),
        null !== $n && Jn($n) && ($n = null),
        Vn.forEach(Zn),
        Wn.forEach(Zn);
    }
    function nt(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        Un ||
          ((Un = !0),
          b.unstable_scheduleCallback(b.unstable_NormalPriority, et)));
    }
    function tt(e) {
      function n(n) {
        return nt(n, e);
      }
      if (0 < qn.length) {
        nt(qn[0], e);
        for (var t = 1; t < qn.length; t++) {
          var r = qn[t];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        null !== Bn && nt(Bn, e),
          null !== Hn && nt(Hn, e),
          null !== $n && nt($n, e),
          Vn.forEach(n),
          Wn.forEach(n),
          t = 0;
        t < Gn.length;
        t++
      )
        (r = Gn[t]).blockedOn === e && (r.blockedOn = null);
      for (; 0 < Gn.length && null === (t = Gn[0]).blockedOn; )
        Xn(t), null === t.blockedOn && Gn.shift();
    }
    var rt = _.ReactCurrentBatchConfig,
      ot = !0;
    function lt(e, n, t, r) {
      var o = _n,
        l = rt.transition;
      rt.transition = null;
      try {
        (_n = 1), it(e, n, t, r);
      } finally {
        (_n = o), (rt.transition = l);
      }
    }
    function at(e, n, t, r) {
      var o = _n,
        l = rt.transition;
      rt.transition = null;
      try {
        (_n = 4), it(e, n, t, r);
      } finally {
        (_n = o), (rt.transition = l);
      }
    }
    function it(e, n, t, r) {
      if (ot) {
        var o = ut(e, n, t, r);
        if (null === o) ro(e, n, r, st, t), Yn(e, r);
        else if (
          (function (e, n, t, r, o) {
            switch (n) {
              case "focusin":
                return (Bn = Kn(Bn, e, n, t, r, o)), !0;
              case "dragenter":
                return (Hn = Kn(Hn, e, n, t, r, o)), !0;
              case "mouseover":
                return ($n = Kn($n, e, n, t, r, o)), !0;
              case "pointerover":
                var l = o.pointerId;
                return Vn.set(l, Kn(Vn.get(l) || null, e, n, t, r, o)), !0;
              case "gotpointercapture":
                return (
                  (l = o.pointerId),
                  Wn.set(l, Kn(Wn.get(l) || null, e, n, t, r, o)),
                  !0
                );
            }
            return !1;
          })(o, e, n, t, r)
        )
          r.stopPropagation();
        else if ((Yn(e, r), 4 & n && -1 < Qn.indexOf(e))) {
          for (; null !== o; ) {
            var l = _o(o);
            if (
              (null !== l && Dn(l),
              null === (l = ut(e, n, t, r)) && ro(e, n, r, st, t),
              l === o)
            )
              break;
            o = l;
          }
          null !== o && r.stopPropagation();
        } else ro(e, n, r, null, t);
      }
    }
    var st = null;
    function ut(e, n, t, r) {
      if (((st = null), null !== (e = Oo((e = Re(r))))))
        if (null === (n = nn(e))) e = null;
        else if (13 === (t = n.tag)) {
          if (null !== (e = tn(n))) return e;
          e = null;
        } else if (3 === t) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return 3 === n.tag ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      return (st = e), null;
    }
    function ct(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (fn()) {
            case pn:
              return 1;
            case hn:
              return 4;
            case gn:
            case mn:
              return 16;
            case bn:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var dt = null,
      ft = null,
      pt = null;
    function ht() {
      if (pt) return pt;
      var e,
        n,
        t = ft,
        r = t.length,
        o = "value" in dt ? dt.value : dt.textContent,
        l = o.length;
      for (e = 0; e < r && t[e] === o[e]; e++);
      var a = r - e;
      for (n = 1; n <= a && t[r - n] === o[l - n]; n++);
      return (pt = o.slice(e, 1 < n ? 1 - n : void 0));
    }
    function gt(e) {
      var n = e.keyCode;
      return (
        "charCode" in e
          ? 0 === (e = e.charCode) && 13 === n && (e = 13)
          : (e = n),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
      );
    }
    function mt() {
      return !0;
    }
    function bt() {
      return !1;
    }
    function yt(e) {
      function n(n, t, r, o, l) {
        for (var a in ((this._reactName = n),
        (this._targetInst = r),
        (this.type = t),
        (this.nativeEvent = o),
        (this.target = l),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
        return (
          (this.isDefaultPrevented = (
            null != o.defaultPrevented
              ? o.defaultPrevented
              : !1 === o.returnValue
          )
            ? mt
            : bt),
          (this.isPropagationStopped = bt),
          this
        );
      }
      return (
        K(n.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : "unknown" != typeof e.returnValue && (e.returnValue = !1),
              (this.isDefaultPrevented = mt));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
              (this.isPropagationStopped = mt));
          },
          persist: function () {},
          isPersistent: mt,
        }),
        n
      );
    }
    var vt,
      kt,
      xt,
      wt = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      St = yt(wt),
      Et = K({}, wt, { view: 0, detail: 0 }),
      Ct = yt(Et),
      Nt = K({}, Et, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: zt,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return void 0 === e.relatedTarget
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return "movementX" in e
            ? e.movementX
            : (e !== xt &&
                (xt && "mousemove" === e.type
                  ? ((vt = e.screenX - xt.screenX),
                    (kt = e.screenY - xt.screenY))
                  : (kt = vt = 0),
                (xt = e)),
              vt);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : kt;
        },
      }),
      Lt = yt(Nt),
      At = yt(K({}, Nt, { dataTransfer: 0 })),
      Tt = yt(K({}, Et, { relatedTarget: 0 })),
      Pt = yt(
        K({}, wt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
      ),
      Ft = K({}, wt, {
        clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
      }),
      Ot = yt(Ft),
      _t = yt(K({}, wt, { data: 0 })),
      Rt = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      Dt = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      It = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function jt(e) {
      var n = this.nativeEvent;
      return n.getModifierState
        ? n.getModifierState(e)
        : !!(e = It[e]) && !!n[e];
    }
    function zt() {
      return jt;
    }
    var Mt = K({}, Et, {
        key: function (e) {
          if (e.key) {
            var n = Rt[e.key] || e.key;
            if ("Unidentified" !== n) return n;
          }
          return "keypress" === e.type
            ? 13 === (e = gt(e))
              ? "Enter"
              : String.fromCharCode(e)
            : "keydown" === e.type || "keyup" === e.type
            ? Dt[e.keyCode] || "Unidentified"
            : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: zt,
        charCode: function (e) {
          return "keypress" === e.type ? gt(e) : 0;
        },
        keyCode: function (e) {
          return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
        },
        which: function (e) {
          return "keypress" === e.type
            ? gt(e)
            : "keydown" === e.type || "keyup" === e.type
            ? e.keyCode
            : 0;
        },
      }),
      Ut = yt(Mt),
      qt = yt(
        K({}, Nt, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        })
      ),
      Bt = yt(
        K({}, Et, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: zt,
        })
      ),
      Ht = yt(K({}, wt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      $t = K({}, Nt, {
        deltaX: function (e) {
          return "deltaX" in e
            ? e.deltaX
            : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
        },
        deltaY: function (e) {
          return "deltaY" in e
            ? e.deltaY
            : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      Vt = yt($t),
      Wt = [9, 13, 27, 32],
      Gt = S && "CompositionEvent" in window,
      Qt = null;
    S && "documentMode" in document && (Qt = document.documentMode);
    var Yt = S && "TextEvent" in window && !Qt,
      Kt = S && (!Gt || (Qt && 8 < Qt && 11 >= Qt)),
      Xt = String.fromCharCode(32),
      Jt = !1;
    function Zt(e, n) {
      switch (e) {
        case "keyup":
          return -1 !== Wt.indexOf(n.keyCode);
        case "keydown":
          return 229 !== n.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function er(e) {
      return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
    }
    var nr = !1;
    var tr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function rr(e) {
      var n = e && e.nodeName && e.nodeName.toLowerCase();
      return "input" === n ? !!tr[e.type] : "textarea" === n;
    }
    function or(e, n, t, r) {
      Me(r),
        0 < (n = lo(n, "onChange")).length &&
          ((t = new St("onChange", "change", null, t, r)),
          e.push({ event: t, listeners: n }));
    }
    var lr = null,
      ar = null;
    function ir(e) {
      Xr(e, 0);
    }
    function sr(e) {
      if (ae(Ro(e))) return e;
    }
    function ur(e, n) {
      if ("change" === e) return n;
    }
    var cr = !1;
    if (S) {
      var dr;
      if (S) {
        var fr = "oninput" in document;
        if (!fr) {
          var pr = document.createElement("div");
          pr.setAttribute("oninput", "return;"),
            (fr = "function" == typeof pr.oninput);
        }
        dr = fr;
      } else dr = !1;
      cr = dr && (!document.documentMode || 9 < document.documentMode);
    }
    function hr() {
      lr && (lr.detachEvent("onpropertychange", gr), (ar = lr = null));
    }
    function gr(e) {
      if ("value" === e.propertyName && sr(ar)) {
        var n = [];
        or(n, ar, e, Re(e)), $e(ir, n);
      }
    }
    function mr(e, n, t) {
      "focusin" === e
        ? (hr(), (ar = t), (lr = n).attachEvent("onpropertychange", gr))
        : "focusout" === e && hr();
    }
    function br(e) {
      if ("selectionchange" === e || "keyup" === e || "keydown" === e)
        return sr(ar);
    }
    function yr(e, n) {
      if ("click" === e) return sr(n);
    }
    function vr(e, n) {
      if ("input" === e || "change" === e) return sr(n);
    }
    var kr =
      "function" == typeof Object.is
        ? Object.is
        : function (e, n) {
            return (
              (e === n && (0 !== e || 1 / e == 1 / n)) || (e != e && n != n)
            );
          };
    function xr(e, n) {
      if (kr(e, n)) return !0;
      if (
        "object" != typeof e ||
        null === e ||
        "object" != typeof n ||
        null === n
      )
        return !1;
      var t = Object.keys(e),
        r = Object.keys(n);
      if (t.length !== r.length) return !1;
      for (r = 0; r < t.length; r++) {
        var o = t[r];
        if (!E.call(n, o) || !kr(e[o], n[o])) return !1;
      }
      return !0;
    }
    function wr(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Sr(e, n) {
      var t,
        r = wr(e);
      for (e = 0; r; ) {
        if (3 === r.nodeType) {
          if (((t = e + r.textContent.length), e <= n && t >= n))
            return { node: r, offset: n - e };
          e = t;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = wr(r);
      }
    }
    function Er(e, n) {
      return (
        !(!e || !n) &&
        (e === n ||
          ((!e || 3 !== e.nodeType) &&
            (n && 3 === n.nodeType
              ? Er(e, n.parentNode)
              : "contains" in e
              ? e.contains(n)
              : !!e.compareDocumentPosition &&
                !!(16 & e.compareDocumentPosition(n)))))
      );
    }
    function Cr() {
      for (var e = window, n = ie(); n instanceof e.HTMLIFrameElement; ) {
        try {
          var t = "string" == typeof n.contentWindow.location.href;
        } catch (e) {
          t = !1;
        }
        if (!t) break;
        n = ie((e = n.contentWindow).document);
      }
      return n;
    }
    function Nr(e) {
      var n = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        n &&
        (("input" === n &&
          ("text" === e.type ||
            "search" === e.type ||
            "tel" === e.type ||
            "url" === e.type ||
            "password" === e.type)) ||
          "textarea" === n ||
          "true" === e.contentEditable)
      );
    }
    function Lr(e) {
      var n = Cr(),
        t = e.focusedElem,
        r = e.selectionRange;
      if (
        n !== t &&
        t &&
        t.ownerDocument &&
        Er(t.ownerDocument.documentElement, t)
      ) {
        if (null !== r && Nr(t))
          if (
            ((n = r.start),
            void 0 === (e = r.end) && (e = n),
            "selectionStart" in t)
          )
            (t.selectionStart = n),
              (t.selectionEnd = Math.min(e, t.value.length));
          else if (
            (e = ((n = t.ownerDocument || document) && n.defaultView) || window)
              .getSelection
          ) {
            e = e.getSelection();
            var o = t.textContent.length,
              l = Math.min(r.start, o);
            (r = void 0 === r.end ? l : Math.min(r.end, o)),
              !e.extend && l > r && ((o = r), (r = l), (l = o)),
              (o = Sr(t, l));
            var a = Sr(t, r);
            o &&
              a &&
              (1 !== e.rangeCount ||
                e.anchorNode !== o.node ||
                e.anchorOffset !== o.offset ||
                e.focusNode !== a.node ||
                e.focusOffset !== a.offset) &&
              ((n = n.createRange()).setStart(o.node, o.offset),
              e.removeAllRanges(),
              l > r
                ? (e.addRange(n), e.extend(a.node, a.offset))
                : (n.setEnd(a.node, a.offset), e.addRange(n)));
          }
        for (n = [], e = t; (e = e.parentNode); )
          1 === e.nodeType &&
            n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
          "function" == typeof t.focus && t.focus(), t = 0;
          t < n.length;
          t++
        )
          ((e = n[t]).element.scrollLeft = e.left),
            (e.element.scrollTop = e.top);
      }
    }
    var Ar = S && "documentMode" in document && 11 >= document.documentMode,
      Tr = null,
      Pr = null,
      Fr = null,
      Or = !1;
    function _r(e, n, t) {
      var r =
        t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
      Or ||
        null == Tr ||
        Tr !== ie(r) ||
        ("selectionStart" in (r = Tr) && Nr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : (r = {
              anchorNode: (r = (
                (r.ownerDocument && r.ownerDocument.defaultView) ||
                window
              ).getSelection()).anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            }),
        (Fr && xr(Fr, r)) ||
          ((Fr = r),
          0 < (r = lo(Pr, "onSelect")).length &&
            ((n = new St("onSelect", "select", null, n, t)),
            e.push({ event: n, listeners: r }),
            (n.target = Tr))));
    }
    function Rr(e, n) {
      var t = {};
      return (
        (t[e.toLowerCase()] = n.toLowerCase()),
        (t["Webkit" + e] = "webkit" + n),
        (t["Moz" + e] = "moz" + n),
        t
      );
    }
    var Dr = {
        animationend: Rr("Animation", "AnimationEnd"),
        animationiteration: Rr("Animation", "AnimationIteration"),
        animationstart: Rr("Animation", "AnimationStart"),
        transitionend: Rr("Transition", "TransitionEnd"),
      },
      Ir = {},
      jr = {};
    function zr(e) {
      if (Ir[e]) return Ir[e];
      if (!Dr[e]) return e;
      var n,
        t = Dr[e];
      for (n in t) if (t.hasOwnProperty(n) && n in jr) return (Ir[e] = t[n]);
      return e;
    }
    S &&
      ((jr = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Dr.animationend.animation,
        delete Dr.animationiteration.animation,
        delete Dr.animationstart.animation),
      "TransitionEvent" in window || delete Dr.transitionend.transition);
    var Mr = zr("animationend"),
      Ur = zr("animationiteration"),
      qr = zr("animationstart"),
      Br = zr("transitionend"),
      Hr = new Map(),
      $r =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " "
        );
    function Vr(e, n) {
      Hr.set(e, n), x(n, [e]);
    }
    for (var Wr = 0; Wr < $r.length; Wr++) {
      var Gr = $r[Wr];
      Vr(Gr.toLowerCase(), "on" + (Gr[0].toUpperCase() + Gr.slice(1)));
    }
    Vr(Mr, "onAnimationEnd"),
      Vr(Ur, "onAnimationIteration"),
      Vr(qr, "onAnimationStart"),
      Vr("dblclick", "onDoubleClick"),
      Vr("focusin", "onFocus"),
      Vr("focusout", "onBlur"),
      Vr(Br, "onTransitionEnd"),
      w("onMouseEnter", ["mouseout", "mouseover"]),
      w("onMouseLeave", ["mouseout", "mouseover"]),
      w("onPointerEnter", ["pointerout", "pointerover"]),
      w("onPointerLeave", ["pointerout", "pointerover"]),
      x(
        "onChange",
        "change click focusin focusout input keydown keyup selectionchange".split(
          " "
        )
      ),
      x(
        "onSelect",
        "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
          " "
        )
      ),
      x("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      x(
        "onCompositionEnd",
        "compositionend focusout keydown keypress keyup mousedown".split(" ")
      ),
      x(
        "onCompositionStart",
        "compositionstart focusout keydown keypress keyup mousedown".split(" ")
      ),
      x(
        "onCompositionUpdate",
        "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
      );
    var Qr =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
      Yr = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(Qr)
      );
    function Kr(e, n, t) {
      var r = e.type || "unknown-event";
      (e.currentTarget = t),
        (function (e, n, t, r, o, l, a, i, s) {
          if ((en.apply(this, arguments), Ye)) {
            if (!Ye) throw Error(y(198));
            var u = Ke;
            (Ye = !1), (Ke = null), Xe || ((Xe = !0), (Je = u));
          }
        })(r, n, void 0, e),
        (e.currentTarget = null);
    }
    function Xr(e, n) {
      n = 0 != (4 & n);
      for (var t = 0; t < e.length; t++) {
        var r = e[t],
          o = r.event;
        r = r.listeners;
        e: {
          var l = void 0;
          if (n)
            for (var a = r.length - 1; 0 <= a; a--) {
              var i = r[a],
                s = i.instance,
                u = i.currentTarget;
              if (((i = i.listener), s !== l && o.isPropagationStopped()))
                break e;
              Kr(o, i, u), (l = s);
            }
          else
            for (a = 0; a < r.length; a++) {
              if (
                ((s = (i = r[a]).instance),
                (u = i.currentTarget),
                (i = i.listener),
                s !== l && o.isPropagationStopped())
              )
                break e;
              Kr(o, i, u), (l = s);
            }
        }
      }
      if (Xe) throw ((e = Je), (Xe = !1), (Je = null), e);
    }
    function Jr(e, n) {
      var t = n[To];
      void 0 === t && (t = n[To] = new Set());
      var r = e + "__bubble";
      t.has(r) || (to(n, e, 2, !1), t.add(r));
    }
    function Zr(e, n, t) {
      var r = 0;
      n && (r |= 4), to(t, e, r, n);
    }
    var eo = "_reactListening" + Math.random().toString(36).slice(2);
    function no(e) {
      if (!e[eo]) {
        (e[eo] = !0),
          v.forEach(function (n) {
            "selectionchange" !== n &&
              (Yr.has(n) || Zr(n, !1, e), Zr(n, !0, e));
          });
        var n = 9 === e.nodeType ? e : e.ownerDocument;
        null === n || n[eo] || ((n[eo] = !0), Zr("selectionchange", !1, n));
      }
    }
    function to(e, n, t, r) {
      switch (ct(n)) {
        case 1:
          var o = lt;
          break;
        case 4:
          o = at;
          break;
        default:
          o = it;
      }
      (t = o.bind(null, n, t, e)),
        (o = void 0),
        !We ||
          ("touchstart" !== n && "touchmove" !== n && "wheel" !== n) ||
          (o = !0),
        r
          ? void 0 !== o
            ? e.addEventListener(n, t, { capture: !0, passive: o })
            : e.addEventListener(n, t, !0)
          : void 0 !== o
          ? e.addEventListener(n, t, { passive: o })
          : e.addEventListener(n, t, !1);
    }
    function ro(e, n, t, r, o) {
      var l = r;
      if (0 == (1 & n) && 0 == (2 & n) && null !== r)
        e: for (;;) {
          if (null === r) return;
          var a = r.tag;
          if (3 === a || 4 === a) {
            var i = r.stateNode.containerInfo;
            if (i === o || (8 === i.nodeType && i.parentNode === o)) break;
            if (4 === a)
              for (a = r.return; null !== a; ) {
                var s = a.tag;
                if (
                  (3 === s || 4 === s) &&
                  ((s = a.stateNode.containerInfo) === o ||
                    (8 === s.nodeType && s.parentNode === o))
                )
                  return;
                a = a.return;
              }
            for (; null !== i; ) {
              if (null === (a = Oo(i))) return;
              if (5 === (s = a.tag) || 6 === s) {
                r = l = a;
                continue e;
              }
              i = i.parentNode;
            }
          }
          r = r.return;
        }
      $e(function () {
        var r = l,
          o = Re(t),
          a = [];
        e: {
          var i = Hr.get(e);
          if (void 0 !== i) {
            var s = St,
              u = e;
            switch (e) {
              case "keypress":
                if (0 === gt(t)) break e;
              case "keydown":
              case "keyup":
                s = Ut;
                break;
              case "focusin":
                (u = "focus"), (s = Tt);
                break;
              case "focusout":
                (u = "blur"), (s = Tt);
                break;
              case "beforeblur":
              case "afterblur":
                s = Tt;
                break;
              case "click":
                if (2 === t.button) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                s = Lt;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                s = At;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                s = Bt;
                break;
              case Mr:
              case Ur:
              case qr:
                s = Pt;
                break;
              case Br:
                s = Ht;
                break;
              case "scroll":
                s = Ct;
                break;
              case "wheel":
                s = Vt;
                break;
              case "copy":
              case "cut":
              case "paste":
                s = Ot;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                s = qt;
            }
            var c = 0 != (4 & n),
              d = !c && "scroll" === e,
              f = c ? (null !== i ? i + "Capture" : null) : i;
            c = [];
            for (var p, h = r; null !== h; ) {
              var g = (p = h).stateNode;
              if (
                (5 === p.tag &&
                  null !== g &&
                  ((p = g),
                  null !== f && null != (g = Ve(h, f)) && c.push(oo(h, g, p))),
                d)
              )
                break;
              h = h.return;
            }
            0 < c.length &&
              ((i = new s(i, u, null, t, o)),
              a.push({ event: i, listeners: c }));
          }
        }
        if (0 == (7 & n)) {
          if (
            ((s = "mouseout" === e || "pointerout" === e),
            (!(i = "mouseover" === e || "pointerover" === e) ||
              t === _e ||
              !(u = t.relatedTarget || t.fromElement) ||
              (!Oo(u) && !u[Ao])) &&
              (s || i) &&
              ((i =
                o.window === o
                  ? o
                  : (i = o.ownerDocument)
                  ? i.defaultView || i.parentWindow
                  : window),
              s
                ? ((s = r),
                  null !==
                    (u = (u = t.relatedTarget || t.toElement) ? Oo(u) : null) &&
                    (u !== (d = nn(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                    (u = null))
                : ((s = null), (u = r)),
              s !== u))
          ) {
            if (
              ((c = Lt),
              (g = "onMouseLeave"),
              (f = "onMouseEnter"),
              (h = "mouse"),
              ("pointerout" !== e && "pointerover" !== e) ||
                ((c = qt),
                (g = "onPointerLeave"),
                (f = "onPointerEnter"),
                (h = "pointer")),
              (d = null == s ? i : Ro(s)),
              (p = null == u ? i : Ro(u)),
              ((i = new c(g, h + "leave", s, t, o)).target = d),
              (i.relatedTarget = p),
              (g = null),
              Oo(o) === r &&
                (((c = new c(f, h + "enter", u, t, o)).target = p),
                (c.relatedTarget = d),
                (g = c)),
              (d = g),
              s && u)
            )
              e: {
                for (f = u, h = 0, p = c = s; p; p = ao(p)) h++;
                for (p = 0, g = f; g; g = ao(g)) p++;
                for (; 0 < h - p; ) (c = ao(c)), h--;
                for (; 0 < p - h; ) (f = ao(f)), p--;
                for (; h--; ) {
                  if (c === f || (null !== f && c === f.alternate)) break e;
                  (c = ao(c)), (f = ao(f));
                }
                c = null;
              }
            else c = null;
            null !== s && io(a, i, s, c, !1),
              null !== u && null !== d && io(a, d, u, c, !0);
          }
          if (
            "select" ===
              (s =
                (i = r ? Ro(r) : window).nodeName &&
                i.nodeName.toLowerCase()) ||
            ("input" === s && "file" === i.type)
          )
            var m = ur;
          else if (rr(i))
            if (cr) m = vr;
            else {
              m = br;
              var b = mr;
            }
          else
            (s = i.nodeName) &&
              "input" === s.toLowerCase() &&
              ("checkbox" === i.type || "radio" === i.type) &&
              (m = yr);
          switch (
            (m && (m = m(e, r))
              ? or(a, m, t, o)
              : (b && b(e, i, r),
                "focusout" === e &&
                  (b = i._wrapperState) &&
                  b.controlled &&
                  "number" === i.type &&
                  pe(i, "number", i.value)),
            (b = r ? Ro(r) : window),
            e)
          ) {
            case "focusin":
              (rr(b) || "true" === b.contentEditable) &&
                ((Tr = b), (Pr = r), (Fr = null));
              break;
            case "focusout":
              Fr = Pr = Tr = null;
              break;
            case "mousedown":
              Or = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (Or = !1), _r(a, t, o);
              break;
            case "selectionchange":
              if (Ar) break;
            case "keydown":
            case "keyup":
              _r(a, t, o);
          }
          var y;
          if (Gt)
            e: {
              switch (e) {
                case "compositionstart":
                  var v = "onCompositionStart";
                  break e;
                case "compositionend":
                  v = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  v = "onCompositionUpdate";
                  break e;
              }
              v = void 0;
            }
          else
            nr
              ? Zt(e, t) && (v = "onCompositionEnd")
              : "keydown" === e &&
                229 === t.keyCode &&
                (v = "onCompositionStart");
          v &&
            (Kt &&
              "ko" !== t.locale &&
              (nr || "onCompositionStart" !== v
                ? "onCompositionEnd" === v && nr && (y = ht())
                : ((ft = "value" in (dt = o) ? dt.value : dt.textContent),
                  (nr = !0))),
            0 < (b = lo(r, v)).length &&
              ((v = new _t(v, e, null, t, o)),
              a.push({ event: v, listeners: b }),
              y ? (v.data = y) : null !== (y = er(t)) && (v.data = y))),
            (y = Yt
              ? (function (e, n) {
                  switch (e) {
                    case "compositionend":
                      return er(n);
                    case "keypress":
                      return 32 !== n.which ? null : ((Jt = !0), Xt);
                    case "textInput":
                      return (e = n.data) === Xt && Jt ? null : e;
                    default:
                      return null;
                  }
                })(e, t)
              : (function (e, n) {
                  if (nr)
                    return "compositionend" === e || (!Gt && Zt(e, n))
                      ? ((e = ht()), (pt = ft = dt = null), (nr = !1), e)
                      : null;
                  switch (e) {
                    case "paste":
                    default:
                      return null;
                    case "keypress":
                      if (
                        !(n.ctrlKey || n.altKey || n.metaKey) ||
                        (n.ctrlKey && n.altKey)
                      ) {
                        if (n.char && 1 < n.char.length) return n.char;
                        if (n.which) return String.fromCharCode(n.which);
                      }
                      return null;
                    case "compositionend":
                      return Kt && "ko" !== n.locale ? null : n.data;
                  }
                })(e, t)) &&
              0 < (r = lo(r, "onBeforeInput")).length &&
              ((o = new _t("onBeforeInput", "beforeinput", null, t, o)),
              a.push({ event: o, listeners: r }),
              (o.data = y));
        }
        Xr(a, n);
      });
    }
    function oo(e, n, t) {
      return { instance: e, listener: n, currentTarget: t };
    }
    function lo(e, n) {
      for (var t = n + "Capture", r = []; null !== e; ) {
        var o = e,
          l = o.stateNode;
        5 === o.tag &&
          null !== l &&
          ((o = l),
          null != (l = Ve(e, t)) && r.unshift(oo(e, l, o)),
          null != (l = Ve(e, n)) && r.push(oo(e, l, o))),
          (e = e.return);
      }
      return r;
    }
    function ao(e) {
      if (null === e) return null;
      do {
        e = e.return;
      } while (e && 5 !== e.tag);
      return e || null;
    }
    function io(e, n, t, r, o) {
      for (var l = n._reactName, a = []; null !== t && t !== r; ) {
        var i = t,
          s = i.alternate,
          u = i.stateNode;
        if (null !== s && s === r) break;
        5 === i.tag &&
          null !== u &&
          ((i = u),
          o
            ? null != (s = Ve(t, l)) && a.unshift(oo(t, s, i))
            : o || (null != (s = Ve(t, l)) && a.push(oo(t, s, i)))),
          (t = t.return);
      }
      0 !== a.length && e.push({ event: n, listeners: a });
    }
    var so = /\r\n?/g,
      uo = /\u0000|\uFFFD/g;
    function co(e) {
      return ("string" == typeof e ? e : "" + e)
        .replace(so, "\n")
        .replace(uo, "");
    }
    function fo(e, n, t) {
      if (((n = co(n)), co(e) !== n && t)) throw Error(y(425));
    }
    function po() {}
    var ho = null,
      go = null;
    function mo(e, n) {
      return (
        "textarea" === e ||
        "noscript" === e ||
        "string" == typeof n.children ||
        "number" == typeof n.children ||
        ("object" == typeof n.dangerouslySetInnerHTML &&
          null !== n.dangerouslySetInnerHTML &&
          null != n.dangerouslySetInnerHTML.__html)
      );
    }
    var bo = "function" == typeof setTimeout ? setTimeout : void 0,
      yo = "function" == typeof clearTimeout ? clearTimeout : void 0,
      vo = "function" == typeof Promise ? Promise : void 0,
      ko =
        "function" == typeof queueMicrotask
          ? queueMicrotask
          : void 0 !== vo
          ? function (e) {
              return vo.resolve(null).then(e).catch(xo);
            }
          : bo;
    function xo(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function wo(e, n) {
      var t = n,
        r = 0;
      do {
        var o = t.nextSibling;
        if ((e.removeChild(t), o && 8 === o.nodeType))
          if ("/$" === (t = o.data)) {
            if (0 === r) return e.removeChild(o), void tt(n);
            r--;
          } else ("$" !== t && "$?" !== t && "$!" !== t) || r++;
        t = o;
      } while (t);
      tt(n);
    }
    function So(e) {
      for (; null != e; e = e.nextSibling) {
        var n = e.nodeType;
        if (1 === n || 3 === n) break;
        if (8 === n) {
          if ("$" === (n = e.data) || "$!" === n || "$?" === n) break;
          if ("/$" === n) return null;
        }
      }
      return e;
    }
    function Eo(e) {
      e = e.previousSibling;
      for (var n = 0; e; ) {
        if (8 === e.nodeType) {
          var t = e.data;
          if ("$" === t || "$!" === t || "$?" === t) {
            if (0 === n) return e;
            n--;
          } else "/$" === t && n++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var Co = Math.random().toString(36).slice(2),
      No = "__reactFiber$" + Co,
      Lo = "__reactProps$" + Co,
      Ao = "__reactContainer$" + Co,
      To = "__reactEvents$" + Co,
      Po = "__reactListeners$" + Co,
      Fo = "__reactHandles$" + Co;
    function Oo(e) {
      var n = e[No];
      if (n) return n;
      for (var t = e.parentNode; t; ) {
        if ((n = t[Ao] || t[No])) {
          if (
            ((t = n.alternate),
            null !== n.child || (null !== t && null !== t.child))
          )
            for (e = Eo(e); null !== e; ) {
              if ((t = e[No])) return t;
              e = Eo(e);
            }
          return n;
        }
        t = (e = t).parentNode;
      }
      return null;
    }
    function _o(e) {
      return !(e = e[No] || e[Ao]) ||
        (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
        ? null
        : e;
    }
    function Ro(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      throw Error(y(33));
    }
    function Do(e) {
      return e[Lo] || null;
    }
    var Io = [],
      jo = -1;
    function zo(e) {
      return { current: e };
    }
    function Mo(e) {
      0 > jo || ((e.current = Io[jo]), (Io[jo] = null), jo--);
    }
    function Uo(e, n) {
      jo++, (Io[jo] = e.current), (e.current = n);
    }
    var qo = {},
      Bo = zo(qo),
      Ho = zo(!1),
      $o = qo;
    function Vo(e, n) {
      var t = e.type.contextTypes;
      if (!t) return qo;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
        return r.__reactInternalMemoizedMaskedChildContext;
      var o,
        l = {};
      for (o in t) l[o] = n[o];
      return (
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = n),
          (e.__reactInternalMemoizedMaskedChildContext = l)),
        l
      );
    }
    function Wo(e) {
      return null != (e = e.childContextTypes);
    }
    function Go() {
      Mo(Ho), Mo(Bo);
    }
    function Qo(e, n, t) {
      if (Bo.current !== qo) throw Error(y(168));
      Uo(Bo, n), Uo(Ho, t);
    }
    function Yo(e, n, t) {
      var r = e.stateNode;
      if (((n = n.childContextTypes), "function" != typeof r.getChildContext))
        return t;
      for (var o in (r = r.getChildContext()))
        if (!(o in n)) throw Error(y(108, te(e) || "Unknown", o));
      return K({}, t, r);
    }
    function Ko(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          qo),
        ($o = Bo.current),
        Uo(Bo, e),
        Uo(Ho, Ho.current),
        !0
      );
    }
    function Xo(e, n, t) {
      var r = e.stateNode;
      if (!r) throw Error(y(169));
      t
        ? ((e = Yo(e, n, $o)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          Mo(Ho),
          Mo(Bo),
          Uo(Bo, e))
        : Mo(Ho),
        Uo(Ho, t);
    }
    var Jo = null,
      Zo = !1,
      el = !1;
    function nl(e) {
      null === Jo ? (Jo = [e]) : Jo.push(e);
    }
    function tl() {
      if (!el && null !== Jo) {
        el = !0;
        var e = 0,
          n = _n;
        try {
          var t = Jo;
          for (_n = 1; e < t.length; e++) {
            var r = t[e];
            do {
              r = r(!0);
            } while (null !== r);
          }
          (Jo = null), (Zo = !1);
        } catch (n) {
          throw (null !== Jo && (Jo = Jo.slice(e + 1)), an(pn, tl), n);
        } finally {
          (_n = n), (el = !1);
        }
      }
      return null;
    }
    var rl = [],
      ol = 0,
      ll = null,
      al = 0,
      il = [],
      sl = 0,
      ul = null,
      cl = 1,
      dl = "";
    function fl(e, n) {
      (rl[ol++] = al), (rl[ol++] = ll), (ll = e), (al = n);
    }
    function pl(e, n, t) {
      (il[sl++] = cl), (il[sl++] = dl), (il[sl++] = ul), (ul = e);
      var r = cl;
      e = dl;
      var o = 32 - kn(r) - 1;
      (r &= ~(1 << o)), (t += 1);
      var l = 32 - kn(n) + o;
      if (30 < l) {
        var a = o - (o % 5);
        (l = (r & ((1 << a) - 1)).toString(32)),
          (r >>= a),
          (o -= a),
          (cl = (1 << (32 - kn(n) + o)) | (t << o) | r),
          (dl = l + e);
      } else (cl = (1 << l) | (t << o) | r), (dl = e);
    }
    function hl(e) {
      null !== e.return && (fl(e, 1), pl(e, 1, 0));
    }
    function gl(e) {
      for (; e === ll; )
        (ll = rl[--ol]), (rl[ol] = null), (al = rl[--ol]), (rl[ol] = null);
      for (; e === ul; )
        (ul = il[--sl]),
          (il[sl] = null),
          (dl = il[--sl]),
          (il[sl] = null),
          (cl = il[--sl]),
          (il[sl] = null);
    }
    var ml = null,
      bl = null,
      yl = !1,
      vl = null;
    function kl(e, n) {
      var t = $u(5, null, null, 0);
      (t.elementType = "DELETED"),
        (t.stateNode = n),
        (t.return = e),
        null === (n = e.deletions)
          ? ((e.deletions = [t]), (e.flags |= 16))
          : n.push(t);
    }
    function xl(e, n) {
      switch (e.tag) {
        case 5:
          var t = e.type;
          return (
            null !==
              (n =
                1 !== n.nodeType || t.toLowerCase() !== n.nodeName.toLowerCase()
                  ? null
                  : n) &&
            ((e.stateNode = n), (ml = e), (bl = So(n.firstChild)), !0)
          );
        case 6:
          return (
            null !==
              (n = "" === e.pendingProps || 3 !== n.nodeType ? null : n) &&
            ((e.stateNode = n), (ml = e), (bl = null), !0)
          );
        case 13:
          return (
            null !== (n = 8 !== n.nodeType ? null : n) &&
            ((t = null !== ul ? { id: cl, overflow: dl } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            ((t = $u(18, null, null, 0)).stateNode = n),
            (t.return = e),
            (e.child = t),
            (ml = e),
            (bl = null),
            !0)
          );
        default:
          return !1;
      }
    }
    function wl(e) {
      return 0 != (1 & e.mode) && 0 == (128 & e.flags);
    }
    function Sl(e) {
      if (yl) {
        var n = bl;
        if (n) {
          var t = n;
          if (!xl(e, n)) {
            if (wl(e)) throw Error(y(418));
            n = So(t.nextSibling);
            var r = ml;
            n && xl(e, n)
              ? kl(r, t)
              : ((e.flags = (-4097 & e.flags) | 2), (yl = !1), (ml = e));
          }
        } else {
          if (wl(e)) throw Error(y(418));
          (e.flags = (-4097 & e.flags) | 2), (yl = !1), (ml = e);
        }
      }
    }
    function El(e) {
      for (
        e = e.return;
        null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

      )
        e = e.return;
      ml = e;
    }
    function Cl(e) {
      if (e !== ml) return !1;
      if (!yl) return El(e), (yl = !0), !1;
      var n;
      if (
        ((n = 3 !== e.tag) &&
          !(n = 5 !== e.tag) &&
          (n =
            "head" !== (n = e.type) &&
            "body" !== n &&
            !mo(e.type, e.memoizedProps)),
        n && (n = bl))
      ) {
        if (wl(e)) throw (Nl(), Error(y(418)));
        for (; n; ) kl(e, n), (n = So(n.nextSibling));
      }
      if ((El(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
          throw Error(y(317));
        e: {
          for (e = e.nextSibling, n = 0; e; ) {
            if (8 === e.nodeType) {
              var t = e.data;
              if ("/$" === t) {
                if (0 === n) {
                  bl = So(e.nextSibling);
                  break e;
                }
                n--;
              } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
            }
            e = e.nextSibling;
          }
          bl = null;
        }
      } else bl = ml ? So(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Nl() {
      for (var e = bl; e; ) e = So(e.nextSibling);
    }
    function Ll() {
      (bl = ml = null), (yl = !1);
    }
    function Al(e) {
      null === vl ? (vl = [e]) : vl.push(e);
    }
    var Tl = _.ReactCurrentBatchConfig;
    function Pl(e, n) {
      if (e && e.defaultProps) {
        for (var t in ((n = K({}, n)), (e = e.defaultProps)))
          void 0 === n[t] && (n[t] = e[t]);
        return n;
      }
      return n;
    }
    var Fl = zo(null),
      Ol = null,
      _l = null,
      Rl = null;
    function Dl() {
      Rl = _l = Ol = null;
    }
    function Il(e) {
      var n = Fl.current;
      Mo(Fl), (e._currentValue = n);
    }
    function jl(e, n, t) {
      for (; null !== e; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & n) !== n
            ? ((e.childLanes |= n), null !== r && (r.childLanes |= n))
            : null !== r && (r.childLanes & n) !== n && (r.childLanes |= n),
          e === t)
        )
          break;
        e = e.return;
      }
    }
    function zl(e, n) {
      (Ol = e),
        (Rl = _l = null),
        null !== (e = e.dependencies) &&
          null !== e.firstContext &&
          (0 != (e.lanes & n) && (_i = !0), (e.firstContext = null));
    }
    function Ml(e) {
      var n = e._currentValue;
      if (Rl !== e)
        if (((e = { context: e, memoizedValue: n, next: null }), null === _l)) {
          if (null === Ol) throw Error(y(308));
          (_l = e), (Ol.dependencies = { lanes: 0, firstContext: e });
        } else _l = _l.next = e;
      return n;
    }
    var Ul = null;
    function ql(e) {
      null === Ul ? (Ul = [e]) : Ul.push(e);
    }
    function Bl(e, n, t, r) {
      var o = n.interleaved;
      return (
        null === o ? ((t.next = t), ql(n)) : ((t.next = o.next), (o.next = t)),
        (n.interleaved = t),
        Hl(e, r)
      );
    }
    function Hl(e, n) {
      e.lanes |= n;
      var t = e.alternate;
      for (null !== t && (t.lanes |= n), t = e, e = e.return; null !== e; )
        (e.childLanes |= n),
          null !== (t = e.alternate) && (t.childLanes |= n),
          (t = e),
          (e = e.return);
      return 3 === t.tag ? t.stateNode : null;
    }
    var $l = !1;
    function Vl(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function Wl(e, n) {
      (e = e.updateQueue),
        n.updateQueue === e &&
          (n.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          });
    }
    function Gl(e, n) {
      return {
        eventTime: e,
        lane: n,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function Ql(e, n, t) {
      var r = e.updateQueue;
      if (null === r) return null;
      if (((r = r.shared), 0 != (2 & qs))) {
        var o = r.pending;
        return (
          null === o ? (n.next = n) : ((n.next = o.next), (o.next = n)),
          (r.pending = n),
          Hl(e, t)
        );
      }
      return (
        null === (o = r.interleaved)
          ? ((n.next = n), ql(r))
          : ((n.next = o.next), (o.next = n)),
        (r.interleaved = n),
        Hl(e, t)
      );
    }
    function Yl(e, n, t) {
      if (
        null !== (n = n.updateQueue) &&
        ((n = n.shared), 0 != (4194240 & t))
      ) {
        var r = n.lanes;
        (t |= r &= e.pendingLanes), (n.lanes = t), On(e, t);
      }
    }
    function Kl(e, n) {
      var t = e.updateQueue,
        r = e.alternate;
      if (null !== r && t === (r = r.updateQueue)) {
        var o = null,
          l = null;
        if (null !== (t = t.firstBaseUpdate)) {
          do {
            var a = {
              eventTime: t.eventTime,
              lane: t.lane,
              tag: t.tag,
              payload: t.payload,
              callback: t.callback,
              next: null,
            };
            null === l ? (o = l = a) : (l = l.next = a), (t = t.next);
          } while (null !== t);
          null === l ? (o = l = n) : (l = l.next = n);
        } else o = l = n;
        return (
          (t = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: l,
            shared: r.shared,
            effects: r.effects,
          }),
          void (e.updateQueue = t)
        );
      }
      null === (e = t.lastBaseUpdate) ? (t.firstBaseUpdate = n) : (e.next = n),
        (t.lastBaseUpdate = n);
    }
    function Xl(e, n, t, r) {
      var o = e.updateQueue;
      $l = !1;
      var l = o.firstBaseUpdate,
        a = o.lastBaseUpdate,
        i = o.shared.pending;
      if (null !== i) {
        o.shared.pending = null;
        var s = i,
          u = s.next;
        (s.next = null), null === a ? (l = u) : (a.next = u), (a = s);
        var c = e.alternate;
        null !== c &&
          (i = (c = c.updateQueue).lastBaseUpdate) !== a &&
          (null === i ? (c.firstBaseUpdate = u) : (i.next = u),
          (c.lastBaseUpdate = s));
      }
      if (null !== l) {
        var d = o.baseState;
        for (a = 0, c = u = s = null, i = l; ; ) {
          var f = i.lane,
            p = i.eventTime;
          if ((r & f) === f) {
            null !== c &&
              (c = c.next =
                {
                  eventTime: p,
                  lane: 0,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                });
            e: {
              var h = e,
                g = i;
              switch (((f = n), (p = t), g.tag)) {
                case 1:
                  if ("function" == typeof (h = g.payload)) {
                    d = h.call(p, d, f);
                    break e;
                  }
                  d = h;
                  break e;
                case 3:
                  h.flags = (-65537 & h.flags) | 128;
                case 0:
                  if (
                    null ==
                    (f =
                      "function" == typeof (h = g.payload)
                        ? h.call(p, d, f)
                        : h)
                  )
                    break e;
                  d = K({}, d, f);
                  break e;
                case 2:
                  $l = !0;
              }
            }
            null !== i.callback &&
              0 !== i.lane &&
              ((e.flags |= 64),
              null === (f = o.effects) ? (o.effects = [i]) : f.push(i));
          } else
            (p = {
              eventTime: p,
              lane: f,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            }),
              null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
              (a |= f);
          if (null === (i = i.next)) {
            if (null === (i = o.shared.pending)) break;
            (i = (f = i).next),
              (f.next = null),
              (o.lastBaseUpdate = f),
              (o.shared.pending = null);
          }
        }
        if (
          (null === c && (s = d),
          (o.baseState = s),
          (o.firstBaseUpdate = u),
          (o.lastBaseUpdate = c),
          null !== (n = o.shared.interleaved))
        ) {
          o = n;
          do {
            (a |= o.lane), (o = o.next);
          } while (o !== n);
        } else null === l && (o.shared.lanes = 0);
        (Ys |= a), (e.lanes = a), (e.memoizedState = d);
      }
    }
    function Jl(e, n, t) {
      if (((e = n.effects), (n.effects = null), null !== e))
        for (n = 0; n < e.length; n++) {
          var r = e[n],
            o = r.callback;
          if (null !== o) {
            if (((r.callback = null), (r = t), "function" != typeof o))
              throw Error(y(191, o));
            o.call(r);
          }
        }
    }
    var Zl = new m.Component().refs;
    function ea(e, n, t, r) {
      (t = null == (t = t(r, (n = e.memoizedState))) ? n : K({}, n, t)),
        (e.memoizedState = t),
        0 === e.lanes && (e.updateQueue.baseState = t);
    }
    var na = {
      isMounted: function (e) {
        return !!(e = e._reactInternals) && nn(e) === e;
      },
      enqueueSetState: function (e, n, t) {
        e = e._reactInternals;
        var r = pu(),
          o = hu(e),
          l = Gl(r, o);
        (l.payload = n),
          null != t && (l.callback = t),
          null !== (n = Ql(e, l, o)) && (gu(n, e, o, r), Yl(n, e, o));
      },
      enqueueReplaceState: function (e, n, t) {
        e = e._reactInternals;
        var r = pu(),
          o = hu(e),
          l = Gl(r, o);
        (l.tag = 1),
          (l.payload = n),
          null != t && (l.callback = t),
          null !== (n = Ql(e, l, o)) && (gu(n, e, o, r), Yl(n, e, o));
      },
      enqueueForceUpdate: function (e, n) {
        e = e._reactInternals;
        var t = pu(),
          r = hu(e),
          o = Gl(t, r);
        (o.tag = 2),
          null != n && (o.callback = n),
          null !== (n = Ql(e, o, r)) && (gu(n, e, r, t), Yl(n, e, r));
      },
    };
    function ta(e, n, t, r, o, l, a) {
      return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, l, a)
        : !n.prototype ||
            !n.prototype.isPureReactComponent ||
            !xr(t, r) ||
            !xr(o, l);
    }
    function ra(e, n, t) {
      var r = !1,
        o = qo,
        l = n.contextType;
      return (
        "object" == typeof l && null !== l
          ? (l = Ml(l))
          : ((o = Wo(n) ? $o : Bo.current),
            (l = (r = null != (r = n.contextTypes)) ? Vo(e, o) : qo)),
        (n = new n(t, l)),
        (e.memoizedState =
          null !== n.state && void 0 !== n.state ? n.state : null),
        (n.updater = na),
        (e.stateNode = n),
        (n._reactInternals = e),
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
          (e.__reactInternalMemoizedMaskedChildContext = l)),
        n
      );
    }
    function oa(e, n, t, r) {
      (e = n.state),
        "function" == typeof n.componentWillReceiveProps &&
          n.componentWillReceiveProps(t, r),
        "function" == typeof n.UNSAFE_componentWillReceiveProps &&
          n.UNSAFE_componentWillReceiveProps(t, r),
        n.state !== e && na.enqueueReplaceState(n, n.state, null);
    }
    function la(e, n, t, r) {
      var o = e.stateNode;
      (o.props = t), (o.state = e.memoizedState), (o.refs = Zl), Vl(e);
      var l = n.contextType;
      "object" == typeof l && null !== l
        ? (o.context = Ml(l))
        : ((l = Wo(n) ? $o : Bo.current), (o.context = Vo(e, l))),
        (o.state = e.memoizedState),
        "function" == typeof (l = n.getDerivedStateFromProps) &&
          (ea(e, n, l, t), (o.state = e.memoizedState)),
        "function" == typeof n.getDerivedStateFromProps ||
          "function" == typeof o.getSnapshotBeforeUpdate ||
          ("function" != typeof o.UNSAFE_componentWillMount &&
            "function" != typeof o.componentWillMount) ||
          ((n = o.state),
          "function" == typeof o.componentWillMount && o.componentWillMount(),
          "function" == typeof o.UNSAFE_componentWillMount &&
            o.UNSAFE_componentWillMount(),
          n !== o.state && na.enqueueReplaceState(o, o.state, null),
          Xl(e, t, o, r),
          (o.state = e.memoizedState)),
        "function" == typeof o.componentDidMount && (e.flags |= 4194308);
    }
    function aa(e, n, t) {
      if (
        null !== (e = t.ref) &&
        "function" != typeof e &&
        "object" != typeof e
      ) {
        if (t._owner) {
          if ((t = t._owner)) {
            if (1 !== t.tag) throw Error(y(309));
            var r = t.stateNode;
          }
          if (!r) throw Error(y(147, e));
          var o = r,
            l = "" + e;
          return null !== n &&
            null !== n.ref &&
            "function" == typeof n.ref &&
            n.ref._stringRef === l
            ? n.ref
            : ((n = function (e) {
                var n = o.refs;
                n === Zl && (n = o.refs = {}),
                  null === e ? delete n[l] : (n[l] = e);
              }),
              (n._stringRef = l),
              n);
        }
        if ("string" != typeof e) throw Error(y(284));
        if (!t._owner) throw Error(y(290, e));
      }
      return e;
    }
    function ia(e, n) {
      throw (
        ((e = Object.prototype.toString.call(n)),
        Error(
          y(
            31,
            "[object Object]" === e
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : e
          )
        ))
      );
    }
    function sa(e) {
      return (0, e._init)(e._payload);
    }
    function ua(e) {
      function n(n, t) {
        if (e) {
          var r = n.deletions;
          null === r ? ((n.deletions = [t]), (n.flags |= 16)) : r.push(t);
        }
      }
      function t(t, r) {
        if (!e) return null;
        for (; null !== r; ) n(t, r), (r = r.sibling);
        return null;
      }
      function r(e, n) {
        for (e = new Map(); null !== n; )
          null !== n.key ? e.set(n.key, n) : e.set(n.index, n), (n = n.sibling);
        return e;
      }
      function o(e, n) {
        return ((e = Wu(e, n)).index = 0), (e.sibling = null), e;
      }
      function l(n, t, r) {
        return (
          (n.index = r),
          e
            ? null !== (r = n.alternate)
              ? (r = r.index) < t
                ? ((n.flags |= 2), t)
                : r
              : ((n.flags |= 2), t)
            : ((n.flags |= 1048576), t)
        );
      }
      function a(n) {
        return e && null === n.alternate && (n.flags |= 2), n;
      }
      function i(e, n, t, r) {
        return null === n || 6 !== n.tag
          ? (((n = Ku(t, e.mode, r)).return = e), n)
          : (((n = o(n, t)).return = e), n);
      }
      function s(e, n, t, r) {
        var l = t.type;
        return l === I
          ? c(e, n, t.props.children, r, t.key)
          : null !== n &&
            (n.elementType === l ||
              ("object" == typeof l &&
                null !== l &&
                l.$$typeof === V &&
                sa(l) === n.type))
          ? (((r = o(n, t.props)).ref = aa(e, n, t)), (r.return = e), r)
          : (((r = Gu(t.type, t.key, t.props, null, e.mode, r)).ref = aa(
              e,
              n,
              t
            )),
            (r.return = e),
            r);
      }
      function u(e, n, t, r) {
        return null === n ||
          4 !== n.tag ||
          n.stateNode.containerInfo !== t.containerInfo ||
          n.stateNode.implementation !== t.implementation
          ? (((n = Xu(t, e.mode, r)).return = e), n)
          : (((n = o(n, t.children || [])).return = e), n);
      }
      function c(e, n, t, r, l) {
        return null === n || 7 !== n.tag
          ? (((n = Qu(t, e.mode, r, l)).return = e), n)
          : (((n = o(n, t)).return = e), n);
      }
      function d(e, n, t) {
        if (("string" == typeof n && "" !== n) || "number" == typeof n)
          return ((n = Ku("" + n, e.mode, t)).return = e), n;
        if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
            case R:
              return (
                ((t = Gu(n.type, n.key, n.props, null, e.mode, t)).ref = aa(
                  e,
                  null,
                  n
                )),
                (t.return = e),
                t
              );
            case D:
              return ((n = Xu(n, e.mode, t)).return = e), n;
            case V:
              return d(e, (0, n._init)(n._payload), t);
          }
          if (he(n) || Q(n))
            return ((n = Qu(n, e.mode, t, null)).return = e), n;
          ia(e, n);
        }
        return null;
      }
      function f(e, n, t, r) {
        var o = null !== n ? n.key : null;
        if (("string" == typeof t && "" !== t) || "number" == typeof t)
          return null !== o ? null : i(e, n, "" + t, r);
        if ("object" == typeof t && null !== t) {
          switch (t.$$typeof) {
            case R:
              return t.key === o ? s(e, n, t, r) : null;
            case D:
              return t.key === o ? u(e, n, t, r) : null;
            case V:
              return f(e, n, (o = t._init)(t._payload), r);
          }
          if (he(t) || Q(t)) return null !== o ? null : c(e, n, t, r, null);
          ia(e, t);
        }
        return null;
      }
      function p(e, n, t, r, o) {
        if (("string" == typeof r && "" !== r) || "number" == typeof r)
          return i(n, (e = e.get(t) || null), "" + r, o);
        if ("object" == typeof r && null !== r) {
          switch (r.$$typeof) {
            case R:
              return s(
                n,
                (e = e.get(null === r.key ? t : r.key) || null),
                r,
                o
              );
            case D:
              return u(
                n,
                (e = e.get(null === r.key ? t : r.key) || null),
                r,
                o
              );
            case V:
              return p(e, n, t, (0, r._init)(r._payload), o);
          }
          if (he(r) || Q(r)) return c(n, (e = e.get(t) || null), r, o, null);
          ia(n, r);
        }
        return null;
      }
      function h(o, a, i, s) {
        for (
          var u = null, c = null, h = a, g = (a = 0), m = null;
          null !== h && g < i.length;
          g++
        ) {
          h.index > g ? ((m = h), (h = null)) : (m = h.sibling);
          var b = f(o, h, i[g], s);
          if (null === b) {
            null === h && (h = m);
            break;
          }
          e && h && null === b.alternate && n(o, h),
            (a = l(b, a, g)),
            null === c ? (u = b) : (c.sibling = b),
            (c = b),
            (h = m);
        }
        if (g === i.length) return t(o, h), yl && fl(o, g), u;
        if (null === h) {
          for (; g < i.length; g++)
            null !== (h = d(o, i[g], s)) &&
              ((a = l(h, a, g)),
              null === c ? (u = h) : (c.sibling = h),
              (c = h));
          return yl && fl(o, g), u;
        }
        for (h = r(o, h); g < i.length; g++)
          null !== (m = p(h, o, g, i[g], s)) &&
            (e && null !== m.alternate && h.delete(null === m.key ? g : m.key),
            (a = l(m, a, g)),
            null === c ? (u = m) : (c.sibling = m),
            (c = m));
        return (
          e &&
            h.forEach(function (e) {
              return n(o, e);
            }),
          yl && fl(o, g),
          u
        );
      }
      function g(o, a, i, s) {
        var u = Q(i);
        if ("function" != typeof u) throw Error(y(150));
        if (null == (i = u.call(i))) throw Error(y(151));
        for (
          var c = (u = null), h = a, g = (a = 0), m = null, b = i.next();
          null !== h && !b.done;
          g++, b = i.next()
        ) {
          h.index > g ? ((m = h), (h = null)) : (m = h.sibling);
          var v = f(o, h, b.value, s);
          if (null === v) {
            null === h && (h = m);
            break;
          }
          e && h && null === v.alternate && n(o, h),
            (a = l(v, a, g)),
            null === c ? (u = v) : (c.sibling = v),
            (c = v),
            (h = m);
        }
        if (b.done) return t(o, h), yl && fl(o, g), u;
        if (null === h) {
          for (; !b.done; g++, b = i.next())
            null !== (b = d(o, b.value, s)) &&
              ((a = l(b, a, g)),
              null === c ? (u = b) : (c.sibling = b),
              (c = b));
          return yl && fl(o, g), u;
        }
        for (h = r(o, h); !b.done; g++, b = i.next())
          null !== (b = p(h, o, g, b.value, s)) &&
            (e && null !== b.alternate && h.delete(null === b.key ? g : b.key),
            (a = l(b, a, g)),
            null === c ? (u = b) : (c.sibling = b),
            (c = b));
        return (
          e &&
            h.forEach(function (e) {
              return n(o, e);
            }),
          yl && fl(o, g),
          u
        );
      }
      return function e(r, l, i, s) {
        if (
          ("object" == typeof i &&
            null !== i &&
            i.type === I &&
            null === i.key &&
            (i = i.props.children),
          "object" == typeof i && null !== i)
        ) {
          switch (i.$$typeof) {
            case R:
              e: {
                for (var u = i.key, c = l; null !== c; ) {
                  if (c.key === u) {
                    if ((u = i.type) === I) {
                      if (7 === c.tag) {
                        t(r, c.sibling),
                          ((l = o(c, i.props.children)).return = r),
                          (r = l);
                        break e;
                      }
                    } else if (
                      c.elementType === u ||
                      ("object" == typeof u &&
                        null !== u &&
                        u.$$typeof === V &&
                        sa(u) === c.type)
                    ) {
                      t(r, c.sibling),
                        ((l = o(c, i.props)).ref = aa(r, c, i)),
                        (l.return = r),
                        (r = l);
                      break e;
                    }
                    t(r, c);
                    break;
                  }
                  n(r, c), (c = c.sibling);
                }
                i.type === I
                  ? (((l = Qu(i.props.children, r.mode, s, i.key)).return = r),
                    (r = l))
                  : (((s = Gu(i.type, i.key, i.props, null, r.mode, s)).ref =
                      aa(r, l, i)),
                    (s.return = r),
                    (r = s));
              }
              return a(r);
            case D:
              e: {
                for (c = i.key; null !== l; ) {
                  if (l.key === c) {
                    if (
                      4 === l.tag &&
                      l.stateNode.containerInfo === i.containerInfo &&
                      l.stateNode.implementation === i.implementation
                    ) {
                      t(r, l.sibling),
                        ((l = o(l, i.children || [])).return = r),
                        (r = l);
                      break e;
                    }
                    t(r, l);
                    break;
                  }
                  n(r, l), (l = l.sibling);
                }
                ((l = Xu(i, r.mode, s)).return = r), (r = l);
              }
              return a(r);
            case V:
              return e(r, l, (c = i._init)(i._payload), s);
          }
          if (he(i)) return h(r, l, i, s);
          if (Q(i)) return g(r, l, i, s);
          ia(r, i);
        }
        return ("string" == typeof i && "" !== i) || "number" == typeof i
          ? ((i = "" + i),
            null !== l && 6 === l.tag
              ? (t(r, l.sibling), ((l = o(l, i)).return = r), (r = l))
              : (t(r, l), ((l = Ku(i, r.mode, s)).return = r), (r = l)),
            a(r))
          : t(r, l);
      };
    }
    var ca = ua(!0),
      da = ua(!1),
      fa = {},
      pa = zo(fa),
      ha = zo(fa),
      ga = zo(fa);
    function ma(e) {
      if (e === fa) throw Error(y(174));
      return e;
    }
    function ba(e, n) {
      switch ((Uo(ga, n), Uo(ha, e), Uo(pa, fa), (e = n.nodeType))) {
        case 9:
        case 11:
          n = (n = n.documentElement) ? n.namespaceURI : xe(null, "");
          break;
        default:
          n = xe(
            (n = (e = 8 === e ? n.parentNode : n).namespaceURI || null),
            (e = e.tagName)
          );
      }
      Mo(pa), Uo(pa, n);
    }
    function ya() {
      Mo(pa), Mo(ha), Mo(ga);
    }
    function va(e) {
      ma(ga.current);
      var n = ma(pa.current),
        t = xe(n, e.type);
      n !== t && (Uo(ha, e), Uo(pa, t));
    }
    function ka(e) {
      ha.current === e && (Mo(pa), Mo(ha));
    }
    var xa = zo(0);
    function wa(e) {
      for (var n = e; null !== n; ) {
        if (13 === n.tag) {
          var t = n.memoizedState;
          if (
            null !== t &&
            (null === (t = t.dehydrated) || "$?" === t.data || "$!" === t.data)
          )
            return n;
        } else if (19 === n.tag && void 0 !== n.memoizedProps.revealOrder) {
          if (0 != (128 & n.flags)) return n;
        } else if (null !== n.child) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === e) break;
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === e) return null;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
      return null;
    }
    var Sa = [];
    function Ea() {
      for (var e = 0; e < Sa.length; e++)
        Sa[e]._workInProgressVersionPrimary = null;
      Sa.length = 0;
    }
    var Ca = _.ReactCurrentDispatcher,
      Na = _.ReactCurrentBatchConfig,
      La = 0,
      Aa = null,
      Ta = null,
      Pa = null,
      Fa = !1,
      Oa = !1,
      _a = 0,
      Ra = 0;
    function Da() {
      throw Error(y(321));
    }
    function Ia(e, n) {
      if (null === n) return !1;
      for (var t = 0; t < n.length && t < e.length; t++)
        if (!kr(e[t], n[t])) return !1;
      return !0;
    }
    function ja(e, n, t, r, o, l) {
      if (
        ((La = l),
        (Aa = n),
        (n.memoizedState = null),
        (n.updateQueue = null),
        (n.lanes = 0),
        (Ca.current = null === e || null === e.memoizedState ? ki : xi),
        (e = t(r, o)),
        Oa)
      ) {
        l = 0;
        do {
          if (((Oa = !1), (_a = 0), 25 <= l)) throw Error(y(301));
          (l += 1),
            (Pa = Ta = null),
            (n.updateQueue = null),
            (Ca.current = wi),
            (e = t(r, o));
        } while (Oa);
      }
      if (
        ((Ca.current = vi),
        (n = null !== Ta && null !== Ta.next),
        (La = 0),
        (Pa = Ta = Aa = null),
        (Fa = !1),
        n)
      )
        throw Error(y(300));
      return e;
    }
    function za() {
      var e = 0 !== _a;
      return (_a = 0), e;
    }
    function Ma() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return null === Pa ? (Aa.memoizedState = Pa = e) : (Pa = Pa.next = e), Pa;
    }
    function Ua() {
      if (null === Ta) {
        var e = Aa.alternate;
        e = null !== e ? e.memoizedState : null;
      } else e = Ta.next;
      var n = null === Pa ? Aa.memoizedState : Pa.next;
      if (null !== n) (Pa = n), (Ta = e);
      else {
        if (null === e) throw Error(y(310));
        (e = {
          memoizedState: (Ta = e).memoizedState,
          baseState: Ta.baseState,
          baseQueue: Ta.baseQueue,
          queue: Ta.queue,
          next: null,
        }),
          null === Pa ? (Aa.memoizedState = Pa = e) : (Pa = Pa.next = e);
      }
      return Pa;
    }
    function qa(e, n) {
      return "function" == typeof n ? n(e) : n;
    }
    function Ba(e) {
      var n = Ua(),
        t = n.queue;
      if (null === t) throw Error(y(311));
      t.lastRenderedReducer = e;
      var r = Ta,
        o = r.baseQueue,
        l = t.pending;
      if (null !== l) {
        if (null !== o) {
          var a = o.next;
          (o.next = l.next), (l.next = a);
        }
        (r.baseQueue = o = l), (t.pending = null);
      }
      if (null !== o) {
        (l = o.next), (r = r.baseState);
        var i = (a = null),
          s = null,
          u = l;
        do {
          var c = u.lane;
          if ((La & c) === c)
            null !== s &&
              (s = s.next =
                {
                  lane: 0,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                }),
              (r = u.hasEagerState ? u.eagerState : e(r, u.action));
          else {
            var d = {
              lane: c,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            };
            null === s ? ((i = s = d), (a = r)) : (s = s.next = d),
              (Aa.lanes |= c),
              (Ys |= c);
          }
          u = u.next;
        } while (null !== u && u !== l);
        null === s ? (a = r) : (s.next = i),
          kr(r, n.memoizedState) || (_i = !0),
          (n.memoizedState = r),
          (n.baseState = a),
          (n.baseQueue = s),
          (t.lastRenderedState = r);
      }
      if (null !== (e = t.interleaved)) {
        o = e;
        do {
          (l = o.lane), (Aa.lanes |= l), (Ys |= l), (o = o.next);
        } while (o !== e);
      } else null === o && (t.lanes = 0);
      return [n.memoizedState, t.dispatch];
    }
    function Ha(e) {
      var n = Ua(),
        t = n.queue;
      if (null === t) throw Error(y(311));
      t.lastRenderedReducer = e;
      var r = t.dispatch,
        o = t.pending,
        l = n.memoizedState;
      if (null !== o) {
        t.pending = null;
        var a = (o = o.next);
        do {
          (l = e(l, a.action)), (a = a.next);
        } while (a !== o);
        kr(l, n.memoizedState) || (_i = !0),
          (n.memoizedState = l),
          null === n.baseQueue && (n.baseState = l),
          (t.lastRenderedState = l);
      }
      return [l, r];
    }
    function $a() {}
    function Va(e, n) {
      var t = Aa,
        r = Ua(),
        o = n(),
        l = !kr(r.memoizedState, o);
      if (
        (l && ((r.memoizedState = o), (_i = !0)),
        (r = r.queue),
        ri(Qa.bind(null, t, r, e), [e]),
        r.getSnapshot !== n || l || (null !== Pa && 1 & Pa.memoizedState.tag))
      ) {
        if (
          ((t.flags |= 2048),
          Ja(9, Ga.bind(null, t, r, o, n), void 0, null),
          null === Bs)
        )
          throw Error(y(349));
        0 != (30 & La) || Wa(t, n, o);
      }
      return o;
    }
    function Wa(e, n, t) {
      (e.flags |= 16384),
        (e = { getSnapshot: n, value: t }),
        null === (n = Aa.updateQueue)
          ? ((n = { lastEffect: null, stores: null }),
            (Aa.updateQueue = n),
            (n.stores = [e]))
          : null === (t = n.stores)
          ? (n.stores = [e])
          : t.push(e);
    }
    function Ga(e, n, t, r) {
      (n.value = t), (n.getSnapshot = r), Ya(n) && Ka(e);
    }
    function Qa(e, n, t) {
      return t(function () {
        Ya(n) && Ka(e);
      });
    }
    function Ya(e) {
      var n = e.getSnapshot;
      e = e.value;
      try {
        var t = n();
        return !kr(e, t);
      } catch (e) {
        return !0;
      }
    }
    function Ka(e) {
      var n = Hl(e, 1);
      null !== n && gu(n, e, 1, -1);
    }
    function Xa(e) {
      var n = Ma();
      return (
        "function" == typeof e && (e = e()),
        (n.memoizedState = n.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: qa,
          lastRenderedState: e,
        }),
        (n.queue = e),
        (e = e.dispatch = gi.bind(null, Aa, e)),
        [n.memoizedState, e]
      );
    }
    function Ja(e, n, t, r) {
      return (
        (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
        null === (n = Aa.updateQueue)
          ? ((n = { lastEffect: null, stores: null }),
            (Aa.updateQueue = n),
            (n.lastEffect = e.next = e))
          : null === (t = n.lastEffect)
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e)),
        e
      );
    }
    function Za() {
      return Ua().memoizedState;
    }
    function ei(e, n, t, r) {
      var o = Ma();
      (Aa.flags |= e),
        (o.memoizedState = Ja(1 | n, t, void 0, void 0 === r ? null : r));
    }
    function ni(e, n, t, r) {
      var o = Ua();
      r = void 0 === r ? null : r;
      var l = void 0;
      if (null !== Ta) {
        var a = Ta.memoizedState;
        if (((l = a.destroy), null !== r && Ia(r, a.deps)))
          return void (o.memoizedState = Ja(n, t, l, r));
      }
      (Aa.flags |= e), (o.memoizedState = Ja(1 | n, t, l, r));
    }
    function ti(e, n) {
      return ei(8390656, 8, e, n);
    }
    function ri(e, n) {
      return ni(2048, 8, e, n);
    }
    function oi(e, n) {
      return ni(4, 2, e, n);
    }
    function li(e, n) {
      return ni(4, 4, e, n);
    }
    function ai(e, n) {
      return "function" == typeof n
        ? ((e = e()),
          n(e),
          function () {
            n(null);
          })
        : null != n
        ? ((e = e()),
          (n.current = e),
          function () {
            n.current = null;
          })
        : void 0;
    }
    function ii(e, n, t) {
      return (
        (t = null != t ? t.concat([e]) : null), ni(4, 4, ai.bind(null, n, e), t)
      );
    }
    function si() {}
    function ui(e, n) {
      var t = Ua();
      n = void 0 === n ? null : n;
      var r = t.memoizedState;
      return null !== r && null !== n && Ia(n, r[1])
        ? r[0]
        : ((t.memoizedState = [e, n]), e);
    }
    function ci(e, n) {
      var t = Ua();
      n = void 0 === n ? null : n;
      var r = t.memoizedState;
      return null !== r && null !== n && Ia(n, r[1])
        ? r[0]
        : ((e = e()), (t.memoizedState = [e, n]), e);
    }
    function di(e, n, t) {
      return 0 == (21 & La)
        ? (e.baseState && ((e.baseState = !1), (_i = !0)),
          (e.memoizedState = t))
        : (kr(t, n) ||
            ((t = Tn()), (Aa.lanes |= t), (Ys |= t), (e.baseState = !0)),
          n);
    }
    function fi(e, n) {
      var t = _n;
      (_n = 0 !== t && 4 > t ? t : 4), e(!0);
      var r = Na.transition;
      Na.transition = {};
      try {
        e(!1), n();
      } finally {
        (_n = t), (Na.transition = r);
      }
    }
    function pi() {
      return Ua().memoizedState;
    }
    function hi(e, n, t) {
      var r = hu(e);
      if (
        ((t = {
          lane: r,
          action: t,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        mi(e))
      )
        bi(n, t);
      else if (null !== (t = Bl(e, n, t, r))) {
        gu(t, e, r, pu()), yi(t, n, r);
      }
    }
    function gi(e, n, t) {
      var r = hu(e),
        o = {
          lane: r,
          action: t,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (mi(e)) bi(n, o);
      else {
        var l = e.alternate;
        if (
          0 === e.lanes &&
          (null === l || 0 === l.lanes) &&
          null !== (l = n.lastRenderedReducer)
        )
          try {
            var a = n.lastRenderedState,
              i = l(a, t);
            if (((o.hasEagerState = !0), (o.eagerState = i), kr(i, a))) {
              var s = n.interleaved;
              return (
                null === s
                  ? ((o.next = o), ql(n))
                  : ((o.next = s.next), (s.next = o)),
                void (n.interleaved = o)
              );
            }
          } catch (e) {}
        null !== (t = Bl(e, n, o, r)) && (gu(t, e, r, (o = pu())), yi(t, n, r));
      }
    }
    function mi(e) {
      var n = e.alternate;
      return e === Aa || (null !== n && n === Aa);
    }
    function bi(e, n) {
      Oa = Fa = !0;
      var t = e.pending;
      null === t ? (n.next = n) : ((n.next = t.next), (t.next = n)),
        (e.pending = n);
    }
    function yi(e, n, t) {
      if (0 != (4194240 & t)) {
        var r = n.lanes;
        (t |= r &= e.pendingLanes), (n.lanes = t), On(e, t);
      }
    }
    var vi = {
        readContext: Ml,
        useCallback: Da,
        useContext: Da,
        useEffect: Da,
        useImperativeHandle: Da,
        useInsertionEffect: Da,
        useLayoutEffect: Da,
        useMemo: Da,
        useReducer: Da,
        useRef: Da,
        useState: Da,
        useDebugValue: Da,
        useDeferredValue: Da,
        useTransition: Da,
        useMutableSource: Da,
        useSyncExternalStore: Da,
        useId: Da,
        unstable_isNewReconciler: !1,
      },
      ki = {
        readContext: Ml,
        useCallback: function (e, n) {
          return (Ma().memoizedState = [e, void 0 === n ? null : n]), e;
        },
        useContext: Ml,
        useEffect: ti,
        useImperativeHandle: function (e, n, t) {
          return (
            (t = null != t ? t.concat([e]) : null),
            ei(4194308, 4, ai.bind(null, n, e), t)
          );
        },
        useLayoutEffect: function (e, n) {
          return ei(4194308, 4, e, n);
        },
        useInsertionEffect: function (e, n) {
          return ei(4, 2, e, n);
        },
        useMemo: function (e, n) {
          var t = Ma();
          return (
            (n = void 0 === n ? null : n),
            (e = e()),
            (t.memoizedState = [e, n]),
            e
          );
        },
        useReducer: function (e, n, t) {
          var r = Ma();
          return (
            (n = void 0 !== t ? t(n) : n),
            (r.memoizedState = r.baseState = n),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: n,
            }),
            (r.queue = e),
            (e = e.dispatch = hi.bind(null, Aa, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          return (e = { current: e }), (Ma().memoizedState = e);
        },
        useState: Xa,
        useDebugValue: si,
        useDeferredValue: function (e) {
          return (Ma().memoizedState = e);
        },
        useTransition: function () {
          var e = Xa(!1),
            n = e[0];
          return (e = fi.bind(null, e[1])), (Ma().memoizedState = e), [n, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, n, t) {
          var r = Aa,
            o = Ma();
          if (yl) {
            if (void 0 === t) throw Error(y(407));
            t = t();
          } else {
            if (((t = n()), null === Bs)) throw Error(y(349));
            0 != (30 & La) || Wa(r, n, t);
          }
          o.memoizedState = t;
          var l = { value: t, getSnapshot: n };
          return (
            (o.queue = l),
            ti(Qa.bind(null, r, l, e), [e]),
            (r.flags |= 2048),
            Ja(9, Ga.bind(null, r, l, t, n), void 0, null),
            t
          );
        },
        useId: function () {
          var e = Ma(),
            n = Bs.identifierPrefix;
          if (yl) {
            var t = dl;
            (n =
              ":" +
              n +
              "R" +
              (t = (cl & ~(1 << (32 - kn(cl) - 1))).toString(32) + t)),
              0 < (t = _a++) && (n += "H" + t.toString(32)),
              (n += ":");
          } else n = ":" + n + "r" + (t = Ra++).toString(32) + ":";
          return (e.memoizedState = n);
        },
        unstable_isNewReconciler: !1,
      },
      xi = {
        readContext: Ml,
        useCallback: ui,
        useContext: Ml,
        useEffect: ri,
        useImperativeHandle: ii,
        useInsertionEffect: oi,
        useLayoutEffect: li,
        useMemo: ci,
        useReducer: Ba,
        useRef: Za,
        useState: function () {
          return Ba(qa);
        },
        useDebugValue: si,
        useDeferredValue: function (e) {
          return di(Ua(), Ta.memoizedState, e);
        },
        useTransition: function () {
          return [Ba(qa)[0], Ua().memoizedState];
        },
        useMutableSource: $a,
        useSyncExternalStore: Va,
        useId: pi,
        unstable_isNewReconciler: !1,
      },
      wi = {
        readContext: Ml,
        useCallback: ui,
        useContext: Ml,
        useEffect: ri,
        useImperativeHandle: ii,
        useInsertionEffect: oi,
        useLayoutEffect: li,
        useMemo: ci,
        useReducer: Ha,
        useRef: Za,
        useState: function () {
          return Ha(qa);
        },
        useDebugValue: si,
        useDeferredValue: function (e) {
          var n = Ua();
          return null === Ta
            ? (n.memoizedState = e)
            : di(n, Ta.memoizedState, e);
        },
        useTransition: function () {
          return [Ha(qa)[0], Ua().memoizedState];
        },
        useMutableSource: $a,
        useSyncExternalStore: Va,
        useId: pi,
        unstable_isNewReconciler: !1,
      };
    function Si(e, n) {
      try {
        var t = "",
          r = n;
        do {
          (t += ee(r)), (r = r.return);
        } while (r);
        var o = t;
      } catch (e) {
        o = "\nError generating stack: " + e.message + "\n" + e.stack;
      }
      return { value: e, source: n, stack: o, digest: null };
    }
    function Ei(e, n, t) {
      return {
        value: e,
        source: null,
        stack: null != t ? t : null,
        digest: null != n ? n : null,
      };
    }
    function Ci(e, n) {
      try {
        console.error(n.value);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    var Ni = "function" == typeof WeakMap ? WeakMap : Map;
    function Li(e, n, t) {
      ((t = Gl(-1, t)).tag = 3), (t.payload = { element: null });
      var r = n.value;
      return (
        (t.callback = function () {
          ru || ((ru = !0), (ou = r)), Ci(0, n);
        }),
        t
      );
    }
    function Ai(e, n, t) {
      (t = Gl(-1, t)).tag = 3;
      var r = e.type.getDerivedStateFromError;
      if ("function" == typeof r) {
        var o = n.value;
        (t.payload = function () {
          return r(o);
        }),
          (t.callback = function () {
            Ci(0, n);
          });
      }
      var l = e.stateNode;
      return (
        null !== l &&
          "function" == typeof l.componentDidCatch &&
          (t.callback = function () {
            Ci(0, n),
              "function" != typeof r &&
                (null === lu ? (lu = new Set([this])) : lu.add(this));
            var e = n.stack;
            this.componentDidCatch(n.value, {
              componentStack: null !== e ? e : "",
            });
          }),
        t
      );
    }
    function Ti(e, n, t) {
      var r = e.pingCache;
      if (null === r) {
        r = e.pingCache = new Ni();
        var o = new Set();
        r.set(n, o);
      } else void 0 === (o = r.get(n)) && ((o = new Set()), r.set(n, o));
      o.has(t) || (o.add(t), (e = zu.bind(null, e, n, t)), n.then(e, e));
    }
    function Pi(e) {
      do {
        var n;
        if (
          ((n = 13 === e.tag) &&
            (n = null === (n = e.memoizedState) || null !== n.dehydrated),
          n)
        )
          return e;
        e = e.return;
      } while (null !== e);
      return null;
    }
    function Fi(e, n, t, r, o) {
      return 0 == (1 & e.mode)
        ? (e === n
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (t.flags |= 131072),
              (t.flags &= -52805),
              1 === t.tag &&
                (null === t.alternate
                  ? (t.tag = 17)
                  : (((n = Gl(-1, 1)).tag = 2), Ql(t, n, 1))),
              (t.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = o), e);
    }
    var Oi = _.ReactCurrentOwner,
      _i = !1;
    function Ri(e, n, t, r) {
      n.child = null === e ? da(n, null, t, r) : ca(n, e.child, t, r);
    }
    function Di(e, n, t, r, o) {
      t = t.render;
      var l = n.ref;
      return (
        zl(n, o),
        (r = ja(e, n, t, r, l, o)),
        (t = za()),
        null === e || _i
          ? (yl && t && hl(n), (n.flags |= 1), Ri(e, n, r, o), n.child)
          : ((n.updateQueue = e.updateQueue),
            (n.flags &= -2053),
            (e.lanes &= ~o),
            rs(e, n, o))
      );
    }
    function Ii(e, n, t, r, o) {
      if (null === e) {
        var l = t.type;
        return "function" != typeof l ||
          Vu(l) ||
          void 0 !== l.defaultProps ||
          null !== t.compare ||
          void 0 !== t.defaultProps
          ? (((e = Gu(t.type, null, r, n, n.mode, o)).ref = n.ref),
            (e.return = n),
            (n.child = e))
          : ((n.tag = 15), (n.type = l), ji(e, n, l, r, o));
      }
      if (((l = e.child), 0 == (e.lanes & o))) {
        var a = l.memoizedProps;
        if ((t = null !== (t = t.compare) ? t : xr)(a, r) && e.ref === n.ref)
          return rs(e, n, o);
      }
      return (
        (n.flags |= 1),
        ((e = Wu(l, r)).ref = n.ref),
        (e.return = n),
        (n.child = e)
      );
    }
    function ji(e, n, t, r, o) {
      if (null !== e) {
        var l = e.memoizedProps;
        if (xr(l, r) && e.ref === n.ref) {
          if (((_i = !1), (n.pendingProps = r = l), 0 == (e.lanes & o)))
            return (n.lanes = e.lanes), rs(e, n, o);
          0 != (131072 & e.flags) && (_i = !0);
        }
      }
      return Ui(e, n, t, r, o);
    }
    function zi(e, n, t) {
      var r = n.pendingProps,
        o = r.children,
        l = null !== e ? e.memoizedState : null;
      if ("hidden" === r.mode)
        if (0 == (1 & n.mode))
          (n.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            Uo(Ws, Vs),
            (Vs |= t);
        else {
          if (0 == (1073741824 & t))
            return (
              (e = null !== l ? l.baseLanes | t : t),
              (n.lanes = n.childLanes = 1073741824),
              (n.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null,
              }),
              (n.updateQueue = null),
              Uo(Ws, Vs),
              (Vs |= e),
              null
            );
          (n.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (r = null !== l ? l.baseLanes : t),
            Uo(Ws, Vs),
            (Vs |= r);
        }
      else
        null !== l
          ? ((r = l.baseLanes | t), (n.memoizedState = null))
          : (r = t),
          Uo(Ws, Vs),
          (Vs |= r);
      return Ri(e, n, o, t), n.child;
    }
    function Mi(e, n) {
      var t = n.ref;
      ((null === e && null !== t) || (null !== e && e.ref !== t)) &&
        ((n.flags |= 512), (n.flags |= 2097152));
    }
    function Ui(e, n, t, r, o) {
      var l = Wo(t) ? $o : Bo.current;
      return (
        (l = Vo(n, l)),
        zl(n, o),
        (t = ja(e, n, t, r, l, o)),
        (r = za()),
        null === e || _i
          ? (yl && r && hl(n), (n.flags |= 1), Ri(e, n, t, o), n.child)
          : ((n.updateQueue = e.updateQueue),
            (n.flags &= -2053),
            (e.lanes &= ~o),
            rs(e, n, o))
      );
    }
    function qi(e, n, t, r, o) {
      if (Wo(t)) {
        var l = !0;
        Ko(n);
      } else l = !1;
      if ((zl(n, o), null === n.stateNode))
        ts(e, n), ra(n, t, r), la(n, t, r, o), (r = !0);
      else if (null === e) {
        var a = n.stateNode,
          i = n.memoizedProps;
        a.props = i;
        var s = a.context,
          u = t.contextType;
        "object" == typeof u && null !== u
          ? (u = Ml(u))
          : (u = Vo(n, (u = Wo(t) ? $o : Bo.current)));
        var c = t.getDerivedStateFromProps,
          d =
            "function" == typeof c ||
            "function" == typeof a.getSnapshotBeforeUpdate;
        d ||
          ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
            "function" != typeof a.componentWillReceiveProps) ||
          ((i !== r || s !== u) && oa(n, a, r, u)),
          ($l = !1);
        var f = n.memoizedState;
        (a.state = f),
          Xl(n, r, a, o),
          (s = n.memoizedState),
          i !== r || f !== s || Ho.current || $l
            ? ("function" == typeof c &&
                (ea(n, t, c, r), (s = n.memoizedState)),
              (i = $l || ta(n, t, i, r, f, s, u))
                ? (d ||
                    ("function" != typeof a.UNSAFE_componentWillMount &&
                      "function" != typeof a.componentWillMount) ||
                    ("function" == typeof a.componentWillMount &&
                      a.componentWillMount(),
                    "function" == typeof a.UNSAFE_componentWillMount &&
                      a.UNSAFE_componentWillMount()),
                  "function" == typeof a.componentDidMount &&
                    (n.flags |= 4194308))
                : ("function" == typeof a.componentDidMount &&
                    (n.flags |= 4194308),
                  (n.memoizedProps = r),
                  (n.memoizedState = s)),
              (a.props = r),
              (a.state = s),
              (a.context = u),
              (r = i))
            : ("function" == typeof a.componentDidMount && (n.flags |= 4194308),
              (r = !1));
      } else {
        (a = n.stateNode),
          Wl(e, n),
          (i = n.memoizedProps),
          (u = n.type === n.elementType ? i : Pl(n.type, i)),
          (a.props = u),
          (d = n.pendingProps),
          (f = a.context),
          "object" == typeof (s = t.contextType) && null !== s
            ? (s = Ml(s))
            : (s = Vo(n, (s = Wo(t) ? $o : Bo.current)));
        var p = t.getDerivedStateFromProps;
        (c =
          "function" == typeof p ||
          "function" == typeof a.getSnapshotBeforeUpdate) ||
          ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
            "function" != typeof a.componentWillReceiveProps) ||
          ((i !== d || f !== s) && oa(n, a, r, s)),
          ($l = !1),
          (f = n.memoizedState),
          (a.state = f),
          Xl(n, r, a, o);
        var h = n.memoizedState;
        i !== d || f !== h || Ho.current || $l
          ? ("function" == typeof p && (ea(n, t, p, r), (h = n.memoizedState)),
            (u = $l || ta(n, t, u, r, f, h, s) || !1)
              ? (c ||
                  ("function" != typeof a.UNSAFE_componentWillUpdate &&
                    "function" != typeof a.componentWillUpdate) ||
                  ("function" == typeof a.componentWillUpdate &&
                    a.componentWillUpdate(r, h, s),
                  "function" == typeof a.UNSAFE_componentWillUpdate &&
                    a.UNSAFE_componentWillUpdate(r, h, s)),
                "function" == typeof a.componentDidUpdate && (n.flags |= 4),
                "function" == typeof a.getSnapshotBeforeUpdate &&
                  (n.flags |= 1024))
              : ("function" != typeof a.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (n.flags |= 4),
                "function" != typeof a.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (n.flags |= 1024),
                (n.memoizedProps = r),
                (n.memoizedState = h)),
            (a.props = r),
            (a.state = h),
            (a.context = s),
            (r = u))
          : ("function" != typeof a.componentDidUpdate ||
              (i === e.memoizedProps && f === e.memoizedState) ||
              (n.flags |= 4),
            "function" != typeof a.getSnapshotBeforeUpdate ||
              (i === e.memoizedProps && f === e.memoizedState) ||
              (n.flags |= 1024),
            (r = !1));
      }
      return Bi(e, n, t, r, l, o);
    }
    function Bi(e, n, t, r, o, l) {
      Mi(e, n);
      var a = 0 != (128 & n.flags);
      if (!r && !a) return o && Xo(n, t, !1), rs(e, n, l);
      (r = n.stateNode), (Oi.current = n);
      var i =
        a && "function" != typeof t.getDerivedStateFromError
          ? null
          : r.render();
      return (
        (n.flags |= 1),
        null !== e && a
          ? ((n.child = ca(n, e.child, null, l)), (n.child = ca(n, null, i, l)))
          : Ri(e, n, i, l),
        (n.memoizedState = r.state),
        o && Xo(n, t, !0),
        n.child
      );
    }
    function Hi(e) {
      var n = e.stateNode;
      n.pendingContext
        ? Qo(0, n.pendingContext, n.pendingContext !== n.context)
        : n.context && Qo(0, n.context, !1),
        ba(e, n.containerInfo);
    }
    function $i(e, n, t, r, o) {
      return Ll(), Al(o), (n.flags |= 256), Ri(e, n, t, r), n.child;
    }
    var Vi,
      Wi,
      Gi,
      Qi = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Yi(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function Ki(e, n, t) {
      var r,
        o = n.pendingProps,
        l = xa.current,
        a = !1,
        i = 0 != (128 & n.flags);
      if (
        ((r = i) ||
          (r = (null === e || null !== e.memoizedState) && 0 != (2 & l)),
        r
          ? ((a = !0), (n.flags &= -129))
          : (null !== e && null === e.memoizedState) || (l |= 1),
        Uo(xa, 1 & l),
        null === e)
      )
        return (
          Sl(n),
          null !== (e = n.memoizedState) && null !== (e = e.dehydrated)
            ? (0 == (1 & n.mode)
                ? (n.lanes = 1)
                : "$!" === e.data
                ? (n.lanes = 8)
                : (n.lanes = 1073741824),
              null)
            : ((i = o.children),
              (e = o.fallback),
              a
                ? ((o = n.mode),
                  (a = n.child),
                  (i = { mode: "hidden", children: i }),
                  0 == (1 & o) && null !== a
                    ? ((a.childLanes = 0), (a.pendingProps = i))
                    : (a = Yu(i, o, 0, null)),
                  (e = Qu(e, o, t, null)),
                  (a.return = n),
                  (e.return = n),
                  (a.sibling = e),
                  (n.child = a),
                  (n.child.memoizedState = Yi(t)),
                  (n.memoizedState = Qi),
                  e)
                : Xi(n, i))
        );
      if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
        return (function (e, n, t, r, o, l, a) {
          if (t)
            return 256 & n.flags
              ? ((n.flags &= -257), Ji(e, n, a, (r = Ei(Error(y(422))))))
              : null !== n.memoizedState
              ? ((n.child = e.child), (n.flags |= 128), null)
              : ((l = r.fallback),
                (o = n.mode),
                (r = Yu({ mode: "visible", children: r.children }, o, 0, null)),
                ((l = Qu(l, o, a, null)).flags |= 2),
                (r.return = n),
                (l.return = n),
                (r.sibling = l),
                (n.child = r),
                0 != (1 & n.mode) && ca(n, e.child, null, a),
                (n.child.memoizedState = Yi(a)),
                (n.memoizedState = Qi),
                l);
          if (0 == (1 & n.mode)) return Ji(e, n, a, null);
          if ("$!" === o.data) {
            if ((r = o.nextSibling && o.nextSibling.dataset)) var i = r.dgst;
            return (
              (r = i), Ji(e, n, a, (r = Ei((l = Error(y(419))), r, void 0)))
            );
          }
          if (((i = 0 != (a & e.childLanes)), _i || i)) {
            if (null !== (r = Bs)) {
              switch (a & -a) {
                case 4:
                  o = 2;
                  break;
                case 16:
                  o = 8;
                  break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                  o = 32;
                  break;
                case 536870912:
                  o = 268435456;
                  break;
                default:
                  o = 0;
              }
              0 !== (o = 0 != (o & (r.suspendedLanes | a)) ? 0 : o) &&
                o !== l.retryLane &&
                ((l.retryLane = o), Hl(e, o), gu(r, e, o, -1));
            }
            return Au(), Ji(e, n, a, (r = Ei(Error(y(421)))));
          }
          return "$?" === o.data
            ? ((n.flags |= 128),
              (n.child = e.child),
              (n = Uu.bind(null, e)),
              (o._reactRetry = n),
              null)
            : ((e = l.treeContext),
              (bl = So(o.nextSibling)),
              (ml = n),
              (yl = !0),
              (vl = null),
              null !== e &&
                ((il[sl++] = cl),
                (il[sl++] = dl),
                (il[sl++] = ul),
                (cl = e.id),
                (dl = e.overflow),
                (ul = n)),
              (n = Xi(n, r.children)),
              (n.flags |= 4096),
              n);
        })(e, n, i, o, r, l, t);
      if (a) {
        (a = o.fallback), (i = n.mode), (r = (l = e.child).sibling);
        var s = { mode: "hidden", children: o.children };
        return (
          0 == (1 & i) && n.child !== l
            ? (((o = n.child).childLanes = 0),
              (o.pendingProps = s),
              (n.deletions = null))
            : ((o = Wu(l, s)).subtreeFlags = 14680064 & l.subtreeFlags),
          null !== r ? (a = Wu(r, a)) : ((a = Qu(a, i, t, null)).flags |= 2),
          (a.return = n),
          (o.return = n),
          (o.sibling = a),
          (n.child = o),
          (o = a),
          (a = n.child),
          (i =
            null === (i = e.child.memoizedState)
              ? Yi(t)
              : {
                  baseLanes: i.baseLanes | t,
                  cachePool: null,
                  transitions: i.transitions,
                }),
          (a.memoizedState = i),
          (a.childLanes = e.childLanes & ~t),
          (n.memoizedState = Qi),
          o
        );
      }
      return (
        (e = (a = e.child).sibling),
        (o = Wu(a, { mode: "visible", children: o.children })),
        0 == (1 & n.mode) && (o.lanes = t),
        (o.return = n),
        (o.sibling = null),
        null !== e &&
          (null === (t = n.deletions)
            ? ((n.deletions = [e]), (n.flags |= 16))
            : t.push(e)),
        (n.child = o),
        (n.memoizedState = null),
        o
      );
    }
    function Xi(e, n) {
      return (
        ((n = Yu({ mode: "visible", children: n }, e.mode, 0, null)).return =
          e),
        (e.child = n)
      );
    }
    function Ji(e, n, t, r) {
      return (
        null !== r && Al(r),
        ca(n, e.child, null, t),
        ((e = Xi(n, n.pendingProps.children)).flags |= 2),
        (n.memoizedState = null),
        e
      );
    }
    function Zi(e, n, t) {
      e.lanes |= n;
      var r = e.alternate;
      null !== r && (r.lanes |= n), jl(e.return, n, t);
    }
    function es(e, n, t, r, o) {
      var l = e.memoizedState;
      null === l
        ? (e.memoizedState = {
            isBackwards: n,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: t,
            tailMode: o,
          })
        : ((l.isBackwards = n),
          (l.rendering = null),
          (l.renderingStartTime = 0),
          (l.last = r),
          (l.tail = t),
          (l.tailMode = o));
    }
    function ns(e, n, t) {
      var r = n.pendingProps,
        o = r.revealOrder,
        l = r.tail;
      if ((Ri(e, n, r.children, t), 0 != (2 & (r = xa.current))))
        (r = (1 & r) | 2), (n.flags |= 128);
      else {
        if (null !== e && 0 != (128 & e.flags))
          e: for (e = n.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && Zi(e, t, n);
            else if (19 === e.tag) Zi(e, t, n);
            else if (null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === n) break e;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === n) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        r &= 1;
      }
      if ((Uo(xa, r), 0 == (1 & n.mode))) n.memoizedState = null;
      else
        switch (o) {
          case "forwards":
            for (t = n.child, o = null; null !== t; )
              null !== (e = t.alternate) && null === wa(e) && (o = t),
                (t = t.sibling);
            null === (t = o)
              ? ((o = n.child), (n.child = null))
              : ((o = t.sibling), (t.sibling = null)),
              es(n, !1, o, t, l);
            break;
          case "backwards":
            for (t = null, o = n.child, n.child = null; null !== o; ) {
              if (null !== (e = o.alternate) && null === wa(e)) {
                n.child = o;
                break;
              }
              (e = o.sibling), (o.sibling = t), (t = o), (o = e);
            }
            es(n, !0, t, null, l);
            break;
          case "together":
            es(n, !1, null, null, void 0);
            break;
          default:
            n.memoizedState = null;
        }
      return n.child;
    }
    function ts(e, n) {
      0 == (1 & n.mode) &&
        null !== e &&
        ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
    }
    function rs(e, n, t) {
      if (
        (null !== e && (n.dependencies = e.dependencies),
        (Ys |= n.lanes),
        0 == (t & n.childLanes))
      )
        return null;
      if (null !== e && n.child !== e.child) throw Error(y(153));
      if (null !== n.child) {
        for (
          t = Wu((e = n.child), e.pendingProps), n.child = t, t.return = n;
          null !== e.sibling;

        )
          (e = e.sibling), ((t = t.sibling = Wu(e, e.pendingProps)).return = n);
        t.sibling = null;
      }
      return n.child;
    }
    function os(e, n) {
      if (!yl)
        switch (e.tailMode) {
          case "hidden":
            n = e.tail;
            for (var t = null; null !== n; )
              null !== n.alternate && (t = n), (n = n.sibling);
            null === t ? (e.tail = null) : (t.sibling = null);
            break;
          case "collapsed":
            t = e.tail;
            for (var r = null; null !== t; )
              null !== t.alternate && (r = t), (t = t.sibling);
            null === r
              ? n || null === e.tail
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function ls(e) {
      var n = null !== e.alternate && e.alternate.child === e.child,
        t = 0,
        r = 0;
      if (n)
        for (var o = e.child; null !== o; )
          (t |= o.lanes | o.childLanes),
            (r |= 14680064 & o.subtreeFlags),
            (r |= 14680064 & o.flags),
            (o.return = e),
            (o = o.sibling);
      else
        for (o = e.child; null !== o; )
          (t |= o.lanes | o.childLanes),
            (r |= o.subtreeFlags),
            (r |= o.flags),
            (o.return = e),
            (o = o.sibling);
      return (e.subtreeFlags |= r), (e.childLanes = t), n;
    }
    function as(e, n, t) {
      var r = n.pendingProps;
      switch ((gl(n), n.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return ls(n), null;
        case 1:
        case 17:
          return Wo(n.type) && Go(), ls(n), null;
        case 3:
          return (
            (r = n.stateNode),
            ya(),
            Mo(Ho),
            Mo(Bo),
            Ea(),
            r.pendingContext &&
              ((r.context = r.pendingContext), (r.pendingContext = null)),
            (null !== e && null !== e.child) ||
              (Cl(n)
                ? (n.flags |= 4)
                : null === e ||
                  (e.memoizedState.isDehydrated && 0 == (256 & n.flags)) ||
                  ((n.flags |= 1024), null !== vl && (vu(vl), (vl = null)))),
            ls(n),
            null
          );
        case 5:
          ka(n);
          var o = ma(ga.current);
          if (((t = n.type), null !== e && null != n.stateNode))
            Wi(e, n, t, r),
              e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
          else {
            if (!r) {
              if (null === n.stateNode) throw Error(y(166));
              return ls(n), null;
            }
            if (((e = ma(pa.current)), Cl(n))) {
              (r = n.stateNode), (t = n.type);
              var l = n.memoizedProps;
              switch (((r[No] = n), (r[Lo] = l), (e = 0 != (1 & n.mode)), t)) {
                case "dialog":
                  Jr("cancel", r), Jr("close", r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Jr("load", r);
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < Qr.length; o++) Jr(Qr[o], r);
                  break;
                case "source":
                  Jr("error", r);
                  break;
                case "img":
                case "image":
                case "link":
                  Jr("error", r), Jr("load", r);
                  break;
                case "details":
                  Jr("toggle", r);
                  break;
                case "input":
                  ue(r, l), Jr("invalid", r);
                  break;
                case "select":
                  (r._wrapperState = { wasMultiple: !!l.multiple }),
                    Jr("invalid", r);
                  break;
                case "textarea":
                  be(r, l), Jr("invalid", r);
              }
              for (var a in (Fe(t, l), (o = null), l))
                if (l.hasOwnProperty(a)) {
                  var i = l[a];
                  "children" === a
                    ? "string" == typeof i
                      ? r.textContent !== i &&
                        (!0 !== l.suppressHydrationWarning &&
                          fo(r.textContent, i, e),
                        (o = ["children", i]))
                      : "number" == typeof i &&
                        r.textContent !== "" + i &&
                        (!0 !== l.suppressHydrationWarning &&
                          fo(r.textContent, i, e),
                        (o = ["children", "" + i]))
                    : k.hasOwnProperty(a) &&
                      null != i &&
                      "onScroll" === a &&
                      Jr("scroll", r);
                }
              switch (t) {
                case "input":
                  le(r), fe(r, l, !0);
                  break;
                case "textarea":
                  le(r), ve(r);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" == typeof l.onClick && (r.onclick = po);
              }
              (r = o), (n.updateQueue = r), null !== r && (n.flags |= 4);
            } else {
              (a = 9 === o.nodeType ? o : o.ownerDocument),
                "http://www.w3.org/1999/xhtml" === e && (e = ke(t)),
                "http://www.w3.org/1999/xhtml" === e
                  ? "script" === t
                    ? (((e = a.createElement("div")).innerHTML =
                        "<script></script>"),
                      (e = e.removeChild(e.firstChild)))
                    : "string" == typeof r.is
                    ? (e = a.createElement(t, { is: r.is }))
                    : ((e = a.createElement(t)),
                      "select" === t &&
                        ((a = e),
                        r.multiple
                          ? (a.multiple = !0)
                          : r.size && (a.size = r.size)))
                  : (e = a.createElementNS(e, t)),
                (e[No] = n),
                (e[Lo] = r),
                Vi(e, n),
                (n.stateNode = e);
              e: {
                switch (((a = Oe(t, r)), t)) {
                  case "dialog":
                    Jr("cancel", e), Jr("close", e), (o = r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Jr("load", e), (o = r);
                    break;
                  case "video":
                  case "audio":
                    for (o = 0; o < Qr.length; o++) Jr(Qr[o], e);
                    o = r;
                    break;
                  case "source":
                    Jr("error", e), (o = r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Jr("error", e), Jr("load", e), (o = r);
                    break;
                  case "details":
                    Jr("toggle", e), (o = r);
                    break;
                  case "input":
                    ue(e, r), (o = se(e, r)), Jr("invalid", e);
                    break;
                  case "option":
                  default:
                    o = r;
                    break;
                  case "select":
                    (e._wrapperState = { wasMultiple: !!r.multiple }),
                      (o = K({}, r, { value: void 0 })),
                      Jr("invalid", e);
                    break;
                  case "textarea":
                    be(e, r), (o = me(e, r)), Jr("invalid", e);
                }
                for (l in (Fe(t, o), (i = o)))
                  if (i.hasOwnProperty(l)) {
                    var s = i[l];
                    "style" === l
                      ? Te(e, s)
                      : "dangerouslySetInnerHTML" === l
                      ? null != (s = s ? s.__html : void 0) && Ee(e, s)
                      : "children" === l
                      ? "string" == typeof s
                        ? ("textarea" !== t || "" !== s) && Ce(e, s)
                        : "number" == typeof s && Ce(e, "" + s)
                      : "suppressContentEditableWarning" !== l &&
                        "suppressHydrationWarning" !== l &&
                        "autoFocus" !== l &&
                        (k.hasOwnProperty(l)
                          ? null != s && "onScroll" === l && Jr("scroll", e)
                          : null != s && O(e, l, s, a));
                  }
                switch (t) {
                  case "input":
                    le(e), fe(e, r, !1);
                    break;
                  case "textarea":
                    le(e), ve(e);
                    break;
                  case "option":
                    null != r.value &&
                      e.setAttribute("value", "" + re(r.value));
                    break;
                  case "select":
                    (e.multiple = !!r.multiple),
                      null != (l = r.value)
                        ? ge(e, !!r.multiple, l, !1)
                        : null != r.defaultValue &&
                          ge(e, !!r.multiple, r.defaultValue, !0);
                    break;
                  default:
                    "function" == typeof o.onClick && (e.onclick = po);
                }
                switch (t) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    r = !!r.autoFocus;
                    break e;
                  case "img":
                    r = !0;
                    break e;
                  default:
                    r = !1;
                }
              }
              r && (n.flags |= 4);
            }
            null !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
          }
          return ls(n), null;
        case 6:
          if (e && null != n.stateNode) Gi(0, n, e.memoizedProps, r);
          else {
            if ("string" != typeof r && null === n.stateNode)
              throw Error(y(166));
            if (((t = ma(ga.current)), ma(pa.current), Cl(n))) {
              if (
                ((r = n.stateNode),
                (t = n.memoizedProps),
                (r[No] = n),
                (l = r.nodeValue !== t) && null !== (e = ml))
              )
                switch (e.tag) {
                  case 3:
                    fo(r.nodeValue, t, 0 != (1 & e.mode));
                    break;
                  case 5:
                    !0 !== e.memoizedProps.suppressHydrationWarning &&
                      fo(r.nodeValue, t, 0 != (1 & e.mode));
                }
              l && (n.flags |= 4);
            } else
              ((r = (9 === t.nodeType ? t : t.ownerDocument).createTextNode(r))[
                No
              ] = n),
                (n.stateNode = r);
          }
          return ls(n), null;
        case 13:
          if (
            (Mo(xa),
            (r = n.memoizedState),
            null === e ||
              (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
          ) {
            if (yl && null !== bl && 0 != (1 & n.mode) && 0 == (128 & n.flags))
              Nl(), Ll(), (n.flags |= 98560), (l = !1);
            else if (((l = Cl(n)), null !== r && null !== r.dehydrated)) {
              if (null === e) {
                if (!l) throw Error(y(318));
                if (!(l = null !== (l = n.memoizedState) ? l.dehydrated : null))
                  throw Error(y(317));
                l[No] = n;
              } else
                Ll(),
                  0 == (128 & n.flags) && (n.memoizedState = null),
                  (n.flags |= 4);
              ls(n), (l = !1);
            } else null !== vl && (vu(vl), (vl = null)), (l = !0);
            if (!l) return 65536 & n.flags ? n : null;
          }
          return 0 != (128 & n.flags)
            ? ((n.lanes = t), n)
            : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                r &&
                ((n.child.flags |= 8192),
                0 != (1 & n.mode) &&
                  (null === e || 0 != (1 & xa.current)
                    ? 0 === Gs && (Gs = 3)
                    : Au())),
              null !== n.updateQueue && (n.flags |= 4),
              ls(n),
              null);
        case 4:
          return ya(), null === e && no(n.stateNode.containerInfo), ls(n), null;
        case 10:
          return Il(n.type._context), ls(n), null;
        case 19:
          if ((Mo(xa), null === (l = n.memoizedState))) return ls(n), null;
          if (((r = 0 != (128 & n.flags)), null === (a = l.rendering)))
            if (r) os(l, !1);
            else {
              if (0 !== Gs || (null !== e && 0 != (128 & e.flags)))
                for (e = n.child; null !== e; ) {
                  if (null !== (a = wa(e))) {
                    for (
                      n.flags |= 128,
                        os(l, !1),
                        null !== (r = a.updateQueue) &&
                          ((n.updateQueue = r), (n.flags |= 4)),
                        n.subtreeFlags = 0,
                        r = t,
                        t = n.child;
                      null !== t;

                    )
                      (e = r),
                        ((l = t).flags &= 14680066),
                        null === (a = l.alternate)
                          ? ((l.childLanes = 0),
                            (l.lanes = e),
                            (l.child = null),
                            (l.subtreeFlags = 0),
                            (l.memoizedProps = null),
                            (l.memoizedState = null),
                            (l.updateQueue = null),
                            (l.dependencies = null),
                            (l.stateNode = null))
                          : ((l.childLanes = a.childLanes),
                            (l.lanes = a.lanes),
                            (l.child = a.child),
                            (l.subtreeFlags = 0),
                            (l.deletions = null),
                            (l.memoizedProps = a.memoizedProps),
                            (l.memoizedState = a.memoizedState),
                            (l.updateQueue = a.updateQueue),
                            (l.type = a.type),
                            (e = a.dependencies),
                            (l.dependencies =
                              null === e
                                ? null
                                : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext,
                                  })),
                        (t = t.sibling);
                    return Uo(xa, (1 & xa.current) | 2), n.child;
                  }
                  e = e.sibling;
                }
              null !== l.tail &&
                dn() > nu &&
                ((n.flags |= 128), (r = !0), os(l, !1), (n.lanes = 4194304));
            }
          else {
            if (!r)
              if (null !== (e = wa(a))) {
                if (
                  ((n.flags |= 128),
                  (r = !0),
                  null !== (t = e.updateQueue) &&
                    ((n.updateQueue = t), (n.flags |= 4)),
                  os(l, !0),
                  null === l.tail &&
                    "hidden" === l.tailMode &&
                    !a.alternate &&
                    !yl)
                )
                  return ls(n), null;
              } else
                2 * dn() - l.renderingStartTime > nu &&
                  1073741824 !== t &&
                  ((n.flags |= 128), (r = !0), os(l, !1), (n.lanes = 4194304));
            l.isBackwards
              ? ((a.sibling = n.child), (n.child = a))
              : (null !== (t = l.last) ? (t.sibling = a) : (n.child = a),
                (l.last = a));
          }
          return null !== l.tail
            ? ((n = l.tail),
              (l.rendering = n),
              (l.tail = n.sibling),
              (l.renderingStartTime = dn()),
              (n.sibling = null),
              (t = xa.current),
              Uo(xa, r ? (1 & t) | 2 : 1 & t),
              n)
            : (ls(n), null);
        case 22:
        case 23:
          return (
            Eu(),
            (r = null !== n.memoizedState),
            null !== e && (null !== e.memoizedState) !== r && (n.flags |= 8192),
            r && 0 != (1 & n.mode)
              ? 0 != (1073741824 & Vs) &&
                (ls(n), 6 & n.subtreeFlags && (n.flags |= 8192))
              : ls(n),
            null
          );
        case 24:
        case 25:
          return null;
      }
      throw Error(y(156, n.tag));
    }
    function is(e, n) {
      switch ((gl(n), n.tag)) {
        case 1:
          return (
            Wo(n.type) && Go(),
            65536 & (e = n.flags) ? ((n.flags = (-65537 & e) | 128), n) : null
          );
        case 3:
          return (
            ya(),
            Mo(Ho),
            Mo(Bo),
            Ea(),
            0 != (65536 & (e = n.flags)) && 0 == (128 & e)
              ? ((n.flags = (-65537 & e) | 128), n)
              : null
          );
        case 5:
          return ka(n), null;
        case 13:
          if (
            (Mo(xa), null !== (e = n.memoizedState) && null !== e.dehydrated)
          ) {
            if (null === n.alternate) throw Error(y(340));
            Ll();
          }
          return 65536 & (e = n.flags)
            ? ((n.flags = (-65537 & e) | 128), n)
            : null;
        case 19:
          return Mo(xa), null;
        case 4:
          return ya(), null;
        case 10:
          return Il(n.type._context), null;
        case 22:
        case 23:
          return Eu(), null;
        default:
          return null;
      }
    }
    (Vi = function (e, n) {
      for (var t = n.child; null !== t; ) {
        if (5 === t.tag || 6 === t.tag) e.appendChild(t.stateNode);
        else if (4 !== t.tag && null !== t.child) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === n) break;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === n) return;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }),
      (Wi = function (e, n, t, r) {
        var o = e.memoizedProps;
        if (o !== r) {
          (e = n.stateNode), ma(pa.current);
          var l,
            a = null;
          switch (t) {
            case "input":
              (o = se(e, o)), (r = se(e, r)), (a = []);
              break;
            case "select":
              (o = K({}, o, { value: void 0 })),
                (r = K({}, r, { value: void 0 })),
                (a = []);
              break;
            case "textarea":
              (o = me(e, o)), (r = me(e, r)), (a = []);
              break;
            default:
              "function" != typeof o.onClick &&
                "function" == typeof r.onClick &&
                (e.onclick = po);
          }
          for (u in (Fe(t, r), (t = null), o))
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && null != o[u])
              if ("style" === u) {
                var i = o[u];
                for (l in i)
                  i.hasOwnProperty(l) && (t || (t = {}), (t[l] = ""));
              } else
                "dangerouslySetInnerHTML" !== u &&
                  "children" !== u &&
                  "suppressContentEditableWarning" !== u &&
                  "suppressHydrationWarning" !== u &&
                  "autoFocus" !== u &&
                  (k.hasOwnProperty(u)
                    ? a || (a = [])
                    : (a = a || []).push(u, null));
          for (u in r) {
            var s = r[u];
            if (
              ((i = null != o ? o[u] : void 0),
              r.hasOwnProperty(u) && s !== i && (null != s || null != i))
            )
              if ("style" === u)
                if (i) {
                  for (l in i)
                    !i.hasOwnProperty(l) ||
                      (s && s.hasOwnProperty(l)) ||
                      (t || (t = {}), (t[l] = ""));
                  for (l in s)
                    s.hasOwnProperty(l) &&
                      i[l] !== s[l] &&
                      (t || (t = {}), (t[l] = s[l]));
                } else t || (a || (a = []), a.push(u, t)), (t = s);
              else
                "dangerouslySetInnerHTML" === u
                  ? ((s = s ? s.__html : void 0),
                    (i = i ? i.__html : void 0),
                    null != s && i !== s && (a = a || []).push(u, s))
                  : "children" === u
                  ? ("string" != typeof s && "number" != typeof s) ||
                    (a = a || []).push(u, "" + s)
                  : "suppressContentEditableWarning" !== u &&
                    "suppressHydrationWarning" !== u &&
                    (k.hasOwnProperty(u)
                      ? (null != s && "onScroll" === u && Jr("scroll", e),
                        a || i === s || (a = []))
                      : (a = a || []).push(u, s));
          }
          t && (a = a || []).push("style", t);
          var u = a;
          (n.updateQueue = u) && (n.flags |= 4);
        }
      }),
      (Gi = function (e, n, t, r) {
        t !== r && (n.flags |= 4);
      });
    var ss = !1,
      us = !1,
      cs = "function" == typeof WeakSet ? WeakSet : Set,
      ds = null;
    function fs(e, n) {
      var t = e.ref;
      if (null !== t)
        if ("function" == typeof t)
          try {
            t(null);
          } catch (t) {
            ju(e, n, t);
          }
        else t.current = null;
    }
    function ps(e, n, t) {
      try {
        t();
      } catch (t) {
        ju(e, n, t);
      }
    }
    var hs = !1;
    function gs(e, n, t) {
      var r = n.updateQueue;
      if (null !== (r = null !== r ? r.lastEffect : null)) {
        var o = (r = r.next);
        do {
          if ((o.tag & e) === e) {
            var l = o.destroy;
            (o.destroy = void 0), void 0 !== l && ps(n, t, l);
          }
          o = o.next;
        } while (o !== r);
      }
    }
    function ms(e, n) {
      if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
        var t = (n = n.next);
        do {
          if ((t.tag & e) === e) {
            var r = t.create;
            t.destroy = r();
          }
          t = t.next;
        } while (t !== n);
      }
    }
    function bs(e) {
      var n = e.ref;
      if (null !== n) {
        var t = e.stateNode;
        e.tag, (e = t), "function" == typeof n ? n(e) : (n.current = e);
      }
    }
    function ys(e) {
      var n = e.alternate;
      null !== n && ((e.alternate = null), ys(n)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag &&
          null !== (n = e.stateNode) &&
          (delete n[No],
          delete n[Lo],
          delete n[To],
          delete n[Po],
          delete n[Fo]),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
    }
    function vs(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag;
    }
    function ks(e) {
      e: for (;;) {
        for (; null === e.sibling; ) {
          if (null === e.return || vs(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

        ) {
          if (2 & e.flags) continue e;
          if (null === e.child || 4 === e.tag) continue e;
          (e.child.return = e), (e = e.child);
        }
        if (!(2 & e.flags)) return e.stateNode;
      }
    }
    function xs(e, n, t) {
      var r = e.tag;
      if (5 === r || 6 === r)
        (e = e.stateNode),
          n
            ? 8 === t.nodeType
              ? t.parentNode.insertBefore(e, n)
              : t.insertBefore(e, n)
            : (8 === t.nodeType
                ? (n = t.parentNode).insertBefore(e, t)
                : (n = t).appendChild(e),
              null != (t = t._reactRootContainer) ||
                null !== n.onclick ||
                (n.onclick = po));
      else if (4 !== r && null !== (e = e.child))
        for (xs(e, n, t), e = e.sibling; null !== e; )
          xs(e, n, t), (e = e.sibling);
    }
    function ws(e, n, t) {
      var r = e.tag;
      if (5 === r || 6 === r)
        (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
      else if (4 !== r && null !== (e = e.child))
        for (ws(e, n, t), e = e.sibling; null !== e; )
          ws(e, n, t), (e = e.sibling);
    }
    var Ss = null,
      Es = !1;
    function Cs(e, n, t) {
      for (t = t.child; null !== t; ) Ns(e, n, t), (t = t.sibling);
    }
    function Ns(e, n, t) {
      if (vn && "function" == typeof vn.onCommitFiberUnmount)
        try {
          vn.onCommitFiberUnmount(yn, t);
        } catch (e) {}
      switch (t.tag) {
        case 5:
          us || fs(t, n);
        case 6:
          var r = Ss,
            o = Es;
          (Ss = null),
            Cs(e, n, t),
            (Es = o),
            null !== (Ss = r) &&
              (Es
                ? ((e = Ss),
                  (t = t.stateNode),
                  8 === e.nodeType
                    ? e.parentNode.removeChild(t)
                    : e.removeChild(t))
                : Ss.removeChild(t.stateNode));
          break;
        case 18:
          null !== Ss &&
            (Es
              ? ((e = Ss),
                (t = t.stateNode),
                8 === e.nodeType
                  ? wo(e.parentNode, t)
                  : 1 === e.nodeType && wo(e, t),
                tt(e))
              : wo(Ss, t.stateNode));
          break;
        case 4:
          (r = Ss),
            (o = Es),
            (Ss = t.stateNode.containerInfo),
            (Es = !0),
            Cs(e, n, t),
            (Ss = r),
            (Es = o);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !us &&
            null !== (r = t.updateQueue) &&
            null !== (r = r.lastEffect)
          ) {
            o = r = r.next;
            do {
              var l = o,
                a = l.destroy;
              (l = l.tag),
                void 0 !== a && (0 != (2 & l) || 0 != (4 & l)) && ps(t, n, a),
                (o = o.next);
            } while (o !== r);
          }
          Cs(e, n, t);
          break;
        case 1:
          if (
            !us &&
            (fs(t, n),
            "function" == typeof (r = t.stateNode).componentWillUnmount)
          )
            try {
              (r.props = t.memoizedProps),
                (r.state = t.memoizedState),
                r.componentWillUnmount();
            } catch (e) {
              ju(t, n, e);
            }
          Cs(e, n, t);
          break;
        case 21:
          Cs(e, n, t);
          break;
        case 22:
          1 & t.mode
            ? ((us = (r = us) || null !== t.memoizedState),
              Cs(e, n, t),
              (us = r))
            : Cs(e, n, t);
          break;
        default:
          Cs(e, n, t);
      }
    }
    function Ls(e) {
      var n = e.updateQueue;
      if (null !== n) {
        e.updateQueue = null;
        var t = e.stateNode;
        null === t && (t = e.stateNode = new cs()),
          n.forEach(function (n) {
            var r = qu.bind(null, e, n);
            t.has(n) || (t.add(n), n.then(r, r));
          });
      }
    }
    function As(e, n) {
      var t = n.deletions;
      if (null !== t)
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          try {
            var l = e,
              a = n,
              i = a;
            e: for (; null !== i; ) {
              switch (i.tag) {
                case 5:
                  (Ss = i.stateNode), (Es = !1);
                  break e;
                case 3:
                case 4:
                  (Ss = i.stateNode.containerInfo), (Es = !0);
                  break e;
              }
              i = i.return;
            }
            if (null === Ss) throw Error(y(160));
            Ns(l, a, o), (Ss = null), (Es = !1);
            var s = o.alternate;
            null !== s && (s.return = null), (o.return = null);
          } catch (e) {
            ju(o, n, e);
          }
        }
      if (12854 & n.subtreeFlags)
        for (n = n.child; null !== n; ) Ts(n, e), (n = n.sibling);
    }
    function Ts(e, n) {
      var t = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((As(n, e), Ps(e), 4 & r)) {
            try {
              gs(3, e, e.return), ms(3, e);
            } catch (n) {
              ju(e, e.return, n);
            }
            try {
              gs(5, e, e.return);
            } catch (n) {
              ju(e, e.return, n);
            }
          }
          break;
        case 1:
          As(n, e), Ps(e), 512 & r && null !== t && fs(t, t.return);
          break;
        case 5:
          if (
            (As(n, e),
            Ps(e),
            512 & r && null !== t && fs(t, t.return),
            32 & e.flags)
          ) {
            var o = e.stateNode;
            try {
              Ce(o, "");
            } catch (n) {
              ju(e, e.return, n);
            }
          }
          if (4 & r && null != (o = e.stateNode)) {
            var l = e.memoizedProps,
              a = null !== t ? t.memoizedProps : l,
              i = e.type,
              s = e.updateQueue;
            if (((e.updateQueue = null), null !== s))
              try {
                "input" === i &&
                  "radio" === l.type &&
                  null != l.name &&
                  ce(o, l),
                  Oe(i, a);
                var u = Oe(i, l);
                for (a = 0; a < s.length; a += 2) {
                  var c = s[a],
                    d = s[a + 1];
                  "style" === c
                    ? Te(o, d)
                    : "dangerouslySetInnerHTML" === c
                    ? Ee(o, d)
                    : "children" === c
                    ? Ce(o, d)
                    : O(o, c, d, u);
                }
                switch (i) {
                  case "input":
                    de(o, l);
                    break;
                  case "textarea":
                    ye(o, l);
                    break;
                  case "select":
                    var f = o._wrapperState.wasMultiple;
                    o._wrapperState.wasMultiple = !!l.multiple;
                    var p = l.value;
                    null != p
                      ? ge(o, !!l.multiple, p, !1)
                      : f !== !!l.multiple &&
                        (null != l.defaultValue
                          ? ge(o, !!l.multiple, l.defaultValue, !0)
                          : ge(o, !!l.multiple, l.multiple ? [] : "", !1));
                }
                o[Lo] = l;
              } catch (n) {
                ju(e, e.return, n);
              }
          }
          break;
        case 6:
          if ((As(n, e), Ps(e), 4 & r)) {
            if (null === e.stateNode) throw Error(y(162));
            (o = e.stateNode), (l = e.memoizedProps);
            try {
              o.nodeValue = l;
            } catch (n) {
              ju(e, e.return, n);
            }
          }
          break;
        case 3:
          if (
            (As(n, e),
            Ps(e),
            4 & r && null !== t && t.memoizedState.isDehydrated)
          )
            try {
              tt(n.containerInfo);
            } catch (n) {
              ju(e, e.return, n);
            }
          break;
        case 4:
        default:
          As(n, e), Ps(e);
          break;
        case 13:
          As(n, e),
            Ps(e),
            8192 & (o = e.child).flags &&
              ((l = null !== o.memoizedState),
              (o.stateNode.isHidden = l),
              !l ||
                (null !== o.alternate && null !== o.alternate.memoizedState) ||
                (eu = dn())),
            4 & r && Ls(e);
          break;
        case 22:
          if (
            ((c = null !== t && null !== t.memoizedState),
            1 & e.mode ? ((us = (u = us) || c), As(n, e), (us = u)) : As(n, e),
            Ps(e),
            8192 & r)
          ) {
            if (
              ((u = null !== e.memoizedState),
              (e.stateNode.isHidden = u) && !c && 0 != (1 & e.mode))
            )
              for (ds = e, c = e.child; null !== c; ) {
                for (d = ds = c; null !== ds; ) {
                  switch (((p = (f = ds).child), f.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      gs(4, f, f.return);
                      break;
                    case 1:
                      fs(f, f.return);
                      var h = f.stateNode;
                      if ("function" == typeof h.componentWillUnmount) {
                        (r = f), (t = f.return);
                        try {
                          (n = r),
                            (h.props = n.memoizedProps),
                            (h.state = n.memoizedState),
                            h.componentWillUnmount();
                        } catch (e) {
                          ju(r, t, e);
                        }
                      }
                      break;
                    case 5:
                      fs(f, f.return);
                      break;
                    case 22:
                      if (null !== f.memoizedState) {
                        Rs(d);
                        continue;
                      }
                  }
                  null !== p ? ((p.return = f), (ds = p)) : Rs(d);
                }
                c = c.sibling;
              }
            e: for (c = null, d = e; ; ) {
              if (5 === d.tag) {
                if (null === c) {
                  c = d;
                  try {
                    (o = d.stateNode),
                      u
                        ? "function" == typeof (l = o.style).setProperty
                          ? l.setProperty("display", "none", "important")
                          : (l.display = "none")
                        : ((i = d.stateNode),
                          (a =
                            null != (s = d.memoizedProps.style) &&
                            s.hasOwnProperty("display")
                              ? s.display
                              : null),
                          (i.style.display = Ae("display", a)));
                  } catch (n) {
                    ju(e, e.return, n);
                  }
                }
              } else if (6 === d.tag) {
                if (null === c)
                  try {
                    d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                  } catch (n) {
                    ju(e, e.return, n);
                  }
              } else if (
                ((22 !== d.tag && 23 !== d.tag) ||
                  null === d.memoizedState ||
                  d === e) &&
                null !== d.child
              ) {
                (d.child.return = d), (d = d.child);
                continue;
              }
              if (d === e) break e;
              for (; null === d.sibling; ) {
                if (null === d.return || d.return === e) break e;
                c === d && (c = null), (d = d.return);
              }
              c === d && (c = null),
                (d.sibling.return = d.return),
                (d = d.sibling);
            }
          }
          break;
        case 19:
          As(n, e), Ps(e), 4 & r && Ls(e);
        case 21:
      }
    }
    function Ps(e) {
      var n = e.flags;
      if (2 & n) {
        try {
          e: {
            for (var t = e.return; null !== t; ) {
              if (vs(t)) {
                var r = t;
                break e;
              }
              t = t.return;
            }
            throw Error(y(160));
          }
          switch (r.tag) {
            case 5:
              var o = r.stateNode;
              32 & r.flags && (Ce(o, ""), (r.flags &= -33)), ws(e, ks(e), o);
              break;
            case 3:
            case 4:
              var l = r.stateNode.containerInfo;
              xs(e, ks(e), l);
              break;
            default:
              throw Error(y(161));
          }
        } catch (n) {
          ju(e, e.return, n);
        }
        e.flags &= -3;
      }
      4096 & n && (e.flags &= -4097);
    }
    function Fs(e, n, t) {
      (ds = e), Os(e, n, t);
    }
    function Os(e, n, t) {
      for (var r = 0 != (1 & e.mode); null !== ds; ) {
        var o = ds,
          l = o.child;
        if (22 === o.tag && r) {
          var a = null !== o.memoizedState || ss;
          if (!a) {
            var i = o.alternate,
              s = (null !== i && null !== i.memoizedState) || us;
            i = ss;
            var u = us;
            if (((ss = a), (us = s) && !u))
              for (ds = o; null !== ds; )
                (s = (a = ds).child),
                  22 === a.tag && null !== a.memoizedState
                    ? Ds(o)
                    : null !== s
                    ? ((s.return = a), (ds = s))
                    : Ds(o);
            for (; null !== l; ) (ds = l), Os(l, n, t), (l = l.sibling);
            (ds = o), (ss = i), (us = u);
          }
          _s(e);
        } else
          0 != (8772 & o.subtreeFlags) && null !== l
            ? ((l.return = o), (ds = l))
            : _s(e);
      }
    }
    function _s(e) {
      for (; null !== ds; ) {
        var n = ds;
        if (0 != (8772 & n.flags)) {
          var t = n.alternate;
          try {
            if (0 != (8772 & n.flags))
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  us || ms(5, n);
                  break;
                case 1:
                  var r = n.stateNode;
                  if (4 & n.flags && !us)
                    if (null === t) r.componentDidMount();
                    else {
                      var o =
                        n.elementType === n.type
                          ? t.memoizedProps
                          : Pl(n.type, t.memoizedProps);
                      r.componentDidUpdate(
                        o,
                        t.memoizedState,
                        r.__reactInternalSnapshotBeforeUpdate
                      );
                    }
                  var l = n.updateQueue;
                  null !== l && Jl(n, l, r);
                  break;
                case 3:
                  var a = n.updateQueue;
                  if (null !== a) {
                    if (((t = null), null !== n.child))
                      switch (n.child.tag) {
                        case 5:
                        case 1:
                          t = n.child.stateNode;
                      }
                    Jl(n, a, t);
                  }
                  break;
                case 5:
                  var i = n.stateNode;
                  if (null === t && 4 & n.flags) {
                    t = i;
                    var s = n.memoizedProps;
                    switch (n.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        s.autoFocus && t.focus();
                        break;
                      case "img":
                        s.src && (t.src = s.src);
                    }
                  }
                  break;
                case 6:
                case 4:
                case 12:
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                case 13:
                  if (null === n.memoizedState) {
                    var u = n.alternate;
                    if (null !== u) {
                      var c = u.memoizedState;
                      if (null !== c) {
                        var d = c.dehydrated;
                        null !== d && tt(d);
                      }
                    }
                  }
                  break;
                default:
                  throw Error(y(163));
              }
            us || (512 & n.flags && bs(n));
          } catch (e) {
            ju(n, n.return, e);
          }
        }
        if (n === e) {
          ds = null;
          break;
        }
        if (null !== (t = n.sibling)) {
          (t.return = n.return), (ds = t);
          break;
        }
        ds = n.return;
      }
    }
    function Rs(e) {
      for (; null !== ds; ) {
        var n = ds;
        if (n === e) {
          ds = null;
          break;
        }
        var t = n.sibling;
        if (null !== t) {
          (t.return = n.return), (ds = t);
          break;
        }
        ds = n.return;
      }
    }
    function Ds(e) {
      for (; null !== ds; ) {
        var n = ds;
        try {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              var t = n.return;
              try {
                ms(4, n);
              } catch (e) {
                ju(n, t, e);
              }
              break;
            case 1:
              var r = n.stateNode;
              if ("function" == typeof r.componentDidMount) {
                var o = n.return;
                try {
                  r.componentDidMount();
                } catch (e) {
                  ju(n, o, e);
                }
              }
              var l = n.return;
              try {
                bs(n);
              } catch (e) {
                ju(n, l, e);
              }
              break;
            case 5:
              var a = n.return;
              try {
                bs(n);
              } catch (e) {
                ju(n, a, e);
              }
          }
        } catch (e) {
          ju(n, n.return, e);
        }
        if (n === e) {
          ds = null;
          break;
        }
        var i = n.sibling;
        if (null !== i) {
          (i.return = n.return), (ds = i);
          break;
        }
        ds = n.return;
      }
    }
    var Is,
      js = Math.ceil,
      zs = _.ReactCurrentDispatcher,
      Ms = _.ReactCurrentOwner,
      Us = _.ReactCurrentBatchConfig,
      qs = 0,
      Bs = null,
      Hs = null,
      $s = 0,
      Vs = 0,
      Ws = zo(0),
      Gs = 0,
      Qs = null,
      Ys = 0,
      Ks = 0,
      Xs = 0,
      Js = null,
      Zs = null,
      eu = 0,
      nu = 1 / 0,
      tu = null,
      ru = !1,
      ou = null,
      lu = null,
      au = !1,
      iu = null,
      su = 0,
      uu = 0,
      cu = null,
      du = -1,
      fu = 0;
    function pu() {
      return 0 != (6 & qs) ? dn() : -1 !== du ? du : (du = dn());
    }
    function hu(e) {
      return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & qs) && 0 !== $s
        ? $s & -$s
        : null !== Tl.transition
        ? (0 === fu && (fu = Tn()), fu)
        : 0 !== (e = _n)
        ? e
        : (e = void 0 === (e = window.event) ? 16 : ct(e.type));
    }
    function gu(e, n, t, r) {
      if (50 < uu) throw ((uu = 0), (cu = null), Error(y(185)));
      Fn(e, t, r),
        (0 != (2 & qs) && e === Bs) ||
          (e === Bs && (0 == (2 & qs) && (Ks |= t), 4 === Gs && ku(e, $s)),
          mu(e, r),
          1 === t &&
            0 === qs &&
            0 == (1 & n.mode) &&
            ((nu = dn() + 500), Zo && tl()));
    }
    function mu(e, n) {
      var t = e.callbackNode;
      !(function (e, n) {
        for (
          var t = e.suspendedLanes,
            r = e.pingedLanes,
            o = e.expirationTimes,
            l = e.pendingLanes;
          0 < l;

        ) {
          var a = 31 - kn(l),
            i = 1 << a,
            s = o[a];
          -1 === s
            ? (0 != (i & t) && 0 == (i & r)) || (o[a] = Ln(i, n))
            : s <= n && (e.expiredLanes |= i),
            (l &= ~i);
        }
      })(e, n);
      var r = Nn(e, e === Bs ? $s : 0);
      if (0 === r)
        null !== t && sn(t), (e.callbackNode = null), (e.callbackPriority = 0);
      else if (((n = r & -r), e.callbackPriority !== n)) {
        if ((null != t && sn(t), 1 === n))
          0 === e.tag
            ? (function (e) {
                (Zo = !0), nl(e);
              })(xu.bind(null, e))
            : nl(xu.bind(null, e)),
            ko(function () {
              0 == (6 & qs) && tl();
            }),
            (t = null);
        else {
          switch (Rn(r)) {
            case 1:
              t = pn;
              break;
            case 4:
              t = hn;
              break;
            case 16:
            default:
              t = gn;
              break;
            case 536870912:
              t = bn;
          }
          t = Bu(t, bu.bind(null, e));
        }
        (e.callbackPriority = n), (e.callbackNode = t);
      }
    }
    function bu(e, n) {
      if (((du = -1), (fu = 0), 0 != (6 & qs))) throw Error(y(327));
      var t = e.callbackNode;
      if (Du() && e.callbackNode !== t) return null;
      var r = Nn(e, e === Bs ? $s : 0);
      if (0 === r) return null;
      if (0 != (30 & r) || 0 != (r & e.expiredLanes) || n) n = Tu(e, r);
      else {
        n = r;
        var o = qs;
        qs |= 2;
        var l = Lu();
        for (
          (Bs === e && $s === n) || ((tu = null), (nu = dn() + 500), Cu(e, n));
          ;

        )
          try {
            Fu();
            break;
          } catch (n) {
            Nu(e, n);
          }
        Dl(),
          (zs.current = l),
          (qs = o),
          null !== Hs ? (n = 0) : ((Bs = null), ($s = 0), (n = Gs));
      }
      if (0 !== n) {
        if (
          (2 === n && 0 !== (o = An(e)) && ((r = o), (n = yu(e, o))), 1 === n)
        )
          throw ((t = Qs), Cu(e, 0), ku(e, r), mu(e, dn()), t);
        if (6 === n) ku(e, r);
        else {
          if (
            ((o = e.current.alternate),
            0 == (30 & r) &&
              !(function (e) {
                for (var n = e; ; ) {
                  if (16384 & n.flags) {
                    var t = n.updateQueue;
                    if (null !== t && null !== (t = t.stores))
                      for (var r = 0; r < t.length; r++) {
                        var o = t[r],
                          l = o.getSnapshot;
                        o = o.value;
                        try {
                          if (!kr(l(), o)) return !1;
                        } catch (e) {
                          return !1;
                        }
                      }
                  }
                  if (((t = n.child), 16384 & n.subtreeFlags && null !== t))
                    (t.return = n), (n = t);
                  else {
                    if (n === e) break;
                    for (; null === n.sibling; ) {
                      if (null === n.return || n.return === e) return !0;
                      n = n.return;
                    }
                    (n.sibling.return = n.return), (n = n.sibling);
                  }
                }
                return !0;
              })(o) &&
              (2 === (n = Tu(e, r)) &&
                0 !== (l = An(e)) &&
                ((r = l), (n = yu(e, l))),
              1 === n))
          )
            throw ((t = Qs), Cu(e, 0), ku(e, r), mu(e, dn()), t);
          switch (((e.finishedWork = o), (e.finishedLanes = r), n)) {
            case 0:
            case 1:
              throw Error(y(345));
            case 2:
            case 5:
              Ru(e, Zs, tu);
              break;
            case 3:
              if (
                (ku(e, r), (130023424 & r) === r && 10 < (n = eu + 500 - dn()))
              ) {
                if (0 !== Nn(e, 0)) break;
                if (((o = e.suspendedLanes) & r) !== r) {
                  pu(), (e.pingedLanes |= e.suspendedLanes & o);
                  break;
                }
                e.timeoutHandle = bo(Ru.bind(null, e, Zs, tu), n);
                break;
              }
              Ru(e, Zs, tu);
              break;
            case 4:
              if ((ku(e, r), (4194240 & r) === r)) break;
              for (n = e.eventTimes, o = -1; 0 < r; ) {
                var a = 31 - kn(r);
                (l = 1 << a), (a = n[a]) > o && (o = a), (r &= ~l);
              }
              if (
                ((r = o),
                10 <
                  (r =
                    (120 > (r = dn() - r)
                      ? 120
                      : 480 > r
                      ? 480
                      : 1080 > r
                      ? 1080
                      : 1920 > r
                      ? 1920
                      : 3e3 > r
                      ? 3e3
                      : 4320 > r
                      ? 4320
                      : 1960 * js(r / 1960)) - r))
              ) {
                e.timeoutHandle = bo(Ru.bind(null, e, Zs, tu), r);
                break;
              }
              Ru(e, Zs, tu);
              break;
            default:
              throw Error(y(329));
          }
        }
      }
      return mu(e, dn()), e.callbackNode === t ? bu.bind(null, e) : null;
    }
    function yu(e, n) {
      var t = Js;
      return (
        e.current.memoizedState.isDehydrated && (Cu(e, n).flags |= 256),
        2 !== (e = Tu(e, n)) && ((n = Zs), (Zs = t), null !== n && vu(n)),
        e
      );
    }
    function vu(e) {
      null === Zs ? (Zs = e) : Zs.push.apply(Zs, e);
    }
    function ku(e, n) {
      for (
        n &= ~Xs,
          n &= ~Ks,
          e.suspendedLanes |= n,
          e.pingedLanes &= ~n,
          e = e.expirationTimes;
        0 < n;

      ) {
        var t = 31 - kn(n),
          r = 1 << t;
        (e[t] = -1), (n &= ~r);
      }
    }
    function xu(e) {
      if (0 != (6 & qs)) throw Error(y(327));
      Du();
      var n = Nn(e, 0);
      if (0 == (1 & n)) return mu(e, dn()), null;
      var t = Tu(e, n);
      if (0 !== e.tag && 2 === t) {
        var r = An(e);
        0 !== r && ((n = r), (t = yu(e, r)));
      }
      if (1 === t) throw ((t = Qs), Cu(e, 0), ku(e, n), mu(e, dn()), t);
      if (6 === t) throw Error(y(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = n),
        Ru(e, Zs, tu),
        mu(e, dn()),
        null
      );
    }
    function wu(e, n) {
      var t = qs;
      qs |= 1;
      try {
        return e(n);
      } finally {
        0 === (qs = t) && ((nu = dn() + 500), Zo && tl());
      }
    }
    function Su(e) {
      null !== iu && 0 === iu.tag && 0 == (6 & qs) && Du();
      var n = qs;
      qs |= 1;
      var t = Us.transition,
        r = _n;
      try {
        if (((Us.transition = null), (_n = 1), e)) return e();
      } finally {
        (_n = r), (Us.transition = t), 0 == (6 & (qs = n)) && tl();
      }
    }
    function Eu() {
      (Vs = Ws.current), Mo(Ws);
    }
    function Cu(e, n) {
      (e.finishedWork = null), (e.finishedLanes = 0);
      var t = e.timeoutHandle;
      if ((-1 !== t && ((e.timeoutHandle = -1), yo(t)), null !== Hs))
        for (t = Hs.return; null !== t; ) {
          var r = t;
          switch ((gl(r), r.tag)) {
            case 1:
              null != (r = r.type.childContextTypes) && Go();
              break;
            case 3:
              ya(), Mo(Ho), Mo(Bo), Ea();
              break;
            case 5:
              ka(r);
              break;
            case 4:
              ya();
              break;
            case 13:
            case 19:
              Mo(xa);
              break;
            case 10:
              Il(r.type._context);
              break;
            case 22:
            case 23:
              Eu();
          }
          t = t.return;
        }
      if (
        ((Bs = e),
        (Hs = e = Wu(e.current, null)),
        ($s = Vs = n),
        (Gs = 0),
        (Qs = null),
        (Xs = Ks = Ys = 0),
        (Zs = Js = null),
        null !== Ul)
      ) {
        for (n = 0; n < Ul.length; n++)
          if (null !== (r = (t = Ul[n]).interleaved)) {
            t.interleaved = null;
            var o = r.next,
              l = t.pending;
            if (null !== l) {
              var a = l.next;
              (l.next = o), (r.next = a);
            }
            t.pending = r;
          }
        Ul = null;
      }
      return e;
    }
    function Nu(e, n) {
      for (;;) {
        var t = Hs;
        try {
          if ((Dl(), (Ca.current = vi), Fa)) {
            for (var r = Aa.memoizedState; null !== r; ) {
              var o = r.queue;
              null !== o && (o.pending = null), (r = r.next);
            }
            Fa = !1;
          }
          if (
            ((La = 0),
            (Pa = Ta = Aa = null),
            (Oa = !1),
            (_a = 0),
            (Ms.current = null),
            null === t || null === t.return)
          ) {
            (Gs = 1), (Qs = n), (Hs = null);
            break;
          }
          e: {
            var l = e,
              a = t.return,
              i = t,
              s = n;
            if (
              ((n = $s),
              (i.flags |= 32768),
              null !== s && "object" == typeof s && "function" == typeof s.then)
            ) {
              var u = s,
                c = i,
                d = c.tag;
              if (0 == (1 & c.mode) && (0 === d || 11 === d || 15 === d)) {
                var f = c.alternate;
                f
                  ? ((c.updateQueue = f.updateQueue),
                    (c.memoizedState = f.memoizedState),
                    (c.lanes = f.lanes))
                  : ((c.updateQueue = null), (c.memoizedState = null));
              }
              var p = Pi(a);
              if (null !== p) {
                (p.flags &= -257),
                  Fi(p, a, i, 0, n),
                  1 & p.mode && Ti(l, u, n),
                  (s = u);
                var h = (n = p).updateQueue;
                if (null === h) {
                  var g = new Set();
                  g.add(s), (n.updateQueue = g);
                } else h.add(s);
                break e;
              }
              if (0 == (1 & n)) {
                Ti(l, u, n), Au();
                break e;
              }
              s = Error(y(426));
            } else if (yl && 1 & i.mode) {
              var m = Pi(a);
              if (null !== m) {
                0 == (65536 & m.flags) && (m.flags |= 256),
                  Fi(m, a, i, 0, n),
                  Al(Si(s, i));
                break e;
              }
            }
            (l = s = Si(s, i)),
              4 !== Gs && (Gs = 2),
              null === Js ? (Js = [l]) : Js.push(l),
              (l = a);
            do {
              switch (l.tag) {
                case 3:
                  (l.flags |= 65536),
                    (n &= -n),
                    (l.lanes |= n),
                    Kl(l, Li(0, s, n));
                  break e;
                case 1:
                  i = s;
                  var b = l.type,
                    v = l.stateNode;
                  if (
                    0 == (128 & l.flags) &&
                    ("function" == typeof b.getDerivedStateFromError ||
                      (null !== v &&
                        "function" == typeof v.componentDidCatch &&
                        (null === lu || !lu.has(v))))
                  ) {
                    (l.flags |= 65536),
                      (n &= -n),
                      (l.lanes |= n),
                      Kl(l, Ai(l, i, n));
                    break e;
                  }
              }
              l = l.return;
            } while (null !== l);
          }
          _u(t);
        } catch (e) {
          (n = e), Hs === t && null !== t && (Hs = t = t.return);
          continue;
        }
        break;
      }
    }
    function Lu() {
      var e = zs.current;
      return (zs.current = vi), null === e ? vi : e;
    }
    function Au() {
      (0 !== Gs && 3 !== Gs && 2 !== Gs) || (Gs = 4),
        null === Bs ||
          (0 == (268435455 & Ys) && 0 == (268435455 & Ks)) ||
          ku(Bs, $s);
    }
    function Tu(e, n) {
      var t = qs;
      qs |= 2;
      var r = Lu();
      for ((Bs === e && $s === n) || ((tu = null), Cu(e, n)); ; )
        try {
          Pu();
          break;
        } catch (n) {
          Nu(e, n);
        }
      if ((Dl(), (qs = t), (zs.current = r), null !== Hs)) throw Error(y(261));
      return (Bs = null), ($s = 0), Gs;
    }
    function Pu() {
      for (; null !== Hs; ) Ou(Hs);
    }
    function Fu() {
      for (; null !== Hs && !un(); ) Ou(Hs);
    }
    function Ou(e) {
      var n = Is(e.alternate, e, Vs);
      (e.memoizedProps = e.pendingProps),
        null === n ? _u(e) : (Hs = n),
        (Ms.current = null);
    }
    function _u(e) {
      var n = e;
      do {
        var t = n.alternate;
        if (((e = n.return), 0 == (32768 & n.flags))) {
          if (null !== (t = as(t, n, Vs))) return void (Hs = t);
        } else {
          if (null !== (t = is(t, n))) return (t.flags &= 32767), void (Hs = t);
          if (null === e) return (Gs = 6), void (Hs = null);
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        }
        if (null !== (n = n.sibling)) return void (Hs = n);
        Hs = n = e;
      } while (null !== n);
      0 === Gs && (Gs = 5);
    }
    function Ru(e, n, t) {
      var r = _n,
        o = Us.transition;
      try {
        (Us.transition = null),
          (_n = 1),
          (function (e, n, t, r) {
            do {
              Du();
            } while (null !== iu);
            if (0 != (6 & qs)) throw Error(y(327));
            t = e.finishedWork;
            var o = e.finishedLanes;
            if (null === t) return null;
            if (
              ((e.finishedWork = null), (e.finishedLanes = 0), t === e.current)
            )
              throw Error(y(177));
            (e.callbackNode = null), (e.callbackPriority = 0);
            var l = t.lanes | t.childLanes;
            if (
              ((function (e, n) {
                var t = e.pendingLanes & ~n;
                (e.pendingLanes = n),
                  (e.suspendedLanes = 0),
                  (e.pingedLanes = 0),
                  (e.expiredLanes &= n),
                  (e.mutableReadLanes &= n),
                  (e.entangledLanes &= n),
                  (n = e.entanglements);
                var r = e.eventTimes;
                for (e = e.expirationTimes; 0 < t; ) {
                  var o = 31 - kn(t),
                    l = 1 << o;
                  (n[o] = 0), (r[o] = -1), (e[o] = -1), (t &= ~l);
                }
              })(e, l),
              e === Bs && ((Hs = Bs = null), ($s = 0)),
              (0 == (2064 & t.subtreeFlags) && 0 == (2064 & t.flags)) ||
                au ||
                ((au = !0),
                Bu(gn, function () {
                  return Du(), null;
                })),
              (l = 0 != (15990 & t.flags)),
              0 != (15990 & t.subtreeFlags) || l)
            ) {
              (l = Us.transition), (Us.transition = null);
              var a = _n;
              _n = 1;
              var i = qs;
              (qs |= 4),
                (Ms.current = null),
                (function (e, n) {
                  if (((ho = ot), Nr((e = Cr())))) {
                    if ("selectionStart" in e)
                      var t = { start: e.selectionStart, end: e.selectionEnd };
                    else
                      e: {
                        var r =
                          (t =
                            ((t = e.ownerDocument) && t.defaultView) || window)
                            .getSelection && t.getSelection();
                        if (r && 0 !== r.rangeCount) {
                          t = r.anchorNode;
                          var o = r.anchorOffset,
                            l = r.focusNode;
                          r = r.focusOffset;
                          try {
                            t.nodeType, l.nodeType;
                          } catch (e) {
                            t = null;
                            break e;
                          }
                          var a = 0,
                            i = -1,
                            s = -1,
                            u = 0,
                            c = 0,
                            d = e,
                            f = null;
                          n: for (;;) {
                            for (
                              var p;
                              d !== t ||
                                (0 !== o && 3 !== d.nodeType) ||
                                (i = a + o),
                                d !== l ||
                                  (0 !== r && 3 !== d.nodeType) ||
                                  (s = a + r),
                                3 === d.nodeType && (a += d.nodeValue.length),
                                null !== (p = d.firstChild);

                            )
                              (f = d), (d = p);
                            for (;;) {
                              if (d === e) break n;
                              if (
                                (f === t && ++u === o && (i = a),
                                f === l && ++c === r && (s = a),
                                null !== (p = d.nextSibling))
                              )
                                break;
                              f = (d = f).parentNode;
                            }
                            d = p;
                          }
                          t =
                            -1 === i || -1 === s ? null : { start: i, end: s };
                        } else t = null;
                      }
                    t = t || { start: 0, end: 0 };
                  } else t = null;
                  for (
                    go = { focusedElem: e, selectionRange: t }, ot = !1, ds = n;
                    null !== ds;

                  )
                    if (
                      ((e = (n = ds).child),
                      0 != (1028 & n.subtreeFlags) && null !== e)
                    )
                      (e.return = n), (ds = e);
                    else
                      for (; null !== ds; ) {
                        n = ds;
                        try {
                          var h = n.alternate;
                          if (0 != (1024 & n.flags))
                            switch (n.tag) {
                              case 0:
                              case 11:
                              case 15:
                              case 5:
                              case 6:
                              case 4:
                              case 17:
                                break;
                              case 1:
                                if (null !== h) {
                                  var g = h.memoizedProps,
                                    m = h.memoizedState,
                                    b = n.stateNode,
                                    v = b.getSnapshotBeforeUpdate(
                                      n.elementType === n.type
                                        ? g
                                        : Pl(n.type, g),
                                      m
                                    );
                                  b.__reactInternalSnapshotBeforeUpdate = v;
                                }
                                break;
                              case 3:
                                var k = n.stateNode.containerInfo;
                                1 === k.nodeType
                                  ? (k.textContent = "")
                                  : 9 === k.nodeType &&
                                    k.documentElement &&
                                    k.removeChild(k.documentElement);
                                break;
                              default:
                                throw Error(y(163));
                            }
                        } catch (e) {
                          ju(n, n.return, e);
                        }
                        if (null !== (e = n.sibling)) {
                          (e.return = n.return), (ds = e);
                          break;
                        }
                        ds = n.return;
                      }
                  (h = hs), (hs = !1);
                })(e, t),
                Ts(t, e),
                Lr(go),
                (ot = !!ho),
                (go = ho = null),
                (e.current = t),
                Fs(t, e, o),
                cn(),
                (qs = i),
                (_n = a),
                (Us.transition = l);
            } else e.current = t;
            if (
              (au && ((au = !1), (iu = e), (su = o)),
              (l = e.pendingLanes),
              0 === l && (lu = null),
              (function (e) {
                if (vn && "function" == typeof vn.onCommitFiberRoot)
                  try {
                    vn.onCommitFiberRoot(
                      yn,
                      e,
                      void 0,
                      128 == (128 & e.current.flags)
                    );
                  } catch (e) {}
              })(t.stateNode),
              mu(e, dn()),
              null !== n)
            )
              for (r = e.onRecoverableError, t = 0; t < n.length; t++)
                (o = n[t]),
                  r(o.value, { componentStack: o.stack, digest: o.digest });
            if (ru) throw ((ru = !1), (e = ou), (ou = null), e);
            0 != (1 & su) && 0 !== e.tag && Du(),
              (l = e.pendingLanes),
              0 != (1 & l)
                ? e === cu
                  ? uu++
                  : ((uu = 0), (cu = e))
                : (uu = 0),
              tl();
          })(e, n, t, r);
      } finally {
        (Us.transition = o), (_n = r);
      }
      return null;
    }
    function Du() {
      if (null !== iu) {
        var e = Rn(su),
          n = Us.transition,
          t = _n;
        try {
          if (((Us.transition = null), (_n = 16 > e ? 16 : e), null === iu))
            var r = !1;
          else {
            if (((e = iu), (iu = null), (su = 0), 0 != (6 & qs)))
              throw Error(y(331));
            var o = qs;
            for (qs |= 4, ds = e.current; null !== ds; ) {
              var l = ds,
                a = l.child;
              if (0 != (16 & ds.flags)) {
                var i = l.deletions;
                if (null !== i) {
                  for (var s = 0; s < i.length; s++) {
                    var u = i[s];
                    for (ds = u; null !== ds; ) {
                      var c = ds;
                      switch (c.tag) {
                        case 0:
                        case 11:
                        case 15:
                          gs(8, c, l);
                      }
                      var d = c.child;
                      if (null !== d) (d.return = c), (ds = d);
                      else
                        for (; null !== ds; ) {
                          var f = (c = ds).sibling,
                            p = c.return;
                          if ((ys(c), c === u)) {
                            ds = null;
                            break;
                          }
                          if (null !== f) {
                            (f.return = p), (ds = f);
                            break;
                          }
                          ds = p;
                        }
                    }
                  }
                  var h = l.alternate;
                  if (null !== h) {
                    var g = h.child;
                    if (null !== g) {
                      h.child = null;
                      do {
                        var m = g.sibling;
                        (g.sibling = null), (g = m);
                      } while (null !== g);
                    }
                  }
                  ds = l;
                }
              }
              if (0 != (2064 & l.subtreeFlags) && null !== a)
                (a.return = l), (ds = a);
              else
                e: for (; null !== ds; ) {
                  if (0 != (2048 & (l = ds).flags))
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        gs(9, l, l.return);
                    }
                  var b = l.sibling;
                  if (null !== b) {
                    (b.return = l.return), (ds = b);
                    break e;
                  }
                  ds = l.return;
                }
            }
            var v = e.current;
            for (ds = v; null !== ds; ) {
              var k = (a = ds).child;
              if (0 != (2064 & a.subtreeFlags) && null !== k)
                (k.return = a), (ds = k);
              else
                e: for (a = v; null !== ds; ) {
                  if (0 != (2048 & (i = ds).flags))
                    try {
                      switch (i.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ms(9, i);
                      }
                    } catch (e) {
                      ju(i, i.return, e);
                    }
                  if (i === a) {
                    ds = null;
                    break e;
                  }
                  var x = i.sibling;
                  if (null !== x) {
                    (x.return = i.return), (ds = x);
                    break e;
                  }
                  ds = i.return;
                }
            }
            if (
              ((qs = o),
              tl(),
              vn && "function" == typeof vn.onPostCommitFiberRoot)
            )
              try {
                vn.onPostCommitFiberRoot(yn, e);
              } catch (e) {}
            r = !0;
          }
          return r;
        } finally {
          (_n = t), (Us.transition = n);
        }
      }
      return !1;
    }
    function Iu(e, n, t) {
      (e = Ql(e, (n = Li(0, (n = Si(t, n)), 1)), 1)),
        (n = pu()),
        null !== e && (Fn(e, 1, n), mu(e, n));
    }
    function ju(e, n, t) {
      if (3 === e.tag) Iu(e, e, t);
      else
        for (; null !== n; ) {
          if (3 === n.tag) {
            Iu(n, e, t);
            break;
          }
          if (1 === n.tag) {
            var r = n.stateNode;
            if (
              "function" == typeof n.type.getDerivedStateFromError ||
              ("function" == typeof r.componentDidCatch &&
                (null === lu || !lu.has(r)))
            ) {
              (n = Ql(n, (e = Ai(n, (e = Si(t, e)), 1)), 1)),
                (e = pu()),
                null !== n && (Fn(n, 1, e), mu(n, e));
              break;
            }
          }
          n = n.return;
        }
    }
    function zu(e, n, t) {
      var r = e.pingCache;
      null !== r && r.delete(n),
        (n = pu()),
        (e.pingedLanes |= e.suspendedLanes & t),
        Bs === e &&
          ($s & t) === t &&
          (4 === Gs || (3 === Gs && (130023424 & $s) === $s && 500 > dn() - eu)
            ? Cu(e, 0)
            : (Xs |= t)),
        mu(e, n);
    }
    function Mu(e, n) {
      0 === n &&
        (0 == (1 & e.mode)
          ? (n = 1)
          : ((n = En), 0 == (130023424 & (En <<= 1)) && (En = 4194304)));
      var t = pu();
      null !== (e = Hl(e, n)) && (Fn(e, n, t), mu(e, t));
    }
    function Uu(e) {
      var n = e.memoizedState,
        t = 0;
      null !== n && (t = n.retryLane), Mu(e, t);
    }
    function qu(e, n) {
      var t = 0;
      switch (e.tag) {
        case 13:
          var r = e.stateNode,
            o = e.memoizedState;
          null !== o && (t = o.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        default:
          throw Error(y(314));
      }
      null !== r && r.delete(n), Mu(e, t);
    }
    function Bu(e, n) {
      return an(e, n);
    }
    function Hu(e, n, t, r) {
      (this.tag = e),
        (this.key = t),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = n),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function $u(e, n, t, r) {
      return new Hu(e, n, t, r);
    }
    function Vu(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function Wu(e, n) {
      var t = e.alternate;
      return (
        null === t
          ? (((t = $u(e.tag, n, e.key, e.mode)).elementType = e.elementType),
            (t.type = e.type),
            (t.stateNode = e.stateNode),
            (t.alternate = e),
            (e.alternate = t))
          : ((t.pendingProps = n),
            (t.type = e.type),
            (t.flags = 0),
            (t.subtreeFlags = 0),
            (t.deletions = null)),
        (t.flags = 14680064 & e.flags),
        (t.childLanes = e.childLanes),
        (t.lanes = e.lanes),
        (t.child = e.child),
        (t.memoizedProps = e.memoizedProps),
        (t.memoizedState = e.memoizedState),
        (t.updateQueue = e.updateQueue),
        (n = e.dependencies),
        (t.dependencies =
          null === n ? null : { lanes: n.lanes, firstContext: n.firstContext }),
        (t.sibling = e.sibling),
        (t.index = e.index),
        (t.ref = e.ref),
        t
      );
    }
    function Gu(e, n, t, r, o, l) {
      var a = 2;
      if (((r = e), "function" == typeof e)) Vu(e) && (a = 1);
      else if ("string" == typeof e) a = 5;
      else
        e: switch (e) {
          case I:
            return Qu(t.children, o, l, n);
          case j:
            (a = 8), (o |= 8);
            break;
          case z:
            return (
              ((e = $u(12, t, n, 2 | o)).elementType = z), (e.lanes = l), e
            );
          case B:
            return ((e = $u(13, t, n, o)).elementType = B), (e.lanes = l), e;
          case H:
            return ((e = $u(19, t, n, o)).elementType = H), (e.lanes = l), e;
          case W:
            return Yu(t, o, l, n);
          default:
            if ("object" == typeof e && null !== e)
              switch (e.$$typeof) {
                case M:
                  a = 10;
                  break e;
                case U:
                  a = 9;
                  break e;
                case q:
                  a = 11;
                  break e;
                case $:
                  a = 14;
                  break e;
                case V:
                  (a = 16), (r = null);
                  break e;
              }
            throw Error(y(130, null == e ? e : typeof e, ""));
        }
      return (
        ((n = $u(a, t, n, o)).elementType = e), (n.type = r), (n.lanes = l), n
      );
    }
    function Qu(e, n, t, r) {
      return ((e = $u(7, e, r, n)).lanes = t), e;
    }
    function Yu(e, n, t, r) {
      return (
        ((e = $u(22, e, r, n)).elementType = W),
        (e.lanes = t),
        (e.stateNode = { isHidden: !1 }),
        e
      );
    }
    function Ku(e, n, t) {
      return ((e = $u(6, e, null, n)).lanes = t), e;
    }
    function Xu(e, n, t) {
      return (
        ((n = $u(4, null !== e.children ? e.children : [], e.key, n)).lanes =
          t),
        (n.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        n
      );
    }
    function Ju(e, n, t, r, o) {
      (this.tag = n),
        (this.containerInfo = e),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Pn(0)),
        (this.expirationTimes = Pn(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Pn(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = o),
        (this.mutableSourceEagerHydrationData = null);
    }
    function Zu(e, n, t, r, o, l, a, i, s) {
      return (
        (e = new Ju(e, n, t, i, s)),
        1 === n ? ((n = 1), !0 === l && (n |= 8)) : (n = 0),
        (l = $u(3, null, null, n)),
        (e.current = l),
        (l.stateNode = e),
        (l.memoizedState = {
          element: r,
          isDehydrated: t,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        Vl(l),
        e
      );
    }
    function ec(e, n, t) {
      var r =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: D,
        key: null == r ? null : "" + r,
        children: e,
        containerInfo: n,
        implementation: t,
      };
    }
    function nc(e) {
      if (!e) return qo;
      e: {
        if (nn((e = e._reactInternals)) !== e || 1 !== e.tag)
          throw Error(y(170));
        var n = e;
        do {
          switch (n.tag) {
            case 3:
              n = n.stateNode.context;
              break e;
            case 1:
              if (Wo(n.type)) {
                n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          n = n.return;
        } while (null !== n);
        throw Error(y(171));
      }
      if (1 === e.tag) {
        var t = e.type;
        if (Wo(t)) return Yo(e, t, n);
      }
      return n;
    }
    function tc(e, n, t, r, o, l, a, i, s) {
      return (
        ((e = Zu(t, r, !0, e, 0, l, 0, i, s)).context = nc(null)),
        (t = e.current),
        ((l = Gl((r = pu()), (o = hu(t)))).callback = null != n ? n : null),
        Ql(t, l, o),
        (e.current.lanes = o),
        Fn(e, o, r),
        mu(e, r),
        e
      );
    }
    function rc(e, n, t, r) {
      var o = n.current,
        l = pu(),
        a = hu(o);
      return (
        (t = nc(t)),
        null === n.context ? (n.context = t) : (n.pendingContext = t),
        ((n = Gl(l, a)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (n.callback = r),
        null !== (e = Ql(o, n, a)) && (gu(e, o, a, l), Yl(e, o, a)),
        a
      );
    }
    function oc(e) {
      return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
    }
    function lc(e, n) {
      if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var t = e.retryLane;
        e.retryLane = 0 !== t && t < n ? t : n;
      }
    }
    function ac(e, n) {
      lc(e, n), (e = e.alternate) && lc(e, n);
    }
    Is = function (e, n, t) {
      if (null !== e)
        if (e.memoizedProps !== n.pendingProps || Ho.current) _i = !0;
        else {
          if (0 == (e.lanes & t) && 0 == (128 & n.flags))
            return (
              (_i = !1),
              (function (e, n, t) {
                switch (n.tag) {
                  case 3:
                    Hi(n), Ll();
                    break;
                  case 5:
                    va(n);
                    break;
                  case 1:
                    Wo(n.type) && Ko(n);
                    break;
                  case 4:
                    ba(n, n.stateNode.containerInfo);
                    break;
                  case 10:
                    var r = n.type._context,
                      o = n.memoizedProps.value;
                    Uo(Fl, r._currentValue), (r._currentValue = o);
                    break;
                  case 13:
                    if (null !== (r = n.memoizedState))
                      return null !== r.dehydrated
                        ? (Uo(xa, 1 & xa.current), (n.flags |= 128), null)
                        : 0 != (t & n.child.childLanes)
                        ? Ki(e, n, t)
                        : (Uo(xa, 1 & xa.current),
                          null !== (e = rs(e, n, t)) ? e.sibling : null);
                    Uo(xa, 1 & xa.current);
                    break;
                  case 19:
                    if (((r = 0 != (t & n.childLanes)), 0 != (128 & e.flags))) {
                      if (r) return ns(e, n, t);
                      n.flags |= 128;
                    }
                    if (
                      (null !== (o = n.memoizedState) &&
                        ((o.rendering = null),
                        (o.tail = null),
                        (o.lastEffect = null)),
                      Uo(xa, xa.current),
                      r)
                    )
                      break;
                    return null;
                  case 22:
                  case 23:
                    return (n.lanes = 0), zi(e, n, t);
                }
                return rs(e, n, t);
              })(e, n, t)
            );
          _i = 0 != (131072 & e.flags);
        }
      else (_i = !1), yl && 0 != (1048576 & n.flags) && pl(n, al, n.index);
      switch (((n.lanes = 0), n.tag)) {
        case 2:
          var r = n.type;
          ts(e, n), (e = n.pendingProps);
          var o = Vo(n, Bo.current);
          zl(n, t), (o = ja(null, n, r, e, o, t));
          var l = za();
          return (
            (n.flags |= 1),
            "object" == typeof o &&
            null !== o &&
            "function" == typeof o.render &&
            void 0 === o.$$typeof
              ? ((n.tag = 1),
                (n.memoizedState = null),
                (n.updateQueue = null),
                Wo(r) ? ((l = !0), Ko(n)) : (l = !1),
                (n.memoizedState =
                  null !== o.state && void 0 !== o.state ? o.state : null),
                Vl(n),
                (o.updater = na),
                (n.stateNode = o),
                (o._reactInternals = n),
                la(n, r, e, t),
                (n = Bi(null, n, r, !0, l, t)))
              : ((n.tag = 0),
                yl && l && hl(n),
                Ri(null, n, o, t),
                (n = n.child)),
            n
          );
        case 16:
          r = n.elementType;
          e: {
            switch (
              (ts(e, n),
              (e = n.pendingProps),
              (r = (o = r._init)(r._payload)),
              (n.type = r),
              (o = n.tag =
                (function (e) {
                  if ("function" == typeof e) return Vu(e) ? 1 : 0;
                  if (null != e) {
                    if ((e = e.$$typeof) === q) return 11;
                    if (e === $) return 14;
                  }
                  return 2;
                })(r)),
              (e = Pl(r, e)),
              o)
            ) {
              case 0:
                n = Ui(null, n, r, e, t);
                break e;
              case 1:
                n = qi(null, n, r, e, t);
                break e;
              case 11:
                n = Di(null, n, r, e, t);
                break e;
              case 14:
                n = Ii(null, n, r, Pl(r.type, e), t);
                break e;
            }
            throw Error(y(306, r, ""));
          }
          return n;
        case 0:
          return (
            (r = n.type),
            (o = n.pendingProps),
            Ui(e, n, r, (o = n.elementType === r ? o : Pl(r, o)), t)
          );
        case 1:
          return (
            (r = n.type),
            (o = n.pendingProps),
            qi(e, n, r, (o = n.elementType === r ? o : Pl(r, o)), t)
          );
        case 3:
          e: {
            if ((Hi(n), null === e)) throw Error(y(387));
            (r = n.pendingProps),
              (o = (l = n.memoizedState).element),
              Wl(e, n),
              Xl(n, r, null, t);
            var a = n.memoizedState;
            if (((r = a.element), l.isDehydrated)) {
              if (
                ((l = {
                  element: r,
                  isDehydrated: !1,
                  cache: a.cache,
                  pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                  transitions: a.transitions,
                }),
                (n.updateQueue.baseState = l),
                (n.memoizedState = l),
                256 & n.flags)
              ) {
                n = $i(e, n, r, t, (o = Si(Error(y(423)), n)));
                break e;
              }
              if (r !== o) {
                n = $i(e, n, r, t, (o = Si(Error(y(424)), n)));
                break e;
              }
              for (
                bl = So(n.stateNode.containerInfo.firstChild),
                  ml = n,
                  yl = !0,
                  vl = null,
                  t = da(n, null, r, t),
                  n.child = t;
                t;

              )
                (t.flags = (-3 & t.flags) | 4096), (t = t.sibling);
            } else {
              if ((Ll(), r === o)) {
                n = rs(e, n, t);
                break e;
              }
              Ri(e, n, r, t);
            }
            n = n.child;
          }
          return n;
        case 5:
          return (
            va(n),
            null === e && Sl(n),
            (r = n.type),
            (o = n.pendingProps),
            (l = null !== e ? e.memoizedProps : null),
            (a = o.children),
            mo(r, o) ? (a = null) : null !== l && mo(r, l) && (n.flags |= 32),
            Mi(e, n),
            Ri(e, n, a, t),
            n.child
          );
        case 6:
          return null === e && Sl(n), null;
        case 13:
          return Ki(e, n, t);
        case 4:
          return (
            ba(n, n.stateNode.containerInfo),
            (r = n.pendingProps),
            null === e ? (n.child = ca(n, null, r, t)) : Ri(e, n, r, t),
            n.child
          );
        case 11:
          return (
            (r = n.type),
            (o = n.pendingProps),
            Di(e, n, r, (o = n.elementType === r ? o : Pl(r, o)), t)
          );
        case 7:
          return Ri(e, n, n.pendingProps, t), n.child;
        case 8:
        case 12:
          return Ri(e, n, n.pendingProps.children, t), n.child;
        case 10:
          e: {
            if (
              ((r = n.type._context),
              (o = n.pendingProps),
              (l = n.memoizedProps),
              (a = o.value),
              Uo(Fl, r._currentValue),
              (r._currentValue = a),
              null !== l)
            )
              if (kr(l.value, a)) {
                if (l.children === o.children && !Ho.current) {
                  n = rs(e, n, t);
                  break e;
                }
              } else
                for (null !== (l = n.child) && (l.return = n); null !== l; ) {
                  var i = l.dependencies;
                  if (null !== i) {
                    a = l.child;
                    for (var s = i.firstContext; null !== s; ) {
                      if (s.context === r) {
                        if (1 === l.tag) {
                          (s = Gl(-1, t & -t)).tag = 2;
                          var u = l.updateQueue;
                          if (null !== u) {
                            var c = (u = u.shared).pending;
                            null === c
                              ? (s.next = s)
                              : ((s.next = c.next), (c.next = s)),
                              (u.pending = s);
                          }
                        }
                        (l.lanes |= t),
                          null !== (s = l.alternate) && (s.lanes |= t),
                          jl(l.return, t, n),
                          (i.lanes |= t);
                        break;
                      }
                      s = s.next;
                    }
                  } else if (10 === l.tag)
                    a = l.type === n.type ? null : l.child;
                  else if (18 === l.tag) {
                    if (null === (a = l.return)) throw Error(y(341));
                    (a.lanes |= t),
                      null !== (i = a.alternate) && (i.lanes |= t),
                      jl(a, t, n),
                      (a = l.sibling);
                  } else a = l.child;
                  if (null !== a) a.return = l;
                  else
                    for (a = l; null !== a; ) {
                      if (a === n) {
                        a = null;
                        break;
                      }
                      if (null !== (l = a.sibling)) {
                        (l.return = a.return), (a = l);
                        break;
                      }
                      a = a.return;
                    }
                  l = a;
                }
            Ri(e, n, o.children, t), (n = n.child);
          }
          return n;
        case 9:
          return (
            (o = n.type),
            (r = n.pendingProps.children),
            zl(n, t),
            (r = r((o = Ml(o)))),
            (n.flags |= 1),
            Ri(e, n, r, t),
            n.child
          );
        case 14:
          return (
            (o = Pl((r = n.type), n.pendingProps)),
            Ii(e, n, r, (o = Pl(r.type, o)), t)
          );
        case 15:
          return ji(e, n, n.type, n.pendingProps, t);
        case 17:
          return (
            (r = n.type),
            (o = n.pendingProps),
            (o = n.elementType === r ? o : Pl(r, o)),
            ts(e, n),
            (n.tag = 1),
            Wo(r) ? ((e = !0), Ko(n)) : (e = !1),
            zl(n, t),
            ra(n, r, o),
            la(n, r, o, t),
            Bi(null, n, r, !0, e, t)
          );
        case 19:
          return ns(e, n, t);
        case 22:
          return zi(e, n, t);
      }
      throw Error(y(156, n.tag));
    };
    var ic =
      "function" == typeof reportError
        ? reportError
        : function (e) {
            console.error(e);
          };
    function sc(e) {
      this._internalRoot = e;
    }
    function uc(e) {
      this._internalRoot = e;
    }
    function cc(e) {
      return !(
        !e ||
        (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
      );
    }
    function dc(e) {
      return !(
        !e ||
        (1 !== e.nodeType &&
          9 !== e.nodeType &&
          11 !== e.nodeType &&
          (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
      );
    }
    function fc() {}
    function pc(e, n, t, r, o) {
      var l = t._reactRootContainer;
      if (l) {
        var a = l;
        if ("function" == typeof o) {
          var i = o;
          o = function () {
            var e = oc(a);
            i.call(e);
          };
        }
        rc(n, a, e, o);
      } else
        a = (function (e, n, t, r, o) {
          if (o) {
            if ("function" == typeof r) {
              var l = r;
              r = function () {
                var e = oc(a);
                l.call(e);
              };
            }
            var a = tc(n, r, e, 0, null, !1, 0, "", fc);
            return (
              (e._reactRootContainer = a),
              (e[Ao] = a.current),
              no(8 === e.nodeType ? e.parentNode : e),
              Su(),
              a
            );
          }
          for (; (o = e.lastChild); ) e.removeChild(o);
          if ("function" == typeof r) {
            var i = r;
            r = function () {
              var e = oc(s);
              i.call(e);
            };
          }
          var s = Zu(e, 0, !1, null, 0, !1, 0, "", fc);
          return (
            (e._reactRootContainer = s),
            (e[Ao] = s.current),
            no(8 === e.nodeType ? e.parentNode : e),
            Su(function () {
              rc(n, s, t, r);
            }),
            s
          );
        })(t, n, e, o, r);
      return oc(a);
    }
    (uc.prototype.render = sc.prototype.render =
      function (e) {
        var n = this._internalRoot;
        if (null === n) throw Error(y(409));
        rc(e, n, null, null);
      }),
      (uc.prototype.unmount = sc.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (null !== e) {
            this._internalRoot = null;
            var n = e.containerInfo;
            Su(function () {
              rc(null, e, null, null);
            }),
              (n[Ao] = null);
          }
        }),
      (uc.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
          var n = zn();
          e = { blockedOn: null, target: e, priority: n };
          for (var t = 0; t < Gn.length && 0 !== n && n < Gn[t].priority; t++);
          Gn.splice(t, 0, e), 0 === t && Xn(e);
        }
      }),
      (Dn = function (e) {
        switch (e.tag) {
          case 3:
            var n = e.stateNode;
            if (n.current.memoizedState.isDehydrated) {
              var t = Cn(n.pendingLanes);
              0 !== t &&
                (On(n, 1 | t),
                mu(n, dn()),
                0 == (6 & qs) && ((nu = dn() + 500), tl()));
            }
            break;
          case 13:
            Su(function () {
              var n = Hl(e, 1);
              if (null !== n) {
                var t = pu();
                gu(n, e, 1, t);
              }
            }),
              ac(e, 1);
        }
      }),
      (In = function (e) {
        if (13 === e.tag) {
          var n = Hl(e, 134217728);
          if (null !== n) gu(n, e, 134217728, pu());
          ac(e, 134217728);
        }
      }),
      (jn = function (e) {
        if (13 === e.tag) {
          var n = hu(e),
            t = Hl(e, n);
          if (null !== t) gu(t, e, n, pu());
          ac(e, n);
        }
      }),
      (zn = function () {
        return _n;
      }),
      (Mn = function (e, n) {
        var t = _n;
        try {
          return (_n = e), n();
        } finally {
          _n = t;
        }
      }),
      (De = function (e, n, t) {
        switch (n) {
          case "input":
            if ((de(e, t), (n = t.name), "radio" === t.type && null != n)) {
              for (t = e; t.parentNode; ) t = t.parentNode;
              for (
                t = t.querySelectorAll(
                  "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
                ),
                  n = 0;
                n < t.length;
                n++
              ) {
                var r = t[n];
                if (r !== e && r.form === e.form) {
                  var o = Do(r);
                  if (!o) throw Error(y(90));
                  ae(r), de(r, o);
                }
              }
            }
            break;
          case "textarea":
            ye(e, t);
            break;
          case "select":
            null != (n = t.value) && ge(e, !!t.multiple, n, !1);
        }
      }),
      (qe = wu),
      (Be = Su);
    var hc = { usingClientEntryPoint: !1, Events: [_o, Ro, Do, Me, Ue, wu] },
      gc = {
        findFiberByHostInstance: Oo,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom",
      },
      mc = {
        bundleType: gc.bundleType,
        version: gc.version,
        rendererPackageName: gc.rendererPackageName,
        rendererConfig: gc.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: _.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return null === (e = on(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
          gc.findFiberByHostInstance ||
          function () {
            return null;
          },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
      };
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var bc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!bc.isDisabled && bc.supportsFiber)
        try {
          (yn = bc.inject(mc)), (vn = bc);
        } catch (e) {}
    }
    (r = hc),
      (o = function (e, n) {
        var t =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!cc(n)) throw Error(y(200));
        return ec(e, n, null, t);
      }),
      (a = function (e, n) {
        if (!cc(e)) throw Error(y(299));
        var t = !1,
          r = "",
          o = ic;
        return (
          null != n &&
            (!0 === n.unstable_strictMode && (t = !0),
            void 0 !== n.identifierPrefix && (r = n.identifierPrefix),
            void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
          (n = Zu(e, 1, !1, null, 0, t, 0, r, o)),
          (e[Ao] = n.current),
          no(8 === e.nodeType ? e.parentNode : e),
          new sc(n)
        );
      }),
      (i = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var n = e._reactInternals;
        if (void 0 === n) {
          if ("function" == typeof e.render) throw Error(y(188));
          throw ((e = Object.keys(e).join(",")), Error(y(268, e)));
        }
        return (e = null === (e = on(n)) ? null : e.stateNode);
      }),
      (s = function (e) {
        return Su(e);
      }),
      (u = function (e, n, t) {
        if (!dc(n)) throw Error(y(200));
        return pc(null, e, n, !0, t);
      }),
      (c = function (e, n, t) {
        if (!cc(e)) throw Error(y(405));
        var r = (null != t && t.hydratedSources) || null,
          o = !1,
          l = "",
          a = ic;
        if (
          (null != t &&
            (!0 === t.unstable_strictMode && (o = !0),
            void 0 !== t.identifierPrefix && (l = t.identifierPrefix),
            void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
          (n = tc(n, null, e, 1, null != t ? t : null, o, 0, l, a)),
          (e[Ao] = n.current),
          no(e),
          r)
        )
          for (e = 0; e < r.length; e++)
            (o = (o = (t = r[e])._getVersion)(t._source)),
              null == n.mutableSourceEagerHydrationData
                ? (n.mutableSourceEagerHydrationData = [t, o])
                : n.mutableSourceEagerHydrationData.push(t, o);
        return new uc(n);
      }),
      (d = function (e, n, t) {
        if (!dc(n)) throw Error(y(200));
        return pc(null, e, n, !1, t);
      }),
      (f = function (e) {
        if (!dc(e)) throw Error(y(40));
        return (
          !!e._reactRootContainer &&
          (Su(function () {
            pc(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Ao] = null);
            });
          }),
          !0)
        );
      }),
      (p = wu),
      (h = function (e, n, t, r) {
        if (!dc(t)) throw Error(y(200));
        if (null == e || void 0 === e._reactInternals) throw Error(y(38));
        return pc(e, n, t, !1, r);
      }),
      (g = "18.2.0-next-9e3b772b8-20220608");
  }),
  l.register("6qr1r", function (e, n) {
    e.exports = l("7vgeW");
  }),
  l.register("7vgeW", function (n, t) {
    /**
     * @license React
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r, o, l, a, i, s, u, c, d, f, p, h, g, m, b, y, v, k, x;
    function w(e, n) {
      var t = e.length;
      e.push(n);
      e: for (; 0 < t; ) {
        var r = (t - 1) >>> 1,
          o = e[r];
        if (!(0 < C(o, n))) break e;
        (e[r] = n), (e[t] = o), (t = r);
      }
    }
    function S(e) {
      return 0 === e.length ? null : e[0];
    }
    function E(e) {
      if (0 === e.length) return null;
      var n = e[0],
        t = e.pop();
      if (t !== n) {
        e[0] = t;
        e: for (var r = 0, o = e.length, l = o >>> 1; r < l; ) {
          var a = 2 * (r + 1) - 1,
            i = e[a],
            s = a + 1,
            u = e[s];
          if (0 > C(i, t))
            s < o && 0 > C(u, i)
              ? ((e[r] = u), (e[s] = t), (r = s))
              : ((e[r] = i), (e[a] = t), (r = a));
          else {
            if (!(s < o && 0 > C(u, t))) break e;
            (e[r] = u), (e[s] = t), (r = s);
          }
        }
      }
      return n;
    }
    function C(e, n) {
      var t = e.sortIndex - n.sortIndex;
      return 0 !== t ? t : e.id - n.id;
    }
    if (
      (e(
        n.exports,
        "unstable_now",
        () => r,
        (e) => (r = e)
      ),
      e(
        n.exports,
        "unstable_IdlePriority",
        () => o,
        (e) => (o = e)
      ),
      e(
        n.exports,
        "unstable_ImmediatePriority",
        () => l,
        (e) => (l = e)
      ),
      e(
        n.exports,
        "unstable_LowPriority",
        () => a,
        (e) => (a = e)
      ),
      e(
        n.exports,
        "unstable_NormalPriority",
        () => i,
        (e) => (i = e)
      ),
      e(
        n.exports,
        "unstable_Profiling",
        () => s,
        (e) => (s = e)
      ),
      e(
        n.exports,
        "unstable_UserBlockingPriority",
        () => u,
        (e) => (u = e)
      ),
      e(
        n.exports,
        "unstable_cancelCallback",
        () => c,
        (e) => (c = e)
      ),
      e(
        n.exports,
        "unstable_continueExecution",
        () => d,
        (e) => (d = e)
      ),
      e(
        n.exports,
        "unstable_forceFrameRate",
        () => f,
        (e) => (f = e)
      ),
      e(
        n.exports,
        "unstable_getCurrentPriorityLevel",
        () => p,
        (e) => (p = e)
      ),
      e(
        n.exports,
        "unstable_getFirstCallbackNode",
        () => h,
        (e) => (h = e)
      ),
      e(
        n.exports,
        "unstable_next",
        () => g,
        (e) => (g = e)
      ),
      e(
        n.exports,
        "unstable_pauseExecution",
        () => m,
        (e) => (m = e)
      ),
      e(
        n.exports,
        "unstable_requestPaint",
        () => b,
        (e) => (b = e)
      ),
      e(
        n.exports,
        "unstable_runWithPriority",
        () => y,
        (e) => (y = e)
      ),
      e(
        n.exports,
        "unstable_scheduleCallback",
        () => v,
        (e) => (v = e)
      ),
      e(
        n.exports,
        "unstable_shouldYield",
        () => k,
        (e) => (k = e)
      ),
      e(
        n.exports,
        "unstable_wrapCallback",
        () => x,
        (e) => (x = e)
      ),
      "object" == typeof performance && "function" == typeof performance.now)
    ) {
      var N = performance;
      r = function () {
        return N.now();
      };
    } else {
      var L = Date,
        A = L.now();
      r = function () {
        return L.now() - A;
      };
    }
    var T = [],
      P = [],
      F = 1,
      O = null,
      _ = 3,
      R = !1,
      D = !1,
      I = !1,
      j = "function" == typeof setTimeout ? setTimeout : null,
      z = "function" == typeof clearTimeout ? clearTimeout : null,
      M = "undefined" != typeof setImmediate ? setImmediate : null;
    function U(e) {
      for (var n = S(P); null !== n; ) {
        if (null === n.callback) E(P);
        else {
          if (!(n.startTime <= e)) break;
          E(P), (n.sortIndex = n.expirationTime), w(T, n);
        }
        n = S(P);
      }
    }
    function q(e) {
      if (((I = !1), U(e), !D))
        if (null !== S(T)) (D = !0), Z(B);
        else {
          var n = S(P);
          null !== n && ee(q, n.startTime - e);
        }
    }
    function B(e, n) {
      (D = !1), I && ((I = !1), z(W), (W = -1)), (R = !0);
      var t = _;
      try {
        for (
          U(n), O = S(T);
          null !== O && (!(O.expirationTime > n) || (e && !Y()));

        ) {
          var o = O.callback;
          if ("function" == typeof o) {
            (O.callback = null), (_ = O.priorityLevel);
            var l = o(O.expirationTime <= n);
            (n = r()),
              "function" == typeof l ? (O.callback = l) : O === S(T) && E(T),
              U(n);
          } else E(T);
          O = S(T);
        }
        if (null !== O) var a = !0;
        else {
          var i = S(P);
          null !== i && ee(q, i.startTime - n), (a = !1);
        }
        return a;
      } finally {
        (O = null), (_ = t), (R = !1);
      }
    }
    "undefined" != typeof navigator &&
      void 0 !== navigator.scheduling &&
      void 0 !== navigator.scheduling.isInputPending &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var H,
      $ = !1,
      V = null,
      W = -1,
      G = 5,
      Q = -1;
    function Y() {
      return !(r() - Q < G);
    }
    function K() {
      if (null !== V) {
        var e = r();
        Q = e;
        var n = !0;
        try {
          n = V(!0, e);
        } finally {
          n ? H() : (($ = !1), (V = null));
        }
      } else $ = !1;
    }
    if ("function" == typeof M)
      H = function () {
        M(K);
      };
    else if ("undefined" != typeof MessageChannel) {
      var X = new MessageChannel(),
        J = X.port2;
      (X.port1.onmessage = K),
        (H = function () {
          J.postMessage(null);
        });
    } else
      H = function () {
        j(K, 0);
      };
    function Z(e) {
      (V = e), $ || (($ = !0), H());
    }
    function ee(e, n) {
      W = j(function () {
        e(r());
      }, n);
    }
    (o = 5),
      (l = 1),
      (a = 4),
      (i = 3),
      (s = null),
      (u = 2),
      (c = function (e) {
        e.callback = null;
      }),
      (d = function () {
        D || R || ((D = !0), Z(B));
      }),
      (f = function (e) {
        0 > e || 125 < e
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (G = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (p = function () {
        return _;
      }),
      (h = function () {
        return S(T);
      }),
      (g = function (e) {
        switch (_) {
          case 1:
          case 2:
          case 3:
            var n = 3;
            break;
          default:
            n = _;
        }
        var t = _;
        _ = n;
        try {
          return e();
        } finally {
          _ = t;
        }
      }),
      (m = function () {}),
      (b = function () {}),
      (y = function (e, n) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var t = _;
        _ = e;
        try {
          return n();
        } finally {
          _ = t;
        }
      }),
      (v = function (e, n, t) {
        var o = r();
        switch (
          ("object" == typeof t && null !== t
            ? (t = "number" == typeof (t = t.delay) && 0 < t ? o + t : o)
            : (t = o),
          e)
        ) {
          case 1:
            var l = -1;
            break;
          case 2:
            l = 250;
            break;
          case 5:
            l = 1073741823;
            break;
          case 4:
            l = 1e4;
            break;
          default:
            l = 5e3;
        }
        return (
          (e = {
            id: F++,
            callback: n,
            priorityLevel: e,
            startTime: t,
            expirationTime: (l = t + l),
            sortIndex: -1,
          }),
          t > o
            ? ((e.sortIndex = t),
              w(P, e),
              null === S(T) &&
                e === S(P) &&
                (I ? (z(W), (W = -1)) : (I = !0), ee(q, t - o)))
            : ((e.sortIndex = l), w(T, e), D || R || ((D = !0), Z(B))),
          e
        );
      }),
      (k = Y),
      (x = function (e) {
        var n = _;
        return function () {
          var t = _;
          _ = n;
          try {
            return e.apply(this, arguments);
          } finally {
            _ = t;
          }
        };
      });
  }),
  l.register("exEpv", function (e, n) {
    var t = l("cw87W");
    function r() {}
    function o() {}
    (o.resetWarningCache = r),
      (e.exports = function () {
        function e(e, n, r, o, l, a) {
          if (a !== t) {
            var i = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ((i.name = "Invariant Violation"), i);
          }
        }
        function n() {
          return e;
        }
        e.isRequired = e;
        var l = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: n,
          element: e,
          elementType: e,
          instanceOf: n,
          node: e,
          objectOf: n,
          oneOf: n,
          oneOfType: n,
          shape: n,
          exact: n,
          checkPropTypes: o,
          resetWarningCache: r,
        };
        return (l.PropTypes = l), l;
      });
  }),
  l.register("cw87W", function (e, n) {
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  }),
  l.register("2pHqv", function (n, t) {
    /**
     * @license React
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r,
      o,
      l,
      a,
      i,
      s,
      u,
      c,
      d,
      f,
      p,
      h,
      g,
      m,
      b,
      y,
      v,
      k,
      x,
      w,
      S,
      E,
      C,
      N,
      L,
      A,
      T,
      P;
    e(
      n.exports,
      "ContextConsumer",
      () => r,
      (e) => (r = e)
    ),
      e(
        n.exports,
        "ContextProvider",
        () => o,
        (e) => (o = e)
      ),
      e(
        n.exports,
        "Element",
        () => l,
        (e) => (l = e)
      ),
      e(
        n.exports,
        "ForwardRef",
        () => a,
        (e) => (a = e)
      ),
      e(
        n.exports,
        "Fragment",
        () => i,
        (e) => (i = e)
      ),
      e(
        n.exports,
        "Lazy",
        () => s,
        (e) => (s = e)
      ),
      e(
        n.exports,
        "Memo",
        () => u,
        (e) => (u = e)
      ),
      e(
        n.exports,
        "Portal",
        () => c,
        (e) => (c = e)
      ),
      e(
        n.exports,
        "Profiler",
        () => d,
        (e) => (d = e)
      ),
      e(
        n.exports,
        "StrictMode",
        () => f,
        (e) => (f = e)
      ),
      e(
        n.exports,
        "Suspense",
        () => p,
        (e) => (p = e)
      ),
      e(
        n.exports,
        "SuspenseList",
        () => h,
        (e) => (h = e)
      ),
      e(
        n.exports,
        "isAsyncMode",
        () => g,
        (e) => (g = e)
      ),
      e(
        n.exports,
        "isConcurrentMode",
        () => m,
        (e) => (m = e)
      ),
      e(
        n.exports,
        "isContextConsumer",
        () => b,
        (e) => (b = e)
      ),
      e(
        n.exports,
        "isContextProvider",
        () => y,
        (e) => (y = e)
      ),
      e(
        n.exports,
        "isElement",
        () => v,
        (e) => (v = e)
      ),
      e(
        n.exports,
        "isForwardRef",
        () => k,
        (e) => (k = e)
      ),
      e(
        n.exports,
        "isFragment",
        () => x,
        (e) => (x = e)
      ),
      e(
        n.exports,
        "isLazy",
        () => w,
        (e) => (w = e)
      ),
      e(
        n.exports,
        "isMemo",
        () => S,
        (e) => (S = e)
      ),
      e(
        n.exports,
        "isPortal",
        () => E,
        (e) => (E = e)
      ),
      e(
        n.exports,
        "isProfiler",
        () => C,
        (e) => (C = e)
      ),
      e(
        n.exports,
        "isStrictMode",
        () => N,
        (e) => (N = e)
      ),
      e(
        n.exports,
        "isSuspense",
        () => L,
        (e) => (L = e)
      ),
      e(
        n.exports,
        "isSuspenseList",
        () => A,
        (e) => (A = e)
      ),
      e(
        n.exports,
        "isValidElementType",
        () => T,
        (e) => (T = e)
      ),
      e(
        n.exports,
        "typeOf",
        () => P,
        (e) => (P = e)
      );
    var F,
      O = Symbol.for("react.element"),
      _ = Symbol.for("react.portal"),
      R = Symbol.for("react.fragment"),
      D = Symbol.for("react.strict_mode"),
      I = Symbol.for("react.profiler"),
      j = Symbol.for("react.provider"),
      z = Symbol.for("react.context"),
      M = Symbol.for("react.server_context"),
      U = Symbol.for("react.forward_ref"),
      q = Symbol.for("react.suspense"),
      B = Symbol.for("react.suspense_list"),
      H = Symbol.for("react.memo"),
      $ = Symbol.for("react.lazy"),
      V = Symbol.for("react.offscreen");
    function W(e) {
      if ("object" == typeof e && null !== e) {
        var n = e.$$typeof;
        switch (n) {
          case O:
            switch ((e = e.type)) {
              case R:
              case I:
              case D:
              case q:
              case B:
                return e;
              default:
                switch ((e = e && e.$$typeof)) {
                  case M:
                  case z:
                  case U:
                  case $:
                  case H:
                  case j:
                    return e;
                  default:
                    return n;
                }
            }
          case _:
            return n;
        }
      }
    }
    (F = Symbol.for("react.module.reference")),
      (r = z),
      (o = j),
      (l = O),
      (a = U),
      (i = R),
      (s = $),
      (u = H),
      (c = _),
      (d = I),
      (f = D),
      (p = q),
      (h = B),
      (g = function () {
        return !1;
      }),
      (m = function () {
        return !1;
      }),
      (b = function (e) {
        return W(e) === z;
      }),
      (y = function (e) {
        return W(e) === j;
      }),
      (v = function (e) {
        return "object" == typeof e && null !== e && e.$$typeof === O;
      }),
      (k = function (e) {
        return W(e) === U;
      }),
      (x = function (e) {
        return W(e) === R;
      }),
      (w = function (e) {
        return W(e) === $;
      }),
      (S = function (e) {
        return W(e) === H;
      }),
      (E = function (e) {
        return W(e) === _;
      }),
      (C = function (e) {
        return W(e) === I;
      }),
      (N = function (e) {
        return W(e) === D;
      }),
      (L = function (e) {
        return W(e) === q;
      }),
      (A = function (e) {
        return W(e) === B;
      }),
      (T = function (e) {
        return (
          "string" == typeof e ||
          "function" == typeof e ||
          e === R ||
          e === I ||
          e === D ||
          e === q ||
          e === B ||
          e === V ||
          ("object" == typeof e &&
            null !== e &&
            (e.$$typeof === $ ||
              e.$$typeof === H ||
              e.$$typeof === j ||
              e.$$typeof === z ||
              e.$$typeof === U ||
              e.$$typeof === F ||
              void 0 !== e.getModuleId))
        );
      }),
      (P = W);
  }),
  l.register("4xIeY", function (e, n) {
    var t = l("gfIPC"),
      r = l("loiy5")(t, "div");
    (r.displayName = "html"), (e.exports = r);
  }),
  l.register("gfIPC", function (e, n) {
    var t = l("7liU7"),
      r = l("5FdhY"),
      o = l("gEzUk"),
      a = l("4bDWb"),
      i = l("j2fZD"),
      s = l("gEq8b");
    e.exports = t([o, r, a, i, s]);
  }),
  l.register("7liU7", function (e, n) {
    var t = l("2eBQb"),
      r = l("ePTaw");
    e.exports = function (e) {
      var n,
        o,
        l = e.length,
        a = [],
        i = [],
        s = -1;
      for (; ++s < l; )
        (n = e[s]), a.push(n.property), i.push(n.normal), (o = n.space);
      return new r(t.apply(null, a), t.apply(null, i), o);
    };
  }),
  l.register("2eBQb", function (e, n) {
    e.exports = function () {
      for (var e = {}, n = 0; n < arguments.length; n++) {
        var r = arguments[n];
        for (var o in r) t.call(r, o) && (e[o] = r[o]);
      }
      return e;
    };
    var t = Object.prototype.hasOwnProperty;
  }),
  l.register("ePTaw", function (e, n) {
    e.exports = r;
    var t = r.prototype;
    function r(e, n, t) {
      (this.property = e), (this.normal = n), t && (this.space = t);
    }
    (t.space = null), (t.normal = {}), (t.property = {});
  }),
  l.register("5FdhY", function (e, n) {
    var t = l("dfqnp");
    e.exports = t({
      space: "xlink",
      transform: function (e, n) {
        return "xlink:" + n.slice(5).toLowerCase();
      },
      properties: {
        xLinkActuate: null,
        xLinkArcRole: null,
        xLinkHref: null,
        xLinkRole: null,
        xLinkShow: null,
        xLinkTitle: null,
        xLinkType: null,
      },
    });
  }),
  l.register("dfqnp", function (e, n) {
    var t = l("nGdAo"),
      r = l("ePTaw"),
      o = l("juorO");
    e.exports = function (e) {
      var n,
        l,
        a = e.space,
        i = e.mustUseProperty || [],
        s = e.attributes || {},
        u = e.properties,
        c = e.transform,
        d = {},
        f = {};
      for (n in u)
        (l = new o(n, c(s, n), u[n], a)),
          -1 !== i.indexOf(n) && (l.mustUseProperty = !0),
          (d[n] = l),
          (f[t(n)] = n),
          (f[t(l.attribute)] = n);
      return new r(d, f, a);
    };
  }),
  l.register("nGdAo", function (e, n) {
    e.exports = function (e) {
      return e.toLowerCase();
    };
  }),
  l.register("juorO", function (e, n) {
    var t = l("1L97d"),
      r = l("9MO5q");
    (e.exports = i), (i.prototype = new t()), (i.prototype.defined = !0);
    var o = [
        "boolean",
        "booleanish",
        "overloadedBoolean",
        "number",
        "commaSeparated",
        "spaceSeparated",
        "commaOrSpaceSeparated",
      ],
      a = o.length;
    function i(e, n, l, i) {
      var u,
        c = -1;
      for (s(this, "space", i), t.call(this, e, n); ++c < a; )
        s(this, (u = o[c]), (l & r[u]) === r[u]);
    }
    function s(e, n, t) {
      t && (e[n] = t);
    }
  }),
  l.register("1L97d", function (e, n) {
    e.exports = r;
    var t = r.prototype;
    function r(e, n) {
      (this.property = e), (this.attribute = n);
    }
    (t.space = null),
      (t.attribute = null),
      (t.property = null),
      (t.boolean = !1),
      (t.booleanish = !1),
      (t.overloadedBoolean = !1),
      (t.number = !1),
      (t.commaSeparated = !1),
      (t.spaceSeparated = !1),
      (t.commaOrSpaceSeparated = !1),
      (t.mustUseProperty = !1),
      (t.defined = !1);
  }),
  l.register("9MO5q", function (n, t) {
    var r, o, l, a, i, s, u;
    e(
      n.exports,
      "boolean",
      () => r,
      (e) => (r = e)
    ),
      e(
        n.exports,
        "booleanish",
        () => o,
        (e) => (o = e)
      ),
      e(
        n.exports,
        "overloadedBoolean",
        () => l,
        (e) => (l = e)
      ),
      e(
        n.exports,
        "number",
        () => a,
        (e) => (a = e)
      ),
      e(
        n.exports,
        "spaceSeparated",
        () => i,
        (e) => (i = e)
      ),
      e(
        n.exports,
        "commaSeparated",
        () => s,
        (e) => (s = e)
      ),
      e(
        n.exports,
        "commaOrSpaceSeparated",
        () => u,
        (e) => (u = e)
      );
    var c = 0;
    function d() {
      return Math.pow(2, ++c);
    }
    (r = d()), (o = d()), (l = d()), (a = d()), (i = d()), (s = d()), (u = d());
  }),
  l.register("gEzUk", function (e, n) {
    var t = l("dfqnp");
    e.exports = t({
      space: "xml",
      transform: function (e, n) {
        return "xml:" + n.slice(3).toLowerCase();
      },
      properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
    });
  }),
  l.register("4bDWb", function (e, n) {
    var t = l("dfqnp"),
      r = l("8WBjk");
    e.exports = t({
      space: "xmlns",
      attributes: { xmlnsxlink: "xmlns:xlink" },
      transform: r,
      properties: { xmlns: null, xmlnsXLink: null },
    });
  }),
  l.register("8WBjk", function (e, n) {
    var t = l("7TwrI");
    e.exports = function (e, n) {
      return t(e, n.toLowerCase());
    };
  }),
  l.register("7TwrI", function (e, n) {
    e.exports = function (e, n) {
      return n in e ? e[n] : n;
    };
  }),
  l.register("j2fZD", function (e, n) {
    var t = l("9MO5q"),
      r = l("dfqnp"),
      o = t.booleanish,
      a = t.number,
      i = t.spaceSeparated;
    e.exports = r({
      transform: function (e, n) {
        return "role" === n ? n : "aria-" + n.slice(4).toLowerCase();
      },
      properties: {
        ariaActiveDescendant: null,
        ariaAtomic: o,
        ariaAutoComplete: null,
        ariaBusy: o,
        ariaChecked: o,
        ariaColCount: a,
        ariaColIndex: a,
        ariaColSpan: a,
        ariaControls: i,
        ariaCurrent: null,
        ariaDescribedBy: i,
        ariaDetails: null,
        ariaDisabled: o,
        ariaDropEffect: i,
        ariaErrorMessage: null,
        ariaExpanded: o,
        ariaFlowTo: i,
        ariaGrabbed: o,
        ariaHasPopup: null,
        ariaHidden: o,
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: i,
        ariaLevel: a,
        ariaLive: null,
        ariaModal: o,
        ariaMultiLine: o,
        ariaMultiSelectable: o,
        ariaOrientation: null,
        ariaOwns: i,
        ariaPlaceholder: null,
        ariaPosInSet: a,
        ariaPressed: o,
        ariaReadOnly: o,
        ariaRelevant: null,
        ariaRequired: o,
        ariaRoleDescription: i,
        ariaRowCount: a,
        ariaRowIndex: a,
        ariaRowSpan: a,
        ariaSelected: o,
        ariaSetSize: a,
        ariaSort: null,
        ariaValueMax: a,
        ariaValueMin: a,
        ariaValueNow: a,
        ariaValueText: null,
        role: null,
      },
    });
  }),
  l.register("gEq8b", function (e, n) {
    var t = l("9MO5q"),
      r = l("dfqnp"),
      o = l("8WBjk"),
      a = t.boolean,
      i = t.overloadedBoolean,
      s = t.booleanish,
      u = t.number,
      c = t.spaceSeparated,
      d = t.commaSeparated;
    e.exports = r({
      space: "html",
      attributes: {
        acceptcharset: "accept-charset",
        classname: "class",
        htmlfor: "for",
        httpequiv: "http-equiv",
      },
      transform: o,
      mustUseProperty: ["checked", "multiple", "muted", "selected"],
      properties: {
        abbr: null,
        accept: d,
        acceptCharset: c,
        accessKey: c,
        action: null,
        allow: null,
        allowFullScreen: a,
        allowPaymentRequest: a,
        allowUserMedia: a,
        alt: null,
        as: null,
        async: a,
        autoCapitalize: null,
        autoComplete: c,
        autoFocus: a,
        autoPlay: a,
        capture: a,
        charSet: null,
        checked: a,
        cite: null,
        className: c,
        cols: u,
        colSpan: null,
        content: null,
        contentEditable: s,
        controls: a,
        controlsList: c,
        coords: u | d,
        crossOrigin: null,
        data: null,
        dateTime: null,
        decoding: null,
        default: a,
        defer: a,
        dir: null,
        dirName: null,
        disabled: a,
        download: i,
        draggable: s,
        encType: null,
        enterKeyHint: null,
        form: null,
        formAction: null,
        formEncType: null,
        formMethod: null,
        formNoValidate: a,
        formTarget: null,
        headers: c,
        height: u,
        hidden: a,
        high: u,
        href: null,
        hrefLang: null,
        htmlFor: c,
        httpEquiv: c,
        id: null,
        imageSizes: null,
        imageSrcSet: d,
        inputMode: null,
        integrity: null,
        is: null,
        isMap: a,
        itemId: null,
        itemProp: c,
        itemRef: c,
        itemScope: a,
        itemType: c,
        kind: null,
        label: null,
        lang: null,
        language: null,
        list: null,
        loading: null,
        loop: a,
        low: u,
        manifest: null,
        max: null,
        maxLength: u,
        media: null,
        method: null,
        min: null,
        minLength: u,
        multiple: a,
        muted: a,
        name: null,
        nonce: null,
        noModule: a,
        noValidate: a,
        onAbort: null,
        onAfterPrint: null,
        onAuxClick: null,
        onBeforePrint: null,
        onBeforeUnload: null,
        onBlur: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onContextMenu: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFormData: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLanguageChange: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadEnd: null,
        onLoadStart: null,
        onMessage: null,
        onMessageError: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRejectionHandled: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSecurityPolicyViolation: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onSlotChange: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnhandledRejection: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onWheel: null,
        open: a,
        optimum: u,
        pattern: null,
        ping: c,
        placeholder: null,
        playsInline: a,
        poster: null,
        preload: null,
        readOnly: a,
        referrerPolicy: null,
        rel: c,
        required: a,
        reversed: a,
        rows: u,
        rowSpan: u,
        sandbox: c,
        scope: null,
        scoped: a,
        seamless: a,
        selected: a,
        shape: null,
        size: u,
        sizes: null,
        slot: null,
        span: u,
        spellCheck: s,
        src: null,
        srcDoc: null,
        srcLang: null,
        srcSet: d,
        start: u,
        step: null,
        style: null,
        tabIndex: u,
        target: null,
        title: null,
        translate: null,
        type: null,
        typeMustMatch: a,
        useMap: null,
        value: s,
        width: u,
        wrap: null,
        align: null,
        aLink: null,
        archive: c,
        axis: null,
        background: null,
        bgColor: null,
        border: u,
        borderColor: null,
        bottomMargin: u,
        cellPadding: null,
        cellSpacing: null,
        char: null,
        charOff: null,
        classId: null,
        clear: null,
        code: null,
        codeBase: null,
        codeType: null,
        color: null,
        compact: a,
        declare: a,
        event: null,
        face: null,
        frame: null,
        frameBorder: null,
        hSpace: u,
        leftMargin: u,
        link: null,
        longDesc: null,
        lowSrc: null,
        marginHeight: u,
        marginWidth: u,
        noResize: a,
        noHref: a,
        noShade: a,
        noWrap: a,
        object: null,
        profile: null,
        prompt: null,
        rev: null,
        rightMargin: u,
        rules: null,
        scheme: null,
        scrolling: s,
        standby: null,
        summary: null,
        text: null,
        topMargin: u,
        valueType: null,
        version: null,
        vAlign: null,
        vLink: null,
        vSpace: u,
        allowTransparency: null,
        autoCorrect: null,
        autoSave: null,
        disablePictureInPicture: a,
        disableRemotePlayback: a,
        prefix: null,
        property: null,
        results: u,
        security: null,
        unselectable: null,
      },
    });
  }),
  l.register("loiy5", function (e, n) {
    var t = l("2q2O8"),
      r = l("nGdAo"),
      o = l("4U8JY"),
      a = l("jsQGe").parse,
      i = l("ggiFL").parse;
    e.exports = function (e, n, r) {
      var l = r
        ? (function (e) {
            var n,
              t = e.length,
              r = -1,
              o = {};
            for (; ++r < t; ) o[(n = e[r]).toLowerCase()] = n;
            return o;
          })(r)
        : null;
      return function (e, t) {
        var r,
          a = o(e, n),
          i = Array.prototype.slice.call(arguments, 2),
          d = a.tagName.toLowerCase();
        (a.tagName = l && s.call(l, d) ? l[d] : d),
          t && u(t, a) && (i.unshift(t), (t = null));
        if (t) for (r in t) f(a.properties, r, t[r]);
        c(a.children, i),
          "template" === a.tagName &&
            ((a.content = { type: "root", children: a.children }),
            (a.children = []));
        return a;
      };
      function f(n, r, o) {
        var l, s, u;
        null != o &&
          o == o &&
          ((s = (l = t(e, r)).property),
          "string" == typeof (u = o) &&
            (l.spaceSeparated
              ? (u = a(u))
              : l.commaSeparated
              ? (u = i(u))
              : l.commaOrSpaceSeparated && (u = a(i(u).join(" ")))),
          "style" === s &&
            "string" != typeof o &&
            (u = (function (e) {
              var n,
                t = [];
              for (n in e) t.push([n, e[n]].join(": "));
              return t.join("; ");
            })(u)),
          "className" === s && n.className && (u = n.className.concat(u)),
          (n[s] = (function (e, n, t) {
            var r, o, l;
            if ("object" != typeof t || !("length" in t)) return d(e, n, t);
            (o = t.length), (r = -1), (l = []);
            for (; ++r < o; ) l[r] = d(e, n, t[r]);
            return l;
          })(l, s, u)));
      }
    };
    var s = {}.hasOwnProperty;
    function u(e, n) {
      return (
        "string" == typeof e ||
        "length" in e ||
        (function (e, n) {
          var t = n.type;
          return (
            !("input" === e || !t || "string" != typeof t) &&
            (("object" == typeof n.children && "length" in n.children) ||
              ((t = t.toLowerCase()),
              "button" === e
                ? "menu" !== t &&
                  "submit" !== t &&
                  "reset" !== t &&
                  "button" !== t
                : "value" in n))
          );
        })(n.tagName, e)
      );
    }
    function c(e, n) {
      var t, r;
      if ("string" != typeof n && "number" != typeof n)
        if ("object" == typeof n && "length" in n)
          for (t = -1, r = n.length; ++t < r; ) c(e, n[t]);
        else {
          if ("object" != typeof n || !("type" in n))
            throw new Error("Expected node, nodes, or string, got `" + n + "`");
          e.push(n);
        }
      else e.push({ type: "text", value: String(n) });
    }
    function d(e, n, t) {
      var o = t;
      return (
        e.number || e.positiveNumber
          ? isNaN(o) || "" === o || (o = Number(o))
          : (e.boolean || e.overloadedBoolean) &&
            ("string" != typeof o || ("" !== o && r(t) !== r(n)) || (o = !0)),
        o
      );
    }
  }),
  l.register("2q2O8", function (e, n) {
    var t = l("nGdAo"),
      r = l("juorO"),
      o = l("1L97d"),
      a = "data";
    e.exports = function (e, n) {
      var l = t(n),
        f = n,
        p = o;
      if (l in e.normal) return e.property[e.normal[l]];
      l.length > 4 &&
        l.slice(0, 4) === a &&
        i.test(n) &&
        ("-" === n.charAt(4)
          ? (f = (function (e) {
              var n = e.slice(5).replace(s, d);
              return a + n.charAt(0).toUpperCase() + n.slice(1);
            })(n))
          : (n = (function (e) {
              var n = e.slice(4);
              if (s.test(n)) return e;
              (n = n.replace(u, c)), "-" !== n.charAt(0) && (n = "-" + n);
              return a + n;
            })(n)),
        (p = r));
      return new p(f, n);
    };
    var i = /^data[-\w.:]+$/i,
      s = /-[a-z]/g,
      u = /[A-Z]/g;
    function c(e) {
      return "-" + e.toLowerCase();
    }
    function d(e) {
      return e.charAt(1).toUpperCase();
    }
  }),
  l.register("4U8JY", function (e, n) {
    e.exports = function (e, n) {
      var r,
        o,
        l,
        a = e || "",
        i = n || "div",
        s = {},
        u = 0;
      for (; u < a.length; )
        (t.lastIndex = u),
          (l = t.exec(a)),
          (r = a.slice(u, l ? l.index : a.length)) &&
            (o
              ? "#" === o
                ? (s.id = r)
                : s.className
                ? s.className.push(r)
                : (s.className = [r])
              : (i = r),
            (u += r.length)),
          l && ((o = l[0]), u++);
      return { type: "element", tagName: i, properties: s, children: [] };
    };
    var t = /[#.]/g;
  }),
  l.register("jsQGe", function (n, t) {
    var r;
    e(
      n.exports,
      "parse",
      () => r,
      (e) => (r = e)
    ),
      (r = function (e) {
        var n = String(e || "").trim();
        return "" === n ? [] : n.split(o);
      });
    var o = /[ \t\n\r\f]+/g;
  }),
  l.register("ggiFL", function (n, t) {
    var r;
    e(
      n.exports,
      "parse",
      () => r,
      (e) => (r = e)
    ),
      (r = function (e) {
        var n,
          t = [],
          r = String(e || ""),
          o = r.indexOf(","),
          l = 0,
          a = !1;
        for (; !a; )
          -1 === o && ((o = r.length), (a = !0)),
            (!(n = r.slice(l, o).trim()) && a) || t.push(n),
            (l = o + 1),
            (o = r.indexOf(",", l));
        return t;
      });
  });
var a;
a = l("cjuLU");
var i,
  s,
  u = l("fYo6y");
!(function e() {
  if (
    "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
    "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
    } catch (e) {
      console.error(e);
    }
})(),
  (i = (s = l("gAtBI")).createRoot),
  s.hydrateRoot;
u = l("fYo6y");
const { PREF_UPDATE_INTERVAL: c, PREF_NOTIFICATIONS_ENABLED: d } =
    ChromeUtils.importESModule(
      "chrome://userchrome/content/aboutuserchrome/modules/UCMSingletonData.sys.mjs"
    ),
  f =
    window._ucUtils || window.docShell.chromeEventHandler.ownerGlobal._ucUtils,
  p = "userChromeJS.",
  h = "userChromeJS.enabled",
  g = "userChromeJS.scriptsDisabled",
  m = "userChromeJS.gBrowser_hack.enabled",
  b = "userChromeJS.gBrowser_hack.required",
  y = "scripts",
  v = (0, u.createContext)({}),
  k = {
    get(e, n) {
      const { prefs: t } = Services;
      try {
        switch (t.getPrefType(e)) {
          case 0:
            return n;
          case 32:
            return t.getStringPref(e, n);
          case 64:
            return t.getIntPref(e, n);
          case 128:
            return t.getBoolPref(e, n);
        }
      } catch (e) {}
      return n;
    },
    set(e, n) {
      const { prefs: t } = Services;
      switch (typeof n) {
        case "string":
          t.setStringPref(e, n);
          break;
        case "number":
          t.setIntPref(e, n);
          break;
        case "boolean":
          t.setBoolPref(e, n);
      }
    },
  };
class x extends n(u).Component {
  constructor(e) {
    super(e),
      (this.navigate = (e, n = !0) => {
        let t = e.replace(/^\/+|\/+$/g, "");
        t !== this.state.path &&
          (this.setState({ path: t, initialFocus: !1 }),
          window.history[n ? "pushState" : "replaceState"](
            { ...window.history.state, path: t, initialFocus: !1 },
            ""
          ));
      }),
      (this.setSearch = (e) => {
        !this.state.search && e
          ? window.history.pushState({ ...window.history.state, search: e }, "")
          : window.history.replaceState(
              { ...window.history.state, search: e },
              ""
            ),
          this.setState({ search: e });
      }),
      (this.setUpdateCount = (e) => {
        this.setState({ updateCount: e });
      }),
      (this.setInitialFocus = (e) => {
        this.setState({ initialFocus: e }),
          window.history.replaceState(
            { ...window.history.state, initialFocus: e },
            ""
          );
      }),
      (this.state = {
        path: window.history?.state?.path || y,
        navigate: this.navigate,
        restart: () => f?.restart(!0),
        search: window.history?.state?.search || "",
        setSearch: this.setSearch,
        missingFxAutoconfig: !f,
        outdatedFxAutoconfig:
          !f?.parseStringAsScriptInfo ||
          f?.getScriptData.toString().startsWith("()"),
        scripts: f
          ?.getScriptData()
          .map((e) => ({ ...e, path: e.asFile().path })),
        ucjsEnabled: k.get(h, !1),
        scriptsDisabled: k.get(g, ""),
        gBrowserHackEnabled: k.get(m, !1),
        gBrowserHackRequired: k.get(b, !1),
        updateInterval: k.get(c, 864e5),
        notificationsEnabled: k.get(d, !0),
        updateCount: 0,
        setUpdateCount: this.setUpdateCount,
        initialFocus: window.history?.state?.initialFocus ?? !0,
        setInitialFocus: this.setInitialFocus,
      }),
      window.history.replaceState(
        {
          path: this.state.path,
          initialFocus: this.state.initialFocus,
          search: this.state.search,
        },
        ""
      ),
      window.addEventListener("popstate", this),
      Services.prefs.addObserver(p, this);
  }
  handleEvent(e) {
    if ("popstate" === e.type)
      this.setState({ ...e.state, path: e.state?.path || y });
  }
  observe(e, n, t) {
    if ("nsPref:changed" === n)
      switch (t) {
        case h:
          this.setState({ ucjsEnabled: k.get(h, !1) });
          break;
        case g:
          this.setState({ scriptsDisabled: k.get(g, "") });
          break;
        case m:
          this.setState({ gBrowserHackEnabled: k.get(m, !1) });
          break;
        case b:
          this.setState({ gBrowserHackRequired: k.get(b, !1) });
          break;
        case c:
          this.setState({ updateInterval: k.get(c, 864e5) });
          break;
        case d:
          this.setState({ notificationsEnabled: k.get(d, !0) });
      }
  }
  componentWillUnmount() {
    window.removeEventListener("popstate", this),
      Services.prefs.removeObserver(p, this);
  }
  render() {
    return (0, a.jsx)(v.Provider, {
      value: this.state,
      children: this.props.children,
    });
  }
}
var w;
u = l("fYo6y");
function S(e, n, t) {
  let r = 0;
  return (r += 300 * n * n), 0 === e ? (r += 1e3) : t && (r += 200 - e), r;
}
const E = "a".charCodeAt(0),
  C = "z".charCodeAt(0),
  N = "0".charCodeAt(0),
  L = "9".charCodeAt(0),
  A = "!".charCodeAt(0),
  T = "/".charCodeAt(0),
  P = ":".charCodeAt(0),
  F = "@".charCodeAt(0),
  O = "[".charCodeAt(0),
  _ = "`".charCodeAt(0),
  R = "{".charCodeAt(0),
  D = "~".charCodeAt(0);
function I(e) {
  return (e >= E && e <= C) || (e >= N && e <= L) || e >= 127;
}
function j(e, n, t, r) {
  let o = 0;
  const l = n.length,
    a = [];
  for (let i = r.length - 1; e < i; ++e) {
    const i = r[e],
      s = r[e + 1];
    let u = i,
      c = 0;
    for (; u < s && o < l; ) {
      const e = t[u],
        r = n[o];
      if (e !== r)
        if (" " !== e) {
          if (" " !== r) break;
          ++o;
        } else ++u;
      else ++u, ++o, ++c;
    }
    if (c) {
      const e = a.length;
      e >= 2 && a[e - 2] + a[e - 1] === i ? (a[e - 1] += c) : a.push(i, c);
    }
    if (o === l) return a;
  }
  return null;
}
function z(e, n) {
  const t = [];
  let r = 0,
    o = 0;
  for (; o < n.length; o += 2) {
    const l = n[o],
      a = l + n[o + 1];
    t.push(e.slice(r, l)), t.push(e.slice(l, a)), (r = a);
  }
  return r < e.length && t.push(e.slice(r)), t;
}
function M(e, n) {
  if (!e) return null;
  if (!n) return { score: 0, ranges: [] };
  const t = n.startsWith('"');
  t && (n = n.slice(1, n.endsWith('"') ? -1 : n.length));
  const r = e.indexOf(n),
    o = n.length;
  if (r >= 0) {
    return { score: S(r, o, r > 0 && !I(e.charCodeAt(r - 1))), ranges: [r, o] };
  }
  if (1 === o || t) return null;
  const l = (function (e) {
    const n = [];
    let t = !1;
    for (let o = 0, l = e.length; o < l; ++o) {
      const l = e.charCodeAt(o),
        a = I(l);
      ((a && !t) ||
        ((r = l) >= A && r <= T) ||
        (r >= P && r <= F) ||
        (r >= O && r <= _) ||
        (r >= R && r <= D)) &&
        n.push(o),
        (t = a);
    }
    var r;
    return n.push(e.length), n;
  })(e);
  for (let t = 0, r = l.length - 1; t < r; ++t)
    if (e[l[t]] === n[0]) {
      const r = j(t, n, e, l);
      if (r) {
        let e = 0;
        for (let n = 0, t = r.length; n < t; n += 2) e += S(r[n], r[n + 1], !0);
        return { score: e, ranges: r };
      }
    }
  return null;
}
w = {
  fuzzyFilter: function (e, n, t) {
    const r = [],
      o = (n || "").trim().toLowerCase(),
      l = t ? t.fields : null;
    if (!l || !Array.isArray(l) || 0 == l.length)
      throw new Error(
        "invalid fields, did you forget to pass {fields: [...]} as options param?"
      );
    for (const n of e) {
      let e = null;
      for (const t of l) {
        const r = n[t];
        if ("string" == typeof r && r) {
          const l = M(r.toLowerCase(), o);
          l &&
            ((e = e || { item: n, score: 0, highlights: {} }),
            (e.score = Math.max(l.score, e.score)),
            (e.highlights[t] = z(r, l.ranges)));
        }
      }
      e && r.push(e);
    }
    return (
      o &&
        r.sort((e, n) => {
          let t = n.score - e.score;
          for (let r = 0, o = l.length; 0 === t && r < o; ++r) {
            const o = l[r],
              a = e.item[o],
              i = n.item[o];
            t = (a || "").localeCompare(i);
          }
          return t;
        }),
      r
    );
  },
  fuzzyMatch: function (e, n) {
    (e = e || ""), (n = (n || "").trim().toLowerCase());
    const t = M(e.toLowerCase(), n);
    return t ? { score: t.score, highlights: z(e, t.ranges) } : null;
  },
  fuzzyMatchSanitized: M,
  highlightsFromRanges: z,
};
u = l("fYo6y");
const U = ({
  id: e,
  terms: n,
  doSearch: t,
  doSubmit: r,
  placeholder: o = "Search",
  searchIcon: l = !0,
  clearButton: i = !0,
  ...s
}) => {
  let c = (0, u.useMemo)(() => n || "", [n]);
  const d = (0, u.useCallback)(
      (e) => {
        t(e.target.value);
      },
      [t]
    ),
    f = (0, u.useCallback)(() => {
      t("");
    }, [t]),
    p = (0, u.useCallback)(
      (e) => {
        if (!e.repeat)
          switch (e.key) {
            case "Escape":
              f();
              break;
            case "Enter":
              let { value: n } = e.target;
              n && (t?.(n), r?.(n));
          }
      },
      [f, t, r]
    ),
    h = (0, u.useCallback)((e) => {
      if (e.target === e.currentTarget && !e.target.matches(":focus-within")) {
        let n = e.target.querySelector("input");
        n.setSelectionRange(0, 0), n.focus();
      }
    }, []);
  return (0, a.jsxs)("div", {
    id: e,
    className: "search-textbox",
    onClick: h,
    role: "search",
    children: [
      (0, a.jsx)("div", { className: "textbox-search-sign", hidden: !l }),
      (0, a.jsx)("input", {
        type: "search",
        placeholder: o,
        defaultValue: c,
        maxLength: "100",
        autoComplete: "off",
        autoCorrect: "off",
        autoCapitalize: "off",
        spellCheck: "false",
        inputMode: "search",
        "aria-label": o,
        "aria-autocomplete": "list",
        "aria-haspopup": "false",
        onChange: d,
        onKeyDown: p,
        ...s,
      }),
      (0, a.jsx)("button", {
        className: "textbox-search-clear",
        title: "Clear",
        alt: "Clear",
        onClick: f,
        hidden: !i || !c,
        "aria-hidden": "true",
        tabIndex: -1,
      }),
    ],
  });
};
var q;
(u = l("fYo6y")), (u = l("fYo6y")), (u = l("fYo6y"));
function B(e) {
  return e && "object" == typeof e
    ? "position" in e || "type" in e
      ? $(e.position)
      : "start" in e || "end" in e
      ? $(e)
      : "line" in e || "column" in e
      ? H(e)
      : ""
    : "";
}
function H(e) {
  return V(e && e.line) + ":" + V(e && e.column);
}
function $(e) {
  return H(e && e.start) + "-" + H(e && e.end);
}
function V(e) {
  return e && "number" == typeof e ? e : 1;
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
q = function (e) {
  return (
    null != e &&
    null != e.constructor &&
    "function" == typeof e.constructor.isBuffer &&
    e.constructor.isBuffer(e)
  );
};
class W extends Error {
  constructor(e, n, t) {
    const r = [null, null];
    let o = {
      start: { line: null, column: null },
      end: { line: null, column: null },
    };
    if (
      (super(),
      "string" == typeof n && ((t = n), (n = void 0)),
      "string" == typeof t)
    ) {
      const e = t.indexOf(":");
      -1 === e ? (r[1] = t) : ((r[0] = t.slice(0, e)), (r[1] = t.slice(e + 1)));
    }
    n &&
      ("type" in n || "position" in n
        ? n.position && (o = n.position)
        : "start" in n || "end" in n
        ? (o = n)
        : ("line" in n || "column" in n) && (o.start = n)),
      (this.name = B(n) || "1:1"),
      (this.message = "object" == typeof e ? e.message : e),
      (this.stack = ""),
      "object" == typeof e && e.stack && (this.stack = e.stack),
      (this.reason = this.message),
      this.fatal,
      (this.line = o.start.line),
      (this.column = o.start.column),
      (this.position = o),
      (this.source = r[0]),
      (this.ruleId = r[1]),
      this.file,
      this.actual,
      this.expected,
      this.url,
      this.note;
  }
}
(W.prototype.file = ""),
  (W.prototype.name = ""),
  (W.prototype.reason = ""),
  (W.prototype.message = ""),
  (W.prototype.stack = ""),
  (W.prototype.fatal = null),
  (W.prototype.column = null),
  (W.prototype.line = null),
  (W.prototype.source = null),
  (W.prototype.ruleId = null),
  (W.prototype.position = null);
const G = {
  basename: function (e, n) {
    if (void 0 !== n && "string" != typeof n)
      throw new TypeError('"ext" argument must be a string');
    Q(e);
    let t,
      r = 0,
      o = -1,
      l = e.length;
    if (void 0 === n || 0 === n.length || n.length > e.length) {
      for (; l--; )
        if (47 === e.charCodeAt(l)) {
          if (t) {
            r = l + 1;
            break;
          }
        } else o < 0 && ((t = !0), (o = l + 1));
      return o < 0 ? "" : e.slice(r, o);
    }
    if (n === e) return "";
    let a = -1,
      i = n.length - 1;
    for (; l--; )
      if (47 === e.charCodeAt(l)) {
        if (t) {
          r = l + 1;
          break;
        }
      } else
        a < 0 && ((t = !0), (a = l + 1)),
          i > -1 &&
            (e.charCodeAt(l) === n.charCodeAt(i--)
              ? i < 0 && (o = l)
              : ((i = -1), (o = a)));
    r === o ? (o = a) : o < 0 && (o = e.length);
    return e.slice(r, o);
  },
  dirname: function (e) {
    if ((Q(e), 0 === e.length)) return ".";
    let n,
      t = -1,
      r = e.length;
    for (; --r; )
      if (47 === e.charCodeAt(r)) {
        if (n) {
          t = r;
          break;
        }
      } else n || (n = !0);
    return t < 0
      ? 47 === e.charCodeAt(0)
        ? "/"
        : "."
      : 1 === t && 47 === e.charCodeAt(0)
      ? "//"
      : e.slice(0, t);
  },
  extname: function (e) {
    Q(e);
    let n,
      t = e.length,
      r = -1,
      o = 0,
      l = -1,
      a = 0;
    for (; t--; ) {
      const i = e.charCodeAt(t);
      if (47 !== i)
        r < 0 && ((n = !0), (r = t + 1)),
          46 === i
            ? l < 0
              ? (l = t)
              : 1 !== a && (a = 1)
            : l > -1 && (a = -1);
      else if (n) {
        o = t + 1;
        break;
      }
    }
    return l < 0 || r < 0 || 0 === a || (1 === a && l === r - 1 && l === o + 1)
      ? ""
      : e.slice(l, r);
  },
  join: function (...e) {
    let n,
      t = -1;
    for (; ++t < e.length; )
      Q(e[t]), e[t] && (n = void 0 === n ? e[t] : n + "/" + e[t]);
    return void 0 === n
      ? "."
      : (function (e) {
          Q(e);
          const n = 47 === e.charCodeAt(0);
          let t = (function (e, n) {
            let t,
              r,
              o = "",
              l = 0,
              a = -1,
              i = 0,
              s = -1;
            for (; ++s <= e.length; ) {
              if (s < e.length) t = e.charCodeAt(s);
              else {
                if (47 === t) break;
                t = 47;
              }
              if (47 === t) {
                if (a === s - 1 || 1 === i);
                else if (a !== s - 1 && 2 === i) {
                  if (
                    o.length < 2 ||
                    2 !== l ||
                    46 !== o.charCodeAt(o.length - 1) ||
                    46 !== o.charCodeAt(o.length - 2)
                  )
                    if (o.length > 2) {
                      if (((r = o.lastIndexOf("/")), r !== o.length - 1)) {
                        r < 0
                          ? ((o = ""), (l = 0))
                          : ((o = o.slice(0, r)),
                            (l = o.length - 1 - o.lastIndexOf("/"))),
                          (a = s),
                          (i = 0);
                        continue;
                      }
                    } else if (o.length > 0) {
                      (o = ""), (l = 0), (a = s), (i = 0);
                      continue;
                    }
                  n && ((o = o.length > 0 ? o + "/.." : ".."), (l = 2));
                } else
                  o.length > 0
                    ? (o += "/" + e.slice(a + 1, s))
                    : (o = e.slice(a + 1, s)),
                    (l = s - a - 1);
                (a = s), (i = 0);
              } else 46 === t && i > -1 ? i++ : (i = -1);
            }
            return o;
          })(e, !n);
          0 !== t.length || n || (t = ".");
          t.length > 0 && 47 === e.charCodeAt(e.length - 1) && (t += "/");
          return n ? "/" + t : t;
        })(n);
  },
  sep: "/",
};
function Q(e) {
  if ("string" != typeof e)
    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
}
const Y = {
  cwd: function () {
    return "/";
  },
};
function K(e) {
  return null !== e && "object" == typeof e && e.href && e.origin;
}
function X(e) {
  if ("string" == typeof e) e = new URL(e);
  else if (!K(e)) {
    const n = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        e +
        "`"
    );
    throw ((n.code = "ERR_INVALID_ARG_TYPE"), n);
  }
  if ("file:" !== e.protocol) {
    const e = new TypeError("The URL must be of scheme file");
    throw ((e.code = "ERR_INVALID_URL_SCHEME"), e);
  }
  return (function (e) {
    if ("" !== e.hostname) {
      const e = new TypeError(
        'File URL host must be "localhost" or empty on darwin'
      );
      throw ((e.code = "ERR_INVALID_FILE_URL_HOST"), e);
    }
    const n = e.pathname;
    let t = -1;
    for (; ++t < n.length; )
      if (37 === n.charCodeAt(t) && 50 === n.charCodeAt(t + 1)) {
        const e = n.charCodeAt(t + 2);
        if (70 === e || 102 === e) {
          const e = new TypeError(
            "File URL path must not include encoded / characters"
          );
          throw ((e.code = "ERR_INVALID_FILE_URL_PATH"), e);
        }
      }
    return decodeURIComponent(n);
  })(e);
}
const J = ["history", "path", "basename", "stem", "extname", "dirname"];
class Z {
  constructor(e) {
    let t;
    (t = e
      ? "string" == typeof e || n(q)(e)
        ? { value: e }
        : K(e)
        ? { path: e }
        : e
      : {}),
      (this.data = {}),
      (this.messages = []),
      (this.history = []),
      (this.cwd = Y.cwd()),
      this.value,
      this.stored,
      this.result,
      this.map;
    let r,
      o = -1;
    for (; ++o < J.length; ) {
      const e = J[o];
      e in t &&
        void 0 !== t[e] &&
        (this[e] = "history" === e ? [...t[e]] : t[e]);
    }
    for (r in t) J.includes(r) || (this[r] = t[r]);
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(e) {
    K(e) && (e = X(e)), ne(e, "path"), this.path !== e && this.history.push(e);
  }
  get dirname() {
    return "string" == typeof this.path ? G.dirname(this.path) : void 0;
  }
  set dirname(e) {
    te(this.basename, "dirname"), (this.path = G.join(e || "", this.basename));
  }
  get basename() {
    return "string" == typeof this.path ? G.basename(this.path) : void 0;
  }
  set basename(e) {
    ne(e, "basename"),
      ee(e, "basename"),
      (this.path = G.join(this.dirname || "", e));
  }
  get extname() {
    return "string" == typeof this.path ? G.extname(this.path) : void 0;
  }
  set extname(e) {
    if ((ee(e, "extname"), te(this.dirname, "extname"), e)) {
      if (46 !== e.charCodeAt(0))
        throw new Error("`extname` must start with `.`");
      if (e.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = G.join(this.dirname, this.stem + (e || ""));
  }
  get stem() {
    return "string" == typeof this.path
      ? G.basename(this.path, this.extname)
      : void 0;
  }
  set stem(e) {
    ne(e, "stem"),
      ee(e, "stem"),
      (this.path = G.join(this.dirname || "", e + (this.extname || "")));
  }
  toString(e) {
    return (this.value || "").toString(e);
  }
  message(e, n, t) {
    const r = new W(e, n, t);
    return (
      this.path && ((r.name = this.path + ":" + r.name), (r.file = this.path)),
      (r.fatal = !1),
      this.messages.push(r),
      r
    );
  }
  info(e, n, t) {
    const r = this.message(e, n, t);
    return (r.fatal = null), r;
  }
  fail(e, n, t) {
    const r = this.message(e, n, t);
    throw ((r.fatal = !0), r);
  }
}
function ee(e, n) {
  if (e && e.includes(G.sep))
    throw new Error(
      "`" + n + "` cannot be a path: did not expect `" + G.sep + "`"
    );
}
function ne(e, n) {
  if (!e) throw new Error("`" + n + "` cannot be empty");
}
function te(e, n) {
  if (!e) throw new Error("Setting `" + n + "` requires `path` to be set too");
}
function re(e) {
  if (e) throw e;
}
var oe,
  le = Object.prototype.hasOwnProperty,
  ae = Object.prototype.toString,
  ie = Object.defineProperty,
  se = Object.getOwnPropertyDescriptor,
  ue = function (e) {
    return "function" == typeof Array.isArray
      ? Array.isArray(e)
      : "[object Array]" === ae.call(e);
  },
  ce = function (e) {
    if (!e || "[object Object]" !== ae.call(e)) return !1;
    var n,
      t = le.call(e, "constructor"),
      r =
        e.constructor &&
        e.constructor.prototype &&
        le.call(e.constructor.prototype, "isPrototypeOf");
    if (e.constructor && !t && !r) return !1;
    for (n in e);
    return void 0 === n || le.call(e, n);
  },
  de = function (e, n) {
    ie && "__proto__" === n.name
      ? ie(e, n.name, {
          enumerable: !0,
          configurable: !0,
          value: n.newValue,
          writable: !0,
        })
      : (e[n.name] = n.newValue);
  },
  fe = function (e, n) {
    if ("__proto__" === n) {
      if (!le.call(e, n)) return;
      if (se) return se(e, n).value;
    }
    return e[n];
  };
function pe(e) {
  if ("object" != typeof e || null === e) return !1;
  const n = Object.getPrototypeOf(e);
  return !(
    (null !== n &&
      n !== Object.prototype &&
      null !== Object.getPrototypeOf(n)) ||
    Symbol.toStringTag in e ||
    Symbol.iterator in e
  );
}
function he() {
  const e = [],
    n = {
      run: function (...n) {
        let t = -1;
        const r = n.pop();
        if ("function" != typeof r)
          throw new TypeError("Expected function as last argument, not " + r);
        !(function o(l, ...a) {
          const i = e[++t];
          let s = -1;
          if (l) r(l);
          else {
            for (; ++s < n.length; )
              (null !== a[s] && void 0 !== a[s]) || (a[s] = n[s]);
            (n = a),
              i
                ? (function (e, n) {
                    let t;
                    return r;
                    function r(...n) {
                      const r = e.length > n.length;
                      let a;
                      r && n.push(o);
                      try {
                        a = e.apply(this, n);
                      } catch (e) {
                        if (r && t) throw e;
                        return o(e);
                      }
                      r ||
                        (a instanceof Promise
                          ? a.then(l, o)
                          : a instanceof Error
                          ? o(a)
                          : l(a));
                    }
                    function o(e, ...r) {
                      t || ((t = !0), n(e, ...r));
                    }
                    function l(e) {
                      o(null, e);
                    }
                  })(
                    i,
                    o
                  )(...a)
                : r(null, ...a);
          }
        })(null, ...n);
      },
      use: function (t) {
        if ("function" != typeof t)
          throw new TypeError(
            "Expected `middelware` to be a function, not " + t
          );
        return e.push(t), n;
      },
    };
  return n;
}
oe = function e() {
  var n,
    t,
    r,
    o,
    l,
    a,
    i = arguments[0],
    s = 1,
    u = arguments.length,
    c = !1;
  for (
    "boolean" == typeof i && ((c = i), (i = arguments[1] || {}), (s = 2)),
      (null == i || ("object" != typeof i && "function" != typeof i)) &&
        (i = {});
    s < u;
    ++s
  )
    if (null != (n = arguments[s]))
      for (t in n)
        (r = fe(i, t)),
          i !== (o = fe(n, t)) &&
            (c && o && (ce(o) || (l = ue(o)))
              ? (l
                  ? ((l = !1), (a = r && ue(r) ? r : []))
                  : (a = r && ce(r) ? r : {}),
                de(i, { name: t, newValue: e(c, a, o) }))
              : void 0 !== o && de(i, { name: t, newValue: o }));
  return i;
};
const ge = (function e() {
    const t = he(),
      r = [];
    let o,
      l = {},
      a = -1;
    return (
      (i.data = function (e, n) {
        if ("string" == typeof e)
          return 2 === arguments.length
            ? (ke("data", o), (l[e] = n), i)
            : (me.call(l, e) && l[e]) || null;
        if (e) return ke("data", o), (l = e), i;
        return l;
      }),
      (i.Parser = void 0),
      (i.Compiler = void 0),
      (i.freeze = function () {
        if (o) return i;
        for (; ++a < r.length; ) {
          const [e, ...n] = r[a];
          if (!1 === n[0]) continue;
          !0 === n[0] && (n[0] = void 0);
          const o = e.call(i, ...n);
          "function" == typeof o && t.use(o);
        }
        return (o = !0), (a = Number.POSITIVE_INFINITY), i;
      }),
      (i.attachers = r),
      (i.use = function (e, ...t) {
        let a;
        if ((ke("use", o), null == e));
        else if ("function" == typeof e) d(e, ...t);
        else {
          if ("object" != typeof e)
            throw new TypeError("Expected usable value, not `" + e + "`");
          Array.isArray(e) ? c(e) : u(e);
        }
        a && (l.settings = Object.assign(l.settings || {}, a));
        return i;
        function s(e) {
          if ("function" == typeof e) d(e);
          else {
            if ("object" != typeof e)
              throw new TypeError("Expected usable value, not `" + e + "`");
            if (Array.isArray(e)) {
              const [n, ...t] = e;
              d(n, ...t);
            } else u(e);
          }
        }
        function u(e) {
          c(e.plugins), e.settings && (a = Object.assign(a || {}, e.settings));
        }
        function c(e) {
          let n = -1;
          if (null == e);
          else {
            if (!Array.isArray(e))
              throw new TypeError(
                "Expected a list of plugins, not `" + e + "`"
              );
            for (; ++n < e.length; ) {
              s(e[n]);
            }
          }
        }
        function d(e, t) {
          let o,
            l = -1;
          for (; ++l < r.length; )
            if (r[l][0] === e) {
              o = r[l];
              break;
            }
          o
            ? (pe(o[1]) && pe(t) && (t = n(oe)(!0, o[1], t)), (o[1] = t))
            : r.push([...arguments]);
        }
      }),
      (i.parse = function (e) {
        i.freeze();
        const n = Se(e),
          t = i.Parser;
        return (
          ye("parse", t),
          be(t, "parse") ? new t(String(n), n).parse() : t(String(n), n)
        );
      }),
      (i.stringify = function (e, n) {
        i.freeze();
        const t = Se(n),
          r = i.Compiler;
        return (
          ve("stringify", r),
          xe(e),
          be(r, "compile") ? new r(e, t).compile() : r(e, t)
        );
      }),
      (i.run = function (e, n, r) {
        xe(e),
          i.freeze(),
          r || "function" != typeof n || ((r = n), (n = void 0));
        if (!r) return new Promise(o);
        function o(o, l) {
          function a(n, t, a) {
            (t = t || e), n ? l(n) : o ? o(t) : r(null, t, a);
          }
          t.run(e, Se(n), a);
        }
        o(null, r);
      }),
      (i.runSync = function (e, n) {
        let t, r;
        return i.run(e, n, o), we("runSync", "run", r), t;
        function o(e, n) {
          re(e), (t = n), (r = !0);
        }
      }),
      (i.process = function (e, t) {
        if (
          (i.freeze(), ye("process", i.Parser), ve("process", i.Compiler), !t)
        )
          return new Promise(r);
        function r(r, o) {
          const l = Se(e);
          function a(e, n) {
            e || !n ? o(e) : r ? r(n) : t(null, n);
          }
          i.run(i.parse(l), l, (e, t, r) => {
            if (!e && t && r) {
              const l = i.stringify(t, r);
              null == l ||
                ("string" == typeof (o = l) || n(q)(o)
                  ? (r.value = l)
                  : (r.result = l)),
                a(e, r);
            } else a(e);
            var o;
          });
        }
        r(null, t);
      }),
      (i.processSync = function (e) {
        let n;
        i.freeze(), ye("processSync", i.Parser), ve("processSync", i.Compiler);
        const t = Se(e);
        return i.process(t, r), we("processSync", "process", n), t;
        function r(e) {
          (n = !0), re(e);
        }
      }),
      i
    );
    function i() {
      const t = e();
      let o = -1;
      for (; ++o < r.length; ) t.use(...r[o]);
      return t.data(n(oe)(!0, {}, l)), t;
    }
  })().freeze(),
  me = {}.hasOwnProperty;
function be(e, n) {
  return (
    "function" == typeof e &&
    e.prototype &&
    ((function (e) {
      let n;
      for (n in e) if (me.call(e, n)) return !0;
      return !1;
    })(e.prototype) ||
      n in e.prototype)
  );
}
function ye(e, n) {
  if ("function" != typeof n)
    throw new TypeError("Cannot `" + e + "` without `Parser`");
}
function ve(e, n) {
  if ("function" != typeof n)
    throw new TypeError("Cannot `" + e + "` without `Compiler`");
}
function ke(e, n) {
  if (n)
    throw new Error(
      "Cannot call `" +
        e +
        "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function xe(e) {
  if (!pe(e) || "string" != typeof e.type)
    throw new TypeError("Expected node, got `" + e + "`");
}
function we(e, n, t) {
  if (!t)
    throw new Error("`" + e + "` finished async. Use `" + n + "` instead");
}
function Se(e) {
  return (function (e) {
    return Boolean(
      e && "object" == typeof e && "message" in e && "messages" in e
    );
  })(e)
    ? e
    : new Z(e);
}
function Ee(e, n) {
  var { includeImageAlt: t = !0 } = n || {};
  return Ce(e, t);
}
function Ce(e, n) {
  return (
    (e &&
      "object" == typeof e &&
      (e.value ||
        (n ? e.alt : "") ||
        ("children" in e && Ne(e.children, n)) ||
        (Array.isArray(e) && Ne(e, n)))) ||
    ""
  );
}
function Ne(e, n) {
  for (var t = [], r = -1; ++r < e.length; ) t[r] = Ce(e[r], n);
  return t.join("");
}
function Le(e, n, t, r) {
  const o = e.length;
  let l,
    a = 0;
  if (
    ((n = n < 0 ? (-n > o ? 0 : o + n) : n > o ? o : n),
    (t = t > 0 ? t : 0),
    r.length < 1e4)
  )
    (l = Array.from(r)), l.unshift(n, t), [].splice.apply(e, l);
  else
    for (t && [].splice.apply(e, [n, t]); a < r.length; )
      (l = r.slice(a, a + 1e4)),
        l.unshift(n, 0),
        [].splice.apply(e, l),
        (a += 1e4),
        (n += 1e4);
}
function Ae(e, n) {
  return e.length > 0 ? (Le(e, e.length, 0, n), e) : n;
}
const Te = {}.hasOwnProperty;
function Pe(e) {
  const n = {};
  let t = -1;
  for (; ++t < e.length; ) Fe(n, e[t]);
  return n;
}
function Fe(e, n) {
  let t;
  for (t in n) {
    const r = (Te.call(e, t) ? e[t] : void 0) || (e[t] = {}),
      o = n[t];
    let l;
    for (l in o) {
      Te.call(r, l) || (r[l] = []);
      const e = o[l];
      Oe(r[l], Array.isArray(e) ? e : e ? [e] : []);
    }
  }
}
function Oe(e, n) {
  let t = -1;
  const r = [];
  for (; ++t < n.length; ) ("after" === n[t].add ? e : r).push(n[t]);
  Le(e, 0, 0, r);
}
const _e = Ve(/[A-Za-z]/),
  Re = Ve(/\d/),
  De = Ve(/[\dA-Fa-f]/),
  Ie = Ve(/[\dA-Za-z]/),
  je = Ve(/[!-/:-@[-`{-~]/),
  ze = Ve(/[#-'*+\--9=?A-Z^-~]/);
function Me(e) {
  return null !== e && (e < 32 || 127 === e);
}
function Ue(e) {
  return null !== e && (e < 0 || 32 === e);
}
function qe(e) {
  return null !== e && e < -2;
}
function Be(e) {
  return -2 === e || -1 === e || 32 === e;
}
const He = Ve(/\s/),
  $e = Ve(
    /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
  );
function Ve(e) {
  return function (n) {
    return null !== n && e.test(String.fromCharCode(n));
  };
}
function We(e, n, t, r) {
  const o = r ? r - 1 : Number.POSITIVE_INFINITY;
  let l = 0;
  return function (r) {
    if (Be(r)) return e.enter(t), a(r);
    return n(r);
  };
  function a(r) {
    return Be(r) && l++ < o ? (e.consume(r), a) : (e.exit(t), n(r));
  }
}
const Ge = {
  tokenize: function (e) {
    const n = e.attempt(
      this.parser.constructs.contentInitial,
      function (t) {
        if (null === t) return void e.consume(t);
        return (
          e.enter("lineEnding"),
          e.consume(t),
          e.exit("lineEnding"),
          We(e, n, "linePrefix")
        );
      },
      function (n) {
        return e.enter("paragraph"), r(n);
      }
    );
    let t;
    return n;
    function r(n) {
      const r = e.enter("chunkText", { contentType: "text", previous: t });
      return t && (t.next = r), (t = r), o(n);
    }
    function o(n) {
      return null === n
        ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(n))
        : qe(n)
        ? (e.consume(n), e.exit("chunkText"), r)
        : (e.consume(n), o);
    }
  },
};
const Qe = {
    tokenize: function (e) {
      const n = this,
        t = [];
      let r,
        o,
        l,
        a = 0;
      return i;
      function i(r) {
        if (a < t.length) {
          const o = t[a];
          return (
            (n.containerState = o[1]), e.attempt(o[0].continuation, s, u)(r)
          );
        }
        return u(r);
      }
      function s(e) {
        if ((a++, n.containerState._closeFlow)) {
          (n.containerState._closeFlow = void 0), r && y();
          const t = n.events.length;
          let o,
            l = t;
          for (; l--; )
            if (
              "exit" === n.events[l][0] &&
              "chunkFlow" === n.events[l][1].type
            ) {
              o = n.events[l][1].end;
              break;
            }
          b(a);
          let i = t;
          for (; i < n.events.length; )
            (n.events[i][1].end = Object.assign({}, o)), i++;
          return (
            Le(n.events, l + 1, 0, n.events.slice(t)),
            (n.events.length = i),
            u(e)
          );
        }
        return i(e);
      }
      function u(o) {
        if (a === t.length) {
          if (!r) return f(o);
          if (r.currentConstruct && r.currentConstruct.concrete) return h(o);
          n.interrupt = Boolean(
            r.currentConstruct && !r._gfmTableDynamicInterruptHack
          );
        }
        return (n.containerState = {}), e.check(Ye, c, d)(o);
      }
      function c(e) {
        return r && y(), b(a), f(e);
      }
      function d(e) {
        return (
          (n.parser.lazy[n.now().line] = a !== t.length),
          (l = n.now().offset),
          h(e)
        );
      }
      function f(t) {
        return (n.containerState = {}), e.attempt(Ye, p, h)(t);
      }
      function p(e) {
        return a++, t.push([n.currentConstruct, n.containerState]), f(e);
      }
      function h(t) {
        return null === t
          ? (r && y(), b(0), void e.consume(t))
          : ((r = r || n.parser.flow(n.now())),
            e.enter("chunkFlow", {
              contentType: "flow",
              previous: o,
              _tokenizer: r,
            }),
            g(t));
      }
      function g(t) {
        return null === t
          ? (m(e.exit("chunkFlow"), !0), b(0), void e.consume(t))
          : qe(t)
          ? (e.consume(t),
            m(e.exit("chunkFlow")),
            (a = 0),
            (n.interrupt = void 0),
            i)
          : (e.consume(t), g);
      }
      function m(e, t) {
        const i = n.sliceStream(e);
        if (
          (t && i.push(null),
          (e.previous = o),
          o && (o.next = e),
          (o = e),
          r.defineSkip(e.start),
          r.write(i),
          n.parser.lazy[e.start.line])
        ) {
          let e = r.events.length;
          for (; e--; )
            if (
              r.events[e][1].start.offset < l &&
              (!r.events[e][1].end || r.events[e][1].end.offset > l)
            )
              return;
          const t = n.events.length;
          let o,
            i,
            s = t;
          for (; s--; )
            if (
              "exit" === n.events[s][0] &&
              "chunkFlow" === n.events[s][1].type
            ) {
              if (o) {
                i = n.events[s][1].end;
                break;
              }
              o = !0;
            }
          for (b(a), e = t; e < n.events.length; )
            (n.events[e][1].end = Object.assign({}, i)), e++;
          Le(n.events, s + 1, 0, n.events.slice(t)), (n.events.length = e);
        }
      }
      function b(r) {
        let o = t.length;
        for (; o-- > r; ) {
          const r = t[o];
          (n.containerState = r[1]), r[0].exit.call(n, e);
        }
        t.length = r;
      }
      function y() {
        r.write([null]),
          (o = void 0),
          (r = void 0),
          (n.containerState._closeFlow = void 0);
      }
    },
  },
  Ye = {
    tokenize: function (e, n, t) {
      return We(
        e,
        e.attempt(this.parser.constructs.document, n, t),
        "linePrefix",
        this.parser.constructs.disable.null.includes("codeIndented")
          ? void 0
          : 4
      );
    },
  };
const Ke = {
  tokenize: function (e, n, t) {
    return We(
      e,
      function (e) {
        return null === e || qe(e) ? n(e) : t(e);
      },
      "linePrefix"
    );
  },
  partial: !0,
};
function Xe(e) {
  const n = {};
  let t,
    r,
    o,
    l,
    a,
    i,
    s,
    u = -1;
  for (; ++u < e.length; ) {
    for (; u in n; ) u = n[u];
    if (
      ((t = e[u]),
      u &&
        "chunkFlow" === t[1].type &&
        "listItemPrefix" === e[u - 1][1].type &&
        ((i = t[1]._tokenizer.events),
        (o = 0),
        o < i.length && "lineEndingBlank" === i[o][1].type && (o += 2),
        o < i.length && "content" === i[o][1].type))
    )
      for (; ++o < i.length && "content" !== i[o][1].type; )
        "chunkText" === i[o][1].type &&
          ((i[o][1]._isInFirstContentOfListItem = !0), o++);
    if ("enter" === t[0])
      t[1].contentType && (Object.assign(n, Je(e, u)), (u = n[u]), (s = !0));
    else if (t[1]._container) {
      for (
        o = u, r = void 0;
        o-- &&
        ((l = e[o]),
        "lineEnding" === l[1].type || "lineEndingBlank" === l[1].type);

      )
        "enter" === l[0] &&
          (r && (e[r][1].type = "lineEndingBlank"),
          (l[1].type = "lineEnding"),
          (r = o));
      r &&
        ((t[1].end = Object.assign({}, e[r][1].start)),
        (a = e.slice(r, u)),
        a.unshift(t),
        Le(e, r, u - r + 1, a));
    }
  }
  return !s;
}
function Je(e, n) {
  const t = e[n][1],
    r = e[n][2];
  let o = n - 1;
  const l = [],
    a = t._tokenizer || r.parser[t.contentType](t.start),
    i = a.events,
    s = [],
    u = {};
  let c,
    d,
    f = -1,
    p = t,
    h = 0,
    g = 0;
  const m = [g];
  for (; p; ) {
    for (; e[++o][1] !== p; );
    l.push(o),
      p._tokenizer ||
        ((c = r.sliceStream(p)),
        p.next || c.push(null),
        d && a.defineSkip(p.start),
        p._isInFirstContentOfListItem &&
          (a._gfmTasklistFirstContentOfListItem = !0),
        a.write(c),
        p._isInFirstContentOfListItem &&
          (a._gfmTasklistFirstContentOfListItem = void 0)),
      (d = p),
      (p = p.next);
  }
  for (p = t; ++f < i.length; )
    "exit" === i[f][0] &&
      "enter" === i[f - 1][0] &&
      i[f][1].type === i[f - 1][1].type &&
      i[f][1].start.line !== i[f][1].end.line &&
      ((g = f + 1),
      m.push(g),
      (p._tokenizer = void 0),
      (p.previous = void 0),
      (p = p.next));
  for (
    a.events = [],
      p ? ((p._tokenizer = void 0), (p.previous = void 0)) : m.pop(),
      f = m.length;
    f--;

  ) {
    const n = i.slice(m[f], m[f + 1]),
      t = l.pop();
    s.unshift([t, t + n.length - 1]), Le(e, t, 2, n);
  }
  for (f = -1; ++f < s.length; )
    (u[h + s[f][0]] = h + s[f][1]), (h += s[f][1] - s[f][0] - 1);
  return u;
}
const Ze = {
    tokenize: function (e, n) {
      let t;
      return function (n) {
        return (
          e.enter("content"),
          (t = e.enter("chunkContent", { contentType: "content" })),
          r(n)
        );
      };
      function r(n) {
        return null === n
          ? o(n)
          : qe(n)
          ? e.check(en, l, o)(n)
          : (e.consume(n), r);
      }
      function o(t) {
        return e.exit("chunkContent"), e.exit("content"), n(t);
      }
      function l(n) {
        return (
          e.consume(n),
          e.exit("chunkContent"),
          (t.next = e.enter("chunkContent", {
            contentType: "content",
            previous: t,
          })),
          (t = t.next),
          r
        );
      }
    },
    resolve: function (e) {
      return Xe(e), e;
    },
  },
  en = {
    tokenize: function (e, n, t) {
      const r = this;
      return function (n) {
        return (
          e.exit("chunkContent"),
          e.enter("lineEnding"),
          e.consume(n),
          e.exit("lineEnding"),
          We(e, o, "linePrefix")
        );
      };
      function o(o) {
        if (null === o || qe(o)) return t(o);
        const l = r.events[r.events.length - 1];
        return !r.parser.constructs.disable.null.includes("codeIndented") &&
          l &&
          "linePrefix" === l[1].type &&
          l[2].sliceSerialize(l[1], !0).length >= 4
          ? n(o)
          : e.interrupt(r.parser.constructs.flow, t, n)(o);
      }
    },
    partial: !0,
  };
const nn = {
  tokenize: function (e) {
    const n = this,
      t = e.attempt(
        Ke,
        function (r) {
          if (null === r) return void e.consume(r);
          return (
            e.enter("lineEndingBlank"),
            e.consume(r),
            e.exit("lineEndingBlank"),
            (n.currentConstruct = void 0),
            t
          );
        },
        e.attempt(
          this.parser.constructs.flowInitial,
          r,
          We(
            e,
            e.attempt(this.parser.constructs.flow, r, e.attempt(Ze, r)),
            "linePrefix"
          )
        )
      );
    return t;
    function r(r) {
      if (null !== r)
        return (
          e.enter("lineEnding"),
          e.consume(r),
          e.exit("lineEnding"),
          (n.currentConstruct = void 0),
          t
        );
      e.consume(r);
    }
  },
};
const tn = { resolveAll: an() },
  rn = ln("string"),
  on = ln("text");
function ln(e) {
  return {
    tokenize: function (n) {
      const t = this,
        r = this.parser.constructs[e],
        o = n.attempt(r, l, a);
      return l;
      function l(e) {
        return s(e) ? o(e) : a(e);
      }
      function a(e) {
        if (null !== e) return n.enter("data"), n.consume(e), i;
        n.consume(e);
      }
      function i(e) {
        return s(e) ? (n.exit("data"), o(e)) : (n.consume(e), i);
      }
      function s(e) {
        if (null === e) return !0;
        const n = r[e];
        let o = -1;
        if (n)
          for (; ++o < n.length; ) {
            const e = n[o];
            if (!e.previous || e.previous.call(t, t.previous)) return !0;
          }
        return !1;
      }
    },
    resolveAll: an("text" === e ? sn : void 0),
  };
}
function an(e) {
  return function (n, t) {
    let r,
      o = -1;
    for (; ++o <= n.length; )
      void 0 === r
        ? n[o] && "data" === n[o][1].type && ((r = o), o++)
        : (n[o] && "data" === n[o][1].type) ||
          (o !== r + 2 &&
            ((n[r][1].end = n[o - 1][1].end),
            n.splice(r + 2, o - r - 2),
            (o = r + 2)),
          (r = void 0));
    return e ? e(n, t) : n;
  };
}
function sn(e, n) {
  let t = 0;
  for (; ++t <= e.length; )
    if (
      (t === e.length || "lineEnding" === e[t][1].type) &&
      "data" === e[t - 1][1].type
    ) {
      const r = e[t - 1][1],
        o = n.sliceStream(r);
      let l,
        a = o.length,
        i = -1,
        s = 0;
      for (; a--; ) {
        const e = o[a];
        if ("string" == typeof e) {
          for (i = e.length; 32 === e.charCodeAt(i - 1); ) s++, i--;
          if (i) break;
          i = -1;
        } else if (-2 === e) (l = !0), s++;
        else if (-1 !== e) {
          a++;
          break;
        }
      }
      if (s) {
        const o = {
          type:
            t === e.length || l || s < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: r.end.line,
            column: r.end.column - s,
            offset: r.end.offset - s,
            _index: r.start._index + a,
            _bufferIndex: a ? i : r.start._bufferIndex + i,
          },
          end: Object.assign({}, r.end),
        };
        (r.end = Object.assign({}, o.start)),
          r.start.offset === r.end.offset
            ? Object.assign(r, o)
            : (e.splice(t, 0, ["enter", o, n], ["exit", o, n]), (t += 2));
      }
      t++;
    }
  return e;
}
function un(e, n, t) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; ) {
    const l = e[o].resolveAll;
    l && !r.includes(l) && ((n = l(n, t)), r.push(l));
  }
  return n;
}
function cn(e, n, t) {
  let r = Object.assign(
    t ? Object.assign({}, t) : { line: 1, column: 1, offset: 0 },
    { _index: 0, _bufferIndex: -1 }
  );
  const o = {},
    l = [];
  let a = [],
    i = [],
    s = !0;
  const u = {
      consume: function (e) {
        qe(e)
          ? (r.line++, (r.column = 1), (r.offset += -3 === e ? 2 : 1), k())
          : -1 !== e && (r.column++, r.offset++);
        r._bufferIndex < 0
          ? r._index++
          : (r._bufferIndex++,
            r._bufferIndex === a[r._index].length &&
              ((r._bufferIndex = -1), r._index++));
        (c.previous = e), (s = !0);
      },
      enter: function (e, n) {
        const t = n || {};
        return (
          (t.type = e),
          (t.start = h()),
          c.events.push(["enter", t, c]),
          i.push(t),
          t
        );
      },
      exit: function (e) {
        const n = i.pop();
        return (n.end = h()), c.events.push(["exit", n, c]), n;
      },
      attempt: y(function (e, n) {
        v(e, n.from);
      }),
      check: y(b),
      interrupt: y(b, { interrupt: !0 }),
    },
    c = {
      previous: null,
      code: null,
      containerState: {},
      events: [],
      parser: e,
      sliceStream: p,
      sliceSerialize: function (e, n) {
        return (function (e, n) {
          let t = -1;
          const r = [];
          let o;
          for (; ++t < e.length; ) {
            const l = e[t];
            let a;
            if ("string" == typeof l) a = l;
            else
              switch (l) {
                case -5:
                  a = "\r";
                  break;
                case -4:
                  a = "\n";
                  break;
                case -3:
                  a = "\r\n";
                  break;
                case -2:
                  a = n ? " " : "\t";
                  break;
                case -1:
                  if (!n && o) continue;
                  a = " ";
                  break;
                default:
                  a = String.fromCharCode(l);
              }
            (o = -2 === l), r.push(a);
          }
          return r.join("");
        })(p(e), n);
      },
      now: h,
      defineSkip: function (e) {
        (o[e.line] = e.column), k();
      },
      write: function (e) {
        return (
          (a = Ae(a, e)),
          g(),
          null !== a[a.length - 1]
            ? []
            : (v(n, 0), (c.events = un(l, c.events, c)), c.events)
        );
      },
    };
  let d,
    f = n.tokenize.call(c, u);
  return n.resolveAll && l.push(n), c;
  function p(e) {
    return (function (e, n) {
      const t = n.start._index,
        r = n.start._bufferIndex,
        o = n.end._index,
        l = n.end._bufferIndex;
      let a;
      t === o
        ? (a = [e[t].slice(r, l)])
        : ((a = e.slice(t, o)),
          r > -1 && (a[0] = a[0].slice(r)),
          l > 0 && a.push(e[o].slice(0, l)));
      return a;
    })(a, e);
  }
  function h() {
    return Object.assign({}, r);
  }
  function g() {
    let e;
    for (; r._index < a.length; ) {
      const n = a[r._index];
      if ("string" == typeof n)
        for (
          e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
          r._index === e && r._bufferIndex < n.length;

        )
          m(n.charCodeAt(r._bufferIndex));
      else m(n);
    }
  }
  function m(e) {
    (s = void 0), (d = e), (f = f(e));
  }
  function b(e, n) {
    n.restore();
  }
  function y(e, n) {
    return function (t, o, l) {
      let a, d, f, p;
      return Array.isArray(t)
        ? g(t)
        : "tokenize" in t
        ? g([t])
        : (function (e) {
            return n;
            function n(n) {
              const t = null !== n && e[n],
                r = null !== n && e.null;
              return g([
                ...(Array.isArray(t) ? t : t ? [t] : []),
                ...(Array.isArray(r) ? r : r ? [r] : []),
              ])(n);
            }
          })(t);
      function g(e) {
        return (a = e), (d = 0), 0 === e.length ? l : m(e[d]);
      }
      function m(e) {
        return function (t) {
          (p = (function () {
            const e = h(),
              n = c.previous,
              t = c.currentConstruct,
              o = c.events.length,
              l = Array.from(i);
            return { restore: a, from: o };
            function a() {
              (r = e),
                (c.previous = n),
                (c.currentConstruct = t),
                (c.events.length = o),
                (i = l),
                k();
            }
          })()),
            (f = e),
            e.partial || (c.currentConstruct = e);
          return e.name && c.parser.constructs.disable.null.includes(e.name)
            ? y(t)
            : e.tokenize.call(
                n ? Object.assign(Object.create(c), n) : c,
                u,
                b,
                y
              )(t);
        };
      }
      function b(n) {
        return (s = !0), e(f, p), o;
      }
      function y(e) {
        return (s = !0), p.restore(), ++d < a.length ? m(a[d]) : l;
      }
    };
  }
  function v(e, n) {
    e.resolveAll && !l.includes(e) && l.push(e),
      e.resolve &&
        Le(c.events, n, c.events.length - n, e.resolve(c.events.slice(n), c)),
      e.resolveTo && (c.events = e.resolveTo(c.events, c));
  }
  function k() {
    r.line in o &&
      r.column < 2 &&
      ((r.column = o[r.line]), (r.offset += o[r.line] - 1));
  }
}
var dn = {};
function fn(e) {
  return null === e || Ue(e) || He(e) ? 1 : $e(e) ? 2 : void 0;
}
e(dn, "document", () => Vn),
  e(dn, "contentInitial", () => Wn),
  e(dn, "flowInitial", () => Gn),
  e(dn, "flow", () => Qn),
  e(dn, "string", () => Yn),
  e(dn, "text", () => Kn),
  e(dn, "insideSpan", () => Xn),
  e(dn, "attentionMarkers", () => Jn),
  e(dn, "disable", () => Zn);
const pn = {
  name: "attention",
  tokenize: function (e, n) {
    const t = this.parser.constructs.attentionMarkers.null,
      r = this.previous,
      o = fn(r);
    let l;
    return function (n) {
      return e.enter("attentionSequence"), (l = n), a(n);
    };
    function a(i) {
      if (i === l) return e.consume(i), a;
      const s = e.exit("attentionSequence"),
        u = fn(i),
        c = !u || (2 === u && o) || t.includes(i),
        d = !o || (2 === o && u) || t.includes(r);
      return (
        (s._open = Boolean(42 === l ? c : c && (o || !d))),
        (s._close = Boolean(42 === l ? d : d && (u || !c))),
        n(i)
      );
    }
  },
  resolveAll: function (e, n) {
    let t,
      r,
      o,
      l,
      a,
      i,
      s,
      u,
      c = -1;
    for (; ++c < e.length; )
      if (
        "enter" === e[c][0] &&
        "attentionSequence" === e[c][1].type &&
        e[c][1]._close
      )
        for (t = c; t--; )
          if (
            "exit" === e[t][0] &&
            "attentionSequence" === e[t][1].type &&
            e[t][1]._open &&
            n.sliceSerialize(e[t][1]).charCodeAt(0) ===
              n.sliceSerialize(e[c][1]).charCodeAt(0)
          ) {
            if (
              (e[t][1]._close || e[c][1]._open) &&
              (e[c][1].end.offset - e[c][1].start.offset) % 3 &&
              !(
                (e[t][1].end.offset -
                  e[t][1].start.offset +
                  e[c][1].end.offset -
                  e[c][1].start.offset) %
                3
              )
            )
              continue;
            i =
              e[t][1].end.offset - e[t][1].start.offset > 1 &&
              e[c][1].end.offset - e[c][1].start.offset > 1
                ? 2
                : 1;
            const d = Object.assign({}, e[t][1].end),
              f = Object.assign({}, e[c][1].start);
            hn(d, -i),
              hn(f, i),
              (l = {
                type: i > 1 ? "strongSequence" : "emphasisSequence",
                start: d,
                end: Object.assign({}, e[t][1].end),
              }),
              (a = {
                type: i > 1 ? "strongSequence" : "emphasisSequence",
                start: Object.assign({}, e[c][1].start),
                end: f,
              }),
              (o = {
                type: i > 1 ? "strongText" : "emphasisText",
                start: Object.assign({}, e[t][1].end),
                end: Object.assign({}, e[c][1].start),
              }),
              (r = {
                type: i > 1 ? "strong" : "emphasis",
                start: Object.assign({}, l.start),
                end: Object.assign({}, a.end),
              }),
              (e[t][1].end = Object.assign({}, l.start)),
              (e[c][1].start = Object.assign({}, a.end)),
              (s = []),
              e[t][1].end.offset - e[t][1].start.offset &&
                (s = Ae(s, [
                  ["enter", e[t][1], n],
                  ["exit", e[t][1], n],
                ])),
              (s = Ae(s, [
                ["enter", r, n],
                ["enter", l, n],
                ["exit", l, n],
                ["enter", o, n],
              ])),
              (s = Ae(
                s,
                un(n.parser.constructs.insideSpan.null, e.slice(t + 1, c), n)
              )),
              (s = Ae(s, [
                ["exit", o, n],
                ["enter", a, n],
                ["exit", a, n],
                ["exit", r, n],
              ])),
              e[c][1].end.offset - e[c][1].start.offset
                ? ((u = 2),
                  (s = Ae(s, [
                    ["enter", e[c][1], n],
                    ["exit", e[c][1], n],
                  ])))
                : (u = 0),
              Le(e, t - 1, c - t + 3, s),
              (c = t + s.length - u - 2);
            break;
          }
    c = -1;
    for (; ++c < e.length; )
      "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
    return e;
  },
};
function hn(e, n) {
  (e.column += n), (e.offset += n), (e._bufferIndex += n);
}
const gn = {
  name: "blockQuote",
  tokenize: function (e, n, t) {
    const r = this;
    return function (n) {
      if (62 === n) {
        const t = r.containerState;
        return (
          t.open || (e.enter("blockQuote", { _container: !0 }), (t.open = !0)),
          e.enter("blockQuotePrefix"),
          e.enter("blockQuoteMarker"),
          e.consume(n),
          e.exit("blockQuoteMarker"),
          o
        );
      }
      return t(n);
    };
    function o(t) {
      return Be(t)
        ? (e.enter("blockQuotePrefixWhitespace"),
          e.consume(t),
          e.exit("blockQuotePrefixWhitespace"),
          e.exit("blockQuotePrefix"),
          n)
        : (e.exit("blockQuotePrefix"), n(t));
    }
  },
  continuation: {
    tokenize: function (e, n, t) {
      return We(
        e,
        e.attempt(gn, n, t),
        "linePrefix",
        this.parser.constructs.disable.null.includes("codeIndented")
          ? void 0
          : 4
      );
    },
  },
  exit: function (e) {
    e.exit("blockQuote");
  },
};
const mn = {
  name: "characterEscape",
  tokenize: function (e, n, t) {
    return function (n) {
      return (
        e.enter("characterEscape"),
        e.enter("escapeMarker"),
        e.consume(n),
        e.exit("escapeMarker"),
        r
      );
    };
    function r(r) {
      return je(r)
        ? (e.enter("characterEscapeValue"),
          e.consume(r),
          e.exit("characterEscapeValue"),
          e.exit("characterEscape"),
          n)
        : t(r);
    }
  },
};
const bn = {
    AElig: "Æ",
    AMP: "&",
    Aacute: "Á",
    Abreve: "Ă",
    Acirc: "Â",
    Acy: "А",
    Afr: "𝔄",
    Agrave: "À",
    Alpha: "Α",
    Amacr: "Ā",
    And: "⩓",
    Aogon: "Ą",
    Aopf: "𝔸",
    ApplyFunction: "⁡",
    Aring: "Å",
    Ascr: "𝒜",
    Assign: "≔",
    Atilde: "Ã",
    Auml: "Ä",
    Backslash: "∖",
    Barv: "⫧",
    Barwed: "⌆",
    Bcy: "Б",
    Because: "∵",
    Bernoullis: "ℬ",
    Beta: "Β",
    Bfr: "𝔅",
    Bopf: "𝔹",
    Breve: "˘",
    Bscr: "ℬ",
    Bumpeq: "≎",
    CHcy: "Ч",
    COPY: "©",
    Cacute: "Ć",
    Cap: "⋒",
    CapitalDifferentialD: "ⅅ",
    Cayleys: "ℭ",
    Ccaron: "Č",
    Ccedil: "Ç",
    Ccirc: "Ĉ",
    Cconint: "∰",
    Cdot: "Ċ",
    Cedilla: "¸",
    CenterDot: "·",
    Cfr: "ℭ",
    Chi: "Χ",
    CircleDot: "⊙",
    CircleMinus: "⊖",
    CirclePlus: "⊕",
    CircleTimes: "⊗",
    ClockwiseContourIntegral: "∲",
    CloseCurlyDoubleQuote: "”",
    CloseCurlyQuote: "’",
    Colon: "∷",
    Colone: "⩴",
    Congruent: "≡",
    Conint: "∯",
    ContourIntegral: "∮",
    Copf: "ℂ",
    Coproduct: "∐",
    CounterClockwiseContourIntegral: "∳",
    Cross: "⨯",
    Cscr: "𝒞",
    Cup: "⋓",
    CupCap: "≍",
    DD: "ⅅ",
    DDotrahd: "⤑",
    DJcy: "Ђ",
    DScy: "Ѕ",
    DZcy: "Џ",
    Dagger: "‡",
    Darr: "↡",
    Dashv: "⫤",
    Dcaron: "Ď",
    Dcy: "Д",
    Del: "∇",
    Delta: "Δ",
    Dfr: "𝔇",
    DiacriticalAcute: "´",
    DiacriticalDot: "˙",
    DiacriticalDoubleAcute: "˝",
    DiacriticalGrave: "`",
    DiacriticalTilde: "˜",
    Diamond: "⋄",
    DifferentialD: "ⅆ",
    Dopf: "𝔻",
    Dot: "¨",
    DotDot: "⃜",
    DotEqual: "≐",
    DoubleContourIntegral: "∯",
    DoubleDot: "¨",
    DoubleDownArrow: "⇓",
    DoubleLeftArrow: "⇐",
    DoubleLeftRightArrow: "⇔",
    DoubleLeftTee: "⫤",
    DoubleLongLeftArrow: "⟸",
    DoubleLongLeftRightArrow: "⟺",
    DoubleLongRightArrow: "⟹",
    DoubleRightArrow: "⇒",
    DoubleRightTee: "⊨",
    DoubleUpArrow: "⇑",
    DoubleUpDownArrow: "⇕",
    DoubleVerticalBar: "∥",
    DownArrow: "↓",
    DownArrowBar: "⤓",
    DownArrowUpArrow: "⇵",
    DownBreve: "̑",
    DownLeftRightVector: "⥐",
    DownLeftTeeVector: "⥞",
    DownLeftVector: "↽",
    DownLeftVectorBar: "⥖",
    DownRightTeeVector: "⥟",
    DownRightVector: "⇁",
    DownRightVectorBar: "⥗",
    DownTee: "⊤",
    DownTeeArrow: "↧",
    Downarrow: "⇓",
    Dscr: "𝒟",
    Dstrok: "Đ",
    ENG: "Ŋ",
    ETH: "Ð",
    Eacute: "É",
    Ecaron: "Ě",
    Ecirc: "Ê",
    Ecy: "Э",
    Edot: "Ė",
    Efr: "𝔈",
    Egrave: "È",
    Element: "∈",
    Emacr: "Ē",
    EmptySmallSquare: "◻",
    EmptyVerySmallSquare: "▫",
    Eogon: "Ę",
    Eopf: "𝔼",
    Epsilon: "Ε",
    Equal: "⩵",
    EqualTilde: "≂",
    Equilibrium: "⇌",
    Escr: "ℰ",
    Esim: "⩳",
    Eta: "Η",
    Euml: "Ë",
    Exists: "∃",
    ExponentialE: "ⅇ",
    Fcy: "Ф",
    Ffr: "𝔉",
    FilledSmallSquare: "◼",
    FilledVerySmallSquare: "▪",
    Fopf: "𝔽",
    ForAll: "∀",
    Fouriertrf: "ℱ",
    Fscr: "ℱ",
    GJcy: "Ѓ",
    GT: ">",
    Gamma: "Γ",
    Gammad: "Ϝ",
    Gbreve: "Ğ",
    Gcedil: "Ģ",
    Gcirc: "Ĝ",
    Gcy: "Г",
    Gdot: "Ġ",
    Gfr: "𝔊",
    Gg: "⋙",
    Gopf: "𝔾",
    GreaterEqual: "≥",
    GreaterEqualLess: "⋛",
    GreaterFullEqual: "≧",
    GreaterGreater: "⪢",
    GreaterLess: "≷",
    GreaterSlantEqual: "⩾",
    GreaterTilde: "≳",
    Gscr: "𝒢",
    Gt: "≫",
    HARDcy: "Ъ",
    Hacek: "ˇ",
    Hat: "^",
    Hcirc: "Ĥ",
    Hfr: "ℌ",
    HilbertSpace: "ℋ",
    Hopf: "ℍ",
    HorizontalLine: "─",
    Hscr: "ℋ",
    Hstrok: "Ħ",
    HumpDownHump: "≎",
    HumpEqual: "≏",
    IEcy: "Е",
    IJlig: "Ĳ",
    IOcy: "Ё",
    Iacute: "Í",
    Icirc: "Î",
    Icy: "И",
    Idot: "İ",
    Ifr: "ℑ",
    Igrave: "Ì",
    Im: "ℑ",
    Imacr: "Ī",
    ImaginaryI: "ⅈ",
    Implies: "⇒",
    Int: "∬",
    Integral: "∫",
    Intersection: "⋂",
    InvisibleComma: "⁣",
    InvisibleTimes: "⁢",
    Iogon: "Į",
    Iopf: "𝕀",
    Iota: "Ι",
    Iscr: "ℐ",
    Itilde: "Ĩ",
    Iukcy: "І",
    Iuml: "Ï",
    Jcirc: "Ĵ",
    Jcy: "Й",
    Jfr: "𝔍",
    Jopf: "𝕁",
    Jscr: "𝒥",
    Jsercy: "Ј",
    Jukcy: "Є",
    KHcy: "Х",
    KJcy: "Ќ",
    Kappa: "Κ",
    Kcedil: "Ķ",
    Kcy: "К",
    Kfr: "𝔎",
    Kopf: "𝕂",
    Kscr: "𝒦",
    LJcy: "Љ",
    LT: "<",
    Lacute: "Ĺ",
    Lambda: "Λ",
    Lang: "⟪",
    Laplacetrf: "ℒ",
    Larr: "↞",
    Lcaron: "Ľ",
    Lcedil: "Ļ",
    Lcy: "Л",
    LeftAngleBracket: "⟨",
    LeftArrow: "←",
    LeftArrowBar: "⇤",
    LeftArrowRightArrow: "⇆",
    LeftCeiling: "⌈",
    LeftDoubleBracket: "⟦",
    LeftDownTeeVector: "⥡",
    LeftDownVector: "⇃",
    LeftDownVectorBar: "⥙",
    LeftFloor: "⌊",
    LeftRightArrow: "↔",
    LeftRightVector: "⥎",
    LeftTee: "⊣",
    LeftTeeArrow: "↤",
    LeftTeeVector: "⥚",
    LeftTriangle: "⊲",
    LeftTriangleBar: "⧏",
    LeftTriangleEqual: "⊴",
    LeftUpDownVector: "⥑",
    LeftUpTeeVector: "⥠",
    LeftUpVector: "↿",
    LeftUpVectorBar: "⥘",
    LeftVector: "↼",
    LeftVectorBar: "⥒",
    Leftarrow: "⇐",
    Leftrightarrow: "⇔",
    LessEqualGreater: "⋚",
    LessFullEqual: "≦",
    LessGreater: "≶",
    LessLess: "⪡",
    LessSlantEqual: "⩽",
    LessTilde: "≲",
    Lfr: "𝔏",
    Ll: "⋘",
    Lleftarrow: "⇚",
    Lmidot: "Ŀ",
    LongLeftArrow: "⟵",
    LongLeftRightArrow: "⟷",
    LongRightArrow: "⟶",
    Longleftarrow: "⟸",
    Longleftrightarrow: "⟺",
    Longrightarrow: "⟹",
    Lopf: "𝕃",
    LowerLeftArrow: "↙",
    LowerRightArrow: "↘",
    Lscr: "ℒ",
    Lsh: "↰",
    Lstrok: "Ł",
    Lt: "≪",
    Map: "⤅",
    Mcy: "М",
    MediumSpace: " ",
    Mellintrf: "ℳ",
    Mfr: "𝔐",
    MinusPlus: "∓",
    Mopf: "𝕄",
    Mscr: "ℳ",
    Mu: "Μ",
    NJcy: "Њ",
    Nacute: "Ń",
    Ncaron: "Ň",
    Ncedil: "Ņ",
    Ncy: "Н",
    NegativeMediumSpace: "​",
    NegativeThickSpace: "​",
    NegativeThinSpace: "​",
    NegativeVeryThinSpace: "​",
    NestedGreaterGreater: "≫",
    NestedLessLess: "≪",
    NewLine: "\n",
    Nfr: "𝔑",
    NoBreak: "⁠",
    NonBreakingSpace: " ",
    Nopf: "ℕ",
    Not: "⫬",
    NotCongruent: "≢",
    NotCupCap: "≭",
    NotDoubleVerticalBar: "∦",
    NotElement: "∉",
    NotEqual: "≠",
    NotEqualTilde: "≂̸",
    NotExists: "∄",
    NotGreater: "≯",
    NotGreaterEqual: "≱",
    NotGreaterFullEqual: "≧̸",
    NotGreaterGreater: "≫̸",
    NotGreaterLess: "≹",
    NotGreaterSlantEqual: "⩾̸",
    NotGreaterTilde: "≵",
    NotHumpDownHump: "≎̸",
    NotHumpEqual: "≏̸",
    NotLeftTriangle: "⋪",
    NotLeftTriangleBar: "⧏̸",
    NotLeftTriangleEqual: "⋬",
    NotLess: "≮",
    NotLessEqual: "≰",
    NotLessGreater: "≸",
    NotLessLess: "≪̸",
    NotLessSlantEqual: "⩽̸",
    NotLessTilde: "≴",
    NotNestedGreaterGreater: "⪢̸",
    NotNestedLessLess: "⪡̸",
    NotPrecedes: "⊀",
    NotPrecedesEqual: "⪯̸",
    NotPrecedesSlantEqual: "⋠",
    NotReverseElement: "∌",
    NotRightTriangle: "⋫",
    NotRightTriangleBar: "⧐̸",
    NotRightTriangleEqual: "⋭",
    NotSquareSubset: "⊏̸",
    NotSquareSubsetEqual: "⋢",
    NotSquareSuperset: "⊐̸",
    NotSquareSupersetEqual: "⋣",
    NotSubset: "⊂⃒",
    NotSubsetEqual: "⊈",
    NotSucceeds: "⊁",
    NotSucceedsEqual: "⪰̸",
    NotSucceedsSlantEqual: "⋡",
    NotSucceedsTilde: "≿̸",
    NotSuperset: "⊃⃒",
    NotSupersetEqual: "⊉",
    NotTilde: "≁",
    NotTildeEqual: "≄",
    NotTildeFullEqual: "≇",
    NotTildeTilde: "≉",
    NotVerticalBar: "∤",
    Nscr: "𝒩",
    Ntilde: "Ñ",
    Nu: "Ν",
    OElig: "Œ",
    Oacute: "Ó",
    Ocirc: "Ô",
    Ocy: "О",
    Odblac: "Ő",
    Ofr: "𝔒",
    Ograve: "Ò",
    Omacr: "Ō",
    Omega: "Ω",
    Omicron: "Ο",
    Oopf: "𝕆",
    OpenCurlyDoubleQuote: "“",
    OpenCurlyQuote: "‘",
    Or: "⩔",
    Oscr: "𝒪",
    Oslash: "Ø",
    Otilde: "Õ",
    Otimes: "⨷",
    Ouml: "Ö",
    OverBar: "‾",
    OverBrace: "⏞",
    OverBracket: "⎴",
    OverParenthesis: "⏜",
    PartialD: "∂",
    Pcy: "П",
    Pfr: "𝔓",
    Phi: "Φ",
    Pi: "Π",
    PlusMinus: "±",
    Poincareplane: "ℌ",
    Popf: "ℙ",
    Pr: "⪻",
    Precedes: "≺",
    PrecedesEqual: "⪯",
    PrecedesSlantEqual: "≼",
    PrecedesTilde: "≾",
    Prime: "″",
    Product: "∏",
    Proportion: "∷",
    Proportional: "∝",
    Pscr: "𝒫",
    Psi: "Ψ",
    QUOT: '"',
    Qfr: "𝔔",
    Qopf: "ℚ",
    Qscr: "𝒬",
    RBarr: "⤐",
    REG: "®",
    Racute: "Ŕ",
    Rang: "⟫",
    Rarr: "↠",
    Rarrtl: "⤖",
    Rcaron: "Ř",
    Rcedil: "Ŗ",
    Rcy: "Р",
    Re: "ℜ",
    ReverseElement: "∋",
    ReverseEquilibrium: "⇋",
    ReverseUpEquilibrium: "⥯",
    Rfr: "ℜ",
    Rho: "Ρ",
    RightAngleBracket: "⟩",
    RightArrow: "→",
    RightArrowBar: "⇥",
    RightArrowLeftArrow: "⇄",
    RightCeiling: "⌉",
    RightDoubleBracket: "⟧",
    RightDownTeeVector: "⥝",
    RightDownVector: "⇂",
    RightDownVectorBar: "⥕",
    RightFloor: "⌋",
    RightTee: "⊢",
    RightTeeArrow: "↦",
    RightTeeVector: "⥛",
    RightTriangle: "⊳",
    RightTriangleBar: "⧐",
    RightTriangleEqual: "⊵",
    RightUpDownVector: "⥏",
    RightUpTeeVector: "⥜",
    RightUpVector: "↾",
    RightUpVectorBar: "⥔",
    RightVector: "⇀",
    RightVectorBar: "⥓",
    Rightarrow: "⇒",
    Ropf: "ℝ",
    RoundImplies: "⥰",
    Rrightarrow: "⇛",
    Rscr: "ℛ",
    Rsh: "↱",
    RuleDelayed: "⧴",
    SHCHcy: "Щ",
    SHcy: "Ш",
    SOFTcy: "Ь",
    Sacute: "Ś",
    Sc: "⪼",
    Scaron: "Š",
    Scedil: "Ş",
    Scirc: "Ŝ",
    Scy: "С",
    Sfr: "𝔖",
    ShortDownArrow: "↓",
    ShortLeftArrow: "←",
    ShortRightArrow: "→",
    ShortUpArrow: "↑",
    Sigma: "Σ",
    SmallCircle: "∘",
    Sopf: "𝕊",
    Sqrt: "√",
    Square: "□",
    SquareIntersection: "⊓",
    SquareSubset: "⊏",
    SquareSubsetEqual: "⊑",
    SquareSuperset: "⊐",
    SquareSupersetEqual: "⊒",
    SquareUnion: "⊔",
    Sscr: "𝒮",
    Star: "⋆",
    Sub: "⋐",
    Subset: "⋐",
    SubsetEqual: "⊆",
    Succeeds: "≻",
    SucceedsEqual: "⪰",
    SucceedsSlantEqual: "≽",
    SucceedsTilde: "≿",
    SuchThat: "∋",
    Sum: "∑",
    Sup: "⋑",
    Superset: "⊃",
    SupersetEqual: "⊇",
    Supset: "⋑",
    THORN: "Þ",
    TRADE: "™",
    TSHcy: "Ћ",
    TScy: "Ц",
    Tab: "\t",
    Tau: "Τ",
    Tcaron: "Ť",
    Tcedil: "Ţ",
    Tcy: "Т",
    Tfr: "𝔗",
    Therefore: "∴",
    Theta: "Θ",
    ThickSpace: "  ",
    ThinSpace: " ",
    Tilde: "∼",
    TildeEqual: "≃",
    TildeFullEqual: "≅",
    TildeTilde: "≈",
    Topf: "𝕋",
    TripleDot: "⃛",
    Tscr: "𝒯",
    Tstrok: "Ŧ",
    Uacute: "Ú",
    Uarr: "↟",
    Uarrocir: "⥉",
    Ubrcy: "Ў",
    Ubreve: "Ŭ",
    Ucirc: "Û",
    Ucy: "У",
    Udblac: "Ű",
    Ufr: "𝔘",
    Ugrave: "Ù",
    Umacr: "Ū",
    UnderBar: "_",
    UnderBrace: "⏟",
    UnderBracket: "⎵",
    UnderParenthesis: "⏝",
    Union: "⋃",
    UnionPlus: "⊎",
    Uogon: "Ų",
    Uopf: "𝕌",
    UpArrow: "↑",
    UpArrowBar: "⤒",
    UpArrowDownArrow: "⇅",
    UpDownArrow: "↕",
    UpEquilibrium: "⥮",
    UpTee: "⊥",
    UpTeeArrow: "↥",
    Uparrow: "⇑",
    Updownarrow: "⇕",
    UpperLeftArrow: "↖",
    UpperRightArrow: "↗",
    Upsi: "ϒ",
    Upsilon: "Υ",
    Uring: "Ů",
    Uscr: "𝒰",
    Utilde: "Ũ",
    Uuml: "Ü",
    VDash: "⊫",
    Vbar: "⫫",
    Vcy: "В",
    Vdash: "⊩",
    Vdashl: "⫦",
    Vee: "⋁",
    Verbar: "‖",
    Vert: "‖",
    VerticalBar: "∣",
    VerticalLine: "|",
    VerticalSeparator: "❘",
    VerticalTilde: "≀",
    VeryThinSpace: " ",
    Vfr: "𝔙",
    Vopf: "𝕍",
    Vscr: "𝒱",
    Vvdash: "⊪",
    Wcirc: "Ŵ",
    Wedge: "⋀",
    Wfr: "𝔚",
    Wopf: "𝕎",
    Wscr: "𝒲",
    Xfr: "𝔛",
    Xi: "Ξ",
    Xopf: "𝕏",
    Xscr: "𝒳",
    YAcy: "Я",
    YIcy: "Ї",
    YUcy: "Ю",
    Yacute: "Ý",
    Ycirc: "Ŷ",
    Ycy: "Ы",
    Yfr: "𝔜",
    Yopf: "𝕐",
    Yscr: "𝒴",
    Yuml: "Ÿ",
    ZHcy: "Ж",
    Zacute: "Ź",
    Zcaron: "Ž",
    Zcy: "З",
    Zdot: "Ż",
    ZeroWidthSpace: "​",
    Zeta: "Ζ",
    Zfr: "ℨ",
    Zopf: "ℤ",
    Zscr: "𝒵",
    aacute: "á",
    abreve: "ă",
    ac: "∾",
    acE: "∾̳",
    acd: "∿",
    acirc: "â",
    acute: "´",
    acy: "а",
    aelig: "æ",
    af: "⁡",
    afr: "𝔞",
    agrave: "à",
    alefsym: "ℵ",
    aleph: "ℵ",
    alpha: "α",
    amacr: "ā",
    amalg: "⨿",
    amp: "&",
    and: "∧",
    andand: "⩕",
    andd: "⩜",
    andslope: "⩘",
    andv: "⩚",
    ang: "∠",
    ange: "⦤",
    angle: "∠",
    angmsd: "∡",
    angmsdaa: "⦨",
    angmsdab: "⦩",
    angmsdac: "⦪",
    angmsdad: "⦫",
    angmsdae: "⦬",
    angmsdaf: "⦭",
    angmsdag: "⦮",
    angmsdah: "⦯",
    angrt: "∟",
    angrtvb: "⊾",
    angrtvbd: "⦝",
    angsph: "∢",
    angst: "Å",
    angzarr: "⍼",
    aogon: "ą",
    aopf: "𝕒",
    ap: "≈",
    apE: "⩰",
    apacir: "⩯",
    ape: "≊",
    apid: "≋",
    apos: "'",
    approx: "≈",
    approxeq: "≊",
    aring: "å",
    ascr: "𝒶",
    ast: "*",
    asymp: "≈",
    asympeq: "≍",
    atilde: "ã",
    auml: "ä",
    awconint: "∳",
    awint: "⨑",
    bNot: "⫭",
    backcong: "≌",
    backepsilon: "϶",
    backprime: "‵",
    backsim: "∽",
    backsimeq: "⋍",
    barvee: "⊽",
    barwed: "⌅",
    barwedge: "⌅",
    bbrk: "⎵",
    bbrktbrk: "⎶",
    bcong: "≌",
    bcy: "б",
    bdquo: "„",
    becaus: "∵",
    because: "∵",
    bemptyv: "⦰",
    bepsi: "϶",
    bernou: "ℬ",
    beta: "β",
    beth: "ℶ",
    between: "≬",
    bfr: "𝔟",
    bigcap: "⋂",
    bigcirc: "◯",
    bigcup: "⋃",
    bigodot: "⨀",
    bigoplus: "⨁",
    bigotimes: "⨂",
    bigsqcup: "⨆",
    bigstar: "★",
    bigtriangledown: "▽",
    bigtriangleup: "△",
    biguplus: "⨄",
    bigvee: "⋁",
    bigwedge: "⋀",
    bkarow: "⤍",
    blacklozenge: "⧫",
    blacksquare: "▪",
    blacktriangle: "▴",
    blacktriangledown: "▾",
    blacktriangleleft: "◂",
    blacktriangleright: "▸",
    blank: "␣",
    blk12: "▒",
    blk14: "░",
    blk34: "▓",
    block: "█",
    bne: "=⃥",
    bnequiv: "≡⃥",
    bnot: "⌐",
    bopf: "𝕓",
    bot: "⊥",
    bottom: "⊥",
    bowtie: "⋈",
    boxDL: "╗",
    boxDR: "╔",
    boxDl: "╖",
    boxDr: "╓",
    boxH: "═",
    boxHD: "╦",
    boxHU: "╩",
    boxHd: "╤",
    boxHu: "╧",
    boxUL: "╝",
    boxUR: "╚",
    boxUl: "╜",
    boxUr: "╙",
    boxV: "║",
    boxVH: "╬",
    boxVL: "╣",
    boxVR: "╠",
    boxVh: "╫",
    boxVl: "╢",
    boxVr: "╟",
    boxbox: "⧉",
    boxdL: "╕",
    boxdR: "╒",
    boxdl: "┐",
    boxdr: "┌",
    boxh: "─",
    boxhD: "╥",
    boxhU: "╨",
    boxhd: "┬",
    boxhu: "┴",
    boxminus: "⊟",
    boxplus: "⊞",
    boxtimes: "⊠",
    boxuL: "╛",
    boxuR: "╘",
    boxul: "┘",
    boxur: "└",
    boxv: "│",
    boxvH: "╪",
    boxvL: "╡",
    boxvR: "╞",
    boxvh: "┼",
    boxvl: "┤",
    boxvr: "├",
    bprime: "‵",
    breve: "˘",
    brvbar: "¦",
    bscr: "𝒷",
    bsemi: "⁏",
    bsim: "∽",
    bsime: "⋍",
    bsol: "\\",
    bsolb: "⧅",
    bsolhsub: "⟈",
    bull: "•",
    bullet: "•",
    bump: "≎",
    bumpE: "⪮",
    bumpe: "≏",
    bumpeq: "≏",
    cacute: "ć",
    cap: "∩",
    capand: "⩄",
    capbrcup: "⩉",
    capcap: "⩋",
    capcup: "⩇",
    capdot: "⩀",
    caps: "∩︀",
    caret: "⁁",
    caron: "ˇ",
    ccaps: "⩍",
    ccaron: "č",
    ccedil: "ç",
    ccirc: "ĉ",
    ccups: "⩌",
    ccupssm: "⩐",
    cdot: "ċ",
    cedil: "¸",
    cemptyv: "⦲",
    cent: "¢",
    centerdot: "·",
    cfr: "𝔠",
    chcy: "ч",
    check: "✓",
    checkmark: "✓",
    chi: "χ",
    cir: "○",
    cirE: "⧃",
    circ: "ˆ",
    circeq: "≗",
    circlearrowleft: "↺",
    circlearrowright: "↻",
    circledR: "®",
    circledS: "Ⓢ",
    circledast: "⊛",
    circledcirc: "⊚",
    circleddash: "⊝",
    cire: "≗",
    cirfnint: "⨐",
    cirmid: "⫯",
    cirscir: "⧂",
    clubs: "♣",
    clubsuit: "♣",
    colon: ":",
    colone: "≔",
    coloneq: "≔",
    comma: ",",
    commat: "@",
    comp: "∁",
    compfn: "∘",
    complement: "∁",
    complexes: "ℂ",
    cong: "≅",
    congdot: "⩭",
    conint: "∮",
    copf: "𝕔",
    coprod: "∐",
    copy: "©",
    copysr: "℗",
    crarr: "↵",
    cross: "✗",
    cscr: "𝒸",
    csub: "⫏",
    csube: "⫑",
    csup: "⫐",
    csupe: "⫒",
    ctdot: "⋯",
    cudarrl: "⤸",
    cudarrr: "⤵",
    cuepr: "⋞",
    cuesc: "⋟",
    cularr: "↶",
    cularrp: "⤽",
    cup: "∪",
    cupbrcap: "⩈",
    cupcap: "⩆",
    cupcup: "⩊",
    cupdot: "⊍",
    cupor: "⩅",
    cups: "∪︀",
    curarr: "↷",
    curarrm: "⤼",
    curlyeqprec: "⋞",
    curlyeqsucc: "⋟",
    curlyvee: "⋎",
    curlywedge: "⋏",
    curren: "¤",
    curvearrowleft: "↶",
    curvearrowright: "↷",
    cuvee: "⋎",
    cuwed: "⋏",
    cwconint: "∲",
    cwint: "∱",
    cylcty: "⌭",
    dArr: "⇓",
    dHar: "⥥",
    dagger: "†",
    daleth: "ℸ",
    darr: "↓",
    dash: "‐",
    dashv: "⊣",
    dbkarow: "⤏",
    dblac: "˝",
    dcaron: "ď",
    dcy: "д",
    dd: "ⅆ",
    ddagger: "‡",
    ddarr: "⇊",
    ddotseq: "⩷",
    deg: "°",
    delta: "δ",
    demptyv: "⦱",
    dfisht: "⥿",
    dfr: "𝔡",
    dharl: "⇃",
    dharr: "⇂",
    diam: "⋄",
    diamond: "⋄",
    diamondsuit: "♦",
    diams: "♦",
    die: "¨",
    digamma: "ϝ",
    disin: "⋲",
    div: "÷",
    divide: "÷",
    divideontimes: "⋇",
    divonx: "⋇",
    djcy: "ђ",
    dlcorn: "⌞",
    dlcrop: "⌍",
    dollar: "$",
    dopf: "𝕕",
    dot: "˙",
    doteq: "≐",
    doteqdot: "≑",
    dotminus: "∸",
    dotplus: "∔",
    dotsquare: "⊡",
    doublebarwedge: "⌆",
    downarrow: "↓",
    downdownarrows: "⇊",
    downharpoonleft: "⇃",
    downharpoonright: "⇂",
    drbkarow: "⤐",
    drcorn: "⌟",
    drcrop: "⌌",
    dscr: "𝒹",
    dscy: "ѕ",
    dsol: "⧶",
    dstrok: "đ",
    dtdot: "⋱",
    dtri: "▿",
    dtrif: "▾",
    duarr: "⇵",
    duhar: "⥯",
    dwangle: "⦦",
    dzcy: "џ",
    dzigrarr: "⟿",
    eDDot: "⩷",
    eDot: "≑",
    eacute: "é",
    easter: "⩮",
    ecaron: "ě",
    ecir: "≖",
    ecirc: "ê",
    ecolon: "≕",
    ecy: "э",
    edot: "ė",
    ee: "ⅇ",
    efDot: "≒",
    efr: "𝔢",
    eg: "⪚",
    egrave: "è",
    egs: "⪖",
    egsdot: "⪘",
    el: "⪙",
    elinters: "⏧",
    ell: "ℓ",
    els: "⪕",
    elsdot: "⪗",
    emacr: "ē",
    empty: "∅",
    emptyset: "∅",
    emptyv: "∅",
    emsp13: " ",
    emsp14: " ",
    emsp: " ",
    eng: "ŋ",
    ensp: " ",
    eogon: "ę",
    eopf: "𝕖",
    epar: "⋕",
    eparsl: "⧣",
    eplus: "⩱",
    epsi: "ε",
    epsilon: "ε",
    epsiv: "ϵ",
    eqcirc: "≖",
    eqcolon: "≕",
    eqsim: "≂",
    eqslantgtr: "⪖",
    eqslantless: "⪕",
    equals: "=",
    equest: "≟",
    equiv: "≡",
    equivDD: "⩸",
    eqvparsl: "⧥",
    erDot: "≓",
    erarr: "⥱",
    escr: "ℯ",
    esdot: "≐",
    esim: "≂",
    eta: "η",
    eth: "ð",
    euml: "ë",
    euro: "€",
    excl: "!",
    exist: "∃",
    expectation: "ℰ",
    exponentiale: "ⅇ",
    fallingdotseq: "≒",
    fcy: "ф",
    female: "♀",
    ffilig: "ﬃ",
    fflig: "ﬀ",
    ffllig: "ﬄ",
    ffr: "𝔣",
    filig: "ﬁ",
    fjlig: "fj",
    flat: "♭",
    fllig: "ﬂ",
    fltns: "▱",
    fnof: "ƒ",
    fopf: "𝕗",
    forall: "∀",
    fork: "⋔",
    forkv: "⫙",
    fpartint: "⨍",
    frac12: "½",
    frac13: "⅓",
    frac14: "¼",
    frac15: "⅕",
    frac16: "⅙",
    frac18: "⅛",
    frac23: "⅔",
    frac25: "⅖",
    frac34: "¾",
    frac35: "⅗",
    frac38: "⅜",
    frac45: "⅘",
    frac56: "⅚",
    frac58: "⅝",
    frac78: "⅞",
    frasl: "⁄",
    frown: "⌢",
    fscr: "𝒻",
    gE: "≧",
    gEl: "⪌",
    gacute: "ǵ",
    gamma: "γ",
    gammad: "ϝ",
    gap: "⪆",
    gbreve: "ğ",
    gcirc: "ĝ",
    gcy: "г",
    gdot: "ġ",
    ge: "≥",
    gel: "⋛",
    geq: "≥",
    geqq: "≧",
    geqslant: "⩾",
    ges: "⩾",
    gescc: "⪩",
    gesdot: "⪀",
    gesdoto: "⪂",
    gesdotol: "⪄",
    gesl: "⋛︀",
    gesles: "⪔",
    gfr: "𝔤",
    gg: "≫",
    ggg: "⋙",
    gimel: "ℷ",
    gjcy: "ѓ",
    gl: "≷",
    glE: "⪒",
    gla: "⪥",
    glj: "⪤",
    gnE: "≩",
    gnap: "⪊",
    gnapprox: "⪊",
    gne: "⪈",
    gneq: "⪈",
    gneqq: "≩",
    gnsim: "⋧",
    gopf: "𝕘",
    grave: "`",
    gscr: "ℊ",
    gsim: "≳",
    gsime: "⪎",
    gsiml: "⪐",
    gt: ">",
    gtcc: "⪧",
    gtcir: "⩺",
    gtdot: "⋗",
    gtlPar: "⦕",
    gtquest: "⩼",
    gtrapprox: "⪆",
    gtrarr: "⥸",
    gtrdot: "⋗",
    gtreqless: "⋛",
    gtreqqless: "⪌",
    gtrless: "≷",
    gtrsim: "≳",
    gvertneqq: "≩︀",
    gvnE: "≩︀",
    hArr: "⇔",
    hairsp: " ",
    half: "½",
    hamilt: "ℋ",
    hardcy: "ъ",
    harr: "↔",
    harrcir: "⥈",
    harrw: "↭",
    hbar: "ℏ",
    hcirc: "ĥ",
    hearts: "♥",
    heartsuit: "♥",
    hellip: "…",
    hercon: "⊹",
    hfr: "𝔥",
    hksearow: "⤥",
    hkswarow: "⤦",
    hoarr: "⇿",
    homtht: "∻",
    hookleftarrow: "↩",
    hookrightarrow: "↪",
    hopf: "𝕙",
    horbar: "―",
    hscr: "𝒽",
    hslash: "ℏ",
    hstrok: "ħ",
    hybull: "⁃",
    hyphen: "‐",
    iacute: "í",
    ic: "⁣",
    icirc: "î",
    icy: "и",
    iecy: "е",
    iexcl: "¡",
    iff: "⇔",
    ifr: "𝔦",
    igrave: "ì",
    ii: "ⅈ",
    iiiint: "⨌",
    iiint: "∭",
    iinfin: "⧜",
    iiota: "℩",
    ijlig: "ĳ",
    imacr: "ī",
    image: "ℑ",
    imagline: "ℐ",
    imagpart: "ℑ",
    imath: "ı",
    imof: "⊷",
    imped: "Ƶ",
    in: "∈",
    incare: "℅",
    infin: "∞",
    infintie: "⧝",
    inodot: "ı",
    int: "∫",
    intcal: "⊺",
    integers: "ℤ",
    intercal: "⊺",
    intlarhk: "⨗",
    intprod: "⨼",
    iocy: "ё",
    iogon: "į",
    iopf: "𝕚",
    iota: "ι",
    iprod: "⨼",
    iquest: "¿",
    iscr: "𝒾",
    isin: "∈",
    isinE: "⋹",
    isindot: "⋵",
    isins: "⋴",
    isinsv: "⋳",
    isinv: "∈",
    it: "⁢",
    itilde: "ĩ",
    iukcy: "і",
    iuml: "ï",
    jcirc: "ĵ",
    jcy: "й",
    jfr: "𝔧",
    jmath: "ȷ",
    jopf: "𝕛",
    jscr: "𝒿",
    jsercy: "ј",
    jukcy: "є",
    kappa: "κ",
    kappav: "ϰ",
    kcedil: "ķ",
    kcy: "к",
    kfr: "𝔨",
    kgreen: "ĸ",
    khcy: "х",
    kjcy: "ќ",
    kopf: "𝕜",
    kscr: "𝓀",
    lAarr: "⇚",
    lArr: "⇐",
    lAtail: "⤛",
    lBarr: "⤎",
    lE: "≦",
    lEg: "⪋",
    lHar: "⥢",
    lacute: "ĺ",
    laemptyv: "⦴",
    lagran: "ℒ",
    lambda: "λ",
    lang: "⟨",
    langd: "⦑",
    langle: "⟨",
    lap: "⪅",
    laquo: "«",
    larr: "←",
    larrb: "⇤",
    larrbfs: "⤟",
    larrfs: "⤝",
    larrhk: "↩",
    larrlp: "↫",
    larrpl: "⤹",
    larrsim: "⥳",
    larrtl: "↢",
    lat: "⪫",
    latail: "⤙",
    late: "⪭",
    lates: "⪭︀",
    lbarr: "⤌",
    lbbrk: "❲",
    lbrace: "{",
    lbrack: "[",
    lbrke: "⦋",
    lbrksld: "⦏",
    lbrkslu: "⦍",
    lcaron: "ľ",
    lcedil: "ļ",
    lceil: "⌈",
    lcub: "{",
    lcy: "л",
    ldca: "⤶",
    ldquo: "“",
    ldquor: "„",
    ldrdhar: "⥧",
    ldrushar: "⥋",
    ldsh: "↲",
    le: "≤",
    leftarrow: "←",
    leftarrowtail: "↢",
    leftharpoondown: "↽",
    leftharpoonup: "↼",
    leftleftarrows: "⇇",
    leftrightarrow: "↔",
    leftrightarrows: "⇆",
    leftrightharpoons: "⇋",
    leftrightsquigarrow: "↭",
    leftthreetimes: "⋋",
    leg: "⋚",
    leq: "≤",
    leqq: "≦",
    leqslant: "⩽",
    les: "⩽",
    lescc: "⪨",
    lesdot: "⩿",
    lesdoto: "⪁",
    lesdotor: "⪃",
    lesg: "⋚︀",
    lesges: "⪓",
    lessapprox: "⪅",
    lessdot: "⋖",
    lesseqgtr: "⋚",
    lesseqqgtr: "⪋",
    lessgtr: "≶",
    lesssim: "≲",
    lfisht: "⥼",
    lfloor: "⌊",
    lfr: "𝔩",
    lg: "≶",
    lgE: "⪑",
    lhard: "↽",
    lharu: "↼",
    lharul: "⥪",
    lhblk: "▄",
    ljcy: "љ",
    ll: "≪",
    llarr: "⇇",
    llcorner: "⌞",
    llhard: "⥫",
    lltri: "◺",
    lmidot: "ŀ",
    lmoust: "⎰",
    lmoustache: "⎰",
    lnE: "≨",
    lnap: "⪉",
    lnapprox: "⪉",
    lne: "⪇",
    lneq: "⪇",
    lneqq: "≨",
    lnsim: "⋦",
    loang: "⟬",
    loarr: "⇽",
    lobrk: "⟦",
    longleftarrow: "⟵",
    longleftrightarrow: "⟷",
    longmapsto: "⟼",
    longrightarrow: "⟶",
    looparrowleft: "↫",
    looparrowright: "↬",
    lopar: "⦅",
    lopf: "𝕝",
    loplus: "⨭",
    lotimes: "⨴",
    lowast: "∗",
    lowbar: "_",
    loz: "◊",
    lozenge: "◊",
    lozf: "⧫",
    lpar: "(",
    lparlt: "⦓",
    lrarr: "⇆",
    lrcorner: "⌟",
    lrhar: "⇋",
    lrhard: "⥭",
    lrm: "‎",
    lrtri: "⊿",
    lsaquo: "‹",
    lscr: "𝓁",
    lsh: "↰",
    lsim: "≲",
    lsime: "⪍",
    lsimg: "⪏",
    lsqb: "[",
    lsquo: "‘",
    lsquor: "‚",
    lstrok: "ł",
    lt: "<",
    ltcc: "⪦",
    ltcir: "⩹",
    ltdot: "⋖",
    lthree: "⋋",
    ltimes: "⋉",
    ltlarr: "⥶",
    ltquest: "⩻",
    ltrPar: "⦖",
    ltri: "◃",
    ltrie: "⊴",
    ltrif: "◂",
    lurdshar: "⥊",
    luruhar: "⥦",
    lvertneqq: "≨︀",
    lvnE: "≨︀",
    mDDot: "∺",
    macr: "¯",
    male: "♂",
    malt: "✠",
    maltese: "✠",
    map: "↦",
    mapsto: "↦",
    mapstodown: "↧",
    mapstoleft: "↤",
    mapstoup: "↥",
    marker: "▮",
    mcomma: "⨩",
    mcy: "м",
    mdash: "—",
    measuredangle: "∡",
    mfr: "𝔪",
    mho: "℧",
    micro: "µ",
    mid: "∣",
    midast: "*",
    midcir: "⫰",
    middot: "·",
    minus: "−",
    minusb: "⊟",
    minusd: "∸",
    minusdu: "⨪",
    mlcp: "⫛",
    mldr: "…",
    mnplus: "∓",
    models: "⊧",
    mopf: "𝕞",
    mp: "∓",
    mscr: "𝓂",
    mstpos: "∾",
    mu: "μ",
    multimap: "⊸",
    mumap: "⊸",
    nGg: "⋙̸",
    nGt: "≫⃒",
    nGtv: "≫̸",
    nLeftarrow: "⇍",
    nLeftrightarrow: "⇎",
    nLl: "⋘̸",
    nLt: "≪⃒",
    nLtv: "≪̸",
    nRightarrow: "⇏",
    nVDash: "⊯",
    nVdash: "⊮",
    nabla: "∇",
    nacute: "ń",
    nang: "∠⃒",
    nap: "≉",
    napE: "⩰̸",
    napid: "≋̸",
    napos: "ŉ",
    napprox: "≉",
    natur: "♮",
    natural: "♮",
    naturals: "ℕ",
    nbsp: " ",
    nbump: "≎̸",
    nbumpe: "≏̸",
    ncap: "⩃",
    ncaron: "ň",
    ncedil: "ņ",
    ncong: "≇",
    ncongdot: "⩭̸",
    ncup: "⩂",
    ncy: "н",
    ndash: "–",
    ne: "≠",
    neArr: "⇗",
    nearhk: "⤤",
    nearr: "↗",
    nearrow: "↗",
    nedot: "≐̸",
    nequiv: "≢",
    nesear: "⤨",
    nesim: "≂̸",
    nexist: "∄",
    nexists: "∄",
    nfr: "𝔫",
    ngE: "≧̸",
    nge: "≱",
    ngeq: "≱",
    ngeqq: "≧̸",
    ngeqslant: "⩾̸",
    nges: "⩾̸",
    ngsim: "≵",
    ngt: "≯",
    ngtr: "≯",
    nhArr: "⇎",
    nharr: "↮",
    nhpar: "⫲",
    ni: "∋",
    nis: "⋼",
    nisd: "⋺",
    niv: "∋",
    njcy: "њ",
    nlArr: "⇍",
    nlE: "≦̸",
    nlarr: "↚",
    nldr: "‥",
    nle: "≰",
    nleftarrow: "↚",
    nleftrightarrow: "↮",
    nleq: "≰",
    nleqq: "≦̸",
    nleqslant: "⩽̸",
    nles: "⩽̸",
    nless: "≮",
    nlsim: "≴",
    nlt: "≮",
    nltri: "⋪",
    nltrie: "⋬",
    nmid: "∤",
    nopf: "𝕟",
    not: "¬",
    notin: "∉",
    notinE: "⋹̸",
    notindot: "⋵̸",
    notinva: "∉",
    notinvb: "⋷",
    notinvc: "⋶",
    notni: "∌",
    notniva: "∌",
    notnivb: "⋾",
    notnivc: "⋽",
    npar: "∦",
    nparallel: "∦",
    nparsl: "⫽⃥",
    npart: "∂̸",
    npolint: "⨔",
    npr: "⊀",
    nprcue: "⋠",
    npre: "⪯̸",
    nprec: "⊀",
    npreceq: "⪯̸",
    nrArr: "⇏",
    nrarr: "↛",
    nrarrc: "⤳̸",
    nrarrw: "↝̸",
    nrightarrow: "↛",
    nrtri: "⋫",
    nrtrie: "⋭",
    nsc: "⊁",
    nsccue: "⋡",
    nsce: "⪰̸",
    nscr: "𝓃",
    nshortmid: "∤",
    nshortparallel: "∦",
    nsim: "≁",
    nsime: "≄",
    nsimeq: "≄",
    nsmid: "∤",
    nspar: "∦",
    nsqsube: "⋢",
    nsqsupe: "⋣",
    nsub: "⊄",
    nsubE: "⫅̸",
    nsube: "⊈",
    nsubset: "⊂⃒",
    nsubseteq: "⊈",
    nsubseteqq: "⫅̸",
    nsucc: "⊁",
    nsucceq: "⪰̸",
    nsup: "⊅",
    nsupE: "⫆̸",
    nsupe: "⊉",
    nsupset: "⊃⃒",
    nsupseteq: "⊉",
    nsupseteqq: "⫆̸",
    ntgl: "≹",
    ntilde: "ñ",
    ntlg: "≸",
    ntriangleleft: "⋪",
    ntrianglelefteq: "⋬",
    ntriangleright: "⋫",
    ntrianglerighteq: "⋭",
    nu: "ν",
    num: "#",
    numero: "№",
    numsp: " ",
    nvDash: "⊭",
    nvHarr: "⤄",
    nvap: "≍⃒",
    nvdash: "⊬",
    nvge: "≥⃒",
    nvgt: ">⃒",
    nvinfin: "⧞",
    nvlArr: "⤂",
    nvle: "≤⃒",
    nvlt: "<⃒",
    nvltrie: "⊴⃒",
    nvrArr: "⤃",
    nvrtrie: "⊵⃒",
    nvsim: "∼⃒",
    nwArr: "⇖",
    nwarhk: "⤣",
    nwarr: "↖",
    nwarrow: "↖",
    nwnear: "⤧",
    oS: "Ⓢ",
    oacute: "ó",
    oast: "⊛",
    ocir: "⊚",
    ocirc: "ô",
    ocy: "о",
    odash: "⊝",
    odblac: "ő",
    odiv: "⨸",
    odot: "⊙",
    odsold: "⦼",
    oelig: "œ",
    ofcir: "⦿",
    ofr: "𝔬",
    ogon: "˛",
    ograve: "ò",
    ogt: "⧁",
    ohbar: "⦵",
    ohm: "Ω",
    oint: "∮",
    olarr: "↺",
    olcir: "⦾",
    olcross: "⦻",
    oline: "‾",
    olt: "⧀",
    omacr: "ō",
    omega: "ω",
    omicron: "ο",
    omid: "⦶",
    ominus: "⊖",
    oopf: "𝕠",
    opar: "⦷",
    operp: "⦹",
    oplus: "⊕",
    or: "∨",
    orarr: "↻",
    ord: "⩝",
    order: "ℴ",
    orderof: "ℴ",
    ordf: "ª",
    ordm: "º",
    origof: "⊶",
    oror: "⩖",
    orslope: "⩗",
    orv: "⩛",
    oscr: "ℴ",
    oslash: "ø",
    osol: "⊘",
    otilde: "õ",
    otimes: "⊗",
    otimesas: "⨶",
    ouml: "ö",
    ovbar: "⌽",
    par: "∥",
    para: "¶",
    parallel: "∥",
    parsim: "⫳",
    parsl: "⫽",
    part: "∂",
    pcy: "п",
    percnt: "%",
    period: ".",
    permil: "‰",
    perp: "⊥",
    pertenk: "‱",
    pfr: "𝔭",
    phi: "φ",
    phiv: "ϕ",
    phmmat: "ℳ",
    phone: "☎",
    pi: "π",
    pitchfork: "⋔",
    piv: "ϖ",
    planck: "ℏ",
    planckh: "ℎ",
    plankv: "ℏ",
    plus: "+",
    plusacir: "⨣",
    plusb: "⊞",
    pluscir: "⨢",
    plusdo: "∔",
    plusdu: "⨥",
    pluse: "⩲",
    plusmn: "±",
    plussim: "⨦",
    plustwo: "⨧",
    pm: "±",
    pointint: "⨕",
    popf: "𝕡",
    pound: "£",
    pr: "≺",
    prE: "⪳",
    prap: "⪷",
    prcue: "≼",
    pre: "⪯",
    prec: "≺",
    precapprox: "⪷",
    preccurlyeq: "≼",
    preceq: "⪯",
    precnapprox: "⪹",
    precneqq: "⪵",
    precnsim: "⋨",
    precsim: "≾",
    prime: "′",
    primes: "ℙ",
    prnE: "⪵",
    prnap: "⪹",
    prnsim: "⋨",
    prod: "∏",
    profalar: "⌮",
    profline: "⌒",
    profsurf: "⌓",
    prop: "∝",
    propto: "∝",
    prsim: "≾",
    prurel: "⊰",
    pscr: "𝓅",
    psi: "ψ",
    puncsp: " ",
    qfr: "𝔮",
    qint: "⨌",
    qopf: "𝕢",
    qprime: "⁗",
    qscr: "𝓆",
    quaternions: "ℍ",
    quatint: "⨖",
    quest: "?",
    questeq: "≟",
    quot: '"',
    rAarr: "⇛",
    rArr: "⇒",
    rAtail: "⤜",
    rBarr: "⤏",
    rHar: "⥤",
    race: "∽̱",
    racute: "ŕ",
    radic: "√",
    raemptyv: "⦳",
    rang: "⟩",
    rangd: "⦒",
    range: "⦥",
    rangle: "⟩",
    raquo: "»",
    rarr: "→",
    rarrap: "⥵",
    rarrb: "⇥",
    rarrbfs: "⤠",
    rarrc: "⤳",
    rarrfs: "⤞",
    rarrhk: "↪",
    rarrlp: "↬",
    rarrpl: "⥅",
    rarrsim: "⥴",
    rarrtl: "↣",
    rarrw: "↝",
    ratail: "⤚",
    ratio: "∶",
    rationals: "ℚ",
    rbarr: "⤍",
    rbbrk: "❳",
    rbrace: "}",
    rbrack: "]",
    rbrke: "⦌",
    rbrksld: "⦎",
    rbrkslu: "⦐",
    rcaron: "ř",
    rcedil: "ŗ",
    rceil: "⌉",
    rcub: "}",
    rcy: "р",
    rdca: "⤷",
    rdldhar: "⥩",
    rdquo: "”",
    rdquor: "”",
    rdsh: "↳",
    real: "ℜ",
    realine: "ℛ",
    realpart: "ℜ",
    reals: "ℝ",
    rect: "▭",
    reg: "®",
    rfisht: "⥽",
    rfloor: "⌋",
    rfr: "𝔯",
    rhard: "⇁",
    rharu: "⇀",
    rharul: "⥬",
    rho: "ρ",
    rhov: "ϱ",
    rightarrow: "→",
    rightarrowtail: "↣",
    rightharpoondown: "⇁",
    rightharpoonup: "⇀",
    rightleftarrows: "⇄",
    rightleftharpoons: "⇌",
    rightrightarrows: "⇉",
    rightsquigarrow: "↝",
    rightthreetimes: "⋌",
    ring: "˚",
    risingdotseq: "≓",
    rlarr: "⇄",
    rlhar: "⇌",
    rlm: "‏",
    rmoust: "⎱",
    rmoustache: "⎱",
    rnmid: "⫮",
    roang: "⟭",
    roarr: "⇾",
    robrk: "⟧",
    ropar: "⦆",
    ropf: "𝕣",
    roplus: "⨮",
    rotimes: "⨵",
    rpar: ")",
    rpargt: "⦔",
    rppolint: "⨒",
    rrarr: "⇉",
    rsaquo: "›",
    rscr: "𝓇",
    rsh: "↱",
    rsqb: "]",
    rsquo: "’",
    rsquor: "’",
    rthree: "⋌",
    rtimes: "⋊",
    rtri: "▹",
    rtrie: "⊵",
    rtrif: "▸",
    rtriltri: "⧎",
    ruluhar: "⥨",
    rx: "℞",
    sacute: "ś",
    sbquo: "‚",
    sc: "≻",
    scE: "⪴",
    scap: "⪸",
    scaron: "š",
    sccue: "≽",
    sce: "⪰",
    scedil: "ş",
    scirc: "ŝ",
    scnE: "⪶",
    scnap: "⪺",
    scnsim: "⋩",
    scpolint: "⨓",
    scsim: "≿",
    scy: "с",
    sdot: "⋅",
    sdotb: "⊡",
    sdote: "⩦",
    seArr: "⇘",
    searhk: "⤥",
    searr: "↘",
    searrow: "↘",
    sect: "§",
    semi: ";",
    seswar: "⤩",
    setminus: "∖",
    setmn: "∖",
    sext: "✶",
    sfr: "𝔰",
    sfrown: "⌢",
    sharp: "♯",
    shchcy: "щ",
    shcy: "ш",
    shortmid: "∣",
    shortparallel: "∥",
    shy: "­",
    sigma: "σ",
    sigmaf: "ς",
    sigmav: "ς",
    sim: "∼",
    simdot: "⩪",
    sime: "≃",
    simeq: "≃",
    simg: "⪞",
    simgE: "⪠",
    siml: "⪝",
    simlE: "⪟",
    simne: "≆",
    simplus: "⨤",
    simrarr: "⥲",
    slarr: "←",
    smallsetminus: "∖",
    smashp: "⨳",
    smeparsl: "⧤",
    smid: "∣",
    smile: "⌣",
    smt: "⪪",
    smte: "⪬",
    smtes: "⪬︀",
    softcy: "ь",
    sol: "/",
    solb: "⧄",
    solbar: "⌿",
    sopf: "𝕤",
    spades: "♠",
    spadesuit: "♠",
    spar: "∥",
    sqcap: "⊓",
    sqcaps: "⊓︀",
    sqcup: "⊔",
    sqcups: "⊔︀",
    sqsub: "⊏",
    sqsube: "⊑",
    sqsubset: "⊏",
    sqsubseteq: "⊑",
    sqsup: "⊐",
    sqsupe: "⊒",
    sqsupset: "⊐",
    sqsupseteq: "⊒",
    squ: "□",
    square: "□",
    squarf: "▪",
    squf: "▪",
    srarr: "→",
    sscr: "𝓈",
    ssetmn: "∖",
    ssmile: "⌣",
    sstarf: "⋆",
    star: "☆",
    starf: "★",
    straightepsilon: "ϵ",
    straightphi: "ϕ",
    strns: "¯",
    sub: "⊂",
    subE: "⫅",
    subdot: "⪽",
    sube: "⊆",
    subedot: "⫃",
    submult: "⫁",
    subnE: "⫋",
    subne: "⊊",
    subplus: "⪿",
    subrarr: "⥹",
    subset: "⊂",
    subseteq: "⊆",
    subseteqq: "⫅",
    subsetneq: "⊊",
    subsetneqq: "⫋",
    subsim: "⫇",
    subsub: "⫕",
    subsup: "⫓",
    succ: "≻",
    succapprox: "⪸",
    succcurlyeq: "≽",
    succeq: "⪰",
    succnapprox: "⪺",
    succneqq: "⪶",
    succnsim: "⋩",
    succsim: "≿",
    sum: "∑",
    sung: "♪",
    sup1: "¹",
    sup2: "²",
    sup3: "³",
    sup: "⊃",
    supE: "⫆",
    supdot: "⪾",
    supdsub: "⫘",
    supe: "⊇",
    supedot: "⫄",
    suphsol: "⟉",
    suphsub: "⫗",
    suplarr: "⥻",
    supmult: "⫂",
    supnE: "⫌",
    supne: "⊋",
    supplus: "⫀",
    supset: "⊃",
    supseteq: "⊇",
    supseteqq: "⫆",
    supsetneq: "⊋",
    supsetneqq: "⫌",
    supsim: "⫈",
    supsub: "⫔",
    supsup: "⫖",
    swArr: "⇙",
    swarhk: "⤦",
    swarr: "↙",
    swarrow: "↙",
    swnwar: "⤪",
    szlig: "ß",
    target: "⌖",
    tau: "τ",
    tbrk: "⎴",
    tcaron: "ť",
    tcedil: "ţ",
    tcy: "т",
    tdot: "⃛",
    telrec: "⌕",
    tfr: "𝔱",
    there4: "∴",
    therefore: "∴",
    theta: "θ",
    thetasym: "ϑ",
    thetav: "ϑ",
    thickapprox: "≈",
    thicksim: "∼",
    thinsp: " ",
    thkap: "≈",
    thksim: "∼",
    thorn: "þ",
    tilde: "˜",
    times: "×",
    timesb: "⊠",
    timesbar: "⨱",
    timesd: "⨰",
    tint: "∭",
    toea: "⤨",
    top: "⊤",
    topbot: "⌶",
    topcir: "⫱",
    topf: "𝕥",
    topfork: "⫚",
    tosa: "⤩",
    tprime: "‴",
    trade: "™",
    triangle: "▵",
    triangledown: "▿",
    triangleleft: "◃",
    trianglelefteq: "⊴",
    triangleq: "≜",
    triangleright: "▹",
    trianglerighteq: "⊵",
    tridot: "◬",
    trie: "≜",
    triminus: "⨺",
    triplus: "⨹",
    trisb: "⧍",
    tritime: "⨻",
    trpezium: "⏢",
    tscr: "𝓉",
    tscy: "ц",
    tshcy: "ћ",
    tstrok: "ŧ",
    twixt: "≬",
    twoheadleftarrow: "↞",
    twoheadrightarrow: "↠",
    uArr: "⇑",
    uHar: "⥣",
    uacute: "ú",
    uarr: "↑",
    ubrcy: "ў",
    ubreve: "ŭ",
    ucirc: "û",
    ucy: "у",
    udarr: "⇅",
    udblac: "ű",
    udhar: "⥮",
    ufisht: "⥾",
    ufr: "𝔲",
    ugrave: "ù",
    uharl: "↿",
    uharr: "↾",
    uhblk: "▀",
    ulcorn: "⌜",
    ulcorner: "⌜",
    ulcrop: "⌏",
    ultri: "◸",
    umacr: "ū",
    uml: "¨",
    uogon: "ų",
    uopf: "𝕦",
    uparrow: "↑",
    updownarrow: "↕",
    upharpoonleft: "↿",
    upharpoonright: "↾",
    uplus: "⊎",
    upsi: "υ",
    upsih: "ϒ",
    upsilon: "υ",
    upuparrows: "⇈",
    urcorn: "⌝",
    urcorner: "⌝",
    urcrop: "⌎",
    uring: "ů",
    urtri: "◹",
    uscr: "𝓊",
    utdot: "⋰",
    utilde: "ũ",
    utri: "▵",
    utrif: "▴",
    uuarr: "⇈",
    uuml: "ü",
    uwangle: "⦧",
    vArr: "⇕",
    vBar: "⫨",
    vBarv: "⫩",
    vDash: "⊨",
    vangrt: "⦜",
    varepsilon: "ϵ",
    varkappa: "ϰ",
    varnothing: "∅",
    varphi: "ϕ",
    varpi: "ϖ",
    varpropto: "∝",
    varr: "↕",
    varrho: "ϱ",
    varsigma: "ς",
    varsubsetneq: "⊊︀",
    varsubsetneqq: "⫋︀",
    varsupsetneq: "⊋︀",
    varsupsetneqq: "⫌︀",
    vartheta: "ϑ",
    vartriangleleft: "⊲",
    vartriangleright: "⊳",
    vcy: "в",
    vdash: "⊢",
    vee: "∨",
    veebar: "⊻",
    veeeq: "≚",
    vellip: "⋮",
    verbar: "|",
    vert: "|",
    vfr: "𝔳",
    vltri: "⊲",
    vnsub: "⊂⃒",
    vnsup: "⊃⃒",
    vopf: "𝕧",
    vprop: "∝",
    vrtri: "⊳",
    vscr: "𝓋",
    vsubnE: "⫋︀",
    vsubne: "⊊︀",
    vsupnE: "⫌︀",
    vsupne: "⊋︀",
    vzigzag: "⦚",
    wcirc: "ŵ",
    wedbar: "⩟",
    wedge: "∧",
    wedgeq: "≙",
    weierp: "℘",
    wfr: "𝔴",
    wopf: "𝕨",
    wp: "℘",
    wr: "≀",
    wreath: "≀",
    wscr: "𝓌",
    xcap: "⋂",
    xcirc: "◯",
    xcup: "⋃",
    xdtri: "▽",
    xfr: "𝔵",
    xhArr: "⟺",
    xharr: "⟷",
    xi: "ξ",
    xlArr: "⟸",
    xlarr: "⟵",
    xmap: "⟼",
    xnis: "⋻",
    xodot: "⨀",
    xopf: "𝕩",
    xoplus: "⨁",
    xotime: "⨂",
    xrArr: "⟹",
    xrarr: "⟶",
    xscr: "𝓍",
    xsqcup: "⨆",
    xuplus: "⨄",
    xutri: "△",
    xvee: "⋁",
    xwedge: "⋀",
    yacute: "ý",
    yacy: "я",
    ycirc: "ŷ",
    ycy: "ы",
    yen: "¥",
    yfr: "𝔶",
    yicy: "ї",
    yopf: "𝕪",
    yscr: "𝓎",
    yucy: "ю",
    yuml: "ÿ",
    zacute: "ź",
    zcaron: "ž",
    zcy: "з",
    zdot: "ż",
    zeetrf: "ℨ",
    zeta: "ζ",
    zfr: "𝔷",
    zhcy: "ж",
    zigrarr: "⇝",
    zopf: "𝕫",
    zscr: "𝓏",
    zwj: "‍",
    zwnj: "‌",
  },
  yn = {}.hasOwnProperty;
function vn(e) {
  return !!yn.call(bn, e) && bn[e];
}
const kn = {
  name: "characterReference",
  tokenize: function (e, n, t) {
    const r = this;
    let o,
      l,
      a = 0;
    return function (n) {
      return (
        e.enter("characterReference"),
        e.enter("characterReferenceMarker"),
        e.consume(n),
        e.exit("characterReferenceMarker"),
        i
      );
    };
    function i(n) {
      return 35 === n
        ? (e.enter("characterReferenceMarkerNumeric"),
          e.consume(n),
          e.exit("characterReferenceMarkerNumeric"),
          s)
        : (e.enter("characterReferenceValue"), (o = 31), (l = Ie), u(n));
    }
    function s(n) {
      return 88 === n || 120 === n
        ? (e.enter("characterReferenceMarkerHexadecimal"),
          e.consume(n),
          e.exit("characterReferenceMarkerHexadecimal"),
          e.enter("characterReferenceValue"),
          (o = 6),
          (l = De),
          u)
        : (e.enter("characterReferenceValue"), (o = 7), (l = Re), u(n));
    }
    function u(i) {
      let s;
      return 59 === i && a
        ? ((s = e.exit("characterReferenceValue")),
          l !== Ie || vn(r.sliceSerialize(s))
            ? (e.enter("characterReferenceMarker"),
              e.consume(i),
              e.exit("characterReferenceMarker"),
              e.exit("characterReference"),
              n)
            : t(i))
        : l(i) && a++ < o
        ? (e.consume(i), u)
        : t(i);
    }
  },
};
const xn = {
  name: "codeFenced",
  tokenize: function (e, n, t) {
    const r = this,
      o = {
        tokenize: function (e, n, t) {
          let r = 0;
          return We(
            e,
            o,
            "linePrefix",
            this.parser.constructs.disable.null.includes("codeIndented")
              ? void 0
              : 4
          );
          function o(n) {
            return (
              e.enter("codeFencedFence"),
              e.enter("codeFencedFenceSequence"),
              l(n)
            );
          }
          function l(n) {
            return n === s
              ? (e.consume(n), r++, l)
              : r < u
              ? t(n)
              : (e.exit("codeFencedFenceSequence"), We(e, a, "whitespace")(n));
          }
          function a(r) {
            return null === r || qe(r)
              ? (e.exit("codeFencedFence"), n(r))
              : t(r);
          }
        },
        partial: !0,
      },
      l = {
        tokenize: function (e, n, t) {
          const r = this;
          return o;
          function o(n) {
            return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), l;
          }
          function l(e) {
            return r.parser.lazy[r.now().line] ? t(e) : n(e);
          }
        },
        partial: !0,
      },
      a = this.events[this.events.length - 1],
      i =
        a && "linePrefix" === a[1].type
          ? a[2].sliceSerialize(a[1], !0).length
          : 0;
    let s,
      u = 0;
    return function (n) {
      return (
        e.enter("codeFenced"),
        e.enter("codeFencedFence"),
        e.enter("codeFencedFenceSequence"),
        (s = n),
        c(n)
      );
    };
    function c(n) {
      return n === s
        ? (e.consume(n), u++, c)
        : (e.exit("codeFencedFenceSequence"),
          u < 3 ? t(n) : We(e, d, "whitespace")(n));
    }
    function d(n) {
      return null === n || qe(n)
        ? g(n)
        : (e.enter("codeFencedFenceInfo"),
          e.enter("chunkString", { contentType: "string" }),
          f(n));
    }
    function f(n) {
      return null === n || Ue(n)
        ? (e.exit("chunkString"),
          e.exit("codeFencedFenceInfo"),
          We(e, p, "whitespace")(n))
        : 96 === n && n === s
        ? t(n)
        : (e.consume(n), f);
    }
    function p(n) {
      return null === n || qe(n)
        ? g(n)
        : (e.enter("codeFencedFenceMeta"),
          e.enter("chunkString", { contentType: "string" }),
          h(n));
    }
    function h(n) {
      return null === n || qe(n)
        ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), g(n))
        : 96 === n && n === s
        ? t(n)
        : (e.consume(n), h);
    }
    function g(t) {
      return e.exit("codeFencedFence"), r.interrupt ? n(t) : m(t);
    }
    function m(n) {
      return null === n
        ? y(n)
        : qe(n)
        ? e.attempt(
            l,
            e.attempt(o, y, i ? We(e, m, "linePrefix", i + 1) : m),
            y
          )(n)
        : (e.enter("codeFlowValue"), b(n));
    }
    function b(n) {
      return null === n || qe(n)
        ? (e.exit("codeFlowValue"), m(n))
        : (e.consume(n), b);
    }
    function y(t) {
      return e.exit("codeFenced"), n(t);
    }
  },
  concrete: !0,
};
const wn = {
    name: "codeIndented",
    tokenize: function (e, n, t) {
      const r = this;
      return function (n) {
        return e.enter("codeIndented"), We(e, o, "linePrefix", 5)(n);
      };
      function o(e) {
        const n = r.events[r.events.length - 1];
        return n &&
          "linePrefix" === n[1].type &&
          n[2].sliceSerialize(n[1], !0).length >= 4
          ? l(e)
          : t(e);
      }
      function l(n) {
        return null === n
          ? i(n)
          : qe(n)
          ? e.attempt(Sn, l, i)(n)
          : (e.enter("codeFlowValue"), a(n));
      }
      function a(n) {
        return null === n || qe(n)
          ? (e.exit("codeFlowValue"), l(n))
          : (e.consume(n), a);
      }
      function i(t) {
        return e.exit("codeIndented"), n(t);
      }
    },
  },
  Sn = {
    tokenize: function (e, n, t) {
      const r = this;
      return o;
      function o(n) {
        return r.parser.lazy[r.now().line]
          ? t(n)
          : qe(n)
          ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), o)
          : We(e, l, "linePrefix", 5)(n);
      }
      function l(e) {
        const l = r.events[r.events.length - 1];
        return l &&
          "linePrefix" === l[1].type &&
          l[2].sliceSerialize(l[1], !0).length >= 4
          ? n(e)
          : qe(e)
          ? o(e)
          : t(e);
      }
    },
    partial: !0,
  };
function En(e, n, t, r, o, l, a, i, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let c = 0;
  return function (n) {
    if (60 === n)
      return e.enter(r), e.enter(o), e.enter(l), e.consume(n), e.exit(l), d;
    return null === n || 41 === n || Me(n)
      ? t(n)
      : (e.enter(r),
        e.enter(a),
        e.enter(i),
        e.enter("chunkString", { contentType: "string" }),
        h(n));
  };
  function d(t) {
    return 62 === t
      ? (e.enter(l), e.consume(t), e.exit(l), e.exit(o), e.exit(r), n)
      : (e.enter(i), e.enter("chunkString", { contentType: "string" }), f(t));
  }
  function f(n) {
    return 62 === n
      ? (e.exit("chunkString"), e.exit(i), d(n))
      : null === n || 60 === n || qe(n)
      ? t(n)
      : (e.consume(n), 92 === n ? p : f);
  }
  function p(n) {
    return 60 === n || 62 === n || 92 === n ? (e.consume(n), f) : f(n);
  }
  function h(o) {
    return 40 === o
      ? ++c > u
        ? t(o)
        : (e.consume(o), h)
      : 41 === o
      ? c--
        ? (e.consume(o), h)
        : (e.exit("chunkString"), e.exit(i), e.exit(a), e.exit(r), n(o))
      : null === o || Ue(o)
      ? c
        ? t(o)
        : (e.exit("chunkString"), e.exit(i), e.exit(a), e.exit(r), n(o))
      : Me(o)
      ? t(o)
      : (e.consume(o), 92 === o ? g : h);
  }
  function g(n) {
    return 40 === n || 41 === n || 92 === n ? (e.consume(n), h) : h(n);
  }
}
function Cn(e, n, t, r, o, l) {
  const a = this;
  let i,
    s = 0;
  return function (n) {
    return e.enter(r), e.enter(o), e.consume(n), e.exit(o), e.enter(l), u;
  };
  function u(d) {
    return null === d ||
      91 === d ||
      (93 === d && !i) ||
      (94 === d && !s && "_hiddenFootnoteSupport" in a.parser.constructs) ||
      s > 999
      ? t(d)
      : 93 === d
      ? (e.exit(l), e.enter(o), e.consume(d), e.exit(o), e.exit(r), n)
      : qe(d)
      ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), u)
      : (e.enter("chunkString", { contentType: "string" }), c(d));
  }
  function c(n) {
    return null === n || 91 === n || 93 === n || qe(n) || s++ > 999
      ? (e.exit("chunkString"), u(n))
      : (e.consume(n), (i = i || !Be(n)), 92 === n ? d : c);
  }
  function d(n) {
    return 91 === n || 92 === n || 93 === n ? (e.consume(n), s++, c) : c(n);
  }
}
function Nn(e, n, t, r, o, l) {
  let a;
  return function (n) {
    return (
      e.enter(r),
      e.enter(o),
      e.consume(n),
      e.exit(o),
      (a = 40 === n ? 41 : n),
      i
    );
  };
  function i(t) {
    return t === a
      ? (e.enter(o), e.consume(t), e.exit(o), e.exit(r), n)
      : (e.enter(l), s(t));
  }
  function s(n) {
    return n === a
      ? (e.exit(l), i(a))
      : null === n
      ? t(n)
      : qe(n)
      ? (e.enter("lineEnding"),
        e.consume(n),
        e.exit("lineEnding"),
        We(e, s, "linePrefix"))
      : (e.enter("chunkString", { contentType: "string" }), u(n));
  }
  function u(n) {
    return n === a || null === n || qe(n)
      ? (e.exit("chunkString"), s(n))
      : (e.consume(n), 92 === n ? c : u);
  }
  function c(n) {
    return n === a || 92 === n ? (e.consume(n), u) : u(n);
  }
}
function Ln(e, n) {
  let t;
  return function r(o) {
    if (qe(o))
      return (
        e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), (t = !0), r
      );
    return Be(o) ? We(e, r, t ? "linePrefix" : "lineSuffix")(o) : n(o);
  };
}
function An(e) {
  return e
    .replace(/[\t\n\r ]+/g, " ")
    .replace(/^ | $/g, "")
    .toLowerCase()
    .toUpperCase();
}
const Tn = {
    name: "definition",
    tokenize: function (e, n, t) {
      const r = this;
      let o;
      return function (n) {
        return (
          e.enter("definition"),
          Cn.call(
            r,
            e,
            l,
            t,
            "definitionLabel",
            "definitionLabelMarker",
            "definitionLabelString"
          )(n)
        );
      };
      function l(n) {
        return (
          (o = An(
            r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
          )),
          58 === n
            ? (e.enter("definitionMarker"),
              e.consume(n),
              e.exit("definitionMarker"),
              Ln(
                e,
                En(
                  e,
                  e.attempt(Pn, We(e, a, "whitespace"), We(e, a, "whitespace")),
                  t,
                  "definitionDestination",
                  "definitionDestinationLiteral",
                  "definitionDestinationLiteralMarker",
                  "definitionDestinationRaw",
                  "definitionDestinationString"
                )
              ))
            : t(n)
        );
      }
      function a(l) {
        return null === l || qe(l)
          ? (e.exit("definition"),
            r.parser.defined.includes(o) || r.parser.defined.push(o),
            n(l))
          : t(l);
      }
    },
  },
  Pn = {
    tokenize: function (e, n, t) {
      return function (n) {
        return Ue(n) ? Ln(e, r)(n) : t(n);
      };
      function r(n) {
        return 34 === n || 39 === n || 40 === n
          ? Nn(
              e,
              We(e, o, "whitespace"),
              t,
              "definitionTitle",
              "definitionTitleMarker",
              "definitionTitleString"
            )(n)
          : t(n);
      }
      function o(e) {
        return null === e || qe(e) ? n(e) : t(e);
      }
    },
    partial: !0,
  };
const Fn = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul",
  ],
  On = ["pre", "script", "style", "textarea"],
  _n = {
    name: "htmlFlow",
    tokenize: function (e, n, t) {
      const r = this;
      let o, l, a, i, s;
      return function (n) {
        return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(n), u;
      };
      function u(i) {
        return 33 === i
          ? (e.consume(i), c)
          : 47 === i
          ? (e.consume(i), p)
          : 63 === i
          ? (e.consume(i), (o = 3), r.interrupt ? n : R)
          : _e(i)
          ? (e.consume(i), (a = String.fromCharCode(i)), (l = !0), h)
          : t(i);
      }
      function c(l) {
        return 45 === l
          ? (e.consume(l), (o = 2), d)
          : 91 === l
          ? (e.consume(l), (o = 5), (a = "CDATA["), (i = 0), f)
          : _e(l)
          ? (e.consume(l), (o = 4), r.interrupt ? n : R)
          : t(l);
      }
      function d(o) {
        return 45 === o ? (e.consume(o), r.interrupt ? n : R) : t(o);
      }
      function f(o) {
        return o === a.charCodeAt(i++)
          ? (e.consume(o), i === a.length ? (r.interrupt ? n : N) : f)
          : t(o);
      }
      function p(n) {
        return _e(n) ? (e.consume(n), (a = String.fromCharCode(n)), h) : t(n);
      }
      function h(i) {
        return null === i || 47 === i || 62 === i || Ue(i)
          ? 47 !== i && l && On.includes(a.toLowerCase())
            ? ((o = 1), r.interrupt ? n(i) : N(i))
            : Fn.includes(a.toLowerCase())
            ? ((o = 6),
              47 === i ? (e.consume(i), g) : r.interrupt ? n(i) : N(i))
            : ((o = 7),
              r.interrupt && !r.parser.lazy[r.now().line]
                ? t(i)
                : l
                ? b(i)
                : m(i))
          : 45 === i || Ie(i)
          ? (e.consume(i), (a += String.fromCharCode(i)), h)
          : t(i);
      }
      function g(o) {
        return 62 === o ? (e.consume(o), r.interrupt ? n : N) : t(o);
      }
      function m(n) {
        return Be(n) ? (e.consume(n), m) : E(n);
      }
      function b(n) {
        return 47 === n
          ? (e.consume(n), E)
          : 58 === n || 95 === n || _e(n)
          ? (e.consume(n), y)
          : Be(n)
          ? (e.consume(n), b)
          : E(n);
      }
      function y(n) {
        return 45 === n || 46 === n || 58 === n || 95 === n || Ie(n)
          ? (e.consume(n), y)
          : v(n);
      }
      function v(n) {
        return 61 === n ? (e.consume(n), k) : Be(n) ? (e.consume(n), v) : b(n);
      }
      function k(n) {
        return null === n || 60 === n || 61 === n || 62 === n || 96 === n
          ? t(n)
          : 34 === n || 39 === n
          ? (e.consume(n), (s = n), x)
          : Be(n)
          ? (e.consume(n), k)
          : ((s = null), w(n));
      }
      function x(n) {
        return null === n || qe(n)
          ? t(n)
          : n === s
          ? (e.consume(n), S)
          : (e.consume(n), x);
      }
      function w(n) {
        return null === n ||
          34 === n ||
          39 === n ||
          60 === n ||
          61 === n ||
          62 === n ||
          96 === n ||
          Ue(n)
          ? v(n)
          : (e.consume(n), w);
      }
      function S(e) {
        return 47 === e || 62 === e || Be(e) ? b(e) : t(e);
      }
      function E(n) {
        return 62 === n ? (e.consume(n), C) : t(n);
      }
      function C(n) {
        return Be(n) ? (e.consume(n), C) : null === n || qe(n) ? N(n) : t(n);
      }
      function N(n) {
        return 45 === n && 2 === o
          ? (e.consume(n), P)
          : 60 === n && 1 === o
          ? (e.consume(n), F)
          : 62 === n && 4 === o
          ? (e.consume(n), D)
          : 63 === n && 3 === o
          ? (e.consume(n), R)
          : 93 === n && 5 === o
          ? (e.consume(n), _)
          : !qe(n) || (6 !== o && 7 !== o)
          ? null === n || qe(n)
            ? L(n)
            : (e.consume(n), N)
          : e.check(Rn, D, L)(n);
      }
      function L(n) {
        return e.exit("htmlFlowData"), A(n);
      }
      function A(n) {
        return null === n
          ? I(n)
          : qe(n)
          ? e.attempt({ tokenize: T, partial: !0 }, A, I)(n)
          : (e.enter("htmlFlowData"), N(n));
      }
      function T(e, n, t) {
        return function (n) {
          return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), o;
        };
        function o(e) {
          return r.parser.lazy[r.now().line] ? t(e) : n(e);
        }
      }
      function P(n) {
        return 45 === n ? (e.consume(n), R) : N(n);
      }
      function F(n) {
        return 47 === n ? (e.consume(n), (a = ""), O) : N(n);
      }
      function O(n) {
        return 62 === n && On.includes(a.toLowerCase())
          ? (e.consume(n), D)
          : _e(n) && a.length < 8
          ? (e.consume(n), (a += String.fromCharCode(n)), O)
          : N(n);
      }
      function _(n) {
        return 93 === n ? (e.consume(n), R) : N(n);
      }
      function R(n) {
        return 62 === n
          ? (e.consume(n), D)
          : 45 === n && 2 === o
          ? (e.consume(n), R)
          : N(n);
      }
      function D(n) {
        return null === n || qe(n)
          ? (e.exit("htmlFlowData"), I(n))
          : (e.consume(n), D);
      }
      function I(t) {
        return e.exit("htmlFlow"), n(t);
      }
    },
    resolveTo: function (e) {
      let n = e.length;
      for (; n-- && ("enter" !== e[n][0] || "htmlFlow" !== e[n][1].type); );
      n > 1 &&
        "linePrefix" === e[n - 2][1].type &&
        ((e[n][1].start = e[n - 2][1].start),
        (e[n + 1][1].start = e[n - 2][1].start),
        e.splice(n - 2, 2));
      return e;
    },
    concrete: !0,
  },
  Rn = {
    tokenize: function (e, n, t) {
      return function (r) {
        return (
          e.exit("htmlFlowData"),
          e.enter("lineEndingBlank"),
          e.consume(r),
          e.exit("lineEndingBlank"),
          e.attempt(Ke, n, t)
        );
      };
    },
    partial: !0,
  };
const Dn = {
    name: "labelEnd",
    tokenize: function (e, n, t) {
      const r = this;
      let o,
        l,
        a = r.events.length;
      for (; a--; )
        if (
          ("labelImage" === r.events[a][1].type ||
            "labelLink" === r.events[a][1].type) &&
          !r.events[a][1]._balanced
        ) {
          o = r.events[a][1];
          break;
        }
      return function (n) {
        return o
          ? o._inactive
            ? s(n)
            : ((l = r.parser.defined.includes(
                An(r.sliceSerialize({ start: o.end, end: r.now() }))
              )),
              e.enter("labelEnd"),
              e.enter("labelMarker"),
              e.consume(n),
              e.exit("labelMarker"),
              e.exit("labelEnd"),
              i)
          : t(n);
      };
      function i(t) {
        return 40 === t
          ? e.attempt(In, n, l ? n : s)(t)
          : 91 === t
          ? e.attempt(jn, n, l ? e.attempt(zn, n, s) : s)(t)
          : l
          ? n(t)
          : s(t);
      }
      function s(e) {
        return (o._balanced = !0), t(e);
      }
    },
    resolveTo: function (e, n) {
      let t,
        r,
        o,
        l,
        a = e.length,
        i = 0;
      for (; a--; )
        if (((t = e[a][1]), r)) {
          if ("link" === t.type || ("labelLink" === t.type && t._inactive))
            break;
          "enter" === e[a][0] && "labelLink" === t.type && (t._inactive = !0);
        } else if (o) {
          if (
            "enter" === e[a][0] &&
            ("labelImage" === t.type || "labelLink" === t.type) &&
            !t._balanced &&
            ((r = a), "labelLink" !== t.type)
          ) {
            i = 2;
            break;
          }
        } else "labelEnd" === t.type && (o = a);
      const s = {
          type: "labelLink" === e[r][1].type ? "link" : "image",
          start: Object.assign({}, e[r][1].start),
          end: Object.assign({}, e[e.length - 1][1].end),
        },
        u = {
          type: "label",
          start: Object.assign({}, e[r][1].start),
          end: Object.assign({}, e[o][1].end),
        },
        c = {
          type: "labelText",
          start: Object.assign({}, e[r + i + 2][1].end),
          end: Object.assign({}, e[o - 2][1].start),
        };
      return (
        (l = [
          ["enter", s, n],
          ["enter", u, n],
        ]),
        (l = Ae(l, e.slice(r + 1, r + i + 3))),
        (l = Ae(l, [["enter", c, n]])),
        (l = Ae(
          l,
          un(n.parser.constructs.insideSpan.null, e.slice(r + i + 4, o - 3), n)
        )),
        (l = Ae(l, [["exit", c, n], e[o - 2], e[o - 1], ["exit", u, n]])),
        (l = Ae(l, e.slice(o + 1))),
        (l = Ae(l, [["exit", s, n]])),
        Le(e, r, e.length, l),
        e
      );
    },
    resolveAll: function (e) {
      let n,
        t = -1;
      for (; ++t < e.length; )
        (n = e[t][1]),
          ("labelImage" !== n.type &&
            "labelLink" !== n.type &&
            "labelEnd" !== n.type) ||
            (e.splice(t + 1, "labelImage" === n.type ? 4 : 2),
            (n.type = "data"),
            t++);
      return e;
    },
  },
  In = {
    tokenize: function (e, n, t) {
      return function (n) {
        return (
          e.enter("resource"),
          e.enter("resourceMarker"),
          e.consume(n),
          e.exit("resourceMarker"),
          Ln(e, r)
        );
      };
      function r(n) {
        return 41 === n
          ? a(n)
          : En(
              e,
              o,
              t,
              "resourceDestination",
              "resourceDestinationLiteral",
              "resourceDestinationLiteralMarker",
              "resourceDestinationRaw",
              "resourceDestinationString",
              32
            )(n);
      }
      function o(n) {
        return Ue(n) ? Ln(e, l)(n) : a(n);
      }
      function l(n) {
        return 34 === n || 39 === n || 40 === n
          ? Nn(
              e,
              Ln(e, a),
              t,
              "resourceTitle",
              "resourceTitleMarker",
              "resourceTitleString"
            )(n)
          : a(n);
      }
      function a(r) {
        return 41 === r
          ? (e.enter("resourceMarker"),
            e.consume(r),
            e.exit("resourceMarker"),
            e.exit("resource"),
            n)
          : t(r);
      }
    },
  },
  jn = {
    tokenize: function (e, n, t) {
      const r = this;
      return function (n) {
        return Cn.call(
          r,
          e,
          o,
          t,
          "reference",
          "referenceMarker",
          "referenceString"
        )(n);
      };
      function o(e) {
        return r.parser.defined.includes(
          An(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))
        )
          ? n(e)
          : t(e);
      }
    },
  },
  zn = {
    tokenize: function (e, n, t) {
      return function (n) {
        return (
          e.enter("reference"),
          e.enter("referenceMarker"),
          e.consume(n),
          e.exit("referenceMarker"),
          r
        );
      };
      function r(r) {
        return 93 === r
          ? (e.enter("referenceMarker"),
            e.consume(r),
            e.exit("referenceMarker"),
            e.exit("reference"),
            n)
          : t(r);
      }
    },
  };
const Mn = {
  name: "lineEnding",
  tokenize: function (e, n) {
    return function (t) {
      return (
        e.enter("lineEnding"),
        e.consume(t),
        e.exit("lineEnding"),
        We(e, n, "linePrefix")
      );
    };
  },
};
const Un = {
  name: "thematicBreak",
  tokenize: function (e, n, t) {
    let r,
      o = 0;
    return function (n) {
      return e.enter("thematicBreak"), (r = n), l(n);
    };
    function l(i) {
      return i === r
        ? (e.enter("thematicBreakSequence"), a(i))
        : Be(i)
        ? We(e, l, "whitespace")(i)
        : o < 3 || (null !== i && !qe(i))
        ? t(i)
        : (e.exit("thematicBreak"), n(i));
    }
    function a(n) {
      return n === r
        ? (e.consume(n), o++, a)
        : (e.exit("thematicBreakSequence"), l(n));
    }
  },
};
const qn = {
    name: "list",
    tokenize: function (e, n, t) {
      const r = this,
        o = r.events[r.events.length - 1];
      let l =
          o && "linePrefix" === o[1].type
            ? o[2].sliceSerialize(o[1], !0).length
            : 0,
        a = 0;
      return function (n) {
        const o =
          r.containerState.type ||
          (42 === n || 43 === n || 45 === n ? "listUnordered" : "listOrdered");
        if (
          "listUnordered" === o
            ? !r.containerState.marker || n === r.containerState.marker
            : Re(n)
        ) {
          if (
            (r.containerState.type ||
              ((r.containerState.type = o), e.enter(o, { _container: !0 })),
            "listUnordered" === o)
          )
            return (
              e.enter("listItemPrefix"),
              42 === n || 45 === n ? e.check(Un, t, s)(n) : s(n)
            );
          if (!r.interrupt || 49 === n)
            return e.enter("listItemPrefix"), e.enter("listItemValue"), i(n);
        }
        return t(n);
      };
      function i(n) {
        return Re(n) && ++a < 10
          ? (e.consume(n), i)
          : (!r.interrupt || a < 2) &&
            (r.containerState.marker
              ? n === r.containerState.marker
              : 41 === n || 46 === n)
          ? (e.exit("listItemValue"), s(n))
          : t(n);
      }
      function s(n) {
        return (
          e.enter("listItemMarker"),
          e.consume(n),
          e.exit("listItemMarker"),
          (r.containerState.marker = r.containerState.marker || n),
          e.check(Ke, r.interrupt ? t : u, e.attempt(Bn, d, c))
        );
      }
      function u(e) {
        return (r.containerState.initialBlankLine = !0), l++, d(e);
      }
      function c(n) {
        return Be(n)
          ? (e.enter("listItemPrefixWhitespace"),
            e.consume(n),
            e.exit("listItemPrefixWhitespace"),
            d)
          : t(n);
      }
      function d(t) {
        return (
          (r.containerState.size =
            l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
          n(t)
        );
      }
    },
    continuation: {
      tokenize: function (e, n, t) {
        const r = this;
        return (
          (r.containerState._closeFlow = void 0),
          e.check(
            Ke,
            function (t) {
              return (
                (r.containerState.furtherBlankLines =
                  r.containerState.furtherBlankLines ||
                  r.containerState.initialBlankLine),
                We(e, n, "listItemIndent", r.containerState.size + 1)(t)
              );
            },
            function (t) {
              if (r.containerState.furtherBlankLines || !Be(t))
                return (
                  (r.containerState.furtherBlankLines = void 0),
                  (r.containerState.initialBlankLine = void 0),
                  o(t)
                );
              return (
                (r.containerState.furtherBlankLines = void 0),
                (r.containerState.initialBlankLine = void 0),
                e.attempt(Hn, n, o)(t)
              );
            }
          )
        );
        function o(o) {
          return (
            (r.containerState._closeFlow = !0),
            (r.interrupt = void 0),
            We(
              e,
              e.attempt(qn, n, t),
              "linePrefix",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            )(o)
          );
        }
      },
    },
    exit: function (e) {
      e.exit(this.containerState.type);
    },
  },
  Bn = {
    tokenize: function (e, n, t) {
      const r = this;
      return We(
        e,
        function (e) {
          const o = r.events[r.events.length - 1];
          return !Be(e) && o && "listItemPrefixWhitespace" === o[1].type
            ? n(e)
            : t(e);
        },
        "listItemPrefixWhitespace",
        r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5
      );
    },
    partial: !0,
  },
  Hn = {
    tokenize: function (e, n, t) {
      const r = this;
      return We(
        e,
        function (e) {
          const o = r.events[r.events.length - 1];
          return o &&
            "listItemIndent" === o[1].type &&
            o[2].sliceSerialize(o[1], !0).length === r.containerState.size
            ? n(e)
            : t(e);
        },
        "listItemIndent",
        r.containerState.size + 1
      );
    },
    partial: !0,
  };
const $n = {
  name: "setextUnderline",
  tokenize: function (e, n, t) {
    const r = this;
    let o,
      l,
      a = r.events.length;
    for (; a--; )
      if (
        "lineEnding" !== r.events[a][1].type &&
        "linePrefix" !== r.events[a][1].type &&
        "content" !== r.events[a][1].type
      ) {
        l = "paragraph" === r.events[a][1].type;
        break;
      }
    return function (n) {
      if (!r.parser.lazy[r.now().line] && (r.interrupt || l))
        return (
          e.enter("setextHeadingLine"),
          e.enter("setextHeadingLineSequence"),
          (o = n),
          i(n)
        );
      return t(n);
    };
    function i(n) {
      return n === o
        ? (e.consume(n), i)
        : (e.exit("setextHeadingLineSequence"), We(e, s, "lineSuffix")(n));
    }
    function s(r) {
      return null === r || qe(r) ? (e.exit("setextHeadingLine"), n(r)) : t(r);
    }
  },
  resolveTo: function (e, n) {
    let t,
      r,
      o,
      l = e.length;
    for (; l--; )
      if ("enter" === e[l][0]) {
        if ("content" === e[l][1].type) {
          t = l;
          break;
        }
        "paragraph" === e[l][1].type && (r = l);
      } else
        "content" === e[l][1].type && e.splice(l, 1),
          o || "definition" !== e[l][1].type || (o = l);
    const a = {
      type: "setextHeading",
      start: Object.assign({}, e[r][1].start),
      end: Object.assign({}, e[e.length - 1][1].end),
    };
    (e[r][1].type = "setextHeadingText"),
      o
        ? (e.splice(r, 0, ["enter", a, n]),
          e.splice(o + 1, 0, ["exit", e[t][1], n]),
          (e[t][1].end = Object.assign({}, e[o][1].end)))
        : (e[t][1] = a);
    return e.push(["exit", a, n]), e;
  },
};
const Vn = {
    42: qn,
    43: qn,
    45: qn,
    48: qn,
    49: qn,
    50: qn,
    51: qn,
    52: qn,
    53: qn,
    54: qn,
    55: qn,
    56: qn,
    57: qn,
    62: gn,
  },
  Wn = { 91: Tn },
  Gn = { [-2]: wn, [-1]: wn, 32: wn },
  Qn = {
    35: {
      name: "headingAtx",
      tokenize: function (e, n, t) {
        const r = this;
        let o = 0;
        return function (n) {
          return e.enter("atxHeading"), e.enter("atxHeadingSequence"), l(n);
        };
        function l(i) {
          return 35 === i && o++ < 6
            ? (e.consume(i), l)
            : null === i || Ue(i)
            ? (e.exit("atxHeadingSequence"), r.interrupt ? n(i) : a(i))
            : t(i);
        }
        function a(t) {
          return 35 === t
            ? (e.enter("atxHeadingSequence"), i(t))
            : null === t || qe(t)
            ? (e.exit("atxHeading"), n(t))
            : Be(t)
            ? We(e, a, "whitespace")(t)
            : (e.enter("atxHeadingText"), s(t));
        }
        function i(n) {
          return 35 === n
            ? (e.consume(n), i)
            : (e.exit("atxHeadingSequence"), a(n));
        }
        function s(n) {
          return null === n || 35 === n || Ue(n)
            ? (e.exit("atxHeadingText"), a(n))
            : (e.consume(n), s);
        }
      },
      resolve: function (e, n) {
        let t,
          r,
          o = e.length - 2,
          l = 3;
        "whitespace" === e[l][1].type && (l += 2);
        o - 2 > l && "whitespace" === e[o][1].type && (o -= 2);
        "atxHeadingSequence" === e[o][1].type &&
          (l === o - 1 || (o - 4 > l && "whitespace" === e[o - 2][1].type)) &&
          (o -= l + 1 === o ? 2 : 4);
        o > l &&
          ((t = {
            type: "atxHeadingText",
            start: e[l][1].start,
            end: e[o][1].end,
          }),
          (r = {
            type: "chunkText",
            start: e[l][1].start,
            end: e[o][1].end,
            contentType: "text",
          }),
          Le(e, l, o - l + 1, [
            ["enter", t, n],
            ["enter", r, n],
            ["exit", r, n],
            ["exit", t, n],
          ]));
        return e;
      },
    },
    42: Un,
    45: [$n, Un],
    60: _n,
    61: $n,
    95: Un,
    96: xn,
    126: xn,
  },
  Yn = { 38: kn, 92: mn },
  Kn = {
    [-5]: Mn,
    [-4]: Mn,
    [-3]: Mn,
    33: {
      name: "labelStartImage",
      tokenize: function (e, n, t) {
        const r = this;
        return function (n) {
          return (
            e.enter("labelImage"),
            e.enter("labelImageMarker"),
            e.consume(n),
            e.exit("labelImageMarker"),
            o
          );
        };
        function o(n) {
          return 91 === n
            ? (e.enter("labelMarker"),
              e.consume(n),
              e.exit("labelMarker"),
              e.exit("labelImage"),
              l)
            : t(n);
        }
        function l(e) {
          return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
            ? t(e)
            : n(e);
        }
      },
      resolveAll: Dn.resolveAll,
    },
    38: kn,
    42: pn,
    60: [
      {
        name: "autolink",
        tokenize: function (e, n, t) {
          let r = 1;
          return function (n) {
            return (
              e.enter("autolink"),
              e.enter("autolinkMarker"),
              e.consume(n),
              e.exit("autolinkMarker"),
              e.enter("autolinkProtocol"),
              o
            );
          };
          function o(n) {
            return _e(n) ? (e.consume(n), l) : ze(n) ? s(n) : t(n);
          }
          function l(e) {
            return 43 === e || 45 === e || 46 === e || Ie(e) ? a(e) : s(e);
          }
          function a(n) {
            return 58 === n
              ? (e.consume(n), i)
              : (43 === n || 45 === n || 46 === n || Ie(n)) && r++ < 32
              ? (e.consume(n), a)
              : s(n);
          }
          function i(n) {
            return 62 === n
              ? (e.exit("autolinkProtocol"), f(n))
              : null === n || 32 === n || 60 === n || Me(n)
              ? t(n)
              : (e.consume(n), i);
          }
          function s(n) {
            return 64 === n
              ? (e.consume(n), (r = 0), u)
              : ze(n)
              ? (e.consume(n), s)
              : t(n);
          }
          function u(e) {
            return Ie(e) ? c(e) : t(e);
          }
          function c(n) {
            return 46 === n
              ? (e.consume(n), (r = 0), u)
              : 62 === n
              ? ((e.exit("autolinkProtocol").type = "autolinkEmail"), f(n))
              : d(n);
          }
          function d(n) {
            return (45 === n || Ie(n)) && r++ < 63
              ? (e.consume(n), 45 === n ? d : c)
              : t(n);
          }
          function f(t) {
            return (
              e.enter("autolinkMarker"),
              e.consume(t),
              e.exit("autolinkMarker"),
              e.exit("autolink"),
              n
            );
          }
        },
      },
      {
        name: "htmlText",
        tokenize: function (e, n, t) {
          const r = this;
          let o, l, a, i;
          return function (n) {
            return (
              e.enter("htmlText"), e.enter("htmlTextData"), e.consume(n), s
            );
          };
          function s(n) {
            return 33 === n
              ? (e.consume(n), u)
              : 47 === n
              ? (e.consume(n), w)
              : 63 === n
              ? (e.consume(n), k)
              : _e(n)
              ? (e.consume(n), C)
              : t(n);
          }
          function u(n) {
            return 45 === n
              ? (e.consume(n), c)
              : 91 === n
              ? (e.consume(n), (l = "CDATA["), (a = 0), g)
              : _e(n)
              ? (e.consume(n), v)
              : t(n);
          }
          function c(n) {
            return 45 === n ? (e.consume(n), d) : t(n);
          }
          function d(n) {
            return null === n || 62 === n
              ? t(n)
              : 45 === n
              ? (e.consume(n), f)
              : p(n);
          }
          function f(e) {
            return null === e || 62 === e ? t(e) : p(e);
          }
          function p(n) {
            return null === n
              ? t(n)
              : 45 === n
              ? (e.consume(n), h)
              : qe(n)
              ? ((i = p), _(n))
              : (e.consume(n), p);
          }
          function h(n) {
            return 45 === n ? (e.consume(n), D) : p(n);
          }
          function g(n) {
            return n === l.charCodeAt(a++)
              ? (e.consume(n), a === l.length ? m : g)
              : t(n);
          }
          function m(n) {
            return null === n
              ? t(n)
              : 93 === n
              ? (e.consume(n), b)
              : qe(n)
              ? ((i = m), _(n))
              : (e.consume(n), m);
          }
          function b(n) {
            return 93 === n ? (e.consume(n), y) : m(n);
          }
          function y(n) {
            return 62 === n ? D(n) : 93 === n ? (e.consume(n), y) : m(n);
          }
          function v(n) {
            return null === n || 62 === n
              ? D(n)
              : qe(n)
              ? ((i = v), _(n))
              : (e.consume(n), v);
          }
          function k(n) {
            return null === n
              ? t(n)
              : 63 === n
              ? (e.consume(n), x)
              : qe(n)
              ? ((i = k), _(n))
              : (e.consume(n), k);
          }
          function x(e) {
            return 62 === e ? D(e) : k(e);
          }
          function w(n) {
            return _e(n) ? (e.consume(n), S) : t(n);
          }
          function S(n) {
            return 45 === n || Ie(n) ? (e.consume(n), S) : E(n);
          }
          function E(n) {
            return qe(n) ? ((i = E), _(n)) : Be(n) ? (e.consume(n), E) : D(n);
          }
          function C(n) {
            return 45 === n || Ie(n)
              ? (e.consume(n), C)
              : 47 === n || 62 === n || Ue(n)
              ? N(n)
              : t(n);
          }
          function N(n) {
            return 47 === n
              ? (e.consume(n), D)
              : 58 === n || 95 === n || _e(n)
              ? (e.consume(n), L)
              : qe(n)
              ? ((i = N), _(n))
              : Be(n)
              ? (e.consume(n), N)
              : D(n);
          }
          function L(n) {
            return 45 === n || 46 === n || 58 === n || 95 === n || Ie(n)
              ? (e.consume(n), L)
              : A(n);
          }
          function A(n) {
            return 61 === n
              ? (e.consume(n), T)
              : qe(n)
              ? ((i = A), _(n))
              : Be(n)
              ? (e.consume(n), A)
              : N(n);
          }
          function T(n) {
            return null === n || 60 === n || 61 === n || 62 === n || 96 === n
              ? t(n)
              : 34 === n || 39 === n
              ? (e.consume(n), (o = n), P)
              : qe(n)
              ? ((i = T), _(n))
              : Be(n)
              ? (e.consume(n), T)
              : (e.consume(n), (o = void 0), O);
          }
          function P(n) {
            return n === o
              ? (e.consume(n), F)
              : null === n
              ? t(n)
              : qe(n)
              ? ((i = P), _(n))
              : (e.consume(n), P);
          }
          function F(e) {
            return 62 === e || 47 === e || Ue(e) ? N(e) : t(e);
          }
          function O(n) {
            return null === n ||
              34 === n ||
              39 === n ||
              60 === n ||
              61 === n ||
              96 === n
              ? t(n)
              : 62 === n || Ue(n)
              ? N(n)
              : (e.consume(n), O);
          }
          function _(n) {
            return (
              e.exit("htmlTextData"),
              e.enter("lineEnding"),
              e.consume(n),
              e.exit("lineEnding"),
              We(
                e,
                R,
                "linePrefix",
                r.parser.constructs.disable.null.includes("codeIndented")
                  ? void 0
                  : 4
              )
            );
          }
          function R(n) {
            return e.enter("htmlTextData"), i(n);
          }
          function D(r) {
            return 62 === r
              ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), n)
              : t(r);
          }
        },
      },
    ],
    91: {
      name: "labelStartLink",
      tokenize: function (e, n, t) {
        const r = this;
        return function (n) {
          return (
            e.enter("labelLink"),
            e.enter("labelMarker"),
            e.consume(n),
            e.exit("labelMarker"),
            e.exit("labelLink"),
            o
          );
        };
        function o(e) {
          return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
            ? t(e)
            : n(e);
        }
      },
      resolveAll: Dn.resolveAll,
    },
    92: [
      {
        name: "hardBreakEscape",
        tokenize: function (e, n, t) {
          return function (n) {
            return (
              e.enter("hardBreakEscape"),
              e.enter("escapeMarker"),
              e.consume(n),
              r
            );
          };
          function r(r) {
            return qe(r)
              ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), n(r))
              : t(r);
          }
        },
      },
      mn,
    ],
    93: Dn,
    95: pn,
    96: {
      name: "codeText",
      tokenize: function (e, n, t) {
        let r,
          o,
          l = 0;
        return function (n) {
          return e.enter("codeText"), e.enter("codeTextSequence"), a(n);
        };
        function a(n) {
          return 96 === n
            ? (e.consume(n), l++, a)
            : (e.exit("codeTextSequence"), i(n));
        }
        function i(n) {
          return null === n
            ? t(n)
            : 96 === n
            ? ((o = e.enter("codeTextSequence")), (r = 0), u(n))
            : 32 === n
            ? (e.enter("space"), e.consume(n), e.exit("space"), i)
            : qe(n)
            ? (e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), i)
            : (e.enter("codeTextData"), s(n));
        }
        function s(n) {
          return null === n || 32 === n || 96 === n || qe(n)
            ? (e.exit("codeTextData"), i(n))
            : (e.consume(n), s);
        }
        function u(t) {
          return 96 === t
            ? (e.consume(t), r++, u)
            : r === l
            ? (e.exit("codeTextSequence"), e.exit("codeText"), n(t))
            : ((o.type = "codeTextData"), s(t));
        }
      },
      resolve: function (e) {
        let n,
          t,
          r = e.length - 4,
          o = 3;
        if (
          !(
            ("lineEnding" !== e[o][1].type && "space" !== e[o][1].type) ||
            ("lineEnding" !== e[r][1].type && "space" !== e[r][1].type)
          )
        )
          for (n = o; ++n < r; )
            if ("codeTextData" === e[n][1].type) {
              (e[o][1].type = "codeTextPadding"),
                (e[r][1].type = "codeTextPadding"),
                (o += 2),
                (r -= 2);
              break;
            }
        (n = o - 1), r++;
        for (; ++n <= r; )
          void 0 === t
            ? n !== r && "lineEnding" !== e[n][1].type && (t = n)
            : (n !== r && "lineEnding" !== e[n][1].type) ||
              ((e[t][1].type = "codeTextData"),
              n !== t + 2 &&
                ((e[t][1].end = e[n - 1][1].end),
                e.splice(t + 2, n - t - 2),
                (r -= n - t - 2),
                (n = t + 2)),
              (t = void 0));
        return e;
      },
      previous: function (e) {
        return (
          96 !== e ||
          "characterEscape" === this.events[this.events.length - 1][1].type
        );
      },
    },
  },
  Xn = { null: [pn, tn] },
  Jn = { null: [42, 95] },
  Zn = { null: [] };
function et(e = {}) {
  const n = {
    defined: [],
    lazy: {},
    constructs: Pe([dn].concat(e.extensions || [])),
    content: t(Ge),
    document: t(Qe),
    flow: t(nn),
    string: t(rn),
    text: t(on),
  };
  return n;
  function t(e) {
    return function (t) {
      return cn(n, e, t);
    };
  }
}
const nt = /[\0\t\n\r]/g;
function tt() {
  let e,
    n = 1,
    t = "",
    r = !0;
  return function (o, l, a) {
    const i = [];
    let s, u, c, d, f;
    (o = t + o.toString(l)),
      (c = 0),
      (t = ""),
      r && (65279 === o.charCodeAt(0) && c++, (r = void 0));
    for (; c < o.length; ) {
      if (
        ((nt.lastIndex = c),
        (s = nt.exec(o)),
        (d = s && void 0 !== s.index ? s.index : o.length),
        (f = o.charCodeAt(d)),
        !s)
      ) {
        t = o.slice(c);
        break;
      }
      if (10 === f && c === d && e) i.push(-3), (e = void 0);
      else
        switch (
          (e && (i.push(-5), (e = void 0)),
          c < d && (i.push(o.slice(c, d)), (n += d - c)),
          f)
        ) {
          case 0:
            i.push(65533), n++;
            break;
          case 9:
            for (u = 4 * Math.ceil(n / 4), i.push(-2); n++ < u; ) i.push(-1);
            break;
          case 10:
            i.push(-4), (n = 1);
            break;
          default:
            (e = !0), (n = 1);
        }
      c = d + 1;
    }
    a && (e && i.push(-5), t && i.push(t), i.push(null));
    return i;
  };
}
function rt(e) {
  for (; !Xe(e); );
  return e;
}
function ot(e, n) {
  const t = Number.parseInt(e, n);
  return t < 9 ||
    11 === t ||
    (t > 13 && t < 32) ||
    (t > 126 && t < 160) ||
    (t > 55295 && t < 57344) ||
    (t > 64975 && t < 65008) ||
    65535 == (65535 & t) ||
    65534 == (65535 & t) ||
    t > 1114111
    ? "�"
    : String.fromCharCode(t);
}
const lt = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function at(e) {
  return e.replace(lt, it);
}
function it(e, n, t) {
  if (n) return n;
  if (35 === t.charCodeAt(0)) {
    const e = t.charCodeAt(1),
      n = 120 === e || 88 === e;
    return ot(t.slice(n ? 2 : 1), n ? 16 : 10);
  }
  return vn(t) || e;
}
const st = {}.hasOwnProperty,
  ut = function (e, n, t) {
    return (
      "string" != typeof n && ((t = n), (n = void 0)),
      (function (e = {}) {
        const n = ct(
            {
              transforms: [],
              canContainEols: [
                "emphasis",
                "fragment",
                "heading",
                "paragraph",
                "strong",
              ],
              enter: {
                autolink: s(oe),
                autolinkProtocol: A,
                autolinkEmail: A,
                atxHeading: s(ee),
                blockQuote: s(Y),
                characterEscape: A,
                characterReference: A,
                codeFenced: s(K),
                codeFencedFenceInfo: u,
                codeFencedFenceMeta: u,
                codeIndented: s(K, u),
                codeText: s(X, u),
                codeTextData: A,
                data: A,
                codeFlowValue: A,
                definition: s(J),
                definitionDestinationString: u,
                definitionLabelString: u,
                definitionTitleString: u,
                emphasis: s(Z),
                hardBreakEscape: s(ne),
                hardBreakTrailing: s(ne),
                htmlFlow: s(te, u),
                htmlFlowData: A,
                htmlText: s(te, u),
                htmlTextData: A,
                image: s(re),
                label: u,
                link: s(oe),
                listItem: s(ae),
                listItemValue: g,
                listOrdered: s(le, h),
                listUnordered: s(le),
                paragraph: s(ie),
                reference: H,
                referenceString: u,
                resourceDestinationString: u,
                resourceTitleString: u,
                setextHeading: s(ee),
                strong: s(se),
                thematicBreak: s(ce),
              },
              exit: {
                atxHeading: d(),
                atxHeadingSequence: E,
                autolink: d(),
                autolinkEmail: Q,
                autolinkProtocol: G,
                blockQuote: d(),
                characterEscapeValue: T,
                characterReferenceMarkerHexadecimal: V,
                characterReferenceMarkerNumeric: V,
                characterReferenceValue: W,
                codeFenced: d(v),
                codeFencedFence: y,
                codeFencedFenceInfo: m,
                codeFencedFenceMeta: b,
                codeFlowValue: T,
                codeIndented: d(k),
                codeText: d(R),
                codeTextData: T,
                data: T,
                definition: d(),
                definitionDestinationString: S,
                definitionLabelString: x,
                definitionTitleString: w,
                emphasis: d(),
                hardBreakEscape: d(F),
                hardBreakTrailing: d(F),
                htmlFlow: d(O),
                htmlFlowData: T,
                htmlText: d(_),
                htmlTextData: T,
                image: d(I),
                label: z,
                labelText: j,
                lineEnding: P,
                link: d(D),
                listItem: d(),
                listOrdered: d(),
                listUnordered: d(),
                paragraph: d(),
                referenceString: $,
                resourceDestinationString: M,
                resourceTitleString: U,
                resource: q,
                setextHeading: d(L),
                setextHeadingLineSequence: N,
                setextHeadingText: C,
                strong: d(),
                thematicBreak: d(),
              },
            },
            e.mdastExtensions || []
          ),
          t = {};
        return r;
        function r(e) {
          let t = { type: "root", children: [] };
          const r = [],
            s = [],
            d = {
              stack: [t],
              tokenStack: r,
              config: n,
              enter: c,
              exit: f,
              buffer: u,
              resume: p,
              setData: l,
              getData: a,
            };
          let h = -1;
          for (; ++h < e.length; )
            if (
              "listOrdered" === e[h][1].type ||
              "listUnordered" === e[h][1].type
            )
              if ("enter" === e[h][0]) s.push(h);
              else {
                h = o(e, s.pop(), h);
              }
          for (h = -1; ++h < e.length; ) {
            const t = n[e[h][0]];
            st.call(t, e[h][1].type) &&
              t[e[h][1].type].call(
                Object.assign({ sliceSerialize: e[h][2].sliceSerialize }, d),
                e[h][1]
              );
          }
          if (r.length > 0) {
            const e = r[r.length - 1];
            (e[1] || ft).call(d, void 0, e[0]);
          }
          for (
            t.position = {
              start: i(
                e.length > 0 ? e[0][1].start : { line: 1, column: 1, offset: 0 }
              ),
              end: i(
                e.length > 0
                  ? e[e.length - 2][1].end
                  : { line: 1, column: 1, offset: 0 }
              ),
            },
              h = -1;
            ++h < n.transforms.length;

          )
            t = n.transforms[h](t) || t;
          return t;
        }
        function o(e, n, t) {
          let r,
            o,
            l,
            a,
            i = n - 1,
            s = -1,
            u = !1;
          for (; ++i <= t; ) {
            const n = e[i];
            if (
              ("listUnordered" === n[1].type ||
              "listOrdered" === n[1].type ||
              "blockQuote" === n[1].type
                ? ("enter" === n[0] ? s++ : s--, (a = void 0))
                : "lineEndingBlank" === n[1].type
                ? "enter" === n[0] &&
                  (!r || a || s || l || (l = i), (a = void 0))
                : "linePrefix" === n[1].type ||
                  "listItemValue" === n[1].type ||
                  "listItemMarker" === n[1].type ||
                  "listItemPrefix" === n[1].type ||
                  "listItemPrefixWhitespace" === n[1].type ||
                  (a = void 0),
              (!s && "enter" === n[0] && "listItemPrefix" === n[1].type) ||
                (-1 === s &&
                  "exit" === n[0] &&
                  ("listUnordered" === n[1].type ||
                    "listOrdered" === n[1].type)))
            ) {
              if (r) {
                let a = i;
                for (o = void 0; a--; ) {
                  const n = e[a];
                  if (
                    "lineEnding" === n[1].type ||
                    "lineEndingBlank" === n[1].type
                  ) {
                    if ("exit" === n[0]) continue;
                    o && ((e[o][1].type = "lineEndingBlank"), (u = !0)),
                      (n[1].type = "lineEnding"),
                      (o = a);
                  } else if (
                    "linePrefix" !== n[1].type &&
                    "blockQuotePrefix" !== n[1].type &&
                    "blockQuotePrefixWhitespace" !== n[1].type &&
                    "blockQuoteMarker" !== n[1].type &&
                    "listItemIndent" !== n[1].type
                  )
                    break;
                }
                l && (!o || l < o) && (r._spread = !0),
                  (r.end = Object.assign({}, o ? e[o][1].start : n[1].end)),
                  e.splice(o || i, 0, ["exit", r, n[2]]),
                  i++,
                  t++;
              }
              "listItemPrefix" === n[1].type &&
                ((r = {
                  type: "listItem",
                  _spread: !1,
                  start: Object.assign({}, n[1].start),
                }),
                e.splice(i, 0, ["enter", r, n[2]]),
                i++,
                t++,
                (l = void 0),
                (a = !0));
            }
          }
          return (e[n][1]._spread = u), t;
        }
        function l(e, n) {
          t[e] = n;
        }
        function a(e) {
          return t[e];
        }
        function i(e) {
          return { line: e.line, column: e.column, offset: e.offset };
        }
        function s(e, n) {
          return t;
          function t(t) {
            c.call(this, e(t), t), n && n.call(this, t);
          }
        }
        function u() {
          this.stack.push({ type: "fragment", children: [] });
        }
        function c(e, n, t) {
          return (
            this.stack[this.stack.length - 1].children.push(e),
            this.stack.push(e),
            this.tokenStack.push([n, t]),
            (e.position = { start: i(n.start) }),
            e
          );
        }
        function d(e) {
          return n;
          function n(n) {
            e && e.call(this, n), f.call(this, n);
          }
        }
        function f(e, n) {
          const t = this.stack.pop(),
            r = this.tokenStack.pop();
          if (!r)
            throw new Error(
              "Cannot close `" +
                e.type +
                "` (" +
                B({ start: e.start, end: e.end }) +
                "): it’s not open"
            );
          if (r[0].type !== e.type)
            if (n) n.call(this, e, r[0]);
            else {
              (r[1] || ft).call(this, e, r[0]);
            }
          return (t.position.end = i(e.end)), t;
        }
        function p() {
          return Ee(this.stack.pop());
        }
        function h() {
          l("expectingFirstListItemValue", !0);
        }
        function g(e) {
          if (a("expectingFirstListItemValue")) {
            (this.stack[this.stack.length - 2].start = Number.parseInt(
              this.sliceSerialize(e),
              10
            )),
              l("expectingFirstListItemValue");
          }
        }
        function m() {
          const e = this.resume();
          this.stack[this.stack.length - 1].lang = e;
        }
        function b() {
          const e = this.resume();
          this.stack[this.stack.length - 1].meta = e;
        }
        function y() {
          a("flowCodeInside") || (this.buffer(), l("flowCodeInside", !0));
        }
        function v() {
          const e = this.resume();
          (this.stack[this.stack.length - 1].value = e.replace(
            /^(\r?\n|\r)|(\r?\n|\r)$/g,
            ""
          )),
            l("flowCodeInside");
        }
        function k() {
          const e = this.resume();
          this.stack[this.stack.length - 1].value = e.replace(
            /(\r?\n|\r)$/g,
            ""
          );
        }
        function x(e) {
          const n = this.resume(),
            t = this.stack[this.stack.length - 1];
          (t.label = n),
            (t.identifier = An(this.sliceSerialize(e)).toLowerCase());
        }
        function w() {
          const e = this.resume();
          this.stack[this.stack.length - 1].title = e;
        }
        function S() {
          const e = this.resume();
          this.stack[this.stack.length - 1].url = e;
        }
        function E(e) {
          const n = this.stack[this.stack.length - 1];
          if (!n.depth) {
            const t = this.sliceSerialize(e).length;
            n.depth = t;
          }
        }
        function C() {
          l("setextHeadingSlurpLineEnding", !0);
        }
        function N(e) {
          this.stack[this.stack.length - 1].depth =
            61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2;
        }
        function L() {
          l("setextHeadingSlurpLineEnding");
        }
        function A(e) {
          const n = this.stack[this.stack.length - 1];
          let t = n.children[n.children.length - 1];
          (t && "text" === t.type) ||
            ((t = ue()),
            (t.position = { start: i(e.start) }),
            n.children.push(t)),
            this.stack.push(t);
        }
        function T(e) {
          const n = this.stack.pop();
          (n.value += this.sliceSerialize(e)), (n.position.end = i(e.end));
        }
        function P(e) {
          const t = this.stack[this.stack.length - 1];
          if (a("atHardBreak")) {
            return (
              (t.children[t.children.length - 1].position.end = i(e.end)),
              void l("atHardBreak")
            );
          }
          !a("setextHeadingSlurpLineEnding") &&
            n.canContainEols.includes(t.type) &&
            (A.call(this, e), T.call(this, e));
        }
        function F() {
          l("atHardBreak", !0);
        }
        function O() {
          const e = this.resume();
          this.stack[this.stack.length - 1].value = e;
        }
        function _() {
          const e = this.resume();
          this.stack[this.stack.length - 1].value = e;
        }
        function R() {
          const e = this.resume();
          this.stack[this.stack.length - 1].value = e;
        }
        function D() {
          const e = this.stack[this.stack.length - 1];
          a("inReference")
            ? ((e.type += "Reference"),
              (e.referenceType = a("referenceType") || "shortcut"),
              delete e.url,
              delete e.title)
            : (delete e.identifier, delete e.label),
            l("referenceType");
        }
        function I() {
          const e = this.stack[this.stack.length - 1];
          a("inReference")
            ? ((e.type += "Reference"),
              (e.referenceType = a("referenceType") || "shortcut"),
              delete e.url,
              delete e.title)
            : (delete e.identifier, delete e.label),
            l("referenceType");
        }
        function j(e) {
          const n = this.stack[this.stack.length - 2],
            t = this.sliceSerialize(e);
          (n.label = at(t)), (n.identifier = An(t).toLowerCase());
        }
        function z() {
          const e = this.stack[this.stack.length - 1],
            n = this.resume(),
            t = this.stack[this.stack.length - 1];
          l("inReference", !0),
            "link" === t.type ? (t.children = e.children) : (t.alt = n);
        }
        function M() {
          const e = this.resume();
          this.stack[this.stack.length - 1].url = e;
        }
        function U() {
          const e = this.resume();
          this.stack[this.stack.length - 1].title = e;
        }
        function q() {
          l("inReference");
        }
        function H() {
          l("referenceType", "collapsed");
        }
        function $(e) {
          const n = this.resume(),
            t = this.stack[this.stack.length - 1];
          (t.label = n),
            (t.identifier = An(this.sliceSerialize(e)).toLowerCase()),
            l("referenceType", "full");
        }
        function V(e) {
          l("characterReferenceType", e.type);
        }
        function W(e) {
          const n = this.sliceSerialize(e),
            t = a("characterReferenceType");
          let r;
          t
            ? ((r = ot(n, "characterReferenceMarkerNumeric" === t ? 10 : 16)),
              l("characterReferenceType"))
            : (r = vn(n));
          const o = this.stack.pop();
          (o.value += r), (o.position.end = i(e.end));
        }
        function G(e) {
          T.call(this, e);
          this.stack[this.stack.length - 1].url = this.sliceSerialize(e);
        }
        function Q(e) {
          T.call(this, e);
          this.stack[this.stack.length - 1].url =
            "mailto:" + this.sliceSerialize(e);
        }
        function Y() {
          return { type: "blockquote", children: [] };
        }
        function K() {
          return { type: "code", lang: null, meta: null, value: "" };
        }
        function X() {
          return { type: "inlineCode", value: "" };
        }
        function J() {
          return {
            type: "definition",
            identifier: "",
            label: null,
            title: null,
            url: "",
          };
        }
        function Z() {
          return { type: "emphasis", children: [] };
        }
        function ee() {
          return { type: "heading", depth: void 0, children: [] };
        }
        function ne() {
          return { type: "break" };
        }
        function te() {
          return { type: "html", value: "" };
        }
        function re() {
          return { type: "image", title: null, url: "", alt: null };
        }
        function oe() {
          return { type: "link", title: null, url: "", children: [] };
        }
        function le(e) {
          return {
            type: "list",
            ordered: "listOrdered" === e.type,
            start: null,
            spread: e._spread,
            children: [],
          };
        }
        function ae(e) {
          return {
            type: "listItem",
            spread: e._spread,
            checked: null,
            children: [],
          };
        }
        function ie() {
          return { type: "paragraph", children: [] };
        }
        function se() {
          return { type: "strong", children: [] };
        }
        function ue() {
          return { type: "text", value: "" };
        }
        function ce() {
          return { type: "thematicBreak" };
        }
      })(t)(rt(et(t).document().write(tt()(e, n, !0))))
    );
  };
function ct(e, n) {
  let t = -1;
  for (; ++t < n.length; ) {
    const r = n[t];
    Array.isArray(r) ? ct(e, r) : dt(e, r);
  }
  return e;
}
function dt(e, n) {
  let t;
  for (t in n)
    if (st.call(n, t)) {
      const r = "canContainEols" === t || "transforms" === t,
        o = (st.call(e, t) ? e[t] : void 0) || (e[t] = r ? [] : {}),
        l = n[t];
      l && (r ? (e[t] = [...o, ...l]) : Object.assign(o, l));
    }
}
function ft(e, n) {
  throw e
    ? new Error(
        "Cannot close `" +
          e.type +
          "` (" +
          B({ start: e.start, end: e.end }) +
          "): a different token (`" +
          n.type +
          "`, " +
          B({ start: n.start, end: n.end }) +
          ") is open"
      )
    : new Error(
        "Cannot close document, a token (`" +
          n.type +
          "`, " +
          B({ start: n.start, end: n.end }) +
          ") is still open"
      );
}
var pt = function (e) {
    Object.assign(this, {
      Parser: (n) => {
        const t = this.data("settings");
        return ut(
          n,
          Object.assign({}, t, e, {
            extensions: this.data("micromarkExtensions") || [],
            mdastExtensions: this.data("fromMarkdownExtensions") || [],
          })
        );
      },
    });
  },
  ht = function (e, n, t) {
    var r = { type: String(e) };
    return (
      null != t || ("string" != typeof n && !Array.isArray(n))
        ? Object.assign(r, n)
        : (t = n),
      Array.isArray(t) ? (r.children = t) : null != t && (r.value = String(t)),
      r
    );
  };
const gt = function (e) {
  if (null == e) return bt;
  if ("string" == typeof e)
    return (function (e) {
      return mt(n);
      function n(n) {
        return n && n.type === e;
      }
    })(e);
  if ("object" == typeof e)
    return Array.isArray(e)
      ? (function (e) {
          const n = [];
          let t = -1;
          for (; ++t < e.length; ) n[t] = gt(e[t]);
          return mt(r);
          function r(...e) {
            let t = -1;
            for (; ++t < n.length; ) if (n[t].call(this, ...e)) return !0;
            return !1;
          }
        })(e)
      : (function (e) {
          return mt(n);
          function n(n) {
            let t;
            for (t in e) if (n[t] !== e[t]) return !1;
            return !0;
          }
        })(e);
  if ("function" == typeof e) return mt(e);
  throw new Error("Expected function, string, or object as test");
};
function mt(e) {
  return function (...n) {
    return Boolean(e.call(this, ...n));
  };
}
function bt() {
  return !0;
}
const yt = function (e, n, t, r) {
  "function" == typeof n &&
    "function" != typeof t &&
    ((r = t), (t = n), (n = null));
  const o = gt(n),
    l = r ? -1 : 1;
  !(function e(a, i, s) {
    const u = "object" == typeof a && null !== a ? a : {};
    let c;
    "string" == typeof u.type &&
      ((c =
        "string" == typeof u.tagName
          ? u.tagName
          : "string" == typeof u.name
          ? u.name
          : void 0),
      Object.defineProperty(d, "name", {
        value: "node (" + u.type + (c ? "<" + c + ">" : "") + ")",
      }));
    return d;
    function d() {
      let u,
        c,
        d,
        f = [];
      if (
        (!n || o(a, i, s[s.length - 1] || null)) &&
        ((f = (function (e) {
          return Array.isArray(e) ? e : "number" == typeof e ? [true, e] : [e];
        })(t(a, s))),
        false === f[0])
      )
        return f;
      if (a.children && "skip" !== f[0])
        for (
          c = (r ? a.children.length : -1) + l, d = s.concat(a);
          c > -1 && c < a.children.length;

        ) {
          if (((u = e(a.children[c], c, d)()), false === u[0])) return u;
          c = "number" == typeof u[1] ? u[1] : c + l;
        }
      return f;
    }
  })(e, null, [])();
};
const vt = function (e, n, t, r) {
    "function" == typeof n &&
      "function" != typeof t &&
      ((r = t), (t = n), (n = null)),
      yt(
        e,
        n,
        function (e, n) {
          const r = n[n.length - 1];
          return t(e, r ? r.children.indexOf(e) : null, r);
        },
        r
      );
  },
  kt = wt("start"),
  xt = wt("end");
function wt(e) {
  return function (n) {
    const t = (n && n.position && n.position[e]) || {};
    return {
      line: t.line || null,
      column: t.column || null,
      offset: t.offset > -1 ? t.offset : null,
    };
  };
}
const St = {}.hasOwnProperty;
function Et(e) {
  const n = Object.create(null);
  if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
  return (
    vt(e, "definition", (e) => {
      const t = Ct(e.identifier);
      t && !St.call(n, t) && (n[t] = e);
    }),
    function (e) {
      const t = Ct(e);
      return t && St.call(n, t) ? n[t] : null;
    }
  );
}
function Ct(e) {
  return String(e || "").toUpperCase();
}
const Nt = {}.hasOwnProperty;
function Lt(e, n) {
  const t = n.data || {};
  return "value" in n &&
    !(
      Nt.call(t, "hName") ||
      Nt.call(t, "hProperties") ||
      Nt.call(t, "hChildren")
    )
    ? e.augment(n, ht("text", n.value))
    : e(n, "div", Pt(e, n));
}
function At(e, n, t) {
  const r = n && n.type;
  let o;
  if (!r) throw new Error("Expected node, got `" + n + "`");
  return (
    (o = Nt.call(e.handlers, r)
      ? e.handlers[r]
      : e.passThrough && e.passThrough.includes(r)
      ? Tt
      : e.unknownHandler),
    ("function" == typeof o ? o : Lt)(e, n, t)
  );
}
function Tt(e, n) {
  return "children" in n ? { ...n, children: Pt(e, n) } : n;
}
function Pt(e, n) {
  const t = [];
  if ("children" in n) {
    const r = n.children;
    let o = -1;
    for (; ++o < r.length; ) {
      const l = At(e, r[o], n);
      if (l) {
        if (
          o &&
          "break" === r[o - 1].type &&
          (Array.isArray(l) ||
            "text" !== l.type ||
            (l.value = l.value.replace(/^\s+/, "")),
          !Array.isArray(l) && "element" === l.type)
        ) {
          const e = l.children[0];
          e && "text" === e.type && (e.value = e.value.replace(/^\s+/, ""));
        }
        Array.isArray(l) ? t.push(...l) : t.push(l);
      }
    }
  }
  return t;
}
function Ft(e) {
  const n = [];
  let t = -1,
    r = 0,
    o = 0;
  for (; ++t < e.length; ) {
    const l = e.charCodeAt(t);
    let a = "";
    if (37 === l && Ie(e.charCodeAt(t + 1)) && Ie(e.charCodeAt(t + 2))) o = 2;
    else if (l < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) ||
        (a = String.fromCharCode(l));
    else if (l > 55295 && l < 57344) {
      const n = e.charCodeAt(t + 1);
      l < 56320 && n > 56319 && n < 57344
        ? ((a = String.fromCharCode(l, n)), (o = 1))
        : (a = "�");
    } else a = String.fromCharCode(l);
    a &&
      (n.push(e.slice(r, t), encodeURIComponent(a)), (r = t + o + 1), (a = "")),
      o && ((t += o), (o = 0));
  }
  return n.join("") + e.slice(r);
}
function Ot(e, n) {
  const t = [];
  let r = -1;
  for (n && t.push(ht("text", "\n")); ++r < e.length; )
    r && t.push(ht("text", "\n")), t.push(e[r]);
  return n && e.length > 0 && t.push(ht("text", "\n")), t;
}
function _t(e) {
  let n = -1;
  const t = [];
  for (; ++n < e.footnoteOrder.length; ) {
    const r = e.footnoteById[e.footnoteOrder[n].toUpperCase()];
    if (!r) continue;
    const o = Pt(e, r),
      l = String(r.identifier),
      a = Ft(l.toLowerCase());
    let i = 0;
    const s = [];
    for (; ++i <= e.footnoteCounts[l]; ) {
      const n = {
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + e.clobberPrefix + "fnref-" + a + (i > 1 ? "-" + i : ""),
          dataFootnoteBackref: !0,
          className: ["data-footnote-backref"],
          ariaLabel: e.footnoteBackLabel,
        },
        children: [{ type: "text", value: "↩" }],
      };
      i > 1 &&
        n.children.push({
          type: "element",
          tagName: "sup",
          children: [{ type: "text", value: String(i) }],
        }),
        s.length > 0 && s.push({ type: "text", value: " " }),
        s.push(n);
    }
    const u = o[o.length - 1];
    if (u && "element" === u.type && "p" === u.tagName) {
      const e = u.children[u.children.length - 1];
      e && "text" === e.type
        ? (e.value += " ")
        : u.children.push({ type: "text", value: " " }),
        u.children.push(...s);
    } else o.push(...s);
    const c = {
      type: "element",
      tagName: "li",
      properties: { id: e.clobberPrefix + "fn-" + a },
      children: Ot(o, !0),
    };
    r.position && (c.position = r.position), t.push(c);
  }
  return 0 === t.length
    ? null
    : {
        type: "element",
        tagName: "section",
        properties: { dataFootnotes: !0, className: ["footnotes"] },
        children: [
          {
            type: "element",
            tagName: e.footnoteLabelTagName,
            properties: {
              ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
              id: "footnote-label",
            },
            children: [ht("text", e.footnoteLabel)],
          },
          { type: "text", value: "\n" },
          {
            type: "element",
            tagName: "ol",
            properties: {},
            children: Ot(t, !0),
          },
          { type: "text", value: "\n" },
        ],
      };
}
function Rt(e, n) {
  const t = String(n.identifier),
    r = Ft(t.toLowerCase()),
    o = e.footnoteOrder.indexOf(t);
  let l;
  -1 === o
    ? (e.footnoteOrder.push(t),
      (e.footnoteCounts[t] = 1),
      (l = e.footnoteOrder.length))
    : (e.footnoteCounts[t]++, (l = o + 1));
  const a = e.footnoteCounts[t];
  return e(n, "sup", [
    e(
      n.position,
      "a",
      {
        href: "#" + e.clobberPrefix + "fn-" + r,
        id: e.clobberPrefix + "fnref-" + r + (a > 1 ? "-" + a : ""),
        dataFootnoteRef: !0,
        ariaDescribedBy: "footnote-label",
      },
      [ht("text", String(l))]
    ),
  ]);
}
function Dt(e, n) {
  const t = n.referenceType;
  let r = "]";
  if (
    ("collapsed" === t
      ? (r += "[]")
      : "full" === t && (r += "[" + (n.label || n.identifier) + "]"),
    "imageReference" === n.type)
  )
    return ht("text", "![" + n.alt + r);
  const o = Pt(e, n),
    l = o[0];
  l && "text" === l.type
    ? (l.value = "[" + l.value)
    : o.unshift(ht("text", "["));
  const a = o[o.length - 1];
  return a && "text" === a.type ? (a.value += r) : o.push(ht("text", r)), o;
}
function It(e) {
  const n = e.spread;
  return null == n ? e.children.length > 1 : n;
}
function jt(e) {
  const n = String(e),
    t = /\r?\n|\r/g;
  let r = t.exec(n),
    o = 0;
  const l = [];
  for (; r; )
    l.push(zt(n.slice(o, r.index), o > 0, !0), r[0]),
      (o = r.index + r[0].length),
      (r = t.exec(n));
  return l.push(zt(n.slice(o), o > 0, !1)), l.join("");
}
function zt(e, n, t) {
  let r = 0,
    o = e.length;
  if (n) {
    let n = e.codePointAt(r);
    for (; 9 === n || 32 === n; ) r++, (n = e.codePointAt(r));
  }
  if (t) {
    let n = e.codePointAt(o - 1);
    for (; 9 === n || 32 === n; ) o--, (n = e.codePointAt(o - 1));
  }
  return o > r ? e.slice(r, o) : "";
}
const Mt = {
  blockquote: function (e, n) {
    return e(n, "blockquote", Ot(Pt(e, n), !0));
  },
  break: function (e, n) {
    return [e(n, "br"), ht("text", "\n")];
  },
  code: function (e, n) {
    const t = n.value ? n.value + "\n" : "",
      r = n.lang && n.lang.match(/^[^ \t]+(?=[ \t]|$)/),
      o = {};
    r && (o.className = ["language-" + r]);
    const l = e(n, "code", o, [ht("text", t)]);
    return n.meta && (l.data = { meta: n.meta }), e(n.position, "pre", [l]);
  },
  delete: function (e, n) {
    return e(n, "del", Pt(e, n));
  },
  emphasis: function (e, n) {
    return e(n, "em", Pt(e, n));
  },
  footnoteReference: Rt,
  footnote: function (e, n) {
    const t = e.footnoteById;
    let r = 1;
    for (; r in t; ) r++;
    const o = String(r);
    return (
      (t[o] = {
        type: "footnoteDefinition",
        identifier: o,
        children: [{ type: "paragraph", children: n.children }],
        position: n.position,
      }),
      Rt(e, { type: "footnoteReference", identifier: o, position: n.position })
    );
  },
  heading: function (e, n) {
    return e(n, "h" + n.depth, Pt(e, n));
  },
  html: function (e, n) {
    return e.dangerous ? e.augment(n, ht("raw", n.value)) : null;
  },
  imageReference: function (e, n) {
    const t = e.definition(n.identifier);
    if (!t) return Dt(e, n);
    const r = { src: Ft(t.url || ""), alt: n.alt };
    return (
      null !== t.title && void 0 !== t.title && (r.title = t.title),
      e(n, "img", r)
    );
  },
  image: function (e, n) {
    const t = { src: Ft(n.url), alt: n.alt };
    return (
      null !== n.title && void 0 !== n.title && (t.title = n.title),
      e(n, "img", t)
    );
  },
  inlineCode: function (e, n) {
    return e(n, "code", [ht("text", n.value.replace(/\r?\n|\r/g, " "))]);
  },
  linkReference: function (e, n) {
    const t = e.definition(n.identifier);
    if (!t) return Dt(e, n);
    const r = { href: Ft(t.url || "") };
    return (
      null !== t.title && void 0 !== t.title && (r.title = t.title),
      e(n, "a", r, Pt(e, n))
    );
  },
  link: function (e, n) {
    const t = { href: Ft(n.url) };
    return (
      null !== n.title && void 0 !== n.title && (t.title = n.title),
      e(n, "a", t, Pt(e, n))
    );
  },
  listItem: function (e, n, t) {
    const r = Pt(e, n),
      o = t
        ? (function (e) {
            let n = e.spread;
            const t = e.children;
            let r = -1;
            for (; !n && ++r < t.length; ) n = It(t[r]);
            return Boolean(n);
          })(t)
        : It(n),
      l = {},
      a = [];
    if ("boolean" == typeof n.checked) {
      let t;
      r[0] && "element" === r[0].type && "p" === r[0].tagName
        ? (t = r[0])
        : ((t = e(null, "p", [])), r.unshift(t)),
        t.children.length > 0 && t.children.unshift(ht("text", " ")),
        t.children.unshift(
          e(null, "input", {
            type: "checkbox",
            checked: n.checked,
            disabled: !0,
          })
        ),
        (l.className = ["task-list-item"]);
    }
    let i = -1;
    for (; ++i < r.length; ) {
      const e = r[i];
      (o || 0 !== i || "element" !== e.type || "p" !== e.tagName) &&
        a.push(ht("text", "\n")),
        "element" !== e.type || "p" !== e.tagName || o
          ? a.push(e)
          : a.push(...e.children);
    }
    const s = r[r.length - 1];
    return (
      !s ||
        (!o && "tagName" in s && "p" === s.tagName) ||
        a.push(ht("text", "\n")),
      e(n, "li", l, a)
    );
  },
  list: function (e, n) {
    const t = {},
      r = n.ordered ? "ol" : "ul",
      o = Pt(e, n);
    let l = -1;
    for (
      "number" == typeof n.start && 1 !== n.start && (t.start = n.start);
      ++l < o.length;

    ) {
      const e = o[l];
      if (
        "element" === e.type &&
        "li" === e.tagName &&
        e.properties &&
        Array.isArray(e.properties.className) &&
        e.properties.className.includes("task-list-item")
      ) {
        t.className = ["contains-task-list"];
        break;
      }
    }
    return e(n, r, t, Ot(o, !0));
  },
  paragraph: function (e, n) {
    return e(n, "p", Pt(e, n));
  },
  root: function (e, n) {
    return e.augment(n, ht("root", Ot(Pt(e, n))));
  },
  strong: function (e, n) {
    return e(n, "strong", Pt(e, n));
  },
  table: function (e, n) {
    const t = n.children;
    let r = -1;
    const o = n.align || [],
      l = [];
    for (; ++r < t.length; ) {
      const a = t[r].children,
        i = 0 === r ? "th" : "td",
        s = [];
      let u = -1;
      const c = n.align ? o.length : a.length;
      for (; ++u < c; ) {
        const n = a[u];
        s.push(e(n, i, { align: o[u] }, n ? Pt(e, n) : []));
      }
      l[r] = e(t[r], "tr", Ot(s, !0));
    }
    return e(
      n,
      "table",
      Ot(
        [e(l[0].position, "thead", Ot([l[0]], !0))].concat(
          l[1]
            ? e(
                { start: kt(l[1]), end: xt(l[l.length - 1]) },
                "tbody",
                Ot(l.slice(1), !0)
              )
            : []
        ),
        !0
      )
    );
  },
  text: function (e, n) {
    return e.augment(n, ht("text", jt(String(n.value))));
  },
  thematicBreak: function (e, n) {
    return e(n, "hr");
  },
  toml: Ut,
  yaml: Ut,
  definition: Ut,
  footnoteDefinition: Ut,
};
function Ut() {
  return null;
}
const qt = {}.hasOwnProperty;
function Bt(e, n) {
  const t = n || {},
    r = t.allowDangerousHtml || !1,
    o = {};
  return (
    (a.dangerous = r),
    (a.clobberPrefix =
      void 0 === t.clobberPrefix || null === t.clobberPrefix
        ? "user-content-"
        : t.clobberPrefix),
    (a.footnoteLabel = t.footnoteLabel || "Footnotes"),
    (a.footnoteLabelTagName = t.footnoteLabelTagName || "h2"),
    (a.footnoteLabelProperties = t.footnoteLabelProperties || {
      className: ["sr-only"],
    }),
    (a.footnoteBackLabel = t.footnoteBackLabel || "Back to content"),
    (a.definition = Et(e)),
    (a.footnoteById = o),
    (a.footnoteOrder = []),
    (a.footnoteCounts = {}),
    (a.augment = l),
    (a.handlers = { ...Mt, ...t.handlers }),
    (a.unknownHandler = t.unknownHandler),
    (a.passThrough = t.passThrough),
    vt(e, "footnoteDefinition", (e) => {
      const n = String(e.identifier).toUpperCase();
      qt.call(o, n) || (o[n] = e);
    }),
    a
  );
  function l(e, n) {
    if (e && "data" in e && e.data) {
      const t = e.data;
      t.hName &&
        ("element" !== n.type &&
          (n = { type: "element", tagName: "", properties: {}, children: [] }),
        (n.tagName = t.hName)),
        "element" === n.type &&
          t.hProperties &&
          (n.properties = { ...n.properties, ...t.hProperties }),
        "children" in n &&
          n.children &&
          t.hChildren &&
          (n.children = t.hChildren);
    }
    if (e) {
      const r = "type" in e ? e : { position: e };
      (t = r) &&
        t.position &&
        t.position.start &&
        t.position.start.line &&
        t.position.start.column &&
        t.position.end &&
        t.position.end.line &&
        t.position.end.column &&
        (n.position = { start: kt(r), end: xt(r) });
    }
    var t;
    return n;
  }
  function a(e, n, t, r) {
    return (
      Array.isArray(t) && ((r = t), (t = {})),
      l(e, {
        type: "element",
        tagName: n,
        properties: t || {},
        children: r || [],
      })
    );
  }
}
function Ht(e, n) {
  const t = Bt(e, n),
    r = At(t, e, null),
    o = _t(t);
  return (
    o && r.children.push(ht("text", "\n"), o),
    Array.isArray(r) ? { type: "root", children: r } : r
  );
}
var $t = function (e, n) {
  return e && "run" in e
    ? (function (e, n) {
        return (t, r, o) => {
          e.run(Ht(t, n), r, (e) => {
            o(e);
          });
        };
      })(e, n)
    : (function (e) {
        return (n) => Ht(n, e);
      })(e || n);
};
var Vt;
Vt = l("exEpv")();
class Wt {
  constructor(e, n, t) {
    (this.property = e), (this.normal = n), t && (this.space = t);
  }
}
function Gt(e, n) {
  const t = {},
    r = {};
  let o = -1;
  for (; ++o < e.length; )
    Object.assign(t, e[o].property), Object.assign(r, e[o].normal);
  return new Wt(t, r, n);
}
function Qt(e) {
  return e.toLowerCase();
}
(Wt.prototype.property = {}),
  (Wt.prototype.normal = {}),
  (Wt.prototype.space = null);
class Yt {
  constructor(e, n) {
    (this.property = e), (this.attribute = n);
  }
}
(Yt.prototype.space = null),
  (Yt.prototype.boolean = !1),
  (Yt.prototype.booleanish = !1),
  (Yt.prototype.overloadedBoolean = !1),
  (Yt.prototype.number = !1),
  (Yt.prototype.commaSeparated = !1),
  (Yt.prototype.spaceSeparated = !1),
  (Yt.prototype.commaOrSpaceSeparated = !1),
  (Yt.prototype.mustUseProperty = !1),
  (Yt.prototype.defined = !1);
var Kt = {};
e(Kt, "boolean", () => Jt),
  e(Kt, "booleanish", () => Zt),
  e(Kt, "overloadedBoolean", () => er),
  e(Kt, "number", () => nr),
  e(Kt, "spaceSeparated", () => tr),
  e(Kt, "commaSeparated", () => rr),
  e(Kt, "commaOrSpaceSeparated", () => or);
let Xt = 0;
const Jt = lr(),
  Zt = lr(),
  er = lr(),
  nr = lr(),
  tr = lr(),
  rr = lr(),
  or = lr();
function lr() {
  return 2 ** ++Xt;
}
const ar = Object.keys(Kt);
class ir extends Yt {
  constructor(e, n, t, r) {
    let o = -1;
    if ((super(e, n), sr(this, "space", r), "number" == typeof t))
      for (; ++o < ar.length; ) {
        const e = ar[o];
        sr(this, ar[o], (t & Kt[e]) === Kt[e]);
      }
  }
}
function sr(e, n, t) {
  t && (e[n] = t);
}
ir.prototype.defined = !0;
const ur = {}.hasOwnProperty;
function cr(e) {
  const n = {},
    t = {};
  let r;
  for (r in e.properties)
    if (ur.call(e.properties, r)) {
      const o = e.properties[r],
        l = new ir(r, e.transform(e.attributes || {}, r), o, e.space);
      e.mustUseProperty &&
        e.mustUseProperty.includes(r) &&
        (l.mustUseProperty = !0),
        (n[r] = l),
        (t[Qt(r)] = r),
        (t[Qt(l.attribute)] = r);
    }
  return new Wt(n, t, e.space);
}
const dr = cr({
    space: "xlink",
    transform: (e, n) => "xlink:" + n.slice(5).toLowerCase(),
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
  }),
  fr = cr({
    space: "xml",
    transform: (e, n) => "xml:" + n.slice(3).toLowerCase(),
    properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
  });
function pr(e, n) {
  return n in e ? e[n] : n;
}
function hr(e, n) {
  return pr(e, n.toLowerCase());
}
const gr = cr({
    space: "xmlns",
    attributes: { xmlnsxlink: "xmlns:xlink" },
    transform: hr,
    properties: { xmlns: null, xmlnsXLink: null },
  }),
  mr = cr({
    transform: (e, n) =>
      "role" === n ? n : "aria-" + n.slice(4).toLowerCase(),
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: Zt,
      ariaAutoComplete: null,
      ariaBusy: Zt,
      ariaChecked: Zt,
      ariaColCount: nr,
      ariaColIndex: nr,
      ariaColSpan: nr,
      ariaControls: tr,
      ariaCurrent: null,
      ariaDescribedBy: tr,
      ariaDetails: null,
      ariaDisabled: Zt,
      ariaDropEffect: tr,
      ariaErrorMessage: null,
      ariaExpanded: Zt,
      ariaFlowTo: tr,
      ariaGrabbed: Zt,
      ariaHasPopup: null,
      ariaHidden: Zt,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: tr,
      ariaLevel: nr,
      ariaLive: null,
      ariaModal: Zt,
      ariaMultiLine: Zt,
      ariaMultiSelectable: Zt,
      ariaOrientation: null,
      ariaOwns: tr,
      ariaPlaceholder: null,
      ariaPosInSet: nr,
      ariaPressed: Zt,
      ariaReadOnly: Zt,
      ariaRelevant: null,
      ariaRequired: Zt,
      ariaRoleDescription: tr,
      ariaRowCount: nr,
      ariaRowIndex: nr,
      ariaRowSpan: nr,
      ariaSelected: Zt,
      ariaSetSize: nr,
      ariaSort: null,
      ariaValueMax: nr,
      ariaValueMin: nr,
      ariaValueNow: nr,
      ariaValueText: null,
      role: null,
    },
  }),
  br = cr({
    space: "html",
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv",
    },
    transform: hr,
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: rr,
      acceptCharset: tr,
      accessKey: tr,
      action: null,
      allow: null,
      allowFullScreen: Jt,
      allowPaymentRequest: Jt,
      allowUserMedia: Jt,
      alt: null,
      as: null,
      async: Jt,
      autoCapitalize: null,
      autoComplete: tr,
      autoFocus: Jt,
      autoPlay: Jt,
      capture: Jt,
      charSet: null,
      checked: Jt,
      cite: null,
      className: tr,
      cols: nr,
      colSpan: null,
      content: null,
      contentEditable: Zt,
      controls: Jt,
      controlsList: tr,
      coords: nr | rr,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: Jt,
      defer: Jt,
      dir: null,
      dirName: null,
      disabled: Jt,
      download: er,
      draggable: Zt,
      encType: null,
      enterKeyHint: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: Jt,
      formTarget: null,
      headers: tr,
      height: nr,
      hidden: Jt,
      high: nr,
      href: null,
      hrefLang: null,
      htmlFor: tr,
      httpEquiv: tr,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: Jt,
      itemId: null,
      itemProp: tr,
      itemRef: tr,
      itemScope: Jt,
      itemType: tr,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: Jt,
      low: nr,
      manifest: null,
      max: null,
      maxLength: nr,
      media: null,
      method: null,
      min: null,
      minLength: nr,
      multiple: Jt,
      muted: Jt,
      name: null,
      nonce: null,
      noModule: Jt,
      noValidate: Jt,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: Jt,
      optimum: nr,
      pattern: null,
      ping: tr,
      placeholder: null,
      playsInline: Jt,
      poster: null,
      preload: null,
      readOnly: Jt,
      referrerPolicy: null,
      rel: tr,
      required: Jt,
      reversed: Jt,
      rows: nr,
      rowSpan: nr,
      sandbox: tr,
      scope: null,
      scoped: Jt,
      seamless: Jt,
      selected: Jt,
      shape: null,
      size: nr,
      sizes: null,
      slot: null,
      span: nr,
      spellCheck: Zt,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: nr,
      step: null,
      style: null,
      tabIndex: nr,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: Jt,
      useMap: null,
      value: Zt,
      width: nr,
      wrap: null,
      align: null,
      aLink: null,
      archive: tr,
      axis: null,
      background: null,
      bgColor: null,
      border: nr,
      borderColor: null,
      bottomMargin: nr,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: Jt,
      declare: Jt,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: nr,
      leftMargin: nr,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: nr,
      marginWidth: nr,
      noResize: Jt,
      noHref: Jt,
      noShade: Jt,
      noWrap: Jt,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: nr,
      rules: null,
      scheme: null,
      scrolling: Zt,
      standby: null,
      summary: null,
      text: null,
      topMargin: nr,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: nr,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: Jt,
      disableRemotePlayback: Jt,
      prefix: null,
      property: null,
      results: nr,
      security: null,
      unselectable: null,
    },
  }),
  yr = cr({
    space: "svg",
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin",
    },
    transform: pr,
    properties: {
      about: or,
      accentHeight: nr,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: nr,
      amplitude: nr,
      arabicForm: null,
      ascent: nr,
      attributeName: null,
      attributeType: null,
      azimuth: nr,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: nr,
      by: null,
      calcMode: null,
      capHeight: nr,
      className: tr,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: nr,
      diffuseConstant: nr,
      direction: null,
      display: null,
      dur: null,
      divisor: nr,
      dominantBaseline: null,
      download: Jt,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: nr,
      enableBackground: null,
      end: null,
      event: null,
      exponent: nr,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: nr,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: rr,
      g2: rr,
      glyphName: rr,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: nr,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: nr,
      horizOriginX: nr,
      horizOriginY: nr,
      id: null,
      ideographic: nr,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: nr,
      k: nr,
      k1: nr,
      k2: nr,
      k3: nr,
      k4: nr,
      kernelMatrix: or,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: nr,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: nr,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: nr,
      overlineThickness: nr,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: nr,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: tr,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: nr,
      pointsAtY: nr,
      pointsAtZ: nr,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: or,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: or,
      rev: or,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: or,
      requiredFeatures: or,
      requiredFonts: or,
      requiredFormats: or,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: nr,
      specularExponent: nr,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: nr,
      strikethroughThickness: nr,
      string: null,
      stroke: null,
      strokeDashArray: or,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: nr,
      strokeOpacity: nr,
      strokeWidth: null,
      style: null,
      surfaceScale: nr,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: or,
      tabIndex: nr,
      tableValues: null,
      target: null,
      targetX: nr,
      targetY: nr,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: or,
      to: null,
      transform: null,
      u1: null,
      u2: null,
      underlinePosition: nr,
      underlineThickness: nr,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: nr,
      values: null,
      vAlphabetic: nr,
      vMathematical: nr,
      vectorEffect: null,
      vHanging: nr,
      vIdeographic: nr,
      version: null,
      vertAdvY: nr,
      vertOriginX: nr,
      vertOriginY: nr,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: nr,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
  }),
  vr = /^data[-\w.:]+$/i,
  kr = /-[a-z]/g,
  xr = /[A-Z]/g;
function wr(e, n) {
  const t = Qt(n);
  let r = n,
    o = Yt;
  if (t in e.normal) return e.property[e.normal[t]];
  if (t.length > 4 && "data" === t.slice(0, 4) && vr.test(n)) {
    if ("-" === n.charAt(4)) {
      const e = n.slice(5).replace(kr, Er);
      r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
    } else {
      const e = n.slice(4);
      if (!kr.test(e)) {
        let t = e.replace(xr, Sr);
        "-" !== t.charAt(0) && (t = "-" + t), (n = "data" + t);
      }
    }
    o = ir;
  }
  return new o(r, n);
}
function Sr(e) {
  return "-" + e.toLowerCase();
}
function Er(e) {
  return e.charAt(1).toUpperCase();
}
const Cr = {
    classId: "classID",
    dataType: "datatype",
    itemId: "itemID",
    strokeDashArray: "strokeDasharray",
    strokeDashOffset: "strokeDashoffset",
    strokeLineCap: "strokeLinecap",
    strokeLineJoin: "strokeLinejoin",
    strokeMiterLimit: "strokeMiterlimit",
    typeOf: "typeof",
    xLinkActuate: "xlinkActuate",
    xLinkArcRole: "xlinkArcrole",
    xLinkHref: "xlinkHref",
    xLinkRole: "xlinkRole",
    xLinkShow: "xlinkShow",
    xLinkTitle: "xlinkTitle",
    xLinkType: "xlinkType",
    xmlnsXLink: "xmlnsXlink",
  },
  Nr = Gt([fr, dr, gr, mr, br], "html"),
  Lr = Gt([fr, dr, gr, mr, yr], "svg");
function Ar(e) {
  if (e.allowedElements && e.disallowedElements)
    throw new TypeError(
      "Only one of `allowedElements` and `disallowedElements` should be defined"
    );
  if (e.allowedElements || e.disallowedElements || e.allowElement)
    return (n) => {
      vt(n, "element", (n, t, r) => {
        const o = r;
        let l;
        if (
          (e.allowedElements
            ? (l = !e.allowedElements.includes(n.tagName))
            : e.disallowedElements &&
              (l = e.disallowedElements.includes(n.tagName)),
          !l &&
            e.allowElement &&
            "number" == typeof t &&
            (l = !e.allowElement(n, t, o)),
          l && "number" == typeof t)
        )
          return (
            e.unwrapDisallowed && n.children
              ? o.children.splice(t, 1, ...n.children)
              : o.children.splice(t, 1),
            t
          );
      });
    };
}
const Tr = ["http", "https", "mailto", "tel"];
var Pr;
u = l("fYo6y");
function Fr(e, n) {
  const t = n || {};
  return ("" === e[e.length - 1] ? [...e, ""] : e)
    .join((t.padRight ? " " : "") + "," + (!1 === t.padLeft ? "" : " "))
    .trim();
}
Pr = l("2pHqv");
var Or,
  _r,
  Rr = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
  Dr = /\n/g,
  Ir = /^\s*/,
  jr = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
  zr = /^:\s*/,
  Mr = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
  Ur = /^[;\s]*/,
  qr = /^\s+|\s+$/g,
  Br = "";
function Hr(e) {
  return e ? e.replace(qr, Br) : Br;
}
(_r = function (e, n) {
  if ("string" != typeof e)
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  n = n || {};
  var t = 1,
    r = 1;
  function o(e) {
    var n = e.match(Dr);
    n && (t += n.length);
    var o = e.lastIndexOf("\n");
    r = ~o ? e.length - o : r + e.length;
  }
  function l() {
    var e = { line: t, column: r };
    return function (n) {
      return (n.position = new a(e)), c(), n;
    };
  }
  function a(e) {
    (this.start = e),
      (this.end = { line: t, column: r }),
      (this.source = n.source);
  }
  a.prototype.content = e;
  var i = [];
  function s(o) {
    var l = new Error(n.source + ":" + t + ":" + r + ": " + o);
    if (
      ((l.reason = o),
      (l.filename = n.source),
      (l.line = t),
      (l.column = r),
      (l.source = e),
      !n.silent)
    )
      throw l;
    i.push(l);
  }
  function u(n) {
    var t = n.exec(e);
    if (t) {
      var r = t[0];
      return o(r), (e = e.slice(r.length)), t;
    }
  }
  function c() {
    u(Ir);
  }
  function d(e) {
    var n;
    for (e = e || []; (n = f()); ) !1 !== n && e.push(n);
    return e;
  }
  function f() {
    var n = l();
    if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
      for (
        var t = 2;
        Br != e.charAt(t) && ("*" != e.charAt(t) || "/" != e.charAt(t + 1));

      )
        ++t;
      if (((t += 2), Br === e.charAt(t - 1)))
        return s("End of comment missing");
      var a = e.slice(2, t - 2);
      return (
        (r += 2),
        o(a),
        (e = e.slice(t)),
        (r += 2),
        n({ type: "comment", comment: a })
      );
    }
  }
  function p() {
    var e = l(),
      n = u(jr);
    if (n) {
      if ((f(), !u(zr))) return s("property missing ':'");
      var t = u(Mr),
        r = e({
          type: "declaration",
          property: Hr(n[0].replace(Rr, Br)),
          value: t ? Hr(t[0].replace(Rr, Br)) : Br,
        });
      return u(Ur), r;
    }
  }
  return (
    c(),
    (function () {
      var e,
        n = [];
      for (d(n); (e = p()); ) !1 !== e && (n.push(e), d(n));
      return n;
    })()
  );
}),
  (Or = function (e, n) {
    var t,
      r = null;
    if (!e || "string" != typeof e) return r;
    for (
      var o, l, a = _r(e), i = "function" == typeof n, s = 0, u = a.length;
      s < u;
      s++
    )
      (o = (t = a[s]).property),
        (l = t.value),
        i ? n(o, l, t) : l && (r || (r = {}), (r[o] = l));
    return r;
  });
const $r = {}.hasOwnProperty,
  Vr = new Set(["table", "thead", "tbody", "tfoot", "tr"]);
function Wr(e, n) {
  const t = [];
  let r,
    o = -1;
  for (; ++o < n.children.length; )
    (r = n.children[o]),
      "element" === r.type
        ? t.push(Gr(e, r, o, n))
        : "text" === r.type
        ? ("element" === n.type &&
            Vr.has(n.tagName) &&
            ((a = void 0),
            "string" ==
              typeof (a =
                (l = r) && "object" == typeof l && "text" === l.type
                  ? l.value || ""
                  : l) && "" === a.replace(/[ \t\n\f\r]/g, ""))) ||
          t.push(r.value)
        : "raw" !== r.type || e.options.skipHtml || t.push(r.value);
  var l, a;
  return t;
}
function Gr(e, t, r, o) {
  const l = e.options,
    a = e.schema,
    i = t.tagName,
    s = {};
  let c,
    d = a;
  if (
    ("html" === a.space && "svg" === i && ((d = Lr), (e.schema = d)),
    t.properties)
  )
    for (c in t.properties)
      $r.call(t.properties, c) && Yr(s, c, t.properties[c], e);
  ("ol" !== i && "ul" !== i) || e.listDepth++;
  const f = Wr(e, t);
  ("ol" !== i && "ul" !== i) || e.listDepth--, (e.schema = a);
  const p = t.position || {
      start: { line: null, column: null, offset: null },
      end: { line: null, column: null, offset: null },
    },
    h = l.components && $r.call(l.components, i) ? l.components[i] : i,
    g = "string" == typeof h || h === n(u).Fragment;
  if (!n(Pr).isValidElementType(h))
    throw new TypeError(
      `Component for name \`${i}\` not defined or is not renderable`
    );
  if (
    ((s.key = [i, p.start.line, p.start.column, r].join("-")),
    "a" === i &&
      l.linkTarget &&
      (s.target =
        "function" == typeof l.linkTarget
          ? l.linkTarget(
              String(s.href || ""),
              t.children,
              "string" == typeof s.title ? s.title : null
            )
          : l.linkTarget),
    "a" === i &&
      l.transformLinkUri &&
      (s.href = l.transformLinkUri(
        String(s.href || ""),
        t.children,
        "string" == typeof s.title ? s.title : null
      )),
    g ||
      "code" !== i ||
      "element" !== o.type ||
      "pre" === o.tagName ||
      (s.inline = !0),
    g ||
      ("h1" !== i &&
        "h2" !== i &&
        "h3" !== i &&
        "h4" !== i &&
        "h5" !== i &&
        "h6" !== i) ||
      (s.level = Number.parseInt(i.charAt(1), 10)),
    "img" === i &&
      l.transformImageUri &&
      (s.src = l.transformImageUri(
        String(s.src || ""),
        String(s.alt || ""),
        "string" == typeof s.title ? s.title : null
      )),
    !g && "li" === i && "element" === o.type)
  ) {
    const e = (function (e) {
      let n = -1;
      for (; ++n < e.children.length; ) {
        const t = e.children[n];
        if ("element" === t.type && "input" === t.tagName) return t;
      }
      return null;
    })(t);
    (s.checked = e && e.properties ? Boolean(e.properties.checked) : null),
      (s.index = Qr(o, t)),
      (s.ordered = "ol" === o.tagName);
  }
  var m;
  return (
    g ||
      ("ol" !== i && "ul" !== i) ||
      ((s.ordered = "ol" === i), (s.depth = e.listDepth)),
    ("td" !== i && "th" !== i) ||
      (s.align &&
        (s.style || (s.style = {}),
        (s.style.textAlign = s.align),
        delete s.align),
      g || (s.isHeader = "th" === i)),
    g ||
      "tr" !== i ||
      "element" !== o.type ||
      (s.isHeader = Boolean("thead" === o.tagName)),
    l.sourcePos &&
      (s["data-sourcepos"] = [
        (m = p).start.line,
        ":",
        m.start.column,
        "-",
        m.end.line,
        ":",
        m.end.column,
      ]
        .map(String)
        .join("")),
    !g && l.rawSourcePos && (s.sourcePosition = t.position),
    !g &&
      l.includeElementIndex &&
      ((s.index = Qr(o, t)), (s.siblingCount = Qr(o))),
    g || (s.node = t),
    f.length > 0 ? n(u).createElement(h, s, f) : n(u).createElement(h, s)
  );
}
function Qr(e, n) {
  let t = -1,
    r = 0;
  for (; ++t < e.children.length && e.children[t] !== n; )
    "element" === e.children[t].type && r++;
  return r;
}
function Yr(e, t, r, o) {
  const l = wr(o.schema, t);
  let a = r;
  null != a &&
    a == a &&
    (Array.isArray(a) && (a = l.commaSeparated ? Fr(a) : a.join(" ").trim()),
    "style" === l.property &&
      "string" == typeof a &&
      (a = (function (e) {
        const t = {};
        try {
          n(Or)(e, r);
        } catch {}
        return t;
        function r(e, n) {
          const r = "-ms-" === e.slice(0, 4) ? `ms-${e.slice(4)}` : e;
          t[r.replace(/-([a-z])/g, Kr)] = n;
        }
      })(a)),
    l.space && l.property
      ? (e[$r.call(Cr, l.property) ? Cr[l.property] : l.property] = a)
      : l.attribute && (e[l.attribute] = a));
}
function Kr(e, n) {
  return n.toUpperCase();
}
const Xr = {}.hasOwnProperty,
  Jr = {
    plugins: { to: "plugins", id: "change-plugins-to-remarkplugins" },
    renderers: { to: "components", id: "change-renderers-to-components" },
    astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
    allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
    escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
    source: { to: "children", id: "change-source-to-children" },
    allowNode: {
      to: "allowElement",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
    },
    allowedTypes: {
      to: "allowedElements",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
    },
    disallowedTypes: {
      to: "disallowedElements",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
    },
    includeNodeIndex: {
      to: "includeElementIndex",
      id: "change-includenodeindex-to-includeelementindex",
    },
  };
function Zr(e) {
  for (const n in Jr)
    if (Xr.call(Jr, n) && Xr.call(e, n)) {
      const e = Jr[n];
      console.warn(
        `[react-markdown] Warning: please ${
          e.to ? `use \`${e.to}\` instead of` : "remove"
        } \`${n}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${
          e.id
        }> for more info)`
      ),
        delete Jr[n];
    }
  const t = ge()
      .use(pt)
      .use(e.remarkPlugins || [])
      .use($t, { ...e.remarkRehypeOptions, allowDangerousHtml: !0 })
      .use(e.rehypePlugins || [])
      .use(Ar, e),
    r = new Z();
  "string" == typeof e.children
    ? (r.value = e.children)
    : void 0 !== e.children &&
      null !== e.children &&
      console.warn(
        `[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`
      );
  const o = t.runSync(t.parse(r), r);
  if ("root" !== o.type) throw new TypeError("Expected a `root` node");
  let l = n(u).createElement(
    n(u).Fragment,
    {},
    Wr({ options: e, schema: Nr, listDepth: 0 }, o)
  );
  return (
    e.className &&
      (l = n(u).createElement("div", { className: e.className }, l)),
    l
  );
}
(Zr.defaultProps = {
  transformLinkUri: function (e) {
    const n = (e || "").trim(),
      t = n.charAt(0);
    if ("#" === t || "/" === t) return n;
    const r = n.indexOf(":");
    if (-1 === r) return n;
    let o = -1;
    for (; ++o < Tr.length; ) {
      const e = Tr[o];
      if (r === e.length && n.slice(0, e.length).toLowerCase() === e) return n;
    }
    return (
      (o = n.indexOf("?")),
      -1 !== o && r > o
        ? n
        : ((o = n.indexOf("#")), -1 !== o && r > o ? n : "javascript:void(0)")
    );
  },
}),
  (Zr.propTypes = {
    children: n(Vt).string,
    className: n(Vt).string,
    allowElement: n(Vt).func,
    allowedElements: n(Vt).arrayOf(n(Vt).string),
    disallowedElements: n(Vt).arrayOf(n(Vt).string),
    unwrapDisallowed: n(Vt).bool,
    remarkPlugins: n(Vt).arrayOf(
      n(Vt).oneOfType([
        n(Vt).object,
        n(Vt).func,
        n(Vt).arrayOf(
          n(Vt).oneOfType([
            n(Vt).bool,
            n(Vt).string,
            n(Vt).object,
            n(Vt).func,
            n(Vt).arrayOf(n(Vt).any),
          ])
        ),
      ])
    ),
    rehypePlugins: n(Vt).arrayOf(
      n(Vt).oneOfType([
        n(Vt).object,
        n(Vt).func,
        n(Vt).arrayOf(
          n(Vt).oneOfType([
            n(Vt).bool,
            n(Vt).string,
            n(Vt).object,
            n(Vt).func,
            n(Vt).arrayOf(n(Vt).any),
          ])
        ),
      ])
    ),
    sourcePos: n(Vt).bool,
    rawSourcePos: n(Vt).bool,
    skipHtml: n(Vt).bool,
    includeElementIndex: n(Vt).bool,
    transformLinkUri: n(Vt).oneOfType([n(Vt).func, n(Vt).bool]),
    linkTarget: n(Vt).oneOfType([n(Vt).func, n(Vt).string]),
    transformImageUri: n(Vt).func,
    components: n(Vt).object,
  });
const eo = /[\t ]*(?:\r?\n|\r)/g;
function no() {
  return (e) => {
    vt(e, "text", (e, n, t) => {
      const r = [];
      let o = 0;
      eo.lastIndex = 0;
      let l = eo.exec(e.value);
      for (; l; ) {
        const n = l.index;
        o !== n && r.push({ type: "text", value: e.value.slice(o, n) }),
          r.push({ type: "break" }),
          (o = n + l[0].length),
          (l = eo.exec(e.value));
      }
      if (r.length > 0 && t && "number" == typeof n)
        return (
          o < e.value.length &&
            r.push({ type: "text", value: e.value.slice(o) }),
          t.children.splice(n, 1, ...r),
          n + r.length
        );
    });
  };
}
var to = {},
  ro = {};
((ro = function (e, n) {
  if (null == e) return {};
  var t,
    r,
    o = {},
    l = Object.keys(e);
  for (r = 0; r < l.length; r++) (t = l[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
  return o;
}).__esModule = !0),
  (ro.default = ro),
  ((to = function (e, n) {
    if (null == e) return {};
    var t,
      r,
      o = ro(e, n);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++)
        (t = l[r]),
          n.indexOf(t) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
    }
    return o;
  }).__esModule = !0),
  (to.default = to);
var oo = {},
  lo = {},
  ao = {};
((ao = function (e, n) {
  (null == n || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
  return r;
}).__esModule = !0),
  (ao.default = ao),
  ((lo = function (e) {
    if (Array.isArray(e)) return ao(e);
  }).__esModule = !0),
  (lo.default = lo);
var io = {};
((io = function (e) {
  if (
    ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
    null != e["@@iterator"]
  )
    return Array.from(e);
}).__esModule = !0),
  (io.default = io);
var so = {};
((so = function (e, n) {
  if (e) {
    if ("string" == typeof e) return ao(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    return (
      "Object" === t && e.constructor && (t = e.constructor.name),
      "Map" === t || "Set" === t
        ? Array.from(e)
        : "Arguments" === t ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? ao(e, n)
        : void 0
    );
  }
}).__esModule = !0),
  (so.default = so);
var uo = {};
((uo = function () {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}).__esModule = !0),
  (uo.default = uo),
  ((oo = function (e) {
    return lo(e) || io(e) || so(e) || uo();
  }).__esModule = !0),
  (oo.default = oo);
var co = {};
((co = function (e, n, t) {
  return (
    n in e
      ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[n] = t),
    e
  );
}).__esModule = !0),
  (co.default = co);
u = l("fYo6y");
var fo = {};
function po() {
  return (
    (fo = po =
      Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }),
    (fo.__esModule = !0),
    (fo.default = fo),
    po.apply(this, arguments)
  );
}
((fo = po).__esModule = !0), (fo.default = fo);
u = l("fYo6y");
function ho(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n &&
      (r = r.filter(function (n) {
        return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, r);
  }
  return t;
}
function go(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? ho(Object(r), !0).forEach(function (t) {
          n(co)(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ho(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
var mo = {};
function bo(e) {
  if (0 === e.length || 1 === e.length) return e;
  var n,
    t,
    r = e.join(".");
  return (
    mo[r] ||
      (mo[r] =
        0 === (t = (n = e).length) || 1 === t
          ? n
          : 2 === t
          ? [
              n[0],
              n[1],
              "".concat(n[0], ".").concat(n[1]),
              "".concat(n[1], ".").concat(n[0]),
            ]
          : 3 === t
          ? [
              n[0],
              n[1],
              n[2],
              "".concat(n[0], ".").concat(n[1]),
              "".concat(n[0], ".").concat(n[2]),
              "".concat(n[1], ".").concat(n[0]),
              "".concat(n[1], ".").concat(n[2]),
              "".concat(n[2], ".").concat(n[0]),
              "".concat(n[2], ".").concat(n[1]),
              "".concat(n[0], ".").concat(n[1], ".").concat(n[2]),
              "".concat(n[0], ".").concat(n[2], ".").concat(n[1]),
              "".concat(n[1], ".").concat(n[0], ".").concat(n[2]),
              "".concat(n[1], ".").concat(n[2], ".").concat(n[0]),
              "".concat(n[2], ".").concat(n[0], ".").concat(n[1]),
              "".concat(n[2], ".").concat(n[1], ".").concat(n[0]),
            ]
          : t >= 4
          ? [
              n[0],
              n[1],
              n[2],
              n[3],
              "".concat(n[0], ".").concat(n[1]),
              "".concat(n[0], ".").concat(n[2]),
              "".concat(n[0], ".").concat(n[3]),
              "".concat(n[1], ".").concat(n[0]),
              "".concat(n[1], ".").concat(n[2]),
              "".concat(n[1], ".").concat(n[3]),
              "".concat(n[2], ".").concat(n[0]),
              "".concat(n[2], ".").concat(n[1]),
              "".concat(n[2], ".").concat(n[3]),
              "".concat(n[3], ".").concat(n[0]),
              "".concat(n[3], ".").concat(n[1]),
              "".concat(n[3], ".").concat(n[2]),
              "".concat(n[0], ".").concat(n[1], ".").concat(n[2]),
              "".concat(n[0], ".").concat(n[1], ".").concat(n[3]),
              "".concat(n[0], ".").concat(n[2], ".").concat(n[1]),
              "".concat(n[0], ".").concat(n[2], ".").concat(n[3]),
              "".concat(n[0], ".").concat(n[3], ".").concat(n[1]),
              "".concat(n[0], ".").concat(n[3], ".").concat(n[2]),
              "".concat(n[1], ".").concat(n[0], ".").concat(n[2]),
              "".concat(n[1], ".").concat(n[0], ".").concat(n[3]),
              "".concat(n[1], ".").concat(n[2], ".").concat(n[0]),
              "".concat(n[1], ".").concat(n[2], ".").concat(n[3]),
              "".concat(n[1], ".").concat(n[3], ".").concat(n[0]),
              "".concat(n[1], ".").concat(n[3], ".").concat(n[2]),
              "".concat(n[2], ".").concat(n[0], ".").concat(n[1]),
              "".concat(n[2], ".").concat(n[0], ".").concat(n[3]),
              "".concat(n[2], ".").concat(n[1], ".").concat(n[0]),
              "".concat(n[2], ".").concat(n[1], ".").concat(n[3]),
              "".concat(n[2], ".").concat(n[3], ".").concat(n[0]),
              "".concat(n[2], ".").concat(n[3], ".").concat(n[1]),
              "".concat(n[3], ".").concat(n[0], ".").concat(n[1]),
              "".concat(n[3], ".").concat(n[0], ".").concat(n[2]),
              "".concat(n[3], ".").concat(n[1], ".").concat(n[0]),
              "".concat(n[3], ".").concat(n[1], ".").concat(n[2]),
              "".concat(n[3], ".").concat(n[2], ".").concat(n[0]),
              "".concat(n[3], ".").concat(n[2], ".").concat(n[1]),
              ""
                .concat(n[0], ".")
                .concat(n[1], ".")
                .concat(n[2], ".")
                .concat(n[3]),
              ""
                .concat(n[0], ".")
                .concat(n[1], ".")
                .concat(n[3], ".")
                .concat(n[2]),
              ""
                .concat(n[0], ".")
                .concat(n[2], ".")
                .concat(n[1], ".")
                .concat(n[3]),
              ""
                .concat(n[0], ".")
                .concat(n[2], ".")
                .concat(n[3], ".")
                .concat(n[1]),
              ""
                .concat(n[0], ".")
                .concat(n[3], ".")
                .concat(n[1], ".")
                .concat(n[2]),
              ""
                .concat(n[0], ".")
                .concat(n[3], ".")
                .concat(n[2], ".")
                .concat(n[1]),
              ""
                .concat(n[1], ".")
                .concat(n[0], ".")
                .concat(n[2], ".")
                .concat(n[3]),
              ""
                .concat(n[1], ".")
                .concat(n[0], ".")
                .concat(n[3], ".")
                .concat(n[2]),
              ""
                .concat(n[1], ".")
                .concat(n[2], ".")
                .concat(n[0], ".")
                .concat(n[3]),
              ""
                .concat(n[1], ".")
                .concat(n[2], ".")
                .concat(n[3], ".")
                .concat(n[0]),
              ""
                .concat(n[1], ".")
                .concat(n[3], ".")
                .concat(n[0], ".")
                .concat(n[2]),
              ""
                .concat(n[1], ".")
                .concat(n[3], ".")
                .concat(n[2], ".")
                .concat(n[0]),
              ""
                .concat(n[2], ".")
                .concat(n[0], ".")
                .concat(n[1], ".")
                .concat(n[3]),
              ""
                .concat(n[2], ".")
                .concat(n[0], ".")
                .concat(n[3], ".")
                .concat(n[1]),
              ""
                .concat(n[2], ".")
                .concat(n[1], ".")
                .concat(n[0], ".")
                .concat(n[3]),
              ""
                .concat(n[2], ".")
                .concat(n[1], ".")
                .concat(n[3], ".")
                .concat(n[0]),
              ""
                .concat(n[2], ".")
                .concat(n[3], ".")
                .concat(n[0], ".")
                .concat(n[1]),
              ""
                .concat(n[2], ".")
                .concat(n[3], ".")
                .concat(n[1], ".")
                .concat(n[0]),
              ""
                .concat(n[3], ".")
                .concat(n[0], ".")
                .concat(n[1], ".")
                .concat(n[2]),
              ""
                .concat(n[3], ".")
                .concat(n[0], ".")
                .concat(n[2], ".")
                .concat(n[1]),
              ""
                .concat(n[3], ".")
                .concat(n[1], ".")
                .concat(n[0], ".")
                .concat(n[2]),
              ""
                .concat(n[3], ".")
                .concat(n[1], ".")
                .concat(n[2], ".")
                .concat(n[0]),
              ""
                .concat(n[3], ".")
                .concat(n[2], ".")
                .concat(n[0], ".")
                .concat(n[1]),
              ""
                .concat(n[3], ".")
                .concat(n[2], ".")
                .concat(n[1], ".")
                .concat(n[0]),
            ]
          : void 0),
    mo[r]
  );
}
function yo(e) {
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    t = arguments.length > 2 ? arguments[2] : void 0,
    r = e.filter(function (e) {
      return "token" !== e;
    }),
    o = bo(r);
  return o.reduce(function (e, n) {
    return go(go({}, e), t[n]);
  }, n);
}
function vo(e) {
  return e.join(" ");
}
function ko(e) {
  var t = e.node,
    r = e.stylesheet,
    o = e.style,
    l = void 0 === o ? {} : o,
    a = e.useInlineStyles,
    i = e.key,
    s = t.properties,
    c = t.type,
    d = t.tagName,
    f = t.value;
  if ("text" === c) return f;
  if (d) {
    var p,
      h = (function (e, n) {
        var t = 0;
        return function (r) {
          return (
            (t += 1),
            r.map(function (r, o) {
              return ko({
                node: r,
                stylesheet: e,
                useInlineStyles: n,
                key: "code-segment-".concat(t, "-").concat(o),
              });
            })
          );
        };
      })(r, a);
    if (a) {
      var g = Object.keys(r).reduce(function (e, n) {
          return (
            n.split(".").forEach(function (n) {
              e.includes(n) || e.push(n);
            }),
            e
          );
        }, []),
        m = s.className && s.className.includes("token") ? ["token"] : [],
        b =
          s.className &&
          m.concat(
            s.className.filter(function (e) {
              return !g.includes(e);
            })
          );
      p = go(
        go({}, s),
        {},
        {
          className: vo(b) || void 0,
          style: yo(s.className, Object.assign({}, s.style, l), r),
        }
      );
    } else p = go(go({}, s), {}, { className: vo(s.className) });
    var y = h(t.children);
    return n(u).createElement(d, n(fo)({ key: i }, p), y);
  }
}
var xo = [
  "language",
  "children",
  "style",
  "customStyle",
  "codeTagProps",
  "useInlineStyles",
  "showLineNumbers",
  "showInlineLineNumbers",
  "startingLineNumber",
  "lineNumberContainerStyle",
  "lineNumberStyle",
  "wrapLines",
  "wrapLongLines",
  "lineProps",
  "renderer",
  "PreTag",
  "CodeTag",
  "code",
  "astGenerator",
];
function wo(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n &&
      (r = r.filter(function (n) {
        return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, r);
  }
  return t;
}
function So(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? wo(Object(r), !0).forEach(function (t) {
          n(co)(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : wo(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
var Eo = /\n/g;
function Co(e) {
  var t = e.codeString,
    r = e.codeStyle,
    o = e.containerStyle,
    l = void 0 === o ? { float: "left", paddingRight: "10px" } : o,
    a = e.numberStyle,
    i = void 0 === a ? {} : a,
    s = e.startingLineNumber;
  return n(u).createElement(
    "code",
    { style: Object.assign({}, r, l) },
    (function (e) {
      var t = e.lines,
        r = e.startingLineNumber,
        o = e.style;
      return t.map(function (e, t) {
        var l = t + r;
        return n(u).createElement(
          "span",
          {
            key: "line-".concat(t),
            className: "react-syntax-highlighter-line-number",
            style: "function" == typeof o ? o(l) : o,
          },
          "".concat(l, "\n")
        );
      });
    })({
      lines: t.replace(/\n$/, "").split("\n"),
      style: i,
      startingLineNumber: s,
    })
  );
}
function No(e, n) {
  return {
    type: "element",
    tagName: "span",
    properties: {
      key: "line-number--".concat(e),
      className: [
        "comment",
        "linenumber",
        "react-syntax-highlighter-line-number",
      ],
      style: n,
    },
    children: [{ type: "text", value: e }],
  };
}
function Lo(e, n, t) {
  var r,
    o = {
      display: "inline-block",
      minWidth: ((r = t), "".concat(r.toString().length, ".25em")),
      paddingRight: "1em",
      textAlign: "right",
      userSelect: "none",
    },
    l = "function" == typeof e ? e(n) : e;
  return So(So({}, o), l);
}
function Ao(e) {
  var n = e.children,
    t = e.lineNumber,
    r = e.lineNumberStyle,
    o = e.largestLineNumber,
    l = e.showInlineLineNumbers,
    a = e.lineProps,
    i = void 0 === a ? {} : a,
    s = e.className,
    u = void 0 === s ? [] : s,
    c = e.showLineNumbers,
    d = e.wrapLongLines,
    f = "function" == typeof i ? i(t) : i;
  if (((f.className = u), t && l)) {
    var p = Lo(r, t, o);
    n.unshift(No(t, p));
  }
  return (
    d & c && (f.style = So(So({}, f.style), {}, { display: "flex" })),
    { type: "element", tagName: "span", properties: f, children: n }
  );
}
function To(e) {
  for (
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
      o = 0;
    o < e.length;
    o++
  ) {
    var l = e[o];
    if ("text" === l.type)
      r.push(Ao({ children: [l], className: n(oo)(new Set(t)) }));
    else if (l.children) {
      var a = t.concat(l.properties.className);
      To(l.children, a).forEach(function (e) {
        return r.push(e);
      });
    }
  }
  return r;
}
function Po(e, n, t, r, o, l, a, i, s) {
  var u,
    c = To(e.value),
    d = [],
    f = -1,
    p = 0;
  function h(e, n) {
    var l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    return Ao({
      children: e,
      lineNumber: n,
      lineNumberStyle: i,
      largestLineNumber: a,
      showInlineLineNumbers: o,
      lineProps: t,
      className: l,
      showLineNumbers: r,
      wrapLongLines: s,
    });
  }
  function g(e, n) {
    if (r && n && o) {
      var t = Lo(i, n, a);
      e.unshift(No(n, t));
    }
    return e;
  }
  function m(e, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    return n || r.length > 0 ? h(e, t, r) : g(e, t);
  }
  for (
    var b = function () {
      var e = c[p],
        n = e.children[0].value;
      if (n.match(Eo)) {
        var t = n.split("\n");
        t.forEach(function (n, o) {
          var a = r && d.length + l,
            i = { type: "text", value: "".concat(n, "\n") };
          if (0 === o) {
            var s = m(
              c
                .slice(f + 1, p)
                .concat(
                  Ao({ children: [i], className: e.properties.className })
                ),
              a
            );
            d.push(s);
          } else if (o === t.length - 1) {
            var u = c[p + 1] && c[p + 1].children && c[p + 1].children[0],
              h = { type: "text", value: "".concat(n) };
            if (u) {
              var g = Ao({ children: [h], className: e.properties.className });
              c.splice(p + 1, 0, g);
            } else {
              var b = m([h], a, e.properties.className);
              d.push(b);
            }
          } else {
            var y = m([i], a, e.properties.className);
            d.push(y);
          }
        }),
          (f = p);
      }
      p++;
    };
    p < c.length;

  )
    b();
  if (f !== c.length - 1) {
    var y = c.slice(f + 1, c.length);
    if (y && y.length) {
      var v = m(y, r && d.length + l);
      d.push(v);
    }
  }
  return n ? d : (u = []).concat.apply(u, d);
}
function Fo(e) {
  var n = e.rows,
    t = e.stylesheet,
    r = e.useInlineStyles;
  return n.map(function (e, n) {
    return ko({
      node: e,
      stylesheet: t,
      useInlineStyles: r,
      key: "code-segement".concat(n),
    });
  });
}
function Oo(e) {
  return e && void 0 !== e.highlightAuto;
}
var _o,
  Ro,
  Do,
  Io =
    "object" == typeof globalThis
      ? globalThis
      : "object" == typeof self
      ? self
      : "object" == typeof window
      ? window
      : "object" == typeof t
      ? t
      : {},
  jo =
    ((Do = (Ro = "Prism" in Io) ? Io.Prism : void 0),
    function () {
      Ro ? (Io.Prism = Do) : delete Io.Prism, (Ro = void 0), (Do = void 0);
    });
Io.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
var zo = {};
zo = l("4xIeY");
var Mo,
  Uo = {};
Mo = JSON.parse(
  '{"AElig":"Æ","AMP":"&","Aacute":"Á","Acirc":"Â","Agrave":"À","Aring":"Å","Atilde":"Ã","Auml":"Ä","COPY":"©","Ccedil":"Ç","ETH":"Ð","Eacute":"É","Ecirc":"Ê","Egrave":"È","Euml":"Ë","GT":">","Iacute":"Í","Icirc":"Î","Igrave":"Ì","Iuml":"Ï","LT":"<","Ntilde":"Ñ","Oacute":"Ó","Ocirc":"Ô","Ograve":"Ò","Oslash":"Ø","Otilde":"Õ","Ouml":"Ö","QUOT":"\\"","REG":"®","THORN":"Þ","Uacute":"Ú","Ucirc":"Û","Ugrave":"Ù","Uuml":"Ü","Yacute":"Ý","aacute":"á","acirc":"â","acute":"´","aelig":"æ","agrave":"à","amp":"&","aring":"å","atilde":"ã","auml":"ä","brvbar":"¦","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","curren":"¤","deg":"°","divide":"÷","eacute":"é","ecirc":"ê","egrave":"è","eth":"ð","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","iacute":"í","icirc":"î","iexcl":"¡","igrave":"ì","iquest":"¿","iuml":"ï","laquo":"«","lt":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","ntilde":"ñ","oacute":"ó","ocirc":"ô","ograve":"ò","ordf":"ª","ordm":"º","oslash":"ø","otilde":"õ","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","raquo":"»","reg":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","thorn":"þ","times":"×","uacute":"ú","ucirc":"û","ugrave":"ù","uml":"¨","uuml":"ü","yacute":"ý","yen":"¥","yuml":"ÿ"}'
);
var qo;
qo = JSON.parse(
  '{"0":"�","128":"€","130":"‚","131":"ƒ","132":"„","133":"…","134":"†","135":"‡","136":"ˆ","137":"‰","138":"Š","139":"‹","140":"Œ","142":"Ž","145":"‘","146":"’","147":"“","148":"”","149":"•","150":"–","151":"—","152":"˜","153":"™","154":"š","155":"›","156":"œ","158":"ž","159":"Ÿ"}'
);
var Bo = {};
Bo = function (e) {
  var n = "string" == typeof e ? e.charCodeAt(0) : e;
  return n >= 48 && n <= 57;
};
var Ho;
Ho = function (e) {
  var n = "string" == typeof e ? e.charCodeAt(0) : e;
  return (n >= 97 && n <= 102) || (n >= 65 && n <= 70) || (n >= 48 && n <= 57);
};
var $o = {},
  Vo = {};
(Vo = function (e) {
  var n = "string" == typeof e ? e.charCodeAt(0) : e;
  return (n >= 97 && n <= 122) || (n >= 65 && n <= 90);
}),
  ($o = function (e) {
    return Vo(e) || Bo(e);
  });
var Wo,
  Go = {};
(Go = function (e) {
  var n,
    t = "&" + e + ";";
  return (
    ((Wo = Wo || document.createElement("i")).innerHTML = t),
    (59 !== (n = Wo.textContent).charCodeAt(n.length - 1) || "semi" === e) &&
      n !== t &&
      n
  );
}),
  (Uo = function (e, n) {
    var t,
      r,
      o = {};
    n || (n = {});
    for (r in Xo) (t = n[r]), (o[r] = null == t ? Xo[r] : t);
    (o.position.indent || o.position.start) &&
      ((o.indent = o.position.indent || []), (o.position = o.position.start));
    return (function (e, n) {
      var t,
        r,
        o,
        l,
        a,
        i,
        s,
        u,
        c,
        d,
        f,
        p,
        h,
        g,
        m,
        b,
        y,
        v,
        k,
        x = n.additional,
        w = n.nonTerminated,
        S = n.text,
        E = n.reference,
        C = n.warning,
        N = n.textContext,
        L = n.referenceContext,
        A = n.warningContext,
        T = n.position,
        P = n.indent || [],
        F = e.length,
        O = 0,
        _ = -1,
        R = T.column || 1,
        D = T.line || 1,
        I = "",
        j = [];
      "string" == typeof x && (x = x.charCodeAt(0));
      (b = z()), (u = C ? M : Ko), O--, F++;
      for (; ++O < F; )
        if ((10 === a && (R = P[_] || 1), 38 === (a = e.charCodeAt(O)))) {
          if (
            9 === (s = e.charCodeAt(O + 1)) ||
            10 === s ||
            12 === s ||
            32 === s ||
            38 === s ||
            60 === s ||
            s != s ||
            (x && s === x)
          ) {
            (I += Yo(a)), R++;
            continue;
          }
          for (
            p = h = O + 1,
              k = h,
              35 === s
                ? ((k = ++p),
                  88 === (s = e.charCodeAt(k)) || 120 === s
                    ? ((g = Zo), (k = ++p))
                    : (g = el))
                : (g = Jo),
              t = "",
              f = "",
              l = "",
              m = tl[g],
              k--;
            ++k < F && m((s = e.charCodeAt(k)));

          )
            (l += Yo(s)), g === Jo && Qo.call(Mo, l) && ((t = l), (f = Mo[l]));
          (o = 59 === e.charCodeAt(k)) &&
            (k++, (r = g === Jo && Go(l)) && ((t = l), (f = r))),
            (v = 1 + k - h),
            (o || w) &&
              (l
                ? g === Jo
                  ? (o && !f
                      ? u(5, 1)
                      : (t !== l &&
                          ((v = 1 + (k = p + t.length) - p), (o = !1)),
                        o ||
                          ((c = t ? 1 : 3),
                          n.attribute
                            ? 61 === (s = e.charCodeAt(k))
                              ? (u(c, v), (f = null))
                              : $o(s)
                              ? (f = null)
                              : u(c, v)
                            : u(c, v))),
                    (i = f))
                  : (o || u(2, v),
                    ol((i = parseInt(l, nl[g])))
                      ? (u(7, v), (i = Yo(65533)))
                      : i in qo
                      ? (u(6, v), (i = qo[i]))
                      : ((d = ""),
                        ll(i) && u(6, v),
                        i > 65535 &&
                          ((d += Yo(((i -= 65536) >>> 10) | 55296)),
                          (i = 56320 | (1023 & i))),
                        (i = d + Yo(i))))
                : g !== Jo && u(4, v)),
            i
              ? (U(),
                (b = z()),
                (O = k - 1),
                (R += k - h + 1),
                j.push(i),
                (y = z()).offset++,
                E && E.call(L, i, { start: b, end: y }, e.slice(h - 1, k)),
                (b = y))
              : ((l = e.slice(h - 1, k)),
                (I += l),
                (R += l.length),
                (O = k - 1));
        } else
          10 === a && (D++, _++, (R = 0)), a == a ? ((I += Yo(a)), R++) : U();
      return j.join("");
      function z() {
        return { line: D, column: R, offset: O + (T.offset || 0) };
      }
      function M(e, n) {
        var t = z();
        (t.column += n), (t.offset += n), C.call(A, rl[e], t, e);
      }
      function U() {
        I && (j.push(I), S && S.call(N, I, { start: b, end: z() }), (I = ""));
      }
    })(e, o);
  });
var Qo = {}.hasOwnProperty,
  Yo = String.fromCharCode,
  Ko = Function.prototype,
  Xo = {
    warning: null,
    reference: null,
    text: null,
    warningContext: null,
    referenceContext: null,
    textContext: null,
    position: {},
    additional: null,
    attribute: !1,
    nonTerminated: !0,
  },
  Jo = "named",
  Zo = "hexadecimal",
  el = "decimal",
  nl = {};
(nl[Zo] = 16), (nl[el] = 10);
var tl = {};
(tl[Jo] = $o), (tl[el] = Bo), (tl[Zo] = Ho);
var rl = {};
function ol(e) {
  return (e >= 55296 && e <= 57343) || e > 1114111;
}
function ll(e) {
  return (
    (e >= 1 && e <= 8) ||
    11 === e ||
    (e >= 13 && e <= 31) ||
    (e >= 127 && e <= 159) ||
    (e >= 64976 && e <= 65007) ||
    65535 == (65535 & e) ||
    65534 == (65535 & e)
  );
}
(rl[1] = "Named character references must be terminated by a semicolon"),
  (rl[2] = "Numeric character references must be terminated by a semicolon"),
  (rl[3] = "Named character references cannot be empty"),
  (rl[4] = "Numeric character references cannot be empty"),
  (rl[5] = "Named character references must be known"),
  (rl[6] = "Numeric character references cannot be disallowed"),
  (rl[7] =
    "Numeric character references cannot be outside the permissible Unicode range");
var al = {},
  il = (function (e) {
    var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
      t = 0,
      r = {},
      o = {
        manual: e.Prism && e.Prism.manual,
        disableWorkerMessageHandler:
          e.Prism && e.Prism.disableWorkerMessageHandler,
        util: {
          encode: function e(n) {
            return n instanceof l
              ? new l(n.type, e(n.content), n.alias)
              : Array.isArray(n)
              ? n.map(e)
              : n
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/\u00a0/g, " ");
          },
          type: function (e) {
            return Object.prototype.toString.call(e).slice(8, -1);
          },
          objId: function (e) {
            return (
              e.__id || Object.defineProperty(e, "__id", { value: ++t }), e.__id
            );
          },
          clone: function e(n, t) {
            var r, l;
            switch (((t = t || {}), o.util.type(n))) {
              case "Object":
                if (((l = o.util.objId(n)), t[l])) return t[l];
                for (var a in ((r = {}), (t[l] = r), n))
                  n.hasOwnProperty(a) && (r[a] = e(n[a], t));
                return r;
              case "Array":
                return (
                  (l = o.util.objId(n)),
                  t[l]
                    ? t[l]
                    : ((r = []),
                      (t[l] = r),
                      n.forEach(function (n, o) {
                        r[o] = e(n, t);
                      }),
                      r)
                );
              default:
                return n;
            }
          },
          getLanguage: function (e) {
            for (; e; ) {
              var t = n.exec(e.className);
              if (t) return t[1].toLowerCase();
              e = e.parentElement;
            }
            return "none";
          },
          setLanguage: function (e, t) {
            (e.className = e.className.replace(RegExp(n, "gi"), "")),
              e.classList.add("language-" + t);
          },
          currentScript: function () {
            if ("undefined" == typeof document) return null;
            if ("currentScript" in document) return document.currentScript;
            try {
              throw new Error();
            } catch (r) {
              var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) ||
                [])[1];
              if (e) {
                var n = document.getElementsByTagName("script");
                for (var t in n) if (n[t].src == e) return n[t];
              }
              return null;
            }
          },
          isActive: function (e, n, t) {
            for (var r = "no-" + n; e; ) {
              var o = e.classList;
              if (o.contains(n)) return !0;
              if (o.contains(r)) return !1;
              e = e.parentElement;
            }
            return !!t;
          },
        },
        languages: {
          plain: r,
          plaintext: r,
          text: r,
          txt: r,
          extend: function (e, n) {
            var t = o.util.clone(o.languages[e]);
            for (var r in n) t[r] = n[r];
            return t;
          },
          insertBefore: function (e, n, t, r) {
            var l = (r = r || o.languages)[e],
              a = {};
            for (var i in l)
              if (l.hasOwnProperty(i)) {
                if (i == n)
                  for (var s in t) t.hasOwnProperty(s) && (a[s] = t[s]);
                t.hasOwnProperty(i) || (a[i] = l[i]);
              }
            var u = r[e];
            return (
              (r[e] = a),
              o.languages.DFS(o.languages, function (n, t) {
                t === u && n != e && (this[n] = a);
              }),
              a
            );
          },
          DFS: function e(n, t, r, l) {
            l = l || {};
            var a = o.util.objId;
            for (var i in n)
              if (n.hasOwnProperty(i)) {
                t.call(n, i, n[i], r || i);
                var s = n[i],
                  u = o.util.type(s);
                "Object" !== u || l[a(s)]
                  ? "Array" !== u || l[a(s)] || ((l[a(s)] = !0), e(s, t, i, l))
                  : ((l[a(s)] = !0), e(s, t, null, l));
              }
          },
        },
        plugins: {},
        highlightAll: function (e, n) {
          o.highlightAllUnder(document, e, n);
        },
        highlightAllUnder: function (e, n, t) {
          var r = {
            callback: t,
            container: e,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
          };
          o.hooks.run("before-highlightall", r),
            (r.elements = Array.prototype.slice.apply(
              r.container.querySelectorAll(r.selector)
            )),
            o.hooks.run("before-all-elements-highlight", r);
          for (var l, a = 0; (l = r.elements[a++]); )
            o.highlightElement(l, !0 === n, r.callback);
        },
        highlightElement: function (n, t, r) {
          var l = o.util.getLanguage(n),
            a = o.languages[l];
          o.util.setLanguage(n, l);
          var i = n.parentElement;
          i && "pre" === i.nodeName.toLowerCase() && o.util.setLanguage(i, l);
          var s = { element: n, language: l, grammar: a, code: n.textContent };
          function u(e) {
            (s.highlightedCode = e),
              o.hooks.run("before-insert", s),
              (s.element.innerHTML = s.highlightedCode),
              o.hooks.run("after-highlight", s),
              o.hooks.run("complete", s),
              r && r.call(s.element);
          }
          if (
            (o.hooks.run("before-sanity-check", s),
            (i = s.element.parentElement) &&
              "pre" === i.nodeName.toLowerCase() &&
              !i.hasAttribute("tabindex") &&
              i.setAttribute("tabindex", "0"),
            !s.code)
          )
            return o.hooks.run("complete", s), void (r && r.call(s.element));
          if ((o.hooks.run("before-highlight", s), s.grammar))
            if (t && e.Worker) {
              var c = new Worker(o.filename);
              (c.onmessage = function (e) {
                u(e.data);
              }),
                c.postMessage(
                  JSON.stringify({
                    language: s.language,
                    code: s.code,
                    immediateClose: !0,
                  })
                );
            } else u(o.highlight(s.code, s.grammar, s.language));
          else u(o.util.encode(s.code));
        },
        highlight: function (e, n, t) {
          var r = { code: e, grammar: n, language: t };
          if ((o.hooks.run("before-tokenize", r), !r.grammar))
            throw new Error(
              'The language "' + r.language + '" has no grammar.'
            );
          return (
            (r.tokens = o.tokenize(r.code, r.grammar)),
            o.hooks.run("after-tokenize", r),
            l.stringify(o.util.encode(r.tokens), r.language)
          );
        },
        tokenize: function (e, n) {
          var t = n.rest;
          if (t) {
            for (var r in t) n[r] = t[r];
            delete n.rest;
          }
          var o = new s();
          return (
            u(o, o.head, e),
            i(e, o, n, o.head, 0),
            (function (e) {
              var n = [],
                t = e.head.next;
              for (; t !== e.tail; ) n.push(t.value), (t = t.next);
              return n;
            })(o)
          );
        },
        hooks: {
          all: {},
          add: function (e, n) {
            var t = o.hooks.all;
            (t[e] = t[e] || []), t[e].push(n);
          },
          run: function (e, n) {
            var t = o.hooks.all[e];
            if (t && t.length) for (var r, l = 0; (r = t[l++]); ) r(n);
          },
        },
        Token: l,
      };
    function l(e, n, t, r) {
      (this.type = e),
        (this.content = n),
        (this.alias = t),
        (this.length = 0 | (r || "").length);
    }
    function a(e, n, t, r) {
      e.lastIndex = n;
      var o = e.exec(t);
      if (o && r && o[1]) {
        var l = o[1].length;
        (o.index += l), (o[0] = o[0].slice(l));
      }
      return o;
    }
    function i(e, n, t, r, s, d) {
      for (var f in t)
        if (t.hasOwnProperty(f) && t[f]) {
          var p = t[f];
          p = Array.isArray(p) ? p : [p];
          for (var h = 0; h < p.length; ++h) {
            if (d && d.cause == f + "," + h) return;
            var g = p[h],
              m = g.inside,
              b = !!g.lookbehind,
              y = !!g.greedy,
              v = g.alias;
            if (y && !g.pattern.global) {
              var k = g.pattern.toString().match(/[imsuy]*$/)[0];
              g.pattern = RegExp(g.pattern.source, k + "g");
            }
            for (
              var x = g.pattern || g, w = r.next, S = s;
              w !== n.tail && !(d && S >= d.reach);
              S += w.value.length, w = w.next
            ) {
              var E = w.value;
              if (n.length > e.length) return;
              if (!(E instanceof l)) {
                var C,
                  N = 1;
                if (y) {
                  if (!(C = a(x, S, e, b)) || C.index >= e.length) break;
                  var L = C.index,
                    A = C.index + C[0].length,
                    T = S;
                  for (T += w.value.length; L >= T; )
                    T += (w = w.next).value.length;
                  if (((S = T -= w.value.length), w.value instanceof l))
                    continue;
                  for (
                    var P = w;
                    P !== n.tail && (T < A || "string" == typeof P.value);
                    P = P.next
                  )
                    N++, (T += P.value.length);
                  N--, (E = e.slice(S, T)), (C.index -= S);
                } else if (!(C = a(x, 0, E, b))) continue;
                L = C.index;
                var F = C[0],
                  O = E.slice(0, L),
                  _ = E.slice(L + F.length),
                  R = S + E.length;
                d && R > d.reach && (d.reach = R);
                var D = w.prev;
                if (
                  (O && ((D = u(n, D, O)), (S += O.length)),
                  c(n, D, N),
                  (w = u(n, D, new l(f, m ? o.tokenize(F, m) : F, v, F))),
                  _ && u(n, w, _),
                  N > 1)
                ) {
                  var I = { cause: f + "," + h, reach: R };
                  i(e, n, t, w.prev, S, I),
                    d && I.reach > d.reach && (d.reach = I.reach);
                }
              }
            }
          }
        }
    }
    function s() {
      var e = { value: null, prev: null, next: null },
        n = { value: null, prev: e, next: null };
      (e.next = n), (this.head = e), (this.tail = n), (this.length = 0);
    }
    function u(e, n, t) {
      var r = n.next,
        o = { value: t, prev: n, next: r };
      return (n.next = o), (r.prev = o), e.length++, o;
    }
    function c(e, n, t) {
      for (var r = n.next, o = 0; o < t && r !== e.tail; o++) r = r.next;
      (n.next = r), (r.prev = n), (e.length -= o);
    }
    if (
      ((e.Prism = o),
      (l.stringify = function e(n, t) {
        if ("string" == typeof n) return n;
        if (Array.isArray(n)) {
          var r = "";
          return (
            n.forEach(function (n) {
              r += e(n, t);
            }),
            r
          );
        }
        var l = {
            type: n.type,
            content: e(n.content, t),
            tag: "span",
            classes: ["token", n.type],
            attributes: {},
            language: t,
          },
          a = n.alias;
        a &&
          (Array.isArray(a)
            ? Array.prototype.push.apply(l.classes, a)
            : l.classes.push(a)),
          o.hooks.run("wrap", l);
        var i = "";
        for (var s in l.attributes)
          i +=
            " " +
            s +
            '="' +
            (l.attributes[s] || "").replace(/"/g, "&quot;") +
            '"';
        return (
          "<" +
          l.tag +
          ' class="' +
          l.classes.join(" ") +
          '"' +
          i +
          ">" +
          l.content +
          "</" +
          l.tag +
          ">"
        );
      }),
      !e.document)
    )
      return e.addEventListener
        ? (o.disableWorkerMessageHandler ||
            e.addEventListener(
              "message",
              function (n) {
                var t = JSON.parse(n.data),
                  r = t.language,
                  l = t.code,
                  a = t.immediateClose;
                e.postMessage(o.highlight(l, o.languages[r], r)),
                  a && e.close();
              },
              !1
            ),
          o)
        : o;
    var d = o.util.currentScript();
    function f() {
      o.manual || o.highlightAll();
    }
    if (
      (d &&
        ((o.filename = d.src),
        d.hasAttribute("data-manual") && (o.manual = !0)),
      !o.manual)
    ) {
      var p = document.readyState;
      "loading" === p || ("interactive" === p && d && d.defer)
        ? document.addEventListener("DOMContentLoaded", f)
        : window.requestAnimationFrame
        ? window.requestAnimationFrame(f)
        : window.setTimeout(f, 16);
    }
    return o;
  })(
    "undefined" != typeof window
      ? window
      : "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope
      ? self
      : {}
  );
al && (al = il), void 0 !== t && (t.Prism = il);
var sl;
function ul(e) {
  (e.languages.markup = {
    comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
    prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
    doctype: {
      pattern:
        /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null,
        },
        string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/,
      },
    },
    cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
    tag: {
      pattern:
        /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
          },
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: { namespace: /^[^\s>\/:]+:/ },
        },
      },
    },
    entity: [
      { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
      /&#x?[\da-f]{1,8};/i,
    ],
  }),
    (e.languages.markup.tag.inside["attr-value"].inside.entity =
      e.languages.markup.entity),
    (e.languages.markup.doctype.inside["internal-subset"].inside =
      e.languages.markup),
    e.hooks.add("wrap", function (e) {
      "entity" === e.type &&
        (e.attributes.title = e.content.value.replace(/&amp;/, "&"));
    }),
    Object.defineProperty(e.languages.markup.tag, "addInlined", {
      value: function (n, t) {
        var r = {};
        (r["language-" + t] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: e.languages[t],
        }),
          (r.cdata = /^<!\[CDATA\[|\]\]>$/i);
        var o = {
          "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: r },
        };
        o["language-" + t] = { pattern: /[\s\S]+/, inside: e.languages[t] };
        var l = {};
        (l[n] = {
          pattern: RegExp(
            /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
              /__/g,
              function () {
                return n;
              }
            ),
            "i"
          ),
          lookbehind: !0,
          greedy: !0,
          inside: o,
        }),
          e.languages.insertBefore("markup", "cdata", l);
      },
    }),
    Object.defineProperty(e.languages.markup.tag, "addAttribute", {
      value: function (n, t) {
        e.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            /(^|["'\s])/.source +
              "(?:" +
              n +
              ")" +
              /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            "i"
          ),
          lookbehind: !0,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: !0,
                  alias: [t, "language-" + t],
                  inside: e.languages[t],
                },
                punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
              },
            },
          },
        });
      },
    }),
    (e.languages.html = e.languages.markup),
    (e.languages.mathml = e.languages.markup),
    (e.languages.svg = e.languages.markup),
    (e.languages.xml = e.languages.extend("markup", {})),
    (e.languages.ssml = e.languages.xml),
    (e.languages.atom = e.languages.xml),
    (e.languages.rss = e.languages.xml);
}
(sl = ul),
  (ul.displayName = "markup"),
  (ul.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"]);
var cl;
function dl(e) {
  !(function (e) {
    var n =
      /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    (e.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern:
              /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector",
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0,
          },
        },
      },
      url: {
        pattern: RegExp(
          "\\burl\\((?:" +
            n.source +
            "|" +
            /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
            ")\\)",
          "i"
        ),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: { pattern: RegExp("^" + n.source + "$"), alias: "url" },
        },
      },
      selector: {
        pattern: RegExp(
          "(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
            n.source +
            ")*(?=\\s*\\{)"
        ),
        lookbehind: !0,
      },
      string: { pattern: n, greedy: !0 },
      property: {
        pattern:
          /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0,
      },
      important: /!important\b/i,
      function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
      punctuation: /[(){};:,]/,
    }),
      (e.languages.css.atrule.inside.rest = e.languages.css);
    var t = e.languages.markup;
    t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
  })(e);
}
(cl = dl), (dl.displayName = "css"), (dl.aliases = []);
var fl;
function pl(e) {
  e.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0,
      },
      { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0,
    },
    "class-name": {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: { punctuation: /[.\\]/ },
    },
    keyword:
      /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/,
  };
}
(fl = pl), (pl.displayName = "clike"), (pl.aliases = []);
var hl;
function gl(e) {
  (e.languages.javascript = e.languages.extend("clike", {
    "class-name": [
      e.languages.clike["class-name"],
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0,
      },
    ],
    keyword: [
      { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
      {
        pattern:
          /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0,
      },
    ],
    function:
      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source +
          "(?:" +
          /NaN|Infinity/.source +
          "|" +
          /0[bB][01]+(?:_[01]+)*n?/.source +
          "|" +
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
          "|" +
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
          "|" +
          /\d+(?:_\d+)*n/.source +
          "|" +
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
            .source +
          ")" +
          /(?![\w$])/.source
      ),
      lookbehind: !0,
    },
    operator:
      /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
  })),
    (e.languages.javascript["class-name"][0].pattern =
      /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
    e.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern:
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: "language-regex",
            inside: e.languages.regex,
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/,
        },
      },
      "function-variable": {
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function",
      },
      parameter: [
        {
          pattern:
            /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: e.languages.javascript,
        },
        {
          pattern:
            /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: e.languages.javascript,
        },
        {
          pattern:
            /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: e.languages.javascript,
        },
        {
          pattern:
            /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: e.languages.javascript,
        },
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
    }),
    e.languages.insertBefore("javascript", "string", {
      hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
      "template-string": {
        pattern:
          /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
          "template-punctuation": { pattern: /^`|`$/, alias: "string" },
          interpolation: {
            pattern:
              /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation",
              },
              rest: e.languages.javascript,
            },
          },
          string: /[\s\S]+/,
        },
      },
      "string-property": {
        pattern:
          /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property",
      },
    }),
    e.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern:
          /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property",
      },
    }),
    e.languages.markup &&
      (e.languages.markup.tag.addInlined("script", "javascript"),
      e.languages.markup.tag.addAttribute(
        /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
          .source,
        "javascript"
      )),
    (e.languages.js = e.languages.javascript);
}
(hl = gl), (gl.displayName = "javascript"), (gl.aliases = ["js"]), jo();
var ml = {}.hasOwnProperty;
function bl() {}
bl.prototype = al;
var yl = new bl();
function vl(e) {
  if ("function" != typeof e || !e.displayName)
    throw new Error("Expected `function` for `grammar`, got `" + e + "`");
  void 0 === yl.languages[e.displayName] && e(yl);
}
(_o = yl),
  (yl.highlight = function (e, n) {
    var t,
      r = al.highlight;
    if ("string" != typeof e)
      throw new Error("Expected `string` for `value`, got `" + e + "`");
    if ("Object" === yl.util.type(n)) (t = n), (n = null);
    else {
      if ("string" != typeof n)
        throw new Error("Expected `string` for `name`, got `" + n + "`");
      if (!ml.call(yl.languages, n))
        throw new Error("Unknown language: `" + n + "` is not registered");
      t = yl.languages[n];
    }
    return r.call(this, e, t, n);
  }),
  (yl.register = vl),
  (yl.alias = function (e, n) {
    var t,
      r,
      o,
      l,
      a = yl.languages,
      i = e;
    n && ((i = {})[e] = n);
    for (t in i)
      for (
        o = (r = "string" == typeof (r = i[t]) ? [r] : r).length, l = -1;
        ++l < o;

      )
        a[r[l]] = a[t];
  }),
  (yl.registered = function (e) {
    if ("string" != typeof e)
      throw new Error("Expected `string` for `language`, got `" + e + "`");
    return ml.call(yl.languages, e);
  }),
  (yl.listLanguages = function () {
    var e,
      n = yl.languages,
      t = [];
    for (e in n) ml.call(n, e) && "object" == typeof n[e] && t.push(e);
    return t;
  }),
  vl(sl),
  vl(cl),
  vl(fl),
  vl(hl),
  (yl.util.encode = function (e) {
    return e;
  }),
  (yl.Token.stringify = function (e, n, t) {
    var r;
    if ("string" == typeof e) return { type: "text", value: e };
    if ("Array" === yl.util.type(e))
      return (function (e, n) {
        var t,
          r = [],
          o = e.length,
          l = -1;
        for (; ++l < o; ) "" !== (t = e[l]) && null != t && r.push(t);
        (l = -1), (o = r.length);
        for (; ++l < o; ) (t = r[l]), (r[l] = yl.Token.stringify(t, n, r));
        return r;
      })(e, n);
    (r = {
      type: e.type,
      content: yl.Token.stringify(e.content, n, t),
      tag: "span",
      classes: ["token", e.type],
      attributes: {},
      language: n,
      parent: t,
    }),
      e.alias && (r.classes = r.classes.concat(e.alias));
    return (
      yl.hooks.run("wrap", r),
      zo(
        r.tag + "." + r.classes.join("."),
        (function (e) {
          var n;
          for (n in e) e[n] = Uo(e[n]);
          return e;
        })(r.attributes),
        r.content
      )
    );
  });
var kl,
  xl,
  wl =
    ((kl = n(_o)),
    (xl = {}),
    function (e) {
      var t = e.language,
        r = e.children,
        o = e.style,
        l = void 0 === o ? xl : o,
        a = e.customStyle,
        i = void 0 === a ? {} : a,
        s = e.codeTagProps,
        c =
          void 0 === s
            ? {
                className: t ? "language-".concat(t) : void 0,
                style: So(
                  So({}, l['code[class*="language-"]']),
                  l['code[class*="language-'.concat(t, '"]')]
                ),
              }
            : s,
        d = e.useInlineStyles,
        f = void 0 === d || d,
        p = e.showLineNumbers,
        h = void 0 !== p && p,
        g = e.showInlineLineNumbers,
        m = void 0 === g || g,
        b = e.startingLineNumber,
        y = void 0 === b ? 1 : b,
        v = e.lineNumberContainerStyle,
        k = e.lineNumberStyle,
        x = void 0 === k ? {} : k,
        w = e.wrapLines,
        S = e.wrapLongLines,
        E = void 0 !== S && S,
        C = e.lineProps,
        N = void 0 === C ? {} : C,
        L = e.renderer,
        A = e.PreTag,
        T = void 0 === A ? "pre" : A,
        P = e.CodeTag,
        F = void 0 === P ? "code" : P,
        O = e.code,
        _ = void 0 === O ? (Array.isArray(r) ? r[0] : r) || "" : O,
        R = e.astGenerator,
        D = n(to)(e, xo);
      R = R || kl;
      var I = h
          ? n(u).createElement(Co, {
              containerStyle: v,
              codeStyle: c.style || {},
              numberStyle: x,
              startingLineNumber: y,
              codeString: _,
            })
          : null,
        j = l.hljs ||
          l['pre[class*="language-"]'] || { backgroundColor: "#fff" },
        z = Oo(R) ? "hljs" : "prismjs",
        M = f
          ? Object.assign({}, D, { style: Object.assign({}, j, i) })
          : Object.assign({}, D, {
              className: D.className
                ? "".concat(z, " ").concat(D.className)
                : z,
              style: Object.assign({}, i),
            });
      if (
        ((c.style = So(
          So({}, c.style),
          {},
          E ? { whiteSpace: "pre-wrap" } : { whiteSpace: "pre" }
        )),
        !R)
      )
        return n(u).createElement(T, M, I, n(u).createElement(F, c, _));
      ((void 0 === w && L) || E) && (w = !0), (L = L || Fo);
      var U = [{ type: "text", value: _ }],
        q = (function (e) {
          var n = e.astGenerator,
            t = e.language,
            r = e.code,
            o = e.defaultCodeValue;
          if (Oo(n)) {
            var l = (function (e, n) {
              return -1 !== e.listLanguages().indexOf(n);
            })(n, t);
            return "text" === t
              ? { value: o, language: "text" }
              : l
              ? n.highlight(t, r)
              : n.highlightAuto(r);
          }
          try {
            return t && "text" !== t
              ? { value: n.highlight(r, t) }
              : { value: o };
          } catch (e) {
            return { value: o };
          }
        })({ astGenerator: R, language: t, code: _, defaultCodeValue: U });
      null === q.language && (q.value = U);
      var B = Po(q, w, N, h, m, y, q.value.length + y, x, E);
      return n(u).createElement(
        T,
        M,
        n(u).createElement(
          F,
          c,
          !m && I,
          L({ rows: B, stylesheet: l, useInlineStyles: f })
        )
      );
    });
(wl.registerLanguage = function (e, t) {
  return n(_o).register(t);
}),
  (wl.alias = function (e, t) {
    return n(_o).alias(e, t);
  });
var Sl,
  El = wl,
  Cl = {
    'code[class*="language-"]': {
      background: "hsl(220, 13%, 18%)",
      color: "hsl(220, 14%, 71%)",
      textShadow: "0 1px rgba(0, 0, 0, 0.3)",
      fontFamily:
        '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
      direction: "ltr",
      textAlign: "left",
      whiteSpace: "pre",
      wordSpacing: "normal",
      wordBreak: "normal",
      lineHeight: "1.5",
      MozTabSize: "2",
      OTabSize: "2",
      tabSize: "2",
      WebkitHyphens: "none",
      MozHyphens: "none",
      msHyphens: "none",
      hyphens: "none",
    },
    'pre[class*="language-"]': {
      background: "hsl(220, 13%, 18%)",
      color: "hsl(220, 14%, 71%)",
      textShadow: "0 1px rgba(0, 0, 0, 0.3)",
      fontFamily:
        '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
      direction: "ltr",
      textAlign: "left",
      whiteSpace: "pre",
      wordSpacing: "normal",
      wordBreak: "normal",
      lineHeight: "1.5",
      MozTabSize: "2",
      OTabSize: "2",
      tabSize: "2",
      WebkitHyphens: "none",
      MozHyphens: "none",
      msHyphens: "none",
      hyphens: "none",
      padding: "1em",
      margin: "0.5em 0",
      overflow: "auto",
      borderRadius: "0.3em",
    },
    'code[class*="language-"]::-moz-selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none",
    },
    'code[class*="language-"] *::-moz-selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none",
    },
    'pre[class*="language-"] *::-moz-selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none",
    },
    'code[class*="language-"]::selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none",
    },
    'code[class*="language-"] *::selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none",
    },
    'pre[class*="language-"] *::selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none",
    },
    ':not(pre) > code[class*="language-"]': {
      padding: "0.2em 0.3em",
      borderRadius: "0.3em",
      whiteSpace: "normal",
    },
    comment: { color: "hsl(220, 10%, 40%)", fontStyle: "italic" },
    prolog: { color: "hsl(220, 10%, 40%)" },
    cdata: { color: "hsl(220, 10%, 40%)" },
    doctype: { color: "hsl(220, 14%, 71%)" },
    punctuation: { color: "hsl(220, 14%, 71%)" },
    entity: { color: "hsl(220, 14%, 71%)", cursor: "help" },
    "attr-name": { color: "hsl(29, 54%, 61%)" },
    "class-name": { color: "hsl(29, 54%, 61%)" },
    boolean: { color: "hsl(29, 54%, 61%)" },
    constant: { color: "hsl(29, 54%, 61%)" },
    number: { color: "hsl(29, 54%, 61%)" },
    atrule: { color: "hsl(29, 54%, 61%)" },
    keyword: { color: "hsl(286, 60%, 67%)" },
    property: { color: "hsl(355, 65%, 65%)" },
    tag: { color: "hsl(355, 65%, 65%)" },
    symbol: { color: "hsl(355, 65%, 65%)" },
    deleted: { color: "hsl(355, 65%, 65%)" },
    important: { color: "hsl(355, 65%, 65%)" },
    selector: { color: "hsl(95, 38%, 62%)" },
    string: { color: "hsl(95, 38%, 62%)" },
    char: { color: "hsl(95, 38%, 62%)" },
    builtin: { color: "hsl(95, 38%, 62%)" },
    inserted: { color: "hsl(95, 38%, 62%)" },
    regex: { color: "hsl(95, 38%, 62%)" },
    "attr-value": { color: "hsl(95, 38%, 62%)" },
    "attr-value > .token.punctuation": { color: "hsl(95, 38%, 62%)" },
    variable: { color: "hsl(207, 82%, 66%)" },
    operator: { color: "hsl(207, 82%, 66%)" },
    function: { color: "hsl(207, 82%, 66%)" },
    url: { color: "hsl(187, 47%, 55%)" },
    "attr-value > .token.punctuation.attr-equals": {
      color: "hsl(220, 14%, 71%)",
    },
    "special-attr > .token.attr-value > .token.value.css": {
      color: "hsl(220, 14%, 71%)",
    },
    ".language-css .token.selector": { color: "hsl(355, 65%, 65%)" },
    ".language-css .token.property": { color: "hsl(220, 14%, 71%)" },
    ".language-css .token.function": { color: "hsl(187, 47%, 55%)" },
    ".language-css .token.url > .token.function": {
      color: "hsl(187, 47%, 55%)",
    },
    ".language-css .token.url > .token.string.url": {
      color: "hsl(95, 38%, 62%)",
    },
    ".language-css .token.important": { color: "hsl(286, 60%, 67%)" },
    ".language-css .token.atrule .token.rule": { color: "hsl(286, 60%, 67%)" },
    ".language-javascript .token.operator": { color: "hsl(286, 60%, 67%)" },
    ".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation":
      { color: "hsl(5, 48%, 51%)" },
    ".language-json .token.operator": { color: "hsl(220, 14%, 71%)" },
    ".language-json .token.null.keyword": { color: "hsl(29, 54%, 61%)" },
    ".language-markdown .token.url": { color: "hsl(220, 14%, 71%)" },
    ".language-markdown .token.url > .token.operator": {
      color: "hsl(220, 14%, 71%)",
    },
    ".language-markdown .token.url-reference.url > .token.string": {
      color: "hsl(220, 14%, 71%)",
    },
    ".language-markdown .token.url > .token.content": {
      color: "hsl(207, 82%, 66%)",
    },
    ".language-markdown .token.url > .token.url": {
      color: "hsl(187, 47%, 55%)",
    },
    ".language-markdown .token.url-reference.url": {
      color: "hsl(187, 47%, 55%)",
    },
    ".language-markdown .token.blockquote.punctuation": {
      color: "hsl(220, 10%, 40%)",
      fontStyle: "italic",
    },
    ".language-markdown .token.hr.punctuation": {
      color: "hsl(220, 10%, 40%)",
      fontStyle: "italic",
    },
    ".language-markdown .token.code-snippet": { color: "hsl(95, 38%, 62%)" },
    ".language-markdown .token.bold .token.content": {
      color: "hsl(29, 54%, 61%)",
    },
    ".language-markdown .token.italic .token.content": {
      color: "hsl(286, 60%, 67%)",
    },
    ".language-markdown .token.strike .token.content": {
      color: "hsl(355, 65%, 65%)",
    },
    ".language-markdown .token.strike .token.punctuation": {
      color: "hsl(355, 65%, 65%)",
    },
    ".language-markdown .token.list.punctuation": {
      color: "hsl(355, 65%, 65%)",
    },
    ".language-markdown .token.title.important > .token.punctuation": {
      color: "hsl(355, 65%, 65%)",
    },
    bold: { fontWeight: "bold" },
    italic: { fontStyle: "italic" },
    namespace: { Opacity: "0.8" },
    "token.tab:not(:empty):before": {
      color: "hsla(220, 14%, 71%, 0.15)",
      textShadow: "none",
    },
    "token.cr:before": {
      color: "hsla(220, 14%, 71%, 0.15)",
      textShadow: "none",
    },
    "token.lf:before": {
      color: "hsla(220, 14%, 71%, 0.15)",
      textShadow: "none",
    },
    "token.space:before": {
      color: "hsla(220, 14%, 71%, 0.15)",
      textShadow: "none",
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item": {
      marginRight: "0.4em",
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button": {
      background: "hsl(220, 13%, 26%)",
      color: "hsl(220, 9%, 55%)",
      padding: "0.1em 0.4em",
      borderRadius: "0.3em",
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a": {
      background: "hsl(220, 13%, 26%)",
      color: "hsl(220, 9%, 55%)",
      padding: "0.1em 0.4em",
      borderRadius: "0.3em",
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span": {
      background: "hsl(220, 13%, 26%)",
      color: "hsl(220, 9%, 55%)",
      padding: "0.1em 0.4em",
      borderRadius: "0.3em",
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)",
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)",
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)",
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)",
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)",
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)",
    },
    ".line-highlight.line-highlight": {
      background: "hsla(220, 100%, 80%, 0.04)",
    },
    ".line-highlight.line-highlight:before": {
      background: "hsl(220, 13%, 26%)",
      color: "hsl(220, 14%, 71%)",
      padding: "0.1em 0.6em",
      borderRadius: "0.3em",
      boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.2)",
    },
    ".line-highlight.line-highlight[data-end]:after": {
      background: "hsl(220, 13%, 26%)",
      color: "hsl(220, 14%, 71%)",
      padding: "0.1em 0.6em",
      borderRadius: "0.3em",
      boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.2)",
    },
    "pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before":
      { backgroundColor: "hsla(220, 100%, 80%, 0.04)" },
    ".line-numbers.line-numbers .line-numbers-rows": {
      borderRightColor: "hsla(220, 14%, 71%, 0.15)",
    },
    ".command-line .command-line-prompt": {
      borderRightColor: "hsla(220, 14%, 71%, 0.15)",
    },
    ".line-numbers .line-numbers-rows > span:before": {
      color: "hsl(220, 14%, 45%)",
    },
    ".command-line .command-line-prompt > span:before": {
      color: "hsl(220, 14%, 45%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-1": {
      color: "hsl(355, 65%, 65%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-5": {
      color: "hsl(355, 65%, 65%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-9": {
      color: "hsl(355, 65%, 65%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-2": {
      color: "hsl(95, 38%, 62%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-6": {
      color: "hsl(95, 38%, 62%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-10": {
      color: "hsl(95, 38%, 62%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-3": {
      color: "hsl(207, 82%, 66%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-7": {
      color: "hsl(207, 82%, 66%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-11": {
      color: "hsl(207, 82%, 66%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-4": {
      color: "hsl(286, 60%, 67%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-8": {
      color: "hsl(286, 60%, 67%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-12": {
      color: "hsl(286, 60%, 67%)",
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)": {
      backgroundColor: "hsla(353, 100%, 66%, 0.15)",
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)": {
      backgroundColor: "hsla(353, 100%, 66%, 0.15)",
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection":
      { backgroundColor: "hsla(353, 95%, 66%, 0.25)" },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection":
      { backgroundColor: "hsla(353, 95%, 66%, 0.25)" },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection":
      { backgroundColor: "hsla(353, 95%, 66%, 0.25)" },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection":
      { backgroundColor: "hsla(353, 95%, 66%, 0.25)" },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)",
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection":
      { backgroundColor: "hsla(353, 95%, 66%, 0.25)" },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)",
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection":
      { backgroundColor: "hsla(353, 95%, 66%, 0.25)" },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)": {
      backgroundColor: "hsla(137, 100%, 55%, 0.15)",
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)": {
      backgroundColor: "hsla(137, 100%, 55%, 0.15)",
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection":
      { backgroundColor: "hsla(135, 73%, 55%, 0.25)" },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection":
      { backgroundColor: "hsla(135, 73%, 55%, 0.25)" },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection":
      { backgroundColor: "hsla(135, 73%, 55%, 0.25)" },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection":
      { backgroundColor: "hsla(135, 73%, 55%, 0.25)" },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)",
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection":
      { backgroundColor: "hsla(135, 73%, 55%, 0.25)" },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)",
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection":
      { backgroundColor: "hsla(135, 73%, 55%, 0.25)" },
    ".prism-previewer.prism-previewer:before": {
      borderColor: "hsl(224, 13%, 17%)",
    },
    ".prism-previewer-gradient.prism-previewer-gradient div": {
      borderColor: "hsl(224, 13%, 17%)",
      borderRadius: "0.3em",
    },
    ".prism-previewer-color.prism-previewer-color:before": {
      borderRadius: "0.3em",
    },
    ".prism-previewer-easing.prism-previewer-easing:before": {
      borderRadius: "0.3em",
    },
    ".prism-previewer.prism-previewer:after": {
      borderTopColor: "hsl(224, 13%, 17%)",
    },
    ".prism-previewer-flipped.prism-previewer-flipped.after": {
      borderBottomColor: "hsl(224, 13%, 17%)",
    },
    ".prism-previewer-angle.prism-previewer-angle:before": {
      background: "hsl(219, 13%, 22%)",
    },
    ".prism-previewer-time.prism-previewer-time:before": {
      background: "hsl(219, 13%, 22%)",
    },
    ".prism-previewer-easing.prism-previewer-easing": {
      background: "hsl(219, 13%, 22%)",
    },
    ".prism-previewer-angle.prism-previewer-angle circle": {
      stroke: "hsl(220, 14%, 71%)",
      strokeOpacity: "1",
    },
    ".prism-previewer-time.prism-previewer-time circle": {
      stroke: "hsl(220, 14%, 71%)",
      strokeOpacity: "1",
    },
    ".prism-previewer-easing.prism-previewer-easing circle": {
      stroke: "hsl(220, 14%, 71%)",
      fill: "transparent",
    },
    ".prism-previewer-easing.prism-previewer-easing path": {
      stroke: "hsl(220, 14%, 71%)",
    },
    ".prism-previewer-easing.prism-previewer-easing line": {
      stroke: "hsl(220, 14%, 71%)",
    },
  },
  Nl = {
    'code[class*="language-"]': {
      background: "hsl(230, 1%, 98%)",
      color: "hsl(230, 8%, 24%)",
      fontFamily:
        '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
      direction: "ltr",
      textAlign: "left",
      whiteSpace: "pre",
      wordSpacing: "normal",
      wordBreak: "normal",
      lineHeight: "1.5",
      MozTabSize: "2",
      OTabSize: "2",
      tabSize: "2",
      WebkitHyphens: "none",
      MozHyphens: "none",
      msHyphens: "none",
      hyphens: "none",
    },
    'pre[class*="language-"]': {
      background: "hsl(230, 1%, 98%)",
      color: "hsl(230, 8%, 24%)",
      fontFamily:
        '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
      direction: "ltr",
      textAlign: "left",
      whiteSpace: "pre",
      wordSpacing: "normal",
      wordBreak: "normal",
      lineHeight: "1.5",
      MozTabSize: "2",
      OTabSize: "2",
      tabSize: "2",
      WebkitHyphens: "none",
      MozHyphens: "none",
      msHyphens: "none",
      hyphens: "none",
      padding: "1em",
      margin: "0.5em 0",
      overflow: "auto",
      borderRadius: "0.3em",
    },
    'code[class*="language-"]::-moz-selection': {
      background: "hsl(230, 1%, 90%)",
      color: "inherit",
    },
    'code[class*="language-"] *::-moz-selection': {
      background: "hsl(230, 1%, 90%)",
      color: "inherit",
    },
    'pre[class*="language-"] *::-moz-selection': {
      background: "hsl(230, 1%, 90%)",
      color: "inherit",
    },
    'code[class*="language-"]::selection': {
      background: "hsl(230, 1%, 90%)",
      color: "inherit",
    },
    'code[class*="language-"] *::selection': {
      background: "hsl(230, 1%, 90%)",
      color: "inherit",
    },
    'pre[class*="language-"] *::selection': {
      background: "hsl(230, 1%, 90%)",
      color: "inherit",
    },
    ':not(pre) > code[class*="language-"]': {
      padding: "0.2em 0.3em",
      borderRadius: "0.3em",
      whiteSpace: "normal",
    },
    comment: { color: "hsl(230, 4%, 64%)", fontStyle: "italic" },
    prolog: { color: "hsl(230, 4%, 64%)" },
    cdata: { color: "hsl(230, 4%, 64%)" },
    doctype: { color: "hsl(230, 8%, 24%)" },
    punctuation: { color: "hsl(230, 8%, 24%)" },
    entity: { color: "hsl(230, 8%, 24%)", cursor: "help" },
    "attr-name": { color: "hsl(35, 99%, 36%)" },
    "class-name": { color: "hsl(35, 99%, 36%)" },
    boolean: { color: "hsl(35, 99%, 36%)" },
    constant: { color: "hsl(35, 99%, 36%)" },
    number: { color: "hsl(35, 99%, 36%)" },
    atrule: { color: "hsl(35, 99%, 36%)" },
    keyword: { color: "hsl(301, 63%, 40%)" },
    property: { color: "hsl(5, 74%, 59%)" },
    tag: { color: "hsl(5, 74%, 59%)" },
    symbol: { color: "hsl(5, 74%, 59%)" },
    deleted: { color: "hsl(5, 74%, 59%)" },
    important: { color: "hsl(5, 74%, 59%)" },
    selector: { color: "hsl(119, 34%, 47%)" },
    string: { color: "hsl(119, 34%, 47%)" },
    char: { color: "hsl(119, 34%, 47%)" },
    builtin: { color: "hsl(119, 34%, 47%)" },
    inserted: { color: "hsl(119, 34%, 47%)" },
    regex: { color: "hsl(119, 34%, 47%)" },
    "attr-value": { color: "hsl(119, 34%, 47%)" },
    "attr-value > .token.punctuation": { color: "hsl(119, 34%, 47%)" },
    variable: { color: "hsl(221, 87%, 60%)" },
    operator: { color: "hsl(221, 87%, 60%)" },
    function: { color: "hsl(221, 87%, 60%)" },
    url: { color: "hsl(198, 99%, 37%)" },
    "attr-value > .token.punctuation.attr-equals": {
      color: "hsl(230, 8%, 24%)",
    },
    "special-attr > .token.attr-value > .token.value.css": {
      color: "hsl(230, 8%, 24%)",
    },
    ".language-css .token.selector": { color: "hsl(5, 74%, 59%)" },
    ".language-css .token.property": { color: "hsl(230, 8%, 24%)" },
    ".language-css .token.function": { color: "hsl(198, 99%, 37%)" },
    ".language-css .token.url > .token.function": {
      color: "hsl(198, 99%, 37%)",
    },
    ".language-css .token.url > .token.string.url": {
      color: "hsl(119, 34%, 47%)",
    },
    ".language-css .token.important": { color: "hsl(301, 63%, 40%)" },
    ".language-css .token.atrule .token.rule": { color: "hsl(301, 63%, 40%)" },
    ".language-javascript .token.operator": { color: "hsl(301, 63%, 40%)" },
    ".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation":
      { color: "hsl(344, 84%, 43%)" },
    ".language-json .token.operator": { color: "hsl(230, 8%, 24%)" },
    ".language-json .token.null.keyword": { color: "hsl(35, 99%, 36%)" },
    ".language-markdown .token.url": { color: "hsl(230, 8%, 24%)" },
    ".language-markdown .token.url > .token.operator": {
      color: "hsl(230, 8%, 24%)",
    },
    ".language-markdown .token.url-reference.url > .token.string": {
      color: "hsl(230, 8%, 24%)",
    },
    ".language-markdown .token.url > .token.content": {
      color: "hsl(221, 87%, 60%)",
    },
    ".language-markdown .token.url > .token.url": {
      color: "hsl(198, 99%, 37%)",
    },
    ".language-markdown .token.url-reference.url": {
      color: "hsl(198, 99%, 37%)",
    },
    ".language-markdown .token.blockquote.punctuation": {
      color: "hsl(230, 4%, 64%)",
      fontStyle: "italic",
    },
    ".language-markdown .token.hr.punctuation": {
      color: "hsl(230, 4%, 64%)",
      fontStyle: "italic",
    },
    ".language-markdown .token.code-snippet": { color: "hsl(119, 34%, 47%)" },
    ".language-markdown .token.bold .token.content": {
      color: "hsl(35, 99%, 36%)",
    },
    ".language-markdown .token.italic .token.content": {
      color: "hsl(301, 63%, 40%)",
    },
    ".language-markdown .token.strike .token.content": {
      color: "hsl(5, 74%, 59%)",
    },
    ".language-markdown .token.strike .token.punctuation": {
      color: "hsl(5, 74%, 59%)",
    },
    ".language-markdown .token.list.punctuation": { color: "hsl(5, 74%, 59%)" },
    ".language-markdown .token.title.important > .token.punctuation": {
      color: "hsl(5, 74%, 59%)",
    },
    bold: { fontWeight: "bold" },
    italic: { fontStyle: "italic" },
    namespace: { Opacity: "0.8" },
    "token.tab:not(:empty):before": { color: "hsla(230, 8%, 24%, 0.2)" },
    "token.cr:before": { color: "hsla(230, 8%, 24%, 0.2)" },
    "token.lf:before": { color: "hsla(230, 8%, 24%, 0.2)" },
    "token.space:before": { color: "hsla(230, 8%, 24%, 0.2)" },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item": {
      marginRight: "0.4em",
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button": {
      background: "hsl(230, 1%, 90%)",
      color: "hsl(230, 6%, 44%)",
      padding: "0.1em 0.4em",
      borderRadius: "0.3em",
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a": {
      background: "hsl(230, 1%, 90%)",
      color: "hsl(230, 6%, 44%)",
      padding: "0.1em 0.4em",
      borderRadius: "0.3em",
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span": {
      background: "hsl(230, 1%, 90%)",
      color: "hsl(230, 6%, 44%)",
      padding: "0.1em 0.4em",
      borderRadius: "0.3em",
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover": {
      background: "hsl(230, 1%, 78%)",
      color: "hsl(230, 8%, 24%)",
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus": {
      background: "hsl(230, 1%, 78%)",
      color: "hsl(230, 8%, 24%)",
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover": {
      background: "hsl(230, 1%, 78%)",
      color: "hsl(230, 8%, 24%)",
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus": {
      background: "hsl(230, 1%, 78%)",
      color: "hsl(230, 8%, 24%)",
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover": {
      background: "hsl(230, 1%, 78%)",
      color: "hsl(230, 8%, 24%)",
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus": {
      background: "hsl(230, 1%, 78%)",
      color: "hsl(230, 8%, 24%)",
    },
    ".line-highlight.line-highlight": {
      background: "hsla(230, 8%, 24%, 0.05)",
    },
    ".line-highlight.line-highlight:before": {
      background: "hsl(230, 1%, 90%)",
      color: "hsl(230, 8%, 24%)",
      padding: "0.1em 0.6em",
      borderRadius: "0.3em",
      boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.2)",
    },
    ".line-highlight.line-highlight[data-end]:after": {
      background: "hsl(230, 1%, 90%)",
      color: "hsl(230, 8%, 24%)",
      padding: "0.1em 0.6em",
      borderRadius: "0.3em",
      boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.2)",
    },
    "pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before":
      { backgroundColor: "hsla(230, 8%, 24%, 0.05)" },
    ".line-numbers.line-numbers .line-numbers-rows": {
      borderRightColor: "hsla(230, 8%, 24%, 0.2)",
    },
    ".command-line .command-line-prompt": {
      borderRightColor: "hsla(230, 8%, 24%, 0.2)",
    },
    ".line-numbers .line-numbers-rows > span:before": {
      color: "hsl(230, 1%, 62%)",
    },
    ".command-line .command-line-prompt > span:before": {
      color: "hsl(230, 1%, 62%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-1": {
      color: "hsl(5, 74%, 59%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-5": {
      color: "hsl(5, 74%, 59%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-9": {
      color: "hsl(5, 74%, 59%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-2": {
      color: "hsl(119, 34%, 47%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-6": {
      color: "hsl(119, 34%, 47%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-10": {
      color: "hsl(119, 34%, 47%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-3": {
      color: "hsl(221, 87%, 60%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-7": {
      color: "hsl(221, 87%, 60%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-11": {
      color: "hsl(221, 87%, 60%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-4": {
      color: "hsl(301, 63%, 40%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-8": {
      color: "hsl(301, 63%, 40%)",
    },
    ".rainbow-braces .token.token.punctuation.brace-level-12": {
      color: "hsl(301, 63%, 40%)",
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)": {
      backgroundColor: "hsla(353, 100%, 66%, 0.15)",
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)": {
      backgroundColor: "hsla(353, 100%, 66%, 0.15)",
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection":
      { backgroundColor: "hsla(353, 95%, 66%, 0.25)" },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection":
      { backgroundColor: "hsla(353, 95%, 66%, 0.25)" },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection":
      { backgroundColor: "hsla(353, 95%, 66%, 0.25)" },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection":
      { backgroundColor: "hsla(353, 95%, 66%, 0.25)" },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)",
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection":
      { backgroundColor: "hsla(353, 95%, 66%, 0.25)" },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)",
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection":
      { backgroundColor: "hsla(353, 95%, 66%, 0.25)" },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)": {
      backgroundColor: "hsla(137, 100%, 55%, 0.15)",
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)": {
      backgroundColor: "hsla(137, 100%, 55%, 0.15)",
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection":
      { backgroundColor: "hsla(135, 73%, 55%, 0.25)" },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection":
      { backgroundColor: "hsla(135, 73%, 55%, 0.25)" },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection":
      { backgroundColor: "hsla(135, 73%, 55%, 0.25)" },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection":
      { backgroundColor: "hsla(135, 73%, 55%, 0.25)" },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)",
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection":
      { backgroundColor: "hsla(135, 73%, 55%, 0.25)" },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)",
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection":
      { backgroundColor: "hsla(135, 73%, 55%, 0.25)" },
    ".prism-previewer.prism-previewer:before": {
      borderColor: "hsl(0, 0, 95%)",
    },
    ".prism-previewer-gradient.prism-previewer-gradient div": {
      borderColor: "hsl(0, 0, 95%)",
      borderRadius: "0.3em",
    },
    ".prism-previewer-color.prism-previewer-color:before": {
      borderRadius: "0.3em",
    },
    ".prism-previewer-easing.prism-previewer-easing:before": {
      borderRadius: "0.3em",
    },
    ".prism-previewer.prism-previewer:after": {
      borderTopColor: "hsl(0, 0, 95%)",
    },
    ".prism-previewer-flipped.prism-previewer-flipped.after": {
      borderBottomColor: "hsl(0, 0, 95%)",
    },
    ".prism-previewer-angle.prism-previewer-angle:before": {
      background: "hsl(0, 0%, 100%)",
    },
    ".prism-previewer-time.prism-previewer-time:before": {
      background: "hsl(0, 0%, 100%)",
    },
    ".prism-previewer-easing.prism-previewer-easing": {
      background: "hsl(0, 0%, 100%)",
    },
    ".prism-previewer-angle.prism-previewer-angle circle": {
      stroke: "hsl(230, 8%, 24%)",
      strokeOpacity: "1",
    },
    ".prism-previewer-time.prism-previewer-time circle": {
      stroke: "hsl(230, 8%, 24%)",
      strokeOpacity: "1",
    },
    ".prism-previewer-easing.prism-previewer-easing circle": {
      stroke: "hsl(230, 8%, 24%)",
      fill: "transparent",
    },
    ".prism-previewer-easing.prism-previewer-easing path": {
      stroke: "hsl(230, 8%, 24%)",
    },
    ".prism-previewer-easing.prism-previewer-easing line": {
      stroke: "hsl(230, 8%, 24%)",
    },
  };
function Ll(e) {
  !(function (e) {
    var n =
        "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
      t = {
        pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
        lookbehind: !0,
        alias: "punctuation",
        inside: null,
      },
      r = {
        bash: t,
        environment: { pattern: RegExp("\\$" + n), alias: "constant" },
        variable: [
          {
            pattern: /\$?\(\([\s\S]+?\)\)/,
            greedy: !0,
            inside: {
              variable: [
                { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                /^\$\(\(/,
              ],
              number:
                /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
              operator:
                /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
              punctuation: /\(\(?|\)\)?|,|;/,
            },
          },
          {
            pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
            greedy: !0,
            inside: { variable: /^\$\(|^`|\)$|`$/ },
          },
          {
            pattern: /\$\{[^}]+\}/,
            greedy: !0,
            inside: {
              operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
              punctuation: /[\[\]]/,
              environment: {
                pattern: RegExp("(\\{)" + n),
                lookbehind: !0,
                alias: "constant",
              },
            },
          },
          /\$(?:\w+|[#?*!@$])/,
        ],
        entity:
          /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
      };
    (e.languages.bash = {
      shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
      comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
      "function-name": [
        {
          pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
          lookbehind: !0,
          alias: "function",
        },
        { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
      ],
      "for-or-select": {
        pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
        alias: "variable",
        lookbehind: !0,
      },
      "assign-left": {
        pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
        inside: {
          environment: {
            pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + n),
            lookbehind: !0,
            alias: "constant",
          },
        },
        alias: "variable",
        lookbehind: !0,
      },
      string: [
        {
          pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
          lookbehind: !0,
          greedy: !0,
          inside: r,
        },
        {
          pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
          lookbehind: !0,
          greedy: !0,
          inside: { bash: t },
        },
        {
          pattern:
            /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
          lookbehind: !0,
          greedy: !0,
          inside: r,
        },
        { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
        {
          pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
          greedy: !0,
          inside: { entity: r.entity },
        },
      ],
      environment: { pattern: RegExp("\\$?" + n), alias: "constant" },
      variable: r.variable,
      function: {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
        lookbehind: !0,
      },
      keyword: {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
        lookbehind: !0,
      },
      builtin: {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
        lookbehind: !0,
        alias: "class-name",
      },
      boolean: {
        pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
        lookbehind: !0,
      },
      "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
      operator: {
        pattern:
          /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
        inside: { "file-descriptor": { pattern: /^\d/, alias: "important" } },
      },
      punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
      number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 },
    }),
      (t.inside = e.languages.bash);
    for (
      var o = [
          "comment",
          "function-name",
          "for-or-select",
          "assign-left",
          "string",
          "environment",
          "function",
          "keyword",
          "builtin",
          "boolean",
          "file-descriptor",
          "operator",
          "punctuation",
          "number",
        ],
        l = r.variable[1].inside,
        a = 0;
      a < o.length;
      a++
    )
      l[o[a]] = e.languages.bash[o[a]];
    e.languages.shell = e.languages.bash;
  })(e);
}
(Sl = Ll), (Ll.displayName = "bash"), (Ll.aliases = ["shell"]);
var Al,
  Tl = n(Sl);
function Pl(e) {
  !(function (e) {
    var n = (e.languages.powershell = {
      comment: [
        { pattern: /(^|[^`])<#[\s\S]*?#>/, lookbehind: !0 },
        { pattern: /(^|[^`])#.*/, lookbehind: !0 },
      ],
      string: [
        { pattern: /"(?:`[\s\S]|[^`"])*"/, greedy: !0, inside: null },
        { pattern: /'(?:[^']|'')*'/, greedy: !0 },
      ],
      namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
      boolean: /\$(?:false|true)\b/i,
      variable: /\$\w+\b/,
      function: [
        /\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,
        /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i,
      ],
      keyword:
        /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
      operator: {
        pattern:
          /(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
        lookbehind: !0,
      },
      punctuation: /[|{}[\];(),.]/,
    });
    n.string[0].inside = {
      function: {
        pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
        lookbehind: !0,
        inside: n,
      },
      boolean: n.boolean,
      variable: n.variable,
    };
  })(e);
}
(Al = Pl), (Pl.displayName = "powershell"), (Pl.aliases = []);
var Fl,
  Ol = n(Al),
  _l = n(cl);
function Rl(e) {
  !(function (e) {
    e.languages.diff = {
      coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m],
    };
    var n = {
      "deleted-sign": "-",
      "deleted-arrow": "<",
      "inserted-sign": "+",
      "inserted-arrow": ">",
      unchanged: " ",
      diff: "!",
    };
    Object.keys(n).forEach(function (t) {
      var r = n[t],
        o = [];
      /^\w+$/.test(t) || o.push(/\w+/.exec(t)[0]),
        "diff" === t && o.push("bold"),
        (e.languages.diff[t] = {
          pattern: RegExp("^(?:[" + r + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"),
          alias: o,
          inside: {
            line: { pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/, lookbehind: !0 },
            prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(t)[0] },
          },
        });
    }),
      Object.defineProperty(e.languages.diff, "PREFIXES", { value: n });
  })(e);
}
(Fl = Rl), (Rl.displayName = "diff"), (Rl.aliases = []);
var Dl,
  Il = n(Fl);
function jl(e) {
  e.languages.ini = {
    comment: { pattern: /(^[ \f\t\v]*)[#;][^\n\r]*/m, lookbehind: !0 },
    section: {
      pattern: /(^[ \f\t\v]*)\[[^\n\r\]]*\]?/m,
      lookbehind: !0,
      inside: {
        "section-name": {
          pattern: /(^\[[ \f\t\v]*)[^ \f\t\v\]]+(?:[ \f\t\v]+[^ \f\t\v\]]+)*/,
          lookbehind: !0,
          alias: "selector",
        },
        punctuation: /\[|\]/,
      },
    },
    key: {
      pattern:
        /(^[ \f\t\v]*)[^ \f\n\r\t\v=]+(?:[ \f\t\v]+[^ \f\n\r\t\v=]+)*(?=[ \f\t\v]*=)/m,
      lookbehind: !0,
      alias: "attr-name",
    },
    value: {
      pattern: /(=[ \f\t\v]*)[^ \f\n\r\t\v]+(?:[ \f\t\v]+[^ \f\n\r\t\v]+)*/,
      lookbehind: !0,
      alias: "attr-value",
      inside: { "inner-value": { pattern: /^("|').+(?=\1$)/, lookbehind: !0 } },
    },
    punctuation: /=/,
  };
}
(Dl = jl), (jl.displayName = "ini"), (jl.aliases = []);
var zl,
  Ml = n(Dl);
function Ul(e) {
  !(function (e) {
    var n = { pattern: /\\[\\(){}[\]^$+*?|.]/, alias: "escape" },
      t =
        /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,
      r = "(?:[^\\\\-]|" + t.source + ")",
      o = RegExp(r + "-" + r),
      l = {
        pattern: /(<|')[^<>']+(?=[>']$)/,
        lookbehind: !0,
        alias: "variable",
      };
    e.languages.regex = {
      "char-class": {
        pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
        lookbehind: !0,
        inside: {
          "char-class-negation": {
            pattern: /(^\[)\^/,
            lookbehind: !0,
            alias: "operator",
          },
          "char-class-punctuation": {
            pattern: /^\[|\]$/,
            alias: "punctuation",
          },
          range: {
            pattern: o,
            inside: {
              escape: t,
              "range-punctuation": { pattern: /-/, alias: "operator" },
            },
          },
          "special-escape": n,
          "char-set": {
            pattern: /\\[wsd]|\\p\{[^{}]+\}/i,
            alias: "class-name",
          },
          escape: t,
        },
      },
      "special-escape": n,
      "char-set": { pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name" },
      backreference: [
        { pattern: /\\(?![123][0-7]{2})[1-9]/, alias: "keyword" },
        {
          pattern: /\\k<[^<>']+>/,
          alias: "keyword",
          inside: { "group-name": l },
        },
      ],
      anchor: { pattern: /[$^]|\\[ABbGZz]/, alias: "function" },
      escape: t,
      group: [
        {
          pattern:
            /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
          alias: "punctuation",
          inside: { "group-name": l },
        },
        { pattern: /\)/, alias: "punctuation" },
      ],
      quantifier: {
        pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,
        alias: "number",
      },
      alternation: { pattern: /\|/, alias: "keyword" },
    };
  })(e);
}
(zl = Ul), (Ul.displayName = "regex"), (Ul.aliases = []);
var ql,
  Bl = n(zl),
  Hl = n(hl);
function $l(e) {
  (e.languages.json = {
    property: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
      lookbehind: !0,
      greedy: !0,
    },
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      lookbehind: !0,
      greedy: !0,
    },
    comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: { pattern: /\bnull\b/, alias: "keyword" },
  }),
    (e.languages.webmanifest = e.languages.json);
}
(ql = $l), ($l.displayName = "json"), ($l.aliases = ["webmanifest"]);
var Vl,
  Wl = n(ql);
function Gl(e) {
  !(function (e) {
    var n = /[*&][^\s[\]{},]+/,
      t =
        /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
      r =
        "(?:" +
        t.source +
        "(?:[ \t]+" +
        n.source +
        ")?|" +
        n.source +
        "(?:[ \t]+" +
        t.source +
        ")?)",
      o =
        /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
          /<PLAIN>/g,
          function () {
            return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
              .source;
          }
        ),
      l = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
    function a(e, n) {
      n = (n || "").replace(/m/g, "") + "m";
      var t =
        /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
          .replace(/<<prop>>/g, function () {
            return r;
          })
          .replace(/<<value>>/g, function () {
            return e;
          });
      return RegExp(t, n);
    }
    (e.languages.yaml = {
      scalar: {
        pattern: RegExp(
          /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
            /<<prop>>/g,
            function () {
              return r;
            }
          )
        ),
        lookbehind: !0,
        alias: "string",
      },
      comment: /#.*/,
      key: {
        pattern: RegExp(
          /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
            .replace(/<<prop>>/g, function () {
              return r;
            })
            .replace(/<<key>>/g, function () {
              return "(?:" + o + "|" + l + ")";
            })
        ),
        lookbehind: !0,
        greedy: !0,
        alias: "atrule",
      },
      directive: {
        pattern: /(^[ \t]*)%.+/m,
        lookbehind: !0,
        alias: "important",
      },
      datetime: {
        pattern: a(
          /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
            .source
        ),
        lookbehind: !0,
        alias: "number",
      },
      boolean: {
        pattern: a(/false|true/.source, "i"),
        lookbehind: !0,
        alias: "important",
      },
      null: {
        pattern: a(/null|~/.source, "i"),
        lookbehind: !0,
        alias: "important",
      },
      string: { pattern: a(l), lookbehind: !0, greedy: !0 },
      number: {
        pattern: a(
          /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
            .source,
          "i"
        ),
        lookbehind: !0,
      },
      tag: t,
      important: n,
      punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
    }),
      (e.languages.yml = e.languages.yaml);
  })(e);
}
function Ql(e) {
  const n = (e || "").trim(),
    t = n.charAt(0);
  if ("#" === t || "/" === t) return n;
  const r = n.indexOf(":");
  if (-1 === r) return n;
  let o = -1;
  const l = ["http", "https", "mailto", "tel", "about", "chrome"];
  for (; ++o < l.length; ) {
    const e = l[o];
    if (r === e.length && n.slice(0, e.length).toLowerCase() === e) return n;
  }
  return (
    (o = n.indexOf("?")),
    -1 !== o && r > o ? n : ((o = n.indexOf("#")), -1 !== o && r > o ? n : "")
  );
}
(Vl = Gl), (Gl.displayName = "yaml"), (Gl.aliases = ["yml"]);
const Yl = ({ description: e, prefix: n = "" }) => {
  const t = (0, u.useRef)(),
    [r, o] = (0, u.useState)(!0),
    [l, i] = (0, u.useState)(!0),
    [s, c] = (0, u.useState)(
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ),
    d = (0, u.useCallback)(() => {
      o((e) => !e);
    }, []);
  return (
    (0, u.useLayoutEffect)(() => {
      const { current: e } = t;
      if (e) {
        const n =
          20 *
            parseFloat(
              window.getComputedStyle(document.documentElement).fontSize
            ) +
          8;
        let { height: t } = e.firstElementChild.getBoundingClientRect();
        t > n ? (o(!0), i(!1)) : (o(!1), i(!0));
      }
    }, []),
    (0, u.useLayoutEffect)(() => {
      let e = window.matchMedia("(prefers-color-scheme: dark)");
      const n = (e) => {
        c(e.matches);
      };
      return (
        e.addEventListener("change", n),
        () => {
          e.removeEventListener("change", n);
        }
      );
    }, []),
    (0, a.jsxs)("div", {
      className: `${n}description-wrapper ${
        r ? `${n}description-collapse` : ""
      }`,
      children: [
        (0, a.jsx)("div", {
          className: `${n}description`,
          ref: t,
          children: (0, a.jsx)(Zr, {
            children: e,
            className: "line-break",
            linkTarget: "_blank",
            transformLinkUri: Ql,
            remarkPlugins: [no],
            components: {
              code({ node: e, inline: n, className: t, children: r, ...o }) {
                const l = /language-(\w+)/.exec(t || "")?.[1] || null;
                return n
                  ? (0, a.jsx)("code", { className: t, ...o, children: r })
                  : (0, a.jsx)(El, {
                      children: String(r).replace(/\n$/, ""),
                      style: s ? Cl : Nl,
                      language: l,
                      customStyle: {
                        margin: "0",
                        background: "var(--in-content-box-background-odd)",
                      },
                      className: "syntax-highlighted-code",
                      wrapLongLines: !0,
                      ...o,
                    });
              },
            },
          }),
        }),
        (0, a.jsx)("button", {
          className: `button-link ${n}description-toggle`,
          hidden: l,
          onClick: d,
          children: r ? "Show more" : "Show less",
        }),
      ],
    })
  );
};
function Kl(e) {
  try {
    return Services.io.newURI(e), !0;
  } catch (e) {
    return !1;
  }
}
new Map([
  [Tl, ["bash", "sh", "shell"]],
  [Ol, ["powershell", "ps", "PS", "ps1", "PS1"]],
  [_l, ["css", "CSS"]],
  [Il, ["diff", "DIFF", "patch"]],
  [Ml, ["ini", "INI", "conf", "cfg", "config"]],
  [Bl, ["regex", "REGEX", "regexp"]],
  [Hl, ["javascript", "js", "JS"]],
  [Wl, ["json", "JSON", "json5", "JSON5"]],
  [n(Vl), ["yaml", "YAML", "yml", "YML"]],
  [
    n(sl),
    [
      "markup",
      "html",
      "HTML",
      "xml",
      "XML",
      "xhtml",
      "XHTML",
      "svg",
      "SVG",
      "mathml",
      "ssml",
      "atom",
      "rss",
      "RSS",
    ],
  ],
]).forEach((e, n) => {
  El.registerLanguage(e[0], n), El.alias(e[0], e.slice(1));
});
const Xl = ({ script: e, launchLocalFile: n }) => {
    let {
      author: t,
      authorURL: r,
      homepageURL: o,
    } = (function ({ author: e, homepageURL: n } = {}) {
      let t,
        r = e,
        o = n;
      if (e)
        try {
          t = new URL(e);
          let n = t.pathname.split("/");
          n.length < 3 && !n[1]
            ? (r = t.host)
            : ["github.com", "gitlab.com", "bitbucket.org"].includes(t.host) &&
              (r = n[1] || e),
            (t = t.href);
        } catch (e) {}
      return (
        (o = n && (Kl(n) ? n : `file:///${n}`)),
        (t = t || o),
        { author: r, authorURL: t, homepageURL: o }
      );
    })(e);
    return (0, a.jsx)("div", {
      className: "script-card-expanded",
      children: (0, a.jsxs)("div", {
        className: "script-detail-rows",
        children: [
          e.description?.length > 200
            ? (0, a.jsx)(Yl, {
                description: e.description,
                prefix: "script-detail-",
              })
            : null,
          (0, a.jsxs)("div", {
            className: "script-detail-row script-detail-source",
            children: [
              (0, a.jsx)("label", {
                className: "script-detail-label",
                children: "Source file",
              }),
              (0, a.jsx)("a", {
                href: e.path,
                onClick: n,
                children: e.filename,
              }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "script-detail-row script-detail-running",
            children: [
              (0, a.jsx)("label", {
                className: "script-detail-label",
                children: "Running",
              }),
              (0, a.jsx)("code", { children: e.isRunning ? "true" : "false" }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "script-detail-row script-detail-version",
            hidden: !e.version,
            children: [
              (0, a.jsx)("label", {
                className: "script-detail-label",
                children: "Version",
              }),
              (0, a.jsx)("span", { children: e.version }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "script-detail-row script-detail-author",
            hidden: !t,
            children: [
              (0, a.jsx)("label", {
                className: "script-detail-label",
                children: "Author",
              }),
              r
                ? (0, a.jsx)("a", { target: "_blank", href: r, children: t })
                : (0, a.jsx)("span", { children: t }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "script-detail-row script-detail-homepageURL",
            hidden: !o,
            children: [
              (0, a.jsx)("label", {
                className: "script-detail-label",
                children: "Homepage",
              }),
              (0, a.jsx)("a", {
                target: "_blank",
                href: o,
                children: e.homepageURL,
              }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "script-detail-row script-detail-downloadURL",
            hidden: !e.downloadURL,
            children: [
              (0, a.jsx)("label", {
                className: "script-detail-label",
                children: "Download URL",
              }),
              (0, a.jsx)("a", {
                target: "_blank",
                href:
                  e.downloadURL &&
                  (Kl(e.downloadURL)
                    ? e.downloadURL
                    : `file:///${e.downloadURL}`),
                children: e.downloadURL,
              }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "script-detail-row script-detail-updateURL",
            hidden: !e.updateURL || e.updateURL === e.downloadURL,
            children: [
              (0, a.jsx)("label", {
                className: "script-detail-label",
                children: "Update URL",
              }),
              (0, a.jsx)("a", {
                target: "_blank",
                href:
                  e.updateURL &&
                  (Kl(e.updateURL) ? e.updateURL : `file:///${e.updateURL}`),
                children: e.updateURL,
              }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "script-detail-row script-detail-optionsURL",
            hidden: !e.optionsURL,
            children: [
              (0, a.jsx)("label", {
                className: "script-detail-label",
                children: "Options URL",
              }),
              (0, a.jsx)("a", {
                target: "_blank",
                href:
                  e.optionsURL &&
                  (Kl(e.optionsURL) ? e.optionsURL : `file:///${e.optionsURL}`),
                children: e.optionsURL,
              }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "script-detail-row script-detail-type",
            children: [
              (0, a.jsx)("label", {
                className: "script-detail-label",
                children: "Type",
              }),
              (0, a.jsx)("span", {
                children: e.isESM
                  ? "ES module"
                  : e.inbackground
                  ? "Background script"
                  : "Chrome script",
              }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "script-detail-row script-detail-onlyonce",
            hidden: !e.onlyonce,
            children: [
              (0, a.jsx)("label", {
                className: "script-detail-label",
                children: "Only once",
              }),
              (0, a.jsx)("code", { children: "true" }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "script-detail-row script-detail-ignoreCache",
            hidden: !e.ignoreCache,
            children: [
              (0, a.jsx)("label", {
                className: "script-detail-label",
                children: "Ignore cache",
              }),
              (0, a.jsx)("code", { children: "true" }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "script-detail-row script-detail-loadOrder",
            hidden: e.inbackground,
            children: [
              (0, a.jsx)("label", {
                className: "script-detail-label",
                children: "Load order",
              }),
              (0, a.jsx)("span", { children: String(e.loadOrder) }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "script-detail-row script-detail-charset",
            hidden: !e.charset,
            children: [
              (0, a.jsx)("label", {
                className: "script-detail-label",
                children: "Character set",
              }),
              (0, a.jsx)("span", { children: e.charset }),
            ],
          }),
        ],
      }),
    });
  },
  { gScriptUpdater: Jl } = ChromeUtils.importESModule(
    "chrome://userchrome/content/aboutuserchrome/modules/UCMSingletonData.sys.mjs"
  ),
  Zl = ({
    script: e,
    enabled: n,
    expanded: t,
    highlights: r,
    setUpdater: o,
    ...l
  }) => {
    const { navigate: i } = (0, u.useContext)(v),
      [s, c] = (0, u.useState)(!0),
      [d, p] = (0, u.useState)("info"),
      [h, g] = (0, u.useState)(""),
      [m, b] = (0, u.useState)(!1),
      [y, k] = (0, u.useState)(""),
      [x, w] = (0, u.useState)(!e.icon),
      [S, E] = (0, u.useState)(!1),
      C = (0, u.useRef)(null);
    let N = (0, u.useMemo)(() => Jl.getHandle(e), []),
      L = (0, u.useMemo)(
        () => e.id.toLowerCase().replace(/[^a-z0-9_-]/g, "_"),
        [e.id]
      ),
      A = (0, u.useMemo)(() => `script-card-${L}`, [L]),
      T = (0, u.useMemo)(() => `script-name-${L}`, [L]),
      P = (0, u.useMemo)(
        () =>
          e.description && e.description.length > 200
            ? `${String(e.description ?? "")?.slice(0, 200)}…`
            : e.description,
        [e.description]
      );
    const F = (0, u.useCallback)(
        (e, n) =>
          e
            ? n % 2
              ? (0, a.jsx)(
                  "mark",
                  { children: e },
                  `script-name-highlight-${L}-${n}`
                )
              : (0, a.jsx)(
                  "span",
                  { children: e },
                  `script-name-highlight-${L}-${n}`
                )
            : null,
        [L]
      ),
      O = (0, u.useMemo)(() => {
        if (!r) return null;
        let e = r.name?.map(F).filter(Boolean);
        if (e?.length) return e;
        let n = r.filename?.map(F).filter(Boolean);
        return n?.length ? n : null;
      }, [F, r]),
      _ = (0, u.useCallback)(
        (n) => {
          t ||
            (i(`scripts/${e.filename}`),
            window.scrollTo(0, 0),
            n.preventDefault(),
            n.stopPropagation());
        },
        [t, i, e.filename]
      ),
      R = (0, u.useCallback)(
        (e) => {
          switch (e.target.localName) {
            case "button":
            case "input":
            case "a":
              return;
          }
          _(e);
        },
        [_]
      ),
      D = (0, u.useCallback)(
        (e) => {
          if (!e.repeat)
            switch (e.key) {
              case "Enter":
              case " ":
                switch (e.target.localName) {
                  case "button":
                  case "input":
                  case "a":
                    return;
                }
                _(e);
            }
        },
        [_]
      ),
      I = (0, u.useCallback)(_, [_]),
      j = (0, u.useCallback)(
        (e) => {
          if (!e.repeat)
            switch (e.key) {
              case "Enter":
              case " ":
                _(e);
            }
        },
        [_]
      ),
      z = (0, u.useCallback)((e) => {
        E(!0);
      }, []),
      M = (0, u.useCallback)((e) => {
        E(!1);
      }, []),
      U = (0, u.useCallback)(() => {
        w(!0);
      }, []),
      q = (0, u.useCallback)(
        (e) => {
          N.launchLocalFile(), e.preventDefault();
        },
        [N]
      ),
      B = (0, u.useCallback)(() => f.toggleScript(e.filename), [e.filename]),
      H = (0, u.useCallback)(
        (e) => {
          let n = (
              e.remoteFile
                ? f.parseStringAsScriptInfo(e.filename, e.remoteFile)
                : {}
            ).version,
            t = {};
          e.writing
            ? (k("Updating…"),
              b(!0),
              c(!1),
              (t.disabled = !0),
              (t.update = null))
            : e.updateError
            ? (k("Update failed"),
              p("warning"),
              g(`Update to ${n} manually`),
              b(!0),
              c(!1),
              (t.disabled = !0),
              (t.update = null),
              console.error(
                `Error overwriting ${e.filename} :>> `,
                e.updateError
              ))
            : e.pendingRestart
            ? (k("Updated"),
              p("success"),
              g(`Restart to update to ${n}`),
              b(!0),
              c(!1),
              (t.disabled = !0),
              (t.update = null))
            : e.downloadError
            ? (c(!0),
              (t = null),
              console.error(
                `Error downloading ${e.filename} :>> `,
                e.downloadError
              ))
            : Services.vc.compare(n, e.currentVersion) > 0
            ? (k("Update now"),
              g(`Update to ${n} available`),
              b(!1),
              c(!1),
              (t.disabled = !1),
              (t.update = e.updateScript))
            : (c(!0), (t = null)),
            t &&
              ((t.writing = e.writing), (t.pendingRestart = e.pendingRestart)),
            o(e.filename, t);
        },
        [o]
      );
    return (
      (0, u.useEffect)(() => {
        let e = N.subscribe(H);
        return (
          N.checkRemoteFile(),
          () => {
            e();
          }
        );
      }, [N, H]),
      (0, u.useEffect)(() => {
        t &&
          S &&
          (C.current?.blur(), document.querySelector(".back-button").focus());
      }, [t, S]),
      (0, u.useEffect)(() => {
        E(document.activeElement === C.current);
      }, [t]),
      (0, a.jsxs)("div", {
        id: A,
        className: "script card",
        active: n ? "true" : "false",
        expanded: t ? "" : void 0,
        "aria-labelledby": T,
        focused: S ? "" : void 0,
        onClick: R,
        onKeyDown: D,
        role: "presentation",
        ...l,
        children: [
          (0, a.jsxs)("div", {
            className: "script-card-collapsed",
            children: [
              (0, a.jsx)("img", {
                className: "script-icon",
                alt: "",
                src: e.icon,
                onError: U,
                hidden: x,
              }),
              (0, a.jsxs)("div", {
                className: "card-contents",
                children: [
                  (0, a.jsxs)("div", {
                    className: "script-name-container",
                    children: [
                      (0, a.jsx)("button", {
                        className: "script-name-button",
                        onClick: I,
                        onKeyDown: j,
                        onFocus: z,
                        onBlur: M,
                        disabled: t,
                        "aria-expanded": t ? "true" : "false",
                        "aria-controls": A,
                        ref: C,
                        children: (0, a.jsx)("h3", {
                          id: T,
                          className: "script-name",
                          title: `${e.filename}${
                            e.version ? ` ${e.version}` : ""
                          }`,
                          "aria-label": `${e.name || e.filename}${
                            n ? "" : " (disabled)"
                          }`,
                          children: O || e.name || e.filename,
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "script-version",
                        hidden: !e.version,
                        children: e.version,
                      }),
                      (0, a.jsx)("div", { className: "spacer" }),
                      (0, a.jsx)("input", {
                        type: "checkbox",
                        className: "script-checkbox toggle-button",
                        checked: n,
                        onInput: B,
                      }),
                    ],
                  }),
                  (0, a.jsx)("span", {
                    className: "script-description",
                    children: P,
                  }),
                ],
              }),
            ],
          }),
          (0, a.jsx)("div", {
            className: "script-card-message",
            align: "center",
            type: d,
            hidden: s,
            children: (0, a.jsxs)("div", {
              className: "message-inner",
              children: [
                (0, a.jsx)("span", { className: "message-icon" }),
                (0, a.jsxs)("span", {
                  className: "message-content",
                  children: [
                    (0, a.jsx)("span", {
                      className: "message-text",
                      children: h,
                    }),
                    (0, a.jsx)("button", {
                      className: "update-button " + (m ? "" : "primary"),
                      disabled: m,
                      onClick: N.updateScript,
                      children: y,
                    }),
                  ],
                }),
              ],
            }),
          }),
          t ? (0, a.jsx)(Xl, { script: e, launchLocalFile: q }) : null,
        ],
      })
    );
  },
  ea = ({ description: e, linkText: n, linkURL: t }) =>
    e
      ? (0, a.jsx)("div", {
          className: "message-box",
          children: (0, a.jsxs)("div", {
            className: "message",
            children: [
              (0, a.jsx)("p", { children: e }),
              n && t
                ? (0, a.jsx)("p", {
                    children: (0, a.jsx)("a", {
                      href: t,
                      target: "_blank",
                      children: n,
                    }),
                  })
                : null,
            ],
          }),
        })
      : null,
  na = ({
    missingFxAutoconfig: e,
    outdatedFxAutoconfig: n,
    noResultsForSearch: t,
    searchUnit: r,
  }) => {
    let o = {};
    return (
      e || n
        ? ((o.description = `fx-autoconfig is ${
            e ? "not installed" : "outdated"
          }.`),
          (o.linkText = "Download fx-autoconfig"),
          (o.linkURL = "https://github.com/MrOtherGuy/fx-autoconfig"))
        : t && (o.description = `Sorry! There are no ${r} matching “${t}”.`),
      (0, a.jsx)(ea, { ...o })
    );
  },
  ta = () => {
    const {
      path: e,
      navigate: n,
      restart: t,
      search: r,
      setSearch: o,
      missingFxAutoconfig: l,
      outdatedFxAutoconfig: i,
      scripts: s,
      scriptsDisabled: c,
      setUpdateCount: d,
      initialFocus: f,
      setInitialFocus: p,
    } = (0, u.useContext)(v);
    let [, h] = e.split("/");
    const [g, m] = (0, u.useState)(!1),
      [b, y] = (0, u.useState)(!0),
      [k, x] = (0, u.useState)(""),
      [S, E] = (0, u.useState)(!0),
      [C, N] = (0, u.useState)({}),
      L = (0, u.useMemo)(
        () => (0, w.fuzzyFilter)(s, r, { fields: ["name", "filename"] }),
        [s, r]
      ),
      A = (0, u.useCallback)(() => {
        window.history.back();
      }, []),
      T = (0, u.useCallback)(
        (e, n) =>
          N((t) => {
            let r = { ...t };
            return n ? (r[e] = n) : delete r[e], r;
          }),
        []
      ),
      P = (0, u.useCallback)(() => {
        Object.values(C).forEach((e) => e?.update?.());
      }, [C]),
      F = (0, u.useCallback)(
        (e) => {
          o(e), h && n("scripts");
        },
        [h, n, o]
      ),
      O = (0, u.useCallback)(() => {
        let e = L[0]?.item;
        e ? (n(`scripts/${e.filename}`), window.scrollTo(0, 0)) : n("scripts");
      }, [L, n]),
      _ = (0, u.useCallback)(() => p(!1), [p]);
    return (
      (0, u.useEffect)(() => {
        let e = Object.values(C).filter((e) => e);
        if (!e.length) return y(!0), E(!0), void d(0);
        e.every((e) => e.disabled)
          ? e.some((e) => e.writing)
            ? (m(!0), x("Updating…"), y(!1), E(!0))
            : e.some((e) => e.pendingRestart)
            ? (y(!0), E(!1))
            : (m(!0), x("Update failed — Try updating manually"), y(!1), E(!0))
          : (m(!1), x("Updates available"), y(!1), E(!0)),
          d(
            e.filter((e) => !(e.disabled || e.writing || e.pendingRestart))
              .length
          );
      }, [d, C]),
      (0, u.useEffect)(() => {
        let e = s.find((e) => e.filename === h);
        h && !e && n("scripts", !1);
      }, [h, n, s]),
      (0, a.jsxs)("div", {
        id: "scripts",
        children: [
          (0, a.jsx)("div", {
            id: "scripts-header",
            className: "view-header",
            children: (0, a.jsxs)("div", {
              className: "sticky-container",
              children: [
                (0, a.jsx)("div", {
                  className: "main-search",
                  children: (0, a.jsx)(U, {
                    id: "scripts-search",
                    terms: r,
                    doSearch: F,
                    doSubmit: O,
                    placeholder: "Search installed scripts",
                    autoFocus: f,
                    onFocus: _,
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "main-heading",
                  children: [
                    (0, a.jsx)("button", {
                      className: "back-button",
                      title: "Go back",
                      onClick: A,
                      hidden: !h,
                    }),
                    (0, a.jsx)("h1", {
                      className: "header-name",
                      hidden: !!h,
                      children: r ? "Search Results" : "Manage Your Scripts",
                    }),
                    (0, a.jsx)("div", { className: "spacer" }),
                    (0, a.jsxs)("div", {
                      className: "header-button-box",
                      hidden: b,
                      children: [
                        (0, a.jsx)("label", {
                          className: "header-button-description",
                          children: k,
                        }),
                        (0, a.jsx)("button", {
                          id: "update-all-button",
                          className: g ? void 0 : "primary",
                          disabled: g,
                          onClick: P,
                          children: "Update all",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "header-button-box",
                      hidden: S,
                      children: [
                        (0, a.jsx)("label", {
                          className: "header-button-description",
                          children: "Restart to finish updating",
                        }),
                        (0, a.jsx)("button", {
                          id: "restart-button",
                          className: "primary",
                          onClick: t,
                          children: "Restart",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(na, {
                  missingFxAutoconfig: l,
                  outdatedFxAutoconfig: i,
                  noResultsForSearch: L.length < 1 && r,
                  searchUnit: "scripts",
                }),
              ],
            }),
          }),
          (0, a.jsx)("div", {
            id: "main",
            children: (0, a.jsx)("div", {
              id: "scripts-list",
              children: L.map(({ item: e, highlights: n }) =>
                (0, a.jsx)(
                  Zl,
                  {
                    script: e,
                    enabled: !c.split(",").includes(e.filename),
                    expanded: h === e.filename,
                    highlights: n,
                    setUpdater: T,
                    "aria-setsize": s.length,
                    "aria-posinset": s.indexOf(e) + 1,
                    hidden: h && h !== e.filename,
                  },
                  `${e.id}-card`
                )
              ).concat(
                s.map((e, n) =>
                  L.find((n) => n.item === e)
                    ? null
                    : (0, a.jsx)(
                        Zl,
                        {
                          script: e,
                          enabled: !c.split(",").includes(e.filename),
                          expanded: h === e.filename,
                          setUpdater: T,
                          "aria-setsize": s.length,
                          "aria-posinset": n + 1,
                          hidden: !0,
                        },
                        `${e.id}-card`
                      )
                )
              ),
            }),
          }),
        ],
      })
    );
  };
(u = l("fYo6y")), (u = l("fYo6y"));
function ra(e) {
  let n = Math.floor(e / 864e5),
    t = Math.floor((e % 864e5) / 36e5),
    r = Math.floor((e % 36e5) / 6e4),
    o = [
      n > 0 ? `${n} ${n > 1 ? "days" : "day"}` : "",
      t > 0 ? `${t} ${t > 1 ? "hours" : "hour"}` : "",
      r > 0 ? `${r} ${r > 1 ? "minutes" : "minute"}` : "",
    ].filter(Boolean);
  return o.length > 2
    ? ((o = [o.slice(0, -1).join(", "), o.slice(-1)[0]]), o.join(", and "))
    : o.join(" and ");
}
const oa = ({ id: e, value: n, suffix: t, ...r }) => {
    const o = (0, u.useCallback)((e) => {
      e.target.querySelector("input").focus();
    }, []);
    return (0, a.jsxs)("label", {
      htmlFor: e,
      className: "period-input-field",
      onFocus: o,
      onMouseUp: o,
      children: [
        (0, a.jsx)("input", { type: "text", id: e, value: n, size: "1", ...r }),
        (0, a.jsx)("span", {
          className: "period-input-sizer",
          children: n || "0",
        }),
        t && (0, a.jsx)("span", { children: t }),
      ],
    });
  },
  la = ({
    defaultValue: e = 0,
    min: n = 0,
    max: t = Number.MAX_SAFE_INTEGER,
    onChange: r,
    onError: o,
    id: l,
    ...i
  }) => {
    const [s, c] = (0, u.useState)(Math.floor(e / 864e5) || null),
      [d, f] = (0, u.useState)(Math.floor((e % 864e5) / 36e5) || null),
      [p, h] = (0, u.useState)(Math.floor((e % 36e5) / 6e4) || null),
      [g, m] = (0, u.useState)(null),
      b = (0, u.useCallback)((e) => {
        let { value: n } = e.target;
        if (n?.toString().length > 10) return;
        let t = parseInt(n, 10);
        switch (e.target.name) {
          case "days":
            c(t || null);
            break;
          case "hours":
            f(t || null);
            break;
          case "minutes":
            h(t || null);
        }
      }, []),
      y = (0, u.useCallback)(
        (e) => {
          let r = e.target?.closest(".period-input"),
            o = e.relatedTarget?.closest(".period-input");
          if (o && o === r) return;
          let l = 864e5 * (s || 0) + 36e5 * (d || 0) + 6e4 * (p || 0);
          l > n &&
            l < t &&
            (c(Math.floor(l / 864e5)),
            f(Math.floor((l % 864e5) / 36e5)),
            h(Math.floor((l % 36e5) / 6e4)));
        },
        [s, d, t, n, p]
      ),
      v = (0, u.useCallback)((e) => {
        if ("div" !== e.target.localName) return;
        let n = [...e.target.querySelectorAll("input")],
          t = e.clientX,
          r = n.sort((e, n) => {
            let r = e.getBoundingClientRect(),
              o = n.getBoundingClientRect();
            return (
              Math.abs(r.x + r.width / 2 - t) - Math.abs(o.x + o.width / 2 - t)
            );
          }),
          [o] = r;
        o.focus(), e.preventDefault();
      }, []);
    return (
      (0, u.useEffect)(() => {
        let e = 864e5 * (s || 0) + 36e5 * (d || 0) + 6e4 * (p || 0);
        e < n
          ? (m(`Must be at least ${ra(n)}`), o?.(e))
          : e > t
          ? (m(`Must be at most ${ra(t)}`), o?.(e))
          : (m(null), r(e));
      }, [s, d, t, n, p, r, o]),
      (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsxs)("div", {
            className: "period-input" + (g ? " error" : ""),
            id: l,
            role: "form",
            onMouseDown: v,
            onBlurCapture: y,
            ...i,
            children: [
              (0, a.jsx)(oa, {
                name: "days",
                id: l ? `${l}-days` : null,
                value: s || "",
                placeholder: "0",
                suffix: "d",
                onInput: b,
              }),
              (0, a.jsx)(oa, {
                name: "hours",
                id: l ? `${l}-hours` : null,
                value: d || "",
                placeholder: "0",
                suffix: "h",
                onInput: b,
              }),
              (0, a.jsx)(oa, {
                name: "minutes",
                id: l ? `${l}-minutes` : null,
                value: p || "",
                placeholder: "0",
                suffix: "m",
                onInput: b,
              }),
            ],
          }),
          g &&
            (0, a.jsx)("div", {
              className: "period-input-error-message",
              children: g,
            }),
        ],
      })
    );
  },
  { PREF_UPDATE_INTERVAL: aa, PREF_NOTIFICATIONS_ENABLED: ia } =
    ChromeUtils.importESModule(
      "chrome://userchrome/content/aboutuserchrome/modules/UCMSingletonData.sys.mjs"
    ),
  sa = () => {
    const {
        missingFxAutoconfig: e,
        outdatedFxAutoconfig: n,
        ucjsEnabled: t,
        gBrowserHackEnabled: r,
        gBrowserHackRequired: o,
        updateInterval: l,
        notificationsEnabled: i,
      } = (0, u.useContext)(v),
      s = (0, u.useCallback)((e) => {
        let n = e.target?.getAttribute("pref");
        n && k.set(n, e.target.checked);
      }, []),
      c = (0, u.useCallback)((e) => {
        k.set(aa, e);
      }, []);
    return (0, a.jsxs)("div", {
      id: "settings",
      children: [
        (0, a.jsx)("div", {
          id: "settings-header",
          className: "view-header",
          children: (0, a.jsxs)("div", {
            className: "sticky-container",
            children: [
              (0, a.jsx)("div", {
                className: "main-search",
                children: (0, a.jsx)("div", { className: "search-spacer" }),
              }),
              (0, a.jsx)("div", {
                className: "main-heading",
                children: (0, a.jsx)("h1", {
                  className: "header-name",
                  children: "Settings",
                }),
              }),
              (0, a.jsx)(na, {
                missingFxAutoconfig: e,
                outdatedFxAutoconfig: n,
              }),
            ],
          }),
        }),
        (0, a.jsx)("div", {
          id: "main",
          children: (0, a.jsxs)("div", {
            id: "settings",
            children: [
              (0, a.jsxs)("div", {
                id: "fx-autoconfig-settings",
                className: "settings-group",
                children: [
                  (0, a.jsx)("h2", { children: "fx-autoconfig" }),
                  (0, a.jsx)("div", {
                    className: "setting-container",
                    children: (0, a.jsxs)("div", {
                      className: "checkbox-container",
                      children: [
                        (0, a.jsx)("input", {
                          type: "checkbox",
                          id: "userChromeJS-enabled",
                          className: "checkbox",
                          pref: h,
                          checked: t,
                          disabled: e,
                          onChange: s,
                        }),
                        (0, a.jsx)("label", {
                          htmlFor: "userChromeJS-enabled",
                          className: "checkbox-text",
                          children: "Load userChrome.js scripts",
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "setting-container",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "checkbox-container tail-with-learn-more",
                        children: [
                          (0, a.jsx)("input", {
                            type: "checkbox",
                            id: "gBrowser_hack-enabled",
                            className: "checkbox",
                            pref: m,
                            checked: r,
                            disabled: o,
                            onChange: s,
                          }),
                          (0, a.jsx)("label", {
                            htmlFor: "gBrowser_hack-enabled",
                            className: "checkbox-text",
                            children: "Enable gBrowser hack",
                          }),
                        ],
                      }),
                      (0, a.jsx)("a", {
                        href: "https://github.com/MrOtherGuy/fx-autoconfig#startup-error",
                        target: "_blank",
                        children: "Learn more",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                id: "about-userchrome-settings",
                className: "settings-group",
                children: [
                  (0, a.jsx)("h2", { children: "Script Updates" }),
                  (0, a.jsx)("div", {
                    className: "setting-container",
                    children: (0, a.jsxs)("div", {
                      className: "checkbox-container",
                      children: [
                        (0, a.jsx)("input", {
                          type: "checkbox",
                          id: "manager-notifications",
                          className: "checkbox",
                          pref: ia,
                          checked: i,
                          onChange: s,
                        }),
                        (0, a.jsx)("label", {
                          htmlFor: "manager-notifications",
                          className: "checkbox-text",
                          children: "Show update notification badges",
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "setting-container",
                    children: [
                      (0, a.jsx)("label", {
                        htmlFor: "manager-updateInterval",
                        children: "Update check frequency",
                      }),
                      (0, a.jsx)(la, {
                        id: "manager-updateInterval",
                        defaultValue: l,
                        min: 9e5,
                        max: 2592e6,
                        onChange: c,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
var ua;
ua = JSON.parse('{"version":"1.1.7"}');
const ca = () => {
  const { path: e, navigate: n, updateCount: t } = (0, u.useContext)(v),
    r = (0, u.useCallback)(
      (e) => {
        let t = e.target?.closest("[path]");
        t && n(t?.getAttribute("path"));
      },
      [n]
    );
  return (0, a.jsxs)("div", {
    id: "full",
    children: [
      (0, a.jsxs)("div", {
        id: "sidebar",
        children: [
          (0, a.jsxs)("button-group", {
            id: "categories",
            orientation: "vertical",
            role: "tablist",
            tabIndex: "0",
            "aria-controls": "content",
            children: [
              (0, a.jsx)("button", {
                className:
                  "category " + (e.split("/")[0] === y ? "selected" : ""),
                role: "tab",
                "aria-selected": e.split("/")[0] === y,
                title: "Manage your scripts",
                onClick: r,
                path: y,
                name: "scripts",
                "badge-count": t || void 0,
                children: (0, a.jsx)("span", {
                  className: "category-name",
                  children: "Scripts",
                }),
              }),
              (0, a.jsx)("button", {
                className:
                  "category " +
                  ("settings" === e.split("/")[0] ? "selected" : ""),
                role: "tab",
                "aria-selected": "settings" === e.split("/")[0],
                title: "Settings",
                onClick: r,
                path: "settings",
                name: "settings",
                children: (0, a.jsx)("span", {
                  className: "category-name",
                  children: "Settings",
                }),
              }),
            ],
          }),
          (0, a.jsx)("div", { className: "spacer" }),
          (0, a.jsx)("div", {
            id: "sidebar-footer",
            children: (0, a.jsxs)("ul", {
              className: "sidebar-footer-list",
              children: [
                (0, a.jsx)("li", {
                  children: (0, a.jsxs)("a", {
                    href: "https://www.userchrome.org/what-is-userchrome-js.html#findingscripts",
                    id: "get-more-button",
                    className: "sidebar-footer-link",
                    target: "_blank",
                    title: "Get more scripts",
                    children: [
                      (0, a.jsx)("img", {
                        src: "chrome://global/skin/icons/search-glass.svg",
                        alt: "",
                        className: "sidebar-footer-icon",
                      }),
                      (0, a.jsx)("span", {
                        className: "sidebar-footer-label",
                        children: "Get more scripts",
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("li", {
                  children: (0, a.jsxs)("a", {
                    href: "https://github.com/aminomancer/uc.css.js",
                    id: "help-button",
                    className: "sidebar-footer-link",
                    target: "_blank",
                    title: "Help/Documentation",
                    children: [
                      (0, a.jsx)("img", {
                        src: "chrome://global/skin/icons/help.svg",
                        alt: "",
                        className: "sidebar-footer-icon",
                      }),
                      (0, a.jsx)("span", {
                        className: "sidebar-footer-label",
                        children: "Help/Documentation",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
      (0, a.jsx)("div", {
        id: "content",
        children: { scripts: (0, a.jsx)(ta, {}), settings: (0, a.jsx)(sa, {}) }[
          e.split("/")[0]
        ],
      }),
    ],
  });
};
(history.scrollRestoration = "manual"),
  console.log(`UserChrome Manager v${ua.version}`),
  i(document.getElementById("root")).render(
    (0, a.jsx)(x, { children: (0, a.jsx)(ca, {}) })
  );
