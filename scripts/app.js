let box1 = document.getElementById("box1");
let box2=document.getElementById("box2");
let box3=document.getElementById("box3");
let box4=document.getElementById("box4");
let box5=document.getElementById("box5");
let box6=document.getElementById("box6");
let box7=document.getElementById("box7");
let box8=document.getElementById("box8");

let changeColorsBtn=document.getElementById("changeColorsBtn");
let resetColorsBtn = document.getElementById("resetColorsBtn");

changeColorsBtn.addEventListener('click',function(event){

let boxNumberTxt=document.getElementById("boxNumberTxt");
let changeColorTxt=document.getElementById("changeColorTxt");
    
     switch(boxNumberTxt.value){
        case "1": 
        box1.classList.add(changeColorTxt.value.toLowerCase());
        console.log(box1.classList);
        break;
        case "2": 
        box2.classList.add(changeColorTxt.value.toLowerCase());
            break;

        case "3":
            box3.classList.add(changeColorTxt.value.toLowerCase());
        break;

        case "4":
            box4.classList.add(changeColorTxt.value.toLowerCase());
        break;
        case "5":
            box5.classList.add(changeColorTxt.value.toLowerCase());
        break;

        case "6":
            box6.classList.add(changeColorTxt.value.toLowerCase());
        break;
        case "7":
            box7.classList.add(changeColorTxt.value.toLowerCase());
        break;

        case "8":
            box8.classList.add(changeColorTxt.value.toLowerCase());
        break;



        default: alert("please enter a valid box number between 1-8");
     }; 
});

resetColorsBtn.addEventListener ('click',function(){
    
    box1.classList.remove("red" ,"blue" , "purple" ,"brown" ,"yellow");
    box2.classList.remove("red" ,"blue" , "purple" ,"brown" ,"yellow");
    box3.classList.remove("red" ,"blue" , "purple" ,"brown" ,"yellow");
    box4.classList.remove("red" ,"blue" , "purple" ,"brown" ,"yellow");
    box5.classList.remove("red" ,"blue" , "purple" ,"brown" ,"yellow");
    box6.classList.remove("red" ,"blue" , "purple" ,"brown" ,"yellow");
    box7.classList.remove("red" ,"blue" , "purple" ,"brown" ,"yellow");
    box8.classList.remove("red" ,"blue" , "purple" ,"brown" ,"yellow");
})