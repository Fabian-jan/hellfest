// Les scripts JS sont importés dans ce fichier

import * as scripts from './scripts.js';

import { loadComponent } from './include.js'; 

await loadComponent('#header', '../components/header.html');
