import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

import LandingPage from "./pages/LandingPage";
import Detail from "./pages/Detail";
import Order from "./pages/Order";
import Counter from "./pages/Counter/functional-components";

import NotFound from "./pages/NotFound";
import PublicRoute from "./route/PublicRoute";
import PrivateRoute from "./route/PrivateRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH */}
        <Route element={<PublicRoute />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* MAIN */}

        <Route path="/" element={<LandingPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/detail/:eventId" element={<Detail />} />
          <Route path="/order/:eventId" element={<Order />} />
          <Route path="/counter" element={<Counter />} />
        </Route>

        {/* PAGE NOT FOUND */}
        <Route element={<PrivateRoute isAdmin={true} />}></Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
