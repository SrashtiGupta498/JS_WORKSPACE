class singleobject{

private static _instance: singleobject;
private constructor()
{

}

public static  getinstance()
{
    return this._instance||(this._instance = new this());
}
public showMessage(): void
{
    console.log("Hello singleton Design Pattern")
}

}
var obj = singleobject.getinstance();
var obj2 = singleobject.getinstance();
 console.log(obj ==obj2);
