// Scroll Animation Trigger
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Image hover effect
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.03)';
        });
        
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        document.querySelectorAll('.content-section').forEach(section => {
            if(window.scrollY + window.innerHeight > section.offsetTop) {
                section.classList.add('active');
            }
        });
    });
});

// Smooth scroll for navigation (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});