import DeckGL from "@deck.gl/react";
import img from "../assets/test-floor-plan.jpg";
import { useState } from "react";
import { OrthographicView } from "@deck.gl/core";
import {
  controllerProps,
  getFloorImageLayer,
  getInitialViewState,
} from "./FloorCanvasUtils";
import { useEditLayer } from "./useEditLayer";

// "heightPixels":6339 "widthPixels":8925
const orthographicView = new OrthographicView({});

export const FloorCanvas = () => {
  const [floorPlanLayer] = useState(() => getFloorImageLayer(img));
  const editableLayer = useEditLayer();

  return (
    <DeckGL
      initialViewState={getInitialViewState()}
      controller={controllerProps}
      layers={[floorPlanLayer, editableLayer]}
      views={[orthographicView]}
      style={{ backgroundColor: "white" }}
    />
  );
};
