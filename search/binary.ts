export default function binarySearch(haystack: number[], needle: number): boolean {
  let high = haystack.length
  let low = 0

  do {
    const midPoint = Math.floor(low + (high + low) / 2)
    const value = haystack[midPoint]

    if (value === needle) {
      return true
    } else if (value > needle) {
      high = midPoint
    } else {
      low = midPoint + 1
    }
  } while (low < high)

  return false

}