const loadQuotes = (data) => {
fetch('https://api.kanye.rest/')
  .then(response => response.json())
  .then(data => getQuote(data))
}

function getQuote(data) {
  const ul = document.getElementById('quote');
  const li = document.createElement('li');
  li.innerHTML = `${data.quote}`;
  ul.appendChild(li);
}
