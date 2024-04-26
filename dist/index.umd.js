!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
      ? define(['exports'], t)
      : t(
          ((e = 'undefined' != typeof globalThis ? globalThis : e || self)[
            'rollup-ts-swc-template'
          ] = {})
        )
})(this, function (e) {
  'use strict'
  function t(e, n) {
    return (
      (t =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e
        }),
      t(e, n)
    )
  }
  var n = (function (e) {
    function n(t, n) {
      var o
      return ((o = e.call(this, n) || this).age = t), o
    }
    return (
      (function (e, n) {
        if ('function' != typeof n && null !== n)
          throw new TypeError(
            'Super expression must either be null or a function'
          )
        ;(e.prototype = Object.create(n && n.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          n && t(e, n)
      })(n, e),
      n
    )
  })(function (e) {
    this.name = e
  })
  ;(e.default = n),
    (e.numberPlus = function (e, t) {
      return e + t
    }),
    Object.defineProperty(e, '__esModule', { value: !0 })
})
