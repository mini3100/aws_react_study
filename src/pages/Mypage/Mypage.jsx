/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef, useState } from 'react';
import * as S from './Styles.js';

function Mypage(props) {
    const defaultProfileImgSrc = "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";

    const profileImgSrc = null;

    const [ profileImg, setProfileImg ] = useState(!!profileImgSrc ? profileImgSrc : defaultProfileImgSrc);
    const profileFileInput = useRef();

    const localStorageUser = JSON.parse(localStorage.getItem("user"));
    
    let user = {
        username: localStorageUser?.username && localStorageUser.username,
        name: localStorageUser?.name && localStorageUser.name,
        email: localStorageUser?.email && localStorageUser.email
    }

    const handleProfileImgChangeClick = () => {
        profileFileInput.current.click();
    }

    const handleProfileImgSelect = (e) => {
        const reader = new FileReader();    //자바스크립트 내장 함수
        reader.onload = (e) => {    //함수 정의, onload : reader가 실행될 때의 함수
            setProfileImg(e.target.result); //새로 읽어온 파일의 이미지 주소로 src를 바꿔줌
        }
        reader.readAsDataURL(e.target.files[0]);    //함수 실행
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        user = {
            ...user,
            [name]: value
        }
    }

    const handleSaveBtnClick = () => {
        localStorage.setItem("profileImg", profileImg);
        localStorage.setItem("userList", JSON.stringify(user));
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SProfileImgBox} onClick={handleProfileImgChangeClick}>
                    <img css={S.SProfileImg} src={profileImg}/>
                    <input css={S.SFileHidden} type="file" ref={profileFileInput} onChange={handleProfileImgSelect}/>
                </div>
            </div>
            <div css={S.SContainer}>
                <div css={S.SProfileContainer}>
                    <label htmlFor="username">사용자명</label>
                    <input css={S.SInput} type="text" id='username' name='username' onChange={handleInputChange} defaultValue={user.username}/>
                </div>
                <div css={S.SProfileContainer}>
                    <label htmlFor="name">이름</label>
                    <input css={S.SInput} type="text" id='name' name='name' onChange={handleInputChange} defaultValue={user.name}/>
                </div>
                <div css={S.SProfileContainer}>
                    <label htmlFor="email">이메일</label>
                    <input css={S.SInput} type="text" id='email' name='email' onChange={handleInputChange} defaultValue={user.email}/>
                </div>
                <div css={S.SProfileContainer}>
                    <button css={S.SButton} onClick={handleSaveBtnClick}>저장</button>
                </div>
            </div>
        </div>
    );
}

export default Mypage;