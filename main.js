const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        // Personnalise selon ton app :
        // frame: false,        // Sans bordure
        // fullscreen: true,    // Plein écran
        icon: path.join(__dirname, 'icon.png'), // Ton icône
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile('index.html'); // Ton fichier principal
}

app.whenReady().then(createWindow);

// Fermeture réelle ✅
ipcMain.on('quit-app', () => {
    app.quit();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});