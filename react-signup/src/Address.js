import { useState } from "react";

function Address({ formData, setFormData}) {
    return(
        <div className="form-group">
            <label htmlFor="address">주소</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={(e) => {setFormData({...formData, address: e.target.value})}}
              required
            />
          </div>
    );
}

export default Address;