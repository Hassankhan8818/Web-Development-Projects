const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const regLink = document.querySelector('.register-link');
const btnlogin = document.querySelector('.btnlogin-popup');
const close = document.querySelector('.close-icon');
regLink.addEventListener('click',()=>{
  wrapper.classList.add('active')
});
loginLink.addEventListener('click',()=>{
  wrapper.classList.remove('active')
});
loginLink.addEventListener('click',()=>{
  wrapper.classList.remove('active')
});
btnlogin.addEventListener('click',()=>{
  wrapper.classList.add('active-popup')
});
close.addEventListener('click',()=>{
  wrapper.classList.remove('active-popup')
});