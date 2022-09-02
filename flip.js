//var card = document.querySelector('.card')

//card.addEventListener('click', function() {
 // card.classList.toggle('is-flipped');
  
//});

const card = document.querySelectorAll('.card');

card.forEach((card)=> {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  })
})