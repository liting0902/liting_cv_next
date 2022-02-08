const authReducer = (state, action) => {
	switch (action.type) {
		case "AUTHORIZATION":
			const newState = action.authInfo;
			return newState;
		default:
			throw new Error();
			return state;
	}
};

export default authReducer;
