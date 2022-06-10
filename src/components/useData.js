import * as d3 from "d3";
import { useEffect, useState } from "react";

const url =
  //   "https://gist.githubusercontent.com/fguntoro/d6d3a1bd8ba46fcdaa122953727e71d8/raw/d0d7e3266c1b802bb18a996a0befd4dcb7859e93/R17_manual_data.json";
"https://gist.githubusercontent.com/fguntoro/60a92030b0176d9a427866e8c44bae4c/raw/3f1480d217a2bc56221483feebf84722cf2bd1e2/Round_Summary_v2.json"

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.json(url).then((data) => {
    //   Object.values(data).map((round) => {
    //     Object.values(round).map((field) => {
    //       field.map((d) => {
    //         d.uwt_prev = +d.uwt_prev;
    //         d.positive = +d.positive / 100;
    //         d.total = +d.total / 1000;
    //       });
    //     });
    //   });
      setData(data);
    });
  }, []);

  return data;
};
