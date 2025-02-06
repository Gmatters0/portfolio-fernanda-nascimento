window.onload = () => {
  const categories = [
      { counter: 'contador', source: 'social-media' },
      { counter: 'contador', source: 'brand' },
      { counter: 'contador', source: 'video' }
  ];

  categories.forEach(({counter, source}, index) => {
      const elements = document.getElementsByClassName(source);
      const counterElement = document.getElementsByClassName(counter)[index];
      
      if (counterElement) {
          counterElement.innerHTML = `(${elements.length})`;
      }
  });
};