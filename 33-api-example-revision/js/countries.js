const loadCountries = () => {
  fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => displayCountries(data)) // data is an array of objects

}

const displayCountries = countries =>{
   countries.map(country => {
    const countries = document.getElementById('countries')
    const countryElement = document.createElement('div')
    countryElement.classList.add('country')
    countryElement.innerHTML = `

    <div> 
    <h1>Name of the country: ${country.name} </h1>
    
    <h2> Capital of the country: ${country.capital} </h2>
    <h3> Population of the country: ${country.population} </h3>
    <h3> TimeZone of the country: ${country.timezones} </h3>
    <div/>
    <div> 
    <img src="${country.flag}" alt="">
    <div/>
    
    `
    countries.appendChild(countryElement)
  })
};
document.getElementById('click-me').addEventListener('click', loadCountries);