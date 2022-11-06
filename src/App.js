import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./components/Home";
import Repos from "./components/Repos";
import Details from "./components/Details";
import Error from "./components/Error";
import Profile from "./components/Profile";
import "./App.css";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="repos" element={<Repos />}></Route>
          <Route exact path="details/:repositoryId" element={<Details />}></Route>
          <Route path='*' element={<Error />}></Route>
          <Route path="Profile" element={<Profile />}></Route>
              {/* <Route path="/products/:productId"></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
