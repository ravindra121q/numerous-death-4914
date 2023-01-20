import "./App.css";
import { admin_Page } from "./pages/Admin_Page";
/* import { admin_Page } from './pages/Admin_Page';
import {Route,Routes} from "react-router-dom" */
import { Box } from "@chakra-ui/react";

import Landing_page from "./pages/Landing_page";
function App() {
  return (
    <div className="App">
      {/* <admin_Page /> */}
      <Landing_page />
      <h1>Hi</h1>
    </div>
  );
}

export default App;
