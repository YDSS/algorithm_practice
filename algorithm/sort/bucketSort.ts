/**
 * @file bucket sort
 * @author arlenyang
 */

/**
 * T(n) = O(m + n), n is arr.length, m is bucket size
 * S(n) = O(m)
 * @param arr 
 */
function bucketSort(arr: number[]): number[] {
    let max = Number.NEGATIVE_INFINITY;
    let min = Number.POSITIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) { // O(n)
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }

    let bucket = new Array(max - min + 1);
    arr.map(num => { // O(n)
        if (bucket[num - min] == null) {
            bucket[num - min] = 0;
        }
        bucket[num - min]++;
    })
    let outerCount = 0;
    bucket.map((count, i) => { // O(m); m is the size of bucket
        while (count > 0) { // this is repeat number complexity, O(1)
            arr[outerCount] = i + min;
            count--;
            outerCount++;
        }
    })

    return arr;
}

let arr = [1, 4, 2, 3, 1, 9, 10, 29, 3, 5, 34];
console.log(bucketSort(arr));