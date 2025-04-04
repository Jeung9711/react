function Checkbox({ check, onChange }) {
    return (
        <div className="form-group">
          <input
            type="checkbox"
            id="agree"
            check = {true}
            onChange = {onChange}
          />
          <label className='agree' htmlFor="agree">이용약관에 모두 동의합니다</label>
        </div>
    );
}

export default Checkbox;