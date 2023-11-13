import { useState } from "react";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

const SignMessage = () => {
  // const { openWallet } = useWalletItemActions();

  const [signature, setSignature] = useState("");
  const { isAuthenticated, primaryWallet } = useDynamicContext();

  const signMessage = async () => {
    const connector = primaryWallet?.connector;
    if (!connector) return;

    const message = "Hello World";

    const signature = await connector.signMessage(message);
    setSignature(signature || "");

    return;
  };

  return (
    <div>
      {isAuthenticated && (
        <div>
          {/* <button onClick={() => openWallet("metamask")}>
            Sign with MetaMask
          </button> */}
          <button onClick={() => signMessage()}>Sign Message</button>

          {signature !== null && <p>{signature}</p>}
        </div>
      )}
    </div>
  );
};

export default SignMessage;
