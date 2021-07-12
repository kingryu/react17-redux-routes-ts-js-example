import React, { Suspense, useState } from 'react';
import Loading from './components/Loading';
import Toast from './components/Toast';
import { useSelector, useDispatch } from 'react-redux';
import { selectToast, closeToast } from './features/toast/toastSlice';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { routes } from './routes';

import './App.scss';
const App = () => {
  const toast = useSelector(selectToast);
  const dispatch = useDispatch();

  const block = 'app';
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <div className={block} style={{ '--dpr': devicePixelRatio }}>
          <Switch>
            {routes.map(({ path, component }) => (
              <Route key={path} path={path}>
                {React.createElement(component)}
              </Route>
            ))}
            <Route>
              <Redirect to="/log" />
            </Route>
          </Switch>
        </div>
        <div id="toast"></div>
      </Router>
      <Toast
        visible={toast}
        content={toast}
        type={1}
        onClose={() => {
          dispatch(closeToast());
        }}
      ></Toast>
    </Suspense>
  );
};

export default App;
