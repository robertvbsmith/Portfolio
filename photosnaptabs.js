

   var checkBox = document.getElementById("checkbox");
   var text1 = document.getElementsByClassName("text1");
   var text2 = document.getElementsByClassName("text2");
   var text3 = document.getElementsByClassName("text3");
   var text4 = document.getElementsByClassName("text4");
 

function check() {
 
    for (var i = 0; i < text1.length; i++) {
      if (checkBox.checked == true) {
        text1[i].style.display = "none";
        text2[i].style.display = "block";
    //    text3[i].style.opacity = "0.2";
   //     text4[i].style.opacity = "1";
      } else if (checkBox.checked == false) {
        text1[i].style.display = "block";
        text2[i].style.display = "none";
    //   text3[i].style.opacity = "1";
    //    text4[i].style.opacity = "0.2";
      }
    }
}

  check();                              


