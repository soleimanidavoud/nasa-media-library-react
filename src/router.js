import { Routes, Route } from "react-router-dom";
import Search from "./pages/search/search";
import Show from "./pages/show/show";

export default function router() {
  return (
    <Routes>
      <Route path='/' element={<Search />} />

      <Route path='/show' element={<Show />} />
    </Routes>
  );
}
