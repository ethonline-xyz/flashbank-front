import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

// hooks and services
import { createStore, StoreProvider } from "easy-peasy";
import globalStore, { IGlobalStore } from "./store/globalStore";

// components, styles and UI
import { Icon } from "semantic-ui-react";
import AddTokens from "./components/InputFields/AddTokens";
import AddUnderlyingTokens from "./components/InputFields/AddUnderlyingTokens";
import WithdrawTokens from "./components/InputFields/WithdrawTokens";
import Stats from "./components/Stats/Stats";
import WalletInfo from "./components/Wallet/WalletInfo";
import TokenDropdown from "./components/InputFields/TokenDropdown";

const store = createStore<IGlobalStore>(globalStore);

function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <div className="form">
          <div className="form-title">
            <div className="app-title">
              Flash Bank
              <Icon name="lightning" color="yellow" />
            </div>
            <TokenDropdown />
          </div>

          {/* Input fields */}
          <AddTokens />
          <AddUnderlyingTokens />
          <WithdrawTokens />
        </div>

        {/* stats and wallet stuff */}
        <div className="right-pane">
          <WalletInfo />
          <Stats />
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
