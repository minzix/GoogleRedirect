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
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "./assets/logo.png";
import "./App.css";

const GoogleCallback = () => {
  const [isCodeSent, setIsCodeSent] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");

    console.log("code 값:", code); // 코드가 정상적으로 들어오는지 확인

    if (!code || isCodeSent) return;

    axios
      .post(
        "https://sof.backendbase.site/api/auth/code",
        { code },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        console.log("토큰 요청 성공", res.data);
        setIsCodeSent(true);
      })
      .catch((err) => {
        console.error("토큰 요청 실패", err.response ? err.response.data : err.message);
      });
  }, [isCodeSent]);

  return null; // 별도 UI 없음
};

const App = () => {
  return (
    <div className="container">
      {/* ✅ URL에 "code"가 있으면 GoogleCallback 실행 */}
      <GoogleCallback />

      <div className="card">
        <img src={logo} alt="앱 로고" className="app-logo" />
        <h1>인증 성공!</h1>
        <p>브라우저를 닫고 앱으로 돌아가기</p>
      </div>
    </div>
  );
};

export default App;


