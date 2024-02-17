// ==UserScript==
// @name         Tab renamer
// @namespace    http://tampermonkey.net/
// @version      2024-02-17
// @description  Rename tabs
// @author       ecstrema
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=polymtl.ca
// @grant        none
// ==/UserScript==

const v = {
    "https://moodle.polymtl.ca/pluginfile.php/1062264/mod_resource/content/5/ELE_3000_H2024_cours_7.pdf": "Cours 7: Design Détaillé",
    "https://moodle.polymtl.ca/pluginfile.php/1225086/mod_resource/content/1/ELE_3000_H2024_cours_6.pdf": "Cours 6: Design Préliminaire",
    "https://moodle.polymtl.ca/pluginfile.php/1223741/mod_resource/content/1/ELE_3000_H2024_cours_5.1.pdf": "Cours 5 : Spécifications fonctionnelles: Visualisation et synthèse",
    "https://moodle.polymtl.ca/pluginfile.php/1222269/mod_resource/content/2/ELE_3000_H2024_cours_4.2.pdf": "Cours #4 : Définition des spécifications fonctionnelle",
    "https://moodle.polymtl.ca/pluginfile.php/1220538/mod_resource/content/1/ELE_3000_H2024_Cours_3a.pdf": "Cours #3 : Méthodologie de design et développement durable",
    "https://moodle.polymtl.ca/pluginfile.php/1218529/mod_resource/content/1/Plan%20de%20cours%20ELE3000_FINAL_07_01_H2024.pdf": "Plan de cours",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

function rename() {
    if (v[document.location.href]) {
        document.title = ""; // Looks like a bug
        document.title = v[document.location.href];
    }
    setTimeout(rename, 1_000);
}

rename();
