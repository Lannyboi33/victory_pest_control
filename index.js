const cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
        window.location.href = "./html/pests.html#contact";
    });
}

document.getElementById('scrollToContact').addEventListener('click', function(event) {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    const sectionHeight = contactSection.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollOffset = contactSection.offsetTop - (windowHeight / 2) + (sectionHeight / 2);

    window.scrollTo({
        top: scrollOffset,
        behavior: 'smooth'
    });
});