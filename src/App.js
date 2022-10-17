import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

import LandingPage from "./pages/LandingPage";
import Detail from "./pages/Detail";
import Order from "./pages/Order";

import CounterFunc from "./pages/Counter/functional-components";
import CounterClass from "./pages/Counter/class-component";
import NotFound from "./pages/NotFound";
import Profil from "./pages/Profil";
import ChangePassword from "./pages/ChangePassword";
import MyBooking from "./pages/MyBooking";
import MyWishList from "./pages/MyWishlist";
import ManageEvent from "./pages/ManageEvent/event";
import Payment from "./pages/Payment";

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
          <Route path="/detail/:eventId" element={<Detail />} />
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/myBooking" element={<MyBooking />} />
          <Route path="/myWishlist" element={<MyWishList />} />
        </Route>

        {/* PRIVATE ADMIN ROUTE */}
        <Route element={<PrivateRoute isAdmin={true} />}>
          <Route path="/manage-event" element={<ManageEvent />} />
        </Route>

        {/* PUBLIC ROUTE */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/counter/func" element={<CounterFunc />} />
        <Route path="/counter/class" element={<CounterClass />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
