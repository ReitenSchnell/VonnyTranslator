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
                        "я" : "я" };
  var words = str.toLowerCase().split(' ');
  for (var i = 0; i < words.length; i++)
  {
      var word = words[i];
      var wordLen = word.length;
      var lastChar = word[wordLen - 1];
      if (!isConsonant(lastChar) && !isVowel(lastChar))
      {
         word = word.substr(0,wordLen - 1)
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
                  if (j == 0 ||  (j == wordLen-2 && isVowel(word[wordLen -1])) || (j == wordLen-1 && isVowel(word[wordLen - 2])))
                  {
                      newWord = newWord.concat(word[j]);
                  }
              }
          }
          word = newWord;
      }
      words[i] =  word + lastChar;
  }
  return words.join(' ')
};

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