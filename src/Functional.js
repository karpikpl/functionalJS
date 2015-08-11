// RULES
// 1. All of your functions must accept at least one argument.
// 2. All of your functions must return data or another function.
// 3. No loops!

class Functional {
  process(data) {
    console.log(`Running Functional with ${JSON.stringify(data)}`);

    var allTemperatures = this.pluck(data, 'temperatures');

    // TODO consider usinb bind here (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
    var avarageTemps = allTemperatures.map((arr) => {
      return this.averageForArray(arr);
    });
    var populationsAndNames = data.map((item) => {
      return [item.name, item.population];
    });

    return this.extendArray(populationsAndNames, avarageTemps);
  }

  totalForArrayRecursive(currentTotal, arr) {
    currentTotal += arr[0];

    var remainingList = arr.slice(1);

    if (remainingList.length === 0) {
      return currentTotal;
    }

    return this.totalForArrayRecursive(currentTotal, remainingList);
  }

  totalForArray(arr) {
    return arr.reduce(this.add);
  }

  add(a, b) {
    return a + b;
  }

  average(total, count) {
    return total / count;
  }

  averageForArray(arr) {
    return this.average(this.totalForArray(arr), arr.length);
  }

  // Pass in the name of the property that you'd like to retrieve
  getItem(propertyName) {
    // Return a function that retrieves that item, but don't execute the function.
    // We'll leave that up to the method that is taking action on items in our
    // array.
    return function(item) {
      return item[propertyName];
    };
  }

  pluck(arr, propertyName) {
    return arr.map(this.getItem(propertyName));
  }

  combineArrays(arr1, arr2, finalArr) {
    // Just so we don't have to remember to pass an empty array as the third
    // argument when calling this function, we'll set a default.
    finalArr = finalArr || [];

    // Push the current element in each array into what we'lll eventually return
    finalArr.push([arr1[0], arr2[0]]);

    var remaining1 = arr1.slice(1);
    var remaining2 = arr2.slice(1);

    if (remaining1.length === 0 && remaining2.length === 0) {
      return finalArr;
    } else {
      // recursion!
      return this.combineArrays(remaining1, remaining2, finalArr);
    }
  }

  extendArray(arrToExtend, arr2, finalArr) {
    // Just so we don't have to remember to pass an empty array as the third
    // argument when calling this function, we'll set a default.
    finalArr = finalArr || [];

    // Push the current element in each array into what we'lll eventually return
    // slice will make a copy of all elements
    finalArr.push(arrToExtend[0].slice(0));
    finalArr[finalArr.length - 1].push(arr2[0]);

    var remaining1 = arrToExtend.slice(1);
    var remaining2 = arr2.slice(1);

    if (remaining1.length === 0 && remaining2.length === 0) {
      return finalArr;
    } else {
      // recursion!
      return this.extendArray(remaining1, remaining2, finalArr);
    }
  }
}

export default Functional;
