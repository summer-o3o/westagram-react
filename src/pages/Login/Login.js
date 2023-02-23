import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main');
  };
  return (
    <div className="wrap_login">
      <h2 className="screen_out">인스타그램</h2>
      <div className="box_login">
        <strong className="tit_logo">Westagram</strong>
        <form method="post" action="#none" className="login_form">
          <fieldset>
            <legend className="screen_out">로그인</legend>
            <input
              type="text"
              className="inp_user"
              placeholder="전화번호, 사용자이름 또는 이메일"
              title="전화번호, 사용자이름 또는 이메일"
            />
            <input
              type="password"
              className="inp_psassword"
              placeholder="비밀번호"
              title="비밀번호"
            />
            <button type="submit" className="btn_login" onClick={goToMain}>
              로그인
            </button>
            {/* 아이디, 비밀번호 입력시 속성 disabled 제거 */}
          </fieldset>
        </form>
        <a href="#none" className="link_psassword">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};
export default Login;
