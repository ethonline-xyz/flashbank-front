import React, { useState } from "react";

// hooks and services
import { useStoreState } from "../../store/globalStore";

// components, styles and UI
import { Button, Input } from "semantic-ui-react";

// interfaces
export interface WithdrawTokensProps {}

const WithdrawTokens: React.FunctionComponent<WithdrawTokensProps> = () => {
  const { web3 } = useStoreState((state) => state);

  const [value, setValue] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handleSubmit = () => {
    if (value && address) {
      // make changes here for withdraw
      console.log(value, address);
      setValue("");
      setAddress("");
    } else {
      alert("please enter valid value");
    }
  };

  return (
    <div className="entry-form">
      <h4>Withdraw Tokens</h4>
      <Input
        className="input-field"
        fluid
        placeholder="Amount"
        onChange={(e) => setValue(e.target.value)}
      />
      <Input
        fluid
        placeholder="Address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <Button className="submit-button" fluid onClick={handleSubmit}>
        withdraw
      </Button>
    </div>
  );
};

export default WithdrawTokens;
