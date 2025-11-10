(function() {
    const breakpoints = [
        { width: 1600, file: 'css/responsive/breakpoint-1600px.css' },
        { width: 1300, file: 'css/responsive/breakpoint-1300px.css' },
        { width: 900, file: 'css/responsive/breakpoint-900px.css' },
        { width: 700, file: 'css/responsive/breakpoint-700px.css' }
    ];

    let currentBreakpoint = null;
    let linkElement = null;

    function getBasePath() {
        const path = window.location.pathname;
        return path.includes('/pages/') ? '../' : '';
    }

    function getBreakpoint(width) {
        for (let bp of breakpoints) {
            if (width >= bp.width) {
                return bp;
            }
        }
        return null;
    }

    function loadCSS(href) {
        if (!linkElement) {
            linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.id = 'responsive-css';
            document.head.appendChild(linkElement);
        }

        const basePath = getBasePath();
        linkElement.href = basePath + href;
    }

    function unloadCSS() {
        if (linkElement && linkElement.parentNode) {
            linkElement.parentNode.removeChild(linkElement);
            linkElement = null;
        }
    }

    function updateResponsiveCSS() {
        const width = window.innerWidth;
        const breakpoint = getBreakpoint(width);

        if (breakpoint && breakpoint !== currentBreakpoint) {
            currentBreakpoint = breakpoint;
            loadCSS(breakpoint.file);
        } else if (!breakpoint && currentBreakpoint) {
            currentBreakpoint = null;
            unloadCSS();
        }
    }

    let resizeTimeout;
    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateResponsiveCSS, 100);
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', updateResponsiveCSS);
    updateResponsiveCSS();
})();
