// bài 1
let i = 10;
let f = 20.5;
let b = true;
let s = 'Hà Nội';

document.getElementById("result").innerHTML=('i = ' + i);
document.getElementById("result").innerHTML=('<br/>');
document.getElementById("result").innerHTML=('f = ' + f);
document.getElementById("result").innerHTML=('<br/>');
document.getElementById("result").innerHTML=('b = ' + b);
document.getElementById("result").innerHTML=('<br/>');
document.getElementById("result").innerHTML=('s = ' + s);

// Bài 2
let width = 20;

let height = 10;
let area = width * height;
document.getElementById("result").innerHTML=('Area = ' + area);

// bài 3
function myFunction() {
  let person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}