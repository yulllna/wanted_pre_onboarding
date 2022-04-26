import React, { useState } from 'react'; 

function Tab(props) { 
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index)
    }
    const title = ["감자", "고구마", "카레라이스"]
    return ( 
        <div className='container'> 
            <div className='tab-container'>
                <div
                className={`${toggleState === 1 ? "active-tab1" : "tabs"}`} 
                onClick={() => toggleTab(1)}>
                    <span>{title[0]}</span>
                </div>
                <div
                className={`${toggleState === 2 ? "active-tab2" : "tabs"}`}
                onClick={() => toggleTab(2)}>
                    <span>{title[1]}</span>
                </div>
                <div
                className={`${toggleState === 3 ? "active-tab3" : "tabs"}`}
                onClick={() => toggleTab(3)}>
                    <span>{title[2]}</span>
                </div>
                <div className='tab-bar'></div>
            </div>
        </div> 
    ); 
} 
export default Tab;
