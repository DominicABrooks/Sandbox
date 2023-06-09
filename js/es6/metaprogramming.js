// https://exploringjs.com/es6/ch_proxies.html#sec_reference-proxy-api

const target = {};
const handler = {
    get(target, propKey, receiver) {
        console.log('get ' + propKey);
        return 123;
    }
};
const proxy = new Proxy(target, handler);

console.log(proxy.foo)