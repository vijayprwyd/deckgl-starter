import {
  DrawRectangleMode,
  EditableGeoJsonLayer,
  FeatureCollection,
  ScaleMode,
  ViewMode,
} from "@deck.gl-community/editable-layers";
import { useState } from "react";

const mockFeature: FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { shape: "Rectangle" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [132.78582763671875, 131.07144927978518],
            [207.071533203125, 131.07144927978518],
            [207.071533203125, 179.07144927978518],
            [132.78582763671875, 179.07144927978518],
            [132.78582763671875, 131.07144927978518],
          ],
        ],
      },
    },
  ],
};

export const useEditLayer = () => {
  const [features, setFeatures] = useState<FeatureCollection>(mockFeature);

  const [mode, setMode] = useState(() => new ViewMode());
  const [selectedFeatureIndexes, setSelectedFeatureIndexes] = useState<
    number[]
  >([]);

  const layer = new EditableGeoJsonLayer({
    id: "geojson-layer",
    data: features,
    mode,
    selectedFeatureIndexes,
    onEdit: ({ updatedData }) => {
      setFeatures(updatedData);
    },
    onClick: (...args) => {
      if (args[0].index >= 0) {
        setSelectedFeatureIndexes([args[0].index]);
        setMode(() => new ScaleMode());
      } else {
        setSelectedFeatureIndexes([]);
      }

      console.log(args);
    },
  });

  console.log(JSON.stringify(features));
  return layer;
};
