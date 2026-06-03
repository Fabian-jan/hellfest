export function initBurgerMenu() {

    const toggle = document.querySelector('.navbar-toggle');
    const collapse = document.querySelector('.navbar-collapse');
    console.log(toggle, collapse),
    
    toggle.addEventListener('click', () => {
        collapse.classList.toggle('is-open');
    });
    
    document.querySelectorAll('.navbar-collapse a').forEach(link => {
        link.addEventListener('click', () => {
            collapse.classList.remove('is-open');
        });
    });
    
}
