(function() {
    const section = document.getElementById('sekcia_zmena');
    if (!section) return;

    const sizeSelect = document.getElementById('size-select');
    const enlargeBtn = document.getElementById('enlarge-btn');

    let currentSize = 'medium';
    const sizes = ['small', 'medium', 'large'];

    function setSize(size) {
        if (!sizes.includes(size)) return;

        sizes.forEach(s => section.classList.remove(`size-${s}`));
        section.classList.add(`size-${size}`);
        currentSize = size;

        if (sizeSelect) {
            sizeSelect.value = size;
        }
    }

    function enlargeContent() {
        const currentIndex = sizes.indexOf(currentSize);
        const nextIndex = (currentIndex + 1) % sizes.length;
        setSize(sizes[nextIndex]);
    }

    if (enlargeBtn) {
        enlargeBtn.addEventListener('click', enlargeContent);
    }

    if (sizeSelect) {
        sizeSelect.addEventListener('change', function() {
            setSize(this.value);
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'e') {
            e.preventDefault();
            enlargeContent();
        }
    });

    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            const width = window.innerWidth;
            if (width <= 550 && currentSize !== 'small') {
                setSize('small');
            } else if (width > 550 && width <= 850 && currentSize !== 'medium') {
                setSize('medium');
            }
        }, 200);
    });

    setSize('medium');
})();
