interface BinaryNode<T> {
  value: T
  left: BinaryNode<T>,
  right: BinaryNode<T>
}

function walk(current: BinaryNode<number>, path: number[]): number[] {
  if (!current) {
    return path //Base case is hitting a node that does not exist
  }



  // recurse
  walk(current.left, path)
  walk(current.right, path)
  path.push(current.value)

  // post
  return path
}

export default function postOrderSearch(head: BinaryNode<number>): number[] {
  return walk(head, [])
}
