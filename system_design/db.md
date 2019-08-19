## DB

- shading
    
    one way of partitioning, also named horizontal partitioning, which is spliting a table or rows in a table into several servers

- partitioning

    split a table into several when the table has too much data
    
    **pros**: 
    
    1. querying data will be much faster than in a table with too much data
    2. splitting should follow some rules, like split by `create data`

    **cons**:

    1. if need aggregation, querying will be way slower than in one table, cause there're many tables may all store the data you need

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