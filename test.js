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

test('it return empty array when all number in given array are bigger', () => {
    const sum = 7;
    const result = findSumArray([8,88,99,65,28,19,28], sum);

    expect(arrSum(result)).toBe(0);
});

test('it return correct solution. Edge case 1', () => {
    const sum = 113;
    const result = findSumArray([8,3,4,10,6,8,5,4,2,1,8,45,77,22,5,3,1], sum);

    expect(arrSum(result)).toBe(sum);
});
