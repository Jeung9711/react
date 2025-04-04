import { useEffect, useState } from "react";

function Id({ formData, setFormData }) {
  const [userId, setUserId] = useState('');

  useEffect(()=>{
    setTimeout(()=>{
      setFormData((prev)=>({...prev, id: userId}));
    }, 100);
  },[userId])
    return (
        <div className="form-group">
            <label htmlFor="userId">사용자 아이디</label>
            <input
              type="text"
              id="userId"
              name="userId"
              value={userId}
              onChange={(e) => {setUserId(e.target.value)}}
              required
            />
          </div>
    );
}

export default Id;