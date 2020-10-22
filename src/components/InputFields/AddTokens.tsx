import React, { useState, useEffect } from "react";
import cERC20PoolABI from "../cERC20Pool.json";
// import flashLoadModuleABI from "../flashLoadModule.json";

// hooks and services
import { useStoreState } from "../../store/globalStore";
import { AddressOfContract } from "../addresses";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

// components, styles and UI
import { Button, Input } from "semantic-ui-react";

// interfaces
export interface AddTokensProps {}

const AddTokens: React.FunctionComponent<AddTokensProps> = () => {
  const { web3, web3Static,account, selectedToken } = useStoreState((state) => state);

  const [value, setValue] = useState<string>("");
  const [balance, setBalance] = useState<string>("100.00");
  const [isApproved, setIsApproved] = useState<boolean>(false);

  const handleApprove = () => {
    // do some stuff here
    // once approved set isApproved true
    setIsApproved(true);
  };

  useEffect(() => {
    checkAllowance()
  }, []);

  const checkAllowance = async () => {
    let token = selectedToken ? selectedToken : "dai";
    var contractInstance = new web3Static.eth.Contract(
      cERC20PoolABI,
      AddressOfContract.ctokens[token.toLowerCase()]
    );
    let allowance = contractInstance.methods.allowance(account, AddressOfContract.ctokenPools[token.toLowerCase()])
    if (allowance > 10 ** 50) {
      setIsApproved(true);
    } else {
      setIsApproved(false);
    }
  }

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
        Swal.fire(
          "Tx pending",
          `view on <a target="_blank" rel = "noopener noreferrer" href='https://kovan.etherscan.io/tx/${hash}'>etherscan</a>`,
          "success"
        );
        setValue("");
      })
      .on("receipt", function (receipt) {
        checkAllowance()
        toast(`Transaction Confirmed (view)`, {
          onClick: () =>
            window.open(
              `https://kovan.etherscan.io/tx/${receipt.transactionHash}`
            ),
        });
      });
  };

  return (
    <div className="entry-form">
      <div className="balance">
        <h4>BALANCE</h4>
        <div className="balance-value">${balance}</div>
      </div>
      <h4>Deposit cTokens</h4>
      <Input
        fluid
        placeholder="Amount"
        onChange={(e) => setValue(e.target.value)}
      />

      {!isApproved && (
        <>
          <br />
          <Button className="submit-button" fluid onClick={handleApprove}>
            approve cToken
          </Button>
        </>
      )}

      <br />
      <Button
        className="submit-button"
        disabled={!isApproved}
        fluid
        onClick={handleSubmit}
      >
        deposit
      </Button>
    </div>
  );
};

export default AddTokens;
