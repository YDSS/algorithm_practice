import BinomialQueue from './BinomialQueue';

class Main {
    testBuildQueue() {
        let queue = this.mock();        
        queue.print();
    }

    testDeleteMin() {
        let queue = this.mock();
        let min = queue.deleteMin();
        console.log(min.data);
        queue.print();
    }

    mock() {
        let arr = [15, 14, 26, 23, 51, 24, 65];
        let binomialQueue = new BinomialQueue(20);
        binomialQueue.buildQueue(arr);

        return binomialQueue;
    }
}

// new Main().testBuildQueue();
new Main().testDeleteMin();