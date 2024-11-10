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
        window.location.href = "./html/pest.html";
    })
}

// Adds events to all elements with the class "contact"
let contact_btn = document.querySelectorAll(".contact-btn")

for (let i = 0; i < contact_btn.length; i ++)
{
    contact_btn[i].addEventListener("click", showContacts)
}

// Shows contacts when clicked and hides when closed button is clicked
function showContacts()
{
    document.querySelector(".contact").style.display = "block"
    document.querySelector(".contact-overlay").style.display = "block"
}

document.querySelector(".close-button").addEventListener("click", () =>
{
    document.querySelector(".contact").style.display = "none"
    document.querySelector(".contact-overlay").style.display = "none"
})

//Creating clickable link to Lane County
document.querySelector(".contact-img-laneCounty").addEventListener("click", () => {
    window.open("https://victorypestlanecounty.com", "_blank")
})