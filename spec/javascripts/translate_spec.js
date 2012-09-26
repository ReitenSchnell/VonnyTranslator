//= require translate
describe('translate', function() {
  it('should return upper case', function() {
    translate("aaa").should.equal("AAA");
  });
  it('should return statically defined names', function() {
    translate("Винни").should.equal("Вонни");
    translate("Вонни").should.equal("Вонни");
  });
});
