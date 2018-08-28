function createNumber(N){
	var result = Array(N).fill(0),
        count;

	function countInArray(array, value){
		return array.reduce((a, b, idx) => a + (b === value && idx != value), 0);
	}

	for( let i = 0; i < result.length; i++ ){
		count = countInArray(result, i);

		// if the digit on index [i] should change, then update the result
		if( result[i] != count ){
			result[i] = count;
			if( i == result.length-1 ) // if last item changed, restart the loop
				i = -1;
		}
	}

	return result;
}