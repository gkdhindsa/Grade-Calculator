let grade=0;
let g='';

function addMarks(){
    const marks=document.getElementsByName("marks");
    let y=false;

    for(let i=0;i<marks.length; i++)
    {
        let x=marks[i].value;

        console.log(x=="", x);
        
        if(x=="" || x<0 || x>100 || isNaN(x)){
            y=true;
            marks[i].classList.add("highlight-input");
            console.log("wrong");
            
        }
        else{
            grade+=parseFloat(x);
        }
        
    }

    if(y){
        document.querySelector(".grade-text").innerText='Please enter values between 0 and 100 and do not leave any input fields blank.';
        return

    }
    
    console.log(grade);
    grade/=5;
    console.log(grade);
    if(grade>=90){
        g='A';
    }
    else if(grade>=80){
        g='B';
    }
    else if(grade>=70){
        g='C';
    }
    else if(grade>=60){
        g='D'
    }
    else if(grade>=50){
        g='E'
    }
    else{
        g='F'
    }
    console.log(g);

    document.querySelector(".grade-text").innerText="Your average is " + grade.toString() +" and your grade is: " + g; 
}

const btn= document.getElementById("btn");
btn.addEventListener("click", addMarks);