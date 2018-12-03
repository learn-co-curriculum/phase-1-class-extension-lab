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
available to all objects that inherit from that `prototype` via delegation.
If a property or method isn't found on an object, then JavaScript will look
at every object up the prototype chain until it is found (or not).

Follow the instructions below to get your tests passing!

## Practice Writing JavaScript `class`es That Inherit From Other `class`es

1. Define a `Shape` `class`. This will be the base for all shapes.
2. The `Shape` `class` will accept a single `length` parameter.
3. Define a `Circle` object that inherits from `Shape` and is
   constructed with a parameter that sets the `radius` property. Define
   and implement methods on `Circle` to calculate `area()` and
   `circumference()` based on the `radius`.
4. Define a `Polygon` object that inherits from `Shape`. `Polygon` should be
   constructed with an `Array` of `length` properties. Implement a method
   called `perimeter()` that calculates the perimeter of any `Polygon` based
   on the `length`s supplied in the `Array`. Implement a method called
   `numberOfSides()` that returns the number of sides for the `Polygon`.
5. Define a `Rectangle` object that inherits from `Polygon` and is
   constructed with two integer arguments that sets a `width` and `height`
   properties. Implement an `area()` method to calculate the area. `Rectangle`
   should also have access to `perimeter()` and `numberOfSides()`.

## Resources
