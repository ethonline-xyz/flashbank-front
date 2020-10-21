import React, { useState } from "react";
import cERC20PoolABI from "../cERC20Pool.json";
// import flashLoadModuleABI from "../flashLoadModule.json";

// hooks and services
import { useStoreState } from "../../store/globalStore";
import { AddressOfContract } from "../addresses";
import Swal from "sweetalert2";

// components, styles and UI
import { Button, Input } from "semantic-ui-react";

// interfaces
export interface AddTokensProps {}

const AddTokens: React.FunctionComponent<AddTokensProps> = () => {
  const { web3 } = useStoreState((state) => state);

  const [value, setValue] = useState<string>("");

  const handleSubmit = () => {
    if (value) {
      var contractInstance = new web3.eth.Contract(
        cERC20PoolABI,
        AddressOfContract
      );
      contractInstance.methods
        .deposit(value)
        .send()
        .on("transactionHash", function (hash) {
          Swal.fire("Txn Successfull", hash, "success");
          // Swal.fire("Oops...", "Txn Failed, try again", "error"); // use if fail
        });

      setValue("");
    } else {
      Swal.fire("err...", "Please enter a value", "warning");
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
