class QueueUsingStack {
    constructor() {
        this.first = [];
        this.last = [];
    }

    push(value) {
        this.first.push(value);
    }

    pop(){
        if(this.last.length !== 0)
            return this.last.pop();
        else {
            const length = this.first.length;
            for(let i=0; i<length; i++)
                this.last.push(this.first.pop());
            console.log(this);
            return this.last.pop();
        }
    }

    peek(){
        if(this.last.length !== 0)
            return this.last[this.last.length - 1];
        else
            return this.first[0];
    }

    empty(){
        if (!(this.first.length && this.last.length)) 
            return true;
        return false;
    }
}

const myQueue = new QueueUsingStack();
console.log(myQueue);

console.log(myQueue.push(1));
console.log(myQueue.push(2));
console.log(myQueue.push(3));
console.log(myQueue.push(4));
console.log(myQueue);
console.log(myQueue.pop());
console.log(myQueue.push(5));
console.log(myQueue.pop());
console.log(myQueue.pop());
console.log(myQueue.pop());
console.log(myQueue.pop());
