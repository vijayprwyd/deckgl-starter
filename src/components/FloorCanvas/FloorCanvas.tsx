import DeckGL from "@deck.gl/react";
import img from "../../assets/test-floor-plan.jpg";
import { useState } from "react";
import { OrthographicView } from "@deck.gl/core";
import {
  controllerProps,
  getFloorImageLayer,
  getInitialViewState,
} from "./FloorCanvasUtils";
import { useEditLayer } from "./useEditLayer";
import { Button } from "@/elements/Button/Button";

// "heightPixels":6339 "widthPixels":8925
const orthographicView = new OrthographicView({});

export const FloorCanvas = () => {
  const [floorPlanLayer] = useState(() => getFloorImageLayer(img));
  const editableLayer = useEditLayer();

  return (
    <div className="flex flex-col grow">
      <div className="p-8">
        <Button>Rectangle</Button>
      </div>
      <div className="relative grow">
        <DeckGL
          initialViewState={getInitialViewState()}
          controller={controllerProps}
          layers={[floorPlanLayer, editableLayer]}
          views={[orthographicView]}
          style={{ backgroundColor: "white" }}
        />
      </div>
    </div>
  );
};
