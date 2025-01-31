// No cambies los nombres de las funciones.

const { sum } = require("lodash");
const { fromCallback } = require("universalify");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i = 0; i < array.length; i++) 
  {
    array[i] += 1;
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  // let palabras2 = "";
  // for (let i = 0; i < palabras.length; i++)
  // {
  //   palabras2 += palabras[i] + " "; 
  // }
  // palabras2 = palabras2.trimEnd();
  // return palabras2;
  return (palabras.join(" "));
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.find(element => element == elemento))
  {
    return true;
  }
  else
  {
    return false;
  }
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  // let sumatoria = 0;
  // for (let i = 0; i < numeros.length; i++)
  // {
  //   sumatoria += numeros[i];
  // }
  // return sumatoria;
  let sumatoria = numeros.reduce(
    (acumulador, actual) => acumulador + actual
  );
  return sumatoria;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  // let promedio = 0;
  // for (let i = 0; i < resultadosTest.length; i++) 
  // {
  //   promedio += resultadosTest[i];
  // }
  // promedio = promedio / (resultadosTest.length)
  // return promedio;
  let promedio = resultadosTest.reduce(
    (acumulador, actual) => acumulador + actual
  ) / (resultadosTest.length);
  return promedio;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let mayor = 0;
  for (let i = 0; i < numeros.length; i++) 
  {
    if (numeros[i] > mayor)
    {
      mayor = numeros[i];
    }
  }
  return mayor;
  // let index = numeros[0];
  // let mayor = numeros.filter(numero => numero > index);
  // return mayor;
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí:
  let contador = 0;
  for (let i = 0; i < arreglo.length; i++) 
  {
    if (arreglo[i] > 19)
    {
      contador ++;
    }  
  }
  return contador;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí:
  if (numeroDeDia > 1 && numeroDeDia < 7)
  {
    return "Es dia Laboral";
  }
  else
  {
    return "Es fin de semana";
  }
} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let numero = n;
  let unidad = 0, decena = 0;
  while (numero > 9)
  {
    numero -= 10;
    decena ++;
  }
  while (numero > 0)
  {
    numero -= 1;
    unidad ++;
  }
  if (decena == 9 || unidad == 9)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:
  if (arreglo[0] == arreglo[arreglo.length-1])
  {
    return true;
  }
  else
  {
    return false;
  }
  // return (arreglo.filter(caracter => caracter == arreglo[arreglo.length-1]));
} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  // var store = 0, n_array = [];
  // for (let i = 0; i < array.length; i++)
  // {
  //   if (array[i] == "Enero" || array[i] == "Marzo" || array[i] == "Noviembre")
  //   {
  //     n_array.push(array[i])
  //     store ++;
  //   }
  // }
  // if (store < 3 || store != 3)
  // {
  //   return "No se encontraron los meses pedidos";
  // }
  // else
  // {
  //   return n_array;
  // }
  let n_array = array.filter(mes => mes == "Enero" || mes == "Marzo" || mes == "Noviembre");
  if (n_array.length < 3) return "No se encontraron los meses pedidos";
  else    return n_array;
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  // let n_array2 = [];
  // for (let i = 0; i < array.length; i++)
  // {
  //     if (array[i] > 100)
  //     {
  //         n_array2.push(array[i]);
  //     }
  // }
  // return n_array2;
  let n_array2 = array.filter(numero => numero > 100);
  return n_array2;
}

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
