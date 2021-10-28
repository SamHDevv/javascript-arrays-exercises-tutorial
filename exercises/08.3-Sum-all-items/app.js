function sumTheElements(theArray){

var total = 0;

    for(let i = 0 ; i<theArray.length ; i++){
        let sumNum = theArray[i];
        total = sumNum + total;
    }

	return total;
}

sumTheElements([2,13,34,5])