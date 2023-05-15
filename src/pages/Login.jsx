import React from "react";
import "../style/login.scss";
import { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import crypto, { HmacSHA256, SHA256 } from "crypto-js";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const loginEmailInput = useRef(); //email input
  const loginPwInput = useRef(); // pwd input

  // Email 암호화 작업 -> setEmail 에 암호화 된 Email 세팅
  const onChangeInput = (e) => {
    setEmail(
      crypto.AES.encrypt(
        e.target.value,
        process.env.REACT_APP_AES_SECRET_EMAIL
      ).toString()
    );
  };

  // Password 암호화 작업 -> setPassword 에 암호화 된 password 세팅
  const onChangePwd = (e) => {
    setPassword(
      SHA256(
        e.target.value,
        process.env.REACT_APP_AES_SECRET_PASSWORD
      ).toString()
    );
  };

  // Login button 눌렸을떄 setLogin 함수 호출.
  const setLogin = async () => {
    if (!loginEmailInput.current.value || !loginPwInput.current.value) {
      return alert("값을 입력하세요");
    }
    try {
      // http://localhost:8080/login 으로 보내줌.
      const resSetLogin = await axios.post(`/login`, {
        email: email,
        password: password,
      });
      // 백엔드에서 데이터 잘 받아줬으면 -> 성공
      console.log(resSetLogin.data);
    } catch (error) {
      console.error(error);
      console.log("로그인 부분 잘못되었음");
    }
  };

  return (
    <>
      <div className="login_content">
        
        <div className="top">
         <div className="topbox1"> </div>
         <div className="topbox2"> </div>
         <div className="topbox3"> </div>

         <div className="sicon_box1"> </div>
         <div className="sicon_box2"> </div>
         <div className="sicon_box3"> )ᕗ</div>
         <div className="sicon_bar1"> </div>
         <div className="sicon_bar2"> </div>
         
         <div className="home_box1"> </div>
         <div className="home_box2"> </div>
         <div className="home_bar1"> </div>
         <div className="home_bar2"> </div>
         <button className="home_btn">
           <Link to="/" className="home">
             <FontAwesomeIcon icon={faHome} />ㅤ
           </Link>       
         </button>

         <div className="ficon_box1"> </div>
         <div className="ficon_box2"> </div>
         <div className="ficon_box3"> ᕕ(</div>
         <div className="ficon_bar1"> </div>
         <div className="ficon_bar2"> </div>

         <div className="title">로그인페이지</div>
         <div className="topline1"> </div>
         <div className="topline2"> </div>
        </div>

        <div className="left_container">
        <div className="logo">
    ∧__∧<br />
  ( ｀Д´ )<br />
  (っ▄︻▇〓┳═☆  손들어<br />
  / )<br />
  ( /￣∪<br />
</div>

        </div>
        <div className="right_container">
           <div className="email">이메일</div>
           <div className="emailbox1"></div>
           <div className="emailbox2"></div>
           <div className="emailbar1"></div>
           <div className="emailbar2"></div>
           <div className="email_input ">
              <input
                type="email"
                ref={loginEmailInput}
                onChange={onChangeInput}
              />
            </div>
          <div className="password">비밀번호</div>
          <div className="passbox1"></div>
          <div className="passbox2"></div>
          <div className="passbar1"></div>
          <div className="passbar2"></div>
          <div className="password_input">
              <input
                type="password"
                ref={loginPwInput}
                onChange={onChangePwd}
              />
          </div>
          <div className="loginbox1"></div>
          <div className="loginbox2"></div>
          <div className="loginbar1"></div>
          <div className="loginbar2"></div>
            <button className="login_btn" onClick={setLogin}>
              로그인하기
            </button>
          <p className="search_email">이메일찾기 |</p>
          <p className="search_password">비밀번호찾기 |</p>
             <button className="register_btn">
                <Link to="/register" className="Account">
                  가입하기
                </Link>
              </button>
          </div>
        </div>
    </>
  );
}
