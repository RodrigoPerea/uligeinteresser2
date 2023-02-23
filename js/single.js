// console.log("sidenVises");

// // const id = urlParams.get("id");
// let cat = urlParams.get("spiritus_sortering");
// let productSingelWrapper = document.getElementById("singel_wrapper");
// const urlParams = new URLSearchParams(window.location.search);
// const url = `https://drinks-7edc.restdb.io/rest/cocktails`;
// const select = document.getElementById("templateOne");

// const template = document.querySelector("#templateOne").content;
// const options = {
//   headers: {
//     "x-apikey": "63ea50de478852088da681a9",
//   },
// };

// async function hentData() {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
//   data.forEach(visProdukt);
// }

// function visProdukt(produkt) {
//   console.log(produkt);
//   const copy = template.cloneNode(true);
//   copy.querySelector(".navn").textContent = produkt.navn;
//   copy.querySelector(".land").textContent = produkt.land;
//   copy.querySelector(".smag1").textContent = produkt.smag_1;
//   copy.querySelector(".smag2").textContent = produkt.smag_2;
//   copy.querySelector(".oc_1").textContent = produkt.oc_1;
//   copy.querySelector(".oc_2").textContent = produkt.oc_2;
//   copy.querySelector(".opskrift").textContent = produkt.opskrift;
//   copy.querySelector(".tag").textContent = produkt.tag_line;
//   copy.querySelector("pictur").src = imagePath;
//   copy.querySelector("a").href = "product.html?id=" + produkt.id;

//   document.querySelector("main").appendChild(copy);
// }

// template.innerHTML += templateOne;

// hentData();

console.log("sidenVises");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const itemDataFromId = `https://drinksdatany-673e.restdb.io/rest/drinks-cocktails${id}`;

console.log("igen");
let cat = urlParams.get("spiritus_sortering");
const url = "https://drinks-7edc.restdb.io/rest/cocktails";


const options = {
  headers: {
    "x-apikey": "63f7c647478852088da685b9",
  },
};

console.log("funktion");


async function hentData() {
    const response = await fetch(itemDataFromId);
    const data = await response.json();
    console.log("data fra id" + data);
    showDrink(data);
    // fetch(url)
    //     .then((res) => res.json())
    //     .then(showDrink);
}

function showProduct(produkt) {
    console.log("funktion produkt");
    document.querySelector(".navn").textContent = produkt.navn;
    document.querySelector(".land").textContent = produkt.land;
    document.querySelector(".smag_1").textContent = produkt.smag_1;
    document.querySelector(".smag_2").textContent = produkt.smag_2;
    document.querySelector(".oc_1").textContent = produkt.oc_1;
    document.querySelector(".oc_2").textContent = produkt.oc_2;
    document.querySelector(".opskrift").textContent = produkt.opskrift;
    document.querySelector(".tag").textContent = produkt.tag_line;
    clone.querySelector(".billede_single").src = "pic/" + cocktail.pictur;
}

hentData();