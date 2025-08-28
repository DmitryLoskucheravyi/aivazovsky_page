const links = document.querySelectorAll("[data-link-mobile]");

links.forEach(link => {
        link.addEventListener("click", () => {
        document.getElementById('toggler').checked = false;
    });
});

