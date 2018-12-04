class Shape {
  constructor(length) {
    this.length = length
  }
}

class Triangle {
  constructor(length) {
    this.length = length
  }

  perimeter(){
    return this.length * 3
  }
}

class Square {
  constructor(length) {
    this.length = length
  }

  perimeter(){
    return this.length * 4
  }
  area(){
    return this.length * this.length
  }
}

class Polygon {
  constructor(length, sides) {
    this.length = length
    this.sides = sides
  }
  perimeter(){
    return this.length * this.sides
  }
}