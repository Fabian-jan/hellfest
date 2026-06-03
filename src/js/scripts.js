// toggle for all menus
export function toggleMenu(target, menu) {

    const toggle = document.querySelector(target);
    const collapse = document.querySelector(menu);
    
    toggle.addEventListener('click', () => {
        collapse.classList.toggle('menu-opened');
    });
    
}

// rgb to hexadecimal
function rgbToHex(rgb) {
    return '#' + rgb.match(/\d+/g)
        .map(n => parseInt(n).toString(16).padStart(2, '0'))
        .join('');
}

// change primary color picker
export function changePrimary() {
    const colorItems = document.querySelectorAll('.colorz-picker li');
    const body = document.querySelector('body');
    colorItems.forEach(colorItem => {        
        colorItem.addEventListener('click', () => {
            const backgroundColor = getComputedStyle(colorItem).backgroundColor;
            const hexColor = rgbToHex(backgroundColor);
            console.log(hexColor);
            body.style.setProperty('--primary', hexColor);
        });
    });
}