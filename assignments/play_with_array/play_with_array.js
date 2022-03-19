function getEven(arr) {
    var result =arr.filter(numb => numb%2===0)

        return result

}
function multiplyByN(arr, n) {
  
  function mulByN(num){
      return num*n
  }
  arr=arr.map(mulByN)
  return arr
}
function removeNthElement(arr, n) {
        const opp = arr.filter((element,index) => {
          return index !==n;
            });
            return opp
    }    
    module.exports = {
        getEven,
        multiplyByN,
        removeNthElement
    }
    //function mul_by_N(num)
