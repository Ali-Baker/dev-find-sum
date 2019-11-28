const findSumArray = require('./index');

const arrSum = arr => arr.reduce((a,b) => a + b, 0);
const maxArrayLength = 10000;
const sum = Math.ceil(Math.random() * maxArrayLength);

const arr = Array.from({length: maxArrayLength}, () => Math.ceil(Math.random() * maxArrayLength));

test('return an array of numbers', () => {
    const result = findSumArray(arr, sum);
    expect(arrSum(result)).toBe(sum);
});



