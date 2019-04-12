const assert = require('assert');
const findPrime = require('../helpers/findPrime');

describe('First Prime Number', function () {
  it("should return undefined when number doesn't exist in list or input is non valid", function () {
    assert.equal(findPrime("0"), undefined);
  });
  it('should return 277 when the value is 277', function () {
    assert.equal(findPrime("277"), "277");
  });
  it('should return 8753 when the value is 875', function () {
    assert.equal(findPrime("875"), "8753");
  });
});