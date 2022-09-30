interface BinaryNode<T> {
  value: T
  left: BinaryNode<T>,
  right: BinaryNode<T>
}

function walk(current: BinaryNode<number>, path: number[]): number[] {
  if (!current) {
    return path //Base case is hitting a node that does not exist
  }

  path.push(current.value)
  // recurse
  walk(current.left, path)
  walk(current.right, path)

  // post
  return path
}

export default function preOrderSeach(head: BinaryNode<number>): number[] {
  return walk(head, [])
}
