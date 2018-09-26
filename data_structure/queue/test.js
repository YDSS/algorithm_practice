/**
 * @file test case
 * @author YDSS
 *
 * Created on Tue Mar 27 2018
 */

const { expect } = require('chai');
const SequenceQueue = require('./SequenceQueue').default;

test();
// test('enter and leave', () => {
function test() {
    let queue = new SequenceQueue(2);
    // expect(queue.front).to.equal(0);
    // expect(queue.rear).to.equal(0);

    queue.enter(123);
    queue.enter(234);
    console.log('isFull: ' + queue.isFull())
    queue.print();
    // expect(queue.isFull()).to.be.true;
    // expect(() => queue.enter(23)).to.throw('the queue is full');
    // queue.enter(23);

    queue.leave();
    queue.print();
    queue.leave();
    console.log('isEmpty: ' + queue.isEmpty());
    queue.leave();
    // expect(queue.leave()).to.equal(123);
    // queue.leave();
    // expect(queue.isEmpty()).to.be.true;
    // expect(() => queue.leave()).to.throw('the queue is empty');
}
// })