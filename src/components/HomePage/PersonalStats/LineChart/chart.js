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

  console.log(data);
  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);

    // const xValue = (d) => d["End"];
    // const xAxisLabel = "Time";

    const yValue = (d) => d["Prevalence"];
    // const yAxisLabel = "Total Dead and Missing";

    const xScale = scaleTime()
      .domain([
        min(data.map((d) => d["Start"])),
        max(data.map((d) => d["End"])),
      ])
      .range([0, innerWidth])
      .nice();

    const yScale = scaleLinear()
      .domain(extent(data.map(yValue)))
      .range([innerHeight, 0])
      .nice();

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat(timeFormat("%b"));

    svg
      .select(".x-axis")
      .style(
        "transform",
        `translate(${margin.left}px, ${height - margin.top}px)`
      )
      .call(xAxis);

    const xAxis2 = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat(timeFormat("%y"));

    svg
      .select(".x-axis2")
      .style(
        "transform",
        `translate(${margin.left}px, ${
          height - margin.top + xAxisLabelOffset
        }px)`
      )
      .call(xAxis2);

    const yAxis = axisLeft(yScale);

    svg
      .select(".y-axis")
      .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
      .call(yAxis);

    svg
      .selectAll("bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
      .attr("x", (d) => xScale(d["Start"]))
      .attr("y", 0)
      .attr("width", (d) => xScale(d["End"]) - xScale(d["Start"]))
      .attr("fill", "lightblue")
      .attr("opacity", 0.2)
      .transition()
      .attr("height", innerHeight);

    svg
      .selectAll("bar")
      .data(data)
      .join("circle")
      .attr("class", "circle")
      .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
      .attr(
        "cx",
        (d) => xScale(d["Start"]) + (xScale(d["End"]) - xScale(d["Start"])) / 2
      )
      .attr("cy", (d) => yScale(yValue(d)))
      .attr("r", 5)
      .attr("fill", "black")
      .attr("opacity", 1)
      .transition()
      .attr("height", innerHeight);

    const linePath = line()
      .x(
        (d) => xScale(d["Start"]) + (xScale(d["End"]) - xScale(d["Start"])) / 2
      )
      .y((d) => yScale(yValue(d)))
      .curve(curveMonotoneX);

    // draw the line
    svg
      .datum(data)
      .append("path")
      .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 2)
      .attr("class", "line")
      .attr("d", linePath);

    //set the label
    svg
      .selectAll("bar")
      .data(data)
      .enter()
      .append("text")
      .style("transform", `translate(${margin.left}px, ${margin.top}px)`)
      .text((d) => d["Round"])
      .attr("text-anchor", "middle")
      .attr(
        "x",
        (d) => xScale(d["Start"]) + (xScale(d["End"]) - xScale(d["Start"])) / 2
      )
      .attr("y", -10)
      .attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "black");

    svg
      .append("text")
      .text("Round")
      .attr("text-anchor", "middle")
      .attr("x", margin.left - 15)
      .attr("y", margin.top - 10)
      .attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "black");
  }, [data]);

  return (
    <>
      <svg ref={svgRef} width={width} height={height}>
        <g className="x-axis" />
        <g className="x-axis2" />
        <g className="y-axis" />
      </svg>

      <ProgressBar progress={60} radius={100} />
    </>
  );
}

const LineChart = ({ data, width, height }) => {
  const progress = Math.round(4.52/8.82 * 100 * 10)/10;
  return (
    <>
      {/* <h2> Line Chart</h2> */}
      {/* <BuildChart data={data} width={width} height={height} /> */}
      <ProgressBar
        progress={progress}
        radius={100}
        cut={120}
        rotate={-210}
        strokeWidth={16}
        strokeColor="#5d9cec"
        strokeLinecap="square"
        trackStrokeWidth={8}
        trackStrokeColor="#e6e6e6"
        trackStrokeLinecap="square"
        pointerRadius={0}
        initialAnimation={true}
        transition="1.5s ease 0.5s"
        trackTransition="0s ease"
      >
        <div className="indicator-volume">
          <div className="inner">
            <div className="icon">
              <BsFillPersonFill />
            </div>
            <div className="percentage">{progress}%</div>
          </div>
        </div>
      </ProgressBar>

      {/* <button onClick={() => setData(data.map((value) => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter((value) => value < 35))}>
        Filter data
      </button> */}
    </>
  );
};
export default LineChart;
