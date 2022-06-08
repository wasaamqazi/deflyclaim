import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Web3Provider from './store/Web3Provider';
import VestingProvider from './store/VestingProvider';

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.MIDDLE,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover toastStyle={{ backgroundColor: "#fad419" }} />
      <AlertProvider template={AlertTemplate} {...options}>
        <Web3Provider>
          <VestingProvider>
            <App />
          </VestingProvider>
        </Web3Provider>
      </AlertProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
