import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";
import "./App.css";
import AddTokens from "./components/InputFields/AddTokens";
import AddUnderlyingTokens from "./components/InputFields/AddUnderlyingTokens";
import WithdrawTokens from "./components/InputFields/WithdrawTokens";
import Stats from "./components/Stats/Stats";
import WalletInfo from "./components/Wallet/WalletInfo";

function App() {
  return (
    <div className="App">
      <div className="form">
        <div className="form-title">
          <h2>
            Flash Bank
            <Icon name="lightning" color="yellow" />
          </h2>
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
  );
}

export default App;
