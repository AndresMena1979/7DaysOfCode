   
let numeroUn = 1 ;
let stringUn = '1' ;

let numeroTreinta = 30 ;
let stringTreinta ='30';

let numeroDiez = 10 ;
let stringDiez = '10' ;



if (numeroUn == stringUn) {     // == en JavaScript convierte automáticamente '1' en 1 antes de compararlos.

    console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes') ;

} else {

  console.log('Las variables numeroUn y stringUn no tienen el mismo valor') ;

}



if ( numeroTreinta === stringTreinta) {    // === en JavaScript solo compara los mismos tipos de datos, por lo que será false, y se ejecutará el else, que es el resultado correcto.

  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')

} else {

  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')

}



if (numeroDiez == stringDiez) {

  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')

} else {

  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')

}



       


