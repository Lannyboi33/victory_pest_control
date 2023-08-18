// Import and render all pests
import Pests from './Data/Pests.js'

const pestsCardsEl = document.getElementById("pest-cards")

for (let i = 0; i < Pests.length; i++)
{
    pestsCardsEl.innerHTML +=
    `
        <div class="pest-card">
            <img src="${Pests[i].img}" alt="${Pests[i].altText}">
            <h4>${Pests[i].title}</h4>
        </div>
    `
}


// When user clicks pest navigate to pests.html with pest info
const pestsOnClick = document.querySelectorAll('.pest-card')

for (let i = 0; i < pestsOnClick.length; i++)
{
    pestsOnClick[i].addEventListener("click", () =>
    {
        localStorage.setItem("selectedPestIndex", i)
        window.location.href = "../html/pests.html";
    })
}