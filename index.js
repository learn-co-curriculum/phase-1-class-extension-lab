// Your code here

class Polygon {
  constructor(arr) {
    this.arr = arr;
  }
  get countSides() {
    return this.arr.length;
  }
  get perimeter() {
    return this.arr.reduce((acc, curr) => acc + curr, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3) return false;
    const [a, b, c] = this.arr;
    return a + b > c && a + c > b && b + c > a;
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides !== 4) return false;
    const [a, b, c, d] = this.arr;
    return a === b && b === c && c === d;
  }

  get area() {
    return this.arr[0] ** 2;
  }
}
