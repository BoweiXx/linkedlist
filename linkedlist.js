const node = require("./node");
class linkedList {
    constructor() {
        this._length = 0;
        this._head = null;
    }
    /*
    * [insert a value at the end of the list]
    * @param {[*]} value
    * @return {[type]}
    */
    append(val) {
        let newNode = new node(val);
        if (!this._head) {
            this._head = newNode;
        } else {
            let current = this._head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this._length++;
    }
    /*
    [delete the first item that is found in the list]
    *@param [{*}] val
    */
    delete(val) {
        let current = this._head, pre = null;
        if (current.value === val) {
            this._head = current.next;
        } else {
            while (current.next && current.value !== val) {
                pre = current;
                current = current.next
            }
            pre.next = current.next;
        }
        this._length--;
    }
    /* 
    [find the first item that matches the val, and return the position]
    *@param [{*}] value
    *@return [{Number}] index
    */
    indexOf(val) {
        let current = this._head;
        let index = 0;
        while (current.next && current !== val) current = current.next, index++;
        return index;
    }
    /*[insert an element at designated position]
    *@param [{Number}] pos
    *@param [{*}] val
    */
    insert(pos, val) {
        if (pos >= 0 && pos <= this._length) {
            let mynode = new node(val);
            let current = this._head;
            let index = 0;
            let pre = null;
            if (pos === 0) {
                mynode.next = this._head;
                this._head = mynode;
            } else {
                while (index++ < pos){
                    pre = current;
                    current = current.next;
                }
                pre.next = mynode;
                mynode.next = current;
                this._length++;
            }
        } else {
            console.warn("position is not a valid value");
        }
    }
    /* [check if the list is empty]
    *@return [{Boolean}] 
    */
   isEmpty(){
       return this._length === 0;
   }
}

module.exports = linkedList;