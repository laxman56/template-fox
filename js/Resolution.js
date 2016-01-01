function Resolution(){
	var width = window.innerWidth;
	var height = window.innerHeight;
 	var head = document.getElementById('menuHead');
	
	console.log(height,width);
	this.setWindowHeight = function(){
		var slideWrapper = document.getElementById('slideWrapper');
		var imageWidth = document.getElementsByClassName('slider-image');

		slideWrapper.style.height = height +'px';
	}

	//hides the navigation while scrolling down the slider
	window.addEventListener('scroll', function(){
		var posY = window.scrollY;
    
		if(posY >= height){
		 head.style.display = 'none';

		}

    else
     head.style.display = 'block';

	});
}