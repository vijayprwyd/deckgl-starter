import {
  Feature,
  FeatureCollection,
  ModeProps,
  Polygon,
  Position,
  ScaleMode,
} from "@deck.gl-community/editable-layers";
import bboxPolygon from "@turf/bbox-polygon";
import { getCoord } from "@turf/invariant";

class ResizeRectangle extends ScaleMode {
  getScaleAction = (
    startDragPoint: Position,
    currentPoint: Position,
    editType: string,
    props: ModeProps<FeatureCollection>
  ) => {
    if (!this._selectedEditHandle) {
      throw new Error("Scale handle not defined");
    }

    const oppositeHandle = this._getOppositeScaleHandle(
      this._selectedEditHandle
    );
    const origin = getCoord(oppositeHandle);

    const boundingBox = bboxPolygon([
      Math.min(origin[0], currentPoint[0]),
      Math.min(origin[1], currentPoint[1]),
      Math.max(origin[0], currentPoint[0]),
      Math.max(origin[1], currentPoint[1]),
    ]);

    return {
      updatedData: this._getUpdatedData(props, {
        type: "FeatureCollection",
        features: [boundingBox],
      }),
      editType,
      editContext: {
        featureIndexes: props.selectedIndexes,
      },
    };
  };
}

export default ResizeRectangle;
