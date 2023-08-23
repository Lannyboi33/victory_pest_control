import Pests from '../Data/Pests.js'

const selectedPestIndex = localStorage.getItem("selectedPestIndex")

document.getElementById("pests-main").innerHTML =
`
    <div class="pest-card">
        <img src="${Pests[selectedPestIndex].img}" alt="${Pests[selectedPestIndex].altText}">
        <div class="pest-text-box">
            <h4>${Pests[selectedPestIndex].title}</h4>
            <p>${Pests[selectedPestIndex].description}</p>
            <a class="contact-btn"">Call Now</a>
        </div>
    </div>
`

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