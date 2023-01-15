const replaceComparisionStrings = (queryString) => {
	return queryString.replace(/\b(gte|gt|lte|lt)\b/g, (str) => `$${str}`);
};

const filterResponse = (obj, ...responseToBeSent) => {
	const result = {};
	responseToBeSent.forEach((item) => {
		result[item] = obj[item];
	});
	return result;
};

const filterOutCities = (bank) => {
	const resultArr = bank.reduce((acc, item) => {
		if (!acc.includes(item.CITY)) {
			acc.push(item.CITY);
		}
		return acc;
	}, []);

	return resultArr;
};

const filterOutAllStates = (bank) => {
	const resultArr = bank.reduce((acc, item) => {
		if (!acc.includes(item.STATE)) {
			acc.push(item.STATE);
		}
		return acc;
	}, []);

	return resultArr;
};

const filterOutStates = (bank) => {
	const result = bank.reduce((acc, item) => {
		if (!acc.includes(item.STATE)) {
			acc.push(item.STATE);
		}
		return acc;
	}, []);

	return result;
};

const filterOutBranch = (bank) => {
	const result = bank.reduce((acc, item) => {
		if (!acc.includes(item.BRANCH)) {
			acc.push(item.BRANCH);
		}
		return acc;
	}, []);

	return result;
};
export {
	replaceComparisionStrings,
	filterResponse,
	filterOutCities,
	filterOutStates,
	filterOutBranch,
	filterOutAllStates,
};
