class Eshop{
    constructor(onlineorder , visit)
    {
        this.onlineorder = onlineorder;
        this.visit =visit;
    }
    add_service(delivery)
    {
        this.delivery= delivery
    }
    getDetails()
    {
        console.log(`shopnow ${this.Details} , ${this.delivery}`);

    }

}
let user = new Eshop("paytm","buy n visit");
user.add_service("Homedelivery");
user.getDetails();