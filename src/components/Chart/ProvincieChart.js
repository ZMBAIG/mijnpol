import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryStack,
  VictoryGroup,
} from "victory";
import { provincieAssignmentData } from "../../data/dataTools.js";

const wincAssignmentId = "Opdracht of Project";
const aantalMeldingen = "Aangifte of melding doen";
const aantalGezocht = "Gezocht & Vermist";
const provinceName = "Provincie";

function ProvincieChart(props) {
  const graphData = provincieAssignmentData.filter((el) => {
    if (props.assignmentTitle.startsWith("W4+")) {
      return (
        el[provinceName].startsWith(props.name) &&
        (el[wincAssignmentId].startsWith("W4") ||
          el[wincAssignmentId].startsWith("W5") ||
          el[wincAssignmentId].startsWith("W6") ||
          el[wincAssignmentId].startsWith("SCRUM"))
      );
    } else {
      return (
        el[provinceName].startsWith(props.name) &&
        el[wincAssignmentId].startsWith(props.assignmentTitle)
      );
    }
  });

  return (
    <div className="chart-div">
      <h3>{props.assignmentTitle}</h3>

      <VictoryChart
        padding={{ top: 2, bottom: 25, left: 20, right: 10 }}
        domainPadding={{ x: 18, y: 2 }}
        height={90}
      >
        <VictoryAxis
          tickFormat={(t) => t.replace(/\s-\s/g, "\n")}
          style={{
            tickLabels: { fill: "white", fontSize: 5, padding: 5 },
          }}
        />

        <VictoryAxis
          dependentAxis={true}
          style={{
            tickLabels: { fill: "white", fontSize: 7, padding: 5 },
          }}
        />

        <VictoryGroup offset={11} style={{ data: { width: 8 } }}>
          <VictoryStack>
            <VictoryBar
              animate={{
                duration: 2000,
                onLoad: { duration: 2000 },
              }}
              style={{
                data: {
                  fill: "var(--primary-clr-04)",
                  opacity: props.data.aangifteDoen ? 1 : 0,
                },
              }}
              data={graphData}
              x={wincAssignmentId}
              y={aantalMeldingen}
            />
          </VictoryStack>

          <VictoryStack>
            <VictoryBar
              style={{
                data: {
                  fill: "var(--primary-clr-06)",
                  opacity: props.data.gemistVermist ? 1 : 0,
                },
              }}
              data={graphData}
              x={wincAssignmentId}
              y={aantalGezocht}
            />
          </VictoryStack>
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
}

export default ProvincieChart;
