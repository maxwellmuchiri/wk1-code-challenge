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



