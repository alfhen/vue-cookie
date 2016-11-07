import Vue from 'Vue';
import VueCookie from '../../src/vue-cookie'

Vue.use(VueCookie);

describe('VueCookie', function(){

    beforeEach(function () {
        this.cookieValue = 'test-value';
        this.cookieKey = 'test-cookie';
        this.cookieDomain = 'localhost';
    });

    it('Should set and retrieve a Cookie with given value', function(){

        Vue.cookie.set(this.cookieKey, this.cookieValue, 1);

        expect(Vue.cookie.get(this.cookieKey))
            .toBe(this.cookieValue);
    });

    it('Should delete existing cookie and get null when fetching deleted cookie', function(){

        Vue.cookie.delete(this.cookieKey);

        expect(Vue.cookie.get(this.cookieKey))
            .toBe(null);
    });


    it('Should set and retrieve a Cookie with given value from a domain', function(){

        Vue.cookie.set(this.cookieKey, this.cookieValue, {expires: 1, domain: this.cookieDomain});

        expect(Vue.cookie.get(this.cookieKey))
            .toBe(this.cookieValue);
    });

    it('Should delete existing cookie with a domain and get null when fetching deleted cookie', function(){

        Vue.cookie.delete(this.cookieKey, {domain: this.cookieDomain});

        expect(Vue.cookie.get(this.cookieKey))
            .toBe(null);
    });


});

 