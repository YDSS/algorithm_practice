/**
 * @file implementation of shell sort,
 *  use half it's length as increment
 * @author YDSS
 */
function shell(arr) {
    let len = arr.length;
    for (let increment = Math.floor(len / 2); increment > 0; increment = Math.floor(increment / 2)) {
        for (let i = increment; i < len; i++) {
            let tmp = arr[i];
            let j;
            for (j = i; j >= increment; j -= increment) {
                if (tmp < arr[j - increment]) {
                    arr[j] = arr[j - increment];
                }
                else {
                    break;
                }
            }
            arr[j] = tmp;
        }
    }
    return arr;
}
let mock = [3, 5, 2, 1, 55, 23, 12, 35, 65];
console.log(shell(mock));
//# sourceMappingURL=shell.js.map