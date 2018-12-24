# JavaScript Class Extension Lab: `extends`

## Learning Goals

1. Practice writing JavaScript classes that inherit from other classes

## Introduction

In this lab we're going to create a geometry application that allows us to
calculate different properties of multiple shape. We'll be using JavaScript's
`class` keyword to build objects that inherit from its base object.

## Practice Writing JavaScript classes That Inherit From Other Classes

1. Define a `Polygon` class. `Polygon` will accept an `Array` of integers as a
paremeter, which will represent each _side_ of a shape. 
* Implement a getter method called `getCount` that counts the number of sides
(each index in the array). 
* Now, implement a getter method called `perimeter` method that calculates the perimeter from each
index in the given array. This method will become accessible to its child classes.

2. Define a `Triangle` class that inherits from `Polygon`. It has access to calculate
`perimeter` inherited from `Polygon`. Implement a getter method `isValid` that checks if
the the given 3 sides for a triangle is valid.

> The sum of the lengths of any two sides of a triangle is greater than the length of
the third side. If you take the three sides of a triangle and add them in pairs, the sum
is greater than (not equal to) the third side. If that is not true, then it is not possible
to construct a triangle with the given side lengths.

3. Define a `Square` class that inherits from `Polygon`. It has access to `perimeter()`
inherited from `Polygon`. 
* Implement a getter method `isValid` that checks if the the given 4 sides for a square is
valid. A square is valid when the lengths of all sides are equal. 
* Implement a getter method `area` that calculates the area of the square.


## Resources

* [Understanding Prototypes, Delegation & Composition](https://www.datchley.name/understanding-prototypes-delegation-composition/)
