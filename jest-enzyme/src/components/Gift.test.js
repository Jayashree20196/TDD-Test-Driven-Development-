import React from "react";
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift Component', () => {
    const mockRemove = jest.fn();
    const id = 1;
    const props = { gift:{ id }, removeGift: mockRemove};
    const gift = shallow(<Gift {...props}/>)

    it('renders correctly', () => {
        expect(gift).toMatchSnapshot();
    });

    it('initializes for present and person from state', () => {
        expect(gift.state()).toEqual({person: '', present: ''});
    });

    describe('for input the person name', () => {
        const person = 'uncle';

       beforeEach(() => {
            gift.find('.input-person').simulate('change', { target : {
                value : person
                }
            })
        })

        it('input the person name', () => {
            expect(gift.state().person).toEqual(person)
        })
    })

    describe('for input the present name', () => {
        const present = 'present';

        beforeEach(() => {
            gift.find('.input-present').simulate('change', {target : {
                value:present
            }})
        })

        it('input the present name', () => {
            expect(gift.state().present).toEqual(present)
        }) 
    });

    describe('remove the gift when clicked', () => {
        beforeEach(() => {
            gift.find('.btn-remove').simulate('click');
        })

        it('calls the removeGift callback', () => {
            expect(mockRemove).toHaveBeenCalledWith(id);
        })
    });
})