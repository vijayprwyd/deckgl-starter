import DeckGL from "@deck.gl/react";
import { BitmapLayer } from "@deck.gl/layers";
import img from "../assets/sandoz-hyderabad.png";
import { useState } from "react";

export const FloorCanvas = () => {
  const [floorPlanLayer] = useState(
    () =>
      new BitmapLayer({
        id: "BitmapLayer",
        bounds: [-122.519, 37.7045, -122.355, 37.829],
        image: img,
        pickable: true,
      })
  );

  return (
    <DeckGL
      initialViewState={{
        longitude: -122.4,
        latitude: 37.74,
        zoom: 11,
      }}
      controller={{
        scrollZoom: {
          speed: 0.04,
          smooth: true,
        },
        inertia: true,
      }}
      // getTooltip={({bitmap}: BitmapLayerPickingInfo) => bitmap && `${bitmap.pixel}`}
      layers={[floorPlanLayer]}
    />
  );
};
