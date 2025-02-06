const initArchiveSound = () => {
  const sound = new Audio('./sounds/villager.mp3');
  sound.volume = 0.5;
  
  const archiveHeader = document.querySelector('#archive-itens-header');
  
  if (archiveHeader) {
      archiveHeader.addEventListener('click', () => {
          sound.currentTime = 0;
          sound.play().catch(error => {
              console.error('Erro ao tocar o som:', error);
          });
      });
  }
};

document.readyState === 'loading' 
  ? document.addEventListener('DOMContentLoaded', initArchiveSound)
  : initArchiveSound();