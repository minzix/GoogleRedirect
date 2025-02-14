// import { useSearchParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const GoogleCallback = () => {
//   const [searchParams] = useSearchParams();
//   const code = searchParams.get("code");
//   const [isCodeSent, setIsCodeSent] = useState(false);

//   useEffect(() => {
//     if (!code || isCodeSent) return;

//     axios
//       .post("https://sof.backendbase.site/api/auth/code", { code })
//       .then((res) => {
//         console.log("토큰 요청 성공", res.data);
//         setIsCodeSent(true);
//       })
//       .catch((err) => {
//         console.error("토큰 요청 실패", err);
//       });
//   }, [code, isCodeSent]);

//   return null;
// };

// export default GoogleCallback;

// import { useSearchParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const GoogleCallback = () => {
//   const [searchParams] = useSearchParams();
//   const code = searchParams.get("code");
//   const [isCodeSent, setIsCodeSent] = useState(false);

//   useEffect(() => {
//     console.log("code 값:", code); // 코드가 정상적으로 들어오는지 확인

//     if (!code) return; // code가 없으면 실행 안 함

//     if (!isCodeSent) { // 중복 요청 방지
//       axios
//         .post("https://sof.backendbase.site/api/auth/code", 
//           { code }, 
//           { headers: { "Content-Type": "application/json" } }
//         )
//         .then((res) => {
//           console.log("토큰 요청 성공", res.data);
//           setIsCodeSent(true);
//         })
//         .catch((err) => {
//           console.error("토큰 요청 실패", err.response ? err.response.data : err.message);
//         });
//     }
//   }, [code]);

//   return <p>인증 중입니다...</p>;
// };

// export default GoogleCallback;

import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const GoogleCallback = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const [isCodeSent, setIsCodeSent] = useState(false);

  useEffect(() => {
    console.log("code 값:", code); // 코드 확인용 로그

    if (!code || isCodeSent) return; // code가 없거나 이미 요청을 보냈다면 실행하지 않음

    axios
      .get(`https://sof.backendbase.site/api/auth/callback?code=${code}`)
      .then((res) => {
        console.log("토큰 요청 성공", res.data);
        setIsCodeSent(true);
      })
      .catch((err) => {
        console.error("토큰 요청 실패", err.response ? err.response.data : err.message);
      });
  }, [code, isCodeSent]);

  return <p>인증 중입니다...</p>;
};

export default GoogleCallback;
