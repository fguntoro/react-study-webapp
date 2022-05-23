import * as d3 from "d3";
import React, { useState, useEffect } from "react";

const jsonPath =
  "https://gist.githubusercontent.com/fguntoro/6afc13f3ba35db7d170c138959bed674/raw/ebe7e2cf035912e7802f099be8ca08952cca0ebb/ltla_dat_R18.geojson";

export const useAtlas = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.json(jsonPath).then(setData);
  }, []);

  return data;
};
