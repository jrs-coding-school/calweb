var expect = chai.expect;

describe('clock ticker', function() {
  context('when time moves forward', function() {

    it('1 should eq 1', function() {
      expect(one).to.eql(1);
    });
    it('randomColor should be a function',function(){
      expect(randomColor).to.not.eql(undefined);
      expect(typeof randomColor).to.eql("function");
    });
    it('randomColor should return a string',function(){
      var answer = randomColor();
      expect(typeof answer).to.eql('string');
      expect(answer.length).to.eql(7);
    });
    it('randomSingleGenerator', function(){
      var randos = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9','0'];
      expect(typeof randomSingleGenerator).to.eql('function');
      var answer = randomSingleGenerator();
      expect(randos.indexOf(answer)).to.not.eql(-1);
      expect(_.contains(randos,answer)).to.eql(true);
    });
    it('randomColor', function(){
      var answer = randomColor();
      expect(answer[0]).to.eql("#");
    });
    it('something that is keeping the time',function(){
      var date = getDate();
      expect(typeof date).to.eql("object");
    })
  });
})
