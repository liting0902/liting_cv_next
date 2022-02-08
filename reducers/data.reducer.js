const dataReducer = (state, action) => {
	switch (action.type) {
		case "DATA":
			const newState = action.data;
			return newState;
		default:
			return state;
	}
};
export default dataReducer;
