import React from 'react';
import '../style/findPassword.scss';
import { BiCheck } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function FindPassword() {

    function btn_emailcheck() {
        alert("이메일 확인!");
    }

    function btn_signup() {
        alert("가입하기!");
    }

    return (
        <div className="findpassword_component">
            <div className="textarea">
                ∧∞∧           ∧∞∧<br />
                (｡･ω･｡) ♡♡ (｡･ω･｡)비번 찾고 싶다면 이메일 인증을 해<br />
            </div>
            <div className="email">이메일</div>
            <div className="email_box1">
                <div className="email_box2">
                    <div className="email_bar1"></div>
                    <div className="email_bar2"></div>
                    <div className="email_input">
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div className="eclick_box1">
                <div className="eclick_box2">
                    <div className="eclick_bar1"></div>
                    <div className="eclick_bar2"></div>
                    <button className="emailclick" onClick={btn_emailcheck}>
                        <span className="icon-wrapper">
                            <BiCheck size={30} />
                        </span>
                    </button>
                </div>
            </div>
            <div className="authcode">인증번호</div>
            <div className="authcode_box1">
                <div className="authcode_box2">
                    <div className="authcode_bar1"></div>
                    <div className="authcode_bar2"></div>
                    <div className="authcode_input">
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div className="sign_box1">
                <div className="sign_box2"></div>
                <div className="sign_bar1"></div>
                <div className="sign_bar2"></div>
                <button className="signup" onClick={btn_signup}>
                    클릭
                </button>
            </div>

            <button className="login_link">
                <Link to="/login" className="login">
                    ㅤ | 로그인하기 |
                </Link>
            </button>
        </div>
    );
}