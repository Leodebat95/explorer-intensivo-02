// Questão 1 --------------------------------------------------------------------------------

const answerOne = console.log('Hello World!')


// Questão 2 --------------------------------------------------------------------------------

const sum = (numberOne, numberTwo) => {
  return numberOne + numberTwo
}

const answerTwo = sum(5, 7)
console.log(answerTwo)


// Questão 3 --------------------------------------------------------------------------------

const answerThree = 13

if(typeof answerThree === typeof Number()) {
  console.log('É um número')

} else {
  console.log('Não é um número')
}


// Questão 4 --------------------------------------------------------------------------------

const answerFour = "text"

if(typeof answerFour === typeof String()) {
  console.log('É uma string')

} else {
  console.log('Não é uma string')
}


// Questão 5 --------------------------------------------------------------------------------

const answerFive = true

if(typeof answerFive === typeof Boolean()) {
  console.log('É um booleano')

} else {
  console.log('Não é um booleano')
}


// Questão 6 --------------------------------------------------------------------------------

const sub = (numberOne, numberTwo) => {
  return numberOne - numberTwo
}

const answerSix = sub(5, 7)
console.log(answerSix)


// Questão 7 --------------------------------------------------------------------------------

const multi = (numberOne, numberTwo) => {
  return numberOne * numberTwo
}

const answerSeven = multi(5, 7)
console.log(answerSeven)


// Questão 8 --------------------------------------------------------------------------------

const div = (numberOne, numberTwo) => {
  return numberOne / numberTwo
}

const answerEight = div(5, 7)
console.log(answerEight)


// Questão 9 --------------------------------------------------------------------------------

const numberQuestNine = 28

const answerNine = (numberQuestNine % 2 == 0) ? "É um número par" : "Não é um número par"
console.log(answerNine)


// Questão 10 -------------------------------------------------------------------------------

const numberQuestTen = 95

const answerTen = (numberQuestTen % 2 != 0) ? "É um número ímpar" : "Não é um número ímpar"
console.log(answerTen)
