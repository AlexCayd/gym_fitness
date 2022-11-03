(function() {
    let pinged = false;
    let nav = document.querySelector(".header");
    let stickyScrollPoint = document.querySelector(".hero").clientHeight;

    function pingToTop() {
        if(pinged) return;
        nav.classList.add("pined");
        pinged = true;
    }

    function unPingToTop() {
        if(!pinged) return;
        nav.classList.remove("pined");
        pinged = false;
    }

    window.addEventListener("scroll", function(ev) {
        let coords = nav.getBoundingClientRect();
        if (window.scrollY < stickyScrollPoint) return unPingToTop();
        if(coords.top <= 0) pingToTop();
    })
})();

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion__enlace');
    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView( {
                behavior: 'smooth',
            });
        });
    })
}
scrollNav();