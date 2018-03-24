/**
 * @desc Given a 32-bit **signed** integer, reverse digits of an integer.
 * @Note
 *  Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 * @complexity T(n) = O(n) S(n) = O(n)
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
    // 32-bit signed integer means one bit should be store sign
    let isNegative = x < 0;
    let abs = Math.abs(x);
    let nums = ( '' + abs ).split('');

    // reverse an array of integers
    let i = 0;
    let j = nums.length - 1;
    let swap;
    while (i<j) {
        swap = nums[i]; 
        nums[i] = nums[j];
        nums[j] = swap;

        i++;
        j--;
    }
    let reversed = nums.join('');
    // test if overflow
    if (is32bitOverflow(reversed)) {
        return 0;
    }
    return +(isNegative ? `-${reversed}` : reversed);
};

/**
 * test target string if it is overflow, considered it maybe overflow,
 *  the programe will get fatal error when set it into memory, 
 *  so I think may set it as string, then compare
 * 
 * @param {String} target type is string in case the target overflow 
 */
function is32bitOverflow(target) {
    let limit = Math.pow(2, 31) + '';

    if (target.length < limit.length) {
        return false;
    }

    let i = 0;
    let flag = true;
    while (i < target.length) {
        let targetNum = +target[i];
        let limitNum = +limit[i];
        // console.log(`${targetNum}: ${limitNum}`)
        i++;

        if (limitNum === targetNum) {
            continue;
        }
        if (limitNum > targetNum) {
            flag = false;
            break;
        } 
        if (limitNum < targetNum) {
            break;
        }
    }

    return flag;
}

function test() {
    // let integer = 4294967295;
    let integer = 1563847412;
    console.log(reverse(integer));
}

test();