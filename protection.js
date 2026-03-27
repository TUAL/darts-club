// protection.js

// 1. Désactiver le clic droit
document.addEventListener('contextmenu', event => event.preventDefault());

// 2. Désactiver les raccourcis clavier de développement
document.onkeydown = function(e) {
    // Bloquer F12
    if(e.keyCode == 123) return false;
    // Bloquer Ctrl+Maj+I (Inspecteur), Ctrl+Maj+J (Console), Ctrl+U (Source)
    if(e.ctrlKey && (e.shiftKey && (e.keyCode == 73 || e.keyCode == 74) || e.keyCode == 85)) return false;
};

// 3. Protection contre le "Drag and Drop"
document.addEventListener('dragstart', event => event.preventDefault());

// 4. Désactiver la sélection de texte (évite le bleu au clic rapide)
document.addEventListener('selectstart', event => event.preventDefault());