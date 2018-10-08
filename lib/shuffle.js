const _ = require('lodash');
class Shuffle {
  constructor() {
    this._ = _
  }
  
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

  distribute(arr, num) { return this._.chunk(arr, num); };

  selectLeader(arr) {
    arr.forEach(e => { e.forEach((b, i) => { if (i == 0) b.role = "Leader" }) });
    return arr;
  };

  createGroups(arr) {
    this.fisherYates(arr);
    const pplPerGroup = Math.round(arr.length / this.numberOfGroups(arr));
    const lunchGroups = this.distribute(arr, pplPerGroup);
    return this.selectLeader(lunchGroups);
  };
};

module.exports = Shuffle;