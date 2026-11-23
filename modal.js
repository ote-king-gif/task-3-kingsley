const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const overlay = document.getElementById('overlay');
const form = document.getElementById('contactForm');
const success = document.getElementById('success');
const doneBtn = document.getElementById('doneBtn');
const intro = document.getElementById('intro');

function openModal() {
  form.hidden = false;    
  success.hidden = true; 
  intro.hidden = false;   
  overlay.classList.remove('closing');
  overlay.hidden = false;
  document.body.style.overflow = 'hidden';
  form.querySelector('input').focus();
} 

function closeModal(){
    overlay.classList.add('closing');
    
     setTimeout(() => {
    overlay.hidden = true;
    success.hidden = true;
    overlay.classList.remove('closing');
    document.body.style.overflow = '';
    form.reset();
    openBtn.focus();
  }, 220);
}

openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  doneBtn.addEventListener('click', closeModal);


overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  form.hidden = true;
  intro.hidden = true;
  success.hidden = false;
   doneBtn.focus(); 
});

doneBtn.addEventListener('click', closeModal);