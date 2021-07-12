let ua = navigator.userAgent,
  isAndroid = /Android/i.test(ua),
  isBlackBerry = /BlackBerry/i.test(ua),
  isWindowPhone = /IEMobile/i.test(ua),
  isIOS = /iPhone|iPad|iPod/i.test(ua),
  isHJApp = /HJApp/.test(ua),
  isCTpc = /QtWebEngine/.test(ua),
  isMiniProgram = /miniProgram/.test(ua),
  isWeChat = /micromessenger/i.test(ua),
  isWxWork = /wxwork/i.test(ua),
  isMobile = isAndroid || isIOS || isBlackBerry || isWindowPhone,
  isPC = !isMobile;

const device = {
  platform: isMobile ? 'mobile' : 'pc', //h5或pc平台
  isHJApp: isHJApp, //是否app内嵌
  isPCClient: isCTpc, //是否pc Client内嵌
  isWeChat: isWeChat, //微信环境
  isWxWork: isWxWork, //企业微信环境
  isMobile: isMobile,
  isPC: isPC,
  isIOS: isIOS,
  isAndroid: isAndroid,
  isMiniProgram: isMiniProgram,
};

export default device;
