// Given three numbers a, b (a ≤ b) and num. Create an array of evenly spaced numbers by the given num length over the specified interval (from a to b).

// Solution

function evenlySpaced(arr, length){
  if(length === 1){
    return [arr[0]];
  }
  else{
    let summable = (arr[1] - arr[0]) / (length - 1);
    for (let i = 1; i < length; i++){
      arr[i] = arr[i - 1] + summable;
    }
    return arr;
  }
}
console.log(evenlySpaced([1, 5], 1))
console.log(evenlySpaced([10, 100], 3))
console.log(evenlySpaced([1, 5], 6))


// Հ.Գ. 19-րդ տողի console.log(evenlySpaced([1, 5], 6))-ը լոգ անելուց մենք տեսնում ենք, որ array-ի 3-րդ ինդեքսը տպում է հետևյալ արժեքը՝ 3.4000000000000004, ոչ թե մաքուր 3.4:
// Իրականում կարող եմ կոդը գրել հետևյալ կերպ, որտեղ array-ի բոլոր ինդեքսները կունենան ամբողջ արժեք՝

function evenlySpaced(arr, length){
  if(length === 1){
    return arr = [arr[0]];
  }
  else{
    let summable = (arr[1] - arr[0]) / (length - 1);
    for (let i = 1; i < length; i++){
      arr[i] = +(arr[i - 1] + summable).toFixed(1);
    }
    return arr;
  }
}
console.log(evenlySpaced([1, 5], 6))

// Այստեղ 32-րդ տողում օգտագործեցի +.toFixed(1) մեթոդը և արդյունքն այն է, ինչ տնայինում պահանջվում է: Բայց նման մեթոդ կիրառելիս կբախվենք մեկ այլ խնդրի, որովհետև եթե օրինակի համար 
// toFixed մեթոդ կիրառելով ուզենանք լուծել այս array-ը՝ console.log(evenlySpaced([1, 5], 10)), ապա կտեսնենք որ կլորացումների հետևանքով array-ի վերջին ինդեքսը ոչ թե
// սպասված 5-ն է ստացվելու, այլ վերջին item-ը կլինի 4.6՝ array-ի յուրաքանյչուր item-ի արժեքի կրճատման հետևանքով:
// Դրա համար խնդրի լուծման ամենաօպտիմալ տարբերակը կարծում եմ առաջին օրինակն է՝ առանց toFixed մեթոդի:
// Կամ անհրաժեշտության դեպքում կարող ենք toFixed օգտագործել միայն 3-րդ ինդեքսի վրա (մեկ այլ խնդրի դեպքում՝ համապատասխան կլորացման կարիք ունեցող ինդեքսի վրա) և +.toFixed(1) 
// այսուհետ կկիրառենք միայն էլեմենտի վրա, որը լոգ անելուց հետո կտեսնենք որ դրա վրա toFixed-ի կարիքն կա: Այսինքն, էսպես՝


function evenlySpaced(arr, length){
  if(length === 1){
    return arr = [arr[0]];
  }
  else{
    let summable = (arr[1] - arr[0]) / (length - 1);
    for (let i = 1; i < length; i++){
      arr[i] = arr[i - 1] + summable;
    }
    arr[3] = +arr[3].toFixed(1) // այս տողը
    return arr;
  }
}
console.log(evenlySpaced([1, 5], 6))

// Վերջ, կներեք երկար-բարակ գրելուս համար :D


// Given an array of numbers. Find the index of the second maximum element.

// Solution

function getSecondMaximum(arr){
  let arrayForSecondMaximumElement = arr.slice().sort((a, b) => a - b); //մի քիչ երկար անուն ա, բայց ոչինչ, կարևորը իմաստն ա :D 
  let maximumElement = arrayForSecondMaximumElement[arrayForSecondMaximumElement.length - 2]; //բնական է, որ երկրորդ մաքսիմումը միշտ կլինի array-ի նախավերջին էլեմենտը
  return arr.indexOf(maximumElement);
}
console.log(getSecondMaximum([23,  -98, 0, -456, 12, 8]))
console.log(getSecondMaximum([-60, 2, 43, -18, 5, -19, 36, 7, 56 ]))


// Given an array of numbers, padding amount and repeat count.Pad the array in the following way:
// the padding amount specifies how many elements should be taken from the array edges, the repeat amount specifies how many times the pad should be repeated.
// Also, you should check that  padding amount <= length of array.

// Solution

function paddingAndRepeating(arr, padAmount, repeat){
  if(arr.length < padAmount){
    return 'Invalid padding amount'
  }
  let unshiftItems = arr.slice(0, padAmount);
  let pushingItems = arr.slice(arr.length - padAmount, arr.length);
  for(let i = 1; i <= repeat; i++){
    arr.unshift(unshiftItems);
    arr.push(pushingItems);
  }
  return arr.flat();
}
console.log(paddingAndRepeating([1, 2, 3, 4], 1, 3))
console.log(paddingAndRepeating([1, 2, 3, 4], 2, 1))
console.log(paddingAndRepeating([1], 1, 3))
console.log(paddingAndRepeating([1], 2, 3))

// Write a function which receives an array and a number as arguments and returns a new array from the elements of the given array which are larger than the given number.

// Solution

function getMax(arr, digit){
  let getMax = arr.filter(item => item > digit);
  if(getMax.length){
    return getMax
  }
  else{
    return 'Such values do not exist.'
  }
}
console.log(getMax([10, 25, 16, -5, 30, 15, 24] , 16))
console.log(getMax([1, 1, 2, -3, 0, 8, 4, 0], 9))


// Write a function, which receives two numbers as arguments and finds all numbers between them such that each digit of the number is even.
// The numbers obtained should be printed in a comma-separated sequence on a single line.

// Solution

function getOllEvens(number1, number2){
  number1 = Math.min(number1, number2);
  number2 = Math.max(number1, number2);
  let newArr = [];
  for(let i = number1; i <= number2; i++){
    let newNumber = i;
    let eachDigit;
    for(let j = 0; j < String(i).length; j++){
      eachDigit = newNumber % 10;
      newNumber = (newNumber - eachDigit) / 10;
      if(eachDigit % 2 !== 0){
        break;
      }
    }
    if(eachDigit % 2 === 0){
      newArr.push(i);
    }
  }
  if(!newArr.length){
    return 'Such numbers does not exist.'
  }
  return '' + newArr;
}
console.log(getOllEvens(19, 42))
console.log(getOllEvens(99, 199))