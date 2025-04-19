import { hstack } from "../styled-system/patterns";
import { Navbar } from "./components/navbar";

export function App() {
  return (
    <div className={hstack()}>
      <Navbar />
    </div>
  );
}
