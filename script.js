// script.js
function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        // Remove swipe-down animation class from all sections
        document.querySelectorAll('section').forEach(sec => {
            sec.classList.remove('swipe-down');
        });

        // Add swipe-down animation class to the target section
        section.classList.add('swipe-down');

        // Scroll to the section after the animation completes
        setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth' });
        }, 500); // 500ms is the duration of the animation
    }
}
