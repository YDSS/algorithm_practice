function getPermutations(nums) {
    let p = [];
    let bt = (remain, curP) => {
        if (remain.length === 0) {
            p.push([...curP]);
            return;
        }

        for (let i = 0; i < remain.length; i++) {
            let pop = remain.splice(i, 1)[0];
            curP.push(pop);
            bt(remain, curP);
            remain.splice(i, 0, pop);
            curP.pop();
        }
    }
    bt(nums, []);

    return p;
}

let nums = [1,2, 3]
console.log(getPermutations(nums))