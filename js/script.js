
const loadKanyeQuote = () => {
    const url = `https://api.kanye.rest/`
    fetch(url)
    .then(res => res.json())
    .then(data => displayKanye(data.quote))
}
const displayKanye  = code => {
    console.log(code);
    document.getElementById('kanyeQuote').innerHTML = code;
}