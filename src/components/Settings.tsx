import React from "react";
import "./Settings.css";

function Settings({ categories, ratio, onChangeContinent, onChangeRatio }) {
  const segmentControlClass = active =>
    "segmented_control--_segment segmented_control--segment" +
    (active ? "Selected" : "Unselected");

  return (
    <div className="settings">
      <div className="settings__item">
        <div className="label">Continent</div>
        <select
          className="select-menu visuallyhidden"
          onChange={e => onChangeContinent(e.target.value)}
          defaultValue="World"
        >
          {categories.map(category => (
            <option key={category as string} value={category as string}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="settings__item">
        <div className="label">Aspect Ratio</div>
        <div className="segmented_control--container">
          <div
            onClick={() => onChangeRatio("4x3")}
            className={segmentControlClass(ratio === "4x3")}
          >
            <div className="four-by-three"></div>
          </div>
          <div
            onClick={() => onChangeRatio("1x1")}
            className={segmentControlClass(ratio === "1x1")}
          >
            <div className="one-by-one"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
