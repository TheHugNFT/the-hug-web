let { sliceIntoChunks, overlappingBytes} = require('./wordSlicer')

let seed = 'FF00FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF'

test('test', () => {
    let arr = sliceIntoChunks(seed, 2)
    console.log(arr)

    arr = sliceIntoChunks(seed, 1)
    console.log(arr)

    arr = overlappingBytes(seed)
    console.log(arr)

    // expect(sum(1, 2)).toBe(3);
});