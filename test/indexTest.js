describe("Shape", () => {
  it("has a Shape class", () => {
    expect(Shape).to.exist
  })
  it("Shape has a length property", () => {
    var shape = new Shape(5)

    expect(shape.length).to.equal(5)
  })
})

describe("Triangle", () => {
  it("has a Triangle class", () => {
    expect(Triangle).to.exist
  })

  it("Shape calculates the perimeter", () => {
    var triangle = new Triangle(5)

    expect(triangle.perimeter()).to.equal(15)
  })
})


describe("Square", () => {
  it("has a Square class", () => {
    expect(Square).to.exist
  })

  it("Square calculates the perimeter", () => {
    var square = new Square(5)

    expect(square.perimeter()).to.equal(20)
  })

  it("Square calculates the area", () => {
    var square = new Square(5)

    expect(square.area()).to.equal(25)
  })
})


describe("Polygon", () => {
  it("has a Polygon class", () => {
    expect(Polygon).to.exist
  })

  it("Polygon calculates the perimeter", () => {
    var polygon = new Polygon(5, 10)

    expect(polygon.perimeter()).to.equal(50)
  })
})
