import React from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {
    return (
        <>
            <h3>안녕하세요. 메인페이지 입니다.</h3>
            <ul>
                <Link to="/signin"><li>로그인</li></Link>
                <Link to="/signup"><li>회원가입</li></Link>
            </ul>
        </>
    );
};

export default Main;