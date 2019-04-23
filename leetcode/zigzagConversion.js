/**
 * @file covert a string to a zigzag sorted string
 * @author arlenyang
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
    if (numRows < 2) {
        return s;
    }
    // initialize a two dimension array
    let arr = new Array(numRows);
    // every one dimension array in arr is a row of zigzag sorted form
    for (let i = 0; i < numRows; i++) {
        arr[i] = [];
    }

    // initialize the first column
    for (let i = 0; i < numRows; i++) {
        arr[i][0] = s[i];
    }

    let j = numRows;
    let indexInZig = j;
    let direction;
    while (j < s.length) {
        if (indexInZig === numRows) {
            direction = false;
            indexInZig -= 2;
        }

        if (indexInZig === -1) {
            direction = true;
            indexInZig += 2;
        }
        arr[indexInZig].push(s[j]);
        // console.log(arr);
        // console.log(`index: ${indexInZig}`);

        if (direction) {
            indexInZig++;
        } else {
            indexInZig--;
        }
        j++;
    }

    let ret = "";
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] != null) {
                ret += arr[i][j];
            }
        }
    }
    return ret;
}

// let str = "PAYPALISHIRING";
let str = "AB";
console.log(convert(str, 10));
