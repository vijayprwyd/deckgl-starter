import {
  DrawPolygonMode,
  EditableGeoJsonLayer,
  FeatureCollection,
} from "@deck.gl-community/editable-layers";
import { useState } from "react";

const myFeatureCollection: FeatureCollection = {
  type: "FeatureCollection",
  features: [
    /* insert features here */
  ],
};

// const selectedFeatureIndexes = [];

export const useEditLayer = () => {
  const [data, setData] = useState(myFeatureCollection);

  const [layer] = useState(
    () =>
      new EditableGeoJsonLayer({
        id: "geojson-layer",
        data,
        mode: DrawPolygonMode,
        // selectedFeatureIndexes,
        onEdit: ({ updatedData }) => {
          setData(updatedData);
        },
      })
  );

  return layer;
};
