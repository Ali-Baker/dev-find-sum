const method = (unSortedArr, originalSum) => {
  const results = [];
  const sortedArr = unSortedArr.sort((a, b) => a-b);
  let sum = originalSum;
  let currentSum = 0;
  let counter = sortedArr.length;

  const push = (pointer) => {
    results.push(sortedArr[pointer]);
    currentSum = currentSum + sortedArr[pointer];
    sum = sum - currentSum;
    sortedArr.splice(pointer, 1);
    counter = sortedArr.length;
  };

  while(currentSum !== originalSum && currentSum < originalSum && counter > 0) {
    let l = 0, r = sortedArr.length - 1;
    for (let i = 0; i < sortedArr.length; i++) {
      if (sortedArr[l] + sortedArr[r] === sum) {
        push(l);
        push(r-1);
        break;
      }
      else if(sortedArr[l] === sum || l === r) {
        push(l);
        break;
      }
      else if(sortedArr[r] === sum) {
        push(r);
        break;
      }
      else if (i === sortedArr.length - 1) {
        push(l);
        push(r);
        break;
      }

      sortedArr[l] + sortedArr[r] > sum && r--;
      sortedArr[l] + sortedArr[r] < sum && l++;
    }

    counter--;
  }

  return results.reduce((a,b) => a + b, 0) === originalSum ? results : [];
};

module.exports =  method;
