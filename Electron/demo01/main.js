
const { app, BrowserWindow, Notification } = require('electron')

function createWindow () {   
    // 创建浏览器窗口
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // 加载index.html文件
    win.loadFile('index.html')

    // 打开开发者工具
    win.webContents.openDevTools()

    let myNotification = new Notification('标题', {
        body: '通知'
    })
    // myNotification.show()
    myNotification.onclick = () => {
        console.log('通知被点击')
    }
    // window被关闭时触发
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})