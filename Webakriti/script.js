const runCodeButton = document.querySelector(".editor .btn");


// Rules and Regulations
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.rules-list li');

    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            // Show content on hover
            item.classList.add('active');
        });

        item.addEventListener('mouseout', () => {
            // Hide content when not hovering
            item.classList.remove('active');
        });
    });
});