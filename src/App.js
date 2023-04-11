import './App.css';
import DashBoard from './Dashboard/DashBoard';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Api/store';
import { useAuth0 } from '@auth0/auth0-react';
import SignInPage from './Login/Login';
// import { RenderLineChart } from './Components/charts/Chart';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {!isAuthenticated && <SignInPage />}
      {isAuthenticated && (
        <>
          <Provider store={store}>
            <DashBoard />
            {/* <RenderLineChart /> */}
          </Provider>
        </>
      )}
    </>
  );
}

export default App;
