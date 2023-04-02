const INITIAL_STATE: any = {
    coverstyle: {},
    gridstyle: {},
    gridspace: {},
    theme: {}
}


const changeDesign = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case "designStyle":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default changeDesign;