const marks = 0;

if (marks > 100 || marks < 0){
    console.log("Invalid marks")
}
else if(marks >= 90){
    console.log("A grade")
}
else if (marks >= 75){
    console.log("B grade")
}
else if (marks > 50){
    console.log("C grade")
}
else if( marks === 50){
    console.log("Just passed")
}
else if (marks < 50){
    console.log("Fail")
}
else {
    console.log("Invalid marks")
}


//writing in funciton:
function getGrade(marks){
    if (marks > 100 || marks < 0){
    console.log("Invalid marks")
    }
    else if(marks >= 90){   
    console.log("A grade")
    }
    else if (marks >= 75){  
    console.log("B grade")
    }
    else if (marks > 50){   
    console.log("C grade")
    }
    else if( marks === 50){ 
    console.log("Just passed")
    }
    else if (marks < 50){
        console.log("Fail")
    }
    else {
        console.log("Invalid marks")
    }
}

getGrade(100)
