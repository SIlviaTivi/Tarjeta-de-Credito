Para descartar espacios buscamos la posicion con indexOf de un espacio
si indexOf nos resulta un numero distinto de -1 nos indicaria que encontro un espacio entonces envia un mensaje de alerta y si   no, continua el proceso

para el algoritmo de Luhn
trabajamos primero los numeros como string

obtenemos los elementos de las posiciones pares tomados desde el ultimo y los colocamos en un array

luego multiplicamos por dos los elementos del array con las posiciones pares  y los colocamos en otro array,

obtenemos los elementos de las posiciones impares tomados desde el ultimo y los colocamos en un array

luego concatenamos el array con los elementos de las posiciones pares multiplicados por 2 con el array de los elementos de las  posiciones impares

 nos resulara un array con elementos de uno o mas digitos

 las unimos con join '' y nos resulará todos los digitos unidos como estring

 convertimos de string a numbers con parseInt y sumanos todos los elementos del array


si la suma nos resulta NaN quieres decir que calculo un digito diferente a un numero,
 entonces nos saldra una alerta "solo se admiten numeros"

si la suma es divisor de 10 el numero de tarjeta sera valida y si no, sera invalida
