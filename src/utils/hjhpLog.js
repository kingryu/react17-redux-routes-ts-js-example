import device from './device';

let logLine =
  '' +
  new Date() +
  'version' +
  process.env.REACT_APP_VERSION +
  ' buildId: ' +
  process.env.REACT_APP_BUILDID +
  ' ua: ' +
  window.navigator.userAgent;
let count = 1;
const maxLine = device.isPC ? 150 : 100;

function debug() {
  return logLine;
}

function log(str, params = '', more = '') {
  count++;
  if (count > maxLine) {
    logLine = logLine.slice(logLine.indexOf('\n>>>'));
  }
  let date = new Date();
  logLine +=
    date.getHours() +
    ':' +
    date.getMinutes() +
    ':' +
    date.getSeconds() +
    str +
    ', ' +
    JSON.stringify(params) +
    JSON.stringify(more) +
    '\n>>>';
}

window.hpLog = log;
window.hpdebug = debug;

const xlog = {
  Log: log,
  log: log,
  debug: debug,
};

export default xlog;
