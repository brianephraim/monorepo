/**
 * Creates a queue implemented with two stacks.
 * @constructor
 */
function TwoStackQueue() {
  this.inbox = [];
  this.outbox = [];
}

/**
 * Push a value to the queue.
 * @param {Object} value The value to push.
 */
TwoStackQueue.prototype.enqueue = function (value) {
  this.inbox.push(value);
};

/**
 * Pops a value from the queue and returns it.
 * @return {Object} The popped value.
 */
TwoStackQueue.prototype.dequeue = function () {
  if (!this.outbox.length) {
    if (!this.inbox.length) {
      return undefined;
    }
    while (this.inbox.length) {
      this.outbox.push(this.inbox.pop());
    }
  }
  return this.outbox.pop();
};

var q = new TwoStackQueue();

q.enqueue('a');
console.log(q.inbox,q.outbox);
q.enqueue('b');
console.log(q.inbox,q.outbox);
q.enqueue('c');
console.log(q.inbox,q.outbox);

console.log(q.dequeue());
console.log(q.inbox,q.outbox);
console.log(q.dequeue());
console.log(q.inbox,q.outbox);
q.enqueue('x');
console.log(q.inbox,q.outbox);