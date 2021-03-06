function hexToRgb(t) {
    t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, n, i) {
        return e + e + n + n + i + i
    });
    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return e ? {
        r: parseInt(e[1], 16),
        g: parseInt(e[2], 16),
        b: parseInt(e[3], 16)
    } : null
}

function clamp(t, e, n) {
    return Math.min(Math.max(t, e), n)
}

function isInArray(t, e) {
    return e.indexOf(t) > -1
}
if (function (t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function (t, e) {
        function n(t) {
            var e = !!t && "length" in t && t.length,
                n = ot.type(t);
            return "function" !== n && !ot.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function i(t, e, n) {
            if (ot.isFunction(e)) return ot.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return ot.grep(t, function (t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (dt.test(e)) return ot.filter(e, t, n);
                e = ot.filter(e, t)
            }
            return ot.grep(t, function (t) {
                return Z.call(e, t) > -1 !== n
            })
        }

        function r(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function o(t) {
            var e = {};
            return ot.each(t.match(gt) || [], function (t, n) {
                e[n] = !0
            }), e
        }

        function s() {
            Q.removeEventListener("DOMContentLoaded", s), t.removeEventListener("load", s), ot.ready()
        }

        function a() {
            this.expando = ot.expando + a.uid++
        }

        function l(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(kt, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ct.test(n) ? ot.parseJSON(n) : n)
                    } catch (t) {}
                    Tt.set(t, e, n)
                } else n = void 0;
            return n
        }

        function c(t, e, n, i) {
            var r, o = 1,
                s = 20,
                a = i ? function () {
                    return i.cur()
                } : function () {
                    return ot.css(t, e, "")
                },
                l = a(),
                c = n && n[3] || (ot.cssNumber[e] ? "" : "px"),
                u = (ot.cssNumber[e] || "px" !== c && +l) && St.exec(ot.css(t, e));
            if (u && u[3] !== c) {
                c = c || u[3], n = n || [], u = +l || 1;
                do {
                    o = o || ".5", u /= o, ot.style(t, e, u + c)
                } while (o !== (o = a() / l) && 1 !== o && --s)
            }
            return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
        }

        function u(t, e) {
            var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], n) : n
        }

        function p(t, e) {
            for (var n = 0, i = t.length; i > n; n++) wt.set(t[n], "globalEval", !e || wt.get(e[n], "globalEval"))
        }

        function d(t, e, n, i, r) {
            for (var o, s, a, l, c, d, f = e.createDocumentFragment(), h = [], v = 0, m = t.length; m > v; v++)
                if ((o = t[v]) || 0 === o)
                    if ("object" === ot.type(o)) ot.merge(h, o.nodeType ? [o] : o);
                    else if (It.test(o)) {
                for (s = s || f.appendChild(e.createElement("div")), a = (Dt.exec(o) || ["", ""])[1].toLowerCase(), l = jt[a] || jt._default, s.innerHTML = l[1] + ot.htmlPrefilter(o) + l[2], d = l[0]; d--;) s = s.lastChild;
                ot.merge(h, s.childNodes), s = f.firstChild, s.textContent = ""
            } else h.push(e.createTextNode(o));
            for (f.textContent = "", v = 0; o = h[v++];)
                if (i && ot.inArray(o, i) > -1) r && r.push(o);
                else if (c = ot.contains(o.ownerDocument, o), s = u(f.appendChild(o), "script"), c && p(s), n)
                for (d = 0; o = s[d++];) Nt.test(o.type || "") && n.push(o);
            return f
        }

        function f() {
            return !0
        }

        function h() {
            return !1
        }

        function v() {
            try {
                return Q.activeElement
            } catch (t) {}
        }

        function m(t, e, n, i, r, o) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in e) m(t, a, n, i, e[a], o);
                return t
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = h;
            else if (!r) return this;
            return 1 === o && (s = r, r = function (t) {
                return ot().off(t), s.apply(this, arguments)
            }, r.guid = s.guid || (s.guid = ot.guid++)), t.each(function () {
                ot.event.add(this, e, r, i, n)
            })
        }

        function g(t, e) {
            return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t
        }

        function y(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function b(t) {
            var e = Ft.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function x(t, e) {
            var n, i, r, o, s, a, l, c;
            if (1 === e.nodeType) {
                if (wt.hasData(t) && (o = wt.access(t), s = wt.set(e, o), c = o.events)) {
                    delete s.handle, s.events = {};
                    for (r in c)
                        for (n = 0, i = c[r].length; i > n; n++) ot.event.add(e, r, c[r][n])
                }
                Tt.hasData(t) && (a = Tt.access(t), l = ot.extend({}, a), Tt.set(e, l))
            }
        }

        function w(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && $t.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }

        function T(t, e, n, i) {
            e = G.apply([], e);
            var r, o, s, a, l, c, p = 0,
                f = t.length,
                h = f - 1,
                v = e[0],
                m = ot.isFunction(v);
            if (m || f > 1 && "string" == typeof v && !it.checkClone && Pt.test(v)) return t.each(function (r) {
                var o = t.eq(r);
                m && (e[0] = v.call(this, r, o.html())), T(o, e, n, i)
            });
            if (f && (r = d(e, t[0].ownerDocument, !1, t, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                for (s = ot.map(u(r, "script"), y), a = s.length; f > p; p++) l = r, p !== h && (l = ot.clone(l, !0, !0), a && ot.merge(s, u(l, "script"))), n.call(t[p], l, p);
                if (a)
                    for (c = s[s.length - 1].ownerDocument, ot.map(s, b), p = 0; a > p; p++) l = s[p], Nt.test(l.type || "") && !wt.access(l, "globalEval") && ot.contains(c, l) && (l.src ? ot._evalUrl && ot._evalUrl(l.src) : ot.globalEval(l.textContent.replace(Mt, "")))
            }
            return t
        }

        function C(t, e, n) {
            for (var i, r = e ? ot.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || ot.cleanData(u(i)), i.parentNode && (n && ot.contains(i.ownerDocument, i) && p(u(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        function k(t, e) {
            var n = ot(e.createElement(t)).appendTo(e.body),
                i = ot.css(n[0], "display");
            return n.detach(), i
        }

        function E(t) {
            var e = Q,
                n = Wt[t];
            return n || (n = k(t, e), "none" !== n && n || (Ht = (Ht || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ht[0].contentDocument, e.write(), e.close(), n = k(t, e), Ht.detach()), Wt[t] = n), n
        }

        function S(t, e, n) {
            var i, r, o, s, a = t.style;
            return n = n || Ut(t), n && (s = n.getPropertyValue(e) || n[e], "" !== s || ot.contains(t.ownerDocument, t) || (s = ot.style(t, e)), !it.pixelMarginRight() && Bt.test(s) && zt.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
        }

        function _(t, e) {
            return {
                get: function () {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function A(t) {
            if (t in Kt) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = Gt.length; n--;)
                if ((t = Gt[n] + e) in Kt) return t
        }

        function $(t, e, n) {
            var i = St.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function D(t, e, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += ot.css(t, n + _t[o], !0, r)), i ? ("content" === n && (s -= ot.css(t, "padding" + _t[o], !0, r)), "margin" !== n && (s -= ot.css(t, "border" + _t[o] + "Width", !0, r))) : (s += ot.css(t, "padding" + _t[o], !0, r), "padding" !== n && (s += ot.css(t, "border" + _t[o] + "Width", !0, r)));
            return s
        }

        function N(e, n, i) {
            var r = !0,
                o = "width" === n ? e.offsetWidth : e.offsetHeight,
                s = Ut(e),
                a = "border-box" === ot.css(e, "boxSizing", !1, s);
            if (Q.msFullscreenElement && t.top !== t && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[n])), 0 >= o || null == o) {
                if (o = S(e, n, s), (0 > o || null == o) && (o = e.style[n]), Bt.test(o)) return o;
                r = a && (it.boxSizingReliable() || o === e.style[n]), o = parseFloat(o) || 0
            }
            return o + D(e, n, i || (a ? "border" : "content"), r, s) + "px"
        }

        function j(t, e) {
            for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (o[s] = wt.get(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && At(i) && (o[s] = wt.access(i, "olddisplay", E(i.nodeName)))) : (r = At(i), "none" === n && r || wt.set(i, "olddisplay", r ? n : ot.css(i, "display"))));
            for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
            return t
        }

        function I(t, e, n, i, r) {
            return new I.prototype.init(t, e, n, i, r)
        }

        function O() {
            return t.setTimeout(function () {
                Zt = void 0
            }), Zt = ot.now()
        }

        function R(t, e) {
            var n, i = 0,
                r = {
                    height: t
                };
            for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = _t[i], r["margin" + n] = r["padding" + n] = t;
            return e && (r.opacity = r.width = t), r
        }

        function L(t, e, n) {
            for (var i, r = (F.tweeners[e] || []).concat(F.tweeners["*"]), o = 0, s = r.length; s > o; o++)
                if (i = r[o].call(n, e, t)) return i
        }

        function q(t, e, n) {
            var i, r, o, s, a, l, c, u = this,
                p = {},
                d = t.style,
                f = t.nodeType && At(t),
                h = wt.get(t, "fxshow");
            n.queue || (a = ot._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                a.unqueued || l()
            }), a.unqueued++, u.always(function () {
                u.always(function () {
                    a.unqueued--, ot.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], c = ot.css(t, "display"), "inline" === ("none" === c ? wt.get(t, "olddisplay") || E(t.nodeName) : c) && "none" === ot.css(t, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", u.always(function () {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (r = e[i], ee.exec(r)) {
                    if (delete e[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                        if ("show" !== r || !h || void 0 === h[i]) continue;
                        f = !0
                    }
                    p[i] = h && h[i] || ot.style(t, i)
                } else c = void 0;
            if (ot.isEmptyObject(p)) "inline" === ("none" === c ? E(t.nodeName) : c) && (d.display = c);
            else {
                h ? "hidden" in h && (f = h.hidden) : h = wt.access(t, "fxshow", {}), o && (h.hidden = !f), f ? ot(t).show() : u.done(function () {
                    ot(t).hide()
                }), u.done(function () {
                    var e;
                    wt.remove(t, "fxshow");
                    for (e in p) ot.style(t, e, p[e])
                });
                for (i in p) s = L(f ? h[i] : 0, i, u), i in h || (h[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function P(t, e) {
            var n, i, r, o, s;
            for (n in t)
                if (i = ot.camelCase(n), r = e[i], o = t[n], ot.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (s = ot.cssHooks[i]) && "expand" in s) {
                    o = s.expand(o), delete t[i];
                    for (n in o) n in t || (t[n] = o[n], e[n] = r)
                } else e[i] = r
        }

        function F(t, e, n) {
            var i, r, o = 0,
                s = F.prefilters.length,
                a = ot.Deferred().always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (r) return !1;
                    for (var e = Zt || O(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, o = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(o);
                    return a.notifyWith(t, [c, o, n]), 1 > o && l ? n : (a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: ot.extend({}, e),
                    opts: ot.extend(!0, {
                        specialEasing: {},
                        easing: ot.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: Zt || O(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (e, n) {
                        var i = ot.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function (e) {
                        var n = 0,
                            i = e ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) c.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                    }
                }),
                u = c.props;
            for (P(u, c.opts.specialEasing); s > o; o++)
                if (i = F.prefilters[o].call(c, t, u, c.opts)) return ot.isFunction(i.stop) && (ot._queueHooks(c.elem, c.opts.queue).stop = ot.proxy(i.stop, i)), i;
            return ot.map(u, L, c), ot.isFunction(c.opts.start) && c.opts.start.call(t, c), ot.fx.timer(ot.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function M(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function H(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0,
                    o = e.toLowerCase().match(gt) || [];
                if (ot.isFunction(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function W(t, e, n, i) {
            function r(a) {
                var l;
                return o[a] = !0, ot.each(t[a] || [], function (t, a) {
                    var c = a(e, n, i);
                    return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
                }), l
            }
            var o = {},
                s = t === ge;
            return r(e.dataTypes[0]) || !o["*"] && r("*")
        }

        function z(t, e) {
            var n, i, r = ot.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
            return i && ot.extend(!0, t, i), t
        }

        function B(t, e, n) {
            for (var i, r, o, s, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
                for (r in a)
                    if (a[r] && a[r].test(i)) {
                        l.unshift(r);
                        break
                    } if (l[0] in n) o = l[0];
            else {
                for (r in n) {
                    if (!l[0] || t.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    s || (s = r)
                }
                o = o || s
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }

        function U(t, e, n, i) {
            var r, o, s, a, l, c = {},
                u = t.dataTypes.slice();
            if (u[1])
                for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
            for (o = u.shift(); o;)
                if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (!(s = c[l + " " + o] || c["* " + o]))
                    for (r in c)
                        if (a = r.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                            s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], u.unshift(a[1]));
                            break
                        } if (s !== !0)
                    if (s && t.throws) e = s(e);
                    else try {
                        e = s(e)
                    } catch (t) {
                        return {
                            state: "parsererror",
                            error: s ? t : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function X(t, e, n, i) {
            var r;
            if (ot.isArray(e)) ot.each(e, function (e, r) {
                n || xe.test(t) ? i(t, r) : X(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
            });
            else if (n || "object" !== ot.type(e)) i(t, e);
            else
                for (r in e) X(t + "[" + r + "]", e[r], n, i)
        }

        function V(t) {
            return ot.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var J = [],
            Q = t.document,
            Y = J.slice,
            G = J.concat,
            K = J.push,
            Z = J.indexOf,
            tt = {},
            et = tt.toString,
            nt = tt.hasOwnProperty,
            it = {},
            rt = "2.2.0",
            ot = function (t, e) {
                return new ot.fn.init(t, e)
            },
            st = function (t, e) {
                return e.toUpperCase()
            };
        ot.fn = ot.prototype = {
            jquery: rt,
            constructor: ot,
            selector: "",
            length: 0,
            toArray: function () {
                return Y.call(this)
            },
            get: function (t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : Y.call(this)
            },
            pushStack: function (t) {
                var e = ot.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function (t) {
                return ot.each(this, t)
            },
            map: function (t) {
                return this.pushStack(ot.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function () {
                return this.pushStack(Y.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: K,
            sort: J.sort,
            splice: J.splice
        }, ot.extend = ot.fn.extend = function () {
            var t, e, n, i, r, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || ot.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (t = arguments[a]))
                    for (e in t) n = s[e], i = t[e], s !== i && (c && i && (ot.isPlainObject(i) || (r = ot.isArray(i))) ? (r ? (r = !1, o = n && ot.isArray(n) ? n : []) : o = n && ot.isPlainObject(n) ? n : {}, s[e] = ot.extend(c, o, i)) : void 0 !== i && (s[e] = i));
            return s
        }, ot.extend({
            expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t)
            },
            noop: function () {},
            isFunction: function (t) {
                return "function" === ot.type(t)
            },
            isArray: Array.isArray,
            isWindow: function (t) {
                return null != t && t === t.window
            },
            isNumeric: function (t) {
                var e = t && t.toString();
                return !ot.isArray(t) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function (t) {
                return "object" === ot.type(t) && !t.nodeType && !ot.isWindow(t) && !(t.constructor && !nt.call(t.constructor.prototype, "isPrototypeOf"))
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
            },
            globalEval: function (t) {
                var e, n = eval;
                (t = ot.trim(t)) && (1 === t.indexOf("use strict") ? (e = Q.createElement("script"), e.text = t, Q.head.appendChild(e).parentNode.removeChild(e)) : n(t))
            },
            camelCase: function (t) {
                return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, st)
            },
            nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function (t, e) {
                var i, r = 0;
                if (n(t))
                    for (i = t.length; i > r && e.call(t[r], r, t[r]) !== !1; r++);
                else
                    for (r in t)
                        if (e.call(t[r], r, t[r]) === !1) break;
                return t
            },
            trim: function (t) {
                return null == t ? "" : (t + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            },
            makeArray: function (t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? ot.merge(i, "string" == typeof t ? [t] : t) : K.call(i, t)), i
            },
            inArray: function (t, e, n) {
                return null == e ? -1 : Z.call(e, t, n)
            },
            merge: function (t, e) {
                for (var n = +e.length, i = 0, r = t.length; n > i; i++) t[r++] = e[i];
                return t.length = r, t
            },
            grep: function (t, e, n) {
                for (var i = [], r = 0, o = t.length, s = !n; o > r; r++) !e(t[r], r) !== s && i.push(t[r]);
                return i
            },
            map: function (t, e, i) {
                var r, o, s = 0,
                    a = [];
                if (n(t))
                    for (r = t.length; r > s; s++) null != (o = e(t[s], s, i)) && a.push(o);
                else
                    for (s in t) null != (o = e(t[s], s, i)) && a.push(o);
                return G.apply([], a)
            },
            guid: 1,
            proxy: function (t, e) {
                var n, i, r;
                return "string" == typeof e && (n = t[e], e = t, t = n), ot.isFunction(t) ? (i = Y.call(arguments, 2), r = function () {
                    return t.apply(e || this, i.concat(Y.call(arguments)))
                }, r.guid = t.guid = t.guid || ot.guid++, r) : void 0
            },
            now: Date.now,
            support: it
        }), "function" == typeof Symbol && (ot.fn[Symbol.iterator] = J[Symbol.iterator]), ot.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            tt["[object " + e + "]"] = e.toLowerCase()
        });
        var at = function (t) {
            function e(t, e, n, i) {
                var r, o, s, a, c, p, d, f, h = e && e.ownerDocument,
                    v = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== v && 9 !== v && 11 !== v) return n;
                if (!i && ((e ? e.ownerDocument || e : P) !== D && $(e), e = e || D, j)) {
                    if (11 !== v && (p = vt.exec(t)))
                        if (r = p[1]) {
                            if (9 === v) {
                                if (!(s = e.getElementById(r))) return n;
                                if (s.id === r) return n.push(s), n
                            } else if (h && (s = h.getElementById(r)) && L(e, s) && s.id === r) return n.push(s), n
                        } else {
                            if (p[2]) return Y.apply(n, e.getElementsByTagName(t)), n;
                            if ((r = p[3]) && b.getElementsByClassName && e.getElementsByClassName) return Y.apply(n, e.getElementsByClassName(r)), n
                        } if (b.qsa && !z[t + " "] && (!I || !I.test(t))) {
                        if (1 !== v) h = e, f = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(gt, "\\$&") : e.setAttribute("id", a = q), d = C(t), o = d.length, c = ut.test(a) ? "#" + a : "[id='" + a + "']"; o--;) d[o] = c + " " + u(d[o]);
                            f = d.join(","), h = mt.test(t) && l(e.parentNode) || e
                        }
                        if (f) try {
                            return Y.apply(n, h.querySelectorAll(f)), n
                        } catch (t) {} finally {
                            a === q && e.removeAttribute("id")
                        }
                    }
                }
                return E(t.replace(ot, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[q] = !0, t
            }

            function r(t) {
                var e = D.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var n = t.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = e
            }

            function s(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return i(function (e) {
                    return e = +e, i(function (n, i) {
                        for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function l(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }

            function c() {}

            function u(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                return i
            }

            function p(t, e, n) {
                var i = e.dir,
                    r = n && "parentNode" === i,
                    o = M++;
                return e.first ? function (e, n, o) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) return t(e, n, o)
                } : function (e, n, s) {
                    var a, l, c, u = [F, o];
                    if (s) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || r) && t(e, n, s)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || r) {
                                if (c = e[q] || (e[q] = {}), l = c[e.uniqueID] || (c[e.uniqueID] = {}), (a = l[i]) && a[0] === F && a[1] === o) return u[2] = a[2];
                                if (l[i] = u, u[2] = t(e, n, s)) return !0
                            }
                }
            }

            function d(t) {
                return t.length > 1 ? function (e, n, i) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function f(t, n, i) {
                for (var r = 0, o = n.length; o > r; r++) e(t, n[r], i);
                return i
            }

            function h(t, e, n, i, r) {
                for (var o, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(o = t[a]) && (!n || n(o, i, r)) && (s.push(o), c && e.push(a));
                return s
            }

            function v(t, e, n, r, o, s) {
                return r && !r[q] && (r = v(r)), o && !o[q] && (o = v(o, s)), i(function (i, s, a, l) {
                    var c, u, p, d = [],
                        v = [],
                        m = s.length,
                        g = i || f(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !i && e ? g : h(g, d, t, a, l),
                        b = n ? o || (i ? t : m || r) ? [] : s : y;
                    if (n && n(y, b, a, l), r)
                        for (c = h(b, v), r(c, [], a, l), u = c.length; u--;)(p = c[u]) && (b[v[u]] = !(y[v[u]] = p));
                    if (i) {
                        if (o || t) {
                            if (o) {
                                for (c = [], u = b.length; u--;)(p = b[u]) && c.push(y[u] = p);
                                o(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(p = b[u]) && (c = o ? K(i, p) : d[u]) > -1 && (i[c] = !(s[c] = p))
                        }
                    } else b = h(b === s ? b.splice(m, b.length) : b), o ? o(null, s, b, l) : Y.apply(s, b)
                })
            }

            function m(t) {
                for (var e, n, i, r = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, l = p(function (t) {
                        return t === e
                    }, s, !0), c = p(function (t) {
                        return K(e, t) > -1
                    }, s, !0), f = [function (t, n, i) {
                        var r = !o && (i || n !== S) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                        return e = null, r
                    }]; r > a; a++)
                    if (n = x.relative[t[a].type]) f = [p(d(f), n)];
                    else {
                        if (n = x.filter[t[a].type].apply(null, t[a].matches), n[q]) {
                            for (i = ++a; r > i && !x.relative[t[i].type]; i++);
                            return v(a > 1 && d(f), a > 1 && u(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(ot, "$1"), n, i > a && m(t.slice(a, i)), r > i && m(t = t.slice(i)), r > i && u(t))
                        }
                        f.push(n)
                    } return d(f)
            }

            function g(t, n) {
                var r = n.length > 0,
                    o = t.length > 0,
                    s = function (i, s, a, l, c) {
                        var u, p, d, f = 0,
                            v = "0",
                            m = i && [],
                            g = [],
                            y = S,
                            b = i || o && x.find.TAG("*", c),
                            w = F += null == y ? 1 : Math.random() || .1,
                            T = b.length;
                        for (c && (S = s === D || s || c); v !== T && null != (u = b[v]); v++) {
                            if (o && u) {
                                for (p = 0, s || u.ownerDocument === D || ($(u), a = !j); d = t[p++];)
                                    if (d(u, s || D, a)) {
                                        l.push(u);
                                        break
                                    } c && (F = w)
                            }
                            r && ((u = !d && u) && f--, i && m.push(u))
                        }
                        if (f += v, r && v !== f) {
                            for (p = 0; d = n[p++];) d(m, g, s, a);
                            if (i) {
                                if (f > 0)
                                    for (; v--;) m[v] || g[v] || (g[v] = J.call(l));
                                g = h(g)
                            }
                            Y.apply(l, g), c && !i && g.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                        }
                        return c && (F = w, S = y), m
                    };
                return r ? i(s) : s
            }
            var y, b, x, w, T, C, k, E, S, _, A, $, D, N, j, I, O, R, L, q = "sizzle" + 1 * new Date,
                P = t.document,
                F = 0,
                M = 0,
                H = n(),
                W = n(),
                z = n(),
                B = function (t, e) {
                    return t === e && (A = !0), 0
                },
                U = 1 << 31,
                X = {}.hasOwnProperty,
                V = [],
                J = V.pop,
                Q = V.push,
                Y = V.push,
                G = V.slice,
                K = function (t, e) {
                    for (var n = 0, i = t.length; i > n; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                tt = "[\\x20\\t\\r\\n\\f]",
                et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
                it = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)",
                rt = new RegExp(tt + "+", "g"),
                ot = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                st = new RegExp("^" + tt + "*," + tt + "*"),
                at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
                lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
                ct = new RegExp(it),
                ut = new RegExp("^" + et + "$"),
                pt = {
                    ID: new RegExp("^#(" + et + ")"),
                    CLASS: new RegExp("^\\.(" + et + ")"),
                    TAG: new RegExp("^(" + et + "|[*])"),
                    ATTR: new RegExp("^" + nt),
                    PSEUDO: new RegExp("^" + it),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Z + ")$", "i"),
                    needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
                },
                dt = /^(?:input|select|textarea|button)$/i,
                ft = /^h\d$/i,
                ht = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                mt = /[+~]/,
                gt = /'|\\/g,
                yt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
                bt = function (t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                xt = function () {
                    $()
                };
            try {
                Y.apply(V = G.call(P.childNodes), P.childNodes), V[P.childNodes.length].nodeType
            } catch (t) {
                Y = {
                    apply: V.length ? function (t, e) {
                        Q.apply(t, G.call(e))
                    } : function (t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            b = e.support = {}, T = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, $ = e.setDocument = function (t) {
                var e, n, i = t ? t.ownerDocument || t : P;
                return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, N = D.documentElement, j = !T(D), (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xt, !1) : n.attachEvent && n.attachEvent("onunload", xt)), b.attributes = r(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), b.getElementsByTagName = r(function (t) {
                    return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length
                }), b.getElementsByClassName = ht.test(D.getElementsByClassName), b.getById = r(function (t) {
                    return N.appendChild(t).id = q, !D.getElementsByName || !D.getElementsByName(q).length
                }), b.getById ? (x.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && j) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }, x.filter.ID = function (t) {
                    var e = t.replace(yt, bt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete x.find.ID, x.filter.ID = function (t) {
                    var e = t.replace(yt, bt);
                    return function (t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), x.find.TAG = b.getElementsByTagName ? function (t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var n, i = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, x.find.CLASS = b.getElementsByClassName && function (t, e) {
                    return void 0 !== e.getElementsByClassName && j ? e.getElementsByClassName(t) : void 0
                }, O = [], I = [], (b.qsa = ht.test(D.querySelectorAll)) && (r(function (t) {
                    N.appendChild(t).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || I.push("\\[" + tt + "*(?:value|" + Z + ")"), t.querySelectorAll("[id~=" + q + "-]").length || I.push("~="), t.querySelectorAll(":checked").length || I.push(":checked"), t.querySelectorAll("a#" + q + "+*").length || I.push(".#.+[+~]")
                }), r(function (t) {
                    var e = D.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && I.push("name" + tt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:")
                })), (b.matchesSelector = ht.test(R = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function (t) {
                    b.disconnectedMatch = R.call(t, "div"), R.call(t, "[s!='']:x"), O.push("!=", it)
                }), I = I.length && new RegExp(I.join("|")), O = O.length && new RegExp(O.join("|")), e = ht.test(N.compareDocumentPosition), L = e || ht.test(N.contains) ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function (t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, B = e ? function (t, e) {
                    if (t === e) return A = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === D || t.ownerDocument === P && L(P, t) ? -1 : e === D || e.ownerDocument === P && L(P, e) ? 1 : _ ? K(_, t) - K(_, e) : 0 : 4 & n ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return A = !0, 0;
                    var n, i = 0,
                        r = t.parentNode,
                        o = e.parentNode,
                        a = [t],
                        l = [e];
                    if (!r || !o) return t === D ? -1 : e === D ? 1 : r ? -1 : o ? 1 : _ ? K(_, t) - K(_, e) : 0;
                    if (r === o) return s(t, e);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (; a[i] === l[i];) i++;
                    return i ? s(a[i], l[i]) : a[i] === P ? -1 : l[i] === P ? 1 : 0
                }, D) : D
            }, e.matches = function (t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function (t, n) {
                if ((t.ownerDocument || t) !== D && $(t), n = n.replace(lt, "='$1']"), b.matchesSelector && j && !z[n + " "] && (!O || !O.test(n)) && (!I || !I.test(n))) try {
                    var i = R.call(t, n);
                    if (i || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {}
                return e(n, D, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== D && $(t), L(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== D && $(t);
                var n = x.attrHandle[e.toLowerCase()],
                    i = n && X.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !j) : void 0;
                return void 0 !== i ? i : b.attributes || !j ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, n = [],
                    i = 0,
                    r = 0;
                if (A = !b.detectDuplicates, _ = !b.sortStable && t.slice(0), t.sort(B), A) {
                    for (; e = t[r++];) e === t[r] && (i = n.push(r));
                    for (; i--;) t.splice(n[i], 1)
                }
                return _ = null, t
            }, w = e.getText = function (t) {
                var e, n = "",
                    i = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += w(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[i++];) n += w(e);
                return n
            }, x = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: pt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(yt, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(yt, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function (t) {
                        var e, n = !t[6] && t[2];
                        return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ct.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(yt, bt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function (t) {
                        var e = H[t + " "];
                        return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && H(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (t, n, i) {
                        return function (r) {
                            var o = e.attr(r, t);
                            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(rt, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function (t, e, n, i, r) {
                        var o = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === r ? function (t) {
                            return !!t.parentNode
                        } : function (e, n, l) {
                            var c, u, p, d, f, h, v = o !== s ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                g = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (m) {
                                if (o) {
                                    for (; v;) {
                                        for (d = e; d = d[v];)
                                            if (a ? d.nodeName.toLowerCase() === g : 1 === d.nodeType) return !1;
                                        h = v = "only" === t && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (d = m, p = d[q] || (d[q] = {}), u = p[d.uniqueID] || (p[d.uniqueID] = {}), c = u[t] || [], f = c[0] === F && c[1], b = f && c[2], d = f && m.childNodes[f]; d = ++f && d && d[v] || (b = f = 0) || h.pop();)
                                        if (1 === d.nodeType && ++b && d === e) {
                                            u[t] = [F, f, b];
                                            break
                                        }
                                } else if (y && (d = e, p = d[q] || (d[q] = {}), u = p[d.uniqueID] || (p[d.uniqueID] = {}), c = u[t] || [], f = c[0] === F && c[1], b = f), b === !1)
                                    for (;
                                        (d = ++f && d && d[v] || (b = f = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++b || (y && (p = d[q] || (d[q] = {}), u = p[d.uniqueID] || (p[d.uniqueID] = {}), u[t] = [F, b]), d !== e)););
                                return (b -= r) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function (t, n) {
                        var r, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[q] ? o(n) : o.length > 1 ? (r = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                            for (var i, r = o(t, n), s = r.length; s--;) i = K(t, r[s]), t[i] = !(e[i] = r[s])
                        }) : function (t) {
                            return o(t, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function (t) {
                        var e = [],
                            n = [],
                            r = k(t.replace(ot, "$1"));
                        return r[q] ? i(function (t, e, n, i) {
                            for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                        }) : function (t, i, o) {
                            return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: i(function (t) {
                        return function (n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function (t) {
                        return t = t.replace(yt, bt),
                            function (e) {
                                return (e.textContent || e.innerText || w(e)).indexOf(t) > -1
                            }
                    }),
                    lang: i(function (t) {
                        return ut.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(yt, bt).toLowerCase(),
                            function (e) {
                                var n;
                                do {
                                    if (n = j ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function (t) {
                        return t === N
                    },
                    focus: function (t) {
                        return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function (t) {
                        return t.disabled === !1
                    },
                    disabled: function (t) {
                        return t.disabled === !0
                    },
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (t) {
                        return !x.pseudos.empty(t)
                    },
                    header: function (t) {
                        return ft.test(t.nodeName)
                    },
                    input: function (t) {
                        return dt.test(t.nodeName)
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: a(function () {
                        return [0]
                    }),
                    last: a(function (t, e) {
                        return [e - 1]
                    }),
                    eq: a(function (t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: a(function (t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: a(function (t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: a(function (t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: a(function (t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (y in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[y] = function (t) {
                return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(y);
            for (y in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[y] = function (t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }(y);
            return c.prototype = x.filters = x.pseudos, x.setFilters = new c, C = e.tokenize = function (t, n) {
                var i, r, o, s, a, l, c, u = W[t + " "];
                if (u) return n ? 0 : u.slice(0);
                for (a = t, l = [], c = x.preFilter; a;) {
                    (!i || (r = st.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = at.exec(a)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(ot, " ")
                    }), a = a.slice(i.length));
                    for (s in x.filter) !(r = pt[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: s,
                        matches: r
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? e.error(t) : W(t, l).slice(0)
            }, k = e.compile = function (t, e) {
                var n, i = [],
                    r = [],
                    o = z[t + " "];
                if (!o) {
                    for (e || (e = C(t)), n = e.length; n--;) o = m(e[n]), o[q] ? i.push(o) : r.push(o);
                    o = z(t, g(r, i)), o.selector = t
                }
                return o
            }, E = e.select = function (t, e, n, i) {
                var r, o, s, a, c, p = "function" == typeof t && t,
                    d = !i && C(t = p.selector || t);
                if (n = n || [], 1 === d.length) {
                    if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && b.getById && 9 === e.nodeType && j && x.relative[o[1].type]) {
                        if (!(e = (x.find.ID(s.matches[0].replace(yt, bt), e) || [])[0])) return n;
                        p && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (r = pt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !x.relative[a = s.type]);)
                        if ((c = x.find[a]) && (i = c(s.matches[0].replace(yt, bt), mt.test(o[0].type) && l(e.parentNode) || e))) {
                            if (o.splice(r, 1), !(t = i.length && u(o))) return Y.apply(n, i), n;
                            break
                        }
                }
                return (p || k(t, d))(i, e, !j, n, !e || mt.test(t) && l(e.parentNode) || e), n
            }, b.sortStable = q.split("").sort(B).join("") === q, b.detectDuplicates = !!A, $(), b.sortDetached = r(function (t) {
                return 1 & t.compareDocumentPosition(D.createElement("div"))
            }), r(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function (t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), b.attributes && r(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function (t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), r(function (t) {
                return null == t.getAttribute("disabled")
            }) || o(Z, function (t, e, n) {
                var i;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        ot.find = at, ot.expr = at.selectors, ot.expr[":"] = ot.expr.pseudos, ot.uniqueSort = ot.unique = at.uniqueSort, ot.text = at.getText, ot.isXMLDoc = at.isXML, ot.contains = at.contains;
        var lt = function (t, e, n) {
                for (var i = [], r = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && ot(t).is(n)) break;
                        i.push(t)
                    } return i
            },
            ct = function (t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            ut = ot.expr.match.needsContext,
            pt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            dt = /^.[^:#\[\.,]*$/;
        ot.filter = function (t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ot.find.matchesSelector(i, t) ? [i] : [] : ot.find.matches(t, ot.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, ot.fn.extend({
            find: function (t) {
                var e, n = this.length,
                    i = [],
                    r = this;
                if ("string" != typeof t) return this.pushStack(ot(t).filter(function () {
                    for (e = 0; n > e; e++)
                        if (ot.contains(r[e], this)) return !0
                }));
                for (e = 0; n > e; e++) ot.find(t, r[e], i);
                return i = this.pushStack(n > 1 ? ot.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
            },
            filter: function (t) {
                return this.pushStack(i(this, t || [], !1))
            },
            not: function (t) {
                return this.pushStack(i(this, t || [], !0))
            },
            is: function (t) {
                return !!i(this, "string" == typeof t && ut.test(t) ? ot(t) : t || [], !1).length
            }
        });
        var ft, ht = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (ot.fn.init = function (t, e, n) {
            var i, r;
            if (!t) return this;
            if (n = n || ft, "string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ht.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Q, !0)), pt.test(i[1]) && ot.isPlainObject(e))
                        for (i in e) ot.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return r = Q.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Q, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ot.makeArray(t, this))
        }).prototype = ot.fn, ft = ot(Q);
        var vt = /^(?:parents|prev(?:Until|All))/,
            mt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ot.fn.extend({
            has: function (t) {
                var e = ot(t, this),
                    n = e.length;
                return this.filter(function () {
                    for (var t = 0; n > t; t++)
                        if (ot.contains(this, e[t])) return !0
                })
            },
            closest: function (t, e) {
                for (var n, i = 0, r = this.length, o = [], s = ut.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? ot.uniqueSort(o) : o)
            },
            index: function (t) {
                return t ? "string" == typeof t ? Z.call(ot(t), this[0]) : Z.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (t, e) {
                return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(t, e))))
            },
            addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ot.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function (t) {
                return lt(t, "parentNode")
            },
            parentsUntil: function (t, e, n) {
                return lt(t, "parentNode", n)
            },
            next: function (t) {
                return r(t, "nextSibling")
            },
            prev: function (t) {
                return r(t, "previousSibling")
            },
            nextAll: function (t) {
                return lt(t, "nextSibling")
            },
            prevAll: function (t) {
                return lt(t, "previousSibling")
            },
            nextUntil: function (t, e, n) {
                return lt(t, "nextSibling", n)
            },
            prevUntil: function (t, e, n) {
                return lt(t, "previousSibling", n)
            },
            siblings: function (t) {
                return ct((t.parentNode || {}).firstChild, t)
            },
            children: function (t) {
                return ct(t.firstChild)
            },
            contents: function (t) {
                return t.contentDocument || ot.merge([], t.childNodes)
            }
        }, function (t, e) {
            ot.fn[t] = function (n, i) {
                var r = ot.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ot.filter(i, r)), this.length > 1 && (mt[t] || ot.uniqueSort(r), vt.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var gt = /\S+/g;
        ot.Callbacks = function (t) {
            t = "string" == typeof t ? o(t) : ot.extend({}, t);
            var e, n, i, r, s = [],
                a = [],
                l = -1,
                c = function () {
                    for (r = t.once, i = e = !0; a.length; l = -1)
                        for (n = a.shift(); ++l < s.length;) s[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = s.length, n = !1);
                    t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
                },
                u = {
                    add: function () {
                        return s && (n && !e && (l = s.length - 1, a.push(n)), function e(n) {
                            ot.each(n, function (n, i) {
                                ot.isFunction(i) ? t.unique && u.has(i) || s.push(i) : i && i.length && "string" !== ot.type(i) && e(i)
                            })
                        }(arguments), n && !e && c()), this
                    },
                    remove: function () {
                        return ot.each(arguments, function (t, e) {
                            for (var n;
                                (n = ot.inArray(e, s, n)) > -1;) s.splice(n, 1), l >= n && l--
                        }), this
                    },
                    has: function (t) {
                        return t ? ot.inArray(t, s) > -1 : s.length > 0
                    },
                    empty: function () {
                        return s && (s = []), this
                    },
                    disable: function () {
                        return r = a = [], s = n = "", this
                    },
                    disabled: function () {
                        return !s
                    },
                    lock: function () {
                        return r = a = [], n || (s = n = ""), this
                    },
                    locked: function () {
                        return !!r
                    },
                    fireWith: function (t, n) {
                        return r || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || c()), this
                    },
                    fire: function () {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!i
                    }
                };
            return u
        }, ot.extend({
            Deferred: function (t) {
                var e = [["resolve", "done", ot.Callbacks("once memory"), "resolved"], ["reject", "fail", ot.Callbacks("once memory"), "rejected"], ["notify", "progress", ot.Callbacks("memory")]],
                    n = "pending",
                    i = {
                        state: function () {
                            return n
                        },
                        always: function () {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function () {
                            var t = arguments;
                            return ot.Deferred(function (n) {
                                ot.each(e, function (e, o) {
                                    var s = ot.isFunction(t[e]) && t[e];
                                    r[o[1]](function () {
                                        var t = s && s.apply(this, arguments);
                                        t && ot.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function (t) {
                            return null != t ? ot.extend(t, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, ot.each(e, function (t, o) {
                    var s = o[2],
                        a = o[3];
                    i[o[1]] = s.add, a && s.add(function () {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function () {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = s.fireWith
                }), i.promise(r), t && t.call(r, r), r
            },
            when: function (t) {
                var e, n, i, r = 0,
                    o = Y.call(arguments),
                    s = o.length,
                    a = 1 !== s || t && ot.isFunction(t.promise) ? s : 0,
                    l = 1 === a ? t : ot.Deferred(),
                    c = function (t, n, i) {
                        return function (r) {
                            n[t] = this, i[t] = arguments.length > 1 ? Y.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && ot.isFunction(o[r].promise) ? o[r].promise().progress(c(r, n, e)).done(c(r, i, o)).fail(l.reject) : --a;
                return a || l.resolveWith(i, o), l.promise()
            }
        });
        var yt;
        ot.fn.ready = function (t) {
            return ot.ready.promise().done(t), this
        }, ot.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (t) {
                t ? ot.readyWait++ : ot.ready(!0)
            },
            ready: function (t) {
                (t === !0 ? --ot.readyWait : ot.isReady) || (ot.isReady = !0, t !== !0 && --ot.readyWait > 0 || (yt.resolveWith(Q, [ot]), ot.fn.triggerHandler && (ot(Q).triggerHandler("ready"), ot(Q).off("ready"))))
            }
        }), ot.ready.promise = function (e) {
            return yt || (yt = ot.Deferred(), "complete" === Q.readyState || "loading" !== Q.readyState && !Q.documentElement.doScroll ? t.setTimeout(ot.ready) : (Q.addEventListener("DOMContentLoaded", s), t.addEventListener("load", s))), yt.promise(e)
        }, ot.ready.promise();
        var bt = function (t, e, n, i, r, o, s) {
                var a = 0,
                    l = t.length,
                    c = null == n;
                if ("object" === ot.type(n)) {
                    r = !0;
                    for (a in n) bt(t, e, a, n[a], !0, o, s)
                } else if (void 0 !== i && (r = !0, ot.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
                        return c.call(ot(t), n)
                    })), e))
                    for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return r ? t : c ? e.call(t) : l ? e(t[0], n) : o
            },
            xt = function (t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        a.uid = 1, a.prototype = {
            register: function (t, e) {
                var n = e || {};
                return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }), t[this.expando]
            },
            cache: function (t) {
                if (!xt(t)) return {};
                var e = t[this.expando];
                return e || (e = {}, xt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function (t, e, n) {
                var i, r = this.cache(t);
                if ("string" == typeof e) r[e] = n;
                else
                    for (i in e) r[i] = e[i];
                return r
            },
            get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
            },
            access: function (t, e, n) {
                var i;
                return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, ot.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function (t, e) {
                var n, i, r, o = t[this.expando];
                if (void 0 !== o) {
                    if (void 0 === e) this.register(t);
                    else {
                        ot.isArray(e) ? i = e.concat(e.map(ot.camelCase)) : (r = ot.camelCase(e), e in o ? i = [e, r] : (i = r, i = i in o ? [i] : i.match(gt) || [])), n = i.length;
                        for (; n--;) delete o[i[n]]
                    }(void 0 === e || ot.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !ot.isEmptyObject(e)
            }
        };
        var wt = new a,
            Tt = new a,
            Ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            kt = /[A-Z]/g;
        ot.extend({
            hasData: function (t) {
                return Tt.hasData(t) || wt.hasData(t)
            },
            data: function (t, e, n) {
                return Tt.access(t, e, n)
            },
            removeData: function (t, e) {
                Tt.remove(t, e)
            },
            _data: function (t, e, n) {
                return wt.access(t, e, n)
            },
            _removeData: function (t, e) {
                wt.remove(t, e)
            }
        }), ot.fn.extend({
            data: function (t, e) {
                var n, i, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = Tt.get(o), 1 === o.nodeType && !wt.get(o, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), l(o, i, r[i])));
                        wt.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function () {
                    Tt.set(this, t)
                }) : bt(this, function (e) {
                    var n, i;
                    if (o && void 0 === e) {
                        if (void 0 !== (n = Tt.get(o, t) || Tt.get(o, t.replace(kt, "-$&").toLowerCase()))) return n;
                        if (i = ot.camelCase(t), void 0 !== (n = Tt.get(o, i))) return n;
                        if (void 0 !== (n = l(o, i, void 0))) return n
                    } else i = ot.camelCase(t), this.each(function () {
                        var n = Tt.get(this, i);
                        Tt.set(this, i, e), t.indexOf("-") > -1 && void 0 !== n && Tt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function (t) {
                return this.each(function () {
                    Tt.remove(this, t)
                })
            }
        }), ot.extend({
            queue: function (t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = wt.get(t, e), n && (!i || ot.isArray(n) ? i = wt.access(t, e, ot.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var n = ot.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    o = ot._queueHooks(t, e),
                    s = function () {
                        ot.dequeue(t, e)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return wt.get(t, n) || wt.access(t, n, {
                    empty: ot.Callbacks("once memory").add(function () {
                        wt.remove(t, [e + "queue", n])
                    })
                })
            }
        }), ot.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var n = ot.queue(this, t, e);
                    ot._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ot.dequeue(this, t)
                })
            },
            dequeue: function (t) {
                return this.each(function () {
                    ot.dequeue(this, t)
                })
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", [])
            },
            promise: function (t, e) {
                var n, i = 1,
                    r = ot.Deferred(),
                    o = this,
                    s = this.length,
                    a = function () {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = wt.get(o[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var Et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            St = new RegExp("^(?:([+-])=|)(" + Et + ")([a-z%]*)$", "i"),
            _t = ["Top", "Right", "Bottom", "Left"],
            At = function (t, e) {
                return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
            },
            $t = /^(?:checkbox|radio)$/i,
            Dt = /<([\w:-]+)/,
            Nt = /^$|\/(?:java|ecma)script/i,
            jt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        jt.optgroup = jt.option, jt.tbody = jt.tfoot = jt.colgroup = jt.caption = jt.thead, jt.th = jt.td;
        var It = /<|&#?\w+;/;
        ! function () {
            var t = Q.createDocumentFragment(),
                e = t.appendChild(Q.createElement("div")),
                n = Q.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Ot = /^key/,
            Rt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Lt = /^([^.]*)(?:\.(.+)|)/;
        ot.event = {
            global: {},
            add: function (t, e, n, i, r) {
                var o, s, a, l, c, u, p, d, f, h, v, m = wt.get(t);
                if (m)
                    for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = ot.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (e) {
                            return void 0 !== ot && ot.event.triggered !== e.type ? ot.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(gt) || [""], c = e.length; c--;) a = Lt.exec(e[c]) || [], f = v = a[1], h = (a[2] || "").split(".").sort(), f && (p = ot.event.special[f] || {}, f = (r ? p.delegateType : p.bindType) || f, p = ot.event.special[f] || {}, u = ot.extend({
                        type: f,
                        origType: v,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && ot.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, o), (d = l[f]) || (d = l[f] = [], d.delegateCount = 0, p.setup && p.setup.call(t, i, h, s) !== !1 || t.addEventListener && t.addEventListener(f, s)), p.add && (p.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), ot.event.global[f] = !0)
            },
            remove: function (t, e, n, i, r) {
                var o, s, a, l, c, u, p, d, f, h, v, m = wt.hasData(t) && wt.get(t);
                if (m && (l = m.events)) {
                    for (e = (e || "").match(gt) || [""], c = e.length; c--;)
                        if (a = Lt.exec(e[c]) || [], f = v = a[1], h = (a[2] || "").split(".").sort(), f) {
                            for (p = ot.event.special[f] || {}, f = (i ? p.delegateType : p.bindType) || f, d = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) u = d[o], !r && v !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, p.remove && p.remove.call(t, u));
                            s && !d.length && (p.teardown && p.teardown.call(t, h, m.handle) !== !1 || ot.removeEvent(t, f, m.handle), delete l[f])
                        } else
                            for (f in l) ot.event.remove(t, f + e[c], n, i, !0);
                    ot.isEmptyObject(l) && wt.remove(t, "handle events")
                }
            },
            dispatch: function (t) {
                t = ot.event.fix(t);
                var e, n, i, r, o, s = [],
                    a = Y.call(arguments),
                    l = (wt.get(this, "events") || {})[t.type] || [],
                    c = ot.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (s = ot.event.handlers.call(this, t, l), e = 0;
                        (r = s[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, n = 0;
                            (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.rnamespace || t.rnamespace.test(o.namespace)) && (t.handleObj = o, t.data = o.data, void 0 !== (i = ((ot.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function (t, e) {
                var n, i, r, o, s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (i = [], n = 0; a > n; n++) o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? ot(r, this).index(l) > -1 : ot.find(r, this, null, [l]).length), i[r] && i.push(o);
                            i.length && s.push({
                                elem: l,
                                handlers: i
                            })
                        } return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (t, e) {
                    var n, i, r, o = e.button;
                    return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || Q, i = n.documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            fix: function (t) {
                if (t[ot.expando]) return t;
                var e, n, i, r = t.type,
                    o = t,
                    s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = Rt.test(r) ? this.mouseHooks : Ot.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new ot.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
                return t.target || (t.target = Q), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        return this !== v() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        return this === v() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function (t) {
                        return ot.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, ot.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, ot.Event = function (t, e) {
            return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? f : h) : this.type = t, e && ot.extend(this, e), this.timeStamp = t && t.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(t, e)
        }, ot.Event.prototype = {
            constructor: ot.Event,
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = f, t && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = f, t && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = f, t && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ot.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            ot.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var n, i = this,
                        r = t.relatedTarget,
                        o = t.handleObj;
                    return (!r || r !== i && !ot.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), ot.fn.extend({
            on: function (t, e, n, i) {
                return m(this, t, e, n, i)
            },
            one: function (t, e, n, i) {
                return m(this, t, e, n, i, 1)
            },
            off: function (t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ot(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = h), this.each(function () {
                    ot.event.remove(this, t, n, e)
                })
            }
        });
        var qt = /<script|<style|<link/i,
            Pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ft = /^true\/(.*)/,
            Mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        ot.extend({
            htmlPrefilter: function (t) {
                return t.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, "<$1></$2>")
            },
            clone: function (t, e, n) {
                var i, r, o, s, a = t.cloneNode(!0),
                    l = ot.contains(t.ownerDocument, t);
                if (!(it.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t)))
                    for (s = u(a), o = u(t), i = 0, r = o.length; r > i; i++) w(o[i], s[i]);
                if (e)
                    if (n)
                        for (o = o || u(t), s = s || u(a), i = 0, r = o.length; r > i; i++) x(o[i], s[i]);
                    else x(t, a);
                return s = u(a, "script"), s.length > 0 && p(s, !l && u(t, "script")), a
            },
            cleanData: function (t) {
                for (var e, n, i, r = ot.event.special, o = 0; void 0 !== (n = t[o]); o++)
                    if (xt(n)) {
                        if (e = n[wt.expando]) {
                            if (e.events)
                                for (i in e.events) r[i] ? ot.event.remove(n, i) : ot.removeEvent(n, i, e.handle);
                            n[wt.expando] = void 0
                        }
                        n[Tt.expando] && (n[Tt.expando] = void 0)
                    }
            }
        }), ot.fn.extend({
            domManip: T,
            detach: function (t) {
                return C(this, t, !0)
            },
            remove: function (t) {
                return C(this, t)
            },
            text: function (t) {
                return bt(this, function (t) {
                    return void 0 === t ? ot.text(this) : this.empty().each(function () {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function () {
                return T(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        g(this, t).appendChild(t)
                    }
                })
            },
            prepend: function () {
                return T(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = g(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function () {
                return T(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function () {
                return T(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ot.cleanData(u(t, !1)), t.textContent = "");
                return this
            },
            clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return ot.clone(this, t, e)
                })
            },
            html: function (t) {
                return bt(this, function (t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !qt.test(t) && !jt[(Dt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = ot.htmlPrefilter(t);
                        try {
                            for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (ot.cleanData(u(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function () {
                var t = [];
                return T(this, arguments, function (e) {
                    var n = this.parentNode;
                    ot.inArray(this, t) < 0 && (ot.cleanData(u(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), ot.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            ot.fn[t] = function (t) {
                for (var n, i = [], r = ot(t), o = r.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), ot(r[s])[e](n), K.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Ht, Wt = {
                HTML: "block",
                BODY: "block"
            },
            zt = /^margin/,
            Bt = new RegExp("^(" + Et + ")(?!px)[a-z%]+$", "i"),
            Ut = function (e) {
                var n = e.ownerDocument.defaultView;
                return n.opener || (n = t), n.getComputedStyle(e)
            },
            Xt = function (t, e, n, i) {
                var r, o, s = {};
                for (o in e) s[o] = t.style[o], t.style[o] = e[o];
                r = n.apply(t, i || []);
                for (o in e) t.style[o] = s[o];
                return r
            },
            Vt = Q.documentElement;
        ! function () {
            function e() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Vt.appendChild(s);
                var e = t.getComputedStyle(a);
                n = "1%" !== e.top, o = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, Vt.removeChild(s)
            }
            var n, i, r, o, s = Q.createElement("div"),
                a = Q.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ot.extend(it, {
                pixelPosition: function () {
                    return e(), n
                },
                boxSizingReliable: function () {
                    return null == i && e(), i
                },
                pixelMarginRight: function () {
                    return null == i && e(), r
                },
                reliableMarginLeft: function () {
                    return null == i && e(), o
                },
                reliableMarginRight: function () {
                    var e, n = a.appendChild(Q.createElement("div"));
                    return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Vt.appendChild(s), e = !parseFloat(t.getComputedStyle(n).marginRight), Vt.removeChild(s), a.removeChild(n), e
                }
            }))
        }();
        var Jt = /^(none|table(?!-c[ea]).+)/,
            Qt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Yt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Gt = ["Webkit", "O", "Moz", "ms"],
            Kt = Q.createElement("div").style;
        ot.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = S(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function (t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, s, a = ot.camelCase(e),
                        l = t.style;
                    return e = ot.cssProps[a] || (ot.cssProps[a] = A(a) || a), s = ot.cssHooks[e] || ot.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e] : (o = typeof n, "string" === o && (r = St.exec(n)) && r[1] && (n = c(t, e, r), o = "number"), void(null != n && n === n && ("number" === o && (n += r && r[3] || (ot.cssNumber[a] ? "" : "px")), it.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n))))
                }
            },
            css: function (t, e, n, i) {
                var r, o, s, a = ot.camelCase(e);
                return e = ot.cssProps[a] || (ot.cssProps[a] = A(a) || a), s = ot.cssHooks[e] || ot.cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = S(t, e, i)), "normal" === r && e in Yt && (r = Yt[e]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
            }
        }), ot.each(["height", "width"], function (t, e) {
            ot.cssHooks[e] = {
                get: function (t, n, i) {
                    return n ? Jt.test(ot.css(t, "display")) && 0 === t.offsetWidth ? Xt(t, Qt, function () {
                        return N(t, e, i)
                    }) : N(t, e, i) : void 0
                },
                set: function (t, n, i) {
                    var r, o = i && Ut(t),
                        s = i && D(t, e, i, "border-box" === ot.css(t, "boxSizing", !1, o), o);
                    return s && (r = St.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = ot.css(t, e)), $(t, n, s)
                }
            }
        }), ot.cssHooks.marginLeft = _(it.reliableMarginLeft, function (t, e) {
            return e ? (parseFloat(S(t, "marginLeft")) || t.getBoundingClientRect().left - Xt(t, {
                marginLeft: 0
            }, function () {
                return t.getBoundingClientRect().left
            })) + "px" : void 0
        }), ot.cssHooks.marginRight = _(it.reliableMarginRight, function (t, e) {
            return e ? Xt(t, {
                display: "inline-block"
            }, S, [t, "marginRight"]) : void 0
        }), ot.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (t, e) {
            ot.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + _t[i] + e] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, zt.test(t) || (ot.cssHooks[t + e].set = $)
        }), ot.fn.extend({
            css: function (t, e) {
                return bt(this, function (t, e, n) {
                    var i, r, o = {},
                        s = 0;
                    if (ot.isArray(e)) {
                        for (i = Ut(t), r = e.length; r > s; s++) o[e[s]] = ot.css(t, e[s], !1, i);
                        return o
                    }
                    return void 0 !== n ? ot.style(t, e, n) : ot.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function () {
                return j(this, !0)
            },
            hide: function () {
                return j(this)
            },
            toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    At(this) ? ot(this).show() : ot(this).hide()
                })
            }
        }), ot.Tween = I, I.prototype = {
            constructor: I,
            init: function (t, e, n, i, r, o) {
                this.elem = t, this.prop = n, this.easing = r || ot.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ot.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var t = I.propHooks[this.prop];
                return t && t.get ? t.get(this) : I.propHooks._default.get(this)
            },
            run: function (t) {
                var e, n = I.propHooks[this.prop];
                return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
            }
        }, I.prototype.init.prototype = I.prototype, I.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ot.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function (t) {
                    ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ot.cssProps[t.prop]] && !ot.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ot.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ot.easing = {
            linear: function (t) {
                return t
            },
            swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, ot.fx = I.prototype.init, ot.fx.step = {};
        var Zt, te, ee = /^(?:toggle|show|hide)$/,
            ne = /queueHooks$/;
        ot.Animation = ot.extend(F, {
                tweeners: {
                    "*": [function (t, e) {
                        var n = this.createTween(t, e);
                        return c(n.elem, t, St.exec(e), n), n
                    }]
                },
                tweener: function (t, e) {
                    ot.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(gt);
                    for (var n, i = 0, r = t.length; r > i; i++) n = t[i], F.tweeners[n] = F.tweeners[n] || [], F.tweeners[n].unshift(e)
                },
                prefilters: [q],
                prefilter: function (t, e) {
                    e ? F.prefilters.unshift(t) : F.prefilters.push(t)
                }
            }), ot.speed = function (t, e, n) {
                var i = t && "object" == typeof t ? ot.extend({}, t) : {
                    complete: n || !n && e || ot.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !ot.isFunction(e) && e
                };
                return i.duration = ot.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ot.fx.speeds ? ot.fx.speeds[i.duration] : ot.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                    ot.isFunction(i.old) && i.old.call(this), i.queue && ot.dequeue(this, i.queue)
                }, i
            }, ot.fn.extend({
                fadeTo: function (t, e, n, i) {
                    return this.filter(At).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function (t, e, n, i) {
                    var r = ot.isEmptyObject(t),
                        o = ot.speed(e, n, i),
                        s = function () {
                            var e = F(this, ot.extend({}, t), o);
                            (r || wt.get(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function (t, e, n) {
                    var i = function (t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            o = ot.timers,
                            s = wt.get(this);
                        if (r) s[r] && s[r].stop && i(s[r]);
                        else
                            for (r in s) s[r] && s[r].stop && ne.test(r) && i(s[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                        (e || !n) && ot.dequeue(this, t)
                    })
                },
                finish: function (t) {
                    return t !== !1 && (t = t || "fx"), this.each(function () {
                        var e, n = wt.get(this),
                            i = n[t + "queue"],
                            r = n[t + "queueHooks"],
                            o = ot.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, ot.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), ot.each(["toggle", "show", "hide"], function (t, e) {
                var n = ot.fn[e];
                ot.fn[e] = function (t, i, r) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(R(e, !0), t, i, r)
                }
            }), ot.each({
                slideDown: R("show"),
                slideUp: R("hide"),
                slideToggle: R("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (t, e) {
                ot.fn[t] = function (t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), ot.timers = [],
            ot.fx.tick = function () {
                var t, e = 0,
                    n = ot.timers;
                for (Zt = ot.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                n.length || ot.fx.stop(), Zt = void 0
            }, ot.fx.timer = function (t) {
                ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop()
            }, ot.fx.interval = 13, ot.fx.start = function () {
                te || (te = t.setInterval(ot.fx.tick, ot.fx.interval))
            }, ot.fx.stop = function () {
                t.clearInterval(te), te = null
            }, ot.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ot.fn.delay = function (e, n) {
                return e = ot.fx ? ot.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function (n, i) {
                    var r = t.setTimeout(n, e);
                    i.stop = function () {
                        t.clearTimeout(r)
                    }
                })
            },
            function () {
                var t = Q.createElement("input"),
                    e = Q.createElement("select"),
                    n = e.appendChild(Q.createElement("option"));
                t.type = "checkbox", it.checkOn = "" !== t.value, it.optSelected = n.selected, e.disabled = !0, it.optDisabled = !n.disabled, t = Q.createElement("input"), t.value = "t", t.type = "radio", it.radioValue = "t" === t.value
            }();
        var ie, re = ot.expr.attrHandle;
        ot.fn.extend({
            attr: function (t, e) {
                return bt(this, ot.attr, t, e, arguments.length > 1)
            },
            removeAttr: function (t) {
                return this.each(function () {
                    ot.removeAttr(this, t)
                })
            }
        }), ot.extend({
            attr: function (t, e, n) {
                var i, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? ot.prop(t, e, n) : (1 === o && ot.isXMLDoc(t) || (e = e.toLowerCase(), r = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? ie : void 0)), void 0 !== n ? null === n ? void ot.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = ot.find.attr(t, e), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!it.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function (t, e) {
                var n, i, r = 0,
                    o = e && e.match(gt);
                if (o && 1 === t.nodeType)
                    for (; n = o[r++];) i = ot.propFix[n] || n, ot.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
            }
        }), ie = {
            set: function (t, e, n) {
                return e === !1 ? ot.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = re[e] || ot.find.attr;
            re[e] = function (t, e, i) {
                var r, o;
                return i || (o = re[e], re[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, re[e] = o), r
            }
        });
        var oe = /^(?:input|select|textarea|button)$/i,
            se = /^(?:a|area)$/i;
        ot.fn.extend({
            prop: function (t, e) {
                return bt(this, ot.prop, t, e, arguments.length > 1)
            },
            removeProp: function (t) {
                return this.each(function () {
                    delete this[ot.propFix[t] || t]
                })
            }
        }), ot.extend({
            prop: function (t, e, n) {
                var i, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ot.isXMLDoc(t) || (e = ot.propFix[e] || e, r = ot.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = ot.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : oe.test(t.nodeName) || se.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), it.optSelected || (ot.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }
        }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ot.propFix[this.toLowerCase()] = this
        });
        var ae = /[\t\r\n\f]/g;
        ot.fn.extend({
            addClass: function (t) {
                var e, n, i, r, o, s, a, l = 0;
                if (ot.isFunction(t)) return this.each(function (e) {
                    ot(this).addClass(t.call(this, e, M(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(gt) || []; n = this[l++];)
                        if (r = M(n), i = 1 === n.nodeType && (" " + r + " ").replace(ae, " ")) {
                            for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            a = ot.trim(i), r !== a && n.setAttribute("class", a)
                        } return this
            },
            removeClass: function (t) {
                var e, n, i, r, o, s, a, l = 0;
                if (ot.isFunction(t)) return this.each(function (e) {
                    ot(this).removeClass(t.call(this, e, M(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(gt) || []; n = this[l++];)
                        if (r = M(n), i = 1 === n.nodeType && (" " + r + " ").replace(ae, " ")) {
                            for (s = 0; o = e[s++];)
                                for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                            a = ot.trim(i), r !== a && n.setAttribute("class", a)
                        } return this
            },
            toggleClass: function (t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ot.isFunction(t) ? this.each(function (n) {
                    ot(this).toggleClass(t.call(this, n, M(this), e), e)
                }) : this.each(function () {
                    var e, i, r, o;
                    if ("string" === n)
                        for (i = 0, r = ot(this), o = t.match(gt) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else(void 0 === t || "boolean" === n) && (e = M(this), e && wt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : wt.get(this, "__className__") || ""))
                })
            },
            hasClass: function (t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + M(n) + " ").replace(ae, " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        ot.fn.extend({
            val: function (t) {
                var e, n, i, r = this[0];
                return arguments.length ? (i = ot.isFunction(t), this.each(function (n) {
                    var r;
                    1 === this.nodeType && (r = i ? t.call(this, n, ot(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : ot.isArray(r) && (r = ot.map(r, function (t) {
                        return null == t ? "" : t + ""
                    })), (e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                })) : r ? (e = ot.valHooks[r.type] || ot.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(/\r/g, "") : null == n ? "" : n)) : void 0
            }
        }), ot.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        return ot.trim(t.value)
                    }
                },
                select: {
                    get: function (t) {
                        for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                            if (n = i[l], (n.selected || l === r) && (it.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ot.nodeName(n.parentNode, "optgroup"))) {
                                if (e = ot(n).val(), o) return e;
                                s.push(e)
                            } return s
                    },
                    set: function (t, e) {
                        for (var n, i, r = t.options, o = ot.makeArray(e), s = r.length; s--;) i = r[s], (i.selected = ot.inArray(ot.valHooks.option.get(i), o) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), ot.each(["radio", "checkbox"], function () {
            ot.valHooks[this] = {
                set: function (t, e) {
                    return ot.isArray(e) ? t.checked = ot.inArray(ot(t).val(), e) > -1 : void 0
                }
            }, it.checkOn || (ot.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var le = /^(?:focusinfocus|focusoutblur)$/;
        ot.extend(ot.event, {
            trigger: function (e, n, i, r) {
                var o, s, a, l, c, u, p, d = [i || Q],
                    f = nt.call(e, "type") ? e.type : e,
                    h = nt.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = a = i = i || Q, 3 !== i.nodeType && 8 !== i.nodeType && !le.test(f + ot.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, e = e[ot.expando] ? e : new ot.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ot.makeArray(n, [e]), p = ot.event.special[f] || {}, r || !p.trigger || p.trigger.apply(i, n) !== !1)) {
                    if (!r && !p.noBubble && !ot.isWindow(i)) {
                        for (l = p.delegateType || f, le.test(l + f) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
                        a === (i.ownerDocument || Q) && d.push(a.defaultView || a.parentWindow || t)
                    }
                    for (o = 0;
                        (s = d[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : p.bindType || f, u = (wt.get(s, "events") || {})[e.type] && wt.get(s, "handle"), u && u.apply(s, n), (u = c && s[c]) && u.apply && xt(s) && (e.result = u.apply(s, n), e.result === !1 && e.preventDefault());
                    return e.type = f, r || e.isDefaultPrevented() || p._default && p._default.apply(d.pop(), n) !== !1 || !xt(i) || c && ot.isFunction(i[f]) && !ot.isWindow(i) && (a = i[c], a && (i[c] = null), ot.event.triggered = f, i[f](), ot.event.triggered = void 0, a && (i[c] = a)), e.result
                }
            },
            simulate: function (t, e, n) {
                var i = ot.extend(new ot.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                ot.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
            }
        }), ot.fn.extend({
            trigger: function (t, e) {
                return this.each(function () {
                    ot.event.trigger(t, e, this)
                })
            },
            triggerHandler: function (t, e) {
                var n = this[0];
                return n ? ot.event.trigger(t, e, n, !0) : void 0
            }
        }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
            ot.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), ot.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), it.focusin = "onfocusin" in t, it.focusin || ot.each({
            focus: "focusin",
            blur: "focusout"
        }, function (t, e) {
            var n = function (t) {
                ot.event.simulate(e, t.target, ot.event.fix(t))
            };
            ot.event.special[e] = {
                setup: function () {
                    var i = this.ownerDocument || this,
                        r = wt.access(i, e);
                    r || i.addEventListener(t, n, !0), wt.access(i, e, (r || 0) + 1)
                },
                teardown: function () {
                    var i = this.ownerDocument || this,
                        r = wt.access(i, e) - 1;
                    r ? wt.access(i, e, r) : (i.removeEventListener(t, n, !0), wt.remove(i, e))
                }
            }
        });
        var ce = t.location,
            ue = ot.now(),
            pe = /\?/;
        ot.parseJSON = function (t) {
            return JSON.parse(t + "")
        }, ot.parseXML = function (e) {
            var n;
            if (!e || "string" != typeof e) return null;
            try {
                n = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (t) {
                n = void 0
            }
            return (!n || n.getElementsByTagName("parsererror").length) && ot.error("Invalid XML: " + e), n
        };
        var de = /([?&])_=[^&]*/,
            fe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            he = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            ve = /^(?:GET|HEAD)$/,
            me = {},
            ge = {},
            ye = "*/".concat("*"),
            be = Q.createElement("a");
        be.href = ce.href, ot.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ce.href,
                type: "GET",
                isLocal: he.test(ce.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ye,
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
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ot.parseJSON,
                    "text xml": ot.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (t, e) {
                return e ? z(z(t, ot.ajaxSettings), e) : z(ot.ajaxSettings, t)
            },
            ajaxPrefilter: H(me),
            ajaxTransport: H(ge),
            ajax: function (e, n) {
                function i(e, n, i, a) {
                    var c, p, y, b, w, C = n;
                    2 !== x && (x = 2, l && t.clearTimeout(l), r = void 0, s = a || "", T.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, i && (b = B(d, T, i)), b = U(d, b, T, c), c ? (d.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ot.lastModified[o] = w), (w = T.getResponseHeader("etag")) && (ot.etag[o] = w)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, p = b.data, y = b.error, c = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || C) + "", c ? v.resolveWith(f, [p, C, T]) : v.rejectWith(f, [T, C, y]), T.statusCode(g), g = void 0, u && h.trigger(c ? "ajaxSuccess" : "ajaxError", [T, d, c ? p : y]), m.fireWith(f, [T, C]), u && (h.trigger("ajaxComplete", [T, d]), --ot.active || ot.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = void 0), n = n || {};
                var r, o, s, a, l, c, u, p, d = ot.ajaxSetup({}, n),
                    f = d.context || d,
                    h = d.context && (f.nodeType || f.jquery) ? ot(f) : ot.event,
                    v = ot.Deferred(),
                    m = ot.Callbacks("once memory"),
                    g = d.statusCode || {},
                    y = {},
                    b = {},
                    x = 0,
                    w = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (2 === x) {
                                if (!a)
                                    for (a = {}; e = fe.exec(s);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function () {
                            return 2 === x ? s : null
                        },
                        setRequestHeader: function (t, e) {
                            var n = t.toLowerCase();
                            return x || (t = b[n] = b[n] || t, y[t] = e), this
                        },
                        overrideMimeType: function (t) {
                            return x || (d.mimeType = t), this
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)
                                if (2 > x)
                                    for (e in t) g[e] = [g[e], t[e]];
                                else T.always(t[T.status]);
                            return this
                        },
                        abort: function (t) {
                            var e = t || w;
                            return r && r.abort(e), i(0, e), this
                        }
                    };
                if (v.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, d.url = ((e || d.url || ce.href) + "").replace(/#.*$/, "").replace(/^\/\//, ce.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = ot.trim(d.dataType || "*").toLowerCase().match(gt) || [""], null == d.crossDomain) {
                    c = Q.createElement("a");
                    try {
                        c.href = d.url, c.href = c.href, d.crossDomain = be.protocol + "//" + be.host != c.protocol + "//" + c.host
                    } catch (t) {
                        d.crossDomain = !0
                    }
                }
                if (d.data && d.processData && "string" != typeof d.data && (d.data = ot.param(d.data, d.traditional)), W(me, d, n, T), 2 === x) return T;
                u = ot.event && d.global, u && 0 == ot.active++ && ot.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !ve.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (pe.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = de.test(o) ? o.replace(de, "$1_=" + ue++) : o + (pe.test(o) ? "&" : "?") + "_=" + ue++)), d.ifModified && (ot.lastModified[o] && T.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && T.setRequestHeader("If-None-Match", ot.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + ye + "; q=0.01" : "") : d.accepts["*"]);
                for (p in d.headers) T.setRequestHeader(p, d.headers[p]);
                if (d.beforeSend && (d.beforeSend.call(f, T, d) === !1 || 2 === x)) return T.abort();
                w = "abort";
                for (p in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[p](d[p]);
                if (r = W(ge, d, n, T)) {
                    if (T.readyState = 1, u && h.trigger("ajaxSend", [T, d]), 2 === x) return T;
                    d.async && d.timeout > 0 && (l = t.setTimeout(function () {
                        T.abort("timeout")
                    }, d.timeout));
                    try {
                        x = 1, r.send(y, i)
                    } catch (t) {
                        if (!(2 > x)) throw t;
                        i(-1, t)
                    }
                } else i(-1, "No Transport");
                return T
            },
            getJSON: function (t, e, n) {
                return ot.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return ot.get(t, void 0, e, "script")
            }
        }), ot.each(["get", "post"], function (t, e) {
            ot[e] = function (t, n, i, r) {
                return ot.isFunction(n) && (r = r || i, i = n, n = void 0), ot.ajax(ot.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: i
                }, ot.isPlainObject(t) && t))
            }
        }), ot._evalUrl = function (t) {
            return ot.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, ot.fn.extend({
            wrapAll: function (t) {
                var e;
                return ot.isFunction(t) ? this.each(function (e) {
                    ot(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = ot(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function (t) {
                return ot.isFunction(t) ? this.each(function (e) {
                    ot(this).wrapInner(t.call(this, e))
                }) : this.each(function () {
                    var e = ot(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function (t) {
                var e = ot.isFunction(t);
                return this.each(function (n) {
                    ot(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ot.expr.filters.hidden = function (t) {
            return !ot.expr.filters.visible(t)
        }, ot.expr.filters.visible = function (t) {
            return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
        };
        var xe = /\[\]$/,
            we = /^(?:submit|button|image|reset|file)$/i,
            Te = /^(?:input|select|textarea|keygen)/i;
        ot.param = function (t, e) {
            var n, i = [],
                r = function (t, e) {
                    e = ot.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t)) ot.each(t, function () {
                r(this.name, this.value)
            });
            else
                for (n in t) X(n, t[n], e, r);
            return i.join("&").replace(/%20/g, "+")
        }, ot.fn.extend({
            serialize: function () {
                return ot.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var t = ot.prop(this, "elements");
                    return t ? ot.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !ot(this).is(":disabled") && Te.test(this.nodeName) && !we.test(t) && (this.checked || !$t.test(t))
                }).map(function (t, e) {
                    var n = ot(this).val();
                    return null == n ? null : ot.isArray(n) ? ot.map(n, function (t) {
                        return {
                            name: e.name,
                            value: t.replace(/\r?\n/g, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(/\r?\n/g, "\r\n")
                    }
                }).get()
            }
        }), ot.ajaxSettings.xhr = function () {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}
        };
        var Ce = {
                0: 200,
                1223: 204
            },
            ke = ot.ajaxSettings.xhr();
        it.cors = !!ke && "withCredentials" in ke, it.ajax = ke = !!ke, ot.ajaxTransport(function (e) {
            var n, i;
            return it.cors || ke && !e.crossDomain ? {
                send: function (r, o) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (s in r) a.setRequestHeader(s, r[s]);
                    n = function (t) {
                        return function () {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ce[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                        4 === a.readyState && t.setTimeout(function () {
                            n && i()
                        })
                    }, n = n("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (t) {
                        if (n) throw t
                    }
                },
                abort: function () {
                    n && n()
                }
            } : void 0
        }), ot.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (t) {
                    return ot.globalEval(t), t
                }
            }
        }), ot.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), ot.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function (i, r) {
                        e = ot("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function (t) {
                            e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                        }), Q.head.appendChild(e[0])
                    },
                    abort: function () {
                        n && n()
                    }
                }
            }
        });
        var Ee = [],
            Se = /(=)\?(?=&|$)|\?\?/;
        ot.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var t = Ee.pop() || ot.expando + "_" + ue++;
                return this[t] = !0, t
            }
        }), ot.ajaxPrefilter("json jsonp", function (e, n, i) {
            var r, o, s, a = e.jsonp !== !1 && (Se.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Se.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Se, "$1" + r) : e.jsonp !== !1 && (e.url += (pe.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                return s || ot.error(r + " was not called"), s[0]
            }, e.dataTypes[0] = "json", o = t[r], t[r] = function () {
                s = arguments
            }, i.always(function () {
                void 0 === o ? ot(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, Ee.push(r)), s && ot.isFunction(o) && o(s[0]), s = o = void 0
            }), "script") : void 0
        }), it.createHTMLDocument = function () {
            var t = Q.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
        }(), ot.parseHTML = function (t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || (it.createHTMLDocument ? Q.implementation.createHTMLDocument("") : Q);
            var i = pt.exec(t),
                r = !n && [];
            return i ? [e.createElement(i[1])] : (i = d([t], e, r), r && r.length && ot(r).remove(), ot.merge([], i.childNodes))
        };
        var _e = ot.fn.load;
        ot.fn.load = function (t, e, n) {
            if ("string" != typeof t && _e) return _e.apply(this, arguments);
            var i, r, o, s = this,
                a = t.indexOf(" ");
            return a > -1 && (i = ot.trim(t.slice(a)), t = t.slice(0, a)), ot.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && ot.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function (t) {
                o = arguments, s.html(i ? ot("<div>").append(ot.parseHTML(t)).find(i) : t)
            }).always(n && function (t, e) {
                s.each(function () {
                    n.apply(s, o || [t.responseText, e, t])
                })
            }), this
        }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            ot.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), ot.expr.filters.animated = function (t) {
            return ot.grep(ot.timers, function (e) {
                return t === e.elem
            }).length
        }, ot.offset = {
            setOffset: function (t, e, n) {
                var i, r, o, s, a, l, c, u = ot.css(t, "position"),
                    p = ot(t),
                    d = {};
                "static" === u && (t.style.position = "relative"), a = p.offset(), o = ot.css(t, "top"), l = ot.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (i = p.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), ot.isFunction(e) && (e = e.call(t, n, ot.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : p.css(d)
            }
        }, ot.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    ot.offset.setOffset(this, t, e)
                });
                var e, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    o = i && i.ownerDocument;
                return o ? (e = o.documentElement, ot.contains(e, i) ? (r = i.getBoundingClientRect(), n = V(o), {
                    top: r.top + n.pageYOffset - e.clientTop,
                    left: r.left + n.pageXOffset - e.clientLeft
                }) : r) : void 0
            },
            position: function () {
                if (this[0]) {
                    var t, e, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === ot.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ot.nodeName(t[0], "html") || (i = t.offset()), i.top += ot.css(t[0], "borderTopWidth", !0) - t.scrollTop(), i.left += ot.css(t[0], "borderLeftWidth", !0) - t.scrollLeft()), {
                        top: e.top - i.top - ot.css(n, "marginTop", !0),
                        left: e.left - i.left - ot.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === ot.css(t, "position");) t = t.offsetParent;
                    return t || Vt
                })
            }
        }), ot.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (t, e) {
            var n = "pageYOffset" === e;
            ot.fn[t] = function (i) {
                return bt(this, function (t, i, r) {
                    var o = V(t);
                    return void 0 === r ? o ? o[e] : t[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r)
                }, t, i, arguments.length)
            }
        }), ot.each(["top", "left"], function (t, e) {
            ot.cssHooks[e] = _(it.pixelPosition, function (t, n) {
                return n ? (n = S(t, e), Bt.test(n) ? ot(t).position()[e] + "px" : n) : void 0
            })
        }), ot.each({
            Height: "height",
            Width: "width"
        }, function (t, e) {
            ot.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function (n, i) {
                ot.fn[i] = function (i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || r === !0 ? "margin" : "border");
                    return bt(this, function (e, n, i) {
                        var r;
                        return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? ot.css(e, n, s) : ot.style(e, n, i, s)
                    }, e, o ? i : void 0, o, null)
                }
            })
        }), ot.fn.extend({
            bind: function (t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function (t, e) {
                return this.off(t, null, e)
            },
            delegate: function (t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            },
            size: function () {
                return this.length
            }
        }), ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return ot
        });
        var Ae = t.jQuery,
            $e = t.$;
        return ot.noConflict = function (e) {
            return t.$ === ot && (t.$ = $e), e && t.jQuery === ot && (t.jQuery = Ae), ot
        }, e || (t.jQuery = t.$ = ot), ot
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery),
function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function (e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var r = function () {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(r, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                r = n.data("bs.alert");
            r || n.data("bs.alert", r = new i(this)), "string" == typeof e && r[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function (e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var r = t(this),
            o = r.attr("data-target");
        o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(o);
        e && e.preventDefault(), s.length || (s = r.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var r = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
        return t.fn.alert = r, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                r = i.data("bs.button"),
                o = "object" == typeof e && e;
            r || i.data("bs.button", r = new n(this, o)), "toggle" == e ? r.toggle() : e && r.setState(e)
        })
    }
    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.6", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function (e) {
        var n = "disabled",
            i = this.$element,
            r = i.is("input") ? "val" : "html",
            o = i.data();
        e += "Text", null == o.resetText && i.data("resetText", i[r]()), setTimeout(t.proxy(function () {
            i[r](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var i = t(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), t(n.target).is('input[type="radio"]') || t(n.target).is('input[type="checkbox"]') || n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                r = i.data("bs.carousel"),
                o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : o.slide;
            r || i.data("bs.carousel", r = new n(this, o)), "number" == typeof e ? r.to(e) : s ? r[s]() : o.interval && r.pause().cycle()
        })
    }
    var n = function (e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e);
        if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e;
        var i = "prev" == t ? -1 : 1,
            r = (n + i) % this.$items.length;
        return this.$items.eq(r)
    }, n.prototype.to = function (t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function (e, i) {
        var r = this.$element.find(".item.active"),
            o = i || this.getItemForDirection(e, r),
            s = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var c = o[0],
            u = t.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(o)]);
                p && p.addClass("active")
            }
            var d = t.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, r.addClass(a), o.addClass(a), r.one("bsTransitionEnd", function () {
                o.removeClass([e, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = i, this
    };
    var r = function (n) {
        var i, r = t(this),
            o = t(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var s = t.extend({}, o.data(), r.data()),
                a = r.attr("data-slide-to");
            a && (s.interval = !1), e.call(o, s), a && o.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        var n;
        return t(e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""))
    }

    function n(e) {
        return this.each(function () {
            var n = t(this),
                r = n.data("bs.collapse"),
                o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !r && o.toggle && /show|hide/.test(e) && (o.toggle = !1), r || n.data("bs.collapse", r = new i(this, o)), "string" == typeof e && r[e]()
        })
    }
    var i = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
            toggle: !0
        }, i.prototype.dimension = function () {
            return this.$element.hasClass("width") ? "width" : "height"
        }, i.prototype.show = function () {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var e, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(r && r.length && (e = r.data("bs.collapse")) && e.transitioning)) {
                    var o = t.Event("show.bs.collapse");
                    if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                        r && r.length && (n.call(r, "hide"), e || r.data("bs.collapse", null));
                        var s = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var a = function () {
                            this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!t.support.transition) return a.call(this);
                        var l = t.camelCase(["scroll", s].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                    }
                }
            }
        },
        i.prototype.hide = function () {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var e = t.Event("hide.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var r = function () {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : r.call(this)
                }
            }
        }, i.prototype.toggle = function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, i.prototype.getParent = function () {
            return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, i) {
                var r = t(i);
                this.addAriaAndCollapsedClass(e(r), r)
            }, this)).end()
        }, i.prototype.addAriaAndCollapsedClass = function (t, e) {
            var n = t.hasClass("in");
            t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
        };
    var r = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = r, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
        var r = t(this);
        r.attr("data-target") || i.preventDefault();
        var o = e(r),
            s = o.data("bs.collapse"),
            a = s ? "toggle" : r.data();
        n.call(o, a)
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(r).remove(), t(o).each(function () {
            var i = t(this),
                r = e(i),
                o = {
                    relatedTarget: this
                };
            r.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(r[0], n.target) || (r.trigger(n = t.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), r.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
        }))
    }

    function i(e) {
        return this.each(function () {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var r = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        s = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.6", s.prototype.toggle = function (i) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var o = e(r),
                s = o.hasClass("open");
            if (n(), !s) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (o.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                r.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, s.prototype.keydown = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var r = e(i),
                    s = r.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && r.find(o).trigger("focus"), i.trigger("click");
                var a = r.find(".dropdown-menu li:not(.disabled):visible a");
                if (a.length) {
                    var l = a.index(n.target);
                    38 == n.which && l > 0 && l--, 40 == n.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery),
function (t) {
    "use strict";

    function e(e, i) {
        return this.each(function () {
            var r = t(this),
                o = r.data("bs.modal"),
                s = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e);
            o || r.data("bs.modal", o = new n(this, s)), "string" == typeof e ? o[e](i) : s.show && o.show(i)
        })
    }
    var n = function (e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function (e) {
        var i = this,
            r = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            i.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var r = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), r && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var o = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            r ? i.$dialog.one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (e) {
        var i = this,
            r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && r;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function () {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, n.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var i = t(this),
            r = i.attr("href"),
            o = t(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            s = o.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(r) && r
            }, o.data(), i.data());
        i.is("a") && n.preventDefault(), o.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(o, s, this)
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                r = i.data("bs.tooltip"),
                o = "object" == typeof e && e;
            (r || !/destroy|hide/.test(e)) && (r || i.data("bs.tooltip", r = new n(this, o)), "string" == typeof e && r[e]())
        })
    }
    var n = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function (e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
            var s = r[o];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function () {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function (t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function () {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, n.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var r = this,
                o = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(a);
            c && (a = a.replace(l, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                p = o[0].offsetWidth,
                d = o[0].offsetHeight;
            if (c) {
                var f = a,
                    h = this.getPosition(this.$viewport);
                a = "bottom" == a && u.bottom + d > h.bottom ? "top" : "top" == a && u.top - d < h.top ? "bottom" : "right" == a && u.right + p > h.width ? "left" : "left" == a && u.left - p < h.left ? "right" : a, o.removeClass(f).addClass(a)
            }
            var v = this.getCalculatedOffset(a, u, p, d);
            this.applyPlacement(v, a);
            var m = function () {
                var t = r.hoverState;
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == t && r.leave(r)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
        }
    }, n.prototype.applyPlacement = function (e, n) {
        var i = this.tip(),
            r = i[0].offsetWidth,
            o = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({
            using: function (t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == n && c != o && (e.top = e.top + o - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var p = /top|bottom/.test(n),
            d = p ? 2 * u.left - r + l : 2 * u.top - o + c,
            f = p ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(d, i[0][f], p)
    }, n.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function (e) {
        function i() {
            "in" != r.hoverState && o.detach(), r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), e && e()
        }
        var r = this,
            o = t(this.$tip),
            s = t.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName,
            r = n.getBoundingClientRect();
        null == r.width && (r = t.extend({}, r, {
            width: r.right - r.left,
            height: r.bottom - r.top
        }));
        var o = i ? {
                top: 0,
                left: 0
            } : e.offset(),
            s = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            a = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, r, s, a, o)
    }, n.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return r;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - o - s.scroll,
                l = e.top + o - s.scroll + i;
            a < s.top ? r.top = s.top - a : l > s.top + s.height && (r.top = s.top + s.height - l)
        } else {
            var c = e.left - o,
                u = e.left + o + n;
            c < s.left ? r.left = s.left - c : u > s.right && (r.left = s.left + s.width - u)
        }
        return r
    }, n.prototype.getTitle = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, n.prototype.getUID = function (t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, n.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (e) {
        var n = this;
        e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = i, this
    }
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                r = i.data("bs.popover"),
                o = "object" == typeof e && e;
            (r || !/destroy|hide/.test(e)) && (r || i.data("bs.popover", r = new n(this, o)), "string" == typeof e && r[e]())
        })
    }
    var n = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.6", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
        return t.fn.popover = i, this
    }
}(jQuery),
function (t) {
    "use strict";

    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function () {
            var i = t(this),
                r = i.data("bs.scrollspy"),
                o = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }
    e.VERSION = "3.3.6", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this),
                r = e.data("target") || e.attr("href"),
                o = /^#./.test(r) && t(r);
            return o && o.length && o.is(":visible") && [[o[n]().top + i, r]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            r = this.offsets,
            o = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return s != (t = o[o.length - 1]) && this.activate(t);
        if (s && e < r[0]) return this.activeTarget = null, this.clear();
        for (t = r.length; t--;) s != o[t] && e >= r[t] && (void 0 === r[t + 1] || e < r[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                r = i.data("bs.tab");
            r || i.data("bs.tab", r = new n(this)), "string" == typeof e && r[e]()
        })
    }
    var n = function (e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var r = n.find(".active:last a"),
                o = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                s = t.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            if (r.trigger(o), e.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function () {
                    r.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function (e, i, r) {
        function o() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
        }
        var s = i.find("> .active"),
            a = r && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
        return t.fn.tab = i, this
    };
    var r = function (n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery),
function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                r = i.data("bs.affix"),
                o = "object" == typeof e && e;
            r || i.data("bs.affix", r = new n(this, o)), "string" == typeof e && r[e]()
        })
    }
    var n = function (e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.6", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function (t, e, n, i) {
        var r = this.$target.scrollTop(),
            o = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed) return n > r && "top";
        if ("bottom" == this.affixed) return null != n ? !(r + this.unpin <= o.top) && "bottom" : !(t - i >= r + s) && "bottom";
        var a = null == this.affixed,
            l = a ? r : o.top,
            c = a ? s : e;
        return null != n && n >= r ? "top" : null != i && l + c >= t - i && "bottom"
    }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                r = i.top,
                o = i.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (o = r = i), "function" == typeof r && (r = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
            var a = this.getState(s, e, r, o);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - e - o
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
        return t.fn.affix = i, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery);
var pJS = function (t, e) {
    var n = document.querySelector("#" + t + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: n,
            w: n.offsetWidth,
            h: n.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ff0000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 3e3,
                    rotateY: 3e3
                }
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: .4
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    var i = this.pJS;
    e && Object.deepExtend(i, e), i.tmp.obj = {
        size_value: i.particles.size.value,
        size_anim_speed: i.particles.size.anim.speed,
        move_speed: i.particles.move.speed,
        line_linked_distance: i.particles.line_linked.distance,
        line_linked_width: i.particles.line_linked.width,
        mode_grab_distance: i.interactivity.modes.grab.distance,
        mode_bubble_distance: i.interactivity.modes.bubble.distance,
        mode_bubble_size: i.interactivity.modes.bubble.size,
        mode_repulse_distance: i.interactivity.modes.repulse.distance
    }, i.fn.retinaInit = function () {
        i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio, i.tmp.retina = !0) : (i.canvas.pxratio = 1, i.tmp.retina = !1), i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio, i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio, i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio, i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio, i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio, i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio, i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio, i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio, i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio, i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio, i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio
    }, i.fn.canvasInit = function () {
        i.canvas.ctx = i.canvas.el.getContext("2d")
    }, i.fn.canvasSize = function () {
        i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i && i.interactivity.events.resize && window.addEventListener("resize", function () {
            i.canvas.w = i.canvas.el.offsetWidth, i.canvas.h = i.canvas.el.offsetHeight, i.tmp.retina && (i.canvas.w *= i.canvas.pxratio, i.canvas.h *= i.canvas.pxratio), i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()), i.fn.vendors.densityAutoParticles()
        })
    }, i.fn.canvasPaint = function () {
        i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h)
    }, i.fn.canvasClear = function () {
        i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h)
    }, i.fn.particle = function (t, e, n) {
        if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value, i.particles.size.anim.enable && (this.size_status = !1, this.vs = i.particles.size.anim.speed / 100, i.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = n ? n.x : Math.random() * i.canvas.w, this.y = n ? n.y : Math.random() * i.canvas.h, this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i.particles.move.bounce && i.fn.vendors.checkOverlap(this, n), this.color = {}, "object" == typeof t.value)
            if (t.value instanceof Array) {
                var r = t.value[Math.floor(Math.random() * i.particles.color.value.length)];
                this.color.rgb = hexToRgb(r)
            } else void 0 != t.value.r && void 0 != t.value.g && void 0 != t.value.b && (this.color.rgb = {
                r: t.value.r,
                g: t.value.g,
                b: t.value.b
            }), void 0 != t.value.h && void 0 != t.value.s && void 0 != t.value.l && (this.color.hsl = {
                h: t.value.h,
                s: t.value.s,
                l: t.value.l
            });
        else "random" == t.value ? this.color.rgb = {
            r: Math.floor(256 * Math.random()) + 0,
            g: Math.floor(256 * Math.random()) + 0,
            b: Math.floor(256 * Math.random()) + 0
        } : "string" == typeof t.value && (this.color = t, this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value, i.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i.particles.opacity.anim.speed / 100, i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var o = {};
        switch (i.particles.move.direction) {
            case "top":
                o = {
                    x: 0,
                    y: -1
                };
                break;
            case "top-right":
                o = {
                    x: .5,
                    y: -.5
                };
                break;
            case "right":
                o = {
                    x: 1,
                    y: -0
                };
                break;
            case "bottom-right":
                o = {
                    x: .5,
                    y: .5
                };
                break;
            case "bottom":
                o = {
                    x: 0,
                    y: 1
                };
                break;
            case "bottom-left":
                o = {
                    x: -.5,
                    y: 1
                };
                break;
            case "left":
                o = {
                    x: -1,
                    y: 0
                };
                break;
            case "top-left":
                o = {
                    x: -.5,
                    y: -.5
                };
                break;
            default:
                o = {
                    x: 0,
                    y: 0
                }
        }
        i.particles.move.straight ? (this.vx = o.x, this.vy = o.y, i.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = o.x + Math.random() - .5, this.vy = o.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
        var s = i.particles.shape.type;
        if ("object" == typeof s) {
            if (s instanceof Array) {
                var a = s[Math.floor(Math.random() * s.length)];
                this.shape = a
            }
        } else this.shape = s;
        if ("image" == this.shape) {
            var l = i.particles.shape;
            this.img = {
                src: l.image.src,
                ratio: l.image.width / l.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1))
        }
    }, i.fn.particle.prototype.draw = function () {
        var t = this;
        if (void 0 != t.radius_bubble) var e = t.radius_bubble;
        else var e = t.radius;
        if (void 0 != t.opacity_bubble) var n = t.opacity_bubble;
        else var n = t.opacity;
        if (t.color.rgb) var r = "rgba(" + t.color.rgb.r + "," + t.color.rgb.g + "," + t.color.rgb.b + "," + n + ")";
        else var r = "hsla(" + t.color.hsl.h + "," + t.color.hsl.s + "%," + t.color.hsl.l + "%," + n + ")";
        switch (i.canvas.ctx.fillStyle = r, i.canvas.ctx.beginPath(), t.shape) {
            case "circle":
                i.canvas.ctx.arc(t.x, t.y, e, 0, 2 * Math.PI, !1);
                break;
            case "edge":
                i.canvas.ctx.rect(t.x - e, t.y - e, 2 * e, 2 * e);
                break;
            case "triangle":
                i.fn.vendors.drawShape(i.canvas.ctx, t.x - e, t.y + e / 1.66, 2 * e, 3, 2);
                break;
            case "polygon":
                i.fn.vendors.drawShape(i.canvas.ctx, t.x - e / (i.particles.shape.polygon.nb_sides / 3.5), t.y - e / .76, 2.66 * e / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
                break;
            case "star":
                i.fn.vendors.drawShape(i.canvas.ctx, t.x - 2 * e / (i.particles.shape.polygon.nb_sides / 4), t.y - e / 1.52, 2 * e * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
                break;
            case "image":
                if ("svg" == i.tmp.img_type) var o = t.img.obj;
                else var o = i.tmp.img_obj;
                o && function () {
                    i.canvas.ctx.drawImage(o, t.x - e, t.y - e, 2 * e, 2 * e / t.img.ratio)
                }()
        }
        i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color, i.canvas.ctx.lineWidth = i.particles.shape.stroke.width, i.canvas.ctx.stroke()), i.canvas.ctx.fill()
    }, i.fn.particlesCreate = function () {
        for (var t = 0; t < i.particles.number.value; t++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value))
    }, i.fn.particlesUpdate = function () {
        for (var t = 0; t < i.particles.array.length; t++) {
            var e = i.particles.array[t];
            if (i.particles.move.enable) {
                var n = i.particles.move.speed / 2;
                e.x += e.vx * n, e.y += e.vy * n
            }
            if (i.particles.opacity.anim.enable && (1 == e.opacity_status ? (e.opacity >= i.particles.opacity.value && (e.opacity_status = !1), e.opacity += e.vo) : (e.opacity <= i.particles.opacity.anim.opacity_min && (e.opacity_status = !0), e.opacity -= e.vo), e.opacity < 0 && (e.opacity = 0)), i.particles.size.anim.enable && (1 == e.size_status ? (e.radius >= i.particles.size.value && (e.size_status = !1), e.radius += e.vs) : (e.radius <= i.particles.size.anim.size_min && (e.size_status = !0), e.radius -= e.vs), e.radius < 0 && (e.radius = 0)), "bounce" == i.particles.move.out_mode) var r = {
                x_left: e.radius,
                x_right: i.canvas.w,
                y_top: e.radius,
                y_bottom: i.canvas.h
            };
            else var r = {
                x_left: -e.radius,
                x_right: i.canvas.w + e.radius,
                y_top: -e.radius,
                y_bottom: i.canvas.h + e.radius
            };
            switch (e.x - e.radius > i.canvas.w ? (e.x = r.x_left, e.y = Math.random() * i.canvas.h) : e.x + e.radius < 0 && (e.x = r.x_right, e.y = Math.random() * i.canvas.h), e.y - e.radius > i.canvas.h ? (e.y = r.y_top, e.x = Math.random() * i.canvas.w) : e.y + e.radius < 0 && (e.y = r.y_bottom, e.x = Math.random() * i.canvas.w), i.particles.move.out_mode) {
                case "bounce":
                    e.x + e.radius > i.canvas.w ? e.vx = -e.vx : e.x - e.radius < 0 && (e.vx = -e.vx), e.y + e.radius > i.canvas.h ? e.vy = -e.vy : e.y - e.radius < 0 && (e.vy = -e.vy)
            }
            if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(e), (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(e), (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(e), i.particles.line_linked.enable || i.particles.move.attract.enable)
                for (var o = t + 1; o < i.particles.array.length; o++) {
                    var s = i.particles.array[o];
                    i.particles.line_linked.enable && i.fn.interact.linkParticles(e, s), i.particles.move.attract.enable && i.fn.interact.attractParticles(e, s), i.particles.move.bounce && i.fn.interact.bounceParticles(e, s)
                }
        }
    }, i.fn.particlesDraw = function () {
        i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate();
        for (var t = 0; t < i.particles.array.length; t++) {
            i.particles.array[t].draw()
        }
    }, i.fn.particlesEmpty = function () {
        i.particles.array = []
    }, i.fn.particlesRefresh = function () {
        cancelRequestAnimFrame(i.fn.checkAnimFrame), cancelRequestAnimFrame(i.fn.drawAnimFrame), i.tmp.source_svg = void 0, i.tmp.img_obj = void 0, i.tmp.count_svg = 0, i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start()
    }, i.fn.interact.linkParticles = function (t, e) {
        var n = t.x - e.x,
            r = t.y - e.y,
            o = Math.sqrt(n * n + r * r);
        if (o <= i.particles.line_linked.distance) {
            var s = i.particles.line_linked.opacity - o / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;
            if (s > 0) {
                var a = i.particles.line_linked.color_rgb_line;
                i.canvas.ctx.strokeStyle = "rgba(" + a.r + "," + a.g + "," + a.b + "," + s + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(t.x, t.y), i.canvas.ctx.lineTo(e.x, e.y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath()
            }
        }
    }, i.fn.interact.attractParticles = function (t, e) {
        var n = t.x - e.x,
            r = t.y - e.y;
        if (Math.sqrt(n * n + r * r) <= i.particles.line_linked.distance) {
            var o = n / (1e3 * i.particles.move.attract.rotateX),
                s = r / (1e3 * i.particles.move.attract.rotateY);
            t.vx -= o, t.vy -= s, e.vx += o, e.vy += s
        }
    }, i.fn.interact.bounceParticles = function (t, e) {
        var n = t.x - e.x,
            i = t.y - e.y,
            r = Math.sqrt(n * n + i * i);
        t.radius + e.radius >= r && (t.vx = -t.vx, t.vy = -t.vy, e.vx = -e.vx, e.vy = -e.vy)
    }, i.fn.modes.pushParticles = function (t, e) {
        i.tmp.pushing = !0;
        for (var n = 0; t > n; n++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, {
            x: e ? e.pos_x : Math.random() * i.canvas.w,
            y: e ? e.pos_y : Math.random() * i.canvas.h
        })), n == t - 1 && (i.particles.move.enable || i.fn.particlesDraw(), i.tmp.pushing = !1)
    }, i.fn.modes.removeParticles = function (t) {
        i.particles.array.splice(0, t), i.particles.move.enable || i.fn.particlesDraw()
    }, i.fn.modes.bubbleParticle = function (t) {
        function e() {
            t.opacity_bubble = t.opacity, t.radius_bubble = t.radius
        }

        function n(e, n, r, o, a) {
            if (e != n)
                if (i.tmp.bubble_duration_end) {
                    if (void 0 != r) {
                        var l = o - p * (o - e) / i.interactivity.modes.bubble.duration,
                            c = e - l;
                        d = e + c, "size" == a && (t.radius_bubble = d), "opacity" == a && (t.opacity_bubble = d)
                    }
                } else if (s <= i.interactivity.modes.bubble.distance) {
                if (void 0 != r) var u = r;
                else var u = o;
                if (u != e) {
                    var d = o - p * (o - e) / i.interactivity.modes.bubble.duration;
                    "size" == a && (t.radius_bubble = d), "opacity" == a && (t.opacity_bubble = d)
                }
            } else "size" == a && (t.radius_bubble = void 0), "opacity" == a && (t.opacity_bubble = void 0)
        }
        if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
            var r = t.x - i.interactivity.mouse.pos_x,
                o = t.y - i.interactivity.mouse.pos_y,
                s = Math.sqrt(r * r + o * o),
                a = 1 - s / i.interactivity.modes.bubble.distance;
            if (s <= i.interactivity.modes.bubble.distance) {
                if (a >= 0 && "mousemove" == i.interactivity.status) {
                    if (i.interactivity.modes.bubble.size != i.particles.size.value)
                        if (i.interactivity.modes.bubble.size > i.particles.size.value) {
                            var l = t.radius + i.interactivity.modes.bubble.size * a;
                            l >= 0 && (t.radius_bubble = l)
                        } else {
                            var c = t.radius - i.interactivity.modes.bubble.size,
                                l = t.radius - c * a;
                            t.radius_bubble = l > 0 ? l : 0
                        } if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value)
                        if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
                            var u = i.interactivity.modes.bubble.opacity * a;
                            u > t.opacity && u <= i.interactivity.modes.bubble.opacity && (t.opacity_bubble = u)
                        } else {
                            var u = t.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * a;
                            u < t.opacity && u >= i.interactivity.modes.bubble.opacity && (t.opacity_bubble = u)
                        }
                }
            } else e();
            "mouseleave" == i.interactivity.status && e()
        } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
            if (i.tmp.bubble_clicking) {
                var r = t.x - i.interactivity.mouse.click_pos_x,
                    o = t.y - i.interactivity.mouse.click_pos_y,
                    s = Math.sqrt(r * r + o * o),
                    p = ((new Date).getTime() - i.interactivity.mouse.click_time) / 1e3;
                p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), p > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1, i.tmp.bubble_duration_end = !1)
            }
            i.tmp.bubble_clicking && (n(i.interactivity.modes.bubble.size, i.particles.size.value, t.radius_bubble, t.radius, "size"), n(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, t.opacity_bubble, t.opacity, "opacity"))
        }
    }, i.fn.modes.repulseParticle = function (t) {
        if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
            var e = t.x - i.interactivity.mouse.pos_x,
                n = t.y - i.interactivity.mouse.pos_y,
                r = Math.sqrt(e * e + n * n),
                o = {
                    x: e / r,
                    y: n / r
                },
                s = i.interactivity.modes.repulse.distance,
                a = clamp(1 / s * (-1 * Math.pow(r / s, 2) + 1) * s * 100, 0, 50),
                l = {
                    x: t.x + o.x * a,
                    y: t.y + o.y * a
                };
            "bounce" == i.particles.move.out_mode ? (l.x - t.radius > 0 && l.x + t.radius < i.canvas.w && (t.x = l.x), l.y - t.radius > 0 && l.y + t.radius < i.canvas.h && (t.y = l.y)) : (t.x = l.x, t.y = l.y)
        } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode))
            if (i.tmp.repulse_finish || ++i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0), i.tmp.repulse_clicking) {
                var s = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
                    c = i.interactivity.mouse.click_pos_x - t.x,
                    u = i.interactivity.mouse.click_pos_y - t.y,
                    p = c * c + u * u,
                    d = -s / p * 1;
                s >= p && function () {
                    var e = Math.atan2(u, c);
                    if (t.vx = d * Math.cos(e), t.vy = d * Math.sin(e), "bounce" == i.particles.move.out_mode) {
                        var n = {
                            x: t.x + t.vx,
                            y: t.y + t.vy
                        };
                        n.x + t.radius > i.canvas.w ? t.vx = -t.vx : n.x - t.radius < 0 && (t.vx = -t.vx), n.y + t.radius > i.canvas.h ? t.vy = -t.vy : n.y - t.radius < 0 && (t.vy = -t.vy)
                    }
                }()
            } else 0 == i.tmp.repulse_clicking && (t.vx = t.vx_i, t.vy = t.vy_i)
    }, i.fn.modes.grabParticle = function (t) {
        if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
            var e = t.x - i.interactivity.mouse.pos_x,
                n = t.y - i.interactivity.mouse.pos_y,
                r = Math.sqrt(e * e + n * n);
            if (r <= i.interactivity.modes.grab.distance) {
                var o = i.interactivity.modes.grab.line_linked.opacity - r / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;
                if (o > 0) {
                    var s = i.particles.line_linked.color_rgb_line;
                    i.canvas.ctx.strokeStyle = "rgba(" + s.r + "," + s.g + "," + s.b + "," + o + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(t.x, t.y), i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath()
                }
            }
        }
    }, i.fn.vendors.eventsListeners = function () {
        "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el, (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function (t) {
            if (i.interactivity.el == window) var e = t.clientX,
                n = t.clientY;
            else var e = t.offsetX || t.clientX,
                n = t.offsetY || t.clientY;
            i.interactivity.mouse.pos_x = e, i.interactivity.mouse.pos_y = n, i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio, i.interactivity.mouse.pos_y *= i.canvas.pxratio), i.interactivity.status = "mousemove"
        }), i.interactivity.el.addEventListener("mouseleave", function (t) {
            i.interactivity.mouse.pos_x = null, i.interactivity.mouse.pos_y = null, i.interactivity.status = "mouseleave"
        })), i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function () {
            if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x, i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y, i.interactivity.mouse.click_time = (new Date).getTime(), i.interactivity.events.onclick.enable) switch (i.interactivity.events.onclick.mode) {
                case "push":
                    i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
                    break;
                case "remove":
                    i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
                    break;
                case "bubble":
                    i.tmp.bubble_clicking = !0;
                    break;
                case "repulse":
                    i.tmp.repulse_clicking = !0, i.tmp.repulse_count = 0, i.tmp.repulse_finish = !1, setTimeout(function () {
                        i.tmp.repulse_clicking = !1
                    }, 1e3 * i.interactivity.modes.repulse.duration)
            }
        })
    }, i.fn.vendors.densityAutoParticles = function () {
        if (i.particles.number.density.enable) {
            var t = i.canvas.el.width * i.canvas.el.height / 1e3;
            i.tmp.retina && (t /= 2 * i.canvas.pxratio);
            var e = t * i.particles.number.value / i.particles.number.density.value_area,
                n = i.particles.array.length - e;
            0 > n ? i.fn.modes.pushParticles(Math.abs(n)) : i.fn.modes.removeParticles(n)
        }
    }, i.fn.vendors.checkOverlap = function (t, e) {
        for (var n = 0; n < i.particles.array.length; n++) {
            var r = i.particles.array[n],
                o = t.x - r.x,
                s = t.y - r.y;
            Math.sqrt(o * o + s * s) <= t.radius + r.radius && (t.x = e ? e.x : Math.random() * i.canvas.w, t.y = e ? e.y : Math.random() * i.canvas.h, i.fn.vendors.checkOverlap(t))
        }
    }, i.fn.vendors.createSvgImg = function (t) {
        var e = i.tmp.source_svg,
            n = e.replace(/#([0-9A-F]{3,6})/gi, function (e, n, i, r) {
                if (t.color.rgb) var o = "rgba(" + t.color.rgb.r + "," + t.color.rgb.g + "," + t.color.rgb.b + "," + t.opacity + ")";
                else var o = "hsla(" + t.color.hsl.h + "," + t.color.hsl.s + "%," + t.color.hsl.l + "%," + t.opacity + ")";
                return o
            }),
            r = new Blob([n], {
                type: "image/svg+xml;charset=utf-8"
            }),
            o = window.URL || window.webkitURL || window,
            s = o.createObjectURL(r),
            a = new Image;
        a.addEventListener("load", function () {
            t.img.obj = a, t.img.loaded = !0, o.revokeObjectURL(s), i.tmp.count_svg++
        }), a.src = s
    }, i.fn.vendors.destroypJS = function () {
        cancelAnimationFrame(i.fn.drawAnimFrame), n.remove(), pJSDom = null
    }, i.fn.vendors.drawShape = function (t, e, n, i, r, o) {
        var s = r * o,
            a = r / o,
            l = 180 * (a - 2) / a,
            c = Math.PI - Math.PI * l / 180;
        t.save(), t.beginPath(), t.translate(e, n), t.moveTo(0, 0);
        for (var u = 0; s > u; u++) t.lineTo(i, 0), t.translate(i, 0), t.rotate(c);
        t.fill(), t.restore()
    }, i.fn.vendors.exportImg = function () {
        window.open(i.canvas.el.toDataURL("image/png"), "_blank")
    }, i.fn.vendors.loadImg = function (t) {
        if (i.tmp.img_error = void 0, "" != i.particles.shape.image.src)
            if ("svg" == t) {
                var e = new XMLHttpRequest;
                e.open("GET", i.particles.shape.image.src), e.onreadystatechange = function (t) {
                    4 == e.readyState && (200 == e.status ? (i.tmp.source_svg = t.currentTarget.response, i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i.tmp.img_error = !0))
                }, e.send()
            } else {
                var n = new Image;
                n.addEventListener("load", function () {
                    i.tmp.img_obj = n, i.fn.vendors.checkBeforeDraw()
                }), n.src = i.particles.shape.image.src
            }
        else console.log("Error pJS - No image.src"), i.tmp.img_error = !0
    }, i.fn.vendors.draw = function () {
        "image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame))
    }, i.fn.vendors.checkBeforeDraw = function () {
        "image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw())) : (i.fn.vendors.init(), i.fn.vendors.draw())
    }, i.fn.vendors.init = function () {
        i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color)
    }, i.fn.vendors.start = function () {
        isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw()
    }, i.fn.vendors.eventsListeners(), i.fn.vendors.start()
};
Object.deepExtend = function (t, e) {
    for (var n in e) e[n] && e[n].constructor && e[n].constructor === Object ? (t[n] = t[n] || {}, arguments.callee(t[n], e[n])) : t[n] = e[n];
    return t
}, window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
        window.setTimeout(t, 1e3 / 60)
    }
}(), window.cancelRequestAnimFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
}(), window.pJSDom = [], window.particlesJS = function (t, e) {
    "string" != typeof t && (e = t, t = "particles-js"), t || (t = "particles-js");
    var n = document.getElementById(t),
        i = "particles-js-canvas-el",
        r = n.getElementsByClassName(i);
    if (r.length)
        for (; r.length > 0;) n.removeChild(r[0]);
    var o = document.createElement("canvas");
    o.className = i, o.style.width = "100%", o.style.height = "100%", null != document.getElementById(t).appendChild(o) && pJSDom.push(new pJS(t, e))
}, window.particlesJS.load = function (t, e, n) {
    var i = new XMLHttpRequest;
    i.open("GET", e), i.onreadystatechange = function (e) {
        if (4 == i.readyState)
            if (200 == i.status) {
                var r = JSON.parse(e.currentTarget.response);
                window.particlesJS(t, r), n && n()
            } else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found")
    }, i.send()
}, $(document).ready(function () {
    particlesJS.load("particles-js", "/assets/particles.json", function () {}), particlesJS.load("particles-js-inline", "/assets/particlesinline.json", function () {})
});
