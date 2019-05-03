import insertionSort from "./insert";

const CUT_OFF = 3;

function quickSort(arr: number[]): number[] {
    let n = arr.length;
    let tmpForSwap;

    let swap = (i, j) => {
        tmpForSwap = arr[i];
        arr[i] = arr[j];
        arr[j] = tmpForSwap;
    };

    let median3 = (left, right) => {
        let mid = Math.floor((left + right) / 2);
        // sort left, mid and right
        if (arr[left] > arr[mid]) {
            swap(left, mid);
        }
        if (arr[left] > arr[right]) {
            swap(left, right);
        }
        if (arr[mid] > arr[right]) {
            swap(mid, right);
        }
        // hide the pivot
        let pivot = arr[mid];
        swap(mid, right - 1);

        return pivot;
    };

    let qSort = (left, right) => {
        if (left + CUT_OFF > right) {
            insertionSort(arr, left, right);
        } else {
            let pivot = median3(left, right);
            let i = left;
            let j = right - 1;

            while (true) {
                while (arr[++i] < pivot) {}
                while (arr[--j] > pivot) {}

                if (i < j) {
                    swap(i, j);
                } else {
                    break;
                }
            }
            // restore pivot
            swap(i, right - 1);
            // recurse left part from pivot
            qSort(left, i - 1);
            // recurse right part from pivot
            qSort(i + 1, right);
        }
    };

    qSort(0, n - 1);
    return arr;
}

let arr = [1, 4, 2, 3, 1, 9, 10, 29, 3, 5, 34];
console.log(quickSort(arr));
