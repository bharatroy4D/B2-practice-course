class Queue {
    items: number[] = [];

    //  add element
    enqueue(element: number): void {
        this.items.push(element);
    }
    // remove first element
    dequeue(): number | undefined {
        return this.items.shift();
    }
    // see first element
    front(): number | undefined {
        return this.items[0]
    }
    // empty check
    isEmpty(): boolean {
        return this.items.length === 0;
    }
    // total size
    size(): number {
        return this.items.length;
    }
}

// create queue
const queue = new Queue();
// add element
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.items);
// dequeue, front, isEmpty, size
console.log(`remove first element: ${queue.dequeue()}`);
console.log(`see front element: ${queue.front()}`);
console.log(`empty element: ${queue.isEmpty()}`);
console.log(`total size element: ${queue.size()}`);