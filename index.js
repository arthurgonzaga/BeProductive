const Time = require("./Time")
const {app, BrowserWindow, globalShortcut} = require('electron')
let warning;
var timeAlive = (60 * 1) * 1100
var closable = false;
// TODO: make a decent home page later
//let home;

const openWarning = function () {
    warning= new BrowserWindow({
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        fullscreen: true,
        closable:false,
    })
    warning.loadFile('warningBreak/warning.html')
    warning.maximize()
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
        warning.close()
    }, timeAlive);
    warning.on('close', (event) =>{
        if(closable == false){
            event.preventDefault()
        }
    })
};

/*openHome = function(){
    home = new BrowserWindow({
        width: 1280,
        height: 720
    })
    home.setMenuBarVisibility(false)
    home.loadFile('home/home.html')

}*/

app.on('ready', ()=>{
    
    /*
    TODO: get input about: 
    0: Saved or newer option
    1: How many things to be reminded
    2: Time and Title
    3: ask if wanna save the configuration
    4: start counting all the tasks
    */
   let time = new Time(10*1*1000);
   setTimeout(openWarning,500)
})
module.exports = Time;
