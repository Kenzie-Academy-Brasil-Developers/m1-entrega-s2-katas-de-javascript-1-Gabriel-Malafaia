// Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)
function oneThroughTwenty() {
  let contador = [];

  for (i = 1; i <= 20; i++) {
    contador.push(i)
  }

  return contador;
}
//call function oneThroughTwenty
console.log(oneThroughTwenty())

// Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)
function evensToTwenty() {
  let contador = [];

  for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      contador.push(i)
    }
  }

  return contador;
}
//call function evensToTwenty
console.log(evensToTwenty())


// Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)
function oddsToTwenty() {
  let contador = [];

  for (i = 1; i <= 20; i++) {
    if (i % 2 == 1) {
      contador.push(i)
    }
  }

  return contador;
}
//call function oddsToTwenty
console.log(oddsToTwenty())


// Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)
function multiplesOfFive() {
  let contador = [];

  for (i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
      contador.push(i)
    }
  }

  return contador
}
//call function multiplesOfFive
console.log(multiplesOfFive())


// Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)
function squareNumbers() {
  let contador = [];

  for (i = 1; i <= 100; i++) {
    //Variável que emite a raiz quadrada de " i " convertido para inteiro
    let raizQuadrada = parseInt(i ** 0.5)
    //Se a raiz quadrada de i x raiz quadrada de i for igual a ele mesmo, o contador receberá o valor de i em um array
    if (raizQuadrada ** 2 == i) {
      contador.push(i)
    }
  }

  return contador;
}
//call function squareNumbers
console.log(squareNumbers())


// Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)
function countingBackwards() {
  let contador = [];

  for (i = 20; i >= 1; i--) {
    contador.push(i)
  }

  return contador
}

//call function countingBackwards
console.log(countingBackwards())


// Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)
function evenNumbersBackwards() {
  let contador = [];
  
  for (i = 20; i >= 1; i--) {
    if (i % 2 == 0) {
      contador.push(i)
    }
  }

  return contador
}
//call function evenNumbersBackwards
console.log(evenNumbersBackwards())


// Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)
function oddNumbersBackwards() {
  let contador = [];

  for (i = 20; i >= 1; i--) {
    if (i % 2 == 1) {
      contador.push(i)
    }
  }

  return contador
}
//call function oddNumbersBackwards
console.log(oddNumbersBackwards())


// Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)
function multiplesOfFiveBackwards() {
  let contador = [];

  for (i = 100; i >= 1; i--) {
    if (i % 5 == 0) {
      contador.push(i)
    }
  }

  return contador
}
//call function multiplesOfFiveBackwards
console.log(multiplesOfFiveBackwards())

// Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)
function squareNumbersBackwards() {
  let contador = [];

  for (i = 100; i >= 1; i--) {
    let raizQuadrada = parseInt(i ** 0.5)
    if (raizQuadrada ** 2 == i) {
      contador.push(i)
    }
  }

  return contador
}
//call function squareNumbersBackwards
console.log(squareNumbersBackwards())