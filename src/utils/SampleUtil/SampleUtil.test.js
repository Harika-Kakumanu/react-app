import {add,sample,greater} from '.';

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

describe('sample test numbers',()=>{
    test('not of the given number',()=>{
        expect(sample(3)).not.toBe(3);
    });
    
    test('greater than the given number',()=>{
        expect(sample(3)).toBeGreaterThan(3);
    });
});

describe('greater of 3 numbers',()=>{
   test('largest of 3 numbers',()=>{
       expect(greater(111,2,30)).toBe(111);
   }) 
});


test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});


test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});