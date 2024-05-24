import { GL } from "@luma.gl/constants";
import { BitmapLayer } from "deck.gl";

export const initialViewport = {
  minZoom: -2,
  maxZoom: 40,
  latitude: 37.76,
  longitude: -122.44,
  zoom: 11,
};

export const controllerProps = {
  scrollZoom: {
    speed: 0.04,
    smooth: true,
  },
  inertia: true,
};

export const geoJsonLayerDefaultProps = {
  id: "geojson",
  autoHighlight: false,
  // Editing callbacks
  getEditHandleIconSize: 40,
  pointRadiusMinPixels: 5,
  parameters: {
    depthTest: true,
    depthMask: false,
    blend: true,
    blendEquation: GL.FUNC_ADD,
    blendFunc: [GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA],
  },
};

export const initialFeatures = {
  type: "FeatureCollection",
  features: [],
};

export const getFloorImageLayer = (imageUrl: string) =>
  new BitmapLayer({
    id: "BitmapLayer",
    bounds: [-122.519, 37.7045, -122.355, 37.829],
    image: imageUrl,
  });
