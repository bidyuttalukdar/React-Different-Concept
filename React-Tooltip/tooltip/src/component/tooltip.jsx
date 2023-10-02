import React from "react";
import { Tooltip } from "react-tooltip";

const ToolTip = () => {
  return (
    <div>
      <a id="clickable">◕‿‿◕</a>
      <Tooltip anchorSelect="#clickable" clickable>
        <h1>nnnnnnnnnnnnnnn</h1>
        <button>You can click me!</button>
      </Tooltip>
    </div>
  );
};

export default ToolTip;
