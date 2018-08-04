"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinomialQueue_1 = require("./BinomialQueue");
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
        console.log('size: ', queue.size);
    }
    mock() {
        let arr = [15, 14, 26, 23, 51, 24, 65];
        let binomialQueue = new BinomialQueue_1.default(20);
        binomialQueue.buildQueue(arr);
        return binomialQueue;
    }
}
// new Main().testBuildQueue();
new Main().testDeleteMin();
//# sourceMappingURL=testBinomialQueue.js.map