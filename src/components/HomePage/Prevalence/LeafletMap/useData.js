import * as d3 from "d3";
import { useEffect, useState } from "react";

const csvUrl =
  "https://gist.githubusercontent.com/fguntoro/3c16a53cb48a6b12c29f337bb046b3ed/raw/1744201b8e20ab4fcb878f7af20ecb25704c219f/ltla_dat_pooled.csv";

const row = (d) => {
  d.round = +d.round;
  d.ltla_prevalence = +d.ltla_prevalence;
  return d;
};

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.csv(csvUrl, row).then(setData);
  }, []);

  return data;
};
