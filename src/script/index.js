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
    // Cache dos elementos DOM
    const checkboxes = document.querySelectorAll('.item-checkbox');
    const clearButton = document.querySelector('.clear-filters');
    const archiveItems = document.querySelectorAll('.archive-item');

    // Mapa para os tipos dinâmicos
    const dynamicTypeMap = {
        'titulo1': 'social-media',
        'titulo2': 'brand',
        'titulo3': 'video'
    };

    function updateVisibility() {
        const selectedTypes = [];
        
        // Verifica checkboxes marcados
        for (const checkbox of checkboxes) {
            if (!checkbox.checked) continue;
            
            const label = checkbox.nextElementSibling;
            
            // Lógica separada para o Contact
            if (label.textContent.trim() === 'CONTACT') {
                selectedTypes.push('contact');
            } else {
                // Para os tipos dinâmicos, usa o mapa
                const type = dynamicTypeMap[label.id];
                if (type) selectedTypes.push(type);
            }
        }

        // Se nenhum filtro, mostra todos
        if (selectedTypes.length === 0) {
            for (const item of archiveItems) {
                item.style.display = 'block';
            }
            return;
        }

        // Verifica cada item
        for (const item of archiveItems) {
            const hasSelectedType = selectedTypes.some(type => 
                item.classList.contains(type)
            );
            
            // Atualiza visibilidade
            item.style.display = hasSelectedType ? 'block' : 'none';
        }
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