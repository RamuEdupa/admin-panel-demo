import './App.css';
import DashBoard from './Dashboard/DashBoard';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Api/store';
import { useAuth0 } from '@auth0/auth0-react';
import SignInSide from './Login/Login';

function App() {
  const {  isAuthenticated } = useAuth0();

  return (
    <>
    {!isAuthenticated && <SignInSide/>}
    {isAuthenticated && <Provider store={store}>
      <DashBoard />
    </Provider>}
    </>
  );
}

export default App;
