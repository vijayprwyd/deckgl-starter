/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { ViewMode } from "@deck.gl-community/editable-layers";
import { Toolbar } from "./Toolbar";
import DeckGLCanvas from "../DeckGLCanvas/DeckGLCanvas";
import img from "../../assets/test-floor-plan.jpg";

const FloorCanvas = () => {
  const [mode, setMode] = React.useState<any>(new ViewMode());

  return (
    <div className="flex flex-col grow gap-4">
      <Toolbar onUpdateMode={setMode} />
      <div className="relative grow">
        <DeckGLCanvas mode={mode} imageUrl={img} />
      </div>
    </div>
  );
};

export default FloorCanvas;
