console.log("sidenVises");

const urlParams = new URLSearchParams(window.location.search);
const kat = urlParams.get("kat");
const url = `https://drinksdatany-673e.restdb.io/rest/drinks-cocktails`;

const options = {
    headers: {
        "x.apikey": "63f7c647478852088da685b9",
    },
};

async function hentData(){
    console.log("hentData");
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    data.forEach(visDrink);
}

hentData();

function visdrink(drink) {
    if (drink.kategori==kat) {
        console.log("drink");
        const template = document.querySelector("templateTwo").content;
        const klon = template.cloneNode(true);

        klon.querySelector("land1").href = "list.html?id" + drink._id + "&kat=" + drink.kategori;

        document.querySelector("templateTwo").appendChild(klon);
    }
}