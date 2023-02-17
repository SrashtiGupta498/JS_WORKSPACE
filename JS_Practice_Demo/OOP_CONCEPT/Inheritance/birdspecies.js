class bird{
    constructor(species)
    {
        this.species = species;
    }
    toString()
    {
        return (`Name of bird species  :${this.species}`)
    }
}
class sparrow extends bird{
    constructor(name ,species)
    {
        super(species);
        this.name = name;
    }
    toString()
    {
        return(`${super.toString()} and,  ${this.name}`);  
    }
}
    var birds = new sparrow("fly","sparrow")

console.log(birds.toString());