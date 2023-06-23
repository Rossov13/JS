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
// Modul 1 3 Week homework
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
// let number_to_divide = +(prompt ("write the number")as string)
// for (let  i = 1 ; i <= number_to_divide ; i ++) {
//   if (number_to_divide % i == 0) {
//     document.write (' '+i+ ' ') 
//   }
//   else {
//     continue;
//   }
// }
// const days = ['Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let currDay = 0;
// while (confirm(`${days[currDay]}. do you want to see the next day?`)) {
//   currDay = (currDay + 1) % days.length;
// }
// let a = 0
// let multiplier  = 2
// let multiplier1 = 1
// for (multiplier = 2; multiplier <=9; multiplier++ ) {
//     for (multiplier1 = 1; multiplier1<=10; multiplier1 ++) {
//     a = multiplier*multiplier1
//     alert (' ' + a + ' ')
//     }
//     }
// let numb1 = +(prompt ("write the number")as string) 
// let numbDig = 0
// {if (numb1 == 0) alert (1)};
// while (numb1 > 1) {
//   numb1 /= 10
//   numbDig ++
// }
// alert (numbDig)   
// let numberA = 0;
// let numberB = 0;
// let result = true;
// let action_sign = "";
// do {
//   numberA = +(prompt("Write the first number: ") as string);
//   numberB = +(prompt("Write the second numbeк: ") as string);
//   action_sign = (prompt("Write the sign (*, /, + либо -): ")as string);
//   switch (action_sign) {
//     case "+":
//       alert(
//         `${numberA} ${action_sign} ${numberB} = ${numberA + numberB}`
//       );
//       break;
//     case "-":
//       alert(
//         `${numberA} ${action_sign} ${numberB} = ${numberA - numberB}`
//       );
//       break;
//     case "*":
//       alert(
//         `${numberA} ${action_sign} ${numberB} = ${numberA * numberB}`
//       );
//       break;
//     case "/":
//       alert(
//         `${numberA} ${action_sign} ${numberB} = ${numberA / numberB}`
//       );
//       break;
//     default:
//       alert(`Вы не ввели знак математической операции!`);
//       break;
//   }
//   result = confirm("Хотите выполнить еще одну математическую операцию?");
// } while (result == true);
// let base_number = Math.abs(
//     Math.trunc(+(prompt("Write the number for transformation: ")as string))
//   );
//   let jump = Math.abs(
//     Math.trunc(
//       +(prompt("Write how far it should be moved: ") as string)
//     )
//   );
//   let array = [];
//   let new_base_number = base_number;
//   while (base_number > 0) {
//     array.unshift(base_number % 10);
//     base_number = Math.trunc(base_number / 10);
//   } 
//   let new_jump = jump;
//   jump = jump % array.length; 
//   let arrJumpLeft_L =  [];
//   let arrJumpLeft_R =  [];
//   let arrJumpRight_L = [];
//   let arrJumpRight_R = [];
//   for (let i = 0; i < array.length; i++) {
//     if (i < jump) {
//       arrJumpLeft_L[i] = array[i];
//     } else {
//       arrJumpLeft_R[i] = array[i];
//     }
//     if (i < array.length - jump) {
//       arrJumpRight_L[i] = array[i];
//     } else {
//       arrJumpRight_R[i] = array[i];
//     }
//   }
//   alert(
//     `"${new_base_number}" ${new_jump}` +
//       arrJumpRight_R.concat(arrJumpRight_L).join("")
//   ); 
//   alert(
//     ` "${new_base_number}" ${new_jump} ` +
//       arrJumpLeft_R.concat(arrJumpLeft_L).join("")
//   )
// let N = 0;
// do{
//     N = Math.trunc(
//         +prompt('write the number in the range from 0 to 100') 
//     );
// } while (N < 0 || N > 0);
// let counter = 0; 
// let low = 0; 
// let middle = 0; 
// let high = 100; 
// let condition = "";
// while (low <= high) {
//     middle= Math.trunc((low + high) / 2);
//     condition = prompt(
//         `Have you guessed the number ${middle}? please write without quotation "=" if it is right. In other way please write withput quotation "<" if it is less or ">" if it is more!`
//     );
//     if (condition != "=" && condition != "<" && condition != ">") {
//         alert(
//           "You are writing non-valid numbers"
//         );
//         continue;
// }
// if (
//     (condition != "=" && middle == N) ||
//     (condition == "<" && middle < N) ||
//     (condition == ">" && middle > N) ||
//     (condition == "=" && middle != N)
//   ) {
//     alert(
//       `Sign "${condition}" is invalid! Try again!`
//     );
//     continue;
//   }
//   if (condition == ">") {
//     low = middle + 1;
//   } else if (condition == "<") {
//     high = middle - 1;
//   } else {
//     low = high + 1
//   }
//   counter++;
// }
// alert(`So, for ${counter} attempts we've got, that your number is ${middle}!`
// );
// let N = 0;
//   do {
//     N = Math.trunc(
//       +prompt("Введите целое число в диапазоне от 0 до 100 включительно: ")
//     );
//   } while (N < 0 || N > 100);
//   alert(`Итак, будем играться с числом ${N}.`);
//   let counter = 0; 
//   let low = 0; 
//   let middle = 0; 
//   let high = 100; 
//   let condition = ""; 
//   while (low <= high) {
//     middle = Math.trunc((low + high) / 2);
//     condition = prompt(
//       `Вы загадали число ${middle}? Введите без кавычек "=", если это так. В противном случае, если искомое число меньше, введите "<", либо же ">", если оно больше. Опять же, без кавычек.`
//     );
//     if (condition == ">") {
//       low = middle + 1;
//     } else if (condition == "<") {
//       high = middle - 1;
//     } else {
//       low = high + 1;
//     }
//     counter++;
//   }
//   alert(
//     `Итак, за ${counter} попыток бинарным поиском мы установили, что вы загадали число ${middle}!`
//   );
// }
// let n = 0;
// let positive_number = 0;
// let negative_number = 0;
// let null_number = 0;
// let even_number = 0;
// let odd_number = 0;
// for (let i = 0; i < 10; i++) {
//   n = +prompt("Введите число: ");
//   if (n > 0) {
//     positive_number += 1;
//   } else if (n < 0) {
//     negative_number += 1;
//   } else {
//     null_number += 1;
//   }
//   !(n % 2) ? (even_number += 1) : (odd_number += 1);
// }
// alert(
//   `Из 10 введеных вами чисел ${positive_number} положительных, ${negative_number} отрицательных, ${null_number} равных нулю, ${even_number} четных и ${odd_number} нечетных.`
// );
// }
// Homework 3
// let a = +(prompt('write how many times the # should be displayed')as string);
// let b = 1;
// while (b <= a) {
//     b += 1;
//     alert('#');
// }
// task 2. Пользователь ввел число, а на экран вывелись все числа
// от введенного до 0
// let a = +(prompt('write the number')as string);
// while (a >= 0) {
//     document.write('' + a + '');
//     alert(a);
//     a--;
// }
// task 3.Запросить число и степень. Возвести число в указанную
// степень и вывести результат.
// let a = +(prompt('write the number')as string);
// let b = +(prompt('write the degree')as string);
// alert(a**b)
// task 4. Запросить 2 числа и найти все общие делители.?????
// let a = +(prompt('write the first number')as string);
// let b = +(prompt('write the second number')as string);
// task 5. Посчитать факториал введенного пользователем числа.
// let n = +(prompt('write the number')as string);
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }
//   alert( factorial(n) );
// task 6. Предлагать пользователю решить пример 2 + 2 * 2 до тех
// пор, пока он не решит его правильно.
// do {
//   let a = +(prompt('write the answer of the 2*2')as string);
// } while (a != 4);
// alert(a)
// task 7. Делить число 1000 на 2 до тех пор, пока не получится число
// меньше 50. Вывести это число и сколько делений произвели.
// let a = 1000;
// let n=0;
//     while(a >= 50){
//         a = a/2;
//         n++;
//     }
// alert(n)
// let a = 1000, 
// let n = 0;
// let b = 0;
// while(a >= 50){
//     a = a/2;
//   n++;
// }
// alert("Итераций: " + n +", получилось число " + b);
// Modul 1 week 4 Homework
// Task 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое
// больше, чем второе; и 0 – если числа равны.
// function compareTwoNumbers ( a, b ) {
//     if (a > b) {
//     return 1;
//     } 
//     else if ( a < b) {
//     return -1;
//     } 
//     else if ( a == b) {
//     return 0;
//     } 
//     else 
//     return 'you have made a mistake during the writing of the Number';
// }
// let theFirstNumber =  +(prompt('write the first number')as string);
// let theSecondNumber = +(prompt('write the second number')as string);
// alert (compareTwoNumbers( theFirstNumber, theSecondNumber ));
// Task 2. Написать функцию, которая вычисляет факториал переданного ей числа.
// let n =  +(prompt('write the number')as string);
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }
//   alert( factorial(n) );
// Task 3. Написать функцию, которая принимает три отдельные 
// цифры и превращает их в одно число. Например: цифры 
// 1, 4, 9 превратятся в число 149.
// let mark1 =  +(prompt('write the number'));
// let mark2 =  +(prompt('write the second'));
// let mark3 =  +(prompt('write the third'));
// function sumOfTheNumbers(a, b, c) {
//     if (a != 0) {
//         var num1 = String(a);
//         var num2 = String(b);
//         var num3 = String(c);
//         return num1 + num2 + num3;
//     }
//     else if (b != 0) {
//         var num1 = String(a);
//         var num2 = String(b);
//         var num3 = String(c);
//         return num2 + num3 + num1;
//     }
//     else if (c != 0) {
//         var num1 = String(a);
//         var num2 = String(b);
//         var num3 = String(c);
//         return num3 + num1 + num2;
//     }
//     else {
//         return a;
//     }
// }
// alert (sumOfTheNumbers(mark1,mark2,mark3))
// 4. Написать функцию, которая принимает длину и ширину
// прямоугольника и вычисляет его площадь. Если в функцию
// передали 1 параметр, то она вычисляет площадь квадрата.
// let a = +(prompt('write the side1'));
// let b = +(prompt('write the side2'));
// function areaOfTheRectangular (a,b) {
//     if (a == 0) {
//         return 'Площадь квадрата: ' + b * b;
//     }
//     else if (b == 0) {
//         return 'Площадь квадрата: ' + a * a;
//     }
//     else {
//         return 'Площадь прямоугольника: ' + a * b;
//     }
// }
// alert (areaOfTheRectangular(a,b))
// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это
// число, равное сумме всех своих собственных делителей.
// let perfectNumber = +prompt("write the number for defining of the perfectness of the number");
// function perfect_number(n) {
//     var n1 = 0;
//     for (var i = 1; i < n; i++) {
//         if (n % i == 0) {
//             n1 = n1 + i;
//         }
//     }
//     if (n1 == n) {
//         return 'ваше число совершенно';
//     }
//     else {
//         return 'ваше число не является совершенным';
//     }
// }
// alert(perfect_number(perfectNumber));
