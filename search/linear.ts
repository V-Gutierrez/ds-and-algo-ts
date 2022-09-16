/**
 * It returns true if the needle is in the haystack, and false otherwise
 * @param {number[]} haystack - The array to search through.
 * @param {number} needle - The value we're looking for.
 * @returns A boolean value.
 */
export default function linearSearch(haystack: number[], needle: number): boolean {
  for (const element of haystack) {
    if (element === needle) {
      return true;
    }
  }
  return false;
}