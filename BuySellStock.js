function maxProfit(prices) {
    let max = 0;
    let min = prices[0];
    let minIndex = 0;
    let res = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
            minIndex = i;
        }
        if (prices[i] > max && i > minIndex) {
            res = Math.max(res, prices[i] - min);
        }
    }

    return res;
}

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); 
