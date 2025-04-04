import { useState } from "react";

function Email({ formData, setFormData}) {
    return(
        <div className="form-group">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange= {(e) => {setFormData({...formData, email: e.target.value})}}
              required
            />
          </div>
    );
}

export default Email;