var arrayTasks = {

	concat: function(array1,array2) {
		return array1.concat(array2);
	},

	insertAt: function(array, valueToAdd, index){
		array.splice( index, 0, valueToAdd );
		return array;
	},

	square: function(array) {
		var newArray = [];

		array.forEach(function(value) {
			newArray.push(value * value);
		})
		return newArray;
	},

	sum: function(array) {
		var total = 0;
		array.forEach(function(value) {
			total += value;
		})
		return total;
	},

	findDuplicates: function(array) {
		var duplicates = [];
		var i,j;
		loop = array.length - 1;

		for (i=0; i < loop; i++) {
			for(j=i+1; j < loop; j++) {
				if (array[i] === array[j]) {
					duplicates.push(array[i]);
				}
			}
		}
		return duplicates;
	},

	removeAndClone: function(array, valueToRemove) {
		var cloneArray = [];

		for(var i = 0; i < array.length; i++) {
			cloneArray[i] = array[i];
		}

		loop = cloneArray.length-1;

		for(var j = loop; j >= 0; j--) {

			if (cloneArray[j] === valueToRemove) {
				cloneArray.splice(j,1);
			}
		}
		return cloneArray;
}




	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
