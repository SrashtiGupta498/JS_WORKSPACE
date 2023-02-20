//IIFE(enclosed scope)closure +privacy
//global namespace  not get polluted 
// class train 
// {

//         constructor(fooddelivery)
//         {
//             this.fooddelivery = fooddelivery
//         }
// }
const passenger = function()
{
  class fooddeliverysystem
 {
        // constructor(orderdone , customer){
        //     this.orderdone = orderdone;
        //     this.customer= customer;

        }
    }

let system = null;

function createfooddeliverysystem()
{
    system = new passenger("yes","happy")
    return system;
}
return {
    getfooddeliverysystem:()=>
    {
        if(!system)
        {
        system = createfooddeliverysystem()
        }
        return system
    }
}
const foo =(train.getfooddeliverysystem());
const joo= train.getfooddeliverysystem();
console.log(foo);

// const singleto=(function(){
//     let instance = null;
//     function createinstance()
//     {
//         return {foodserve:"Rohit",ORdelivered:"yes" }
//     }
//     return {
//            getinstance : function(){
//                 if(!instance)
//                 {
//                     instance = createinstance();
//                 }
//                 return instance;
//            } 
//     }

// })()

// const instance =(singleto.getinstance())
// const instance2= singleto.getinstance()
// const instance3= singleto.getinstance()
// console.log(instance , instance2 , instance3);

