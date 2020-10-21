import React from "react";
// import cERC20PoolABI from "../cERC20Pool.json";
// import flashLoadModuleABI from "../flashLoadModule.json";

// hooks and services
import { useStoreState } from "../../store/globalStore";

// components, styles and UI
import { Icon } from "semantic-ui-react";

// interfaces
export interface StatsProps {}

const Stats: React.FunctionComponent<StatsProps> = () => {
  const { web3 } = useStoreState((state) => state);

  return (
    <div className="stats">
      <div className="stats-card">
        <div className="stat-title">
          Locked Assets
          <Icon name="money" color="green" />
        </div>
        <div className="stat-value">$10.00</div>
      </div>

      <div className="stats-card">
        <div className="stat-title">
          Earnings
          <Icon name="money" color="green" />
        </div>
        <div className="stat-value">$5.00</div>
      </div>

      <div className="stats-card">
        <div className="stat-title">
          Pool Fee
          <Icon name="money" color="green" />
        </div>
        <div className="stat-value">$0.02</div>
      </div>

      <div className="stats-card">
        <div className="stat-title">
          Avg Apy
          <Icon name="money" color="green" />
        </div>
        <div className="stat-value">2.1</div>
      </div>

      <div className="stats-card">
        <div className="stat-title">
          Flashloan avl
          <Icon name="money" color="green" />
        </div>
        <div className="stat-value">$100.00</div>
      </div>
    </div>
  );
};

export default Stats;
