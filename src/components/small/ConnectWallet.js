import React from "react";

import { NetworkErrorMessage } from "./NetworkErrorMessage";

export function ConnectWallet({ connectWallet, networkError, dismiss }) {
  return (
    <div>
        <div className="col-12 text-center">
          {networkError && (
            <NetworkErrorMessage 
              message={networkError} 
              dismiss={dismiss} 
            />
          )}
        </div>
    

        <button
            onClick={connectWallet}
            className="bg-card d-xl-block d-none border border-light ml-xl-4 br-20 py-1 px-3 text-dark zoom-in font-weight-bold"
            >
            <i className="fa fa-lock text-dark mr-3"></i>
            Connect Wallet
        </button>
    </div>
  );
}
