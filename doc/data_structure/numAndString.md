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
2. parenthese
    1. condition of valid parenthese: 
    
    count of **left parenthese** should be no less than count of **right parenthese**, e.g.

    `((())`, l: 3, r: 2, it still can be valid if there are `)` append to it
3. palindrome
    1. it's symmetric from a pivot
    2. dp solution for longest palindrome `#5 in leetcode`
    
        dp[i][j] means substring(i, j) is or is not a palindrome, from length = 1 to length = n, length = j - i + 1