import Landing from "./pages/Landing";
import Room from "./pages/Room";
import Cards from "./Components/Cards";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Form from "./Components/Form";

function App() {
  return (
    <>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="floor/:floorNo" element={<Room />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Route path="*" element={<NoMatch />} /> */}
    </>
  );
}

export default App;
