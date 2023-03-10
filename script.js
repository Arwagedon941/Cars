const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon-fill');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '0.5s';
    }
    else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '0.5s';
    }
})


const form = document.querySelector('form');
  const passwordInput = document.querySelector('#password');
  const confirmInput = document.querySelector('#confirm_password');

  form.addEventListener('submit', (event) => {
    if (passwordInput.value !== confirmInput.value) {
      alert('Password not correct');
      event.preventDefault();
    }
  });
