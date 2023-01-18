import React from "react";
import { provincieSorted } from "../data/dataTools";
import { Route } from "react-router";
import GraphContainer from "./Chart/GraphContainer";

function RouteList(props) {
  const routeItems = provincieSorted.map(function (student) {
    return (
      <Route key={student} path={`/${student}`}>
        <GraphContainer
          name={student}
          data={props.data}
          handleChange={props.handleChange}
          handleRoute={props.handleRoute}
        />
      </Route>
    );
  });
  return (
    <div>
      <Route exact path={"/"}>
        <GraphContainer
          name={provincieSorted[0]}
          data={props.data}
          handleChange={props.handleChange}
          handleRoute={props.handleRoute}
        />
      </Route>
      {routeItems}
    </div>
  );
}

export default RouteList;
