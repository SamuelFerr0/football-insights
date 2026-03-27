
function filtrarTimes(){

  let textoDigitado =
  document.getElementById("time")
  .value
  .toLowerCase();

  let cards =
  document.getElementsByClassName("card");

  for(let i = 0; i < cards.length; i++){

    let nomeTime =
    cards[i]
    .innerText
    .toLowerCase();

    if(nomeTime.includes(textoDigitado)){

      cards[i].style.display = "block";

    }else{

      cards[i].style.display = "none";

    }

  }
}

  function filtrarFase(){

  let textoDigitado =
  document.getElementById("fase")
  .value
  .toLowerCase();

  let cards =
  document.getElementsByClassName("card");

  for(let i = 0; i < cards.length; i++){

    let nomeTime =
    cards[i]
    .innerText
    .toLowerCase();

    if(nomeTime.includes(textoDigitado)){

      cards[i].style.display = "block";

    }else{

      cards[i].style.display = "none";

    }

  }

}