import BinomialQueue from './BinomialQueue';

class Main {
    testBuildQueue() {
        let queue = this.mock();        
    }

    mock() {
        let arr = [13, 14, 26, 23, 51, 24, 65];
        let binomialQueue = new BinomialQueue(20);
        binomialQueue.buildQueue(arr);

        return binomialQueue;
    }
}