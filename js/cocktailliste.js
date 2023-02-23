const urlParams = new URLSearchParams(window.location.search);
let cat = urlParams.get("spiritus_sortering");
let productCategorySelector = document.getElementById("categorySelector");
const url = "https://drinks-7edc.restdb.io/rest/cocktails"; //endpoint, gemmer i variablen url
// const url = "cocktails.json";
const select = document.getElementById("categorySelector");

const main = document.querySelector("main").content;
const options = {
  headers: {
    "x-apikey": "63f36afc478852088da684b5",
  },
};
async function getData() {
  const response = await fetch(url, options);
  const json = await response.json();
  console.log("json: " + json);
  vis(json);
  getOptionsForDropdown(json);
}
const getOptionsForDropdown = (json) => {
  json.forEach((item) => {
    const option = `<option value="${item.spiritus_sortering}">${item.spiritus_sortering}</option>`;
    select.innerHTML += option;
  });
};
const sortBySpirit = async (event) => {
  console.log("😂", event.target.value); // This gets the value of the option in the select field/CR
  const value = event.target.value;
  if (value === "Alle") {
    getData();
  } else {
    const catUrl = `https://drinks-7edc.restdb.io/rest/cocktails?q={"spiritus_sortering":"${value}"}`;
    const response = await fetch(catUrl, options);
    const json = await response.json();
    console.log("👍", json);
    vis(json);
  }
};

// copy.querySelector("a").href = `produkt.html?id=${product.id}`;

{
  /* <a class="read_more" href=" "> */
}

select.addEventListener("change", (event) => sortBySpirit(event));
function vis(json) {
  const template = document.querySelector("#listTemplate");
  template.innerHTML = "";
  console.log("😒", json);
  json.forEach((cocktail) => {
    const drinkTemplate = `<a href = "single.html?id=${cocktail.id}"> <div class="drink">
    <img class="billede" src="pic/${cocktail.pictur}" alt="${cocktail.navn}">
    <div class="drink-content">
        <h2 class="drink_navn">${cocktail.navn}</h2>
        <span class="land">${cocktail.land}</span>
        <span class="tag_line">${cocktail.tag_line}</span>
        <div class="tags">
            <div class="tag_spiritus">
                <h3>Spiritus</h3>
                <p class="ingrediens_1 box">${cocktail.spiritus_sortering}</p>
                 </div>
            <div class="tag_smag">
                <h3>Smag</h3>
                <div class="box_wrapper">
                    <p class="smag_1 box">${cocktail.smag_1}</</p>
                    <p class="smag_2 box">${cocktail.smag_2}</p>
                </div>
            </div>
            <div class="tag_oc">
                <h3>Lejlighed</h3>
                <div class="box_wrapper">
                    <p class="oc_1 box">${cocktail.oc_1}</p>
                    <p class="oc_2 box">${cocktail.oc_2}</p>
                </div>
            </div>
        </div>
    </div>
</div> </a>`;
    template.innerHTML += drinkTemplate;
  });
}
getData();
