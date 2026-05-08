class Stack {
    items: number[] = [];

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