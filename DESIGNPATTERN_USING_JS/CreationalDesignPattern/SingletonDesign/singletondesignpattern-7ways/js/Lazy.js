class LazySingleton {
    static _instanceCache;
  
    static instance() {
        if (!this._instanceCache) {
            this._instanceCache = new this();
        }

        console.log( this._instanceCache);
    }

    invoke(cache) {
        console.log(cache)
    };
}

LazySingleton.instance().invoke("cache cleared");
