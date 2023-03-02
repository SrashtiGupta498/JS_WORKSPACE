class ClassicSingleton{
    static instance = new this();
    invoke(){};
//The code inside a function is executed when the function is invoked.
//In JavaScript, the this keyword refers to an object in which object depends on how this is being invoked (used or called).
}
class LazySingleton {
    static _instanceCache;

    static instance() {
        if (!this._instanceCache) {
            this._instanceCache = new this();
        }

        return this._instanceCache;
    }

    invoke() {};
}
/////////////////
class LazyGetterSingleton {
    static _instanceCache;

    static get instance() {
        if (!this._instanceCache) {
            this._instanceCache = new this();
        }

        return this._instanceCache;
    }

    invoke() {};
}