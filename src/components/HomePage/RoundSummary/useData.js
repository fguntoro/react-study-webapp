import * as d3 from "d3";
import { useEffect, useState } from "react";

const csvUrl =
  "https://gist.githubusercontent.com/fguntoro/62467cb04d14693918ec234004e235f7/raw/67d87bcdb03e91b840fc918f8860c56baeb45ba0/Weighted_prevalence.csv";

const row = (d) => {
  d.Round = +d.Round;
  d.Tested = +d.Tested;
  d.Positive = +d.Positive;
  d.Prevalence = (+d.Prevalence).toFixed(2);
  d.Prevalence_low = +d.Prevalence_low;
  d.Prevalence_high = +d.Prevalence_high;
  d.Start = new Date(d.Start);
  d.End = new Date(d.End);

  return d;
};

export const useData = () => {
  const [data, setData] = useState();

  useEffect(() => {
    d3.csv(csvUrl, row).then(setData);
  }, []);

  return data;
};
