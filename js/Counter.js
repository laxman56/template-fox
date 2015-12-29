function Counter(){
	this.element = document.getElementsByClassName("counter");
	console.log(element);
	that = this;
	var maxValue = [];
	var counter = 0;
	var maxCount;
	var intervalId;


	this.startCounter = function(){
		var length = that.element.length;
		for(var i = 0; i < length; i++){
			maxValue.push(parseInt(that.element[i].innerHTML));
		}
		maxCount = Math.max(...maxValue);

		intervalId = setInterval(function(){
			for(var j = 0; j < length; j++){
				if(counter <= maxValue[j])
					element[j].innerHTML = counter;
			}
			counter = counter+10;
			// console.log(maxCount,counter);
			if( counter > maxCount )
				clearInterval(intervalId);
			console.log('exceded');
		},1);

	}





	window.addEventListener('scroll', function(){
		var posY = window.scrollY;
		if(posY >= 519){
			that.startCounter();
		}

	});
}

Counter();