function Subject()
{
    this.observers =[] //array of observer functions
}
Subject.prototype={
    subscribe: function(fn)
    {
        this.observers.push(fn)
    },
    unsubscribe: function(fntoremove)
    {
        this.observers.filter(fn=>{
           if(fn!=fntoremove)
                return fn
        })
        },
        fire: function()
        {
            this.observers.forEach(fn=>{
                fn.call()
            })
        }
}
const subject = new Subject()

function observer1()
{
    console.log("observer1 firing");
}
function observer2()
{
    console.log("observer2 firing")
}
subject.subscribe(observer1)
subject.subscribe(observer2)
//subject.unsubscribe(observer2)

subject.fire()