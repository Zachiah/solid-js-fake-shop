import { render } from "solid-js/web";
import { Router } from "solid-app-router";

import App from "./components/App";
import "virtual:windi.css";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
