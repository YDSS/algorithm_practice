"use strict";
/**
 * shuffle algorithm
 */
Object.defineProperty(exports, "__esModule", { value: true });
function shuffle(arr) {
    let j = arr.length - 1;
    const rand = function (len) {
        return Math.floor(Math.random() * len);
    };
    const swap = function (x, y) {
        let tmp = arr[x];
        arr[x] = arr[y];
        arr[y] = tmp;
    };
    for (; j > 0; j--) {
        let i = rand(j - 1);
        swap(i, j);
    }
    return arr;
}
exports.default = shuffle;
test();
function test() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(shuffle(arr));
}
//# sourceMappingURL=shuffle.js.map