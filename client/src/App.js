import Search from "./Pages/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./Pages/List";
import Header from "./Components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
