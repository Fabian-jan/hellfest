// Les scripts JS sont importés dans ce fichier


import { loadComponent } from './include.js'; 
import { toggleMenu } from './scripts.js';
import { changePrimary } from './scripts.js';

await loadComponent('#header', '../components/header.html');
await loadComponent('#footer', '../components/footer.html');

toggleMenu('.navbar-toggle', '.navbar-collapse');
toggleMenu('.colorz-toggle', '.colorz-picker');
changePrimary();