/**
 * @file Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 * @author arlenyang
 */

function isExisted(i, bottom) {
    return i <= bottom && arr[i] != null;
}

function percolateDownR(arr, i, bottom) {
    let latest = arr[i];

    let percolateDownRR = (arr, i, bottom) => {
        let child = i * 2 + 1; // use arr[0] as root, so the left child is 2i + 1
        // if this node got two children, find the smaller one
        if (
            isExisted(child, bottom) &&
            isExisted(child + 1, bottom) &&
            arr[child] > arr[child + 1]
        ) {
            child += 1;
        }
        // if this node is leaf or it's smaller than it's children, this is the place to set latest node
        if (
            !isExisted(child, bottom) ||
            (isExisted(child, bottom) && latest < arr[child])
        ) {
            arr[i] = latest;
            return;
        }
        // percolate down one floor
        else {
            arr[i] = arr[child];
            percolateDownRR(arr, child, bottom);
        }
    };
    percolateDownRR(arr, i, bottom);
}

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function heapSort(arr) {
    let n = arr.length - 1;
    // build heap
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        percolateDownR(arr, i, n);
    }
    // delete min
    for (let i = arr.length - 1; i > 0; i--) {
        // swap root and the bottom, put the min node to the sorted range of arr
        swap(arr, 0, i);
        percolateDownR(arr, 0, i - 1);
        console.log(arr);
    }

    return arr;
}

let arr = [5, 4, 1, 3, 6, 11, 10, 9];
console.log(heapSort(arr));
