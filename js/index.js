//多态
var chicken=function(){};
var duck=function(){};
chicken.prototype.sound=function(){
    console.log('咯咯咯');
}
duck.prototype=function()
{
    console.log("嘎嘎嘎");
}
function makeSound(animals)
{
 animals.sound();
}


Object.create=Object.create || function(obj){
    var F=function(){};
    F.prototype=obj;
    return new F();
};

var Plane=function()
{
    this.blood=100;
    this.attackLevel=1;
    this.defenseLevel=1;
};
var plane=new Plane();

var clonePlane=Object.create(plane);
