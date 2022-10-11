import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

import LandingPage from "./pages/LandingPage";
import Detail from "./pages/Detail";
import Order from "./pages/Order";

import CounterFunc from "./pages/Counter/functional-components";
import CounterClass from "./pages/Counter/class-component";
import NotFound from "./pages/NotFound";

import ManageEvent from "./pages/ManageEvent";

import PublicRoute from "./utils/route/PublicRoute";
import PrivateRoute from "./utils/route/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC AUTH ROUTE */}
        <Route element={<PublicRoute />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* PRIVATE ROUTE */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/order" element={<Order />} />
        </Route>

        {/* PRIVATE ADMIN ROUTE */}
        <Route element={<PrivateRoute isAdmin={true} />}>
          <Route path="/manage-event" element={<ManageEvent />} />
        </Route>

        {/* PUBLIC ROUTE */}
        <Route path="/counter/func" element={<CounterFunc />} />
        <Route path="/counter/class" element={<CounterClass />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
