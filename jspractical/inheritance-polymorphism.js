class Shape {
    constructor(colour = "Transparent") {
      this.colour = colour;
      this.type = "Shape";
    }
  
    describe() {
      console.log(`A ${this.colour} ${this.type}`);
    }
  }

  class Square extends Shape {
    constructor(colour, sideLength) {
      super(colour);
      this.sideLength = sideLength;
      this.type = "Square";
    }
  
    area() {
      return this.sideLength * this.sideLength;
    }
  }

  class Rectangle extends Shape {
    constructor(colour, width, height) {
      super(colour);
      this.width = width;
      this.height = height;
      this.type = "Rectangle";
    }
  
    area() {
      return this.width * this.height;
    }
  }

  
  const square = new Square("blue", 5);
  //here the class square called with its parameter
  const rectangle = new Rectangle("red", 5, 6);
 //here the class rectangle called with its parameter
  console.log( square.area() );
  console.log( rectangle.area() ); 
  for ( const shape of [square, rectangle] ) shape.describe();

