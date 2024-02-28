let person={
    name: "nandni",
    fun:function(){
        console.log("inside person object");
    }
};
let a = Object.create(person);
let b = Object.create(a);