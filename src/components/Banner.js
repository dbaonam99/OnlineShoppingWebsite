import React, { Component } from 'react';
import '../App.css';
import classNames from 'classnames';
import ScrollAnimation from 'react-animate-on-scroll';

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
        }, 5000);
    }

    render() {
        const { currentBanner } = this.state;
        return(
            <div className="Banner flex-center">
                <div className="banner-container">
                    <div className={classNames('banner-first flex-center', {
                        hide: currentBanner !== 1
                    })}>
                        <ScrollAnimation animateIn='fadeInDown' animateOut='fadeOutUp'>
                            <div className="banner-title">
                                New Arrivals
                            </div>
                        </ScrollAnimation>
                        <div className="flex-center">
                            <ScrollAnimation animateIn='fadeInLeft' animateOut='fadeOutRight'>
                                <div className="banner-link">
                                    Woman collection
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn='fadeInRight' animateOut='fadeOutLeft'>
                                <div className="banner-link">
                                    Man collection
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className={classNames('banner-second flex-center', {
                        hide: currentBanner !== 2
                    })}>
                        <ScrollAnimation animateIn='fadeInDown' animateOut='fadeOutUp'>
                            <div className="banner-title">
                                White Collection
                            </div>
                        </ScrollAnimation>
                        <div className="">
                            <ScrollAnimation animateIn='fadeInLeft' animateOut='fadeOutRight'>
                                <div className="banner-link banner-link-second">
                                    Shop now
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className={classNames('banner-third flex-center', {
                        hide: currentBanner !== 3
                    })}>
                        <ScrollAnimation animateIn='fadeInDown' animateOut='fadeOutUp'>
                            <div className="banner-title">
                                Linen Collection
                            </div>
                        </ScrollAnimation>
                        <div className="flex-center">
                            <ScrollAnimation animateIn='fadeInLeft' animateOut='fadeOutRight'>
                                <div className="banner-link">
                                    Shop now
                                </div>
                            </ScrollAnimation>
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