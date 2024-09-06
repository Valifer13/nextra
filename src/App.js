import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Testing from "./pages/Testing";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="detail" element={<Detail />} />
          <Route path="search" element={<Search />} />
          <Route path="testing" element={<Testing />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
