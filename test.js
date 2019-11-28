const findSumArray = require('./index');

const arrSum = arr => arr.reduce((a,b) => a + b, 0);
const maxArrayLength = 10000;

test('it return an array of numbers', () => {
    const sum = Math.ceil(Math.random() * maxArrayLength);
    const arr = Array.from({length: maxArrayLength}, () => Math.ceil(Math.random() * maxArrayLength));
    const result = findSumArray(arr, sum);

    expect(arrSum(result)).toBe(sum);
});


test('it return empty array when it can not find solution', () => {
    const sum = 113;
    const result = findSumArray([1,2,3], sum);
    
    expect(arrSum(result)).not.toBe(sum);
});
