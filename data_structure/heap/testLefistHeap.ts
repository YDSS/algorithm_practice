import LeftistHeapNode from './LeftistHeapNode';
import LeftistHeap from './LeftistHeap';

class Test {
    mock(): LeftistHeap {
        let arr = [3, 10, 8, 21, 14, 17, 23, 26]; 
        let heap = new LeftistHeap();
        heap.buildHeap(arr);  

        return heap;
    }

    mock2(): LeftistHeap {
        let arr = [6, 12 ,7, 18, 24, 37, 18, 33];
        let heap = new LeftistHeap();
        heap.buildHeap(arr);  

        return heap;
    }

    testBuildHeap() {
        let heap = this.mock();
        heap.print(); 
    }

    testMerge() {
        let heap = this.mock();
        let heap2 = this.mock2();

        heap.merge(heap2);
        heap.print();
    }

    testDeleteMin() {
        let heap = this.mock(); 
        let min = heap.deleteMin();
        console.log(`find min node: ${min.data}`);
        console.log();
        
        heap.print();
    }
}

// new Test().testBuildHeap();
// new Test().testMerge();
new Test().testDeleteMin();