const nasaApiKey = 'er27Dg4KyJeVlEgy0NbJzlUvgTuDDnrihRNtZYQf';
const nasaApiUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`;

fetch(nasaApiUrl)
  .then((response) => response.json())
  .then((data) => {
    let sidebar = document.getElementsByClassName("sidebar");

    let container = document.createElement("div");
    container.className = "nasa-container";

    let title = document.createElement("h3");
    title.innerText = "NASA Astronomy Picture of the Day";
    title.style.marginTop = "40px";

    let image = document.createElement("img");
    image.src = data.url;
    image.alt = "NASA APOD";

    let description = document.createElement("p");
    description.innerText = truncateDescription(data.explanation, 2);
    description.style.fontFamily = "Quicksand";
    description.style.marginTop = "10px";

    container.appendChild(title);
    container.appendChild(image);
    container.appendChild(description);

    sidebar[0].appendChild(container);
  })
  .catch((error) => {
    console.log('Error:', error);
  });

function truncateDescription(text, numSentences) {
  const sentences = text.split('. ');

  return sentences.slice(0, numSentences).join('. ') + '.';
}
