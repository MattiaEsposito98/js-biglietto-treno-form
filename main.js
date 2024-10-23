console.log("Biglietto del treno")

const btnGenera = document.querySelector('button')
btnGenera.addEventListener("click", function () {

  // nome utente
  let nameUser = document.getElementById("inputName").value
  console.log(nameUser)

  // km
  let kmUser = document.getElementById("inputKm").value
  console.log(kmUser)

  //scelta 
  let ageUser = document.getElementById("inputSconto").value
  console.log(ageUser)

  const prezzo_al_km = 0.21

  //condizione 
  if (ageUser === "Minorenne") {
    const prezzo_scontato20 = (kmUser * prezzo_al_km) * 20 / 100
    var prezzo_finale = (kmUser * prezzo_al_km) - prezzo_scontato20
    console.log(`Il prezzo totale con lo sconto del 20% è: ${prezzo_finale.toFixed(2)}€`)

  } else if (ageUser === "Over65") {
    const prezzo_scontato40 = (kmUser * prezzo_al_km) * 40 / 100
    var prezzo_finale = (kmUser * prezzo_al_km) - prezzo_scontato40
    console.log(`Il prezzo totale con lo sconto del 40% è: ${prezzo_finale.toFixed(2)}€`)
  }

  else {
    var prezzo_finale = kmUser * prezzo_al_km
    console.log(`Il prezzo totale è: ${prezzo_finale.toFixed(2)}€`)
  }


  const numCarozza = Math.floor(Math.random() * 9) + 1;
  console.log(`Numero carozza: ${numCarozza}`)

  const numCP = Math.floor(Math.random() * 9998) + 1;
  console.log(`Numero codice CP: ${numCP}`)



  // Biglietto
  document.getElementById('nome-passegero').innerHTML = nameUser
  document.getElementById('offerta').innerHTML = ageUser
  document.getElementById('carozza').innerHTML = numCarozza
  document.getElementById('codiceCP').innerHTML = numCP
  document.getElementById('costoBiglietto').innerHTML = prezzo_finale.toFixed(2)
})

const btnReset = document.getElementById("reset")
btnReset.addEventListener("click", function () {
  // Reset per il form
  document.getElementById("inputName").value = ''
  document.getElementById("inputKm").value = ''
  document.getElementById("inputSconto").value = ''

  //Reset per il biglietto
  document.getElementById('nome-passegero').innerHTML = ''
  document.getElementById('offerta').innerHTML = ''
  document.getElementById('carozza').innerHTML = ''
  document.getElementById('codiceCP').innerHTML = ''
  document.getElementById('costoBiglietto').innerHTML = ''
})


