class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        console.log("newNode :",newNode)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            console.log("ELSE this.tail & this.head : BEFORE", this.head, this.tail)
            this.tail.next = newNode;
            console.log("ELSE this.tail & this.head : AFTER", this.head, this.tail )

            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

var list = new SinglyLinkedList()
list.push("Hi!")
console.log("Hi! :",list)

list.push("Vishal")
console.log("Vishal :",list)

list.push("How")
console.log("How :",list)

list.push("Are")
console.log("Are :", list)

list.push("You?")
console.log("You? :",list)



console.log(list)
// console.log("list.next :",list.head.next)
// console.log("list.next :",list.head.next.next)
// console.log("list.next :",list.head.next.next.next)
// console.log("list.next :",list.head.next.next.next.next)
