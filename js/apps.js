const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages= document.querySelectorAll('.carousel-slide img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners
nextBtn.addEventListener('click' ,() => {
    if (counter>=carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click' ,() => {
    if (counter<=0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

function validation(){
    var name = document.myform.name.value;
    var email = document.myform.email.value;
    var address = document.myform.address.value;
      if(name=="" && email=="" && address ==""){
          document.getElementById("errormsg").innerHTML="Please input in all the fields";
          document.myform.focus();
          return false;
      }
      else if(name=="" ){
        document.getElementById("errormsg").innerHTML="Name is Required";
        document.myform.name.focus();
        return false;
      }
    
    else if(email==""){
        document.getElementById("errormsg").innerHTML="Email IS Required";
        document.myform.email.focus();
        return false;
      }
    
      else if(address==""){
          document.getElementById("errormsg").innerHTML="Address IS Required";
          document.myform.address.focus();
          return false;
        }
    return true;
    }
    

