// RULES
// 1. All of your functions must accept at least one argument.
// 2. All of your functions must return data or another function.
// 3. No loops!

class Functional {
  process(argument) {
    console.log(`Running Functional with ${JSON.stringify(argument)}`);

    return [];
  }

  totalForArray(currentTotal, arr) {
    currentTotal += arr[0];

    var remainingList = arr.slice(1);

    if (remainingList.length === 0) {
      return currentTotal;
    }

    return this.totalForArray(currentTotal, remainingList);
  }

  totalForArrayReduce(arr) {
    return arr.reduce(function(a, b) {
      return a + b;
    })
  }
}

export default Functional;
