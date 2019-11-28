const method = (unSortedArr, originalSum) => {
  let sum = originalSum;
  let currentSum = 0;
  const results = [];

  let sortedArr = unSortedArr.sort((a, b) => a-b);
  let counter = 0;
  const maxTry = Math.pow(sortedArr.length, sortedArr.length);

  const arrSum = arr => arr.reduce((a,b) => a + b, 0);

  while(currentSum !== originalSum && currentSum < originalSum && counter <= maxTry) {
    let l = 0, r = sortedArr.length - 1;
    for (let i = 0; i < sortedArr.length; i++) {
      if (sortedArr[l] + sortedArr[r] === sum) {
        results.push(sortedArr[l]);
        results.push(sortedArr[r]);
        currentSum = currentSum + sortedArr[l] + sortedArr[r];
        sortedArr.splice(l, 1).splice(r-1 , 1);
        break;
      }
      else if(sortedArr[l] === sum) {
        results.push(sortedArr[l]);
        currentSum = currentSum + sortedArr[l];
        sortedArr.splice(l, 1);
        break;
      }
      else if(sortedArr[r] === sum) {
        results.push(sortedArr[r]);
        currentSum = currentSum + sortedArr[r];
        sortedArr.splice(r, 1);
        break;
      } else if (i === sortedArr.length - 1) {
        results.push(sortedArr[l]);
        results.push(sortedArr[r]);
        currentSum = currentSum + sortedArr[l] + sortedArr[r];
        sortedArr.splice(l, 1).splice(r-1 , 1);
        sum = sum - currentSum;
        break;
      }

      sortedArr[l] + sortedArr[r] > sum && r--;
      sortedArr[l] + sortedArr[r] < sum && l++;
    }

    counter++;
  }


  return arrSum(results) === originalSum ? results : [];
};

module.exports =  method;
