import Btn from './button';
import Err from './error';
import Msg from './message';
import Page from './page';

export type MsgType = typeof Msg;
export type ErrType = typeof Err;
export type BtnType = typeof Btn;
export type PageType = typeof Page;

export const language = { Btn, Err, Msg, Page };
