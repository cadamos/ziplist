const testArr1 = ['a', 'b', 'c'];
const testArr2 = [1, 2, 3];

function zipList(array1, array2) {
  const newArr = [];
  for (let i = 0; i < array1.length; i++) {
    newArr.push(array1[i]);
    newArr.push(array2[i]);
  }
  return newArr;
}

console.log(zipList(testArr1, testArr2));

function zipListTheSimpleWay(array1, array2) {
  const newArr = _.zip(array1, array2);
  return _.flatten(newArr);
}

console.log(zipListTheSimpleWay(testArr1, testArr2));
