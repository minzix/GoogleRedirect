import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoogleCallback from "./GoogleCallback"; // GoogleCallback을 분리했다고 가정
import logo from "./assets/logo.png";
import "./App.css";

const App = () => {
  return (
    <Router> {/* 🔹 전체 앱을 Router로 감싸기 */}
      <Routes>
        {/* 🔹 루트 페이지 */}
        <Route path="/" element={
          <div className="container">
            <GoogleCallback /> {/* GoogleCallback이 이제 Router 내부에서 실행됨 */}
            <div className="card">
              <img src={logo} alt="앱 로고" className="app-logo" />
              <h1>인증 성공!</h1>
              <p>브라우저를 닫고 앱으로 돌아가기</p>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;
