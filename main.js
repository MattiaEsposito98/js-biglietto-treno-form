console.log("Biglietto del treno")

const btnGenera = document.querySelector('button')
btnGenera.addEventListener("click",
    
  function () {
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
  if (ageUser === "minorenne" ) {
    const prezzo_scontato20 = (kmUser * prezzo_al_km) * 20 / 100
    let prezzo_finale = (kmUser * prezzo_al_km) - prezzo_scontato20
    console.log(`Il prezzo totale con lo sconto del 20% è: ${prezzo_finale.toFixed(2)}€`)

  } else if (ageUser === "over65") {
    const prezzo_scontato40 = (kmUser * prezzo_al_km) * 40 / 100
    let prezzo_finale = (kmUser * prezzo_al_km) - prezzo_scontato40
    console.log(`Il prezzo totale con lo sconto del 40% è: ${prezzo_finale.toFixed(2)}€`)
  }

  else {
    let prezzo_pieno = kmUser * prezzo_al_km
    console.log(`Il prezzo totale è: ${prezzo_pieno.toFixed(2)}€`)
  }


  // Biglietto
  document.getElementById('nome-passegero').innerHTML = nameUser


})


