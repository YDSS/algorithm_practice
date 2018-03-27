/**
 * @file test case
 * @author YDSS
 *
 * Created on Tue Mar 27 2018
 */

const { expect } = require('chai');
const SequenceQueue = require('./SequenceQueue');

test('enter and leave', () => {
    let queue = new SequenceQueue(2);
    expect(queue.front).to.equal(0);
    expect(queue.rear).to.equal(0);

    queue.enter(123);
    queue.enter(234);
    expect(queue.isFull()).to.be.true;
    expect(() => queue.enter(23)).to.throw('the queue is full');

    expect(queue.leave()).to.equal(123);
    queue.leave();
    expect(queue.isEmpty()).to.be.true;
    expect(() => queue.leave()).to.throw('the queue is empty');
})