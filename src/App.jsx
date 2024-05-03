import Landing from "./pages/Landing";
import Room from "./pages/Room";
import Cards from "./Components/Cards";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="floor" element={<Room />} />
        <Route path="floor/:floorNo" element={<Room />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
      {/* <Route path="*" element={<NoMatch />} /> */}
    </>
  );
}

export default App;
