import React from "react";

// hooks and services
import { useStoreState } from "../../store/globalStore";

// components, styles and UI
import { Button, Input } from "semantic-ui-react";

// interfaces
export interface AddUnderlyingTokensProps {}

const AddUnderlyingTokens: React.FunctionComponent<AddUnderlyingTokensProps> = () => {
  const { web3 } = useStoreState((state) => state);

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
