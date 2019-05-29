let circle;
let triangle;
let square;



describe( "Polygon", () => {
  beforeEach( () => {
    polygon = new Polygon( [ 5, 5, 5 ] )
  } )

  it( "has a Polygon class", () => {
    expect( Polygon ).to.exist
  } )

  it( "Polygon has a countSides getter method that returns the number of sides of the polygon", () => {
    expect( polygon.countSides ).to.eq( 3 )
  } )

  it( "Polygon has a perimeter getter that calculates perimeter", () => {
    expect( polygon.perimeter ).to.eq( 15 )
  } )
} )

describe( "Triangle", () => {
  let triangle
  let triangle2
  it( "has a Triangle class", () => {
    expect( Triangle ).to.exist
  } )

  it( "checks for valid triangle", () => {
    triangle = new Triangle( [ 5, 5, 5 ] )
    triangle2 = new Triangle( [ 15, 10, 1 ] )

    expect( triangle.countSides ).to.eq( 3 )

    expect( triangle.isValid ).to.be.true
    expect( triangle2.isValid ).to.be.false
  } )

  it( "has a perimeter getter inherited from Polygon", () => {
    expect( triangle.perimeter ).to.eq( 15 )
    expect( triangle2.perimeter ).to.eq( 26 )
  } )
} )


describe( "Square", () => {
  it( "has a Square class", () => {
    expect( Square ).to.exist
  } )

  it( "has a perimeter getter inherited from Polygon", () => {
    var square = new Square( [ 5, 5, 5, 5 ] )

    expect( square.perimeter ).to.eq( 20 )
  } )

  it( "calculates the area", () => {
    var square = new Square( [ 5, 5, 5, 5 ] )

    expect( square.area ).to.eq( 25 )
  } )

  it( "checks for valid square", () => {
    var square = new Square( [ 5, 5, 5, 5 ] )
    var square2 = new Square( [ 5, 4, 3, 2 ] )

    expect( square.countSides ).to.eq( 4 )
    expect( square.isValid ).to.be.true
    expect( square2.isValid ).to.be.false
  } )
} )
