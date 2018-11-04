export default class LinkedList {
    constructor() {
        this._HEAD = null;
        this._TAIL = null;

        this._count = 0;
    }

    get HEAD() {
        return this._HEAD;
    }

    get TAIL() {
        return this._TAIL;
    }

    add_first(node) {
        let temp = this._HEAD;

        this._HEAD = node;
        this._HEAD.next = temp;
        this._count++;

        if (this._count === 1) {
            this._TAIL = this._HEAD;
        }
    }

    remove_first(node) {
        if (this._count !== 0) {
            this._HEAD = this._HEAD.next;
            this._count--;

            if (this._count === 0) {
                this._TAIL = null;
            }
        }
    }

    add_last(node) {
        if (this._count === 0) {
            this._HEAD = node;
        } else {
            this._TAIL.next = node;
        }

        this._TAIL = node;
        this._count++;
    }

    remove_last() {
        if (this._count !== 0) {
            if (this._count === 1) {
                this._HEAD = null;
                this._TAIL = null;
            } else {
                let current = this._HEAD;

                while(current.next !== this._TAIL) {
                    current = current.next;
                }

                current.next = null;
                this._TAIL = current;
            }

            this._count--;
        }
    }

    enumerate() {
        let current = this._HEAD;

        while(current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    // *enumerate() {
    //     let current = this._HEAD;

    //     while(current !== null) {
    //         yield current.value;
    //         current = current.next;
    //     }
    // }
}