var makeSound=function(animal){
    if(animal instanceof Duck){
        console.log('嘎嘎嘎');
    }else if(animal instanceof Chicken)
    {
        console.log('咯咯咯');
    }
};

var Duck=function(){};
var Chicken=function(){};
//makeSound(new Duck());
//makeSound(new Chicken());
var obj1={
    name:'sven'
};
window.name='window';
var obj2={
    name:'anne'
};
var getName=function(){
    console.log(this.name);
    return this.name;
}
// getName();
// getName.call(obj1);
// getName.call(obj2);


