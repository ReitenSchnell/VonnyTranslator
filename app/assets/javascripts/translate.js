translate = function(str) {
  var static_names = {  "винни" : "Вонни",
                        "вонни" : "Вонни",
                        "пятачок" : "Потачок",
                        "потачок" : "Потачок",
                        "сова" : "Своа",
                        "своа" : "Своа",
                        "курорт" : "крорт",
                        "поехали" : "пехли" };
  var words = str.toLowerCase().split(' ');
  for (var i = 0; i < words.length; i++)
  {
      if (words[i] in static_names)
        {
            words[i] = static_names[words[i]];
        }
  }
  return words.join(' ')
};