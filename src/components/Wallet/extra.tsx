// const [fetching, setFetching] = useState(false);
// const [account, setAccount] = useState("");
// const [web3, setWeb3] = useState(null);
// const [provider, setProvider] = useState(null);
// const [connected, setConnected] = useState(false);
// const [chainId, setChainId] = useState(1);
// const [networkId, setNetworkId] = useState(1);
// const [assets, setAssets] = useState([]);
// const [showModal, setShowModal] = useState(false);
// const [pendingRequest, setPendingRequest] = useState(false);
// const [result, setResult] = useState(false);

// function initWeb3(provider: any) {
//   const web3: any = new Web3(provider);
//   web3.eth.extend({
//     methods: [
//       {
//         name: "chainId",
//         call: "eth_chainId",
//         outputFormatter: web3.utils.hexToNumber,
//       },
//     ],
//   });
//   return web3;
// }

// const resetApp = async () => {
//   if (web3 && web3.currentProvider && web3.currentProvider.close) {
//     await web3.currentProvider.close();
//   }
//   await web3Modal.clearCachedProvider();
//   setFetching(false);
//   setAccount("");
//   setWeb3(null);
//   setProvider(null);
//   setConnected(false);
//   setChainId(1);
//   setNetworkId(1);
//   setAssets([]);
//   setShowModal(false);
//   setPendingRequest(false);
//   setResult(false);
// };

// const subscribeProvider = async (provider: any) => {
//   if (!provider.on) {
//     return;
//   }
//   provider.on("close", () => resetApp());
//   provider.on("accountsChanged", async (accounts: string[]) => {
//     console.log("accountChange");
//     await setAccount(accounts[0]);
//   });
//   provider.on("chainChanged", async (chainId: number) => {
//     const networkId = await web3.eth.net.getId();
//     console.log("chainChanged");
//     await setChainId(chainId);
//     await setNetworkId(networkId);
//   });
//   provider.on("networkChanged", async (networkId: number) => {
//     console.log("networkChange");
//     const chainId = await web3.eth.chainId();
//     await setChainId(chainId);
//     await setNetworkId(networkId);
//   });
// };

// const onConnect = async () => {
//   const provider = await web3Modal.connect();
//   // await subscribeProvider(provider);
//   const web3: any = new Web3(provider);

//   provider.on("networkChanged", async (networkId: number) => {
//     console.log("networkChange");
//   });

//   const accounts = await web3.eth.getAccounts();
//   const address = accounts[0];
//   const networkId = await web3.eth.net.getId();
//   // const chainId = await web3.eth.chainId();

//   await setWeb3(web3);
//   await setProvider(provider);
//   await setConnected(true);
//   await setAccount(address);
//   // await setChainId(chainId);
//   await setNetworkId(networkId);
// };

export default "K";
