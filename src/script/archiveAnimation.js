const archive = document.querySelector('.archives-itens-header')

archive.addEventListener('click', function() {
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
})