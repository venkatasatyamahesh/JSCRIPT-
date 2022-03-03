// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    let massOfPerson = mass;
    let heightOfPerson = height;
    if(massOfPerson !== 0){
        if(heightOfPerson !== 0){
    let BMI =  massOfPerson / (heightOfPerson * heightOfPerson)
return BMI}};
return "INVALID INPUT";

}

module.exports = BMICalculator;
