function Phonenumber({ formData, setFormData}) {
    return(
        <div className="form-group">
            <label htmlFor="phoneNumber">전화번호</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phone}
              onChange={(e) => {setFormData({...formData, phone: e.target.value})}}
              required
            />
          </div>
    );
}

export default Phonenumber;