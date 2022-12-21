import _ from 'lodash';

console.log(_.intersection([2, 1], [2, 3]));
console.log(_.capitalize('hello'));
console.log(_.last(['one', 'two']));

const findSum = (a, b) => {
  const c = a + b;
  return c;
};
console.log(findSum(4, 55));
