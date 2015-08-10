/**
 * Babel Starter Kit | https://github.com/kriasoft/babel-starter-kit
 * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
 */

import {
  describe, it
}
from 'mocha';
import {
  expect
}
from 'chai';
import Functional from '../src/Functional';

describe('Functional', () => {

  var testData = [{
    name: 'Jamestown',
    population: 2047,
    temperatures: [-34, 67, 101, 87]
  }, {
    name: 'Awesome Town',
    population: 3568,
    temperatures: [-3, 4, 9, 12]
  }, {
    name: 'Funky Town',
    population: 1000000,
    temperatures: [75, 75, 75, 75, 75]
  }];

  var expectedData = [
    [55.25, 2047],
    [5.5, 3568],
    [75, 1000000]
  ];

  it('Processes data and gives correct result', () => {
    // Arrange
    const functional = new Functional();

    // Act
    const result = functional.process(testData);

    // Arrange
    expect(result).to.deep.equal(expectedData);
  });

  it('Calculates sum for a given array using recursion', () => {
    // Arrange
    const functional = new Functional();
    const arr = [3, 4, 5, 8];
    const expectedResult = 20;

    // Act
    const result = functional.totalForArrayRecursive(0, arr);

    // Assert
    expect(result).to.be.equal(expectedResult);
  });

  it('Calculates sum for a given array using reduce', () => {
    // Arrange
    const functional = new Functional();
    const arr = [3, 4, 5, 8];
    const expectedResult = 20;

    // Act
    const result = functional.totalForArray(arr);

    // Assert
    expect(result).to.be.equal(expectedResult);
  });

  it('Add should sum two integers', () => {
    // Arrange
    const functional = new Functional();
    const a = -1,
      b = 2;
    const expectedResult = 1;

    // Act
    const result = functional.add(a, b);

    // Assert
    expect(result).to.be.equal(expectedResult);
  });

  it('average should return arithmetic average for given sum and count', () => {
    // Arrange
    const functional = new Functional();
    const total = 12;
    const count = 4;
    const expectedResult = 3;

    // Act
    const result = functional.average(total, count);

    // Assert
    expect(result).to.be.equal(expectedResult);
  });

  it('Avarage for array should return the arithmetic avarage for the elements of the array', () => {
    // Arrange
    const functional = new Functional();
    const arr = [3, 4, 5, 8];
    const expectedResult = 5;

    // Act
    const result = functional.averageForArray(arr);

    // Assert
    expect(result).to.be.equal(expectedResult);
  });

  it('getItem should return a function that returns a value of a given property', () => {
    // Arrange
    const functional = new Functional();
    const myData = {
      myprop: 'someData'
    };
    const expectedResult = 'someData';

    // Act
    const result = functional.getItem('myprop')(myData);

    // Assert
    expect(result).to.be.equal(expectedResult);
  });

  it('pluck should return a collection with a given property', () => {
    // Arrange
    const functional = new Functional();
    const myData = [{
      aProp: 'a1Val',
      bProp: 4
    }, {
      aProp: 'a2Val',
      bProp: 2
    }, {
      aProp: 'a3Val',
      bProp: 5
    }];
    const expectedResult = ['a1Val','a2Val', 'a3Val'];

    // Act
    const result = functional.pluck(myData, 'aProp');

    // Assert
    expect(result).to.deep.equal(expectedResult);
  });

  it('pluck should return a collection with a given property when array', () => {
    // Arrange
    const functional = new Functional();
    const myData = [{
      aProp: 'a1Val',
      bProp: [4, 4]
    }, {
      aProp: 'a2Val',
      bProp: [2,6]
    }, {
      aProp: 'a3Val',
      bProp: [5,7]
    }];
    const expectedResult = [[4,4], [2,6], [5,7]];

    // Act
    const result = functional.pluck(myData, 'bProp');

    // Assert
    expect(result).to.deep.equal(expectedResult);
  });
});
