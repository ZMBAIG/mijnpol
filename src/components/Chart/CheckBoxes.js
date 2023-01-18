import React from "react";

function Checkboxes(props) {
  return (
    <div id="checkbox-container">
      <label id="aangifte-checkbox-label">
        <input
          type="checkbox"
          name="aangifteDoen"
          onChange={props.handleChange}
          checked={props.data.aangifteDoen}
        />{" "}
        Aangifte of melding doen
      </label>

      <label id="gemist-checkbox-label">
        <input
          type="checkbox"
          name="gemistVermist"
          onChange={props.handleChange}
          checked={props.data.gemistVermist}
        />{" "}
        Gezocht & Vermist
      </label>
    </div>
  );
}

export default Checkboxes;
