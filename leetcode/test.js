function createRandomStr(len) {
    let str = "";
    let random;
    for (let i = 0; i < len; i++) {
        random = Math.round(Math.random() * 54 + 68);
        str += String.fromCharCode(random);
    }

    return str;
}

function createConstantStr(len) {
    let str = "";
    for (let i = 0; i < len; i++) {
        str += String.fromCharCode((i % 54) + 68);
    }

    return str;
}

let str = createConstantStr(1000000);
let str2 = createConstantStr(1000000);

console.time('equal')
console.log(str === str2);
console.timeEnd('equal')

console.time('equal by char')
let flag = true;
for (let i = 0; i < str.length; i++) {
    if (str[i] !== str2[i]) {
        flag = false;
        break;
    } 
}
console.log(flag);
console.timeEnd('equal by char');
