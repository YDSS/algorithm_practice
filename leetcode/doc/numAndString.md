## string

### common methods

1. backtracing
2. dp

### tricks

1. get each digit of a number

    ```js
    let arr = [];
    while (num > 0) {
        let d = num % 10;
        arr.push(d);
        num = Math.floor(num / 10);
    }
    ```

### problem summary

1. string to int / int to string. **consider about overflow**