import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(< App />);

it('renders correctly', () => {
    expect(app).toMatchSnapshot();
});

it('tests to check empty `gifts` from `state`', () => {
    expect(app.state().gifts).toEqual([]);
});

it('adds a button and checks the `gifts` value', () => {
    app.find('.btn-app').simulate('click');
    expect(app.state().gifts).toEqual([{
        id:1
    }])
})