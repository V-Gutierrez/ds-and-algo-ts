type DBLNode<T> = {
  value: T,
  prev?: DBLNode<T>,
  next?: DBLNode<T>,
}

interface DoublyLinkedList<T> {
  insertAt(item: T, index: number): void;
  remove(item: T): T | undefined;
  removeAt(index: number): T | undefined;
  append(item: T): void;
  prepend(item: T): void;
  get(index: number): T | undefined;
}



class DoublyLinkedList<T> implements DoublyLinkedList<T> {
  public length: number;
  private head?: DBLNode<T>;
  private tail?: DBLNode<T>;

  constructor() {
    this.length = 0;
    this.head = undefined
  }

  prepend(item: T): void {
    const node = { value: item } as DBLNode<T>

    this.length++

    if (!this.head) {
      this.head = this.tail = node
      return
    }

    node.next = this.head
    this.head.prev = node
    this.head = node
  }

  insertAt(item: T, index: number): void {
    if (index > this.length) {
      throw new Error("Out of range index")
    } else if (index === this.length) {
      this.append(item)
      return
    } else if (index === 0) {
      this.prepend(item)
    } else {
      this.length++

      const current = this.getAt(index)
      const node = { value: item } as DBLNode<T>

      node.next = current
      node.prev = current?.prev
      //@ts-ignore
      current.prev = node

      //@ts-ignore
      if (current.prev) {
        //@ts-ignore
        current.prev.next = current
      }


    }


  }

  append(item: T): void {
    const node = { value: item } as DBLNode<T>
    this.length++

    if (!this.tail) {
      this.head = this.tail = node
      return
    }

    node.prev = this.tail
    this.tail.next = node
    this.tail = node
  }

  remove(item: T | DBLNode<T>): T | undefined {
    let current = this.head

    for (let i = 0; current && i < this.length; i++) {
      if (current.value == item) {
        break
      }
      current = current.next
    }

    if (!current) return

    this.length--

    if (this.length === 0) {
      const output = this.head?.value
      this.head = this.tail = undefined
      return output
    }

    if (current.prev) {
      current.prev.next = current.next
    }
    if (current.next) {
      current.next.prev = current.prev
    }


    if (current == this.head) {
      this.head = current.next
    }

    if (current == this.tail) {
      this.tail = current.prev
    }

    current.prev = current.next = undefined

    return current.value
  }


  get(index: number): T | undefined {
    return this.getAt(index)?.value
  }

  removeAt(index: number): T | undefined {
    const node = this.getAt(index)

    if (!node) {
      return undefined
    }

    this.remove(node)
  }

  private getAt(index: number): DBLNode<T> | undefined {
    let current = this.head

    for (let i = 0; current && i < this.length && i < index; i++) {
      current = current.next
    }

    return current
  }

}

const dbk = new DoublyLinkedList()

console.log(dbk.length)

dbk.append({ value: "U 2" })
console.log(dbk.length)

console.log(dbk.get(0))

dbk.append({ value: "U 222" })
console.log(dbk.length)
console.log(dbk.get(1))
console.log(dbk.get(2))


dbk.insertAt({ value: "AAA" }, 2)

console.log(dbk.length)
console.log(dbk.get(1))
console.log(dbk.get(2))