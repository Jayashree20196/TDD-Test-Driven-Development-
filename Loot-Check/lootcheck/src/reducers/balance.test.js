import * as constants from '../actions/constants';
import balanceReducer from './balance';

describe('Test the balance reducer', () => {
    const balance = 10;

    it('check the balance reducer', () => {
        expect(balanceReducer(undefined, {type : constants.SET_BALANCE, balance }))
        .toEqual(balance);
    })
})