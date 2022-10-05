import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signin from "./pages/Signin/example";
import Signup from "./pages/Signup";

import LandingPage from "./pages/LandingPage";
import Detail from "./pages/Detail";
import Counter from "./pages/Counter/functional-components";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* MAIN */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/counter" element={<Counter />} />

        {/* PAGE NOT FOUND */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
