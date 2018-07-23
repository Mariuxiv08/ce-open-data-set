function transform(line) {
var values = line.split(',');

var obj = new Object();
obj.Member_ID = values[0];
obj.First_Name = values[1];
obj.Last_Name = values[2];
obj.Gender = values[3];
obj.Age = values[4];
obj.Height = values[5];
obj.Weight = values[6];
obj.Hours_Sleep = values[7];
obj.Calories_Consumed = values[8];
obj.Exercise_Calories_Burned = values[9];
obj.Date = Date.parse(values[10]);
var jsonString = JSON.stringify(obj);

return jsonString;
}
