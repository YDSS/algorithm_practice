import MinHeap from './MinHeap';

class Main {
    testMinHeapDeleteMin() {
        let minHeap = this.buildMockMinHeap();
        let min = minHeap.deleteMin();
        console.log(`min node: ${min}`);

        minHeap.print();
    }

    testMinHeapInsert() {
        let minHeap = this.buildMockMinHeap();
        let insertI = minHeap.insert(0);
        console.log(`insert to pos: ${insertI}`);
        
        minHeap.print();
    }

    testBuildMinHeap() {
        let minHeap = this.buildMockMinHeap();

        minHeap.print();
    }

    buildMockMinHeap() {
        let arr = this.mock();
        let minHeap = new MinHeap(10);
        minHeap.buildHeap(arr);

        return minHeap;
    }

    mock() {
        return [3, 9, 2, 4, 19, 29, 13, 7];
    }
}

// new Main().testBuildMinHeap();
new Main().testMinHeapInsert();
// new Main().testMinHeapDeleteMin();