var checkBox = document.getElementById("checkbox");
var text3 = document.getElementsByClassName("text3");
var text4 = document.getElementsByClassName("text4");
var opacity = 1;

function changeOpacity() {
   
    
    for (var i = 0; i < text3.length; i++) {
        if (checkBox.checked == true) {
          text3[i].style.opacity = "0.2";
          text4[i].style.opacity = "1";
        } else if (checkBox.checked == false) {
       text3[i].style.opacity = "1";
       text4[i].style.opacity = "0.2";
        }
      }
  }






    
  //  if (checkBox.checked == true) {
 //     text3.style.opacity = "1"
 //     text4.style.opacity = "0.2";
 //   } else if (checkBox.checked == false)  {
 //     text3.style.opacity = "1";
 //     text4.style.opacity = "0.2";
 //   }
//    changeOpacity()
//}
