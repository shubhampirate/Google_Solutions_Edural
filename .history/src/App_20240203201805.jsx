import Hero from "./pages/Hero/Hero";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./Components/layout";
import SignIn from "./pages/Sign_in";
import Health from "./pages/Booking/booking"
import {useState} from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Hero />   */}
      {/* <SignIn /> */}
      <Routes>
        <Route path="/signin" element={<><SignIn /></>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        {/* <Route path="/education" element={<><Education /></>} /> */}
        <Route path="/bookings" element={<Layout><Health /></Layout>} />
        {/* <Route path="/profile" element={<><Profile /></>} /> */}
        {/* <Route path="/finance" element={<><Finance /></>} /> */}
        {/* <Route path="/questions" element={<><Questions /></>} /> */}
        {/* <Route path="/retireaibot" element={<><Bot /></>} /> */}
        <Route path="/" element={<><Hero /></>} />
      </Routes>  
         </>
  );
}

export default App;
