/**
 * "If the needle is in the haystack, return true, otherwise return false."
 *
 * The function starts by setting the high and low values to the length of the haystack and 0
 * respectively
 * @param {number[]} haystack - the array we're searching through
 * @param {number} needle - The value we're looking for
 * @returns A boolean value
 */
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