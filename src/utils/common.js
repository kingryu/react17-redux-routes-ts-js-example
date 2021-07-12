import device from './device';
import { lang } from '../i18n/index';

export function getQueryStringByName(name) {
  let result = window.location.search.match(
    new RegExp('[?&]' + name + '=([^&]+)', 'i')
  );
  if (result === null || result.length < 1) {
    return '';
  }
  return decodeURIComponent(result[1]);
}

export const [domainPrefix] = /^(qa|yz)/.exec(window.location.hostname) || [''];

/**
 * @see [StdDateFormat](https://github.com/FasterXML/jackson-databind/issues/1744)
 */
export const fixIOSTime = (time) => {
  //fix ios invalida Date
  if (time && time.lastIndexOf('+0800') > -1) {
    time = time.split('+0800')[0] + '+08:00';
  }
  return time;
};
