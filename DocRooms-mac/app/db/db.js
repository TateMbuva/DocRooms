const ipcRenderer = require('electron').ipcRenderer;
var loki = require('lokijs');



ipcRenderer.send('db-status', 'fromDb');
