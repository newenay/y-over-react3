import React, { PureComponent } from 'react'
import SlideBtn from './SlideBtn'

class SlideMenu extends PureComponent {
  /* 
  // bookmarking -- > medium.com/front-end-hacking/code-splitting-redux-reducers-4073db30c72e
  shouldComponentUpdate(nextProps, nextState){
    if(this.props.slide === nextProps.slide){
      return false;
    } else {
      return true;
    }
  } */
  render () {
    return (
      <div className='control-buttons'>
        {this.props.slideInfo.map((slide, idx) => {
          return <SlideBtn {...this.props} key={idx} index={idx} slide={slide} />
        })}
      </div>
    )
  }
}

export default SlideMenu

