var land ={
    smartcities:"Advancement in Technology",
    village:"Advancement in Agriculture",


getFunction:function()
{
    return(`Balance in ecosystem${land.smartcities} and  ${land.village}`);
},
development:{
    person:"mostsophisticatedwithtechnology",
    Diet:"Accurate Diet"

}
}
console.log(land.getFunction());
console.log(land.development.person);
