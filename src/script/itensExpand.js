const serviceItems = document.querySelectorAll('.archive-item');
const contactMeNav = document.querySelector('#contact-me');
const contactItem = document.querySelector('.contact');

const toggleExpansion = (element) => {
    if (element) {
        element.classList.toggle('d-block');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    serviceItems.forEach(item => {
        const contentItem = item.querySelector('.archive-content-item');
        const expandedContent = item.querySelector('.expanded-content');

        contentItem?.addEventListener('click', () => {
            toggleExpansion(expandedContent);
        });
    });
});

contactMeNav?.addEventListener('click', () => {
    const expandedContact = contactItem?.querySelector('.expanded-content');
    toggleExpansion(expandedContact);
});