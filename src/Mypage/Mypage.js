import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import "./Mypage.scss";

function Mypage() {
  const mypagePoing = e => {
    e.preventDefault();
    fetch("http://10.58.52.58:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ point }),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem("token", data.userInfo.accessToken);
        localStorage.setItem(
          "userName",
          JSON.stringify(data.userInfo.userName)
        );
      });
  };

  return (
    <>
      <Nav />
      <div className="mypage">
        <div className="mypage-description">
          <div className="mypage-description-content">Hej, 만나서 반가워요</div>
          <div className="mypage-description-content">
            <span>나의</span>
            <span className="mypage-description-content-title">
              IKEA Family
            </span>
          </div>
          <div className="mypage-description-guide-benefit">
            IKEA Family 허브를 방문해 주셔서 감사합니다. 이곳에서 IKEA Family
            맴버십의 장점을 모두 확인해보세요.
          </div>
          <span className="mypage-description-guide-modify">
            이름, 주소 또는 설정을 수정하고 싶으세요?{" "}
          </span>
          <span className="mypage-description-guide-link">계정 관리</span>
        </div>
        <div className="mypage-id-card-box">
          <div className="mypage-id-card-content">
            <div className="mypage-id-card-guide">
              고객님의 IKEA Family ID 입니다.
            </div>
            <div className="mypage-id-card-name">이름</div>
          </div>
          <div className="mypage-id-card-box-blank"></div>
          <div className="mypage-id-card-box-point-box">
            <span className="mypage-id-card-point">point</span>
            <span className="mypage-id-card-point-value">1000000</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mypage;
