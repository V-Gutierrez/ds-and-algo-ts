const a = [] // This is not an array 👎

const arr = new ArrayBuffer(6) // Contiguos space memory

const a8 = new Uint8Array(arr)


console.log(arr)
console.log(a8)

