import "./App.css";
import { FloorCanvas } from "@/components/FloorCanvas/FloorCanvas";
import { ThemeProvider } from "./elements/ThemeProvider/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen  min-w-screen flex flex-col">
        <FloorCanvas />
      </div>
    </ThemeProvider>
  );
}

export default App;
