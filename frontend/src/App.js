import Routes from "./Routes";
import "./App.css";

import DetailsProvider from "./context/DetailsProvider";

const App = () => {
  return (
    <div className="App">
      <DetailsProvider>
        <Routes />
      </DetailsProvider>
    </div>
  );
};

export default App;
