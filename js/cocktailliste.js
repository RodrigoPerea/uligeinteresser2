const urlParams = new URLSearchParams(window.location.search);
let cat = urlParams.get("ingrediens_1_spiritus");
let productCategorySelector = document.getElementById("categorySelector");
const url = "https://drinks-7edc.restdb.io/rest/cocktails"; //endpoint, gemmer i variablen url

//objekt, de rindeholder et andet objekt, så den ved den har adgang til databasen
//API nøgel blir pakket ind i mit objekt så jeg kan sende den med fetch
const options = {
  headers: {
    "x-apikey": "a4b544f910bd22d3e426583aa3c5f164363e7",
  },
};

//filter
productCategorySelector.onchange = () => {
  location.reload();
};
if (cat !== null) {
  url += `&category=${cat}`;
  productCategorySelector.parentElement.style.display = "none";
} else if (productCategorySelector.value !== "null") {
  url += `&category=${productCategorySelector.value}`;
}

async function getData() {
  const response = await fetch(url, options);
  const json = await response.json();
  console.log(response);
  vis(json);
  /*   response.forEach(vis); //loope */
}
const main = document.querySelector("main");
const template = document.querySelector("listTemplate");
function vis(json) {
  json.forEach((cocktail) => {
    //looper igennem jason, og for hver person kloner jeg mit skabelon
    //og sætter det rigtige indhold ind
    const clone = template.cloneNode(true);
    clone.querySelector(".billede").src = "pic/" + cocktail.pictur;
    clone.querySelector(".drink_navn").textcontent = cocktail.navn;
    clone.querySelector(".land").textcontent = cocktail.land;
    clone.querySelector(".tag_line").textcontent = cocktail.tag_line;
    clone.querySelector(".ingrediens_1").textcontent = cocktail.ingrediens_1_spiritus;
    clone.querySelector(".ingrediens_2").textcontent = cocktail.ingrediens_2_spiritus_2;
    clone.querySelector(".smag_1").textcontent = cocktail.smag_1;
    clone.querySelector(".smag_2").textcontent = cocktail.smag_2;
    clone.querySelector(".oc_1").textcontent = cocktail.oc_1;
    clone.querySelector(".oc_2").textcontent = cocktail.oc_2;
    main.appendChild(clone); //og appender til browser
  });
}
getData();
