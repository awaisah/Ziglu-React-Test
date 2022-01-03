import { FC, useState } from "react";

interface IToggleSwtichProps {
  enabled: boolean, 
  setEnabled: (val: boolean) => void
}

const ToggleSwitch: FC<IToggleSwtichProps> = ({enabled, setEnabled}) => {
  const toggle = () => {
    setEnabled(!enabled)
  }
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name="toggleSwitch"
        id="toggleSwitch"
        onChange={toggle}
      />
      <label className="toggle-switch-label" htmlFor="toggleSwitch">
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
}

export default ToggleSwitch;