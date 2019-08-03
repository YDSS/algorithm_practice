/**
 * @file 
 * 
 * You typed in “The cat ran”, you would have three arrays containing the positions of “The”, “Cat” and “Ran” respectively. I want to know the place in the document where the 3 words are closest together.

sample:

The 2 5 8 10 34 40 123 5345 …
Cat 4 38 46 345 …
Ran 35 36 48 …
In this example, the closest is 34, 38, 36 or 34, 38, 35
the interval is [34, 38]

info:
1. smallest range
2. sorted array
3. 5000 words => 0 => the 1 => cat 2 => ran  

rule:

1. the arr which min is in move right
2. find the next min, replace with it
3. if any one of arrs is empty, stop the loop, cause that means the min is fixed, althrough other two arr may have numbers, they can not decrease the min range

1. [2, 4, 35] min: 2,  max: 35 range: 35 - 2 = 33
2. [5, 4, 35] min: 4, max: 35, range: 35 - 4 = 31

 * @author arlenyang
 */

function findClosestSubarr(arr1, arr2, arr3) {
    let i = 0;
    let j = 0;
    let k = 0;
    let minRange = Number.POSITIVE_INFINITY;
    let minInterval;
    let curInterval = [arr1[i], arr2[j], arr3[k]];

    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        let { minIndex, maxIndex } = findMinAndMax(curInterval);
        let curRange = curInterval[maxIndex] - curInterval[minIndex];
        if (curRange < minRange) {
            minRange = curRange;
            minInterval = curInterval;
        }
        // find next min and replace
        switch (minIndex) {
            case 0: // i
                curInterval[minIndex] = arr1[i + 1];
                i++;
                break;
            case 1: // j
                curInterval[minIndex] = arr2[j + 1];
                j++;
                break;
            case 2: // k
                curInterval[minIndex] = arr3[k + 1];
                k++;
                break;
        }
    }

    return { minInterval, minRange };
}

function findMinAndMax(interval) {
    let tmp = [0, 1, 2];
    if (interval[0] > interval[1]) {
        swap(tmp, 0, 1);
    }
    if (interval[0] > interval[2]) {
        swap(tmp, 0, 2);
    }
    if (interval[1] > interval[2]) {
        swap(tmp, 1, 2);
    }

    return {
        minIndex: tmp[0],
        maxIndex: tmp[2]
    };
}

function swap(arr, a, b) {
    arr[a] ^= arr[b];
    arr[b] ^= arr[a];
    arr[a] ^= arr[b];
}
