import * as d3 from "d3";
import { useEffect, useState } from "react";

const url =
  "https://gist.githubusercontent.com/fguntoro/d6d3a1bd8ba46fcdaa122953727e71d8/raw/d0d7e3266c1b802bb18a996a0befd4dcb7859e93/R17_manual_data.json";

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.json(url).then(setData);
  }, []);

  return data;
};
