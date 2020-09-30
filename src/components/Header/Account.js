import React, { useState } from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes , faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Account(props) {

    const [check, setCheck] = useState(false);
    const [tabID, setTabID] = useState(0);

    return(
        <div className={props.accountOpen === false ? 'Account displayNone' : 'Account'}>
            <div className="search-header flex">
                <div className="search-title">My Account</div>
                <div
                    className="search-close"
                    onClick={props.clickToClose}
                    >
                    <FontAwesomeIcon 
                        icon={faTimes}
                        className="icon"
                        />
                </div>
            </div >
            <div className={props.accountOpen === false ? '' : 'fadeIn'}>
                <div 
                    className='search-tab login-tab flex'>
                    <div 
                        className={tabID === 0 ? 'search-tab-cate search-tab-active' : 'search-tab-cate'}
                        onClick={() => setTabID(0)}
                        >
                        Login
                    </div>
                    <div 
                        className={tabID === 1 ? 'search-tab-cate search-tab-active' : 'search-tab-cate'}
                        onClick={() => setTabID(1)}
                        >
                        Register
                    </div>
                </div>
                { tabID === 0 &&
                    <div className="search-form login-form fadeToRight">
                        <form className="flex-col">
                            <input placeholder="Username"/>
                            <input placeholder="Password"/>
                            <div className="remember-login flex noselect" 
                                onClick={() => { 
                                    if (check) {
                                        setCheck(false)
                                    } else { 
                                        setCheck(true) 
                                    }
                                }}
                            >
                                <div className="check-box"></div>
                                {check && 
                                    <div className="check-box-active flex-center" onClick={()=> setCheck(false)}>
                                        <FontAwesomeIcon className="check-box-active" icon={faCheck}></FontAwesomeIcon>
                                    </div>
                                }
                                <p>Remember me</p>
                            </div>
                            <button>LOGIN</button>
                            <label>LOST YOUR PASSWORD?</label>
                        </form>
                    </div>
                }
                { tabID === 1 && 
                    <div className="search-form login-form fadeToLeft">
                        <form className="flex-col">
                            <input placeholder="Username"/>
                            <input placeholder="Password"/>
                            <button>REGISTER</button>
                        </form>
                    </div>
                }
            </div>
        </div>
    )
}
