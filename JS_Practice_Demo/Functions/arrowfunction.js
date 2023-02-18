var fruits =["Bannana","Apple","Orange","Grapes"];
let fruitsprice = [20,60,40,50];

let counts = fruitsprice.filter(function(item)
{
    return item>20;
});
let counting = fruitsprice.filter(item=>item>20);
console.log(counts);
console.log(counting);
// fruits.forEach(function(item ,index)
// {
//     console.log(index , item);
// });
//sorting ascending order 
fruits.sort(function fun(a,b)
{
    if(a<b)
    {
    return -1;
    }
    else
    {
        return 1;
    }
}
);
console.log(fruits);
//
let box = 10;
let boxsize={
    length:5,
    breadth:10,
    heigth:15
}
//one parameter with and without curly braces
const boxes = (param)=>{return param};
console.log(boxes(8));
const boxes1=param=>param;
console.log(boxes1(8));
//no parameter
const boxes2=()=> box;
console.log(boxes2());
//returning object
const boxes3=_=> box;
console.log(boxes3());
//returning objects
const boxes4 = (param)=>Object; //nodifference
const boxes5= _=>({  length:5,
    breadth:10,
    heigth:15})
    console.log(boxes5())   
//callback function
function dothing(other)
{
    let product = "cosmetic";
    other(product);
}
function market(pr,index ,arr){
    console.log('Purchase things',pr);
}
dothing(market);
/////////////////////
setTimeout(market ,3000,"foodie");
let products=["cosmetic","grocery","medical","furniture"];
products.forEach(market);
// navigator.geolocation.getCurrentPosition(gotposition , positionerror, {});
// function gotposition(p){

// } 
// function positionerror(err){


