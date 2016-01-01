function Slider(){
	var resolution = new Resolution();
  var width = resolution.setWindowHeight();

  var slider = document.getElementsByClassName("slider-long")[0];
  var sliderLong = slider.children[0];
  var slides = sliderLong.children;

  slider.style.width=(100*slides.length)+'%';

     // var screenHeight=window.innerHeight;

     // sliderWrapper.style.height=screenHeight+'px';
  

  var percent=100/slides.length +'%';
       
  slides[0].style.width=percent;
  slides[1].style.width=percent;
  slides[2].style.width=percent;

  var i=0;
  var animator=new Animator(slider);
  function move(){ 
    if(i>slides.length-2) i=0;
    animator.animate(i,-5);
    i++;
    
  }
  var id=setInterval(move,3000);

  this.moveLeft = function(){
    console.log('left');
    if(i==0)
      i=slides.length-1; 

    clearInterval(id);

    if(animator.animation==true){

      animator.stop();
      animator.finish(5);

    }

    else{
      animator.animate(i,5);
    }

    i=i-1;
    id= setInterval(move,3000);
    
  }

  this.moveRight = function(){
    console.log('right');
     
    if(i==slides.length-1) i=0;
    clearInterval(id);

    if(animator.animation==true){ 
      animator.stop();
      animator.finish(-5);
      animator.animate(i,-5);
    }

    else
      animator.animate(i,-5);

    id= setInterval(move,3000);

    i=i+1;  
    
  }

}