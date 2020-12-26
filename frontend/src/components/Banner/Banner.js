import React, { useEffect, useState } from 'react';
import '../../App.css';
import '../../Styles/Animation.css';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import Div100vh from 'react-div-100vh';

function Banner (props) {
    const [currentBanner, setCurrentBanner] = useState(1);
    const collection = props.collection;

    useEffect(()=>{
        const slide = setInterval(() => {
            setCurrentBanner(currentBanner + 1)
        }, 5000);
        return() => {
            clearInterval(slide)
        }
    }, [currentBanner])

    if (currentBanner > 3) {
        setCurrentBanner(1)
    }

    const redirect = (event) => {
        window.scrollTo(0,0);
        props.history.push(`/collection/${event.target.id}`);
    }

    return(
        <div className="Banner flex-center">
            <Div100vh className="banner-container">
                <div className={classNames('banner-first flex-center', {
                    hide: currentBanner !== 1
                })}>
                    <div>
                        <div className={currentBanner === 1 ? "banner-title fadeInDown" :"banner-title"}>
                            New Arrivals
                        </div>
                    </div>
                    { collection.length > 0 &&
                        <div className="flex-center">
                            <div>
                                <div  
                                    id={collection[7]._id}
                                    onClick={redirect}
                                    className={currentBanner === 1 ? "banner-link fadeInLeft" :"banner-link"}>
                                    {collection[7].collectionName}
                                </div>
                            </div>
                            <div>
                            <div 
                                id={collection[0]._id}
                                onClick={redirect}
                                className={currentBanner === 1 ? "banner-link fadeInRight" :"banner-link"}>
                                    {collection[0].collectionName}
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className={classNames('banner-second flex-center', {
                    hide: currentBanner !== 2
                })}>
                    { collection.length > 0 &&
                        <div>
                            <div className={currentBanner === 2 ? "banner-title fadeInDown" :"banner-title"}>
                                {collection[1].collectionName}
                            </div>
                        </div>
                    }
                    { collection.length > 0 &&
                        <div>
                            <div>
                                <div 
                                    id={collection[1]._id}
                                    onClick={redirect}
                                    className={currentBanner === 2 ? "banner-link fadeInUp" :"banner-link"} style={{marginLeft: '190px'}}>
                                    Shop now
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className={classNames('banner-third flex-center', {
                    hide: currentBanner !== 3
                })}>
                    { collection.length > 0 &&
                        <div>
                            <div className={currentBanner === 3 ? "banner-title fadeInDown" :"banner-title"}>
                                {collection[3].collectionName}
                            </div>
                        </div>
                    }
                    { collection.length > 0 &&
                        <div className="flex-center">
                            <div>
                                <div 
                                    id={collection[3]._id}
                                    onClick={redirect}
                                    className={currentBanner === 3 ? "banner-link fadeInUp" :"banner-link"}>
                                    Shop now
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </Div100vh>
            <div className="choose-slide flex-center">
                <div 
                    className={classNames('choose-line', {
                        choose_line_active: currentBanner === 1
                    })}
                    onClick={()=> {setCurrentBanner(1)}}
                ></div>
                <div 
                    className={classNames('choose-line', {
                        choose_line_active: currentBanner === 2
                    })}
                    onClick={()=> {setCurrentBanner(2)}}
                ></div>
                <div 
                    className={classNames('choose-line', {
                        choose_line_active: currentBanner === 3
                    })}
                    onClick={()=> {setCurrentBanner(3)}}
                ></div>
            </div>
        </div>
    )
}
export default withRouter(Banner);