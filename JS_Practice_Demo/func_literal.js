

var add = function(a , b)
{
    return a+b;
}
console.log(add(4,5));
var  myObject ={
    value:0,
    increment:function(inc)
    {
        this.value+= typeof inc === 'number'?inc:1;
    }
};
myObject.increment();
myObject.increment();
console.log(myObject.value);

var number={
    value:2,
    decrement:function(dec)
    {
        this.value-= typeof dec  === 'number'?dec:1;
    }
}
number.decrement();
console.log(number.value);
////////////////////
(function(){
let y ="Happy Holi!!";
console.log(y);
})();

(function(){
    let sum = 4;
    console.log(sum);
})();
//() it means self invoke

//Javascript can be used as expression
function myfun(a,b)
{
    return a*b;
}
let x = myfun(8,9)*10;
console.log(x);

function hello( n1 ,n2)
{
    return arguments.length;
}
console.log(hello(4,8,9));
// toString() method returns the function as string
function num(h1,h2)
{
    return h1*h2;
}
let text = num.toString();
console.log(text);

function mi(phone ,model =5)
{
    return phone+model;
}
console.log(mi("mi"));
//function rest parameter
function sum(...args)
{
    let sum =0;
    for(let arg of args)
    {
        sum+=arg;
    }
    return sum;

}
let x1 = sum(4,8,9,7,6,4);
console.log(x1);

//global object

const person={
    firstname:"Srashti",
    lastname:"Gupta",
    Fullname: function()
    {
       return this.firstname+" "+this.lastname;
    }
}
console.log(person.Fullname());
const Number={
    prime:13,
    odd:3,
    Fullname: function()
    {
       return this;
    }
}
console.log(Number.Fullname());