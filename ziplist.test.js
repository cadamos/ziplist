/* eslint-env mocha, chai */
/* global zipList, zipListTheSimpleWay chai */

describe('zipLists', function () {
  const testArr1 = ['a', 'b', 'c'];
  const testArr2 = [1, 2, 3];
  describe('zipList()', function () {
    it('should deep equal the passed six element array', function () {
      chai.expect(zipList(testArr1, testArr2)).to.include.ordered.members(['a', 1, 'b', 2, 'c', 3]);
    });
    it('should return a single array with six elements', function () {
      chai.expect(zipList(testArr1, testArr2)).to.have.lengthOf(6);
    });
  });
  describe('zipListTheSimpleWay()', function () {
    it('should deep equal the passed six element array', function () {
      chai.expect(zipListTheSimpleWay(testArr1, testArr2)).to.include.ordered.members(['a', 1, 'b', 2, 'c', 3]);
    });
    it('should return a single array with six elements', function () {
      chai.expect(zipListTheSimpleWay(testArr1, testArr2)).to.have.lengthOf(6);
    });
  });
});
