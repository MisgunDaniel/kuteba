
//home section rent part
var rent = document.getElementById("rent").value;
var rentSelect = document.getElementById("homeSelect").value;

//main calculate option
var cal = document.getElementById("Calculate").value;

function homeFunction(){
    if(cal == 1){
        if(rentSelect == 1){
            rent = rent;
        }else if(rentSelect == 2){
            rent = rent/4;
        }
    }
    document.getElementById("homeResult").innerHTML = rent+" ETB";
}

function calculate(){

}
