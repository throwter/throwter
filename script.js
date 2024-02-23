document.addEventListener('DOMContentLoaded', function () {
    // Szövegek tömbje
    const texts = ["alma", "körte", "banán", "citrom"];

    // Az aktuális oldal indexe
    let currentIndex = 0;

    // HTML elemek referenciáinak lekérése
    const navigation = document.getElementById('page-navigation');
    const content = document.getElementById('content');

    // Navigációs pontok (oldalak) létrehozása
    texts.forEach((text, index) => {
        const pageLink = document.createElement('div');
        pageLink.classList.add('page-link');
        pageLink.innerText = index + 1;
        pageLink.addEventListener('click', () => showPage(index));
        navigation.appendChild(pageLink);
    });

    // Az aktuális oldal megjelenítése
    showPage(currentIndex);

    // Oldal váltása
    function showPage(index) {
        currentIndex = index;
        content.innerText = texts[index];

        // Aktív oldal kiemelése a navigáción
        const pageLinks = document.querySelectorAll('.page-link');
        pageLinks.forEach((link, i) => {
            if (i === index) {
                link.style.backgroundColor = '#555';
                link.style.color = '#fff';
            } else {
                link.style.backgroundColor = '#ddd';
                link.style.color = '#000';
            }
        });
    }
});
