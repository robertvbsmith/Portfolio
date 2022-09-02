
window.onload = function() {
    let emailState = false;
    //let's turn our modal into a variable with the 'email-modal' class!
    let emailModal = document.getElementsByClassName('email-modal')[0]
   
    let closeButton = document.getElementsByClassName('email-modal__close-btn')[0]

    let emailInput = document.getElementsByClassName('email-modal__input')[0]
    
    let emailButton = document.getElementsByClassName('email-modal__button')[0]

    let thankContainer = document.getElementsByClassName('email-thank')[0]

    let notInterested = document.getElementsByClassName('email-modal__decline-offer')[0]


    let closeModal = () => {
        emailModal.classList.remove('email-modal--visible');
      }

     notInterested.addEventListener('click', () =>{
         closeModal()
     })

    function emailIsValid(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

      let showModal = () => {
        if(emailState == false) {
            emailModal.classList.add('email-modal--visible');
            emailState = true
            }




      let addErrors = () => {
        document.getElementsByClassName('email-modal-form--error')[0].classList.add('email-modal-form--error--active')
        document.getElementsByClassName('email-modal__error-message')[0].classList.add('email-modal__error-message--active')
      }

      let removeErrors = () => {
        document.getElementsByClassName('email-modal-form--error')[0].classList.remove('email-modal-form--error--active')
        document.getElementsByClassName('email-modal__error-message')[0].classList.remove('email-modal__error-message--active')
      }

      let showThankMessage = () => {
          thankContainer.classList.add('email-thank--success')
      }


      emailInput.addEventListener('click', () => {
        removeErrors()
      })


    emailButton.addEventListener('click', () => {
        if(emailIsValid(emailInput.value)) {
            showThankMessage()
            
        } else {
        addErrors()
        }
        
       
    }) 

   
    }


    closeButton.addEventListener('click', () => {
        closeModal()
    })
    



        document.body.addEventListener('mouseleave', () => {
            showModal()
           });
           console.log(document)
        }

