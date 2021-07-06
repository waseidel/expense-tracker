import { BrowserRouter as Router } from "react-router-dom";
import NavMenu from "./Components/NavMenu";
import Routes from "./Components/Routes";

const App = () => {
  return (
    <Router>
      <NavMenu />
      <Routes />
    </Router>
  );
};

export default App;
