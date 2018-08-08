/**
 * shuffle algorithm
 */

export default function shuffle(arr: any[]): any[] {
    let j = arr.length - 1;

    const rand = function (len: number) {
        return Math.floor(Math.random() * len);
    }
    const swap = function (x: number, y: number) {
        let tmp = arr[x];
        arr[x] = arr[y];
        arr[y] = tmp;
    }

    for (; j > 0; j--) {
        let i = rand(j - 1);
        swap(i, j);
    }

    return arr;
}

test();

function test() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(shuffle(arr));
}
