// Adiciona efeito de scroll suave para os links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

window.onload = () => {
    const socialMediaArray = document.getElementsByClassName('social-media')
    const brandArray = document.getElementsByClassName('brand')
    const videoArray = document.getElementsByClassName('video')
    const spanCounters = document.getElementsByClassName('contador')

    console.log(spanCounters)

    spanCounters[0].innerHTML = `(${socialMediaArray.length})`
    spanCounters[1].innerHTML = `(${brandArray.length})`
    spanCounters[2].innerHTML = `(${videoArray.length})`

}

// Adiciona classe ativa na navegação durante o scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

function changeArchiveState() {
    const arrow = document.querySelector('.arrow')
    const archive = document.querySelector('.archive-icon')
    const itensList = document.querySelector('.archives-itens-list')

    if (arrow.classList.contains("rotate")) {
        arrow.classList.remove("rotate")
        archive.src = "./icons/openArchive.svg"
        itensList.classList.add('expanded');
        itensList.classList.remove('collapsed');
    } else {
        arrow.classList.add("rotate")
        archive.src = "./icons/closedArchive.svg"
        itensList.classList.add('collapsed');
        itensList.classList.remove('expanded');
    }

}