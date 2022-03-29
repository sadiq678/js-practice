//Exercise 2
class Human{
	constructor(Name, Age){
		this.Name = Name
		this.Age = Age
	}
	talk(){
		return "this.Name" + "speaks"
	}
}

class Man extends Human{
	males(){

	}
}

let john = new Man()
console.log(john.talk())
