# For 
crea una iteración de valores comprendidos desde un valor hasta otro que cumpla cierta condición
```js
// For
//recorrer desde el 100 al 0
for (let index = 100; index >=0;) {
    index--
    console.log(index)
}

```

# Foreach
crea una iteración de valores de un array la cual ejecuta una función por cada elemento

```js
const array1 = [1,2,3,4,5]
array.forEach(element => {
    console.log(element)
});
```

# Array methods

## 1. Map

crea una iteración de valores de un array la cual ejecuta una función por cada elemento pero es utilizada para crear un nuevo array, por lo general se usa para asignar a una variable, usa más recursos que foreach

```js
//Devuelve los elementos de array1 multiplicados por 2
const array2 = array1.map(element => element*2)
```

## 2. every 
recorre el array y devuelve un valor booleano de acuerdo a una condición dada, todos los elementos del array deben cumplir con esa condición para que sea true
```js
//Devuelve true si todos los elementos son mayores a 2
const isMajorTo2 = array1.every(element=> element > 2)
```

## 3. find
recorre el array y devuelve el primer valor del array que cumple con la condición
```js
 //Devuelve el primer número par
const firstPairNumber = array1.find(element=> element % 2 === 0)
```

## 4. some
recorre el array y devuelve un valor booleano de acuerdo a una condición dada, almenos un elemento del array debe cumplir con esa condición para que sea true
```js
 //Devuelve true si almenos un número es mayor a 4
 const existNumberMajorTo4 = array1.some(element=> element > 4)
```

## 5. find
recorre el array y devuelve un nuevo array que cumple con la condición
```js
//Devuelve el array de números pares
  const newPairArrayNumbers = array1.filter(element=> element % 2 === 0)
```