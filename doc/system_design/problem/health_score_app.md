# Amazon | System Design for health score app

People can compete with each other.
Display chart which shows score of top hundres people.

Score can be calculated based on steps, exercise, calories burned.

[link](https://leetcode.com/discuss/interview-question/system-design/366754/Amazon-or-System-Design-for-health-score-app)

## solution

1. Problems

![img](./img/health1.jpg)

2. key actions

![img](./img/health2.jpg)
![img](./img/health3.jpg)

3. main component

![img](./img/health4.jpg)

4. key issue
    1. if score of an item changed and belong to other table, should move it, which is very redundant

5. resolve it

![img](./img/health5.jpg)

using **mapReduce** to do ranking. each map sort one table and get top 100, then reducer merge them and get the final top 100