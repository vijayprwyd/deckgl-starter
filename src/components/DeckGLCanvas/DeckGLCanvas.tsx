/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import DeckGL from "@deck.gl/react";
import { EditableGeoJsonLayer } from "@deck.gl-community/editable-layers";
import {
  controllerProps,
  geoJsonLayerDefaultProps,
  getFloorImageLayer,
  initialFeatures,
  initialViewport,
} from "./DeckGLCanvasUtils";

interface FloorCanvasState {
  viewport: Record<string, any>;
  features: any;
  selectedFeatureIndexes: number[];
}

interface Props {
  mode: any;
  imageUrl?: string;
}

export default class DeckGLCanvas extends React.Component<
  Props,
  FloorCanvasState
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      viewport: initialViewport,
      features: initialFeatures,
      selectedFeatureIndexes: [],
    };
  }

  _resize = () => this.forceUpdate();

  componentDidMount() {
    window.addEventListener("resize", this._resize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._resize);
  }

  _onLayerClick = (info: any) => {
    this.setState({ selectedFeatureIndexes: info ? [info.index] : [] });
  };

  onEdit = ({ updatedData }: any) => {
    this.setState({
      features: updatedData,
    });
  };

  render() {
    const { features, selectedFeatureIndexes } = this.state;

    const viewport: Record<string, any> = {
      ...this.state.viewport,
      height: window.innerHeight,
      width: window.innerWidth,
    };

    const editableGeoJsonLayer = new EditableGeoJsonLayer({
      ...(geoJsonLayerDefaultProps as any),
      data: features,
      selectedFeatureIndexes,
      mode: this.props.mode,
      onEdit: this.onEdit,
    });

    const layers: any = [];
    if (this.props.imageUrl) {
      layers.push(getFloorImageLayer(this.props.imageUrl));
    }
    layers.push(editableGeoJsonLayer);

    return (
      <DeckGL
        viewState={viewport}
        layers={layers}
        height="100%"
        width="100%"
        controller={controllerProps}
        onClick={this._onLayerClick}
        onViewStateChange={({ viewState }) =>
          this.setState({ viewport: viewState })
        }
      />
    );
  }
}
