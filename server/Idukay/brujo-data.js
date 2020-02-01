module.exports = {

      getEvaluacionPocion: function(objBrujo) {

          let valAtaqueSimple1 = 3;

          let ataqueCombinado=0;
          let ataqueCombinadoImpar=0;
          let restaAtaqueCombinado=0;
          let ataqueSimple=0;
          let sumaAtaquesCombinados = 0
          let sumaAtaquesCombinadosImpar = 0
          let sumAtaqueSimple = 0
          let sumAtaqueCombinado = 0;
          let sumAtaqueCombinadoImpar = 0;
          let posRepetidas = validarRepetidos(objBrujo);
          let sumPocionesCompradas = (objBrujo.numRojas + objBrujo.numAzules + objBrujo.numVerdes + objBrujo.numAmarillas + objBrujo.numGrises) - posRepetidas;
          let pocionesUsadas=sumPocionesCompradas;
         

        for (var pociones=1; pociones<=sumPocionesCompradas; pociones++){
            pocionesUsadas = pocionesUsadas - pociones;
            if (pociones % 2 === 0  ) {
              sumaAtaquesCombinados = 2 + sumaAtaquesCombinados;
              ataqueCombinado = 1 + ataqueCombinado;
            }  else {
              if ((sumPocionesCompradas - sumaAtaquesCombinados) == 1){
                restaAtaqueCombinado = 1 + restaAtaqueCombinado;
              }
              if(pociones >= 3 ) {
                sumaAtaquesCombinadosImpar = pociones;
                ataqueCombinadoImpar = 1 + ataqueCombinadoImpar;
              } 
          }
              ataqueSimple = 1 + ataqueSimple;
       }

       sumAtaqueSimple = (ataqueSimple * valAtaqueSimple1) +  (posRepetidas * valAtaqueSimple1);
       sumAtaqueCombinado = returnValDanio(sumaAtaquesCombinados) + returnValDanio(restaAtaqueCombinado) +  returnValDanio(posRepetidas) ;
       sumAtaqueCombinadoImpar = returnValDanio(sumaAtaquesCombinadosImpar)+  returnValDanio(posRepetidas)  ;
       numeroMayor = mejorAtaque(sumAtaqueSimple,sumAtaqueCombinado,sumAtaqueCombinadoImpar);

    var resp = 
            {
              "pocionesUnicas": ataqueSimple,
              "pocionesRepetidas": posRepetidas,
              "numeroCombinacionesPares": ataqueCombinado,
              "numeroSobranteCombinacionesPares": restaAtaqueCombinado,
              "numeroCombinacionesImpares": ataqueCombinadoImpar,
              "sumAtaqueSimple": sumAtaqueSimple,
              "sumAtaqueCombinadoPar": sumAtaqueCombinado,
              "sumAtaqueCombinadoImpar": sumAtaqueCombinadoImpar,
              "mejorAtaque": numeroMayor
            };
          return resp;
      }

  };

  function returnValDanio(valCombinaciones){
     
    let valDanio = 0;

    switch (valCombinaciones) {
      case 1:
        valDanio = 3;
      break;
      case 2:
        valDanio = 6;
        break;
      case 3:
        valDanio = 10;
        break;
      case 4:
        valDanio = 20;
         break;
      case 5:
        valDanio = 25;
          break;
      default:
        break;
    }
     return valDanio;
  }

  function validarRepetidos(objBrujo){

    let repetidas = 0;
    let pocionesCompradas = 0;

    if (objBrujo.numRojas > 0 ){
      pocionesCompradas = pocionesCompradas + 1;
    }

    if (objBrujo.numAzules > 0){
      pocionesCompradas = pocionesCompradas + 1;
    }

    if (objBrujo.numVerdes > 0){
      pocionesCompradas = pocionesCompradas + 1;
    }

    if (objBrujo.numAmarillas > 0){
      pocionesCompradas = pocionesCompradas + 1;
    }

    if (objBrujo.numGrises > 0){
      pocionesCompradas = pocionesCompradas + 1;
    }

    let sumPocionesCompradas = objBrujo.numRojas + objBrujo.numAzules + objBrujo.numVerdes + objBrujo.numAmarillas + objBrujo.numGrises;
    repetidas = sumPocionesCompradas - pocionesCompradas;
    return repetidas;
  }

  function mejorAtaque (num1, num2, num3) {
    let numMayor = 0;
    if ( num1 > num2 && num1 > num3) {
      numMayor = num1;
     }else if (num2 > num3){
      numMayor = num2;
     } else{
      numMayor = num3;
     }

     return numMayor;
  }