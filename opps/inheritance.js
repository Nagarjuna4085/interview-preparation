class Animal{
    constructor(name){
        this.name = name
    }
    getName(){
        console.log(this.name)
    }
    sayHello(){
        console.log("Hello")
    }
}


const dog = new Animal("napoleon")
dog.getName()



class Car extends Animal{
    constructor(name,brand,model){
        super(name)
        this.brand = brand
        this.model = model
    }
    startEngine(){
        console.log("start engine")
    }
}

const car1 = new Car("car1","toyota","innova")

car1.getName()
car1.sayHello()