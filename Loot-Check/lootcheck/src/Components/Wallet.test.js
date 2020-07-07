import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
    const props = {balance :20 };
    const wallet = shallow(<Wallet {...props}/>)

    it('reners properly', () => {
        expect(wallet).toMatchSnapshot();
    });

    it('test the balance', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet Balance: 20');
    })
});