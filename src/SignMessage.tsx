import { useState } from "react";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

const SignMessage = () => {
  const [signature, setSignature] = useState(null);
  const { isAuthenticated, primaryWallet } = useDynamicContext();

  const signMessage = async () => {
    const connector = primaryWallet?.connector;
    if (!connector) return;

    const signer: any = await connector.getSigner();

    const message = "Hello World";

    const signature = await signer.signMessage(message);
    setSignature(signature);

    return;
  };

  return (
    <div>
      {isAuthenticated && (
        <div>
          <button onClick={() => signMessage()}>Sign Message</button>
          {signature !== null && <p>{signature}</p>}
        </div>
      )}
    </div>
  );
};

export default SignMessage;
