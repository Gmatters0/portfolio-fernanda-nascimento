// Define as cores do keyframe em uma variável
const colors = [
  '#6666ff', // 0%
  '#66ff66', // 25%
  '#ffff66', // 50%
  '#ff6666', // 75%
  '#6666ff'  // 100% - volta para a primeira cor para transição suave
];

function hexToRGB(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function interpolateColors(time) {
  // Ciclo de 25 segundos
  const cycle = 50000;
  const progress = (time % cycle) / cycle;
  
  // Encontra o índice das cores para interpolação
  const index = Math.floor(progress * (colors.length - 1));
  const nextIndex = Math.min(index + 1, colors.length - 1);
  
  // Calcula a porcentagem entre as duas cores
  const colorProgress = (progress * (colors.length - 1)) % 1;
  
  // Converte as cores hex para RGB
  const color1 = hexToRGB(colors[index]);
  const color2 = hexToRGB(colors[nextIndex]);
  
  // Interpola entre as cores
  const r = Math.round(color1.r + (color2.r - color1.r) * colorProgress);
  const g = Math.round(color1.g + (color2.g - color1.g) * colorProgress);
  const b = Math.round(color1.b + (color2.b - color1.b) * colorProgress);
  
  return `rgb(${r}, ${g}, ${b})`;
}

function updateColors(timestamp) {
  const currentColor = interpolateColors(timestamp);
  // Atualiza a cor da seleção
  document.body.style.setProperty('--highlightColor', currentColor);
  // Atualiza a cor do background dos items do arquivo
  document.body.style.setProperty('--archiveBackgroundColor', currentColor);
  // Atualiza a cor para o hover dos links
  document.body.style.setProperty('--linkHoverColor', currentColor);
  requestAnimationFrame(updateColors);
}

// Adiciona o CSS necessário
const style = document.createElement('style');
style.textContent = `
  ::selection {
      background-color: var(--highlightColor);
      color: #000;
  }

  ::-moz-selection {
      background-color: var(--highlightColor);
      color: #000;
  }
  
  /* Adiciona o background animado para os items do arquivo */
  .archive-content-item {
      background-color: var(--archiveBackgroundColor);
  }
  
  /* Animação apenas no hover dos links */
  a:hover {
      color: var(--linkHoverColor);
  }
`;
document.head.appendChild(style);

// Inicia a animação
requestAnimationFrame(updateColors);