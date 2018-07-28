"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinomialQueue_1 = require("./BinomialQueue");
class Main {
    testBuildQueue() {
        let queue = this.mock();
        queue.print();
    }
    mock() {
        let arr = [13, 14, 26, 23, 51, 24, 65];
        let binomialQueue = new BinomialQueue_1.default(20);
        binomialQueue.buildQueue(arr);
        return binomialQueue;
    }
}
new Main().testBuildQueue();
//# sourceMappingURL=testBinomialQueue.js.map