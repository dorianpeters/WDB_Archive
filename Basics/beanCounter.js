function countBs (str) {
	let count = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] === 'B')
			count++;
	}
	return count;
} 

function countChar (str, letter) {
	let count = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] === letter)
			count++;
	}
	return count;
} 