// For
//recorrer desde el 100 al 0
for (let index = 100; index >=0;) {
    index--
    console.log(index)
}

const array1 = [1,2,3,4,5]
array.forEach(element => {
    console.log(element)
});

//Devuelve los elementos de array1 multiplicados por 2
const array2 = array1.map(element => element*2)

//Devuelve true si todos los elementos son mayores a 2
const isMajorTo2 = array1.every(element=> element > 2)

 //Devuelve el primer número par
const firstPairNumber = array1.find(element=> element % 2 === 0)

 //Devuelve true si almenos un número es mayor a 4
 const existNumberMajorTo4 = array1.some(element=> element > 4)

  //Devuelve el array de números pares
  const newPairArrayNumbers = array1.filter(element=> element % 2 === 0)