module.exports = {
  beerTapProblem: function() {
    let beerTaps = 1000;
    let bestBeers = [];
    for (let beerTap = 1; beerTap <= beerTaps; beerTap++) {
      let divisorTap = [1];
      for (let number = 2; number <= beerTap / 2; number++) {
        if (beerTap % number == 0) {
          divisorTap.push(number);
        }
      }
      sum = this.sumOfDivisor(divisorTap);
      let isSubsetSum = this.isSubsetSum();
      if (sum > beerTap && !isSubsetSum) {
        console.log("Beer Tap Number-->>", beerTap);
      }
    }
  },
  sumOfDivisor: function(divisorTap) {
    return divisorTap.reduce((a, b) => a + b, 0);
  },
  isSubsetSum: function() {
    return true;
  }
};
