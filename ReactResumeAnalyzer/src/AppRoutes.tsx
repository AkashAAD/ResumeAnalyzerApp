import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import ResumeAnalyzer from "./Components/ResumeAnalyzer/ResumeAnalyzer";
import Home from "./Components/Home/Home";
import Header from "./Components/Layout/Header";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/sign-up" element={<SignUp/>}></Route>
          <Route path="/sign-in" element={<SignIn/>}></Route>
          <Route path="/resume-analyzer" element={<ResumeAnalyzer/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes;

