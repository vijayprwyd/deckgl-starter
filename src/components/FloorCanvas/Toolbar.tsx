import { Button } from "@/elements/Button/Button";
import {
  DrawRectangleMode,
  TransformMode,
  ViewMode,
} from "@deck.gl-community/editable-layers";

interface ToolbarProps {
  onUpdateMode: (mode: unknown) => void;
}

export const Toolbar = ({ onUpdateMode }: ToolbarProps) => {
  return (
    <div className="p-4 flex gap-4">
      <Button onClick={() => onUpdateMode(new ViewMode())}>View Mode</Button>
      <Button onClick={() => onUpdateMode(new DrawRectangleMode())}>
        Draw Rectangle
      </Button>
      <Button onClick={() => onUpdateMode(new TransformMode())}>
        Transform Rectangle
      </Button>
    </div>
  );
};
