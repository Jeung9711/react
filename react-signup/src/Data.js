import Id from './Id';
import Password from './Password';
import Email from './Email';
import Phonenumber from './Phonenumber';
import Address from './Address';

function Data({ check, formData, setFormData }) {

    const sendData = ()=> {
        //자식의 변수 받기
    }

    return (
        <div>
            {check ?
            // 컴포넌트를 감싸기 위해 사용 <></>
                <>
                    <Id formData={formData} setFormData={setFormData}></Id>
                    <Password formData={formData} setFormData={setFormData}></Password>
                    <Email formData={formData} setFormData={setFormData}></Email>
                    <Phonenumber formData={formData} setFormData={setFormData}></Phonenumber>
                    <Address formData={formData} setFormData={setFormData}></Address>
                </>
                : null}
        </div>
    );
}

export default Data;