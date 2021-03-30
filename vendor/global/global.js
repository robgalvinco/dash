! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        l = n.indexOf,
        c = {},
        u = c.toString,
        d = c.hasOwnProperty,
        f = d.toString,
        h = f.call(Object),
        p = {},
        g = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        m = function(e) {
            return null != e && e === e.window
        },
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var i, o, a = (n = n || r).createElement("script");
        if (a.text = e, t)
            for (i in v)(o = t[i] || t.getAttribute && t.getAttribute(i)) && a.setAttribute(i, o);
        n.head.appendChild(a).parentNode.removeChild(a)
    }

    function y(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
    }
    var _ = "3.4.1",
        w = function(e, t) {
            return new w.fn.init(e, t)
        },
        E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function T(e) {
        var t = !!e && "length" in e && e.length,
            n = y(e);
        return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    w.fn = w.prototype = {
        jquery: _,
        constructor: w,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (c && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || w.isPlainObject(n) ? n : {}, i = !1, a[t] = w.extend(c, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, w.extend({
        expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = i(e)) && ("function" != typeof(n = d.call(t, "constructor") && t.constructor) || f.call(n) !== h))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            b(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, r = 0;
            if (T(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(E, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (T(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                s = [];
            if (T(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        support: p
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    var x = function(e) {
        var t, n, r, i, o, a, s, l, c, u, d, f, h, p, g, m, v, b, y, _ = "sizzle" + 1 * new Date,
            w = e.document,
            E = 0,
            T = 0,
            x = le(),
            C = le(),
            S = le(),
            k = le(),
            D = function(e, t) {
                return e === t && (d = !0), 0
            },
            A = {}.hasOwnProperty,
            N = [],
            O = N.pop,
            I = N.push,
            L = N.push,
            j = N.slice,
            H = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            W = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + R + "*(" + W + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + R + "*\\]",
            q = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            Y = new RegExp(R + "+", "g"),
            F = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            B = new RegExp("^" + R + "*," + R + "*"),
            X = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            U = new RegExp(R + "|>"),
            z = new RegExp(q),
            K = new RegExp("^" + W + "$"),
            $ = {
                ID: new RegExp("^#(" + W + ")"),
                CLASS: new RegExp("^\\.(" + W + ")"),
                TAG: new RegExp("^(" + W + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            },
            Q = /HTML$/i,
            V = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
            ne = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                f()
            },
            ae = _e(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(N = j.call(w.childNodes), w.childNodes), N[w.childNodes.length].nodeType
        } catch (t) {
            L = {
                apply: N.length ? function(e, t) {
                    I.apply(e, j.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function se(e, t, r, i) {
            var o, s, c, u, d, p, v, b = t && t.ownerDocument,
                E = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== E && 9 !== E && 11 !== E) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== h && f(t), t = t || h, g)) {
                if (11 !== E && (d = Z.exec(e)))
                    if (o = d[1]) {
                        if (9 === E) {
                            if (!(c = t.getElementById(o))) return r;
                            if (c.id === o) return r.push(c), r
                        } else if (b && (c = b.getElementById(o)) && y(t, c) && c.id === o) return r.push(c), r
                    } else {
                        if (d[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                    } if (n.qsa && !k[e + " "] && (!m || !m.test(e)) && (1 !== E || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, b = t, 1 === E && U.test(e)) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(re, ie) : t.setAttribute("id", u = _), s = (p = a(e)).length; s--;) p[s] = "#" + u + " " + ye(p[s]);
                        v = p.join(","), b = ee.test(e) && ve(t.parentNode) || t
                    }
                    try {
                        return L.apply(r, b.querySelectorAll(v)), r
                    } catch (t) {
                        k(e, !0)
                    } finally {
                        u === _ && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(F, "$1"), t, r, i)
        }

        function le() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
        }

        function ce(e) {
            return e[_] = !0, e
        }

        function ue(e) {
            var t = h.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function de(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
        }

        function fe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function he(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ge(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function me(e) {
            return ce(function(t) {
                return t = +t, ce(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = se.support = {}, o = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Q.test(t || n && n.nodeName || "HTML")
            }, f = se.setDocument = function(e) {
                var t, i, a = e ? e.ownerDocument || e : w;
                return a !== h && 9 === a.nodeType && a.documentElement && (p = (h = a).documentElement, g = !o(h), w !== h && (i = h.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.attributes = ue(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ue(function(e) {
                    return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = J.test(h.getElementsByClassName), n.getById = ue(function(e) {
                    return p.appendChild(e).id = _, !h.getElementsByName || !h.getElementsByName(_).length
                }), n.getById ? (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (r.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, v = [], m = [], (n.qsa = J.test(h.querySelectorAll)) && (ue(function(e) {
                    p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]")
                }), ue(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = h.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (n.matchesSelector = J.test(b = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ue(function(e) {
                    n.disconnectedMatch = b.call(e, "*"), b.call(e, "[s!='']:x"), v.push("!=", q)
                }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(p.compareDocumentPosition), y = t || J.test(p.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) {
                    if (e === t) return d = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === h || e.ownerDocument === w && y(w, e) ? -1 : t === h || t.ownerDocument === w && y(w, t) ? 1 : u ? H(u, e) - H(u, t) : 0 : 4 & r ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === h ? -1 : t === h ? 1 : i ? -1 : o ? 1 : u ? H(u, e) - H(u, t) : 0;
                    if (i === o) return fe(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? fe(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                }), h
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== h && f(e), n.matchesSelector && g && !k[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                    var r = b.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {
                    k(t, !0)
                }
                return 0 < se(t, h, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) !== h && f(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) !== h && f(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, r = [],
                    i = 0,
                    o = 0;
                if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(D), d) {
                    for (; t = e[o++];) t === e[o] && (i = r.push(o));
                    for (; i--;) e.splice(r[i], 1)
                }
                return u = null, e
            }, i = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[r++];) n += i(t);
                return n
            }, (r = se.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: $,
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
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return $.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = x[e + " "];
                        return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && x(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = se.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i.replace(Y, " ") + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, d, f, h, p, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                b = !l && !s,
                                y = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (f = t; f = f[g];)
                                            if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [a ? m.firstChild : m.lastChild], a && b) {
                                    for (y = (h = (c = (u = (d = (f = m)[_] || (f[_] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === E && c[1]) && c[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (y = h = 0) || p.pop();)
                                        if (1 === f.nodeType && ++y && f === t) {
                                            u[e] = [E, h, y];
                                            break
                                        }
                                } else if (b && (y = h = (c = (u = (d = (f = t)[_] || (f[_] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === E && c[1]), !1 === y)
                                    for (;
                                        (f = ++h && f && f[g] || (y = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++y || (b && ((u = (d = f[_] || (f[_] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [E, y]), f !== t)););
                                return (y -= i) === r || y % r == 0 && 0 <= y / r
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return i[_] ? i(t) : 1 < i.length ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, n) {
                            for (var r, o = i(e, t), a = o.length; a--;) e[r = H(e, o[a])] = !(n[r] = o[a])
                        }) : function(e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: ce(function(e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(F, "$1"));
                        return r[_] ? ce(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: ce(function(e) {
                        return function(t) {
                            return 0 < se(e, t).length
                        }
                    }),
                    contains: ce(function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return -1 < (t.textContent || i(t)).indexOf(e)
                            }
                    }),
                    lang: ce(function(e) {
                        return K.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === p
                    },
                    focus: function(e) {
                        return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !r.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return V.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: me(function() {
                        return [0]
                    }),
                    last: me(function(e, t) {
                        return [t - 1]
                    }),
                    eq: me(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: me(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: me(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: me(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: me(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = r.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = he(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = pe(t);

        function be() {}

        function ye(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function _e(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = T++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function(t, n, l) {
                var c, u, d, f = [E, s];
                if (l) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (u = (d = t[_] || (t[_] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((c = u[o]) && c[0] === E && c[1] === s) return f[2] = c[2];
                                if ((u[o] = f)[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function we(e) {
            return 1 < e.length ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function Ee(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), c && t.push(s)));
            return a
        }

        function Te(e, t, n, r, i, o) {
            return r && !r[_] && (r = Te(r)), i && !i[_] && (i = Te(i, o)), ce(function(o, a, s, l) {
                var c, u, d, f = [],
                    h = [],
                    p = a.length,
                    g = o || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !o && t ? g : Ee(g, f, e, s, l),
                    v = n ? i || (o ? e : p || r) ? [] : a : m;
                if (n && n(m, v, s, l), r)
                    for (c = Ee(v, h), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (v[h[u]] = !(m[h[u]] = d));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (c = [], u = v.length; u--;)(d = v[u]) && c.push(m[u] = d);
                            i(null, v = [], c, l)
                        }
                        for (u = v.length; u--;)(d = v[u]) && -1 < (c = i ? H(o, d) : f[u]) && (o[c] = !(a[c] = d))
                    }
                } else v = Ee(v === a ? v.splice(p, v.length) : v), i ? i(null, a, v, l) : L.apply(a, v)
            })
        }

        function xe(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], l = a ? 1 : 0, u = _e(function(e) {
                    return e === t
                }, s, !0), d = _e(function(e) {
                    return -1 < H(t, e)
                }, s, !0), f = [function(e, n, r) {
                    var i = !a && (r || n !== c) || ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
                    return t = null, i
                }]; l < o; l++)
                if (n = r.relative[e[l].type]) f = [_e(we(f), n)];
                else {
                    if ((n = r.filter[e[l].type].apply(null, e[l].matches))[_]) {
                        for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                        return Te(1 < l && we(f), 1 < l && ye(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(F, "$1"), n, l < i && xe(e.slice(l, i)), i < o && xe(e = e.slice(i)), i < o && ye(e))
                    }
                    f.push(n)
                } return we(f)
        }
        return be.prototype = r.filters = r.pseudos, r.setFilters = new be, a = se.tokenize = function(e, t) {
            var n, i, o, a, s, l, c, u = C[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, l = [], c = r.preFilter; s;) {
                for (a in n && !(i = B.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), n = !1, (i = X.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(F, " ")
                    }), s = s.slice(n.length)), r.filter) !(i = $[a].exec(s)) || c[a] && !(i = c[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? se.error(e) : C(e, l).slice(0)
        }, s = se.compile = function(e, t) {
            var n, i, o, s, l, u, d = [],
                p = [],
                m = S[e + " "];
            if (!m) {
                for (t || (t = a(e)), n = t.length; n--;)(m = xe(t[n]))[_] ? d.push(m) : p.push(m);
                (m = S(e, (i = p, s = 0 < (o = d).length, l = 0 < i.length, u = function(e, t, n, a, u) {
                    var d, p, m, v = 0,
                        b = "0",
                        y = e && [],
                        _ = [],
                        w = c,
                        T = e || l && r.find.TAG("*", u),
                        x = E += null == w ? 1 : Math.random() || .1,
                        C = T.length;
                    for (u && (c = t === h || t || u); b !== C && null != (d = T[b]); b++) {
                        if (l && d) {
                            for (p = 0, t || d.ownerDocument === h || (f(d), n = !g); m = i[p++];)
                                if (m(d, t || h, n)) {
                                    a.push(d);
                                    break
                                } u && (E = x)
                        }
                        s && ((d = !m && d) && v--, e && y.push(d))
                    }
                    if (v += b, s && b !== v) {
                        for (p = 0; m = o[p++];) m(y, _, t, n);
                        if (e) {
                            if (0 < v)
                                for (; b--;) y[b] || _[b] || (_[b] = O.call(a));
                            _ = Ee(_)
                        }
                        L.apply(a, _), u && !e && 0 < _.length && 1 < v + o.length && se.uniqueSort(a)
                    }
                    return u && (E = x, c = w), y
                }, s ? ce(u) : u))).selector = e
            }
            return m
        }, l = se.select = function(e, t, n, i) {
            var o, l, c, u, d, f = "function" == typeof e && e,
                h = !i && a(e = f.selector || e);
            if (n = n || [], 1 === h.length) {
                if (2 < (l = h[0] = h[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === t.nodeType && g && r.relative[l[1].type]) {
                    if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                    f && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (o = $.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !r.relative[u = c.type]);)
                    if ((d = r.find[u]) && (i = d(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(o, 1), !(e = i.length && ye(l))) return L.apply(n, i), n;
                        break
                    }
            }
            return (f || s(e, h))(i, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, n.sortStable = _.split("").sort(D).join("") === _, n.detectDuplicates = !!d, f(), n.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
        }), ue(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || de("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ue(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || de("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || de(P, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(e);
    w.find = x, w.expr = x.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = x.uniqueSort, w.text = x.getText, w.isXMLDoc = x.isXML, w.contains = x.contains, w.escapeSelector = x.escape;
    var C = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e)
                } return r
        },
        S = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = w.expr.match.needsContext;

    function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function N(e, t, n) {
        return g(t) ? w.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function(e) {
            return -1 < l.call(t, e) !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (w.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
            return 1 < r ? w.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(N(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(N(this, e || [], !0))
        },
        is: function(e) {
            return !!N(this, "string" == typeof e && k.test(e) ? w(e) : e || [], !1).length
        }
    });
    var O, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || O, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : I.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))
                    for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, O = w(r);
    var L = /^(?:parents|prev(?:Until|All))/,
        j = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function H(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    w.fn.extend({
        has: function(e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? w.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return C(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return C(e, "parentNode", n)
        },
        next: function(e) {
            return H(e, "nextSibling")
        },
        prev: function(e) {
            return H(e, "previousSibling")
        },
        nextAll: function(e) {
            return C(e, "nextSibling")
        },
        prevAll: function(e) {
            return C(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return C(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return C(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (D(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function(e, t) {
        w.fn[e] = function(n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), 1 < this.length && (j[e] || w.uniqueSort(i), L.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function W(e) {
        throw e
    }

    function M(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.Callbacks = function(e) {
        var t, n;
        e = "string" == typeof e ? (t = e, n = {}, w.each(t.match(P) || [], function(e, t) {
            n[t] = !0
        }), n) : w.extend({}, e);
        var r, i, o, a, s = [],
            l = [],
            c = -1,
            u = function() {
                for (a = a || e.once, o = r = !0; l.length; c = -1)
                    for (i = l.shift(); ++c < s.length;) !1 === s[c].apply(i[0], i[1]) && e.stopOnFalse && (c = s.length, i = !1);
                e.memory || (i = !1), r = !1, a && (s = i ? [] : "")
            },
            d = {
                add: function() {
                    return s && (i && !r && (c = s.length - 1, l.push(i)), function t(n) {
                        w.each(n, function(n, r) {
                            g(r) ? e.unique && d.has(r) || s.push(r) : r && r.length && "string" !== y(r) && t(r)
                        })
                    }(arguments), i && !r && u()), this
                },
                remove: function() {
                    return w.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = w.inArray(t, s, n));) s.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < w.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = l = [], s = i = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = l = [], i || r || (s = i = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), r || u()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return d
    }, w.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return w.Deferred(function(t) {
                            w.each(n, function(n, r) {
                                var i = g(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function() {
                                var s = this,
                                    l = arguments,
                                    c = function() {
                                        var e, c;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, g(c) ? i ? c.call(e, a(o, n, R, i), a(o, n, W, i)) : (o++, c.call(e, a(o, n, R, i), a(o, n, W, i), a(o, n, R, n.notifyWith))) : (r !== R && (s = void 0, l = [e]), (i || n.resolveWith)(s, l))
                                        }
                                    },
                                    u = i ? c : function() {
                                        try {
                                            c()
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, u.stackTrace), o <= t + 1 && (r !== W && (s = void 0, l = [e]), n.rejectWith(s, l))
                                        }
                                    };
                                t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }
                        return w.Deferred(function(e) {
                            n[0][3].add(a(0, e, g(i) ? i : R, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : R)), n[2][3].add(a(0, e, g(r) ? r : W))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? w.extend(e, i) : i
                    }
                },
                o = {};
            return w.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                s = function(e) {
                    return function(n) {
                        r[e] = this, i[e] = 1 < arguments.length ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                    }
                };
            if (t <= 1 && (M(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            for (; n--;) M(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && q.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var Y = w.Deferred();

    function F() {
        r.removeEventListener("DOMContentLoaded", F), e.removeEventListener("load", F), w.ready()
    }
    w.fn.ready = function(e) {
        return Y.then(e).catch(function(e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0) !== e && 0 < --w.readyWait || Y.resolveWith(r, [w])
        }
    }), w.ready.then = Y.then, "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", F), e.addEventListener("load", F));
    var B = function(e, t, n, r, i, o, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === y(n))
                for (s in i = !0, n) B(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, g(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(w(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        X = /^-ms-/,
        U = /-([a-z])/g;

    function z(e, t) {
        return t.toUpperCase()
    }

    function K(e) {
        return e.replace(X, "ms-").replace(U, z)
    }
    var $ = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Q() {
        this.expando = w.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[K(t)] = n;
            else
                for (r in t) i[K(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in r ? [t] : t.match(P) || []).length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var V = new Q,
        G = new Q,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                G.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return G.hasData(e) || V.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return V.access(e, t, n)
        },
        _removeData: function(e, t) {
            V.remove(e, t)
        }
    }), w.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = G.get(o), 1 === o.nodeType && !V.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = K(r.slice(5)), ee(o, r, i[r]));
                    V.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                G.set(this, e)
            }) : B(this, function(t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = G.get(o, e)) ? n : void 0 !== (n = ee(o, e)) ? n : void 0;
                this.each(function() {
                    G.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }), w.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = V.get(e, t), n && (!r || Array.isArray(n) ? r = V.access(e, t, w.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = w._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                w.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return V.get(e, n) || V.access(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    V.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = w.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = V.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        ie = r.documentElement,
        oe = function(e) {
            return w.contains(e.ownerDocument, e)
        },
        ae = {
            composed: !0
        };
    ie.getRootNode && (oe = function(e) {
        return w.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    });
    var se = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === w.css(e, "display")
        },
        le = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
            return i
        };

    function ce(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return w.css(e, t, "")
            },
            l = s(),
            c = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (w.cssNumber[t] || "px" !== c && +l) && ne.exec(w.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; a--;) w.style(e, t, u + c), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), u /= o;
            u *= 2, w.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = u, r.end = i)), i
    }
    var ue = {};

    function de(e, t) {
        for (var n, r, i, o, a, s, l, c = [], u = 0, d = e.length; u < d; u++)(r = e[u]).style && (n = r.style.display, t ? ("none" === n && (c[u] = V.get(r, "display") || null, c[u] || (r.style.display = "")), "" === r.style.display && se(r) && (c[u] = (l = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (l = ue[s]) || (o = a.body.appendChild(a.createElement(s)), l = w.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), ue[s] = l)))) : "none" !== n && (c[u] = "none", V.set(r, "display", n)));
        for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
        return e
    }
    w.fn.extend({
        show: function() {
            return de(this, !0)
        },
        hide: function() {
            return de(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var fe = /^(?:checkbox|radio)$/i,
        he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function me(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? w.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var be, ye, _e = /<|&#?\w+;/;

    function we(e, t, n, r, i) {
        for (var o, a, s, l, c, u, d = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
            if ((o = e[h]) || 0 === o)
                if ("object" === y(o)) w.merge(f, o.nodeType ? [o] : o);
                else if (_e.test(o)) {
            for (a = a || d.appendChild(t.createElement("div")), s = (he.exec(o) || ["", ""])[1].toLowerCase(), l = ge[s] || ge._default, a.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], u = l[0]; u--;) a = a.lastChild;
            w.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
        } else f.push(t.createTextNode(o));
        for (d.textContent = "", h = 0; o = f[h++];)
            if (r && -1 < w.inArray(o, r)) i && i.push(o);
            else if (c = oe(o), a = me(d.appendChild(o), "script"), c && ve(a), n)
            for (u = 0; o = a[u++];) pe.test(o.type || "") && n.push(o);
        return d
    }
    be = r.createDocumentFragment().appendChild(r.createElement("div")), (ye = r.createElement("input")).setAttribute("type", "radio"), ye.setAttribute("checked", "checked"), ye.setAttribute("name", "t"), be.appendChild(ye), p.checkClone = be.cloneNode(!0).cloneNode(!0).lastChild.checked, be.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!be.cloneNode(!0).lastChild.defaultValue;
    var Ee = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xe = /^([^.]*)(?:\.(.+)|)/;

    function Ce() {
        return !0
    }

    function Se() {
        return !1
    }

    function ke(e, t) {
        return e === function() {
            try {
                return r.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) De(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function() {
            w.event.add(this, t, i, r, n)
        })
    }

    function Ae(e, t, n) {
        n ? (V.set(e, t, !1), w.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var r, i, a = V.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = o.call(arguments), V.set(this, t, a), r = n(this, t), this[t](), a !== (i = V.get(this, t)) || r ? V.set(this, t, !1) : i = {}, a !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
                } else a.length && (V.set(this, t, {
                    value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === V.get(e, t) && w.event.add(e, t, Ce)
    }
    w.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, l, c, u, d, f, h, p, g, m = V.get(e);
            if (m)
                for (n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(ie, i), n.guid || (n.guid = w.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(P) || [""]).length; c--;) h = g = (s = xe.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), h && (d = w.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, d = w.event.special[h] || {}, u = w.extend({
                    type: h,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                }, o), (f = l[h]) || ((f = l[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, p, a) || e.addEventListener && e.addEventListener(h, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, u) : f.push(u), w.event.global[h] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, c, u, d, f, h, p, g, m = V.hasData(e) && V.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(P) || [""]).length; c--;)
                    if (h = g = (s = xe.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
                        for (d = w.event.special[h] || {}, f = l[h = (r ? d.delegateType : d.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) u = f[o], !i && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                        a && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || w.removeEvent(e, h, m.handle), delete l[h])
                    } else
                        for (h in l) w.event.remove(e, h + t[c], n, r, !0);
                w.isEmptyObject(l) && V.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = w.event.fix(e),
                l = new Array(arguments.length),
                c = (V.get(this, "events") || {})[s.type] || [],
                u = w.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                for (a = w.event.handlers.call(this, s, c), t = 0;
                    (i = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < w(i, this).index(c) : w.find(i, this, null, [c]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: c,
                            handlers: o
                        })
                    } return c = this, l < t.length && s.push({
                elem: c,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && D(t, "input") && Ae(t, "click", Ce), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && D(t, "input") && Ae(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return fe.test(t.type) && t.click && D(t, "input") && V.get(t, "click") || D(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function(e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ee.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        w.event.special[e] = {
            setup: function() {
                return Ae(this, e, ke), !1
            },
            trigger: function() {
                return Ae(this, e), !0
            },
            delegateType: t
        }
    }), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget,
                    i = e.handleObj;
                return r && (r === this || w.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({
        on: function(e, t, n, r) {
            return De(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return De(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Oe = /<script|<style|<link/i,
        Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
    }

    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Pe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Re(e, t) {
        var n, r, i, o, a, s, l, c;
        if (1 === t.nodeType) {
            if (V.hasData(e) && (o = V.access(e), a = V.set(t, o), c = o.events))
                for (i in delete a.handle, a.events = {}, c)
                    for (n = 0, r = c[i].length; n < r; n++) w.event.add(t, i, c[i][n]);
            G.hasData(e) && (s = G.access(e), l = w.extend({}, s), G.set(t, l))
        }
    }

    function We(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, l, c, u, d = 0,
            f = e.length,
            h = f - 1,
            m = t[0],
            v = g(m);
        if (v || 1 < f && "string" == typeof m && !p.checkClone && Ie.test(m)) return e.each(function(i) {
            var o = e.eq(i);
            v && (t[0] = m.call(this, i, o.html())), We(o, t, n, r)
        });
        if (f && (o = (i = we(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (l = (s = w.map(me(i, "script"), He)).length; d < f; d++) c = i, d !== h && (c = w.clone(c, !0, !0), l && w.merge(s, me(c, "script"))), n.call(e[d], c, d);
            if (l)
                for (u = s[s.length - 1].ownerDocument, w.map(s, Pe), d = 0; d < l; d++) c = s[d], pe.test(c.type || "") && !V.access(c, "globalEval") && w.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && !c.noModule && w._evalUrl(c.src, {
                    nonce: c.nonce || c.getAttribute("nonce")
                }) : b(c.textContent.replace(Le, ""), c, u))
        }
        return e
    }

    function Me(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(me(r)), r.parentNode && (n && oe(r) && ve(me(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ne, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, l, c, u = e.cloneNode(!0),
                d = oe(e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = me(u), r = 0, i = (o = me(e)).length; r < i; r++) s = o[r], "input" === (c = (l = a[r]).nodeName.toLowerCase()) && fe.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || me(e), a = a || me(u), r = 0, i = o.length; r < i; r++) Re(o[r], a[r]);
                else Re(e, u);
            return 0 < (a = me(u, "script")).length && ve(a, !d && me(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if ($(n)) {
                    if (t = n[V.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[V.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function(e) {
            return Me(this, e, !0)
        },
        remove: function(e) {
            return Me(this, e)
        },
        text: function(e) {
            return B(this, function(e) {
                return void 0 === e ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return We(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return We(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return We(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return We(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(me(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return B(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Oe.test(e) && !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return We(this, arguments, function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(me(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var qe = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Ye = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Fe = new RegExp(re.join("|"), "i");

    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ye(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = w.style(e, t)), !p.pixelBoxStyles() && qe.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Xe(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                i = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), u.style.position = "absolute", a = 12 === n(u.offsetWidth / 3), ie.removeChild(c), u = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, a, s, l, c = r.createElement("div"),
            u = r.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, w.extend(p, {
            boxSizingReliable: function() {
                return t(), o
            },
            pixelBoxStyles: function() {
                return t(), s
            },
            pixelPosition: function() {
                return t(), i
            },
            reliableMarginLeft: function() {
                return t(), l
            },
            scrollboxSize: function() {
                return t(), a
            }
        }))
    }();
    var Ue = ["Webkit", "Moz", "ms"],
        ze = r.createElement("div").style,
        Ke = {};

    function $e(e) {
        return w.cssProps[e] || Ke[e] || (e in ze ? e : Ke[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;)
                if ((e = Ue[n] + t) in ze) return e
        }(e) || e)
    }
    var Qe = /^(none|table(?!-c[ea]).+)/,
        Ve = /^--/,
        Ge = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Je = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ze(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += w.css(e, n + re[a], !0, i)), r ? ("content" === n && (l -= w.css(e, "padding" + re[a], !0, i)), "margin" !== n && (l -= w.css(e, "border" + re[a] + "Width", !0, i))) : (l += w.css(e, "padding" + re[a], !0, i), "padding" !== n ? l += w.css(e, "border" + re[a] + "Width", !0, i) : s += w.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0), l
    }

    function tt(e, t, n) {
        var r = Ye(e),
            i = (!p.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (qe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!p.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === w.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function nt(e, t, n, r, i) {
        return new nt.prototype.init(e, t, n, r, i)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
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
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = K(t),
                    l = Ve.test(t),
                    c = e.style;
                if (l || (t = $e(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : c[t];
                "string" == (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = ce(e, t, i), o = "number"), null != n && n == n && ("number" !== o || l || (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = K(t);
            return Ve.test(t) || (t = $e(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Je && (i = Je[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !Qe.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, r) : le(e, Ge, function() {
                    return tt(e, t, r)
                })
            },
            set: function(e, n, r) {
                var i, o = Ye(e),
                    a = !p.scrollboxSize() && "absolute" === o.position,
                    s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, o),
                    l = r ? et(e, t, r, s, o) : 0;
                return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - et(e, t, "border", !1, o) - .5)), l && (i = ne.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ze(0, n, l)
            }
        }
    }), w.cssHooks.marginLeft = Xe(p.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + re[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ze)
    }), w.fn.extend({
        css: function(e, t) {
            return B(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Ye(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((w.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
        }
    }).init.prototype = nt.prototype, (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[$e(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = nt.prototype.init, w.fx.step = {};
    var rt, it, ot, at, st = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;

    function ct() {
        it && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ct) : e.setTimeout(ct, w.fx.interval), w.fx.tick())
    }

    function ut() {
        return e.setTimeout(function() {
            rt = void 0
        }), rt = Date.now()
    }

    function dt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ft(e, t, n) {
        for (var r, i = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ht(e, t, n) {
        var r, i, o = 0,
            a = ht.prefilters.length,
            s = w.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                for (var t = rt || ut(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++) c.tweens[o].run(r);
                return s.notifyWith(e, [c, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: rt || ut(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = K(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(u, c.opts.specialEasing); o < a; o++)
            if (r = ht.prefilters[o].call(c, e, u, c.opts)) return g(r.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(u, ft, c), g(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    w.Animation = w.extend(ht, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ce(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            g(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ht.tweeners[n] = ht.tweeners[n] || [], ht.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, l, c, u, d = "width" in t || "height" in t,
                f = this,
                h = {},
                p = e.style,
                g = e.nodeType && se(e),
                m = V.get(e, "fxshow");
            for (r in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, f.always(function() {
                    f.always(function() {
                        a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], st.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[r]) continue;
                        g = !0
                    }
                    h[r] = m && m[r] || w.style(e, r)
                } if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h))
                for (r in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = V.get(e, "display")), "none" === (u = w.css(e, "display")) && (c ? u = c : (de([e], !0), c = e.style.display || c, u = w.css(e, "display"), de([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === w.css(e, "float") && (l || (f.done(function() {
                        p.display = c
                    }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = V.access(e, "fxshow", {
                    display: c
                }), o && (m.hidden = !g), g && de([e], !0), f.done(function() {
                    for (r in g || de([e]), V.remove(e, "fxshow"), h) w.style(e, r, h[r])
                })), l = ft(g ? m[r] : 0, r, f), r in m || (m[r] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ht.prefilters.unshift(e) : ht.prefilters.push(e)
        }
    }), w.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
        }, r
    }, w.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = w.isEmptyObject(e),
                o = w.speed(t, n, r),
                a = function() {
                    var t = ht(this, w.extend({}, e), o);
                    (i || V.get(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    o = w.timers,
                    a = V.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a) a[i] && a[i].stop && lt.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || w.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = V.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = w.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), w.each(["toggle", "show", "hide"], function(e, t) {
        var n = w.fn[t];
        w.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, r, i)
        }
    }), w.each({
        slideDown: dt("show"),
        slideUp: dt("hide"),
        slideToggle: dt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        w.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), w.timers = [], w.fx.tick = function() {
        var e, t = 0,
            n = w.timers;
        for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), rt = void 0
    }, w.fx.timer = function(e) {
        w.timers.push(e), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function() {
        it || (it = !0, ct())
    }, w.fx.stop = function() {
        it = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fn.delay = function(t, n) {
        return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }, ot = r.createElement("input"), at = r.createElement("select").appendChild(r.createElement("option")), ot.type = "checkbox", p.checkOn = "" !== ot.value, p.optSelected = at.selected, (ot = r.createElement("input")).value = "t", ot.type = "radio", p.radioValue = "t" === ot.value;
    var pt, gt = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return B(this, w.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!p.radioValue && "radio" === t && D(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), pt = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = gt[t] || w.find.attr;
        gt[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = gt[a], gt[a] = i, i = null != n(e, t, r) ? a : null, gt[a] = o), i
        }
    });
    var mt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;

    function bt(e) {
        return (e.match(P) || []).join(" ")
    }

    function yt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function _t(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    w.fn.extend({
        prop: function(e, t) {
            return B(this, w.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : mt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), p.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    }), w.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, l = 0;
            if (g(e)) return this.each(function(t) {
                w(this).addClass(e.call(this, t, yt(this)))
            });
            if ((t = _t(e)).length)
                for (; n = this[l++];)
                    if (i = yt(n), r = 1 === n.nodeType && " " + bt(i) + " ") {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = bt(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, l = 0;
            if (g(e)) return this.each(function(t) {
                w(this).removeClass(e.call(this, t, yt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = _t(e)).length)
                for (; n = this[l++];)
                    if (i = yt(n), r = 1 === n.nodeType && " " + bt(i) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                        i !== (s = bt(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                w(this).toggleClass(e.call(this, n, yt(this), t), t)
            }) : this.each(function() {
                var t, i, o, a;
                if (r)
                    for (i = 0, o = w(this), a = _t(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = yt(this)) && V.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : V.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + bt(yt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = g(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(wt, "") : null == n ? "" : n : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : bt(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        l = a ? o + 1 : i.length;
                    for (r = o < 0 ? l : a ? o : 0; r < l; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = w.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < w.inArray(w.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < w.inArray(w(e).val(), t)
            }
        }, p.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), p.focusin = "onfocusin" in e;
    var Et = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function(e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function(t, n, i, o) {
            var a, s, l, c, u, f, h, p, v = [i || r],
                b = d.call(t, "type") ? t.type : t,
                y = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = p = l = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !Et.test(b + w.event.triggered) && (-1 < b.indexOf(".") && (b = (y = b.split(".")).shift(), y.sort()), u = b.indexOf(":") < 0 && "on" + b, (t = t[w.expando] ? t : new w.Event(b, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), h = w.event.special[b] || {}, o || !h.trigger || !1 !== h.trigger.apply(i, n))) {
                if (!o && !h.noBubble && !m(i)) {
                    for (c = h.delegateType || b, Et.test(c + b) || (s = s.parentNode); s; s = s.parentNode) v.push(s), l = s;
                    l === (i.ownerDocument || r) && v.push(l.defaultView || l.parentWindow || e)
                }
                for (a = 0;
                    (s = v[a++]) && !t.isPropagationStopped();) p = s, t.type = 1 < a ? c : h.bindType || b, (f = (V.get(s, "events") || {})[t.type] && V.get(s, "handle")) && f.apply(s, n), (f = u && s[u]) && f.apply && $(s) && (t.result = f.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = b, o || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(v.pop(), n) || !$(i) || u && g(i[b]) && !m(i) && ((l = i[u]) && (i[u] = null), w.event.triggered = b, t.isPropagationStopped() && p.addEventListener(b, Tt), i[b](), t.isPropagationStopped() && p.removeEventListener(b, Tt), w.event.triggered = void 0, l && (i[u] = l)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t)
        }
    }), w.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), p.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = V.access(r, t);
                i || r.addEventListener(e, n, !0), V.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = V.access(r, t) - 1;
                i ? V.access(r, t, i) : (r.removeEventListener(e, n, !0), V.remove(r, t))
            }
        }
    });
    var xt = e.location,
        Ct = Date.now(),
        St = /\?/;
    w.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var kt = /\[\]$/,
        Dt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function Ot(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, function(t, i) {
            n || kt.test(e) ? r(e, i) : Ot(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== y(t)) r(e, t);
        else
            for (i in t) Ot(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Ot(n, e[n], t, i);
        return r.join("&")
    }, w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !fe.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var It = /%20/g,
        Lt = /#.*$/,
        jt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        Wt = {},
        Mt = {},
        qt = "*/".concat("*"),
        Yt = r.createElement("a");

    function Ft(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(P) || [];
            if (g(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Bt(e, t, n, r) {
        var i = {},
            o = e === Mt;

        function a(s) {
            var l;
            return i[s] = !0, w.each(e[s] || [], function(e, s) {
                var c = s(t, n, r);
                return "string" != typeof c || o || i[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
            }), l
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function Xt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e
    }
    Yt.href = xt.href, w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": qt,
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
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Xt(Xt(e, w.ajaxSettings), t) : Xt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Wt),
        ajaxTransport: Ft(Mt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, l, c, u, d, f, h, p = w.ajaxSetup({}, n),
                g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                b = w.Callbacks("once memory"),
                y = p.statusCode || {},
                _ = {},
                E = {},
                T = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u) {
                            if (!s)
                                for (s = {}; t = Ht.exec(a);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = s[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return u ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == u && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e, _[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == u && (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (u) x.always(e[x.status]);
                            else
                                for (t in e) y[t] = [y[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return i && i.abort(t), C(0, t), this
                    }
                };
            if (v.promise(x), p.url = ((t || p.url || xt.href) + "").replace(Rt, xt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(P) || [""], null == p.crossDomain) {
                c = r.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = Yt.protocol + "//" + Yt.host != c.protocol + "//" + c.host
                } catch (t) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), Bt(Wt, p, n, x), u) return x;
            for (f in (d = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Pt.test(p.type), o = p.url.replace(Lt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(It, "+")) : (h = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (St.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(jt, "$1"), h = (St.test(o) ? "&" : "?") + "_=" + Ct++ + h), p.url = o + h), p.ifModified && (w.lastModified[o] && x.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && x.setRequestHeader("If-None-Match", w.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : p.accepts["*"]), p.headers) x.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, x, p) || u)) return x.abort();
            if (T = "abort", b.add(p.complete), x.done(p.success), x.fail(p.error), i = Bt(Mt, p, n, x)) {
                if (x.readyState = 1, d && m.trigger("ajaxSend", [x, p]), u) return x;
                p.async && 0 < p.timeout && (l = e.setTimeout(function() {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    u = !1, i.send(_, C)
                } catch (t) {
                    if (u) throw t;
                    C(-1, t)
                }
            } else C(-1, "No Transport");

            function C(t, n, r, s) {
                var c, f, h, _, E, T = n;
                u || (u = !0, l && e.clearTimeout(l), i = void 0, a = s || "", x.readyState = 0 < t ? 4 : 0, c = 200 <= t && t < 300 || 304 === t, r && (_ = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                l.unshift(i);
                                break
                            } if (l[0] in n) o = l[0];
                    else {
                        for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(p, x, r)), _ = function(e, t, n, r) {
                    var i, o, a, s, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                    for (o = u.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(a = c[l + " " + o] || c["* " + o]))
                            for (i in c)
                                if ((s = i.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                    !0 === a ? a = c[i] : !0 !== c[i] && (o = s[0], u.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, _, x, c), c ? (p.ifModified && ((E = x.getResponseHeader("Last-Modified")) && (w.lastModified[o] = E), (E = x.getResponseHeader("etag")) && (w.etag[o] = E)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = _.state, f = _.data, c = !(h = _.error))) : (h = T, !t && T || (T = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (n || T) + "", c ? v.resolveWith(g, [f, T, x]) : v.rejectWith(g, [x, T, h]), x.statusCode(y), y = void 0, d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [x, p, c ? f : h]), b.fireWith(g, [x, T]), d && (m.trigger("ajaxComplete", [x, p]), --w.active || w.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function(e, t) {
        w[t] = function(e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    }), w._evalUrl = function(e, t) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                w.globalEval(e, t)
            }
        })
    }, w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Ut = {
            0: 200,
            1223: 204
        },
        zt = w.ajaxSettings.xhr();
    p.cors = !!zt && "withCredentials" in zt, p.ajax = zt = !!zt, w.ajaxTransport(function(t) {
        var n, r;
        if (p.cors || zt && !t.crossDomain) return {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ut[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (i) {
                    if (n) throw i
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(i, o) {
                t = w("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), r.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var Kt, $t = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = $t.pop() || w.expando + "_" + Ct++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || w.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, $t.push(i)), a && g(o) && o(a[0]), a = o = void 0
        }), "script"
    }), p.createHTMLDocument = ((Kt = r.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Kt.childNodes.length), w.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), a = !n && [], (o = A.exec(e)) ? [t.createElement(o[1])] : (o = we([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes)));
        var i, o, a
    }, w.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = bt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, function(t) {
            return e === t.elem
        }).length
    }, w.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, l, c = w.css(e, "position"),
                u = w(e),
                d = {};
            "static" === c && (e.style.position = "relative"), s = u.offset(), o = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (a = (r = u.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, w.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                w.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                return e || ie
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(r) {
            return B(this, function(e, r, i) {
                var o;
                if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), w.each(["top", "left"], function(e, t) {
        w.cssHooks[t] = Xe(p.pixelPosition, function(e, n) {
            if (n) return n = Be(e, t), qe.test(n) ? w(e).position()[t] + "px" : n
        })
    }), w.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            w.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return B(this, function(t, n, i) {
                    var o;
                    return m(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), w.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || w.guid++, i
    }, w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = D, w.isFunction = g, w.isWindow = m, w.camelCase = K, w.type = y, w.now = Date.now, w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    });
    var Vt = e.jQuery,
        Gt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Gt), t && e.jQuery === w && (e.jQuery = Vt), w
    }, t || (e.jQuery = e.$ = w), w
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = e || self).bootstrap = {}, e.jQuery)
}(this, function(e, t) {
    "use strict";

    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function r(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, i, o;
                r = e, o = n[i = t], i in r ? Object.defineProperty(r, i, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[i] = o
            })
        }
        return e
    }
    t = t && t.hasOwnProperty("default") ? t.default : t;
    var o = "transitionend";
    var a = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var n = t(e).css("transition-duration"),
                r = t(e).css("transition-delay"),
                i = parseFloat(n),
                o = parseFloat(r);
            return i || o ? (n = n.split(",")[0], r = r.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(r))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            t(e).trigger(o)
        },
        supportsTransitionEnd: function() {
            return Boolean(o)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var r in n)
                if (Object.prototype.hasOwnProperty.call(n, r)) {
                    var i = n[r],
                        o = t[r],
                        s = o && a.isElement(o) ? "element" : (l = o, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(i).test(s)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + s + '" but expected type "' + i + '".')
                } var l
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? a.findShadowRoot(e.parentNode) : null;
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        }
    };
    t.fn.emulateTransitionEnd = function(e) {
        var n = this,
            r = !1;
        return t(this).one(a.TRANSITION_END, function() {
            r = !0
        }), setTimeout(function() {
            r || a.triggerTransitionEnd(n)
        }, e), this
    }, t.event.special[a.TRANSITION_END] = {
        bindType: o,
        delegateType: o,
        handle: function(e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var s = "alert",
        l = "bs.alert",
        c = "." + l,
        u = t.fn[s],
        d = {
            CLOSE: "close" + c,
            CLOSED: "closed" + c,
            CLICK_DATA_API: "click" + c + ".data-api"
        },
        f = function() {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, n.dispose = function() {
                t.removeData(this._element, l), this._element = null
            }, n._getRootElement = function(e) {
                var n = a.getSelectorFromElement(e),
                    r = !1;
                return n && (r = document.querySelector(n)), r || (r = t(e).closest(".alert")[0]), r
            }, n._triggerCloseEvent = function(e) {
                var n = t.Event(d.CLOSE);
                return t(e).trigger(n), n
            }, n._removeElement = function(e) {
                var n = this;
                if (t(e).removeClass("show"), t(e).hasClass("fade")) {
                    var r = a.getTransitionDurationFromElement(e);
                    t(e).one(a.TRANSITION_END, function(t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(r)
                } else this._destroyElement(e)
            }, n._destroyElement = function(e) {
                t(e).detach().trigger(d.CLOSED).remove()
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this),
                        i = r.data(l);
                    i || (i = new e(this), r.data(l, i)), "close" === n && i[n](this)
                })
            }, e._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(d.CLICK_DATA_API, '[data-dismiss="alert"]', f._handleDismiss(new f)), t.fn[s] = f._jQueryInterface, t.fn[s].Constructor = f, t.fn[s].noConflict = function() {
        return t.fn[s] = u, f._jQueryInterface
    };
    var h = "button",
        p = "bs.button",
        g = "." + p,
        m = ".data-api",
        v = t.fn[h],
        b = "active",
        y = '[data-toggle^="button"]',
        _ = ".btn",
        w = {
            CLICK_DATA_API: "click" + g + m,
            FOCUS_BLUR_DATA_API: "focus" + g + m + " blur" + g + m
        },
        E = function() {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.toggle = function() {
                var e = !0,
                    n = !0,
                    r = t(this._element).closest('[data-toggle="buttons"]')[0];
                if (r) {
                    var i = this._element.querySelector('input:not([type="hidden"])');
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(b)) e = !1;
                            else {
                                var o = r.querySelector(".active");
                                o && t(o).removeClass(b)
                            } if (e) {
                            if (i.hasAttribute("disabled") || r.hasAttribute("disabled") || i.classList.contains("disabled") || r.classList.contains("disabled")) return;
                            i.checked = !this._element.classList.contains(b), t(i).trigger("change")
                        }
                        i.focus(), n = !1
                    }
                }
                n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(b)), e && t(this._element).toggleClass(b)
            }, n.dispose = function() {
                t.removeData(this._element, p), this._element = null
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this).data(p);
                    r || (r = new e(this), t(this).data(p, r)), "toggle" === n && r[n]()
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(w.CLICK_DATA_API, y, function(e) {
        e.preventDefault();
        var n = e.target;
        t(n).hasClass("btn") || (n = t(n).closest(_)), E._jQueryInterface.call(t(n), "toggle")
    }).on(w.FOCUS_BLUR_DATA_API, y, function(e) {
        var n = t(e.target).closest(_)[0];
        t(n).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }), t.fn[h] = E._jQueryInterface, t.fn[h].Constructor = E, t.fn[h].noConflict = function() {
        return t.fn[h] = v, E._jQueryInterface
    };
    var T = "carousel",
        x = "bs.carousel",
        C = "." + x,
        S = ".data-api",
        k = t.fn[T],
        D = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        A = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        N = "next",
        O = "prev",
        I = {
            SLIDE: "slide" + C,
            SLID: "slid" + C,
            KEYDOWN: "keydown" + C,
            MOUSEENTER: "mouseenter" + C,
            MOUSELEAVE: "mouseleave" + C,
            TOUCHSTART: "touchstart" + C,
            TOUCHMOVE: "touchmove" + C,
            TOUCHEND: "touchend" + C,
            POINTERDOWN: "pointerdown" + C,
            POINTERUP: "pointerup" + C,
            DRAG_START: "dragstart" + C,
            LOAD_DATA_API: "load" + C + S,
            CLICK_DATA_API: "click" + C + S
        },
        L = "active",
        j = ".active.carousel-item",
        H = ".carousel-indicators",
        P = {
            TOUCH: "touch",
            PEN: "pen"
        },
        R = function() {
            function e(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(H), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var n = e.prototype;
            return n.next = function() {
                this._isSliding || this._slide(N)
            }, n.nextWhenVisible = function() {
                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
            }, n.prev = function() {
                this._isSliding || this._slide(O)
            }, n.pause = function(e) {
                e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, n.cycle = function(e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, n.to = function(e) {
                var n = this;
                this._activeElement = this._element.querySelector(j);
                var r = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) t(this._element).one(I.SLID, function() {
                        return n.to(e)
                    });
                    else {
                        if (r === e) return this.pause(), void this.cycle();
                        var i = r < e ? N : O;
                        this._slide(i, this._items[e])
                    }
            }, n.dispose = function() {
                t(this._element).off(C), t.removeData(this._element, x), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, n._getConfig = function(e) {
                return e = i({}, D, e), a.typeCheckConfig(T, e, A), e
            }, n._handleSwipe = function() {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    0 < t && this.prev(), t < 0 && this.next()
                }
            }, n._addEventListeners = function() {
                var e = this;
                this._config.keyboard && t(this._element).on(I.KEYDOWN, function(t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && t(this._element).on(I.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(I.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, n._addTouchEventListeners = function() {
                var e = this;
                if (this._touchSupported) {
                    var n = function(t) {
                            e._pointerEvent && P[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                        r = function(t) {
                            e._pointerEvent && P[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval))
                        };
                    t(this._element.querySelectorAll(".carousel-item img")).on(I.DRAG_START, function(e) {
                        return e.preventDefault()
                    }), this._pointerEvent ? (t(this._element).on(I.POINTERDOWN, function(e) {
                        return n(e)
                    }), t(this._element).on(I.POINTERUP, function(e) {
                        return r(e)
                    }), this._element.classList.add("pointer-event")) : (t(this._element).on(I.TOUCHSTART, function(e) {
                        return n(e)
                    }), t(this._element).on(I.TOUCHMOVE, function(t) {
                        var n;
                        (n = t).originalEvent.touches && 1 < n.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = n.originalEvent.touches[0].clientX - e.touchStartX
                    }), t(this._element).on(I.TOUCHEND, function(e) {
                        return r(e)
                    }))
                }
            }, n._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, n._getItemIndex = function(e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
            }, n._getItemByDirection = function(e, t) {
                var n = e === N,
                    r = e === O,
                    i = this._getItemIndex(t),
                    o = this._items.length - 1;
                if ((r && 0 === i || n && i === o) && !this._config.wrap) return t;
                var a = (i + (e === O ? -1 : 1)) % this._items.length;
                return -1 === a ? this._items[this._items.length - 1] : this._items[a]
            }, n._triggerSlideEvent = function(e, n) {
                var r = this._getItemIndex(e),
                    i = this._getItemIndex(this._element.querySelector(j)),
                    o = t.Event(I.SLIDE, {
                        relatedTarget: e,
                        direction: n,
                        from: i,
                        to: r
                    });
                return t(this._element).trigger(o), o
            }, n._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    t(n).removeClass(L);
                    var r = this._indicatorsElement.children[this._getItemIndex(e)];
                    r && t(r).addClass(L)
                }
            }, n._slide = function(e, n) {
                var r, i, o, s = this,
                    l = this._element.querySelector(j),
                    c = this._getItemIndex(l),
                    u = n || l && this._getItemByDirection(e, l),
                    d = this._getItemIndex(u),
                    f = Boolean(this._interval);
                if (o = e === N ? (r = "carousel-item-left", i = "carousel-item-next", "left") : (r = "carousel-item-right", i = "carousel-item-prev", "right"), u && t(u).hasClass(L)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && l && u) {
                    this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(u);
                    var h = t.Event(I.SLID, {
                        relatedTarget: u,
                        direction: o,
                        from: c,
                        to: d
                    });
                    if (t(this._element).hasClass("slide")) {
                        t(u).addClass(i), a.reflow(u), t(l).addClass(r), t(u).addClass(r);
                        var p = parseInt(u.getAttribute("data-interval"), 10);
                        this._config.interval = p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, p) : this._config.defaultInterval || this._config.interval;
                        var g = a.getTransitionDurationFromElement(l);
                        t(l).one(a.TRANSITION_END, function() {
                            t(u).removeClass(r + " " + i).addClass(L), t(l).removeClass(L + " " + i + " " + r), s._isSliding = !1, setTimeout(function() {
                                return t(s._element).trigger(h)
                            }, 0)
                        }).emulateTransitionEnd(g)
                    } else t(l).removeClass(L), t(u).addClass(L), this._isSliding = !1, t(this._element).trigger(h);
                    f && this.cycle()
                }
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this).data(x),
                        o = i({}, D, t(this).data());
                    "object" == typeof n && (o = i({}, o, n));
                    var a = "string" == typeof n ? n : o.slide;
                    if (r || (r = new e(this, o), t(this).data(x, r)), "number" == typeof n) r.to(n);
                    else if ("string" == typeof a) {
                        if (void 0 === r[a]) throw new TypeError('No method named "' + a + '"');
                        r[a]()
                    } else o.interval && o.ride && (r.pause(), r.cycle())
                })
            }, e._dataApiClickHandler = function(n) {
                var r = a.getSelectorFromElement(this);
                if (r) {
                    var o = t(r)[0];
                    if (o && t(o).hasClass("carousel")) {
                        var s = i({}, t(o).data(), t(this).data()),
                            l = this.getAttribute("data-slide-to");
                        l && (s.interval = !1), e._jQueryInterface.call(t(o), s), l && t(o).data(x).to(l), n.preventDefault()
                    }
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return D
                }
            }]), e
        }();
    t(document).on(I.CLICK_DATA_API, "[data-slide], [data-slide-to]", R._dataApiClickHandler), t(window).on(I.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, r = e.length; n < r; n++) {
            var i = t(e[n]);
            R._jQueryInterface.call(i, i.data())
        }
    }), t.fn[T] = R._jQueryInterface, t.fn[T].Constructor = R, t.fn[T].noConflict = function() {
        return t.fn[T] = k, R._jQueryInterface
    };
    var W = "collapse",
        M = "bs.collapse",
        q = "." + M,
        Y = t.fn[W],
        F = {
            toggle: !0,
            parent: ""
        },
        B = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        X = {
            SHOW: "show" + q,
            SHOWN: "shown" + q,
            HIDE: "hide" + q,
            HIDDEN: "hidden" + q,
            CLICK_DATA_API: "click" + q + ".data-api"
        },
        U = "show",
        z = "collapse",
        K = "collapsing",
        $ = "collapsed",
        Q = '[data-toggle="collapse"]',
        V = function() {
            function e(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(Q)), r = 0, i = n.length; r < i; r++) {
                    var o = n[r],
                        s = a.getSelectorFromElement(o),
                        l = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                            return t === e
                        });
                    null !== s && 0 < l.length && (this._selector = s, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var n = e.prototype;
            return n.toggle = function() {
                t(this._element).hasClass(U) ? this.hide() : this.show()
            }, n.show = function() {
                var n, r, i = this;
                if (!(this._isTransitioning || t(this._element).hasClass(U) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
                        return "string" == typeof i._config.parent ? e.getAttribute("data-parent") === i._config.parent : e.classList.contains(z)
                    })).length && (n = null), n && (r = t(n).not(this._selector).data(M)) && r._isTransitioning))) {
                    var o = t.Event(X.SHOW);
                    if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                        n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), r || t(n).data(M, null));
                        var s = this._getDimension();
                        t(this._element).removeClass(z).addClass(K), this._element.style[s] = 0, this._triggerArray.length && t(this._triggerArray).removeClass($).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var l = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                            c = a.getTransitionDurationFromElement(this._element);
                        t(this._element).one(a.TRANSITION_END, function() {
                            t(i._element).removeClass(K).addClass(z).addClass(U), i._element.style[s] = "", i.setTransitioning(!1), t(i._element).trigger(X.SHOWN)
                        }).emulateTransitionEnd(c), this._element.style[s] = this._element[l] + "px"
                    }
                }
            }, n.hide = function() {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(U)) {
                    var n = t.Event(X.HIDE);
                    if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                        var r = this._getDimension();
                        this._element.style[r] = this._element.getBoundingClientRect()[r] + "px", a.reflow(this._element), t(this._element).addClass(K).removeClass(z).removeClass(U);
                        var i = this._triggerArray.length;
                        if (0 < i)
                            for (var o = 0; o < i; o++) {
                                var s = this._triggerArray[o],
                                    l = a.getSelectorFromElement(s);
                                null !== l && (t([].slice.call(document.querySelectorAll(l))).hasClass(U) || t(s).addClass($).attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[r] = "";
                        var c = a.getTransitionDurationFromElement(this._element);
                        t(this._element).one(a.TRANSITION_END, function() {
                            e.setTransitioning(!1), t(e._element).removeClass(K).addClass(z).trigger(X.HIDDEN)
                        }).emulateTransitionEnd(c)
                    }
                }
            }, n.setTransitioning = function(e) {
                this._isTransitioning = e
            }, n.dispose = function() {
                t.removeData(this._element, M), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, n._getConfig = function(e) {
                return (e = i({}, F, e)).toggle = Boolean(e.toggle), a.typeCheckConfig(W, e, B), e
            }, n._getDimension = function() {
                return t(this._element).hasClass("width") ? "width" : "height"
            }, n._getParent = function() {
                var n, r = this;
                a.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    o = [].slice.call(n.querySelectorAll(i));
                return t(o).each(function(t, n) {
                    r._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                }), n
            }, n._addAriaAndCollapsedClass = function(e, n) {
                var r = t(e).hasClass(U);
                n.length && t(n).toggleClass($, !r).attr("aria-expanded", r)
            }, e._getTargetFromElement = function(e) {
                var t = a.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this),
                        o = r.data(M),
                        a = i({}, F, r.data(), "object" == typeof n && n ? n : {});
                    if (!o && a.toggle && /show|hide/.test(n) && (a.toggle = !1), o || (o = new e(this, a), r.data(M, o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return F
                }
            }]), e
        }();
    t(document).on(X.CLICK_DATA_API, Q, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = t(this),
            r = a.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(r));
        t(i).each(function() {
            var e = t(this),
                r = e.data(M) ? "toggle" : n.data();
            V._jQueryInterface.call(e, r)
        })
    }), t.fn[W] = V._jQueryInterface, t.fn[W].Constructor = V, t.fn[W].noConflict = function() {
        return t.fn[W] = Y, V._jQueryInterface
    };
    for (var G = "undefined" != typeof window && "undefined" != typeof document, J = ["Edge", "Trident", "Firefox"], Z = 0, ee = 0; ee < J.length; ee += 1)
        if (G && 0 <= navigator.userAgent.indexOf(J[ee])) {
            Z = 1;
            break
        } var te = G && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0, window.Promise.resolve().then(function() {
                t = !1, e()
            }))
        }
    } : function(e) {
        var t = !1;
        return function() {
            t || (t = !0, setTimeout(function() {
                t = !1, e()
            }, Z))
        }
    };

    function ne(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function re(e, t) {
        if (1 !== e.nodeType) return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function ie(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function oe(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var t = re(e),
            n = t.overflow,
            r = t.overflowX,
            i = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + i + r) ? e : oe(ie(e))
    }
    var ae = G && !(!window.MSInputMethodContext || !document.documentMode),
        se = G && /MSIE 10/.test(navigator.userAgent);

    function le(e) {
        return 11 === e ? ae : 10 === e ? se : ae || se
    }

    function ce(e) {
        if (!e) return document.documentElement;
        for (var t = le(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var r = n && n.nodeName;
        return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === re(n, "position") ? ce(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function ue(e) {
        return null !== e.parentNode ? ue(e.parentNode) : e
    }

    function de(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            r = n ? e : t,
            i = n ? t : e,
            o = document.createRange();
        o.setStart(r, 0), o.setEnd(i, 0);
        var a, s, l = o.commonAncestorContainer;
        if (e !== l && t !== l || r.contains(i)) return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && ce(a.firstElementChild) !== a ? ce(l) : l;
        var c = ue(e);
        return c.host ? de(c.host, t) : de(e, ue(t).host)
    }

    function fe(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" !== n && "HTML" !== n) return e[t];
        var r = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || r)[t]
    }

    function he(e, t) {
        var n = "x" === t ? "Left" : "Top",
            r = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + r + "Width"], 10)
    }

    function pe(e, t, n, r) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], le(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }

    function ge(e) {
        var t = e.body,
            n = e.documentElement,
            r = le(10) && getComputedStyle(n);
        return {
            height: pe("Height", t, n, r),
            width: pe("Width", t, n, r)
        }
    }
    var me = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        ve = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        be = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };

    function ye(e) {
        return be({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function _e(e) {
        var t = {};
        try {
            if (le(10)) {
                t = e.getBoundingClientRect();
                var n = fe(e, "top"),
                    r = fe(e, "left");
                t.top += n, t.left += r, t.bottom += n, t.right += r
            } else t = e.getBoundingClientRect()
        } catch (e) {}
        var i = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            o = "HTML" === e.nodeName ? ge(e.ownerDocument) : {},
            a = o.width || e.clientWidth || i.right - i.left,
            s = o.height || e.clientHeight || i.bottom - i.top,
            l = e.offsetWidth - a,
            c = e.offsetHeight - s;
        if (l || c) {
            var u = re(e);
            l -= he(u, "x"), c -= he(u, "y"), i.width -= l, i.height -= c
        }
        return ye(i)
    }

    function we(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            r = le(10),
            i = "HTML" === t.nodeName,
            o = _e(e),
            a = _e(t),
            s = oe(e),
            l = re(t),
            c = parseFloat(l.borderTopWidth, 10),
            u = parseFloat(l.borderLeftWidth, 10);
        n && i && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
        var d = ye({
            top: o.top - a.top - c,
            left: o.left - a.left - u,
            width: o.width,
            height: o.height
        });
        if (d.marginTop = 0, d.marginLeft = 0, !r && i) {
            var f = parseFloat(l.marginTop, 10),
                h = parseFloat(l.marginLeft, 10);
            d.top -= c - f, d.bottom -= c - f, d.left -= u - h, d.right -= u - h, d.marginTop = f, d.marginLeft = h
        }
        return (r && !n ? t.contains(s) : t === s && "BODY" !== s.nodeName) && (d = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                r = fe(t, "top"),
                i = fe(t, "left"),
                o = n ? -1 : 1;
            return e.top += r * o, e.bottom += r * o, e.left += i * o, e.right += i * o, e
        }(d, t)), d
    }

    function Ee(e) {
        if (!e || !e.parentElement || le()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === re(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function Te(e, t, n, r) {
        var i = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            o = {
                top: 0,
                left: 0
            },
            a = i ? Ee(e) : de(e, t);
        if ("viewport" === r) o = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement,
                r = we(e, n),
                i = Math.max(n.clientWidth, window.innerWidth || 0),
                o = Math.max(n.clientHeight, window.innerHeight || 0),
                a = t ? 0 : fe(n),
                s = t ? 0 : fe(n, "left");
            return ye({
                top: a - r.top + r.marginTop,
                left: s - r.left + r.marginLeft,
                width: i,
                height: o
            })
        }(a, i);
        else {
            var s = void 0;
            "scrollParent" === r ? "BODY" === (s = oe(ie(t))).nodeName && (s = e.ownerDocument.documentElement) : s = "window" === r ? e.ownerDocument.documentElement : r;
            var l = we(s, a, i);
            if ("HTML" !== s.nodeName || function e(t) {
                    var n = t.nodeName;
                    if ("BODY" === n || "HTML" === n) return !1;
                    if ("fixed" === re(t, "position")) return !0;
                    var r = ie(t);
                    return !!r && e(r)
                }(a)) o = l;
            else {
                var c = ge(e.ownerDocument),
                    u = c.height,
                    d = c.width;
                o.top += l.top - l.marginTop, o.bottom = u + l.top, o.left += l.left - l.marginLeft, o.right = d + l.left
            }
        }
        var f = "number" == typeof(n = n || 0);
        return o.left += f ? n : n.left || 0, o.top += f ? n : n.top || 0, o.right -= f ? n : n.right || 0, o.bottom -= f ? n : n.bottom || 0, o
    }

    function xe(e, t, n, r, i) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = Te(n, r, o, i),
            s = {
                top: {
                    width: a.width,
                    height: t.top - a.top
                },
                right: {
                    width: a.right - t.right,
                    height: a.height
                },
                bottom: {
                    width: a.width,
                    height: a.bottom - t.bottom
                },
                left: {
                    width: t.left - a.left,
                    height: a.height
                }
            },
            l = Object.keys(s).map(function(e) {
                return be({
                    key: e
                }, s[e], {
                    area: (t = s[e], t.width * t.height)
                });
                var t
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            c = l.filter(function(e) {
                var t = e.width,
                    r = e.height;
                return t >= n.clientWidth && r >= n.clientHeight
            }),
            u = 0 < c.length ? c[0].key : l[0].key,
            d = e.split("-")[1];
        return u + (d ? "-" + d : "")
    }

    function Ce(e, t, n) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return we(n, r ? Ee(t) : de(t, n), r)
    }

    function Se(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + r,
            height: e.offsetHeight + n
        }
    }

    function ke(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function De(e, t, n) {
        n = n.split("-")[0];
        var r = Se(e),
            i = {
                width: r.width,
                height: r.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            a = o ? "top" : "left",
            s = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
        return i[a] = t[a] + t[l] / 2 - r[l] / 2, i[s] = n === s ? t[s] - r[c] : t[ke(s)], i
    }

    function Ae(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function Ne(e, t, n) {
        return (void 0 === n ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e[t] === n
            });
            var r = Ae(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(r)
        }(e, "name", n))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = e.function || e.fn;
            e.enabled && ne(n) && (t.offsets.popper = ye(t.offsets.popper), t.offsets.reference = ye(t.offsets.reference), t = n(t, e))
        }), t
    }

    function Oe(e, t) {
        return e.some(function(e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }

    function Ie(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
            var i = t[r],
                o = i ? "" + i + n : e;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function Le(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function je(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function He(e, t) {
        Object.keys(t).forEach(function(n) {
            var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && je(t[n]) && (r = "px"), e.style[n] = t[n] + r
        })
    }
    var Pe = G && /Firefox/i.test(navigator.userAgent);

    function Re(e, t, n) {
        var r = Ae(e, function(e) {
                return e.name === t
            }),
            i = !!r && e.some(function(e) {
                return e.name === n && e.enabled && e.order < r.order
            });
        if (!i) {
            var o = "`" + t + "`",
                a = "`" + n + "`";
            console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return i
    }
    var We = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Me = We.slice(3);

    function qe(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = Me.indexOf(e),
            r = Me.slice(n + 1).concat(Me.slice(0, n));
        return t ? r.reverse() : r
    }
    var Ye = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            r = t.split("-")[1];
                        if (r) {
                            var i = e.offsets,
                                o = i.reference,
                                a = i.popper,
                                s = -1 !== ["bottom", "top"].indexOf(n),
                                l = s ? "left" : "top",
                                c = s ? "width" : "height",
                                u = {
                                    start: ve({}, l, o[l]),
                                    end: ve({}, l, o[l] + o[c] - a[c])
                                };
                            e.offsets.popper = be({}, a, u[r])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(e, t) {
                        var n, r = t.offset,
                            i = e.placement,
                            o = e.offsets,
                            a = o.popper,
                            s = o.reference,
                            l = i.split("-")[0];
                        return n = je(+r) ? [+r, 0] : function(e, t, n, r) {
                            var i = [0, 0],
                                o = -1 !== ["right", "left"].indexOf(r),
                                a = e.split(/(\+|\-)/).map(function(e) {
                                    return e.trim()
                                }),
                                s = a.indexOf(Ae(a, function(e) {
                                    return -1 !== e.search(/,|\s/)
                                }));
                            a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                            var l = /\s*,\s*|\s+/,
                                c = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
                            return (c = c.map(function(e, r) {
                                var i = (1 === r ? !o : o) ? "height" : "width",
                                    a = !1;
                                return e.reduce(function(e, t) {
                                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
                                }, []).map(function(e) {
                                    return function(e, t, n, r) {
                                        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                            o = +i[1],
                                            a = i[2];
                                        if (!o) return e;
                                        if (0 !== a.indexOf("%")) return "vh" !== a && "vw" !== a ? o : ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                                        var s = void 0;
                                        switch (a) {
                                            case "%p":
                                                s = n;
                                                break;
                                            case "%":
                                            case "%r":
                                            default:
                                                s = r
                                        }
                                        return ye(s)[t] / 100 * o
                                    }(e, i, t, n)
                                })
                            })).forEach(function(e, t) {
                                e.forEach(function(n, r) {
                                    je(n) && (i[t] += n * ("-" === e[r - 1] ? -1 : 1))
                                })
                            }), i
                        }(r, a, s, l), "left" === l ? (a.top += n[0], a.left -= n[1]) : "right" === l ? (a.top += n[0], a.left += n[1]) : "top" === l ? (a.left += n[0], a.top -= n[1]) : "bottom" === l && (a.left += n[0], a.top += n[1]), e.popper = a, e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.boundariesElement || ce(e.instance.popper);
                        e.instance.reference === n && (n = ce(n));
                        var r = Ie("transform"),
                            i = e.instance.popper.style,
                            o = i.top,
                            a = i.left,
                            s = i[r];
                        i.top = "", i.left = "", i[r] = "";
                        var l = Te(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                        i.top = o, i.left = a, i[r] = s, t.boundaries = l;
                        var c = t.priority,
                            u = e.offsets.popper,
                            d = {
                                primary: function(e) {
                                    var n = u[e];
                                    return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), ve({}, e, n)
                                },
                                secondary: function(e) {
                                    var n = "right" === e ? "left" : "top",
                                        r = u[n];
                                    return u[e] > l[e] && !t.escapeWithReference && (r = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), ve({}, n, r)
                                }
                            };
                        return c.forEach(function(e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            u = be({}, u, d[t](e))
                        }), e.offsets.popper = u, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.offsets,
                            n = t.popper,
                            r = t.reference,
                            i = e.placement.split("-")[0],
                            o = Math.floor,
                            a = -1 !== ["top", "bottom"].indexOf(i),
                            s = a ? "right" : "bottom",
                            l = a ? "left" : "top",
                            c = a ? "width" : "height";
                        return n[s] < o(r[l]) && (e.offsets.popper[l] = o(r[l]) - n[c]), n[l] > o(r[s]) && (e.offsets.popper[l] = o(r[s])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, t) {
                        var n;
                        if (!Re(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var r = t.element;
                        if ("string" == typeof r) {
                            if (!(r = e.instance.popper.querySelector(r))) return e
                        } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var i = e.placement.split("-")[0],
                            o = e.offsets,
                            a = o.popper,
                            s = o.reference,
                            l = -1 !== ["left", "right"].indexOf(i),
                            c = l ? "height" : "width",
                            u = l ? "Top" : "Left",
                            d = u.toLowerCase(),
                            f = l ? "left" : "top",
                            h = l ? "bottom" : "right",
                            p = Se(r)[c];
                        s[h] - p < a[d] && (e.offsets.popper[d] -= a[d] - (s[h] - p)), s[d] + p > a[h] && (e.offsets.popper[d] += s[d] + p - a[h]), e.offsets.popper = ye(e.offsets.popper);
                        var g = s[d] + s[c] / 2 - p / 2,
                            m = re(e.instance.popper),
                            v = parseFloat(m["margin" + u], 10),
                            b = parseFloat(m["border" + u + "Width"], 10),
                            y = g - e.offsets.popper[d] - v - b;
                        return y = Math.max(Math.min(a[c] - p, y), 0), e.arrowElement = r, e.offsets.arrow = (ve(n = {}, d, Math.round(y)), ve(n, f, ""), n), e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(e, t) {
                        if (Oe(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var n = Te(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                            r = e.placement.split("-")[0],
                            i = ke(r),
                            o = e.placement.split("-")[1] || "",
                            a = [];
                        switch (t.behavior) {
                            case "flip":
                                a = [r, i];
                                break;
                            case "clockwise":
                                a = qe(r);
                                break;
                            case "counterclockwise":
                                a = qe(r, !0);
                                break;
                            default:
                                a = t.behavior
                        }
                        return a.forEach(function(s, l) {
                            if (r !== s || a.length === l + 1) return e;
                            r = e.placement.split("-")[0], i = ke(r);
                            var c, u = e.offsets.popper,
                                d = e.offsets.reference,
                                f = Math.floor,
                                h = "left" === r && f(u.right) > f(d.left) || "right" === r && f(u.left) < f(d.right) || "top" === r && f(u.bottom) > f(d.top) || "bottom" === r && f(u.top) < f(d.bottom),
                                p = f(u.left) < f(n.left),
                                g = f(u.right) > f(n.right),
                                m = f(u.top) < f(n.top),
                                v = f(u.bottom) > f(n.bottom),
                                b = "left" === r && p || "right" === r && g || "top" === r && m || "bottom" === r && v,
                                y = -1 !== ["top", "bottom"].indexOf(r),
                                _ = !!t.flipVariations && (y && "start" === o && p || y && "end" === o && g || !y && "start" === o && m || !y && "end" === o && v);
                            (h || b || _) && (e.flipped = !0, (h || b) && (r = a[l + 1]), _ && (o = "end" === (c = o) ? "start" : "start" === c ? "end" : c), e.placement = r + (o ? "-" + o : ""), e.offsets.popper = be({}, e.offsets.popper, De(e.instance.popper, e.offsets.reference, e.placement)), e = Ne(e.instance.modifiers, e, "flip"))
                        }), e
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            r = e.offsets,
                            i = r.popper,
                            o = r.reference,
                            a = -1 !== ["left", "right"].indexOf(n),
                            s = -1 === ["top", "left"].indexOf(n);
                        return i[a ? "left" : "top"] = o[n] - (s ? i[a ? "width" : "height"] : 0), e.placement = ke(t), e.offsets.popper = ye(i), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!Re(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = Ae(e.instance.modifiers, function(e) {
                                return "preventOverflow" === e.name
                            }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.x,
                            r = t.y,
                            i = e.offsets.popper,
                            o = Ae(e.instance.modifiers, function(e) {
                                return "applyStyle" === e.name
                            }).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var a, s, l, c, u, d, f, h, p, g, m, v, b, y, _, w, E = void 0 !== o ? o : t.gpuAcceleration,
                            T = ce(e.instance.popper),
                            x = _e(T),
                            C = {
                                position: i.position
                            },
                            S = (a = e, s = window.devicePixelRatio < 2 || !Pe, c = (l = a.offsets).popper, u = l.reference, d = Math.round, f = Math.floor, h = function(e) {
                                return e
                            }, p = d(u.width), g = d(c.width), m = -1 !== ["left", "right"].indexOf(a.placement), v = -1 !== a.placement.indexOf("-"), y = s ? d : h, {
                                left: (b = s ? m || v || p % 2 == g % 2 ? d : f : h)(p % 2 == 1 && g % 2 == 1 && !v && s ? c.left - 1 : c.left),
                                top: y(c.top),
                                bottom: y(c.bottom),
                                right: b(c.right)
                            }),
                            k = "bottom" === n ? "top" : "bottom",
                            D = "right" === r ? "left" : "right",
                            A = Ie("transform");
                        if (w = "bottom" === k ? "HTML" === T.nodeName ? -T.clientHeight + S.bottom : -x.height + S.bottom : S.top, _ = "right" === D ? "HTML" === T.nodeName ? -T.clientWidth + S.right : -x.width + S.right : S.left, E && A) C[A] = "translate3d(" + _ + "px, " + w + "px, 0)", C[k] = 0, C[D] = 0, C.willChange = "transform";
                        else {
                            var N = "bottom" === k ? -1 : 1,
                                O = "right" === D ? -1 : 1;
                            C[k] = w * N, C[D] = _ * O, C.willChange = k + ", " + D
                        }
                        var I = {
                            "x-placement": e.placement
                        };
                        return e.attributes = be({}, I, e.attributes), e.styles = be({}, C, e.styles), e.arrowStyles = be({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) {
                        var t, n;
                        return He(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {
                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                        }), e.arrowElement && Object.keys(e.arrowStyles).length && He(e.arrowElement, e.arrowStyles), e
                    },
                    onLoad: function(e, t, n, r, i) {
                        var o = Ce(i, t, e, n.positionFixed),
                            a = xe(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", a), He(t, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        Fe = function() {
            function e(t, n) {
                var r = this,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                ! function(t, n) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this), this.scheduleUpdate = function() {
                    return requestAnimationFrame(r.update)
                }, this.update = te(this.update.bind(this)), this.options = be({}, e.Defaults, i), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(be({}, e.Defaults.modifiers, i.modifiers)).forEach(function(t) {
                    r.options.modifiers[t] = be({}, e.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return be({
                        name: e
                    }, r.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(e) {
                    e.enabled && ne(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
                }), this.update();
                var o = this.options.eventsEnabled;
                o && this.enableEventListeners(), this.state.eventsEnabled = o
            }
            return me(e, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = Ce(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = xe(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = De(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = Ne(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return function() {
                        return this.state.isDestroyed = !0, Oe(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[Ie("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return function() {
                        this.state.eventsEnabled || (this.state = function(e, t, n, r) {
                            n.updateBound = r, Le(e).addEventListener("resize", n.updateBound, {
                                passive: !0
                            });
                            var i = oe(e);
                            return function e(t, n, r, i) {
                                var o = "BODY" === t.nodeName,
                                    a = o ? t.ownerDocument.defaultView : t;
                                a.addEventListener(n, r, {
                                    passive: !0
                                }), o || e(oe(a.parentNode), n, r, i), i.push(a)
                            }(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n
                        }(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return function() {
                        var e, t;
                        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, Le(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
                            e.removeEventListener("scroll", t.updateBound)
                        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
                    }.call(this)
                }
            }]), e
        }();
    Fe.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Fe.placements = We, Fe.Defaults = Ye;
    var Be = "dropdown",
        Xe = "bs.dropdown",
        Ue = "." + Xe,
        ze = ".data-api",
        Ke = t.fn[Be],
        $e = new RegExp("38|40|27"),
        Qe = {
            HIDE: "hide" + Ue,
            HIDDEN: "hidden" + Ue,
            SHOW: "show" + Ue,
            SHOWN: "shown" + Ue,
            CLICK: "click" + Ue,
            CLICK_DATA_API: "click" + Ue + ze,
            KEYDOWN_DATA_API: "keydown" + Ue + ze,
            KEYUP_DATA_API: "keyup" + Ue + ze
        },
        Ve = "disabled",
        Ge = "show",
        Je = "dropdown-menu-right",
        Ze = '[data-toggle="dropdown"]',
        et = ".dropdown-menu",
        tt = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        },
        nt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        },
        rt = function() {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var n = e.prototype;
            return n.toggle = function() {
                if (!this._element.disabled && !t(this._element).hasClass(Ve)) {
                    var n = e._getParentFromElement(this._element),
                        r = t(this._menu).hasClass(Ge);
                    if (e._clearMenus(), !r) {
                        var i = {
                                relatedTarget: this._element
                            },
                            o = t.Event(Qe.SHOW, i);
                        if (t(n).trigger(o), !o.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === Fe) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var s = this._element;
                                "parent" === this._config.reference ? s = n : a.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(n).addClass("position-static"), this._popper = new Fe(s, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === t(n).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(Ge), t(n).toggleClass(Ge).trigger(t.Event(Qe.SHOWN, i))
                        }
                    }
                }
            }, n.show = function() {
                if (!(this._element.disabled || t(this._element).hasClass(Ve) || t(this._menu).hasClass(Ge))) {
                    var n = {
                            relatedTarget: this._element
                        },
                        r = t.Event(Qe.SHOW, n),
                        i = e._getParentFromElement(this._element);
                    t(i).trigger(r), r.isDefaultPrevented() || (t(this._menu).toggleClass(Ge), t(i).toggleClass(Ge).trigger(t.Event(Qe.SHOWN, n)))
                }
            }, n.hide = function() {
                if (!this._element.disabled && !t(this._element).hasClass(Ve) && t(this._menu).hasClass(Ge)) {
                    var n = {
                            relatedTarget: this._element
                        },
                        r = t.Event(Qe.HIDE, n),
                        i = e._getParentFromElement(this._element);
                    t(i).trigger(r), r.isDefaultPrevented() || (t(this._menu).toggleClass(Ge), t(i).toggleClass(Ge).trigger(t.Event(Qe.HIDDEN, n)))
                }
            }, n.dispose = function() {
                t.removeData(this._element, Xe), t(this._element).off(Ue), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, n.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, n._addEventListeners = function() {
                var e = this;
                t(this._element).on(Qe.CLICK, function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, n._getConfig = function(e) {
                return e = i({}, this.constructor.Default, t(this._element).data(), e), a.typeCheckConfig(Be, e, this.constructor.DefaultType), e
            }, n._getMenuElement = function() {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(et))
                }
                return this._menu
            }, n._getPlacement = function() {
                var e = t(this._element.parentNode),
                    n = "bottom-start";
                return e.hasClass("dropup") ? (n = "top-start", t(this._menu).hasClass(Je) && (n = "top-end")) : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass(Je) && (n = "bottom-end"), n
            }, n._detectNavbar = function() {
                return 0 < t(this._element).closest(".navbar").length
            }, n._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = i({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, n._getPopperConfig = function() {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {
                    enabled: !1
                }), e
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this).data(Xe);
                    if (r || (r = new e(this, "object" == typeof n ? n : null), t(this).data(Xe, r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }, e._clearMenus = function(n) {
                if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                    for (var r = [].slice.call(document.querySelectorAll(Ze)), i = 0, o = r.length; i < o; i++) {
                        var a = e._getParentFromElement(r[i]),
                            s = t(r[i]).data(Xe),
                            l = {
                                relatedTarget: r[i]
                            };
                        if (n && "click" === n.type && (l.clickEvent = n), s) {
                            var c = s._menu;
                            if (t(a).hasClass(Ge) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(a, n.target))) {
                                var u = t.Event(Qe.HIDE, l);
                                t(a).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), r[i].setAttribute("aria-expanded", "false"), t(c).removeClass(Ge), t(a).removeClass(Ge).trigger(t.Event(Qe.HIDDEN, l)))
                            }
                        }
                    }
            }, e._getParentFromElement = function(e) {
                var t, n = a.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, e._dataApiKeydownHandler = function(n) {
                if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(et).length)) : $e.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(Ve))) {
                    var r = e._getParentFromElement(this),
                        i = t(r).hasClass(Ge);
                    if (i && (!i || 27 !== n.which && 32 !== n.which)) {
                        var o = [].slice.call(r.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));
                        if (0 !== o.length) {
                            var a = o.indexOf(n.target);
                            38 === n.which && 0 < a && a--, 40 === n.which && a < o.length - 1 && a++, a < 0 && (a = 0), o[a].focus()
                        }
                    } else {
                        if (27 === n.which) {
                            var s = r.querySelector(Ze);
                            t(s).trigger("focus")
                        }
                        t(this).trigger("click")
                    }
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return tt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return nt
                }
            }]), e
        }();
    t(document).on(Qe.KEYDOWN_DATA_API, Ze, rt._dataApiKeydownHandler).on(Qe.KEYDOWN_DATA_API, et, rt._dataApiKeydownHandler).on(Qe.CLICK_DATA_API + " " + Qe.KEYUP_DATA_API, rt._clearMenus).on(Qe.CLICK_DATA_API, Ze, function(e) {
        e.preventDefault(), e.stopPropagation(), rt._jQueryInterface.call(t(this), "toggle")
    }).on(Qe.CLICK_DATA_API, ".dropdown form", function(e) {
        e.stopPropagation()
    }), t.fn[Be] = rt._jQueryInterface, t.fn[Be].Constructor = rt, t.fn[Be].noConflict = function() {
        return t.fn[Be] = Ke, rt._jQueryInterface
    };
    var it = "modal",
        ot = "bs.modal",
        at = "." + ot,
        st = t.fn[it],
        lt = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        ct = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        ut = {
            HIDE: "hide" + at,
            HIDDEN: "hidden" + at,
            SHOW: "show" + at,
            SHOWN: "shown" + at,
            FOCUSIN: "focusin" + at,
            RESIZE: "resize" + at,
            CLICK_DISMISS: "click.dismiss" + at,
            KEYDOWN_DISMISS: "keydown.dismiss" + at,
            MOUSEUP_DISMISS: "mouseup.dismiss" + at,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + at,
            CLICK_DATA_API: "click" + at + ".data-api"
        },
        dt = "modal-open",
        ft = "fade",
        ht = "show",
        pt = ".modal-dialog",
        gt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        mt = ".sticky-top",
        vt = function() {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(pt), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var n = e.prototype;
            return n.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }, n.show = function(e) {
                var n = this;
                if (!this._isShown && !this._isTransitioning) {
                    t(this._element).hasClass(ft) && (this._isTransitioning = !0);
                    var r = t.Event(ut.SHOW, {
                        relatedTarget: e
                    });
                    t(this._element).trigger(r), this._isShown || r.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(ut.CLICK_DISMISS, '[data-dismiss="modal"]', function(e) {
                        return n.hide(e)
                    }), t(this._dialog).on(ut.MOUSEDOWN_DISMISS, function() {
                        t(n._element).one(ut.MOUSEUP_DISMISS, function(e) {
                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return n._showElement(e)
                    }))
                }
            }, n.hide = function(e) {
                var n = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var r = t.Event(ut.HIDE);
                    if (t(this._element).trigger(r), this._isShown && !r.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = t(this._element).hasClass(ft);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(ut.FOCUSIN), t(this._element).removeClass(ht), t(this._element).off(ut.CLICK_DISMISS), t(this._dialog).off(ut.MOUSEDOWN_DISMISS), i) {
                            var o = a.getTransitionDurationFromElement(this._element);
                            t(this._element).one(a.TRANSITION_END, function(e) {
                                return n._hideModal(e)
                            }).emulateTransitionEnd(o)
                        } else this._hideModal()
                    }
                }
            }, n.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) {
                    return t(e).off(at)
                }), t(document).off(ut.FOCUSIN), t.removeData(this._element, ot), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, n.handleUpdate = function() {
                this._adjustDialog()
            }, n._getConfig = function(e) {
                return e = i({}, lt, e), a.typeCheckConfig(it, e, ct), e
            }, n._showElement = function(e) {
                var n = this,
                    r = t(this._element).hasClass(ft);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass("modal-dialog-scrollable") ? this._dialog.querySelector(".modal-body").scrollTop = 0 : this._element.scrollTop = 0, r && a.reflow(this._element), t(this._element).addClass(ht), this._config.focus && this._enforceFocus();
                var i = t.Event(ut.SHOWN, {
                        relatedTarget: e
                    }),
                    o = function() {
                        n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(i)
                    };
                if (r) {
                    var s = a.getTransitionDurationFromElement(this._dialog);
                    t(this._dialog).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                } else o()
            }, n._enforceFocus = function() {
                var e = this;
                t(document).off(ut.FOCUSIN).on(ut.FOCUSIN, function(n) {
                    document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                })
            }, n._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on(ut.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || t(this._element).off(ut.KEYDOWN_DISMISS)
            }, n._setResizeEvent = function() {
                var e = this;
                this._isShown ? t(window).on(ut.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : t(window).off(ut.RESIZE)
            }, n._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                    t(document.body).removeClass(dt), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(ut.HIDDEN)
                })
            }, n._removeBackdrop = function() {
                this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
            }, n._showBackdrop = function(e) {
                var n = this,
                    r = t(this._element).hasClass(ft) ? ft : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", r && this._backdrop.classList.add(r), t(this._backdrop).appendTo(document.body), t(this._element).on(ut.CLICK_DISMISS, function(e) {
                            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                        }), r && a.reflow(this._backdrop), t(this._backdrop).addClass(ht), !e) return;
                    if (!r) return void e();
                    var i = a.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop).one(a.TRANSITION_END, e).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(ht);
                    var o = function() {
                        n._removeBackdrop(), e && e()
                    };
                    if (t(this._element).hasClass(ft)) {
                        var s = a.getTransitionDurationFromElement(this._backdrop);
                        t(this._backdrop).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                    } else o()
                } else e && e()
            }, n._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, n._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, n._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, n._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    var n = [].slice.call(document.querySelectorAll(gt)),
                        r = [].slice.call(document.querySelectorAll(mt));
                    t(n).each(function(n, r) {
                        var i = r.style.paddingRight,
                            o = t(r).css("padding-right");
                        t(r).data("padding-right", i).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                    }), t(r).each(function(n, r) {
                        var i = r.style.marginRight,
                            o = t(r).css("margin-right");
                        t(r).data("margin-right", i).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                    });
                    var i = document.body.style.paddingRight,
                        o = t(document.body).css("padding-right");
                    t(document.body).data("padding-right", i).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                }
                t(document.body).addClass(dt)
            }, n._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(gt));
                t(e).each(function(e, n) {
                    var r = t(n).data("padding-right");
                    t(n).removeData("padding-right"), n.style.paddingRight = r || ""
                });
                var n = [].slice.call(document.querySelectorAll("" + mt));
                t(n).each(function(e, n) {
                    var r = t(n).data("margin-right");
                    void 0 !== r && t(n).css("margin-right", r).removeData("margin-right")
                });
                var r = t(document.body).data("padding-right");
                t(document.body).removeData("padding-right"), document.body.style.paddingRight = r || ""
            }, n._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function(n, r) {
                return this.each(function() {
                    var o = t(this).data(ot),
                        a = i({}, lt, t(this).data(), "object" == typeof n && n ? n : {});
                    if (o || (o = new e(this, a), t(this).data(ot, o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n](r)
                    } else a.show && o.show(r)
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return lt
                }
            }]), e
        }();
    t(document).on(ut.CLICK_DATA_API, '[data-toggle="modal"]', function(e) {
        var n, r = this,
            o = a.getSelectorFromElement(this);
        o && (n = document.querySelector(o));
        var s = t(n).data(ot) ? "toggle" : i({}, t(n).data(), t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var l = t(n).one(ut.SHOW, function(e) {
            e.isDefaultPrevented() || l.one(ut.HIDDEN, function() {
                t(r).is(":visible") && r.focus()
            })
        });
        vt._jQueryInterface.call(t(n), s, this)
    }), t.fn[it] = vt._jQueryInterface, t.fn[it].Constructor = vt, t.fn[it].noConflict = function() {
        return t.fn[it] = st, vt._jQueryInterface
    };
    var bt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        yt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
        _t = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

    function wt(e, t, n) {
        if (0 === e.length) return e;
        if (n && "function" == typeof n) return n(e);
        for (var r = (new window.DOMParser).parseFromString(e, "text/html"), i = Object.keys(t), o = [].slice.call(r.body.querySelectorAll("*")), a = function(e, n) {
                var r = o[e],
                    a = r.nodeName.toLowerCase();
                if (-1 === i.indexOf(r.nodeName.toLowerCase())) return r.parentNode.removeChild(r), "continue";
                var s = [].slice.call(r.attributes),
                    l = [].concat(t["*"] || [], t[a] || []);
                s.forEach(function(e) {
                    (function(e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === bt.indexOf(n) || Boolean(e.nodeValue.match(yt) || e.nodeValue.match(_t));
                        for (var r = t.filter(function(e) {
                                return e instanceof RegExp
                            }), i = 0, o = r.length; i < o; i++)
                            if (n.match(r[i])) return !0;
                        return !1
                    })(e, l) || r.removeAttribute(e.nodeName)
                })
            }, s = 0, l = o.length; s < l; s++) a(s);
        return r.body.innerHTML
    }
    var Et = "tooltip",
        Tt = "bs.tooltip",
        xt = "." + Tt,
        Ct = t.fn[Et],
        St = "bs-tooltip",
        kt = new RegExp("(^|\\s)" + St + "\\S+", "g"),
        Dt = ["sanitize", "whiteList", "sanitizeFn"],
        At = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        },
        Nt = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Ot = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            }
        },
        It = "show",
        Lt = {
            HIDE: "hide" + xt,
            HIDDEN: "hidden" + xt,
            SHOW: "show" + xt,
            SHOWN: "shown" + xt,
            INSERTED: "inserted" + xt,
            CLICK: "click" + xt,
            FOCUSIN: "focusin" + xt,
            FOCUSOUT: "focusout" + xt,
            MOUSEENTER: "mouseenter" + xt,
            MOUSELEAVE: "mouseleave" + xt
        },
        jt = "fade",
        Ht = "show",
        Pt = "hover",
        Rt = "focus",
        Wt = function() {
            function e(e, t) {
                if (void 0 === Fe) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var n = e.prototype;
            return n.enable = function() {
                this._isEnabled = !0
            }, n.disable = function() {
                this._isEnabled = !1
            }, n.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, n.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var n = this.constructor.DATA_KEY,
                            r = t(e.currentTarget).data(n);
                        r || (r = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, r)), r._activeTrigger.click = !r._activeTrigger.click, r._isWithActiveTrigger() ? r._enter(null, r) : r._leave(null, r)
                    } else {
                        if (t(this.getTipElement()).hasClass(Ht)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, n.dispose = function() {
                clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, n.show = function() {
                var e = this;
                if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                var n = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(n);
                    var r = a.findShadowRoot(this.element),
                        i = t.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element);
                    if (n.isDefaultPrevented() || !i) return;
                    var o = this.getTipElement(),
                        s = a.getUID(this.constructor.NAME);
                    o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(o).addClass(jt);
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                        c = this._getAttachment(l);
                    this.addAttachmentClass(c);
                    var u = this._getContainer();
                    t(o).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(o).appendTo(u), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Fe(this.element, o, {
                        placement: c,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: ".arrow"
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function(t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }), t(o).addClass(Ht), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                    var d = function() {
                        e.config.animation && e._fixTransition();
                        var n = e._hoverState;
                        e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), "out" === n && e._leave(null, e)
                    };
                    if (t(this.tip).hasClass(jt)) {
                        var f = a.getTransitionDurationFromElement(this.tip);
                        t(this.tip).one(a.TRANSITION_END, d).emulateTransitionEnd(f)
                    } else d()
                }
            }, n.hide = function(e) {
                var n = this,
                    r = this.getTipElement(),
                    i = t.Event(this.constructor.Event.HIDE),
                    o = function() {
                        n._hoverState !== It && r.parentNode && r.parentNode.removeChild(r), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                    };
                if (t(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (t(r).removeClass(Ht), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger[Rt] = !1, this._activeTrigger[Pt] = !1, t(this.tip).hasClass(jt)) {
                        var s = a.getTransitionDurationFromElement(r);
                        t(r).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                    } else o();
                    this._hoverState = ""
                }
            }, n.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, n.isWithContent = function() {
                return Boolean(this.getTitle())
            }, n.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass(St + "-" + e)
            }, n.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, n.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass(jt + " " + Ht)
            }, n.setElementContent = function(e, n) {
                "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = wt(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
            }, n.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, n._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this.config.offset ? t.fn = function(t) {
                    return t.offsets = i({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, n._getContainer = function() {
                return !1 === this.config.container ? document.body : a.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
            }, n._getAttachment = function(e) {
                return Nt[e.toUpperCase()]
            }, n._setListeners = function() {
                var e = this;
                this.config.trigger.split(" ").forEach(function(n) {
                    if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                        return e.toggle(t)
                    });
                    else if ("manual" !== n) {
                        var r = n === Pt ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            i = n === Pt ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        t(e.element).on(r, e.config.selector, function(t) {
                            return e._enter(t)
                        }).on(i, e.config.selector, function(t) {
                            return e._leave(t)
                        })
                    }
                }), t(this.element).closest(".modal").on("hide.bs.modal", function() {
                    e.element && e.hide()
                }), this.config.selector ? this.config = i({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, n._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, n._enter = function(e, n) {
                var r = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(r)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(r, n)), e && (n._activeTrigger["focusin" === e.type ? Rt : Pt] = !0), t(n.getTipElement()).hasClass(Ht) || n._hoverState === It ? n._hoverState = It : (clearTimeout(n._timeout), n._hoverState = It, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                    n._hoverState === It && n.show()
                }, n.config.delay.show) : n.show())
            }, n._leave = function(e, n) {
                var r = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(r)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(r, n)), e && (n._activeTrigger["focusout" === e.type ? Rt : Pt] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                    "out" === n._hoverState && n.hide()
                }, n.config.delay.hide) : n.hide())
            }, n._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, n._getConfig = function(e) {
                var n = t(this.element).data();
                return Object.keys(n).forEach(function(e) {
                    -1 !== Dt.indexOf(e) && delete n[e]
                }), "number" == typeof(e = i({}, this.constructor.Default, n, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), a.typeCheckConfig(Et, e, this.constructor.DefaultType), e.sanitize && (e.template = wt(e.template, e.whiteList, e.sanitizeFn)), e
            }, n._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, n._cleanTipClass = function() {
                var e = t(this.getTipElement()),
                    n = e.attr("class").match(kt);
                null !== n && n.length && e.removeClass(n.join(""))
            }, n._handlePopperPlacementChange = function(e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, n._fixTransition = function() {
                var e = this.getTipElement(),
                    n = this.config.animation;
                null === e.getAttribute("x-placement") && (t(e).removeClass(jt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this).data(Tt),
                        i = "object" == typeof n && n;
                    if ((r || !/dispose|hide/.test(n)) && (r || (r = new e(this, i), t(this).data(Tt, r)), "string" == typeof n)) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ot
                }
            }, {
                key: "NAME",
                get: function() {
                    return Et
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Tt
                }
            }, {
                key: "Event",
                get: function() {
                    return Lt
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return xt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return At
                }
            }]), e
        }();
    t.fn[Et] = Wt._jQueryInterface, t.fn[Et].Constructor = Wt, t.fn[Et].noConflict = function() {
        return t.fn[Et] = Ct, Wt._jQueryInterface
    };
    var Mt = "popover",
        qt = "bs.popover",
        Yt = "." + qt,
        Ft = t.fn[Mt],
        Bt = "bs-popover",
        Xt = new RegExp("(^|\\s)" + Bt + "\\S+", "g"),
        Ut = i({}, Wt.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        zt = i({}, Wt.DefaultType, {
            content: "(string|element|function)"
        }),
        Kt = {
            HIDE: "hide" + Yt,
            HIDDEN: "hidden" + Yt,
            SHOW: "show" + Yt,
            SHOWN: "shown" + Yt,
            INSERTED: "inserted" + Yt,
            CLICK: "click" + Yt,
            FOCUSIN: "focusin" + Yt,
            FOCUSOUT: "focusout" + Yt,
            MOUSEENTER: "mouseenter" + Yt,
            MOUSELEAVE: "mouseleave" + Yt
        },
        $t = function(e) {
            var n, i;

            function o() {
                return e.apply(this, arguments) || this
            }
            i = e, (n = o).prototype = Object.create(i.prototype), (n.prototype.constructor = n).__proto__ = i;
            var a = o.prototype;
            return a.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, a.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass(Bt + "-" + e)
            }, a.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, a.setContent = function() {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(".popover-body"), n), e.removeClass("fade show")
            }, a._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, a._cleanTipClass = function() {
                var e = t(this.getTipElement()),
                    n = e.attr("class").match(Xt);
                null !== n && 0 < n.length && e.removeClass(n.join(""))
            }, o._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = t(this).data(qt),
                        r = "object" == typeof e ? e : null;
                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new o(this, r), t(this).data(qt, n)), "string" == typeof e)) {
                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, r(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ut
                }
            }, {
                key: "NAME",
                get: function() {
                    return Mt
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return qt
                }
            }, {
                key: "Event",
                get: function() {
                    return Kt
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Yt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return zt
                }
            }]), o
        }(Wt);
    t.fn[Mt] = $t._jQueryInterface, t.fn[Mt].Constructor = $t, t.fn[Mt].noConflict = function() {
        return t.fn[Mt] = Ft, $t._jQueryInterface
    };
    var Qt = "scrollspy",
        Vt = "bs.scrollspy",
        Gt = "." + Vt,
        Jt = t.fn[Qt],
        Zt = {
            offset: 10,
            method: "auto",
            target: ""
        },
        en = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        tn = {
            ACTIVATE: "activate" + Gt,
            SCROLL: "scroll" + Gt,
            LOAD_DATA_API: "load" + Gt + ".data-api"
        },
        nn = "active",
        rn = ".nav, .list-group",
        on = ".nav-link",
        an = ".list-group-item",
        sn = ".dropdown-item",
        ln = "position",
        cn = function() {
            function e(e, n) {
                var r = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + on + "," + this._config.target + " " + an + "," + this._config.target + " " + sn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(tn.SCROLL, function(e) {
                    return r._process(e)
                }), this.refresh(), this._process()
            }
            var n = e.prototype;
            return n.refresh = function() {
                var e = this,
                    n = this._scrollElement === this._scrollElement.window ? "offset" : ln,
                    r = "auto" === this._config.method ? n : this._config.method,
                    i = r === ln ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                    var n, o = a.getSelectorFromElement(e);
                    if (o && (n = document.querySelector(o)), n) {
                        var s = n.getBoundingClientRect();
                        if (s.width || s.height) return [t(n)[r]().top + i, o]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, n.dispose = function() {
                t.removeData(this._element, Vt), t(this._scrollElement).off(Gt), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, n._getConfig = function(e) {
                if ("string" != typeof(e = i({}, Zt, "object" == typeof e && e ? e : {})).target) {
                    var n = t(e.target).attr("id");
                    n || (n = a.getUID(Qt), t(e.target).attr("id", n)), e.target = "#" + n
                }
                return a.typeCheckConfig(Qt, e, en), e
            }, n._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, n._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, n._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, n._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), n <= e) {
                    var r = this._targets[this._targets.length - 1];
                    this._activeTarget !== r && this._activate(r)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var i = this._offsets.length; i--;) this._activeTarget !== this._targets[i] && e >= this._offsets[i] && (void 0 === this._offsets[i + 1] || e < this._offsets[i + 1]) && this._activate(this._targets[i])
                }
            }, n._activate = function(e) {
                this._activeTarget = e, this._clear();
                var n = this._selector.split(",").map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    }),
                    r = t([].slice.call(document.querySelectorAll(n.join(","))));
                r.hasClass("dropdown-item") ? (r.closest(".dropdown").find(".dropdown-toggle").addClass(nn), r.addClass(nn)) : (r.addClass(nn), r.parents(rn).prev(on + ", " + an).addClass(nn), r.parents(rn).prev(".nav-item").children(on).addClass(nn)), t(this._scrollElement).trigger(tn.ACTIVATE, {
                    relatedTarget: e
                })
            }, n._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                    return e.classList.contains(nn)
                }).forEach(function(e) {
                    return e.classList.remove(nn)
                })
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this).data(Vt);
                    if (r || (r = new e(this, "object" == typeof n && n), t(this).data(Vt, r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Zt
                }
            }]), e
        }();
    t(window).on(tn.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--;) {
            var r = t(e[n]);
            cn._jQueryInterface.call(r, r.data())
        }
    }), t.fn[Qt] = cn._jQueryInterface, t.fn[Qt].Constructor = cn, t.fn[Qt].noConflict = function() {
        return t.fn[Qt] = Jt, cn._jQueryInterface
    };
    var un = "bs.tab",
        dn = "." + un,
        fn = t.fn.tab,
        hn = {
            HIDE: "hide" + dn,
            HIDDEN: "hidden" + dn,
            SHOW: "show" + dn,
            SHOWN: "shown" + dn,
            CLICK_DATA_API: "click" + dn + ".data-api"
        },
        pn = "active",
        gn = ".active",
        mn = "> li > .active",
        vn = function() {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.show = function() {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(pn) || t(this._element).hasClass("disabled"))) {
                    var n, r, i = t(this._element).closest(".nav, .list-group")[0],
                        o = a.getSelectorFromElement(this._element);
                    if (i) {
                        var s = "UL" === i.nodeName || "OL" === i.nodeName ? mn : gn;
                        r = (r = t.makeArray(t(i).find(s)))[r.length - 1]
                    }
                    var l = t.Event(hn.HIDE, {
                            relatedTarget: this._element
                        }),
                        c = t.Event(hn.SHOW, {
                            relatedTarget: r
                        });
                    if (r && t(r).trigger(l), t(this._element).trigger(c), !c.isDefaultPrevented() && !l.isDefaultPrevented()) {
                        o && (n = document.querySelector(o)), this._activate(this._element, i);
                        var u = function() {
                            var n = t.Event(hn.HIDDEN, {
                                    relatedTarget: e._element
                                }),
                                i = t.Event(hn.SHOWN, {
                                    relatedTarget: r
                                });
                            t(r).trigger(n), t(e._element).trigger(i)
                        };
                        n ? this._activate(n, n.parentNode, u) : u()
                    }
                }
            }, n.dispose = function() {
                t.removeData(this._element, un), this._element = null
            }, n._activate = function(e, n, r) {
                var i = this,
                    o = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(gn) : t(n).find(mn))[0],
                    s = r && o && t(o).hasClass("fade"),
                    l = function() {
                        return i._transitionComplete(e, o, r)
                    };
                if (o && s) {
                    var c = a.getTransitionDurationFromElement(o);
                    t(o).removeClass("show").one(a.TRANSITION_END, l).emulateTransitionEnd(c)
                } else l()
            }, n._transitionComplete = function(e, n, r) {
                if (n) {
                    t(n).removeClass(pn);
                    var i = t(n.parentNode).find("> .dropdown-menu .active")[0];
                    i && t(i).removeClass(pn), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (t(e).addClass(pn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), a.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                    var o = t(e).closest(".dropdown")[0];
                    if (o) {
                        var s = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                        t(s).addClass(pn)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                r && r()
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this),
                        i = r.data(un);
                    if (i || (i = new e(this), r.data(un, i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(hn.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(), vn._jQueryInterface.call(t(this), "show")
    }), t.fn.tab = vn._jQueryInterface, t.fn.tab.Constructor = vn, t.fn.tab.noConflict = function() {
        return t.fn.tab = fn, vn._jQueryInterface
    };
    var bn = "toast",
        yn = "bs.toast",
        _n = "." + yn,
        wn = t.fn[bn],
        En = {
            CLICK_DISMISS: "click.dismiss" + _n,
            HIDE: "hide" + _n,
            HIDDEN: "hidden" + _n,
            SHOW: "show" + _n,
            SHOWN: "shown" + _n
        },
        Tn = "show",
        xn = "showing",
        Cn = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        Sn = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        kn = function() {
            function e(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }
            var n = e.prototype;
            return n.show = function() {
                var e = this;
                t(this._element).trigger(En.SHOW), this._config.animation && this._element.classList.add("fade");
                var n = function() {
                    e._element.classList.remove(xn), e._element.classList.add(Tn), t(e._element).trigger(En.SHOWN), e._config.autohide && e.hide()
                };
                if (this._element.classList.remove("hide"), this._element.classList.add(xn), this._config.animation) {
                    var r = a.getTransitionDurationFromElement(this._element);
                    t(this._element).one(a.TRANSITION_END, n).emulateTransitionEnd(r)
                } else n()
            }, n.hide = function(e) {
                var n = this;
                this._element.classList.contains(Tn) && (t(this._element).trigger(En.HIDE), e ? this._close() : this._timeout = setTimeout(function() {
                    n._close()
                }, this._config.delay))
            }, n.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Tn) && this._element.classList.remove(Tn), t(this._element).off(En.CLICK_DISMISS), t.removeData(this._element, yn), this._element = null, this._config = null
            }, n._getConfig = function(e) {
                return e = i({}, Sn, t(this._element).data(), "object" == typeof e && e ? e : {}), a.typeCheckConfig(bn, e, this.constructor.DefaultType), e
            }, n._setListeners = function() {
                var e = this;
                t(this._element).on(En.CLICK_DISMISS, '[data-dismiss="toast"]', function() {
                    return e.hide(!0)
                })
            }, n._close = function() {
                var e = this,
                    n = function() {
                        e._element.classList.add("hide"), t(e._element).trigger(En.HIDDEN)
                    };
                if (this._element.classList.remove(Tn), this._config.animation) {
                    var r = a.getTransitionDurationFromElement(this._element);
                    t(this._element).one(a.TRANSITION_END, n).emulateTransitionEnd(r)
                } else n()
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this),
                        i = r.data(yn);
                    if (i || (i = new e(this, "object" == typeof n && n), r.data(yn, i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n](this)
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Cn
                }
            }, {
                key: "Default",
                get: function() {
                    return Sn
                }
            }]), e
        }();
    t.fn[bn] = kn._jQueryInterface, t.fn[bn].Constructor = kn, t.fn[bn].noConflict = function() {
            return t.fn[bn] = wn, kn._jQueryInterface
        },
        function() {
            if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = t.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(), e.Util = a, e.Alert = f, e.Button = E, e.Carousel = R, e.Collapse = V, e.Dropdown = rt, e.Modal = vt, e.Popover = $t, e.Scrollspy = cn, e.Tab = vn, e.Toast = kn, e.Tooltip = Wt, Object.defineProperty(e, "__esModule", {
            value: !0
        })
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.PerfectScrollbar = t()
}(this, function() {
    "use strict";

    function e(e) {
        return getComputedStyle(e)
    }

    function t(e, t) {
        for (var n in t) {
            var r = t[n];
            "number" == typeof r && (r += "px"), e.style[n] = r
        }
        return e
    }

    function n(e) {
        var t = document.createElement("div");
        return t.className = e, t
    }

    function r(e, t) {
        if (!g) throw new Error("No element matching method supported");
        return g.call(e, t)
    }

    function i(e) {
        e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
    }

    function o(e, t) {
        return Array.prototype.filter.call(e.children, function(e) {
            return r(e, t)
        })
    }

    function a(e, t) {
        var n = e.element.classList,
            r = m.state.scrolling(t);
        n.contains(r) ? clearTimeout(v[t]) : n.add(r)
    }

    function s(e, t) {
        v[t] = setTimeout(function() {
            return e.isAlive && e.element.classList.remove(m.state.scrolling(t))
        }, e.settings.scrollingThreshold)
    }

    function l(e, t) {
        a(e, t), s(e, t)
    }

    function c(e) {
        if ("function" == typeof window.CustomEvent) return new CustomEvent(e);
        var t = document.createEvent("CustomEvent");
        return t.initCustomEvent(e, !1, !1, void 0), t
    }

    function u(e) {
        return parseInt(e, 10) || 0
    }

    function d(e) {
        return r(e, "input,[contenteditable]") || r(e, "select,[contenteditable]") || r(e, "textarea,[contenteditable]") || r(e, "button,[contenteditable]")
    }

    function f(e, t) {
        return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
    }

    function h(e, n) {
        var r = {
                width: n.railXWidth
            },
            i = Math.floor(e.scrollTop);
        n.isRtl ? r.left = n.negativeScrollAdjustment + e.scrollLeft + n.containerWidth - n.contentWidth : r.left = e.scrollLeft, n.isScrollbarXUsingBottom ? r.bottom = n.scrollbarXBottom - i : r.top = n.scrollbarXTop + i, t(n.scrollbarXRail, r);
        var o = {
            top: i,
            height: n.railYHeight
        };
        n.isScrollbarYUsingRight ? n.isRtl ? o.right = n.contentWidth - (n.negativeScrollAdjustment + e.scrollLeft) - n.scrollbarYRight - n.scrollbarYOuterWidth : o.right = n.scrollbarYRight - e.scrollLeft : n.isRtl ? o.left = n.negativeScrollAdjustment + e.scrollLeft + 2 * n.containerWidth - n.contentWidth - n.scrollbarYLeft - n.scrollbarYOuterWidth : o.left = n.scrollbarYLeft + e.scrollLeft, t(n.scrollbarYRail, o), t(n.scrollbarX, {
            left: n.scrollbarXLeft,
            width: n.scrollbarXWidth - n.railBorderXWidth
        }), t(n.scrollbarY, {
            top: n.scrollbarYTop,
            height: n.scrollbarYHeight - n.railBorderYWidth
        })
    }

    function p(e, t) {
        function n(t) {
            g[f] = v + y * (t[l] - b), a(e, h), T(e), t.stopPropagation(), t.preventDefault()
        }

        function r() {
            s(e, h), e[p].classList.remove(m.state.clicking), e.event.unbind(e.ownerDocument, "mousemove", n)
        }
        var i = t[0],
            o = t[1],
            l = t[2],
            c = t[3],
            u = t[4],
            d = t[5],
            f = t[6],
            h = t[7],
            p = t[8],
            g = e.element,
            v = null,
            b = null,
            y = null;
        e.event.bind(e[u], "mousedown", function(t) {
            v = g[f], b = t[l], y = (e[o] - e[i]) / (e[c] - e[d]), e.event.bind(e.ownerDocument, "mousemove", n), e.event.once(e.ownerDocument, "mouseup", r), e[p].classList.add(m.state.clicking), t.stopPropagation(), t.preventDefault()
        })
    }
    var g = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
        m = {
            main: "ps",
            element: {
                thumb: function(e) {
                    return "ps__thumb-" + e
                },
                rail: function(e) {
                    return "ps__rail-" + e
                },
                consuming: "ps__child--consume"
            },
            state: {
                focus: "ps--focus",
                clicking: "ps--clicking",
                active: function(e) {
                    return "ps--active-" + e
                },
                scrolling: function(e) {
                    return "ps--scrolling-" + e
                }
            }
        },
        v = {
            x: null,
            y: null
        },
        b = function(e) {
            this.element = e, this.handlers = {}
        },
        y = {
            isEmpty: {
                configurable: !0
            }
        };
    b.prototype.bind = function(e, t) {
        void 0 === this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1)
    }, b.prototype.unbind = function(e, t) {
        var n = this;
        this.handlers[e] = this.handlers[e].filter(function(r) {
            return !(!t || r === t) || (n.element.removeEventListener(e, r, !1), !1)
        })
    }, b.prototype.unbindAll = function() {
        for (var e in this.handlers) this.unbind(e)
    }, y.isEmpty.get = function() {
        var e = this;
        return Object.keys(this.handlers).every(function(t) {
            return 0 === e.handlers[t].length
        })
    }, Object.defineProperties(b.prototype, y);
    var _ = function() {
        this.eventElements = []
    };
    _.prototype.eventElement = function(e) {
        var t = this.eventElements.filter(function(t) {
            return t.element === e
        })[0];
        return t || (t = new b(e), this.eventElements.push(t)), t
    }, _.prototype.bind = function(e, t, n) {
        this.eventElement(e).bind(t, n)
    }, _.prototype.unbind = function(e, t, n) {
        var r = this.eventElement(e);
        r.unbind(t, n), r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1)
    }, _.prototype.unbindAll = function() {
        this.eventElements.forEach(function(e) {
            return e.unbindAll()
        }), this.eventElements = []
    }, _.prototype.once = function(e, t, n) {
        var r = this.eventElement(e),
            i = function(e) {
                r.unbind(t, i), n(e)
            };
        r.bind(t, i)
    };
    var w = function(e, t, n, r, i) {
            var o;
            if (void 0 === r && (r = !0), void 0 === i && (i = !1), "top" === t) o = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
            else {
                if ("left" !== t) throw new Error("A proper axis should be provided");
                o = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
            }! function(e, t, n, r, i) {
                var o = n[0],
                    a = n[1],
                    s = n[2],
                    u = n[3],
                    d = n[4],
                    f = n[5];
                void 0 === r && (r = !0), void 0 === i && (i = !1);
                var h = e.element;
                e.reach[u] = null, h[s] < 1 && (e.reach[u] = "start"), h[s] > e[o] - e[a] - 1 && (e.reach[u] = "end"), t && (h.dispatchEvent(c("ps-scroll-" + u)), t < 0 ? h.dispatchEvent(c("ps-scroll-" + d)) : t > 0 && h.dispatchEvent(c("ps-scroll-" + f)), r && l(e, u)), e.reach[u] && (t || i) && h.dispatchEvent(c("ps-" + u + "-reach-" + e.reach[u]))
            }(e, n, o, r, i)
        },
        E = {
            isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
            supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
            isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
        },
        T = function(e) {
            var t = e.element,
                n = Math.floor(t.scrollTop);
            e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight, t.contains(e.scrollbarXRail) || (o(t, m.element.rail("x")).forEach(function(e) {
                return i(e)
            }), t.appendChild(e.scrollbarXRail)), t.contains(e.scrollbarYRail) || (o(t, m.element.rail("y")).forEach(function(e) {
                return i(e)
            }), t.appendChild(e.scrollbarYRail)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = f(e, u(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = u((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = f(e, u(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = u(n * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), h(t, e), e.scrollbarXActive ? t.classList.add(m.state.active("x")) : (t.classList.remove(m.state.active("x")), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, t.scrollLeft = 0), e.scrollbarYActive ? t.classList.add(m.state.active("y")) : (t.classList.remove(m.state.active("y")), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, t.scrollTop = 0)
        },
        x = {
            "click-rail": function(e) {
                e.event.bind(e.scrollbarY, "mousedown", function(e) {
                    return e.stopPropagation()
                }), e.event.bind(e.scrollbarYRail, "mousedown", function(t) {
                    var n = t.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top > e.scrollbarYTop ? 1 : -1;
                    e.element.scrollTop += n * e.containerHeight, T(e), t.stopPropagation()
                }), e.event.bind(e.scrollbarX, "mousedown", function(e) {
                    return e.stopPropagation()
                }), e.event.bind(e.scrollbarXRail, "mousedown", function(t) {
                    var n = t.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left > e.scrollbarXLeft ? 1 : -1;
                    e.element.scrollLeft += n * e.containerWidth, T(e), t.stopPropagation()
                })
            },
            "drag-thumb": function(e) {
                p(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), p(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
            },
            keyboard: function(e) {
                var t = e.element,
                    n = function() {
                        return r(t, ":hover")
                    },
                    i = function() {
                        return r(e.scrollbarX, ":focus") || r(e.scrollbarY, ":focus")
                    };
                e.event.bind(e.ownerDocument, "keydown", function(r) {
                    if (!(r.isDefaultPrevented && r.isDefaultPrevented() || r.defaultPrevented) && (n() || i())) {
                        var o = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                        if (o) {
                            if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement;
                            else
                                for (; o.shadowRoot;) o = o.shadowRoot.activeElement;
                            if (d(o)) return
                        }
                        var a = 0,
                            s = 0;
                        switch (r.which) {
                            case 37:
                                a = r.metaKey ? -e.contentWidth : r.altKey ? -e.containerWidth : -30;
                                break;
                            case 38:
                                s = r.metaKey ? e.contentHeight : r.altKey ? e.containerHeight : 30;
                                break;
                            case 39:
                                a = r.metaKey ? e.contentWidth : r.altKey ? e.containerWidth : 30;
                                break;
                            case 40:
                                s = r.metaKey ? -e.contentHeight : r.altKey ? -e.containerHeight : -30;
                                break;
                            case 32:
                                s = r.shiftKey ? e.containerHeight : -e.containerHeight;
                                break;
                            case 33:
                                s = e.containerHeight;
                                break;
                            case 34:
                                s = -e.containerHeight;
                                break;
                            case 36:
                                s = e.contentHeight;
                                break;
                            case 35:
                                s = -e.contentHeight;
                                break;
                            default:
                                return
                        }
                        e.settings.suppressScrollX && 0 !== a || e.settings.suppressScrollY && 0 !== s || (t.scrollTop -= s, t.scrollLeft += a, T(e), function(n, r) {
                            var i = Math.floor(t.scrollTop);
                            if (0 === n) {
                                if (!e.scrollbarYActive) return !1;
                                if (0 === i && r > 0 || i >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation
                            }
                            var o = t.scrollLeft;
                            if (0 === r) {
                                if (!e.scrollbarXActive) return !1;
                                if (0 === o && n < 0 || o >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
                            }
                            return !0
                        }(a, s) && r.preventDefault())
                    }
                })
            },
            wheel: function(t) {
                function n(t, n, r) {
                    if (!E.isWebKit && i.querySelector("select:focus")) return !0;
                    if (!i.contains(t)) return !1;
                    for (var o = t; o && o !== i;) {
                        if (o.classList.contains(m.element.consuming)) return !0;
                        var a = e(o);
                        if ([a.overflow, a.overflowX, a.overflowY].join("").match(/(scroll|auto)/)) {
                            var s = o.scrollHeight - o.clientHeight;
                            if (s > 0 && !(0 === o.scrollTop && r > 0 || o.scrollTop === s && r < 0)) return !0;
                            var l = o.scrollWidth - o.clientWidth;
                            if (l > 0 && !(0 === o.scrollLeft && n < 0 || o.scrollLeft === l && n > 0)) return !0
                        }
                        o = o.parentNode
                    }
                    return !1
                }

                function r(e) {
                    var r = function(e) {
                            var t = e.deltaX,
                                n = -1 * e.deltaY;
                            return void 0 !== t && void 0 !== n || (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t != t && n != n && (t = 0, n = e.wheelDelta), e.shiftKey ? [-n, -t] : [t, n]
                        }(e),
                        o = r[0],
                        a = r[1];
                    if (!n(e.target, o, a)) {
                        var s = !1;
                        t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (a ? i.scrollTop -= a * t.settings.wheelSpeed : i.scrollTop += o * t.settings.wheelSpeed, s = !0) : t.scrollbarXActive && !t.scrollbarYActive && (o ? i.scrollLeft += o * t.settings.wheelSpeed : i.scrollLeft -= a * t.settings.wheelSpeed, s = !0) : (i.scrollTop -= a * t.settings.wheelSpeed, i.scrollLeft += o * t.settings.wheelSpeed), T(t), (s = s || function(e, n) {
                            var r = Math.floor(i.scrollTop),
                                o = 0 === i.scrollTop,
                                a = r + i.offsetHeight === i.scrollHeight,
                                s = 0 === i.scrollLeft,
                                l = i.scrollLeft + i.offsetWidth === i.scrollWidth;
                            return !(Math.abs(n) > Math.abs(e) ? o || a : s || l) || !t.settings.wheelPropagation
                        }(o, a)) && !e.ctrlKey && (e.stopPropagation(), e.preventDefault())
                    }
                }
                var i = t.element;
                void 0 !== window.onwheel ? t.event.bind(i, "wheel", r) : void 0 !== window.onmousewheel && t.event.bind(i, "mousewheel", r)
            },
            touch: function(t) {
                function n(e, n) {
                    var r = Math.floor(u.scrollTop),
                        i = u.scrollLeft,
                        o = Math.abs(e),
                        a = Math.abs(n);
                    if (a > o) {
                        if (n < 0 && r === t.contentHeight - t.containerHeight || n > 0 && 0 === r) return 0 === window.scrollY && n > 0 && E.isChrome
                    } else if (o > a && (e < 0 && i === t.contentWidth - t.containerWidth || e > 0 && 0 === i)) return !0;
                    return !0
                }

                function r(e, n) {
                    u.scrollTop -= n, u.scrollLeft -= e, T(t)
                }

                function i(e) {
                    return e.targetTouches ? e.targetTouches[0] : e
                }

                function o(e) {
                    return !(e.pointerType && "pen" === e.pointerType && 0 === e.buttons || (!e.targetTouches || 1 !== e.targetTouches.length) && (!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                }

                function a(e) {
                    if (o(e)) {
                        var t = i(e);
                        d.pageX = t.pageX, d.pageY = t.pageY, f = (new Date).getTime(), null !== p && clearInterval(p)
                    }
                }

                function s(t, n, r) {
                    if (!u.contains(t)) return !1;
                    for (var i = t; i && i !== u;) {
                        if (i.classList.contains(m.element.consuming)) return !0;
                        var o = e(i);
                        if ([o.overflow, o.overflowX, o.overflowY].join("").match(/(scroll|auto)/)) {
                            var a = i.scrollHeight - i.clientHeight;
                            if (a > 0 && !(0 === i.scrollTop && r > 0 || i.scrollTop === a && r < 0)) return !0;
                            var s = i.scrollLeft - i.clientWidth;
                            if (s > 0 && !(0 === i.scrollLeft && n < 0 || i.scrollLeft === s && n > 0)) return !0
                        }
                        i = i.parentNode
                    }
                    return !1
                }

                function l(e) {
                    if (o(e)) {
                        var t = i(e),
                            a = {
                                pageX: t.pageX,
                                pageY: t.pageY
                            },
                            l = a.pageX - d.pageX,
                            c = a.pageY - d.pageY;
                        if (s(e.target, l, c)) return;
                        r(l, c), d = a;
                        var u = (new Date).getTime(),
                            p = u - f;
                        p > 0 && (h.x = l / p, h.y = c / p, f = u), n(l, c) && e.preventDefault()
                    }
                }

                function c() {
                    t.settings.swipeEasing && (clearInterval(p), p = setInterval(function() {
                        t.isInitialized ? clearInterval(p) : h.x || h.y ? Math.abs(h.x) < .01 && Math.abs(h.y) < .01 ? clearInterval(p) : (r(30 * h.x, 30 * h.y), h.x *= .8, h.y *= .8) : clearInterval(p)
                    }, 10))
                }
                if (E.supportsTouch || E.supportsIePointer) {
                    var u = t.element,
                        d = {},
                        f = 0,
                        h = {},
                        p = null;
                    E.supportsTouch ? (t.event.bind(u, "touchstart", a), t.event.bind(u, "touchmove", l), t.event.bind(u, "touchend", c)) : E.supportsIePointer && (window.PointerEvent ? (t.event.bind(u, "pointerdown", a), t.event.bind(u, "pointermove", l), t.event.bind(u, "pointerup", c)) : window.MSPointerEvent && (t.event.bind(u, "MSPointerDown", a), t.event.bind(u, "MSPointerMove", l), t.event.bind(u, "MSPointerUp", c)))
                }
            }
        },
        C = function(r, i) {
            var o = this;
            if (void 0 === i && (i = {}), "string" == typeof r && (r = document.querySelector(r)), !r || !r.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
            for (var a in this.element = r, r.classList.add(m.main), this.settings = {
                    handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                    maxScrollbarLength: null,
                    minScrollbarLength: null,
                    scrollingThreshold: 1e3,
                    scrollXMarginOffset: 0,
                    scrollYMarginOffset: 0,
                    suppressScrollX: !1,
                    suppressScrollY: !1,
                    swipeEasing: !0,
                    useBothWheelAxes: !1,
                    wheelPropagation: !0,
                    wheelSpeed: 1
                }, i) o.settings[a] = i[a];
            this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
            var s = function() {
                    return r.classList.add(m.state.focus)
                },
                l = function() {
                    return r.classList.remove(m.state.focus)
                };
            this.isRtl = "rtl" === e(r).direction, this.isNegativeScroll = function() {
                var e, t = r.scrollLeft;
                return r.scrollLeft = -1, e = r.scrollLeft < 0, r.scrollLeft = t, e
            }(), this.negativeScrollAdjustment = this.isNegativeScroll ? r.scrollWidth - r.clientWidth : 0, this.event = new _, this.ownerDocument = r.ownerDocument || document, this.scrollbarXRail = n(m.element.rail("x")), r.appendChild(this.scrollbarXRail), this.scrollbarX = n(m.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", s), this.event.bind(this.scrollbarX, "blur", l), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
            var c = e(this.scrollbarXRail);
            this.scrollbarXBottom = parseInt(c.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = u(c.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth), t(this.scrollbarXRail, {
                display: "block"
            }), this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight), t(this.scrollbarXRail, {
                display: ""
            }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = n(m.element.rail("y")), r.appendChild(this.scrollbarYRail), this.scrollbarY = n(m.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", s), this.event.bind(this.scrollbarY, "blur", l), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
            var d = e(this.scrollbarYRail);
            this.scrollbarYRight = parseInt(d.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = u(d.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function(t) {
                var n = e(t);
                return u(n.width) + u(n.paddingLeft) + u(n.paddingRight) + u(n.borderLeftWidth) + u(n.borderRightWidth)
            }(this.scrollbarY) : null, this.railBorderYWidth = u(d.borderTopWidth) + u(d.borderBottomWidth), t(this.scrollbarYRail, {
                display: "block"
            }), this.railYMarginHeight = u(d.marginTop) + u(d.marginBottom), t(this.scrollbarYRail, {
                display: ""
            }), this.railYHeight = null, this.railYRatio = null, this.reach = {
                x: r.scrollLeft <= 0 ? "start" : r.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                y: r.scrollTop <= 0 ? "start" : r.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
            }, this.isAlive = !0, this.settings.handlers.forEach(function(e) {
                return x[e](o)
            }), this.lastScrollTop = Math.floor(r.scrollTop), this.lastScrollLeft = r.scrollLeft, this.event.bind(this.element, "scroll", function(e) {
                return o.onScroll(e)
            }), T(this)
        };
    return C.prototype.update = function() {
        this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, t(this.scrollbarXRail, {
            display: "block"
        }), t(this.scrollbarYRail, {
            display: "block"
        }), this.railXMarginWidth = u(e(this.scrollbarXRail).marginLeft) + u(e(this.scrollbarXRail).marginRight), this.railYMarginHeight = u(e(this.scrollbarYRail).marginTop) + u(e(this.scrollbarYRail).marginBottom), t(this.scrollbarXRail, {
            display: "none"
        }), t(this.scrollbarYRail, {
            display: "none"
        }), T(this), w(this, "top", 0, !1, !0), w(this, "left", 0, !1, !0), t(this.scrollbarXRail, {
            display: ""
        }), t(this.scrollbarYRail, {
            display: ""
        }))
    }, C.prototype.onScroll = function(e) {
        this.isAlive && (T(this), w(this, "top", this.element.scrollTop - this.lastScrollTop), w(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
    }, C.prototype.destroy = function() {
        this.isAlive && (this.event.unbindAll(), i(this.scrollbarX), i(this.scrollbarY), i(this.scrollbarXRail), i(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
    }, C.prototype.removePsClasses = function() {
        this.element.className = this.element.className.split(" ").filter(function(e) {
            return !e.match(/^ps([-_].+|)$/)
        }).join(" ")
    }, C
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.AOS = t()
}(this, function() {
    "use strict";
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        t = "Expected a function",
        n = NaN,
        r = "[object Symbol]",
        i = /^\s+|\s+$/g,
        o = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        l = parseInt,
        c = "object" == typeof e && e && e.Object === Object && e,
        u = "object" == typeof self && self && self.Object === Object && self,
        d = c || u || Function("return this")(),
        f = Object.prototype.toString,
        h = Math.max,
        p = Math.min,
        g = function() {
            return d.Date.now()
        };

    function m(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t)
    }

    function v(e) {
        if ("number" == typeof e) return e;
        if (function(e) {
                return "symbol" == typeof e || function(e) {
                    return !!e && "object" == typeof e
                }(e) && f.call(e) == r
            }(e)) return n;
        if (m(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = m(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(i, "");
        var c = a.test(e);
        return c || s.test(e) ? l(e.slice(2), c ? 2 : 8) : o.test(e) ? n : +e
    }
    var b = function(e, n, r) {
            var i = !0,
                o = !0;
            if ("function" != typeof e) throw new TypeError(t);
            return m(r) && (i = "leading" in r ? !!r.leading : i, o = "trailing" in r ? !!r.trailing : o),
                function(e, n, r) {
                    var i, o, a, s, l, c, u = 0,
                        d = !1,
                        f = !1,
                        b = !0;
                    if ("function" != typeof e) throw new TypeError(t);

                    function y(t) {
                        var n = i,
                            r = o;
                        return i = o = void 0, u = t, s = e.apply(r, n)
                    }

                    function _(e) {
                        var t = e - c;
                        return void 0 === c || t >= n || t < 0 || f && e - u >= a
                    }

                    function w() {
                        var e = g();
                        if (_(e)) return E(e);
                        l = setTimeout(w, function(e) {
                            var t = n - (e - c);
                            return f ? p(t, a - (e - u)) : t
                        }(e))
                    }

                    function E(e) {
                        return l = void 0, b && i ? y(e) : (i = o = void 0, s)
                    }

                    function T() {
                        var e = g(),
                            t = _(e);
                        if (i = arguments, o = this, c = e, t) {
                            if (void 0 === l) return function(e) {
                                return u = e, l = setTimeout(w, n), d ? y(e) : s
                            }(c);
                            if (f) return l = setTimeout(w, n), y(c)
                        }
                        return void 0 === l && (l = setTimeout(w, n)), s
                    }
                    return n = v(n) || 0, m(r) && (d = !!r.leading, a = (f = "maxWait" in r) ? h(v(r.maxWait) || 0, n) : a, b = "trailing" in r ? !!r.trailing : b), T.cancel = function() {
                        void 0 !== l && clearTimeout(l), u = 0, i = c = o = l = void 0
                    }, T.flush = function() {
                        return void 0 === l ? s : E(g())
                    }, T
                }(e, n, {
                    leading: i,
                    maxWait: n,
                    trailing: o
                })
        },
        y = NaN,
        _ = "[object Symbol]",
        w = /^\s+|\s+$/g,
        E = /^[-+]0x[0-9a-f]+$/i,
        T = /^0b[01]+$/i,
        x = /^0o[0-7]+$/i,
        C = parseInt,
        S = "object" == typeof e && e && e.Object === Object && e,
        k = "object" == typeof self && self && self.Object === Object && self,
        D = S || k || Function("return this")(),
        A = Object.prototype.toString,
        N = Math.max,
        O = Math.min,
        I = function() {
            return D.Date.now()
        };

    function L(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t)
    }

    function j(e) {
        if ("number" == typeof e) return e;
        if (function(e) {
                return "symbol" == typeof e || function(e) {
                    return !!e && "object" == typeof e
                }(e) && A.call(e) == _
            }(e)) return y;
        if (L(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = L(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(w, "");
        var n = T.test(e);
        return n || x.test(e) ? C(e.slice(2), n ? 2 : 8) : E.test(e) ? y : +e
    }
    var H = function(e, t, n) {
            var r, i, o, a, s, l, c = 0,
                u = !1,
                d = !1,
                f = !0;
            if ("function" != typeof e) throw new TypeError("Expected a function");

            function h(t) {
                var n = r,
                    o = i;
                return r = i = void 0, c = t, a = e.apply(o, n)
            }

            function p(e) {
                var n = e - l;
                return void 0 === l || n >= t || n < 0 || d && e - c >= o
            }

            function g() {
                var e = I();
                if (p(e)) return m(e);
                s = setTimeout(g, function(e) {
                    var n = t - (e - l);
                    return d ? O(n, o - (e - c)) : n
                }(e))
            }

            function m(e) {
                return s = void 0, f && r ? h(e) : (r = i = void 0, a)
            }

            function v() {
                var e = I(),
                    n = p(e);
                if (r = arguments, i = this, l = e, n) {
                    if (void 0 === s) return function(e) {
                        return c = e, s = setTimeout(g, t), u ? h(e) : a
                    }(l);
                    if (d) return s = setTimeout(g, t), h(l)
                }
                return void 0 === s && (s = setTimeout(g, t)), a
            }
            return t = j(t) || 0, L(n) && (u = !!n.leading, o = (d = "maxWait" in n) ? N(j(n.maxWait) || 0, t) : o, f = "trailing" in n ? !!n.trailing : f), v.cancel = function() {
                void 0 !== s && clearTimeout(s), c = 0, r = l = i = s = void 0
            }, v.flush = function() {
                return void 0 === s ? a : m(I())
            }, v
        },
        P = function() {};

    function R(e) {
        e && e.forEach(function(e) {
            var t = Array.prototype.slice.call(e.addedNodes),
                n = Array.prototype.slice.call(e.removedNodes);
            if (function e(t) {
                    var n = void 0,
                        r = void 0;
                    for (n = 0; n < t.length; n += 1) {
                        if ((r = t[n]).dataset && r.dataset.aos) return !0;
                        if (r.children && e(r.children)) return !0
                    }
                    return !1
                }(t.concat(n))) return P()
        })
    }

    function W() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    }
    var M = function() {
            return !!W()
        },
        q = function(e, t) {
            var n = window.document,
                r = new(W())(R);
            P = t, r.observe(n.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            })
        },
        Y = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        F = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        B = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        X = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        U = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        z = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        K = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

    function $() {
        return navigator.userAgent || navigator.vendor || window.opera || ""
    }
    var Q = new(function() {
            function e() {
                Y(this, e)
            }
            return F(e, [{
                key: "phone",
                value: function() {
                    var e = $();
                    return !(!X.test(e) && !U.test(e.substr(0, 4)))
                }
            }, {
                key: "mobile",
                value: function() {
                    var e = $();
                    return !(!z.test(e) && !K.test(e.substr(0, 4)))
                }
            }, {
                key: "tablet",
                value: function() {
                    return this.mobile() && !this.phone()
                }
            }, {
                key: "ie11",
                value: function() {
                    return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style
                }
            }]), e
        }()),
        V = function(e, t) {
            var n = void 0;
            return Q.ie11() ? (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, {
                detail: t
            }) : n = new CustomEvent(e, {
                detail: t
            }), document.dispatchEvent(n)
        },
        G = function(e) {
            return e.forEach(function(e, t) {
                return function(e, t) {
                    var n = e.options,
                        r = e.position,
                        i = e.node,
                        o = (e.data, function() {
                            e.animated && (function(e, t) {
                                t && t.forEach(function(t) {
                                    return e.classList.remove(t)
                                })
                            }(i, n.animatedClassNames), V("aos:out", i), e.options.id && V("aos:in:" + e.options.id, i), e.animated = !1)
                        });
                    n.mirror && t >= r.out && !n.once ? o() : t >= r.in ? e.animated || (function(e, t) {
                        t && t.forEach(function(t) {
                            return e.classList.add(t)
                        })
                    }(i, n.animatedClassNames), V("aos:in", i), e.options.id && V("aos:in:" + e.options.id, i), e.animated = !0) : e.animated && !n.once && o()
                }(e, window.pageYOffset)
            })
        },
        J = function(e) {
            for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
            return {
                top: n,
                left: t
            }
        },
        Z = function(e, t, n) {
            var r = e.getAttribute("data-aos-" + t);
            if (void 0 !== r) {
                if ("true" === r) return !0;
                if ("false" === r) return !1
            }
            return r || n
        },
        ee = function() {
            var e = document.querySelectorAll("[data-aos]");
            return Array.prototype.map.call(e, function(e) {
                return {
                    node: e
                }
            })
        },
        te = [],
        ne = !1,
        re = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            mirror: !1,
            anchorPlacement: "top-bottom",
            startEvent: "DOMContentLoaded",
            animatedClassName: "aos-animate",
            initClassName: "aos-init",
            useClassNames: !1,
            disableMutationObserver: !1,
            throttleDelay: 99,
            debounceDelay: 50
        },
        ie = function() {
            return document.all && !window.atob
        },
        oe = function() {
            var e, t;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ne = !0), ne && (t = re, (e = te).forEach(function(e, n) {
                var r = Z(e.node, "mirror", t.mirror),
                    i = Z(e.node, "once", t.once),
                    o = Z(e.node, "id"),
                    a = t.useClassNames && e.node.getAttribute("data-aos"),
                    s = [t.animatedClassName].concat(a ? a.split(" ") : []).filter(function(e) {
                        return "string" == typeof e
                    });
                t.initClassName && e.node.classList.add(t.initClassName), e.position = {
                    in: function(e, t, n) {
                        var r = window.innerHeight,
                            i = Z(e, "anchor"),
                            o = Z(e, "anchor-placement"),
                            a = Number(Z(e, "offset", o ? 0 : t)),
                            s = o || n,
                            l = e;
                        i && document.querySelectorAll(i) && (l = document.querySelectorAll(i)[0]);
                        var c = J(l).top - r;
                        switch (s) {
                            case "top-bottom":
                                break;
                            case "center-bottom":
                                c += l.offsetHeight / 2;
                                break;
                            case "bottom-bottom":
                                c += l.offsetHeight;
                                break;
                            case "top-center":
                                c += r / 2;
                                break;
                            case "center-center":
                                c += r / 2 + l.offsetHeight / 2;
                                break;
                            case "bottom-center":
                                c += r / 2 + l.offsetHeight;
                                break;
                            case "top-top":
                                c += r;
                                break;
                            case "bottom-top":
                                c += r + l.offsetHeight;
                                break;
                            case "center-top":
                                c += r + l.offsetHeight / 2
                        }
                        return c + a
                    }(e.node, t.offset, t.anchorPlacement),
                    out: r && function(e, t) {
                        window.innerHeight;
                        var n = Z(e, "anchor"),
                            r = Z(e, "offset", t),
                            i = e;
                        return n && document.querySelectorAll(n) && (i = document.querySelectorAll(n)[0]), J(i).top + i.offsetHeight - r
                    }(e.node, t.offset)
                }, e.options = {
                    once: i,
                    mirror: r,
                    animatedClassNames: s,
                    id: o
                }
            }), G(te = e), window.addEventListener("scroll", b(function() {
                G(te, re.once)
            }, re.throttleDelay)))
        },
        ae = function() {
            if (te = ee(), le(re.disable) || ie()) return se();
            oe()
        },
        se = function() {
            te.forEach(function(e, t) {
                e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay"), re.initClassName && e.node.classList.remove(re.initClassName), re.animatedClassName && e.node.classList.remove(re.animatedClassName)
            })
        },
        le = function(e) {
            return !0 === e || "mobile" === e && Q.mobile() || "phone" === e && Q.phone() || "tablet" === e && Q.tablet() || "function" == typeof e && !0 === e()
        };
    return {
        init: function(e) {
            return re = B(re, e), te = ee(), re.disableMutationObserver || M() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), re.disableMutationObserver = !0), re.disableMutationObserver || q("[data-aos]", ae), le(re.disable) || ie() ? se() : (document.querySelector("body").setAttribute("data-aos-easing", re.easing), document.querySelector("body").setAttribute("data-aos-duration", re.duration), document.querySelector("body").setAttribute("data-aos-delay", re.delay), -1 === ["DOMContentLoaded", "load"].indexOf(re.startEvent) ? document.addEventListener(re.startEvent, function() {
                oe(!0)
            }) : window.addEventListener("load", function() {
                oe(!0)
            }), "DOMContentLoaded" === re.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 && oe(!0), window.addEventListener("resize", H(oe, re.debounceDelay, !0)), window.addEventListener("orientationchange", H(oe, re.debounceDelay, !0)), te)
        },
        refresh: oe,
        refreshHard: ae
    }
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : e.metisMenu = t(e.jQuery)
}(this, function(e) {
    "use strict";

    function t(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, i, o;
                r = e, o = n[i = t], i in r ? Object.defineProperty(r, i, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[i] = o
            })
        }
        return e
    }
    var n = function(e) {
            var t = "transitionend",
                n = {
                    TRANSITION_END: "mmTransitionEnd",
                    triggerTransitionEnd: function(n) {
                        e(n).trigger(t)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(t)
                    }
                };
            return e.fn.mmEmulateTransitionEnd = function(t) {
                var r = this,
                    i = !1;
                return e(this).one(n.TRANSITION_END, function() {
                    i = !0
                }), setTimeout(function() {
                    i || n.triggerTransitionEnd(r)
                }, t), this
            }, e.event.special[n.TRANSITION_END] = {
                bindType: t,
                delegateType: t,
                handle: function(t) {
                    if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            }, n
        }(e = e && e.hasOwnProperty("default") ? e.default : e),
        r = "metisMenu",
        i = "metisMenu",
        o = "." + i,
        a = e.fn[r],
        s = {
            toggle: !0,
            preventDefault: !0,
            triggerElement: "a",
            parentTrigger: "li",
            subMenu: "ul"
        },
        l = {
            SHOW: "show" + o,
            SHOWN: "shown" + o,
            HIDE: "hide" + o,
            HIDDEN: "hidden" + o,
            CLICK_DATA_API: "click" + o + ".data-api"
        },
        c = "mm-active",
        u = "mm-show",
        d = "mm-collapse",
        f = "mm-collapsing",
        h = function() {
            function r(e, n) {
                this.element = e, this.config = t({}, s, n), this.transitioning = null, this.init()
            }
            var o = r.prototype;
            return o.init = function() {
                var t = this,
                    n = this.config;
                e(this.element).addClass("metismenu"), e(this.element).find(n.parentTrigger + "." + c).children(n.triggerElement).attr("aria-expanded", "true"), e(this.element).find(n.parentTrigger + "." + c).parents(n.parentTrigger).addClass(c), e(this.element).find(n.parentTrigger + "." + c).parents(n.parentTrigger).children(n.triggerElement).attr("aria-expanded", "true"), e(this.element).find(n.parentTrigger + "." + c).has(n.subMenu).children(n.subMenu).addClass(d + " " + u), e(this.element).find(n.parentTrigger).not("." + c).has(n.subMenu).children(n.subMenu).addClass(d), e(this.element).find(n.parentTrigger).has(n.subMenu).children(n.triggerElement).on(l.CLICK_DATA_API, function(r) {
                    var i = e(this),
                        o = i.parent(n.parentTrigger),
                        a = o.siblings(n.parentTrigger).children(n.triggerElement),
                        s = o.children(n.subMenu);
                    n.preventDefault && r.preventDefault(), "true" !== i.attr("aria-disabled") && (o.hasClass(c) ? (i.attr("aria-expanded", "false"), t.hide(s)) : (t.show(s), i.attr("aria-expanded", "true"), n.toggle && a.attr("aria-expanded", "false")), n.onTransitionStart && n.onTransitionStart(r))
                })
            }, o.show = function(t) {
                var r = this;
                if (!this.transitioning && !e(t).hasClass(f)) {
                    var i = e(t),
                        o = e.Event(l.SHOW);
                    if (i.trigger(o), !o.isDefaultPrevented()) {
                        if (i.parent(this.config.parentTrigger).addClass(c), this.config.toggle) {
                            var a = i.parent(this.config.parentTrigger).siblings().children(this.config.subMenu + "." + u);
                            this.hide(a)
                        }
                        i.removeClass(d).addClass(f).height(0), this.setTransitioning(!0), i.height(t[0].scrollHeight).one(n.TRANSITION_END, function() {
                            r.config && r.element && (i.removeClass(f).addClass(d + " " + u).height(""), r.setTransitioning(!1), i.trigger(l.SHOWN))
                        }).mmEmulateTransitionEnd(350)
                    }
                }
            }, o.hide = function(t) {
                var r = this;
                if (!this.transitioning && e(t).hasClass(u)) {
                    var i = e(t),
                        o = e.Event(l.HIDE);
                    if (i.trigger(o), !o.isDefaultPrevented()) {
                        i.parent(this.config.parentTrigger).removeClass(c), i.height(i.height())[0].offsetHeight, i.addClass(f).removeClass(d).removeClass(u), this.setTransitioning(!0);
                        var a = function() {
                            r.config && r.element && (r.transitioning && r.config.onTransitionEnd && r.config.onTransitionEnd(), r.setTransitioning(!1), i.trigger(l.HIDDEN), i.removeClass(f).addClass(d))
                        };
                        0 === i.height() || "none" === i.css("display") ? a() : i.height(0).one(n.TRANSITION_END, a).mmEmulateTransitionEnd(350)
                    }
                }
            }, o.setTransitioning = function(e) {
                this.transitioning = e
            }, o.dispose = function() {
                e.removeData(this.element, i), e(this.element).find(this.config.parentTrigger).has(this.config.subMenu).children(this.config.triggerElement).off("click"), this.transitioning = null, this.config = null, this.element = null
            }, r.jQueryInterface = function(n) {
                return this.each(function() {
                    var o = e(this),
                        a = o.data(i),
                        l = t({}, s, o.data(), "object" == typeof n && n ? n : {});
                    if (a || (a = new r(this, l), o.data(i, a)), "string" == typeof n) {
                        if (void 0 === a[n]) throw new Error('No method named "' + n + '"');
                        a[n]()
                    }
                })
            }, r
        }();
    return e.fn[r] = h.jQueryInterface, e.fn[r].Constructor = h, e.fn[r].noConflict = function() {
        return e.fn[r] = a, h.jQueryInterface
    }, h
});
var body = $("body"),
    html = $("html");

function powSettings({
    typography: e,
    version: t,
    layout: n,
    navheaderBg: r,
    headerBg: i,
    sidebarStyle: o,
    sidebarBg: a,
    sidebarPosition: s,
    headerPosition: l,
    containerLayout: c,
    direction: u,
    primary: d
}) {
    this.typography = e || "roboto", this.version = t || "light", this.layout = n || "vertical", this.navheaderBg = r || "color_1", this.headerBg = i || "color_1", this.sidebarStyle = o || "full", this.sidebarBg = a || "color_1", this.sidebarPosition = s || "static", this.headerPosition = l || "static", this.containerLayout = c || "wide", this.direction = u || "ltr", this.primary = d || "color_1", this.manageTypography(), this.manageVersion(), this.manageLayout(), this.manageNavHeaderBg(), this.manageHeaderBg(), this.manageSidebarStyle(), this.manageSidebarBg(), this.manageSidebarPosition(), this.manageHeaderPosition(), this.manageContainerLayout(), this.manageRtlLayout(), this.manageResponsiveSidebar(), this.managePrimaryColor()
}
powSettings.prototype.manageVersion = function() {
    switch (this.version) {
        case "light":
            body.attr("data-theme-version", "light");
            break;
        case "dark":
            body.attr("data-theme-version", "dark");
            break;
        case "transparent":
            body.attr("data-theme-version", "transparent");
            break;
        default:
            body.attr("data-theme-version", "light")
    }
}, powSettings.prototype.manageTypography = function() {
    switch (this.typography) {
        case "poppins":
            body.attr("data-typography", "poppins");
            break;
        case "roboto":
            body.attr("data-typography", "roboto");
            break;
        case "opensans":
            body.attr("data-typography", "opensans");
            break;
        case "helveticaneue":
            body.attr("data-typography", "helveticaneue");
            break;
        default:
            body.attr("data-typography", "roboto")
    }
}, powSettings.prototype.manageLayout = function() {
    switch (this.layout) {
        case "horizontal":
            "overlay" === this.sidebarStyle ? body.attr("data-sidebar-style", "full") : body.attr("data-sidebar-style", `${this.sidebarStyle}`), body.attr("data-layout", "horizontal");
            break;
        case "vertical":
            body.attr("data-layout", "vertical");
            break;
        default:
            body.attr("data-layout", "vertical")
    }
}, powSettings.prototype.manageNavHeaderBg = function() {
    switch (this.navheaderBg) {
        case "color_1":
            body.attr("data-nav-headerbg", "color_1");
            break;
        case "color_2":
            body.attr("data-nav-headerbg", "color_2");
            break;
        case "color_3":
            body.attr("data-nav-headerbg", "color_3");
            break;
        case "color_4":
            body.attr("data-nav-headerbg", "color_4");
            break;
        case "color_5":
            body.attr("data-nav-headerbg", "color_5");
            break;
        case "color_6":
            body.attr("data-nav-headerbg", "color_6");
            break;
        case "color_7":
            body.attr("data-nav-headerbg", "color_7");
            break;
        case "color_8":
            body.attr("data-nav-headerbg", "color_8");
            break;
        case "color_9":
            body.attr("data-nav-headerbg", "color_9");
            break;
        case "color_10":
            body.attr("data-nav-headerbg", "color_10");
            break;
        case "color_11":
            body.attr("data-nav-headerbg", "color_11");
            break;
        case "color_12":
            body.attr("data-nav-headerbg", "color_12");
            break;
        case "color_13":
            body.attr("data-nav-headerbg", "color_13");
            break;
        case "color_14":
            body.attr("data-nav-headerbg", "color_14");
            break;
        case "color_15":
            body.attr("data-nav-headerbg", "color_15");
            break;
        case "image_1":
            body.attr("data-nav-headerbg", "image_1");
            break;
        case "image_2":
            body.attr("data-nav-headerbg", "image_2");
            break;
        case "image_3":
            body.attr("data-nav-headerbg", "image_3");
            break;
        default:
            body.attr("data-nav-headerbg", "color_1")
    }
}, powSettings.prototype.manageHeaderBg = function() {
    switch (this.headerBg) {
        case "color_1":
            body.attr("data-headerbg", "color_1");
            break;
        case "color_2":
            body.attr("data-headerbg", "color_2");
            break;
        case "color_3":
            body.attr("data-headerbg", "color_3");
            break;
        case "color_4":
            body.attr("data-headerbg", "color_4");
            break;
        case "color_5":
            body.attr("data-headerbg", "color_5");
            break;
        case "color_6":
            body.attr("data-headerbg", "color_6");
            break;
        case "color_7":
            body.attr("data-headerbg", "color_7");
            break;
        case "color_8":
            body.attr("data-headerbg", "color_8");
            break;
        case "color_9":
            body.attr("data-headerbg", "color_9");
            break;
        case "color_10":
            body.attr("data-headerbg", "color_10");
            break;
        case "color_11":
            body.attr("data-headerbg", "color_11");
            break;
        case "color_12":
            body.attr("data-headerbg", "color_12");
            break;
        case "color_13":
            body.attr("data-headerbg", "color_13");
            break;
        case "color_14":
            body.attr("data-headerbg", "color_14");
            break;
        case "color_15":
            body.attr("data-headerbg", "color_15");
            break;
        case "transparent":
            body.attr("data-headerbg", "transparent");
            break;
        case "gradient_1":
            body.attr("data-headerbg", "gradient_1");
            break;
        case "gradient_2":
            body.attr("data-headerbg", "gradient_2");
            break;
        case "gradient_3":
            body.attr("data-headerbg", "gradient_3");
            break;
        default:
            body.attr("data-headerbg", "color_1")
    }
}, powSettings.prototype.manageSidebarStyle = function() {
    switch (this.sidebarStyle) {
        case "full":
            body.attr("data-sidebar-style", "full");
            break;
        case "mini":
            body.attr("data-sidebar-style", "mini");
            break;
        case "compact":
            body.attr("data-sidebar-style", "compact");
            break;
        case "modern":
            body.attr("data-sidebar-style", "modern");
            break;
        case "icon-hover":
            body.attr("data-sidebar-style", "icon-hover"), $(".pownav").hover(function() {
                $("#main-wrapper").addClass("icon-hover-toggle")
            }, function() {
                $("#main-wrapper").removeClass("icon-hover-toggle")
            });
            break;
        case "overlay":
            "horizontal" === this.layout ? body.attr("data-sidebar-style", "full") : body.attr("data-sidebar-style", "overlay");
            break;
        default:
            body.attr("data-sidebar-style", "full")
    }
}, powSettings.prototype.manageSidebarBg = function() {
    switch (this.sidebarBg) {
        case "color_1":
            body.attr("data-sibebarbg", "color_1");
            break;
        case "color_2":
            body.attr("data-sibebarbg", "color_2");
            break;
        case "color_3":
            body.attr("data-sibebarbg", "color_3");
            break;
        case "color_4":
            body.attr("data-sibebarbg", "color_4");
            break;
        case "color_5":
            body.attr("data-sibebarbg", "color_5");
            break;
        case "color_6":
            body.attr("data-sibebarbg", "color_6");
            break;
        case "color_7":
            body.attr("data-sibebarbg", "color_7");
            break;
        case "color_8":
            body.attr("data-sibebarbg", "color_8");
            break;
        case "color_9":
            body.attr("data-sibebarbg", "color_9");
            break;
        case "color_10":
            body.attr("data-sibebarbg", "color_10");
            break;
        case "color_11":
            body.attr("data-sibebarbg", "color_11");
            break;
        case "color_12":
            body.attr("data-sibebarbg", "color_12");
            break;
        case "color_13":
            body.attr("data-sibebarbg", "color_13");
            break;
        case "color_14":
            body.attr("data-sibebarbg", "color_14");
            break;
        case "color_15":
            body.attr("data-sibebarbg", "color_15");
            break;
        case "image_1":
            body.attr("data-sibebarbg", "image_1");
            break;
        case "image_2":
            body.attr("data-sibebarbg", "image_2");
            break;
        case "image_3":
            body.attr("data-sibebarbg", "image_3");
            break;
        default:
            body.attr("data-sibebarbg", "color_1")
    }
}, powSettings.prototype.manageSidebarPosition = function() {
    switch (this.sidebarPosition) {
        case "fixed":
            "overlay" === this.sidebarStyle && "vertical" === this.layout || "modern" === this.sidebarStyle ? body.attr("data-sidebar-position", "static") : body.attr("data-sidebar-position", "fixed");
            break;
        case "static":
            body.attr("data-sidebar-position", "static");
            break;
        default:
            body.attr("data-sidebar-position", "static")
    }
}, powSettings.prototype.manageHeaderPosition = function() {
    switch (this.headerPosition) {
        case "fixed":
            body.attr("data-header-position", "fixed");
            break;
        case "static":
            body.attr("data-header-position", "static");
            break;
        default:
            body.attr("data-header-position", "static")
    }
}, powSettings.prototype.manageContainerLayout = function() {
    switch (this.containerLayout) {
        case "boxed":
            "vertical" === this.layout && "full" === this.sidebarStyle && body.attr("data-sidebar-style", "overlay"), body.attr("data-container", "boxed");
            break;
        case "wide":
            body.attr("data-container", "wide");
            break;
        case "wide-boxed":
            body.attr("data-container", "wide-boxed");
            break;
        default:
            body.attr("data-container", "wide")
    }
}, powSettings.prototype.manageRtlLayout = function() {
    switch (this.direction) {
        case "rtl":
            html.attr("dir", "rtl"), html.addClass("rtl"), body.attr("direction", "rtl");
            break;
        case "ltr":
            html.attr("dir", "ltr"), html.removeClass("rtl"), body.attr("direction", "ltr");
            break;
        default:
            html.attr("dir", "ltr"), body.attr("direction", "ltr")
    }
}, powSettings.prototype.manageResponsiveSidebar = function() {
    const e = $(window).innerWidth();
    e < 1024 && (body.attr("data-layout", "vertical"), body.attr("data-container", "wide")), e > 767 && e < 1024 && body.attr("data-sidebar-style", "mini"), e < 768 && body.attr("data-sidebar-style", "overlay")
}, powSettings.prototype.managePrimaryColor = function() {
    switch (this.primary) {
        case "color_1":
            body.attr("data-primary", "color_1");
            break;
        case "color_2":
            body.attr("data-primary", "color_2");
            break;
        case "color_3":
            body.attr("data-primary", "color_3");
            break;
        case "color_4":
            body.attr("data-primary", "color_4");
            break;
        case "color_5":
            body.attr("data-primary", "color_5");
            break;
        case "color_6":
            body.attr("data-primary", "color_6");
            break;
        case "color_7":
            body.attr("data-primary", "color_7");
            break;
        case "color_8":
            body.attr("data-primary", "color_8");
            break;
        case "color_9":
            body.attr("data-primary", "color_9");
            break;
        case "color_10":
            body.attr("data-primary", "color_10");
            break;
        case "color_11":
            body.attr("data-primary", "color_11");
            break;
        case "color_12":
            body.attr("data-primary", "color_12");
            break;
        case "color_13":
            body.attr("data-primary", "color_13");
            break;
        case "color_14":
            body.attr("data-primary", "color_14");
            break;
        case "color_15":
            body.attr("data-primary", "color_15");
            break;
        default:
            body.attr("data-primary", "color_1")
    }
};