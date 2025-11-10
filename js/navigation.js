(function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });

        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth > 850) {
            if (mainNav) mainNav.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
        }
    });
})();
