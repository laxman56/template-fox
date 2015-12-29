function Counter(){
	this.element = document.getElementsByClassName("counter");
	var maxValue = [];
	var counter = 0;
	var maxCount;
	var intervalId;
  that = this;

	this.startCounter = function(){
		var length = that.element.length;

		for(var i = 0; i < length; i++){
			maxValue.push(parseInt(that.element[i].innerHTML));
		}

    /*Finding Maximum value upto which counter has to be increased*/
		maxCount = Math.max(...maxValue);

		intervalId = setInterval(function(){

			for(var j = 0; j < length; j++){
				if(counter <= maxValue[j])
					element[j].innerHTML = counter;
			}

			counter = counter+30;

			if( counter > maxCount )
				clearInterval(intervalId);
				
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