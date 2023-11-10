import React from "react";

import "./App.css";
import {
  DynamicContextProvider,
  DynamicWidget,
  LocaleResource,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import SignMessage from "./SignMessage";

function App() {
  const signMessageCopy: LocaleResource = {
    en: {
      dyn_sign_message: {
        sign_button: "Confirm",
        title: "Confirm it's you to continue",
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
        <SignMessage />
      </DynamicContextProvider>
    </div>
  );
}

export default App;
