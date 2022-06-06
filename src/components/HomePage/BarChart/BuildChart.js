import React, { useEffect, useState, useRef } from "react";
import {
  select,
  selectAll,
  axisBottom,
  axisLeft,
  scaleLinear,
  scaleTime,
  extent,
  max,
  min,
  timeFormat,
  line,
  curveMonotoneX,
  scaleBand,
  pointer,
} from "d3";
import "./index.css";
import tip from "d3-tip";
import { yAxisLabelDict } from "./labels.js";
import "antd/dist/antd.css";
import { Empty } from "antd";

function wrap(text, width) {
  text.each(function () {
    var text = select(this),
      words = text.text().split(/\s+/).reverse(),
      word,
      line = [],
      lineNumber = 0,
      lineHeight = 1.1, // ems
      y = text.attr("y"),
      dy = parseFloat(text.attr("dy")),
      tspan = text
        .text(null)
        .append("tspan")
        .attr("x", 0)
        .attr("y", y)
        .attr("dy", dy + "em");
    while ((word = words.pop())) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text
          .append("tspan")
          .attr("x", 0)
          .attr("y", y)
          .attr("dy", `${lineNumber++ * lineHeight + dy}em`)
          .text(word);
      }
    }
  });
}

function BuildChart({
  data,
  width,
  height,
  variable,
  xAxisLabel,
  axisLabelDict,
}) {
  const svgRef = useRef();

  const margin = { top: 50, right: 50, bottom: 50, left: 50 };
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const tickOffset = -5;
  const xAxisLabelOffset = 40;
  const yAxisLabelOffset = 35;

  function getYAxisLabel() {
    const inDict = yAxisLabelDict.filter(function (v) {
      return v.value === variable;
    });

    return inDict.length ? inDict[0].label : variable;
  }
  const yAxisLabel = getYAxisLabel();

  // const yAxisLabel = "Unweighted Prevalence (%)";

  // useEffect(() => {
  //   data.map((d) => {
  //     d.positive = d.positive / 100;
  //     d.total = d.total / 1000;
  //   });
  //   console.log(data);
  // });

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);

    svg.selectAll("#id_bar").remove();

    const xValue = (d) => Object.values(d)[0];

    let yValue = () => {};

    if (variable === "uwt_prev") {
      yValue = (d) => d[`${variable}`];
    } else if (variable === "positive") {
      yValue = (d) => d[`${variable}`] / 100;
    } else if (variable === "total") {
      yValue = (d) => d[`${variable}`] / 1000;
    }

    const xScale = scaleBand()
      .domain(data.map(xValue))
      .range([0, innerWidth])
      .padding(0.5);

    const yScale = scaleLinear()
      .domain([0, max(data, yValue)])
      .range([innerHeight, 0])
      .nice();

    const xAxis = axisBottom(xScale).ticks(data.length);

    if (axisLabelDict) {
      xAxis.tickFormat((d) => {
        const inDict = axisLabelDict.filter(function (v) {
          return v.value === d;
        });
        return inDict.length ? inDict[0].label : d;
      });
    }

    svg
      .select(".x-axis")
      .style(
        "transform",
        `translate(${margin.left}px, ${height - margin.top}px)`
      )
      .call(xAxis)
      .selectAll(".tick text")
      .call(wrap, xScale.bandwidth());

    const yAxis = axisLeft(yScale);

    svg
      .select(".y-axis")
      .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
      .call(yAxis);

    const d3tip = tip()
      .attr("class", "d3-tip")
      .html(function (event, d) {
        return `<p><strong>Positive</strong>: <span style='color:lightseagreen'>${
          d.positive
        }</span></p>
        <p><strong>Total</strong>: <span style='color:lightseagreen'>${
          d.total
        }</span></p>
        <p><strong>Prevalence</strong>: <span style='color:lightseagreen'>${
          Math.round(d.uwt_prev * 100) / 100
        }%</span></p>`;
      });
    svg.call(d3tip);

    // const tooltip = select(".tooltip-area").style("opacity", 0);

    // const mouseover = (event, d) => {
    //   tooltip.style("opacity", 1);
    // };

    // const mouseleave = (event, d) => {
    //   tooltip.style("opacity", 0);
    // };

    // const mousemove = (event, d) => {
    //   const text = select(".tooltip-area__text");
    //   text.text(`${d["uwt_prev"]} in \n ${Object.values(d)[0]}`);
    //   const [x, y] = pointer(event);

    //   tooltip.attr("transform", `translate(${x}, ${y})`);
    // };

    const bars = svg
      .selectAll("bar")
      .data(data)
      .join("rect")
      .attr("id", "id_bar")
      .attr("class", "bar")
      .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
      .style("cursor", "pointer")
      .attr("x", (d) => xScale(xValue(d)))
      .attr("y", innerHeight)
      .attr("height", 0)
      .attr("width", xScale.bandwidth())
      .attr("fill", "lightseagreen")
      .attr("opacity", 0);

    bars
      .transition()
      .duration(500)
      .attr("height", (d) => innerHeight - yScale(yValue(d)))
      .attr("y", (d) => yScale(yValue(d)))
      .attr("opacity", 1);

    bars.on("mouseleave", d3tip.hide).on("mouseover", d3tip.show);

    // svg
    //   .selectAll("bar")
    //   .data(data)
    //   .join("circle")
    //   .attr("id", "id_circle")
    //   .attr("class", "circle")
    //   .style(
    //     "transform",
    //     `translate(${margin.left + xScale.bandwidth() / 2}px, ${margin.top}px)`
    //   )
    //   .attr("cx", (d) => xScale(xValue(d)))
    //   .attr("cy", (d) => yScale(yValue(d)))
    //   .attr("r", 5)
    //   .attr("fill", "black")
    //   .attr("opacity", 1)
    //   .transition()
    //   .attr("height", innerHeight);

    // draw the line

    // const linePath = line()
    //   .x((d) => xScale(xValue(d)))
    //   .y((d) => yScale(yValue(d)))
    //   .curve(curveMonotoneX);

    // svg
    //   .datum(data)
    //   .append("path")
    //   .style("transform", `translate(${margin.left + xScale.bandwidth()/2}px, ${margin.top}px)`)
    //   .attr("fill", "none")
    //   .attr("stroke", "navy")
    //   .attr("stroke-width", 2)
    //   .attr("class", "line")
    //   .attr("id", "id_line")
    //   .attr("d", linePath);
  }, [data, variable]);

  return (
    <div id="chartArea">
      <svg ref={svgRef} width={width} height={height}>
        <g className="x-axis" />
        <g className="y-axis" />
        <text
          className="yAxis-label"
          textAnchor="middle"
          transform={`translate(${margin.left - yAxisLabelOffset},${
            margin.top + innerHeight / 2
          }) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <text
          className="xAxis-label"
          textAnchor="middle"
          x={margin.left + innerWidth / 2}
          y={margin.top + innerHeight + xAxisLabelOffset}
        >
          {xAxisLabel}
        </text>
        {/* <g className="tooltip-area">
          <text className="tooltip-area__text"></text>
        </g> */}
      </svg>
    </div>
  );
}

const Chart = ({
  data,
  width,
  height,
  variable,
  xAxisLabel,
  axisLabelDict,
}) => {
  const progress = 60;

  if (!data) {
    return (
      <>
        <Empty />
      </>
    );
  }

  return (
    <>
      <BuildChart
        data={data}
        width={width}
        height={height}
        variable={variable}
        xAxisLabel={xAxisLabel}
        axisLabelDict={axisLabelDict}
      />
    </>
  );
};

export default Chart;
