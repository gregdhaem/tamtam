
// Script en JavaScript pour faite aparaitre le bouton "Retour haut de page" à partir de 650px
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("GoToTopBtn").style.display = "block";
    } else {
        document.getElementById("GoToTopBtn").style.display = "none";
    }
}

// Scroll vers le haut quand l'utilisateur clique sur le bouton
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


