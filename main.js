const { app } = require('electron');
const scheduleChecker = require('./schedule-checker');

app.whenReady().then(() => {
  scheduleChecker.start();
});