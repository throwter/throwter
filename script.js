<script>
    document.addEventListener('DOMContentLoaded', function () {
        const texts = ["Rólam szóló szöveg", "Szolgáltatásokkal kapcsolatos szöveg", "Portfólió szöveg", "Referenciák szöveg", "Kapcsolat szöveg"];
        let currentIndex = 0;

        const navigation = document.getElementById('page-navigation');
        const content = document.getElementById('content');

        texts.forEach((text, index) => {
            const pageLink = document.createElement('div');
            pageLink.classList.add('page-link');
            pageLink.addEventListener('click', () => showPage(index));
            navigation.appendChild(pageLink);
        });

        showPage(currentIndex);

        function showPage(index) {
            currentIndex = index;
            content.innerText = texts[index];

            const pageLinks = document.querySelectorAll('.page-link');
            pageLinks.forEach((link, i) => {
                if (i === index) {
                    link.style.backgroundColor = '#555';
                } else {
                    link.style.backgroundColor = '#ddd';
                }
            });
        }
    });
</script>
