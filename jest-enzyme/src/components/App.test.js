import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const app = shallow(< App />);

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });
    
    it('tests to check empty `gifts` from `state`', () => {
        expect(app.state().gifts).toEqual([]);
    });
    
    describe('groups the same click of a button', () => {
        beforeEach(() => {
            app.find('.btn-app').simulate('click');
        })

        afterEach(() => {
            app.setState({gifts: []})
        })
        
        it('adds a button and checks the `gifts` value', () => {
            expect(app.state().gifts).toEqual([{
                id:1
            }])
        })
        
        it('creates a div whenever a new gift is added', () => {
            expect(app.find('.gift-list').children().length).toEqual(1);
        })
    })
})