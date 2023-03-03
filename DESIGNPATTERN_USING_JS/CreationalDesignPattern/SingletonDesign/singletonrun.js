//IIFE(enclosed scope)closure +privacy
//global namespace  not get polluted 
const singleton=(function(){
    let instance = null;
    function createinstance()
    {
        return {
            name:"Rohit",age:91 ,score:Math.floor(Math.random()*10)
        }
    }
    return {
           getinstance : function(){
                if(!instance)
                {
                    instance = createinstance();
                }
                return instance;
           } 
    }

})()

const instance =(singleton.getinstance())
const instance2= singleton.getinstance()
const instance3= singleton.getinstance()
console.log(instance , instance2 , instance3);

