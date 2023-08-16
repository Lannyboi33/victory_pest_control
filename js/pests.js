import Pests from '../Data/Pests.js'

const selectedPestIndex = localStorage.getItem("selectedPestIndex")

document.getElementById("pests-main").innerHTML =
`
    <div class="pest-card">
        <img src="${Pests[selectedPestIndex].img}" alt="${Pests[selectedPestIndex].altText}">
        <div class="pest-text-box">
            <h4>${Pests[selectedPestIndex].title}</h4>
            <p>${Pests[selectedPestIndex].description}</p>
        </div>
    </div>
`