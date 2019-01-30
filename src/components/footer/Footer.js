import React, {Component} from "react";
import SlideNav from "./SlideNav";
import SlideMenu from './SlideMenu';
import './Footer.css';

class Footer extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            _currentSlide: this.props.currentSlide || 0
        };
    }
    render(){
        //let _currentSlide = 0
        return(
            <div id="lessonMenu" className="d-flex justify-content-between align-self-baseline">
                <div className="p-2 leftHeader">
                    <SlideMenu {...this.props} />
                </div>
                <div className="p-2 middleHeader">
                        
                </div>
                <div className="p-2 rightHeader">
                    {/* SlideActions is an action container that is connected to SlideControls component */}
                    <SlideNav _currentSlide={this.state._currentSlide} {...this.props} />
                </div>
            </div>
        );
    }
}

export default Footer;