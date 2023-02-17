//clone
//prototype(set up of rules/clone)
//object(car)
// class CarPrototype {
//     constructor(proto) {
//         this.proto = proto;
//         this.clone = function () {
//             const car = new Car();
//             car.wheels = proto.wheels;
//             car.engines = proto.engines;
//             return car;
//         };
//     }
// }

function CarPrototype(proto){
    this.proto =proto;
    this.clone = function(){
        const car = new Car();
        car.wheel =proto.wheels;
        car.engines = proto.engines;
        return car;
    }
}


//constructor function
function Car (wheels ,engines){
  
        this.wheels = wheels;
        this.engines = engines;
        this.start = function () {
            console.log("Car Started");
        };
        this.break = function () {
            console.log("car has stoped");
        };
    }

//client


    const proto = new Car(4,2);
    const prototype = new CarPrototype(proto)
    const car1 =prototype.clone()
console.log(car1);
    const car2 =prototype.clone();
    const car3 = prototype.clone();
    console.log(car3.break());

// console.log("helloworld");