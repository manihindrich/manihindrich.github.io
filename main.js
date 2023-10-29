document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

document.addEventListener("DOMContentLoaded", function () {

    fetch("content.txt")
        .then(response => response.text())
        .then(data => {
            var text = data;
            var index = 0;
            var container = document.getElementById("animated-text");

            function animateText() {
                if (index <= text.length) {
                    container.textContent = text.slice(0, index);
                    index++;
                    setTimeout(animateText, 20);
                }
            }
            animateText();
        })
        .catch(error => {
            console.error("Chyba při načítání textu ze souboru: " + error);
        });
});

// A774257336388946999922776666274