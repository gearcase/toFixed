var expect = require('chai').expect;


describe('toFixed', function () {

  var toFixed = require('../../');

  it('common', function () {
    expect(toFixed(5.56789, 2)).to.be.equal('5.57');
  });
});
