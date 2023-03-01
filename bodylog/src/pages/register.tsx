// 회원가입 페이지

import router from 'next/router';
import { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function Register() {
  const [registerId, setRegisterId] = useState(''); // 회원가입용(이하 Rgis) 아이디 상태
  const [registerPw, setRegisterPw] = useState(''); // Rgis 비밀번호 상태
  const [registerPwCheck, setRegisterPwCheck] = useState(''); // Rgis 비밀번호 확인 상태
  const [errMessage, setErrMessage] = useState(''); // 에러 메세지 상태

  // Rgis 아이디 input 상태 변화 핸들
  const handleRegisterId = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterId(e.target.value);
  };

  // Rgis 비밀번호 input 상태 변화 핸들
  const handleRegisterPw = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterPw(e.target.value);
  };

  // Rgis 비밀번호 확인 input 상태 변화 핸들
  const handleRegisterPwCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterPwCheck(e.target.value);
  };

  // 회원가입 요청 로직
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const register = async () => {
      const response = await axios
        .post('/api/join', {
          userId: registerId,
          userPassword: registerPw,
          repeatedPassword: registerPwCheck,
        })
        .then(() => {
          alert('Your Accout Has Been Created!');
          router.push('/');
        })
        .catch((err) => {
          console.log('Faild creating accout');
          alert('Faild creating accout');
        });
    };
    if (registerId == '') {
      setErrMessage('아이디를 입력하세요');
    } else if (registerPw == '') {
      setErrMessage('비밀번호를 입력하세요');
    } else if (registerPw != registerPwCheck) {
      setErrMessage('두 개의 비밀번호가 같지 않습니다');
    } else {
      register();
    }
  };

  return (
    <StyledRegisterPage>
      <StyledH1>FLOG</StyledH1>
      <SttledRgis>Create Accout</SttledRgis>
      <StyledRegisterBox onSubmit={onSubmit}>
        <StyledInputText>ID</StyledInputText>
        <StyledInput value={registerId} onChange={handleRegisterId} placeholder='아이디를 입력하세요' minLength={6} maxLength={20} />
        <StyledInputText>PASSWORD</StyledInputText>
        <StyledInput value={registerPw} onChange={handleRegisterPw} placeholder='비밀번호를 입력하세요' type='password' minLength={8} maxLength={20} />
        <StyledInputText>PASSWORD CHECK</StyledInputText>
        <StyledInput value={registerPwCheck} onChange={handleRegisterPwCheck} placeholder='비밀번호를 다시 입력하세요' type='password' minLength={8} maxLength={20} />
        <StyledErrBox>{errMessage}</StyledErrBox>
        <StyledButtonBox type='submit'>
          <StyledButtonText>Join Us</StyledButtonText>
        </StyledButtonBox>
      </StyledRegisterBox>
    </StyledRegisterPage>
  );
}

export default Register;

const StyledH1 = styled.h1`
  margin-top: 2rem;
  font-weight: bold;
  font-size: 3rem;
  color: #272d2f;
`;

const SttledRgis = styled.div`
  margin-top: 4rem;
  font-size: 1.5rem;
  color: #272d2f;
`;
const StyledErrBox = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  color: #ff8b95;
`;

const StyledRegisterPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledRegisterBox = styled.form``;

const StyledInputText = styled.p`
  padding-left: 0.5rem;
  font-size: 0.7rem;
  margin-top: 2rem;
  color: #272d2f;
`;

const StyledInput = styled.input`
  all: unset;
  border: 1px solid #4e4e4e;
  background-color: #efefef;
  border-radius: 0.7rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  width: 20rem;
  height: 2rem;
  padding-left: 0.5rem;
  &:focus,
  :hover {
    background-color: #fce8af;
    transition: all 0.3s;
  }
`;

const StyledButtonText = styled.div`
  color: #efefef;
  background-color: unset;
`;
const StyledButtonBox = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fe7240;
  border-radius: 0.7rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  width: 20.5rem;
  height: 3rem;
  &:hover {
    cursor: pointer;
    background-position: right center;
    ${StyledButtonText} {
      font-size: 1.2rem;
      font-weight: bold;
      transition: all 0.3s;
    }
  }
  &:active {
    transform: scale(0.99);
  }
`;
