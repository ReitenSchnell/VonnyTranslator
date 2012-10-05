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

  it('should translate sentences with punctuation', function(){
      translate("Винни, Пятачок").should.equal("Вонни, Потачок");
      translate("потачок и пятачок.").should.equal("Потачок и Потачок.");
      translate("Сова, поехали на курорт").should.equal("Своа, пехли на крорт");
  });

    it('should remove all vowels', function(){
        translate("Сова, я тебе говорю, поехали на курорт").should.equal("Своа, я тб гвр, пехли на крорт");
        translate("Ты принес?").should.equal("т прнс?");
    });
});

describe('isVowel', function() {
    it('should recognise vowels', function() {
        isVowel('а').should.be.true;
        isVowel('э').should.be.true;
    });
    it('should not recognise nonvowels', function() {
        isVowel('б').should.be.false;
        isVowel('ц').should.be.false;
        isVowel(',').should.be.false;
    });
});

describe('isConsonant', function() {
    it('should recognise consonants', function() {
        isConsonant('б').should.be.true;
        isConsonant('ц').should.be.true;
    });
    it('should not recognise non punctuation marks', function() {
        isConsonant(',').should.be.false;
        isConsonant('а').should.be.false;
    });
});
