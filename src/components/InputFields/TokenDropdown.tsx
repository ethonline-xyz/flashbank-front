import React from "react";

// hooks and services
import { useStoreActions } from "../../store/globalStore";

// components, styles and UI
import { Dropdown } from "semantic-ui-react";

// interfaces
export interface TokenDropdownProps {}

const TokenDropdown: React.FunctionComponent<TokenDropdownProps> = () => {
  const setCurrentToken = useStoreActions(
    (actions) => actions.setSelectedToken
  );

  const countryOptions = [
    { key: "dai", value: "dai", text: "dai" },
    { key: "eth", value: "eth", text: "eth" },
  ];

  const handleChange = (e, data) => {
    setCurrentToken(data.value);
  };

  return (
    <Dropdown
      selectOnBlur
      placeholder="token"
      className="token"
      compact
      selection
      options={countryOptions}
      onChange={handleChange}
    />
  );
};

export default TokenDropdown;
