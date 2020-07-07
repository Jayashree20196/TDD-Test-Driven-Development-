import * as constants from '../actions/constants';

const balanceReducer = (state = 0, actions) => {
    switch(actions.type) {
        case constants.SET_BALANCE: 
            return actions.balance;
        default:
            return state;
    }
}

export default balanceReducer;