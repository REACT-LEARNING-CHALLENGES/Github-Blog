import { Outlet } from "react-router-dom";
import { Cover } from "./components/cover";

import "./global.css";

function App() {
  return (
    <>
      <Cover />
      <Outlet />
    </>
  );
}

export default App;
