function Resolution(){
	var width = window.innerWidth;
	var height = window.innerHeight;
	this.setWindowHeight = function(){
		var slideWrapper = document.getElementById('slideWrapper');
		var imageWidth = document.getElementsByClassName('slider-image');
		slideWrapper.style.height = height;

		for(var i = 0; i <3; i++)
		imageWidth[i].style.width = width;
		return width;
	}
}