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
  const { web3, account, selectedToken } = useStoreState((state) => state);

  const [value, setValue] = useState<string>("");

  const handleSubmit = () => {
    let token = selectedToken;
    if (!token) return Swal.fire("err...", "Please select token", "warning");
    if (!value) return Swal.fire("err...", "Please enter a value", "warning");
    var contractInstance = new web3.eth.Contract(
      cERC20PoolABI,
      AddressOfContract.ctokenPools[token.toLowerCase()]
    );
    let valueInWei = String((Number(value) * 10 ** 8).toFixed(0));
    contractInstance.methods
      .deposit(valueInWei)
      .send({
        from: account,
      })
      .on("transactionHash", function (hash) {
        // TODO: can etherscan or hash can be link in the modal?
        Swal.fire(
          "Tx pending",
          `https://kovan.etherscan.io/tx/${hash}`,
          "success"
        ); // TODO: Here it should be status as in the modal pending
        setValue("");
      })
      .on("receipt", function (receipt) {
        Swal.fire(
          "Tx Confimred",
          `https://kovan.etherscan.io/tx/${receipt.transactionHash}`,
          "success"
        ); /// TODO: and whenever it comes here it should update to `transaction confirmed` with status as success
      });
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
