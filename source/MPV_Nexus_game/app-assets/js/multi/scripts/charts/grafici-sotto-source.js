
  /*!
   * Chart.js
   * http://chartjs.org/
   * Version: 2.5.0
   *
   * Copyright 2017 Nick Downie
   * Released under the MIT license
   * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
   */
  ! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
      var e;
      e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Chart = t()
    }
  }(function() {
    var t;
    return function e(t, n, i) {
      function a(o, s) {
        if (!n[o]) {
          if (!t[o]) {
            var l = "function" == typeof require && require;
            if (!s && l) return l(o, !0);
            if (r) return r(o, !0);
            var u = new Error("Cannot find module '" + o + "'");
            throw u.code = "MODULE_NOT_FOUND", u
          }
          var d = n[o] = {
            exports: {}
          };
          t[o][0].call(d.exports, function(e) {
            var n = t[o][1][e];
            return a(n ? n : e)
          }, d, d.exports, e, t, n, i)
        }
        return n[o].exports
      }
      for (var r = "function" == typeof require && require, o = 0; o < i.length; o++) a(i[o]);
      return a
    }({
      1: [function(t, e, n) {
        function i(t) {
          if (t) {
            var e = /^#([a-fA-F0-9]{3})$/,
              n = /^#([a-fA-F0-9]{6})$/,
              i = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
              a = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
              r = /(\w+)/,
              o = [0, 0, 0],
              s = 1,
              l = t.match(e);
            if (l) {
              l = l[1];
              for (var u = 0; u < o.length; u++) o[u] = parseInt(l[u] + l[u], 16)
            } else if (l = t.match(n)) {
              l = l[1];
              for (var u = 0; u < o.length; u++) o[u] = parseInt(l.slice(2 * u, 2 * u + 2), 16)
            } else if (l = t.match(i)) {
              for (var u = 0; u < o.length; u++) o[u] = parseInt(l[u + 1]);
              s = parseFloat(l[4])
            } else if (l = t.match(a)) {
              for (var u = 0; u < o.length; u++) o[u] = Math.round(2.55 * parseFloat(l[u + 1]));
              s = parseFloat(l[4])
            } else if (l = t.match(r)) {
              if ("transparent" == l[1]) return [0, 0, 0, 0];
              if (o = x[l[1]], !o) return
            }
            for (var u = 0; u < o.length; u++) o[u] = b(o[u], 0, 255);
            return s = s || 0 == s ? b(s, 0, 1) : 1, o[3] = s, o
          }
        }

        function a(t) {
          if (t) {
            var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
              n = t.match(e);
            if (n) {
              var i = parseFloat(n[4]),
                a = b(parseInt(n[1]), 0, 360),
                r = b(parseFloat(n[2]), 0, 100),
                o = b(parseFloat(n[3]), 0, 100),
                s = b(isNaN(i) ? 1 : i, 0, 1);
              return [a, r, o, s]
            }
          }
        }

        function r(t) {
          if (t) {
            var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
              n = t.match(e);
            if (n) {
              var i = parseFloat(n[4]),
                a = b(parseInt(n[1]), 0, 360),
                r = b(parseFloat(n[2]), 0, 100),
                o = b(parseFloat(n[3]), 0, 100),
                s = b(isNaN(i) ? 1 : i, 0, 1);
              return [a, r, o, s]
            }
          }
        }

        function o(t) {
          var e = i(t);
          return e && e.slice(0, 3)
        }

        function s(t) {
          var e = a(t);
          return e && e.slice(0, 3)
        }

        function l(t) {
          var e = i(t);
          return e ? e[3] : (e = a(t)) ? e[3] : (e = r(t)) ? e[3] : void 0
        }

        function u(t) {
          return "#" + y(t[0]) + y(t[1]) + y(t[2])
        }

        function d(t, e) {
          return 1 > e || t[3] && t[3] < 1 ? c(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
        }

        function c(t, e) {
          return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
        }

        function h(t, e) {
          if (1 > e || t[3] && t[3] < 1) return f(t, e);
          var n = Math.round(t[0] / 255 * 100),
            i = Math.round(t[1] / 255 * 100),
            a = Math.round(t[2] / 255 * 100);
          return "rgb(" + n + "%, " + i + "%, " + a + "%)"
        }

        function f(t, e) {
          var n = Math.round(t[0] / 255 * 100),
            i = Math.round(t[1] / 255 * 100),
            a = Math.round(t[2] / 255 * 100);
          return "rgba(" + n + "%, " + i + "%, " + a + "%, " + (e || t[3] || 1) + ")"
        }

        function g(t, e) {
          return 1 > e || t[3] && t[3] < 1 ? m(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
        }

        function m(t, e) {
          return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
        }

        function p(t, e) {
          return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
        }

        function v(t) {
          return k[t.slice(0, 3)]
        }

        function b(t, e, n) {
          return Math.min(Math.max(e, t), n)
        }

        function y(t) {
          var e = t.toString(16).toUpperCase();
          return e.length < 2 ? "0" + e : e
        }
        var x = t(5);
        e.exports = {
          getRgba: i,
          getHsla: a,
          getRgb: o,
          getHsl: s,
          getHwb: r,
          getAlpha: l,
          hexString: u,
          rgbString: d,
          rgbaString: c,
          percentString: h,
          percentaString: f,
          hslString: g,
          hslaString: m,
          hwbString: p,
          keyword: v
        };
        var k = {};
        for (var _ in x) k[x[_]] = _
      }, {
        5: 5
      }],
      2: [function(t, e, n) {
        var i = t(4),
          a = t(1),
          r = function(t) {
            if (t instanceof r) return t;
            if (!(this instanceof r)) return new r(t);
            this.values = {
              rgb: [0, 0, 0],
              hsl: [0, 0, 0],
              hsv: [0, 0, 0],
              hwb: [0, 0, 0],
              cmyk: [0, 0, 0, 0],
              alpha: 1
            };
            var e;
            if ("string" == typeof t)
              if (e = a.getRgba(t)) this.setValues("rgb", e);
              else if (e = a.getHsla(t)) this.setValues("hsl", e);
            else {
              if (!(e = a.getHwb(t))) throw new Error('Unable to parse color from string "' + t + '"');
              this.setValues("hwb", e)
            } else if ("object" == typeof t)
              if (e = t, void 0 !== e.r || void 0 !== e.red) this.setValues("rgb", e);
              else if (void 0 !== e.l || void 0 !== e.lightness) this.setValues("hsl", e);
            else if (void 0 !== e.v || void 0 !== e.value) this.setValues("hsv", e);
            else if (void 0 !== e.w || void 0 !== e.whiteness) this.setValues("hwb", e);
            else {
              if (void 0 === e.c && void 0 === e.cyan) throw new Error("Unable to parse color from object " + JSON.stringify(t));
              this.setValues("cmyk", e)
            }
          };
        r.prototype = {
          rgb: function() {
            return this.setSpace("rgb", arguments)
          },
          hsl: function() {
            return this.setSpace("hsl", arguments)
          },
          hsv: function() {
            return this.setSpace("hsv", arguments)
          },
          hwb: function() {
            return this.setSpace("hwb", arguments)
          },
          cmyk: function() {
            return this.setSpace("cmyk", arguments)
          },
          rgbArray: function() {
            return this.values.rgb
          },
          hslArray: function() {
            return this.values.hsl
          },
          hsvArray: function() {
            return this.values.hsv
          },
          hwbArray: function() {
            var t = this.values;
            return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
          },
          cmykArray: function() {
            return this.values.cmyk
          },
          rgbaArray: function() {
            var t = this.values;
            return t.rgb.concat([t.alpha])
          },
          hslaArray: function() {
            var t = this.values;
            return t.hsl.concat([t.alpha])
          },
          alpha: function(t) {
            return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
          },
          red: function(t) {
            return this.setChannel("rgb", 0, t)
          },
          green: function(t) {
            return this.setChannel("rgb", 1, t)
          },
          blue: function(t) {
            return this.setChannel("rgb", 2, t)
          },
          hue: function(t) {
            return t && (t %= 360, t = 0 > t ? 360 + t : t), this.setChannel("hsl", 0, t)
          },
          saturation: function(t) {
            return this.setChannel("hsl", 1, t)
          },
          lightness: function(t) {
            return this.setChannel("hsl", 2, t)
          },
          saturationv: function(t) {
            return this.setChannel("hsv", 1, t)
          },
          whiteness: function(t) {
            return this.setChannel("hwb", 1, t)
          },
          blackness: function(t) {
            return this.setChannel("hwb", 2, t)
          },
          value: function(t) {
            return this.setChannel("hsv", 2, t)
          },
          cyan: function(t) {
            return this.setChannel("cmyk", 0, t)
          },
          magenta: function(t) {
            return this.setChannel("cmyk", 1, t)
          },
          yellow: function(t) {
            return this.setChannel("cmyk", 2, t)
          },
          black: function(t) {
            return this.setChannel("cmyk", 3, t)
          },
          hexString: function() {
            return a.hexString(this.values.rgb)
          },
          rgbString: function() {
            return a.rgbString(this.values.rgb, this.values.alpha)
          },
          rgbaString: function() {
            return a.rgbaString(this.values.rgb, this.values.alpha)
          },
          percentString: function() {
            return a.percentString(this.values.rgb, this.values.alpha)
          },
          hslString: function() {
            return a.hslString(this.values.hsl, this.values.alpha)
          },
          hslaString: function() {
            return a.hslaString(this.values.hsl, this.values.alpha)
          },
          hwbString: function() {
            return a.hwbString(this.values.hwb, this.values.alpha)
          },
          keyword: function() {
            return a.keyword(this.values.rgb, this.values.alpha)
          },
          rgbNumber: function() {
            var t = this.values.rgb;
            return t[0] << 16 | t[1] << 8 | t[2]
          },
          luminosity: function() {
            for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
              var i = t[n] / 255;
              e[n] = .03928 >= i ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
            }
            return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
          },
          contrast: function(t) {
            var e = this.luminosity(),
              n = t.luminosity();
            return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
          },
          level: function(t) {
            var e = this.contrast(t);
            return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
          },
          dark: function() {
            var t = this.values.rgb,
              e = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;
            return 128 > e
          },
          light: function() {
            return !this.dark()
          },
          negate: function() {
            for (var t = [], e = 0; 3 > e; e++) t[e] = 255 - this.values.rgb[e];
            return this.setValues("rgb", t), this
          },
          lighten: function(t) {
            var e = this.values.hsl;
            return e[2] += e[2] * t, this.setValues("hsl", e), this
          },
          darken: function(t) {
            var e = this.values.hsl;
            return e[2] -= e[2] * t, this.setValues("hsl", e), this
          },
          saturate: function(t) {
            var e = this.values.hsl;
            return e[1] += e[1] * t, this.setValues("hsl", e), this
          },
          desaturate: function(t) {
            var e = this.values.hsl;
            return e[1] -= e[1] * t, this.setValues("hsl", e), this
          },
          whiten: function(t) {
            var e = this.values.hwb;
            return e[1] += e[1] * t, this.setValues("hwb", e), this
          },
          blacken: function(t) {
            var e = this.values.hwb;
            return e[2] += e[2] * t, this.setValues("hwb", e), this
          },
          greyscale: function() {
            var t = this.values.rgb,
              e = .3 * t[0] + .59 * t[1] + .11 * t[2];
            return this.setValues("rgb", [e, e, e]), this
          },
          clearer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e - e * t), this
          },
          opaquer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e + e * t), this
          },
          rotate: function(t) {
            var e = this.values.hsl,
              n = (e[0] + t) % 360;
            return e[0] = 0 > n ? 360 + n : n, this.setValues("hsl", e), this
          },
          mix: function(t, e) {
            var n = this,
              i = t,
              a = void 0 === e ? .5 : e,
              r = 2 * a - 1,
              o = n.alpha() - i.alpha(),
              s = ((r * o === -1 ? r : (r + o) / (1 + r * o)) + 1) / 2,
              l = 1 - s;
            return this.rgb(s * n.red() + l * i.red(), s * n.green() + l * i.green(), s * n.blue() + l * i.blue()).alpha(n.alpha() * a + i.alpha() * (1 - a))
          },
          toJSON: function() {
            return this.rgb()
          },
          clone: function() {
            var t, e, n = new r,
              i = this.values,
              a = n.values;
            for (var o in i) i.hasOwnProperty(o) && (t = i[o], e = {}.toString.call(t), "[object Array]" === e ? a[o] = t.slice(0) : "[object Number]" === e ? a[o] = t : console.error("unexpected color value:", t));
            return n
          }
        }, r.prototype.spaces = {
          rgb: ["red", "green", "blue"],
          hsl: ["hue", "saturation", "lightness"],
          hsv: ["hue", "saturation", "value"],
          hwb: ["hue", "whiteness", "blackness"],
          cmyk: ["cyan", "magenta", "yellow", "black"]
        }, r.prototype.maxes = {
          rgb: [255, 255, 255],
          hsl: [360, 100, 100],
          hsv: [360, 100, 100],
          hwb: [360, 100, 100],
          cmyk: [100, 100, 100, 100]
        }, r.prototype.getValues = function(t) {
          for (var e = this.values, n = {}, i = 0; i < t.length; i++) n[t.charAt(i)] = e[t][i];
          return 1 !== e.alpha && (n.a = e.alpha), n
        }, r.prototype.setValues = function(t, e) {
          var n, a = this.values,
            r = this.spaces,
            o = this.maxes,
            s = 1;
          if ("alpha" === t) s = e;
          else if (e.length) a[t] = e.slice(0, t.length), s = e[t.length];
          else if (void 0 !== e[t.charAt(0)]) {
            for (n = 0; n < t.length; n++) a[t][n] = e[t.charAt(n)];
            s = e.a
          } else if (void 0 !== e[r[t][0]]) {
            var l = r[t];
            for (n = 0; n < t.length; n++) a[t][n] = e[l[n]];
            s = e.alpha
          }
          if (a.alpha = Math.max(0, Math.min(1, void 0 === s ? a.alpha : s)), "alpha" === t) return !1;
          var u;
          for (n = 0; n < t.length; n++) u = Math.max(0, Math.min(o[t][n], a[t][n])), a[t][n] = Math.round(u);
          for (var d in r) d !== t && (a[d] = i[t][d](a[t]));
          return !0
        }, r.prototype.setSpace = function(t, e) {
          var n = e[0];
          return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this)
        }, r.prototype.setChannel = function(t, e, n) {
          var i = this.values[t];
          return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this)
        }, "undefined" != typeof window && (window.Color = r), e.exports = r
      }, {
        1: 1,
        4: 4
      }],
      3: [function(t, e, n) {
        function i(t) {
          var e, n, i, a = t[0] / 255,
            r = t[1] / 255,
            o = t[2] / 255,
            s = Math.min(a, r, o),
            l = Math.max(a, r, o),
            u = l - s;
          return l == s ? e = 0 : a == l ? e = (r - o) / u : r == l ? e = 2 + (o - a) / u : o == l && (e = 4 + (a - r) / u), e = Math.min(60 * e, 360), 0 > e && (e += 360), i = (s + l) / 2, n = l == s ? 0 : .5 >= i ? u / (l + s) : u / (2 - l - s), [e, 100 * n, 100 * i]
        }

        function a(t) {
          var e, n, i, a = t[0],
            r = t[1],
            o = t[2],
            s = Math.min(a, r, o),
            l = Math.max(a, r, o),
            u = l - s;
          return n = 0 == l ? 0 : u / l * 1e3 / 10, l == s ? e = 0 : a == l ? e = (r - o) / u : r == l ? e = 2 + (o - a) / u : o == l && (e = 4 + (a - r) / u), e = Math.min(60 * e, 360), 0 > e && (e += 360), i = l / 255 * 1e3 / 10, [e, n, i]
        }

        function o(t) {
          var e = t[0],
            n = t[1],
            a = t[2],
            r = i(t)[0],
            o = 1 / 255 * Math.min(e, Math.min(n, a)),
            a = 1 - 1 / 255 * Math.max(e, Math.max(n, a));
          return [r, 100 * o, 100 * a]
        }

        function s(t) {
          var e, n, i, a, r = t[0] / 255,
            o = t[1] / 255,
            s = t[2] / 255;
          return a = Math.min(1 - r, 1 - o, 1 - s), e = (1 - r - a) / (1 - a) || 0, n = (1 - o - a) / (1 - a) || 0, i = (1 - s - a) / (1 - a) || 0, [100 * e, 100 * n, 100 * i, 100 * a]
        }

        function l(t) {
          return K[JSON.stringify(t)]
        }

        function u(t) {
          var e = t[0] / 255,
            n = t[1] / 255,
            i = t[2] / 255;
          e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92;
          var a = .4124 * e + .3576 * n + .1805 * i,
            r = .2126 * e + .7152 * n + .0722 * i,
            o = .0193 * e + .1192 * n + .9505 * i;
          return [100 * a, 100 * r, 100 * o]
        }

        function d(t) {
          var e, n, i, a = u(t),
            r = a[0],
            o = a[1],
            s = a[2];
          return r /= 95.047, o /= 100, s /= 108.883, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, e = 116 * o - 16, n = 500 * (r - o), i = 200 * (o - s), [e, n, i]
        }

        function c(t) {
          return Y(d(t))
        }

        function h(t) {
          var e, n, i, a, r, o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100;
          if (0 == s) return r = 255 * l, [r, r, r];
          n = .5 > l ? l * (1 + s) : l + s - l * s, e = 2 * l - n, a = [0, 0, 0];
          for (var u = 0; 3 > u; u++) i = o + 1 / 3 * -(u - 1), 0 > i && i++, i > 1 && i--, r = 1 > 6 * i ? e + 6 * (n - e) * i : 1 > 2 * i ? n : 2 > 3 * i ? e + (n - e) * (2 / 3 - i) * 6 : e, a[u] = 255 * r;
          return a
        }

        function f(t) {
          var e, n, i = t[0],
            a = t[1] / 100,
            r = t[2] / 100;
          return 0 === r ? [0, 0, 0] : (r *= 2, a *= 1 >= r ? r : 2 - r, n = (r + a) / 2, e = 2 * a / (r + a), [i, 100 * e, 100 * n])
        }

        function m(t) {
          return o(h(t))
        }

        function p(t) {
          return s(h(t))
        }

        function v(t) {
          return l(h(t))
        }

        function y(t) {
          var e = t[0] / 60,
            n = t[1] / 100,
            i = t[2] / 100,
            a = Math.floor(e) % 6,
            r = e - Math.floor(e),
            o = 255 * i * (1 - n),
            s = 255 * i * (1 - n * r),
            l = 255 * i * (1 - n * (1 - r)),
            i = 255 * i;
          switch (a) {
            case 0:
              return [i, l, o];
            case 1:
              return [s, i, o];
            case 2:
              return [o, i, l];
            case 3:
              return [o, s, i];
            case 4:
              return [l, o, i];
            case 5:
              return [i, o, s]
          }
        }

        function x(t) {
          var e, n, i = t[0],
            a = t[1] / 100,
            r = t[2] / 100;
          return n = (2 - a) * r, e = a * r, e /= 1 >= n ? n : 2 - n, e = e || 0, n /= 2, [i, 100 * e, 100 * n]
        }

        function k(t) {
          return o(y(t))
        }

        function _(t) {
          return s(y(t))
        }

        function w(t) {
          return l(y(t))
        }

        function S(t) {
          var e, n, i, a, o = t[0] / 360,
            s = t[1] / 100,
            l = t[2] / 100,
            u = s + l;
          switch (u > 1 && (s /= u, l /= u), e = Math.floor(6 * o), n = 1 - l, i = 6 * o - e, 0 != (1 & e) && (i = 1 - i), a = s + i * (n - s), e) {
            default:
              case 6:
              case 0:
              r = n,
            g = a,
            b = s;
            break;
            case 1:
                r = a,
              g = n,
              b = s;
              break;
            case 2:
                r = s,
              g = n,
              b = a;
              break;
            case 3:
                r = s,
              g = a,
              b = n;
              break;
            case 4:
                r = a,
              g = s,
              b = n;
              break;
            case 5:
                r = n,
              g = s,
              b = a
          }
          return [255 * r, 255 * g, 255 * b]
        }

        function M(t) {
          return i(S(t))
        }

        function D(t) {
          return a(S(t))
        }

        function C(t) {
          return s(S(t))
        }

        function T(t) {
          return l(S(t))
        }

        function P(t) {
          var e, n, i, a = t[0] / 100,
            r = t[1] / 100,
            o = t[2] / 100,
            s = t[3] / 100;
          return e = 1 - Math.min(1, a * (1 - s) + s), n = 1 - Math.min(1, r * (1 - s) + s), i = 1 - Math.min(1, o * (1 - s) + s), [255 * e, 255 * n, 255 * i]
        }

        function I(t) {
          return i(P(t))
        }

        function A(t) {
          return a(P(t))
        }

        function F(t) {
          return o(P(t))
        }

        function O(t) {
          return l(P(t))
        }

        function R(t) {
          var e, n, i, a = t[0] / 100,
            r = t[1] / 100,
            o = t[2] / 100;
          return e = 3.2406 * a + -1.5372 * r + o * -.4986, n = a * -.9689 + 1.8758 * r + .0415 * o, i = .0557 * a + r * -.204 + 1.057 * o, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e = 12.92 * e, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n = 12.92 * n, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i = 12.92 * i, e = Math.min(Math.max(0, e), 1), n = Math.min(Math.max(0, n), 1), i = Math.min(Math.max(0, i), 1), [255 * e, 255 * n, 255 * i]
        }

        function L(t) {
          var e, n, i, a = t[0],
            r = t[1],
            o = t[2];
          return a /= 95.047, r /= 100, o /= 108.883, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, e = 116 * r - 16, n = 500 * (a - r), i = 200 * (r - o), [e, n, i]
        }

        function W(t) {
          return Y(L(t))
        }

        function V(t) {
          var e, n, i, a, r = t[0],
            o = t[1],
            s = t[2];
          return 8 >= r ? (n = 100 * r / 903.3, a = 7.787 * (n / 100) + 16 / 116) : (n = 100 * Math.pow((r + 16) / 116, 3), a = Math.pow(n / 100, 1 / 3)), e = .008856 >= e / 95.047 ? e = 95.047 * (o / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(o / 500 + a, 3), i = .008859 >= i / 108.883 ? i = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3), [e, n, i]
        }

        function Y(t) {
          var e, n, i, a = t[0],
            r = t[1],
            o = t[2];
          return e = Math.atan2(o, r), n = 360 * e / 2 / Math.PI, 0 > n && (n += 360), i = Math.sqrt(r * r + o * o), [a, i, n]
        }

        function B(t) {
          return R(V(t))
        }

        function z(t) {
          var e, n, i, a = t[0],
            r = t[1],
            o = t[2];
          return i = o / 360 * 2 * Math.PI, e = r * Math.cos(i), n = r * Math.sin(i), [a, e, n]
        }

        function N(t) {
          return V(z(t))
        }

        function H(t) {
          return B(z(t))
        }

        function E(t) {
          return J[t]
        }

        function U(t) {
          return i(E(t))
        }

        function j(t) {
          return a(E(t))
        }

        function G(t) {
          return o(E(t))
        }

        function q(t) {
          return s(E(t))
        }

        function Z(t) {
          return d(E(t))
        }

        function X(t) {
          return u(E(t))
        }
        e.exports = {
          rgb2hsl: i,
          rgb2hsv: a,
          rgb2hwb: o,
          rgb2cmyk: s,
          rgb2keyword: l,
          rgb2xyz: u,
          rgb2lab: d,
          rgb2lch: c,
          hsl2rgb: h,
          hsl2hsv: f,
          hsl2hwb: m,
          hsl2cmyk: p,
          hsl2keyword: v,
          hsv2rgb: y,
          hsv2hsl: x,
          hsv2hwb: k,
          hsv2cmyk: _,
          hsv2keyword: w,
          hwb2rgb: S,
          hwb2hsl: M,
          hwb2hsv: D,
          hwb2cmyk: C,
          hwb2keyword: T,
          cmyk2rgb: P,
          cmyk2hsl: I,
          cmyk2hsv: A,
          cmyk2hwb: F,
          cmyk2keyword: O,
          keyword2rgb: E,
          keyword2hsl: U,
          keyword2hsv: j,
          keyword2hwb: G,
          keyword2cmyk: q,
          keyword2lab: Z,
          keyword2xyz: X,
          xyz2rgb: R,
          xyz2lab: L,
          xyz2lch: W,
          lab2xyz: V,
          lab2rgb: B,
          lab2lch: Y,
          lch2lab: z,
          lch2xyz: N,
          lch2rgb: H
        };
        var J = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
          },
          K = {};
        for (var Q in J) K[JSON.stringify(J[Q])] = Q
      }, {}],
      4: [function(t, e, n) {
        var i = t(3),
          a = function() {
            return new u
          };
        for (var r in i) {
          a[r + "Raw"] = function(t) {
            return function(e) {
              return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), i[t](e)
            }
          }(r);
          var o = /(\w+)2(\w+)/.exec(r),
            s = o[1],
            l = o[2];
          a[s] = a[s] || {}, a[s][l] = a[r] = function(t) {
            return function(e) {
              "number" == typeof e && (e = Array.prototype.slice.call(arguments));
              var n = i[t](e);
              if ("string" == typeof n || void 0 === n) return n;
              for (var a = 0; a < n.length; a++) n[a] = Math.round(n[a]);
              return n
            }
          }(r)
        }
        var u = function() {
          this.convs = {}
        };
        u.prototype.routeSpace = function(t, e) {
          var n = e[0];
          return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n))
        }, u.prototype.setValues = function(t, e) {
          return this.space = t, this.convs = {}, this.convs[t] = e, this
        }, u.prototype.getValues = function(t) {
          var e = this.convs[t];
          if (!e) {
            var n = this.space,
              i = this.convs[n];
            e = a[n][t](i), this.convs[t] = e
          }
          return e
        }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
          u.prototype[t] = function(e) {
            return this.routeSpace(t, arguments)
          }
        }), e.exports = a
      }, {
        3: 3
      }],
      5: [function(t, e, n) {
        e.exports = {
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 134, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 250, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          grey: [128, 128, 128],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 221],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          rebeccapurple: [102, 51, 153],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [112, 128, 144],
          slategrey: [112, 128, 144],
          snow: [255, 250, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 50]
        }
      }, {}],
      6: [function(e, n, i) {
        ! function(e, a) {
          "object" == typeof i && "undefined" != typeof n ? n.exports = a() : "function" == typeof t && t.amd ? t(a) : e.moment = a()
        }(this, function() {
          "use strict";

          function t() {
            return mi.apply(null, arguments)
          }

          function i(t) {
            mi = t
          }

          function a(t) {
            return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
          }

          function r(t) {
            return null != t && "[object Object]" === Object.prototype.toString.call(t)
          }

          function o(t) {
            var e;
            for (e in t) return !1;
            return !0
          }

          function s(t) {
            return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
          }

          function l(t, e) {
            var n, i = [];
            for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
            return i
          }

          function u(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
          }

          function d(t, e) {
            for (var n in e) u(e, n) && (t[n] = e[n]);
            return u(e, "toString") && (t.toString = e.toString), u(e, "valueOf") && (t.valueOf = e.valueOf), t
          }

          function c(t, e, n, i) {
            return be(t, e, n, i, !0).utc()
          }

          function h() {
            return {
              empty: !1,
              unusedTokens: [],
              unusedInput: [],
              overflow: -2,
              charsLeftOver: 0,
              nullInput: !1,
              invalidMonth: null,
              invalidFormat: !1,
              userInvalidated: !1,
              iso: !1,
              parsedDateParts: [],
              meridiem: null
            }
          }

          function f(t) {
            return null == t._pf && (t._pf = h()), t._pf
          }

          function g(t) {
            if (null == t._isValid) {
              var e = f(t),
                n = pi.call(e.parsedDateParts, function(t) {
                  return null != t
                }),
                i = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
              if (t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return i;
              t._isValid = i
            }
            return t._isValid
          }

          function m(t) {
            var e = c(NaN);
            return null != t ? d(f(e), t) : f(e).userInvalidated = !0, e
          }

          function p(t) {
            return void 0 === t
          }

          function v(t, e) {
            var n, i, a;
            if (p(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), p(e._i) || (t._i = e._i), p(e._f) || (t._f = e._f), p(e._l) || (t._l = e._l), p(e._strict) || (t._strict = e._strict), p(e._tzm) || (t._tzm = e._tzm), p(e._isUTC) || (t._isUTC = e._isUTC), p(e._offset) || (t._offset = e._offset), p(e._pf) || (t._pf = f(e)), p(e._locale) || (t._locale = e._locale), vi.length > 0)
              for (n in vi) i = vi[n], a = e[i], p(a) || (t[i] = a);
            return t
          }

          function b(e) {
            v(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), bi === !1 && (bi = !0, t.updateOffset(this), bi = !1)
          }

          function y(t) {
            return t instanceof b || null != t && null != t._isAMomentObject
          }

          function x(t) {
            return 0 > t ? Math.ceil(t) || 0 : Math.floor(t)
          }

          function k(t) {
            var e = +t,
              n = 0;
            return 0 !== e && isFinite(e) && (n = x(e)), n
          }

          function _(t, e, n) {
            var i, a = Math.min(t.length, e.length),
              r = Math.abs(t.length - e.length),
              o = 0;
            for (i = 0; a > i; i++)(n && t[i] !== e[i] || !n && k(t[i]) !== k(e[i])) && o++;
            return o + r
          }

          function w(e) {
            t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
          }

          function S(e, n) {
            var i = !0;
            return d(function() {
              if (null != t.deprecationHandler && t.deprecationHandler(null, e), i) {
                for (var a, r = [], o = 0; o < arguments.length; o++) {
                  if (a = "", "object" == typeof arguments[o]) {
                    a += "\n[" + o + "] ";
                    for (var s in arguments[0]) a += s + ": " + arguments[0][s] + ", ";
                    a = a.slice(0, -2)
                  } else a = arguments[o];
                  r.push(a)
                }
                w(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), i = !1
              }
              return n.apply(this, arguments)
            }, n)
          }

          function M(e, n) {
            null != t.deprecationHandler && t.deprecationHandler(e, n), yi[e] || (w(n), yi[e] = !0)
          }

          function D(t) {
            return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
          }

          function C(t) {
            var e, n;
            for (n in t) e = t[n], D(e) ? this[n] = e : this["_" + n] = e;
            this._config = t, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
          }

          function T(t, e) {
            var n, i = d({}, t);
            for (n in e) u(e, n) && (r(t[n]) && r(e[n]) ? (i[n] = {}, d(i[n], t[n]), d(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]);
            for (n in t) u(t, n) && !u(e, n) && r(t[n]) && (i[n] = d({}, i[n]));
            return i
          }

          function P(t) {
            null != t && this.set(t)
          }

          function I(t, e, n) {
            var i = this._calendar[t] || this._calendar.sameElse;
            return D(i) ? i.call(e, n) : i
          }

          function A(t) {
            var e = this._longDateFormat[t],
              n = this._longDateFormat[t.toUpperCase()];
            return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
              return t.slice(1)
            }), this._longDateFormat[t])
          }

          function F() {
            return this._invalidDate
          }

          function O(t) {
            return this._ordinal.replace("%d", t)
          }

          function R(t, e, n, i) {
            var a = this._relativeTime[n];
            return D(a) ? a(t, e, n, i) : a.replace(/%d/i, t)
          }

          function L(t, e) {
            var n = this._relativeTime[t > 0 ? "future" : "past"];
            return D(n) ? n(e) : n.replace(/%s/i, e)
          }

          function W(t, e) {
            var n = t.toLowerCase();
            Ti[n] = Ti[n + "s"] = Ti[e] = t
          }

          function V(t) {
            return "string" == typeof t ? Ti[t] || Ti[t.toLowerCase()] : void 0
          }

          function Y(t) {
            var e, n, i = {};
            for (n in t) u(t, n) && (e = V(n), e && (i[e] = t[n]));
            return i
          }

          function B(t, e) {
            Pi[t] = e
          }

          function z(t) {
            var e = [];
            for (var n in t) e.push({
              unit: n,
              priority: Pi[n]
            });
            return e.sort(function(t, e) {
              return t.priority - e.priority
            }), e
          }

          function N(e, n) {
            return function(i) {
              return null != i ? (E(this, e, i), t.updateOffset(this, n), this) : H(this, e)
            }
          }

          function H(t, e) {
            return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
          }

          function E(t, e, n) {
            t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
          }

          function U(t) {
            return t = V(t), D(this[t]) ? this[t]() : this
          }

          function j(t, e) {
            if ("object" == typeof t) {
              t = Y(t);
              for (var n = z(t), i = 0; i < n.length; i++) this[n[i].unit](t[n[i].unit])
            } else if (t = V(t), D(this[t])) return this[t](e);
            return this
          }

          function G(t, e, n) {
            var i = "" + Math.abs(t),
              a = e - i.length,
              r = t >= 0;
            return (r ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + i
          }

          function q(t, e, n, i) {
            var a = i;
            "string" == typeof i && (a = function() {
              return this[i]()
            }), t && (Oi[t] = a), e && (Oi[e[0]] = function() {
              return G(a.apply(this, arguments), e[1], e[2])
            }), n && (Oi[n] = function() {
              return this.localeData().ordinal(a.apply(this, arguments), t)
            })
          }

          function Z(t) {
            return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
          }

          function X(t) {
            var e, n, i = t.match(Ii);
            for (e = 0, n = i.length; n > e; e++) Oi[i[e]] ? i[e] = Oi[i[e]] : i[e] = Z(i[e]);
            return function(e) {
              var a, r = "";
              for (a = 0; n > a; a++) r += i[a] instanceof Function ? i[a].call(e, t) : i[a];
              return r
            }
          }

          function J(t, e) {
            return t.isValid() ? (e = K(e, t.localeData()), Fi[e] = Fi[e] || X(e), Fi[e](t)) : t.localeData().invalidDate()
          }

          function K(t, e) {
            function n(t) {
              return e.longDateFormat(t) || t
            }
            var i = 5;
            for (Ai.lastIndex = 0; i >= 0 && Ai.test(t);) t = t.replace(Ai, n), Ai.lastIndex = 0, i -= 1;
            return t
          }

          function Q(t, e, n) {
            Ki[t] = D(e) ? e : function(t, i) {
              return t && n ? n : e
            }
          }

          function $(t, e) {
            return u(Ki, t) ? Ki[t](e._strict, e._locale) : new RegExp(tt(t))
          }

          function tt(t) {
            return et(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, a) {
              return e || n || i || a
            }))
          }

          function et(t) {
            return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
          }

          function nt(t, e) {
            var n, i = e;
            for ("string" == typeof t && (t = [t]), "number" == typeof e && (i = function(t, n) {
                n[e] = k(t)
              }), n = 0; n < t.length; n++) Qi[t[n]] = i
          }

          function it(t, e) {
            nt(t, function(t, n, i, a) {
              i._w = i._w || {}, e(t, i._w, i, a)
            })
          }

          function at(t, e, n) {
            null != e && u(Qi, t) && Qi[t](e, n._a, n, t)
          }

          function rt(t, e) {
            return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
          }

          function ot(t, e) {
            return t ? a(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || la).test(e) ? "format" : "standalone"][t.month()] : this._months
          }

          function st(t, e) {
            return t ? a(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[la.test(e) ? "format" : "standalone"][t.month()] : this._monthsShort
          }

          function lt(t, e, n) {
            var i, a, r, o = t.toLocaleLowerCase();
            if (!this._monthsParse)
              for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; 12 > i; ++i) r = c([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(r, "").toLocaleLowerCase();
            return n ? "MMM" === e ? (a = ki.call(this._shortMonthsParse, o), -1 !== a ? a : null) : (a = ki.call(this._longMonthsParse, o), -1 !== a ? a : null) : "MMM" === e ? (a = ki.call(this._shortMonthsParse, o), -1 !== a ? a : (a = ki.call(this._longMonthsParse, o), -1 !== a ? a : null)) : (a = ki.call(this._longMonthsParse, o), -1 !== a ? a : (a = ki.call(this._shortMonthsParse, o), -1 !== a ? a : null))
          }

          function ut(t, e, n) {
            var i, a, r;
            if (this._monthsParseExact) return lt.call(this, t, e, n);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; 12 > i; i++) {
              if (a = c([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (r = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[i] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
              if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
              if (!n && this._monthsParse[i].test(t)) return i
            }
          }

          function dt(t, e) {
            var n;
            if (!t.isValid()) return t;
            if ("string" == typeof e)
              if (/^\d+$/.test(e)) e = k(e);
              else if (e = t.localeData().monthsParse(e), "number" != typeof e) return t;
            return n = Math.min(t.date(), rt(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
          }

          function ct(e) {
            return null != e ? (dt(this, e),
              t.updateOffset(this, !0), this) : H(this, "Month")
          }

          function ht() {
            return rt(this.year(), this.month())
          }

          function ft(t) {
            return this._monthsParseExact ? (u(this, "_monthsRegex") || mt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = ca), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
          }

          function gt(t) {
            return this._monthsParseExact ? (u(this, "_monthsRegex") || mt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (u(this, "_monthsRegex") || (this._monthsRegex = ha), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
          }

          function mt() {
            function t(t, e) {
              return e.length - t.length
            }
            var e, n, i = [],
              a = [],
              r = [];
            for (e = 0; 12 > e; e++) n = c([2e3, e]), i.push(this.monthsShort(n, "")), a.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
            for (i.sort(t), a.sort(t), r.sort(t), e = 0; 12 > e; e++) i[e] = et(i[e]), a[e] = et(a[e]);
            for (e = 0; 24 > e; e++) r[e] = et(r[e]);
            this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
          }

          function pt(t) {
            return vt(t) ? 366 : 365
          }

          function vt(t) {
            return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
          }

          function bt() {
            return vt(this.year())
          }

          function yt(t, e, n, i, a, r, o) {
            var s = new Date(t, e, n, i, a, r, o);
            return 100 > t && t >= 0 && isFinite(s.getFullYear()) && s.setFullYear(t), s
          }

          function xt(t) {
            var e = new Date(Date.UTC.apply(null, arguments));
            return 100 > t && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
          }

          function kt(t, e, n) {
            var i = 7 + e - n,
              a = (7 + xt(t, 0, i).getUTCDay() - e) % 7;
            return -a + i - 1
          }

          function _t(t, e, n, i, a) {
            var r, o, s = (7 + n - i) % 7,
              l = kt(t, i, a),
              u = 1 + 7 * (e - 1) + s + l;
            return 0 >= u ? (r = t - 1, o = pt(r) + u) : u > pt(t) ? (r = t + 1, o = u - pt(t)) : (r = t, o = u), {
              year: r,
              dayOfYear: o
            }
          }

          function wt(t, e, n) {
            var i, a, r = kt(t.year(), e, n),
              o = Math.floor((t.dayOfYear() - r - 1) / 7) + 1;
            return 1 > o ? (a = t.year() - 1, i = o + St(a, e, n)) : o > St(t.year(), e, n) ? (i = o - St(t.year(), e, n), a = t.year() + 1) : (a = t.year(), i = o), {
              week: i,
              year: a
            }
          }

          function St(t, e, n) {
            var i = kt(t, e, n),
              a = kt(t + 1, e, n);
            return (pt(t) - i + a) / 7
          }

          function Mt(t) {
            return wt(t, this._week.dow, this._week.doy).week
          }

          function Dt() {
            return this._week.dow
          }

          function Ct() {
            return this._week.doy
          }

          function Tt(t) {
            var e = this.localeData().week(this);
            return null == t ? e : this.add(7 * (t - e), "d")
          }

          function Pt(t) {
            var e = wt(this, 1, 4).week;
            return null == t ? e : this.add(7 * (t - e), "d")
          }

          function It(t, e) {
            return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
          }

          function At(t, e) {
            return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
          }

          function Ft(t, e) {
            return t ? a(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : this._weekdays
          }

          function Ot(t) {
            return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
          }

          function Rt(t) {
            return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
          }

          function Lt(t, e, n) {
            var i, a, r, o = t.toLocaleLowerCase();
            if (!this._weekdaysParse)
              for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; 7 > i; ++i) r = c([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(r, "").toLocaleLowerCase();
            return n ? "dddd" === e ? (a = ki.call(this._weekdaysParse, o), -1 !== a ? a : null) : "ddd" === e ? (a = ki.call(this._shortWeekdaysParse, o), -1 !== a ? a : null) : (a = ki.call(this._minWeekdaysParse, o), -1 !== a ? a : null) : "dddd" === e ? (a = ki.call(this._weekdaysParse, o), -1 !== a ? a : (a = ki.call(this._shortWeekdaysParse, o), -1 !== a ? a : (a = ki.call(this._minWeekdaysParse, o), -1 !== a ? a : null))) : "ddd" === e ? (a = ki.call(this._shortWeekdaysParse, o), -1 !== a ? a : (a = ki.call(this._weekdaysParse, o), -1 !== a ? a : (a = ki.call(this._minWeekdaysParse, o), -1 !== a ? a : null))) : (a = ki.call(this._minWeekdaysParse, o), -1 !== a ? a : (a = ki.call(this._weekdaysParse, o), -1 !== a ? a : (a = ki.call(this._shortWeekdaysParse, o), -1 !== a ? a : null)))
          }

          function Wt(t, e, n) {
            var i, a, r;
            if (this._weekdaysParseExact) return Lt.call(this, t, e, n);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; 7 > i; i++) {
              if (a = c([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(a, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (r = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[i] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t)) return i;
              if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
              if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
              if (!n && this._weekdaysParse[i].test(t)) return i
            }
          }

          function Vt(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != t ? (t = It(t, this.localeData()), this.add(t - e, "d")) : e
          }

          function Yt(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == t ? e : this.add(t - e, "d")
          }

          function Bt(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            if (null != t) {
              var e = At(t, this.localeData());
              return this.day(this.day() % 7 ? e : e - 7)
            }
            return this.day() || 7
          }

          function zt(t) {
            return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Et.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = ba), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
          }

          function Nt(t) {
            return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Et.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (u(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ya), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
          }

          function Ht(t) {
            return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Et.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = xa), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
          }

          function Et() {
            function t(t, e) {
              return e.length - t.length
            }
            var e, n, i, a, r, o = [],
              s = [],
              l = [],
              u = [];
            for (e = 0; 7 > e; e++) n = c([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), a = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), o.push(i), s.push(a), l.push(r), u.push(i), u.push(a), u.push(r);
            for (o.sort(t), s.sort(t), l.sort(t), u.sort(t), e = 0; 7 > e; e++) s[e] = et(s[e]), l[e] = et(l[e]), u[e] = et(u[e]);
            this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
          }

          function Ut() {
            return this.hours() % 12 || 12
          }

          function jt() {
            return this.hours() || 24
          }

          function Gt(t, e) {
            q(t, 0, 0, function() {
              return this.localeData().meridiem(this.hours(), this.minutes(), e)
            })
          }

          function qt(t, e) {
            return e._meridiemParse
          }

          function Zt(t) {
            return "p" === (t + "").toLowerCase().charAt(0)
          }

          function Xt(t, e, n) {
            return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
          }

          function Jt(t) {
            return t ? t.toLowerCase().replace("_", "-") : t
          }

          function Kt(t) {
            for (var e, n, i, a, r = 0; r < t.length;) {
              for (a = Jt(t[r]).split("-"), e = a.length, n = Jt(t[r + 1]), n = n ? n.split("-") : null; e > 0;) {
                if (i = Qt(a.slice(0, e).join("-"))) return i;
                if (n && n.length >= e && _(a, n, !0) >= e - 1) break;
                e--
              }
              r++
            }
            return null
          }

          function Qt(t) {
            var i = null;
            if (!Ma[t] && "undefined" != typeof n && n && n.exports) try {
              i = ka._abbr, e("./locale/" + t), $t(i)
            } catch (a) {}
            return Ma[t]
          }

          function $t(t, e) {
            var n;
            return t && (n = p(e) ? ne(t) : te(t, e), n && (ka = n)), ka._abbr
          }

          function te(t, e) {
            if (null !== e) {
              var n = Sa;
              return e.abbr = t, null != Ma[t] ? (M("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Ma[t]._config) : null != e.parentLocale && (null != Ma[e.parentLocale] ? n = Ma[e.parentLocale]._config : M("parentLocaleUndefined", "specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")), Ma[t] = new P(T(n, e)), $t(t), Ma[t]
            }
            return delete Ma[t], null
          }

          function ee(t, e) {
            if (null != e) {
              var n, i = Sa;
              null != Ma[t] && (i = Ma[t]._config), e = T(i, e), n = new P(e), n.parentLocale = Ma[t], Ma[t] = n, $t(t)
            } else null != Ma[t] && (null != Ma[t].parentLocale ? Ma[t] = Ma[t].parentLocale : null != Ma[t] && delete Ma[t]);
            return Ma[t]
          }

          function ne(t) {
            var e;
            if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return ka;
            if (!a(t)) {
              if (e = Qt(t)) return e;
              t = [t]
            }
            return Kt(t)
          }

          function ie() {
            return xi(Ma)
          }

          function ae(t) {
            var e, n = t._a;
            return n && -2 === f(t).overflow && (e = n[ta] < 0 || n[ta] > 11 ? ta : n[ea] < 1 || n[ea] > rt(n[$i], n[ta]) ? ea : n[na] < 0 || n[na] > 24 || 24 === n[na] && (0 !== n[ia] || 0 !== n[aa] || 0 !== n[ra]) ? na : n[ia] < 0 || n[ia] > 59 ? ia : n[aa] < 0 || n[aa] > 59 ? aa : n[ra] < 0 || n[ra] > 999 ? ra : -1, f(t)._overflowDayOfYear && ($i > e || e > ea) && (e = ea), f(t)._overflowWeeks && -1 === e && (e = oa), f(t)._overflowWeekday && -1 === e && (e = sa), f(t).overflow = e), t
          }

          function re(t) {
            var e, n, i, a, r, o, s = t._i,
              l = Da.exec(s) || Ca.exec(s);
            if (l) {
              for (f(t).iso = !0, e = 0, n = Pa.length; n > e; e++)
                if (Pa[e][1].exec(l[1])) {
                  a = Pa[e][0], i = Pa[e][2] !== !1;
                  break
                }
              if (null == a) return void(t._isValid = !1);
              if (l[3]) {
                for (e = 0, n = Ia.length; n > e; e++)
                  if (Ia[e][1].exec(l[3])) {
                    r = (l[2] || " ") + Ia[e][0];
                    break
                  }
                if (null == r) return void(t._isValid = !1)
              }
              if (!i && null != r) return void(t._isValid = !1);
              if (l[4]) {
                if (!Ta.exec(l[4])) return void(t._isValid = !1);
                o = "Z"
              }
              t._f = a + (r || "") + (o || ""), ce(t)
            } else t._isValid = !1
          }

          function oe(e) {
            var n = Aa.exec(e._i);
            return null !== n ? void(e._d = new Date(+n[1])) : (re(e), void(e._isValid === !1 && (delete e._isValid, t.createFromInputFallback(e))))
          }

          function se(t, e, n) {
            return null != t ? t : null != e ? e : n
          }

          function le(e) {
            var n = new Date(t.now());
            return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
          }

          function ue(t) {
            var e, n, i, a, r = [];
            if (!t._d) {
              for (i = le(t), t._w && null == t._a[ea] && null == t._a[ta] && de(t), t._dayOfYear && (a = se(t._a[$i], i[$i]), t._dayOfYear > pt(a) && (f(t)._overflowDayOfYear = !0), n = xt(a, 0, t._dayOfYear), t._a[ta] = n.getUTCMonth(), t._a[ea] = n.getUTCDate()), e = 0; 3 > e && null == t._a[e]; ++e) t._a[e] = r[e] = i[e];
              for (; 7 > e; e++) t._a[e] = r[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
              24 === t._a[na] && 0 === t._a[ia] && 0 === t._a[aa] && 0 === t._a[ra] && (t._nextDay = !0, t._a[na] = 0), t._d = (t._useUTC ? xt : yt).apply(null, r), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[na] = 24)
            }
          }

          function de(t) {
            var e, n, i, a, r, o, s, l;
            e = t._w, null != e.GG || null != e.W || null != e.E ? (r = 1, o = 4, n = se(e.GG, t._a[$i], wt(ye(), 1, 4).year), i = se(e.W, 1), a = se(e.E, 1), (1 > a || a > 7) && (l = !0)) : (r = t._locale._week.dow, o = t._locale._week.doy, n = se(e.gg, t._a[$i], wt(ye(), r, o).year), i = se(e.w, 1), null != e.d ? (a = e.d, (0 > a || a > 6) && (l = !0)) : null != e.e ? (a = e.e + r, (e.e < 0 || e.e > 6) && (l = !0)) : a = r), 1 > i || i > St(n, r, o) ? f(t)._overflowWeeks = !0 : null != l ? f(t)._overflowWeekday = !0 : (s = _t(n, i, a, r, o), t._a[$i] = s.year, t._dayOfYear = s.dayOfYear)
          }

          function ce(e) {
            if (e._f === t.ISO_8601) return void re(e);
            e._a = [], f(e).empty = !0;
            var n, i, a, r, o, s = "" + e._i,
              l = s.length,
              u = 0;
            for (a = K(e._f, e._locale).match(Ii) || [], n = 0; n < a.length; n++) r = a[n], i = (s.match($(r, e)) || [])[0], i && (o = s.substr(0, s.indexOf(i)), o.length > 0 && f(e).unusedInput.push(o), s = s.slice(s.indexOf(i) + i.length), u += i.length), Oi[r] ? (i ? f(e).empty = !1 : f(e).unusedTokens.push(r), at(r, i, e)) : e._strict && !i && f(e).unusedTokens.push(r);
            f(e).charsLeftOver = l - u, s.length > 0 && f(e).unusedInput.push(s), e._a[na] <= 12 && f(e).bigHour === !0 && e._a[na] > 0 && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[na] = he(e._locale, e._a[na], e._meridiem), ue(e), ae(e)
          }

          function he(t, e, n) {
            var i;
            return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n), i && 12 > e && (e += 12), i || 12 !== e || (e = 0), e) : e
          }

          function fe(t) {
            var e, n, i, a, r;
            if (0 === t._f.length) return f(t).invalidFormat = !0, void(t._d = new Date(NaN));
            for (a = 0; a < t._f.length; a++) r = 0, e = v({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[a], ce(e), g(e) && (r += f(e).charsLeftOver, r += 10 * f(e).unusedTokens.length, f(e).score = r, (null == i || i > r) && (i = r, n = e));
            d(t, n || e)
          }

          function ge(t) {
            if (!t._d) {
              var e = Y(t._i);
              t._a = l([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                return t && parseInt(t, 10)
              }), ue(t)
            }
          }

          function me(t) {
            var e = new b(ae(pe(t)));
            return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
          }

          function pe(t) {
            var e = t._i,
              n = t._f;
            return t._locale = t._locale || ne(t._l), null === e || void 0 === n && "" === e ? m({
              nullInput: !0
            }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), y(e) ? new b(ae(e)) : (a(n) ? fe(t) : s(e) ? t._d = e : n ? ce(t) : ve(t), g(t) || (t._d = null), t))
          }

          function ve(e) {
            var n = e._i;
            void 0 === n ? e._d = new Date(t.now()) : s(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? oe(e) : a(n) ? (e._a = l(n.slice(0), function(t) {
              return parseInt(t, 10)
            }), ue(e)) : "object" == typeof n ? ge(e) : "number" == typeof n ? e._d = new Date(n) : t.createFromInputFallback(e)
          }

          function be(t, e, n, i, s) {
            var l = {};
            return "boolean" == typeof n && (i = n, n = void 0), (r(t) && o(t) || a(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = s, l._l = n, l._i = t, l._f = e, l._strict = i, me(l)
          }

          function ye(t, e, n, i) {
            return be(t, e, n, i, !1)
          }

          function xe(t, e) {
            var n, i;
            if (1 === e.length && a(e[0]) && (e = e[0]), !e.length) return ye();
            for (n = e[0], i = 1; i < e.length; ++i)(!e[i].isValid() || e[i][t](n)) && (n = e[i]);
            return n
          }

          function ke() {
            var t = [].slice.call(arguments, 0);
            return xe("isBefore", t)
          }

          function _e() {
            var t = [].slice.call(arguments, 0);
            return xe("isAfter", t)
          }

          function we(t) {
            var e = Y(t),
              n = e.year || 0,
              i = e.quarter || 0,
              a = e.month || 0,
              r = e.week || 0,
              o = e.day || 0,
              s = e.hour || 0,
              l = e.minute || 0,
              u = e.second || 0,
              d = e.millisecond || 0;
            this._milliseconds = +d + 1e3 * u + 6e4 * l + 1e3 * s * 60 * 60, this._days = +o + 7 * r, this._months = +a + 3 * i + 12 * n, this._data = {}, this._locale = ne(), this._bubble()
          }

          function Se(t) {
            return t instanceof we
          }

          function Me(t) {
            return 0 > t ? -1 * Math.round(-1 * t) : Math.round(t)
          }

          function De(t, e) {
            q(t, 0, 0, function() {
              var t = this.utcOffset(),
                n = "+";
              return 0 > t && (t = -t, n = "-"), n + G(~~(t / 60), 2) + e + G(~~t % 60, 2)
            })
          }

          function Ce(t, e) {
            var n = (e || "").match(t) || [],
              i = n[n.length - 1] || [],
              a = (i + "").match(La) || ["-", 0, 0],
              r = +(60 * a[1]) + k(a[2]);
            return "+" === a[0] ? r : -r
          }

          function Te(e, n) {
            var i, a;
            return n._isUTC ? (i = n.clone(), a = (y(e) || s(e) ? e.valueOf() : ye(e).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + a), t.updateOffset(i, !1), i) : ye(e).local()
          }

          function Pe(t) {
            return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
          }

          function Ie(e, n) {
            var i, a = this._offset || 0;
            return this.isValid() ? null != e ? ("string" == typeof e ? e = Ce(Zi, e) : Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && n && (i = Pe(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), a !== e && (!n || this._changeInProgress ? Ge(this, Ne(e - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? a : Pe(this) : null != e ? this : NaN
          }

          function Ae(t, e) {
            return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
          }

          function Fe(t) {
            return this.utcOffset(0, t)
          }

          function Oe(t) {
            return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Pe(this), "m")), this
          }

          function Re() {
            if (this._tzm) this.utcOffset(this._tzm);
            else if ("string" == typeof this._i) {
              var t = Ce(qi, this._i);
              0 === t ? this.utcOffset(0, !0) : this.utcOffset(Ce(qi, this._i))
            }
            return this
          }

          function Le(t) {
            return this.isValid() ? (t = t ? ye(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0) : !1
          }

          function We() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
          }

          function Ve() {
            if (!p(this._isDSTShifted)) return this._isDSTShifted;
            var t = {};
            if (v(t, this), t = pe(t), t._a) {
              var e = t._isUTC ? c(t._a) : ye(t._a);
              this._isDSTShifted = this.isValid() && _(t._a, e.toArray()) > 0
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
          }

          function Ye() {
            return this.isValid() ? !this._isUTC : !1
          }

          function Be() {
            return this.isValid() ? this._isUTC : !1
          }

          function ze() {
            return this.isValid() ? this._isUTC && 0 === this._offset : !1
          }

          function Ne(t, e) {
            var n, i, a, r = t,
              o = null;
            return Se(t) ? r = {
              ms: t._milliseconds,
              d: t._days,
              M: t._months
            } : "number" == typeof t ? (r = {}, e ? r[e] = t : r.milliseconds = t) : (o = Wa.exec(t)) ? (n = "-" === o[1] ? -1 : 1, r = {
              y: 0,
              d: k(o[ea]) * n,
              h: k(o[na]) * n,
              m: k(o[ia]) * n,
              s: k(o[aa]) * n,
              ms: k(Me(1e3 * o[ra])) * n
            }) : (o = Va.exec(t)) ? (n = "-" === o[1] ? -1 : 1, r = {
              y: He(o[2], n),
              M: He(o[3], n),
              w: He(o[4], n),
              d: He(o[5], n),
              h: He(o[6], n),
              m: He(o[7], n),
              s: He(o[8], n)
            }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (a = Ue(ye(r.from), ye(r.to)), r = {}, r.ms = a.milliseconds, r.M = a.months), i = new we(r), Se(t) && u(t, "_locale") && (i._locale = t._locale), i
          }

          function He(t, e) {
            var n = t && parseFloat(t.replace(",", "."));
            return (isNaN(n) ? 0 : n) * e
          }

          function Ee(t, e) {
            var n = {
              milliseconds: 0,
              months: 0
            };
            return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
          }

          function Ue(t, e) {
            var n;
            return t.isValid() && e.isValid() ? (e = Te(e, t), t.isBefore(e) ? n = Ee(t, e) : (n = Ee(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
              milliseconds: 0,
              months: 0
            }
          }

          function je(t, e) {
            return function(n, i) {
              var a, r;
              return null === i || isNaN(+i) || (M(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = n, n = i, i = r), n = "string" == typeof n ? +n : n, a = Ne(n, i), Ge(this, a, t), this
            }
          }

          function Ge(e, n, i, a) {
            var r = n._milliseconds,
              o = Me(n._days),
              s = Me(n._months);
            e.isValid() && (a = null == a ? !0 : a, r && e._d.setTime(e._d.valueOf() + r * i), o && E(e, "Date", H(e, "Date") + o * i), s && dt(e, H(e, "Month") + s * i), a && t.updateOffset(e, o || s))
          }

          function qe(t, e) {
            var n = t.diff(e, "days", !0);
            return -6 > n ? "sameElse" : -1 > n ? "lastWeek" : 0 > n ? "lastDay" : 1 > n ? "sameDay" : 2 > n ? "nextDay" : 7 > n ? "nextWeek" : "sameElse"
          }

          function Ze(e, n) {
            var i = e || ye(),
              a = Te(i, this).startOf("day"),
              r = t.calendarFormat(this, a) || "sameElse",
              o = n && (D(n[r]) ? n[r].call(this, i) : n[r]);
            return this.format(o || this.localeData().calendar(r, this, ye(i)))
          }

          function Xe() {
            return new b(this)
          }

          function Je(t, e) {
            var n = y(t) ? t : ye(t);
            return this.isValid() && n.isValid() ? (e = V(p(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf()) : !1
          }

          function Ke(t, e) {
            var n = y(t) ? t : ye(t);
            return this.isValid() && n.isValid() ? (e = V(p(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf()) : !1
          }

          function Qe(t, e, n, i) {
            return i = i || "()", ("(" === i[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
          }

          function $e(t, e) {
            var n, i = y(t) ? t : ye(t);
            return this.isValid() && i.isValid() ? (e = V(e || "millisecond"), "millisecond" === e ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf())) : !1
          }

          function tn(t, e) {
            return this.isSame(t, e) || this.isAfter(t, e)
          }

          function en(t, e) {
            return this.isSame(t, e) || this.isBefore(t, e)
          }

          function nn(t, e, n) {
            var i, a, r, o;
            return this.isValid() ? (i = Te(t, this), i.isValid() ? (a = 6e4 * (i.utcOffset() - this.utcOffset()), e = V(e), "year" === e || "month" === e || "quarter" === e ? (o = an(this, i), "quarter" === e ? o /= 3 : "year" === e && (o /= 12)) : (r = this - i, o = "second" === e ? r / 1e3 : "minute" === e ? r / 6e4 : "hour" === e ? r / 36e5 : "day" === e ? (r - a) / 864e5 : "week" === e ? (r - a) / 6048e5 : r), n ? o : x(o)) : NaN) : NaN
          }

          function an(t, e) {
            var n, i, a = 12 * (e.year() - t.year()) + (e.month() - t.month()),
              r = t.clone().add(a, "months");
            return 0 > e - r ? (n = t.clone().add(a - 1, "months"), i = (e - r) / (r - n)) : (n = t.clone().add(a + 1, "months"), i = (e - r) / (n - r)), -(a + i) || 0
          }

          function rn() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
          }

          function on() {
            var t = this.clone().utc();
            return 0 < t.year() && t.year() <= 9999 ? D(Date.prototype.toISOString) ? this.toDate().toISOString() : J(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : J(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
          }

          function sn(e) {
            e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
            var n = J(this, e);
            return this.localeData().postformat(n)
          }

          function ln(t, e) {
            return this.isValid() && (y(t) && t.isValid() || ye(t).isValid()) ? Ne({
              to: this,
              from: t
            }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
          }

          function un(t) {
            return this.from(ye(), t)
          }

          function dn(t, e) {
            return this.isValid() && (y(t) && t.isValid() || ye(t).isValid()) ? Ne({
              from: this,
              to: t
            }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
          }

          function cn(t) {
            return this.to(ye(), t)
          }

          function hn(t) {
            var e;
            return void 0 === t ? this._locale._abbr : (e = ne(t), null != e && (this._locale = e), this)
          }

          function fn() {
            return this._locale
          }

          function gn(t) {
            switch (t = V(t)) {
              case "year":
                this.month(0);
              case "quarter":
              case "month":
                this.date(1);
              case "week":
              case "isoWeek":
              case "day":
              case "date":
                this.hours(0);
              case "hour":
                this.minutes(0);
              case "minute":
                this.seconds(0);
              case "second":
                this.milliseconds(0)
            }
            return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
          }

          function mn(t) {
            return t = V(t), void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
          }

          function pn() {
            return this._d.valueOf() - 6e4 * (this._offset || 0)
          }

          function vn() {
            return Math.floor(this.valueOf() / 1e3)
          }

          function bn() {
            return new Date(this.valueOf())
          }

          function yn() {
            var t = this;
            return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
          }

          function xn() {
            var t = this;
            return {
              years: t.year(),
              months: t.month(),
              date: t.date(),
              hours: t.hours(),
              minutes: t.minutes(),
              seconds: t.seconds(),
              milliseconds: t.milliseconds()
            }
          }

          function kn() {
            return this.isValid() ? this.toISOString() : null
          }

          function _n() {
            return g(this)
          }

          function wn() {
            return d({}, f(this))
          }

          function Sn() {
            return f(this).overflow
          }

          function Mn() {
            return {
              input: this._i,
              format: this._f,
              locale: this._locale,
              isUTC: this._isUTC,
              strict: this._strict
            }
          }

          function Dn(t, e) {
            q(0, [t, t.length], 0, e)
          }

          function Cn(t) {
            return An.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
          }

          function Tn(t) {
            return An.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
          }

          function Pn() {
            return St(this.year(), 1, 4)
          }

          function In() {
            var t = this.localeData()._week;
            return St(this.year(), t.dow, t.doy)
          }

          function An(t, e, n, i, a) {
            var r;
            return null == t ? wt(this, i, a).year : (r = St(t, i, a), e > r && (e = r), Fn.call(this, t, e, n, i, a))
          }

          function Fn(t, e, n, i, a) {
            var r = _t(t, e, n, i, a),
              o = xt(r.year, 0, r.dayOfYear);
            return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
          }

          function On(t) {
            return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
          }

          function Rn(t) {
            var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == t ? e : this.add(t - e, "d")
          }

          function Ln(t, e) {
            e[ra] = k(1e3 * ("0." + t))
          }

          function Wn() {
            return this._isUTC ? "UTC" : ""
          }

          function Vn() {
            return this._isUTC ? "Coordinated Universal Time" : ""
          }

          function Yn(t) {
            return ye(1e3 * t)
          }

          function Bn() {
            return ye.apply(null, arguments).parseZone()
          }

          function zn(t) {
            return t
          }

          function Nn(t, e, n, i) {
            var a = ne(),
              r = c().set(i, e);
            return a[n](r, t)
          }

          function Hn(t, e, n) {
            if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e) return Nn(t, e, n, "month");
            var i, a = [];
            for (i = 0; 12 > i; i++) a[i] = Nn(t, i, n, "month");
            return a
          }

          function En(t, e, n, i) {
            "boolean" == typeof t ? ("number" == typeof e && (n = e, e = void 0), e = e || "") : (e = t, n = e, t = !1, "number" == typeof e && (n = e, e = void 0), e = e || "");
            var a = ne(),
              r = t ? a._week.dow : 0;
            if (null != n) return Nn(e, (n + r) % 7, i, "day");
            var o, s = [];
            for (o = 0; 7 > o; o++) s[o] = Nn(e, (o + r) % 7, i, "day");
            return s
          }

          function Un(t, e) {
            return Hn(t, e, "months")
          }

          function jn(t, e) {
            return Hn(t, e, "monthsShort")
          }

          function Gn(t, e, n) {
            return En(t, e, n, "weekdays")
          }

          function qn(t, e, n) {
            return En(t, e, n, "weekdaysShort")
          }

          function Zn(t, e, n) {
            return En(t, e, n, "weekdaysMin")
          }

          function Xn() {
            var t = this._data;
            return this._milliseconds = Xa(this._milliseconds), this._days = Xa(this._days), this._months = Xa(this._months), t.milliseconds = Xa(t.milliseconds), t.seconds = Xa(t.seconds), t.minutes = Xa(t.minutes), t.hours = Xa(t.hours), t.months = Xa(t.months), t.years = Xa(t.years), this
          }

          function Jn(t, e, n, i) {
            var a = Ne(e, n);
            return t._milliseconds += i * a._milliseconds, t._days += i * a._days, t._months += i * a._months, t._bubble()
          }

          function Kn(t, e) {
            return Jn(this, t, e, 1)
          }

          function Qn(t, e) {
            return Jn(this, t, e, -1)
          }

          function $n(t) {
            return 0 > t ? Math.floor(t) : Math.ceil(t)
          }

          function ti() {
            var t, e, n, i, a, r = this._milliseconds,
              o = this._days,
              s = this._months,
              l = this._data;
            return r >= 0 && o >= 0 && s >= 0 || 0 >= r && 0 >= o && 0 >= s || (r += 864e5 * $n(ni(s) + o), o = 0, s = 0), l.milliseconds = r % 1e3, t = x(r / 1e3), l.seconds = t % 60, e = x(t / 60), l.minutes = e % 60, n = x(e / 60), l.hours = n % 24, o += x(n / 24), a = x(ei(o)), s += a, o -= $n(ni(a)), i = x(s / 12), s %= 12, l.days = o, l.months = s, l.years = i, this
          }

          function ei(t) {
            return 4800 * t / 146097
          }

          function ni(t) {
            return 146097 * t / 4800
          }

          function ii(t) {
            var e, n, i = this._milliseconds;
            if (t = V(t), "month" === t || "year" === t) return e = this._days + i / 864e5, n = this._months + ei(e), "month" === t ? n : n / 12;
            switch (e = this._days + Math.round(ni(this._months)), t) {
              case "week":
                return e / 7 + i / 6048e5;
              case "day":
                return e + i / 864e5;
              case "hour":
                return 24 * e + i / 36e5;
              case "minute":
                return 1440 * e + i / 6e4;
              case "second":
                return 86400 * e + i / 1e3;
              case "millisecond":
                return Math.floor(864e5 * e) + i;
              default:
                throw new Error("Unknown unit " + t)
            }
          }

          function ai() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12)
          }

          function ri(t) {
            return function() {
              return this.as(t)
            }
          }

          function oi(t) {
            return t = V(t), this[t + "s"]()
          }

          function si(t) {
            return function() {
              return this._data[t]
            }
          }

          function li() {
            return x(this.days() / 7)
          }

          function ui(t, e, n, i, a) {
            return a.relativeTime(e || 1, !!n, t, i)
          }

          function di(t, e, n) {
            var i = Ne(t).abs(),
              a = cr(i.as("s")),
              r = cr(i.as("m")),
              o = cr(i.as("h")),
              s = cr(i.as("d")),
              l = cr(i.as("M")),
              u = cr(i.as("y")),
              d = a < hr.s && ["s", a] || 1 >= r && ["m"] || r < hr.m && ["mm", r] || 1 >= o && ["h"] || o < hr.h && ["hh", o] || 1 >= s && ["d"] || s < hr.d && ["dd", s] || 1 >= l && ["M"] || l < hr.M && ["MM", l] || 1 >= u && ["y"] || ["yy", u];
            return d[2] = e, d[3] = +t > 0, d[4] = n, ui.apply(null, d)
          }

          function ci(t) {
            return void 0 === t ? cr : "function" == typeof t ? (cr = t, !0) : !1
          }

          function hi(t, e) {
            return void 0 === hr[t] ? !1 : void 0 === e ? hr[t] : (hr[t] = e, !0)
          }

          function fi(t) {
            var e = this.localeData(),
              n = di(this, !t, e);
            return t && (n = e.pastFuture(+this, n)), e.postformat(n)
          }

          function gi() {
            var t, e, n, i = fr(this._milliseconds) / 1e3,
              a = fr(this._days),
              r = fr(this._months);
            t = x(i / 60), e = x(t / 60), i %= 60, t %= 60, n = x(r / 12), r %= 12;
            var o = n,
              s = r,
              l = a,
              u = e,
              d = t,
              c = i,
              h = this.asSeconds();
            return h ? (0 > h ? "-" : "") + "P" + (o ? o + "Y" : "") + (s ? s + "M" : "") + (l ? l + "D" : "") + (u || d || c ? "T" : "") + (u ? u + "H" : "") + (d ? d + "M" : "") + (c ? c + "S" : "") : "P0D"
          }
          var mi, pi;
          pi = Array.prototype.some ? Array.prototype.some : function(t) {
            for (var e = Object(this), n = e.length >>> 0, i = 0; n > i; i++)
              if (i in e && t.call(this, e[i], i, e)) return !0;
            return !1
          };
          var vi = t.momentProperties = [],
            bi = !1,
            yi = {};
          t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
          var xi;
          xi = Object.keys ? Object.keys : function(t) {
            var e, n = [];
            for (e in t) u(t, e) && n.push(e);
            return n
          };
          var ki, _i = {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L"
            },
            wi = {
              LTS: "h:mm:ss A",
              LT: "h:mm A",
              L: "MM/DD/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY h:mm A",
              LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            Si = "Invalid date",
            Mi = "%d",
            Di = /\d{1,2}/,
            Ci = {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years"
            },
            Ti = {},
            Pi = {},
            Ii = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            Ai = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            Fi = {},
            Oi = {},
            Ri = /\d/,
            Li = /\d\d/,
            Wi = /\d{3}/,
            Vi = /\d{4}/,
            Yi = /[+-]?\d{6}/,
            Bi = /\d\d?/,
            zi = /\d\d\d\d?/,
            Ni = /\d\d\d\d\d\d?/,
            Hi = /\d{1,3}/,
            Ei = /\d{1,4}/,
            Ui = /[+-]?\d{1,6}/,
            ji = /\d+/,
            Gi = /[+-]?\d+/,
            qi = /Z|[+-]\d\d:?\d\d/gi,
            Zi = /Z|[+-]\d\d(?::?\d\d)?/gi,
            Xi = /[+-]?\d+(\.\d{1,3})?/,
            Ji = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            Ki = {},
            Qi = {},
            $i = 0,
            ta = 1,
            ea = 2,
            na = 3,
            ia = 4,
            aa = 5,
            ra = 6,
            oa = 7,
            sa = 8;
          ki = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
            var e;
            for (e = 0; e < this.length; ++e)
              if (this[e] === t) return e;
            return -1
          }, q("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
          }), q("MMM", 0, 0, function(t) {
            return this.localeData().monthsShort(this, t)
          }), q("MMMM", 0, 0, function(t) {
            return this.localeData().months(this, t)
          }), W("month", "M"), B("month", 8), Q("M", Bi), Q("MM", Bi, Li), Q("MMM", function(t, e) {
            return e.monthsShortRegex(t)
          }), Q("MMMM", function(t, e) {
            return e.monthsRegex(t)
          }), nt(["M", "MM"], function(t, e) {
            e[ta] = k(t) - 1
          }), nt(["MMM", "MMMM"], function(t, e, n, i) {
            var a = n._locale.monthsParse(t, i, n._strict);
            null != a ? e[ta] = a : f(n).invalidMonth = t
          });
          var la = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            ua = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            da = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            ca = Ji,
            ha = Ji;
          q("Y", 0, 0, function() {
            var t = this.year();
            return 9999 >= t ? "" + t : "+" + t
          }), q(0, ["YY", 2], 0, function() {
            return this.year() % 100
          }), q(0, ["YYYY", 4], 0, "year"), q(0, ["YYYYY", 5], 0, "year"), q(0, ["YYYYYY", 6, !0], 0, "year"), W("year", "y"), B("year", 1), Q("Y", Gi), Q("YY", Bi, Li), Q("YYYY", Ei, Vi), Q("YYYYY", Ui, Yi), Q("YYYYYY", Ui, Yi), nt(["YYYYY", "YYYYYY"], $i), nt("YYYY", function(e, n) {
            n[$i] = 2 === e.length ? t.parseTwoDigitYear(e) : k(e)
          }), nt("YY", function(e, n) {
            n[$i] = t.parseTwoDigitYear(e)
          }), nt("Y", function(t, e) {
            e[$i] = parseInt(t, 10)
          }), t.parseTwoDigitYear = function(t) {
            return k(t) + (k(t) > 68 ? 1900 : 2e3)
          };
          var fa = N("FullYear", !0);
          q("w", ["ww", 2], "wo", "week"), q("W", ["WW", 2], "Wo", "isoWeek"), W("week", "w"), W("isoWeek", "W"), B("week", 5), B("isoWeek", 5), Q("w", Bi), Q("ww", Bi, Li), Q("W", Bi), Q("WW", Bi, Li), it(["w", "ww", "W", "WW"], function(t, e, n, i) {
            e[i.substr(0, 1)] = k(t)
          });
          var ga = {
            dow: 0,
            doy: 6
          };
          q("d", 0, "do", "day"), q("dd", 0, 0, function(t) {
            return this.localeData().weekdaysMin(this, t)
          }), q("ddd", 0, 0, function(t) {
            return this.localeData().weekdaysShort(this, t)
          }), q("dddd", 0, 0, function(t) {
            return this.localeData().weekdays(this, t)
          }), q("e", 0, 0, "weekday"), q("E", 0, 0, "isoWeekday"), W("day", "d"), W("weekday", "e"), W("isoWeekday", "E"), B("day", 11), B("weekday", 11), B("isoWeekday", 11), Q("d", Bi), Q("e", Bi), Q("E", Bi), Q("dd", function(t, e) {
            return e.weekdaysMinRegex(t)
          }), Q("ddd", function(t, e) {
            return e.weekdaysShortRegex(t)
          }), Q("dddd", function(t, e) {
            return e.weekdaysRegex(t)
          }), it(["dd", "ddd", "dddd"], function(t, e, n, i) {
            var a = n._locale.weekdaysParse(t, i, n._strict);
            null != a ? e.d = a : f(n).invalidWeekday = t
          }), it(["d", "e", "E"], function(t, e, n, i) {
            e[i] = k(t)
          });
          var ma = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            pa = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            va = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            ba = Ji,
            ya = Ji,
            xa = Ji;
          q("H", ["HH", 2], 0, "hour"), q("h", ["hh", 2], 0, Ut), q("k", ["kk", 2], 0, jt), q("hmm", 0, 0, function() {
            return "" + Ut.apply(this) + G(this.minutes(), 2)
          }), q("hmmss", 0, 0, function() {
            return "" + Ut.apply(this) + G(this.minutes(), 2) + G(this.seconds(), 2)
          }), q("Hmm", 0, 0, function() {
            return "" + this.hours() + G(this.minutes(), 2)
          }), q("Hmmss", 0, 0, function() {
            return "" + this.hours() + G(this.minutes(), 2) + G(this.seconds(), 2)
          }), Gt("a", !0), Gt("A", !1), W("hour", "h"), B("hour", 13), Q("a", qt), Q("A", qt), Q("H", Bi), Q("h", Bi), Q("HH", Bi, Li), Q("hh", Bi, Li), Q("hmm", zi), Q("hmmss", Ni), Q("Hmm", zi), Q("Hmmss", Ni), nt(["H", "HH"], na), nt(["a", "A"], function(t, e, n) {
            n._isPm = n._locale.isPM(t), n._meridiem = t
          }), nt(["h", "hh"], function(t, e, n) {
            e[na] = k(t), f(n).bigHour = !0
          }), nt("hmm", function(t, e, n) {
            var i = t.length - 2;
            e[na] = k(t.substr(0, i)), e[ia] = k(t.substr(i)), f(n).bigHour = !0
          }), nt("hmmss", function(t, e, n) {
            var i = t.length - 4,
              a = t.length - 2;
            e[na] = k(t.substr(0, i)), e[ia] = k(t.substr(i, 2)), e[aa] = k(t.substr(a)), f(n).bigHour = !0
          }), nt("Hmm", function(t, e, n) {
            var i = t.length - 2;
            e[na] = k(t.substr(0, i)), e[ia] = k(t.substr(i))
          }), nt("Hmmss", function(t, e, n) {
            var i = t.length - 4,
              a = t.length - 2;
            e[na] = k(t.substr(0, i)), e[ia] = k(t.substr(i, 2)), e[aa] = k(t.substr(a))
          });
          var ka, _a = /[ap]\.?m?\.?/i,
            wa = N("Hours", !0),
            Sa = {
              calendar: _i,
              longDateFormat: wi,
              invalidDate: Si,
              ordinal: Mi,
              ordinalParse: Di,
              relativeTime: Ci,
              months: ua,
              monthsShort: da,
              week: ga,
              weekdays: ma,
              weekdaysMin: va,
              weekdaysShort: pa,
              meridiemParse: _a
            },
            Ma = {},
            Da = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            Ca = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            Ta = /Z|[+-]\d\d(?::?\d\d)?/,
            Pa = [
              ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
              ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
              ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
              ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
              ["YYYY-DDD", /\d{4}-\d{3}/],
              ["YYYY-MM", /\d{4}-\d\d/, !1],
              ["YYYYYYMMDD", /[+-]\d{10}/],
              ["YYYYMMDD", /\d{8}/],
              ["GGGG[W]WWE", /\d{4}W\d{3}/],
              ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
              ["YYYYDDD", /\d{7}/]
            ],
            Ia = [
              ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
              ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
              ["HH:mm:ss", /\d\d:\d\d:\d\d/],
              ["HH:mm", /\d\d:\d\d/],
              ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
              ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
              ["HHmmss", /\d\d\d\d\d\d/],
              ["HHmm", /\d\d\d\d/],
              ["HH", /\d\d/]
            ],
            Aa = /^\/?Date\((\-?\d+)/i;
          t.createFromInputFallback = S("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
            t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
          }), t.ISO_8601 = function() {};
          var Fa = S("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
              var t = ye.apply(null, arguments);
              return this.isValid() && t.isValid() ? this > t ? this : t : m()
            }),
            Oa = S("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
              var t = ye.apply(null, arguments);
              return this.isValid() && t.isValid() ? t > this ? this : t : m()
            }),
            Ra = function() {
              return Date.now ? Date.now() : +new Date
            };
          De("Z", ":"), De("ZZ", ""), Q("Z", Zi), Q("ZZ", Zi), nt(["Z", "ZZ"], function(t, e, n) {
            n._useUTC = !0, n._tzm = Ce(Zi, t)
          });
          var La = /([\+\-]|\d\d)/gi;
          t.updateOffset = function() {};
          var Wa = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            Va = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
          Ne.fn = we.prototype;
          var Ya = je(1, "add"),
            Ba = je(-1, "subtract");
          t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
          var za = S("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
            return void 0 === t ? this.localeData() : this.locale(t)
          });
          q(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
          }), q(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
          }), Dn("gggg", "weekYear"), Dn("ggggg", "weekYear"), Dn("GGGG", "isoWeekYear"), Dn("GGGGG", "isoWeekYear"), W("weekYear", "gg"), W("isoWeekYear", "GG"), B("weekYear", 1), B("isoWeekYear", 1), Q("G", Gi), Q("g", Gi), Q("GG", Bi, Li), Q("gg", Bi, Li), Q("GGGG", Ei, Vi), Q("gggg", Ei, Vi), Q("GGGGG", Ui, Yi), Q("ggggg", Ui, Yi), it(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, i) {
            e[i.substr(0, 2)] = k(t)
          }), it(["gg", "GG"], function(e, n, i, a) {
            n[a] = t.parseTwoDigitYear(e)
          }), q("Q", 0, "Qo", "quarter"), W("quarter", "Q"), B("quarter", 7), Q("Q", Ri), nt("Q", function(t, e) {
            e[ta] = 3 * (k(t) - 1)
          }), q("D", ["DD", 2], "Do", "date"), W("date", "D"), B("date", 9), Q("D", Bi), Q("DD", Bi, Li), Q("Do", function(t, e) {
            return t ? e._ordinalParse : e._ordinalParseLenient
          }), nt(["D", "DD"], ea), nt("Do", function(t, e) {
            e[ea] = k(t.match(Bi)[0], 10)
          });
          var Na = N("Date", !0);
          q("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), W("dayOfYear", "DDD"), B("dayOfYear", 4), Q("DDD", Hi), Q("DDDD", Wi), nt(["DDD", "DDDD"], function(t, e, n) {
            n._dayOfYear = k(t)
          }), q("m", ["mm", 2], 0, "minute"), W("minute", "m"), B("minute", 14), Q("m", Bi), Q("mm", Bi, Li), nt(["m", "mm"], ia);
          var Ha = N("Minutes", !1);
          q("s", ["ss", 2], 0, "second"), W("second", "s"), B("second", 15), Q("s", Bi), Q("ss", Bi, Li), nt(["s", "ss"], aa);
          var Ea = N("Seconds", !1);
          q("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
          }), q(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
          }), q(0, ["SSS", 3], 0, "millisecond"), q(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
          }), q(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
          }), q(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
          }), q(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
          }), q(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
          }), q(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
          }), W("millisecond", "ms"), B("millisecond", 16), Q("S", Hi, Ri), Q("SS", Hi, Li), Q("SSS", Hi, Wi);
          var Ua;
          for (Ua = "SSSS"; Ua.length <= 9; Ua += "S") Q(Ua, ji);
          for (Ua = "S"; Ua.length <= 9; Ua += "S") nt(Ua, Ln);
          var ja = N("Milliseconds", !1);
          q("z", 0, 0, "zoneAbbr"), q("zz", 0, 0, "zoneName");
          var Ga = b.prototype;
          Ga.add = Ya, Ga.calendar = Ze, Ga.clone = Xe, Ga.diff = nn, Ga.endOf = mn, Ga.format = sn, Ga.from = ln, Ga.fromNow = un, Ga.to = dn, Ga.toNow = cn, Ga.get = U, Ga.invalidAt = Sn, Ga.isAfter = Je, Ga.isBefore = Ke, Ga.isBetween = Qe, Ga.isSame = $e, Ga.isSameOrAfter = tn, Ga.isSameOrBefore = en, Ga.isValid = _n, Ga.lang = za, Ga.locale = hn, Ga.localeData = fn, Ga.max = Oa, Ga.min = Fa, Ga.parsingFlags = wn, Ga.set = j, Ga.startOf = gn, Ga.subtract = Ba, Ga.toArray = yn, Ga.toObject = xn, Ga.toDate = bn, Ga.toISOString = on, Ga.toJSON = kn, Ga.toString = rn, Ga.unix = vn, Ga.valueOf = pn, Ga.creationData = Mn, Ga.year = fa, Ga.isLeapYear = bt, Ga.weekYear = Cn, Ga.isoWeekYear = Tn, Ga.quarter = Ga.quarters = On, Ga.month = ct, Ga.daysInMonth = ht, Ga.week = Ga.weeks = Tt, Ga.isoWeek = Ga.isoWeeks = Pt, Ga.weeksInYear = In, Ga.isoWeeksInYear = Pn, Ga.date = Na, Ga.day = Ga.days = Vt, Ga.weekday = Yt, Ga.isoWeekday = Bt, Ga.dayOfYear = Rn, Ga.hour = Ga.hours = wa, Ga.minute = Ga.minutes = Ha, Ga.second = Ga.seconds = Ea, Ga.millisecond = Ga.milliseconds = ja, Ga.utcOffset = Ie, Ga.utc = Fe, Ga.local = Oe, Ga.parseZone = Re, Ga.hasAlignedHourOffset = Le, Ga.isDST = We, Ga.isLocal = Ye, Ga.isUtcOffset = Be, Ga.isUtc = ze, Ga.isUTC = ze, Ga.zoneAbbr = Wn, Ga.zoneName = Vn, Ga.dates = S("dates accessor is deprecated. Use date instead.", Na), Ga.months = S("months accessor is deprecated. Use month instead", ct), Ga.years = S("years accessor is deprecated. Use year instead", fa), Ga.zone = S("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ae), Ga.isDSTShifted = S("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ve);
          var qa = Ga,
            Za = P.prototype;
          Za.calendar = I, Za.longDateFormat = A, Za.invalidDate = F, Za.ordinal = O, Za.preparse = zn, Za.postformat = zn, Za.relativeTime = R, Za.pastFuture = L, Za.set = C, Za.months = ot, Za.monthsShort = st, Za.monthsParse = ut, Za.monthsRegex = gt, Za.monthsShortRegex = ft, Za.week = Mt, Za.firstDayOfYear = Ct, Za.firstDayOfWeek = Dt, Za.weekdays = Ft, Za.weekdaysMin = Rt, Za.weekdaysShort = Ot, Za.weekdaysParse = Wt, Za.weekdaysRegex = zt, Za.weekdaysShortRegex = Nt, Za.weekdaysMinRegex = Ht, Za.isPM = Zt, Za.meridiem = Xt, $t("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(t) {
              var e = t % 10,
                n = 1 === k(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
              return t + n
            }
          }), t.lang = S("moment.lang is deprecated. Use moment.locale instead.", $t), t.langData = S("moment.langData is deprecated. Use moment.localeData instead.", ne);
          var Xa = Math.abs,
            Ja = ri("ms"),
            Ka = ri("s"),
            Qa = ri("m"),
            $a = ri("h"),
            tr = ri("d"),
            er = ri("w"),
            nr = ri("M"),
            ir = ri("y"),
            ar = si("milliseconds"),
            rr = si("seconds"),
            or = si("minutes"),
            sr = si("hours"),
            lr = si("days"),
            ur = si("months"),
            dr = si("years"),
            cr = Math.round,
            hr = {
              s: 45,
              m: 45,
              h: 22,
              d: 26,
              M: 11
            },
            fr = Math.abs,
            gr = we.prototype;
          gr.abs = Xn, gr.add = Kn, gr.subtract = Qn, gr.as = ii, gr.asMilliseconds = Ja, gr.asSeconds = Ka, gr.asMinutes = Qa, gr.asHours = $a, gr.asDays = tr, gr.asWeeks = er, gr.asMonths = nr, gr.asYears = ir, gr.valueOf = ai, gr._bubble = ti, gr.get = oi, gr.milliseconds = ar, gr.seconds = rr, gr.minutes = or, gr.hours = sr, gr.days = lr, gr.weeks = li, gr.months = ur, gr.years = dr, gr.humanize = fi, gr.toISOString = gi, gr.toString = gi, gr.toJSON = gi, gr.locale = hn, gr.localeData = fn, gr.toIsoString = S("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", gi), gr.lang = za, q("X", 0, 0, "unix"), q("x", 0, 0, "valueOf"), Q("x", Gi), Q("X", Xi), nt("X", function(t, e, n) {
            n._d = new Date(1e3 * parseFloat(t, 10))
          }), nt("x", function(t, e, n) {
            n._d = new Date(k(t))
          }), t.version = "2.15.2", i(ye), t.fn = qa, t.min = ke, t.max = _e, t.now = Ra, t.utc = c, t.unix = Yn, t.months = Un, t.isDate = s, t.locale = $t, t.invalid = m, t.duration = Ne, t.isMoment = y, t.weekdays = Gn, t.parseZone = Bn, t.localeData = ne, t.isDuration = Se, t.monthsShort = jn, t.weekdaysMin = Zn, t.defineLocale = te, t.updateLocale = ee, t.locales = ie, t.weekdaysShort = qn, t.normalizeUnits = V, t.relativeTimeRounding = ci, t.relativeTimeThreshold = hi, t.calendarFormat = qe, t.prototype = qa;
          var mr = t;
          return mr
        })
      }, {}],
      7: [function(t, e, n) {
        var i = t(28)();
        t(26)(i), t(42)(i), t(22)(i), t(25)(i), t(31)(i), t(21)(i), t(23)(i), t(24)(i), t(29)(i), t(33)(i), t(34)(i), t(32)(i), t(35)(i), t(30)(i), t(27)(i), t(36)(i), t(37)(i), t(38)(i), t(39)(i), t(40)(i), t(45)(i), t(43)(i), t(44)(i), t(46)(i), t(47)(i), t(48)(i), t(15)(i), t(16)(i), t(17)(i), t(18)(i), t(19)(i), t(20)(i), t(8)(i), t(9)(i), t(10)(i), t(11)(i), t(12)(i), t(13)(i), t(14)(i), window.Chart = e.exports = i
      }, {
        10: 10,
        11: 11,
        12: 12,
        13: 13,
        14: 14,
        15: 15,
        16: 16,
        17: 17,
        18: 18,
        19: 19,
        20: 20,
        21: 21,
        22: 22,
        23: 23,
        24: 24,
        25: 25,
        26: 26,
        27: 27,
        28: 28,
        29: 29,
        30: 30,
        31: 31,
        32: 32,
        33: 33,
        34: 34,
        35: 35,
        36: 36,
        37: 37,
        38: 38,
        39: 39,
        40: 40,
        42: 42,
        43: 43,
        44: 44,
        45: 45,
        46: 46,
        47: 47,
        48: 48,
        8: 8,
        9: 9
      }],
      8: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          t.Bar = function(e, n) {
            return n.type = "bar", new t(e, n)
          }
        }
      }, {}],
      9: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          t.Bubble = function(e, n) {
            return n.type = "bubble", new t(e, n)
          }
        }
      }, {}],
      10: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          t.Doughnut = function(e, n) {
            return n.type = "doughnut", new t(e, n)
          }
        }
      }, {}],
      11: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          t.Line = function(e, n) {
            return n.type = "line", new t(e, n)
          }
        }
      }, {}],
      12: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          t.PolarArea = function(e, n) {
            return n.type = "polarArea", new t(e, n)
          }
        }
      }, {}],
      13: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          t.Radar = function(e, n) {
            return n.type = "radar", new t(e, n)
          }
        }
      }, {}],
      14: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          var e = {
            hover: {
              mode: "single"
            },
            scales: {
              xAxes: [{
                type: "linear",
                position: "bottom",
                id: "x-axis-1"
              }],
              yAxes: [{
                type: "linear",
                position: "left",
                id: "y-axis-1"
              }]
            },
            tooltips: {
              callbacks: {
                title: function() {
                  return ""
                },
                label: function(t) {
                  return "(" + t.xLabel + ", " + t.yLabel + ")"
                }
              }
            }
          };
          t.defaults.scatter = e, t.controllers.scatter = t.controllers.line, t.Scatter = function(e, n) {
            return n.type = "scatter", new t(e, n)
          }
        }
      }, {}],
      15: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          var e = t.helpers;
          t.defaults.bar = {
            hover: {
              mode: "label"
            },
            scales: {
              xAxes: [{
                type: "category",
                categoryPercentage: .8,
                barPercentage: .9,
                gridLines: {
                  offsetGridLines: !0
                }
              }],
              yAxes: [{
                type: "linear"
              }]
            }
          }, t.controllers.bar = t.DatasetController.extend({
            dataElementType: t.elements.Rectangle,
            initialize: function(e, n) {
              t.DatasetController.prototype.initialize.call(this, e, n);
              var i = this,
                a = i.getMeta(),
                r = i.getDataset();
              a.stack = r.stack, a.bar = !0
            },
            getStackCount: function() {
              var t = this,
                n = t.getMeta(),
                i = t.getScaleForId(n.yAxisID),
                a = [];
              return e.each(t.chart.data.datasets, function(e, n) {
                var r = t.chart.getDatasetMeta(n);
                r.bar && t.chart.isDatasetVisible(n) && (i.options.stacked === !1 || i.options.stacked === !0 && -1 === a.indexOf(r.stack) || void 0 === i.options.stacked && (void 0 === r.stack || -1 === a.indexOf(r.stack))) && a.push(r.stack)
              }, t), a.length
            },
            update: function(t) {
              var n = this;
              e.each(n.getMeta().data, function(e, i) {
                n.updateElement(e, i, t)
              }, n)
            },
            updateElement: function(t, n, i) {
              var a = this,
                r = a.getMeta(),
                o = a.getScaleForId(r.xAxisID),
                s = a.getScaleForId(r.yAxisID),
                l = s.getBasePixel(),
                u = a.chart.options.elements.rectangle,
                d = t.custom || {},
                c = a.getDataset();
              t._xScale = o, t._yScale = s, t._datasetIndex = a.index, t._index = n;
              var h = a.getRuler(n);
              t._model = {
                x: a.calculateBarX(n, a.index, h),
                y: i ? l : a.calculateBarY(n, a.index),
                label: a.chart.data.labels[n],
                datasetLabel: c.label,
                horizontal: !1,
                base: i ? l : a.calculateBarBase(a.index, n),
                width: a.calculateBarWidth(h),
                backgroundColor: d.backgroundColor ? d.backgroundColor : e.getValueAtIndexOrDefault(c.backgroundColor, n, u.backgroundColor),
                borderSkipped: d.borderSkipped ? d.borderSkipped : u.borderSkipped,
                borderColor: d.borderColor ? d.borderColor : e.getValueAtIndexOrDefault(c.borderColor, n, u.borderColor),
                borderWidth: d.borderWidth ? d.borderWidth : e.getValueAtIndexOrDefault(c.borderWidth, n, u.borderWidth)
              }, t.pivot()
            },
            calculateBarBase: function(t, e) {
              var n = this,
                i = n.getMeta(),
                a = n.getScaleForId(i.yAxisID),
                r = a.getBaseValue(),
                o = r;
              if (a.options.stacked === !0 || void 0 === a.options.stacked && void 0 !== i.stack) {
                for (var s = n.chart, l = s.data.datasets, u = Number(l[t].data[e]), d = 0; t > d; d++) {
                  var c = l[d],
                    h = s.getDatasetMeta(d);
                  if (h.bar && h.yAxisID === a.id && s.isDatasetVisible(d) && i.stack === h.stack) {
                    var f = Number(c.data[e]);
                    r += 0 > u ? Math.min(f, o) : Math.max(f, o)
                  }
                }
                return a.getPixelForValue(r)
              }
              return a.getBasePixel()
            },
            getRuler: function() {
              var t = this,
                e = t.getMeta(),
                n = t.getScaleForId(e.xAxisID),
                i = t.getStackCount(),
                a = n.width / n.ticks.length,
                r = a * n.options.categoryPercentage,
                o = (a - a * n.options.categoryPercentage) / 2,
                s = r / i,
                l = s * n.options.barPercentage,
                u = s - s * n.options.barPercentage;
              return {
                stackCount: i,
                tickWidth: a,
                categoryWidth: r,
                categorySpacing: o,
                fullBarWidth: s,
                barWidth: l,
                barSpacing: u
              }
            },
            calculateBarWidth: function(t) {
              var e = this,
                n = e.getMeta(),
                i = e.getScaleForId(n.xAxisID);
              return i.options.barThickness ? i.options.barThickness : i.options.stacked ? t.categoryWidth * i.options.barPercentage : t.barWidth
            },
            getStackIndex: function(t) {
              var e, n, i = this,
                a = i.chart.getDatasetMeta(t),
                r = i.getScaleForId(a.yAxisID),
                o = [a.stack];
              for (n = 0; t > n; ++n) e = this.chart.getDatasetMeta(n), e.bar && this.chart.isDatasetVisible(n) && (r.options.stacked === !1 || r.options.stacked === !0 && -1 === o.indexOf(e.stack) || void 0 === r.options.stacked && (void 0 === e.stack || -1 === o.indexOf(e.stack))) && o.push(e.stack);
              return o.length - 1
            },
            calculateBarX: function(t, e, n) {
              var i = this,
                a = i.getMeta(),
                r = i.getScaleForId(a.xAxisID),
                o = i.getStackIndex(e),
                s = r.getPixelForValue(null, t, e, i.chart.isCombo);
              return s -= i.chart.isCombo ? n.tickWidth / 2 : 0, r.options.stacked ? s + n.categoryWidth / 2 + n.categorySpacing : s + n.barWidth / 2 + n.categorySpacing + n.barWidth * o + n.barSpacing / 2 + n.barSpacing * o
            },
            calculateBarY: function(t, e) {
              var n = this,
                i = n.getMeta(),
                a = n.getScaleForId(i.yAxisID),
                r = Number(n.getDataset().data[t]);
              if (a.options.stacked || void 0 === a.options.stacked && void 0 !== i.stack) {
                for (var o = a.getBaseValue(), s = o, l = o, u = 0; e > u; u++) {
                  var d = n.chart.data.datasets[u],
                    c = n.chart.getDatasetMeta(u);
                  if (c.bar && c.yAxisID === a.id && n.chart.isDatasetVisible(u) && i.stack === c.stack) {
                    var h = Number(d.data[t]);
                    0 > h ? l += h || 0 : s += h || 0
                  }
                }
                return 0 > r ? a.getPixelForValue(l + r) : a.getPixelForValue(s + r)
              }
              return a.getPixelForValue(r)
            },
            draw: function(e) {
              var n, i, a = this,
                r = a.chart,
                o = e || 1,
                s = a.getMeta().data,
                l = a.getDataset();
              for (t.canvasHelpers.clipArea(r.ctx, r.chartArea), n = 0, i = s.length; i > n; ++n) {
                var u = l.data[n];
                null === u || void 0 === u || isNaN(u) || s[n].transition(o).draw()
              }
              t.canvasHelpers.unclipArea(r.ctx)
            },
            setHoverStyle: function(t) {
              var n = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                a = t.custom || {},
                r = t._model;
              r.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : e.getValueAtIndexOrDefault(n.hoverBackgroundColor, i, e.getHoverColor(r.backgroundColor)), r.borderColor = a.hoverBorderColor ? a.hoverBorderColor : e.getValueAtIndexOrDefault(n.hoverBorderColor, i, e.getHoverColor(r.borderColor)), r.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : e.getValueAtIndexOrDefault(n.hoverBorderWidth, i, r.borderWidth)
            },
            removeHoverStyle: function(t) {
              var n = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                a = t.custom || {},
                r = t._model,
                o = this.chart.options.elements.rectangle;
              r.backgroundColor = a.backgroundColor ? a.backgroundColor : e.getValueAtIndexOrDefault(n.backgroundColor, i, o.backgroundColor), r.borderColor = a.borderColor ? a.borderColor : e.getValueAtIndexOrDefault(n.borderColor, i, o.borderColor), r.borderWidth = a.borderWidth ? a.borderWidth : e.getValueAtIndexOrDefault(n.borderWidth, i, o.borderWidth)
            }
          }), t.defaults.horizontalBar = {
            hover: {
              mode: "label"
            },
            scales: {
              xAxes: [{
                type: "linear",
                position: "bottom"
              }],
              yAxes: [{
                position: "left",
                type: "category",
                categoryPercentage: .8,
                barPercentage: .9,
                gridLines: {
                  offsetGridLines: !0
                }
              }]
            },
            elements: {
              rectangle: {
                borderSkipped: "left"
              }
            },
            tooltips: {
              callbacks: {
                title: function(t, e) {
                  var n = "";
                  return t.length > 0 && (t[0].yLabel ? n = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (n = e.labels[t[0].index])), n
                },
                label: function(t, e) {
                  var n = e.datasets[t.datasetIndex].label || "";
                  return n + ": " + t.xLabel
                }
              }
            }
          }, t.controllers.horizontalBar = t.controllers.bar.extend({
            getStackCount: function() {
              var t = this,
                n = t.getMeta(),
                i = t.getScaleForId(n.xAxisID),
                a = [];
              return e.each(t.chart.data.datasets, function(e, n) {
                var r = t.chart.getDatasetMeta(n);
                r.bar && t.chart.isDatasetVisible(n) && (i.options.stacked === !1 || i.options.stacked === !0 && -1 === a.indexOf(r.stack) || void 0 === i.options.stacked && (void 0 === r.stack || -1 === a.indexOf(r.stack))) && a.push(r.stack)
              }, t), a.length
            },
            updateElement: function(t, n, i) {
              var a = this,
                r = a.getMeta(),
                o = a.getScaleForId(r.xAxisID),
                s = a.getScaleForId(r.yAxisID),
                l = o.getBasePixel(),
                u = t.custom || {},
                d = a.getDataset(),
                c = a.chart.options.elements.rectangle;
              t._xScale = o, t._yScale = s, t._datasetIndex = a.index, t._index = n;
              var h = a.getRuler(n);
              t._model = {
                x: i ? l : a.calculateBarX(n, a.index),
                y: a.calculateBarY(n, a.index, h),
                label: a.chart.data.labels[n],
                datasetLabel: d.label,
                horizontal: !0,
                base: i ? l : a.calculateBarBase(a.index, n),
                height: a.calculateBarHeight(h),
                backgroundColor: u.backgroundColor ? u.backgroundColor : e.getValueAtIndexOrDefault(d.backgroundColor, n, c.backgroundColor),
                borderSkipped: u.borderSkipped ? u.borderSkipped : c.borderSkipped,
                borderColor: u.borderColor ? u.borderColor : e.getValueAtIndexOrDefault(d.borderColor, n, c.borderColor),
                borderWidth: u.borderWidth ? u.borderWidth : e.getValueAtIndexOrDefault(d.borderWidth, n, c.borderWidth)
              }, t.pivot()
            },
            calculateBarBase: function(t, e) {
              var n = this,
                i = n.getMeta(),
                a = n.getScaleForId(i.xAxisID),
                r = a.getBaseValue(),
                o = r;
              if (a.options.stacked || void 0 === a.options.stacked && void 0 !== i.stack) {
                for (var s = n.chart, l = s.data.datasets, u = Number(l[t].data[e]), d = 0; t > d; d++) {
                  var c = l[d],
                    h = s.getDatasetMeta(d);
                  if (h.bar && h.xAxisID === a.id && s.isDatasetVisible(d) && i.stack === h.stack) {
                    var f = Number(c.data[e]);
                    r += 0 > u ? Math.min(f, o) : Math.max(f, o)
                  }
                }
                return a.getPixelForValue(r)
              }
              return a.getBasePixel()
            },
            getRuler: function() {
              var t = this,
                e = t.getMeta(),
                n = t.getScaleForId(e.yAxisID),
                i = t.getStackCount(),
                a = n.height / n.ticks.length,
                r = a * n.options.categoryPercentage,
                o = (a - a * n.options.categoryPercentage) / 2,
                s = r / i,
                l = s * n.options.barPercentage,
                u = s - s * n.options.barPercentage;
              return {
                stackCount: i,
                tickHeight: a,
                categoryHeight: r,
                categorySpacing: o,
                fullBarHeight: s,
                barHeight: l,
                barSpacing: u
              }
            },
            calculateBarHeight: function(t) {
              var e = this,
                n = e.getMeta(),
                i = e.getScaleForId(n.yAxisID);
              return i.options.barThickness ? i.options.barThickness : i.options.stacked ? t.categoryHeight * i.options.barPercentage : t.barHeight
            },
            getStackIndex: function(t) {
              var e, n, i = this,
                a = i.chart.getDatasetMeta(t),
                r = i.getScaleForId(a.xAxisID),
                o = [a.stack];
              for (n = 0; t > n; ++n) e = this.chart.getDatasetMeta(n), e.bar && this.chart.isDatasetVisible(n) && (r.options.stacked === !1 || r.options.stacked === !0 && -1 === o.indexOf(e.stack) || void 0 === r.options.stacked && (void 0 === e.stack || -1 === o.indexOf(e.stack))) && o.push(e.stack);
              return o.length - 1
            },
            calculateBarX: function(t, e) {
              var n = this,
                i = n.getMeta(),
                a = n.getScaleForId(i.xAxisID),
                r = Number(n.getDataset().data[t]);
              if (a.options.stacked || void 0 === a.options.stacked && void 0 !== i.stack) {
                for (var o = a.getBaseValue(), s = o, l = o, u = 0; e > u; u++) {
                  var d = n.chart.data.datasets[u],
                    c = n.chart.getDatasetMeta(u);
                  if (c.bar && c.xAxisID === a.id && n.chart.isDatasetVisible(u) && i.stack === c.stack) {
                    var h = Number(d.data[t]);
                    0 > h ? l += h || 0 : s += h || 0
                  }
                }
                return 0 > r ? a.getPixelForValue(l + r) : a.getPixelForValue(s + r)
              }
              return a.getPixelForValue(r)
            },
            calculateBarY: function(t, e, n) {
              var i = this,
                a = i.getMeta(),
                r = i.getScaleForId(a.yAxisID),
                o = i.getStackIndex(e),
                s = r.getPixelForValue(null, t, e, i.chart.isCombo);
              return s -= i.chart.isCombo ? n.tickHeight / 2 : 0, r.options.stacked ? s + n.categoryHeight / 2 + n.categorySpacing : s + n.barHeight / 2 + n.categorySpacing + n.barHeight * o + n.barSpacing / 2 + n.barSpacing * o
            }
          })
        }
      }, {}],
      16: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          var e = t.helpers;
          t.defaults.bubble = {
            hover: {
              mode: "single"
            },
            scales: {
              xAxes: [{
                type: "linear",
                position: "bottom",
                id: "x-axis-0"
              }],
              yAxes: [{
                type: "linear",
                position: "left",
                id: "y-axis-0"
              }]
            },
            tooltips: {
              callbacks: {
                title: function() {
                  return ""
                },
                label: function(t, e) {
                  var n = e.datasets[t.datasetIndex].label || "",
                    i = e.datasets[t.datasetIndex].data[t.index];
                  return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")"
                }
              }
            }
          }, t.controllers.bubble = t.DatasetController.extend({
            dataElementType: t.elements.Point,
            update: function(t) {
              var n = this,
                i = n.getMeta(),
                a = i.data;
              e.each(a, function(e, i) {
                n.updateElement(e, i, t)
              })
            },
            updateElement: function(n, i, a) {
              var r = this,
                o = r.getMeta(),
                s = r.getScaleForId(o.xAxisID),
                l = r.getScaleForId(o.yAxisID),
                u = n.custom || {},
                d = r.getDataset(),
                c = d.data[i],
                h = r.chart.options.elements.point,
                f = r.index;
              e.extend(n, {
                _xScale: s,
                _yScale: l,
                _datasetIndex: f,
                _index: i,
                _model: {
                  x: a ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" == typeof c ? c : NaN, i, f, r.chart.isCombo),
                  y: a ? l.getBasePixel() : l.getPixelForValue(c, i, f),
                  radius: a ? 0 : u.radius ? u.radius : r.getRadius(c),
                  hitRadius: u.hitRadius ? u.hitRadius : e.getValueAtIndexOrDefault(d.hitRadius, i, h.hitRadius)
                }
              }), t.DatasetController.prototype.removeHoverStyle.call(r, n, h);
              var g = n._model;
              g.skip = u.skip ? u.skip : isNaN(g.x) || isNaN(g.y), n.pivot()
            },
            getRadius: function(t) {
              return t.r || this.chart.options.elements.point.radius
            },
            setHoverStyle: function(n) {
              var i = this;
              t.DatasetController.prototype.setHoverStyle.call(i, n);
              var a = i.chart.data.datasets[n._datasetIndex],
                r = n._index,
                o = n.custom || {},
                s = n._model;
              s.radius = o.hoverRadius ? o.hoverRadius : e.getValueAtIndexOrDefault(a.hoverRadius, r, i.chart.options.elements.point.hoverRadius) + i.getRadius(a.data[r])
            },
            removeHoverStyle: function(e) {
              var n = this;
              t.DatasetController.prototype.removeHoverStyle.call(n, e, n.chart.options.elements.point);
              var i = n.chart.data.datasets[e._datasetIndex].data[e._index],
                a = e.custom || {},
                r = e._model;
              r.radius = a.radius ? a.radius : n.getRadius(i)
            }
          })
        }
      }, {}],
      17: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          var e = t.helpers,
            n = t.defaults;
          n.doughnut = {
            animation: {
              animateRotate: !0,
              animateScale: !1
            },
            aspectRatio: 1,
            hover: {
              mode: "single"
            },
            legendCallback: function(t) {
              var e = [];
              e.push('<ul class="' + t.id + '-legend">');
              var n = t.data,
                i = n.datasets,
                a = n.labels;
              if (i.length)
                for (var r = 0; r < i[0].data.length; ++r) e.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'), a[r] && e.push(a[r]), e.push("</li>");
              return e.push("</ul>"), e.join("")
            },
            legend: {
              labels: {
                generateLabels: function(t) {
                  var n = t.data;
                  return n.labels.length && n.datasets.length ? n.labels.map(function(i, a) {
                    var r = t.getDatasetMeta(0),
                      o = n.datasets[0],
                      s = r.data[a],
                      l = s && s.custom || {},
                      u = e.getValueAtIndexOrDefault,
                      d = t.options.elements.arc,
                      c = l.backgroundColor ? l.backgroundColor : u(o.backgroundColor, a, d.backgroundColor),
                      h = l.borderColor ? l.borderColor : u(o.borderColor, a, d.borderColor),
                      f = l.borderWidth ? l.borderWidth : u(o.borderWidth, a, d.borderWidth);
                    return {
                      text: i,
                      fillStyle: c,
                      strokeStyle: h,
                      lineWidth: f,
                      hidden: isNaN(o.data[a]) || r.data[a].hidden,
                      index: a
                    }
                  }) : []
                }
              },
              onClick: function(t, e) {
                var n, i, a, r = e.index,
                  o = this.chart;
                for (n = 0, i = (o.data.datasets || []).length; i > n; ++n) a = o.getDatasetMeta(n), a.data[r] && (a.data[r].hidden = !a.data[r].hidden);
                o.update()
              }
            },
            cutoutPercentage: 50,
            rotation: Math.PI * -.5,
            circumference: 2 * Math.PI,
            tooltips: {
              callbacks: {
                title: function() {
                  return ""
                },
                label: function(t, n) {
                  var i = n.labels[t.index],
                    a = ": " + n.datasets[t.datasetIndex].data[t.index];
                  return e.isArray(i) ? (i = i.slice(), i[0] += a) : i += a, i
                }
              }
            }
          }, n.pie = e.clone(n.doughnut), e.extend(n.pie, {
            cutoutPercentage: 0
          }), t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
            dataElementType: t.elements.Arc,
            linkScales: e.noop,
            getRingIndex: function(t) {
              for (var e = 0, n = 0; t > n; ++n) this.chart.isDatasetVisible(n) && ++e;
              return e
            },
            update: function(t) {
              var n = this,
                i = n.chart,
                a = i.chartArea,
                r = i.options,
                o = r.elements.arc,
                s = a.right - a.left - o.borderWidth,
                l = a.bottom - a.top - o.borderWidth,
                u = Math.min(s, l),
                d = {
                  x: 0,
                  y: 0
                },
                c = n.getMeta(),
                h = r.cutoutPercentage,
                f = r.circumference;
              if (f < 2 * Math.PI) {
                var g = r.rotation % (2 * Math.PI);
                g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0);
                var m = g + f,
                  p = {
                    x: Math.cos(g),
                    y: Math.sin(g)
                  },
                  v = {
                    x: Math.cos(m),
                    y: Math.sin(m)
                  },
                  b = 0 >= g && m >= 0 || g <= 2 * Math.PI && 2 * Math.PI <= m,
                  y = g <= .5 * Math.PI && .5 * Math.PI <= m || g <= 2.5 * Math.PI && 2.5 * Math.PI <= m,
                  x = g <= -Math.PI && -Math.PI <= m || g <= Math.PI && Math.PI <= m,
                  k = g <= .5 * -Math.PI && .5 * -Math.PI <= m || g <= 1.5 * Math.PI && 1.5 * Math.PI <= m,
                  _ = h / 100,
                  w = {
                    x: x ? -1 : Math.min(p.x * (p.x < 0 ? 1 : _), v.x * (v.x < 0 ? 1 : _)),
                    y: k ? -1 : Math.min(p.y * (p.y < 0 ? 1 : _), v.y * (v.y < 0 ? 1 : _))
                  },
                  S = {
                    x: b ? 1 : Math.max(p.x * (p.x > 0 ? 1 : _), v.x * (v.x > 0 ? 1 : _)),
                    y: y ? 1 : Math.max(p.y * (p.y > 0 ? 1 : _), v.y * (v.y > 0 ? 1 : _))
                  },
                  M = {
                    width: .5 * (S.x - w.x),
                    height: .5 * (S.y - w.y)
                  };
                u = Math.min(s / M.width, l / M.height), d = {
                  x: (S.x + w.x) * -.5,
                  y: (S.y + w.y) * -.5
                }
              }
              i.borderWidth = n.getMaxBorderWidth(c.data), i.outerRadius = Math.max((u - i.borderWidth) / 2, 0), i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 0, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = d.x * i.outerRadius, i.offsetY = d.y * i.outerRadius, c.total = n.calculateTotal(), n.outerRadius = i.outerRadius - i.radiusLength * n.getRingIndex(n.index), n.innerRadius = Math.max(n.outerRadius - i.radiusLength, 0), e.each(c.data, function(e, i) {
                n.updateElement(e, i, t)
              })
            },
            updateElement: function(t, n, i) {
              var a = this,
                r = a.chart,
                o = r.chartArea,
                s = r.options,
                l = s.animation,
                u = (o.left + o.right) / 2,
                d = (o.top + o.bottom) / 2,
                c = s.rotation,
                h = s.rotation,
                f = a.getDataset(),
                g = i && l.animateRotate ? 0 : t.hidden ? 0 : a.calculateCircumference(f.data[n]) * (s.circumference / (2 * Math.PI)),
                m = i && l.animateScale ? 0 : a.innerRadius,
                p = i && l.animateScale ? 0 : a.outerRadius,
                v = e.getValueAtIndexOrDefault;
              e.extend(t, {
                _datasetIndex: a.index,
                _index: n,
                _model: {
                  x: u + r.offsetX,
                  y: d + r.offsetY,
                  startAngle: c,
                  endAngle: h,
                  circumference: g,
                  outerRadius: p,
                  innerRadius: m,
                  label: v(f.label, n, r.data.labels[n])
                }
              });
              var b = t._model;
              this.removeHoverStyle(t), i && l.animateRotate || (0 === n ? b.startAngle = s.rotation : b.startAngle = a.getMeta().data[n - 1]._model.endAngle, b.endAngle = b.startAngle + b.circumference), t.pivot()
            },
            removeHoverStyle: function(e) {
              t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
            },
            calculateTotal: function() {
              var t, n = this.getDataset(),
                i = this.getMeta(),
                a = 0;
              return e.each(i.data, function(e, i) {
                t = n.data[i], isNaN(t) || e.hidden || (a += Math.abs(t))
              }), a
            },
            calculateCircumference: function(t) {
              var e = this.getMeta().total;
              return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0
            },
            getMaxBorderWidth: function(t) {
              for (var e, n, i = 0, a = this.index, r = t.length, o = 0; r > o; o++) e = t[o]._model ? t[o]._model.borderWidth : 0, n = t[o]._chart ? t[o]._chart.config.data.datasets[a].hoverBorderWidth : 0, i = e > i ? e : i, i = n > i ? n : i;
              return i
            }
          })
        }
      }, {}],
      18: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          function e(t, e) {
            return n.getValueOrDefault(t.showLine, e.showLines)
          }
          var n = t.helpers;
          t.defaults.line = {
            showLines: !0,
            spanGaps: !1,
            hover: {
              mode: "label"
            },
            scales: {
              xAxes: [{
                type: "category",
                id: "x-axis-0"
              }],
              yAxes: [{
                type: "linear",
                id: "y-axis-0"
              }]
            }
          }, t.controllers.line = t.DatasetController.extend({
            datasetElementType: t.elements.Line,
            dataElementType: t.elements.Point,
            update: function(t) {
              var i, a, r, o = this,
                s = o.getMeta(),
                l = s.dataset,
                u = s.data || [],
                d = o.chart.options,
                c = d.elements.line,
                h = o.getScaleForId(s.yAxisID),
                f = o.getDataset(),
                g = e(f, d);
              for (g && (r = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = h, l._datasetIndex = o.index, l._children = u, l._model = {
                  spanGaps: f.spanGaps ? f.spanGaps : d.spanGaps,
                  tension: r.tension ? r.tension : n.getValueOrDefault(f.lineTension, c.tension),
                  backgroundColor: r.backgroundColor ? r.backgroundColor : f.backgroundColor || c.backgroundColor,
                  borderWidth: r.borderWidth ? r.borderWidth : f.borderWidth || c.borderWidth,
                  borderColor: r.borderColor ? r.borderColor : f.borderColor || c.borderColor,
                  borderCapStyle: r.borderCapStyle ? r.borderCapStyle : f.borderCapStyle || c.borderCapStyle,
                  borderDash: r.borderDash ? r.borderDash : f.borderDash || c.borderDash,
                  borderDashOffset: r.borderDashOffset ? r.borderDashOffset : f.borderDashOffset || c.borderDashOffset,
                  borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle,
                  fill: r.fill ? r.fill : void 0 !== f.fill ? f.fill : c.fill,
                  steppedLine: r.steppedLine ? r.steppedLine : n.getValueOrDefault(f.steppedLine, c.stepped),
                  cubicInterpolationMode: r.cubicInterpolationMode ? r.cubicInterpolationMode : n.getValueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode),
                  scaleTop: h.top,
                  scaleBottom: h.bottom,
                  scaleZero: h.getBasePixel()
                }, l.pivot()), i = 0, a = u.length; a > i; ++i) o.updateElement(u[i], i, t);
              for (g && 0 !== l._model.tension && o.updateBezierControlPoints(), i = 0, a = u.length; a > i; ++i) u[i].pivot()
            },
            getPointBackgroundColor: function(t, e) {
              var i = this.chart.options.elements.point.backgroundColor,
                a = this.getDataset(),
                r = t.custom || {};
              return r.backgroundColor ? i = r.backgroundColor : a.pointBackgroundColor ? i = n.getValueAtIndexOrDefault(a.pointBackgroundColor, e, i) : a.backgroundColor && (i = a.backgroundColor), i
            },
            getPointBorderColor: function(t, e) {
              var i = this.chart.options.elements.point.borderColor,
                a = this.getDataset(),
                r = t.custom || {};
              return r.borderColor ? i = r.borderColor : a.pointBorderColor ? i = n.getValueAtIndexOrDefault(a.pointBorderColor, e, i) : a.borderColor && (i = a.borderColor), i
            },
            getPointBorderWidth: function(t, e) {
              var i = this.chart.options.elements.point.borderWidth,
                a = this.getDataset(),
                r = t.custom || {};
              return isNaN(r.borderWidth) ? isNaN(a.pointBorderWidth) ? isNaN(a.borderWidth) || (i = a.borderWidth) : i = n.getValueAtIndexOrDefault(a.pointBorderWidth, e, i) : i = r.borderWidth, i
            },
            updateElement: function(t, e, i) {
              var a, r, o = this,
                s = o.getMeta(),
                l = t.custom || {},
                u = o.getDataset(),
                d = o.index,
                c = u.data[e],
                h = o.getScaleForId(s.yAxisID),
                f = o.getScaleForId(s.xAxisID),
                g = o.chart.options.elements.point,
                m = o.chart.data.labels || [],
                p = 1 === m.length || 1 === u.data.length || o.chart.isCombo;
              void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), a = f.getPixelForValue("object" == typeof c ? c : NaN, e, d, p), r = i ? h.getBasePixel() : o.calculatePointY(c, e, d), t._xScale = f, t._yScale = h, t._datasetIndex = d, t._index = e, t._model = {
                x: a,
                y: r,
                skip: l.skip || isNaN(a) || isNaN(r),
                radius: l.radius || n.getValueAtIndexOrDefault(u.pointRadius, e, g.radius),
                pointStyle: l.pointStyle || n.getValueAtIndexOrDefault(u.pointStyle, e, g.pointStyle),
                backgroundColor: o.getPointBackgroundColor(t, e),
                borderColor: o.getPointBorderColor(t, e),
                borderWidth: o.getPointBorderWidth(t, e),
                tension: s.dataset._model ? s.dataset._model.tension : 0,
                steppedLine: s.dataset._model ? s.dataset._model.steppedLine : !1,
                hitRadius: l.hitRadius || n.getValueAtIndexOrDefault(u.pointHitRadius, e, g.hitRadius)
              }
            },
            calculatePointY: function(t, e, n) {
              var i, a, r, o = this,
                s = o.chart,
                l = o.getMeta(),
                u = o.getScaleForId(l.yAxisID),
                d = 0,
                c = 0;
              if (u.options.stacked) {
                for (i = 0; n > i; i++)
                  if (a = s.data.datasets[i], r = s.getDatasetMeta(i), "line" === r.type && r.yAxisID === u.id && s.isDatasetVisible(i)) {
                    var h = Number(u.getRightValue(a.data[e]));
                    0 > h ? c += h || 0 : d += h || 0
                  }
                var f = Number(u.getRightValue(t));
                return 0 > f ? u.getPixelForValue(c + f) : u.getPixelForValue(d + f)
              }
              return u.getPixelForValue(t)
            },
            updateBezierControlPoints: function() {
              function t(t, e, n) {
                return Math.max(Math.min(t, n), e)
              }
              var e, i, a, r, o, s = this,
                l = s.getMeta(),
                u = s.chart.chartArea,
                d = l.data || [];
              if (l.dataset._model.spanGaps && (d = d.filter(function(t) {
                  return !t._model.skip
                })), "monotone" === l.dataset._model.cubicInterpolationMode) n.splineCurveMonotone(d);
              else
                for (e = 0, i = d.length; i > e; ++e) a = d[e], r = a._model, o = n.splineCurve(n.previousItem(d, e)._model, r, n.nextItem(d, e)._model, l.dataset._model.tension), r.controlPointPreviousX = o.previous.x, r.controlPointPreviousY = o.previous.y, r.controlPointNextX = o.next.x, r.controlPointNextY = o.next.y;
              if (s.chart.options.elements.line.capBezierPoints)
                for (e = 0, i = d.length; i > e; ++e) r = d[e]._model, r.controlPointPreviousX = t(r.controlPointPreviousX, u.left, u.right), r.controlPointPreviousY = t(r.controlPointPreviousY, u.top, u.bottom), r.controlPointNextX = t(r.controlPointNextX, u.left, u.right), r.controlPointNextY = t(r.controlPointNextY, u.top, u.bottom)
            },
            draw: function(n) {
              var i, a, r = this,
                o = r.chart,
                s = r.getMeta(),
                l = s.data || [],
                u = n || 1;
              for (i = 0, a = l.length; a > i; ++i) l[i].transition(u);
              for (t.canvasHelpers.clipArea(o.ctx, o.chartArea), e(r.getDataset(), o.options) && s.dataset.transition(u).draw(), t.canvasHelpers.unclipArea(o.ctx), i = 0, a = l.length; a > i; ++i) l[i].draw(o.chartArea)
            },
            setHoverStyle: function(t) {
              var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                a = t.custom || {},
                r = t._model;
              r.radius = a.hoverRadius || n.getValueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), r.backgroundColor = a.hoverBackgroundColor || n.getValueAtIndexOrDefault(e.pointHoverBackgroundColor, i, n.getHoverColor(r.backgroundColor)), r.borderColor = a.hoverBorderColor || n.getValueAtIndexOrDefault(e.pointHoverBorderColor, i, n.getHoverColor(r.borderColor)), r.borderWidth = a.hoverBorderWidth || n.getValueAtIndexOrDefault(e.pointHoverBorderWidth, i, r.borderWidth)
            },
            removeHoverStyle: function(t) {
              var e = this,
                i = e.chart.data.datasets[t._datasetIndex],
                a = t._index,
                r = t.custom || {},
                o = t._model;
              void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), o.radius = r.radius || n.getValueAtIndexOrDefault(i.pointRadius, a, e.chart.options.elements.point.radius), o.backgroundColor = e.getPointBackgroundColor(t, a), o.borderColor = e.getPointBorderColor(t, a), o.borderWidth = e.getPointBorderWidth(t, a)
            }
          })
        }
      }, {}],
      19: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          var e = t.helpers;
          t.defaults.polarArea = {
            scale: {
              type: "radialLinear",
              lineArc: !0,
              ticks: {
                beginAtZero: !0
              }
            },
            animation: {
              animateRotate: !0,
              animateScale: !0
            },
            startAngle: -.5 * Math.PI,
            aspectRatio: 1,
            legendCallback: function(t) {
              var e = [];
              e.push('<ul class="' + t.id + '-legend">');
              var n = t.data,
                i = n.datasets,
                a = n.labels;
              if (i.length)
                for (var r = 0; r < i[0].data.length; ++r) e.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'),
                  a[r] && e.push(a[r]), e.push("</li>");
              return e.push("</ul>"), e.join("")
            },
            legend: {
              labels: {
                generateLabels: function(t) {
                  var n = t.data;
                  return n.labels.length && n.datasets.length ? n.labels.map(function(i, a) {
                    var r = t.getDatasetMeta(0),
                      o = n.datasets[0],
                      s = r.data[a],
                      l = s.custom || {},
                      u = e.getValueAtIndexOrDefault,
                      d = t.options.elements.arc,
                      c = l.backgroundColor ? l.backgroundColor : u(o.backgroundColor, a, d.backgroundColor),
                      h = l.borderColor ? l.borderColor : u(o.borderColor, a, d.borderColor),
                      f = l.borderWidth ? l.borderWidth : u(o.borderWidth, a, d.borderWidth);
                    return {
                      text: i,
                      fillStyle: c,
                      strokeStyle: h,
                      lineWidth: f,
                      hidden: isNaN(o.data[a]) || r.data[a].hidden,
                      index: a
                    }
                  }) : []
                }
              },
              onClick: function(t, e) {
                var n, i, a, r = e.index,
                  o = this.chart;
                for (n = 0, i = (o.data.datasets || []).length; i > n; ++n) a = o.getDatasetMeta(n), a.data[r].hidden = !a.data[r].hidden;
                o.update()
              }
            },
            tooltips: {
              callbacks: {
                title: function() {
                  return ""
                },
                label: function(t, e) {
                  return e.labels[t.index] + ": " + t.yLabel
                }
              }
            }
          }, t.controllers.polarArea = t.DatasetController.extend({
            dataElementType: t.elements.Arc,
            linkScales: e.noop,
            update: function(t) {
              var n = this,
                i = n.chart,
                a = i.chartArea,
                r = n.getMeta(),
                o = i.options,
                s = o.elements.arc,
                l = Math.min(a.right - a.left, a.bottom - a.top);
              i.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), i.innerRadius = Math.max(o.cutoutPercentage ? i.outerRadius / 100 * o.cutoutPercentage : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), n.outerRadius = i.outerRadius - i.radiusLength * n.index, n.innerRadius = n.outerRadius - i.radiusLength, r.count = n.countVisibleElements(), e.each(r.data, function(e, i) {
                n.updateElement(e, i, t)
              })
            },
            updateElement: function(t, n, i) {
              for (var a = this, r = a.chart, o = a.getDataset(), s = r.options, l = s.animation, u = r.scale, d = e.getValueAtIndexOrDefault, c = r.data.labels, h = a.calculateCircumference(o.data[n]), f = u.xCenter, g = u.yCenter, m = 0, p = a.getMeta(), v = 0; n > v; ++v) isNaN(o.data[v]) || p.data[v].hidden || ++m;
              var b = s.startAngle,
                y = t.hidden ? 0 : u.getDistanceFromCenterForValue(o.data[n]),
                x = b + h * m,
                k = x + (t.hidden ? 0 : h),
                _ = l.animateScale ? 0 : u.getDistanceFromCenterForValue(o.data[n]);
              e.extend(t, {
                _datasetIndex: a.index,
                _index: n,
                _scale: u,
                _model: {
                  x: f,
                  y: g,
                  innerRadius: 0,
                  outerRadius: i ? _ : y,
                  startAngle: i && l.animateRotate ? b : x,
                  endAngle: i && l.animateRotate ? b : k,
                  label: d(c, n, c[n])
                }
              }), a.removeHoverStyle(t), t.pivot()
            },
            removeHoverStyle: function(e) {
              t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
            },
            countVisibleElements: function() {
              var t = this.getDataset(),
                n = this.getMeta(),
                i = 0;
              return e.each(n.data, function(e, n) {
                isNaN(t.data[n]) || e.hidden || i++
              }), i
            },
            calculateCircumference: function(t) {
              var e = this.getMeta().count;
              return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0
            }
          })
        }
      }, {}],
      20: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          var e = t.helpers;
          t.defaults.radar = {
            aspectRatio: 1,
            scale: {
              type: "radialLinear"
            },
            elements: {
              line: {
                tension: 0
              }
            }
          }, t.controllers.radar = t.DatasetController.extend({
            datasetElementType: t.elements.Line,
            dataElementType: t.elements.Point,
            linkScales: e.noop,
            update: function(t) {
              var n = this,
                i = n.getMeta(),
                a = i.dataset,
                r = i.data,
                o = a.custom || {},
                s = n.getDataset(),
                l = n.chart.options.elements.line,
                u = n.chart.scale;
              void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), e.extend(i.dataset, {
                _datasetIndex: n.index,
                _children: r,
                _loop: !0,
                _model: {
                  tension: o.tension ? o.tension : e.getValueOrDefault(s.lineTension, l.tension),
                  backgroundColor: o.backgroundColor ? o.backgroundColor : s.backgroundColor || l.backgroundColor,
                  borderWidth: o.borderWidth ? o.borderWidth : s.borderWidth || l.borderWidth,
                  borderColor: o.borderColor ? o.borderColor : s.borderColor || l.borderColor,
                  fill: o.fill ? o.fill : void 0 !== s.fill ? s.fill : l.fill,
                  borderCapStyle: o.borderCapStyle ? o.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                  borderDash: o.borderDash ? o.borderDash : s.borderDash || l.borderDash,
                  borderDashOffset: o.borderDashOffset ? o.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                  borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle,
                  scaleTop: u.top,
                  scaleBottom: u.bottom,
                  scaleZero: u.getBasePosition()
                }
              }), i.dataset.pivot(), e.each(r, function(e, i) {
                n.updateElement(e, i, t)
              }, n), n.updateBezierControlPoints()
            },
            updateElement: function(t, n, i) {
              var a = this,
                r = t.custom || {},
                o = a.getDataset(),
                s = a.chart.scale,
                l = a.chart.options.elements.point,
                u = s.getPointPositionForValue(n, o.data[n]);
              e.extend(t, {
                _datasetIndex: a.index,
                _index: n,
                _scale: s,
                _model: {
                  x: i ? s.xCenter : u.x,
                  y: i ? s.yCenter : u.y,
                  tension: r.tension ? r.tension : e.getValueOrDefault(o.lineTension, a.chart.options.elements.line.tension),
                  radius: r.radius ? r.radius : e.getValueAtIndexOrDefault(o.pointRadius, n, l.radius),
                  backgroundColor: r.backgroundColor ? r.backgroundColor : e.getValueAtIndexOrDefault(o.pointBackgroundColor, n, l.backgroundColor),
                  borderColor: r.borderColor ? r.borderColor : e.getValueAtIndexOrDefault(o.pointBorderColor, n, l.borderColor),
                  borderWidth: r.borderWidth ? r.borderWidth : e.getValueAtIndexOrDefault(o.pointBorderWidth, n, l.borderWidth),
                  pointStyle: r.pointStyle ? r.pointStyle : e.getValueAtIndexOrDefault(o.pointStyle, n, l.pointStyle),
                  hitRadius: r.hitRadius ? r.hitRadius : e.getValueAtIndexOrDefault(o.hitRadius, n, l.hitRadius)
                }
              }), t._model.skip = r.skip ? r.skip : isNaN(t._model.x) || isNaN(t._model.y)
            },
            updateBezierControlPoints: function() {
              var t = this.chart.chartArea,
                n = this.getMeta();
              e.each(n.data, function(i, a) {
                var r = i._model,
                  o = e.splineCurve(e.previousItem(n.data, a, !0)._model, r, e.nextItem(n.data, a, !0)._model, r.tension);
                r.controlPointPreviousX = Math.max(Math.min(o.previous.x, t.right), t.left), r.controlPointPreviousY = Math.max(Math.min(o.previous.y, t.bottom), t.top), r.controlPointNextX = Math.max(Math.min(o.next.x, t.right), t.left), r.controlPointNextY = Math.max(Math.min(o.next.y, t.bottom), t.top), i.pivot()
              })
            },
            draw: function(t) {
              var n = this.getMeta(),
                i = t || 1;
              e.each(n.data, function(t) {
                t.transition(i)
              }), n.dataset.transition(i).draw(), e.each(n.data, function(t) {
                t.draw()
              })
            },
            setHoverStyle: function(t) {
              var n = this.chart.data.datasets[t._datasetIndex],
                i = t.custom || {},
                a = t._index,
                r = t._model;
              r.radius = i.hoverRadius ? i.hoverRadius : e.getValueAtIndexOrDefault(n.pointHoverRadius, a, this.chart.options.elements.point.hoverRadius), r.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : e.getValueAtIndexOrDefault(n.pointHoverBackgroundColor, a, e.getHoverColor(r.backgroundColor)), r.borderColor = i.hoverBorderColor ? i.hoverBorderColor : e.getValueAtIndexOrDefault(n.pointHoverBorderColor, a, e.getHoverColor(r.borderColor)), r.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : e.getValueAtIndexOrDefault(n.pointHoverBorderWidth, a, r.borderWidth)
            },
            removeHoverStyle: function(t) {
              var n = this.chart.data.datasets[t._datasetIndex],
                i = t.custom || {},
                a = t._index,
                r = t._model,
                o = this.chart.options.elements.point;
              r.radius = i.radius ? i.radius : e.getValueAtIndexOrDefault(n.radius, a, o.radius), r.backgroundColor = i.backgroundColor ? i.backgroundColor : e.getValueAtIndexOrDefault(n.pointBackgroundColor, a, o.backgroundColor), r.borderColor = i.borderColor ? i.borderColor : e.getValueAtIndexOrDefault(n.pointBorderColor, a, o.borderColor), r.borderWidth = i.borderWidth ? i.borderWidth : e.getValueAtIndexOrDefault(n.pointBorderWidth, a, o.borderWidth)
            }
          })
        }
      }, {}],
      21: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          var e = t.helpers;
          t.defaults.global.animation = {
            duration: 1e3,
            easing: "easeOutQuart",
            onProgress: e.noop,
            onComplete: e.noop
          }, t.Animation = t.Element.extend({
            currentStep: null,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null
          }), t.animationService = {
            frameDuration: 17,
            animations: [],
            dropFrames: 0,
            request: null,
            addAnimation: function(t, e, n, i) {
              var a = this;
              i || (t.animating = !0);
              for (var r = 0; r < a.animations.length; ++r)
                if (a.animations[r].chart === t) return void(a.animations[r].animationObject = e);
              a.animations.push({
                chart: t,
                chartInstance: t,
                animationObject: e
              }), 1 === a.animations.length && a.requestAnimationFrame()
            },
            cancelAnimation: function(t) {
              var n = e.findIndex(this.animations, function(e) {
                return e.chart === t
              }); - 1 !== n && (this.animations.splice(n, 1), t.animating = !1)
            },
            requestAnimationFrame: function() {
              var t = this;
              null === t.request && (t.request = e.requestAnimFrame.call(window, function() {
                t.request = null, t.startDigest()
              }))
            },
            startDigest: function() {
              var t = this,
                e = Date.now(),
                n = 0;
              t.dropFrames > 1 && (n = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1);
              for (var i = 0; i < t.animations.length;) null === t.animations[i].animationObject.currentStep && (t.animations[i].animationObject.currentStep = 0), t.animations[i].animationObject.currentStep += 1 + n, t.animations[i].animationObject.currentStep > t.animations[i].animationObject.numSteps && (t.animations[i].animationObject.currentStep = t.animations[i].animationObject.numSteps), t.animations[i].animationObject.render(t.animations[i].chart, t.animations[i].animationObject), t.animations[i].animationObject.onAnimationProgress && t.animations[i].animationObject.onAnimationProgress.call && t.animations[i].animationObject.onAnimationProgress.call(t.animations[i].chart, t.animations[i]), t.animations[i].animationObject.currentStep === t.animations[i].animationObject.numSteps ? (t.animations[i].animationObject.onAnimationComplete && t.animations[i].animationObject.onAnimationComplete.call && t.animations[i].animationObject.onAnimationComplete.call(t.animations[i].chart, t.animations[i]), t.animations[i].chart.animating = !1, t.animations.splice(i, 1)) : ++i;
              var a = Date.now(),
                r = (a - e) / t.frameDuration;
              t.dropFrames += r, t.animations.length > 0 && t.requestAnimationFrame()
            }
          }
        }
      }, {}],
      22: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          var e = t.canvasHelpers = {};
          e.drawPoint = function(e, n, i, a, r) {
            var o, s, l, u, d, c;
            if ("object" == typeof n && (o = n.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)) return void e.drawImage(n, a - n.width / 2, r - n.height / 2);
            if (!(isNaN(i) || 0 >= i)) {
              switch (n) {
                default: e.beginPath(),
                e.arc(a, r, i, 0, 2 * Math.PI),
                e.closePath(),
                e.fill();
                break;
                case "triangle":
                    e.beginPath(),
                  s = 3 * i / Math.sqrt(3),
                  d = s * Math.sqrt(3) / 2,
                  e.moveTo(a - s / 2, r + d / 3),
                  e.lineTo(a + s / 2, r + d / 3),
                  e.lineTo(a, r - 2 * d / 3),
                  e.closePath(),
                  e.fill();
                  break;
                case "rect":
                    c = 1 / Math.SQRT2 * i,
                  e.beginPath(),
                  e.fillRect(a - c, r - c, 2 * c, 2 * c),
                  e.strokeRect(a - c, r - c, 2 * c, 2 * c);
                  break;
                case "rectRounded":
                    var h = i / Math.SQRT2,
                    f = a - h,
                    g = r - h,
                    m = Math.SQRT2 * i;t.helpers.drawRoundedRectangle(e, f, g, m, m, i / 2),
                  e.fill();
                  break;
                case "rectRot":
                    c = 1 / Math.SQRT2 * i,
                  e.beginPath(),
                  e.moveTo(a - c, r),
                  e.lineTo(a, r + c),
                  e.lineTo(a + c, r),
                  e.lineTo(a, r - c),
                  e.closePath(),
                  e.fill();
                  break;
                case "cross":
                    e.beginPath(),
                  e.moveTo(a, r + i),
                  e.lineTo(a, r - i),
                  e.moveTo(a - i, r),
                  e.lineTo(a + i, r),
                  e.closePath();
                  break;
                case "crossRot":
                    e.beginPath(),
                  l = Math.cos(Math.PI / 4) * i,
                  u = Math.sin(Math.PI / 4) * i,
                  e.moveTo(a - l, r - u),
                  e.lineTo(a + l, r + u),
                  e.moveTo(a - l, r + u),
                  e.lineTo(a + l, r - u),
                  e.closePath();
                  break;
                case "star":
                    e.beginPath(),
                  e.moveTo(a, r + i),
                  e.lineTo(a, r - i),
                  e.moveTo(a - i, r),
                  e.lineTo(a + i, r),
                  l = Math.cos(Math.PI / 4) * i,
                  u = Math.sin(Math.PI / 4) * i,
                  e.moveTo(a - l, r - u),
                  e.lineTo(a + l, r + u),
                  e.moveTo(a - l, r + u),
                  e.lineTo(a + l, r - u),
                  e.closePath();
                  break;
                case "line":
                    e.beginPath(),
                  e.moveTo(a - i, r),
                  e.lineTo(a + i, r),
                  e.closePath();
                  break;
                case "dash":
                    e.beginPath(),
                  e.moveTo(a, r),
                  e.lineTo(a + i, r),
                  e.closePath()
              }
              e.stroke()
            }
          }, e.clipArea = function(t, e) {
            t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
          }, e.unclipArea = function(t) {
            t.restore()
          }
        }
      }, {}],
      23: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          function e(e) {
            e = e || {};
            var n = e.data = e.data || {};
            return n.datasets = n.datasets || [], n.labels = n.labels || [], e.options = i.configMerge(t.defaults.global, t.defaults[e.type], e.options || {}), e
          }

          function n(t) {
            var e = t.options;
            e.scale ? t.scale.options = e.scale : e.scales && e.scales.xAxes.concat(e.scales.yAxes).forEach(function(e) {
              t.scales[e.id].options = e
            }), t.tooltip._options = e.tooltips
          }
          var i = t.helpers,
            a = t.plugins,
            r = t.platform;
          t.types = {}, t.instances = {}, t.controllers = {}, i.extend(t.prototype, {
            construct: function(n, a) {
              var o = this;
              a = e(a);
              var s = r.acquireContext(n, a),
                l = s && s.canvas,
                u = l && l.height,
                d = l && l.width;
              return o.id = i.uid(), o.ctx = s, o.canvas = l, o.config = a, o.width = d, o.height = u, o.aspectRatio = u ? d / u : null, o.options = a.options, o._bufferedRender = !1, o.chart = o, o.controller = o, t.instances[o.id] = o, Object.defineProperty(o, "data", {
                get: function() {
                  return o.config.data
                }
              }), s && l ? (o.initialize(), void o.update()) : void console.error("Failed to create chart: can't acquire context from the given item")
            },
            initialize: function() {
              var t = this;
              return a.notify(t, "beforeInit"), i.retinaScale(t), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildScales(), t.initToolTip(), a.notify(t, "afterInit"), t
            },
            clear: function() {
              return i.clear(this), this
            },
            stop: function() {
              return t.animationService.cancelAnimation(this), this
            },
            resize: function(t) {
              var e = this,
                n = e.options,
                r = e.canvas,
                o = n.maintainAspectRatio && e.aspectRatio || null,
                s = Math.floor(i.getMaximumWidth(r)),
                l = Math.floor(o ? s / o : i.getMaximumHeight(r));
              if ((e.width !== s || e.height !== l) && (r.width = e.width = s, r.height = e.height = l, r.style.width = s + "px", r.style.height = l + "px", i.retinaScale(e), !t)) {
                var u = {
                  width: s,
                  height: l
                };
                a.notify(e, "resize", [u]), e.options.onResize && e.options.onResize(e, u), e.stop(), e.update(e.options.responsiveAnimationDuration)
              }
            },
            ensureScalesHaveIDs: function() {
              var t = this.options,
                e = t.scales || {},
                n = t.scale;
              i.each(e.xAxes, function(t, e) {
                t.id = t.id || "x-axis-" + e
              }), i.each(e.yAxes, function(t, e) {
                t.id = t.id || "y-axis-" + e
              }), n && (n.id = n.id || "scale")
            },
            buildScales: function() {
              var e = this,
                n = e.options,
                a = e.scales = {},
                r = [];
              n.scales && (r = r.concat((n.scales.xAxes || []).map(function(t) {
                return {
                  options: t,
                  dtype: "category"
                }
              }), (n.scales.yAxes || []).map(function(t) {
                return {
                  options: t,
                  dtype: "linear"
                }
              }))), n.scale && r.push({
                options: n.scale,
                dtype: "radialLinear",
                isDefault: !0
              }), i.each(r, function(n) {
                var r = n.options,
                  o = i.getValueOrDefault(r.type, n.dtype),
                  s = t.scaleService.getScaleConstructor(o);
                if (s) {
                  var l = new s({
                    id: r.id,
                    options: r,
                    ctx: e.ctx,
                    chart: e
                  });
                  a[l.id] = l, n.isDefault && (e.scale = l)
                }
              }), t.scaleService.addScalesToLayout(this)
            },
            buildOrUpdateControllers: function() {
              var e = this,
                n = [],
                a = [];
              if (i.each(e.data.datasets, function(i, r) {
                  var o = e.getDatasetMeta(r);
                  o.type || (o.type = i.type || e.config.type), n.push(o.type), o.controller ? o.controller.updateIndex(r) : (o.controller = new t.controllers[o.type](e, r), a.push(o.controller))
                }, e), n.length > 1)
                for (var r = 1; r < n.length; r++)
                  if (n[r] !== n[r - 1]) {
                    e.isCombo = !0;
                    break
                  }
              return a
            },
            resetElements: function() {
              var t = this;
              i.each(t.data.datasets, function(e, n) {
                t.getDatasetMeta(n).controller.reset()
              }, t)
            },
            reset: function() {
              this.resetElements(), this.tooltip.initialize()
            },
            update: function(t, e) {
              var r = this;
              if (n(r), a.notify(r, "beforeUpdate") !== !1) {
                r.tooltip._data = r.data;
                var o = r.buildOrUpdateControllers();
                i.each(r.data.datasets, function(t, e) {
                  r.getDatasetMeta(e).controller.buildOrUpdateElements()
                }, r), r.updateLayout(), i.each(o, function(t) {
                  t.reset()
                }), r.updateDatasets(), a.notify(r, "afterUpdate"), r._bufferedRender ? r._bufferedRequest = {
                  lazy: e,
                  duration: t
                } : r.render(t, e)
              }
            },
            updateLayout: function() {
              var e = this;
              a.notify(e, "beforeLayout") !== !1 && (t.layoutService.update(this, this.width, this.height), a.notify(e, "afterScaleUpdate"), a.notify(e, "afterLayout"))
            },
            updateDatasets: function() {
              var t = this;
              if (a.notify(t, "beforeDatasetsUpdate") !== !1) {
                for (var e = 0, n = t.data.datasets.length; n > e; ++e) t.getDatasetMeta(e).controller.update();
                a.notify(t, "afterDatasetsUpdate")
              }
            },
            render: function(e, n) {
              var r = this;
              if (a.notify(r, "beforeRender") !== !1) {
                var o = r.options.animation,
                  s = function() {
                    a.notify(r, "afterRender");
                    var t = o && o.onComplete;
                    t && t.call && t.call(r)
                  };
                if (o && ("undefined" != typeof e && 0 !== e || "undefined" == typeof e && 0 !== o.duration)) {
                  var l = new t.Animation;
                  l.numSteps = (e || o.duration) / 16.66, l.easing = o.easing, l.render = function(t, e) {
                    var n = i.easingEffects[e.easing],
                      a = e.currentStep / e.numSteps,
                      r = n(a);
                    t.draw(r, a, e.currentStep)
                  }, l.onAnimationProgress = o.onProgress, l.onAnimationComplete = s, t.animationService.addAnimation(r, l, e, n)
                } else r.draw(), s();
                return r
              }
            },
            draw: function(t) {
              var e = this;
              e.clear(), (void 0 === t || null === t) && (t = 1), a.notify(e, "beforeDraw", [t]) !== !1 && (i.each(e.boxes, function(t) {
                t.draw(e.chartArea)
              }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e.tooltip.transition(t).draw(), a.notify(e, "afterDraw", [t]))
            },
            drawDatasets: function(t) {
              var e = this;
              a.notify(e, "beforeDatasetsDraw", [t]) !== !1 && (i.each(e.data.datasets, function(n, i) {
                e.isDatasetVisible(i) && e.getDatasetMeta(i).controller.draw(t)
              }, e, !0), a.notify(e, "afterDatasetsDraw", [t]))
            },
            getElementAtEvent: function(e) {
              return t.Interaction.modes.single(this, e)
            },
            getElementsAtEvent: function(e) {
              return t.Interaction.modes.label(this, e, {
                intersect: !0
              })
            },
            getElementsAtXAxis: function(e) {
              return t.Interaction.modes["x-axis"](this, e, {
                intersect: !0
              })
            },
            getElementsAtEventForMode: function(e, n, i) {
              var a = t.Interaction.modes[n];
              return "function" == typeof a ? a(this, e, i) : []
            },
            getDatasetAtEvent: function(e) {
              return t.Interaction.modes.dataset(this, e, {
                intersect: !0
              })
            },
            getDatasetMeta: function(t) {
              var e = this,
                n = e.data.datasets[t];
              n._meta || (n._meta = {});
              var i = n._meta[e.id];
              return i || (i = n._meta[e.id] = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null
              }), i
            },
            getVisibleDatasetCount: function() {
              for (var t = 0, e = 0, n = this.data.datasets.length; n > e; ++e) this.isDatasetVisible(e) && t++;
              return t
            },
            isDatasetVisible: function(t) {
              var e = this.getDatasetMeta(t);
              return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
            },
            generateLegend: function() {
              return this.options.legendCallback(this)
            },
            destroy: function() {
              var e, n, o, s = this,
                l = s.canvas;
              for (s.stop(), n = 0, o = s.data.datasets.length; o > n; ++n) e = s.getDatasetMeta(n), e.controller && (e.controller.destroy(), e.controller = null);
              l && (s.unbindEvents(), i.clear(s), r.releaseContext(s.ctx), s.canvas = null, s.ctx = null), a.notify(s, "destroy"), delete t.instances[s.id]
            },
            toBase64Image: function() {
              return this.canvas.toDataURL.apply(this.canvas, arguments)
            },
            initToolTip: function() {
              var e = this;
              e.tooltip = new t.Tooltip({
                _chart: e,
                _chartInstance: e,
                _data: e.data,
                _options: e.options.tooltips
              }, e), e.tooltip.initialize()
            },
            bindEvents: function() {
              var t = this,
                e = t._listeners = {},
                n = function() {
                  t.eventHandler.apply(t, arguments)
                };
              i.each(t.options.events, function(i) {
                r.addEventListener(t, i, n), e[i] = n
              }), t.options.responsive && (n = function() {
                t.resize()
              }, r.addEventListener(t, "resize", n), e.resize = n)
            },
            unbindEvents: function() {
              var t = this,
                e = t._listeners;
              e && (delete t._listeners, i.each(e, function(e, n) {
                r.removeEventListener(t, n, e)
              }))
            },
            updateHoverStyle: function(t, e, n) {
              var i, a, r, o = n ? "setHoverStyle" : "removeHoverStyle";
              for (a = 0, r = t.length; r > a; ++a) i = t[a], i && this.getDatasetMeta(i._datasetIndex).controller[o](i)
            },
            eventHandler: function(t) {
              var e = this,
                n = e.tooltip;
              if (a.notify(e, "beforeEvent", [t]) !== !1) {
                e._bufferedRender = !0, e._bufferedRequest = null;
                var i = e.handleEvent(t);
                i |= n && n.handleEvent(t), a.notify(e, "afterEvent", [t]);
                var r = e._bufferedRequest;
                return r ? e.render(r.duration, r.lazy) : i && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e
              }
            },
            handleEvent: function(t) {
              var e = this,
                n = e.options || {},
                a = n.hover,
                r = !1;
              return e.lastActive = e.lastActive || [], "mouseout" === t.type ? e.active = [] : e.active = e.getElementsAtEventForMode(t, a.mode, a), a.onHover && a.onHover.call(e, t["native"], e.active), ("mouseup" === t.type || "click" === t.type) && n.onClick && n.onClick.call(e, t["native"], e.active), e.lastActive.length && e.updateHoverStyle(e.lastActive, a.mode, !1), e.active.length && a.mode && e.updateHoverStyle(e.active, a.mode, !0), r = !i.arrayEquals(e.active, e.lastActive), e.lastActive = e.active, r
            }
          }), t.Controller = t
        }
      }, {}],
      24: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          function e(t, e) {
            return t._chartjs ? void t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
              configurable: !0,
              enumerable: !1,
              value: {
                listeners: [e]
              }
            }), void a.forEach(function(e) {
              var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                a = t[e];
              Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                value: function() {
                  var e = Array.prototype.slice.call(arguments),
                    r = a.apply(this, e);
                  return i.each(t._chartjs.listeners, function(t) {
                    "function" == typeof t[n] && t[n].apply(t, e)
                  }), r
                }
              })
            }))
          }

          function n(t, e) {
            var n = t._chartjs;
            if (n) {
              var i = n.listeners,
                r = i.indexOf(e); - 1 !== r && i.splice(r, 1), i.length > 0 || (a.forEach(function(e) {
                delete t[e]
              }), delete t._chartjs)
            }
          }
          var i = t.helpers,
            a = ["push", "pop", "shift", "splice", "unshift"];
          t.DatasetController = function(t, e) {
            this.initialize(t, e)
          }, i.extend(t.DatasetController.prototype, {
            datasetElementType: null,
            dataElementType: null,
            initialize: function(t, e) {
              var n = this;
              n.chart = t, n.index = e, n.linkScales(), n.addElements()
            },
            updateIndex: function(t) {
              this.index = t
            },
            linkScales: function() {
              var t = this,
                e = t.getMeta(),
                n = t.getDataset();
              null === e.xAxisID && (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id), null === e.yAxisID && (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id)
            },
            getDataset: function() {
              return this.chart.data.datasets[this.index]
            },
            getMeta: function() {
              return this.chart.getDatasetMeta(this.index)
            },
            getScaleForId: function(t) {
              return this.chart.scales[t]
            },
            reset: function() {
              this.update(!0)
            },
            destroy: function() {
              this._data && n(this._data, this)
            },
            createMetaDataset: function() {
              var t = this,
                e = t.datasetElementType;
              return e && new e({
                _chart: t.chart,
                _datasetIndex: t.index
              })
            },
            createMetaData: function(t) {
              var e = this,
                n = e.dataElementType;
              return n && new n({
                _chart: e.chart,
                _datasetIndex: e.index,
                _index: t
              })
            },
            addElements: function() {
              var t, e, n = this,
                i = n.getMeta(),
                a = n.getDataset().data || [],
                r = i.data;
              for (t = 0, e = a.length; e > t; ++t) r[t] = r[t] || n.createMetaData(t);
              i.dataset = i.dataset || n.createMetaDataset()
            },
            addElementAndReset: function(t) {
              var e = this.createMetaData(t);
              this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
            },
            buildOrUpdateElements: function() {
              var t = this,
                i = t.getDataset(),
                a = i.data || (i.data = []);
              t._data !== a && (t._data && n(t._data, t), e(a, t), t._data = a), t.resyncElements()
            },
            update: i.noop,
            draw: function(t) {
              var e, n, i = t || 1,
                a = this.getMeta().data;
              for (e = 0, n = a.length; n > e; ++e) a[e].transition(i).draw()
            },
            removeHoverStyle: function(t, e) {
              var n = this.chart.data.datasets[t._datasetIndex],
                a = t._index,
                r = t.custom || {},
                o = i.getValueAtIndexOrDefault,
                s = t._model;
              s.backgroundColor = r.backgroundColor ? r.backgroundColor : o(n.backgroundColor, a, e.backgroundColor), s.borderColor = r.borderColor ? r.borderColor : o(n.borderColor, a, e.borderColor), s.borderWidth = r.borderWidth ? r.borderWidth : o(n.borderWidth, a, e.borderWidth)
            },
            setHoverStyle: function(t) {
              var e = this.chart.data.datasets[t._datasetIndex],
                n = t._index,
                a = t.custom || {},
                r = i.getValueAtIndexOrDefault,
                o = i.getHoverColor,
                s = t._model;
              s.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : r(e.hoverBackgroundColor, n, o(s.backgroundColor)), s.borderColor = a.hoverBorderColor ? a.hoverBorderColor : r(e.hoverBorderColor, n, o(s.borderColor)), s.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : r(e.hoverBorderWidth, n, s.borderWidth)
            },
            resyncElements: function() {
              var t = this,
                e = t.getMeta(),
                n = t.getDataset().data,
                i = e.data.length,
                a = n.length;
              i > a ? e.data.splice(a, i - a) : a > i && t.insertElements(i, a - i)
            },
            insertElements: function(t, e) {
              for (var n = 0; e > n; ++n) this.addElementAndReset(t + n)
            },
            onDataPush: function() {
              this.insertElements(this.getDataset().data.length - 1, arguments.length)
            },
            onDataPop: function() {
              this.getMeta().data.pop()
            },
            onDataShift: function() {
              this.getMeta().data.shift()
            },
            onDataSplice: function(t, e) {
              this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
            },
            onDataUnshift: function() {
              this.insertElements(0, arguments.length)
            }
          }), t.DatasetController.extend = i.inherits
        }
      }, {}],
      25: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          var e = t.helpers;
          t.elements = {}, t.Element = function(t) {
            e.extend(this, t), this.initialize.apply(this, arguments)
          }, e.extend(t.Element.prototype, {
            initialize: function() {
              this.hidden = !1
            },
            pivot: function() {
              var t = this;
              return t._view || (t._view = e.clone(t._model)), t._start = e.clone(t._view), t
            },
            transition: function(t) {
              var n = this;
              return n._view || (n._view = e.clone(n._model)), 1 === t ? (n._view = n._model, n._start = null, n) : (n._start || n.pivot(), e.each(n._model, function(i, a) {
                if ("_" === a[0]);
                else if (n._view.hasOwnProperty(a))
                  if (i === n._view[a]);
                  else if ("string" == typeof i) try {
                  var r = e.color(n._model[a]).mix(e.color(n._start[a]), t);
                  n._view[a] = r.rgbString()
                } catch (o) {
                  n._view[a] = i
                } else if ("number" == typeof i) {
                  var s = void 0 !== n._start[a] && isNaN(n._start[a]) === !1 ? n._start[a] : 0;
                  n._view[a] = (n._model[a] - s) * t + s
                } else n._view[a] = i;
                else "number" != typeof i || isNaN(n._view[a]) ? n._view[a] = i : n._view[a] = i * t
              }, n), n)
            },
            tooltipPosition: function() {
              return {
                x: this._model.x,
                y: this._model.y
              }
            },
            hasValue: function() {
              return e.isNumber(this._model.x) && e.isNumber(this._model.y)
            }
          }), t.Element.extend = e.inherits
        }
      }, {}],
      26: [function(t, e, n) {
        "use strict";
        var i = t(2);
        e.exports = function(t) {
          function e(t, e, n) {
            var i;
            return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i
          }

          function n(t) {
            return void 0 !== t && null !== t && "none" !== t
          }

          function a(t, i, a) {
            var r = document.defaultView,
              o = t.parentNode,
              s = r.getComputedStyle(t)[i],
              l = r.getComputedStyle(o)[i],
              u = n(s),
              d = n(l),
              c = Number.POSITIVE_INFINITY;
            return u || d ? Math.min(u ? e(s, t, a) : c, d ? e(l, o, a) : c) : "none"
          }
          var r = t.helpers = {};
          r.each = function(t, e, n, i) {
            var a, o;
            if (r.isArray(t))
              if (o = t.length, i)
                for (a = o - 1; a >= 0; a--) e.call(n, t[a], a);
              else
                for (a = 0; o > a; a++) e.call(n, t[a], a);
            else if ("object" == typeof t) {
              var s = Object.keys(t);
              for (o = s.length, a = 0; o > a; a++) e.call(n, t[s[a]], s[a])
            }
          }, r.clone = function(t) {
            var e = {};
            return r.each(t, function(t, n) {
              r.isArray(t) ? e[n] = t.slice(0) : "object" == typeof t && null !== t ? e[n] = r.clone(t) : e[n] = t
            }), e
          }, r.extend = function(t) {
            for (var e = function(e, n) {
                t[n] = e
              }, n = 1, i = arguments.length; i > n; n++) r.each(arguments[n], e);
            return t
          }, r.configMerge = function(e) {
            var n = r.clone(e);
            return r.each(Array.prototype.slice.call(arguments, 1), function(e) {
              r.each(e, function(e, i) {
                var a = n.hasOwnProperty(i),
                  o = a ? n[i] : {};
                "scales" === i ? n[i] = r.scaleMerge(o, e) : "scale" === i ? n[i] = r.configMerge(o, t.scaleService.getScaleDefaults(e.type), e) : !a || "object" != typeof o || r.isArray(o) || null === o || "object" != typeof e || r.isArray(e) ? n[i] = e : n[i] = r.configMerge(o, e)
              })
            }), n
          }, r.scaleMerge = function(e, n) {
            var i = r.clone(e);
            return r.each(n, function(e, n) {
              "xAxes" === n || "yAxes" === n ? i.hasOwnProperty(n) ? r.each(e, function(e, a) {
                var o = r.getValueOrDefault(e.type, "xAxes" === n ? "category" : "linear"),
                  s = t.scaleService.getScaleDefaults(o);
                a >= i[n].length || !i[n][a].type ? i[n].push(r.configMerge(s, e)) : e.type && e.type !== i[n][a].type ? i[n][a] = r.configMerge(i[n][a], s, e) : i[n][a] = r.configMerge(i[n][a], e)
              }) : (i[n] = [], r.each(e, function(e) {
                var a = r.getValueOrDefault(e.type, "xAxes" === n ? "category" : "linear");
                i[n].push(r.configMerge(t.scaleService.getScaleDefaults(a), e))
              })) : i.hasOwnProperty(n) && "object" == typeof i[n] && null !== i[n] && "object" == typeof e ? i[n] = r.configMerge(i[n], e) : i[n] = e
            }), i
          }, r.getValueAtIndexOrDefault = function(t, e, n) {
            return void 0 === t || null === t ? n : r.isArray(t) ? e < t.length ? t[e] : n : t
          }, r.getValueOrDefault = function(t, e) {
            return void 0 === t ? e : t
          }, r.indexOf = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
          } : function(t, e) {
            for (var n = 0, i = t.length; i > n; ++n)
              if (t[n] === e) return n;
            return -1
          }, r.where = function(t, e) {
            if (r.isArray(t) && Array.prototype.filter) return t.filter(e);
            var n = [];
            return r.each(t, function(t) {
              e(t) && n.push(t)
            }), n
          }, r.findIndex = Array.prototype.findIndex ? function(t, e, n) {
            return t.findIndex(e, n)
          } : function(t, e, n) {
            n = void 0 === n ? t : n;
            for (var i = 0, a = t.length; a > i; ++i)
              if (e.call(n, t[i], i, t)) return i;
            return -1
          }, r.findNextWhere = function(t, e, n) {
            (void 0 === n || null === n) && (n = -1);
            for (var i = n + 1; i < t.length; i++) {
              var a = t[i];
              if (e(a)) return a
            }
          }, r.findPreviousWhere = function(t, e, n) {
            (void 0 === n || null === n) && (n = t.length);
            for (var i = n - 1; i >= 0; i--) {
              var a = t[i];
              if (e(a)) return a
            }
          }, r.inherits = function(t) {
            var e = this,
              n = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                return e.apply(this, arguments)
              },
              i = function() {
                this.constructor = n
              };
            return i.prototype = e.prototype, n.prototype = new i, n.extend = r.inherits, t && r.extend(n.prototype, t), n.__super__ = e.prototype, n
          }, r.noop = function() {}, r.uid = function() {
            var t = 0;
            return function() {
              return t++
            }
          }(), r.isNumber = function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
          }, r.almostEquals = function(t, e, n) {
            return Math.abs(t - e) < n
          }, r.almostWhole = function(t, e) {
            var n = Math.round(t);
            return t > n - e && n + e > t
          }, r.max = function(t) {
            return t.reduce(function(t, e) {
              return isNaN(e) ? t : Math.max(t, e)
            }, Number.NEGATIVE_INFINITY)
          }, r.min = function(t) {
            return t.reduce(function(t, e) {
              return isNaN(e) ? t : Math.min(t, e)
            }, Number.POSITIVE_INFINITY)
          }, r.sign = Math.sign ? function(t) {
            return Math.sign(t)
          } : function(t) {
            return t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1
          }, r.log10 = Math.log10 ? function(t) {
            return Math.log10(t)
          } : function(t) {
            return Math.log(t) / Math.LN10
          }, r.toRadians = function(t) {
            return t * (Math.PI / 180)
          }, r.toDegrees = function(t) {
            return t * (180 / Math.PI)
          }, r.getAngleFromPoint = function(t, e) {
            var n = e.x - t.x,
              i = e.y - t.y,
              a = Math.sqrt(n * n + i * i),
              r = Math.atan2(i, n);
            return r < -.5 * Math.PI && (r += 2 * Math.PI), {
              angle: r,
              distance: a
            }
          }, r.distanceBetweenPoints = function(t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
          }, r.aliasPixel = function(t) {
            return t % 2 === 0 ? 0 : .5
          }, r.splineCurve = function(t, e, n, i) {
            var a = t.skip ? e : t,
              r = e,
              o = n.skip ? e : n,
              s = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
              l = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
              u = s / (s + l),
              d = l / (s + l);
            u = isNaN(u) ? 0 : u, d = isNaN(d) ? 0 : d;
            var c = i * u,
              h = i * d;
            return {
              previous: {
                x: r.x - c * (o.x - a.x),
                y: r.y - c * (o.y - a.y)
              },
              next: {
                x: r.x + h * (o.x - a.x),
                y: r.y + h * (o.y - a.y)
              }
            }
          }, r.EPSILON = Number.EPSILON || 1e-14, r.splineCurveMonotone = function(t) {
            var e, n, i, a, o = (t || []).map(function(t) {
                return {
                  model: t._model,
                  deltaK: 0,
                  mK: 0
                }
              }),
              s = o.length;
            for (e = 0; s > e; ++e)
              if (i = o[e], !i.model.skip) {
                if (n = e > 0 ? o[e - 1] : null, a = s - 1 > e ? o[e + 1] : null, a && !a.model.skip) {
                  var l = a.model.x - i.model.x;
                  i.deltaK = 0 !== l ? (a.model.y - i.model.y) / l : 0
                }!n || n.model.skip ? i.mK = i.deltaK : !a || a.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2
              }
            var u, d, c, h;
            for (e = 0; s - 1 > e; ++e) i = o[e], a = o[e + 1], i.model.skip || a.model.skip || (r.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = a.mK = 0 : (u = i.mK / i.deltaK, d = a.mK / i.deltaK, h = Math.pow(u, 2) + Math.pow(d, 2), 9 >= h || (c = 3 / Math.sqrt(h), i.mK = u * c * i.deltaK, a.mK = d * c * i.deltaK)));
            var f;
            for (e = 0; s > e; ++e) i = o[e], i.model.skip || (n = e > 0 ? o[e - 1] : null, a = s - 1 > e ? o[e + 1] : null, n && !n.model.skip && (f = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - f, i.model.controlPointPreviousY = i.model.y - f * i.mK), a && !a.model.skip && (f = (a.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + f, i.model.controlPointNextY = i.model.y + f * i.mK))
          }, r.nextItem = function(t, e, n) {
            return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
          }, r.previousItem = function(t, e, n) {
            return n ? 0 >= e ? t[t.length - 1] : t[e - 1] : 0 >= e ? t[0] : t[e - 1]
          }, r.niceNum = function(t, e) {
            var n, i = Math.floor(r.log10(t)),
              a = t / Math.pow(10, i);
            return n = e ? 1.5 > a ? 1 : 3 > a ? 2 : 7 > a ? 5 : 10 : 1 >= a ? 1 : 2 >= a ? 2 : 5 >= a ? 5 : 10, n * Math.pow(10, i)
          };
          var o = r.easingEffects = {
            linear: function(t) {
              return t
            },
            easeInQuad: function(t) {
              return t * t
            },
            easeOutQuad: function(t) {
              return -1 * t * (t - 2)
            },
            easeInOutQuad: function(t) {
              return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1)
            },
            easeInCubic: function(t) {
              return t * t * t
            },
            easeOutCubic: function(t) {
              return 1 * ((t = t / 1 - 1) * t * t + 1)
            },
            easeInOutCubic: function(t) {
              return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            easeInQuart: function(t) {
              return t * t * t * t
            },
            easeOutQuart: function(t) {
              return -1 * ((t = t / 1 - 1) * t * t * t - 1)
            },
            easeInOutQuart: function(t) {
              return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)
            },
            easeInQuint: function(t) {
              return 1 * (t /= 1) * t * t * t * t
            },
            easeOutQuint: function(t) {
              return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
            },
            easeInOutQuint: function(t) {
              return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            easeInSine: function(t) {
              return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
            },
            easeOutSine: function(t) {
              return 1 * Math.sin(t / 1 * (Math.PI / 2))
            },
            easeInOutSine: function(t) {
              return -0.5 * (Math.cos(Math.PI * t / 1) - 1)
            },
            easeInExpo: function(t) {
              return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
            },
            easeOutExpo: function(t) {
              return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
            },
            easeInOutExpo: function(t) {
              return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
            },
            easeInCirc: function(t) {
              return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
            },
            easeOutCirc: function(t) {
              return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
            },
            easeInOutCirc: function(t) {
              return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            easeInElastic: function(t) {
              var e = 1.70158,
                n = 0,
                i = 1;
              return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n)))
            },
            easeOutElastic: function(t) {
              var e = 1.70158,
                n = 0,
                i = 1;
              return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / n) + 1)
            },
            easeInOutElastic: function(t) {
              var e = 1.70158,
                n = 0,
                i = 1;
              return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (n || (n = 1 * (.3 * 1.5)), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), 1 > t ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n) * .5 + 1)
            },
            easeInBack: function(t) {
              var e = 1.70158;
              return 1 * (t /= 1) * t * ((e + 1) * t - e)
            },
            easeOutBack: function(t) {
              var e = 1.70158;
              return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
            },
            easeInOutBack: function(t) {
              var e = 1.70158;
              return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
            },
            easeInBounce: function(t) {
              return 1 - o.easeOutBounce(1 - t)
            },
            easeOutBounce: function(t) {
              return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            },
            easeInOutBounce: function(t) {
              return .5 > t ? .5 * o.easeInBounce(2 * t) : .5 * o.easeOutBounce(2 * t - 1) + .5
            }
          };
          r.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
              return window.setTimeout(t, 1e3 / 60)
            }
          }(), r.getRelativePosition = function(t, e) {
            var n, i, a = t.originalEvent || t,
              o = t.currentTarget || t.srcElement,
              s = o.getBoundingClientRect(),
              l = a.touches;
            l && l.length > 0 ? (n = l[0].clientX, i = l[0].clientY) : (n = a.clientX, i = a.clientY);
            var u = parseFloat(r.getStyle(o, "padding-left")),
              d = parseFloat(r.getStyle(o, "padding-top")),
              c = parseFloat(r.getStyle(o, "padding-right")),
              h = parseFloat(r.getStyle(o, "padding-bottom")),
              f = s.right - s.left - u - c,
              g = s.bottom - s.top - d - h;
            return n = Math.round((n - s.left - u) / f * o.width / e.currentDevicePixelRatio), i = Math.round((i - s.top - d) / g * o.height / e.currentDevicePixelRatio), {
              x: n,
              y: i
            }
          }, r.addEvent = function(t, e, n) {
            t.addEventListener ? t.addEventListener(e, n) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n
          }, r.removeEvent = function(t, e, n) {
            t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = r.noop
          }, r.getConstraintWidth = function(t) {
            return a(t, "max-width", "clientWidth")
          }, r.getConstraintHeight = function(t) {
            return a(t, "max-height", "clientHeight")
          }, r.getMaximumWidth = function(t) {
            var e = t.parentNode,
              n = parseInt(r.getStyle(e, "padding-left"), 10),
              i = parseInt(r.getStyle(e, "padding-right"), 10),
              a = e.clientWidth - n - i,
              o = r.getConstraintWidth(t);
            return isNaN(o) ? a : Math.min(a, o)
          }, r.getMaximumHeight = function(t) {
            var e = t.parentNode,
              n = parseInt(r.getStyle(e, "padding-top"), 10),
              i = parseInt(r.getStyle(e, "padding-bottom"), 10),
              a = e.clientHeight - n - i,
              o = r.getConstraintHeight(t);
            return isNaN(o) ? a : Math.min(a, o)
          }, r.getStyle = function(t, e) {
            return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
          }, r.retinaScale = function(t) {
            var e = t.currentDevicePixelRatio = window.devicePixelRatio || 1;
            if (1 !== e) {
              var n = t.canvas,
                i = t.height,
                a = t.width;
              n.height = i * e, n.width = a * e, t.ctx.scale(e, e), n.style.height = i + "px", n.style.width = a + "px"
            }
          }, r.clear = function(t) {
            t.ctx.clearRect(0, 0, t.width, t.height)
          }, r.fontString = function(t, e, n) {
            return e + " " + t + "px " + n
          }, r.longestText = function(t, e, n, i) {
            i = i || {};
            var a = i.data = i.data || {},
              o = i.garbageCollect = i.garbageCollect || [];
            i.font !== e && (a = i.data = {}, o = i.garbageCollect = [], i.font = e), t.font = e;
            var s = 0;
            r.each(n, function(e) {
              void 0 !== e && null !== e && r.isArray(e) !== !0 ? s = r.measureText(t, a, o, s, e) : r.isArray(e) && r.each(e, function(e) {
                void 0 === e || null === e || r.isArray(e) || (s = r.measureText(t, a, o, s, e))
              })
            });
            var l = o.length / 2;
            if (l > n.length) {
              for (var u = 0; l > u; u++) delete a[o[u]];
              o.splice(0, l)
            }
            return s
          }, r.measureText = function(t, e, n, i, a) {
            var r = e[a];
            return r || (r = e[a] = t.measureText(a).width, n.push(a)), r > i && (i = r), i
          }, r.numberOfLabelLines = function(t) {
            var e = 1;
            return r.each(t, function(t) {
              r.isArray(t) && t.length > e && (e = t.length)
            }), e
          }, r.drawRoundedRectangle = function(t, e, n, i, a, r) {
            t.beginPath(), t.moveTo(e + r, n), t.lineTo(e + i - r, n), t.quadraticCurveTo(e + i, n, e + i, n + r), t.lineTo(e + i, n + a - r), t.quadraticCurveTo(e + i, n + a, e + i - r, n + a), t.lineTo(e + r, n + a), t.quadraticCurveTo(e, n + a, e, n + a - r), t.lineTo(e, n + r), t.quadraticCurveTo(e, n, e + r, n), t.closePath()
          }, r.color = function(e) {
            return i ? i(e instanceof CanvasGradient ? t.defaults.global.defaultColor : e) : (console.error("Color.js not found!"), e)
          }, r.isArray = Array.isArray ? function(t) {
            return Array.isArray(t)
          } : function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
          }, r.arrayEquals = function(t, e) {
            var n, i, a, o;
            if (!t || !e || t.length !== e.length) return !1;
            for (n = 0, i = t.length; i > n; ++n)
              if (a = t[n], o = e[n], a instanceof Array && o instanceof Array) {
                if (!r.arrayEquals(a, o)) return !1
              } else if (a !== o) return !1;
            return !0
          }, r.callCallback = function(t, e, n) {
            t && "function" == typeof t.call && t.apply(n, e)
          }, r.getHoverColor = function(t) {
            return t instanceof CanvasPattern ? t : r.color(t).saturate(.5).darken(.1).rgbString()
          }
        }
      }, {
        2: 2
      }],
      27: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          function e(t, e) {
            return t["native"] ? {
              x: t.x,
              y: t.y
            } : o.getRelativePosition(t, e)
          }

          function n(t, e) {
            var n, i, a, r, o, s = t.data.datasets;
            for (i = 0, r = s.length; r > i; ++i)
              if (t.isDatasetVisible(i))
                for (n = t.getDatasetMeta(i), a = 0, o = n.data.length; o > a; ++a) {
                  var l = n.data[a];
                  l._view.skip || e(l)
                }
          }

          function i(t, e) {
            var i = [];
            return n(t, function(t) {
              t.inRange(e.x, e.y) && i.push(t)
            }), i
          }

          function a(t, e, i, a) {
            var r = Number.POSITIVE_INFINITY,
              s = [];
            return a || (a = o.distanceBetweenPoints), n(t, function(t) {
              if (!i || t.inRange(e.x, e.y)) {
                var n = t.getCenterPoint(),
                  o = a(e, n);
                r > o ? (s = [t], r = o) : o === r && s.push(t)
              }
            }), s
          }

          function r(t, n, r) {
            var o = e(n, t),
              s = function(t, e) {
                return Math.abs(t.x - e.x)
              },
              l = r.intersect ? i(t, o) : a(t, o, !1, s),
              u = [];
            return l.length ? (t.data.datasets.forEach(function(e, n) {
              if (t.isDatasetVisible(n)) {
                var i = t.getDatasetMeta(n),
                  a = i.data[l[0]._index];
                a && !a._view.skip && u.push(a)
              }
            }), u) : []
          }
          var o = t.helpers;
          t.Interaction = {
            modes: {
              single: function(t, i) {
                var a = e(i, t),
                  r = [];
                return n(t, function(t) {
                  return t.inRange(a.x, a.y) ? (r.push(t), r) : void 0
                }), r.slice(0, 1)
              },
              label: r,
              index: r,
              dataset: function(t, n, r) {
                var o = e(n, t),
                  s = r.intersect ? i(t, o) : a(t, o, !1);
                return s.length > 0 && (s = t.getDatasetMeta(s[0]._datasetIndex).data), s
              },
              "x-axis": function(t, e) {
                return r(t, e, !0)
              },
              point: function(t, n) {
                var a = e(n, t);
                return i(t, a)
              },
              nearest: function(t, n, i) {
                var r = e(n, t),
                  o = a(t, r, i.intersect);
                return o.length > 1 && o.sort(function(t, e) {
                  var n = t.getArea(),
                    i = e.getArea(),
                    a = n - i;
                  return 0 === a && (a = t._datasetIndex - e._datasetIndex), a
                }), o.slice(0, 1)
              },
              x: function(t, i, a) {
                var r = e(i, t),
                  o = [],
                  s = !1;
                return n(t, function(t) {
                  t.inXRange(r.x) && o.push(t), t.inRange(r.x, r.y) && (s = !0)
                }), a.intersect && !s && (o = []), o
              },
              y: function(t, i, a) {
                var r = e(i, t),
                  o = [],
                  s = !1;
                return n(t, function(t) {
                  t.inYRange(r.y) && o.push(t), t.inRange(r.x, r.y) && (s = !0)
                }), a.intersect && !s && (o = []), o
              }
            }
          }
        }
      }, {}],
      28: [function(t, e, n) {
        "use strict";
        e.exports = function() {
          var t = function(t, e) {
            return this.construct(t, e), this
          };
          return t.defaults = {
            global: {
              responsive: !0,
              responsiveAnimationDuration: 0,
              maintainAspectRatio: !0,
              events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
              hover: {
                onHover: null,
                mode: "nearest",
                intersect: !0,
                animationDuration: 400
              },
              onClick: null,
              defaultColor: "rgba(0,0,0,0.1)",
              defaultFontColor: "#666",
              defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              defaultFontSize: 12,
              defaultFontStyle: "normal",
              showLines: !0,
              elements: {},
              legendCallback: function(t) {
                var e = [];
                e.push('<ul class="' + t.id + '-legend">');
                for (var n = 0; n < t.data.datasets.length; n++) e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'), t.data.datasets[n].label && e.push(t.data.datasets[n].label), e.push("</li>");
                return e.push("</ul>"), e.join("")
              }
            }
          }, t.Chart = t, t
        }
      }, {}],
      29: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          var e = t.helpers;
          t.layoutService = {
            defaults: {},
            addBox: function(t, e) {
              t.boxes || (t.boxes = []), t.boxes.push(e)
            },
            removeBox: function(t, e) {
              t.boxes && t.boxes.splice(t.boxes.indexOf(e), 1)
            },
            update: function(t, n, i) {
              function a(t) {
                var e, n = t.isHorizontal();
                n ? (e = t.update(t.options.fullWidth ? y : M, S), D -= e.height) : (e = t.update(w, _), M -= e.width), C.push({
                  horizontal: n,
                  minSize: e,
                  box: t
                })
              }

              function r(t) {
                var n = e.findNextWhere(C, function(e) {
                  return e.box === t
                });
                if (n)
                  if (t.isHorizontal()) {
                    var i = {
                      left: Math.max(F, T),
                      right: Math.max(O, P),
                      top: 0,
                      bottom: 0
                    };
                    t.update(t.options.fullWidth ? y : M, x / 2, i)
                  } else t.update(n.minSize.width, D)
              }

              function o(t) {
                var n = e.findNextWhere(C, function(e) {
                    return e.box === t
                  }),
                  i = {
                    left: 0,
                    right: 0,
                    top: R,
                    bottom: L
                  };
                n && t.update(n.minSize.width, D, i)
              }

              function s(t) {
                t.isHorizontal() ? (t.left = t.options.fullWidth ? d : F, t.right = t.options.fullWidth ? n - c : F + M, t.top = N, t.bottom = N + t.height, N = t.bottom) : (t.left = z, t.right = z + t.width, t.top = R, t.bottom = R + D, z = t.right)
              }
              if (t) {
                var l = t.options.layout,
                  u = l ? l.padding : null,
                  d = 0,
                  c = 0,
                  h = 0,
                  f = 0;
                isNaN(u) ? (d = u.left || 0, c = u.right || 0, h = u.top || 0, f = u.bottom || 0) : (d = u, c = u, h = u, f = u);
                var g = e.where(t.boxes, function(t) {
                    return "left" === t.options.position
                  }),
                  m = e.where(t.boxes, function(t) {
                    return "right" === t.options.position
                  }),
                  p = e.where(t.boxes, function(t) {
                    return "top" === t.options.position
                  }),
                  v = e.where(t.boxes, function(t) {
                    return "bottom" === t.options.position
                  }),
                  b = e.where(t.boxes, function(t) {
                    return "chartArea" === t.options.position
                  });
                p.sort(function(t, e) {
                  return (e.options.fullWidth ? 1 : 0) - (t.options.fullWidth ? 1 : 0)
                }), v.sort(function(t, e) {
                  return (t.options.fullWidth ? 1 : 0) - (e.options.fullWidth ? 1 : 0)
                });
                var y = n - d - c,
                  x = i - h - f,
                  k = y / 2,
                  _ = x / 2,
                  w = (n - k) / (g.length + m.length),
                  S = (i - _) / (p.length + v.length),
                  M = y,
                  D = x,
                  C = [];
                e.each(g.concat(m, p, v), a);
                var T = 0,
                  P = 0,
                  I = 0,
                  A = 0;
                e.each(p.concat(v), function(t) {
                  if (t.getPadding) {
                    var e = t.getPadding();
                    T = Math.max(T, e.left), P = Math.max(P, e.right)
                  }
                }), e.each(g.concat(m), function(t) {
                  if (t.getPadding) {
                    var e = t.getPadding();
                    I = Math.max(I, e.top), A = Math.max(A, e.bottom)
                  }
                });
                var F = d,
                  O = c,
                  R = h,
                  L = f;
                e.each(g.concat(m), r), e.each(g, function(t) {
                  F += t.width
                }), e.each(m, function(t) {
                  O += t.width
                }), e.each(p.concat(v), r), e.each(p, function(t) {
                  R += t.height
                }), e.each(v, function(t) {
                  L += t.height
                }), e.each(g.concat(m), o), F = d, O = c, R = h, L = f, e.each(g, function(t) {
                  F += t.width
                }), e.each(m, function(t) {
                  O += t.width
                }), e.each(p, function(t) {
                  R += t.height
                }), e.each(v, function(t) {
                  L += t.height
                });
                var W = Math.max(T - F, 0);
                F += W, O += Math.max(P - O, 0);
                var V = Math.max(I - R, 0);
                R += V, L += Math.max(A - L, 0);
                var Y = i - R - L,
                  B = n - F - O;
                (B !== M || Y !== D) && (e.each(g, function(t) {
                  t.height = Y
                }), e.each(m, function(t) {
                  t.height = Y
                }), e.each(p, function(t) {
                  t.options.fullWidth || (t.width = B)
                }), e.each(v, function(t) {
                  t.options.fullWidth || (t.width = B)
                }), D = Y, M = B);
                var z = d + W,
                  N = h + V;
                e.each(g.concat(p), s), z += M, N += D, e.each(m, s), e.each(v, s), t.chartArea = {
                  left: F,
                  top: R,
                  right: F + M,
                  bottom: R + D
                }, e.each(b, function(e) {
                  e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(M, D)
                })
              }
            }
          }
        }
      }, {}],
      30: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          function e(t, e) {
            return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
          }

          function n(e, n) {
            var i = new t.Legend({
              ctx: e.ctx,
              options: n,
              chart: e
            });
            e.legend = i, t.layoutService.addBox(e, i)
          }
          var i = t.helpers,
            a = i.noop;
          t.defaults.global.legend = {
            display: !0,
            position: "top",
            fullWidth: !0,
            reverse: !1,
            onClick: function(t, e) {
              var n = e.datasetIndex,
                i = this.chart,
                a = i.getDatasetMeta(n);
              a.hidden = null === a.hidden ? !i.data.datasets[n].hidden : null, i.update()
            },
            onHover: null,
            labels: {
              boxWidth: 40,
              padding: 10,
              generateLabels: function(t) {
                var e = t.data;
                return i.isArray(e.datasets) ? e.datasets.map(function(e, n) {
                  return {
                    text: e.label,
                    fillStyle: i.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                    hidden: !t.isDatasetVisible(n),
                    lineCap: e.borderCapStyle,
                    lineDash: e.borderDash,
                    lineDashOffset: e.borderDashOffset,
                    lineJoin: e.borderJoinStyle,
                    lineWidth: e.borderWidth,
                    strokeStyle: e.borderColor,
                    pointStyle: e.pointStyle,
                    datasetIndex: n
                  }
                }, this) : []
              }
            }
          }, t.Legend = t.Element.extend({
            initialize: function(t) {
              i.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
            },
            beforeUpdate: a,
            update: function(t, e, n) {
              var i = this;
              return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
            },
            afterUpdate: a,
            beforeSetDimensions: a,
            setDimensions: function() {
              var t = this;
              t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
              }
            },
            afterSetDimensions: a,
            beforeBuildLabels: a,
            buildLabels: function() {
              var t = this,
                e = t.options.labels,
                n = e.generateLabels.call(t, t.chart);
              e.filter && (n = n.filter(function(n) {
                return e.filter(n, t.chart.data)
              })), t.options.reverse && n.reverse(), t.legendItems = n
            },
            afterBuildLabels: a,
            beforeFit: a,
            fit: function() {
              var n = this,
                a = n.options,
                r = a.labels,
                o = a.display,
                s = n.ctx,
                l = t.defaults.global,
                u = i.getValueOrDefault,
                d = u(r.fontSize, l.defaultFontSize),
                c = u(r.fontStyle, l.defaultFontStyle),
                h = u(r.fontFamily, l.defaultFontFamily),
                f = i.fontString(d, c, h),
                g = n.legendHitBoxes = [],
                m = n.minSize,
                p = n.isHorizontal();
              if (p ? (m.width = n.maxWidth, m.height = o ? 10 : 0) : (m.width = o ? 10 : 0, m.height = n.maxHeight), o)
                if (s.font = f, p) {
                  var v = n.lineWidths = [0],
                    b = n.legendItems.length ? d + r.padding : 0;
                  s.textAlign = "left", s.textBaseline = "top", i.each(n.legendItems, function(t, i) {
                    var a = e(r, d),
                      o = a + d / 2 + s.measureText(t.text).width;
                    v[v.length - 1] + o + r.padding >= n.width && (b += d + r.padding, v[v.length] = n.left), g[i] = {
                      left: 0,
                      top: 0,
                      width: o,
                      height: d
                    }, v[v.length - 1] += o + r.padding
                  }), m.height += b
                } else {
                  var y = r.padding,
                    x = n.columnWidths = [],
                    k = r.padding,
                    _ = 0,
                    w = 0,
                    S = d + y;
                  i.each(n.legendItems, function(t, n) {
                    var i = e(r, d),
                      a = i + d / 2 + s.measureText(t.text).width;
                    w + S > m.height && (k += _ + r.padding, x.push(_), _ = 0, w = 0), _ = Math.max(_, a), w += S, g[n] = {
                      left: 0,
                      top: 0,
                      width: a,
                      height: d
                    }
                  }), k += _, x.push(_), m.width += k
                }
              n.width = m.width, n.height = m.height
            },
            afterFit: a,
            isHorizontal: function() {
              return "top" === this.options.position || "bottom" === this.options.position
            },
            draw: function() {
              var n = this,
                a = n.options,
                r = a.labels,
                o = t.defaults.global,
                s = o.elements.line,
                l = n.width,
                u = n.lineWidths;
              if (a.display) {
                var d, c = n.ctx,
                  h = i.getValueOrDefault,
                  f = h(r.fontColor, o.defaultFontColor),
                  g = h(r.fontSize, o.defaultFontSize),
                  m = h(r.fontStyle, o.defaultFontStyle),
                  p = h(r.fontFamily, o.defaultFontFamily),
                  v = i.fontString(g, m, p);
                c.textAlign = "left", c.textBaseline = "top", c.lineWidth = .5, c.strokeStyle = f, c.fillStyle = f, c.font = v;
                var b = e(r, g),
                  y = n.legendHitBoxes,
                  x = function(e, n, i) {
                    if (!(isNaN(b) || 0 >= b)) {
                      c.save(), c.fillStyle = h(i.fillStyle, o.defaultColor), c.lineCap = h(i.lineCap, s.borderCapStyle), c.lineDashOffset = h(i.lineDashOffset, s.borderDashOffset), c.lineJoin = h(i.lineJoin, s.borderJoinStyle), c.lineWidth = h(i.lineWidth, s.borderWidth), c.strokeStyle = h(i.strokeStyle, o.defaultColor);
                      var r = 0 === h(i.lineWidth, s.borderWidth);
                      if (c.setLineDash && c.setLineDash(h(i.lineDash, s.borderDash)), a.labels && a.labels.usePointStyle) {
                        var l = g * Math.SQRT2 / 2,
                          u = l / Math.SQRT2,
                          d = e + u,
                          f = n + u;
                        t.canvasHelpers.drawPoint(c, i.pointStyle, l, d, f)
                      } else r || c.strokeRect(e, n, b, g), c.fillRect(e, n, b, g);
                      c.restore()
                    }
                  },
                  k = function(t, e, n, i) {
                    c.fillText(n.text, b + g / 2 + t, e), n.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(b + g / 2 + t, e + g / 2), c.lineTo(b + g / 2 + t + i, e + g / 2), c.stroke())
                  },
                  _ = n.isHorizontal();
                d = _ ? {
                  x: n.left + (l - u[0]) / 2,
                  y: n.top + r.padding,
                  line: 0
                } : {
                  x: n.left + r.padding,
                  y: n.top + r.padding,
                  line: 0
                };
                var w = g + r.padding;
                i.each(n.legendItems, function(t, e) {
                  var i = c.measureText(t.text).width,
                    a = b + g / 2 + i,
                    o = d.x,
                    s = d.y;
                  _ ? o + a >= l && (s = d.y += w, d.line++, o = d.x = n.left + (l - u[d.line]) / 2) : s + w > n.bottom && (o = d.x = o + n.columnWidths[d.line] + r.padding, s = d.y = n.top + r.padding, d.line++), x(o, s, t), y[e].left = o, y[e].top = s, k(o, s, t, i), _ ? d.x += a + r.padding : d.y += w
                })
              }
            },
            handleEvent: function(t) {
              var e = this,
                n = e.options,
                i = "mouseup" === t.type ? "click" : t.type,
                a = !1;
              if ("mousemove" === i) {
                if (!n.onHover) return
              } else {
                if ("click" !== i) return;
                if (!n.onClick) return
              }
              var r = t.x,
                o = t.y;
              if (r >= e.left && r <= e.right && o >= e.top && o <= e.bottom)
                for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                  var u = s[l];
                  if (r >= u.left && r <= u.left + u.width && o >= u.top && o <= u.top + u.height) {
                    if ("click" === i) {
                      n.onClick.call(e, t["native"], e.legendItems[l]), a = !0;
                      break
                    }
                    if ("mousemove" === i) {
                      n.onHover.call(e, t["native"], e.legendItems[l]), a = !0;
                      break
                    }
                  }
                }
              return a
            }
          }), t.plugins.register({
            beforeInit: function(t) {
              var e = t.options.legend;
              e && n(t, e)
            },
            beforeUpdate: function(e) {
              var a = e.options.legend;
              a ? (a = i.configMerge(t.defaults.global.legend, a), e.legend ? e.legend.options = a : n(e, a)) : (t.layoutService.removeBox(e, e.legend), delete e.legend)
            },
            afterEvent: function(t, e) {
              var n = t.legend;
              n && n.handleEvent(e)
            }
          })
        }
      }, {}],
      31: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          var e = t.helpers;
          t.defaults.global.plugins = {}, t.plugins = {
            _plugins: [],
            _cacheId: 0,
            register: function(t) {
              var e = this._plugins;
              [].concat(t).forEach(function(t) {
                -1 === e.indexOf(t) && e.push(t)
              }), this._cacheId++
            },
            unregister: function(t) {
              var e = this._plugins;
              [].concat(t).forEach(function(t) {
                var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
              }), this._cacheId++
            },
            clear: function() {
              this._plugins = [], this._cacheId++
            },
            count: function() {
              return this._plugins.length
            },
            getAll: function() {
              return this._plugins
            },
            notify: function(t, e, n) {
              var i, a, r, o, s, l = this.descriptors(t),
                u = l.length;
              for (i = 0; u > i; ++i)
                if (a = l[i], r = a.plugin, s = r[e], "function" == typeof s && (o = [t].concat(n || []), o.push(a.options), s.apply(r, o) === !1)) return !1;
              return !0
            },
            descriptors: function(n) {
              var i = n._plugins || (n._plugins = {});
              if (i.id === this._cacheId) return i.descriptors;
              var a = [],
                r = [],
                o = n && n.config || {},
                s = t.defaults.global.plugins,
                l = o.options && o.options.plugins || {};
              return this._plugins.concat(o.plugins || []).forEach(function(t) {
                var n = a.indexOf(t);
                if (-1 === n) {
                  var i = t.id,
                    o = l[i];
                  o !== !1 && (o === !0 && (o = e.clone(s[i])), a.push(t), r.push({
                    plugin: t,
                    options: o || {}
                  }))
                }
              }), i.descriptors = r, i.id = this._cacheId, r
            }
          }, t.pluginService = t.plugins, t.PluginBase = t.Element.extend({})
        }
      }, {}],
      32: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          function e(t, e, n) {
            return i.isArray(e) ? i.longestText(t, n, e) : t.measureText(e).width
          }

          function n(e) {
            var n = i.getValueOrDefault,
              a = t.defaults.global,
              r = n(e.fontSize, a.defaultFontSize),
              o = n(e.fontStyle, a.defaultFontStyle),
              s = n(e.fontFamily, a.defaultFontFamily);
            return {
              size: r,
              style: o,
              family: s,
              font: i.fontString(r, o, s)
            }
          }
          var i = t.helpers;
          t.defaults.scale = {
            display: !0,
            position: "left",
            gridLines: {
              display: !0,
              color: "rgba(0, 0, 0, 0.1)",
              lineWidth: 1,
              drawBorder: !0,
              drawOnChartArea: !0,
              drawTicks: !0,
              tickMarkLength: 10,
              zeroLineWidth: 1,
              zeroLineColor: "rgba(0,0,0,0.25)",
              offsetGridLines: !1,
              borderDash: [],
              borderDashOffset: 0
            },
            scaleLabel: {
              labelString: "",
              display: !1
            },
            ticks: {
              beginAtZero: !1,
              minRotation: 0,
              maxRotation: 50,
              mirror: !1,
              padding: 0,
              reverse: !1,
              display: !0,
              autoSkip: !0,
              autoSkipPadding: 0,
              labelOffset: 0,
              callback: t.Ticks.formatters.values
            }
          }, t.Scale = t.Element.extend({
            getPadding: function() {
              var t = this;
              return {
                left: t.paddingLeft || 0,
                top: t.paddingTop || 0,
                right: t.paddingRight || 0,
                bottom: t.paddingBottom || 0
              }
            },
            beforeUpdate: function() {
              i.callCallback(this.options.beforeUpdate, [this])
            },
            update: function(t, e, n) {
              var a = this;
              return a.beforeUpdate(), a.maxWidth = t, a.maxHeight = e, a.margins = i.extend({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
              }, n), a.longestTextCache = a.longestTextCache || {}, a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeDataLimits(), a.determineDataLimits(), a.afterDataLimits(), a.beforeBuildTicks(), a.buildTicks(), a.afterBuildTicks(), a.beforeTickToLabelConversion(), a.convertTicksToLabels(), a.afterTickToLabelConversion(), a.beforeCalculateTickRotation(), a.calculateTickRotation(), a.afterCalculateTickRotation(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize
            },
            afterUpdate: function() {
              i.callCallback(this.options.afterUpdate, [this])
            },
            beforeSetDimensions: function() {
              i.callCallback(this.options.beforeSetDimensions, [this])
            },
            setDimensions: function() {
              var t = this;
              t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
            },
            afterSetDimensions: function() {
              i.callCallback(this.options.afterSetDimensions, [this])
            },
            beforeDataLimits: function() {
              i.callCallback(this.options.beforeDataLimits, [this])
            },
            determineDataLimits: i.noop,
            afterDataLimits: function() {
              i.callCallback(this.options.afterDataLimits, [this])
            },
            beforeBuildTicks: function() {
              i.callCallback(this.options.beforeBuildTicks, [this])
            },
            buildTicks: i.noop,
            afterBuildTicks: function() {
              i.callCallback(this.options.afterBuildTicks, [this])
            },
            beforeTickToLabelConversion: function() {
              i.callCallback(this.options.beforeTickToLabelConversion, [this])
            },
            convertTicksToLabels: function() {
              var t = this,
                e = t.options.ticks;
              t.ticks = t.ticks.map(e.userCallback || e.callback)
            },
            afterTickToLabelConversion: function() {
              i.callCallback(this.options.afterTickToLabelConversion, [this])
            },
            beforeCalculateTickRotation: function() {
              i.callCallback(this.options.beforeCalculateTickRotation, [this])
            },
            calculateTickRotation: function() {
              var t = this,
                e = t.ctx,
                a = t.options.ticks,
                r = n(a);
              e.font = r.font;
              var o = a.minRotation || 0;
              if (t.options.display && t.isHorizontal())
                for (var s, l, u = i.longestText(e, r.font, t.ticks, t.longestTextCache), d = u, c = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; d > c && o < a.maxRotation;) {
                  var h = i.toRadians(o);
                  if (s = Math.cos(h), l = Math.sin(h), l * u > t.maxHeight) {
                    o--;
                    break
                  }
                  o++, d = s * u
                }
              t.labelRotation = o
            },
            afterCalculateTickRotation: function() {
              i.callCallback(this.options.afterCalculateTickRotation, [this])
            },
            beforeFit: function() {
              i.callCallback(this.options.beforeFit, [this])
            },
            fit: function() {
              var t = this,
                a = t.minSize = {
                  width: 0,
                  height: 0
                },
                r = t.options,
                o = r.ticks,
                s = r.scaleLabel,
                l = r.gridLines,
                u = r.display,
                d = t.isHorizontal(),
                c = n(o),
                h = 1.5 * n(s).size,
                f = r.gridLines.tickMarkLength;
              if (d ? a.width = t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : a.width = u && l.drawTicks ? f : 0, d ? a.height = u && l.drawTicks ? f : 0 : a.height = t.maxHeight, s.display && u && (d ? a.height += h : a.width += h), o.display && u) {
                var g = i.longestText(t.ctx, c.font, t.ticks, t.longestTextCache),
                  m = i.numberOfLabelLines(t.ticks),
                  p = .5 * c.size;
                if (d) {
                  t.longestLabelWidth = g;
                  var v = i.toRadians(t.labelRotation),
                    b = Math.cos(v),
                    y = Math.sin(v),
                    x = y * g + c.size * m + p * m;
                  a.height = Math.min(t.maxHeight, a.height + x), t.ctx.font = c.font;
                  var k = t.ticks[0],
                    _ = e(t.ctx, k, c.font),
                    w = t.ticks[t.ticks.length - 1],
                    S = e(t.ctx, w, c.font);
                  0 !== t.labelRotation ? (t.paddingLeft = "bottom" === r.position ? b * _ + 3 : b * p + 3, t.paddingRight = "bottom" === r.position ? b * p + 3 : b * S + 3) : (t.paddingLeft = _ / 2 + 3, t.paddingRight = S / 2 + 3)
                } else o.mirror ? g = 0 : g += t.options.ticks.padding, a.width += g, t.paddingTop = c.size / 2, t.paddingBottom = c.size / 2
              }
              t.handleMargins(), t.width = a.width, t.height = a.height
            },
            handleMargins: function() {
              var t = this;
              t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
            },
            afterFit: function() {
              i.callCallback(this.options.afterFit, [this])
            },
            isHorizontal: function() {
              return "top" === this.options.position || "bottom" === this.options.position
            },
            isFullWidth: function() {
              return this.options.fullWidth
            },
            getRightValue: function(t) {
              return null === t || "undefined" == typeof t ? NaN : "number" != typeof t || isFinite(t) ? "object" == typeof t ? t instanceof Date || t.isValid ? t : this.getRightValue(this.isHorizontal() ? t.x : t.y) : t : NaN
            },
            getLabelForIndex: i.noop,
            getPixelForValue: i.noop,
            getValueForPixel: i.noop,
            getPixelForTick: function(t, e) {
              var n = this;
              if (n.isHorizontal()) {
                var i = n.width - (n.paddingLeft + n.paddingRight),
                  a = i / Math.max(n.ticks.length - (n.options.gridLines.offsetGridLines ? 0 : 1), 1),
                  r = a * t + n.paddingLeft;
                e && (r += a / 2);
                var o = n.left + Math.round(r);
                return o += n.isFullWidth() ? n.margins.left : 0
              }
              var s = n.height - (n.paddingTop + n.paddingBottom);
              return n.top + t * (s / (n.ticks.length - 1))
            },
            getPixelForDecimal: function(t) {
              var e = this;
              if (e.isHorizontal()) {
                var n = e.width - (e.paddingLeft + e.paddingRight),
                  i = n * t + e.paddingLeft,
                  a = e.left + Math.round(i);
                return a += e.isFullWidth() ? e.margins.left : 0
              }
              return e.top + t * e.height
            },
            getBasePixel: function() {
              return this.getPixelForValue(this.getBaseValue())
            },
            getBaseValue: function() {
              var t = this,
                e = t.min,
                n = t.max;
              return t.beginAtZero ? 0 : 0 > e && 0 > n ? n : e > 0 && n > 0 ? e : 0
            },
            draw: function(e) {
              var a = this,
                r = a.options;
              if (r.display) {
                var o, s, l = a.ctx,
                  u = t.defaults.global,
                  d = r.ticks,
                  c = r.gridLines,
                  h = r.scaleLabel,
                  f = 0 !== a.labelRotation,
                  g = d.autoSkip,
                  m = a.isHorizontal();
                d.maxTicksLimit && (s = d.maxTicksLimit);
                var p = i.getValueOrDefault(d.fontColor, u.defaultFontColor),
                  v = n(d),
                  b = c.drawTicks ? c.tickMarkLength : 0,
                  y = i.getValueOrDefault(c.borderDash, u.borderDash),
                  x = i.getValueOrDefault(c.borderDashOffset, u.borderDashOffset),
                  k = i.getValueOrDefault(h.fontColor, u.defaultFontColor),
                  _ = n(h),
                  w = i.toRadians(a.labelRotation),
                  S = Math.cos(w),
                  M = a.longestLabelWidth * S;
                l.fillStyle = p;
                var D = [];
                if (m) {
                  if (o = !1, f && (M /= 2), (M + d.autoSkipPadding) * a.ticks.length > a.width - (a.paddingLeft + a.paddingRight) && (o = 1 + Math.floor((M + d.autoSkipPadding) * a.ticks.length / (a.width - (a.paddingLeft + a.paddingRight)))), s && a.ticks.length > s)
                    for (; !o || a.ticks.length / (o || 1) > s;) o || (o = 1), o += 1;
                  g || (o = !1)
                }
                var C = "right" === r.position ? a.left : a.right - b,
                  T = "right" === r.position ? a.left + b : a.right,
                  P = "bottom" === r.position ? a.top : a.bottom - b,
                  I = "bottom" === r.position ? a.top + b : a.bottom;
                if (i.each(a.ticks, function(t, n) {
                    if (void 0 !== t && null !== t) {
                      var s = a.ticks.length === n + 1,
                        l = o > 1 && n % o > 0 || n % o === 0 && n + o >= a.ticks.length;
                      if ((!l || s) && void 0 !== t && null !== t) {
                        var u, h;
                        n === ("undefined" != typeof a.zeroLineIndex ? a.zeroLineIndex : 0) ? (u = c.zeroLineWidth, h = c.zeroLineColor) : (u = i.getValueAtIndexOrDefault(c.lineWidth, n), h = i.getValueAtIndexOrDefault(c.color, n));
                        var g, p, v, k, _, S, M, A, F, O, R = "middle",
                          L = "middle";
                        if (m) {
                          "bottom" === r.position ? (L = f ? "middle" : "top", R = f ? "right" : "center", O = a.top + b) : (L = f ? "middle" : "bottom", R = f ? "left" : "center", O = a.bottom - b);
                          var W = a.getPixelForTick(n) + i.aliasPixel(u);
                          F = a.getPixelForTick(n, c.offsetGridLines) + d.labelOffset, g = v = _ = M = W, p = P, k = I, S = e.top, A = e.bottom
                        } else {
                          var V, Y = "left" === r.position,
                            B = d.padding;
                          d.mirror ? (R = Y ? "left" : "right", V = B) : (R = Y ? "right" : "left", V = b + B), F = Y ? a.right - V : a.left + V;
                          var z = a.getPixelForTick(n);
                          z += i.aliasPixel(u), O = a.getPixelForTick(n, c.offsetGridLines), g = C, v = T, _ = e.left, M = e.right, p = k = S = A = z
                        }
                        D.push({
                          tx1: g,
                          ty1: p,
                          tx2: v,
                          ty2: k,
                          x1: _,
                          y1: S,
                          x2: M,
                          y2: A,
                          labelX: F,
                          labelY: O,
                          glWidth: u,
                          glColor: h,
                          glBorderDash: y,
                          glBorderDashOffset: x,
                          rotation: -1 * w,
                          label: t,
                          textBaseline: L,
                          textAlign: R
                        })
                      }
                    }
                  }), i.each(D, function(t) {
                    if (c.display && (l.save(), l.lineWidth = t.glWidth, l.strokeStyle = t.glColor, l.setLineDash && (l.setLineDash(t.glBorderDash), l.lineDashOffset = t.glBorderDashOffset), l.beginPath(), c.drawTicks && (l.moveTo(t.tx1, t.ty1), l.lineTo(t.tx2, t.ty2)), c.drawOnChartArea && (l.moveTo(t.x1, t.y1), l.lineTo(t.x2, t.y2)), l.stroke(), l.restore()), d.display) {
                      l.save(), l.translate(t.labelX, t.labelY), l.rotate(t.rotation), l.font = v.font, l.textBaseline = t.textBaseline, l.textAlign = t.textAlign;
                      var e = t.label;
                      if (i.isArray(e))
                        for (var n = 0, a = 0; n < e.length; ++n) l.fillText("" + e[n], 0, a), a += 1.5 * v.size;
                      else l.fillText(e, 0, 0);
                      l.restore()
                    }
                  }), h.display) {
                  var A, F, O = 0;
                  if (m) A = a.left + (a.right - a.left) / 2, F = "bottom" === r.position ? a.bottom - _.size / 2 : a.top + _.size / 2;
                  else {
                    var R = "left" === r.position;
                    A = R ? a.left + _.size / 2 : a.right - _.size / 2, F = a.top + (a.bottom - a.top) / 2, O = R ? -.5 * Math.PI : .5 * Math.PI
                  }
                  l.save(), l.translate(A, F), l.rotate(O), l.textAlign = "center", l.textBaseline = "middle", l.fillStyle = k, l.font = _.font, l.fillText(h.labelString, 0, 0), l.restore()
                }
                if (c.drawBorder) {
                  l.lineWidth = i.getValueAtIndexOrDefault(c.lineWidth, 0), l.strokeStyle = i.getValueAtIndexOrDefault(c.color, 0);
                  var L = a.left,
                    W = a.right,
                    V = a.top,
                    Y = a.bottom,
                    B = i.aliasPixel(l.lineWidth);
                  m ? (V = Y = "top" === r.position ? a.bottom : a.top, V += B, Y += B) : (L = W = "left" === r.position ? a.right : a.left, L += B, W += B), l.beginPath(), l.moveTo(L, V), l.lineTo(W, Y), l.stroke()
                }
              }
            }
          })
        }
      }, {}],
      33: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          var e = t.helpers;
          t.scaleService = {
            constructors: {},
            defaults: {},
            registerScaleType: function(t, n, i) {
              this.constructors[t] = n, this.defaults[t] = e.clone(i)
            },
            getScaleConstructor: function(t) {
              return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
            },
            getScaleDefaults: function(n) {
              return this.defaults.hasOwnProperty(n) ? e.scaleMerge(t.defaults.scale, this.defaults[n]) : {}
            },
            updateScaleDefaults: function(t, n) {
              var i = this.defaults;
              i.hasOwnProperty(t) && (i[t] = e.extend(i[t], n))
            },
            addScalesToLayout: function(n) {
              e.each(n.scales, function(e) {
                t.layoutService.addBox(n, e)
              })
            }
          }
        }
      }, {}],
      34: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          var e = t.helpers;
          t.Ticks = {
            generators: {
              linear: function(t, n) {
                var i, a = [];
                if (t.stepSize && t.stepSize > 0) i = t.stepSize;
                else {
                  var r = e.niceNum(n.max - n.min, !1);
                  i = e.niceNum(r / (t.maxTicks - 1), !0)
                }
                var o = Math.floor(n.min / i) * i,
                  s = Math.ceil(n.max / i) * i;
                t.min && t.max && t.stepSize && e.almostWhole((t.max - t.min) / t.stepSize, i / 1e3) && (o = t.min, s = t.max);
                var l = (s - o) / i;
                l = e.almostEquals(l, Math.round(l), i / 1e3) ? Math.round(l) : Math.ceil(l), a.push(void 0 !== t.min ? t.min : o);
                for (var u = 1; l > u; ++u) a.push(o + u * i);
                return a.push(void 0 !== t.max ? t.max : s), a
              },
              logarithmic: function(t, n) {
                var i, a, r = [],
                  o = e.getValueOrDefault,
                  s = o(t.min, Math.pow(10, Math.floor(e.log10(n.min)))),
                  l = Math.floor(e.log10(n.max)),
                  u = Math.ceil(n.max / Math.pow(10, l));
                0 === s ? (i = Math.floor(e.log10(n.minNotZero)), a = Math.floor(n.minNotZero / Math.pow(10, i)), r.push(s), s = a * Math.pow(10, i)) : (i = Math.floor(e.log10(s)), a = Math.floor(s / Math.pow(10, i)));
                do r.push(s), ++a, 10 === a && (a = 1, ++i), s = a * Math.pow(10, i); while (l > i || i === l && u > a);
                var d = o(t.max, s);
                return r.push(d), r
              }
            },
            formatters: {
              values: function(t) {
                return e.isArray(t) ? t : "" + t
              },
              linear: function(t, n, i) {
                var a = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
                Math.abs(a) > 1 && t !== Math.floor(t) && (a = t - Math.floor(t));
                var r = e.log10(Math.abs(a)),
                  o = "";
                if (0 !== t) {
                  var s = -1 * Math.floor(r);
                  s = Math.max(Math.min(s, 20), 0), o = t.toFixed(s)
                } else o = "0";
                return o
              },
              logarithmic: function(t, n, i) {
                var a = t / Math.pow(10, Math.floor(e.log10(t)));
                return 0 === t ? "0" : 1 === a || 2 === a || 5 === a || 0 === n || n === i.length - 1 ? t.toExponential() : ""
              }
            }
          }
        }
      }, {}],
      35: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          function e(e, n) {
            var i = new t.Title({
              ctx: e.ctx,
              options: n,
              chart: e
            });
            e.titleBlock = i, t.layoutService.addBox(e, i)
          }
          var n = t.helpers;
          t.defaults.global.title = {
            display: !1,
            position: "top",
            fullWidth: !0,
            fontStyle: "bold",
            padding: 10,
            text: ""
          };
          var i = n.noop;
          t.Title = t.Element.extend({
            initialize: function(t) {
              var e = this;
              n.extend(e, t), e.legendHitBoxes = []
            },
            beforeUpdate: i,
            update: function(t, e, n) {
              var i = this;
              return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
            },
            afterUpdate: i,
            beforeSetDimensions: i,
            setDimensions: function() {
              var t = this;
              t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
              }
            },
            afterSetDimensions: i,
            beforeBuildLabels: i,
            buildLabels: i,
            afterBuildLabels: i,
            beforeFit: i,
            fit: function() {
              var e = this,
                i = n.getValueOrDefault,
                a = e.options,
                r = t.defaults.global,
                o = a.display,
                s = i(a.fontSize, r.defaultFontSize),
                l = e.minSize;
              e.isHorizontal() ? (l.width = e.maxWidth, l.height = o ? s + 2 * a.padding : 0) : (l.width = o ? s + 2 * a.padding : 0, l.height = e.maxHeight), e.width = l.width, e.height = l.height
            },
            afterFit: i,
            isHorizontal: function() {
              var t = this.options.position;
              return "top" === t || "bottom" === t
            },
            draw: function() {
              var e = this,
                i = e.ctx,
                a = n.getValueOrDefault,
                r = e.options,
                o = t.defaults.global;
              if (r.display) {
                var s, l, u, d = a(r.fontSize, o.defaultFontSize),
                  c = a(r.fontStyle, o.defaultFontStyle),
                  h = a(r.fontFamily, o.defaultFontFamily),
                  f = n.fontString(d, c, h),
                  g = 0,
                  m = e.top,
                  p = e.left,
                  v = e.bottom,
                  b = e.right;
                i.fillStyle = a(r.fontColor, o.defaultFontColor), i.font = f, e.isHorizontal() ? (s = p + (b - p) / 2, l = m + (v - m) / 2, u = b - p) : (s = "left" === r.position ? p + d / 2 : b - d / 2, l = m + (v - m) / 2, u = v - m, g = Math.PI * ("left" === r.position ? -.5 : .5)), i.save(), i.translate(s, l), i.rotate(g), i.textAlign = "center", i.textBaseline = "middle", i.fillText(r.text, 0, 0, u), i.restore()
              }
            }
          }), t.plugins.register({
            beforeInit: function(t) {
              var n = t.options.title;
              n && e(t, n)
            },
            beforeUpdate: function(i) {
              var a = i.options.title;
              a ? (a = n.configMerge(t.defaults.global.title, a), i.titleBlock ? i.titleBlock.options = a : e(i, a)) : (t.layoutService.removeBox(i, i.titleBlock), delete i.titleBlock)
            }
          })
        }
      }, {}],
      36: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          function e(t, e) {
            var n = l.color(t);
            return n.alpha(e * n.alpha()).rgbaString()
          }

          function n(t, e) {
            return e && (l.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
          }

          function i(t) {
            var e = t._xScale,
              n = t._yScale || t._scale,
              i = t._index,
              a = t._datasetIndex;
            return {
              xLabel: e ? e.getLabelForIndex(i, a) : "",
              yLabel: n ? n.getLabelForIndex(i, a) : "",
              index: i,
              datasetIndex: a,
              x: t._model.x,
              y: t._model.y
            }
          }

          function a(e) {
            var n = t.defaults.global,
              i = l.getValueOrDefault;
            return {
              xPadding: e.xPadding,
              yPadding: e.yPadding,
              xAlign: e.xAlign,
              yAlign: e.yAlign,
              bodyFontColor: e.bodyFontColor,
              _bodyFontFamily: i(e.bodyFontFamily, n.defaultFontFamily),
              _bodyFontStyle: i(e.bodyFontStyle, n.defaultFontStyle),
              _bodyAlign: e.bodyAlign,
              bodyFontSize: i(e.bodyFontSize, n.defaultFontSize),
              bodySpacing: e.bodySpacing,
              titleFontColor: e.titleFontColor,
              _titleFontFamily: i(e.titleFontFamily, n.defaultFontFamily),
              _titleFontStyle: i(e.titleFontStyle, n.defaultFontStyle),
              titleFontSize: i(e.titleFontSize, n.defaultFontSize),
              _titleAlign: e.titleAlign,
              titleSpacing: e.titleSpacing,
              titleMarginBottom: e.titleMarginBottom,
              footerFontColor: e.footerFontColor,
              _footerFontFamily: i(e.footerFontFamily, n.defaultFontFamily),
              _footerFontStyle: i(e.footerFontStyle, n.defaultFontStyle),
              footerFontSize: i(e.footerFontSize, n.defaultFontSize),
              _footerAlign: e.footerAlign,
              footerSpacing: e.footerSpacing,
              footerMarginTop: e.footerMarginTop,
              caretSize: e.caretSize,
              cornerRadius: e.cornerRadius,
              backgroundColor: e.backgroundColor,
              opacity: 0,
              legendColorBackground: e.multiKeyBackground,
              displayColors: e.displayColors
            }
          }

          function r(t, e) {
            var n = t._chart.ctx,
              i = 2 * e.yPadding,
              a = 0,
              r = e.body,
              o = r.reduce(function(t, e) {
                return t + e.before.length + e.lines.length + e.after.length
              }, 0);
            o += e.beforeBody.length + e.afterBody.length;
            var s = e.title.length,
              u = e.footer.length,
              d = e.titleFontSize,
              c = e.bodyFontSize,
              h = e.footerFontSize;
            i += s * d, i += s ? (s - 1) * e.titleSpacing : 0, i += s ? e.titleMarginBottom : 0, i += o * c, i += o ? (o - 1) * e.bodySpacing : 0, i += u ? e.footerMarginTop : 0, i += u * h, i += u ? (u - 1) * e.footerSpacing : 0;
            var f = 0,
              g = function(t) {
                a = Math.max(a, n.measureText(t).width + f)
              };
            return n.font = l.fontString(d, e._titleFontStyle, e._titleFontFamily), l.each(e.title, g), n.font = l.fontString(c, e._bodyFontStyle, e._bodyFontFamily), l.each(e.beforeBody.concat(e.afterBody), g), f = e.displayColors ? c + 2 : 0, l.each(r, function(t) {
              l.each(t.before, g), l.each(t.lines, g), l.each(t.after, g)
            }), f = 0, n.font = l.fontString(h, e._footerFontStyle, e._footerFontFamily), l.each(e.footer, g), a += 2 * e.xPadding, {
              width: a,
              height: i
            }
          }

          function o(t, e) {
            var n = t._model,
              i = t._chart,
              a = t._chart.chartArea,
              r = "center",
              o = "center";
            n.y < e.height ? o = "top" : n.y > i.height - e.height && (o = "bottom");
            var s, l, u, d, c, h = (a.left + a.right) / 2,
              f = (a.top + a.bottom) / 2;
            "center" === o ? (s = function(t) {
              return h >= t
            }, l = function(t) {
              return t > h
            }) : (s = function(t) {
              return t <= e.width / 2
            }, l = function(t) {
              return t >= i.width - e.width / 2
            }), u = function(t) {
              return t + e.width > i.width
            }, d = function(t) {
              return t - e.width < 0
            }, c = function(t) {
              return f >= t ? "top" : "bottom"
            }, s(n.x) ? (r = "left", u(n.x) && (r = "center", o = c(n.y))) : l(n.x) && (r = "right", d(n.x) && (r = "center", o = c(n.y)));
            var g = t._options;
            return {
              xAlign: g.xAlign ? g.xAlign : r,
              yAlign: g.yAlign ? g.yAlign : o
            }
          }

          function s(t, e, n) {
            var i = t.x,
              a = t.y,
              r = t.caretSize,
              o = t.caretPadding,
              s = t.cornerRadius,
              l = n.xAlign,
              u = n.yAlign,
              d = r + o,
              c = s + o;
            return "right" === l ? i -= e.width : "center" === l && (i -= e.width / 2), "top" === u ? a += d : a -= "bottom" === u ? e.height + d : e.height / 2, "center" === u ? "left" === l ? i += d : "right" === l && (i -= d) : "left" === l ? i -= c : "right" === l && (i += c), {
              x: i,
              y: a
            }
          }
          var l = t.helpers;
          t.defaults.global.tooltips = {
            enabled: !0,
            custom: null,
            mode: "nearest",
            position: "average",
            intersect: !0,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyFontColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: "#fff",
            displayColors: !0,
            callbacks: {
              beforeTitle: l.noop,
              title: function(t, e) {
                var n = "",
                  i = e.labels,
                  a = i ? i.length : 0;
                if (t.length > 0) {
                  var r = t[0];
                  r.xLabel ? n = r.xLabel : a > 0 && r.index < a && (n = i[r.index])
                }
                return n
              },
              afterTitle: l.noop,
              beforeBody: l.noop,
              beforeLabel: l.noop,
              label: function(t, e) {
                var n = e.datasets[t.datasetIndex].label || "";
                return n && (n += ": "), n += t.yLabel
              },
              labelColor: function(t, e) {
                var n = e.getDatasetMeta(t.datasetIndex),
                  i = n.data[t.index],
                  a = i._view;
                return {
                  borderColor: a.borderColor,
                  backgroundColor: a.backgroundColor
                }
              },
              afterLabel: l.noop,
              afterBody: l.noop,
              beforeFooter: l.noop,
              footer: l.noop,
              afterFooter: l.noop
            }
          }, t.Tooltip = t.Element.extend({
            initialize: function() {
              this._model = a(this._options)
            },
            getTitle: function() {
              var t = this,
                e = t._options,
                i = e.callbacks,
                a = i.beforeTitle.apply(t, arguments),
                r = i.title.apply(t, arguments),
                o = i.afterTitle.apply(t, arguments),
                s = [];
              return s = n(s, a), s = n(s, r), s = n(s, o)
            },
            getBeforeBody: function() {
              var t = this._options.callbacks.beforeBody.apply(this, arguments);
              return l.isArray(t) ? t : void 0 !== t ? [t] : []
            },
            getBody: function(t, e) {
              var i = this,
                a = i._options.callbacks,
                r = [];
              return l.each(t, function(t) {
                var o = {
                  before: [],
                  lines: [],
                  after: []
                };
                n(o.before, a.beforeLabel.call(i, t, e)), n(o.lines, a.label.call(i, t, e)), n(o.after, a.afterLabel.call(i, t, e)), r.push(o)
              }), r
            },
            getAfterBody: function() {
              var t = this._options.callbacks.afterBody.apply(this, arguments);
              return l.isArray(t) ? t : void 0 !== t ? [t] : []
            },
            getFooter: function() {
              var t = this,
                e = t._options.callbacks,
                i = e.beforeFooter.apply(t, arguments),
                a = e.footer.apply(t, arguments),
                r = e.afterFooter.apply(t, arguments),
                o = [];
              return o = n(o, i), o = n(o, a), o = n(o, r)
            },
            update: function(e) {
              var n, u, d = this,
                c = d._options,
                h = d._model,
                f = d._model = a(c),
                g = d._active,
                m = d._data,
                p = {
                  xAlign: h.xAlign,
                  yAlign: h.yAlign
                },
                v = {
                  x: h.x,
                  y: h.y
                },
                b = {
                  width: h.width,
                  height: h.height
                },
                y = {
                  x: h.caretX,
                  y: h.caretY
                };
              if (g.length) {
                f.opacity = 1;
                var x = [];
                y = t.Tooltip.positioners[c.position](g, d._eventPosition);
                var k = [];
                for (n = 0, u = g.length; u > n; ++n) k.push(i(g[n]));
                c.filter && (k = k.filter(function(t) {
                  return c.filter(t, m)
                })), c.itemSort && (k = k.sort(function(t, e) {
                  return c.itemSort(t, e, m)
                })), l.each(k, function(t) {
                  x.push(c.callbacks.labelColor.call(d, t, d._chart))
                }), f.title = d.getTitle(k, m), f.beforeBody = d.getBeforeBody(k, m), f.body = d.getBody(k, m), f.afterBody = d.getAfterBody(k, m), f.footer = d.getFooter(k, m), f.x = Math.round(y.x), f.y = Math.round(y.y), f.caretPadding = l.getValueOrDefault(y.padding, 2), f.labelColors = x, f.dataPoints = k, b = r(this, f), p = o(this, b), v = s(f, b, p)
              } else f.opacity = 0;
              return f.xAlign = p.xAlign, f.yAlign = p.yAlign, f.x = v.x, f.y = v.y, f.width = b.width, f.height = b.height, f.caretX = y.x, f.caretY = y.y, d._model = f, e && c.custom && c.custom.call(d, f), d
            },
            drawCaret: function(t, n, i) {
              var a, r, o, s, l, u, d = this._view,
                c = this._chart.ctx,
                h = d.caretSize,
                f = d.cornerRadius,
                g = d.xAlign,
                m = d.yAlign,
                p = t.x,
                v = t.y,
                b = n.width,
                y = n.height;
              "center" === m ? ("left" === g ? (a = p, r = a - h, o = a) : (a = p + b, r = a + h, o = a), l = v + y / 2, s = l - h, u = l + h) : ("left" === g ? (a = p + f, r = a + h, o = r + h) : "right" === g ? (a = p + b - f, r = a - h, o = r - h) : (r = p + b / 2, a = r - h, o = r + h), "top" === m ? (s = v, l = s - h, u = s) : (s = v + y, l = s + h, u = s)), c.fillStyle = e(d.backgroundColor, i), c.beginPath(), c.moveTo(a, s), c.lineTo(r, l), c.lineTo(o, u), c.closePath(), c.fill()
            },
            drawTitle: function(t, n, i, a) {
              var r = n.title;
              if (r.length) {
                i.textAlign = n._titleAlign, i.textBaseline = "top";
                var o = n.titleFontSize,
                  s = n.titleSpacing;
                i.fillStyle = e(n.titleFontColor, a), i.font = l.fontString(o, n._titleFontStyle, n._titleFontFamily);
                var u, d;
                for (u = 0, d = r.length; d > u; ++u) i.fillText(r[u], t.x, t.y), t.y += o + s, u + 1 === r.length && (t.y += n.titleMarginBottom - s)
              }
            },
            drawBody: function(t, n, i, a) {
              var r = n.bodyFontSize,
                o = n.bodySpacing,
                s = n.body;
              i.textAlign = n._bodyAlign, i.textBaseline = "top";
              var u = e(n.bodyFontColor, a);
              i.fillStyle = u, i.font = l.fontString(r, n._bodyFontStyle, n._bodyFontFamily);
              var d = 0,
                c = function(e) {
                  i.fillText(e, t.x + d, t.y), t.y += r + o
                };
              l.each(n.beforeBody, c);
              var h = n.displayColors;
              d = h ? r + 2 : 0, l.each(s, function(o, s) {
                l.each(o.before, c), l.each(o.lines, function(o) {
                  h && (i.fillStyle = e(n.legendColorBackground, a), i.fillRect(t.x, t.y, r, r), i.strokeStyle = e(n.labelColors[s].borderColor, a), i.strokeRect(t.x, t.y, r, r), i.fillStyle = e(n.labelColors[s].backgroundColor, a), i.fillRect(t.x + 1, t.y + 1, r - 2, r - 2), i.fillStyle = u), c(o)
                }), l.each(o.after, c)
              }), d = 0, l.each(n.afterBody, c), t.y -= o
            },
            drawFooter: function(t, n, i, a) {
              var r = n.footer;
              r.length && (t.y += n.footerMarginTop, i.textAlign = n._footerAlign, i.textBaseline = "top", i.fillStyle = e(n.footerFontColor, a), i.font = l.fontString(n.footerFontSize, n._footerFontStyle, n._footerFontFamily), l.each(r, function(e) {
                i.fillText(e, t.x, t.y), t.y += n.footerFontSize + n.footerSpacing
              }))
            },
            drawBackground: function(t, n, i, a, r) {
              i.fillStyle = e(n.backgroundColor, r), l.drawRoundedRectangle(i, t.x, t.y, a.width, a.height, n.cornerRadius), i.fill()
            },
            draw: function() {
              var t = this._chart.ctx,
                e = this._view;
              if (0 !== e.opacity) {
                var n = {
                    width: e.width,
                    height: e.height
                  },
                  i = {
                    x: e.x,
                    y: e.y
                  },
                  a = Math.abs(e.opacity < .001) ? 0 : e.opacity;
                this._options.enabled && (this.drawBackground(i, e, t, n, a), this.drawCaret(i, n, a), i.x += e.xPadding, i.y += e.yPadding, this.drawTitle(i, e, t, a), this.drawBody(i, e, t, a), this.drawFooter(i, e, t, a))
              }
            },
            handleEvent: function(t) {
              var e = this,
                n = e._options,
                i = !1;
              if (e._lastActive = e._lastActive || [], "mouseout" === t.type ? e._active = [] : e._active = e._chart.getElementsAtEventForMode(t, n.mode, n), i = !l.arrayEquals(e._active, e._lastActive), !i) return !1;
              if (e._lastActive = e._active, n.enabled || n.custom) {
                e._eventPosition = {
                  x: t.x,
                  y: t.y
                };
                var a = e._model;
                e.update(!0), e.pivot(), i |= a.x !== e._model.x || a.y !== e._model.y
              }
              return i
            }
          }), t.Tooltip.positioners = {
            average: function(t) {
              if (!t.length) return !1;
              var e, n, i = 0,
                a = 0,
                r = 0;
              for (e = 0, n = t.length; n > e; ++e) {
                var o = t[e];
                if (o && o.hasValue()) {
                  var s = o.tooltipPosition();
                  i += s.x, a += s.y, ++r
                }
              }
              return {
                x: Math.round(i / r),
                y: Math.round(a / r)
              }
            },
            nearest: function(t, e) {
              var n, i, a, r = e.x,
                o = e.y,
                s = Number.POSITIVE_INFINITY;
              for (i = 0, a = t.length; a > i; ++i) {
                var u = t[i];
                if (u && u.hasValue()) {
                  var d = u.getCenterPoint(),
                    c = l.distanceBetweenPoints(e, d);
                  s > c && (s = c, n = u)
                }
              }
              if (n) {
                var h = n.tooltipPosition();
                r = h.x, o = h.y
              }
              return {
                x: r,
                y: o
              }
            }
          }
        }
      }, {}],
      37: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          var e = t.helpers,
            n = t.defaults.global;
          n.elements.arc = {
            backgroundColor: n.defaultColor,
            borderColor: "#fff",
            borderWidth: 2
          }, t.elements.Arc = t.Element.extend({
            inLabelRange: function(t) {
              var e = this._view;
              return e ? Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2) : !1
            },
            inRange: function(t, n) {
              var i = this._view;
              if (i) {
                for (var a = e.getAngleFromPoint(i, {
                    x: t,
                    y: n
                  }), r = a.angle, o = a.distance, s = i.startAngle, l = i.endAngle; s > l;) l += 2 * Math.PI;
                for (; r > l;) r -= 2 * Math.PI;
                for (; s > r;) r += 2 * Math.PI;
                var u = r >= s && l >= r,
                  d = o >= i.innerRadius && o <= i.outerRadius;
                return u && d
              }
              return !1
            },
            getCenterPoint: function() {
              var t = this._view,
                e = (t.startAngle + t.endAngle) / 2,
                n = (t.innerRadius + t.outerRadius) / 2;
              return {
                x: t.x + Math.cos(e) * n,
                y: t.y + Math.sin(e) * n
              }
            },
            getArea: function() {
              var t = this._view;
              return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
            },
            tooltipPosition: function() {
              var t = this._view,
                e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
              return {
                x: t.x + Math.cos(e) * n,
                y: t.y + Math.sin(e) * n
              }
            },
            draw: function() {
              var t = this._chart.ctx,
                e = this._view,
                n = e.startAngle,
                i = e.endAngle;
              t.beginPath(), t.arc(e.x, e.y, e.outerRadius, n, i), t.arc(e.x, e.y, e.innerRadius, i, n, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
            }
          })
        }
      }, {}],
      38: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          var e = t.helpers,
            n = t.defaults.global;
          t.defaults.global.elements.line = {
            tension: .4,
            backgroundColor: n.defaultColor,
            borderWidth: 3,
            borderColor: n.defaultColor,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            capBezierPoints: !0,
            fill: !0
          }, t.elements.Line = t.Element.extend({
            draw: function() {
              function t(t, e) {
                var n = e._view;
                e._view.steppedLine === !0 ? (l.lineTo(n.x, t._view.y), l.lineTo(n.x, n.y)) : 0 === e._view.tension ? l.lineTo(n.x, n.y) : l.bezierCurveTo(t._view.controlPointNextX, t._view.controlPointNextY, n.controlPointPreviousX, n.controlPointPreviousY, n.x, n.y)
              }
              var i = this,
                a = i._view,
                r = a.spanGaps,
                o = a.scaleZero,
                s = i._loop;
              s || ("top" === a.fill ? o = a.scaleTop : "bottom" === a.fill && (o = a.scaleBottom));
              var l = i._chart.ctx;
              l.save();
              var u = i._children.slice(),
                d = -1;
              s && u.length && u.push(u[0]);
              var c, h, f, g;
              if (u.length && a.fill) {
                for (l.beginPath(), c = 0; c < u.length; ++c) h = u[c], f = e.previousItem(u, c), g = h._view, 0 === c ? (s ? l.moveTo(o.x, o.y) : l.moveTo(g.x, o), g.skip || (d = c, l.lineTo(g.x, g.y))) : (f = -1 === d ? f : u[d], g.skip ? r || d !== c - 1 || (s ? l.lineTo(o.x, o.y) : l.lineTo(f._view.x, o)) : (d !== c - 1 ? r && -1 !== d ? t(f, h) : s ? l.lineTo(g.x, g.y) : (l.lineTo(g.x, o), l.lineTo(g.x, g.y)) : t(f, h), d = c));
                s || -1 === d || l.lineTo(u[d]._view.x, o), l.fillStyle = a.backgroundColor || n.defaultColor, l.closePath(), l.fill()
              }
              var m = n.elements.line;
              for (l.lineCap = a.borderCapStyle || m.borderCapStyle, l.setLineDash && l.setLineDash(a.borderDash || m.borderDash), l.lineDashOffset = a.borderDashOffset || m.borderDashOffset, l.lineJoin = a.borderJoinStyle || m.borderJoinStyle, l.lineWidth = a.borderWidth || m.borderWidth, l.strokeStyle = a.borderColor || n.defaultColor, l.beginPath(), d = -1, c = 0; c < u.length; ++c) h = u[c], f = e.previousItem(u, c), g = h._view, 0 === c ? g.skip || (l.moveTo(g.x, g.y), d = c) : (f = -1 === d ? f : u[d], g.skip || (d !== c - 1 && !r || -1 === d ? l.moveTo(g.x, g.y) : t(f, h), d = c));
              l.stroke(), l.restore()
            }
          })
        }
      }, {}],
      39: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          function e(t) {
            var e = this._view;
            return e ? Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2) : !1
          }

          function n(t) {
            var e = this._view;
            return e ? Math.pow(t - e.y, 2) < Math.pow(e.radius + e.hitRadius, 2) : !1
          }
          var i = t.helpers,
            a = t.defaults.global,
            r = a.defaultColor;
          a.elements.point = {
            radius: 3,
            pointStyle: "circle",
            backgroundColor: r,
            borderWidth: 1,
            borderColor: r,
            hitRadius: 1,
            hoverRadius: 4,
            hoverBorderWidth: 1
          }, t.elements.Point = t.Element.extend({
            inRange: function(t, e) {
              var n = this._view;
              return n ? Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2) : !1
            },
            inLabelRange: e,
            inXRange: e,
            inYRange: n,
            getCenterPoint: function() {
              var t = this._view;
              return {
                x: t.x,
                y: t.y
              }
            },
            getArea: function() {
              return Math.PI * Math.pow(this._view.radius, 2)
            },
            tooltipPosition: function() {
              var t = this._view;
              return {
                x: t.x,
                y: t.y,
                padding: t.radius + t.borderWidth
              }
            },
            draw: function(e) {
              var n = this._view,
                o = this._model,
                s = this._chart.ctx,
                l = n.pointStyle,
                u = n.radius,
                d = n.x,
                c = n.y,
                h = t.helpers.color,
                f = 1.01,
                g = 0;
              n.skip || (s.strokeStyle = n.borderColor || r, s.lineWidth = i.getValueOrDefault(n.borderWidth, a.elements.point.borderWidth), s.fillStyle = n.backgroundColor || r, void 0 !== e && (o.x < e.left || e.right * f < o.x || o.y < e.top || e.bottom * f < o.y) && (o.x < e.left ? g = (d - o.x) / (e.left - o.x) : e.right * f < o.x ? g = (o.x - d) / (o.x - e.right) : o.y < e.top ? g = (c - o.y) / (e.top - o.y) : e.bottom * f < o.y && (g = (o.y - c) / (o.y - e.bottom)), g = Math.round(100 * g) / 100, s.strokeStyle = h(s.strokeStyle).alpha(g).rgbString(), s.fillStyle = h(s.fillStyle).alpha(g).rgbString()), t.canvasHelpers.drawPoint(s, l, u, d, c))
            }
          })
        }
      }, {}],
      40: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          function e(t) {
            return void 0 !== t._view.width
          }

          function n(t) {
            var n, i, a, r, o = t._view;
            if (e(t)) {
              var s = o.width / 2;
              n = o.x - s, i = o.x + s, a = Math.min(o.y, o.base), r = Math.max(o.y, o.base)
            } else {
              var l = o.height / 2;
              n = Math.min(o.x, o.base), i = Math.max(o.x, o.base), a = o.y - l, r = o.y + l
            }
            return {
              left: n,
              top: a,
              right: i,
              bottom: r
            }
          }
          var i = t.defaults.global;
          i.elements.rectangle = {
            backgroundColor: i.defaultColor,
            borderWidth: 0,
            borderColor: i.defaultColor,
            borderSkipped: "bottom"
          }, t.elements.Rectangle = t.Element.extend({
            draw: function() {
              function t(t) {
                return v[(y + t) % 4]
              }
              var e, n, i, a, r, o, s, l = this._chart.ctx,
                u = this._view,
                d = u.borderWidth;
              if (u.horizontal ? (e = u.base, n = u.x, i = u.y - u.height / 2, a = u.y + u.height / 2, r = n > e ? 1 : -1, o = 1, s = u.borderSkipped || "left") : (e = u.x - u.width / 2, n = u.x + u.width / 2, i = u.y, a = u.base, r = 1, o = a > i ? 1 : -1, s = u.borderSkipped || "bottom"), d) {
                var c = Math.min(Math.abs(e - n), Math.abs(i - a));
                d = d > c ? c : d;
                var h = d / 2,
                  f = e + ("left" !== s ? h * r : 0),
                  g = n + ("right" !== s ? -h * r : 0),
                  m = i + ("top" !== s ? h * o : 0),
                  p = a + ("bottom" !== s ? -h * o : 0);
                f !== g && (i = m, a = p), m !== p && (e = f, n = g)
              }
              l.beginPath(), l.fillStyle = u.backgroundColor, l.strokeStyle = u.borderColor, l.lineWidth = d;
              var v = [
                  [e, a],
                  [e, i],
                  [n, i],
                  [n, a]
                ],
                b = ["bottom", "left", "top", "right"],
                y = b.indexOf(s, 0); - 1 === y && (y = 0);
              var x = t(0);
              l.moveTo(x[0], x[1]);
              for (var k = 1; 4 > k; k++) x = t(k), l.lineTo(x[0], x[1]);
              l.fill(), d && l.stroke()
            },
            height: function() {
              var t = this._view;
              return t.base - t.y
            },
            inRange: function(t, e) {
              var i = !1;
              if (this._view) {
                var a = n(this);
                i = t >= a.left && t <= a.right && e >= a.top && e <= a.bottom
              }
              return i
            },
            inLabelRange: function(t, i) {
              var a = this;
              if (!a._view) return !1;
              var r = !1,
                o = n(a);
              return r = e(a) ? t >= o.left && t <= o.right : i >= o.top && i <= o.bottom
            },
            inXRange: function(t) {
              var e = n(this);
              return t >= e.left && t <= e.right
            },
            inYRange: function(t) {
              var e = n(this);
              return t >= e.top && t <= e.bottom
            },
            getCenterPoint: function() {
              var t, n, i = this._view;
              return e(this) ? (t = i.x, n = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, n = i.y), {
                x: t,
                y: n
              }
            },
            getArea: function() {
              var t = this._view;
              return t.width * Math.abs(t.y - t.base)
            },
            tooltipPosition: function() {
              var t = this._view;
              return {
                x: t.x,
                y: t.y
              }
            }
          })
        }
      }, {}],
      41: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          function e(t, e) {
            var n = l.getStyle(t, e),
              i = n && n.match(/(\d+)px/);
            return i ? Number(i[1]) : void 0
          }

          function n(t, n) {
            var i = t.style,
              a = t.getAttribute("height"),
              r = t.getAttribute("width");
            if (t._chartjs = {
                initial: {
                  height: a,
                  width: r,
                  style: {
                    display: i.display,
                    height: i.height,
                    width: i.width
                  }
                }
              }, i.display = i.display || "block", null === r || "" === r) {
              var o = e(t, "width");
              void 0 !== o && (t.width = o)
            }
            if (null === a || "" === a)
              if ("" === t.style.height) t.height = t.width / (n.options.aspectRatio || 2);
              else {
                var s = e(t, "height");
                void 0 !== o && (t.height = s)
              }
            return t
          }

          function i(t, e, n, i, a) {
            return {
              type: t,
              chart: e,
              "native": a || null,
              x: void 0 !== n ? n : null,
              y: void 0 !== i ? i : null
            }
          }

          function a(t, e) {
            var n = u[t.type] || t.type,
              a = l.getRelativePosition(t, e);
            return i(n, e, a.x, a.y, t)
          }

          function r(t) {
            var e = document.createElement("iframe");
            return e.className = "chartjs-hidden-iframe", e.style.cssText = "display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;", e.tabIndex = -1, l.addEvent(e, "load", function() {
              l.addEvent(e.contentWindow || e, "resize", t), t()
            }), e
          }

          function o(t, e, n) {
            var a = t._chartjs = {
                ticking: !1
              },
              o = function() {
                a.ticking || (a.ticking = !0, l.requestAnimFrame.call(window, function() {
                  return a.resizer ? (a.ticking = !1, e(i("resize", n))) : void 0
                }))
              };
            a.resizer = r(o), t.insertBefore(a.resizer, t.firstChild)
          }

          function s(t) {
            if (t && t._chartjs) {
              var e = t._chartjs.resizer;
              e && (e.parentNode.removeChild(e), t._chartjs.resizer = null), delete t._chartjs
            }
          }
          var l = t.helpers,
            u = {
              touchstart: "mousedown",
              touchmove: "mousemove",
              touchend: "mouseup",
              pointerenter: "mouseenter",
              pointerdown: "mousedown",
              pointermove: "mousemove",
              pointerup: "mouseup",
              pointerleave: "mouseout",
              pointerout: "mouseout"
            };
          return {
            acquireContext: function(t, e) {
              if ("string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t instanceof HTMLCanvasElement) {
                var i = t.getContext && t.getContext("2d");
                if (i instanceof CanvasRenderingContext2D) return n(t, e), i
              }
              return null
            },
            releaseContext: function(t) {
              var e = t.canvas;
              if (e._chartjs) {
                var n = e._chartjs.initial;
                ["height", "width"].forEach(function(t) {
                  var i = n[t];
                  void 0 === i || null === i ? e.removeAttribute(t) : e.setAttribute(t, i)
                }), l.each(n.style || {}, function(t, n) {
                  e.style[n] = t
                }), e.width = e.width, delete e._chartjs
              }
            },
            addEventListener: function(t, e, n) {
              var i = t.canvas;
              if ("resize" === e) return void o(i.parentNode, n, t);
              var r = n._chartjs || (n._chartjs = {}),
                s = r.proxies || (r.proxies = {}),
                u = s[t.id + "_" + e] = function(e) {
                  n(a(e, t))
                };
              l.addEvent(i, e, u)
            },
            removeEventListener: function(t, e, n) {
              var i = t.canvas;
              if ("resize" === e) return void s(i.parentNode, n);
              var a = n._chartjs || {},
                r = a.proxies || {},
                o = r[t.id + "_" + e];
              o && l.removeEvent(i, e, o)
            }
          }
        }
      }, {}],
      42: [function(t, e, n) {
        "use strict";
        var i = t(41);
        e.exports = function(t) {
          t.platform = {
            acquireContext: function() {},
            releaseContext: function() {},
            addEventListener: function() {},
            removeEventListener: function() {}
          }, t.helpers.extend(t.platform, i(t))
        }
      }, {
        41: 41
      }],
      43: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          var e = t.helpers,
            n = {
              position: "bottom"
            },
            i = t.Scale.extend({
              getLabels: function() {
                var t = this.chart.data;
                return (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
              },
              determineDataLimits: function() {
                var t = this,
                  n = t.getLabels();
                t.minIndex = 0, t.maxIndex = n.length - 1;
                var i;
                void 0 !== t.options.ticks.min && (i = e.indexOf(n, t.options.ticks.min), t.minIndex = -1 !== i ? i : t.minIndex), void 0 !== t.options.ticks.max && (i = e.indexOf(n, t.options.ticks.max), t.maxIndex = -1 !== i ? i : t.maxIndex), t.min = n[t.minIndex], t.max = n[t.maxIndex]
              },
              buildTicks: function() {
                var t = this,
                  e = t.getLabels();
                t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
              },
              getLabelForIndex: function(t, e) {
                var n = this,
                  i = n.chart.data,
                  a = n.isHorizontal();
                return i.yLabels && !a ? n.getRightValue(i.datasets[e].data[t]) : n.ticks[t - n.minIndex]
              },
              getPixelForValue: function(t, e, n, i) {
                var a = this,
                  r = Math.max(a.maxIndex + 1 - a.minIndex - (a.options.gridLines.offsetGridLines ? 0 : 1), 1);
                if (void 0 !== t && isNaN(e)) {
                  var o = a.getLabels(),
                    s = o.indexOf(t);
                  e = -1 !== s ? s : e
                }
                if (a.isHorizontal()) {
                  var l = a.width / r,
                    u = l * (e - a.minIndex);
                  return (a.options.gridLines.offsetGridLines && i || a.maxIndex === a.minIndex && i) && (u += l / 2), a.left + Math.round(u)
                }
                var d = a.height / r,
                  c = d * (e - a.minIndex);
                return a.options.gridLines.offsetGridLines && i && (c += d / 2), a.top + Math.round(c)
              },
              getPixelForTick: function(t, e) {
                return this.getPixelForValue(this.ticks[t], t + this.minIndex, null, e)
              },
              getValueForPixel: function(t) {
                var e, n = this,
                  i = Math.max(n.ticks.length - (n.options.gridLines.offsetGridLines ? 0 : 1), 1),
                  a = n.isHorizontal(),
                  r = (a ? n.width : n.height) / i;
                return t -= a ? n.left : n.top, n.options.gridLines.offsetGridLines && (t -= r / 2), e = 0 >= t ? 0 : Math.round(t / r)
              },
              getBasePixel: function() {
                return this.bottom
              }
            });
          t.scaleService.registerScaleType("category", i, n)
        }
      }, {}],
      44: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          var e = t.helpers,
            n = {
              position: "left",
              ticks: {
                callback: t.Ticks.formatters.linear
              }
            },
            i = t.LinearScaleBase.extend({
              determineDataLimits: function() {
                function t(t) {
                  return s ? t.xAxisID === n.id : t.yAxisID === n.id
                }
                var n = this,
                  i = n.options,
                  a = n.chart,
                  r = a.data,
                  o = r.datasets,
                  s = n.isHorizontal(),
                  l = 0,
                  u = 1;
                n.min = null, n.max = null;
                var d = i.stacked;
                if (void 0 === d && e.each(o, function(e, n) {
                    if (!d) {
                      var i = a.getDatasetMeta(n);
                      a.isDatasetVisible(n) && t(i) && void 0 !== i.stack && (d = !0)
                    }
                  }), i.stacked || d) {
                  var c = {};
                  e.each(o, function(r, o) {
                    var s = a.getDatasetMeta(o),
                      l = [s.type, void 0 === i.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
                    void 0 === c[l] && (c[l] = {
                      positiveValues: [],
                      negativeValues: []
                    });
                    var u = c[l].positiveValues,
                      d = c[l].negativeValues;
                    a.isDatasetVisible(o) && t(s) && e.each(r.data, function(t, e) {
                      var a = +n.getRightValue(t);
                      isNaN(a) || s.data[e].hidden || (u[e] = u[e] || 0, d[e] = d[e] || 0, i.relativePoints ? u[e] = 100 : 0 > a ? d[e] += a : u[e] += a)
                    })
                  }), e.each(c, function(t) {
                    var i = t.positiveValues.concat(t.negativeValues),
                      a = e.min(i),
                      r = e.max(i);
                    n.min = null === n.min ? a : Math.min(n.min, a), n.max = null === n.max ? r : Math.max(n.max, r)
                  })
                } else e.each(o, function(i, r) {
                  var o = a.getDatasetMeta(r);
                  a.isDatasetVisible(r) && t(o) && e.each(i.data, function(t, e) {
                    var i = +n.getRightValue(t);
                    isNaN(i) || o.data[e].hidden || (null === n.min ? n.min = i : i < n.min && (n.min = i), null === n.max ? n.max = i : i > n.max && (n.max = i))
                  })
                });
                n.min = isFinite(n.min) ? n.min : l, n.max = isFinite(n.max) ? n.max : u, this.handleTickRangeOptions()
              },
              getTickLimit: function() {
                var n, i = this,
                  a = i.options.ticks;
                if (i.isHorizontal()) n = Math.min(a.maxTicksLimit ? a.maxTicksLimit : 11, Math.ceil(i.width / 50));
                else {
                  var r = e.getValueOrDefault(a.fontSize, t.defaults.global.defaultFontSize);
                  n = Math.min(a.maxTicksLimit ? a.maxTicksLimit : 11, Math.ceil(i.height / (2 * r)))
                }
                return n
              },
              handleDirectionalChanges: function() {
                this.isHorizontal() || this.ticks.reverse()
              },
              getLabelForIndex: function(t, e) {
                return +this.getRightValue(this.chart.data.datasets[e].data[t])
              },
              getPixelForValue: function(t) {
                var e, n = this,
                  i = n.start,
                  a = +n.getRightValue(t),
                  r = n.end - i;
                return n.isHorizontal() ? (e = n.left + n.width / r * (a - i), Math.round(e)) : (e = n.bottom - n.height / r * (a - i), Math.round(e))
              },
              getValueForPixel: function(t) {
                var e = this,
                  n = e.isHorizontal(),
                  i = n ? e.width : e.height,
                  a = (n ? t - e.left : e.bottom - t) / i;
                return e.start + (e.end - e.start) * a
              },
              getPixelForTick: function(t) {
                return this.getPixelForValue(this.ticksAsNumbers[t])
              }
            });
          t.scaleService.registerScaleType("linear", i, n)
        }
      }, {}],
      45: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          var e = t.helpers,
            n = e.noop;
          t.LinearScaleBase = t.Scale.extend({
            handleTickRangeOptions: function() {
              var t = this,
                n = t.options,
                i = n.ticks;
              if (i.beginAtZero) {
                var a = e.sign(t.min),
                  r = e.sign(t.max);
                0 > a && 0 > r ? t.max = 0 : a > 0 && r > 0 && (t.min = 0)
              }
              void 0 !== i.min ? t.min = i.min : void 0 !== i.suggestedMin && (t.min = Math.min(t.min, i.suggestedMin)), void 0 !== i.max ? t.max = i.max : void 0 !== i.suggestedMax && (t.max = Math.max(t.max, i.suggestedMax)), t.min === t.max && (t.max++, i.beginAtZero || t.min--)
            },
            getTickLimit: n,
            handleDirectionalChanges: n,
            buildTicks: function() {
              var n = this,
                i = n.options,
                a = i.ticks,
                r = n.getTickLimit();
              r = Math.max(2, r);
              var o = {
                  maxTicks: r,
                  min: a.min,
                  max: a.max,
                  stepSize: e.getValueOrDefault(a.fixedStepSize, a.stepSize)
                },
                s = n.ticks = t.Ticks.generators.linear(o, n);
              n.handleDirectionalChanges(), n.max = e.max(s), n.min = e.min(s), a.reverse ? (s.reverse(), n.start = n.max, n.end = n.min) : (n.start = n.min, n.end = n.max)
            },
            convertTicksToLabels: function() {
              var e = this;
              e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e)
            }
          })
        }
      }, {}],
      46: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          var e = t.helpers,
            n = {
              position: "left",
              ticks: {
                callback: t.Ticks.formatters.logarithmic
              }
            },
            i = t.Scale.extend({
              determineDataLimits: function() {
                function t(t) {
                  return u ? t.xAxisID === n.id : t.yAxisID === n.id
                }
                var n = this,
                  i = n.options,
                  a = i.ticks,
                  r = n.chart,
                  o = r.data,
                  s = o.datasets,
                  l = e.getValueOrDefault,
                  u = n.isHorizontal();
                n.min = null, n.max = null, n.minNotZero = null;
                var d = i.stacked;
                if (void 0 === d && e.each(s, function(e, n) {
                    if (!d) {
                      var i = r.getDatasetMeta(n);
                      r.isDatasetVisible(n) && t(i) && void 0 !== i.stack && (d = !0)
                    }
                  }), i.stacked || d) {
                  var c = {};
                  e.each(s, function(a, o) {
                    var s = r.getDatasetMeta(o),
                      l = [s.type, void 0 === i.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
                    r.isDatasetVisible(o) && t(s) && (void 0 === c[l] && (c[l] = []), e.each(a.data, function(t, e) {
                      var a = c[l],
                        r = +n.getRightValue(t);
                      isNaN(r) || s.data[e].hidden || (a[e] = a[e] || 0, i.relativePoints ? a[e] = 100 : a[e] += r)
                    }))
                  }), e.each(c, function(t) {
                    var i = e.min(t),
                      a = e.max(t);
                    n.min = null === n.min ? i : Math.min(n.min, i), n.max = null === n.max ? a : Math.max(n.max, a)
                  })
                } else e.each(s, function(i, a) {
                  var o = r.getDatasetMeta(a);
                  r.isDatasetVisible(a) && t(o) && e.each(i.data, function(t, e) {
                    var i = +n.getRightValue(t);
                    isNaN(i) || o.data[e].hidden || (null === n.min ? n.min = i : i < n.min && (n.min = i), null === n.max ? n.max = i : i > n.max && (n.max = i), 0 !== i && (null === n.minNotZero || i < n.minNotZero) && (n.minNotZero = i))
                  })
                });
                n.min = l(a.min, n.min), n.max = l(a.max, n.max), n.min === n.max && (0 !== n.min && null !== n.min ? (n.min = Math.pow(10, Math.floor(e.log10(n.min)) - 1), n.max = Math.pow(10, Math.floor(e.log10(n.max)) + 1)) : (n.min = 1, n.max = 10))
              },
              buildTicks: function() {
                var n = this,
                  i = n.options,
                  a = i.ticks,
                  r = {
                    min: a.min,
                    max: a.max
                  },
                  o = n.ticks = t.Ticks.generators.logarithmic(r, n);
                n.isHorizontal() || o.reverse(), n.max = e.max(o), n.min = e.min(o), a.reverse ? (o.reverse(), n.start = n.max, n.end = n.min) : (n.start = n.min, n.end = n.max)
              },
              convertTicksToLabels: function() {
                this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
              },
              getLabelForIndex: function(t, e) {
                return +this.getRightValue(this.chart.data.datasets[e].data[t])
              },
              getPixelForTick: function(t) {
                return this.getPixelForValue(this.tickValues[t])
              },
              getPixelForValue: function(t) {
                var n, i, a, r = this,
                  o = r.start,
                  s = +r.getRightValue(t),
                  l = r.options,
                  u = l.ticks;
                return r.isHorizontal() ? (a = e.log10(r.end) - e.log10(o), 0 === s ? i = r.left : (n = r.width, i = r.left + n / a * (e.log10(s) - e.log10(o)))) : (n = r.height, 0 !== o || u.reverse ? 0 === r.end && u.reverse ? (a = e.log10(r.start) - e.log10(r.minNotZero), i = s === r.end ? r.top : s === r.minNotZero ? r.top + .02 * n : r.top + .02 * n + .98 * n / a * (e.log10(s) - e.log10(r.minNotZero))) : (a = e.log10(r.end) - e.log10(o), n = r.height, i = r.bottom - n / a * (e.log10(s) - e.log10(o))) : (a = e.log10(r.end) - e.log10(r.minNotZero), i = s === o ? r.bottom : s === r.minNotZero ? r.bottom - .02 * n : r.bottom - .02 * n - .98 * n / a * (e.log10(s) - e.log10(r.minNotZero)))), i
              },
              getValueForPixel: function(t) {
                var n, i, a = this,
                  r = e.log10(a.end) - e.log10(a.start);
                return a.isHorizontal() ? (i = a.width, n = a.start * Math.pow(10, (t - a.left) * r / i)) : (i = a.height, n = Math.pow(10, (a.bottom - t) * r / i) / a.start), n
              }
            });
          t.scaleService.registerScaleType("logarithmic", i, n)
        }
      }, {}],
      47: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
          function e(t) {
            return t.options.lineArc ? 0 : t.chart.data.labels.length
          }

          function n(t) {
            var e = t.options.pointLabels,
              n = f.getValueOrDefault(e.fontSize, g.defaultFontSize),
              i = f.getValueOrDefault(e.fontStyle, g.defaultFontStyle),
              a = f.getValueOrDefault(e.fontFamily, g.defaultFontFamily),
              r = f.fontString(n, i, a);
            return {
              size: n,
              style: i,
              family: a,
              font: r
            }
          }

          function i(t, e, n) {
            return f.isArray(n) ? {
              w: f.longestText(t, t.font, n),
              h: n.length * e + 1.5 * (n.length - 1) * e
            } : {
              w: t.measureText(n).width,
              h: e
            }
          }

          function a(t, e, n, i, a) {
            return t === i || t === a ? {
              start: e - n / 2,
              end: e + n / 2
            } : i > t || t > a ? {
              start: e - n - 5,
              end: e
            } : {
              start: e,
              end: e + n + 5
            }
          }

          function r(t) {
            var r, o, s, l = n(t),
              u = Math.min(t.height / 2, t.width / 2),
              d = {
                l: t.width,
                r: 0,
                t: t.height,
                b: 0
              },
              c = {};
            t.ctx.font = l.font, t._pointLabelSizes = [];
            var h = e(t);
            for (r = 0; h > r; r++) {
              s = t.getPointPosition(r, u), o = i(t.ctx, l.size, t.pointLabels[r] || ""), t._pointLabelSizes[r] = o;
              var g = t.getIndexAngle(r),
                m = f.toDegrees(g) % 360,
                p = a(m, s.x, o.w, 0, 180),
                v = a(m, s.y, o.h, 90, 270);
              p.start < d.l && (d.l = p.start, c.l = g), p.end > d.r && (d.r = p.end, c.r = g), v.start < d.t && (d.t = v.start, c.t = g), v.end > d.b && (d.b = v.end, c.b = g)
            }
            t.setReductions(u, d, c)
          }

          function o(t) {
            var e = Math.min(t.height / 2, t.width / 2);
            t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0)
          }

          function s(t) {
            return 0 === t || 180 === t ? "center" : 180 > t ? "left" : "right"
          }

          function l(t, e, n, i) {
            if (f.isArray(e))
              for (var a = n.y, r = 1.5 * i, o = 0; o < e.length; ++o) t.fillText(e[o], n.x, a), a += r;
            else t.fillText(e, n.x, n.y)
          }

          function u(t, e, n) {
            90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || 90 > t) && (n.y -= e.h)
          }

          function d(t) {
            var i = t.ctx,
              a = f.getValueOrDefault,
              r = t.options,
              o = r.angleLines,
              d = r.pointLabels;
            i.lineWidth = o.lineWidth, i.strokeStyle = o.color;
            var c = t.getDistanceFromCenterForValue(r.reverse ? t.min : t.max),
              h = n(t);
            i.textBaseline = "top";
            for (var m = e(t) - 1; m >= 0; m--) {
              if (o.display) {
                var p = t.getPointPosition(m, c);
                i.beginPath(), i.moveTo(t.xCenter, t.yCenter), i.lineTo(p.x, p.y), i.stroke(), i.closePath()
              }
              var v = t.getPointPosition(m, c + 5),
                b = a(d.fontColor, g.defaultFontColor);
              i.font = h.font, i.fillStyle = b;
              var y = t.getIndexAngle(m),
                x = f.toDegrees(y);
              i.textAlign = s(x), u(x, t._pointLabelSizes[m], v), l(i, t.pointLabels[m] || "", v, h.size)
            }
          }

          function c(t, n, i, a) {
            var r = t.ctx;
            if (r.strokeStyle = f.getValueAtIndexOrDefault(n.color, a - 1), r.lineWidth = f.getValueAtIndexOrDefault(n.lineWidth, a - 1), t.options.lineArc) r.beginPath(), r.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), r.closePath(), r.stroke();
            else {
              var o = e(t);
              if (0 === o) return;
              r.beginPath();
              var s = t.getPointPosition(0, i);
              r.moveTo(s.x, s.y);
              for (var l = 1; o > l; l++) s = t.getPointPosition(l, i), r.lineTo(s.x, s.y);
              r.closePath(), r.stroke()
            }
          }

          function h(t) {
            return f.isNumber(t) ? t : 0
          }
          var f = t.helpers,
            g = t.defaults.global,
            m = {
              display: !0,
              animate: !0,
              lineArc: !1,
              position: "chartArea",
              angleLines: {
                display: !0,
                color: "rgba(0, 0, 0, 0.1)",
                lineWidth: 1
              },
              ticks: {
                showLabelBackdrop: !0,
                backdropColor: "rgba(255,255,255,0.75)",
                backdropPaddingY: 2,
                backdropPaddingX: 2,
                callback: t.Ticks.formatters.linear
              },
              pointLabels: {
                fontSize: 10,
                callback: function(t) {
                  return t
                }
              }
            },
            p = t.LinearScaleBase.extend({
              setDimensions: function() {
                var t = this,
                  e = t.options,
                  n = e.ticks;
                t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                var i = f.min([t.height, t.width]),
                  a = f.getValueOrDefault(n.fontSize, g.defaultFontSize);
                t.drawingArea = e.display ? i / 2 - (a / 2 + n.backdropPaddingY) : i / 2
              },
              determineDataLimits: function() {
                var t = this,
                  e = t.chart,
                  n = Number.POSITIVE_INFINITY,
                  i = Number.NEGATIVE_INFINITY;
                f.each(e.data.datasets, function(a, r) {
                  if (e.isDatasetVisible(r)) {
                    var o = e.getDatasetMeta(r);
                    f.each(a.data, function(e, a) {
                      var r = +t.getRightValue(e);
                      isNaN(r) || o.data[a].hidden || (n = Math.min(r, n), i = Math.max(r, i))
                    })
                  }
                }), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions()
              },
              getTickLimit: function() {
                var t = this.options.ticks,
                  e = f.getValueOrDefault(t.fontSize, g.defaultFontSize);
                return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * e)))
              },
              convertTicksToLabels: function() {
                var e = this;
                t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
              },
              getLabelForIndex: function(t, e) {
                return +this.getRightValue(this.chart.data.datasets[e].data[t])
              },
              fit: function() {
                this.options.lineArc ? o(this) : r(this)
              },
              setReductions: function(t, e, n) {
                var i = this,
                  a = e.l / Math.sin(n.l),
                  r = Math.max(e.r - i.width, 0) / Math.sin(n.r),
                  o = -e.t / Math.cos(n.t),
                  s = -Math.max(e.b - i.height, 0) / Math.cos(n.b);
                a = h(a), r = h(r), o = h(o), s = h(s), i.drawingArea = Math.min(Math.round(t - (a + r) / 2), Math.round(t - (o + s) / 2)), i.setCenterPoint(a, r, o, s)
              },
              setCenterPoint: function(t, e, n, i) {
                var a = this,
                  r = a.width - e - a.drawingArea,
                  o = t + a.drawingArea,
                  s = n + a.drawingArea,
                  l = a.height - i - a.drawingArea;
                a.xCenter = Math.round((o + r) / 2 + a.left), a.yCenter = Math.round((s + l) / 2 + a.top)
              },
              getIndexAngle: function(t) {
                var n = 2 * Math.PI / e(this),
                  i = this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0,
                  a = i * Math.PI * 2 / 360;
                return t * n + a
              },
              getDistanceFromCenterForValue: function(t) {
                var e = this;
                if (null === t) return 0;
                var n = e.drawingArea / (e.max - e.min);
                return e.options.reverse ? (e.max - t) * n : (t - e.min) * n
              },
              getPointPosition: function(t, e) {
                var n = this,
                  i = n.getIndexAngle(t) - Math.PI / 2;
                return {
                  x: Math.round(Math.cos(i) * e) + n.xCenter,
                  y: Math.round(Math.sin(i) * e) + n.yCenter
                }
              },
              getPointPositionForValue: function(t, e) {
                return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
              },
              getBasePosition: function() {
                var t = this,
                  e = t.min,
                  n = t.max;
                return t.getPointPositionForValue(0, t.beginAtZero ? 0 : 0 > e && 0 > n ? n : e > 0 && n > 0 ? e : 0)
              },
              draw: function() {
                var t = this,
                  e = t.options,
                  n = e.gridLines,
                  i = e.ticks,
                  a = f.getValueOrDefault;
                if (e.display) {
                  var r = t.ctx,
                    o = a(i.fontSize, g.defaultFontSize),
                    s = a(i.fontStyle, g.defaultFontStyle),
                    l = a(i.fontFamily, g.defaultFontFamily),
                    u = f.fontString(o, s, l);
                  f.each(t.ticks, function(s, l) {
                    if (l > 0 || e.reverse) {
                      var d = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]),
                        h = t.yCenter - d;
                      if (n.display && 0 !== l && c(t, n, d, l), i.display) {
                        var f = a(i.fontColor, g.defaultFontColor);
                        if (r.font = u, i.showLabelBackdrop) {
                          var m = r.measureText(s).width;
                          r.fillStyle = i.backdropColor, r.fillRect(t.xCenter - m / 2 - i.backdropPaddingX, h - o / 2 - i.backdropPaddingY, m + 2 * i.backdropPaddingX, o + 2 * i.backdropPaddingY)
                        }
                        r.textAlign = "center", r.textBaseline = "middle", r.fillStyle = f, r.fillText(s, t.xCenter, h)
                      }
                    }
                  }), e.lineArc || d(t)
                }
              }
            });
          t.scaleService.registerScaleType("radialLinear", p, m)
        }
      }, {}],
      48: [function(t, e, n) {
        "use strict";
        var i = t(6);
        i = "function" == typeof i ? i : window.moment, e.exports = function(t) {
          var e = t.helpers,
            n = {
              units: [{
                name: "millisecond",
                steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
              }, {
                name: "second",
                steps: [1, 2, 5, 10, 30]
              }, {
                name: "minute",
                steps: [1, 2, 5, 10, 30]
              }, {
                name: "hour",
                steps: [1, 2, 3, 6, 12]
              }, {
                name: "day",
                steps: [1, 2, 5]
              }, {
                name: "week",
                maxStep: 4
              }, {
                name: "month",
                maxStep: 3
              }, {
                name: "quarter",
                maxStep: 4
              }, {
                name: "year",
                maxStep: !1
              }]
            },
            a = {
              position: "bottom",
              time: {
                parser: !1,
                format: !1,
                unit: !1,
                round: !1,
                displayFormat: !1,
                isoWeekday: !1,
                minUnit: "millisecond",
                displayFormats: {
                  millisecond: "h:mm:ss.SSS a",
                  second: "h:mm:ss a",
                  minute: "h:mm:ss a",
                  hour: "MMM D, hA",
                  day: "ll",
                  week: "ll",
                  month: "MMM YYYY",
                  quarter: "[Q]Q - YYYY",
                  year: "YYYY"
                }
              },
              ticks: {
                autoSkip: !1
              }
            },
            r = t.Scale.extend({
              initialize: function() {
                if (!i) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                t.Scale.prototype.initialize.call(this)
              },
              getLabelDiff: function(t, e) {
                var n = this;
                return null === t || null === e ? null : (void 0 === n.labelDiffs && n.buildLabelDiffs(), "undefined" != typeof n.labelDiffs[t] ? n.labelDiffs[t][e] : null)
              },
              getMomentStartOf: function(t) {
                var e = this;
                return "week" === e.options.time.unit && e.options.time.isoWeekday !== !1 ? t.clone().startOf("isoWeek").isoWeekday(e.options.time.isoWeekday) : t.clone().startOf(e.tickUnit)
              },
              determineDataLimits: function() {
                function t(t, e) {
                  var i = n.parseTime(e);
                  i.isValid() && (n.options.time.round && i.startOf(n.options.time.round), t.push(i))
                }
                var n = this;
                n.labelMoments = [];
                var a = [];
                n.chart.data.labels && n.chart.data.labels.length > 0 ? (e.each(n.chart.data.labels, function(e) {
                  t(a, e)
                }, n), n.firstTick = i.min(a), n.lastTick = i.max(a)) : (n.firstTick = null, n.lastTick = null), e.each(n.chart.data.datasets, function(r, o) {
                  var s = [];
                  if ("object" == typeof r.data[0] && null !== r.data[0]) {
                    if (e.each(r.data, function(e) {
                        t(s, n.getRightValue(e))
                      }, n), n.chart.isDatasetVisible(o)) {
                      var l = i.min(s),
                        u = i.max(s);
                      n.firstTick = null !== n.firstTick ? i.min(n.firstTick, l) : l, n.lastTick = null !== n.lastTick ? i.max(n.lastTick, u) : u
                    }
                  } else s = a;
                  n.labelMoments.push(s)
                }, n), n.options.time.min && (n.firstTick = n.parseTime(n.options.time.min)), n.options.time.max && (n.lastTick = n.parseTime(n.options.time.max)), n.firstTick = (n.firstTick || i()).clone(), n.lastTick = (n.lastTick || i()).clone()
              },
              buildLabelDiffs: function() {
                var t = this;
                t.labelDiffs = t.labelMoments.map(function(e) {
                  return e.map(function(e) {
                    return e.diff(t.firstTick, t.tickUnit, !0)
                  })
                })
              },
              buildTicks: function() {
                var i = this;
                i.ctx.save();
                var a = e.getValueOrDefault(i.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                  r = e.getValueOrDefault(i.options.ticks.fontStyle, t.defaults.global.defaultFontStyle),
                  o = e.getValueOrDefault(i.options.ticks.fontFamily, t.defaults.global.defaultFontFamily),
                  s = e.fontString(a, r, o);
                if (i.ctx.font = s, i.ticks = [], i.unitScale = 1, i.scaleSizeInUnits = 0, i.options.time.unit) i.tickUnit = i.options.time.unit || "day", i.displayFormat = i.options.time.displayFormats[i.tickUnit], i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0), i.unitScale = e.getValueOrDefault(i.options.time.unitStepSize, 1);
                else {
                  var l = i.isHorizontal() ? i.width : i.height,
                    u = i.tickFormatFunction(i.firstTick, 0, []),
                    d = i.ctx.measureText(u).width,
                    c = Math.cos(e.toRadians(i.options.ticks.maxRotation)),
                    h = Math.sin(e.toRadians(i.options.ticks.maxRotation));
                  d = d * c + a * h;
                  var f = l / d;
                  i.tickUnit = i.options.time.minUnit, i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0), i.displayFormat = i.options.time.displayFormats[i.tickUnit];
                  for (var g = 0, m = n.units[g]; g < n.units.length;) {
                    if (i.unitScale = 1, e.isArray(m.steps) && Math.ceil(i.scaleSizeInUnits / f) < e.max(m.steps)) {
                      for (var p = 0; p < m.steps.length; ++p)
                        if (m.steps[p] >= Math.ceil(i.scaleSizeInUnits / f)) {
                          i.unitScale = e.getValueOrDefault(i.options.time.unitStepSize, m.steps[p]);
                          break
                        }
                      break
                    }
                    if (m.maxStep === !1 || Math.ceil(i.scaleSizeInUnits / f) < m.maxStep) {
                      i.unitScale = e.getValueOrDefault(i.options.time.unitStepSize, Math.ceil(i.scaleSizeInUnits / f));
                      break
                    }++g, m = n.units[g], i.tickUnit = m.name;
                    var v = i.firstTick.diff(i.getMomentStartOf(i.firstTick), i.tickUnit, !0),
                      b = i.getMomentStartOf(i.lastTick.clone().add(1, i.tickUnit)).diff(i.lastTick, i.tickUnit, !0);
                    i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0) + v + b, i.displayFormat = i.options.time.displayFormats[m.name]
                  }
                }
                var y;
                if (i.options.time.min ? y = i.getMomentStartOf(i.firstTick) : (i.firstTick = i.getMomentStartOf(i.firstTick), y = i.firstTick), !i.options.time.max) {
                  var x = i.getMomentStartOf(i.lastTick),
                    k = x.diff(i.lastTick, i.tickUnit, !0);
                  0 > k ? i.lastTick = i.getMomentStartOf(i.lastTick.add(1, i.tickUnit)) : k >= 0 && (i.lastTick = x), i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0)
                }
                i.options.time.displayFormat && (i.displayFormat = i.options.time.displayFormat), i.ticks.push(i.firstTick.clone());
                for (var _ = i.unitScale; _ <= i.scaleSizeInUnits; _ += i.unitScale) {
                  var w = y.clone().add(_, i.tickUnit);
                  if (i.options.time.max && w.diff(i.lastTick, i.tickUnit, !0) >= 0) break;
                  i.ticks.push(w)
                }
                var S = i.ticks[i.ticks.length - 1].diff(i.lastTick, i.tickUnit);
                (0 !== S || 0 === i.scaleSizeInUnits) && (i.options.time.max ? (i.ticks.push(i.lastTick.clone()), i.scaleSizeInUnits = i.lastTick.diff(i.ticks[0], i.tickUnit, !0)) : (i.ticks.push(i.lastTick.clone()), i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0))), i.ctx.restore(), i.labelDiffs = void 0
              },
              getLabelForIndex: function(t, e) {
                var n = this,
                  i = n.chart.data.labels && t < n.chart.data.labels.length ? n.chart.data.labels[t] : "",
                  a = n.chart.data.datasets[e].data[t];
                return null !== a && "object" == typeof a && (i = n.getRightValue(a)), n.options.time.tooltipFormat && (i = n.parseTime(i).format(n.options.time.tooltipFormat)), i
              },
              tickFormatFunction: function(t, n, i) {
                var a = t.format(this.displayFormat),
                  r = this.options.ticks,
                  o = e.getValueOrDefault(r.callback, r.userCallback);
                return o ? o(a, n, i) : a
              },
              convertTicksToLabels: function() {
                var t = this;
                t.tickMoments = t.ticks, t.ticks = t.ticks.map(t.tickFormatFunction, t)
              },
              getPixelForValue: function(t, e, n) {
                var i = this,
                  a = null;
                if (void 0 !== e && void 0 !== n && (a = i.getLabelDiff(n, e)), null === a && (t && t.isValid || (t = i.parseTime(i.getRightValue(t))), t && t.isValid && t.isValid() && (a = t.diff(i.firstTick, i.tickUnit, !0))), null !== a) {
                  var r = 0 !== a ? a / i.scaleSizeInUnits : a;
                  if (i.isHorizontal()) {
                    var o = i.width * r;
                    return i.left + Math.round(o)
                  }
                  var s = i.height * r;
                  return i.top + Math.round(s)
                }
              },
              getPixelForTick: function(t) {
                return this.getPixelForValue(this.tickMoments[t], null, null)
              },
              getValueForPixel: function(t) {
                var e = this,
                  n = e.isHorizontal() ? e.width : e.height,
                  a = (t - (e.isHorizontal() ? e.left : e.top)) / n;
                return a *= e.scaleSizeInUnits, e.firstTick.clone().add(i.duration(a, e.tickUnit).asSeconds(), "seconds")
              },
              parseTime: function(t) {
                var e = this;
                return "string" == typeof e.options.time.parser ? i(t, e.options.time.parser) : "function" == typeof e.options.time.parser ? e.options.time.parser(t) : "function" == typeof t.getMonth || "number" == typeof t ? i(t) : t.isValid && t.isValid() ? t : "string" != typeof e.options.time.format && e.options.time.format.call ? (console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"), e.options.time.format(t)) : i(t, e.options.time.format)
              }
            });
          t.scaleService.registerScaleType("time", r, a)
        }
      }, {
        6: 6
      }]
    }, {}, [7])(7)
  });

