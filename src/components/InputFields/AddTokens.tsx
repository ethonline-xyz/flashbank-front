import React from "react";

// hooks and services
import { useStoreState } from "../../store/globalStore";

// components, styles and UI
import { Button, Input } from "semantic-ui-react";

// interfaces
export interface AddTokensProps {}

const AddTokens: React.FunctionComponent<AddTokensProps> = () => {
  const { web3 } = useStoreState((state) => state);

  return (
    <div className="entry-form">
      <h4>Add Tokens</h4>
      <Input fluid placeholder="Amount" />
      <Button className="submit-button" fluid type="submit">
        deposit
      </Button>
    </div>
  );
};

export default AddTokens;
