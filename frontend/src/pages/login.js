import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { baseUrl } from "../components/commonApi/mainApi";

//import { useNavigate } from "react-router-dom";

const Login = () => {
  // 네이버 로그인
  const { naver } = window;
  const location = useLocation();
  const NAVER_CALLBACK_URL = "http://localhost:3000";
  const NAVER_CLIENT_ID = "JF2FSSw35EeARO3tcAS1";

  const getNaverToken = () => {
    if (!location.hash) return;
    const token = location.hash.split("=")[1].split("&")[0];
    console.log(token);
  };

  useEffect(() => {
    initializeNaverLogin();
    getNaverToken();
  }, []);

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      isPopup: false,
      loginButton: { color: "white", type: 1, height: "47" },
    });
    naverLogin.init();
  };
  // 자체로그인
  // const navigate = useNavigate();
  const [user_name, setUsername] = useState("");
  const [user_pwd, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${baseUrl}/login`,
        { user_name: user_name, user_pwd: user_pwd },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // console.log("response:", response.data);

        console.log(response.headers);
        console.log(response.data);

        // 값을 받을때는 소문자
        let jwtToken = response.headers["authorization"];
        console.log(response.headers.get("Authorization"));
        console.log(response.headers["Access-Control-Allow-Credentials"]);
        // let jwtToken = response.headers.get("Authorization");

        let jwtUsername = response.data.username;
        console.log("jwtToken", jwtToken);
        localStorage.setItem("Authorization", jwtToken);
        localStorage.setItem("username", jwtUsername);

        setUsername("");
        setPassword("");
      })
      .then((response) => {
        // navigate("/");
        window.location.replace("/");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div className='container text-center mt-5'>
      <div className='mx-5'>
        <h1>로그인</h1>
        <form onSubmit={onSubmit}>
          <div className='form-group mt-1'>
            <input
              type='text'
              name='user_name'
              className='form-control'
              id='user_name'
              placeholder='사용자'
              maxLength='20'
              onChange={handleUsernameChange}
            />
          </div>
          <div className='form-group mt-1'>
            <input
              type='password'
              className='form-control'
              name='user_pwd'
              id='user_pwd'
              placeholder='비밀번호'
              maxLength='20'
              onChange={handlePasswordChange}
              autoComplete='off'
            />
          </div>
          <div className='mt-1'>
            <button type='submit' className='btn btn-primary'>
              로그인
            </button>
            <Link className='btn btn-primary' to='/registerPage'>
              회원 가입
            </Link>
          </div>

          <div className='grid-naver' id='naverIdLogin'></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
