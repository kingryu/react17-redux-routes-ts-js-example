import { language as enLanguage } from './en-US/index';
import {
  language as cnLanguage,
  MsgType,
  BtnType,
  PageType,
  ErrType,
} from './zh-CN/index';

interface LangType {
  Msg: MsgType;
  Err: ErrType;
  Page: PageType;
  Btn: BtnType;
}

let lang: LangType;
let locale = 'cn';

export function setLan(language: string) {
  if (language.indexOf('en') > -1) {
    lang = enLanguage as LangType;
    locale = 'en';
  } else {
    lang = cnLanguage;
    locale = 'cn';
  }
}

function getLocale() {
  return locale;
}

export { lang, getLocale };
