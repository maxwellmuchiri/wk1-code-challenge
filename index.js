//A grading sysytem to determine grades for students ranging from 0-100 assigning A,B,C,D or E accordingly

function showValue(value){
    //declaring values
    let grade;

    //if statements

    if(value > 79){
        grade = 'You got an A';
        
    }else if(value >=60 && value <=79){
        grade = "You got a B";

    }else if(value <=59  && value  >=49){
        grade = "You got a C"
    
    }else if(value>=40 && value<=49){
        grade = "You got a D";
    
    }else {
        grade = "You got an E";
    }
    console.log (grade)
return grade
}
//testing if the code is working
showValue(50)
showValue(26)
showValue(88)
showValue(2)

//award demerit points according to the exceeded speed over 70 drom 0 to 12 demerits

function licenseValidity(speed){
    //declaring function
    let demerit;
    //if statements
    if (speed<=70){
        demerit="okay";
    }else if(((speed-70)/5)>=12){
        demerit = "license suspended";
    }else if(speed>=71){
        demerit = ('points:'+(speed-70)/5);
    }
    console.log(demerit)
}
//testing if the code is working
licenseValidity(220)
licenseValidity(90)
licenseValidity(69)
licenseValidity(110)





  let salary = 17000;
    let benefits = 3000;
     let gross = salary + benefits;
     let NSSF = gross * 0.06;
     let netCalculator = gross;
     let netIncome;
     let NHIF;
     //NSSF & TAX.
     if (gross <= 24000) {
             netIncome = (gross*0.1)
         }
         else if (gross >= 32333) {
            netIncome = (gross*0.3)
         }
         else if (gross >= 24001) {
             netIncome = (gross*0.25)
         }
     console.log('Gross salary:', gross)
      console.log('TAX deductions:', netIncome)
      console.log('NSSF deduction:', NSSF)
     //NHIF
             if (gross <= 5999 ){
                NHIF  = gross - (gross - 150) }
             else if (gross <= 7999) {
                 NHIF =  gross - (gross - 300)
             }
             else if( gross <= 11999){
                 NHIF = gross - (gross - 400) }
             else if ( gross <= 14999) {
                 NHIF = gross - (gross - 500)}
             else if (gross <= 19999) {
                 NHIF = gross - (gross - 600) }
             else if(gross <= 24999) {
                 NHIF = gross - (gross - 750)}
             else if( gross <= 29999){
                 NHIF = gross - (gross- 850)}
             else if (gross <= 34999) {
                 NHIF = gross - (gross - 900) }
             else if (gross <= 39999) {
                 NHIF = gross - (gross - 950)}
             else if (gross <= 44999) {
                 NHIF = gross - (gross - 1000)}
             else if (gross <= 49999) {
                 NHIF = gross - (gross - 1100) }
             else if  (gross <= 59999){
                 NHIF = gross - (gross - 1200)}
             else if (gross <= 69999) {
                 NHIF =  gross - (gross - 1300) }
             else if (gross <= 79999) {
                 NHIF = gross - (gross - 1400)}
             else if  (gross <= 89999) {
                 NHIF = gross - (gross- 1500) }
             else if (gross <= 99999) {
                 NHIF = gross - (gross - 1600)}
             else if (gross >= 100000) {
                 NHIF = gross - (gross - 1700)}

                 
         console.log('NHIF deduction:', NHIF)
         console.log('TAX & NSSF & NHIF total:', (NSSF + netIncome + NHIF ))
         console.log('Net salary:', gross - (NSSF + netIncome + NHIF ))

