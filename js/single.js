// const burger = document.querySelector(".burger");
// const navBarMenu = document.querySelector(".nav-bar-menu");

// burger.addEventListener("click", () => {
//   burger.classList.toggle("active");
//   navBarMenu.classList.toggle("active");
// });

console.log("sidenVises");

const urlParams = new URLSearchParams(window.location.search);
const url = `https://kea-alt-del.dk/t7/api/products?limit=20&category=${cat}`;

async function hentData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.forEach(visProdukt);
}

// document.querySelector(".").textContent = ;

function visProdukt(produkt) {
    console.log(produkt);
    const template = document.querySelector("#templateOne").content;
    const id = produkt.id;
    const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
    const copy = template.cloneNode(true);
    copy.querySelector(".navn").textContent = produkt.navn;
    copy.querySelector(".land").textContent = produkt.land;
    copy.querySelector(".smag1").textContent = produkt.smag_1;
    copy.querySelector(".smag2").textContent = produkt.smag_2;
    copy.querySelector(".oc_1").textContent = produkt.oc_1;
    copy.querySelector(".oc_2").textContent = produkt.oc_2;
    copy.querySelector(".opskrift").textContent = produkt.opskrift;
    copy.querySelector("pictur").src = imagePath;
    copy.querySelector("a").href = "product.html?id=" + produkt.id;
 

  

    document.querySelector("main").appendChild(copy);
}

hentData();