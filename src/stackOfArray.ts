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
}