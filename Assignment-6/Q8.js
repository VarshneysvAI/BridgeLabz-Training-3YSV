// Q8: Add a map-like method to every array through Array.prototype.

Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("myMap callback must be a function");
  }

  const mappedArray = new Array(this.length);

  for (let index = 0; index < this.length; index += 1) {
    if (index in this) {
      mappedArray[index] = callback.call(thisArg, this[index], index, this);
    }
  }

  return mappedArray;
};

const doubledNumbers = [1, 2, 3].myMap((number) => number * 2);
console.log(doubledNumbers);

