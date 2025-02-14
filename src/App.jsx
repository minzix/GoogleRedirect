import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const GoogleCallback = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const [isCodeSent, setIsCodeSent] = useState(false); // 요청 중복 방지

  useEffect(() => {
    if (!code || isCodeSent) return; // 코드가 없거나 이미 요청을 보냈다면 실행 안 함

    axios
      .post("https://sof.backendbase.site/api/auth/code", { code })
      .then((res) => {
        console.log("토큰 요청 성공", res.data);
        setIsCodeSent(true); // 요청 성공 후 중복 요청 방지
      })
      .catch((err) => {
        console.error("토큰 요청 실패", err);
      });
  }, [code, isCodeSent]);

  return null; // 화면에 아무것도 렌더링할 필요 없음
};

const App = () => {
  return (
    <div className="container">
      <GoogleCallback /> {/* GoogleCallback 실행 */}
      <div className="card">
        <img src={logo} alt="앱 로고" className="app-logo" />
        <h1>인증 성공!</h1>
        <p>브라우저를 닫고 앱으로 돌아가기</p>
      </div>
    </div>
  );
};

export default App;
