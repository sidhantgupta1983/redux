const init = 0;

const handleMyCounter = (state = init, action) => {
    switch (action.type){
        case "INCREASE":  // case 'must be same' form the action file
            return state + 1;

        case "DECREASE":
            return state - 1;

        default:
            return state;
    }
};

export default handleMyCounter;