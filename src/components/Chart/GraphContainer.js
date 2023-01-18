import React from "react";
import Chart from "./ProvincieChart";
import Checkboxes from "./CheckBoxes";
import SelectProvincieMenu from "./SelectProvincieMenu";

function GraphContainer(props) {
  return (
    <figure>
      <nav id="filters-container">
        <h2 id="provincie-naam">{props.name}</h2>
        <SelectProvincieMenu handleRoute={props.handleRoute} />
        <Checkboxes handleChange={props.handleChange} data={props.data} />
      </nav>
      <Chart assignmentTitle="PNL" data={props.data} name={props.name} />
      {/* <Chart assignmentTitle="W2" data={props.data} name={props.name} />
      <Chart assignmentTitle="W3" data={props.data} name={props.name} />
      <Chart assignmentTitle="W4+" data={props.data} name={props.name} /> */}
    </figure>
  );
}

export default GraphContainer;
