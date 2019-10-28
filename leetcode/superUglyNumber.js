/**
 * @file 313. Super Ugly Number
 * @author arlenyang
 * @keyThoughts how to get smallest ugly number? it must be multiply by smaller factors those maybe in the prime arr or in current ugly number list. each time pick the largest number in ugly number list which is at least created by one prime factor, and multiply each prime then find the smallest one, it is the next larger ugly number. do it until find the nth ugly number.
 * 
 *  it's a dp solution, cause we utilize former result as base to induce next result
 */

/**
 * T(n) = O(nm), m is the length of primes
 * S(n) = O(n)
 * 
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
function nthSuperUglyNumber(n, primes) {
    let m = primes.length;
    // stores index of every prime in comparing which is the current smallest multiply
    let indexes = Array.from({length: m}, x => 0);

    // the ugly number list
    let dp = [];
    dp.push(1);

    // store current products created by primes multiply with former dp
    // get the minium product, so tmp array can be instead of minheap to improve efficiency
    let tmp = new Array(m);
    let i = 1;
    while (i < n) {
        let min = Number.POSITIVE_INFINITY;
        let minIndex;
        // O(m)
        for (let j = 0; j < tmp.length; j++) {
            if (min > dp[indexes[j]] * primes[j]) {
                min = dp[indexes[j]] * primes[j];
                minIndex = j;
            }
        }
        // remove duplicates
        if (min !== dp[i - 1]) {
            dp.push(min);
            i++;
        }
        indexes[minIndex]++;
    }    
    // console.log(dp)

    return dp[n - 1];
}

n = 12, primes = [2,7,13,19]

console.log(nthSuperUglyNumber(n, primes));