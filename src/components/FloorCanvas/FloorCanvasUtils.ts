import { COORDINATE_SYSTEM } from "@deck.gl/core";
import { BitmapLayer } from "@deck.gl/layers";
import { OrthographicViewState } from "deck.gl";

export const getInitialViewState = () => {
  return {
    target: [250, 250, 0], // Increaseing x shifts image to the left because the hypothetical camera moves right
    zoom: 0,
    minZoom: -2,
    maxZoom: 40,
  } as Record<string, OrthographicViewState>;
};

export const controllerProps = {
  scrollZoom: {
    speed: 0.04,
    smooth: true,
  },
  inertia: true,
};

export const getFloorImageLayer = (imageUrl: string) =>
  new BitmapLayer({
    id: "BitmapLayer",
    bounds: [0, 500, 500, 0], // left, bottom, right, top
    coordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
    image: imageUrl,
  });
