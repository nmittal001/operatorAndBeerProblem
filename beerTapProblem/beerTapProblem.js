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
      let isSubsetSum = this.isSubsetSum(
        divisorTap,
        beerTap,
        divisorTap.length
      );
      if (sum > beerTap && !isSubsetSum) {
        console.log("Beer Tap Number-->>", beerTap);
      }
    }
  },
  sumOfDivisor: function(divisorTap) {
    return divisorTap.reduce((a, b) => a + b, 0);
  },
  isSubsetSum: function(divisorTap, beerTap, length) {
    if (beerTap === 0) {
      return true;
    }
    if (length === 0 && beerTap !== 0) {
      return false;
    }
    if (divisorTap[length - 1] > beerTap) {
      return this.isSubsetSum(divisorTap, beerTap, length - 1);
    }
    return (
      this.isSubsetSum(divisorTap, beerTap, length - 1) ||
      this.isSubsetSum(divisorTap, beerTap - divisorTap[length - 1], length - 1)
    );
  }
};
