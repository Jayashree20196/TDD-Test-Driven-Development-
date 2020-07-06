import { max_number } from './index';

describe('test the `max_number` helper function', () => {
    describe('test for `0` in case', () => {
        it('gets the length as `0`', () => {
            expect(max_number(0)).toEqual(0);
        })
    });

    describe('test for list of numbers in case', () => {
        it('gets the length greater than `0`', () => {
            expect(max_number([1,2,3])).toEqual(3);
        })
    });
})
