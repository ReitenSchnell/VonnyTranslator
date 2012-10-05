translate = function(str) {
  var static_names = {  "винни" : "Вонни",
                        "вонни" : "Вонни",
                        "пятачок" : "Потачок",
                        "потачок" : "Потачок",
                        "сова" : "Своа",
                        "своа" : "Своа",
                        "курорт" : "крорт",
                        "поехали" : "пехли",
                        "и" : "и",
                        "на" : "на",
                        "я" : "я" };
  var words = str.toLowerCase().split(' ');
  for (var i = 0; i < words.length; i++)
  {
      var word = words[i];
      var lastChar = word[word.length - 1];
      if (!isConsonant(lastChar) && !isVowel(lastChar))
      {
         word = word.substr(0,word.length - 1)
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
          for (var j = 0; j < word.length; j++)
          {
              if (!isVowel(word[j]))
              {
                  newWord = newWord.concat(word[j]);
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
        var vowels = "аеёиоуэюяы";
        return vowels.indexOf(char) >= 0 ? true : false;
    }
}

isConsonant = function(char)
{
    if (char.length == 1)
    {
        var consonants = "бвгджзйклмнпрстфхцчшщьъ";
        return consonants.indexOf(char) >= 0 ? true : false;
    }
}