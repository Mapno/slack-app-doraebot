class Shuffle {
  
  numberOfGroups(arr) {
    return Math.round((arr.length - 1) / 7 + 0.5);
  };

  fisherYates(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * i);
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

  distribute(arr, min, max) { return arr.filter((e, i) => i <= max && i >= min);};

  selectLeader(arr) {
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

  createGroups(arr) {
    this.fisherYates(arr);
    const lunchGroups = [];
    const numOfGroups = this.numberOfGroups(arr);
    const pplPerGroup = Math.floor(arr.length / numOfGroups);
    for (let i = 1; i <= numOfGroups; i++) {
      lunchGroups.push(
        this.distribute(
          arr,
          pplPerGroup * (i - 1) + (i - 1),
          pplPerGroup * i + (i - 1)
        )
      );
    }
    return this.selectLeader(lunchGroups);
  };
};

module.exports = Shuffle;