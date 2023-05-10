// const x = +(prompt('введите число') as string)
// alert(Math.pow(x, 2))
// const a = +(prompt('введите число') as string);
// const b = +(prompt('введите число') as string);
// {
//     if (a && b) {
//     alert((a+b)/2)
//     } else{
//     alert('write the right number')
// }
// }
// const a = +(prompt('write the side lenght for the square') as string);
// alert(Math.pow(a, 2))
// const km = +(prompt('write the quantity of the km') as string);
// alert(km*0.621371)
// const q = +(prompt('write the number') as string);
// const b = +(prompt('write the number') as string);
// alert(
// `q+b=${q+b}
// q-b=${q-b}
// q*b=${q*b}
// q/b=${q/b}`)
// const a = +(prompt('write the number') as string);
// const b = +(prompt('write the number') as string);
// alert(-b/a)
// const number = +(prompt('write the number') as string);
// alert((number - number%10)/10%10)
// const number = +(prompt('write the number') as string);
// alert(number/10 + 250) 
var hours = +prompt('Введите часы');
var minutes = +prompt('Введите минуты');
var timeInMinutes = hours * 60 + minutes;
var timeInMinutesToNextDay = 24 * 60 - timeInMinutes;
var minutesToNextDay = timeInMinutesToNextDay % 60;
var hoursToNextDay = (timeInMinutesToNextDay - minutesToNextDay) / 60;
alert("\u0414\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0434\u043D\u044F " + hoursToNextDay + " \u0447\u0430\u0441\u043E\u0432 \u0438 " + minutesToNextDay + " \u043C\u0438\u043D\u0443\u0442");
// const input = prompt('ведите число')
// const shift = +(prompt('write the number') as string);
