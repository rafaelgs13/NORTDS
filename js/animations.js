
const sections=document.querySelectorAll('section');
const reveal=()=>{
 sections.forEach(s=>{
  if(s.getBoundingClientRect().top<window.innerHeight-100){
    s.style.opacity=1;
    s.style.transform='translateY(0)';
  }
 });
};
window.addEventListener('scroll',reveal);
window.addEventListener('load',reveal);
