const searchFood = () =>{
  const searchField = document.getElementById('search-field');
  const searchText =  searchField.value;
  searchField.value = '';
  const url = `
  https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
  `;
  fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
 

}


document.getElementById('button-search').addEventListener('click', searchFood);