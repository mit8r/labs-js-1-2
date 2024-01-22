// 1

const objectForarray = {
  a: 8,
  b: 9,
  c: 10,
  d: 11
}

const arr1 = [0, 1, 2, 3]
const arr2 = new Array(4, 5, 6, 7)
const arr3 = Array.from(Object.values(objectForarray))

console.log(arr3, 'lab 1')

// 2

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(arr[4], 'lab 2')

arr[4] = 666

console.log(arr[4], 'lab 2')

// 3

console.log(arr.length, 'lab 3')

// 4

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], 'lab 4')
}

for (const item of arr) {
  console.log(item, 'lab 4')
}

// 5

const concatedArr = arr1.concat(arr2)

console.log(concatedArr, 'lab 5')

// 6-7

const lastElem = concatedArr.pop()
const firstElem = concatedArr.shift()

console.log(concatedArr, lastElem, firstElem, 'lab 6-7')

// 8

concatedArr.unshift(666)

console.log(concatedArr, 'lab 8')

// 9

const currentDate = new Date()

console.log(currentDate.toLocaleDateString())

// 10

const monthsString = 'января, февраля, марта, апреля, майя, июня, июля, августа, сентября, октября, ноября, декабря'
const months = monthsString.split(', ')

console.log(`${currentDate.getDate()} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()} года`, '\\\\ lab 10')

// 11 

// Функция для получения псевдо-рандомного целочисленного числа
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const random1 = getRandomInt(0, 50)
const random2 = getRandomInt(0, 50)

console.log(random1, random2, random1 * random2, 'lab 11')