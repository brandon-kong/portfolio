function startNewObserver(callback, target) {
    let options = {
        root: document.querySelector('body'),
        rootMargin: '0px',
        threshold: 1.0,
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(target);
}