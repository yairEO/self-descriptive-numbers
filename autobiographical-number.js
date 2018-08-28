function createNumber(N){
    var result = Array.from({length:N}, () => Math.floor(Math.random() * 10)),
        memory = [],
        count;

    function countInArray(array, value){
        return array.reduce((a, b, idx) => a + (b === value && idx != value), 0);
    }

    for( let i = 0; i < result.length; i++ ){
        count = countInArray(result, i);

        if( count > 9 )
            return NaN;

        // if the digit on index [i] should change, then update the result
        if( result[i] != count )
            result[i] = count;

        // if reached the end of the iteration
        if( i == result.length-1 && !memory.includes( result.join('') ) ){
            i = -1;
            memory.push( result.join('') );
        }
    }

    return +(result.join(''));
}