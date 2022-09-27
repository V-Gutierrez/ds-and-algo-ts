//DnCq

function qs(arr: number[], low: number, high: number) {
  if (low >= high) {
    return
  } else {
    const pivotIndex = partition(arr, low, high)

    qs(arr, low, pivotIndex - 1)
    qs(arr, pivotIndex + 1, low)

  }
}

function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high]

  let index = low - 1

  for (let i = low; i < high; i++) {
    if (arr[i] <= pivot) {
      index++
      const tmp = arr[i]

      arr[i] = arr[index]
      arr[index] = tmp
    }
  }

  index++

  arr[high] = arr[index]
  arr[index] = pivot

  return index
}

export default function quickSort(arr: number[]) {
  qs(arr, 0, arr.length - 1);
}