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