import React from 'react';

const Log = React.lazy(() =>
  import(/* webpackChunkName: "log" */ './pages/log/Log')
);
const Join = React.lazy(() =>
  import(/* webpackChunkName: "log" */ './pages/joinLive/index')
);

export const routes = [
  {
    path: '/log',
    component: Log,
  },
  {
    path: '/join',
    component: Join,
  },
];
