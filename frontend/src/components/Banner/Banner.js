import React, { Component } from 'react';
import '../../App.css';
import '../../Styles/Animation.css';
import classNames from 'classnames';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBanner: 1
        };
    }

    getNextBanner(banner) {
        switch (banner) {
            case 1:
                return 2;
            case 2:
                return 3;
            case 3:
                return 1; 
            default:
                return;
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                currentBanner: this.getNextBanner(this.state.currentBanner)
            })
        }, 2000);
    }

    render() {
        const { currentBanner } = this.state;
        return(
            <div className="Banner flex-center">
                <div className="banner-container">
                    <div className={classNames('banner-first flex-center', {
                        hide: currentBanner !== 1
                    })}>
                        <div>
                            <div className={currentBanner === 1 ? "banner-title fadeInDown" :"banner-title"}>
                                New Arrivals
                            </div>
                        </div>
                        <div className="flex-center">
                            <div>
                                <div className={currentBanner === 1 ? "banner-link fadeInLeft" :"banner-link"}>
                                    Woman collection
                                </div>
                            </div>
                            <div>
                            <div className={currentBanner === 1 ? "banner-link fadeInRight" :"banner-link"}>
                                    Man collection
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classNames('banner-second flex-center', {
                        hide: currentBanner !== 2
                    })}>
                        <div>
                            <div className={currentBanner === 2 ? "banner-title fadeInDown" :"banner-title"}>
                                White Collection
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className={currentBanner === 2 ? "banner-link fadeInUp" :"banner-link"} style={{marginLeft: '190px'}}>
                                    Shop now
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classNames('banner-third flex-center', {
                        hide: currentBanner !== 3
                    })}>
                        <div>
                            <div className={currentBanner === 3 ? "banner-title fadeInDown" :"banner-title"}>
                                Linen Collection
                            </div>
                        </div>
                        <div className="flex-center">
                            <div>
                                <div className={currentBanner === 3 ? "banner-link fadeInUp" :"banner-link"}>
                                    Shop now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="choose-slide flex-center">
                    <div 
                        className={classNames('choose-line', {
                            choose_line_active: currentBanner === 1
                        })}
                        onClick={()=> {this.setState({ currentBanner: 1 })}}
                    ></div>
                    <div 
                        className={classNames('choose-line', {
                            choose_line_active: currentBanner === 2
                        })}
                        onClick={()=> {this.setState({ currentBanner: 2 })}}
                    ></div>
                    <div 
                        className={classNames('choose-line', {
                            choose_line_active: currentBanner === 3
                        })}
                        onClick={()=> {this.setState({ currentBanner: 3 })}}
                    ></div>
                </div>
            </div>
        )
    }
}
export default Banner;