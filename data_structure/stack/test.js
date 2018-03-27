/**
 * @file test case
 * @author YDSS
 */
const {expect} = require('chai');
const SequenceStack = require('./SequenceStack');

test('constructor', () => {
    let sequenceStack = new SequenceStack();

    expect(sequenceStack._stack).to.be.a('array');
    expect(sequenceStack.top).to.equal(0);
    expect(sequenceStack.maxSize).to.equal(-1);
});

test('is empty', () => {
    let sequenceStack = new SequenceStack();
    
    expect(sequenceStack.isEmpty()).to.be.true;
    sequenceStack.push(1);
    expect(sequenceStack.isEmpty()).to.be.false;
    sequenceStack.pop();
    expect(sequenceStack.isEmpty()).to.be.true;
});

test('is full', () => {
    let sequenceStack = new SequenceStack(1);

    expect(sequenceStack.isFull()).to.be.false;
    sequenceStack.push(1);
    expect(sequenceStack.isFull()).to.be.true;
})

test('push and pop', () => {
    let sequenceStack = new SequenceStack();

    sequenceStack.push(1);
    expect(sequenceStack.top).to.equal(1);
    let pop = sequenceStack.pop();
    expect(pop).to.equal(1);
})