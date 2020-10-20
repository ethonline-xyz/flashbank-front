import React from "react";
import { Icon } from "semantic-ui-react";

// hooks and services

// components, styles and UI

// interfaces
export interface StatsProps {}

const Stats: React.FunctionComponent<StatsProps> = () => {
  return (
    <div className="stats">
      {Array.from(Array(6).keys()).map((item) => (
        <div className="stats-card">
          <div className="stat-title">
            Fees
            <Icon name="money" color="green" />
          </div>
          <div className="stat-value">17K</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
