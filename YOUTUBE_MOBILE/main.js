const moretBtn=document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moretBtn.addEventListener('click', ()=>{
    moretBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});