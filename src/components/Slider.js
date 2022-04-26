import React, { useState } from 'react'; 

function Slider(props) { 
    const [val, setVal] = useState(1);
    const clickBtn = (number) => {
        setVal(number)
    }
    const onChange = (e) => {
        // console.log(e.target)	
        // console.log(e.target.value)
        setVal(e.target.value)
    }
    return ( 
        <div className='container'> 
            <div className='slider-container'>
                <div className="value-box">
                    <span>{val}</span>
                    <span>%</span>
                </div>
                <div className="slide-box">
                    <div>
                        <datalist id="number">
                            <option value="1">1</option>
                            <option value="2">25</option>
                            <option value="3">50</option>
                            <option value="4">75</option>
                            <option value="5">100</option>
                        </datalist>
                        <input 
                        className="slide" 
                        type="range" 
                        value={val} 
                        min="1" 
                        max="100" 
                        step="1" 
                        onChange={onChange}/>
                    </div>
                    <div className="slide-btn">
                        <button onClick={() => clickBtn(1)}><span>1%</span></button>
                        <button onClick={() => clickBtn(25)}><span>25%</span></button>
                        <button onClick={() => clickBtn(50)}><span>50%</span></button>
                        <button onClick={() => clickBtn(75)}><span>75%</span></button>
                        <button onClick={() => clickBtn(100)}><span>100%</span></button>
                    </div>
                </div>
            </div>
        </div> 
    );
}
export default Slider;
