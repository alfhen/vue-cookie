import Vue from 'Vue';
import VueCookie from '../../src/vue-cookie'

Vue.use(VueCookie);

describe('VueCookie', function(){

    beforeEach(function () {
        this.cookieValue = 'test-value';
        this.cookieKey = 'test-cookie';
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
});

 