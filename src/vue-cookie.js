(function () {

    var VueCookie = {

        config: {
            domain: null
        },

        install: function (Vue) {
            Vue.prototype.$cookie = this;
            Vue.cookie = this;
        },

        set: function (name, value, days, domain) {
            let d = new Date;
            let cookieDomain = typeof domain !== 'undefined' ? domain : this.getCookieDomain();
            let domainString = cookieDomain !== null ? ";domain=" + cookieDomain : '';
            d.setTime(d.getTime() + 24*60*60*1000*days);
            window.document.cookie = name + "=" + value + domainString + ";path=/;expires=" + d.toGMTString();
        },

        get: function (name) {
            var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
            return v ? v[2] : null;
        },

        delete: function (name) {
            this.set(name, '', -1);
        },

        setCookieDomain: function (domain) {
            this.config.cookieDomain = domain;
        },

        getCookieDomain: function () {
            return this.config.cookieDomain;
        }

    };

    if (typeof exports == "object") {
        module.exports = VueCookie;
    } else if (typeof define == "function" && define.amd) {
        define([], function(){ return VueCookie; })
    } else if (window.Vue) {
        window.VueCookie = VueCookie;
        Vue.use(VueCookie);
    }

})();