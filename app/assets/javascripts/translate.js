translate = function(str) {
  var static_names = {  "винни" : "Вонни",
                        "вонни" : "Вонни",
                        "пятачок" : "Потачок",
                        "потачок" : "Потачок",
                        "кролик" : "Корлик",
                        "сова" : "Своа",
                        "своа" : "Своа",
                        "курорт" : "крорт",
                        "поехали" : "пехли",
                        "и" : "и",
                        "на" : "на",
                        "не" : "ен",
                        "пока" : "пка",
                        "меня" : "мн",
                        "я" : "я",
                        "печенько" : "пчнк",
                        "просто" : "прст"};
  var words = str.toLowerCase().split(' ');
  for (var i = 0; i < words.length; i++)
  {
      var word = words[i];
      var wordLen = word.length;
      var lastChar = word[wordLen - 1];
      if (!isConsonant(lastChar) && !isVowel(lastChar))
      {
         word = word.substr(0,wordLen - 1);
         wordLen = wordLen - 1
      }
      else
      {
         lastChar = ''
      }
      if (word in static_names)
      {
         word = static_names[word];
      }
      else
      {
          var newWord = '';
          for (var j = 0; j < wordLen; j++)
          {
              if (!isVowel(word[j]))
              {
                  newWord = newWord.concat(word[j]);
              }
              else
              {
                  if (j == 0
                      || (j == wordLen-2 && isVowel(word[wordLen -1]))
                      || (j == wordLen-1 && isVowel(word[wordLen - 2]))
                      || (j == wordLen - 1 && wordLen == 4)
                      || (j == wordLen - 1 && word[j] == 'о'))
                  {
                      newWord = newWord.concat(word[j]);
                  }
              }
          }
          if (newWord == "в" && i > 0)
          {
              newWord = '';
          }
          word = newWord;
      }
      words[i] =  word + lastChar;
  }
  return words.filter(isNotEmpty).join(' ')
};

function isNotEmpty(element) {
    return (element.length != 0);
}

isVowel = function(char)
{
    if (char.length == 1)
    {
        var vowels = "аеёиоуэюяыьъ";
        return vowels.indexOf(char) >= 0 ? true : false;
    }
}

isConsonant = function(char)
{
    if (char.length == 1)
    {
        var consonants = "бвгджзйклмнпрстфхцчшщ";
        return consonants.indexOf(char) >= 0 ? true : false;
    }
}