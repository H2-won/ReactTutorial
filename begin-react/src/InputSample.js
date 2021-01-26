import React, {useState, useRef} from 'react'

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });

    const nameInput = useRef();
    const {name, nickname} = inputs;

    const onChange = (e)=>{
        // e.target을 중복으로 사용하기 떄문에 미리 추출해준다.
        const {name, value} = e.target;

        setInputs({
            // 스프레드 문법을 사용하여 inputs 객체를 불러온 뒤, inputs[name] 자리의 값을 value로 바꿔줌
            ...inputs,
            [name]: value,
        })
    };
    const onReset = ()=>{
        setInputs({
            name: '',
            nickname: '',
        })
        nameInput.current.focus();
    };
    return (
        <div>
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange}
                value={name} 
                ref={nameInput}
            />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name}({nickname})
            </div>
        </div>
    )    
}

export default InputSample;