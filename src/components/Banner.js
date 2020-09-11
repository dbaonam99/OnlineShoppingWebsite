import React, { Component } from 'react';
import '../App.css';
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
                    <div className={classNames('banner-first', {
                        hide: currentBanner !== 1
                    })}></div>
                    <div className={classNames('banner-second', {
                        hide: currentBanner !== 2
                    })}></div>
                    <div className={classNames('banner-third', {
                        hide: currentBanner !== 3
                    })}></div>
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