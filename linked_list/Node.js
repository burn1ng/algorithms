export default class Node {
    constructor(options) {
        this._value = options.value;
        this._next = options.next || null;
    }

    get value() {
        return this._value;
    }
    
    set value(val) {
        this._value = val;
    }

    get next() {
        return this._next;
    }

    set next(val) {
        this._next = val;
    }

    static print_node_chain(node) {
        while(node !== null) {
            console.log(node.value);
            node = node.next;
        }
    }

}