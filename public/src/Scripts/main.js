var btnRight = document.querySelector('.slider__btn--right');
var btnLeft = document.querySelector('.slider__btn--left');
var strip = document.querySelector('.slider__img');
var slider = document.querySelector('.slider__strip');
var posX = 0;
var width = slider.offsetWidth;
var quality = 0;


function handleBtnNextClick () {
    
    console.log(quality);
   
    strip.setAttribute('src', './Images/back' +  quality + '.png');
    if(quality==2){
        quality=0;
    }

    quality++;

    btnRight.addEventListener('click', handleBtnNextClick);
}

function handleBtnPrevClick () {
    console.log(quality);
    quality--;
    strip.setAttribute('src', './Images/back' +  quality + '.png');
    if(quality==0){
        quality=2;
    }

    btnLeft.addEventListener('click', handleBtnPrevClick);

   
}
handleBtnNextClick();
handleBtnPrevClick ();



//setTimeout(handleBtnNextClick, 3000); // una vez
//setInterval(handleBtnNextClick, 3000); // varias veces
//handleBtnNextClick();


