import { useContext } from "react";
import { ThemeContext } from "../App";
import { CoolBackground } from "./coolBackground/coolBackground";
import Whiteback from "./whiteback/Whiteback";

export function ThemedBackground() {
  const { theme } = useContext(ThemeContext);
  return theme === "dark" ? <CoolBackground /> : <Whiteback />;
}
