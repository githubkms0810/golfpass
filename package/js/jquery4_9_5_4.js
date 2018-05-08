! function (t) {
    "use strict";

    function e(e) {
        e.children(".gdlr-core-skill-circle-content").each(function () {
            t(this).css({
                "margin-top": -t(this).outerHeight() / 2
            })
        }), e.css({
            "max-width": e.parent().width(),
            "max-height": e.parent().width()
        })
    }

    function i(e, i, r) {
        var a = t('<div class="gdlr-core-now-loading" ></div>').hide();
        t.ajax({
            type: "POST",
            url: gdlr_core_pbf.ajax_url,
            data: {
                action: e.attr("data-ajax"),
                settings: e.data("settings"),
                option: {
                    name: i,
                    value: r
                }
            },
            dataType: "json",
            beforeSend: function (t, i) {
                "replace" == e.attr("data-target-action") && e.siblings("." + e.attr("data-target")).animate({
                    opacity: 0
                }, 150), "gdlr-core-portfolio-item-holder" == e.attr("data-target") && "replace" == e.attr("data-target-action") && (a.insertBefore(e.siblings(".gdlr-core-portfolio-item-holder")), a.fadeIn(200))
            },
            error: function (t, e, i) {
                console.log(t, e, i)
            },
            success: function (i) {
                if ("success" == i.status) {
                    if (i.content && e.attr("data-target"))
                        if ("append" == e.attr("data-target-action")) {
                            r = t(i.content);
                            if (e.siblings("." + e.attr("data-target")).each(function () {
                                    if (t(this).append(r), r.gdlr_core_lightbox().gdlr_core_flexslider().gdlr_core_content_script().gdlr_core_set_image_height(), "masonry" == t(this).attr("data-layout") && "function" == typeof t.fn.isotope) {
                                        var e = t(this).isotope("addItems", r);
                                        t(this).isotope("layoutItems", e, !0)
                                    } else r.addClass("gdlr-core-animate-init");
                                    r.gdlr_core_animate_list_item()
                                }), i.load_more)
                                if ("none" != i.load_more) {
                                    n = t(i.load_more);
                                    e.parent().append(n), n.gdlr_core_ajax(n), n.css("display", "none").slideDown(100), e.remove()
                                } else e.slideUp(100, function () {
                                    t(this).remove()
                                })
                        } else if ("replace" == e.attr("data-target-action")) {
                        var r = t(i.content);
                        if (e.siblings("." + e.attr("data-target")).each(function () {
                                var e = !1,
                                    i = t(this).height();
                                t(this).empty().append(r), r.gdlr_core_lightbox().gdlr_core_flexslider().gdlr_core_fluid_video().gdlr_core_set_image_height(), "masonry" == t(this).attr("data-layout") && "function" == typeof t.fn.isotope ? (t(this).isotope("destroy"), t(this).parent().gdlr_core_isotope(), e = !0) : (r.addClass("gdlr-core-animate-init"), r.gdlr_core_animate_list_item());
                                var a = t(this).height();
                                t(this).css({
                                    height: i,
                                    opacity: 1
                                }).animate({
                                    height: a
                                }, {
                                    duration: 400,
                                    easing: "easeOutExpo",
                                    complete: function () {
                                        e || t(this).css("height", "")
                                    }
                                })
                            }), i.pagination && (e.siblings(".gdlr-core-pagination").slideUp(100, function () {
                                t(this).remove()
                            }), "none" != i.pagination)) {
                            var o = t(i.pagination);
                            e.parent().append(o), o.gdlr_core_ajax(o), o.css("display", "none").slideDown(100)
                        }
                        if (i.load_more && (e.siblings(".gdlr-core-load-more-wrap").slideUp(100, function () {
                                t(this).remove()
                            }), "none" != i.load_more)) {
                            var n = t(i.load_more);
                            e.parent().append(n), n.gdlr_core_ajax(n), n.css("display", "none").slideDown(100)
                        }
                    }
                    void 0 !== i.settings && e.data("settings", i.settings), a.fadeOut(200, function () {
                        t(this).remove()
                    })
                } else console.log(i)
            }
        })
    }
    var r = !1;
    r = !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/Windows Phone/i));
    var a = "desktop";
    "function" == typeof window.matchMedia ? (t(window).on("resize themename-set-display", function () {
        a = window.matchMedia("(max-width: 419px)").matches ? "mobile-portrait" : window.matchMedia("(max-width: 767px)").matches ? "mobile-landscape" : window.matchMedia("(max-width: 959px)").matches ? "tablet" : "desktop"
    }), t(window).trigger("themename-set-display")) : (t(window).on("resize themename-set-display", function () {
        a = t(window).innerWidth() <= 419 ? "mobile-portrait" : t(window).innerWidth() <= 767 ? "mobile-landscape" : t(window).innerWidth() <= 959 ? "tablet" : "desktop"
    }), t(window).trigger("themename-set-display")), t.fn.gdlr_core_content_script = function (e, i) {
        if (t(this).gdlr_core_fluid_video(e), !i && "function" == typeof t.fn.mediaelementplayer) {
            var r = {};
            "undefined" != typeof _wpmejsSettings && (r.pluginPath = _wpmejsSettings.pluginPath), t(this).find("audio").mediaelementplayer(r)
        }
        return t(this)
    }, t.fn.gdlr_core_fluid_video = function (e) {
        if (void 0 === e) i = t(this).find('iframe[src*="youtube"], iframe[src*="vimeo"]');
        else var i = e.filter('iframe[src*="youtube"], iframe[src*="vimeo"]');
        return i.each(function () {
            if (t(this).closest(".ls-container, .master-slider").length <= 0) {
                if (t(this).is("embed") && t(this).parent("object").length || t(this).parent(".gdlr-core-fluid-video-wrapper").length) return;
                t(this).attr("id") || t(this).attr("id", "gdlr-video-" + Math.floor(999999 * Math.random()));
                var e = t(this).height() / t(this).width();
                t(this).removeAttr("height").removeAttr("width");
                try {
                    t(this).wrap('<div class="gdlr-core-fluid-video-wrapper"></div>').parent().css("padding-top", 100 * e + "%"), t(this).attr("src", t(this).attr("src"))
                } catch (t) {}
            }
        }), t(this)
    }, t.fn.gdlr_core_mejs_ajax = function () {
        if ("function" == typeof t.fn.mediaelementplayer) {
            var e = {};
            "undefined" != typeof _wpmejsSettings && (e.pluginPath = _wpmejsSettings.pluginPath), t(this).find("audio, video").mediaelementplayer(e)
        }
    }, t.fn.gdlr_core_counter_item = function (e) {
        if (void 0 === e) i = t(this).find(".gdlr-core-counter-item-count[data-counter-start][data-counter-end]");
        else var i = e.filter(".gdlr-core-counter-item-count[data-counter-start][data-counter-end]");
        i.each(function () {
            var e = t(this),
                i = parseInt(t(this).attr("data-counter-start")),
                r = parseInt(t(this).attr("data-counter-end")),
                o = t(this).attr("data-duration") ? parseInt(t(this).attr("data-duration")) : 4e3;
            "mobile-landscape" == a || "mobile-portrait" == a || t(window).scrollTop() + t(window).height() > e.offset().top ? t({
                counter_num: i
            }).animate({
                counter_num: r
            }, {
                duration: o,
                easing: "easeOutExpo",
                step: function () {
                    e.html(Math.ceil(this.counter_num))
                }
            }) : t(window).scroll(function (a) {
                t(this).scrollTop() + t(window).height() > e.offset().top && (t({
                    counter_num: i
                }).animate({
                    counter_num: r
                }, {
                    duration: o,
                    easing: "easeOutExpo",
                    step: function () {
                        e.html(Math.ceil(this.counter_num))
                    }
                }), t(this).unbind("scroll", a.handleObj.handler, a))
            })
        })
    }, t.fn.gdlr_core_typed_animation = function (e) {
        if (void 0 === e) i = t(this).find(".gdlr-core-type-animation-item-animated[data-animation-text]");
        else var i = e.filter(".gdlr-core-type-animation-item-animated[data-animation-text]");
        i.each(function () {
            var e = JSON.parse(t(this).attr("data-animation-text"));
            "function" == typeof t.fn.typed && e && e.length > 0 && t(this).typed({
                strings: e,
                typeSpeed: 50,
                loop: !0
            })
        })
    }, t.fn.gdlr_core_countdown_item = function (e) {
        if (void 0 === e) i = t(this).find(".gdlr-core-countdown-wrap");
        else var i = e.filter(".gdlr-core-countdown-wrap");
        i.each(function () {
            var e = t(this).find(".gdlr-core-day"),
                i = parseInt(e.text()),
                r = t(this).find(".gdlr-core-hrs"),
                a = parseInt(r.text()),
                o = t(this).find(".gdlr-core-min"),
                n = parseInt(o.text()),
                s = t(this).find(".gdlr-core-sec"),
                l = parseInt(s.text());
            t(window).load(function () {
                s.text("00"), s.css("width", s.width()), s.text(l)
            });
            var d = setInterval(function () {
                l > 0 ? l-- : (l = 59, n > 0 ? n-- : (n = 59, a > 0 ? a-- : (a = 24, i > 0 ? i-- : (i = 0, a = 0, n = 0, l = 0, clearInterval(d)), e.text(i)), r.text(a)), o.text(n)), s.text(l)
            }, 1e3)
        })
    }, t.fn.gdlr_core_accordion = function (e) {
        if (void 0 === e) var i = t(this).find(".gdlr-core-accordion-item-title"),
            r = t(this).find(".gdlr-core-accordion-item-icon");
        else var i = e.filter(".gdlr-core-accordion-item-title"),
            r = e.filter(".gdlr-core-accordion-item-icon");
        i.click(function () {
            t(this).siblings(".gdlr-core-accordion-item-content").slideDown(200);
            var e = t(this).closest(".gdlr-core-accordion-item-tab");
            e.hasClass("gdlr-core-active") ? e.closest(".gdlr-core-accordion-item").hasClass("gdlr-core-allow-close-all") && e.removeClass("gdlr-core-active").find(".gdlr-core-accordion-item-content").css({
                display: "block"
            }).slideUp(200) : e.addClass("gdlr-core-active").siblings(".gdlr-core-active").removeClass("gdlr-core-active").find(".gdlr-core-accordion-item-content").css({
                display: "block"
            }).slideUp(200)
        }), r.click(function () {
            t(this).siblings(".gdlr-core-accordion-item-content-wrapper").children(".gdlr-core-accordion-item-content").slideDown(200);
            var e = t(this).closest(".gdlr-core-accordion-item-tab");
            e.hasClass("gdlr-core-active") ? e.closest(".gdlr-core-accordion-item").hasClass("gdlr-core-allow-close-all") && e.removeClass("gdlr-core-active").find(".gdlr-core-accordion-item-content").css({
                display: "block"
            }).slideUp(200) : e.addClass("gdlr-core-active").siblings(".gdlr-core-active").removeClass("gdlr-core-active").find(".gdlr-core-accordion-item-content").css({
                display: "block"
            }).slideUp(200)
        })
    }, t.fn.gdlr_core_toggle_box = function (e) {
        if (void 0 === e) var i = t(this).find(".gdlr-core-toggle-box-item-title"),
            r = t(this).find(".gdlr-core-toggle-box-item-icon");
        else var i = e.filter(".gdlr-core-toggle-box-item-title"),
            r = e.filter(".gdlr-core-toggle-box-item-icon");
        i.click(function () {
            var e = t(this).closest(".gdlr-core-toggle-box-item-tab");
            e.hasClass("gdlr-core-active") ? (e.removeClass("gdlr-core-active"), t(this).siblings(".gdlr-core-toggle-box-item-content").css({
                display: "block"
            }).slideUp(200)) : (e.addClass("gdlr-core-active"), t(this).siblings(".gdlr-core-toggle-box-item-content").css({
                display: "none"
            }).slideDown(200))
        }), r.click(function () {
            var e = t(this).closest(".gdlr-core-toggle-box-item-tab");
            e.hasClass("gdlr-core-active") ? (e.removeClass("gdlr-core-active"), t(this).siblings(".gdlr-core-toggle-box-item-content-wrapper").children(".gdlr-core-toggle-box-item-content").css({
                display: "block"
            }).slideUp(200)) : (e.addClass("gdlr-core-active"), t(this).siblings(".gdlr-core-toggle-box-item-content-wrapper").children(".gdlr-core-toggle-box-item-content").css({
                display: "none"
            }).slideDown(200))
        })
    }, t.fn.gdlr_core_alert_box_item = function (e) {
        if (void 0 === e) i = t(this).find(".gdlr-core-alert-box-remove");
        else var i = e.filter(".gdlr-core-alert-box-remove");
        i.click(function () {
            t(this).closest(".gdlr-core-alert-box-item").slideUp(400, "easeOutQuart", function () {
                t(this).remove()
            })
        })
    }, t.fn.gdlr_core_parallax_background = function (e) {
        if (void 0 === e) i = t(this).find(".gdlr-core-parallax");
        else var i = e.filter(".gdlr-core-parallax");
        return i.each(function () {
            new o(t(this))
        }), t(this)
    };
    var o = function (t) {
        this.wrapper_bg = t, this.wrapper = t.parent(), this.parallax_speed = parseFloat(t.attr("data-parallax-speed")), this.init()
    };
    o.prototype = {
        init: function () {
            var e = this;
            0 != e.parallax_speed && (e.set_extra_height(), e.set_background_position(e), t(window).on("load resize", function () {
                e.set_extra_height(t(this)), e.set_background_position(e)
            }), t(window).on("scroll", function () {
                e.set_background_position(e)
            })), r ? (e.wrapper_bg.children('[data-background-type="video"]').remove(), e.wrapper_bg.attr("data-video-fallback") && e.wrapper_bg.css("background-image", "url(" + e.wrapper_bg.attr("data-video-fallback") + ")")) : e.wrapper_bg.children('[data-background-type="video"]').each(function () {
                0 == e.parallax_speed && (e.set_extra_height(), e.set_background_position(e), t(window).on("load resize", function () {
                    e.set_extra_height(t(this)), e.set_background_position(e)
                })), t(this).find("iframe").each(function () {
                    if ("vimeo" == t(this).attr("data-player-type")) {
                        var e = $f(t(this)[0]);
                        e.addEvent("ready", function () {
                            e.api("setVolume", 0)
                        })
                    } else "youtube" == t(this).attr("data-player-type") && (0 == t("body").children("#gdlr-core-youtube-api").length && t("body").append('<script type="text/javascript" src="https://www.youtube.com/iframe_api" id="gdlr-core-youtube-api" ><\/script>'), void 0 === window.gdlr_core_ytb ? window.gdlr_core_ytb = [t(this)[0]] : window.gdlr_core_ytb.push(t(this)[0]), window.onYouTubeIframeAPIReady = function () {
                        for (var t in window.gdlr_core_ytb) new YT.Player(gdlr_core_ytb[t], {
                            events: {
                                onReady: function (t) {
                                    t.target.mute()
                                }
                            }
                        })
                    })
                })
            })
        },
        set_extra_height: function () {
            var e = this,
                i = e.wrapper.outerHeight();
            "mobile-landscape" == a || "mobile-portrait" == a ? e.wrapper_bg.css({
                transform: ""
            }) : e.parallax_speed > 0 ? i += (t(window).height() - e.wrapper.outerHeight()) * e.parallax_speed : e.parallax_speed < 0 && (i += (t(window).height() + e.wrapper.outerHeight()) * Math.abs(e.parallax_speed)), e.wrapper_bg.css({
                height: i
            });
            var r = parseInt(gdlr_core_pbf.video.width) / parseInt(gdlr_core_pbf.video.height);
            e.wrapper_bg.children('[data-background-type="video"]').each(function () {
                if (e.wrapper_bg.width() / e.wrapper_bg.height() > r) {
                    var i = e.wrapper_bg.width() / r,
                        a = (e.wrapper_bg.height() - i) / 2;
                    t(this).css({
                        width: e.wrapper_bg.width(),
                        height: i,
                        "margin-left": 0,
                        "margin-top": a
                    })
                } else {
                    var o = e.wrapper_bg.height() * r,
                        a = (e.wrapper_bg.width() - o) / 2;
                    t(this).css({
                        width: o,
                        height: e.wrapper_bg.height(),
                        "margin-left": a,
                        "margin-top": 0
                    })
                }
            })
        },
        set_background_position: function (e) {
            if ("mobile-landscape" != a && "mobile-portrait" != a) {
                var i = e.wrapper.offset().top,
                    r = t(window).scrollTop();
                r + t(window).height() > i && r < i + e.wrapper.outerHeight() && (e.parallax_speed > 0 ? e.wrapper_bg.css({
                    transform: "translate(0px, " + (t(window).scrollTop() - i) * e.parallax_speed + "px)"
                }) : e.parallax_speed < 0 && e.wrapper_bg.css({
                    transform: "translate(0px, " + (t(window).scrollTop() + t(window).height() - i) * e.parallax_speed + "px)"
                }))
            }
        }
    };
    var n = function (t, e) {
        void 0 === e ? this.elem = t.find("[data-gdlr-animation]") : (this.elem = e.filter("[data-gdlr-animation]"), this.preload = e.filter(".gdlr-core-page-preload")), this.ux_items = [], this.ux_item_length = 0, this.init()
    };
    n.prototype = {
        init: function () {
            var e = this;
            e.ux_item_length = e.elem.each(function () {
                var i = t(this),
                    r = .8;
                t(this).attr("data-gdlr-animation-offset") && (r = parseFloat(t(this).attr("data-gdlr-animation-offset"))), "mobile-landscape" == a || "mobile-portrait" == a || t(window).scrollTop() + t(window).height() > i.offset().top ? e.ux_items.push(i) : t(window).scroll(function (a) {
                    t(window).scrollTop() + t(window).height() * r > i.offset().top && (e.ux_items.push(i), t(window).unbind("scroll", a.handleObj.handler, a))
                })
            }).length, void 0 !== e.preload && e.preload.length ? t(window).load(function () {
                var t = e.preload.attr("data-animation-time");
                t || (t = 0), setTimeout(function () {
                    e.animate()
                }, t)
            }) : e.animate()
        },
        animate: function () {
            var e = this,
                i = setInterval(function () {
                    for (; e.ux_items.length > 0;) {
                        var r = e.ux_items.shift(),
                            a = "600ms";
                        if (r.attr("data-gdlr-animation-duration") && (a = r.attr("data-gdlr-animation-duration")), r.css({
                                "animation-duration": a
                            }), r.addClass(r.attr("data-gdlr-animation")), setTimeout(function () {
                                r.css({
                                    "animation-duration": ""
                                }).removeClass(r.attr("data-gdlr-animation")).removeAttr("data-gdlr-animation")
                            }, parseInt(a)), e.ux_item_length--, t(window).scrollTop() < r.offset().top + r.outerHeight()) break
                    }
                    e.ux_item_length <= 0 && clearInterval(i)
                }, 200)
        }
    }, t.fn.gdlr_core_ux = function (e) {
        return new n(t(this), e), t(this)
    }, t.fn.gdlr_core_skill_bar = function (e) {
        if (void 0 === e) i = t(this).find(".gdlr-core-skill-bar-filled");
        else var i = e.filter(".gdlr-core-skill-bar-filled");
        i.each(function () {
            var e = t(this);
            "mobile-landscape" == a || "mobile-portrait" == a || t(window).scrollTop() + t(window).height() > e.offset().top ? e.animate({
                width: parseInt(e.attr("data-width")) + "%"
            }, {
                duration: 1200,
                easing: "easeOutQuart"
            }) : t(window).scroll(function (i) {
                t(window).scrollTop() + t(window).height() > e.offset().top && (e.animate({
                    width: parseInt(e.attr("data-width")) + "%"
                }, {
                    duration: 1200,
                    easing: "easeOutQuart"
                }), t(window).unbind("scroll", i.handleObj.handler, i))
            })
        })
    }, t.fn.gdlr_core_divider = function (e) {
        if (void 0 === e) i = t(this).find(".gdlr-core-divider-item-with-icon-inner");
        else var i = e.filter(".gdlr-core-divider-item-with-icon-inner");
        i.each(function () {
            var e = t(this),
                i = e.children("i, img").outerWidth(),
                r = (e.width() - i) / 2;
            t(this).children(".gdlr-core-divider-line").css({
                width: r
            }).each(function () {
                t(this).css("margin-top", -t(this).outerHeight() / 2)
            }), t(window).resize(function () {
                i = e.children("i, img").outerWidth(), r = (e.width() - i) / 2, e.children(".gdlr-core-divider-line").css({
                    width: r
                }).each(function () {
                    t(this).css("margin-top", -t(this).outerHeight() / 2)
                })
            })
        })
    }, window.gdlr_core_sidebar_wrapper = function (t, e) {
        this.elem = void 0 === e ? t.find(".gdlr-core-page-builder-wrapper-sidebar-container, .gdlr-core-pbf-sidebar-container") : e.filter(".gdlr-core-page-builder-wrapper-sidebar-container, .gdlr-core-pbf-sidebar-container"), this.init()
    }, gdlr_core_sidebar_wrapper.prototype = {
        init: function () {
            var e = this;
            e.set_height(), t(window).on("load resize", function () {
                e.set_height()
            })
        },
        set_height: function () {
            this.elem.each(function () {
                if ("mobile-landscape" != a && "mobile-portrait" != a) {
                    var e = t(this).find(".gdlr-core-pbf-sidebar-padding"),
                        i = 0;
                    e.css("min-height", "").each(function () {
                        t(this).outerHeight() > i && (i = t(this).outerHeight())
                    }), e.css("min-height", i)
                }
            })
        }
    }, t.fn.gdlr_core_title_divider = function (e) {
        if (void 0 === e) i = t(this).find(".gdlr-core-title-item-title-wrap.gdlr-core-with-divider");
        else var i = e.filter(".gdlr-core-title-item-title-wrap.gdlr-core-with-divider");
        if (i.each(function () {
                var e = t(this),
                    i = e.children(".gdlr-core-title-item-title").outerWidth(!0),
                    r = e.children(".gdlr-core-title-item-divider").length;
                r = r || 1;
                var a = (e.width() - i) / r;
                if (1 == r) {
                    var o = e.children(".gdlr-core-title-item-link").outerWidth() + 20;
                    e.children(".gdlr-core-title-item-divider").css({
                        width: a - o,
                        right: o
                    })
                } else e.children(".gdlr-core-title-item-divider").css({
                    width: a
                });
                t(window).resize(function () {
                    i = e.children(".gdlr-core-title-item-title").outerWidth(!0), a = (e.width() - i) / r, 1 == r ? (o = e.children(".gdlr-core-title-item-link").outerWidth() + 20, e.children(".gdlr-core-title-item-divider").css({
                        width: a - o,
                        right: o
                    })) : e.children(".gdlr-core-title-item-divider").css({
                        width: a
                    })
                })
            }), void 0 === e) r = t(this).find(".gdlr-core-title-item-title-wrap.gdlr-core-with-link-text");
        else var r = e.filter(".gdlr-core-title-item-title-wrap.gdlr-core-with-link-text");
        r.each(function () {
            var e = t(this),
                i = e.children(".gdlr-core-title-item-title").outerWidth(!0),
                r = e.children(".gdlr-core-title-item-link").outerWidth();
            e.width() < i + r ? e.children(".gdlr-core-title-item-link").addClass("gdlr-core-overflow") : e.children(".gdlr-core-title-item-link").removeClass("gdlr-core-overflow"), t(window).resize(function () {
                e.width() < i + r ? e.children(".gdlr-core-title-item-link").addClass("gdlr-core-overflow") : e.children(".gdlr-core-title-item-link").removeClass("gdlr-core-overflow")
            })
        })
    }, t.fn.gdlr_core_flipbox = function (e) {
        if ("function" == typeof t.fn.flip) {
            if (void 0 === e) i = t(this).find(".gdlr-core-flipbox");
            else var i = e.filter(".gdlr-core-flipbox");
            i.each(function () {
                var e = t(this).flip({
                    axis: "y",
                    trigger: "hover",
                    autoSize: !1,
                    front: ".gdlr-core-flipbox-front",
                    back: ".gdlr-core-flipbox-back"
                });
                t(this).find(".gdlr-core-flipbox-back a").click(function () {
                    e.data("flip-model") && e.data("flip-model").unflip()
                }), t(this).addClass("gdlr-core-after-init")
            })
        }
        return t(this)
    }, t.fn.gdlr_core_pie_chart = function () {
        "function" == typeof t.fn.easyPieChart && t(this).easyPieChart({
            animate: parseInt(t(this).attr("data-duration")),
            lineWidth: parseInt(t(this).attr("data-line-width")),
            size: parseInt(t(this).attr("data-width")),
            barColor: t(this).attr("data-filled-color"),
            trackColor: t(this).attr("data-filled-background"),
            scaleColor: !1,
            lineCap: "square"
        })
    }, t.fn.gdlr_core_skill_circle = function (i) {
        if (void 0 === i) r = t(this).find(".gdlr-core-skill-circle");
        else var r = i.filter(".gdlr-core-skill-circle");
        r.each(function () {
            var i = t(this);
            e(i), t(window).resize(function () {
                e(i)
            }), t(window).scrollTop() + t(window).height() > i.offset().top ? i.gdlr_core_pie_chart() : t(window).scroll(function (e) {
                t(window).scrollTop() + t(window).height() > i.offset().top && (i.gdlr_core_pie_chart(), t(window).unbind("scroll", e.handleObj.handler, e))
            })
        })
    }, t.fn.gdlr_core_tab = function (e) {
        if (void 0 === e) i = t(this).find(".gdlr-core-tab-item");
        else var i = e.filter(".gdlr-core-tab-item");
        i.each(function () {
            if (t(this).find(".gdlr-core-tab-item-title").click(function () {
                    if (!t(this).hasClass("gdlr-core-active")) {
                        var e = t(this).attr("data-tab-id");
                        t(this).addClass("gdlr-core-active").siblings().removeClass("gdlr-core-active"), t(this).parent().siblings(".gdlr-core-tab-item-content-wrap").children('[data-tab-id="' + e + '"]').fadeIn(200).siblings().hide()
                    }
                }), !r && "mobile-landscape" != a && "mobile-portrait" != a && t(this).is(".gdlr-core-tab-style2-horizontal, .gdlr-core-tab-style2-vertical")) {
                var e = t(this).is(".gdlr-core-tab-style2-horizontal"),
                    i = t(this).find(".gdlr-core-tab-item-title-line"),
                    o = 0,
                    n = 0;
                t(this).children(".gdlr-core-tab-item-title-wrap").children(".gdlr-core-active").each(function () {
                    e ? (o = t(this).outerWidth(), n = t(this).position().left, i.css({
                        width: o,
                        left: n
                    })) : (o = t(this).outerHeight(), n = t(this).position().top, i.css({
                        height: o,
                        top: n
                    }))
                }), t(window).resize(function () {
                    t(this).children(".gdlr-core-tab-item-title-wrap").children(".gdlr-core-active").each(function () {
                        e ? (o = t(this).outerWidth(), n = t(this).position().left, i.css({
                            width: o,
                            left: n
                        })) : (o = t(this).outerHeight(), n = t(this).position().top, i.css({
                            height: o,
                            top: n
                        }))
                    })
                }), t(this).children(".gdlr-core-tab-item-title-wrap").children(".gdlr-core-tab-item-title").hover(function () {
                    e ? i.animate({
                        width: t(this).outerWidth(),
                        left: t(this).position().left
                    }, {
                        duration: 300,
                        easing: "easeOutQuart",
                        queue: !1
                    }) : i.animate({
                        height: t(this).outerHeight(),
                        top: t(this).position().top
                    }, {
                        duration: 300,
                        easing: "easeOutQuart",
                        queue: !1
                    })
                }, function () {
                    e ? i.animate({
                        width: o,
                        left: n
                    }, {
                        duration: 300,
                        easing: "easeOutQuart",
                        queue: !1
                    }) : i.animate({
                        height: o,
                        top: n
                    }, {
                        duration: 300,
                        easing: "easeOutQuart",
                        queue: !1
                    })
                }), t(this).children(".gdlr-core-tab-item-title-wrap").children(".gdlr-core-tab-item-title").click(function () {
                    e ? (o = t(this).outerWidth(), n = t(this).position().left, i.css({
                        width: o,
                        left: n
                    })) : (o = t(this).outerHeight(), n = t(this).position().top, i.css({
                        height: o,
                        top: n
                    }))
                })
            }
        })
    }, t.fn.gdlr_core_sly = function (e) {
        if (void 0 === e) i = t(this).find(".gdlr-core-sly-slider");
        else var i = e.filter(".gdlr-core-sly-slider");
        return i.addClass("gdlr-core-after-init").each(function () {
            var e = t(this);
            e.sly({
                horizontal: 1,
                itemNav: "basic",
                smart: 1,
                activateOn: "click",
                mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 1,
                startAt: 0,
                scrollBy: 1,
                speed: 1e3,
                elasticBounds: 1,
                easing: "easeOutQuart",
                dragHandle: 1,
                dynamicHandle: 1,
                clickBar: 1,
                scrollBar: t(this).siblings(".gdlr-core-sly-scroll")
            }), t(window).resize(function () {
                e.sly("reload")
            })
        }), t(this)
    }, t.fn.gdlr_core_flexslider = function (e) {
        if (void 0 === e) i = t(this).find(".gdlr-core-flexslider");
        else var i = e.filter(".gdlr-core-flexslider");
        return i.each(function () {
            var e = {
                useCSS: !1,
                animation: "fade",
                animationLoop: !0,
                prevText: '<i class="arrow_carrot-left"></i>',
                nextText: '<i class="arrow_carrot-right"></i>'
            };
            if (t(this).find(".gdlr-core-flexslider").length > 0 && (t(this).children("ul.slides").addClass("parent-slides"), e.selector = ".parent-slides > li"), t(this).attr("data-disable-autoslide") && (e.slideshow = !1), t(this).attr("data-pausetime") && (e.slideshowSpeed = parseInt(t(this).attr("data-pausetime"))), t(this).attr("data-slidespeed") ? e.animationSpeed = parseInt(t(this).attr("data-slidespeed")) : e.animationSpeed = 500, "carousel" == t(this).attr("data-type")) {
                e.move = 1, e.animation = "slide";
                var i = parseInt(t(this).attr("data-column"));
                e.itemMargin = 2 * parseInt(t(this).children("ul.slides").children("li:first-child").css("margin-right")), e.itemWidth = (t(this).width() + e.itemMargin) / i - e.itemMargin, e.minItems = i, e.maxItems = i;
                var r = t(this);
                t(window).resize(function () {
                    if (r.data("goodlayers_flexslider")) {
                        var t = (r.width() + e.itemMargin) / i - e.itemMargin;
                        r.data("goodlayers_flexslider").editItemWidth(t)
                    }
                })
            } else t(this).attr("data-effect") && ("kenburn" == t(this).attr("data-effect") ? e.animation = "fade" : e.animation = t(this).attr("data-effect"));
            if (t(this).attr("data-nav") && "both" != t(this).attr("data-nav") && "navigation" != t(this).attr("data-nav") && "navigation-outer" != t(this).attr("data-nav") ? e.directionNav = !1 : t(this).attr("data-nav-parent") && ("custom" == t(this).attr("data-nav-type") ? e.customDirectionNav = t(this).closest("." + t(this).attr("data-nav-parent")).find(".flex-prev, .flex-next") : t(this).closest("." + t(this).attr("data-nav-parent")).each(function () {
                    var i = t('<ul class="flex-direction-nav"><li class="flex-nav-prev"><a class="flex-prev" href="#"><i class="arrow_carrot-left"></i></a></li><li class="flex-nav-next"><a class="flex-next" href="#"><i class="arrow_carrot-right"></i></a></li></ul>'),
                        r = t(this).find(".gdlr-core-flexslider-nav");
                    r.length && (r.append(i), e.customDirectionNav = i.find(".flex-prev, .flex-next"))
                })), "both" == t(this).attr("data-nav") || "bullet" == t(this).attr("data-nav") ? e.controlNav = !0 : e.controlNav = !1, t(this).attr("data-thumbnail")) {
                var a = t(this).siblings(".gdlr-core-sly-slider");
                e.manualControls = a.find("ul.slides li"), e.controlNav = !0
            }
            t(this).attr("data-vcenter-nav") ? e.start = function (e) {
                e.directionNav && t(window).resize(function () {
                    e.directionNav.each(function () {
                        var i = -(e.height() + t(this).outerHeight()) / 2;
                        t(this).css("margin-top", i)
                    })
                }), void 0 !== e.slides && (t(window).trigger("resize"), e.slides.filter(".flex-active-slide").addClass("gdlr-core-active").siblings().removeClass("gdlr-core-active"))
            } : e.start = function (e) {
                void 0 !== e.slides && (t(window).trigger("resize"), e.slides.filter(".flex-active-slide").addClass("gdlr-core-active").siblings().removeClass("gdlr-core-active"))
            }, e.after = function (t) {
                t.slides.filter(".flex-active-slide").addClass("gdlr-core-active").siblings().removeClass("gdlr-core-active")
            }, t(this).find(".gdlr-core-outer-frame-element").length > 0 && t(this).addClass("gdlr-core-with-outer-frame-element"), t(this).goodlayers_flexslider(e)
        }), t(this)
    }, t.fn.gdlr_core_isotope = function (e) {
        if ("function" == typeof t.fn.isotope) {
            if (void 0 === e) i = t(this).find('[data-layout="masonry"]');
            else var i = e.filter('[data-layout="masonry"]');
            i.each(function () {
                var e = t(this),
                    i = e.width() / 60;
                e.isotope({
                    itemSelector: ".gdlr-core-item-list",
                    layoutMode: "masonry",
                    masonry: {
                        columnWidth: i
                    }
                }), e.isotope(), e.children(".gdlr-core-item-list").gdlr_core_animate_list_item(), t(window).resize(function () {
                    i = e.width() / 60, e.isotope({
                        masonry: {
                            columnWidth: i
                        }
                    })
                })
            })
        }
        return t(this)
    }, t.fn.gdlr_core_animate_list_item = function () {
        var e = t(this).get(),
            i = setInterval(function () {
                if (e.length > 0) {
                    var r = t(e.shift());
                    r.css({
                        "animation-duration": "600ms"
                    }), r.addClass("gdlr-core-animate").css("webkit-animation-duration"), setTimeout(function () {
                        r.css({
                            "animation-duration": ""
                        }).addClass("gdlr-core-animate-end").removeClass("gdlr-core-animate gdlr-core-animate-init")
                    }, parseInt("600ms"))
                } else clearInterval(i)
            }, 200)
    }, t.fn.gdlr_core_lightbox = function (e) {
        if ("function" == typeof t.iLightBox) {
            if (void 0 === e) i = t(this).find(".gdlr-core-ilightbox");
            else var i = e.filter(".gdlr-core-ilightbox");
            var r = {},
                a = [];
            void 0 !== gdlr_core_pbf.ilightbox_skin && (r.skin = gdlr_core_pbf.ilightbox_skin), i.each(function () {
                t(this).attr("data-ilightbox-group") ? -1 == a.indexOf(t(this).attr("data-ilightbox-group")) && a.push(t(this).attr("data-ilightbox-group")) : t(this).iLightBox(r)
            });
            for (var o in a) t(this).find('.gdlr-core-ilightbox[data-ilightbox-group="' + a[o] + '"]').iLightBox(r)
        }
        if (void 0 === e) n = t(this).find(".gdlr-core-image-overlay-center, .gdlr-core-image-overlay-center-icon");
        else var n = e.filter(".gdlr-core-image-overlay-center, .gdlr-core-image-overlay-center-icon");
        return n.each(function () {
            if (t(this).hasClass("gdlr-core-image-overlay-center")) {
                var e = t(this).children(".gdlr-core-image-overlay-content"),
                    i = t(this).outerHeight() - 2 * parseInt(e.css("bottom")),
                    r = e.children(".gdlr-core-portfolio-icon-wrap"),
                    a = (i - (e.outerHeight() - parseInt(r.css("margin-bottom")))) / 2;
                a > 20 && r.css("margin-bottom", a)
            } else t(this).children(".gdlr-core-image-overlay-content").each(function () {
                t(this).css({
                    "margin-top": -t(this).outerHeight() / 2
                })
            })
        }), t(window).resize(function () {
            n.each(function () {
                if (t(this).hasClass("gdlr-core-image-overlay-center")) {
                    var e = t(this).children(".gdlr-core-image-overlay-content"),
                        i = t(this).outerHeight() - 2 * parseInt(e.css("bottom")),
                        r = e.children(".gdlr-core-portfolio-icon-wrap"),
                        a = (i - (e.outerHeight() - parseInt(r.css("margin-bottom")))) / 2;
                    a > 20 && r.css("margin-bottom", a)
                } else t(this).children(".gdlr-core-image-overlay-content").each(function () {
                    t(this).css({
                        "margin-top": -t(this).outerHeight() / 2
                    })
                })
            })
        }), t(this)
    }, t.fn.gdlr_core_set_image_height = function () {
        var e = t(this).find("img");
        return e.each(function () {
            var e = t(this).attr("width"),
                i = t(this).attr("height");
            if (e && i) {
                var r = t(this).parent(".gdlr-core-temp-image-wrap");
                r.length ? r.height(i * t(this).width() / e) : ((r = t('<div class="gdlr-core-temp-image-wrap" ></div>')).css("height", i * t(this).width() / e), t(this).wrap(r))
            }
        }), t(window).resize(function (i) {
            e.each(function () {
                t(this).parent(".gdlr-core-temp-image-wrap").length && t(this).unwrap()
            }), t(window).unbind("resize", i.handleObj.handler, i)
        }), t(this)
    }, window.gdlr_core_set_full_height = function (t, e) {
        this.elements = void 0 === e ? t.find(".gdlr-core-wrapper-full-height, .gdlr-core-column-full-height") : e.filter(".gdlr-core-wrapper-full-height, .gdlr-core-column-full-height"), this.elements.length && this.init()
    }, gdlr_core_set_full_height.prototype = {
        init: function () {
            var e = this;
            e.resize(), t(window).on("load resize", function () {
                e.resize()
            })
        },
        resize: function () {
            this.elements.each(function () {
                var e = t(this).attr("data-decrease-height") ? parseInt(t(this).attr("data-decrease-height")) : 0;
                if (t(this).css("min-height", t(window).height() - e), t(this).hasClass("gdlr-core-full-height-center")) {
                    t(this).children(".gdlr-core-full-height-pre-spaces").remove();
                    var i = (t(this).height() - t(this).children(".gdlr-core-full-height-content").outerHeight(!0)) / 2;
                    i > 0 && t(this).prepend(t('<div class="gdlr-core-full-height-pre-spaces" ></div>').height(i))
                }
            })
        }
    }, window.gdlr_core_sync_height = function (t, e) {
        void 0 === window.gdlr_core_sync_height_elem ? (window.gdlr_core_sync_height_elem = this, this.elements = void 0 === e ? t.find("[data-sync-height]") : e.filter("[data-sync-height]"), this.elements_group = [], this.container = t, this.init()) : window.gdlr_core_sync_height_elem.reinit()
    }, gdlr_core_sync_height.prototype = {
        init: function () {
            var e = this;
            e.group_elements(), e.set_height(), t(window).on("load resize", function () {
                e.set_height()
            })
        },
        reinit: function () {
            this.elements = this.container.find("[data-sync-height]"), this.group_elements(), this.set_height()
        },
        group_elements: function () {
            var e = this;
            e.elements.filter(".gdlr-core-flipbox-front").each(function () {
                -1 == e.elements_group.indexOf(t(this).attr("data-sync-height")) && e.elements_group.push(t(this).attr("data-sync-height"))
            }), e.elements.each(function () {
                -1 == e.elements_group.indexOf(t(this).attr("data-sync-height")) && e.elements_group.push(t(this).attr("data-sync-height"))
            })
        },
        set_height: function () {
            var e = this;
            e.elements.css("height", "auto").children(".gdlr-core-sync-height-pre-spaces").remove(), e.elements.find(".gdlr-core-sync-height-offset").remove();
            var i = e.elements;
            "mobile-landscape" != a && "mobile-portrait" != a || (i = i.filter(".gdlr-core-flipbox-front, .gdlr-core-flipbox-back"));
            for (var r in e.elements_group) {
                var o = 0;
                i.filter('[data-sync-height="' + e.elements_group[r] + '"]').each(function () {
                    t(this).outerHeight() > o && (o = t(this).outerHeight())
                }), i.filter('[data-sync-height="' + e.elements_group[r] + '"]').each(function () {
                    var e = parseInt(o - t(this).outerHeight()),
                        i = t(this).find("[data-sync-height-offset]");
                    if (i.length && e > 0 && t('<div class="gdlr-core-sync-height-offset" ></div>').css("height", e).insertBefore(i), t(this).css("height", o), t(this).hasClass("gdlr-core-flipbox-front") && t(this).parent().css("height", o), t(this).is("[data-sync-height-center]")) {
                        var r = t(this).children(".gdlr-core-sync-height-content");
                        0 == r.length && (r = t(this).children());
                        var a = (o - r.outerHeight()) / 2;
                        (a -= parseInt(t(this).css("padding-top")) + parseInt(t(this).css("border-top-width"))) > 0 && t(this).prepend(t('<div class="gdlr-core-sync-height-pre-spaces" ></div>').css("padding-top", a))
                    }
                })
            }
        }
    }, t.fn.gdlr_core_ajax = function (e) {
        if (void 0 === e) r = t(this).find("[data-ajax]");
        else var r = e.filter("[data-ajax]");
        r.each(function () {
            var e = t(this);
            t(this).on("click", "a", function () {
                if (t(this).hasClass("gdlr-core-active")) return !1;
                t(this).addClass("gdlr-core-active").siblings().removeClass("gdlr-core-active");
                var r = t(this).attr("data-ajax-name"),
                    a = t(this).attr("data-ajax-value");
                return i(e, r, a), !1
            }), t(this).on("change", "select", function () {
                var r = t(this).attr("data-ajax-name"),
                    a = t(this).val();
                i(e, r, a)
            })
        })
    }, t.fn.gdlr_core_dropdown_tab = function (e) {
        if (void 0 === e) i = t(this).find(".gdlr-core-dropdown-tab");
        else var i = e.filter(".gdlr-core-dropdown-tab");
        i.each(function () {
            var e = t(this).children(".gdlr-core-dropdown-tab-title"),
                i = e.children(".gdlr-core-head"),
                r = e.children(".gdlr-core-dropdown-tab-head-wrap"),
                a = t(this).children(".gdlr-core-dropdown-tab-content-wrap");
            e.click(function () {
                t(this).hasClass("gdlr-core-active") ? (t(this).removeClass("gdlr-core-active"), r.hide()) : (t(this).addClass("gdlr-core-active"), r.slideDown(200))
            }), r.children().click(function () {
                i.html(t(this).html()), t(this).addClass("gdlr-core-active").siblings().removeClass("gdlr-core-active");
                var e = a.children('[data-index="' + t(this).attr("data-index") + '"]');
                e.fadeIn(200).addClass("gdlr-core-active"), e.siblings().hide().removeClass("gdlr-core-active")
            })
        })
    }, gdlr_core_pbf.admin || (t(document).ready(function () {
        t("body").each(function () {
            if (t(this).hasClass("gdlr-core-link-to-lightbox")) {
                var e = t(this).find('a[href$=".jpg"], a[href$=".png"], a[href$=".gif"]').not(".gdlr-core-ilightbox, .strip, [data-rel]").addClass("strip gdlr-core-ilightbox");
                t(this).gdlr_core_lightbox(e)
            }
            var i = t(this).find('.gdlr-core-js, iframe[src*="youtube"], iframe[src*="vimeo"]');
            t(this).gdlr_core_content_script(i, !0), t(this).gdlr_core_counter_item(i), t(this).gdlr_core_typed_animation(i), t(this).gdlr_core_countdown_item(i), t(this).gdlr_core_alert_box_item(i), t(this).gdlr_core_accordion(i), t(this).gdlr_core_toggle_box(i), t(this).gdlr_core_divider(i), t(this).gdlr_core_flipbox(i), t(this).gdlr_core_skill_circle(i), t(this).gdlr_core_skill_bar(i), t(this).gdlr_core_tab(i), t(this).gdlr_core_dropdown_tab(i), t(this).gdlr_core_lightbox(i), t(this).gdlr_core_ajax(i), new n(t(this), i), new gdlr_core_set_full_height(t(this), i), new gdlr_core_sidebar_wrapper(t(this), i), new gdlr_core_sync_height(t(this), i), t(this).gdlr_core_parallax_background(i)
        })
    }), t(window).load(function () {
        t("body").each(function () {
            var e = t(this).find(".gdlr-core-js-2");
            t(this).gdlr_core_title_divider(e), t(this).gdlr_core_flexslider(e), t(this).gdlr_core_sly(e), t(this).gdlr_core_isotope(e)
        })
    }))
}(jQuery);
