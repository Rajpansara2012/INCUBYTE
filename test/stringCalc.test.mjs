import { expect } from 'chai';
import { add } from '../src/stringCalc.js';

describe('String Calculator', () => {
    it('should return 0 for an empty string', () => {
        expect(add('')).to.equal(0);
    });
    it('should return number for an single digit string', () => {
        expect(add('1')).to.equal(1);
    });
    it('should return sum of number for an two digit string', () => {
        expect(add('10,20')).to.equal(30);
    });
    it('should return sum of number for an multi digit string', () => {
        expect(add('10,20,30')).to.equal(60);
    });
    it('should return sum of number for an multi digit string with new line', () => {
        expect(add('1\n2,3')).to.equal(6);
    });
});