import React, { useState } from 'react'; 
import './style.css';

function Toggle(props) { 
    const [toggle, setToggle] = useState(false);
    const onClickbtn = () => {
        setToggle((prev) => !prev);
    }
    return ( 
        <div className='container'> 
            <div className='toggle-container'> 
                <div 
                className={`button ${toggle ? 'toggle-btn' : ''}`} 
                onClick={ onClickbtn }>
                    <span>기본</span>
                </div>
                <div
                className={`button2 ${!toggle ? 'toggle-btnOff' : ''}`} 
                onClick={ onClickbtn }
                >
                    <span>상세</span>
                </div>
            </div> 
        </div> 
    ); 
} 
export default Toggle;
