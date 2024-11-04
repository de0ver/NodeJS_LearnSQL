/*  
	$ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $
	$                                     $
	$	Author: Kiselev Denis (@de0ver)	  $
	$	Create Date: 03.11.2024 14:48	  $
	$                                     $
	$ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $
*/
const {app, BrowserWindow, screen} = require('electron');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: screen.getPrimaryDisplay().workAreaSize.width,
        height: screen.getPrimaryDisplay().workAreaSize.height,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
        }
    });
    win.loadFile('./app/pages/index.html');

    win.removeMenu();
}

app.whenReady().then(() => createWindow());
app.on('window-all-closed', () => app.quit());