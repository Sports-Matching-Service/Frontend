import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/scss/index.scss";
import Header from "./components/common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRoute from "./route/MainRoute";
import Footer from "./components/common/Footer";
import LoginModal from "./components/common/LoginModal";
import AddrModal from "./components/common/AddrModal";
import SignUpRoute from "./route/SignUpRoute";
import MatchRegisRoute from "./route/MatchRegisRoute";
import MyPageRoute from "./route/MyPageRoute";
import DetailRoute from "./route/DetailRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<MainRoute />} />
            <Route path="/signup" element={<SignUpRoute />} />
            <Route path="/matchregis" element={<MatchRegisRoute />} />
            <Route path="/mypage" element={<MyPageRoute />} />
            <Route path="/detail" element={<DetailRoute />} />
          </Routes>
        </div>
      </Container>
      <Footer />
      <LoginModal />
      <AddrModal />
    </BrowserRouter>
  );
}

export default App;
