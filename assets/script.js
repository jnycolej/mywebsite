/* document.addEventListener('DOMContentLoaded', () =>{
const toggle = document.getElementById('themeToggle');

//Load saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggle.checked = true;
}

toggle.addEventListener('change', function () {
    if(this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});    
}) */

document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
});