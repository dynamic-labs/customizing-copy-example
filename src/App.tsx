import React from "react";

import "./App.css";
import {
  DynamicContextProvider,
  DynamicWidget,
  LocaleResource,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

function App() {
  const signMessageCopy: LocaleResource = {
    en: {
      dyn_login: {
        title: {
          all: "Log in or sign up",
          all_wallet_list: "Select your wallet",
          wallet_only: "Find your favorite",
        },
      },
    },
  };

  return (
    <div className="App">
      <DynamicContextProvider
        settings={{
          environmentId: "f0b977d0-b712-49f1-af89-2a24c47674da",
          walletConnectors: [EthereumWalletConnectors],
        }}
        locale={signMessageCopy}
      >
        <DynamicWidget />
      </DynamicContextProvider>
    </div>
  );
}

export default App;
