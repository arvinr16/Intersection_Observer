const boxes = document.querySelectorAll('.box');
let lastScrollY = window.scrollY; // posisi scroll sebelumnya

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            if(window.scrollY > lastScrollY) {
                // Scroll ke bawah - fade in
                entry.target.classList.add('show');
                entry.target.classList.remove('hide');
            } else {
                // Scroll ke atas - fade out
                entry.target.classList.remove('show');
                entry.target.classList.add('hide');
            }
        }
    });
    lastScrollY = window.scrollY;
}, {threshold: 0.3});

boxes.forEach(box => observer.observe(box));