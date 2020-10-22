import React, { useEffect, useState } from "react";
// import cERC20PoolABI from "../cERC20Pool.json";
// import flashLoadModuleABI from "../flashLoadModule.json";

// hooks and services
import { useStoreState } from "../../store/globalStore";

// components, styles and UI
import { Icon, Loader } from "semantic-ui-react";

// interfaces
export interface StatsProps {}

const Stats: React.FunctionComponent<StatsProps> = () => {
  const { web3, connected } = useStoreState((state) => state);

  const [lockedAssets, setLockedAssets] = useState<string>("");
  const [earnings, setEarnings] = useState<string>("");
  const [poolFee, setPoolFee] = useState<string>("");
  const [avgApy, setAvgApy] = useState<string>("");
  const [flashloanAvailable, setFlashloanAvailable] = useState<string>("");

  const updateValues = () => {
    // do your magic here!
    // set values after fetching
    // rest will be taken care of
    setLockedAssets("a");
    setEarnings("a");
    setPoolFee("a");
    setAvgApy("a");
    setFlashloanAvailable("a");
  };

  useEffect(() => {
    updateValues();
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
        <div className="stat-value">${poolFee || <Loader inline active />}</div>
      </div>

      <div className="stats-card">
        <div className="stat-title">
          Avg Apy
          <Icon name="exchange" color="olive" />
        </div>
        <div className="stat-value">${avgApy || <Loader inline active />}</div>
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
    </div>
  );
};

export default Stats;
