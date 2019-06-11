/**
 * @file 43. Multiply Strings
 * @author arlenyang
 */

// divide a num string into two from middle
function divideNum(numStr) {
    let len = numStr.length;
    if (len === 1) {
        return {
            left: +numStr,
            right: 0,
            leftPower: 1
        };
    }
    let mid = Math.floor(len / 2);
    let leftWithPower = removeZerosFromRight(numStr.slice(0, mid));
    let right = removeZerosFromleft(numStr.slice(mid));
    let leftPower = Math.pow(10, len - mid + leftWithPower.leftPower);
    console.log(leftWithPower.numStr, right, leftPower)

    return {
        left: leftWithPower.numStr,
        right,
        leftPower
    };
}

function removeZerosFromleft(numStr) {
    let i = 0;
    while (i < numStr.length && numStr[i] === "0") {
        i++;
    }

    return numStr.slice(i) || 0;
}

function removeZerosFromRight(numStr) {
    let i = numStr.length - 1;
    while (i >= 0 && numStr[i] === "0") {
        i--;
    }

    return {
        numStr: numStr.slice(0, i + 1) || 0,
        leftPower: numStr.length - 1 - i
    };
}
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function multiply(num1, num2) {
    let dc = (num1, num2) => {
        if (num1 == 0 || num2 == 0) {
            return 0;
        }
        if (num1 == 1) {
            return num2;
        }
        if (num2 == 1) {
            return num1;
        }

        if (typeof num1 === "number" && typeof num2 === "number") {
            return num1 * num2;
        }
        if (typeof num1 !== "number" && typeof num2 !== "number") {
            let divided1 = divideNum(num1);
            let divided2 = divideNum(num2);

            return (
                dc(divided1.left, divided2.left) *
                    divided1.leftPower *
                    divided2.leftPower +
                dc(divided1.left, divided2.right) * divided1.leftPower +
                dc(divided1.right, divided2.left) * divided2.leftPower +
                dc(divided1.right, divided2.right)
            );
        }
        // make num1 always be number
        if (typeof num1 !== "number") {
            let tmp = num1;
            num1 = num2;
            num2 = tmp;
        }
        let divided = divideNum(num2);
        return (
            dc(divided.left, num1) * divided.leftPower + dc(divided.right, num1)
        );
    };

    return dc(num1, num2) + "";
}

// let num1 = "2",
//     num2 = "3";
// let num1 = "123", num2 = "456";
// let num1 = "12",
//     num2 = "45";
// let num1 = "200", num2 = "400";
// let num1 = "2002", num2 = "4002";
// let num1 = "123456789"
// let num2 = "987654321"
let num1 = "123456"
let num2 = "987651"
console.log(multiply(num1, num2));
