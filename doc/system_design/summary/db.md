## DB

- shading
    
    one way of partitioning, also named horizontal partitioning, which is spliting a table or rows in a table into several servers

    [1](https://www.cnblogs.com/jshen/p/7682502.html)
    [2](https://yq.aliyun.com/articles/284561?spm=a2c4e.11155472.0.0.72f3626bkDAMPJ)
    [3](https://www.jianshu.com/p/2b75742e9941)
    [4](https://blog.csdn.net/qq_28289405/article/details/80576614)

- partitioning

    split a table into several when the table has too much data
    
    **pros**: 
    
    1. querying data will be much faster than in a table with too much data
    2. splitting should follow some rules, like split by `create data`

    **cons**:

    1. hard to pagination
    2. hard to op: `order by`, `join`
    3. consistent id => [Twitter的分布式自增ID算法Snowflake](http://blog.sina.com.cn/s/blog_6b7c2e660102vbi2.html)

### MySQL (relational DB)

**pros**:

- widely used and mature
- support `replication` and `load balance` in cluster

replication:

- master/slave replication
    - master is responsible for writing, and replicate new data to slaves
    - slaves are responsible for reading, and sync data from master

    ![img](./img/mysql_master_slave_replication.png)

    [link](https://www.toptal.com/mysql/mysql-master-slave-replication-tutorial)

- master/master replication
    - replication between master and master
    - master is also responsible for reading

    ![img](./img/mysql_master_master_replication.png)

**cons**

- predefine schema (table), not easy when need alter some columns. strict table has pros too, the data is solid, but less flexible
- horizontal scaling is difficult, like sharding and partitioning

### postgreSQL

**pros**

1. advance features, suitable for complex query
2. support several readers and writers to op at same time, concurrency without read locks

**cons**


### MongoDB (NoSQL)

**pros**

- No schema, means more flexible. documents in one collection may have different fields.
    - it's good because some data originally not have these field
    - it's bad because the data is unreliable
- horizontal scaling and vertical scaling are all very easy.

    document is standalone, and can be split into anywhere
- very suit for read-heavy application, greate performance for simple read and write application

**cons**

- data may be stale
- update a document may cause many documents update, which is not suit for write-heavy application

## optimization

1. create index
2. separate write with read
3. partitioning and sharding 