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

document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.item-checkbox');
    const clearButton = document.querySelector('.clear-filters');
    const archiveItems = document.querySelectorAll('.archive-item');

    function updateVisibility() {
        const selectedTypes = [];
        
        // Verifica cada checkbox
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const label = checkbox.nextElementSibling;
                
                // Lógica especial para o Contact
                if (label.textContent.trim() === 'CONTACT') {
                    selectedTypes.push('contact');
                } else {
                    // Para os outros tipos, usa o ID
                    switch(label.id) {
                        case 'titulo1':
                            selectedTypes.push('social-media');
                            break;
                        case 'titulo2':
                            selectedTypes.push('brand');
                            break;
                        case 'titulo3':
                            selectedTypes.push('video');
                            break;
                    }
                }
            }
        });

        console.log('Tipos selecionados:', selectedTypes);

        // Se nenhum filtro selecionado, mostra todos
        if (selectedTypes.length === 0) {
            archiveItems.forEach(item => item.style.display = 'block');
            return;
        }

        // Verifica cada item
        archiveItems.forEach(item => {
            const hasSelectedType = selectedTypes.some(type => {
                // Para o contact, verifica a classe diretamente
                if (type === 'contact') {
                    return item.classList.contains('contact');
                }
                // Para os outros tipos, usa as classes dinâmicas
                return item.classList.contains(type);
            });
            
            console.log('Classes do item:', item.classList);
            console.log('Deve mostrar?', hasSelectedType);
            
            item.style.display = hasSelectedType ? 'block' : 'none';
        });
    }

    // Event listeners
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateVisibility);
    });

    // Clear filters
    clearButton.addEventListener('click', () => {
        checkboxes.forEach(cb => cb.checked = false);
        archiveItems.forEach(item => item.style.display = 'block');
    });
});

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

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os items da lista
    const servicesItems = document.querySelectorAll('.archive-item');
    
    servicesItems.forEach((item) => {
        const contentItem = item.querySelector('.archive-content-item');
        const expandedContent = item.querySelector('.expanded-content');
        
        contentItem.addEventListener('click', function() {
            // Simplesmente alterna o estado do item clicado
            if (expandedContent.classList.contains('d-block')) {
                // Se já está expandido, fecha
                expandedContent.classList.remove('d-block');
            } else {
                // Se está fechado, expande
                expandedContent.classList.add('d-block');
            }
        });
    });
});