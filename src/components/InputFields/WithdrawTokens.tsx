import React from "react";
import { Button, Input } from "semantic-ui-react";

// hooks and services

// components, styles and UI

// interfaces
export interface WithdrawTokensProps {}

const WithdrawTokens: React.FunctionComponent<WithdrawTokensProps> = () => {
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
