var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    newArray = [...firstArray,...secondArray]
    // chunk_one.forEach(item => {
    //     newArray.push(item);
    // })
    // chunk_two.forEach(item => {
    //     newArray.push(item);
    // })
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));