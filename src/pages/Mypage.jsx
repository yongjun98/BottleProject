import React, { useEffect } from 'react';
import '../style/mypage.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { RiSettings3Fill } from "react-icons/ri";


export default function Mypage(rightContainerProps) {
  const authCheck = async function () {
    try {
      var response = await axios.get(`/bottle/authCheck/`, {
        params: {
          auth: sessionStorage.getItem('auth'),
        },
      });
      if (response.data.status === 'success') {
        sessionStorage.setItem('auth', response.data.auth);
      } else {
        console.error('authCheck error');
      }
    } catch (error) {
      rightContainerProps.alertTextArea.current.innerHTML =
        '서버 내부 오류입니다.\n 관리자에게 문의하세요.';
      rightContainerProps.alertBox.current.style.display = 'block';
    }
  };
  useEffect(function () {
    authCheck();
  }, []);

  var logout = function () {
    if (confirm('로그아웃 할까요?')) {
      sessionStorage.setItem('auth', '');
      window.location.replace(process.env.REACT_APP_FRONT_SERVER + '/login');
    }
  };

  return (
    <div className="mypage_content">
      {/*<div className="text_box1"></div>*/}
      {/*<div className="text_box2"></div>*/}
      {/*<div className="text_box3"></div>*/}
      {/*<div className="text_line1"></div>*/}
      {/*<div className="text_line2"></div>*/}
      <div className="category_box1" style={{ left: '35%', top: '30%' }}>
        소통
      </div>
      <button className="communi_btn1">
        <Link to="/SendBottle" className="text">
          ㅤ 1. 쪽지보내기
        </Link>
      </button>
      <button className="communi_btn2">
        <Link to="/SentList" className="send">
          ㅤ 2. 내가보낸쪽지
        </Link>
      </button>
      <button className="communi_btn3">
        <Link to="/RecvList" className="recv">
          ㅤ 3. 내가받은쪽지
        </Link>
      </button>

      <div style={{ position: 'absolute', top: '15px', right: '20px' }}>
        {/* 아이콘을 눌렀을 때 /target 페이지로 이동 */}
        <Link to="/Setting" className="account_icon">
          <RiSettings3Fill size={80} color="white" />
        </Link>
      </div>
    </div>
  );
}
