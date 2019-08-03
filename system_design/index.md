# system design

## knowledge

- caching
- mapReduce
- load balancer
- distributed system
- database
    - transaction & atomicity
    - replication, to make data from different machines same at time
    - partitioning 
- process && thread && lock
- Nosql
- consistent hashing
- networking

## steps to solve

1. try some user cases first of the system you will design, just pretend you are using it. it's a good way to understand deeply and quickly the system
2. scope the problem or the system, ask anything you are concerning, and trying to small this problem.
3. record these restriction, turn to assumptions
4. try design a non-scalable system first
5. analyze key issues and bottlenecks of the naive one
6. up to large scale, optimize the naive one

## tricks

1. knowning **the common scale** of some kind of data, e.g. a regular URL takes 100byte, some like that. That is very useful for estimating the scale of data you'll handle
    1. 2/8 law for estimating metrics

## common metrics of large system

## common bottlenecks in scalable system

- network traffic
- a lot of users (requests?)
- a lot of data (how to store and retrieve)

## weakness

- lack of general knowledges of large system, how many data, some like that
- lack of knowing enough popular techs or concepts in the backend, those are useful in high-level design