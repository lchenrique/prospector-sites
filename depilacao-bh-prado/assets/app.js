(() => {
  const header = document.querySelector('[data-header]')
  const menuButton = document.querySelector('.menu-button')
  const menu = document.querySelector('.nav-links')
  const year = document.querySelector('[data-year]')

  if (year) year.textContent = String(new Date().getFullYear())

  const setHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 12)
  setHeader()
  window.addEventListener('scroll', setHeader, { passive: true })

  const closeMenu = () => {
    if (!menuButton || !menu) return
    menuButton.setAttribute('aria-expanded', 'false')
    menuButton.querySelector('.sr-only').textContent = 'Abrir menu'
    menu.classList.remove('is-open')
  }

  menuButton?.addEventListener('click', () => {
    if (!menu) return
    const opening = menuButton.getAttribute('aria-expanded') !== 'true'
    menuButton.setAttribute('aria-expanded', String(opening))
    menuButton.querySelector('.sr-only').textContent = opening ? 'Fechar menu' : 'Abrir menu'
    menu.classList.toggle('is-open', opening)
  })

  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu))
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu()
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) closeMenu()
  })
})()
