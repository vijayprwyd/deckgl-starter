import { PropsWithChildren, createContext, useContext, useState } from "react";

interface ThemeProps {
  theme: string;
  setTheme: (newTheme: string) => void;
}

const ThemeContext = createContext<ThemeProps>({
  theme: "blue",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState("blue");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
