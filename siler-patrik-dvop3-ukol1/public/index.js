"use strict";

var array = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"];

function writeAll() {
  for (var _i = 0, _array = array; _i < _array.length; _i++) {
    var item = _array[_i];
    console.log(item);
  }

  console.log("");
}

writeAll();
array.reverse();
writeAll();
array.sort();
writeAll();
var car = {
  Brand: "Fiat",
  Model: "500",
  Year: "2009"
};
var Brand = car.Brand,
    Model = car.Model,
    Year = car.Year;
console.log(Brand, Model, Year);
console.log();
var number = Math.floor(Math.random() * 555);
console.log("N\xE1hodn\xE9 \u010D\xEDslo je: ".concat(number));