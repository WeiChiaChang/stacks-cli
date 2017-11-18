const should = require('should');
const options = {
  userAgent: 'Wappalyzer',
  maxWait: 8000,
  debug: false
};
const wappalyzer = require('wappalyzer')(options);

describe('#wappalyzer', () => {
  it('should return data without null or empty', done => {
    wappalyzer.analyze('https://github.com')
    .then(json => {
      (json.length < 0).should.be.true;
    })
    .catch(error => {
      console.error(error);
    });
    done()
  })
})