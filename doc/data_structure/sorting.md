## Sorting

1. insertion
    
    in every turn `i`, [0, i - 1] of arr is sorted, just puting arr[i] into the right place of its left area.

    belong to **exchange sort**

    - T(n)
        - worst, O(n^2), when the arr is reverse order
        - best, O(n), when the arr is sorted
        - average, O(n^2)
    - S(n) = O(1)
    - code

        ```js
        function insertion(arr) {
            let n = arr.length;
            if (n < 2) {
                return arr;
            }
            
            for (let i = 1; i < n; i++) {
                let tmp = arr[i];
                let j = i;
                while (arr[j - 1] > tmp && j > 0) {
                    arr[j] = arr[j - 1];
                    j--;
                }
                arr[j] = tmp;
            } 

            return arr;
        } 
        ```
2. shell
    
    also called augmenting sort. It has a importatn concept called `increment sequence`. assume h is a num of interval between two nums in the arr, so with `h` we can have a sequence of nums. 
    
    In every turn, we sort this sequence, until h = 1, means all the nums in one sequence, and sort them all.

    shell is also belong to **exchange sort**
    
3. quick

    also a **divide and conquar** algorithm. 
    
    the key is `pivot`, we chiose a pivot, and put the nums **in its left larger than it** into its right, and put the nums **in its right smaller than it** into its left.

    key steps:

       - get **median**. sort the left, right, and middle nums, then swap the middle num with the num in pos `right - 1`, which is **hiding the pivot**. After the sort process, we need to **restore the pivot**: `swap(right - 1, i)`, i is the left pointer
       - in one sort, the left pointer has boundary to right, which is the pivot itself, and right pointer's boundary is `left`

        ```js
        let i = left; 
        let j = right - 1; 
        while (true) {
            while (arr[++i] < pivot) {} // notice that at first time, i is not the pos first num stand, i + 1 is, so it's ++i, j is the same
            while (arr[--j] > pivot) {} 
            if (i < j) {
                swap(i, j, arr);
            }
            else {
                break;
            }
        }
        ```

    T & S:
    
    S(n) = O(1)
    T(n) = T(i) + T(n - i - 1) + cN, i is the num of left part of arr
    T(n)best = O(nlogn), when pivot always in the middle after one sort => T(n) = 2T(n/2) + cn
    T(n)worst = O(n^2)
    T(n)average = O(nlogn)
4. merge

    merge sort is a **divide and conquar** algorithm. in every turn, it merges two part in this arr, and the part will split into two smaller parts, until its only one element. 

    - `merge once`. 
    
      function sign: `mergeOnce(low, mid, high, tmp)`. 
      
      - mid is `(low + high) / 2`, cause we calc it outside, so no need to calc it again. 
      - tmp is an array to store merged result in one merge, it can be used cyclically, cause it's only one merge running at the same time.

    - `merge`. divide and Conquar funciton

        ```js
        function mergeSort(low, high, tmp) {
            if (low < high) {
                let mid = ...
                mergeSort(low, mid, tmp);
                mergeSort(mid, high, tmp);
                mergeOnce(low, mid, high, tmp);
            }
        }
        ```

        T(n) = 2T(n/2) + O(n) => T(n) = O(nlogn)
5. heap sort

    it's easy if already implemented heap. It's just two step:
    
    1. build heap O(n)
    2. delete min to result array n*O(logn)

    but this way has O(n) extra space, if wants in-place, here is a train of thought:

    build heap is the same. when **delete min**, instead of poping the last elem, put it into the last pos of arr, which is not using any more. 

    keep doing that, when all the elems deleted, the arr will be sorted. (**min heap will become a descend ordered array**)

tricks:

1. sort linked list
    
    merge sort in linked list, using slow and fast pointers to get middle.
    So divide and conquar can be used in linked list

2. sort with swap

    we know that the fastest normal sort is O(nlogn), but with swapping in special situations, it can be O(n). e.g. `#75 leetcode`
