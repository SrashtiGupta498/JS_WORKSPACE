//External API SERVICE

function CryptoCurrencyAPI()
{
    this.getValue = function(coln)
    {
        console.log("Calling external API")
        switch(coln)
        {
            case "Bitcoin":
                return "$500";
            case "Litecoin":
                return "$50";
            case "Eherum":
                return "$70";
        }
    }
}
const api = new CryptoCurrencyAPI()
console.log(api.getValue("Bitcoin"));
console.log(api.getValue("Litecoin"))
console.log(api.getValue("Eherum"));

function CryptoCurrencyProxy()
{
     this.api = new CryptoCurrencyAPI()
     this.cache = {}
     this.getValue = function(coin)
     {
        if(this.cache[coin] == null)
        {
            this.cache[coin] = this.api.getValue(coin)
        }
        return this.cache[coin]
     }
    

      
}
const proxy = new CryptoCurrencyProxy()
console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("Litecoin"))
console.log(proxy.getValue("Eherum"))