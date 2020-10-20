import React from "react";
import { Button, Input } from "semantic-ui-react";

// hooks and services

// components, styles and UI

// interfaces
export interface AddUnderlyingTokensProps {}

const AddUnderlyingTokens: React.FunctionComponent<AddUnderlyingTokensProps> = () => {
  return (
    <div className="entry-form">
      <h4>Add Underlying Tokens</h4>
      <Input fluid placeholder="Amount" />
      <Button className="submit-button" fluid type="submit">
        deposit
      </Button>
    </div>
  );
};

export default AddUnderlyingTokens;
