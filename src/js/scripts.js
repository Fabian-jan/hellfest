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

// const hueMap = {
//     'color-2016': 0,
//     'color-2017': 50,
//     'color-2018': 119,
//     'color-2023': 214,
//     'color-2024': 31,
//     'color-2025': 2,
//     'color-2026': 72,
// };

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
            body.style.setProperty('--primary-dark', 'color-mix(in srgb, ' + hexColor + ' 80%, black)');
            // const className = [...colorItem.classList].find(c => c.startsWith('color-'));
            // body.style.setProperty('--hue', hueMap[className] + 'deg');

        });
    });
}