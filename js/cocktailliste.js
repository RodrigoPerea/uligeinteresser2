//endpoint, gemmer i variablen url
const url = "https://www.thecocktaildb.com/api.php";

//objekt, de rindeholder et andet objekt, så den ved den har adgang til databasen
//API nøgel blir pakket ind i mit objekt så jeg kan sende den med fetch
const options = {
  headers: {
    "x-apikey": "63ea50de478852088da681a9",
  },
};
async function getData() {
  const response = await fetch(url, options);
  const json = await response.json();
  vis(json);
}
getData();

const main = document.querySelector("main");
const template = document.querySelector("template");

function vis(json) {
  console.log(product);
  json.forEach((person) => {
    //looper igennem jason, og for hver person kloner jeg mit skabelon
    //og sætter det rigtige indhold ind
    const clone = template.cloneNode(true);
    clone.querySelector(".navn").textcontent = person.navn;
    main.appendChild(clone); //og appender til browser
  });
}

//4. fange template

/* const template = document.querySelector("#smallProductTemplate").content; */
/* console.log(template); */

//5. klone

//6. skifte data
