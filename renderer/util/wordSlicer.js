
function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    // arr = Array.from(arr).reverse();
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        // const chunk = arr.slice(arr.length - i - chunkSize, arr.length - i);
        const asInt = parseInt(chunk, 16)
        res.push(asInt);
    }
    return res;
}

function overlappingBytes(arr, chunkSize) {
    const res = [];
    // arr = Array.from(arr).reverse();
    for (let i = 0; i < arr.length; i += 1) {
        const chunk = arr.slice(i, i + 2);
        // const chunk = arr.slice(arr.length - i - chunkSize, arr.length - i);
        const asInt = parseInt(chunk, 16)
        res.push(asInt);
    }
    return res;
}

module.exports = { sliceIntoChunks, overlappingBytes }