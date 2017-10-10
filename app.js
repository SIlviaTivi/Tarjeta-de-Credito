


var isValidCard= function(isvalid){

  //descartando espacios

  //si indexOf nos resulta un numero distinto de -1 nos indicaria que encontro un espacio entonces envia un mensaje de alerta y si   no,el numero ingresado solo cambia de variable a CardNumber
  isvalid.indexOf(' ')!==-1 ? alert("NO se admiten espacios") :
    numbers_card = isvalid ; //trabajo numbers_card como string para luego convertirlo a numero

  // algoritmo de Luhn

     //obteniendo solo elementos pares en arrays de forma invertida
      var Arr_Pares=[];
      for (var i=(numbers_card.length-1)/2; i>=0; i--){ //obteniendo elementos desde la ultima posicion y dividiendo/2 para eliminar los  espacios vacios del array que no queremos.

      var pairs=numbers_card.charAt(i*2-1); //tomando posiciones pares
      Arr_Pares.push(pairs)
      Arr_Pares;
      }
      Arr_Pares  //array con elementos de las posiciones pares

     //multiplicando los elementos de array de las posiciones pares x2
      var Arr_Paresx2=[]
      for (var j=0; j<Arr_Pares.length; j++){
      var x2= Arr_Pares[j]*2;
      Arr_Paresx2.push(x2);
      }
      Arr_Paresx2 //array de elementos de las posiciones pares multiplicados por 2

      //obteniendo solo elementos impares en arrays de forma invertida
      var Arr_Impares=[];
      for (var u=(numbers_card.length-1)/2; u>=0; u--){
      var impares=numbers_card.charAt(u*2);
      Arr_Impares.push(impares);
      }
      Arr_Impares

      // uniendo arrays
      var Arrconc= Arr_Paresx2.concat(Arr_Impares)
      Arrconc // arrays unidos
      // Uniendo todos los elementos de uno o dos digitos como string
      number_joined=Arrconc.join('');
      number_joined// elementos unidos como string

      //sumando todos los digitos convertidos a numeros
      sum=0
      for (var k=0; k < number_joined.length; k++){
      var num= parseInt( number_joined.charAt(k) );// convirtiendo de string a number
      sum+=num
      }
      sum // suma de todos los digitos


   // si (sum) nos resulta NaN quiere decir que no se pudo calcular porque hay algun digito que no es numero , entonces nos saldra una alerta  "solo se admiten numeros"
   // si (sum) es divisor de 10 el numero de tarjeta sera valida y si no, sera invalida

    if(isNaN(sum) === true){
    var message = 'Solo se admiten numeros';
    alert(message)
    }
    else if(sum%10===0){
    message = 'El numero de tu tarjeta es valida'
    alert(message)
    }
    else{
     message = 'El numero de tu tarjeta NO es valida'
    alert(message)
    }

    return message
}
isValidCard(prompt('Ingresa el numero de tu tarjeta de credito'));
