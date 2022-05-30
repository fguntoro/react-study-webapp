import React, { useEffect, useState, useRef } from "react";
import ProgressBar from "react-customizable-progressbar";
import { BsFillPersonFill } from "react-icons/bs";
import {
  select,
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
  scaleBand
} from "d3";
import "./index.css";

function BuildChart({ data, width, height }) {
  const svgRef = useRef();

  const margin = { top: 50, right: 50, bottom: 50, left: 50 };
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const tickOffset = -5;
  const xAxisLabelOffset = 12;
  const yAxisLabelOffset = 30;

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);

    const xValue = (d) => d["_row"];
    // const xAxisLabel = "Time";

    const yValue = (d) => (d["Positive"] / d["Total"]) * 100;
    // const yAxisLabel = "Total Dead and Missing";

    const xScale = scaleBand()
      .domain(data.map(xValue))
      .range([0, innerWidth])
      .padding(0.5);

    const yScale = scaleLinear()
      .domain([0, max(data, yValue)])
      .range([innerHeight, 0])
      .nice();

    const xAxis = axisBottom(xScale).ticks(data.length);

    svg
      .select(".x-axis")
      .style(
        "transform",
        `translate(${margin.left}px, ${height - margin.top}px)`
      )
      .call(xAxis);

    const yAxis = axisLeft(yScale);

    svg
      .select(".y-axis")
      .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
      .call(yAxis);

    const linePath = line()
      .x((d) => xScale(xValue(d)))
      .y((d) => yScale(yValue(d)))
      .curve(curveMonotoneX);


    svg
      .selectAll("bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
      .attr("x", (d) => xScale(xValue(d)))
      .attr("y", (d) => yScale(yValue(d)))
      .attr("width", xScale.bandwidth())
      .transition()
      .attr("fill", "lightblue")
      .attr("height", (d) => innerHeight - yScale(yValue(d)))
      .attr("opacity", 1);

    svg
      .selectAll("bar")
      .data(data)
      .join("circle")
      .attr("class", "circle")
      .style("transform", `translate(${margin.left + 30}px, ${margin.top}px)`)
      .attr("cx", (d) => xScale(xValue(d)))
      .attr("cy", (d) => yScale(yValue(d)))
      .attr("r", 5)
      .attr("fill", "black")
      .attr("opacity", 1)
      .transition()
      .attr("height", innerHeight);

    // draw the line
    svg
      .datum(data)
      .append("path")
      .style("transform", `translate(${margin.left + 30}px, ${margin.top}px)`)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 2)
      .attr("class", "line")
      .attr("d", linePath);
  }, [data]);

  return (
    <>
      <svg ref={svgRef} width={width} height={height}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </>
  );
}

const Chart = ({ data, width, height }) => {
  const progress = 60;
  return (
    <>
      {/* <h2> Line Chart</h2> */}
      <BuildChart data={data} width={width} height={height} />
    </>
  );
};
export default Chart;
