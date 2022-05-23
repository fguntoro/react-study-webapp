import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, LayersControl, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import { useAtlas } from "./useAtlas";
import { useData } from "./useData";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import Stack from "@mui/material/Stack";
import Legend from "./Legend";

function valuetext(value) {
  return `Round ${value}`;
}

function Map({ center, zoom }) {
  const [selectedRound, setSelectedRound] = useState(19);
  const [paused, setPaused] = useState(true);
  const [over, setOver] = useState(true);
  const [onSelect, setOnSelect] = useState({});
  const roundRef = useRef(null);

  const roundChange = () => {
    if (paused) return;
    if (selectedRound == 19 && !over) {
      setPaused(true);
      setOver(true);
    } else if (selectedRound == 19 && over) {
      setSelectedRound(1);
      setOver(false);
    } else setSelectedRound((v) => ++v);
  };

  useEffect(() => {
    roundRef.current = setInterval(() => roundChange(), 500);
    return () => clearInterval(roundRef.current);
  });

  const atlas = useAtlas();
  const data = useData();

  if (!atlas || !data) {
    return <pre>Loading...</pre>;
  }

  const handleChange = (event, newValue) => {
    setSelectedRound(newValue);
  };

  const mapPolygonColor = (d) => {
    return d > 0.065
      ? "#67000d"
      : d > 0.055
      ? "#a50f15"
      : d > 0.045
      ? "#cb181d"
      : d > 0.035
      ? "#ef3b2c"
      : d > 0.025
      ? "#fb6a4a"
      : d > 0.015
      ? "#fc9272"
      : d > 0.005
      ? "#fcbba1"
      : d > 0.001
      ? "#fee0d2"
      : "#fff5f0";
  };

  const filteredData = data.filter((d) => d["round"] === selectedRound);

  atlas.features.map((val) => {
    let { properties } = val;
    let newProps = filteredData.filter((d) => d.lacode === properties.lacode);

    val.properties.ltla_prevalence = newProps[0].ltla_prevalence;
  });

  const style = (feature) => {
    return {
      fillColor: mapPolygonColor(feature.properties.ltla_prevalence),
      weight: 1,
      opacity: 0.7,
      color: "white",
      dashArray: "2",
      fillOpacity: 0.8,
    };
  };

  const feature = atlas.features.map((feature) => {
    return feature;
  });

  const highlightFeature = (e) => {
    const layer = e.target;
    const name = layer.feature.properties.laname;
    const prevalence =
      Math.round(layer.feature.properties.ltla_prevalence * 1000) / 1000;
    layer.setStyle({
      weight: 1,
      color: "black",
      fillOpacity: 1,
    });
    layer.bindTooltip(`${name} ${prevalence}`);
    layer.bindPopup(`${name} ${prevalence}`);
  };

  /*resets our state i.e no properties should be displayed when a feature is not clicked or hovered over */
  const resetHighlight = (e) => {
    e.target.setStyle(style(e.target.feature));
  };

  /* this function is called when a feature in the map is hovered over or when a mouse moves out of it, the function calls two functions
     highlightFeature and resetHighlight*/
  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
    });
  };

  const onPlayPause = () => {
    if (paused) {
      setPaused(false);
    }
    if (!paused) {
      setPaused(true);
    }
  };

  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          url="https://api.maptiler.com/maps/basic-gray/{z}/{x}/{y}.png?key=lkiarV2uD55Ij8laZYtR"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {feature && (
          <GeoJSON data={feature} style={style} onEachFeature={onEachFeature} />
        )}
      </MapContainer>
      <h4>Slide to select round: </h4>
      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1, px: 1 }}
        alignItems="center"
      >
        <IconButton
          aria-label={paused ? "play" : "pause"}
          onClick={onPlayPause}
        >
          {paused ? (
            <PlayArrowRounded sx={{ fontSize: "2rem" }} />
          ) : (
            <PauseRounded sx={{ fontSize: "2rem" }} />
          )}
        </IconButton>
        <Slider
          aria-label="React-round"
          defaultValue={19}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={1}
          marks
          value={selectedRound}
          min={1}
          max={19}
          onChange={handleChange}
        />
      </Stack>
      <Legend />
    </div>
  );
}

export default Map;
