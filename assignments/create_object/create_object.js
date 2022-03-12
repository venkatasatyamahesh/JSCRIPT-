function CreateObject(arr) {
    // Write your code here
    let obj={};
    //let nameL=arr.length
    for(i=0;i<arr.length-1;i=i+2){
        obj[arr[i]]=arr[i+1]
    }
    return obj
}
module.exports = CreateObject;


// var obj = {};
// for (var i=0; i<arr.length-1; i=i++){
//     obj[arr[i]]=arr[i+1]
// }
// return obj
