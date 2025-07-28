// index.js

function isPrime(idx) {
    if (idx <= 1) return false;
    if (idx === 2) return true;
    if (idx % 2 === 0) return false;

    for (let i = 3; i * i <= idx; i += 2) {
        if (idx % i === 0) return false;
    }
    return true;
}

function splitArray(nums) {
    let sumA = 0;
    let sumB = 0;

    for (let i = 0; i < nums.length; i++) {
        if (isPrime(i)) {
            sumA += nums[i];
        } else {
            sumB += nums[i];
        }
    }

    return Math.abs(sumA - sumB);
}

module.exports = { splitArray };
