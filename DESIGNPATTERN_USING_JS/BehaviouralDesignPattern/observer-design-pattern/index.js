//pub /Sub
//observer design pattern
class youtubechannel {
    subscriptionArr=[];
    subscribe(Subscriber){
        this.subscriptionArr.push(Subscriber);
    }
    unsubscribe(subscriber){
        this.subscriptionArr = this.subscriptionArr.filter(
            (sub)=>sub.id!== subscriber.id
        );
    }
    publish(msg)
    {
        for(let subscriber of this.subscriptionArr)
        {
            subscriber.notify(msg)
        }
    }
}


class Subscriber {
    constructor(id , name){
        this.id= id;
        this.name = name;
    }
    notify(msg)
    {
        console.log(`Hey ${this.name}:${msg}`);
    }
}

const sub1 = new Subscriber(1, "Srashti");
const sub2 =new Subscriber(2,"Sejal");
const sub3 = new Subscriber(3,"Sulekha");
// const subsArr =[sub1,sub2,sub3];
// console.log(subArr);
// subsArr.forEach(sub=>sub.notify("Hey whats going on"));
const channel = new youtubechannel();
channel.subscribe(sub1);
channel.subscribe(sub2);
channel.unsubscribe(sub3);
channel.publish("new video come please see");