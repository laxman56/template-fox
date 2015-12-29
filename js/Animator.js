function Animator(element) {
	this.el = element;
	var that = this;
	var current;
	var intervalId;
	this.animate = function(cssProperty, value, duration) {
		var style = window.getComputedStyle(element);
		var initial = style.getPropertyValue(cssProperty);
		console.log(initial);
		initial = parseInt(initial);
		
		var step = value / (duration / 50);
		var counter=0;
		intervalId = setInterval(function() {
			counter++;
			// console.log(counter);
			current = step * counter;
			// console.log(current);
			// element.innerHTML = current;
			element.style[cssProperty] = current+initial + 'px';
			if (counter >= duration/50){
				clearInterval(intervalId);
			}
		
		}, 50);


	}
 }