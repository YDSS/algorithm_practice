function test(row, column) {
    let startRow = row;
    console.log(startRow)
    for (let i = row; i < 10; i++) {
        for (let j = (startRow === i ? column : 0); j < 10; j++) {
        // for (let j = 0; j < 10; j++) {
            console.log(i, j)
        }
    }
}

test(3, 4);