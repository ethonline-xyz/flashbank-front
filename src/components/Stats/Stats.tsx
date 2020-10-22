import React, { useEffect, useState } from "react";
import statsABI from "../statsABI.json";
// import flashLoadModuleABI from "../flashLoadModule.json";

// hooks and services
import { useStoreState } from "../../store/globalStore";
import { AddressOfContract } from "../addresses";

// components, styles and UI
import { Icon, Loader } from "semantic-ui-react";

// interfaces
export interface StatsProps {}

const Stats: React.FunctionComponent<StatsProps> = () => {
  const { web3Static, connected } = useStoreState((state) => state);

  const [lockedAssets, setLockedAssets] = useState<string>("00.00");
  const [earnings, setEarnings] = useState<string>("");
  const [poolFee, setPoolFee] = useState<string>("");
  const [avgApy, setAvgApy] = useState<string>("");
  const [flashloanAvailable, setFlashloanAvailable] = useState<string>("");

  const handleTakeLoan = () => {};

  const updateValues = async () => {
    await getStats();
    setPoolFee("9%");
  };

  function cleanDecimal(num, power) {
    let MUL_DIV = 100;
    if (power || power === 0) {
      MUL_DIV = 10 ** power;
    } else {
      if (num < 0.01) MUL_DIV = 10 ** 6;
      if (num < 1) MUL_DIV = 10 ** 4;
    }
    return Math.floor(Number(num) * MUL_DIV) / MUL_DIV;
  }

  const getStats = async () => {
    let initalExchangeRate = 10 ** 18;
    let noOfBlocksInYear = 7885000;
    var contractInstance = new web3Static.eth.Contract(
      statsABI,
      AddressOfContract.stats
    );
    let pools = Object.values(AddressOfContract.ctokenPools);
    let data = await contractInstance.methods.getStats(pools).call();
    let tlv = 0;
    let allAPY = 0;
    data.forEach((a) => {
      let bal = a[1];
      let price = a[2];
      tlv += (bal / 10 ** 18) * (price / 10 ** 18);
      let diffRate = (a[0] - initalExchangeRate) / initalExchangeRate;
      let diffBlocks = a[3] - a[4];
      allAPY += (diffRate / diffBlocks) * noOfBlocksInYear;
    });

    allAPY = allAPY / data.length / 100;
    setLockedAssets(String(cleanDecimal(tlv, 2)));
    setFlashloanAvailable(String(cleanDecimal(tlv * 0.75, 2)));
    setAvgApy(String(cleanDecimal(allAPY, 2)));
    setEarnings(String(cleanDecimal(tlv * 0.0848354, 4)));
  };

  useEffect(() => {
    if (connected) {
      updateValues();
    }
    // eslint-disable-next-line
  }, [connected]);

  return (
    <div className="stats">
      <div className="stats-card">
        <div className="stat-title">
          Locked Assets
          <Icon name="lock" color="orange" />
        </div>
        <div className="stat-value">
          ${lockedAssets || <Loader inline active />}
        </div>
      </div>

      <div className="stats-card">
        <div className="stat-title">
          Earnings
          <Icon name="line graph" color="green" />
        </div>
        <div className="stat-value">
          ${earnings || <Loader inline active />}
        </div>
      </div>

      <div className="stats-card">
        <div className="stat-title">
          Pool Fee
          <Icon name="money bill alternate outline" color="blue" />
        </div>
        <div className="stat-value">{poolFee || <Loader inline active />}</div>
      </div>

      <div className="stats-card">
        <div className="stat-title">
          Avg Apy
          <Icon name="exchange" color="olive" />
        </div>
        <div className="stat-value">{avgApy || <Loader inline active />}%</div>
      </div>

      <div className="stats-card">
        <div className="stat-title">
          Flashloan avl
          <Icon name="handshake outline" color="grey" />
        </div>
        <div className="stat-value">
          ${flashloanAvailable || <Loader inline active />}
        </div>
      </div>

      <div className="stats-card takeloan" onClick={handleTakeLoan}>
        Take FlashLoan <Icon name="check" />
      </div>
    </div>
  );
};

export default Stats;
