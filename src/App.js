import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
