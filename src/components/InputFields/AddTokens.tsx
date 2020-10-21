import React, { useState } from "react";

// hooks and services
import { useStoreState } from "../../store/globalStore";

// components, styles and UI
import { Button, Input } from "semantic-ui-react";

// interfaces
export interface AddTokensProps {}

const AddTokens: React.FunctionComponent<AddTokensProps> = () => {
  const { web3 } = useStoreState((state) => state);

  const [value, setValue] = useState<string>("");

  const handleSubmit = () => {
    if (value) {
      // make changes here for deposit
      console.log(value);
      setValue("");
    } else {
      alert("please enter valid value");
    }
  };

  return (
    <div className="entry-form">
      <h4>Add Tokens</h4>
      <Input
        fluid
        placeholder="Amount"
        onChange={(e) => setValue(e.target.value)}
      />
      <Button className="submit-button" fluid onClick={handleSubmit}>
        deposit
      </Button>
    </div>
  );
};

export default AddTokens;
