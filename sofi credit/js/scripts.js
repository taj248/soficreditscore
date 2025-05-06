// Simple animation trigger on scroll
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.animate__animated');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(entry.target.dataset.animate);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(element => {
        element.dataset.animate = element.classList.contains('animate__fadeIn') ? 'animate__fadeIn' : 
                                  element.classList.contains('animate__fadeInUp') ? 'animate__fadeInUp' : '';
        observer.observe(element);
    });
});