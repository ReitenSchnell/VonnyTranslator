//= require translate
describe('translate', function() {
  it('should translate statically defined words', function() {
      translate("Винни").should.equal("Вонни");
      translate("Вонни").should.equal("Вонни");
      translate("вонни").should.equal("Вонни");
  });
  it('should translate sentences of statically defined words', function(){
      translate("Винни и Пятачок").should.equal("Вонни и Потачок");
      translate("потачок и пятачок").should.equal("Потачок и Потачок");
      translate("Сова поехали на курорт").should.equal("Своа пехли на крорт");
  });
});
