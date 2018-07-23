function transform(line) {
var values = line.split(',');

var obj = new Object();
obj.Gender = values[0];
obj.Min_Age = values[1];
obj.Max_Age = values[2];
obj.Sedentary = values[3];
obj.Moderately_Active = values[4];
obj.Active = values[5];
var jsonString = JSON.stringify(obj);

return jsonString;
}
