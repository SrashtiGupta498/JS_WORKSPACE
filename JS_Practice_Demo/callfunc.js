function audi(type , fueltype)
{
    this.type = type;
    this.fueltype = fueltype;
}
function setBrand(brand)
{
    Car.call(this ,"convertible","petrol");
    this.brand=brand;
    console.log(`car details=`, this)
}
function defineprice(price)
{
    Car.call( this,"convertible","diesel");
    this.price = price;
    console.log(`car detail =`, this);
}
const newbrand = new setBrand('Branding');
const newcarprice = new defineprice(10000); 
