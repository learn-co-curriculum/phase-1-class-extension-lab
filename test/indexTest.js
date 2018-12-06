let circle;
let triangle;
let square;



describe("Polygon", () => {
  beforeEach( () => {
    polygon = new Polygon([5,5,5])
  } )

  it("has a Polygon class", () => {
    expect(Polygon).to.exist
  })
  it("Polygon has a sides property", () => {
    expect(polygon.sides).to.have.all.members([5,5,5])
  })
  it("Polygon has a getCount() method that counts the sides of the polygon", () => {
    expect(polygon.getCount).to.exist
    expect(polygon.getCount).to.eq(3)
  })
  it("Polygon has a setCount() method that sets the count of the sides of the polygon", () => {
    expect(polygon.count).to.eq(3)
  })
  it("Polygon has a perimeter() method that calculates perimeter", () => {
    expect(polygon.perimeter()).to.eq(15)
  })
})

describe("Triangle", () => {
  it("has a Triangle class", () => {
    expect(Triangle).to.exist
  })

  it("Triangle checks for valid triangle", () => {
    var triangle = new Triangle([5,5,5])
    var triangle2 = new Triangle([15,10,1])

    expect(triangle.count).to.eq(3)
    expect(triangle.isValid()).to.be.true
    expect(triangle2.isValid()).to.be.false
  })
})


describe("Square", () => {
  it("has a Square class", () => {
    expect(Square).to.exist
  })

  it("Square calculates the perimeter", () => {
    var square = new Square([5,5,5,5])

    expect(square.perimeter()).to.eq(20)
  })

  it("Square calculates the area", () => {
    var square = new Square([5,5,5,5])

    expect(square.area()).to.eq(25)
  })
})
