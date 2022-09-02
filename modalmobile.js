window.addEventListener('load', function(){
  
    setTimeout(
      function open(event){
        document.querySelector('.email-modal').style.display = "block";
      },
      3000
    )
  })
  
  
  document.querySelector('.email-modal__close-btn').addEventListener('click', function(){
    document.querySelector(".email-modal").style.display = "none";;
   
  })