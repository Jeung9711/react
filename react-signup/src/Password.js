import { useEffect, useState } from "react";

function Password({ formData, setFormData }) {
  const [pass,setPass] = useState('');
  const [passCheck, setPassCheck] = useState('');
  const [match, setMatch] = useState(false);

  // const handleChange = (e) => {
  //   //현재 이벤트 실행시키는 주체
  //   console.dir(e.target) //
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setFormData({...setFormData, [name]:value})
  // }

  useEffect(() => {
    //console.log(`pass= ${pass} passCheck= ${passCheck}`)
    if (pass == passCheck){
        setMatch(true);
        setFormData((prevformData) => ({...prevformData, password: pass}));
      } else {
        setMatch(false)
      }
  },[pass,passCheck, setFormData]);


    return(
        <div>
          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              value={pass}
              onChange={(e) => {setPass(e.target.value)}}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={passCheck}
              onChange={(e) => {setPassCheck(e.target.value)}}
              required
            />

            {/* useRef 사용 가능 
            match.current.classList.remove('pw-match') 보이기 안보이기 설정 importatnt 때문*/}
            {match==true?
            null
            :<label id="pw-match" className="pw-match" >비밀번호가 일치해야 됩니다.</label>
            }
          </div>
        </div>
    );
}

export default Password;