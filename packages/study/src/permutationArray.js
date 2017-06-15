/* eslint-disable */

const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      arr.forEach((v, i) => {
        let arrClone = arr.slice();
        let removedItem = arrClone.splice(i, 1);
        permute(arrClone, m.concat(removedItem));
      });
    }
 }

 permute(inputArr)

 return result;
}
console.log(permutator([
  1,2,3
  // { a: '1' }, { b: '2' }, { c: '3' },
  // ['a'], ['b'], ['c'], ['d']
]));