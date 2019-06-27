const electron = require('electron')
const {app, BrowserWindow, globalShortcut} = require('electron')

let timeAlive = (60 * 5) * 1100
var closable = false
let warningBreak;

const openWarningBreak = function () {
    warningBreak= new BrowserWindow({
        width: 400,
        height: 400,
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        fullscreen: true,
        closable:false,
    })
    warningBreak.loadFile('warningBreak/warning.html')
    warningBreak.maximize()
    globalShortcut.register('F11', () => {})
    globalShortcut.register('Alt+F4', () =>{})
    globalShortcut.register('Alt+Tab', () =>{})
    globalShortcut.register('CommandOrControl+m', () =>{})
    globalShortcut.register('CommandOrControl+w', () =>{})
    globalShortcut.register('CommandOrControl+r', () =>{})
    globalShortcut.register('CommandOrControl+Shift+r', () =>{})
    globalShortcut.register('CommandOrControl+Shift+i', () =>{})
    globalShortcut.register('CommandOrControl+q', () =>{})
    setTimeout(() => {
        closable = true
        warningBreak.close()
    }, timeAlive);
    warningBreak.on('close', (event) =>{
        if(closable == false){
            event.preventDefault()
        }
    })
};

app.on('ready', () => setTimeout(openWarningBreak,500))
