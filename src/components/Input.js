import React, { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function Input(props) { 
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');
    const [passwordType, setPasswordType] = useState({
        type: 'password',
        visible: false
    });
    const [EyeIcon, setEyeIcon] = useState(false);

    const handlePasswordType = e => {
        setPasswordType(() => {
            if (!passwordType.visible) {
                return { type: 'text', visible: true };
            }
            return { type: 'password', visible: false };
        })
        setEyeIcon((prev) => !prev);
    }
    const validateEmail = (event) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const email = event.target.value;
        if (emailRegex.test(email)) {
            setIsValid(true);
        } else if(email === ''){
            setIsValid(false);
            setMessage('');
        } else {
            setIsValid(false);
            setMessage('Invaild e-mail address.');
        }
    };
    return ( 
        <div className='container'> 
            <form className='input-box'>
                <div className='email-container'>
                    <label htmlFor='email'>
                        E-mail
                    </label>
                    <input
                    id='email'
                    type="email"
                    className="email-input"
                    placeholder='E-mail'
                    name='email'
                    onBlur={validateEmail}
                    ></input>
                    <FontAwesomeIcon 
                    icon={faCircleCheck}
                    className={`check-icon ${isValid ? 'success' : ''}`} />
                    <div 
                    className={`message ${isValid ? '' : 'error'}`}>
                        {message}
                    </div>
                </div>
                <div className='pw-container'>
                    <label htmlFor='password'>Password</label>
                    <input
                    id='password'
                    type={passwordType.type}
                    className='pw-input'
                    placeholder='Password'
                    name='password'
                    ></input>
                    <FontAwesomeIcon 
                    icon={faEyeSlash}
                    className={`eye-slash-icon ${!EyeIcon ? 'non-visible' : ''}`} 
                    onClick={handlePasswordType}/>
                    <FontAwesomeIcon 
                    icon={faEye} 
                    className={`eye-icon ${EyeIcon ? 'visible' : ''}`} 
                    onClick={handlePasswordType}/>
                </div>
            </form>
        </div> 
    ); 
} 
export default Input;
