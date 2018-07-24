function transform(line) {
var values = line.split(',');
  if (values[0] == "Member_ID") return;
var obj = new Object();
obj.Member_ID = parseInt(values[0],10);
obj.First_Name = values[1];
obj.Last_Name = values[2];
obj.Gender = values[3];
obj.Age = parseInt(values[4],10);
obj.Height = values[5]+","+values[6];
obj.Weight = parseInt(values[7],10);
obj.Hours_Sleep = parseInt(values[8],10);
obj.Calories_Consumed = parseInt(values[9],10);
obj.Exercise_Calories_Burned = parseInt(values[10],10);
var parts = values[11].split("/");
obj.Date = parts[2]+"-"+parts[0]+"-"+parts[1];
var jsonString = JSON.stringify(obj);

return jsonString;
}
