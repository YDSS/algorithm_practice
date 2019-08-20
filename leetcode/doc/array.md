## Array

array is very easy and basic data structure, many higher data structures are based on it. I guess because it's basic, so there are too many problems those can be easy, median and hard! 

### edge cases:

1. out of bound
2. empty

### notice

- **handle boundary**. handle boundary is a very common op in array
    - `0 < i < length`
    - if i from 1, then `i <= length`
    - len between two indexes (i, j),  `j - i + 1`
    - circular: `i % len`

### tricks

- binary search
    - in **sorted** array, T(n) = O(n)
    - in some array that you can judge which direction (left or right) to go
- slide window, or it's called left & right collision pointers, cause it has two pointers i, j, between them is the window

    `#3 in leetcode`
- sorted and skip to remove duplicates
- dp
- using index of array as hashmap, `#41 in leetcode`
- swap between interval `#80 in leetcode`

    it's like we want remove a num but you know, remove a num is expensive(O(n) at worst). the first thought is swap it with end of array, but sometime you also need adjust after swapping, just like in `#80`

    the interval is like when we have a num need to remove, we make interval = 1, then when we iterate next num, swap it with its (index - 1), .e.g.

    1,2,3,4,5  we want remove 3, let's simulate the process

    1. iterate to i = 2, nums[i] is 3, we know it should be delete
    2. set interval = 1, tmp = 3, and just move forward
    3. i = 3, set nums[i - interval] = nums[i], nums[i] = tmp
    4. when the iterating is over, we find 3 is in the end

### problem summary

- matrix
    - traversal anomalously
        - zigzag `#6 in leetcode`
        - spiral `#54,#59 in leetcode`