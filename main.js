
function consol() {
      if(localStorage.length==0){

        // ***************************setting data to localstorage******************

     localStorage.setItem('animalName', document.getElementById("inpAnimal").value);
     localStorage.setItem('anotherAnimalName', document.getElementById("inpAnotherAnimal").value);
     localStorage.setItem('more', document.getElementById("inpMore").value);
     localStorage.setItem('past', document.getElementById("inpPast").value);
     localStorage.setItem('quot', document.getElementById("quote").value);
     localStorage.setItem('msg', document.getElementById("message").value);
     localStorage.setItem('num', document.getElementById("inpNumber").value);
     localStorage.setItem('radio', document.querySelector("input[name='radio']:checked").value);
     localStorage.setItem('speed', document.querySelector("select[name='speed']").value);
      }
    }

//    *****************loop to get value of class*********************
    
function story(){
        if(localStorage.length>0){
    var sanimal = document.querySelectorAll(".sanimal");
    for (i = 0; i < sanimal.length; i++) {
        sanimal[i].innerHTML = localStorage.getItem('animalName');
    }
    var sAnotherAnimal = document.querySelectorAll(".sAnotherAnimal");
    for (i = 0; i < sAnotherAnimal.length; i++) {
        sAnotherAnimal[i].innerHTML = localStorage.getItem('anotherAnimalName');
    }
    var sverb = document.querySelectorAll(".sverb");
    for (i = 0; i < sverb.length; i++) {
        sverb[i].innerHTML = localStorage.getItem('verb');
    }
    

//    *****************loop to get value from localstorage*********************

     document.getElementById("sradio").innerHTML = localStorage.getItem("radio");
     document.getElementById("smore").innerHTML = localStorage.getItem("more");
     document.getElementById("smessage").innerHTML = localStorage.getItem('msg');
     document.getElementById("snum").innerHTML = localStorage.getItem('num');
     document.getElementById("sspeed").innerHTML = localStorage.getItem('speed');
     document.getElementById("spast").innerHTML = localStorage.getItem('past');
     document.getElementById("sQuote").innerHTML = localStorage.getItem('quot');
     localStorage.clear();}

}

