class ConstructorSingleton {
    static _cache = new this();

    constructor() {
        return this.constructor._cache;
    }

    invoke() {};
}

/**
 * Usage
 */

new ConstructorSingleton().invoke()


/**
 * Proof
 */

console.log(new ConstructorSingleton() === new ConstructorSingleton()) // => true
