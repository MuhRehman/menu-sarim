!function(e,n,s){"use strict";function a(e){if(n(m(C)).find(".sub-menu").before(e.submenu),null!==y){var s=C.others.concat(y[0]);n(m(s)).before(e.menu)}else n(m(C.others)).before(e.menu)}function t(){n(m(C)).addClass(k)}function i(){var e=n('button[id^="genesis-mobile-"]').attr("id");void 0!==e&&(f(e),d(e),c(e),u(e))}function o(){var e=n(this),s=e.next("nav");e.attr("id","genesis-mobile-"+n(s).attr("class").match(/nav-\w*\b/))}function u(e){if(null!=y){var s=y[0],a=n(y).filter(function(e){if(e>0)return e});"none"!==p(e)?(n.each(a,function(e,a){n(a).find(".menu > li").addClass("moved-item-"+a.replace(".","")).appendTo(s+" ul.genesis-nav-menu")}),n(m(a)).hide()):(n(m(a)).show(),n.each(a,function(e,s){n(".moved-item-"+s.replace(".","")).appendTo(s+" ul.genesis-nav-menu").removeClass("moved-item-"+s.replace(".",""))}))}}function r(){var e=n(this);h(e,"aria-pressed"),h(e,"aria-expanded"),e.toggleClass("activated"),e.next("nav").fadeToggle("fast")}function l(){var e=n(this),s=e.closest(".menu-item").siblings();h(e,"aria-pressed"),h(e,"aria-expanded"),e.toggleClass("activated"),e.next(".sub-menu").slideToggle("fast"),s.find("."+M).removeClass("activated").attr("aria-pressed","false"),s.find(".sub-menu").slideUp("fast")}function d(e){var s=n("."+k+" .js-superfish"),a="destroy";"function"==typeof s.superfish&&("none"===p(e)&&(a={delay:0,animation:{opacity:"show"},dropShadows:!1,speed:0,disableHI:!0}),s.superfish(a))}function c(e){var s=g();!n(s).length>0||n.each(s,function(s,a){var t=a.replace(".",""),i="genesis-"+t,o="genesis-mobile-"+t;"none"==p(e)&&(i="genesis-mobile-"+t,o="genesis-"+t);var u=n('.genesis-skip-link a[href="#'+i+'"]');if(null!==y&&a!==y[0]&&u.toggleClass("skip-link-hidden"),u.length>0){var r=u.attr("href");r=r.replace(i,o),u.attr("href",r)}})}function f(e){if("none"!==p(e))return!0;n("."+w+", ."+k+" .sub-menu-toggle").removeClass("activated").attr("aria-expanded",!1).attr("aria-pressed",!1),n("."+k+", ."+k+" .sub-menu").attr("style","")}function p(n){var s=e.getElementById(n);return window.getComputedStyle(s).getPropertyValue("display")}function h(e,n){e.attr(n,function(e,n){return"false"===n})}function m(e){return n.map(e,function(e,n){return e}).join(",")}function g(){var e=[];return null!==y&&n.each(y,function(n,s){e.push(s.valueOf())}),n.each(C.others,function(n,s){e.push(s.valueOf())}),e.length>0?e:null}n("body").removeClass("no-js");var v="undefined"==typeof genesis_responsive_menu?"":genesis_responsive_menu,b=v.menuClasses,C={},y=[];n.each(b,function(e){C[e]=[],n.each(this,function(s,a){var t=a,i=n(a);i.length>1?n.each(i,function(s,a){var i=t+"-"+s;n(this).addClass(i.replace(".","")),C[e].push(i),"combine"===e&&y.push(i)}):1==i.length&&(C[e].push(t),"combine"===e&&y.push(t))})}),void 0===C.others&&(C.others=[]),1==y.length&&(C.others.push(y[0]),C.combine=null,y=null);var x={},w="menu-toggle",M="sub-menu-toggle",k="genesis-responsive-menu";x.init=function(){if(0!=n(g()).length){var e=void 0!==v.menuIconClass?v.menuIconClass:"dashicons-before dashicons-menu",s=void 0!==v.subMenuIconClass?v.subMenuIconClass:"dashicons-before dashicons-arrow-down-alt2",u={menu:n("<button />",{class:w,"aria-expanded":!1,"aria-pressed":!1,role:"button",text:"Menu"}).append(n("<span />")),submenu:n("<button />",{class:M,"aria-expanded":!1,"aria-pressed":!1,text:""}).append(n("<span />",{class:"screen-reader-text",text:v.subMenu}))};t(),a(u),n("."+w).addClass(e),n("."+M).addClass(s),n("."+w).on("click.genesisMenu-mainbutton",r).each(o),n("."+M).on("click.genesisMenu-subbutton",l),n(window).on("resize.genesisMenu",i).triggerHandler("resize.genesisMenu")}},n(e).ready(function(){null!==g()&&x.init()})}(document,jQuery);