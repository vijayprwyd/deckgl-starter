import { ButtonHTMLAttributes } from "react";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import classNames from "classnames";

const classesByTheme: Record<string, string> = {
  blue: "bg-blue-700 text-white hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 focus:ring-offset-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
};

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { theme } = useTheme();
  const className = classNames(
    "rounded-md px-3 py-2 font-semibold",
    classesByTheme[theme]
  );

  return <button {...props} className={className}></button>;
};
