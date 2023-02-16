function Person( name ,weight , height ,gender)
{
    this.name=name;
    this.weight=weight;
    this.height=height;
    this.gender=gender;
}
function PersonBuilder(name , gender)
{
    this.name = name;
    this.gender = gender;

    this.setWeight = function(weight)
    {
        this.weight = weight;
        return this;
    }
    this.setHeight = function(height)
    {
        this.height = height;
        return this;
    }
 
    this.build = function()
    {
        return new PersonBuilder(this.name , this.weight , this.height,this.gender);
    }
}

const ram = new PersonBuilder("Krishna","male").setWeight(50).setHeight(6).build();
console.log(ram);
