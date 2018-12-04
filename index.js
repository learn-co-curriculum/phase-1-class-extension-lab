class Shape {
  constructor(length) {
    this.length = length
  }
}

class Triangle {
  perimeter(){
    return this.length * 3
  }
}

class Square {
  perimeter(){
    return this.length * 4
  }
}

class Polygon {
  constructor(length, sides) {
    this.sides = sides
  }
  perimeter(){
    return this.length * this.sides
  }
}