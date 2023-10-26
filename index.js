const loadCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};
loadCountry();
const displayCountry = (countries) => {
  const mainDiv = document.getElementById("countries");
  console.log(countries);
  countries.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
    <h1>Name:${country.name.common}</h1>
    <h2>Capital:${country.capital}</h2>
    <h3>Population: ${country.population}</h3>
    <button onclick="detailsLoad('${country.name.common}')"><a href="#detail">Details</a></button>
    `;
    mainDiv.appendChild(div);
  });
};
const detailsLoad = (name) => {
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((res) => res.json())
    .then((data) => displayDetails(data));
};

const displayDetails = (countries) => {
  const detailsDiv = document.getElementById("details");
  countries.forEach((country) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <img src="${country.flags.png}">
    <h1>Name:${country.name.common}</h1>
    <h2>Capital:${country.capital}</h2>
    <h3>Population: ${country.population}</h3>
    <h3>Region:${country.region}</h3>
    `;
    detailsDiv.appendChild(div);
  });
};
