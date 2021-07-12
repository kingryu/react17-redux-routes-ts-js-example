import axios from 'axios';
import { domainPrefix } from '../utils/common';
import device from '../utils/device';

const baseURL = `https://${domainPrefix}class.test.com/`;
let request;

const makeAppRequest = (type, url, data = {}) => {
  const { protocol, host, pathname } = new URL(url, baseURL);
  const HJSDK = { netwrok: { tips: 'only sample' } };
  return new Promise((resolve, reject) => {
    HJSDK.network
      .request({
        method: type,
        host: protocol + '//' + host,
        path: pathname,
        params: data,
      })
      .then(
        (res) => {
          resolve({ data: res });
        },
        (err) => {
          //TODO 适配下app下err返回数据接口和axios方式差异
          reject(err);
        }
      );
  });
};

if (device.isHJApp) {
  request = {
    get: (url) => makeAppRequest('GET', url),
    post: (url, data) => makeAppRequest('POST', url, data),
    delete: (url, data) => makeAppRequest('DELETE', url, data),
    put: (url, data) => makeAppRequest('PUT', url, data),
  };
} else {
  request = axios.create({
    baseURL,
    timeout: 10000,
    withCredentials: true,
    responseType: 'json',
  });
}

export const getUser = async () =>
  request
    .get(`https://${domainPrefix}opencourse.techedux.com/pass/api/getUserInfo`)
    .then(
      ({
        userId,
        username,
        mobile,
        mobileBindStatus,
        hasSetPassword,
        profile: { nickname, avatar, orgId, orgCode, orgName, isTeacher },
      }) => ({
        userId,
        username,
        nickname,
        avatar,
        orgId,
        orgCode,
        orgName,
        isTeacher,
        mobile,
        mobileBindStatus,
        hasSetPassword,
      })
    );

export { request };
