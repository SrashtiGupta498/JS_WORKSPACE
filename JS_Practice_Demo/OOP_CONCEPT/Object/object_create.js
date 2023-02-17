const land={
    forest: false,
    deforestation:function(){
        console.log(`day by day in ${this.name}increases deforestatio:${this.forest}.`)

    }
}
    //object.create
    const jungle =Object.create(land);
jungle.name="Anujmarh forest";
jungle.forest =true;
jungle.deforestation();
