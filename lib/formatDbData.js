export default (jsonData) => {
	const dataObj = {};
	if (!jsonData) return;
	Object.entries(jsonData).map(([key, value]) => {
		Object.entries(value).forEach((content) => (value = content[1]));
		dataObj[`${key}`] = value;
	});
	return dataObj;
};
