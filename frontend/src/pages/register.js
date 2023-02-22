import axios from "axios";
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

  const onSubmit = async (e) => {
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

  const handleValueChange = (e) => {
    // radio 버튼에서는 e.preventDefault()를 하면 더블클릭을 해줘야한다.
    // e.preventDefault();
    setMember({ ...member, [e.target.name]: e.target.value });
    const currentId = e.target.value;
  };

  const [userIdError, setUserIdError] = useState(false);
  const [PasswordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const onChangeUserId = (e) => {
    const userIdRegex = /^[A-Za-z0-9+]{5,}$/;
    if (!e.target.value || userIdRegex.test(e.target.value))
      setUserIdError(false);
    else setUserIdError(true);
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const onChangePassword = (e) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!e.target.value || passwordRegex.test(e.target.value))
      setPasswordError(false);
    else setPasswordError(true);

    if (!member.user_confirmpwd || e.target.value === member.user_confirmpwd)
      setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setMember(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    if (member.user_pwd === e.target.value) setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setMember(...member, e.target.value);
  };

  return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        <div className='container'>
          <h1>회원가입</h1>
          <div className='form-group mb-1'>
            <label>아이디</label>
            <br />
            <input
              value={member.user_name}
              type='text'
              className='form-control'
              name='user_name'
              placeholder='Username'
              onChange={onChangeUserId}
            />
            {userIdError && (
              <div class='invalid-input'>
                아이디는 5글자 이상, 숫자제외, 특수문자 제외
              </div>
            )}
          </div>

          <div className='form-group mb-1'>
            <label>비밀번호</label>
            <br />
            <input
              maxLength={20}
              value={member.user_pwd}
              type='password'
              className='form-control'
              name='user_pwd'
              placeholder='Password'
              onChange={onChangePassword}
              autoComplete='off'
            />
            {PasswordError && (
              <div class='invalid-input'>
                암호는 8자 이상이어야 하며 문자와 숫자를 하나 이상 포함해야
                합니다.
              </div>
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
              onChange={onChangeConfirmPassword}
              autoComplete='off'
            />
            {confirmPasswordError && (
              <div class='invalid-input'>암호가 일치하지 않습니다.</div>
            )}
          </div>

          <div className='form-group mb-1'>
            <label>닉네임</label>
            <br />
            <input
              type='text'
              className='form-control'
              name='user_nickname'
              placeholder='nickname'
              onChange={handleValueChange}
            />
          </div>

          <div className='form-group mb-1'>
            <label>이메일</label>
            <input
              type='email'
              className='form-control'
              name='user_email'
              placeholder='Email'
              onChange={handleValueChange}
            />
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
          <button type='submit' className='btn btn-primary'>
            가입 완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
