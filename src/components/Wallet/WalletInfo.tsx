import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import Web3 from "web3";
import Web3Modal from "web3modal";

// hooks and services

// components, styles and UI

// interfaces
export interface WalletInfoProps {}

const WalletInfo: React.FunctionComponent<WalletInfoProps> = () => {
  const providerOptions = {};
  const web3Modal = new Web3Modal({
    cacheProvider: true, // optional
    providerOptions, // required
  });

  const [account, setAccount] = useState("connect to an ethereum wallet");
  const [web3, setWeb3] = useState(null);
  const [networkId, setNetworkId] = useState("");
  const [connected, setConnected] = useState(false);

  const resetApp = async () => {
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }
    await web3Modal.clearCachedProvider();
    setAccount("connect to an ethereum wallet");
    setWeb3(null);
    setNetworkId("");
    setConnected(false);
  };

  const subscribeProvider = async (provider: any) => {
    if (!provider.on) {
      return;
    }
    provider.on("close", () => resetApp());
    provider.on("accountsChanged", async (accounts: string[]) => {
      console.log("accountChange");
      await setAccount(accounts[0]);
    });
  };

  const onConnect = async () => {
    const provider = await web3Modal.connect();
    await subscribeProvider(provider);
    const web3: any = new Web3(provider);
    console.log(web3);

    const accounts = await web3.eth.getAccounts();
    const address = accounts[0];
    const networkId = await web3.eth.net.getNetworkType();

    await setWeb3(web3);
    await setAccount(address);
    await setNetworkId("ethereum " + networkId);
    await setConnected(true);
  };

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      onConnect();
    }
  }, []);

  return (
    <div className="wallet-connect">
      <div>
        <div className="wallet-network">{networkId}</div>
        <div className="wallet-address">{account}</div>
      </div>
      <Button
        onClick={connected ? resetApp : onConnect}
        className="submit-button"
        size="tiny"
      >
        {connected ? "disconnect" : "connect wallet"}
      </Button>
    </div>
  );
};

export default WalletInfo;
