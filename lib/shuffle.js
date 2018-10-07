const numberOfGroups = arr => {
  return Math.round((arr.length - 1) / 7 + 0.5);
};

const fisherYates = arr => {
  for (var i = arr.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * i);
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

const distribute = (arr, min, max) => {
  const temp = arr.filter((e, i) => i <= max && i >= min);
  return temp;
};

const selectLeader = arr => {
  arr.forEach(e => {
    e.forEach((e, i) => {
      if (i == 0) {
        e.role = "Leader";
      } else {
        e.role = null;
      }
    });
  });
  return arr;
};

module.exports = shuffle = arr => {
  fisherYates(arr);
  const lunchGroups = [];
  const numOfGroups = numberOfGroups(arr);
  const pplPerGroup = Math.floor(arr.length / numOfGroups);
  for (let i = 1; i <= numOfGroups; i++) {
    lunchGroups.push(
      distribute(
        arr,
        pplPerGroup * (i - 1) + (i - 1),
        pplPerGroup * i + (i - 1)
      )
    );
  }
  return selectLeader(lunchGroups);
};