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
    
}