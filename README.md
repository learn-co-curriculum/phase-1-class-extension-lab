# JavaScript Class Extension Lab: `extends`

## Learning Goals

1. Practice writing JavaScript classes that inherit from other classes

## Introduction

In this lab we're going to create a geometry application that allows us
calculate different properties of multiple shape. We'll be using JavaScript's
`class` keyword to build objects that inherit from its base object.

## Practice Writing JavaScript `class`es That Inherit From Other Classes

1. Define a `Shape` `class`. The `Shape` `class` will accept a single `length`
parameter, which will represent one _side_ of the shape.
2. Define a `Triangle` `class` that inherits from `Shape`. Implement a `perimeter()`
method that calculates a perimeter using the `length` property inherited from `Shape`.
3. Define a `Square` object that inherits from `Shape`. Implement `perimeter()`
_and_ `area()` methods that calculate these properties using the `length` property
inherited from `Shape`.
4. Define a `Polygon` object that inherits from `Shape`. `Polygon` is
   constructed with *two* integer arguments--a `length` and the number of sides.
   That will set `length` and `sides` properties on the constructor. Implement a
   `perimeter()` method that calculates the perimeter from these properties.

## Resources

* [Understanding Prototypes, Delegation & Composition](https://www.datchley.name/understanding-prototypes-delegation-composition/)