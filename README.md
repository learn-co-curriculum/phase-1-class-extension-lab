# JavaScript Class Extension Lab

## Learning Goals

1. Reiterate what a `prototype` is in JavaScript
2. Practice writing JavaScript `class`es that inherit from other `class`es

## Introduction

In this lab we're going to create a geometry application that allows us
calculate different properties of a shape. We'll be using JavaScript's
`class` keyword to build objects that inherit from and _extend_ base
objects.

## Reiterate What a `prototype` is in JavaScript

Remember that JavaScript `class`es are syntatic sugar over JavaScript's
existing `prototype`-based inheritance. A `prototype` is just an object,
and any properties and methods we add to an object's `prototype` will be
available to all objects that inherit from that `prototype` via _delegation_.
This mean, if a property or method isn't found on an object, then JavaScript
will look at every object up the prototype chain until it is found (or not).

Follow the instructions below to get your tests passing!

## Practice Writing JavaScript `class`es That Inherit From Other `class`es

1. Define a `Shape` `class`. This will be the base for all shapes.
2. The `Shape` `class` will accept a single `length` parameter, which will
represent one _side_ of the shape.
3. Define a `Triangle` `class` that inherits from `Shape`. Implement a `perimeter()`
method that calculates the perimeter using the `length` property. It is an
_equilateral_ triangle, meaning all sides are the same `length`.
4. Define a `Square` object that inherits from `Shape`. Implement `perimeter()`
_and_ `area()` methods that calculate these properties.
5. Define a `Rectangle` object that inherits from `Shape`. `Rectangle` is
   constructed with *two* integer arguments that will set `width` and `height`
   properties. Implement `perimeter()` and `area()` methods that calculate these
   properties.
6. Define a `Polygon` object that inherits from `Shape`. `Shape` is
   constructed with *two* integer arguments--a `length` and the number of sides.
   That will set `length` and `sides` properties. Implement a `perimeter()` methods
   that calculate this property.

## Resources

* [Understanding Prototypes, Delegation & Composition](https://www.datchley.name/understanding-prototypes-delegation-composition/)