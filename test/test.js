const shuffle = require('../lib/shuffle');
const assert = require('assert');
const _ = require('lodash');

describe('shuffle', () => {
    describe('typeOf', () => {
        it('should be a function', () => {
            assert.equal('function', typeof (shuffle))
        });
    });
    describe('instance', () => {
        const s1 = new shuffle();
        it('should create a shuffle instance', () => {
            assert.equal('object', typeof (s1));
            assert.equal(s1 instanceof shuffle, true);
        });
        describe('numberOfGroups', () => {
            it('should be a function', () => {
                assert.equal('function', typeof (s1.numberOfGroups))
            });
            it('should return a number', () => {
                assert.equal('number', typeof(s1.numberOfGroups([''])))
            })
            it('should return number of groups needed to sort participants in groups of max. 7 people', () => {
                assert.equal(1, s1.numberOfGroups([1,2,3]))
                assert.equal(1, s1.numberOfGroups([1,2,3,4,5,6,7]))
                assert.equal(2, s1.numberOfGroups([1,2,3,4,5,6,7,8]))
            });
        });
        describe('fisherYates', () => {
            it('should be a function', () => {
                assert.equal('function', typeof (s1.fisherYates))
            });
            it('should return an object', () => {
                assert.equal('object', typeof(s1.fisherYates([1,2,3,4,5,6,7])))
            });
        });
        describe('distribute', () => {
            const arr = [1,2,3,4,5,6,7];
            const min = 0;
            const max = 4;
            it('should be a function', () => {
                assert.equal('function', typeof (s1.distribute))
            });
            it('should return an object', () => {
                assert.equal('object', typeof(s1.distribute(arr, min , max)))
            });
            it('should return an array of the specified length', () => {
                assert.equal(5, s1.distribute(arr, min , max).length)
            });
            it('should create a new array based on introduced parameters', () => {
                assert.equal(true, _.isEqual([1,2,3,4,5],s1.distribute(arr, min , max)))
            });
        });
    });
});