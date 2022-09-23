// Gaussian expression =>  (n + 1) * n / 2 = sum of all numbers inside range n

/**
 * We iterate through the array and compare each item with the next one,
 * if the next one is smaller we swap them
 * @param {number[]} arr - number[] - The array to sort
 */
export default function bubbleSort(arr: number[]) {

  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      // Which means each iteration will ignore the last item and
      // with each i iteration it will run n - i times being n < arr.length
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j]

        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }

  return arr
}

console.log(bubbleSort([1, 2, 3, 123123, 4, 56, 123, 0]))