import axios from "axios";
import { response } from "express";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../components/commonApi/mainApi";

//회원가입
const RegisterPage = () => {
  const navigator = useNavigate();

  const [member, setMember] = useState({
    user_name: "",
    user_pwd: "",
    user_confirmpwd: "",
    user_nickname: "",
    user_email: "",
    user_role: "ROLE_MEMBER",
  });

  const chkMessage = {
    user_name: "이미 사용중인 아이디입니다.",
  };

  //오류메세지
  const errorMessage = {
    user_name:
      "사용자 ID는 5자 이상이어야 하며 문자 또는 숫자를 포함해야 합니다.",
    user_pwd:
      "최소 8자에 하나의 문자 및 하나의 숫자 및 하나의 특수 문자를 입력해주세요.",
    user_confirmpwd: "비밀번호가 일치하지 않습니다.",
    user_nickname:
      "최소 2자에 영어,한글,숫자 상관없이 7자 안으로 입력해주세요.",
    user_email: "이메일 형식에 맞게 작성해주세요.",
    user_role: "ROLE_MEMBER",
  };

  //유효성 검사
  const [effect, setEffect] = useState({
    user_name: false,
    user_pwd: false,
    user_confirmpwd: false,
    user_nickname: false,
    user_email: false,
  });

  const onSubmit = async (e) => {
    const result = validChk("submit");
    if (!result.valid) {
      const msg = errorMessage[result.where];
      alert("가입완료");
    }
    e.preventDefault();

    await axios
      .post(`${baseUrl}/registerPage`, member, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setMember({
          user_name: "",
          user_pwd: "",
          user_confirmpwd: "",
          user_nickname: "",
          user_email: "",
          user_role: "ROLE_MEMBER",
        });
      })
      .then((response) => {
        navigator("/");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  // 정규식

  // 아이디 체크
  // 사용자 ID는 5자 이상이어야 하며 문자 또는 숫자를 포함해야 합니다.
  const validChk = (target, data) => {
    var id = document.getElementById("id").value;
    if (target !== "submit" && target === "user_name") {
      const idRegExp = /^[A-Za-z0-9+]{5,}$/;
      if (!idRegExp.test(member.user_name)) {
        setEffect({ ...effect, user_name: false });
        document.getElementById("idMsg").innerHTML =
          "<span style='color: red;'>사용자 ID는 5자 이상이어야 하며 문자 또는 숫자를 포함해야 합니다.</span>";
        return { valid: false, where: "user_name" };
      } else {
        if (data === 0) {
          setEffect({ ...effect, user_name: true });
          document.getElementById("idMsg").innerHTML =
            "<span style='color: green;'>사용가능한 아이디입니다.</span>";
          console.log(effect);
        } else {
          setEffect({ ...effect, user_name: false });
          document.getElementById("idMsg").innerHTML =
            "<span style='color: red;'>중복된 아이디입니다.</span>";
        }
      }
    }

    // 비밀번호 체크
    // 최소 8자에 하나의 문자 및 하나의 숫자 및 하나의 특수 문자 포함된 비밀번호인지
    if (target !== "submit" && target === "user_pwd") {
      const pwdRegExp =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/g;
      if (!pwdRegExp.test(member.user_pwd)) {
        setEffect({ ...effect, user_pwd: false });
        return { valid: false, where: "user_pwd" };
      } else {
        setEffect({ ...effect, user_pwd: true });
      }
    }

    // 비밀번호 확인
    if (target !== "submit" && target === "user_confirmpwd") {
      if (member.user_pwd !== member.user_confirmpwd) {
        setEffect({ ...effect, user_confirmpwd: false });
        return { valid: false, where: "user_comfirmpwd" };
      } else {
        setEffect({ ...effect, user_confirmpwd: true });
      }
    }

    // 닉네임 확인
    if (target !== "submit" && target === "user_nickname") {
      const nicknameRegExp = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,7}$/;
      if (!nicknameRegExp.test(member.user_nickname)) {
        setEffect({ ...effect, user_nickname: false });
        return { valid: false, where: "user_nickname" };
      } else {
        setEffect({ ...effect, user_nickname: true });
        console.log(effect);
      }
    }

    // 이메일 확인
    var id2 = document.getElementById("email").value;
    if (target !== "submit" && target === "user_email") {
      const emailRegExp =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegExp.test(member.user_email)) {
        setEffect({ ...effect, user_email: false });
        document.getElementById("emailMsg").innerHTML =
          "<span style='color:red;'>올바른 이메일 형식을 써주세요</span>";
        return { valid: false, where: "user_email" };
      } else {
        if (data === 0) {
          setEffect({ ...effect, user_email: true });
          document.getElementById("emailMsg").innerHTML =
            "<span style='color:green;'>사용가능한 이메일 입니다.</span>";
          console.log(effect);
        } else {
          setEffect({ ...effect, user_email: false });
          document.getElementById("emailMsg").innerHTML =
            "<span style='color:red;>중복된 이메일입니다.</span>";
        }
      }
    }

    return true;
  };

  const handleValueChange = async (e) => {
    // radio 버튼에서는 e.preventDefault()를 하면 더블클릭을 해줘야한다.
    // e.preventDefault();
    // setMember({ ...member, [e.target.name]: e.target.value });
    // const currentId = e.target.value;
    member[e.target.name] = e.target.value;
    console.log("bb: " + member);
    console.log("bb: " + member[e.target.name]);

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    await axios
      .post(baseUrl + "/idck", member, config)
      .then((response) => {
        console.log("id: " + response.data);
        validChk(e.target.name, response.data);
      })
      .catch((err) => {
        console.error(err.message);
      });

    await axios
      .post(baseUrl + "/emailck", member, config)
      .then((response) => {
        console.log("email:" + response.data);
        validChk(e.target.name, response.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  // 유효성 검사
  // const [userIdError, setUserIdError] = useState(false);
  // const [PasswordError, setPasswordError] = useState(false);
  // const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  // const [userNicknameError, setUserNicknameError] = useState(false);
  // const [emailError, setEmailError] = useState(false);

  return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        <div className='container'>
          <h1>회원가입</h1>
          <div className='form-group mb-1'>
            <label>아이디</label>
            <br />
            <input
              maxLength={15}
              id='id'
              type='text'
              className='form-control'
              name='user_name'
              placeholder='Username'
              onChange={handleValueChange}
            />
            <span id='idMsg'></span>
            {/* 유효성체크 */}
          </div>

          <div className='form-group mb-1'>
            <label>비밀번호</label>
            <br />
            <input
              maxLength={20}
              type='password'
              className='form-control'
              name='user_pwd'
              placeholder='Password'
              onChange={handleValueChange}
              autoComplete='off'
            />
            {/* 유효성체크 */}
            {effect.user_pwd ? (
              <span id='idMsg' style={{ color: "green" }}>
                사용가능한 비밀번호 입니다.
              </span>
            ) : (
              <span id='idMsg' style={{ color: "red" }}>
                {/* {message.username} */}
              </span>
            )}

            {!effect.user_pwd && member.user_pwd.length > 0 && (
              <span id='idMsg' style={{ color: "red" }}>
                {errorMessage.user_pwd}
              </span>
            )}
          </div>

          <div className='form-group mb-1'>
            <label>비밀번호 확인</label>
            <br />
            <input
              maxLength={20}
              value={member.user_confirmpwd}
              type='password'
              className='form-control'
              name='user_confirmpwd'
              placeholder='ConfirmPassword'
              onChange={handleValueChange}
              autoComplete='off'
            />
            {effect.user_confirmpwd ? (
              <span id='idMsg' style={{ color: "green" }}>
                비밀번호가 일치합니다.
              </span>
            ) : (
              <span id='idMsg' style={{ color: "red" }}>
                {/* {message.passwordConfirm} */}
              </span>
            )}

            {!effect.user_confirmpwd && member.user_confirmpwd.length > 0 && (
              <span id='idMsg' style={{ color: "red" }}>
                {errorMessage.user_confirmpwd}
              </span>
            )}
          </div>

          <div className='form-group mb-1'>
            <label>닉네임</label>
            <br />
            <input
              maxLength={20}
              type='text'
              className='form-control'
              name='user_nickname'
              placeholder='nickname'
              onChange={handleValueChange}
            />
            {effect.user_nickname ? (
              <span id='nickMsg'></span>
            ) : (
              <span id='idMsg' style={{ color: "red" }}>
                {/* {errorMessage.user_nickname} */}
              </span>
            )}
            {!effect.user_nickname && member.user_nickname.length > 0 && (
              <span id='idMsg' style={{ color: "red" }}>
                {errorMessage.user_nickname}
              </span>
            )}
          </div>

          <div className='form-group mb-1'>
            <label>이메일</label>
            <input
              maxLength={50}
              type='email'
              className='form-control'
              name='user_email'
              placeholder='Email'
              onChange={handleValueChange}
            />

            <span id='emailMsg'></span>
          </div>
          <hr className='my-3' />
          <div className='form-group mb-3 mb-1'>
            <div
              className='form-check form-check-inline  form-group'
              onChange={handleValueChange}
            >
              <label className='mx-5'>
                <input
                  type='radio'
                  name='authRole'
                  value='ROLE_ADMIN'
                  className='form-check-input'
                />
                관리자
              </label>
              <label className='mx-5'>
                <input
                  type='radio'
                  name='authRole'
                  value='ROLE_MANAGER'
                  className='form-check-input'
                />
                매니저
              </label>
              <label className='mx-5'>
                <input
                  type='radio'
                  name='authRole'
                  value='ROLE_MEMBER'
                  className='form-check-input'
                  //기본으로 사용
                  defaultChecked={true}
                />
                일반 사용자
              </label>
            </div>
          </div>
          <button type='submit' className='btn btn-primary' onClick={onSubmit}>
            가입 완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
