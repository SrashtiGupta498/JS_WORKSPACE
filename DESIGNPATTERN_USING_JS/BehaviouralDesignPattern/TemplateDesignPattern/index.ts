import { stringify } from "querystring";

abstract class Television{

    abstract properties: any;
    powerOn(){
        return "Powering on";
    }
    poweroff(){
        return "Powering off"
    }
    channelup(){
        return "Channel up"
    }
    channelDown(){
        return "ChannelDown"
    }
}

class Samsung extends Television{
    properties={
        
    }
    
}

class MI extends Television{
    properties= {
        var b =23
    }
}
const tv = new Samsung();
console.log(tv.properties.a);