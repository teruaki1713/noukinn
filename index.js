

let num0 = 0;
const ike_max = 5000;
let ike = Math.floor(Math.random() * ike_max);
let car =  Math.floor(Math.random() * 1000);
const car_max = 1000;
let num = car_max-car;
if(ike-num < 0) { num0 = ike; }
if(ike-num >= 0) { num0 = num }
let number = ike-num0;

let rep = 0;

if(number > 0) {
    let num1 = Math.floor(number/1000);
    let num2 = number%1000;
    if(num2 > 0) {
        num1++;
    }
    rep = num1;
}

$("#p0").text(ike);
$("#p1").text(car);
$("#p2").text(num);
$("#p3").text(num0);
$("#p4").text(number);
$("#p5").text((car+num0));
$("#p6").text(rep);

$("#button").click(function () {
    location.reload();
});

