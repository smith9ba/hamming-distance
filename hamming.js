var compute;

//This function computes the hamming distance between two strands of DNA
compute = function(strand1, strand2) {
	//Return our output variable
	//Default is identical strands
	//i.e. distnace = 0
	
	//If strands are unequal in length
	if (strand1.length !== strand2.length) {
		//Then show an error
		throw new Error ('DNA strands must be of equal length');
	};

	//Initialze output variable for the Hamming distance
	//It starts at zero, showing they are identical strands
	var distance = 0;

	for (var i = 0; i < strand1.length, i += 1) {
			if (strand1.charAt(i) !== strand2.charAt(i)) {
			dist += 1;
		}
	};

	return distance;
};

module.exports = {
	compute: compute
};