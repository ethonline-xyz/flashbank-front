import React from "react";

// hooks and services
import { useStoreState } from "../../store/globalStore";

// components, styles and UI
import { Button, Input } from "semantic-ui-react";

// interfaces
export interface WithdrawTokensProps {}

const WithdrawTokens: React.FunctionComponent<WithdrawTokensProps> = () => {
  const { web3 } = useStoreState((state) => state);

  return (
    <div className="entry-form">
      <h4>Withdraw Tokens</h4>
      <Input className="input-field" fluid placeholder="Amount" />
      <Input fluid placeholder="Address" />
      <Button className="submit-button" fluid type="submit">
        withdraw
      </Button>
    </div>
  );
};

export default WithdrawTokens;
