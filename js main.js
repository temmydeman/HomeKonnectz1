document.addEventListener('DOMContentLoaded', function () {
    // Property contact button behavior
    const contactButtons = document.querySelectorAll('.contact-btn');
    contactButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (this.classList.contains('active')) {
                alert('✅ Contact details revealed!\nLandlord: Mr. Adekunle\nPhone: +234 803 XXX XXXX');
            } else {
                alert('🔒 Upgrade to Premium to access seller contact information and exact property location!');
            }
        });
    });

    // View details button
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('📄 Viewing property details...\n\nFree users: Limited info shown.\nPremium users: Full description, video, and map access.');
        });
    });

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Smooth scrolling for anchor links (optional enhancement)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});