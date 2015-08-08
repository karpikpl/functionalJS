class NonFunctional {
  process(data) {
    console.log(`Running NonFunctional with ${JSON.stringify(data)}`);

    var coords = [],
      totalTemperature = 0,
      avarageTemperature = 0;

    for (var i = 0; i < data.length; i++) {
      totalTemperature = 0;

      for (var j = 0; j < data[i].temperatures.length; j++) {
        totalTemperature += data[i].temperatures[j];
      }

      avarageTemperature = totalTemperature / data[i].temperatures.length;

      coords.push([avarageTemperature, data[i].population, data[i].name]);
    }

    return coords;
  }
}

export default NonFunctional;
