// Constructor
function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = function() {
    console.log(this.name + " just barked");
  }
}

var rusty = new Dog("Rusty", 3);
var fido = new Dog("Fido", 1);
/*
Exception: SyntaxError: unexpected token: identifier
@Scratchpad/1:3
*/