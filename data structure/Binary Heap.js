class MaxHeap {
    constructor(arr = []) {
        this.data = arr
        this.size = arr.length
    }

    getSize() {
        return this.size
    }

    isEmpty() {
        return this.getSize() === 0
    }


    _parent(index) {
        return Math.floor(index - 1 / 2)
    }

    _leftChild(index) {
        return index * 2 + 1
    }

    _rightChild(index) {
        return index * 2 + 2
    }

    _swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
    }

    _heapifyUp(index) {
        while (this.data[index] > this.data[this._parent(index)]) {
            this._swap(index, this._parent(index))
            index = this._parent(index)
        }
    }

    _heapifyDown(index) {
        //循环停止得很精妙
        while (this._leftChild(index) < this.getSize()) {
            let j = this._leftChild(index)
            if (j + 1 < this.getSize() && this.data[j] < this.data[j + 1]) {
                j++
            }
            //如果已经比子元素大的话，就不需要再循环了
            if (this.data[index] > this.data[j]) {
                return
            }
            this._swap(j, index)
            index = j
        }
    }

    findMax() {
        if (this.getSize()) {
            return this.data[0]
        }
    }

    insert(val) {
        this.data.push(val)
        this.size++
            if (this.getSize() > 1) {
                this._heapifyUp(this.getSize() - 1)
            }
    }

    deleteMax() {
        this._swap(0, this.getSize() - 1)
        const MaxVal = this.data.pop()
        this.size--
            if (this.getSize() > 1) {
                this._heapifyDown(0)
            }
        return MaxVal
    }

    toString() {
        console.log(this.data);
    }


}


//优先队列
class PriorityQueue {
    constructor() {
        this.maxHeap = new MaxHeap();
    }

    getSize() {
        return this.maxHeap.getSize();
    }

    isEmpty() {
        return this.maxHeap.isEmpty();
    }

    getFront() {
        return this.maxHeap.findMax();
    }

    enqueue(e) {
        return this.maxHeap.insert(e);
    }

    dequeue() {
        return this.maxHeap.deleteMax();
    }
    toString() {
        this.maxHeap.toString()
    }
}

//测试数据
let pq = new PriorityQueue();
pq.enqueue(1);
pq.enqueue(6);
pq.enqueue(5);
pq.enqueue(3);
pq.enqueue(7);
pq.enqueue(4);
pq.enqueue(62);
console.log(pq.toString());
console.log(pq.dequeue());
console.log(pq.toString());
console.log(pq.dequeue());
console.log(pq.toString());
console.log(pq.dequeue());
console.log(pq.toString());
pq.enqueue(62);
console.log(pq.toString());
console.log(pq.getFront());