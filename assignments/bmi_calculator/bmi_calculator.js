
function BMICalculator(mass, height) {
    let massOfPerson = mass;
    let heightOfPerson = height;
    if(massOfPerson !== 0){
        if(heightOfPerson !== 0){
            if (/d+/gi.test(massOfPerson) ){
                if (/d+/gi.test(heightOfPerson)){
                     let BMI =  massOfPerson / (heightOfPerson * heightOfPerson);
                         return BMI}}}};
return "INVALID INPUT";

}

module.exports = BMICalculator;
