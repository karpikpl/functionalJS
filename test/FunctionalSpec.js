/**
 * Babel Starter Kit | https://github.com/kriasoft/babel-starter-kit
 * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
 */

import { describe, it } from 'mocha';
import { expect } from 'chai';
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

});
