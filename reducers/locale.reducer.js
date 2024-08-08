const localeReducer = (state="", action ) => {
    switch(action.type) {
        case "TRANSLATE":
            const newState = action.language;
            return newState ;
        default:
            return state ;
    }
}

export default localeReducer ; 