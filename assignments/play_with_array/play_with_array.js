function getEven(arr) {
    let array = [...arr];
    array.map((user) => {
        if(array[user] % 2 !== 0){
           array.splice(user,1);
        }
    })
return array;
};
function multiplyByN(arr, n) {
   for(let i = 0; i < arr.length;i++){
       arr[i] *= n;
   };
return arr;
}
function removeNthElement(arr, n) {
    arr.splice(n,1);
    return arr;
}
module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}