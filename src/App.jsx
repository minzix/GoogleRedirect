// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import GoogleCallback from "./GoogleCallback"; // GoogleCallback을 분리했다고 가정
// import logo from "./assets/logo.png";
// import "./App.css";

// const App = () => {
//   return (
//     <Router> {/* 🔹 전체 앱을 Router로 감싸기 */}
//       <Routes>
//         <Route path="/" element={
//           <div className="container">
//             <Route path="/callback" element={<GoogleCallback />} />
//             <div className="card">
//               <img src={logo} alt="앱 로고" className="app-logo" />
//               <h1>인증 성공!</h1>
//               <p>브라우저를 닫고 앱으로 돌아가기</p>
//             </div>
//           </div>
//         } />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import GoogleCallback from "./GoogleCallback"; 
import logo from "./assets/logo.png";
import "./App.css";

const Home = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");

  return (
    <div className="container">
      {/* ✅ URL에 "code"가 있으면 GoogleCallback 실행 */}
      {code ? <GoogleCallback /> : null}

      <div className="card">
        <img src={logo} alt="앱 로고" className="app-logo" />
        <h1>인증 성공!</h1>
        <p>브라우저를 닫고 앱으로 돌아가기</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* ✅ 루트("/")에서도 GoogleCallback을 실행할 수 있도록 Home 컴포넌트 사용 */}
        <Route path="/" element={<Home />} />

        {/* ✅ 개별적으로 /callback 경로도 추가 가능 */}
        <Route path="/callback" element={<GoogleCallback />} />
      </Routes>
    </Router>
  );
};

export default App;

