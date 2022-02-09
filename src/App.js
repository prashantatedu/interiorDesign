import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/appRouter/AppRouter";

function App() {
  return (
    <Router>
      <div className="app-container">
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
