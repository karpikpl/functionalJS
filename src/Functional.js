// RULES
// 1. All of your functions must accept at least one argument.
// 2. All of your functions must return data or another function.
// 3. No loops!

class Functional {
  process(argument) {
    console.log(`Running Functional with ${JSON.stringify(argument)}`);

    //var totalTemp = this.totalForArray(temperatures);

    return [];
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
    console.log(`Running total for array for ${arr} with ${arr.reduce}`)
    return arr.reduce(this.add);
  }

  add = function(a, b) {
    return a + b;
  }

  average(total, count) {
    return total / count;
  }

  averageForArray(arr) {
    return average(totalForArray(arr), arr.length);
  }
}

export default Functional;
