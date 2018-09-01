/**
 * @file implementation of insert sort, from small to large
 * @author YDSS
 */

export default function insertSort(arr: number[]): number[]{
    for (let i = 0; i < arr.length; i++) {
        let insertEl = arr[i];
        let j: number = i;

        for (; j > 0 && insertEl < arr[j - 1]; j--) {
            arr[j] = arr[j - 1];
        }        
        arr[j] = insertEl;
    }

    return arr;
}

let arr = [5,3,45,13,6,4,1,100,56,23];
console.log(insertSort(arr));