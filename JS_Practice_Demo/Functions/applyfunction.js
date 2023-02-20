function GroceryItem( type , quality)
{
    this.type = type;
    this.quality = quality;
}
function setBrand(brand)
{
    GroceryItem.apply(this , ["Maggie" ,"junkfood"]);
    this.brand = brand;
    console.log(`food details`,this);
}
function defineprice(price)
{
    GroceryItem.apply(this , new Array("Cornflore", "best"));
    this.price = price;
    console.log(`the food product is`,this);
}
const a = new setBrand('Ashirwaad');
const b = new defineprice(100000);


///
function newMap(func){
    let darr=[1,2,3,4,5,6];
    const srclen = this.length;
    for(let i=0;i<srclen;i++)
    {
        destarr.push(func.call(this, this[i]))
    }
    return(destarr);
}
console.log(newMap());

// const arr = [1,2,3,4,56,];
// const newarr = arr.newMap(item=>item+1);
// console.log(newarr);