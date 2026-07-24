let current = 0;

const slides = document.querySelectorAll(".slide");

function showSlide(index){

slides.forEach(slide=>{
slide.style.display="none";
});

slides[index].style.display="block";

}

function changeSlide(step){

current += step;

if(current>=slides.length){
current=0;
}

if(current<0){
current=slides.length-1;
}

showSlide(current);

}

showSlide(current);

setInterval(()=>{
changeSlide(1);
},3000);
