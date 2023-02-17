//clone
//prototype(set up of rules/clone)
//object(car)
class CarPrototype {
    constructor(proto) {
        this.proto = proto;
        this.clone = function () {
            const car = new Car();
            car.wheels = proto.wheels;
            car.engines = proto.engines;
            return car;
        };
    }
}


class Car {
    constructor(wheels, engines) {
        this.wheels = wheels;
        this.engines = engines;
        this.start = function () {
            console.log("Car Started");
        };
        this.break = function () {
            console.log("csr has stoped");
        };
    }
}
//client

function run(){
    const proto = new Car(4,2)
    console.log(proto);
}
console.log("helloworld");