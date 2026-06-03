// Les scripts JS sont importés dans ce fichier


import { loadComponent } from './include.js'; 
import {initBurgerMenu } from './scripts.js';

await loadComponent('#header', '../components/header.html');
await loadComponent('#footer', '../components/footer.html');

initBurgerMenu();