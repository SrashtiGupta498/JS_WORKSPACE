class ClassicSingleton {
    static instance = new this();

    invoke(name, age) {
        console.log(name+"age:" +age);
        

    };
}

(ClassicSingleton.instance.invoke("helly",20));

// The code inside a function is not executed when the function is defined.
// The code inside a function is executed when the function is invoked.
// It is common to use the term "call a function" instead of "invoke a function".
// It is also common to say "call upon a function", "start a function", or "execute a function".
//  we will use invoke, because a JavaScript function can be invoked without being called.
// In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.