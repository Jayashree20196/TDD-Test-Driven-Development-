import * as constants from './constants';

export const setBalance = balance => {
    return balance = {
        type: constants.SET_BALANCE,
        balance
    }
}