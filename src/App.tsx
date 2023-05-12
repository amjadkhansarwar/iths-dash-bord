import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Traffic from "./components/Traffic";
import Clock from "./components/Clock";
import Weather from "./components/Weather";
import * as S from "./styled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const city = "Stockholm,SE"
  return (
    <S.Container>
      <Router>
        <Header />
        <S.Body>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clock" element={<Clock />} />
            <Route path="/weather" element={<Weather city={city}/>} />
            <Route path="/traffic" element={<Traffic siteId="9192" timewindow={20}/>} />
            <Route path="/*" element={<h1>Page not Found</h1>} />
          </Routes>
        </S.Body>
        <Footer />
      </Router>
    </S.Container>
  );
}

export default App;
