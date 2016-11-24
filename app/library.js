//Solution to Question 1 goes here

module.exports = {
	aritGeo: function aritGeo(array){
		var commonDiff = array[1] - array[0];
		var lastTermArith = array[0] + ( array.length -1) * commonDiff;
		var commonRatio = array[1] / array[0];
		var lastTermGeo = array[0] * Math.pow(commonRatio, array.length-1);
		
		if ( array[array.length - 1] == lastTermArith){
			return 'Arithmetic';
		}
		else if ( array[array.length - 1] == lastTermGeo){
			return 'Geometric';
		}
		else if ( array.length == 0){
			return 0;
		}
		else return -1;
	}

}