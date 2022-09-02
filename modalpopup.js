const modal = document.querySelector('#modal')
const openModal = document.querySelectorAll('.open-button')
const closeModal = document.querySelector('.close-button')


//uncomment this code when ready to re-use for opening the modal
 openModal.forEach(button => {
     button.addEventListener('click', () => {
         modal.showModal();
     })
 })




//uncomment this code when ready to re-use for closing the modal
 closeModal.addEventListener('click', () => {
     modal.close();
 })

