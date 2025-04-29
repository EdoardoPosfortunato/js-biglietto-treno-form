//Esecuzione Logica

/*let totalCost = kmString * 0.21
console.log(`Il prezzo pieno del biglietto è di ${totalCost.toFixed(2)} euro`)

let discount

if (ageString <= 18) {
    discount = totalCost * 0.2
} else if (ageString >= 65) {
    discount = totalCost * 0.4
} else {
    discount = 0
}

let totalDiscountCost = totalCost - discount


//output

if (ageString <= 18) {
    console.log(`Avendo ${ageString} anni lo sconto è di ${discount.toFixed(2)} euro`)

} else if (ageString >= 65) {
    console.log(`Avendo ${ageString} anni lo sconto è di ${discount.toFixed(2)} euro`)

} else {
    console.log(`Non hai diritto a nessuno sconto`)
}


console.log(`Il prezzo del biglietto scontato è di ${totalDiscountCost.toFixed(2)} euro`)*/


// Prelevo il form
const informationForm = document.getElementById("informations");
// console.log(informationForm);


// Prelevo tutti gli input //
const kilometriInput = document.getElementById("kilometri"); // elemento del DOM, object
const ageInput = document.getElementById("age"); // elemento del DOM, object

// console.log(kilometriInput, ageInput)


// Prelevo elementi da compilare //
let ageElem = document.querySelector("#ticket .età");
let priceElem = document.querySelector("#ticket .price");

// console.log(kilometriElem, priceElem)

let kilometri 
let age

// Operazione di Submit //

informationForm.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault(); // ferma il ricaricamento della pagina


    // Prelevo tutti i valori degli input
    kilometri = kilometriInput.value;
    age = ageInput.value;


    // si danno i valori agli elementi della card

    ageElem.innerHTML = `${age} anni`;

    // funzione logica //

    let price = kilometri * 0.21;

    if (age <= 18) {
        price = price * 0.8;

    } else if (age >= 65) {
        price = price * 0.6;

    }


    priceElem.innerHTML = `${price} euro`;


}


informationForm.addEventListener("reset", resetForm);

function resetForm() {
    

    ageElem.innerHTML = "";
    priceElem.innerHTML = "";

}