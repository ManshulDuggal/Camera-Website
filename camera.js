const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.image-wrapper');
const original = document.querySelector('.full-img');




previews.forEach( preview=> {
    preview.addEventListener('click',()=>{
        modal.classList.add("open");
        original.classList.add("open");

        const ImgSrc = this.src;
        console.log(this);
    })
});



modal.addEventListener('click',(event)=>{
console.log(event);
if(event.target.classList.contains('modal')){
    modal.classList.remove('open');
    original.classList.remove('open');
}
})