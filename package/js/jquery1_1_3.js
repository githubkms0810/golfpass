! function () {
    "object" != typeof JSON && (JSON = {}),
        function () {
            "use strict";

            function f(e) {
                return 10 > e ? "0" + e : e
            }

            function this_value() {
                return this.valueOf()
            }

            function quote(e) {
                return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
                    var t = meta[e];
                    return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + e + '"'
            }

            function str(e, t) {
                var r, n, o, i, a, s = gap,
                    f = t[e];
                switch (f && "object" == typeof f && "function" == typeof f.toJSON && (f = f.toJSON(e)), "function" == typeof rep && (f = rep.call(t, e, f)), typeof f) {
                    case "string":
                        return quote(f);
                    case "number":
                        return isFinite(f) ? String(f) : "null";
                    case "boolean":
                    case "null":
                        return String(f);
                    case "object":
                        if (!f) return "null";
                        if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(f)) {
                            for (i = f.length, r = 0; i > r; r += 1) a[r] = str(r, f) || "null";
                            return o = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]", gap = s, o
                        }
                        if (rep && "object" == typeof rep)
                            for (i = rep.length, r = 0; i > r; r += 1) "string" == typeof rep[r] && (n = rep[r], (o = str(n, f)) && a.push(quote(n) + (gap ? ": " : ":") + o));
                        else
                            for (n in f) Object.prototype.hasOwnProperty.call(f, n) && (o = str(n, f)) && a.push(quote(n) + (gap ? ": " : ":") + o);
                        return o = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}", gap = s, o
                }
            }
            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
            }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value);
            var cx, escapable, gap, indent, meta, rep;
            "function" != typeof JSON.stringify && (escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            }, JSON.stringify = function (e, t, r) {
                var n;
                if (gap = "", indent = "", "number" == typeof r)
                    for (n = 0; r > n; n += 1) indent += " ";
                else "string" == typeof r && (indent = r);
                if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
                return str("", {
                    "": e
                })
            }), "function" != typeof JSON.parse && (cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, JSON.parse = function (text, reviver) {
                function walk(e, t) {
                    var r, n, o = e[t];
                    if (o && "object" == typeof o)
                        for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (n = walk(o, r), void 0 !== n ? o[r] = n : delete o[r]);
                    return reviver.call(e, t, o)
                }
                var j;
                if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
                        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                    "": j
                }, "") : j;
                throw new SyntaxError("JSON.parse")
            })
        }();
    var _setRepeater = function (e, t) {
            e();
            var r = setInterval(e, 1);
            setTimeout(function () {
                clearInterval(r)
            }, t)
        },
        _tryWrapper = function (e) {
            return function () {
                try {
                    e()
                } catch (e) {}
            }
        },
        indexOf = function (e) {
            return indexOf = "function" == typeof Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
                var t = -1,
                    r = -1;
                for (t = 0; t < this.length; t++)
                    if (this[t] === e) {
                        r = t;
                        break
                    }
                return r
            }, indexOf.call(this, e)
        },
        _scripts = [],
        _scriptListeners = [],
        _notifyListeners = function () {
            for (var e = 0; e < _scriptListeners.length; e++) _scriptListeners[e](this)
        },
        _registerScript = function (e) {
            indexOf.call(_scripts, e) == -1 && (_scripts.push(e), e.addEventListener ? e.addEventListener("load", _notifyListeners) : e.readyState && (e.onreadystatechange = _notifyListeners), _notifyListeners(), _tryWrapper(function () {
                if (e.src.indexOf("maps.googleapis.com") != -1) {
                    var t = new RegExp("&{0,1}callback=([^&]+)"),
                        r = t.exec(e.src);
                    if (r && r[1] in window) {
                        var n = window[r[1]];
                        window[r[1]] = function () {
                            _notifyListeners(), n()
                        }
                    }
                }
            })())
        };
    if ("undefined" == typeof MutationObserver) _setRepeater(function () {
        for (var e = document.getElementsByTagName("script"), t = 0; t < e.length; t++) _registerScript(e[t])
    }, 1e4);
    else {
        var observer = new MutationObserver(function (e) {
            e.forEach(function (e) {
                for (var t = 0; t < e.addedNodes.length; t++) "SCRIPT" == e.addedNodes[t].tagName && _registerScript(e.addedNodes[t])
            })
        });
        observer.observe(document, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            characterData: !0
        }), setTimeout(function () {
            observer.disconnect()
        }, 1e4)
    }
    var _repeatAndForget = function (e) {
        _tryWrapper(e)(), "undefined" != typeof jQuery && jQuery(document).ready(_tryWrapper(e)), _scriptListeners.push(_tryWrapper(e)), _setRepeater(_tryWrapper(e), 3e3)
    };
    _tryWrapper(function () {
        var e = null,
            t = null,
            r = function (r, n) {
                n || (n = {
                    styles: e
                });
                var o = new t(r, n);
                return _repeatAndForget(function () {
                    o.styles != e && o.setOptions({
                        styles: e
                    })
                }), o
            };
        _repeatAndForget(function () {
            "undefined" != typeof google && void 0 !== google.maps && void 0 !== google.maps.Map && google.maps.Map != r && (e = JSON.parse(SnazzyDataForSnazzyMaps.json), t = google.maps.Map, google.maps.Map = r, google.maps.Map.prototype = t.prototype)
        })
    })()
}();
