# solve problem by dynamic programming

## conditions

feeling the problem has derived relations, which can be a derivation of formula. Sometime brute force(backtracing) solution can give some inspiration.

## key

1. what dp memory means, e.g. dp[i][j] means ...
2. status transfer formula
3. initial values

the key is to figure out **the derivation of formula**, which defines the derived relationship between two adjacent states, and the memory to derive.

from now on I encountered at most **3-dimension** dp memory, which is little hard to understand.

## categories

there are several categories of problem:

1. string, which is the most common one
2. matrix
3. abstract. this is some kind of real world problems, like using least coins to sum up to a specific number

`dp` means the memory of dp solution below.

### string

1. dp[i] means substring from 0 to i.
2. dp[i][j] means substring from i to j. leetcode: `5, 32, 95` 
3. dp[i][j] means substring of s1 from 0 to i, and substring of s2 from 0 to j. leetcode: `10, 44, 72`
    
    if i, j only represents index, without length, it's always inspect **char by char**
4. dp[i][j] means substring of s1 from 0 to i - 1, which means i is length of the substring, s2 is the same.
    
    the benifits are that dp[0][0] means substring of s1 is empty and substring of s2 is empty, and dp[i][j] is the finial result
5. dp[i][j][len] means substring of s1 from i to i + len, substring of s2 from j to j + len. leetcode: `87`

### matrix

1. dp[i][j] is reflected to the matrix[i][j], path category. leetcode:`62, 63, 64`
2. dp[i][j][r] = width, specific to leetcode `85`, what special is the value of dp ceil is not a sub solution, r * width is.

### abstract

these problems usually come from real world, we pick the variables of them as dimensions of dp. like `knapsack` and `least coins`

### problem summary

1. string collapse in one pivot
    1. examples:
        - `leetcode #87. Scramble String`
        - `leetcode #95. Unique Binary Search Trees II`
    2. imagine picking a pivot in the string, and its left and right collapse down to lower level, e.g.

        `1,2,3,4,5,6,7` collapse in `4`=>
                `4`
          `1,2,3`  `5,6,7`
2. subarray
    1. there is a very important feature of contiguous subarray: 
        
        when it comes to nums[i], it has two ways to summary the result before

        1. concat with former subarray, dp[i - 1] + nums[i]
        2. discard former sequence, and start a new subarray with itself, nums[i]

        samples:
        
        1. `#53. Maximum Subarray, leetcode`
        2. `#152. Maximum Product Subarray, leetcode`