(function (t, e) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else if (typeof exports === "object") {
        module.exports = e(require("jquery"))
    } else {
        e(t.jQuery)
    }
})(this, function (t) {
    t.transit = {
        version: "0.9.12",
        propertyMap: {
            marginLeft: "margin",
            marginRight: "margin",
            marginBottom: "margin",
            marginTop: "margin",
            paddingLeft: "padding",
            paddingRight: "padding",
            paddingBottom: "padding",
            paddingTop: "padding"
        },
        enabled: true,
        useTransitionEnd: false
    };
    var e = document.createElement("div");
    var n = {};

    function i(t) {
        if (t in e.style) return t;
        var n = ["Moz", "Webkit", "O", "ms"];
        var i = t.charAt(0).toUpperCase() + t.substr(1);
        for (var r = 0; r < n.length; ++r) {
            var s = n[r] + i;
            if (s in e.style) {
                return s
            }
        }
    }

    function r() {
        e.style[n.transform] = "";
        e.style[n.transform] = "rotateY(90deg)";
        return e.style[n.transform] !== ""
    }
    var s = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
    n.transition = i("transition");
    n.transitionDelay = i("transitionDelay");
    n.transform = i("transform");
    n.transformOrigin = i("transformOrigin");
    n.filter = i("Filter");
    n.transform3d = r();
    var a = {
        transition: "transitionend",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        WebkitTransition: "webkitTransitionEnd",
        msTransition: "MSTransitionEnd"
    };
    var o = n.transitionEnd = a[n.transition] || null;
    for (var u in n) {
        if (n.hasOwnProperty(u) && typeof t.support[u] === "undefined") {
            t.support[u] = n[u]
        }
    }
    e = null;
    t.cssEase = {
        _default: "ease",
        "in": "ease-in",
        out: "ease-out",
        "in-out": "ease-in-out",
        snap: "cubic-bezier(0,1,.5,1)",
        easeInCubic: "cubic-bezier(.550,.055,.675,.190)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    };
    t.cssHooks["transit:transform"] = {
        get: function (e) {
            return t(e).data("transform") || new f
        },
        set: function (e, i) {
            var r = i;
            if (!(r instanceof f)) {
                r = new f(r)
            }
            if (n.transform === "WebkitTransform" && !s) {
                e.style[n.transform] = r.toString(true)
            } else {
                e.style[n.transform] = r.toString()
            }
            t(e).data("transform", r)
        }
    };
    t.cssHooks.transform = {
        set: t.cssHooks["transit:transform"].set
    };
    t.cssHooks.filter = {
        get: function (t) {
            return t.style[n.filter]
        },
        set: function (t, e) {
            t.style[n.filter] = e
        }
    };
    if (t.fn.jquery < "1.8") {
        t.cssHooks.transformOrigin = {
            get: function (t) {
                return t.style[n.transformOrigin]
            },
            set: function (t, e) {
                t.style[n.transformOrigin] = e
            }
        };
        t.cssHooks.transition = {
            get: function (t) {
                return t.style[n.transition]
            },
            set: function (t, e) {
                t.style[n.transition] = e
            }
        }
    }
    p("scale");
    p("scaleX");
    p("scaleY");
    p("translate");
    p("rotate");
    p("rotateX");
    p("rotateY");
    p("rotate3d");
    p("perspective");
    p("skewX");
    p("skewY");
    p("x", true);
    p("y", true);

    function f(t) {
        if (typeof t === "string") {
            this.parse(t)
        }
        return this
    }
    f.prototype = {
        setFromString: function (t, e) {
            var n = typeof e === "string" ? e.split(",") : e.constructor === Array ? e : [e];
            n.unshift(t);
            f.prototype.set.apply(this, n)
        },
        set: function (t) {
            var e = Array.prototype.slice.apply(arguments, [1]);
            if (this.setter[t]) {
                this.setter[t].apply(this, e)
            } else {
                this[t] = e.join(",")
            }
        },
        get: function (t) {
            if (this.getter[t]) {
                return this.getter[t].apply(this)
            } else {
                return this[t] || 0
            }
        },
        setter: {
            rotate: function (t) {
                this.rotate = b(t, "deg")
            },
            rotateX: function (t) {
                this.rotateX = b(t, "deg")
            },
            rotateY: function (t) {
                this.rotateY = b(t, "deg")
            },
            scale: function (t, e) {
                if (e === undefined) {
                    e = t
                }
                this.scale = t + "," + e
            },
            skewX: function (t) {
                this.skewX = b(t, "deg")
            },
            skewY: function (t) {
                this.skewY = b(t, "deg")
            },
            perspective: function (t) {
                this.perspective = b(t, "px")
            },
            x: function (t) {
                this.set("translate", t, null)
            },
            y: function (t) {
                this.set("translate", null, t)
            },
            translate: function (t, e) {
                if (this._translateX === undefined) {
                    this._translateX = 0
                }
                if (this._translateY === undefined) {
                    this._translateY = 0
                }
                if (t !== null && t !== undefined) {
                    this._translateX = b(t, "px")
                }
                if (e !== null && e !== undefined) {
                    this._translateY = b(e, "px")
                }
                this.translate = this._translateX + "," + this._translateY
            }
        },
        getter: {
            x: function () {
                return this._translateX || 0
            },
            y: function () {
                return this._translateY || 0
            },
            scale: function () {
                var t = (this.scale || "1,1").split(",");
                if (t[0]) {
                    t[0] = parseFloat(t[0])
                }
                if (t[1]) {
                    t[1] = parseFloat(t[1])
                }
                return t[0] === t[1] ? t[0] : t
            },
            rotate3d: function () {
                var t = (this.rotate3d || "0,0,0,0deg").split(",");
                for (var e = 0; e <= 3; ++e) {
                    if (t[e]) {
                        t[e] = parseFloat(t[e])
                    }
                }
                if (t[3]) {
                    t[3] = b(t[3], "deg")
                }
                return t
            }
        },
        parse: function (t) {
            var e = this;
            t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function (t, n, i) {
                e.setFromString(n, i)
            })
        },
        toString: function (t) {
            var e = [];
            for (var i in this) {
                if (this.hasOwnProperty(i)) {
                    if (!n.transform3d && (i === "rotateX" || i === "rotateY" || i === "perspective" || i === "transformOrigin")) {
                        continue
                    }
                    if (i[0] !== "_") {
                        if (t && i === "scale") {
                            e.push(i + "3d(" + this[i] + ",1)")
                        } else if (t && i === "translate") {
                            e.push(i + "3d(" + this[i] + ",0)")
                        } else {
                            e.push(i + "(" + this[i] + ")")
                        }
                    }
                }
            }
            return e.join(" ")
        }
    };

    function c(t, e, n) {
        if (e === true) {
            t.queue(n)
        } else if (e) {
            t.queue(e, n)
        } else {
            t.each(function () {
                n.call(this)
            })
        }
    }

    function l(e) {
        var i = [];
        t.each(e, function (e) {
            e = t.camelCase(e);
            e = t.transit.propertyMap[e] || t.cssProps[e] || e;
            e = h(e);
            if (n[e]) e = h(n[e]);
            if (t.inArray(e, i) === -1) {
                i.push(e)
            }
        });
        return i
    }

    function d(e, n, i, r) {
        var s = l(e);
        if (t.cssEase[i]) {
            i = t.cssEase[i]
        }
        var a = "" + y(n) + " " + i;
        if (parseInt(r, 10) > 0) {
            a += " " + y(r)
        }
        var o = [];
        t.each(s, function (t, e) {
            o.push(e + " " + a)
        });
        return o.join(", ")
    }
    t.fn.transition = t.fn.transit = function (e, i, r, s) {
        var a = this;
        var u = 0;
        var f = true;
        var l = t.extend(true, {}, e);
        if (typeof i === "function") {
            s = i;
            i = undefined
        }
        if (typeof i === "object") {
            r = i.easing;
            u = i.delay || 0;
            f = typeof i.queue === "undefined" ? true : i.queue;
            s = i.complete;
            i = i.duration
        }
        if (typeof r === "function") {
            s = r;
            r = undefined
        }
        if (typeof l.easing !== "undefined") {
            r = l.easing;
            delete l.easing
        }
        if (typeof l.duration !== "undefined") {
            i = l.duration;
            delete l.duration
        }
        if (typeof l.complete !== "undefined") {
            s = l.complete;
            delete l.complete
        }
        if (typeof l.queue !== "undefined") {
            f = l.queue;
            delete l.queue
        }
        if (typeof l.delay !== "undefined") {
            u = l.delay;
            delete l.delay
        }
        if (typeof i === "undefined") {
            i = t.fx.speeds._default
        }
        if (typeof r === "undefined") {
            r = t.cssEase._default
        }
        i = y(i);
        var p = d(l, i, r, u);
        var h = t.transit.enabled && n.transition;
        var b = h ? parseInt(i, 10) + parseInt(u, 10) : 0;
        if (b === 0) {
            var g = function (t) {
                a.css(l);
                if (s) {
                    s.apply(a)
                }
                if (t) {
                    t()
                }
            };
            c(a, f, g);
            return a
        }
        var m = {};
        var v = function (e) {
            var i = false;
            var r = function () {
                if (i) {
                    a.unbind(o, r)
                }
                if (b > 0) {
                    a.each(function () {
                        this.style[n.transition] = m[this] || null
                    })
                }
                if (typeof s === "function") {
                    s.apply(a)
                }
                if (typeof e === "function") {
                    e()
                }
            };
            if (b > 0 && o && t.transit.useTransitionEnd) {
                i = true;
                a.bind(o, r)
            } else {
                window.setTimeout(r, b)
            }
            a.each(function () {
                if (b > 0) {
                    this.style[n.transition] = p
                }
                t(this).css(l)
            })
        };
        var z = function (t) {
            this.offsetWidth;
            v(t)
        };
        c(a, f, z);
        return this
    };

    function p(e, i) {
        if (!i) {
            t.cssNumber[e] = true
        }
        t.transit.propertyMap[e] = n.transform;
        t.cssHooks[e] = {
            get: function (n) {
                var i = t(n).css("transit:transform");
                return i.get(e)
            },
            set: function (n, i) {
                var r = t(n).css("transit:transform");
                r.setFromString(e, i);
                t(n).css({
                    "transit:transform": r
                })
            }
        }
    }

    function h(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }

    function b(t, e) {
        if (typeof t === "string" && !t.match(/^[\-0-9\.]+$/)) {
            return t
        } else {
            return "" + t + e
        }
    }

    function y(e) {
        var n = e;
        if (typeof n === "string" && !n.match(/^[\-0-9\.]+/)) {
            n = t.fx.speeds[n] || t.fx.speeds._default
        }
        return b(n, "ms")
    }
    t.transit.getTransitionValue = d;
    return t
});
var Froogaloop = function () {
    function e(a) {
        return new e.fn.init(a)
    }

    function g(a, c, b) {
        if (!b.contentWindow.postMessage) return !1;
        a = JSON.stringify({
            method: a,
            value: c
        });
        b.contentWindow.postMessage(a, h)
    }

    function l(a) {
        var c, b;
        try {
            c = JSON.parse(a.data), b = c.event || c.method
        } catch (e) {}
        "ready" != b || k || (k = !0);
        if (!/^https?:\/\/player.vimeo.com/.test(a.origin)) return !1;
        "*" === h && (h = a.origin);
        a = c.value;
        var m = c.data,
            f = "" === f ? null : c.player_id;
        c = f ? d[f][b] : d[b];
        b = [];
        if (!c) return !1;
        void 0 !== a && b.push(a);
        m && b.push(m);
        f && b.push(f);
        return 0 < b.length ? c.apply(null, b) : c.call()
    }

    function n(a, c, b) {
        b ? (d[b] || (d[b] = {}), d[b][a] = c) : d[a] = c
    }
    var d = {},
        k = !1,
        h = "*";
    e.fn = e.prototype = {
        element: null,
        init: function (a) {
            "string" === typeof a && (a = document.getElementById(a));
            this.element = a;
            return this
        },
        api: function (a, c) {
            if (!this.element || !a) return !1;
            var b = this.element,
                d = "" !== b.id ? b.id : null,
                e = c && c.constructor && c.call && c.apply ? null : c,
                f = c && c.constructor && c.call && c.apply ? c : null;
            f && n(a, f, d);
            g(a, e, b);
            return this
        },
        addEvent: function (a, c) {
            if (!this.element) return !1;
            var b = this.element,
                d = "" !== b.id ? b.id : null;
            n(a, c, d);
            "ready" != a ? g("addEventListener", a, b) : "ready" == a && k && c.call(null, d);
            return this
        },
        removeEvent: function (a) {
            if (!this.element) return !1;
            var c = this.element,
                b = "" !== c.id ? c.id : null;
            a: {
                if (b && d[b]) {
                    if (!d[b][a]) {
                        b = !1;
                        break a
                    }
                    d[b][a] = null
                } else {
                    if (!d[a]) {
                        b = !1;
                        break a
                    }
                    d[a] = null
                }
                b = !0
            }
            "ready" != a && b && g("removeEventListener", a, c)
        }
    };
    e.fn.init.prototype = e.fn;
    window.addEventListener ? window.addEventListener("message", l, !1) : window.attachEvent("onmessage", l);
    return window.Froogaloop = window.$f = e
}();
! function (a) {
    var b = function () {
            var a, b = document.createElement("fakeelement"),
                c = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd"
                };
            for (a in c)
                if (void 0 !== b.style[a]) return c[a]
        },
        c = function (b, c, d) {
            this.setting = {
                axis: "y",
                reverse: !1,
                trigger: "click",
                speed: 500,
                forceHeight: !1,
                forceWidth: !1,
                autoSize: !0,
                front: ".front",
                back: ".back"
            }, this.setting = a.extend(this.setting, c), "string" != typeof c.axis || "x" !== c.axis.toLowerCase() && "y" !== c.axis.toLowerCase() || (this.setting.axis = c.axis.toLowerCase()), "boolean" == typeof c.reverse && (this.setting.reverse = c.reverse), "string" == typeof c.trigger && (this.setting.trigger = c.trigger.toLowerCase());
            var e = parseInt(c.speed);
            isNaN(e) || (this.setting.speed = e), "boolean" == typeof c.forceHeight && (this.setting.forceHeight = c.forceHeight), "boolean" == typeof c.forceWidth && (this.setting.forceWidth = c.forceWidth), "boolean" == typeof c.autoSize && (this.setting.autoSize = c.autoSize), ("string" == typeof c.front || c.front instanceof a) && (this.setting.front = c.front), ("string" == typeof c.back || c.back instanceof a) && (this.setting.back = c.back), this.element = b, this.frontElement = this.getFrontElement(), this.backElement = this.getBackElement(), this.isFlipped = !1, this.init(d)
        };
    a.extend(c.prototype, {
        flipDone: function (a) {
            var c = this;
            c.element.one(b(), function () {
                c.element.trigger("flip:done"), "function" == typeof a && a.call(c.element)
            })
        },
        flip: function (a) {
            if (!this.isFlipped) {
                this.isFlipped = !0;
                var b = "rotate" + this.setting.axis;
                this.frontElement.css({
                    transform: b + (this.setting.reverse ? "(-180deg)" : "(180deg)"),
                    "z-index": "0"
                }), this.backElement.css({
                    transform: b + "(0deg)",
                    "z-index": "1"
                }), this.flipDone(a)
            }
        },
        unflip: function (a) {
            if (this.isFlipped) {
                this.isFlipped = !1;
                var b = "rotate" + this.setting.axis;
                this.frontElement.css({
                    transform: b + "(0deg)",
                    "z-index": "1"
                }), this.backElement.css({
                    transform: b + (this.setting.reverse ? "(180deg)" : "(-180deg)"),
                    "z-index": "0"
                }), this.flipDone(a)
            }
        },
        getFrontElement: function () {
            return this.setting.front instanceof a ? this.setting.front : this.element.find(this.setting.front)
        },
        getBackElement: function () {
            return this.setting.back instanceof a ? this.setting.back : this.element.find(this.setting.back)
        },
        init: function (a) {
            var b = this,
                c = b.frontElement.add(b.backElement),
                d = "rotate" + b.setting.axis,
                e = 2 * b.element["outer" + ("rotatex" === d ? "Height" : "Width")](),
                f = {
                    perspective: e,
                    position: "relative"
                },
                g = {
                    transform: d + "(" + (b.setting.reverse ? "180deg" : "-180deg") + ")",
                    "z-index": "0",
                    position: "relative"
                },
                h = {
                    "backface-visibility": "hidden",
                    "transform-style": "preserve-3d",
                    position: "absolute",
                    "z-index": "1"
                };
            b.setting.forceHeight ? c.outerHeight(b.element.height()) : b.setting.autoSize && (h.height = "100%"), b.setting.forceWidth ? c.outerWidth(b.element.width()) : b.setting.autoSize && (h.width = "100%"), (window.chrome || window.Intl && Intl.v8BreakIterator) && "CSS" in window && (f["-webkit-transform-style"] = "preserve-3d"), c.css(h).find("*").css({
                "backface-visibility": "hidden"
            }), b.element.css(f), b.backElement.css(g), setTimeout(function () {
                var d = b.setting.speed / 1e3 || .5;
                c.css({
                    transition: "all " + d + "s ease-out"
                }), "function" == typeof a && a.call(b.element)
            }, 20), b.attachEvents()
        },
        clickHandler: function (b) {
            b || (b = window.event), this.element.find(a(b.target).closest('button, a, input[type="submit"]')).length || (this.isFlipped ? this.unflip() : this.flip())
        },
        hoverHandler: function () {
            var b = this;
            b.element.off("mouseleave.flip"), b.flip(), setTimeout(function () {
                b.element.on("mouseleave.flip", a.proxy(b.unflip, b)), b.element.is(":hover") || b.unflip()
            }, b.setting.speed + 150)
        },
        attachEvents: function () {
            var b = this;
            "click" === b.setting.trigger ? b.element.on(a.fn.tap ? "tap.flip" : "click.flip", a.proxy(b.clickHandler, b)) : "hover" === b.setting.trigger && (b.element.on("mouseenter.flip", a.proxy(b.hoverHandler, b)), b.element.on("mouseleave.flip", a.proxy(b.unflip, b)))
        },
        flipChanged: function (a) {
            this.element.trigger("flip:change"), "function" == typeof a && a.call(this.element)
        },
        changeSettings: function (a, b) {
            var c = this,
                d = !1;
            if (void 0 !== a.axis && c.setting.axis !== a.axis.toLowerCase() && (c.setting.axis = a.axis.toLowerCase(), d = !0), void 0 !== a.reverse && c.setting.reverse !== a.reverse && (c.setting.reverse = a.reverse, d = !0), d) {
                var e = c.frontElement.add(c.backElement),
                    f = e.css(["transition-property", "transition-timing-function", "transition-duration", "transition-delay"]);
                e.css({
                    transition: "none"
                });
                var g = "rotate" + c.setting.axis;
                c.isFlipped ? c.frontElement.css({
                    transform: g + (c.setting.reverse ? "(-180deg)" : "(180deg)"),
                    "z-index": "0"
                }) : c.backElement.css({
                    transform: g + (c.setting.reverse ? "(180deg)" : "(-180deg)"),
                    "z-index": "0"
                }), setTimeout(function () {
                    e.css(f), c.flipChanged(b)
                }, 0)
            } else c.flipChanged(b)
        }
    }), a.fn.flip = function (b, d) {
        return "function" == typeof b && (d = b), "string" == typeof b || "boolean" == typeof b ? this.each(function () {
            var c = a(this).data("flip-model");
            "toggle" === b && (b = !c.isFlipped), b ? c.flip(d) : c.unflip(d)
        }) : this.each(function () {
            if (a(this).data("flip-model")) {
                var e = a(this).data("flip-model");
                !b || void 0 === b.axis && void 0 === b.reverse || e.changeSettings(b, d)
            } else a(this).data("flip-model", new c(a(this), b || {}, d))
        }), this
    }
}(jQuery);
! function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function (a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function (a) {
    var b = function (a, b) {
            var c, d = document.createElement("canvas");
            a.appendChild(d), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(d);
            var e = d.getContext("2d");
            d.width = d.height = b.size;
            var f = 1;
            window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [b.size, "px"].join(""), d.width = d.height = b.size * f, e.scale(f, f)), e.translate(b.size / 2, b.size / 2), e.rotate((-0.5 + b.rotate / 180) * Math.PI);
            var g = (b.size - b.lineWidth) / 2;
            b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2), Date.now = Date.now || function () {
                return +new Date
            };
            var h = function (a, b, c) {
                    c = Math.min(Math.max(-1, c || 0), 1);
                    var d = 0 >= c ? !0 : !1;
                    e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke()
                },
                i = function () {
                    var a, c;
                    e.lineWidth = 1, e.fillStyle = b.scaleColor, e.save();
                    for (var d = 24; d > 0; --d) d % 6 === 0 ? (c = b.scaleLength, a = 0) : (c = .6 * b.scaleLength, a = b.scaleLength - c), e.fillRect(-b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
                    e.restore()
                },
                j = function () {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
                        window.setTimeout(a, 1e3 / 60)
                    }
                }(),
                k = function () {
                    b.scaleColor && i(), b.trackColor && h(b.trackColor, b.trackWidth || b.lineWidth, 1)
                };
            this.getCanvas = function () {
                return d
            }, this.getCtx = function () {
                return e
            }, this.clear = function () {
                e.clearRect(b.size / -2, b.size / -2, b.size, b.size)
            }, this.draw = function (a) {
                b.scaleColor || b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, b.size * f, b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = b.lineCap;
                var d;
                d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor, h(d, b.lineWidth, a / 100)
            }.bind(this), this.animate = function (a, c) {
                var d = Date.now();
                b.onStart(a, c);
                var e = function () {
                    var f = Math.min(Date.now() - d, b.animate.duration),
                        g = b.easing(this, f, a, c - a, b.animate.duration);
                    this.draw(g), b.onStep(a, c, g), f >= b.animate.duration ? b.onStop(a, c) : j(e)
                }.bind(this);
                j(e)
            }.bind(this)
        },
        c = function (a, c) {
            var d = {
                barColor: "#ef1e25",
                trackColor: "#f9f9f9",
                scaleColor: "#dfe0e0",
                scaleLength: 5,
                lineCap: "round",
                lineWidth: 3,
                trackWidth: void 0,
                size: 110,
                rotate: 0,
                animate: {
                    duration: 1e3,
                    enabled: !0
                },
                easing: function (a, b, c, d, e) {
                    return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
                },
                onStart: function (a, b) {},
                onStep: function (a, b, c) {},
                onStop: function (a, b) {}
            };
            if ("undefined" != typeof b) d.renderer = b;
            else {
                if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                d.renderer = SVGRenderer
            }
            var e = {},
                f = 0,
                g = function () {
                    this.el = a, this.options = e;
                    for (var b in d) d.hasOwnProperty(b) && (e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this)));
                    "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? e.easing = jQuery.easing[e.easing] : e.easing = d.easing, "number" == typeof e.animate && (e.animate = {
                        duration: e.animate,
                        enabled: !0
                    }), "boolean" != typeof e.animate || e.animate || (e.animate = {
                        duration: 1e3,
                        enabled: e.animate
                    }), this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent")))
                }.bind(this);
            this.update = function (a) {
                return a = parseFloat(a), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this
            }.bind(this), this.disableAnimation = function () {
                return e.animate.enabled = !1, this
            }, this.enableAnimation = function () {
                return e.animate.enabled = !0, this
            }, g()
        };
    a.fn.easyPieChart = function (b) {
        return this.each(function () {
            var d;
            a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()), a.data(this, "easyPieChart", new c(this, d)))
        })
    }
});
! function (a) {
    var b = !0;
    a.goodlayers_flexslider = function (c, d) {
        var e = a(c);
        e.vars = a.extend({}, a.goodlayers_flexslider.defaults, d);
        var k, f = e.vars.namespace,
            g = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            h = ("ontouchstart" in window || g || window.DocumentTouch && document instanceof DocumentTouch) && e.vars.touch,
            i = "click touchend MSPointerUp keyup",
            j = "",
            l = "vertical" === e.vars.direction,
            m = e.vars.reverse,
            n = e.vars.itemWidth > 0,
            o = "fade" === e.vars.animation,
            p = "" !== e.vars.asNavFor,
            q = {};
        a.data(c, "goodlayers_flexslider", e), q = {
            init: function () {
                e.animating = !1, e.currentSlide = parseInt(e.vars.startAt ? e.vars.startAt : 0, 10), isNaN(e.currentSlide) && (e.currentSlide = 0), e.animatingTo = e.currentSlide, e.atEnd = 0 === e.currentSlide || e.currentSlide === e.last, e.containerSelector = e.vars.selector.substr(0, e.vars.selector.search(" ")), e.slides = a(e.vars.selector, e), e.container = a(e.containerSelector, e), e.count = e.slides.length, e.syncExists = a(e.vars.sync).length > 0, "slide" === e.vars.animation && (e.vars.animation = "swing"), e.prop = l ? "top" : "marginLeft", e.args = {}, e.manualPause = !1, e.stopped = !1, e.started = !1, e.startTimeout = null, e.transitions = !e.vars.video && !o && e.vars.useCSS && function () {
                    var a = document.createElement("div"),
                        b = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var c in b)
                        if (void 0 !== a.style[b[c]]) return e.pfx = b[c].replace("Perspective", "").toLowerCase(), e.prop = "-" + e.pfx + "-transform", !0;
                    return !1
                }(), e.ensureAnimationEnd = "", "" !== e.vars.controlsContainer && (e.controlsContainer = a(e.vars.controlsContainer).length > 0 && a(e.vars.controlsContainer)), "" !== e.vars.manualControls && (e.manualControls = a(e.vars.manualControls).length > 0 && a(e.vars.manualControls)), "" !== e.vars.customDirectionNav && (e.customDirectionNav = 2 === a(e.vars.customDirectionNav).length && a(e.vars.customDirectionNav)), e.vars.randomize && (e.slides.sort(function () {
                    return Math.round(Math.random()) - .5
                }), e.container.empty().append(e.slides)), e.doMath(), e.setup("init"), e.vars.controlNav && q.controlNav.setup(), e.vars.directionNav && q.directionNav.setup(), e.vars.keyboard && (1 === a(e.containerSelector).length || e.vars.multipleKeyboard) && a(document).bind("keyup", function (a) {
                    var b = a.keyCode;
                    if (!e.animating && (39 === b || 37 === b)) {
                        var c = 39 === b ? e.getTarget("next") : 37 === b && e.getTarget("prev");
                        e.flexAnimate(c, e.vars.pauseOnAction)
                    }
                }), e.vars.mousewheel && e.bind("mousewheel", function (a, b, c, d) {
                    a.preventDefault();
                    var f = b < 0 ? e.getTarget("next") : e.getTarget("prev");
                    e.flexAnimate(f, e.vars.pauseOnAction)
                }), e.vars.pausePlay && q.pausePlay.setup(), e.vars.slideshow && e.vars.pauseInvisible && q.pauseInvisible.init(), e.vars.slideshow && (e.vars.pauseOnHover && e.hover(function () {
                    e.manualPlay || e.manualPause || e.pause()
                }, function () {
                    e.manualPause || e.manualPlay || e.stopped || e.play()
                }), e.vars.pauseInvisible && q.pauseInvisible.isHidden() || (e.vars.initDelay > 0 ? e.startTimeout = setTimeout(e.play, e.vars.initDelay) : e.play())), p && q.asNav.setup(), h && e.vars.touch && q.touch(), (!o || o && e.vars.smoothHeight) && a(window).bind("resize orientationchange focus", q.resize), e.find("img").attr("draggable", "false"), setTimeout(function () {
                    e.vars.start(e)
                }, 200)
            },
            asNav: {
                setup: function () {
                    e.asNav = !0, e.animatingTo = Math.floor(e.currentSlide / e.move), e.currentItem = e.currentSlide, e.slides.removeClass(f + "active-slide").eq(e.currentItem).addClass(f + "active-slide"), g ? (c._slider = e, e.slides.each(function () {
                        var b = this;
                        b._gesture = new MSGesture, b._gesture.target = b, b.addEventListener("MSPointerDown", function (a) {
                            a.preventDefault(), a.currentTarget._gesture && a.currentTarget._gesture.addPointer(a.pointerId)
                        }, !1), b.addEventListener("MSGestureTap", function (b) {
                            b.preventDefault();
                            var c = a(this),
                                d = c.index();
                            a(e.vars.asNavFor).data("goodlayers_flexslider").animating || c.hasClass("active") || (e.direction = e.currentItem < d ? "next" : "prev", e.flexAnimate(d, e.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : e.slides.on(i, function (b) {
                        b.preventDefault();
                        var c = a(this),
                            d = c.index();
                        c.offset().left - a(e).scrollLeft() <= 0 && c.hasClass(f + "active-slide") ? e.flexAnimate(e.getTarget("prev"), !0) : a(e.vars.asNavFor).data("goodlayers_flexslider").animating || c.hasClass(f + "active-slide") || (e.direction = e.currentItem < d ? "next" : "prev", e.flexAnimate(d, e.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function () {
                    e.manualControls ? q.controlNav.setupManual() : q.controlNav.setupPaging()
                },
                setupPaging: function () {
                    var d, g, b = "thumbnails" === e.vars.controlNav ? "control-thumbs" : "control-paging",
                        c = 1;
                    if (e.controlNavScaffold = a('<ol class="' + f + "control-nav " + f + b + '"></ol>'), e.pagingCount > 1)
                        for (var h = 0; h < e.pagingCount; h++) {
                            if (g = e.slides.eq(h), void 0 === g.attr("data-thumb-alt") && g.attr("data-thumb-alt", ""), altText = "" !== g.attr("data-thumb-alt") ? altText = ' alt="' + g.attr("data-thumb-alt") + '"' : "", d = "thumbnails" === e.vars.controlNav ? '<img src="' + g.attr("data-thumb") + '"' + altText + "/>" : '<a href="#">' + c + "</a>", "thumbnails" === e.vars.controlNav && !0 === e.vars.thumbCaptions) {
                                var k = g.attr("data-thumbcaption");
                                "" !== k && void 0 !== k && (d += '<span class="' + f + 'caption">' + k + "</span>")
                            }
                            e.controlNavScaffold.append("<li>" + d + "</li>"), c++
                        }
                    e.controlsContainer ? a(e.controlsContainer).append(e.controlNavScaffold) : e.append(e.controlNavScaffold), q.controlNav.set(), q.controlNav.active(), e.controlNavScaffold.delegate("a, img", i, function (b) {
                        if (b.preventDefault(), "" === j || j === b.type) {
                            var c = a(this),
                                d = e.controlNav.index(c);
                            c.hasClass(f + "active") || (e.direction = d > e.currentSlide ? "next" : "prev", e.flexAnimate(d, e.vars.pauseOnAction))
                        }
                        "" === j && (j = b.type), q.setToClearWatchedEvent()
                    })
                },
                setupManual: function () {
                    e.controlNav = e.manualControls, q.controlNav.active(), e.controlNav.bind(i, function (b) {
                        if (b.preventDefault(), "" === j || j === b.type) {
                            var c = a(this),
                                d = e.controlNav.index(c);
                            c.hasClass(f + "active") || (d > e.currentSlide ? e.direction = "next" : e.direction = "prev", e.flexAnimate(d, e.vars.pauseOnAction))
                        }
                        "" === j && (j = b.type), q.setToClearWatchedEvent()
                    })
                },
                set: function () {
                    var b = "thumbnails" === e.vars.controlNav ? "img" : "a";
                    e.controlNav = a("." + f + "control-nav li " + b, e.controlsContainer ? e.controlsContainer : e)
                },
                active: function () {
                    e.controlNav.removeClass(f + "active").eq(e.animatingTo).addClass(f + "active")
                },
                update: function (b, c) {
                    e.pagingCount > 1 && "add" === b ? e.controlNavScaffold.append(a('<li><a href="#">' + e.count + "</a></li>")) : 1 === e.pagingCount ? e.controlNavScaffold.find("li").remove() : e.controlNav.eq(c).closest("li").remove(), q.controlNav.set(), e.pagingCount > 1 && e.pagingCount !== e.controlNav.length ? e.update(c, b) : q.controlNav.active()
                }
            },
            directionNav: {
                setup: function () {
                    var b = a('<ul class="' + f + 'direction-nav"><li class="' + f + 'nav-prev"><a class="' + f + 'prev" href="#">' + e.vars.prevText + '</a></li><li class="' + f + 'nav-next"><a class="' + f + 'next" href="#">' + e.vars.nextText + "</a></li></ul>");
                    e.customDirectionNav ? e.directionNav = e.customDirectionNav : e.controlsContainer ? (a(e.controlsContainer).append(b), e.directionNav = a("." + f + "direction-nav li a", e.controlsContainer)) : (e.append(b), e.directionNav = a("." + f + "direction-nav li a", e)), q.directionNav.update(), e.directionNav.bind(i, function (b) {
                        b.preventDefault();
                        var c;
                        "" !== j && j !== b.type || (c = a(this).hasClass(f + "next") ? e.getTarget("next") : e.getTarget("prev"), e.flexAnimate(c, e.vars.pauseOnAction)), "" === j && (j = b.type), q.setToClearWatchedEvent()
                    })
                },
                update: function () {
                    var a = f + "disabled";
                    1 === e.pagingCount ? e.directionNav.addClass(a).attr("tabindex", "-1") : e.vars.animationLoop ? e.directionNav.removeClass(a).removeAttr("tabindex") : 0 === e.animatingTo ? e.directionNav.removeClass(a).filter("." + f + "prev").addClass(a).attr("tabindex", "-1") : e.animatingTo === e.last ? e.directionNav.removeClass(a).filter("." + f + "next").addClass(a).attr("tabindex", "-1") : e.directionNav.removeClass(a).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function () {
                    var b = a('<div class="' + f + 'pauseplay"><a href="#"></a></div>');
                    e.controlsContainer ? (e.controlsContainer.append(b), e.pausePlay = a("." + f + "pauseplay a", e.controlsContainer)) : (e.append(b), e.pausePlay = a("." + f + "pauseplay a", e)), q.pausePlay.update(e.vars.slideshow ? f + "pause" : f + "play"), e.pausePlay.bind(i, function (b) {
                        b.preventDefault(), "" !== j && j !== b.type || (a(this).hasClass(f + "pause") ? (e.manualPause = !0, e.manualPlay = !1, e.pause()) : (e.manualPause = !1, e.manualPlay = !0, e.play())), "" === j && (j = b.type), q.setToClearWatchedEvent()
                    })
                },
                update: function (a) {
                    "play" === a ? e.pausePlay.removeClass(f + "pause").addClass(f + "play").html(e.vars.playText) : e.pausePlay.removeClass(f + "play").addClass(f + "pause").html(e.vars.pauseText)
                }
            },
            touch: function () {
                function u(a) {
                    a.stopPropagation(), e.animating ? a.preventDefault() : (e.pause(), c._gesture.addPointer(a.pointerId), t = 0, f = l ? e.h : e.w, i = Number(new Date), d = n && m && e.animatingTo === e.last ? 0 : n && m ? e.limit - (e.itemW + e.vars.itemMargin) * e.move * e.animatingTo : n && e.currentSlide === e.last ? e.limit : n ? (e.itemW + e.vars.itemMargin) * e.move * e.currentSlide : m ? (e.last - e.currentSlide + e.cloneOffset) * f : (e.currentSlide + e.cloneOffset) * f)
                }

                function v(a) {
                    a.stopPropagation();
                    var b = a.target._slider;
                    if (b) {
                        var e = -a.translationX,
                            g = -a.translationY;
                        if (t += l ? g : e, h = t, q = l ? Math.abs(t) < Math.abs(-e) : Math.abs(t) < Math.abs(-g), a.detail === a.MSGESTURE_FLAG_INERTIA) return void setImmediate(function () {
                            c._gesture.stop()
                        });
                        (!q || Number(new Date) - i > 500) && (a.preventDefault(), !o && b.transitions && (b.vars.animationLoop || (h = t / (0 === b.currentSlide && t < 0 || b.currentSlide === b.last && t > 0 ? Math.abs(t) / f + 2 : 1)), b.setProps(d + h, "setTouch")))
                    }
                }

                function w(c) {
                    c.stopPropagation();
                    var e = c.target._slider;
                    if (e) {
                        if (e.animatingTo === e.currentSlide && !q && null !== h) {
                            var g = m ? -h : h,
                                j = g > 0 ? e.getTarget("next") : e.getTarget("prev");
                            e.canAdvance(j) && (Number(new Date) - i < 550 && Math.abs(g) > 50 || Math.abs(g) > f / 2) ? e.flexAnimate(j, e.vars.pauseOnAction) : o || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                        }
                        a = null, b = null, h = null, d = null, t = 0
                    }
                }
                var a, b, d, f, h, i, j, k, p, q = !1,
                    r = 0,
                    s = 0,
                    t = 0;
                g ? (c.style.msTouchAction = "none", c._gesture = new MSGesture, c._gesture.target = c, c.addEventListener("MSPointerDown", u, !1), c._slider = e, c.addEventListener("MSGestureChange", v, !1), c.addEventListener("MSGestureEnd", w, !1)) : (j = function (g) {
                    e.animating ? g.preventDefault() : (window.navigator.msPointerEnabled || 1 === g.touches.length) && (e.pause(), f = l ? e.h : e.w, i = Number(new Date), r = g.touches[0].pageX, s = g.touches[0].pageY, d = n && m && e.animatingTo === e.last ? 0 : n && m ? e.limit - (e.itemW + e.vars.itemMargin) * e.move * e.animatingTo : n && e.currentSlide === e.last ? e.limit : n ? (e.itemW + e.vars.itemMargin) * e.move * e.currentSlide : m ? (e.last - e.currentSlide + e.cloneOffset) * f : (e.currentSlide + e.cloneOffset) * f, a = l ? s : r, b = l ? r : s, c.addEventListener("touchmove", k, !1), c.addEventListener("touchend", p, !1))
                }, k = function (c) {
                    r = c.touches[0].pageX, s = c.touches[0].pageY, h = l ? a - s : a - r, q = l ? Math.abs(h) < Math.abs(r - b) : Math.abs(h) < Math.abs(s - b), (!q || Number(new Date) - i > 500) && (c.preventDefault(), !o && e.transitions && (e.vars.animationLoop || (h /= 0 === e.currentSlide && h < 0 || e.currentSlide === e.last && h > 0 ? Math.abs(h) / f + 2 : 1), e.setProps(d + h, "setTouch")))
                }, p = function (g) {
                    if (c.removeEventListener("touchmove", k, !1), e.animatingTo === e.currentSlide && !q && null !== h) {
                        var j = m ? -h : h,
                            l = j > 0 ? e.getTarget("next") : e.getTarget("prev");
                        e.canAdvance(l) && (Number(new Date) - i < 550 && Math.abs(j) > 50 || Math.abs(j) > f / 2) ? e.flexAnimate(l, e.vars.pauseOnAction) : o || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                    }
                    c.removeEventListener("touchend", p, !1), a = null, b = null, h = null, d = null
                }, c.addEventListener("touchstart", j, !1))
            },
            resize: function () {
                !e.animating && e.is(":visible") && (n || e.doMath(), o ? q.smoothHeight() : n ? (e.slides.width(e.computedW), e.update(e.pagingCount), e.setProps()) : l ? (e.viewport.height(e.h), e.setProps(e.h, "setTotal")) : (e.vars.smoothHeight && q.smoothHeight(), e.newSlides.width(e.computedW), e.setProps(e.computedW, "setTotal")))
            },
            smoothHeight: function (a) {
                if (!l || o) {
                    var b = o ? e : e.viewport;
                    a ? b.animate({
                        height: e.slides.eq(e.animatingTo).height()
                    }, a) : b.height(e.slides.eq(e.animatingTo).height())
                }
            },
            sync: function (b) {
                var c = a(e.vars.sync).data("goodlayers_flexslider"),
                    d = e.animatingTo;
                switch (b) {
                    case "animate":
                        c.flexAnimate(d, e.vars.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        c.playing || c.asNav || c.play();
                        break;
                    case "pause":
                        c.pause()
                }
            },
            uniqueID: function (b) {
                return b.filter("[id]").add(b.find("[id]")).each(function () {
                    var b = a(this);
                    b.attr("id", b.attr("id") + "_clone")
                }), b
            },
            pauseInvisible: {
                visProp: null,
                init: function () {
                    var a = q.pauseInvisible.getHiddenProp();
                    if (a) {
                        var b = a.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(b, function () {
                            q.pauseInvisible.isHidden() ? e.startTimeout ? clearTimeout(e.startTimeout) : e.pause() : e.started ? e.play() : e.vars.initDelay > 0 ? setTimeout(e.play, e.vars.initDelay) : e.play()
                        })
                    }
                },
                isHidden: function () {
                    var a = q.pauseInvisible.getHiddenProp();
                    return !!a && document[a]
                },
                getHiddenProp: function () {
                    var a = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var b = 0; b < a.length; b++)
                        if (a[b] + "Hidden" in document) return a[b] + "Hidden";
                    return null
                }
            },
            setToClearWatchedEvent: function () {
                clearTimeout(k), k = setTimeout(function () {
                    j = ""
                }, 3e3)
            }
        }, e.flexAnimate = function (b, c, d, g, i) {
            if (e.vars.animationLoop || b === e.currentSlide || (e.direction = b > e.currentSlide ? "next" : "prev"), p && 1 === e.pagingCount && (e.direction = e.currentItem < b ? "next" : "prev"), !e.animating && (e.canAdvance(b, i) || d) && e.is(":visible")) {
                if (p && g) {
                    var j = a(e.vars.asNavFor).data("goodlayers_flexslider");
                    if (e.atEnd = 0 === b || b === e.count - 1, j.flexAnimate(b, !0, !1, !0, i), e.direction = e.currentItem < b ? "next" : "prev", j.direction = e.direction, Math.ceil((b + 1) / e.visible) - 1 === e.currentSlide || 0 === b) return e.currentItem = b, e.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), !1;
                    e.currentItem = b, e.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), b = Math.floor(b / e.visible)
                }
                if (e.animating = !0, e.animatingTo = b, c && e.pause(), e.vars.before(e), e.syncExists && !i && q.sync("animate"), e.vars.controlNav && q.controlNav.active(), n || e.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), e.atEnd = 0 === b || b === e.last, e.vars.directionNav && q.directionNav.update(), b === e.last && (e.vars.end(e), e.vars.animationLoop || e.pause()), o) h ? (e.slides.eq(e.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), e.slides.eq(b).css({
                    opacity: 1,
                    zIndex: 2
                }), e.wrapup(k)) : (e.slides.eq(e.currentSlide).css({
                    zIndex: 1
                }).animate({
                    opacity: 0
                }, e.vars.animationSpeed, e.vars.easing), e.slides.eq(b).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, e.vars.animationSpeed, e.vars.easing, e.wrapup));
                else {
                    var r, s, t, k = l ? e.slides.filter(":first").height() : e.computedW;
                    n ? (r = e.vars.itemMargin, t = (e.itemW + r) * e.move * e.animatingTo, s = t > e.limit && 1 !== e.visible ? e.limit : t) : s = 0 === e.currentSlide && b === e.count - 1 && e.vars.animationLoop && "next" !== e.direction ? m ? (e.count + e.cloneOffset) * k : 0 : e.currentSlide === e.last && 0 === b && e.vars.animationLoop && "prev" !== e.direction ? m ? 0 : (e.count + 1) * k : m ? (e.count - 1 - b + e.cloneOffset) * k : (b + e.cloneOffset) * k, e.setProps(s, "", e.vars.animationSpeed), e.transitions ? (e.vars.animationLoop && e.atEnd || (e.animating = !1, e.currentSlide = e.animatingTo), e.container.unbind("webkitTransitionEnd transitionend"), e.container.bind("webkitTransitionEnd transitionend", function () {
                        clearTimeout(e.ensureAnimationEnd), e.wrapup(k)
                    }), clearTimeout(e.ensureAnimationEnd), e.ensureAnimationEnd = setTimeout(function () {
                        e.wrapup(k)
                    }, e.vars.animationSpeed + 100)) : e.container.animate(e.args, e.vars.animationSpeed, e.vars.easing, function () {
                        e.wrapup(k)
                    })
                }
                e.vars.smoothHeight && q.smoothHeight(e.vars.animationSpeed)
            }
        }, e.wrapup = function (a) {
            o || n || (0 === e.currentSlide && e.animatingTo === e.last && e.vars.animationLoop ? e.setProps(a, "jumpEnd") : e.currentSlide === e.last && 0 === e.animatingTo && e.vars.animationLoop && e.setProps(a, "jumpStart")), e.animating = !1, e.currentSlide = e.animatingTo, e.vars.after(e)
        }, e.animateSlides = function () {
            !e.animating && b && e.flexAnimate(e.getTarget("next"))
        }, e.pause = function () {
            clearInterval(e.animatedSlides), e.animatedSlides = null, e.playing = !1, e.vars.pausePlay && q.pausePlay.update("play"), e.syncExists && q.sync("pause")
        }, e.play = function () {
            e.playing && clearInterval(e.animatedSlides), e.animatedSlides = e.animatedSlides || setInterval(e.animateSlides, e.vars.slideshowSpeed), e.started = e.playing = !0, e.vars.pausePlay && q.pausePlay.update("pause"), e.syncExists && q.sync("play")
        }, e.stop = function () {
            e.pause(), e.stopped = !0
        }, e.canAdvance = function (a, b) {
            var c = p ? e.pagingCount - 1 : e.last;
            return !!b || (!(!p || e.currentItem !== e.count - 1 || 0 !== a || "prev" !== e.direction) || (!p || 0 !== e.currentItem || a !== e.pagingCount - 1 || "next" === e.direction) && (!(a === e.currentSlide && !p) && (!!e.vars.animationLoop || (!e.atEnd || 0 !== e.currentSlide || a !== c || "next" === e.direction) && (!e.atEnd || e.currentSlide !== c || 0 !== a || "next" !== e.direction))))
        }, e.getTarget = function (a) {
            return e.direction = a, "next" === a ? e.currentSlide === e.last ? 0 : e.currentSlide + 1 : 0 === e.currentSlide ? e.last : e.currentSlide - 1
        }, e.setProps = function (a, b, c) {
            var d = function () {
                var c = a || (e.itemW + e.vars.itemMargin) * e.move * e.animatingTo;
                return -1 * function () {
                    if (n) return "setTouch" === b ? a : m && e.animatingTo === e.last ? 0 : m ? e.limit - (e.itemW + e.vars.itemMargin) * e.move * e.animatingTo : e.animatingTo === e.last ? e.limit : c;
                    switch (b) {
                        case "setTotal":
                            return m ? (e.count - 1 - e.currentSlide + e.cloneOffset) * a : (e.currentSlide + e.cloneOffset) * a;
                        case "setTouch":
                            return a;
                        case "jumpEnd":
                            return m ? a : e.count * a;
                        case "jumpStart":
                            return m ? e.count * a : a;
                        default:
                            return a
                    }
                }() + "px"
            }();
            e.transitions && (d = l ? "translate3d(0," + d + ",0)" : "translate3d(" + d + ",0,0)", c = void 0 !== c ? c / 1e3 + "s" : "0s", e.container.css("-" + e.pfx + "-transition-duration", c), e.container.css("transition-duration", c)), e.args[e.prop] = d, (e.transitions || void 0 === c) && e.container.css(e.args), e.container.css("transform", d)
        }, e.setup = function (b) {
            if (o) e.slides.css({
                width: "100%",
                float: "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === b && (h ? e.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + e.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(e.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : 0 == e.vars.fadeFirstSlide ? e.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(e.currentSlide).css({
                zIndex: 2
            }).css({
                opacity: 1
            }) : e.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(e.currentSlide).css({
                zIndex: 2
            }).animate({
                opacity: 1
            }, e.vars.animationSpeed, e.vars.easing)), e.vars.smoothHeight && q.smoothHeight();
            else {
                var c, d;
                "init" === b && (e.viewport = a('<div class="' + f + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(e).append(e.container), e.cloneCount = 0, e.cloneOffset = 0, m && (d = a.makeArray(e.slides).reverse(), e.slides = a(d), e.container.empty().append(e.slides))), e.vars.animationLoop && !n && (e.cloneCount = 2, e.cloneOffset = 1, "init" !== b && e.container.find(".clone").remove(), e.container.append(q.uniqueID(e.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(q.uniqueID(e.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), e.newSlides = a(e.vars.selector, e), c = m ? e.count - 1 - e.currentSlide + e.cloneOffset : e.currentSlide + e.cloneOffset, l && !n ? (e.container.height(200 * (e.count + e.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
                    e.newSlides.css({
                        display: "block"
                    }), e.doMath(), e.viewport.height(e.h), e.setProps(c * e.h, "init")
                }, "init" === b ? 100 : 0)) : (e.container.width(200 * (e.count + e.cloneCount) + "%"), e.setProps(c * e.computedW, "init"), setTimeout(function () {
                    e.doMath(), e.newSlides.css({
                        width: e.computedW,
                        marginRight: e.computedM,
                        float: "left",
                        display: "block"
                    }), e.vars.smoothHeight && q.smoothHeight()
                }, "init" === b ? 100 : 0))
            }
            n || e.slides.removeClass(f + "active-slide").eq(e.currentSlide).addClass(f + "active-slide"), e.vars.init(e)
        }, e.doMath = function () {
            var b = e.slides.first(),
                c = e.vars.itemMargin,
                d = e.vars.minItems,
                f = e.vars.maxItems;
            "function" == typeof window.matchMedia ? (window.matchMedia("(max-width: 767px)").matches && (d = 1, f = 1), window.matchMedia("(max-width: 419px)").matches && (d = 1, f = 1)) : (a(window).innerWidth() < 767 && (d = 1, f = 1), a(window).innerWidth() < 419 && (d = 1, f = 1)), e.w = void 0 === e.viewport ? e.width() : e.viewport.width(), e.h = b.height(), e.boxPadding = b.outerWidth() - b.width(), n ? (e.itemT = e.vars.itemWidth + c, e.itemM = c, e.minW = d ? d * e.itemT : e.w, e.maxW = f ? f * e.itemT - c : e.w, e.itemW = e.minW > e.w ? (e.w - c * (d - 1)) / d : e.maxW < e.w ? (e.w - c * (f - 1)) / f : e.vars.itemWidth > e.w ? e.w : e.vars.itemWidth, e.visible = Math.floor((e.w + e.itemM) / (e.itemW + e.itemM)), e.move = e.vars.move > 0 && e.vars.move < e.visible ? e.vars.move : e.visible, e.pagingCount = Math.ceil((e.count - e.visible) / e.move + 1), e.last = e.pagingCount - 1, e.limit = 1 === e.pagingCount ? 0 : e.vars.itemWidth > e.w ? e.itemW * (e.count - 1) + c * (e.count - 1) : (e.itemW + c) * e.count - e.w - c) : (e.itemW = e.w, e.itemM = c, e.pagingCount = e.count, e.last = e.count - 1), e.computedW = e.itemW - e.boxPadding, e.computedM = e.itemM
        }, e.update = function (a, b) {
            e.doMath(), n || (a < e.currentSlide ? e.currentSlide += 1 : a <= e.currentSlide && 0 !== a && (e.currentSlide -= 1), e.animatingTo = e.currentSlide), e.vars.controlNav && !e.manualControls && ("add" === b && !n || e.pagingCount > e.controlNav.length ? q.controlNav.update("add") : ("remove" === b && !n || e.pagingCount < e.controlNav.length) && (n && e.currentSlide > e.last && (e.currentSlide -= 1, e.animatingTo -= 1), q.controlNav.update("remove", e.last))), e.vars.directionNav && q.directionNav.update()
        }, e.addSlide = function (b, c) {
            var d = a(b);
            e.count += 1, e.last = e.count - 1, l && m ? void 0 !== c ? e.slides.eq(e.count - c).after(d) : e.container.prepend(d) : void 0 !== c ? e.slides.eq(c).before(d) : e.container.append(d), e.update(c, "add"), e.slides = a(e.vars.selector + ":not(.clone)", e), e.setup(), e.vars.added(e)
        }, e.removeSlide = function (b) {
            var c = isNaN(b) ? e.slides.index(a(b)) : b;
            e.count -= 1, e.last = e.count - 1, isNaN(b) ? a(b, e.slides).remove() : l && m ? e.slides.eq(e.last).remove() : e.slides.eq(b).remove(), e.doMath(), e.update(c, "remove"), e.slides = a(e.vars.selector + ":not(.clone)", e), e.setup(), e.vars.removed(e)
        }, e.editItemWidth = function (a) {
            e.vars.itemWidth = a, q.resize()
        }, q.init()
    }, a(window).blur(function (a) {
        b = !1
    }).focus(function (a) {
        b = !0
    }), a.goodlayers_flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function () {},
        before: function () {},
        after: function () {},
        end: function () {},
        added: function () {},
        removed: function () {},
        init: function () {}
    }, a.fn.goodlayers_flexslider = function (b) {
        if (void 0 === b && (b = {}), "object" == typeof b) return this.each(function () {
            var c = a(this),
                d = b.selector ? b.selector : ".slides > li",
                e = c.find(d);
            1 === e.length && !0 === b.allowOneSlide || 0 === e.length ? (e.fadeIn(400), b.start && b.start(c)) : void 0 === c.data("goodlayers_flexslider") && new a.goodlayers_flexslider(this, b)
        });
        var c = a(this).data("goodlayers_flexslider");
        switch (b) {
            case "play":
                c.play();
                break;
            case "pause":
                c.pause();
                break;
            case "stop":
                c.stop();
                break;
            case "next":
                c.flexAnimate(c.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                c.flexAnimate(c.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof b && c.flexAnimate(b, !0)
        }
    }
}(jQuery);
! function ($, window, undefined) {
    function getPixel(e, t) {
        return parseInt(e.css(t), 10) || 0
    }

    function within(e, t, o) {
        return t > e ? t : e > o ? o : e
    }

    function getViewport() {
        var e = window,
            t = "inner";
        return "innerWidth" in window || (t = "client", e = document.documentElement || document.body), {
            width: e[t + "Width"],
            height: e[t + "Height"]
        }
    }

    function removeHash() {
        var e = getScrollXY();
        window.location.hash = "", window.scrollTo(e.x, e.y)
    }

    function doAjax(e, t) {
        var e = "http://ilightbox.net/getSource/jsonp.php?url=" + encodeURIComponent(e).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
        $.ajax({
            url: e,
            dataType: "jsonp"
        }), iLCallback = function (e) {
            t.call(this, e)
        }
    }

    function findImageInElement(e) {
        var t = $("*", e),
            o = new Array;
        return t.each(function () {
            var e = "",
                t = this;
            if ("none" != $(t).css("background-image") ? e = $(t).css("background-image") : "undefined" != typeof $(t).attr("src") && "img" == t.nodeName.toLowerCase() && (e = $(t).attr("src")), -1 == e.indexOf("gradient")) {
                e = e.replace(/url\(\"/g, ""), e = e.replace(/url\(/g, ""), e = e.replace(/\"\)/g, ""), e = e.replace(/\)/g, "");
                for (var i = e.split(","), n = 0; n < i.length; n++)
                    if (i[n].length > 0 && -1 == $.inArray(i[n], o)) {
                        var a = "";
                        browser.msie && browser.version < 9 && (a = "?" + floor(3e3 * random())), o.push(i[n] + a)
                    }
            }
        }), o
    }

    function getExtension(e) {
        var t = e.split(".").pop().toLowerCase(),
            o = -1 !== t.indexOf("?") ? t.split("?").pop() : "";
        return t.replace(o, "")
    }

    function getTypeByExtension(e) {
        var t, o = getExtension(e);
        return t = -1 !== extensions.image.indexOf(o) ? "image" : -1 !== extensions.flash.indexOf(o) ? "flash" : -1 !== extensions.video.indexOf(o) ? "video" : "iframe"
    }

    function percentToValue(e, t) {
        return parseInt(t / 100 * e)
    }

    function parseURI(e) {
        var t = String(e).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
        return t ? {
            href: t[0] || "",
            protocol: t[1] || "",
            authority: t[2] || "",
            host: t[3] || "",
            hostname: t[4] || "",
            port: t[5] || "",
            pathname: t[6] || "",
            search: t[7] || "",
            hash: t[8] || ""
        } : null
    }

    function absolutizeURI(e, t) {
        function o(e) {
            var t = [];
            return e.replace(/^(\.\.?(\/|$))+/, "").replace(/\/(\.(\/|$))+/g, "/").replace(/\/\.\.$/, "/../").replace(/\/?[^\/]*/g, function (e) {
                "/.." === e ? t.pop() : t.push(e)
            }), t.join("").replace(/^\//, "/" === e.charAt(0) ? "/" : "")
        }
        return t = parseURI(t || ""), e = parseURI(e || ""), t && e ? (t.protocol || e.protocol) + (t.protocol || t.authority ? t.authority : e.authority) + o(t.protocol || t.authority || "/" === t.pathname.charAt(0) ? t.pathname : t.pathname ? (e.authority && !e.pathname ? "/" : "") + e.pathname.slice(0, e.pathname.lastIndexOf("/") + 1) + t.pathname : e.pathname) + (t.protocol || t.authority || t.pathname ? t.search : t.search || e.search) + t.hash : null
    }

    function version_compare(e, t, o) {
        this.php_js = this.php_js || {}, this.php_js.ENV = this.php_js.ENV || {};
        var i = 0,
            n = 0,
            a = 0,
            r = {
                dev: -6,
                alpha: -5,
                a: -5,
                beta: -4,
                b: -4,
                RC: -3,
                rc: -3,
                "#": -2,
                p: 1,
                pl: 1
            },
            s = function (e) {
                return e = ("" + e).replace(/[_\-+]/g, "."), e = e.replace(/([^.\d]+)/g, ".$1.").replace(/\.{2,}/g, "."), e.length ? e.split(".") : [-8]
            },
            l = function (e) {
                return e ? isNaN(e) ? r[e] || -7 : parseInt(e, 10) : 0
            };
        for (e = s(e), t = s(t), n = max(e.length, t.length), i = 0; n > i; i++)
            if (e[i] != t[i]) {
                if (e[i] = l(e[i]), t[i] = l(t[i]), e[i] < t[i]) {
                    a = -1;
                    break
                }
                if (e[i] > t[i]) {
                    a = 1;
                    break
                }
            }
        if (!o) return a;
        switch (o) {
            case ">":
            case "gt":
                return a > 0;
            case ">=":
            case "ge":
                return a >= 0;
            case "<=":
            case "le":
                return 0 >= a;
            case "==":
            case "=":
            case "eq":
                return 0 === a;
            case "<>":
            case "!=":
            case "ne":
                return 0 !== a;
            case "":
            case "<":
            case "lt":
                return 0 > a;
            default:
                return null
        }
    }

    function getScrollXY() {
        var e = 0,
            t = 0;
        return "number" == typeof window.pageYOffset ? (t = window.pageYOffset, e = window.pageXOffset) : document.body && (document.body.scrollLeft || document.body.scrollTop) ? (t = document.body.scrollTop, e = document.body.scrollLeft) : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) && (t = document.documentElement.scrollTop, e = document.documentElement.scrollLeft), {
            x: e,
            y: t
        }
    }

    function AC_QuickTimeVersion() {
        return gQTGeneratorVersion
    }

    function _QTComplain(e, t) {
        t = t.replace("%%", e), alert(t)
    }

    function _QTAddAttribute(e, t, o) {
        var i;
        return i = gTagAttrs[e + t], null == i && (i = gTagAttrs[t]), null != i ? (0 == t.indexOf(e) && null == o && (o = t.substring(e.length)), null == o && (o = t), o + '="' + i + '" ') : ""
    }

    function _QTAddObjectAttr(e, t) {
        return 0 == e.indexOf("emb#") ? "" : (0 == e.indexOf("obj#") && null == t && (t = e.substring(4)), _QTAddAttribute("obj#", e, t))
    }

    function _QTAddEmbedAttr(e, t) {
        return 0 == e.indexOf("obj#") ? "" : (0 == e.indexOf("emb#") && null == t && (t = e.substring(4)), _QTAddAttribute("emb#", e, t))
    }

    function _QTAddObjectParam(e, t) {
        var o, i = "",
            n = t ? " />" : ">";
        return -1 == e.indexOf("emb#") && (o = gTagAttrs["obj#" + e], null == o && (o = gTagAttrs[e]), 0 == e.indexOf("obj#") && (e = e.substring(4)), null != o && (i = '  <param name="' + e + '" value="' + o + '"' + n + "\n")), i
    }

    function _QTDeleteTagAttrs() {
        for (var e = 0; e < arguments.length; e++) {
            var t = arguments[e];
            delete gTagAttrs[t], delete gTagAttrs["emb#" + t], delete gTagAttrs["obj#" + t]
        }
    }

    function _QTGenerate(e, t, o) {
        if (4 > o.length || 0 != o.length % 2) return _QTComplain(e, gArgCountErr), "";
        gTagAttrs = [], gTagAttrs.src = o[0], gTagAttrs.width = o[1], gTagAttrs.height = o[2], gTagAttrs.classid = "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B", gTagAttrs.pluginspage = "http://www.apple.com/quicktime/download/", e = o[3], (null == e || "" == e) && (e = "6,0,2,0"), gTagAttrs.codebase = "http://www.apple.com/qtactivex/qtplugin.cab#version=" + e;
        for (var i, n = 4; n < o.length; n += 2) i = o[n].toLowerCase(), e = o[n + 1], "name" == i || "id" == i ? gTagAttrs.name = e : gTagAttrs[i] = e;
        o = "<object " + _QTAddObjectAttr("classid") + _QTAddObjectAttr("width") + _QTAddObjectAttr("height") + _QTAddObjectAttr("codebase") + _QTAddObjectAttr("name", "id") + _QTAddObjectAttr("tabindex") + _QTAddObjectAttr("hspace") + _QTAddObjectAttr("vspace") + _QTAddObjectAttr("border") + _QTAddObjectAttr("align") + _QTAddObjectAttr("class") + _QTAddObjectAttr("title") + _QTAddObjectAttr("accesskey") + _QTAddObjectAttr("noexternaldata") + ">\n" + _QTAddObjectParam("src", t), n = "  <embed " + _QTAddEmbedAttr("src") + _QTAddEmbedAttr("width") + _QTAddEmbedAttr("height") + _QTAddEmbedAttr("pluginspage") + _QTAddEmbedAttr("name") + _QTAddEmbedAttr("align") + _QTAddEmbedAttr("tabindex"), _QTDeleteTagAttrs("src", "width", "height", "pluginspage", "classid", "codebase", "name", "tabindex", "hspace", "vspace", "border", "align", "noexternaldata", "class", "title", "accesskey");
        for (i in gTagAttrs) e = gTagAttrs[i], null != e && (n += _QTAddEmbedAttr(i), o += _QTAddObjectParam(i, t));
        return o + n + "> </embed>\n</object>"
    }

    function QT_GenerateOBJECTText() {
        return _QTGenerate("QT_GenerateOBJECTText", !1, arguments)
    }
    var extensions = {
            flash: ["swf"],
            image: ["bmp", "gif", "jpeg", "jpg", "png", "tiff", "tif", "jfif", "jpe"],
            iframe: ["asp", "aspx", "cgi", "cfm", "htm", "html", "jsp", "php", "pl", "php3", "php4", "php5", "phtml", "rb", "rhtml", "shtml", "txt"],
            video: ["avi", "mov", "mpg", "mpeg", "movie", "mp4", "webm", "ogv", "ogg", "3gp", "m4v"]
        },
        $win = $(window),
        $doc = $(document),
        browser, transform, gpuAcceleration, fullScreenApi = "",
        supportTouch = !!("ontouchstart" in window) && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        clickEvent = supportTouch ? "itap.iLightBox" : "click.iLightBox",
        touchStartEvent = supportTouch ? "touchstart.iLightBox" : "mousedown.iLightBox",
        touchStopEvent = supportTouch ? "touchend.iLightBox" : "mouseup.iLightBox",
        touchMoveEvent = supportTouch ? "touchmove.iLightBox" : "mousemove.iLightBox",
        abs = Math.abs,
        sqrt = Math.sqrt,
        round = Math.round,
        max = Math.max,
        min = Math.min,
        floor = Math.floor,
        random = Math.random,
        pluginspages = {
            quicktime: "http://www.apple.com/quicktime/download",
            flash: "http://www.adobe.com/go/getflash"
        },
        iLightBox = function (e, t, o, i) {
            var n = this;
            if (n.options = t, n.selector = e.selector || e, n.context = e.context, n.instant = i, o.length < 1 ? n.attachItems() : n.items = o, n.vars = {
                    total: n.items.length,
                    start: 0,
                    current: null,
                    next: null,
                    prev: null,
                    BODY: $("body"),
                    loadRequests: 0,
                    overlay: $('<div class="ilightbox-overlay"></div>'),
                    loader: $('<div class="ilightbox-loader"><div></div></div>'),
                    toolbar: $('<div class="ilightbox-toolbar"></div>'),
                    innerToolbar: $('<div class="ilightbox-inner-toolbar"></div>'),
                    title: $('<div class="ilightbox-title"></div>'),
                    closeButton: $('<a class="ilightbox-close" title="' + n.options.text.close + '"></a>'),
                    fullScreenButton: $('<a class="ilightbox-fullscreen" title="' + n.options.text.enterFullscreen + '"></a>'),
                    innerPlayButton: $('<a class="ilightbox-play" title="' + n.options.text.slideShow + '"></a>'),
                    innerNextButton: $('<a class="ilightbox-next-button" title="' + n.options.text.next + '"></a>'),
                    innerPrevButton: $('<a class="ilightbox-prev-button" title="' + n.options.text.previous + '"></a>'),
                    holder: $('<div class="ilightbox-holder' + (supportTouch ? " supportTouch" : "") + '" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
                    nextPhoto: $('<div class="ilightbox-holder' + (supportTouch ? " supportTouch" : "") + ' ilightbox-next" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
                    prevPhoto: $('<div class="ilightbox-holder' + (supportTouch ? " supportTouch" : "") + ' ilightbox-prev" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
                    nextButton: $('<a class="ilightbox-button ilightbox-next-button" ondragstart="return false;" title="' + n.options.text.next + '"><span></span></a>'),
                    prevButton: $('<a class="ilightbox-button ilightbox-prev-button" ondragstart="return false;" title="' + n.options.text.previous + '"><span></span></a>'),
                    thumbnails: $('<div class="ilightbox-thumbnails" ondragstart="return false;"><div class="ilightbox-thumbnails-container"><a class="ilightbox-thumbnails-dragger"></a><div class="ilightbox-thumbnails-grid"></div></div></div>'),
                    thumbs: !1,
                    nextLock: !1,
                    prevLock: !1,
                    hashLock: !1,
                    isMobile: !1,
                    mobileMaxWidth: 980,
                    isInFullScreen: !1,
                    isSwipe: !1,
                    mouseID: 0,
                    cycleID: 0,
                    isPaused: 0
                }, n.vars.hideableElements = n.vars.nextButton.add(n.vars.prevButton), n.normalizeItems(), n.availPlugins(), n.options.startFrom = n.options.startFrom > 0 && n.options.startFrom >= n.vars.total ? n.vars.total - 1 : n.options.startFrom, n.options.startFrom = n.options.randomStart ? floor(random() * n.vars.total) : n.options.startFrom, n.vars.start = n.options.startFrom, i ? n.instantCall() : n.patchItemsEvents(), n.options.linkId && (n.hashChangeHandler(), $win.iLightBoxHashChange(function () {
                    n.hashChangeHandler()
                })), supportTouch) {
                var a = /(click|mouseenter|mouseleave|mouseover|mouseout)/gi,
                    r = "itap";
                n.options.caption.show = n.options.caption.show.replace(a, r), n.options.caption.hide = n.options.caption.hide.replace(a, r), n.options.social.show = n.options.social.show.replace(a, r), n.options.social.hide = n.options.social.hide.replace(a, r)
            }
            n.options.controls.arrows && $.extend(n.options.styles, {
                nextOffsetX: 0,
                prevOffsetX: 0,
                nextOpacity: 0,
                prevOpacity: 0
            })
        };
    iLightBox.prototype = {
            showLoader: function () {
                var e = this;
                e.vars.loadRequests += 1, "horizontal" == e.options.path.toLowerCase() ? e.vars.loader.stop().animate({
                    top: "-30px"
                }, e.options.show.speed, "easeOutCirc") : e.vars.loader.stop().animate({
                    left: "-30px"
                }, e.options.show.speed, "easeOutCirc")
            },
            hideLoader: function () {
                var e = this;
                e.vars.loadRequests -= 1, e.vars.loadRequests = e.vars.loadRequests < 0 ? 0 : e.vars.loadRequests, "horizontal" == e.options.path.toLowerCase() ? e.vars.loadRequests <= 0 && e.vars.loader.stop().animate({
                    top: "-192px"
                }, e.options.show.speed, "easeInCirc") : e.vars.loadRequests <= 0 && e.vars.loader.stop().animate({
                    left: "-192px"
                }, e.options.show.speed, "easeInCirc")
            },
            createUI: function () {
                var e = this;
                e.ui = {
                    currentElement: e.vars.holder,
                    nextElement: e.vars.nextPhoto,
                    prevElement: e.vars.prevPhoto,
                    currentItem: e.vars.current,
                    nextItem: e.vars.next,
                    prevItem: e.vars.prev,
                    hide: function () {
                        e.closeAction()
                    },
                    refresh: function () {
                        arguments.length > 0 ? e.repositionPhoto(!0) : e.repositionPhoto()
                    },
                    fullscreen: function () {
                        e.fullScreenAction()
                    }
                }
            },
            attachItems: function () {
                var iL = this,
                    itemsObject = new Array,
                    items = new Array;
                $(iL.selector, iL.context).each(function () {
                    var t = $(this),
                        URL = t.attr(iL.options.attr) || null,
                        options = t.data("options") && eval("({" + t.data("options") + "})") || {},
                        caption = t.data("caption"),
                        title = t.data("title"),
                        type = t.data("type") || getTypeByExtension(URL);
                    items.push({
                        URL: URL,
                        caption: caption,
                        title: title,
                        type: type,
                        options: options
                    }), iL.instant || itemsObject.push(t)
                }), iL.items = items, iL.itemsObject = itemsObject
            },
            normalizeItems: function () {
                var e = this,
                    t = new Array;
                $.each(e.items, function (o, i) {
                    "string" == typeof i && (i = {
                        url: i
                    });
                    var n = i.url || i.URL || null,
                        a = i.options || {},
                        r = i.caption || null,
                        s = i.title || null,
                        l = i.type ? i.type.toLowerCase() : getTypeByExtension(n),
                        c = "object" != typeof n ? getExtension(n) : "";
                    a.thumbnail = a.thumbnail || ("image" == l ? n : null), a.videoType = a.videoType || null, a.skin = a.skin || e.options.skin, a.width = a.width || null, a.height = a.height || null, a.mousewheel = "undefined" != typeof a.mousewheel ? a.mousewheel : !0, a.swipe = "undefined" != typeof a.swipe ? a.swipe : !0, a.social = "undefined" != typeof a.social ? a.social : e.options.social.buttons && $.extend({}, {}, e.options.social.buttons), "video" == l && (a.html5video = "undefined" != typeof a.html5video ? a.html5video : {}, a.html5video.webm = a.html5video.webm || a.html5video.WEBM || null, a.html5video.controls = "undefined" != typeof a.html5video.controls ? a.html5video.controls : "controls", a.html5video.preload = a.html5video.preload || "metadata", a.html5video.autoplay = "undefined" != typeof a.html5video.autoplay ? a.html5video.autoplay : !1), a.width && a.height || ("video" == l ? (a.width = 1280, a.height = 720) : "iframe" == l ? (a.width = "100%", a.height = "90%") : "flash" == l && (a.width = 1280, a.height = 720)), delete i.url, i.index = o, i.URL = n, i.caption = r, i.title = s, i.type = l, i.options = a, i.ext = c, t.push(i)
                }), e.items = t
            },
            instantCall: function () {
                var e = this,
                    t = e.vars.start;
                e.vars.current = t, e.vars.next = e.items[t + 1] ? t + 1 : null, e.vars.prev = e.items[t - 1] ? t - 1 : null, e.addContents(), e.patchEvents()
            },
            addContents: function () {
                var e = this,
                    t = e.vars,
                    o = e.options,
                    i = getViewport(),
                    n = o.path.toLowerCase(),
                    a = t.total > 0 && e.items.filter(function (e, t, i) {
                        return -1 === ["image", "flash", "video"].indexOf(e.type) && "undefined" == typeof e.recognized && (o.smartRecognition || e.options.smartRecognition)
                    }),
                    r = a.length > 0;
                o.mobileOptimizer && !o.innerToolbar && (t.isMobile = i.width <= t.mobileMaxWidth), t.overlay.addClass(o.skin).hide().css("opacity", o.overlay.opacity), o.linkId && t.overlay[0].setAttribute("linkid", o.linkId), o.controls.toolbar && (t.toolbar.addClass(o.skin).append(t.closeButton), o.controls.fullscreen && t.toolbar.append(t.fullScreenButton), o.controls.slideshow && t.toolbar.append(t.innerPlayButton), t.total > 1 && t.toolbar.append(t.innerPrevButton).append(t.innerNextButton)), t.BODY.addClass("ilightbox-noscroll").append(t.overlay).append(t.loader).append(t.holder).append(t.nextPhoto).append(t.prevPhoto), o.innerToolbar || t.BODY.append(t.toolbar), o.controls.arrows && t.BODY.append(t.nextButton).append(t.prevButton), o.controls.thumbnail && t.total > 1 && (t.BODY.append(t.thumbnails), t.thumbnails.addClass(o.skin).addClass("ilightbox-" + n), $("div.ilightbox-thumbnails-grid", t.thumbnails).empty(), t.thumbs = !0);
                var s = "horizontal" == o.path.toLowerCase() ? {
                    left: parseInt(i.width / 2 - t.loader.outerWidth() / 2)
                } : {
                    top: parseInt(i.height / 2 - t.loader.outerHeight() / 2)
                };
                t.loader.addClass(o.skin).css(s), t.nextButton.add(t.prevButton).addClass(o.skin), "horizontal" == n && t.loader.add(t.nextButton).add(t.prevButton).addClass("horizontal"), t.BODY[t.isMobile ? "addClass" : "removeClass"]("isMobile"), o.infinite || (t.prevButton.add(t.prevButton).add(t.innerPrevButton).add(t.innerNextButton).removeClass("disabled"), 0 == t.current && t.prevButton.add(t.innerPrevButton).addClass("disabled"), t.current >= t.total - 1 && t.nextButton.add(t.innerNextButton).addClass("disabled")), o.show.effect ? (t.overlay.stop().fadeIn(o.show.speed), t.toolbar.stop().fadeIn(o.show.speed)) : (t.overlay.show(), t.toolbar.show());
                var l = a.length;
                r ? (e.showLoader(), $.each(a, function (i, n) {
                    var a = function (i) {
                        var n = -1,
                            a = (e.items.filter(function (e, t, o) {
                                return e.URL == i.url && (n = t), e.URL == i.url
                            }), e.items[n]);
                        i && $.extend(!0, a, {
                            URL: i.source,
                            type: i.type,
                            recognized: !0,
                            options: {
                                html5video: i.html5video,
                                width: "image" == i.type ? 0 : i.width || a.width,
                                height: "image" == i.type ? 0 : i.height || a.height,
                                thumbnail: a.options.thumbnail || i.thumbnail
                            }
                        }), l--, 0 == l && (e.hideLoader(), t.dontGenerateThumbs = !1, e.generateThumbnails(), o.show.effect ? setTimeout(function () {
                            e.generateBoxes()
                        }, o.show.speed) : e.generateBoxes())
                    };
                    e.ogpRecognition(this, a)
                })) : o.show.effect ? setTimeout(function () {
                    e.generateBoxes()
                }, o.show.speed) : e.generateBoxes(), e.createUI(), window.iLightBox = {
                    close: function () {
                        e.closeAction()
                    },
                    fullscreen: function () {
                        e.fullScreenAction()
                    },
                    moveNext: function () {
                        e.moveTo("next")
                    },
                    movePrev: function () {
                        e.moveTo("prev")
                    },
                    goTo: function (t) {
                        e.goTo(t)
                    },
                    refresh: function () {
                        e.refresh()
                    },
                    reposition: function () {
                        arguments.length > 0 ? e.repositionPhoto(!0) : e.repositionPhoto()
                    },
                    setOption: function (t) {
                        e.setOption(t)
                    },
                    destroy: function () {
                        e.closeAction(), e.dispatchItemsEvents()
                    }
                }, o.linkId && (t.hashLock = !0, window.location.hash = o.linkId + "/" + t.current, setTimeout(function () {
                    t.hashLock = !1
                }, 55)), o.slideshow.startPaused || (e.resume(), t.innerPlayButton.removeClass("ilightbox-play").addClass("ilightbox-pause")), "function" == typeof e.options.callback.onOpen && e.options.callback.onOpen.call(e)
            },
            loadContent: function (e, t, o) {
                var i, n, a = this;
                switch (a.createUI(), e.speed = o || a.options.effects.loadedFadeSpeed, "current" == t && (e.options.mousewheel ? a.vars.lockWheel = !1 : a.vars.lockWheel = !0, e.options.swipe ? a.vars.lockSwipe = !1 : a.vars.lockSwipe = !0), t) {
                    case "current":
                        i = a.vars.holder, n = a.vars.current;
                        break;
                    case "next":
                        i = a.vars.nextPhoto, n = a.vars.next;
                        break;
                    case "prev":
                        i = a.vars.prevPhoto, n = a.vars.prev
                }
                if (i.removeAttr("style class").addClass("ilightbox-holder" + (supportTouch ? " supportTouch" : "")).addClass(e.options.skin), $("div.ilightbox-inner-toolbar", i).remove(), e.title || a.options.innerToolbar) {
                    var r = a.vars.innerToolbar.clone();
                    if (e.title && a.options.show.title) {
                        var s = a.vars.title.clone();
                        s.empty().html(e.title), r.append(s)
                    }
                    a.options.innerToolbar && r.append(a.vars.total > 1 ? a.vars.toolbar.clone() : a.vars.toolbar), i.prepend(r)
                }
                a.loadSwitcher(e, i, n, t)
            },
            loadSwitcher: function (e, t, o, i) {
                var n = this,
                    a = n.options,
                    r = {
                        element: t,
                        position: o
                    };
                switch (e.type) {
                    case "image":
                        "function" == typeof a.callback.onBeforeLoad && a.callback.onBeforeLoad.call(n, n.ui, o), "function" == typeof e.options.onBeforeLoad && e.options.onBeforeLoad.call(n, r), n.loadImage(e.URL, function (s) {
                            "function" == typeof a.callback.onAfterLoad && a.callback.onAfterLoad.call(n, n.ui, o), "function" == typeof e.options.onAfterLoad && e.options.onAfterLoad.call(n, r);
                            var l = s ? s.width : 400,
                                c = s ? s.height : 200;
                            t.data({
                                naturalWidth: l,
                                naturalHeight: c
                            }), $("div.ilightbox-container", t).empty().append(s ? '<img src="' + e.URL + '" class="ilightbox-image" />' : '<span class="ilightbox-alert">' + a.errors.loadImage + "</span>"), "function" == typeof a.callback.onRender && a.callback.onRender.call(n, n.ui, o), "function" == typeof e.options.onRender && e.options.onRender.call(n, r), n.configureHolder(e, i, t)
                        });
                        break;
                    case "video":
                        t.data({
                            naturalWidth: e.options.width,
                            naturalHeight: e.options.height
                        }), n.addContent(t, e), "function" == typeof a.callback.onRender && a.callback.onRender.call(n, n.ui, o), "function" == typeof e.options.onRender && e.options.onRender.call(n, r), n.configureHolder(e, i, t);
                        break;
                    case "iframe":
                        n.showLoader(), t.data({
                            naturalWidth: e.options.width,
                            naturalHeight: e.options.height
                        });
                        var s = n.addContent(t, e);
                        "function" == typeof a.callback.onRender && a.callback.onRender.call(n, n.ui, o), "function" == typeof e.options.onRender && e.options.onRender.call(n, r), "function" == typeof a.callback.onBeforeLoad && a.callback.onBeforeLoad.call(n, n.ui, o), "function" == typeof e.options.onBeforeLoad && e.options.onBeforeLoad.call(n, r), s.bind("load", function () {
                            "function" == typeof a.callback.onAfterLoad && a.callback.onAfterLoad.call(n, n.ui, o), "function" == typeof e.options.onAfterLoad && e.options.onAfterLoad.call(n, r), n.hideLoader(), n.configureHolder(e, i, t), s.unbind("load")
                        });
                        break;
                    case "inline":
                        var s = $(e.URL),
                            l = n.addContent(t, e),
                            c = findImageInElement(t);
                        t.data({
                            naturalWidth: n.items[o].options.width || s.outerWidth(),
                            naturalHeight: n.items[o].options.height || s.outerHeight()
                        }), l.children().eq(0).show(), "function" == typeof a.callback.onRender && a.callback.onRender.call(n, n.ui, o), "function" == typeof e.options.onRender && e.options.onRender.call(n, r), "function" == typeof a.callback.onBeforeLoad && a.callback.onBeforeLoad.call(n, n.ui, o), "function" == typeof e.options.onBeforeLoad && e.options.onBeforeLoad.call(n, r), n.loadImage(c, function () {
                            "function" == typeof a.callback.onAfterLoad && a.callback.onAfterLoad.call(n, n.ui, o), "function" == typeof e.options.onAfterLoad && e.options.onAfterLoad.call(n, r), n.configureHolder(e, i, t)
                        });
                        break;
                    case "flash":
                        var s = n.addContent(t, e);
                        t.data({
                            naturalWidth: n.items[o].options.width || s.outerWidth(),
                            naturalHeight: n.items[o].options.height || s.outerHeight()
                        }), "function" == typeof a.callback.onRender && a.callback.onRender.call(n, n.ui, o), "function" == typeof e.options.onRender && e.options.onRender.call(n, r), n.configureHolder(e, i, t);
                        break;
                    case "ajax":
                        var u = e.options.ajax || {};
                        "function" == typeof a.callback.onBeforeLoad && a.callback.onBeforeLoad.call(n, n.ui, o), "function" == typeof e.options.onBeforeLoad && e.options.onBeforeLoad.call(n, r), n.showLoader(), $.ajax({
                            url: e.URL || a.ajaxSetup.url,
                            data: u.data || null,
                            dataType: u.dataType || "html",
                            type: u.type || a.ajaxSetup.type,
                            cache: u.cache || a.ajaxSetup.cache,
                            crossDomain: u.crossDomain || a.ajaxSetup.crossDomain,
                            global: u.global || a.ajaxSetup.global,
                            ifModified: u.ifModified || a.ajaxSetup.ifModified,
                            username: u.username || a.ajaxSetup.username,
                            password: u.password || a.ajaxSetup.password,
                            beforeSend: u.beforeSend || a.ajaxSetup.beforeSend,
                            complete: u.complete || a.ajaxSetup.complete,
                            success: function (s, l, c) {
                                n.hideLoader();
                                var h = $(s),
                                    d = $("div.ilightbox-container", t),
                                    p = n.items[o].options.width || parseInt(h[0].getAttribute("width")),
                                    f = n.items[o].options.height || parseInt(h[0].getAttribute("height")),
                                    g = h[0].getAttribute("width") && h[0].getAttribute("height") ? {
                                        overflow: "hidden"
                                    } : {};
                                d.empty().append($('<div class="ilightbox-wrapper"></div>').css(g).html(h)), t.show().data({
                                    naturalWidth: p || d.outerWidth(),
                                    naturalHeight: f || d.outerHeight()
                                }).hide(), "function" == typeof a.callback.onRender && a.callback.onRender.call(n, n.ui, o), "function" == typeof e.options.onRender && e.options.onRender.call(n, r);
                                var m = findImageInElement(t);
                                n.loadImage(m, function () {
                                    "function" == typeof a.callback.onAfterLoad && a.callback.onAfterLoad.call(n, n.ui, o), "function" == typeof e.options.onAfterLoad && e.options.onAfterLoad.call(n, r), n.configureHolder(e, i, t)
                                }), a.ajaxSetup.success(s, l, c), "function" == typeof u.success && u.success(s, l, c)
                            },
                            error: function (s, l, c) {
                                "function" == typeof a.callback.onAfterLoad && a.callback.onAfterLoad.call(n, n.ui, o), "function" == typeof e.options.onAfterLoad && e.options.onAfterLoad.call(n, r), n.hideLoader(), $("div.ilightbox-container", t).empty().append('<span class="ilightbox-alert">' + a.errors.loadContents + "</span>"), n.configureHolder(e, i, t), a.ajaxSetup.error(s, l, c), "function" == typeof u.error && u.error(s, l, c)
                            }
                        });
                        break;
                    case "html":
                        var s, h = e.URL;
                        if (container = $("div.ilightbox-container", t), h[0].nodeName) s = h.clone();
                        else {
                            var d = $(h);
                            s = d.selector ? $("<div>" + d + "</div>") : d
                        }
                        var p = n.items[o].options.width || parseInt(s.attr("width")),
                            f = n.items[o].options.height || parseInt(s.attr("height"));
                        n.addContent(t, e), s.appendTo(document.documentElement).hide(), "function" == typeof a.callback.onRender && a.callback.onRender.call(n, n.ui, o), "function" == typeof e.options.onRender && e.options.onRender.call(n, r);
                        var c = findImageInElement(t);
                        "function" == typeof a.callback.onBeforeLoad && a.callback.onBeforeLoad.call(n, n.ui, o), "function" == typeof e.options.onBeforeLoad && e.options.onBeforeLoad.call(n, r), n.loadImage(c, function () {
                            "function" == typeof a.callback.onAfterLoad && a.callback.onAfterLoad.call(n, n.ui, o), "function" == typeof e.options.onAfterLoad && e.options.onAfterLoad.call(n, r), t.show().data({
                                naturalWidth: p || container.outerWidth(),
                                naturalHeight: f || container.outerHeight()
                            }).hide(), s.remove(), n.configureHolder(e, i, t)
                        })
                }
            },
            configureHolder: function (e, t, o) {
                var i = this,
                    n = i.vars,
                    a = i.options;
                if ("current" != t && ("next" == t ? o.addClass("ilightbox-next") : o.addClass("ilightbox-prev")), "current" == t) var r = n.current;
                else if ("next" == t) var s = a.styles.nextOpacity,
                    r = n.next;
                else var s = a.styles.prevOpacity,
                    r = n.prev;
                var l = {
                    element: o,
                    position: r
                };
                i.items[r].options.width = i.items[r].options.width || 0, i.items[r].options.height = i.items[r].options.height || 0, "current" == t ? a.show.effect ? o.css(transform, gpuAcceleration).fadeIn(e.speed, function () {
                    if (o.css(transform, ""), e.caption) {
                        i.setCaption(e, o);
                        var t = $("div.ilightbox-caption", o),
                            n = parseInt(t.outerHeight() / o.outerHeight() * 100);
                        a.caption.start & 50 >= n && t.fadeIn(a.effects.fadeSpeed)
                    }
                    var s = e.options.social;
                    s && (i.setSocial(s, e.URL, o), a.social.start && $("div.ilightbox-social", o).fadeIn(a.effects.fadeSpeed)), i.generateThumbnails(), "function" == typeof a.callback.onShow && a.callback.onShow.call(i, i.ui, r), "function" == typeof e.options.onShow && e.options.onShow.call(i, l)
                }) : (o.show(), i.generateThumbnails(), "function" == typeof a.callback.onShow && a.callback.onShow.call(i, i.ui, r), "function" == typeof e.options.onShow && e.options.onShow.call(i, l)) : a.show.effect ? o.fadeTo(e.speed, s, function () {
                    "next" == t ? n.nextLock = !1 : n.prevLock = !1, i.generateThumbnails(), "function" == typeof a.callback.onShow && a.callback.onShow.call(i, i.ui, r), "function" == typeof e.options.onShow && e.options.onShow.call(i, l)
                }) : (o.css({
                    opacity: s
                }).show(), "next" == t ? n.nextLock = !1 : n.prevLock = !1, i.generateThumbnails(), "function" == typeof a.callback.onShow && a.callback.onShow.call(i, i.ui, r), "function" == typeof e.options.onShow && e.options.onShow.call(i, l)), setTimeout(function () {
                    i.repositionPhoto()
                }, 0)
            },
            generateBoxes: function () {
                var e = this,
                    t = e.vars,
                    o = e.options;
                o.infinite && t.total >= 3 ? (t.current == t.total - 1 && (t.next = 0), 0 == t.current && (t.prev = t.total - 1)) : o.infinite = !1, e.loadContent(e.items[t.current], "current", o.show.speed), e.items[t.next] && e.loadContent(e.items[t.next], "next", o.show.speed), e.items[t.prev] && e.loadContent(e.items[t.prev], "prev", o.show.speed)
            },
            generateThumbnails: function () {
                var e = this,
                    t = e.vars,
                    o = e.options,
                    i = null;
                if (t.thumbs && !e.vars.dontGenerateThumbs) {
                    var n = t.thumbnails,
                        a = $("div.ilightbox-thumbnails-container", n),
                        r = $("div.ilightbox-thumbnails-grid", a),
                        s = 0;
                    r.removeAttr("style").empty(), $.each(e.items, function (l, c) {
                        var u = t.current == l ? "ilightbox-active" : "",
                            h = t.current == l ? o.thumbnails.activeOpacity : o.thumbnails.normalOpacity,
                            d = c.options.thumbnail,
                            p = $('<div class="ilightbox-thumbnail"></div>'),
                            f = $('<div class="ilightbox-thumbnail-icon"></div>');
                        p.css({
                            opacity: 0
                        }).addClass(u), "video" != c.type && "flash" != c.type || "undefined" != typeof c.options.icon ? c.options.icon && (f.addClass("ilightbox-thumbnail-" + c.options.icon), p.append(f)) : (f.addClass("ilightbox-thumbnail-video"), p.append(f)), d && e.loadImage(d, function (t) {
                            s++, t ? p.data({
                                naturalWidth: t.width,
                                naturalHeight: t.height
                            }).append('<img src="' + d + '" border="0" />') : p.data({
                                naturalWidth: o.thumbnails.maxWidth,
                                naturalHeight: o.thumbnails.maxHeight
                            }), clearTimeout(i), i = setTimeout(function () {
                                e.positionThumbnails(n, a, r)
                            }, 20), setTimeout(function () {
                                p.fadeTo(o.effects.loadedFadeSpeed, h)
                            }, 20 * s)
                        }), r.append(p)
                    }), e.vars.dontGenerateThumbs = !0
                }
            },
            positionThumbnails: function (e, t, o) {
                var i = this,
                    n = i.vars,
                    a = i.options,
                    r = getViewport(),
                    s = a.path.toLowerCase();
                e || (e = n.thumbnails), t || (t = $("div.ilightbox-thumbnails-container", e)), o || (o = $("div.ilightbox-thumbnails-grid", t));
                var l = $(".ilightbox-thumbnail", o),
                    c = "horizontal" == s ? r.width - a.styles.pageOffsetX : l.eq(0).outerWidth() - a.styles.pageOffsetX,
                    u = "horizontal" == s ? l.eq(0).outerHeight() - a.styles.pageOffsetY : r.height - a.styles.pageOffsetY,
                    h = "horizontal" == s ? 0 : c,
                    d = "horizontal" == s ? u : 0,
                    p = $(".ilightbox-active", o),
                    f = {};
                arguments.length < 3 && (l.css({
                    opacity: a.thumbnails.normalOpacity
                }), p.css({
                    opacity: a.thumbnails.activeOpacity
                })), l.each(function (e) {
                    var t = $(this),
                        o = t.data(),
                        n = "horizontal" == s ? 0 : a.thumbnails.maxWidth;
                    height = "horizontal" == s ? a.thumbnails.maxHeight : 0, dims = i.getNewDimenstions(n, height, o.naturalWidth, o.naturalHeight, !0), t.css({
                        width: dims.width,
                        height: dims.height
                    }), "horizontal" == s && t.css({
                        "float": "left"
                    }), "horizontal" == s ? h += t.outerWidth() : d += t.outerHeight()
                }), f = {
                    width: h,
                    height: d
                }, o.css(f), f = {};
                var g = o.offset(),
                    m = p.length ? p.offset() : {
                        top: parseInt(u / 2),
                        left: parseInt(c / 2)
                    };
                g.top = g.top - $doc.scrollTop(), g.left = g.left - $doc.scrollLeft(), m.top = m.top - g.top - $doc.scrollTop(), m.left = m.left - g.left - $doc.scrollLeft(), "horizontal" == s ? (f.top = 0, f.left = parseInt(c / 2 - m.left - p.outerWidth() / 2)) : (f.top = parseInt(u / 2 - m.top - p.outerHeight() / 2), f.left = 0), arguments.length < 3 ? o.stop().animate(f, a.effects.repositionSpeed, "easeOutCirc") : o.css(f)
            },
            loadImage: function (e, t) {
                $.isArray(e) || (e = [e]);
                var o = this,
                    i = e.length;
                i > 0 ? (o.showLoader(), $.each(e, function (n, a) {
                    var r = new Image;
                    r.onload = function () {
                        i -= 1, 0 == i && (o.hideLoader(), t(r))
                    }, r.onerror = r.onabort = function () {
                        i -= 1, 0 == i && (o.hideLoader(), t(!1))
                    }, r.src = e[n]
                })) : t(!1)
            },
            patchItemsEvents: function () {
                var e = this,
                    t = e.vars,
                    o = "click.iL",
                    i = supportTouch ? "click.iL" : "itap.iL";
                if (e.context && e.selector) {
                    var n = $(e.selector, e.context);
                    $(e.context).on(o, e.selector, function () {
                        var o = $(this),
                            i = n.index(o);
                        return t.current = i, t.next = e.items[i + 1] ? i + 1 : null, t.prev = e.items[i - 1] ? i - 1 : null, e.addContents(), e.patchEvents(), !1
                    }).on(i, e.selector, function () {
                        return !1
                    })
                } else $.each(e.itemsObject, function (n, a) {
                    a.on(o, function () {
                        return t.current = n, t.next = e.items[n + 1] ? n + 1 : null, t.prev = e.items[n - 1] ? n - 1 : null, e.addContents(), e.patchEvents(), !1
                    }).on(i, function () {
                        return !1
                    })
                })
            },
            dispatchItemsEvents: function () {
                var e = this;
                e.vars, e.options;
                e.context && e.selector ? $(e.context).off(".iL", e.selector) : $.each(e.itemsObject, function (e, t) {
                    t.off(".iL")
                })
            },
            refresh: function () {
                var e = this;
                e.dispatchItemsEvents(), e.attachItems(), e.normalizeItems(), e.patchItemsEvents()
            },
            patchEvents: function () {
                function e(e) {
                    o.isMobile || (o.mouseID || o.hideableElements.show(), o.mouseID = clearTimeout(o.mouseID), -1 === c.indexOf(e.target) && (o.mouseID = setTimeout(function () {
                        o.hideableElements.hide(), o.mouseID = clearTimeout(o.mouseID)
                    }, 3e3)))
                }
                var t = this,
                    o = t.vars,
                    i = t.options,
                    n = i.path.toLowerCase(),
                    a = $(".ilightbox-holder"),
                    r = fullScreenApi.fullScreenEventName + ".iLightBox",
                    s = 1e3,
                    l = verticalDistanceThreshold = 100,
                    c = [o.nextButton[0], o.prevButton[0], o.nextButton[0].firstChild, o.prevButton[0].firstChild];
                $win.bind("resize.iLightBox", function () {
                    var e = getViewport();
                    i.mobileOptimizer && !i.innerToolbar && (o.isMobile = e.width <= o.mobileMaxWidth), o.BODY[o.isMobile ? "addClass" : "removeClass"]("isMobile"), t.repositionPhoto(null), supportTouch && (clearTimeout(o.setTime), o.setTime = setTimeout(function () {
                        var e = getScrollXY().y;
                        window.scrollTo(0, e - 30), window.scrollTo(0, e + 30), window.scrollTo(0, e)
                    }, 2e3)), o.thumbs && t.positionThumbnails()
                }).bind("keydown.iLightBox", function (e) {
                    if (i.controls.keyboard) switch (e.keyCode) {
                        case 13:
                            e.shiftKey && i.keyboard.shift_enter && t.fullScreenAction();
                            break;
                        case 27:
                            i.keyboard.esc && t.closeAction();
                            break;
                        case 37:
                            i.keyboard.left && !o.lockKey && t.moveTo("prev");
                            break;
                        case 38:
                            i.keyboard.up && !o.lockKey && t.moveTo("prev");
                            break;
                        case 39:
                            i.keyboard.right && !o.lockKey && t.moveTo("next");
                            break;
                        case 40:
                            i.keyboard.down && !o.lockKey && t.moveTo("next")
                    }
                }), fullScreenApi.supportsFullScreen && $win.bind(r, function () {
                    t.doFullscreen()
                });
                var u = [i.caption.show + ".iLightBox", i.caption.hide + ".iLightBox", i.social.show + ".iLightBox", i.social.hide + ".iLightBox"].filter(function (e, t, o) {
                        return o.lastIndexOf(e) === t
                    }),
                    h = "";
                $.each(u, function (e, t) {
                    0 != e && (h += " "), h += t
                }), $doc.on(clickEvent, ".ilightbox-overlay", function () {
                    i.overlay.blur && t.closeAction()
                }).on(clickEvent, ".ilightbox-next, .ilightbox-next-button", function () {
                    t.moveTo("next")
                }).on(clickEvent, ".ilightbox-prev, .ilightbox-prev-button", function () {
                    t.moveTo("prev")
                }).on(clickEvent, ".ilightbox-thumbnail", function () {
                    var e = $(this),
                        i = $(".ilightbox-thumbnail", o.thumbnails),
                        n = i.index(e);
                    n != o.current && t.goTo(n)
                }).on(h, ".ilightbox-holder:not(.ilightbox-next, .ilightbox-prev)", function (e) {
                    var t = $("div.ilightbox-caption", o.holder),
                        n = $("div.ilightbox-social", o.holder),
                        a = i.effects.fadeSpeed;
                    o.nextLock || o.prevLock ? (e.type != i.caption.show || t.is(":visible") ? e.type == i.caption.hide && t.is(":visible") && t.fadeOut(a) : t.fadeIn(a), e.type != i.social.show || n.is(":visible") ? e.type == i.social.hide && n.is(":visible") && n.fadeOut(a) : n.fadeIn(a)) : (e.type != i.caption.show || t.is(":visible") ? e.type == i.caption.hide && t.is(":visible") && t.stop().fadeOut(a) : t.stop().fadeIn(a), e.type != i.social.show || n.is(":visible") ? e.type == i.social.hide && n.is(":visible") && n.stop().fadeOut(a) : n.stop().fadeIn(a))
                }).on("mouseenter.iLightBox mouseleave.iLightBox", ".ilightbox-wrapper", function (e) {
                    "mouseenter" == e.type ? o.lockWheel = !0 : o.lockWheel = !1
                }).on(clickEvent, ".ilightbox-toolbar a.ilightbox-close, .ilightbox-toolbar a.ilightbox-fullscreen, .ilightbox-toolbar a.ilightbox-play, .ilightbox-toolbar a.ilightbox-pause", function () {
                    var e = $(this);
                    e.hasClass("ilightbox-fullscreen") ? t.fullScreenAction() : e.hasClass("ilightbox-play") ? (t.resume(), e.addClass("ilightbox-pause").removeClass("ilightbox-play")) : e.hasClass("ilightbox-pause") ? (t.pause(), e.addClass("ilightbox-play").removeClass("ilightbox-pause")) : t.closeAction()
                }).on(touchMoveEvent, ".ilightbox-overlay, .ilightbox-thumbnails-container", function (e) {
                    e.preventDefault()
                }), i.controls.arrows && !supportTouch && $doc.on("mousemove.iLightBox", e), i.controls.slideshow && i.slideshow.pauseOnHover && $doc.on("mouseenter.iLightBox mouseleave.iLightBox", ".ilightbox-holder:not(.ilightbox-next, .ilightbox-prev)", function (e) {
                    "mouseenter" == e.type && o.cycleID ? t.pause() : "mouseleave" == e.type && o.isPaused && t.resume()
                });
                var d = $(".ilightbox-overlay, .ilightbox-holder, .ilightbox-thumbnails");
                i.controls.mousewheel && d.on("mousewheel.iLightBox", function (e, i) {
                    o.lockWheel || (e.preventDefault(), 0 > i ? t.moveTo("next") : i > 0 && t.moveTo("prev"))
                }), i.controls.swipe && a.on(touchStartEvent, function (e) {
                    function r(e) {
                        var t = $(this),
                            o = m[e],
                            i = [v.coords[0] - h.coords[0], v.coords[1] - h.coords[1]];
                        t[0].style["horizontal" == n ? "left" : "top"] = ("horizontal" == n ? o.left - i[0] : o.top - i[1]) + "px"
                    }

                    function c(e) {
                        if (v) {
                            var t = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
                            h = {
                                time: (new Date).getTime(),
                                coords: [t.pageX - f, t.pageY - p]
                            }, a.each(r), e.preventDefault()
                        }
                    }

                    function u() {
                        a.each(function () {
                            var e = $(this),
                                t = e.data("offset") || {
                                    top: e.offset().top - p,
                                    left: e.offset().left - f
                                },
                                o = t.top,
                                i = t.left;
                            e.css(transform, gpuAcceleration).stop().animate({
                                top: o,
                                left: i
                            }, 500, "easeOutCirc", function () {
                                e.css(transform, "")
                            })
                        })
                    }
                    if (!(o.nextLock || o.prevLock || 1 == o.total || o.lockSwipe)) {
                        o.BODY.addClass("ilightbox-closedhand");
                        var h, d = e.originalEvent.touches ? e.originalEvent.touches[0] : e,
                            p = $doc.scrollTop(),
                            f = $doc.scrollLeft(),
                            g = [a.eq(0).offset(), a.eq(1).offset(), a.eq(2).offset()],
                            m = [{
                                top: g[0].top - p,
                                left: g[0].left - f
                            }, {
                                top: g[1].top - p,
                                left: g[1].left - f
                            }, {
                                top: g[2].top - p,
                                left: g[2].left - f
                            }],
                            v = {
                                time: (new Date).getTime(),
                                coords: [d.pageX - f, d.pageY - p]
                            };
                        a.bind(touchMoveEvent, c), $doc.one(touchStopEvent, function (e) {
                            a.unbind(touchMoveEvent, c), o.BODY.removeClass("ilightbox-closedhand"), v && h && ("horizontal" == n && h.time - v.time < s && abs(v.coords[0] - h.coords[0]) > l && abs(v.coords[1] - h.coords[1]) < verticalDistanceThreshold ? v.coords[0] > h.coords[0] ? o.current != o.total - 1 || i.infinite ? (o.isSwipe = !0, t.moveTo("next")) : u() : 0 != o.current || i.infinite ? (o.isSwipe = !0, t.moveTo("prev")) : u() : "vertical" == n && h.time - v.time < s && abs(v.coords[1] - h.coords[1]) > l && abs(v.coords[0] - h.coords[0]) < verticalDistanceThreshold ? v.coords[1] > h.coords[1] ? o.current != o.total - 1 || i.infinite ? (o.isSwipe = !0, t.moveTo("next")) : u() : 0 != o.current || i.infinite ? (o.isSwipe = !0, t.moveTo("prev")) : u() : u()), v = h = undefined
                        })
                    }
                })
            },
            goTo: function (e) {
                var t = this,
                    o = t.vars,
                    i = t.options,
                    n = e - o.current;
                if (i.infinite && (e == o.total - 1 && 0 == o.current && (n = -1), o.current == o.total - 1 && 0 == e && (n = 1)), 1 == n) t.moveTo("next");
                else if (-1 == n) t.moveTo("prev");
                else {
                    if (o.nextLock || o.prevLock) return !1;
                    "function" == typeof i.callback.onBeforeChange && i.callback.onBeforeChange.call(t, t.ui), i.linkId && (o.hashLock = !0, window.location.hash = i.linkId + "/" + e), t.items[e] && (t.items[e].options.mousewheel ? t.vars.lockWheel = !1 : o.lockWheel = !0, t.items[e].options.swipe ? o.lockSwipe = !1 : o.lockSwipe = !0), $.each([o.holder, o.nextPhoto, o.prevPhoto], function (e, t) {
                        t.css(transform, gpuAcceleration).fadeOut(i.effects.loadedFadeSpeed)
                    }), o.current = e, o.next = e + 1, o.prev = e - 1, t.createUI(), setTimeout(function () {
                        t.generateBoxes()
                    }, i.effects.loadedFadeSpeed + 50), $(".ilightbox-thumbnail", o.thumbnails).removeClass("ilightbox-active").eq(e).addClass("ilightbox-active"), t.positionThumbnails(), i.linkId && setTimeout(function () {
                        o.hashLock = !1
                    }, 55), i.infinite || (o.nextButton.add(o.prevButton).add(o.innerPrevButton).add(o.innerNextButton).removeClass("disabled"), 0 == o.current && o.prevButton.add(o.innerPrevButton).addClass("disabled"), o.current >= o.total - 1 && o.nextButton.add(o.innerNextButton).addClass("disabled")), t.resetCycle(), "function" == typeof i.callback.onAfterChange && i.callback.onAfterChange.call(t, t.ui)
                }
            },
            moveTo: function (e) {
                var t = this,
                    o = t.vars,
                    i = t.options,
                    n = i.path.toLowerCase(),
                    a = getViewport(),
                    r = i.effects.switchSpeed;
                if (o.nextLock || o.prevLock) return !1;
                var s = "next" == e ? o.next : o.prev;
                if (i.linkId && (o.hashLock = !0, window.location.hash = i.linkId + "/" + s), "next" == e) {
                    if (!t.items[s]) return !1;
                    var l = o.nextPhoto,
                        c = o.holder,
                        u = o.prevPhoto,
                        h = "ilightbox-prev",
                        d = "ilightbox-next"
                } else if ("prev" == e) {
                    if (!t.items[s]) return !1;
                    var l = o.prevPhoto,
                        c = o.holder,
                        u = o.nextPhoto,
                        h = "ilightbox-next",
                        d = "ilightbox-prev"
                }
                "function" == typeof i.callback.onBeforeChange && i.callback.onBeforeChange.call(t, t.ui), "next" == e ? o.nextLock = !0 : o.prevLock = !0;
                var p = $("div.ilightbox-caption", c),
                    f = $("div.ilightbox-social", c);
                if (p.length && p.stop().fadeOut(r, function () {
                        $(this).remove()
                    }), f.length && f.stop().fadeOut(r, function () {
                        $(this).remove()
                    }), t.items[s].caption) {
                    t.setCaption(t.items[s], l);
                    var g = $("div.ilightbox-caption", l),
                        m = parseInt(g.outerHeight() / l.outerHeight() * 100);
                    i.caption.start && 50 >= m && g.fadeIn(r)
                }
                var v = t.items[s].options.social;
                v && (t.setSocial(v, t.items[s].URL, l), i.social.start && $("div.ilightbox-social", l).fadeIn(i.effects.fadeSpeed)), $.each([l, c, u], function (e, t) {
                    t.removeClass("ilightbox-next ilightbox-prev")
                });
                var b = l.data("offset"),
                    x = a.width - i.styles.pageOffsetX,
                    w = a.height - i.styles.pageOffsetY,
                    y = b.newDims.width,
                    S = b.newDims.height,
                    k = b.thumbsOffset,
                    T = b.diff,
                    A = parseInt(w / 2 - S / 2 - T.H - k.H / 2),
                    L = parseInt(x / 2 - y / 2 - T.W - k.W / 2);
                l.css(transform, gpuAcceleration).animate({
                    top: A,
                    left: L,
                    opacity: 1
                }, r, o.isSwipe ? "easeOutCirc" : "easeInOutCirc", function () {
                    l.css(transform, "")
                }), $("div.ilightbox-container", l).animate({
                    width: y,
                    height: S
                }, r, o.isSwipe ? "easeOutCirc" : "easeInOutCirc");
                var I = c.data("offset"),
                    C = I.object;
                T = I.diff, y = I.newDims.width, S = I.newDims.height, y = parseInt(y * i.styles["next" == e ? "prevScale" : "nextScale"]), S = parseInt(S * i.styles["next" == e ? "prevScale" : "nextScale"]), A = "horizontal" == n ? parseInt(w / 2 - C.offsetY - S / 2 - T.H - k.H / 2) : parseInt(w - C.offsetX - T.H - k.H / 2), "prev" == e ? L = "horizontal" == n ? parseInt(x - C.offsetX - T.W - k.W / 2) : parseInt(x / 2 - y / 2 - T.W - C.offsetY - k.W / 2) : (A = "horizontal" == n ? A : parseInt(C.offsetX - T.H - S - k.H / 2), L = "horizontal" == n ? parseInt(C.offsetX - T.W - y - k.W / 2) : parseInt(x / 2 - C.offsetY - y / 2 - T.W - k.W / 2)), $("div.ilightbox-container", c).animate({
                    width: y,
                    height: S
                }, r, o.isSwipe ? "easeOutCirc" : "easeInOutCirc"), c.addClass(h).css(transform, gpuAcceleration).animate({
                    top: A,
                    left: L,
                    opacity: i.styles.prevOpacity
                }, r, o.isSwipe ? "easeOutCirc" : "easeInOutCirc", function () {
                    c.css(transform, ""), $(".ilightbox-thumbnail", o.thumbnails).removeClass("ilightbox-active").eq(s).addClass("ilightbox-active"), t.positionThumbnails(), t.items[s] && (t.items[s].options.mousewheel ? o.lockWheel = !1 : o.lockWheel = !0, t.items[s].options.swipe ? o.lockSwipe = !1 : o.lockSwipe = !0), o.isSwipe = !1, "next" == e ? (o.nextPhoto = u, o.prevPhoto = c, o.holder = l, o.nextPhoto.hide(), o.next = o.next + 1, o.prev = o.current, o.current = o.current + 1, i.infinite && (o.current > o.total - 1 && (o.current = 0), o.current == o.total - 1 && (o.next = 0), 0 == o.current && (o.prev = o.total - 1)), t.createUI(), t.items[o.next] ? t.loadContent(t.items[o.next], "next") : o.nextLock = !1) : (o.prevPhoto = u, o.nextPhoto = c, o.holder = l, o.prevPhoto.hide(), o.next = o.current, o.current = o.prev, o.prev = o.current - 1, i.infinite && (o.current == o.total - 1 && (o.next = 0), 0 == o.current && (o.prev = o.total - 1)), t.createUI(), t.items[o.prev] ? t.loadContent(t.items[o.prev], "prev") : o.prevLock = !1), i.linkId && setTimeout(function () {
                        o.hashLock = !1
                    }, 55), i.infinite || (o.nextButton.add(o.prevButton).add(o.innerPrevButton).add(o.innerNextButton).removeClass("disabled"), 0 == o.current && o.prevButton.add(o.innerPrevButton).addClass("disabled"), o.current >= o.total - 1 && o.nextButton.add(o.innerNextButton).addClass("disabled")), t.repositionPhoto(), t.resetCycle(), "function" == typeof i.callback.onAfterChange && i.callback.onAfterChange.call(t, t.ui)
                }), A = "horizontal" == n ? getPixel(u, "top") : "next" == e ? parseInt(-(w / 2) - u.outerHeight()) : parseInt(2 * A), L = "horizontal" == n ? "next" == e ? parseInt(-(x / 2) - u.outerWidth()) : parseInt(2 * L) : getPixel(u, "left"), u.css(transform, gpuAcceleration).animate({
                    top: A,
                    left: L,
                    opacity: i.styles.nextOpacity
                }, r, o.isSwipe ? "easeOutCirc" : "easeInOutCirc", function () {
                    u.css(transform, "")
                }).addClass(d)
            },
            setCaption: function (e, t) {
                var o = $('<div class="ilightbox-caption"></div>');
                e.caption && (o.html(e.caption), $("div.ilightbox-container", t).append(o))
            },
            normalizeSocial: function (e, t) {
                var o = this,
                    i = (o.vars, o.options),
                    n = window.location.href;
                return $.each(e, function (o, a) {
                    if (!a) return !0;
                    var r, s, l = o.toLowerCase();
                    switch (l) {
                        case "facebook":
                            r = "http://www.facebook.com/share.php?v=4&src=bm&u={URL}", s = "Share on Facebook";
                            break;
                        case "twitter":
                            r = "http://twitter.com/home?status={URL}", s = "Share on Twitter";
                            break;
                        case "googleplus":
                            r = "https://plus.google.com/share?url={URL}", s = "Share on Google+";
                            break;
                        case "delicious":
                            r = "http://delicious.com/post?url={URL}", s = "Share on Delicious";
                            break;
                        case "digg":
                            r = "http://digg.com/submit?phase=2&url={URL}", s = "Share on Digg";
                            break;
                        case "reddit":
                            r = "http://reddit.com/submit?url={URL}", s = "Share on reddit"
                    }
                    e[o] = {
                        URL: a.URL && absolutizeURI(n, a.URL) || i.linkId && window.location.href || "string" != typeof t && n || t && absolutizeURI(n, t) || n,
                        source: a.source || r || a.URL && absolutizeURI(n, a.URL) || t && absolutizeURI(n, t),
                        text: a.text || s || "Share on " + o,
                        width: "undefined" == typeof a.width || isNaN(a.width) ? 640 : parseInt(a.width),
                        height: a.height || 360
                    }
                }), e
            },
            setSocial: function (e, t, o) {
                var i = this,
                    n = $('<div class="ilightbox-social"></div>'),
                    a = "<ul>";
                e = i.normalizeSocial(e, t), $.each(e, function (e, t) {
                    var o = (e.toLowerCase(), t.source.replace(/\{URL\}/g, encodeURIComponent(t.URL).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+")));
                    a += '<li class="' + e + '"><a href="' + o + '" onclick="javascript:window.open(this.href' + (t.width <= 0 || t.height <= 0 ? "" : ", '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=" + t.height + ",width=" + t.width + ",left=40,top=40'") + ');return false;" title="' + t.text + '" target="_blank"></a></li>'
                }), a += "</ul>", n.html(a), $("div.ilightbox-container", o).append(n)
            },
            fullScreenAction: function () {
                var e = this;
                e.vars;
                fullScreenApi.supportsFullScreen ? fullScreenApi.isFullScreen() ? fullScreenApi.cancelFullScreen(document.documentElement) : fullScreenApi.requestFullScreen(document.documentElement) : e.doFullscreen()
            },
            doFullscreen: function () {
                var e = this,
                    t = e.vars,
                    o = getViewport(),
                    i = e.options;
                if (i.fullAlone) {
                    var n = t.holder,
                        a = e.items[t.current],
                        r = o.width,
                        s = o.height,
                        l = [n, t.nextPhoto, t.prevPhoto, t.nextButton, t.prevButton, t.overlay, t.toolbar, t.thumbnails, t.loader],
                        c = [t.nextPhoto, t.prevPhoto, t.nextButton, t.prevButton, t.loader, t.thumbnails];
                    if (t.isInFullScreen) t.isInFullScreen = t.lockKey = t.lockWheel = t.lockSwipe = !1, t.overlay.css({
                        opacity: e.options.overlay.opacity
                    }), $.each(c, function (e, t) {
                        t.show()
                    }), t.fullScreenButton.attr("title", i.text.enterFullscreen), n.data({
                        naturalWidth: n.data("naturalWidthOld"),
                        naturalHeight: n.data("naturalHeightOld"),
                        naturalWidthOld: null,
                        naturalHeightOld: null
                    }), $.each(l, function (e, t) {
                        t.removeClass("ilightbox-fullscreen")
                    }), "function" == typeof i.callback.onExitFullScreen && i.callback.onExitFullScreen.call(e, e.ui);
                    else {
                        if (t.isInFullScreen = t.lockKey = t.lockWheel = t.lockSwipe = !0, t.overlay.css({
                                opacity: 1
                            }), $.each(c, function (e, t) {
                                t.hide()
                            }), t.fullScreenButton.attr("title", i.text.exitFullscreen), -1 != i.fullStretchTypes.indexOf(a.type)) n.data({
                            naturalWidthOld: n.data("naturalWidth"),
                            naturalHeightOld: n.data("naturalHeight"),
                            naturalWidth: r,
                            naturalHeight: s
                        });
                        else {
                            var o = a.options.fullViewPort || i.fullViewPort || "",
                                u = r,
                                h = s,
                                d = n.data("naturalWidth"),
                                p = n.data("naturalHeight");
                            if ("fill" == o.toLowerCase()) h = u / d * p, s > h && (u = s / p * d, h = s);
                            else if ("fit" == o.toLowerCase()) {
                                var f = e.getNewDimenstions(u, h, d, p, !0);
                                u = f.width, h = f.height
                            } else if ("stretch" == o.toLowerCase()) u = u, h = h;
                            else {
                                var g = d > u || p > h ? !0 : !1,
                                    f = e.getNewDimenstions(u, h, d, p, g);
                                u = f.width, h = f.height
                            }
                            n.data({
                                naturalWidthOld: n.data("naturalWidth"),
                                naturalHeightOld: n.data("naturalHeight"),
                                naturalWidth: u,
                                naturalHeight: h
                            })
                        }
                        $.each(l, function (e, t) {
                            t.addClass("ilightbox-fullscreen")
                        }), "function" == typeof i.callback.onEnterFullScreen && i.callback.onEnterFullScreen.call(e, e.ui)
                    }
                } else t.isInFullScreen ? t.isInFullScreen = !1 : t.isInFullScreen = !0;
                e.repositionPhoto(!0)
            },
            closeAction: function () {
                var e = this,
                    t = e.vars,
                    o = e.options;
                $win.unbind(".iLightBox"), $doc.off(".iLightBox"), t.isInFullScreen && fullScreenApi.cancelFullScreen(document.documentElement), $(".ilightbox-overlay, .ilightbox-holder, .ilightbox-thumbnails").off(".iLightBox"), o.hide.effect ? t.overlay.stop().fadeOut(o.hide.speed, function () {
                    t.overlay.remove(), t.BODY.removeClass("ilightbox-noscroll").off(".iLightBox")
                }) : (t.overlay.remove(), t.BODY.removeClass("ilightbox-noscroll").off(".iLightBox"));
                var i = [t.toolbar, t.holder, t.nextPhoto, t.prevPhoto, t.nextButton, t.prevButton, t.loader, t.thumbnails];
                $.each(i, function (e, t) {
                    t.removeAttr("style").remove()
                }), t.dontGenerateThumbs = t.isInFullScreen = !1, window.iLightBox = null, o.linkId && (t.hashLock = !0, removeHash(), setTimeout(function () {
                    t.hashLock = !1
                }, 55)), "function" == typeof o.callback.onHide && o.callback.onHide.call(e, e.ui)
            },
            repositionPhoto: function () {
                var e = this,
                    t = e.vars,
                    o = e.options,
                    i = o.path.toLowerCase(),
                    n = getViewport(),
                    a = n.width,
                    r = n.height,
                    s = t.isInFullScreen && o.fullAlone || t.isMobile ? 0 : "horizontal" == i ? 0 : t.thumbnails.outerWidth(),
                    l = t.isMobile ? t.toolbar.outerHeight() : t.isInFullScreen && o.fullAlone ? 0 : "horizontal" == i ? t.thumbnails.outerHeight() : 0,
                    c = t.isInFullScreen && o.fullAlone ? a : a - o.styles.pageOffsetX,
                    u = t.isInFullScreen && o.fullAlone ? r : r - o.styles.pageOffsetY,
                    h = "horizontal" == i ? parseInt(e.items[t.next] || e.items[t.prev] ? 2 * (o.styles.nextOffsetX + o.styles.prevOffsetX) : 30 >= c / 10 ? 30 : c / 10) : parseInt(30 >= c / 10 ? 30 : c / 10) + s,
                    d = "horizontal" == i ? parseInt(30 >= u / 10 ? 30 : u / 10) + l : parseInt(e.items[t.next] || e.items[t.prev] ? 2 * (o.styles.nextOffsetX + o.styles.prevOffsetX) : 30 >= u / 10 ? 30 : u / 10),
                    p = {
                        type: "current",
                        width: c,
                        height: u,
                        item: e.items[t.current],
                        offsetW: h,
                        offsetH: d,
                        thumbsOffsetW: s,
                        thumbsOffsetH: l,
                        animate: arguments.length,
                        holder: t.holder
                    };
                e.repositionEl(p), e.items[t.next] && (p = $.extend(p, {
                    type: "next",
                    item: e.items[t.next],
                    offsetX: o.styles.nextOffsetX,
                    offsetY: o.styles.nextOffsetY,
                    holder: t.nextPhoto
                }), e.repositionEl(p)), e.items[t.prev] && (p = $.extend(p, {
                    type: "prev",
                    item: e.items[t.prev],
                    offsetX: o.styles.prevOffsetX,
                    offsetY: o.styles.prevOffsetY,
                    holder: t.prevPhoto
                }), e.repositionEl(p));
                var f = "horizontal" == i ? {
                    left: parseInt(c / 2 - t.loader.outerWidth() / 2)
                } : {
                    top: parseInt(u / 2 - t.loader.outerHeight() / 2)
                };
                t.loader.css(f)
            },
            repositionEl: function (e) {
                var t = this,
                    o = t.vars,
                    i = t.options,
                    n = i.path.toLowerCase(),
                    a = "current" == e.type && o.isInFullScreen && i.fullAlone ? e.width : e.width - e.offsetW,
                    r = "current" == e.type && o.isInFullScreen && i.fullAlone ? e.height : e.height - e.offsetH,
                    s = e.item,
                    l = e.item.options,
                    c = e.holder,
                    u = e.offsetX || 0,
                    h = e.offsetY || 0,
                    d = e.thumbsOffsetW,
                    p = e.thumbsOffsetH;
                "current" == e.type ? ("number" == typeof l.width && l.width && (a = o.isInFullScreen && i.fullAlone && (-1 != i.fullStretchTypes.indexOf(s.type) || l.fullViewPort || i.fullViewPort) ? a : l.width > a ? a : l.width), "number" == typeof l.height && l.height && (r = o.isInFullScreen && i.fullAlone && (-1 != i.fullStretchTypes.indexOf(s.type) || l.fullViewPort || i.fullViewPort) ? r : l.height > r ? r : l.height)) : ("number" == typeof l.width && l.width && (a = l.width > a ? a : l.width), "number" == typeof l.height && l.height && (r = l.height > r ? r : l.height)), r = parseInt(r - $(".ilightbox-inner-toolbar", c).outerHeight());
                var f = "string" == typeof l.width && -1 != l.width.indexOf("%") ? percentToValue(parseInt(l.width.replace("%", "")), e.width) : c.data("naturalWidth"),
                    g = "string" == typeof l.height && -1 != l.height.indexOf("%") ? percentToValue(parseInt(l.height.replace("%", "")), e.height) : c.data("naturalHeight"),
                    m = "string" == typeof l.width && -1 != l.width.indexOf("%") || "string" == typeof l.height && -1 != l.height.indexOf("%") ? {
                        width: f,
                        height: g
                    } : t.getNewDimenstions(a, r, f, g),
                    v = $.extend({}, m, {});
                "prev" == e.type || "next" == e.type ? (f = parseInt(m.width * ("next" == e.type ? i.styles.nextScale : i.styles.prevScale)), g = parseInt(m.height * ("next" == e.type ? i.styles.nextScale : i.styles.prevScale))) : (f = m.width, g = m.height);
                var b = parseInt((getPixel(c, "padding-left") + getPixel(c, "padding-right") + getPixel(c, "border-left-width") + getPixel(c, "border-right-width")) / 2),
                    x = parseInt((getPixel(c, "padding-top") + getPixel(c, "padding-bottom") + getPixel(c, "border-top-width") + getPixel(c, "border-bottom-width") + $(".ilightbox-inner-toolbar", c).outerHeight()) / 2);
                switch (e.type) {
                    case "current":
                        var w = parseInt(e.height / 2 - g / 2 - x - p / 2),
                            y = parseInt(e.width / 2 - f / 2 - b - d / 2);
                        break;
                    case "next":
                        var w = "horizontal" == n ? parseInt(e.height / 2 - h - g / 2 - x - p / 2) : parseInt(e.height - u - x - p / 2),
                            y = "horizontal" == n ? parseInt(e.width - u - b - d / 2) : parseInt(e.width / 2 - f / 2 - b - h - d / 2);
                        break;
                    case "prev":
                        var w = "horizontal" == n ? parseInt(e.height / 2 - h - g / 2 - x - p / 2) : parseInt(u - x - g - p / 2),
                            y = "horizontal" == n ? parseInt(u - b - f - d / 2) : parseInt(e.width / 2 - h - f / 2 - b - d / 2)
                }
                c.data("offset", {
                    top: w,
                    left: y,
                    newDims: v,
                    diff: {
                        W: b,
                        H: x
                    },
                    thumbsOffset: {
                        W: d,
                        H: p
                    },
                    object: e
                }), e.animate > 0 && i.effects.reposition ? (c.css(transform, gpuAcceleration).stop().animate({
                    top: w,
                    left: y
                }, i.effects.repositionSpeed, "easeOutCirc", function () {
                    c.css(transform, "")
                }), $("div.ilightbox-container", c).stop().animate({
                    width: f,
                    height: g
                }, i.effects.repositionSpeed, "easeOutCirc"), $("div.ilightbox-inner-toolbar", c).stop().animate({
                    width: f
                }, i.effects.repositionSpeed, "easeOutCirc", function () {
                    $(this).css("overflow", "visible")
                })) : (c.css({
                    top: w,
                    left: y
                }), $("div.ilightbox-container", c).css({
                    width: f,
                    height: g
                }), $("div.ilightbox-inner-toolbar", c).css({
                    width: f
                }))
            },
            resume: function (e) {
                var t = this,
                    o = t.vars,
                    i = t.options;
                !i.slideshow.pauseTime || i.controls.slideshow && o.total <= 1 || e < o.isPaused || (o.isPaused = 0, o.cycleID && (o.cycleID = clearTimeout(o.cycleID)), o.cycleID = setTimeout(function () {
                    o.current == o.total - 1 ? t.goTo(0) : t.moveTo("next")
                }, i.slideshow.pauseTime))
            },
            pause: function (e) {
                var t = this,
                    o = t.vars;
                t.options;
                e < o.isPaused || (o.isPaused = e || 100, o.cycleID && (o.cycleID = clearTimeout(o.cycleID)))
            },
            resetCycle: function () {
                var e = this,
                    t = e.vars,
                    o = e.options;
                o.controls.slideshow && t.cycleID && !t.isPaused && e.resume()
            },
            getNewDimenstions: function (e, t, o, i, n) {
                var a = this;
                e ? t ? factor = min(e / o, t / i) : factor = e / o : factor = t / i, n || (factor > a.options.maxScale ? factor = a.options.maxScale : factor < a.options.minScale && (factor = a.options.minScale));
                var r = a.options.keepAspectRatio ? round(o * factor) : e,
                    s = a.options.keepAspectRatio ? round(i * factor) : t;
                return {
                    width: r,
                    height: s,
                    ratio: factor
                }
            },
            setOption: function (e) {
                var t = this;
                t.options = $.extend(!0, t.options, e || {}), t.refresh()
            },
            availPlugins: function () {
                var e = this,
                    t = document.createElement("video");
                e.plugins = {
                    flash: parseInt(PluginDetect.getVersion("Shockwave")) >= 0 || parseInt(PluginDetect.getVersion("Flash")) >= 0 ? !0 : !1,
                    quicktime: parseInt(PluginDetect.getVersion("QuickTime")) >= 0 ? !0 : !1,
                    html5H264: !(!t.canPlayType || !t.canPlayType("video/mp4").replace(/no/, "")),
                    html5WebM: !(!t.canPlayType || !t.canPlayType("video/webm").replace(/no/, "")),
                    html5Vorbis: !(!t.canPlayType || !t.canPlayType("video/ogg").replace(/no/, "")),
                    html5QuickTime: !(!t.canPlayType || !t.canPlayType("video/quicktime").replace(/no/, ""))
                }
            },
            addContent: function (e, t) {
                var o, i = this;
                switch (t.type) {
                    case "video":
                        var n = !1,
                            a = t.videoType,
                            r = t.options.html5video;
                        ("video/mp4" == a || "mp4" == t.ext || "m4v" == t.ext || r.h264) && i.plugins.html5H264 ? (t.ext = "mp4", t.URL = r.h264 || t.URL) : r.webm && i.plugins.html5WebM ? (t.ext = "webm", t.URL = r.webm || t.URL) : r.ogg && i.plugins.html5Vorbis && (t.ext = "ogv", t.URL = r.ogg || t.URL), !i.plugins.html5H264 || "video/mp4" != a && "mp4" != t.ext && "m4v" != t.ext ? !i.plugins.html5WebM || "video/webm" != a && "webm" != t.ext ? !i.plugins.html5Vorbis || "video/ogg" != a && "ogv" != t.ext ? !i.plugins.html5QuickTime || "video/quicktime" != a && "mov" != t.ext && "qt" != t.ext || (n = !0, a = "video/quicktime") : (n = !0, a = "video/ogg") : (n = !0, a = "video/webm") : (n = !0, a = "video/mp4"), n ? o = $("<video />", {
                            width: "100%",
                            height: "100%",
                            preload: r.preload,
                            autoplay: r.autoplay,
                            poster: r.poster,
                            controls: r.controls
                        }).append($("<source />", {
                            src: t.URL,
                            type: a
                        })) : i.plugins.quicktime ? (o = $("<object />", {
                            type: "video/quicktime",
                            pluginspage: pluginspages.quicktime
                        }).attr({
                            data: t.URL,
                            width: "100%",
                            height: "100%"
                        }).append($("<param />", {
                            name: "src",
                            value: t.URL
                        })).append($("<param />", {
                            name: "autoplay",
                            value: "false"
                        })).append($("<param />", {
                            name: "loop",
                            value: "false"
                        })).append($("<param />", {
                            name: "scale",
                            value: "tofit"
                        })), browser.msie && (o = QT_GenerateOBJECTText(t.URL, "100%", "100%", "", "SCALE", "tofit", "AUTOPLAY", "false", "LOOP", "false"))) : o = $("<span />", {
                            "class": "ilightbox-alert",
                            html: i.options.errors.missingPlugin.replace("{pluginspage}", pluginspages.quicktime).replace("{type}", "QuickTime")
                        });
                        break;
                    case "flash":
                        if (i.plugins.flash) {
                            var s = "",
                                l = 0;
                            t.options.flashvars ? $.each(t.options.flashvars, function (e, t) {
                                0 != l && (s += "&"), s += e + "=" + encodeURIComponent(t), l++
                            }) : s = null, o = $("<embed />").attr({
                                type: "application/x-shockwave-flash",
                                src: t.URL,
                                width: "number" == typeof t.options.width && t.options.width && "1" == i.options.minScale && "1" == i.options.maxScale ? t.options.width : "100%",
                                height: "number" == typeof t.options.height && t.options.height && "1" == i.options.minScale && "1" == i.options.maxScale ? t.options.height : "100%",
                                quality: "high",
                                bgcolor: "#000000",
                                play: "true",
                                loop: "true",
                                menu: "true",
                                wmode: "transparent",
                                scale: "showall",
                                allowScriptAccess: "always",
                                allowFullScreen: "true",
                                flashvars: s,
                                fullscreen: "yes"
                            })
                        } else o = $("<span />", {
                            "class": "ilightbox-alert",
                            html: i.options.errors.missingPlugin.replace("{pluginspage}", pluginspages.flash).replace("{type}", "Adobe Flash player")
                        });
                        break;
                    case "iframe":
                        o = $("<iframe />").attr({
                            width: "number" == typeof t.options.width && t.options.width && "1" == i.options.minScale && "1" == i.options.maxScale ? t.options.width : "100%",
                            height: "number" == typeof t.options.height && t.options.height && "1" == i.options.minScale && "1" == i.options.maxScale ? t.options.height : "100%",
                            src: t.URL,
                            frameborder: 0,
                            hspace: 0,
                            vspace: 0,
                            scrolling: supportTouch ? "auto" : "scroll",
                            webkitAllowFullScreen: "",
                            mozallowfullscreen: "",
                            allowFullScreen: ""
                        });
                        break;
                    case "inline":
                        o = $('<div class="ilightbox-wrapper"></div>').html($(t.URL).clone(!0));
                        break;
                    case "html":
                        var o, c = t.URL;
                        if (c[0].nodeName) o = $('<div class="ilightbox-wrapper"></div>').html(c);
                        else {
                            var u = $(t.URL),
                                h = u.selector ? $("<div>" + u + "</div>") : u;
                            o = $('<div class="ilightbox-wrapper"></div>').html(h)
                        }
                }
                return $("div.ilightbox-container", e).empty().html(o), "video" === o[0].tagName.toLowerCase() && browser.webkit && setTimeout(function () {
                    var e = o[0].currentSrc + "?" + floor(3e4 * random());
                    o[0].currentSrc = e, o[0].src = e
                }), o
            },
            ogpRecognition: function (e, t) {
                var o = this,
                    i = e.URL;
                o.showLoader(), doAjax(i, function (e) {
                    if (o.hideLoader(), e) {
                        var i = new Object;
                        if (i.length = !1, i.url = e.url, 200 == e.status) {
                            var n = e.results,
                                a = n.type,
                                r = n.source;
                            i.source = r.src, i.width = r.width && parseInt(r.width) || 0, i.height = r.height && parseInt(r.height) || 0, i.type = a, i.thumbnail = r.thumbnail || n.images[0], i.html5video = n.html5video || {}, i.length = !0, "application/x-shockwave-flash" == r.type ? i.type = "flash" : -1 != r.type.indexOf("video/") ? i.type = "video" : -1 != r.type.indexOf("/html") ? i.type = "iframe" : -1 != r.type.indexOf("image/") && (i.type = "image")
                        } else if ("undefined" != typeof e.response) throw e.response;
                        t.call(this, i.length ? i : !1)
                    }
                })
            },
            hashChangeHandler: function (e) {
                var t = this,
                    o = t.vars,
                    i = t.options,
                    n = e || window.location.href,
                    a = parseURI(n).hash,
                    r = a.split("/"),
                    s = r[1];
                if (!(o.hashLock || "#" + i.linkId != r[0] && a.length > 1))
                    if (s) {
                        var l = r[1] || 0;
                        if (t.items[l]) {
                            var c = $(".ilightbox-overlay");
                            c.length && c.attr("linkid") == i.linkId ? t.goTo(l) : t.itemsObject[l].trigger(supportTouch ? "itap" : "click")
                        } else {
                            var c = $(".ilightbox-overlay");
                            c.length && t.closeAction()
                        }
                    } else {
                        var c = $(".ilightbox-overlay");
                        c.length && t.closeAction()
                    }
            }
        }, $.fn.iLightBox = function () {
            var e = arguments,
                t = $.isPlainObject(e[0]) ? e[0] : e[1],
                o = $.isArray(e[0]) || "string" == typeof e[0] ? e[0] : e[1];
            t || (t = {});
            var i = $.extend(!0, {
                    attr: "href",
                    path: "vertical",
                    skin: "dark",
                    linkId: !1,
                    infinite: !1,
                    startFrom: 0,
                    randomStart: !1,
                    keepAspectRatio: !0,
                    maxScale: 1,
                    minScale: .2,
                    innerToolbar: !1,
                    smartRecognition: !1,
                    mobileOptimizer: !0,
                    fullAlone: !0,
                    fullViewPort: null,
                    fullStretchTypes: "flash, video",
                    overlay: {
                        blur: !0,
                        opacity: .85
                    },
                    controls: {
                        arrows: !1,
                        slideshow: !1,
                        toolbar: !0,
                        fullscreen: !0,
                        thumbnail: !0,
                        keyboard: !0,
                        mousewheel: !0,
                        swipe: !0
                    },
                    keyboard: {
                        left: !0,
                        right: !0,
                        up: !0,
                        down: !0,
                        esc: !0,
                        shift_enter: !0
                    },
                    show: {
                        effect: !0,
                        speed: 300,
                        title: !0
                    },
                    hide: {
                        effect: !0,
                        speed: 300
                    },
                    caption: {
                        start: !0,
                        show: "mouseenter",
                        hide: "mouseleave"
                    },
                    social: {
                        start: !0,
                        show: "mouseenter",
                        hide: "mouseleave",
                        buttons: !1
                    },
                    styles: {
                        pageOffsetX: 0,
                        pageOffsetY: 0,
                        nextOffsetX: 45,
                        nextOffsetY: 0,
                        nextOpacity: 1,
                        nextScale: 1,
                        prevOffsetX: 45,
                        prevOffsetY: 0,
                        prevOpacity: 1,
                        prevScale: 1
                    },
                    thumbnails: {
                        maxWidth: 120,
                        maxHeight: 80,
                        normalOpacity: 1,
                        activeOpacity: .6
                    },
                    effects: {
                        reposition: !0,
                        repositionSpeed: 200,
                        switchSpeed: 500,
                        loadedFadeSpeed: 180,
                        fadeSpeed: 200
                    },
                    slideshow: {
                        pauseTime: 5e3,
                        pauseOnHover: !1,
                        startPaused: !0
                    },
                    text: {
                        close: "Press Esc to close",
                        enterFullscreen: "Enter Fullscreen (Shift+Enter)",
                        exitFullscreen: "Exit Fullscreen (Shift+Enter)",
                        slideShow: "Slideshow",
                        next: "Next",
                        previous: "Previous"
                    },
                    errors: {
                        loadImage: "An error occurred when trying to load photo.",
                        loadContents: "An error occurred when trying to load contents.",
                        missingPlugin: "The content your are attempting to view requires the <a href='{pluginspage}' target='_blank'>{type} plugin</a>."
                    },
                    ajaxSetup: {
                        url: "",
                        beforeSend: function (e, t) {},
                        cache: !1,
                        complete: function (e, t) {},
                        crossDomain: !1,
                        error: function (e, t, o) {},
                        success: function (e, t, o) {},
                        global: !0,
                        ifModified: !1,
                        username: null,
                        password: null,
                        type: "GET"
                    },
                    callback: {}
                }, t),
                n = $.isArray(o) || "string" == typeof o ? !0 : !1;
            if (o = $.isArray(o) ? o : new Array, "string" == typeof e[0] && (o[0] = e[0]), version_compare($.fn.jquery, "1.8", ">=")) {
                var a = new iLightBox($(this), i, o, n);
                return {
                    close: function () {
                        a.closeAction()
                    },
                    fullscreen: function () {
                        a.fullScreenAction()
                    },
                    moveNext: function () {
                        a.moveTo("next")
                    },
                    movePrev: function () {
                        a.moveTo("prev")
                    },
                    goTo: function (e) {
                        a.goTo(e)
                    },
                    refresh: function () {
                        a.refresh()
                    },
                    reposition: function () {
                        arguments.length > 0 ? a.repositionPhoto(!0) : a.repositionPhoto()
                    },
                    setOption: function (e) {
                        a.setOption(e)
                    },
                    destroy: function () {
                        a.closeAction(), a.dispatchItemsEvents()
                    }
                }
            }
            throw "The jQuery version that was loaded is too old. iLightBox requires jQuery 1.8+"
        }, $.iLightBox = function () {
            return $.fn.iLightBox(arguments[0], arguments[1])
        }, $.extend($.easing, {
            easeInCirc: function (e, t, o, i, n) {
                return -i * (sqrt(1 - (t /= n) * t) - 1) + o
            },
            easeOutCirc: function (e, t, o, i, n) {
                return i * sqrt(1 - (t = t / n - 1) * t) + o
            },
            easeInOutCirc: function (e, t, o, i, n) {
                return (t /= n / 2) < 1 ? -i / 2 * (sqrt(1 - t * t) - 1) + o : i / 2 * (sqrt(1 - (t -= 2) * t) + 1) + o
            }
        }),
        function () {
            $.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function (e, t) {
                $.fn[t] = function (e) {
                    return e ? this.bind(t, e) : this.trigger(t)
                }, $.attrFn && ($.attrFn[t] = !0)
            });
            var e = {
                startEvent: "touchstart.iTap",
                endEvent: "touchend.iTap"
            };
            $.event.special.itap = {
                setup: function () {
                    var t, o, i = this,
                        n = $(this);
                    n.bind(e.startEvent, function (a) {
                        t = getScrollXY(), n.one(e.endEvent, function (e) {
                            o = getScrollXY();
                            var n = e || window.event;
                            e = $.event.fix(n), e.type = "itap", t && o && t.x == o.x && t.y == o.y && ($.event.dispatch || $.event.handle).call(i, e), t = o = undefined
                        })
                    })
                },
                teardown: function () {
                    $(this).unbind(e.startEvent)
                }
            }
        }(),
        function () {
            if (fullScreenApi = {
                    supportsFullScreen: !1,
                    isFullScreen: function () {
                        return !1
                    },
                    requestFullScreen: function () {},
                    cancelFullScreen: function () {},
                    fullScreenEventName: "",
                    prefix: ""
                }, browserPrefixes = "webkit moz o ms khtml".split(" "), "undefined" != typeof document.cancelFullScreen) fullScreenApi.supportsFullScreen = !0;
            else
                for (var e = 0, t = browserPrefixes.length; t > e; e++)
                    if (fullScreenApi.prefix = browserPrefixes[e], "undefined" != typeof document[fullScreenApi.prefix + "CancelFullScreen"]) {
                        fullScreenApi.supportsFullScreen = !0;
                        break
                    }
            fullScreenApi.supportsFullScreen && (fullScreenApi.fullScreenEventName = fullScreenApi.prefix + "fullscreenchange", fullScreenApi.isFullScreen = function () {
                switch (this.prefix) {
                    case "":
                        return document.fullScreen;
                    case "webkit":
                        return document.webkitIsFullScreen;
                    default:
                        return document[this.prefix + "FullScreen"]
                }
            }, fullScreenApi.requestFullScreen = function (e) {
                return "" === this.prefix ? e.requestFullScreen() : e[this.prefix + "RequestFullScreen"]()
            }, fullScreenApi.cancelFullScreen = function (e) {
                return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
            })
        }(),
        function () {
            function e(e) {
                e = e.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            }
            var t = e(navigator.userAgent);
            browser = {}, t.browser && (browser[t.browser] = !0, browser.version = t.version), browser.chrome ? browser.webkit = !0 : browser.webkit && (browser.safari = !0)
        }(),
        function () {
            function e(e) {
                for (var i = 0, n = t.length; n > i; i++) {
                    var a = t[i] ? t[i] + e.charAt(0).toUpperCase() + e.slice(1) : e;
                    if (o.style[a] !== undefined) return a
                }
            }
            var t = ["", "webkit", "moz", "ms", "o"],
                o = document.createElement("div");
            transform = e("transform") || "", gpuAcceleration = e("perspective") ? "translateZ(0) " : ""
        }();
    var PluginDetect = {
        version: "0.7.9",
        name: "PluginDetect",
        handler: function (e, t, o) {
            return function () {
                e(t, o)
            }
        },
        openTag: "<",
        isDefined: function (e) {
            return "undefined" != typeof e
        },
        isArray: function (e) {
            return /array/i.test(Object.prototype.toString.call(e))
        },
        isFunc: function (e) {
            return "function" == typeof e
        },
        isString: function (e) {
            return "string" == typeof e
        },
        isNum: function (e) {
            return "number" == typeof e
        },
        isStrNum: function (e) {
            return "string" == typeof e && /\d/.test(e)
        },
        getNumRegx: /[\d][\d\.\_,-]*/,
        splitNumRegx: /[\.\_,-]/g,
        getNum: function (e, t) {
            var o = this,
                i = o.isStrNum(e) ? (o.isDefined(t) ? new RegExp(t) : o.getNumRegx).exec(e) : null;
            return i ? i[0] : null
        },
        compareNums: function (e, t, o) {
            var i, n, a, r = this,
                s = parseInt;
            if (r.isStrNum(e) && r.isStrNum(t)) {
                if (r.isDefined(o) && o.compareNums) return o.compareNums(e, t);
                for (i = e.split(r.splitNumRegx), n = t.split(r.splitNumRegx), a = 0; a < min(i.length, n.length); a++) {
                    if (s(i[a], 10) > s(n[a], 10)) return 1;
                    if (s(i[a], 10) < s(n[a], 10)) return -1
                }
            }
            return 0
        },
        formatNum: function (e, t) {
            var o, i, n = this;
            if (!n.isStrNum(e)) return null;
            for (n.isNum(t) || (t = 4), t--, i = e.replace(/\s/g, "").split(n.splitNumRegx).concat(["0", "0", "0", "0"]), o = 0; 4 > o; o++) /^(0+)(.+)$/.test(i[o]) && (i[o] = RegExp.$2), (o > t || !/\d/.test(i[o])) && (i[o] = "0");
            return i.slice(0, 4).join(",")
        },
        $$hasMimeType: function (e) {
            return function (t) {
                if (!e.isIE && t) {
                    var o, i, n, a = e.isArray(t) ? t : e.isString(t) ? [t] : [];
                    for (n = 0; n < a.length; n++)
                        if (e.isString(a[n]) && /[^\s]/.test(a[n]) && (o = navigator.mimeTypes[a[n]], i = o ? o.enabledPlugin : 0, i && (i.name || i.description))) return o
                }
                return null
            }
        },
        findNavPlugin: function (e, t, o) {
            var i, n, a, r = this,
                s = new RegExp(e, "i"),
                l = !r.isDefined(t) || t ? /\d/ : 0,
                c = o ? new RegExp(o, "i") : 0,
                u = navigator.plugins,
                h = "";
            for (i = 0; i < u.length; i++)
                if (a = u[i].description || h, n = u[i].name || h, (s.test(a) && (!l || l.test(RegExp.leftContext + RegExp.rightContext)) || s.test(n) && (!l || l.test(RegExp.leftContext + RegExp.rightContext))) && (!c || !c.test(a) && !c.test(n))) return u[i];
            return null
        },
        getMimeEnabledPlugin: function (e, t, o) {
            var i, n, a, r, s = this,
                l = new RegExp(t, "i"),
                c = "",
                u = o ? new RegExp(o, "i") : 0,
                h = s.isString(e) ? [e] : e;
            for (r = 0; r < h.length; r++)
                if ((i = s.hasMimeType(h[r])) && (i = i.enabledPlugin) && (a = i.description || c, n = i.name || c, (l.test(a) || l.test(n)) && (!u || !u.test(a) && !u.test(n)))) return i;
            return 0
        },
        getPluginFileVersion: function (e, t) {
            var o, i, n, a, r = this,
                s = -1;
            if (r.OS > 2 || !e || !e.version || !(o = r.getNum(e.version))) return t;
            if (!t) return o;
            for (o = r.formatNum(o), t = r.formatNum(t), i = t.split(r.splitNumRegx), n = o.split(r.splitNumRegx), a = 0; a < i.length; a++) {
                if (s > -1 && a > s && "0" != i[a]) return t;
                if (n[a] != i[a] && (-1 == s && (s = a), "0" != i[a])) return t
            }
            return o
        },
        AXO: window.ActiveXObject,
        getAXO: function (e) {
            var t = null,
                o = this;
            try {
                t = new o.AXO(e)
            } catch (i) {}
            return t
        },
        convertFuncs: function (e) {
            var t, o, i = /^[\$][\$]/;
            for (t in e)
                if (i.test(t)) try {
                    o = t.slice(2), o.length > 0 && !e[o] && (e[o] = e[t](e), delete e[t])
                } catch (n) {}
        },
        initObj: function (e, t, o) {
            var i, n;
            if (e) {
                if (1 == e[t[0]] || o)
                    for (i = 0; i < t.length; i += 2) e[t[i]] = t[i + 1];
                for (i in e) n = e[i], n && 1 == n[t[0]] && this.initObj(n, t)
            }
        },
        initScript: function () {
            var e, t = this,
                o = navigator,
                i = document,
                n = o.userAgent || "",
                a = o.vendor || "",
                r = o.platform || "",
                s = o.product || "";
            t.initObj(t, ["$", t]);
            for (e in t.Plugins) t.Plugins[e] && t.initObj(t.Plugins[e], ["$", t, "$$", t.Plugins[e]], 1);
            if (t.convertFuncs(t), t.OS = 100, r) {
                var l = ["Win", 1, "Mac", 2, "Linux", 3, "FreeBSD", 4, "iPhone", 21.1, "iPod", 21.2, "iPad", 21.3, "Win.*CE", 22.1, "Win.*Mobile", 22.2, "Pocket\\s*PC", 22.3, "", 100];
                for (e = l.length - 2; e >= 0; e -= 2)
                    if (l[e] && new RegExp(l[e], "i").test(r)) {
                        t.OS = l[e + 1];
                        break
                    }
            }
            if (t.head = i.getElementsByTagName("head")[0] || i.getElementsByTagName("body")[0] || i.body || null,
                t.isIE = new Function("return/*@cc_on!@*/!1")(), t.verIE = t.isIE && /MSIE\s*(\d+\.?\d*)/i.test(n) ? parseFloat(RegExp.$1, 10) : null, t.verIEfull = null, t.docModeIE = null, t.isIE) {
                var c, u = document.createElement("div");
                try {
                    u.style.behavior = "url(#default#clientcaps)", t.verIEfull = u.getComponentVersion("{89820200-ECBD-11CF-8B85-00AA005B4383}", "componentid").replace(/,/g, ".")
                } catch (h) {}
                c = parseFloat(t.verIEfull || "0", 10), t.docModeIE = i.documentMode || (/back/i.test(i.compatMode || "") ? 5 : c) || t.verIE, t.verIE = c || t.docModeIE
            }
            if (t.ActiveXEnabled = !1, t.isIE) {
                var e, d = ["Msxml2.XMLHTTP", "Msxml2.DOMDocument", "Microsoft.XMLDOM", "ShockwaveFlash.ShockwaveFlash", "TDCCtl.TDCCtl", "Shell.UIHelper", "Scripting.Dictionary", "wmplayer.ocx"];
                for (e = 0; e < d.length; e++)
                    if (t.getAXO(d[e])) {
                        t.ActiveXEnabled = !0;
                        break
                    }
            }
            t.isGecko = /Gecko/i.test(s) && /Gecko\s*\/\s*\d/i.test(n), t.verGecko = t.isGecko ? t.formatNum(/rv\s*\:\s*([\.\,\d]+)/i.test(n) ? RegExp.$1 : "0.9") : null, t.isChrome = /Chrome\s*\/\s*(\d[\d\.]*)/i.test(n), t.verChrome = t.isChrome ? t.formatNum(RegExp.$1) : null, t.isSafari = (/Apple/i.test(a) || !a && !t.isChrome) && /Safari\s*\/\s*(\d[\d\.]*)/i.test(n), t.verSafari = t.isSafari && /Version\s*\/\s*(\d[\d\.]*)/i.test(n) ? t.formatNum(RegExp.$1) : null, t.isOpera = /Opera\s*[\/]?\s*(\d+\.?\d*)/i.test(n), t.verOpera = t.isOpera && (/Version\s*\/\s*(\d+\.?\d*)/i.test(n), !0) ? parseFloat(RegExp.$1, 10) : null, t.addWinEvent("load", t.handler(t.runWLfuncs, t))
        },
        init: function (e) {
            var t, e, o = this,
                i = {
                    status: -3,
                    plugin: 0
                };
            return o.isString(e) ? 1 == e.length ? (o.getVersionDelimiter = e, i) : (e = e.toLowerCase().replace(/\s/g, ""), t = o.Plugins[e], t && t.getVersion ? (i.plugin = t, o.isDefined(t.installed) || (t.installed = null, t.version = null, t.version0 = null, t.getVersionDone = null, t.pluginName = e), o.garbage = !1, o.isIE && !o.ActiveXEnabled && "java" !== e ? (i.status = -2, i) : (i.status = 1, i)) : i) : i
        },
        fPush: function (e, t) {
            var o = this;
            o.isArray(t) && (o.isFunc(e) || o.isArray(e) && e.length > 0 && o.isFunc(e[0])) && t.push(e)
        },
        callArray: function (e) {
            var t, o = this;
            if (o.isArray(e))
                for (t = 0; t < e.length; t++) {
                    if (null === e[t]) return;
                    o.call(e[t]), e[t] = null
                }
        },
        call: function (e) {
            var t = this,
                o = t.isArray(e) ? e.length : -1;
            o > 0 && t.isFunc(e[0]) ? e[0](t, o > 1 ? e[1] : 0, o > 2 ? e[2] : 0, o > 3 ? e[3] : 0) : t.isFunc(e) && e(t)
        },
        getVersionDelimiter: ",",
        $$getVersion: function (e) {
            return function (t, o, i) {
                var n, a, r = e.init(t);
                return r.status < 0 ? null : (n = r.plugin, 1 != n.getVersionDone && (n.getVersion(null, o, i), null === n.getVersionDone && (n.getVersionDone = 1)), e.cleanup(), a = n.version || n.version0, a = a ? a.replace(e.splitNumRegx, e.getVersionDelimiter) : a)
            }
        },
        cleanup: function () {
            var e = this;
            e.garbage && e.isDefined(window.CollectGarbage) && window.CollectGarbage()
        },
        isActiveXObject: function (e, t) {
            var o = this,
                i = !1,
                n = '<object width="1" height="1" style="display:none" ' + e.getCodeBaseVersion(t) + ">" + e.HTML + o.openTag + "/object>";
            if (!o.head) return i;
            o.head.insertBefore(document.createElement("object"), o.head.firstChild), o.head.firstChild.outerHTML = n;
            try {
                o.head.firstChild.classid = e.classID
            } catch (a) {}
            try {
                o.head.firstChild.object && (i = !0)
            } catch (a) {}
            try {
                i && o.head.firstChild.readyState < 4 && (o.garbage = !0)
            } catch (a) {}
            return o.head.removeChild(o.head.firstChild), i
        },
        codebaseSearch: function (e, t) {
            var o = this;
            if (!o.ActiveXEnabled || !e) return null;
            e.BIfuncs && e.BIfuncs.length && null !== e.BIfuncs[e.BIfuncs.length - 1] && o.callArray(e.BIfuncs);
            var i, n = e.SEARCH;
            if (o.isStrNum(t)) return n.match && n.min && o.compareNums(t, n.min) <= 0 ? !0 : n.match && n.max && o.compareNums(t, n.max) >= 0 ? !1 : (i = o.isActiveXObject(e, t), i && (!n.min || o.compareNums(t, n.min) > 0) && (n.min = t), i || n.max && !(o.compareNums(t, n.max) < 0) || (n.max = t), i);
            var a, r, s, l, c, u = [0, 0, 0, 0],
                h = [].concat(n.digits),
                d = n.min ? 1 : 0,
                p = function (t, i) {
                    var n = [].concat(u);
                    return n[t] = i, o.isActiveXObject(e, n.join(","))
                };
            if (n.max) {
                for (l = n.max.split(o.splitNumRegx), a = 0; a < l.length; a++) l[a] = parseInt(l[a], 10);
                l[0] < h[0] && (h[0] = l[0])
            }
            if (n.min) {
                for (c = n.min.split(o.splitNumRegx), a = 0; a < c.length; a++) c[a] = parseInt(c[a], 10);
                c[0] > u[0] && (u[0] = c[0])
            }
            if (c && l)
                for (a = 1; a < c.length && c[a - 1] == l[a - 1]; a++) l[a] < h[a] && (h[a] = l[a]), c[a] > u[a] && (u[a] = c[a]);
            if (n.max)
                for (a = 1; a < h.length; a++)
                    if (l[a] > 0 && 0 == h[a] && h[a - 1] < n.digits[a - 1]) {
                        h[a - 1] += 1;
                        break
                    }
            for (a = 0; a < h.length; a++) {
                for (s = {}, r = 0; 20 > r && !(h[a] - u[a] < 1) && (i = round((h[a] + u[a]) / 2), !s["a" + i]); r++) s["a" + i] = 1, p(a, i) ? (u[a] = i, d = 1) : h[a] = i;
                if (h[a] = u[a], !d && p(a, u[a]) && (d = 1), !d) break
            }
            return d ? u.join(",") : null
        },
        addWinEvent: function (e, t) {
            var o, i = this,
                n = window;
            i.isFunc(t) && (n.addEventListener ? n.addEventListener(e, t, !1) : n.attachEvent ? n.attachEvent("on" + e, t) : (o = n["on" + e], n["on" + e] = i.winHandler(t, o)))
        },
        winHandler: function (e, t) {
            return function () {
                e(), "function" == typeof t && t()
            }
        },
        WLfuncs0: [],
        WLfuncs: [],
        runWLfuncs: function (e) {
            e.winLoaded = !0, e.callArray(e.WLfuncs0), e.callArray(e.WLfuncs), e.onDoneEmptyDiv && e.onDoneEmptyDiv()
        },
        winLoaded: !1,
        $$onWindowLoaded: function (e) {
            return function (t) {
                e.winLoaded ? e.call(t) : e.fPush(t, e.WLfuncs)
            }
        },
        div: null,
        divID: "plugindetect",
        divWidth: 50,
        pluginSize: 1,
        emptyDiv: function () {
            var e, t, o, i, n, a = this;
            if (a.div && a.div.childNodes)
                for (e = a.div.childNodes.length - 1; e >= 0; e--) {
                    if (o = a.div.childNodes[e], o && o.childNodes)
                        for (t = o.childNodes.length - 1; t >= 0; t--) {
                            n = o.childNodes[t];
                            try {
                                o.removeChild(n)
                            } catch (r) {}
                        }
                    if (o) try {
                        a.div.removeChild(o)
                    } catch (r) {}
                }
            if (a.div || (i = document.getElementById(a.divID), i && (a.div = i)), a.div && a.div.parentNode) {
                try {
                    a.div.parentNode.removeChild(a.div)
                } catch (r) {}
                a.div = null
            }
        },
        DONEfuncs: [],
        onDoneEmptyDiv: function () {
            var e, t, o = this;
            if (o.winLoaded && (!o.WLfuncs || !o.WLfuncs.length || null === o.WLfuncs[o.WLfuncs.length - 1])) {
                for (e in o)
                    if (t = o[e], t && t.funcs) {
                        if (3 == t.OTF) return;
                        if (t.funcs.length && null !== t.funcs[t.funcs.length - 1]) return
                    }
                for (e = 0; e < o.DONEfuncs.length; e++) o.callArray(o.DONEfuncs);
                o.emptyDiv()
            }
        },
        getWidth: function (e) {
            if (e) {
                var t = e.scrollWidth || e.offsetWidth,
                    o = this;
                if (o.isNum(t)) return t
            }
            return -1
        },
        getTagStatus: function (e, t, o, i) {
            var n = this,
                a = e.span,
                r = n.getWidth(a),
                s = o.span,
                l = n.getWidth(s),
                c = t.span,
                u = n.getWidth(c);
            if (!(a && s && c && n.getDOMobj(e))) return -2;
            if (u > l || 0 > r || 0 > l || 0 > u || u <= n.pluginSize || n.pluginSize < 1) return 0;
            if (r >= u) return -1;
            try {
                if (r == n.pluginSize && (!n.isIE || 4 == n.getDOMobj(e).readyState)) {
                    if (!e.winLoaded && n.winLoaded) return 1;
                    if (e.winLoaded && n.isNum(i) && (n.isNum(e.count) || (e.count = i), i - e.count >= 10)) return 1
                }
            } catch (h) {}
            return 0
        },
        getDOMobj: function (e, t) {
            var o = this,
                i = e ? e.span : 0,
                n = i && i.firstChild ? 1 : 0;
            try {
                n && t && o.div.focus()
            } catch (a) {}
            return n ? i.firstChild : null
        },
        setStyle: function (e, t) {
            var o, i = e.style;
            if (i && t)
                for (o = 0; o < t.length; o += 2) try {
                    i[t[o]] = t[o + 1]
                } catch (n) {}
        },
        insertDivInBody: function (e, t) {
            var o = this,
                i = "pd33993399",
                n = null,
                a = t ? window.top.document : window.document,
                r = a.getElementsByTagName("body")[0] || a.body;
            if (!r) try {
                a.write('<div id="' + i + '">.' + o.openTag + "/div>"), n = a.getElementById(i)
            } catch (s) {}
            r = a.getElementsByTagName("body")[0] || a.body, r && (r.insertBefore(e, r.firstChild), n && r.removeChild(n))
        },
        insertHTML: function (e, t, o, i, n) {
            var a, r, s, l = document,
                c = this,
                u = l.createElement("span"),
                h = ["outlineStyle", "none", "borderStyle", "none", "padding", "0px", "margin", "0px", "visibility", "visible"],
                d = "outline-style:none;border-style:none;padding:0px;margin:0px;visibility:visible;";
            if (c.isDefined(i) || (i = ""), c.isString(e) && /[^\s]/.test(e)) {
                for (e = e.toLowerCase().replace(/\s/g, ""), a = c.openTag + e + ' width="' + c.pluginSize + '" height="' + c.pluginSize + '" ', a += 'style="' + d + 'display:inline;" ', r = 0; r < t.length; r += 2) /[^\s]/.test(t[r + 1]) && (a += t[r] + '="' + t[r + 1] + '" ');
                for (a += ">", r = 0; r < o.length; r += 2) /[^\s]/.test(o[r + 1]) && (a += c.openTag + 'param name="' + o[r] + '" value="' + o[r + 1] + '" />');
                a += i + c.openTag + "/" + e + ">"
            } else a = i;
            if (c.div || (s = l.getElementById(c.divID), s ? c.div = s : (c.div = l.createElement("div"), c.div.id = c.divID), c.setStyle(c.div, h.concat(["width", c.divWidth + "px", "height", c.pluginSize + 3 + "px", "fontSize", c.pluginSize + 3 + "px", "lineHeight", c.pluginSize + 3 + "px", "verticalAlign", "baseline", "display", "block"])), s || (c.setStyle(c.div, ["position", "absolute", "right", "0px", "top", "0px"]), c.insertDivInBody(c.div))), c.div && c.div.parentNode) {
                c.setStyle(u, h.concat(["fontSize", c.pluginSize + 3 + "px", "lineHeight", c.pluginSize + 3 + "px", "verticalAlign", "baseline", "display", "inline"]));
                try {
                    u.innerHTML = a
                } catch (p) {}
                try {
                    c.div.appendChild(u)
                } catch (p) {}
                return {
                    span: u,
                    winLoaded: c.winLoaded,
                    tagName: e,
                    outerHTML: a
                }
            }
            return {
                span: null,
                winLoaded: c.winLoaded,
                tagName: "",
                outerHTML: a
            }
        },
        Plugins: {
            quicktime: {
                mimeType: ["video/quicktime", "application/x-quicktimeplayer", "image/x-macpaint", "image/x-quicktime"],
                progID: "QuickTimeCheckObject.QuickTimeCheck.1",
                progID0: "QuickTime.QuickTime",
                classID: "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",
                minIEver: 7,
                HTML: '<param name="src" value="" /><param name="controller" value="false" />',
                getCodeBaseVersion: function (e) {
                    return 'codebase="#version=' + e + '"'
                },
                SEARCH: {
                    min: 0,
                    max: 0,
                    match: 0,
                    digits: [16, 128, 128, 0]
                },
                getVersion: function (e) {
                    var t, o = this,
                        i = o.$,
                        n = null,
                        a = null;
                    if (i.isIE) {
                        if (i.isStrNum(e) && (t = e.split(i.splitNumRegx), t.length > 3 && parseInt(t[3], 10) > 0 && (t[3] = "9999"), e = t.join(",")), i.isStrNum(e) && i.verIE >= o.minIEver && o.canUseIsMin() > 0) return o.installed = o.isMin(e), void(o.getVersionDone = 0);
                        o.getVersionDone = 1, !n && i.verIE >= o.minIEver && (n = o.CDBASE2VER(i.codebaseSearch(o))), n || (a = i.getAXO(o.progID), a && a.QuickTimeVersion && (n = a.QuickTimeVersion.toString(16), n = parseInt(n.charAt(0), 16) + "." + parseInt(n.charAt(1), 16) + "." + parseInt(n.charAt(2), 16)))
                    } else i.hasMimeType(o.mimeType) && (a = 3 != i.OS ? i.findNavPlugin("QuickTime.*Plug-?in", 0) : null, a && a.name && (n = i.getNum(a.name)));
                    o.installed = n ? 1 : a ? 0 : -1, o.version = i.formatNum(n, 3)
                },
                cdbaseUpper: ["7,60,0,0", "0,0,0,0"],
                cdbaseLower: ["7,50,0,0", null],
                cdbase2ver: [function (e, t) {
                    var o = t.split(e.$.splitNumRegx);
                    return [o[0], o[1].charAt(0), o[1].charAt(1), o[2]].join(",")
                }, null],
                CDBASE2VER: function (e) {
                    var t, o = this,
                        i = o.$,
                        n = o.cdbaseUpper,
                        a = o.cdbaseLower;
                    if (e)
                        for (e = i.formatNum(e), t = 0; t < n.length; t++)
                            if (n[t] && i.compareNums(e, n[t]) < 0 && a[t] && i.compareNums(e, a[t]) >= 0 && o.cdbase2ver[t]) return o.cdbase2ver[t](o, e);
                    return e
                },
                canUseIsMin: function () {
                    var e, t = this,
                        o = t.$,
                        i = t.canUseIsMin,
                        n = t.cdbaseUpper,
                        a = t.cdbaseLower;
                    if (!i.value)
                        for (i.value = -1, e = 0; e < n.length; e++) {
                            if (n[e] && o.codebaseSearch(t, n[e])) {
                                i.value = 1;
                                break
                            }
                            if (a[e] && o.codebaseSearch(t, a[e])) {
                                i.value = -1;
                                break
                            }
                        }
                    return t.SEARCH.match = 1 == i.value ? 1 : 0, i.value
                },
                isMin: function (e) {
                    var t = this,
                        o = t.$;
                    return o.codebaseSearch(t, e) ? .7 : -1
                }
            },
            flash: {
                mimeType: "application/x-shockwave-flash",
                progID: "ShockwaveFlash.ShockwaveFlash",
                classID: "clsid:D27CDB6E-AE6D-11CF-96B8-444553540000",
                getVersion: function () {
                    var e, t, o, i, n = function (e) {
                            if (!e) return null;
                            var t = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(e);
                            return t ? t[0].replace(/[rRdD\.]/g, ",").replace(/\s/g, "") : null
                        },
                        a = this,
                        r = a.$,
                        s = null,
                        l = null,
                        c = null;
                    if (r.isIE) {
                        for (e = 15; e > 2; e--)
                            if (l = r.getAXO(a.progID + "." + e)) {
                                c = e.toString();
                                break
                            }
                        if (l || (l = r.getAXO(a.progID)), "6" == c) try {
                            l.AllowScriptAccess = "always"
                        } catch (u) {
                            return "6,0,21,0"
                        }
                        try {
                            s = n(l.GetVariable("$version"))
                        } catch (u) {}!s && c && (s = c)
                    } else {
                        if (o = r.hasMimeType(a.mimeType)) {
                            t = r.getDOMobj(r.insertHTML("object", ["type", a.mimeType], [], "", a));
                            try {
                                s = r.getNum(t.GetVariable("$version"))
                            } catch (u) {}
                        }
                        s || (i = o ? o.enabledPlugin : null, i && i.description && (s = n(i.description)), s && (s = r.getPluginFileVersion(i, s)))
                    }
                    return a.installed = s ? 1 : -1, a.version = r.formatNum(s), !0
                }
            },
            shockwave: {
                mimeType: "application/x-director",
                progID: "SWCtl.SWCtl",
                classID: "clsid:166B1BCA-3F9C-11CF-8075-444553540000",
                getVersion: function () {
                    var e, t = null,
                        o = null,
                        i = this,
                        n = i.$;
                    if (n.isIE) {
                        try {
                            o = n.getAXO(i.progID).ShockwaveVersion("")
                        } catch (a) {}
                        n.isString(o) && o.length > 0 ? t = n.getNum(o) : n.getAXO(i.progID + ".8") ? t = "8" : n.getAXO(i.progID + ".7") ? t = "7" : n.getAXO(i.progID + ".1") && (t = "6")
                    } else e = n.findNavPlugin("Shockwave\\s*for\\s*Director"), e && e.description && n.hasMimeType(i.mimeType) && (t = n.getNum(e.description)), t && (t = n.getPluginFileVersion(e, t));
                    i.installed = t ? 1 : -1, i.version = n.formatNum(t)
                }
            },
            zz: 0
        }
    };
    PluginDetect.initScript();
    var gArgCountErr = 'The "%%" function requires an even number of arguments.\nArguments should be in the form "atttributeName", "attributeValue", ...',
        gTagAttrs = null,
        gQTGeneratorVersion = 1;
    ! function () {
        function e(e) {
            return e = e || location.href, "#" + e.replace(/^[^#]*#?(.*)$/, "$1")
        }
        var t, o = document,
            i = $.event.special,
            n = o.documentMode,
            a = "oniLightBoxHashChange" in window && (void 0 === n || n > 7);
        $.fn.iLightBoxHashChange = function (e) {
            return e ? this.bind("iLightBoxHashChange", e) : this.trigger("iLightBoxHashChange")
        }, $.fn.iLightBoxHashChange.delay = 50, i.iLightBoxHashChange = $.extend(i.iLightBoxHashChange, {
            setup: function () {
                return a ? !1 : void $(t.start)
            },
            teardown: function () {
                return a ? !1 : void $(t.stop)
            }
        }), t = function () {
            function t() {
                var o = e(),
                    n = c(r);
                o !== r ? (l(r = o, n), $(window).trigger("iLightBoxHashChange")) : n !== r && (location.href = location.href.replace(/#.*/, "") + n), i = setTimeout(t, $.fn.iLightBoxHashChange.delay)
            }
            var i, n = {},
                r = e(),
                s = function (e) {
                    return e
                },
                l = s,
                c = s;
            return n.start = function () {
                i || t()
            }, n.stop = function () {
                i && clearTimeout(i), i = void 0
            }, browser.msie && !a && function () {
                var i, a;
                n.start = function () {
                    i || (a = (a = $.fn.iLightBoxHashChange.src) && a + e(), i = $('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
                        a || l(e()), t()
                    }).attr("src", a || "javascript:0").insertAfter("body")[0].contentWindow, o.onpropertychange = function () {
                        try {
                            "title" === event.propertyName && (i.document.title = o.title)
                        } catch (e) {}
                    })
                }, n.stop = s, c = function () {
                    return e(i.location.href)
                }, l = function (e, t) {
                    var n = i.document,
                        a = $.fn.iLightBoxHashChange.domain;
                    e !== t && (n.title = o.title, n.open(), a && n.write('<script>document.domain="' + a + '"</script>'), n.close(), i.location.hash = e)
                }
            }(), n
        }()
    }(), Array.prototype.filter || (Array.prototype.filter = function (e) {
        "use strict";
        if (null == this) throw new TypeError;
        var t = Object(this),
            o = t.length >>> 0;
        if ("function" != typeof e) throw new TypeError;
        for (var i = [], n = arguments[1], a = 0; o > a; a++)
            if (a in t) {
                var r = t[a];
                e.call(n, r, a, t) && i.push(r)
            }
        return i
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
        var o;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var i = Object(this),
            n = i.length >>> 0;
        if (0 === n) return -1;
        var a = +t || 0;
        if (abs(a) === 1 / 0 && (a = 0), a >= n) return -1;
        for (o = max(a >= 0 ? a : n - abs(a), 0); n > o;) {
            if (o in i && i[o] === e) return o;
            o++
        }
        return -1
    }), Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function (e) {
        "use strict";
        if (null == this) throw new TypeError;
        var t = Object(this),
            o = t.length >>> 0;
        if (0 === o) return -1;
        var i = o;
        arguments.length > 1 && (i = Number(arguments[1]), i != i ? i = 0 : 0 != i && i != 1 / 0 && i != -(1 / 0) && (i = (i > 0 || -1) * floor(abs(i))));
        for (var n = i >= 0 ? min(i, o - 1) : o - abs(i); n >= 0; n--)
            if (n in t && t[n] === e) return n;
        return -1
    })
}(jQuery, this);
! function (e) {
    function t(t) {
        var n = t || window.event,
            i = [].slice.call(arguments, 1),
            l = 0,
            s = 0,
            o = 0;
        return t = e.event.fix(n), t.type = "mousewheel", n.wheelDelta && (l = n.wheelDelta / 120), n.detail && (l = -n.detail / 3), o = l, void 0 !== n.axis && n.axis === n.HORIZONTAL_AXIS && (o = 0, s = -1 * l), void 0 !== n.wheelDeltaY && (o = n.wheelDeltaY / 120), void 0 !== n.wheelDeltaX && (s = -1 * n.wheelDeltaX / 120), i.unshift(t, l, s, o), (e.event.dispatch || e.event.handle).apply(this, i)
    }
    var n = ["DOMMouseScroll", "mousewheel"];
    if (e.event.fixHooks)
        for (var i = n.length; i;) e.event.fixHooks[n[--i]] = e.event.mouseHooks;
    e.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener)
                for (var e = n.length; e;) this.addEventListener(n[--e], t, !1);
            else this.onmousewheel = t
        },
        teardown: function () {
            if (this.removeEventListener)
                for (var e = n.length; e;) this.removeEventListener(n[--e], t, !1);
            else this.onmousewheel = null
        }
    }, e.fn.extend({
        mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function (e) {
            return this.unbind("mousewheel", e)
        }
    })
}(jQuery);
! function (e, n, t) {
    for (var i, a = 0, m = function (e) {
            i && (n.requestAnimationFrame(m, e), jQuery.fx.tick())
        }, r = ["ms", "moz", "webkit", "o"], o = 0, u = r.length; u > o && !n.requestAnimationFrame; ++o) n.requestAnimationFrame = n[r[o] + "RequestAnimationFrame"], n.cancelAnimationFrame = n[r[o] + "CancelAnimationFrame"] || n[r[o] + "CancelRequestAnimationFrame"];
    n.requestAnimationFrame || (n.requestAnimationFrame = function (e, t) {
        var i = (new Date).getTime(),
            m = i - a,
            r = Math.max(0, 16 - m),
            o = n.setTimeout(function () {
                e(i + r)
            }, r);
        return a = i + r, o
    }), n.cancelAnimationFrame || (n.cancelAnimationFrame = function (e) {
        clearTimeout(e)
    }), jQuery.fx.timer = function (e) {
        e() && jQuery.timers.push(e) && !i && (i = !0, m(e.elem))
    }, jQuery.fx.stop = function () {
        i = !1
    }
}(jQuery, this);
! function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
    "use strict";

    function i(i, s, a) {
        function u(t, e, n) {
            var o, s = "$()." + i + '("' + e + '")';
            return t.each(function (t, u) {
                var h = a.data(u, i);
                if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                var l = d.apply(h, n);
                o = void 0 === o ? l : o
            }), void 0 !== o ? o : t
        }

        function h(t, e) {
            t.each(function (t, n) {
                var o = a.data(n, i);
                o ? (o.option(e), o._init()) : (o = new s(n, e), a.data(n, i, o))
            })
        }
        a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function (t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);
                return u(this, t, e)
            }
            return h(this, t), this
        }, n(a))
    }

    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var o = Array.prototype.slice,
        s = t.console,
        r = "undefined" == typeof s ? function () {} : function (t) {
            s.error(t)
        };
    return n(e || t.jQuery), i
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || {};
            return n[e] = !0, this
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            e = e || [];
            for (var s = this._onceEvents && this._onceEvents[t]; o;) {
                var r = s && s[o];
                r && (this.off(t, o), delete s[o]), o.apply(this, e), n += r ? 0 : 1, o = i[n]
            }
            return this
        }
    }, t
}),
function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
    "use strict";

    function t(t) {
        var e = parseFloat(t),
            i = -1 == t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function e() {}

    function i() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; h > e; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }

    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
    }

    function o() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            s.isBoxSizeOuter = r = 200 == t(o.width), i.removeChild(e)
        }
    }

    function s(e) {
        if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var s = n(e);
            if ("none" == s.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; h > l; l++) {
                var f = u[l],
                    c = s[f],
                    m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight,
                y = a.paddingTop + a.paddingBottom,
                g = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth,
                I = a.borderTopWidth + a.borderBottomWidth,
                z = d && r,
                x = t(s.width);
            x !== !1 && (a.width = x + (z ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
        }
    }
    var r, a = "undefined" == typeof console ? e : function (t) {
            console.error(t)
        },
        u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        h = u.length,
        d = !1;
    return s
}),
function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
    "use strict";
    var t = function () {
        var t = Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i],
                o = n + "MatchesSelector";
            if (t[o]) return o
        }
    }();
    return function (e, i) {
        return e[t](i)
    }
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function (t, e) {
    var i = {};
    i.extend = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function (t, e) {
        return (t % e + e) % e
    }, i.makeArray = function (t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e
    }, i.removeFrom = function (t, e) {
        var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
    }, i.getParent = function (t, i) {
        for (; t != document.body;)
            if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function (t, n) {
        t = i.makeArray(t);
        var o = [];
        return t.forEach(function (t) {
            if (t instanceof HTMLElement) {
                if (!n) return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) o.push(i[s])
            }
        }), o
    }, i.debounceMethod = function (t, e, i) {
        var n = t.prototype[e],
            o = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments,
                s = this;
            this[o] = setTimeout(function () {
                n.apply(s, e), delete s[o]
            }, i || 100)
        }
    }, i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var n = t.console;
    return i.htmlInit = function (e, o) {
        i.docReady(function () {
            var s = i.toDashed(o),
                r = "data-" + s,
                a = document.querySelectorAll("[" + r + "]"),
                u = document.querySelectorAll(".js-" + s),
                h = i.makeArray(a).concat(i.makeArray(u)),
                d = r + "-options",
                l = t.jQuery;
            h.forEach(function (t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s)
                } catch (a) {
                    return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var u = new e(t, i);
                l && l.data(t, o, u)
            })
        })
    }, i
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {
    "use strict";

    function i(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function n(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function o(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }
    var s = document.documentElement.style,
        r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        u = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[r],
        h = {
            transform: a,
            transition: r,
            transitionDuration: r + "Duration",
            transitionProperty: r + "Property",
            transitionDelay: r + "Delay"
        },
        d = n.prototype = Object.create(t.prototype);
    d.constructor = n, d._create = function () {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, d.getSize = function () {
        this.size = e(this.element)
    }, d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
            var n = h[i] || i;
            e[n] = t[i]
        }
    }, d.getPosition = function () {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            n = t[e ? "left" : "right"],
            o = t[i ? "top" : "bottom"],
            s = this.layout.size,
            r = -1 != n.indexOf("%") ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
            a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * s.height : parseInt(o, 10);
        r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
    }, d.layoutPosition = function () {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            o = i ? "paddingLeft" : "paddingRight",
            s = i ? "left" : "right",
            r = i ? "right" : "left",
            a = this.position.x + t[o];
        e[s] = this.getXValue(a), e[r] = "";
        var u = n ? "paddingTop" : "paddingBottom",
            h = n ? "top" : "bottom",
            d = n ? "bottom" : "top",
            l = this.position.y + t[u];
        e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
            n = this.position.y,
            o = parseInt(t, 10),
            s = parseInt(e, 10),
            r = o === this.position.x && s === this.position.y;
        if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
        var a = t - i,
            u = e - n,
            h = {};
        h.transform = this.getTranslate(a, u), this.transition({
            to: h,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop");
        return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var l = "opacity," + o(a);
    d.enableTransition = function () {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(u, this, !1)
        }
    }, d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
    }, d.onotransitionend = function (t) {
        this.ontransitionend(t)
    };
    var f = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn,
                n = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                var o = e.onEnd[n];
                o.call(this), delete e.onEnd[n]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
    }, d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function () {
        this.css(c)
    }, d.stagger = function (t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, d.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, d.reveal = function () {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, d.hide = function () {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onHideTransitionEnd = function () {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, d.destroy = function () {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, n
}),
function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, s) {
        return e(t, i, n, o, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, n, o) {
    "use strict";

    function s(t, e) {
        var i = n.getQueryElement(t);
        if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, h && (this.$element = h(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
        var o = ++l;
        this.element.outlayerGUID = o, f[o] = this, this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }

    function r(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            n = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var o = m[n] || 1;
        return i * o
    }
    var u = t.console,
        h = t.jQuery,
        d = function () {},
        l = 0,
        f = {};
    s.namespace = "outlayer", s.Item = o, s.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var c = s.prototype;
    n.extend(c, e.prototype), c.option = function (t) {
        n.extend(this.options, t)
    }, c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, c._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, c.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, c._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var s = e[o],
                r = new i(s, this);
            n.push(r)
        }
        return n
    }, c._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }, c.getItemElements = function () {
        return this.items.map(function (t) {
            return t.element
        })
    }, c.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, c._init = c.layout, c._resetLayout = function () {
        this.getSize()
    }, c.getSize = function () {
        this.size = i(this.element)
    }, c._getMeasurement = function (t, e) {
        var n, o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
    }, c.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
            return !t.isIgnored
        })
    }, c._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function (t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
            }, this), this._processLayoutQueue(i)
        }
    }, c._getItemLayoutPosition = function () {
        return {
            x: 0,
            y: 0
        }
    }, c._processLayoutQueue = function (t) {
        this.updateStagger(), t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, c.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
    }, c._positionItem = function (t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
    }, c._postLayout = function () {
        this.resizeContainer()
    }, c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, c._emitCompleteOnItems = function (t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }

        function n() {
            r++, r == s && i()
        }
        var o = this,
            s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function (e) {
            e.once(t, n)
        })
    }, c.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), h)
            if (this.$element = this.$element || h(this.element), e) {
                var o = h.Event(e);
                o.type = t, this.$element.trigger(o, i)
            } else this.$element.trigger(t, i)
    }, c.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, c.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, c.stamp = function (t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, c.unstamp = function (t) {
        t = this._find(t), t && t.forEach(function (t) {
            n.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, c._find = function (t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
    }, c._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, c._manageStamp = d, c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
            n = this._boundingRect,
            o = i(t),
            s = {
                left: e.left - n.left - o.marginLeft,
                top: e.top - n.top - o.marginTop,
                right: n.right - e.right - o.marginRight,
                bottom: n.bottom - e.bottom - o.marginBottom
            };
        return s
    }, c.handleEvent = n.handleEvent, c.bindResize = function () {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, c.unbindResize = function () {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, c.onresize = function () {
        this.resize()
    }, n.debounceMethod(s, "onresize", 100), c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, c.needsResizeLayout = function () {
        var t = i(this.element),
            e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, c.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, c.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, c.reveal = function (t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, c.hide = function (t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, c.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, c.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e)
    }, c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, c.getItems = function (t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, c.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
            t.remove(), n.removeFrom(this.items, t)
        }, this)
    }, c.destroy = function () {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
    }, s.data = function (t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e]
    }, s.create = function (t, e) {
        var i = r(s);
        return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(o), n.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
    };
    var m = {
        ms: 1,
        s: 1e3
    };
    return s.Item = o, s
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {
    "use strict";

    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype),
        n = i._create;
    i._create = function () {
        this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
    }, i.updateSortData = function () {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData,
                e = this.layout._sorters;
            for (var i in t) {
                var n = e[i];
                this.sortData[i] = n(this.element, this)
            }
        }
    };
    var o = i.destroy;
    return i.destroy = function () {
        o.apply(this, arguments), this.css({
            display: ""
        })
    }, e
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (t, e) {
    "use strict";

    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    var n = i.prototype,
        o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return o.forEach(function (t) {
        n[t] = function () {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }), n.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
            i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, n._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments)
    }, n.getColumnWidth = function () {
        this.getSegmentSize("column", "Width")
    }, n.getRowHeight = function () {
        this.getSegmentSize("row", "Height")
    }, n.getSegmentSize = function (t, e) {
        var i = t + e,
            n = "outer" + e;
        if (this._getMeasurement(i, n), !this[i]) {
            var o = this.getFirstItemSize();
            this[i] = o && o[n] || this.isotope.size["inner" + e]
        }
    }, n.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, n.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments)
    }, n.getSize = function () {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function (t, e) {
        function o() {
            i.apply(this, arguments)
        }
        return o.prototype = Object.create(n), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
    }, i
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, e) {
    var i = t.create("masonry");
    return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0
    }, i.prototype.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter,
            o = this.containerWidth + this.gutter,
            s = o / n,
            r = n - o % n,
            a = r && 1 > r ? "round" : "floor";
        s = Math[a](s), this.cols = Math.max(s, 1)
    }, i.prototype.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            n = e(i);
        this.containerWidth = n && n.innerWidth
    }, i.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = e && 1 > e ? "round" : "ceil",
            n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var o = this._getColGroup(n), s = Math.min.apply(Math, o), r = o.indexOf(s), a = {
                x: this.columnWidth * r,
                y: s
            }, u = s + t.size.outerHeight, h = this.cols + 1 - o.length, d = 0; h > d; d++) this.colYs[r + d] = u;
        return a
    }, i.prototype._getColGroup = function (t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
            var o = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, o)
        }
        return e
    }, i.prototype._manageStamp = function (t) {
        var i = e(t),
            n = this._getElementOffset(t),
            o = this._getOption("originLeft"),
            s = o ? n.left : n.right,
            r = s + i.outerWidth,
            a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? n.top : n.bottom) + i.outerHeight, l = a; u >= l; l++) this.colYs[l] = Math.max(d, this.colYs[l])
    }, i.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, i.prototype._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, i.prototype.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
        n = i.prototype,
        o = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var s in e.prototype) o[s] || (n[s] = e.prototype[s]);
    var r = n.measureColumns;
    n.measureColumns = function () {
        this.items = this.isotope.filteredItems, r.call(this)
    };
    var a = n._getOption;
    return n._getOption = function (t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
        i = e.prototype;
    return i._resetLayout = function () {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var n = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
    }, i._getContainerSize = function () {
        return {
            height: this.maxY
        }
    }, e
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    "use strict";
    var e = t.create("vertical", {
            horizontalAlignment: 0
        }),
        i = e.prototype;
    return i._resetLayout = function () {
        this.y = 0
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += t.size.outerHeight, {
            x: e,
            y: i
        }
    }, i._getContainerSize = function () {
        return {
            height: this.y
        }
    }, e
}),
function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (i, n, o, s, r, a) {
        return e(t, i, n, o, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function (t, e, i, n, o, s, r) {
    function a(t, e) {
        return function (i, n) {
            for (var o = 0; o < t.length; o++) {
                var s = t[o],
                    r = i.sortData[s],
                    a = n.sortData[s];
                if (r > a || a > r) {
                    var u = void 0 !== e[s] ? e[s] : e,
                        h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }
    var u = t.jQuery,
        h = String.prototype.trim ? function (t) {
            return t.trim()
        } : function (t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        d = e.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    d.Item = s, d.LayoutMode = r;
    var l = d.prototype;
    l._create = function () {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in r.modes) this._initLayoutMode(t)
    }, l.reloadItems = function () {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, l._itemize = function () {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var n = t[i];
            n.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, l._initLayoutMode = function (t) {
        var e = r.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, l.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, l._init = l.arrange, l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
    }, l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e, e
    }, l._bindArrangeComplete = function () {
        function t() {
            e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
        }
        var e, i, n, o = this;
        this.once("layoutComplete", function () {
            e = !0, t()
        }), this.once("hideComplete", function () {
            i = !0, t()
        }), this.once("revealComplete", function () {
            n = !0, t()
        })
    }, l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a), u && a.isHidden ? n.push(a) : u || a.isHidden || o.push(a)
            }
        }
        return {
            matches: i,
            needReveal: n,
            needHide: o
        }
    }, l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering ? function (e) {
            return u(e.element).is(t)
        } : "function" == typeof t ? function (e) {
            return t(e.element)
        } : function (e) {
            return n(e.element, t)
        }
    }, l.updateSortData = function (t) {
        var e;
        t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }, l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.updateSortData()
        }
    };
    var f = function () {
        function t(t) {
            if ("string" != typeof t) return t;
            var i = h(t).split(" "),
                n = i[0],
                o = n.match(/^\[(.+)\]$/),
                s = o && o[1],
                r = e(s, n),
                a = d.sortDataParsers[i[1]];
            return t = a ? function (t) {
                return t && a(r(t))
            } : function (t) {
                return t && r(t)
            }
        }

        function e(t, e) {
            return t ? function (e) {
                return e.getAttribute(t)
            } : function (t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }
        return t
    }();
    d.sortDataParsers = {
        parseInt: function (t) {
            return parseInt(t, 10)
        },
        parseFloat: function (t) {
            return parseFloat(t)
        }
    }, l._sort = function () {
        var t = this.options.sortBy;
        if (t) {
            var e = [].concat.apply(t, this.sortHistory),
                i = a(e, this.options.sortAscending);
            this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
        }
    }, l._mode = function () {
        var t = this.options.layoutMode,
            e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t)
    }, l._manageStamp = function (t) {
        this._mode()._manageStamp(t)
    }, l._getContainerSize = function () {
        return this._mode()._getContainerSize()
    }, l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout()
    }, l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, n, o = e.length;
            for (i = 0; o > i; i++) n = e[i], this.element.appendChild(n.element);
            var s = this._filter(e).matches;
            for (i = 0; o > i; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; o > i; i++) delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    };
    var c = l.remove;
    return l.remove = function (t) {
        t = o.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, n = 0; i && i > n; n++) {
            var s = e[n];
            o.removeFrom(this.filteredItems, s)
        }
    }, l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = t.apply(this, e);
        return this.options.transitionDuration = i, n
    }, l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
            return t.element
        })
    }, d
});
! function (e, t, a) {
    "use strict";

    function n(t, p, g) {
        function N(a) {
            var n = 0,
                i = Ae.length;
            if (ze.old = e.extend({}, ze), be = ye ? 0 : we[ge.horizontal ? "width" : "height"](), Be = Ce[ge.horizontal ? "width" : "height"](), Pe = ye ? t : Ie[ge.horizontal ? "outerWidth" : "outerHeight"](), Ae.length = 0, ze.start = 0, ze.end = E(Pe - be, 0), Le) {
                n = qe.length, Ee = Ie.children(ge.itemSelector), qe.length = 0;
                var r, s = c(Ie, ge.horizontal ? "paddingLeft" : "paddingTop"),
                    o = c(Ie, ge.horizontal ? "paddingRight" : "paddingBottom"),
                    l = "border-box" === e(Ee).css("boxSizing"),
                    u = "none" !== Ee.css("float"),
                    f = 0,
                    v = Ee.length - 1;
                Pe = 0, Ee.each(function (t, a) {
                    var n = e(a),
                        i = a.getBoundingClientRect(),
                        l = ge.horizontal ? i.width || i.right - i.left : i.height || i.bottom - i.top,
                        d = c(n, ge.horizontal ? "marginLeft" : "marginTop"),
                        h = c(n, ge.horizontal ? "marginRight" : "marginBottom"),
                        p = l + d + h,
                        g = !d || !h,
                        m = {};
                    m.el = a, m.size = g ? l : p, m.half = m.size / 2, m.start = Pe + (g ? d : 0), m.center = m.start - (be / 2 - m.size / 2), m.end = m.start - be + m.size, t || (Pe += s), Pe += p, ge.horizontal || u || h && d && t > 0 && (Pe -= q(d, h)), t === v && (m.end += o, Pe += o, f = g ? h : 0), qe.push(m), r = m
                }), Ie[0].style[ge.horizontal ? "width" : "height"] = (l ? Pe : Pe - s - o) + "px", Pe -= f, qe.length ? (ze.start = qe[0][je ? "center" : "start"], ze.end = je ? r.center : Pe > be ? r.end : ze.start) : ze.start = ze.end = 0
            }
            if (ze.center = ze.end / 2 + ze.start / 2, $(), Se.length && Be > 0 && (ge.dynamicHandle ? (Te = ze.start === ze.end ? Be : Be * be / Pe, Te = d(Te, ge.minHandleSize, Be), Se[0].style[ge.horizontal ? "width" : "height"] = Te + "px") : Te = Se[ge.horizontal ? "outerWidth" : "outerHeight"](), ke.end = Be - Te, nt || Y()), !ye && be > 0) {
                var h = ze.start,
                    p = "";
                if (Le) e.each(qe, function (e, t) {
                    je ? Ae.push(t.center) : t.start + t.size > h && h <= ze.end && (h = t.start, Ae.push(h), h += be, h > ze.end && h < ze.end + be && Ae.push(ze.end))
                });
                else
                    for (; h - be < ze.end;) Ae.push(h), h += be;
                if (xe[0] && i !== Ae.length) {
                    for (var g = 0; g < Ae.length; g++) p += ge.pageBuilder.call(me, g);
                    De = xe.html(p).children(), De.eq(Oe.activePage).addClass(ge.activeClass)
                }
            }
            if (Oe.slideeSize = Pe, Oe.frameSize = be, Oe.sbSize = Be, Oe.handleSize = Te, Le) {
                a && null != ge.startAt && (W(ge.startAt), me[Fe ? "toCenter" : "toStart"](ge.startAt));
                var m = qe[Oe.activeItem];
                H(Fe && m ? m.center : d(ze.dest, ze.start, ze.end))
            } else a ? null != ge.startAt && H(ge.startAt, 1) : H(d(ze.dest, ze.start, ze.end));
            ve("load")
        }

        function H(e, t, a) {
            if (Le && tt.released && !a) {
                var n = U(e),
                    i = e > ze.start && e < ze.end;
                Fe ? (i && (e = qe[n.centerItem].center), je && ge.activateMiddle && W(n.centerItem)) : i && (e = qe[n.firstItem].start)
            }
            tt.init && tt.slidee && ge.elasticBounds ? e > ze.end ? e = ze.end + (e - ze.end) / 6 : e < ze.start && (e = ze.start + (e - ze.start) / 6) : e = d(e, ze.start, ze.end), _e.start = +new Date, _e.time = 0, _e.from = ze.cur, _e.to = e, _e.delta = e - ze.cur, _e.tweesing = tt.tweese || tt.init && !tt.slidee, _e.immediate = !_e.tweesing && (t || tt.init && tt.slidee || !ge.speed), tt.tweese = 0, e !== ze.dest && (ze.dest = e, ve("change"), nt || X()), J(), $(), Q(), M()
        }

        function X() {
            if (me.initialized) {
                if (!nt) return nt = w(X), void(tt.released && ve("moveStart"));
                _e.immediate ? ze.cur = _e.to : _e.tweesing ? (_e.tweeseDelta = _e.to - ze.cur, x(_e.tweeseDelta) < .1 ? ze.cur = _e.to : ze.cur += _e.tweeseDelta * (tt.released ? ge.swingSpeed : ge.syncSpeed)) : (_e.time = q(+new Date - _e.start, ge.speed), ze.cur = _e.from + _e.delta * e.easing[ge.easing](_e.time / ge.speed, _e.time, 0, 1, ge.speed)), _e.to === ze.cur ? (ze.cur = _e.to, tt.tweese = nt = 0) : nt = w(X), ve("move"), ye || (f ? Ie[0].style[f] = v + (ge.horizontal ? "translateX" : "translateY") + "(" + -ze.cur + "px)" : Ie[0].style[ge.horizontal ? "left" : "top"] = -ze.cur + "px"), !nt && tt.released && ve("moveEnd"), Y()
            }
        }

        function Y() {
            Se.length && (ke.cur = ze.start === ze.end ? 0 : ((tt.init && !tt.slidee ? ze.dest : ze.cur) - ze.start) / (ze.end - ze.start) * ke.end, ke.cur = d(ke.cur, ke.start, ke.end), Ve.hPos !== ke.cur && (Ve.hPos = ke.cur, f ? Se[0].style[f] = v + (ge.horizontal ? "translateX" : "translateY") + "(" + ke.cur + "px)" : Se[0].style[ge.horizontal ? "left" : "top"] = ke.cur + "px"))
        }

        function M() {
            De[0] && Ve.page !== Oe.activePage && (Ve.page = Oe.activePage, De.removeClass(ge.activeClass).eq(Oe.activePage).addClass(ge.activeClass), ve("activePage", Ve.page))
        }

        function j() {
            et.speed && ze.cur !== (et.speed > 0 ? ze.end : ze.start) || me.stop(), st = tt.init ? w(j) : 0, et.now = +new Date, et.pos = ze.cur + (et.now - et.lastTime) / 1e3 * et.speed, H(tt.init ? et.pos : et.pos), tt.init || ze.cur !== ze.dest || ve("moveEnd"), et.lastTime = et.now
        }

        function F(e, t, n) {
            if ("boolean" === i(t) && (n = t, t = a), t === a) H(ze[e], n);
            else {
                if (Fe && "center" !== e) return;
                var r = me.getPos(t);
                r && H(r[e], n, !Fe)
            }
        }

        function L(e) {
            return null != e ? l(e) ? e >= 0 && e < qe.length ? e : -1 : Ee.index(e) : -1
        }

        function R(e) {
            return L(l(e) && 0 > e ? e + qe.length : e)
        }

        function W(e, t) {
            var a = L(e);
            return !Le || 0 > a ? !1 : ((Ve.active !== a || t) && (Ee.eq(Oe.activeItem).removeClass(ge.activeClass), Ee.eq(a).addClass(ge.activeClass), Ve.active = Oe.activeItem = a, Q(), ve("active", a)), a)
        }

        function U(e) {
            e = d(l(e) ? e : ze.dest, ze.start, ze.end);
            var t = {},
                a = je ? 0 : be / 2;
            if (!ye)
                for (var n = 0, i = Ae.length; i > n; n++) {
                    if (e >= ze.end || n === Ae.length - 1) {
                        t.activePage = Ae.length - 1;
                        break
                    }
                    if (e <= Ae[n] + a) {
                        t.activePage = n;
                        break
                    }
                }
            if (Le) {
                for (var r = !1, s = !1, o = !1, c = 0, u = qe.length; u > c; c++)
                    if (r === !1 && e <= qe[c].start + qe[c].half && (r = c), o === !1 && e <= qe[c].center + qe[c].half && (o = c), c === u - 1 || e <= qe[c].end + qe[c].half) {
                        s = c;
                        break
                    }
                t.firstItem = l(r) ? r : 0, t.centerItem = l(o) ? o : t.firstItem, t.lastItem = l(s) ? s : t.centerItem
            }
            return t
        }

        function $(t) {
            e.extend(Oe, U(t))
        }

        function Q() {
            var e = ze.dest <= ze.start,
                t = ze.dest >= ze.end,
                a = (e ? 1 : 0) | (t ? 2 : 0);
            if (Ve.slideePosState !== a && (Ve.slideePosState = a, Ge.is("button,input") && Ge.prop("disabled", e), Je.is("button,input") && Je.prop("disabled", t), Ge.add($e)[e ? "addClass" : "removeClass"](ge.disabledClass), Je.add(Ue)[t ? "addClass" : "removeClass"](ge.disabledClass)), Ve.fwdbwdState !== a && tt.released && (Ve.fwdbwdState = a, $e.is("button,input") && $e.prop("disabled", e), Ue.is("button,input") && Ue.prop("disabled", t)), Le && null != Oe.activeItem) {
                var n = 0 === Oe.activeItem,
                    i = Oe.activeItem >= qe.length - 1,
                    r = (n ? 1 : 0) | (i ? 2 : 0);
                Ve.itemsButtonState !== r && (Ve.itemsButtonState = r, Qe.is("button,input") && Qe.prop("disabled", n), Ze.is("button,input") && Ze.prop("disabled", i), Qe[n ? "addClass" : "removeClass"](ge.disabledClass), Ze[i ? "addClass" : "removeClass"](ge.disabledClass))
            }
        }

        function Z(e, t, a) {
            if (e = R(e), t = R(t), e > -1 && t > -1 && e !== t && (!a || t !== e - 1) && (a || t !== e + 1)) {
                Ee.eq(e)[a ? "insertAfter" : "insertBefore"](qe[t].el);
                var n = t > e ? e : a ? t : t - 1,
                    i = e > t ? e : a ? t + 1 : t,
                    r = e > t;
                null != Oe.activeItem && (e === Oe.activeItem ? Ve.active = Oe.activeItem = a ? r ? t + 1 : t : r ? t : t - 1 : Oe.activeItem > n && Oe.activeItem < i && (Ve.active = Oe.activeItem += r ? 1 : -1)), N()
            }
        }

        function G(e, t) {
            for (var a = 0, n = Ke[e].length; n > a; a++)
                if (Ke[e][a] === t) return a;
            return -1
        }

        function J() {
            tt.released && !me.isPaused && me.resume()
        }

        function K(e) {
            return d(e, ke.start, ke.end) / ke.end * (ze.end - ze.start) + ze.start
        }

        function V() {
            tt.history[0] = tt.history[1], tt.history[1] = tt.history[2], tt.history[2] = tt.history[3], tt.history[3] = tt.delta
        }

        function _(e) {
            tt.released = 0, tt.source = e, tt.slidee = "slidee" === e
        }

        function ee(t) {
            var a = "touchstart" === t.type,
                n = t.data.source,
                i = "slidee" === n;
            tt.init || !a && ne(t.target) || ("handle" !== n || ge.dragHandle && ke.start !== ke.end) && (!i || (a ? ge.touchDragging : ge.mouseDragging && t.which < 2)) && (a || r(t), _(n), tt.init = 0, tt.$source = e(t.target), tt.touch = a, tt.pointer = a ? t.originalEvent.touches[0] : t, tt.initX = tt.pointer.pageX, tt.initY = tt.pointer.pageY, tt.initPos = i ? ze.cur : ke.cur, tt.start = +new Date, tt.time = 0, tt.path = 0, tt.delta = 0, tt.locked = 0, tt.history = [0, 0, 0, 0], tt.pathToLock = i ? a ? 30 : 10 : 0, I.on(a ? z : P, te), me.pause(1), (i ? Ie : Se).addClass(ge.draggedClass), ve("moveStart"), i && (it = setInterval(V, 10)))
        }

        function te(e) {
            if (tt.released = "mouseup" === e.type || "touchend" === e.type, tt.pointer = tt.touch ? e.originalEvent[tt.released ? "changedTouches" : "touches"][0] : e, tt.pathX = tt.pointer.pageX - tt.initX, tt.pathY = tt.pointer.pageY - tt.initY, tt.path = D(A(tt.pathX, 2) + A(tt.pathY, 2)), tt.delta = ge.horizontal ? tt.pathX : tt.pathY, tt.released || !(tt.path < 1)) {
                if (!tt.init) {
                    if (tt.path < ge.dragThreshold) return tt.released ? ae() : a;
                    if (!(ge.horizontal ? x(tt.pathX) > x(tt.pathY) : x(tt.pathX) < x(tt.pathY))) return ae();
                    tt.init = 1
                }
                r(e), !tt.locked && tt.path > tt.pathToLock && tt.slidee && (tt.locked = 1, tt.$source.on(S, s)), tt.released && (ae(), ge.releaseSwing && tt.slidee && (tt.swing = (tt.delta - tt.history[0]) / 40 * 300, tt.delta += tt.swing, tt.tweese = x(tt.swing) > 10)), H(tt.slidee ? tt.initPos - tt.delta : K(tt.initPos + tt.delta))
            }
        }

        function ae() {
            clearInterval(it), tt.released = !0, I.off(tt.touch ? z : P, te), (tt.slidee ? Ie : Se).removeClass(ge.draggedClass), setTimeout(function () {
                tt.$source.off(S, s)
            }), ze.cur === ze.dest && tt.init && ve("moveEnd"), me.resume(1), tt.init = 0
        }

        function ne(t) {
            return ~e.inArray(t.nodeName, T) || e(t).is(ge.interactive)
        }

        function ie() {
            me.stop(), I.off("mouseup", ie)
        }

        function re(e) {
            switch (r(e), this) {
                case Ue[0]:
                case $e[0]:
                    me.moveBy(Ue.is(this) ? ge.moveBy : -ge.moveBy), I.on("mouseup", ie);
                    break;
                case Qe[0]:
                    me.prev();
                    break;
                case Ze[0]:
                    me.next();
                    break;
                case Ge[0]:
                    me.prevPage();
                    break;
                case Je[0]:
                    me.nextPage()
            }
        }

        function se(e) {
            return at.curDelta = (ge.horizontal ? e.deltaY || e.deltaX : e.deltaY) || -e.wheelDelta, at.curDelta /= 1 === e.deltaMode ? 3 : 100, Le ? (h = +new Date, at.last < h - at.resetTime && (at.delta = 0), at.last = h, at.delta += at.curDelta, x(at.delta) < 1 ? at.finalDelta = 0 : (at.finalDelta = at.delta / 1, at.delta %= 1), at.finalDelta) : at.curDelta
        }

        function oe(e) {
            e.originalEvent[m] = me;
            var t = +new Date;
            if (O + ge.scrollHijack > t && Re[0] !== document && Re[0] !== window) return void(O = t);
            if (ge.scrollBy && ze.start !== ze.end) {
                var a = se(e.originalEvent);
                (ge.scrollTrap || a > 0 && ze.dest < ze.end || 0 > a && ze.dest > ze.start) && r(e, 1), me.slideBy(ge.scrollBy * a)
            }
        }

        function le(e) {
            ge.clickBar && e.target === Ce[0] && (r(e), H(K((ge.horizontal ? e.pageX - Ce.offset().left : e.pageY - Ce.offset().top) - Te / 2)))
        }

        function ce(e) {
            if (ge.keyboardNavBy) switch (e.which) {
                case ge.horizontal ? 37:
                    38: r(e), me["pages" === ge.keyboardNavBy ? "prevPage" : "prev"]();
                    break;
                case ge.horizontal ? 39:
                    40: r(e), me["pages" === ge.keyboardNavBy ? "nextPage" : "next"]()
            }
        }

        function de(e) {
            return ne(this) ? void(e.originalEvent[m + "ignore"] = !0) : void(this.parentNode !== Ie[0] || e.originalEvent[m + "ignore"] || me.activate(this))
        }

        function ue() {
            this.parentNode === xe[0] && me.activatePage(De.index(this))
        }

        function fe(e) {
            ge.pauseOnHover && me["mouseenter" === e.type ? "pause" : "resume"](2)
        }

        function ve(e, t) {
            if (Ke[e]) {
                for (pe = Ke[e].length, k.length = 0, he = 0; pe > he; he++) k.push(Ke[e][he]);
                for (he = 0; pe > he; he++) k[he].call(me, e, t)
            }
        }
        if (!(this instanceof n)) return new n(t, p, g);
        var he, pe, ge = e.extend({}, n.defaults, p),
            me = this,
            ye = l(t),
            we = e(t),
            Ie = ge.slidee ? e(ge.slidee).eq(0) : we.children().eq(0),
            be = 0,
            Pe = 0,
            ze = {
                start: 0,
                center: 0,
                end: 0,
                cur: 0,
                dest: 0
            },
            Ce = e(ge.scrollBar).eq(0),
            Se = Ce.children().eq(0),
            Be = 0,
            Te = 0,
            ke = {
                start: 0,
                end: 0,
                cur: 0
            },
            xe = e(ge.pagesBar),
            De = 0,
            Ae = [],
            Ee = 0,
            qe = [],
            Oe = {
                firstItem: 0,
                lastItem: 0,
                centerItem: 0,
                activeItem: null,
                activePage: 0
            },
            Ne = new u(we[0]),
            He = new u(Ie[0]),
            Xe = new u(Ce[0]),
            Ye = new u(Se[0]),
            Me = "basic" === ge.itemNav,
            je = "forceCentered" === ge.itemNav,
            Fe = "centered" === ge.itemNav || je,
            Le = !ye && (Me || Fe || je),
            Re = ge.scrollSource ? e(ge.scrollSource) : we,
            We = ge.dragSource ? e(ge.dragSource) : we,
            Ue = e(ge.forward),
            $e = e(ge.backward),
            Qe = e(ge.prev),
            Ze = e(ge.next),
            Ge = e(ge.prevPage),
            Je = e(ge.nextPage),
            Ke = {},
            Ve = {},
            _e = {},
            et = {},
            tt = {
                released: 1
            },
            at = {
                last: 0,
                delta: 0,
                resetTime: 200
            },
            nt = 0,
            it = 0,
            rt = 0,
            st = 0;
        ye || (t = we[0]), me.initialized = 0, me.frame = t, me.slidee = Ie[0], me.pos = ze, me.rel = Oe, me.items = qe, me.pages = Ae, me.isPaused = 0, me.options = ge, me.dragging = tt, me.reload = function () {
            N()
        }, me.getPos = function (e) {
            if (Le) {
                var t = L(e);
                return -1 !== t ? qe[t] : !1
            }
            var a = Ie.find(e).eq(0);
            if (a[0]) {
                var n = ge.horizontal ? a.offset().left - Ie.offset().left : a.offset().top - Ie.offset().top,
                    i = a[ge.horizontal ? "outerWidth" : "outerHeight"]();
                return {
                    start: n,
                    center: n - be / 2 + i / 2,
                    end: n - be + i,
                    size: i
                }
            }
            return !1
        }, me.moveBy = function (e) {
            et.speed = e, !tt.init && et.speed && ze.cur !== (et.speed > 0 ? ze.end : ze.start) && (et.lastTime = +new Date, et.startPos = ze.cur, _("button"), tt.init = 1, ve("moveStart"), y(st), j())
        }, me.stop = function () {
            "button" === tt.source && (tt.init = 0, tt.released = 1)
        }, me.prev = function () {
            me.activate(null == Oe.activeItem ? 0 : Oe.activeItem - 1)
        }, me.next = function () {
            me.activate(null == Oe.activeItem ? 0 : Oe.activeItem + 1)
        }, me.prevPage = function () {
            me.activatePage(Oe.activePage - 1)
        }, me.nextPage = function () {
            me.activatePage(Oe.activePage + 1)
        }, me.slideBy = function (e, t) {
            e && (Le ? me[Fe ? "toCenter" : "toStart"](d((Fe ? Oe.centerItem : Oe.firstItem) + ge.scrollBy * e, 0, qe.length)) : H(ze.dest + e, t))
        }, me.slideTo = function (e, t) {
            H(e, t)
        }, me.toStart = function (e, t) {
            F("start", e, t)
        }, me.toEnd = function (e, t) {
            F("end", e, t)
        }, me.toCenter = function (e, t) {
            F("center", e, t)
        }, me.getIndex = L, me.activate = function (e, t) {
            var a = W(e);
            ge.smart && a !== !1 && (Fe ? me.toCenter(a, t) : a >= Oe.lastItem ? me.toStart(a, t) : a <= Oe.firstItem ? me.toEnd(a, t) : J())
        }, me.activatePage = function (e, t) {
            l(e) && H(Ae[d(e, 0, Ae.length - 1)], t)
        }, me.resume = function (e) {
            ge.cycleBy && ge.cycleInterval && ("items" !== ge.cycleBy || qe[0] && null != Oe.activeItem) && !(e < me.isPaused) && (me.isPaused = 0, rt ? rt = clearTimeout(rt) : ve("resume"), rt = setTimeout(function () {
                switch (ve("cycle"), ge.cycleBy) {
                    case "items":
                        me.activate(Oe.activeItem >= qe.length - 1 ? 0 : Oe.activeItem + 1);
                        break;
                    case "pages":
                        me.activatePage(Oe.activePage >= Ae.length - 1 ? 0 : Oe.activePage + 1)
                }
            }, ge.cycleInterval))
        }, me.pause = function (e) {
            e < me.isPaused || (me.isPaused = e || 100, rt && (rt = clearTimeout(rt), ve("pause")))
        }, me.toggle = function () {
            me[rt ? "pause" : "resume"]()
        }, me.set = function (t, a) {
            e.isPlainObject(t) ? e.extend(ge, t) : ge.hasOwnProperty(t) && (ge[t] = a)
        }, me.add = function (t, a) {
            var n = e(t);
            Le ? (null == a || !qe[0] || a >= qe.length ? n.appendTo(Ie) : qe.length && n.insertBefore(qe[a].el), null != Oe.activeItem && a <= Oe.activeItem && (Ve.active = Oe.activeItem += n.length)) : Ie.append(n), N()
        }, me.remove = function (t) {
            if (Le) {
                var a = R(t);
                if (a > -1) {
                    Ee.eq(a).remove();
                    var n = a === Oe.activeItem;
                    null != Oe.activeItem && a < Oe.activeItem && (Ve.active = --Oe.activeItem), N(), n && (Ve.active = null, me.activate(Oe.activeItem))
                }
            } else e(t).remove(), N()
        }, me.moveAfter = function (e, t) {
            Z(e, t, 1)
        }, me.moveBefore = function (e, t) {
            Z(e, t)
        }, me.on = function (e, t) {
            if ("object" === i(e))
                for (var a in e) e.hasOwnProperty(a) && me.on(a, e[a]);
            else if ("function" === i(t))
                for (var n = e.split(" "), r = 0, s = n.length; s > r; r++) Ke[n[r]] = Ke[n[r]] || [], -1 === G(n[r], t) && Ke[n[r]].push(t);
            else if ("array" === i(t))
                for (var o = 0, l = t.length; l > o; o++) me.on(e, t[o])
        }, me.one = function (e, t) {
            function a() {
                t.apply(me, arguments), me.off(e, a)
            }
            me.on(e, a)
        }, me.off = function (e, t) {
            if (t instanceof Array)
                for (var a = 0, n = t.length; n > a; a++) me.off(e, t[a]);
            else
                for (var i = e.split(" "), r = 0, s = i.length; s > r; r++)
                    if (Ke[i[r]] = Ke[i[r]] || [], null == t) Ke[i[r]].length = 0;
                    else {
                        var o = G(i[r], t); - 1 !== o && Ke[i[r]].splice(o, 1)
                    }
        }, me.destroy = function () {
            return n.removeInstance(t), Re.add(Se).add(Ce).add(xe).add(Ue).add($e).add(Qe).add(Ze).add(Ge).add(Je).off("." + m), I.off("keydown", ce), Qe.add(Ze).add(Ge).add(Je).removeClass(ge.disabledClass), Ee && null != Oe.activeItem && Ee.eq(Oe.activeItem).removeClass(ge.activeClass), xe.empty(), ye || (we.off("." + m), Ne.restore(), He.restore(), Xe.restore(), Ye.restore(), e.removeData(t, m)), qe.length = Ae.length = 0, Ve = {}, me.initialized = 0, me
        }, me.init = function () {
            if (!me.initialized) {
                if (n.getInstance(t)) throw new Error("There is already a Sly instance on this element");
                n.storeInstance(t, me), me.on(g);
                var e = ["overflow", "position"],
                    a = ["position", "webkitTransform", "msTransform", "transform", "left", "top", "width", "height"];
                Ne.save.apply(Ne, e), Xe.save.apply(Xe, e), He.save.apply(He, a), Ye.save.apply(Ye, a);
                var i = Se;
                return ye || (i = i.add(Ie), we.css("overflow", "hidden"), f || "static" !== we.css("position") || we.css("position", "relative")), f ? v && i.css(f, v) : ("static" === Ce.css("position") && Ce.css("position", "relative"), i.css({
                    position: "absolute"
                })), ge.forward && Ue.on(B, re), ge.backward && $e.on(B, re), ge.prev && Qe.on(S, re), ge.next && Ze.on(S, re), ge.prevPage && Ge.on(S, re), ge.nextPage && Je.on(S, re), Re.on(C, oe), Ce[0] && Ce.on(S, le), Le && ge.activateOn && we.on(ge.activateOn + "." + m, "*", de), xe[0] && ge.activatePageOn && xe.on(ge.activatePageOn + "." + m, "*", ue), We.on(b, {
                    source: "slidee"
                }, ee), Se && Se.on(b, {
                    source: "handle"
                }, ee), I.on("keydown", ce), ye || (we.on("mouseenter." + m + " mouseleave." + m, fe), we.on("scroll." + m, o)), me.initialized = 1, N(!0), ge.cycleBy && !ye && me[ge.startPaused ? "pause" : "resume"](), me
            }
        }
    }

    function i(e) {
        return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase() || "object" : typeof e
    }

    function r(e, t) {
        e.preventDefault(), t && e.stopPropagation()
    }

    function s(t) {
        r(t, 1), e(this).off(t.type, s)
    }

    function o() {
        this.scrollLeft = 0, this.scrollTop = 0
    }

    function l(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }

    function c(e, t) {
        return 0 | String(e.css(t)).replace(/[^\-0-9.]/g, "")
    }

    function d(e, t, a) {
        return t > e ? t : e > a ? a : e
    }

    function u(e) {
        var t = {};
        return t.style = {}, t.save = function () {
            if (e && e.nodeType) {
                for (var a = 0; a < arguments.length; a++) t.style[arguments[a]] = e.style[arguments[a]];
                return t
            }
        }, t.restore = function () {
            if (e && e.nodeType) {
                for (var a in t.style) t.style.hasOwnProperty(a) && (e.style[a] = t.style[a]);
                return t
            }
        }, t
    }
    var f, v, h, p = "sly",
        g = "Sly",
        m = p,
        y = t.cancelAnimationFrame || t.cancelRequestAnimationFrame,
        w = t.requestAnimationFrame,
        I = e(document),
        b = "touchstart." + m + " mousedown." + m,
        P = "mousemove." + m + " mouseup." + m,
        z = "touchmove." + m + " touchend." + m,
        C = (document.implementation.hasFeature("Event.wheel", "3.0") ? "wheel." : "mousewheel.") + m,
        S = "click." + m,
        B = "mousedown." + m,
        T = ["INPUT", "SELECT", "BUTTON", "TEXTAREA"],
        k = [],
        x = Math.abs,
        D = Math.sqrt,
        A = Math.pow,
        E = (Math.round, Math.max),
        q = Math.min,
        O = 0;
    I.on(C, function (e) {
            var t = e.originalEvent[m],
                a = +new Date;
            (!t || t.options.scrollHijack < a - O) && (O = a)
        }), n.getInstance = function (t) {
            return e.data(t, m)
        }, n.storeInstance = function (t, a) {
            return e.data(t, m, a)
        }, n.removeInstance = function (t) {
            return e.removeData(t, m)
        },
        function (e) {
            function t(e) {
                var t = (new Date).getTime(),
                    n = Math.max(0, 16 - (t - a)),
                    i = setTimeout(e, n);
                return a = t, i
            }
            w = e.requestAnimationFrame || e.webkitRequestAnimationFrame || t;
            var a = (new Date).getTime(),
                n = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.clearTimeout;
            y = function (t) {
                n.call(e, t)
            }
        }(window),
        function () {
            function e(e) {
                for (var n = 0, i = t.length; i > n; n++) {
                    var r = t[n] ? t[n] + e.charAt(0).toUpperCase() + e.slice(1) : e;
                    if (null != a.style[r]) return r
                }
            }
            var t = ["", "Webkit", "Moz", "ms", "O"],
                a = document.createElement("div");
            f = e("transform"), v = e("perspective") ? "translateZ(0) " : ""
        }(), t[g] = n, e.fn[p] = function (t, a) {
            var r, s;
            return e.isPlainObject(t) || (("string" === i(t) || t === !1) && (r = t === !1 ? "destroy" : t, s = Array.prototype.slice.call(arguments, 1)), t = {}), this.each(function (e, i) {
                var o = n.getInstance(i);
                o || r ? o && r && o[r] && o[r].apply(o, s) : o = new n(i, t, a).init()
            })
        }, n.defaults = {
            slidee: null,
            horizontal: !1,
            itemNav: null,
            itemSelector: null,
            smart: !1,
            activateOn: null,
            activateMiddle: !1,
            scrollSource: null,
            scrollBy: 0,
            scrollHijack: 300,
            scrollTrap: !1,
            dragSource: null,
            mouseDragging: !1,
            touchDragging: !1,
            releaseSwing: !1,
            swingSpeed: .2,
            elasticBounds: !1,
            dragThreshold: 3,
            interactive: null,
            scrollBar: null,
            dragHandle: !1,
            dynamicHandle: !1,
            minHandleSize: 50,
            clickBar: !1,
            syncSpeed: .5,
            pagesBar: null,
            activatePageOn: null,
            pageBuilder: function (e) {
                return "<li>" + (e + 1) + "</li>"
            },
            forward: null,
            backward: null,
            prev: null,
            next: null,
            prevPage: null,
            nextPage: null,
            cycleBy: null,
            cycleInterval: 5e3,
            pauseOnHover: !1,
            startPaused: !1,
            moveBy: 300,
            speed: 0,
            easing: "swing",
            startAt: null,
            keyboardNavBy: null,
            draggedClass: "dragged",
            activeClass: "active",
            disabledClass: "disabled"
        }
}(jQuery, window);
! function (t) {
    "use strict";
    var s = function (s, e) {
        this.el = t(s), this.options = t.extend({}, t.fn.typed.defaults, e), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = this.isInput ? !1 : this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
    };
    s.prototype = {
        constructor: s,
        init: function () {
            var t = this;
            t.timeout = setTimeout(function () {
                for (var s = 0; s < t.strings.length; ++s) t.sequence[s] = s;
                t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
            }, t.startDelay)
        },
        build: function () {
            var s = this;
            if (this.showCursor === !0 && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
                this.strings = [], this.stringsElement.hide(), console.log(this.stringsElement.children());
                var e = this.stringsElement.children();
                t.each(e, function (e, i) {
                    s.strings.push(t(i).html())
                })
            }
            this.init()
        },
        typewrite: function (t, s) {
            if (this.stop !== !0) {
                var e = Math.round(70 * Math.random()) + this.typeSpeed,
                    i = this;
                i.timeout = setTimeout(function () {
                    var e = 0,
                        r = t.substr(s);
                    if ("^" === r.charAt(0)) {
                        var o = 1;
                        /^\^\d+/.test(r) && (r = /\d+/.exec(r)[0], o += r.length, e = parseInt(r)), t = t.substring(0, s) + t.substring(s + o)
                    }
                    if ("html" === i.contentType) {
                        var n = t.substr(s).charAt(0);
                        if ("<" === n || "&" === n) {
                            var a = "",
                                h = "";
                            for (h = "<" === n ? ">" : ";"; t.substr(s + 1).charAt(0) !== h && (a += t.substr(s).charAt(0), s++, !(s + 1 > t.length)););
                            s++, a += h
                        }
                    }
                    i.timeout = setTimeout(function () {
                        if (s === t.length) {
                            if (i.options.onStringTyped(i.arrayPos), i.arrayPos === i.strings.length - 1 && (i.options.callback(), i.curLoop++, i.loop === !1 || i.curLoop === i.loopCount)) return;
                            i.timeout = setTimeout(function () {
                                i.backspace(t, s)
                            }, i.backDelay)
                        } else {
                            0 === s && i.options.preStringTyped(i.arrayPos);
                            var e = t.substr(0, s + 1);
                            i.attr ? i.el.attr(i.attr, e) : i.isInput ? i.el.val(e) : "html" === i.contentType ? i.el.html(e) : i.el.text(e), s++, i.typewrite(t, s)
                        }
                    }, e)
                }, e)
            }
        },
        backspace: function (t, s) {
            if (this.stop !== !0) {
                var e = Math.round(70 * Math.random()) + this.backSpeed,
                    i = this;
                i.timeout = setTimeout(function () {
                    if ("html" === i.contentType && ">" === t.substr(s).charAt(0)) {
                        for (var e = "";
                            "<" !== t.substr(s - 1).charAt(0) && (e -= t.substr(s).charAt(0), s--, !(0 > s)););
                        s--, e += "<"
                    }
                    var r = t.substr(0, s);
                    i.attr ? i.el.attr(i.attr, r) : i.isInput ? i.el.val(r) : "html" === i.contentType ? i.el.html(r) : i.el.text(r), s > i.stopNum ? (s--, i.backspace(t, s)) : s <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.shuffle && (i.sequence = i.shuffleArray(i.sequence)), i.init()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], s))
                }, e)
            }
        },
        shuffleArray: function (t) {
            var s, e, i = t.length;
            if (i)
                for (; --i;) e = Math.floor(Math.random() * (i + 1)), s = t[e], t[e] = t[i], t[i] = s;
            return t
        },
        reset: function () {
            var t = this;
            clearInterval(t.timeout);
            this.el.attr("id");
            this.el.empty(), "undefined" != typeof this.cursor && this.cursor.remove(), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
        }
    }, t.fn.typed = function (e) {
        return this.each(function () {
            var i = t(this),
                r = i.data("typed"),
                o = "object" == typeof e && e;
            r && r.reset(), i.data("typed", r = new s(this, o)), "string" == typeof e && r[e]()
        })
    }, t.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: !1,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function () {},
        preStringTyped: function () {},
        onStringTyped: function () {},
        resetCallback: function () {}
    }
}(window.jQuery);
