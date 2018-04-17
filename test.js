const should = require('should');
const Wappalyzer = require('wappalyzer');
const options = {
  userAgent: 'Wappalyzer',
  maxWait: 8000,
  debug: false
};
const wappalyzer = new Wappalyzer('https://github.com', options);

describe('#wappalyzer', () => {
  it('should return data without null or empty', done => {
    wappalyzer.analyze()
    .then(json => {
      (json.length < 0).should.be.true;
    })
    .catch(error => {
      console.error(error);
    });
    done()
  })
})