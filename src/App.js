import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React, { useEffect } from "react";
import { useContext, useRef, createRef } from 'react';
import web3 from './connection/web3';
import Web3Context from './store/web3-context';
import VestingContext from './store/vesting-context';
import Vesting from './abi/contracts/contracts/Vesting.json';
import "./App.css";
import "./animation.css";
//import Vesting from "./components/pages/Vesting";
import AddVestingSchedule from "./components/pages/AddVestingSchedule";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";
import { Provider } from "react-redux";
import store from "./store";
import Signup from "./components/pages/Signup";
import Vesting_ from "./components/pages/VestingDashboard";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const web3Ctx = useContext(Web3Context);
  const vestingCtx = useContext(VestingContext);

  useEffect(() => {
    // Check if the user has Metamask active
    if (!web3) {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
      return;
    }

    // Function to fetch all the blockchain data
    const loadBlockchainData = async () => {
      // Request accounts acccess if needed
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
      } catch (error) {
        console.error(error);
      }

      // Load account
      const account = await web3Ctx.loadAccount(web3);

      // Load Network ID
      const networkId = await web3Ctx.loadNetworkId(web3);

      // Load Contracts      
      const vestDeployedNetwork = Vesting.networks[networkId];
      const vestContract = vestingCtx.loadContract(web3, Vesting, vestDeployedNetwork);

      if (vestContract) {

      } else {
        window.alert('Vesting contract not deployed to detected network.')
      }

      // Metamask Event Subscription - Account changed
      window.ethereum.on('accountsChanged', (accounts) => {
        web3Ctx.loadAccount(web3);
      });

      // Metamask Event Subscription - Network changed
      window.ethereum.on('accountsChanged', function () {
        window.location.reload();
      });
    };

    loadBlockchainData();
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Vesting_} />
            <Route path="/office404" exact component={AddVestingSchedule} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
