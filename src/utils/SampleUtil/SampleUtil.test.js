import {add} from '.';

describe('add tests',()=>{
    it('should return sum of two numbers',()=>{
                expect(add(1,2)).toBe(3);
                expect(add(-2,2)).toBe(0);
    });
    it('sholud not add two strings',()=>{
         expect(add("1",2)).toBe(null);
    });
    it('should only 2 numbers',()=>{
        expect(add(2,3,4)).toBe(add(2,3));
    })

});