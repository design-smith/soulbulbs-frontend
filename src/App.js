import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listpage from './Pages/Listpage';
import Details from './Pages/Details';
import Preview from './Pages/Preview';
import Home from "./Pages/Home";
import { AppWrapper } from './Context/state';

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/listpage" element={<Listpage />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
