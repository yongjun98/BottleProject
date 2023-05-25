import React from "react";
import "../style/sendtxt.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import crypto, { HmacSHA256, SHA256 } from "crypto-js";
import { useRef } from 'react';





export default function Textpage() {
  const [title, setTitle] = useState();
  const [text, settext] = useState();

  const titleInput = useRef();
  const textInput = useRef();

    return (
    <>
      <div className="sendtxt_content">
      <div className="top">
          <div className="topbox1"></div>
          <div className="topbox2"></div>
          <div className="topbox3"></div>
          <div className="sicon_box1"> </div>
          <div className="sicon_box2"> </div>
          <div className="sicon_box3"> </div>
          <div className="sicon_bar1"> </div>
          <div className="sicon_bar2"> </div>
          <div className="home_box1"> </div>
          <div className="home_box2"> </div>
          <div className="home_box3"> </div>
          <div className="home_bar1"> </div>
          <div className="home_bar2"> </div>
          <div className="ficon_box1"> </div>
          <div className="ficon_box2"> </div>
          <div className="ficon_box3"> </div>
          <div className="ficon_bar1"> </div>
          <div className="ficon_bar2"> </div>

         <div className="title">내가 보낸 쪽지페이지</div>
         <div className="topline1"> </div>
         <div className="topline2"> </div>
        </div>

        <div className="left_container">
        <div className="logo">
        {"┼──────눌러서 확인하세요──────┼"}
        </div>
        <div className="list_box1"></div>
        <div className="list_box2"></div>
        <div className="list_line1"></div>
        <div className="list_line2"></div>
        <div className="list_line3"></div>
        <div className="list_line4"></div>
        <div className="list_title">note passed</div>
        <div className="list_cat1">1</div>
        <div className="list_catbox1"></div>
        <div className="list_catbox2"></div>
        <div className="list_catline1"></div>
        <div className="list_catline2"></div>
        
        
        





        </div>
        <div className="right_container">
          <div className="text_box1"></div>
          <div className="text_box2"></div>
          <div className="text_box3"></div>
          <div className="text_line1"></div>
          <div className="text_line2"></div>


        </div>
      </div>
    </>
  );
}
