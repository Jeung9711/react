import { useState } from 'react';
import Checkbox from './Checkbox';
import Data from './Data';

function Formgroup({ formData, setFormData }) {
    const [check, setCheck] = useState(false);

    const change_check = (e) => {
        // setCheck(!show)보다 아래 형식이 더 좋은 코드
        // 만약 접근 가능할 경우 임의의 값 변경이 일어날 수 있음
        // 아래의 v는 원래의 값을 삽입
        setCheck((v) => !v);
    };

    return(
        <form>
            <Checkbox check={check} onChange={change_check}></Checkbox>
            <Data check={check} formData={formData} setFormData={setFormData}></Data>
        </form>
    );
}

export default Formgroup;