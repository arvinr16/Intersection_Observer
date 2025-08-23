const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.3 }); // muncul ketika 10% elemen terlihat

boxes.forEach(box => observer.observe(box));