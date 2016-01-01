function Animator(element) {
	this.el = element;
  var that = this;
  var intervalId;
  var left;

  this.animation=false;
  
  //moves the main slider 
  this.animate = function(value,step){
    var counter = 0;

    that.animation=true;

    intervalId = setInterval(function(){
      
      counter++;
      left=counter*(step)+((-(value))*100);

      that.el.style.marginLeft =left+'%';

      if (counter >= 20){
        clearInterval(intervalId);
        that.animation=false;
      }

    }, 50);
  }
        
  // stops the animation in current position
  this.stop = function(){
    clearInterval(intervalId);
    that.animation=false;

  }
  
  // moves the current image to the initiall position
  this.finish = function(value){
    
    var interval = setInterval(function(){

    if(left%100==0)
      clearInterval(interval);
      
    else{
      left=left+value;
      that.el.style.left=left+'%';
    }

    },1);
  } 
 }