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
// const hours = +(prompt('Введите часы') as string)
// const minutes = +(prompt('Введите минуты') as string)
// const timeInMinutes = hours*60 + minutes
// const timeInMinutesToNextDay = 24 * 60 - timeInMinutes
// const minutesToNextDay = timeInMinutesToNextDay%60
// const hoursToNextDay = (timeInMinutesToNextDay - minutesToNextDay)/60
// alert(`До следующего дня ${hoursToNextDay} часов и ${minutesToNextDay} минут`)
// const input = prompt('ведите число')
// const shift = +(prompt('write the number') as string);
// function min(a, b) {
//     return a < b ? a : b
//   }
// let a = +prompt('1')
// let b = +prompt('2')
// alert(min(a,b))
var t = +prompt('write the first number ');
var l = +prompt('write the second number');
var i = 0;
while (i > t && i < l) {
    alert(i);
    i++;
}
