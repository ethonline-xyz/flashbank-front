import { Action, action, createTypedHooks } from "easy-peasy";

export interface IGlobalStore {
  web3: any;
  web3Static: any;
  selectedToken: string;
  account: string;
  network: string;
  connected: boolean;

  // actions
  setWeb3: Action<IGlobalStore, any>;
  setWeb3Static: Action<IGlobalStore, any>;
  setSelectedToken: Action<IGlobalStore, string>;
  setAccount: Action<IGlobalStore, string>;
  setNetwork: Action<IGlobalStore, string>;
  setConnected: Action<IGlobalStore, boolean>;
}

const globalStore: IGlobalStore = {
  web3: null,
  web3Static: null,
  account: "",
  network: "",
  selectedToken: "dai",
  connected: false,

  // actions
  setWeb3: action((state, payload: any) => {
    state.web3 = payload;
  }),

  setWeb3Static: action((state, payload: any) => {
    state.web3Static = payload;
  }),

  setSelectedToken: action((state, payload: string) => {
    state.selectedToken = payload;
  }),

  setAccount: action((state, payload: string) => {
    state.account = payload;
  }),

  setNetwork: action((state, payload: string) => {
    state.network = payload;
  }),

  setConnected: action((state, payload: boolean) => {
    state.connected = payload;
  }),
};

export default globalStore;

const { useStoreActions, useStoreState } = createTypedHooks<IGlobalStore>();
export { useStoreActions, useStoreState };
