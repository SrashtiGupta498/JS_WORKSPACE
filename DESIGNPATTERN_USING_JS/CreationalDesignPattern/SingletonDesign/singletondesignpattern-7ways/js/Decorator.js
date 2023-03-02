function decorateSingleton(Class) {
    Class.instance = new Class();
}

class DecoratorSingleton {
    invoke() {};
}

decorateSingleton(DecoratorSingleton);

console.log(DecoratorSingleton.instance.invoke());

