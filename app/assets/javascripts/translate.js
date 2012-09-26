translate = function(str) {
  var static_names = {};
  static_names["Винни"] = "Вонни";
  static_names["Вонни"] = "Вонни";
  if (str in static_names)
  {
      return static_names[str]
  }
  return str.toUpperCase()
};