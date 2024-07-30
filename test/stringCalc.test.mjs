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
});