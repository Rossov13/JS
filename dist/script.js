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
// var a = +(prompt('write the first number ') as string);
// var n = +(prompt('write the second number') as string);
// var sum = 0;
// while(a<=n){
//     sum+=a;  
//     a++;  
//  }
// alert(sum)
// var theFirstNumber  = +(prompt('write the first number') as string);
// var theSecondNumber = +(prompt('write the second number') as string);
// while  (theFirstNumber != theSecondNumber) {
//     if (theFirstNumber > theSecondNumber)  {
//     theFirstNumber = theFirstNumber - theSecondNumber;
//     }
//     else {
//     theSecondNumber = theSecondNumber - theFirstNumber;
//     }
//   }
// alert(' ' + theSecondNumber + ' ')
var divNumb = +prompt('write the number');
for (i = 1; i < -divNumb; i++) {
    if (divNumb % 1 == 0) {
        alert('' + i + '');
    }
    else {
        continue;
    }
}
// const days ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// currentdays = 0
// while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
//     currDay = (currDay + 1) % days.length;
//   }
