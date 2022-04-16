import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Page/Share/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home/Home";
import Login from "./Page/Login/Login";
import SingUp from "./Page/Login/SingUp/SingUp";
import BreakFast from "./Page/Home/BreakFast/BreakFast";
import Lunch from "./Page/Home/Lunch/Lunch";
import Dinner from "./Page/Home/Dinner/Dinner";
import NotFound from "./Page/Share/NotFound/NotFound";
import RequireAuth from "./Page/Login/RequireAuth/RequireAuth";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/singup" element={<SingUp></SingUp>}></Route>
        <Route path="/breakfast" element={<BreakFast></BreakFast>}></Route>
        <Route path="/lunch" element={<Lunch></Lunch>}></Route>
        <Route path="/dinner" element={<Dinner></Dinner>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
