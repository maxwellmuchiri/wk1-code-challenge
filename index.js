function showValue(value){
    let grade;

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
showValue(50)
showValue(26)
showValue(88)
showValue(2)


function licenseValidity(speed){
    let demerit;
    if (speed<=70){
        demerit="okay";
    }else if(((speed-70)/5)>=12){
        demerit = "license suspended";
    }else if(speed>=71){
        demerit = ('points:'+(speed-70)/5);
    }
    console.log(demerit)
}
licenseValidity(220)
     licenseValidity(90)
     licenseValidity(69)
     licenseValidity(110)



