let grade=0;
let g='';

function addMarks(){
    const marks=document.getElementsByName("marks");
    console.log(marks);
    
    for(let i=0;i<marks.length; i++)
    {
        grade+=parseFloat(marks[i].value);
        console.log(marks.value)
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