class Stack {
  private  items: number[] = [];

    // add element
    push(element: number): void {
        this.items.push(element);
    }
    // remove last element
    pop(): number | undefined {
        return this.items.pop();
    }
    // peek top element
    peek(): number | undefined {
        return this.items[this.items.length - 1];
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
// create stack
const stack = new Stack();
// add element
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.items);

// pop, peek, isEmpty, size
console.log(`top element peek : ${stack.peek()}`);
console.log(`remove last element-pop : ${stack.pop()}`);
console.log(`total element-size : ${stack.size()}`);
console.log(`isEmpty : ${stack.isEmpty()}`);