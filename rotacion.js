const modelo = document.querySelector('model-viewer');

// Inicia la rotación automáticamente al cargar la página
modelo.addEventListener('load', () => {
  modelo.setAttribute('autoplay', true);
  modelo.setAttribute('animation-name', 'orbit');
});
