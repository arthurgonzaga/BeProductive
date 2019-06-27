const electron = require('electron')
const {app, BrowserWindow, globalShortcut} = require('electron')

var closable = false
let window;
const onAppReady = function () {
    window= new BrowserWindow({
        width: 400,
        height: 400,
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        fullscreen: true,
        closable:false,
    })
    window.loadFile('index.html')
    window.maximize()
    globalShortcut.register('F11', () => {})
    globalShortcut.register('Alt+F4', () =>{})
    globalShortcut.register('Alt+Tab', () =>{})
    globalShortcut.register('CommandOrControl+m', () =>{})
    globalShortcut.register('CommandOrControl+w', () =>{})
    globalShortcut.register('CommandOrControl+r', () =>{})
    globalShortcut.register('CommandOrControl+Shift+r', () =>{})
    globalShortcut.register('CommandOrControl+Shift+i', () =>{})
    // uncomment later
    //globalShortcut.register('CommandOrControl+q', () =>{})
    setTimeout(() => {
        closable = true
        window.close()
    }, (1 * 5) * 1000);
    window.on('close', (event) =>{
        if(closable == false){
            event.preventDefault()
        }
    })
};

app.on('ready', () => setTimeout(onAppReady,500))
