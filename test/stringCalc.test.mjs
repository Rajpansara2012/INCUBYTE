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
    it('should return sum of number for an multi digit string with new line and delimiter', () => {
        expect(add('//;;\n1;;2;;3')).to.equal(6);
    });
    it('should not contain nagetive number in string', () => {
        expect(add('-1,2')).to.equal('negative numbers not allowed <-1>');
        expect(add('-1,-2')).to.equal('negative numbers not allowed <-1, -2>');
        expect(add('//[*][|]\nabc**-5|6***2')).to.equal('negative numbers not allowed <-5>');

    });
    it('should ignore number bigger than 1000', () => {
        expect(add('//;;\n1001;;2;;3')).to.equal(5);
        expect(add('//[*][|]\nabc**1005|6***2')).to.equal(8);
    });
    it('should return sum of number with multiple delimiter', () => {
        expect(add('//[*][%]\n1*2%3')).to.equal(6);
        expect(add('//[;][|]\n4;5|6')).to.equal(15);
        expect(add('//[;;][;;][|]\n4;;5|6')).to.equal(15);
        expect(add('//[*][|]\nabc**5|6***2')).to.equal(13);
    });
});