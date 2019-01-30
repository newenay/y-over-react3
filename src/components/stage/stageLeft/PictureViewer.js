import React, {Component} from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import './PictureViewer.css'

/* getFileExtension(theFile){
  return theFile
} */

class PictureViewer extends Component {

  mediaType(_source, _state){
    _state = _source.split('.').pop()
    switch(_state){
      case 'jpg':
        return <img src={_source} alt={this.props.slide.title} />;
      case 'svg':
        return <img src={_source} alt={this.props.slide.title} />;
      case 'mp4':
        return <video /* width="320" height="240" */ controls>
                  <source src={_source} type="video/mp4" />
                  Your brower does not support the video tag.
               </video>;
      default:
        return null;
    }
  }

  render () {
    return (
      <div className='mediaContainer'>
        <h2>{this.props.slide.title}:&nbsp;{ this.props._cuePoint }</h2>
        <div className='grid-photo-wrap'>
          {this.mediaType(this.props.slide.display_src)}
          <CSSTransitionGroup
            transitionName='like'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={this.props.slide.audio} className='likes-heart'>{this.props.slide.audio}</span>
          </CSSTransitionGroup>
        </div>
        <div>
          <button className='likes' onClick={() => this.props.increment(this.props.index)}>Media cue (+): {this.props.slide.audio}</button>
          {/* 
          <Link className='button' to={`/view/${this.props.slide.id}`} >
            <span className='comment-count'>
              <span className='speech-bubble' />Total Cue Points:&nbsp;

              {
                // gets length and adds one, I want it to sit on 0 and increment
              }
              {this.props.m1l1_nar[this.props.slide.id] ? this.props.m1l1_nar[this.props.slide.id].length : 0}
              
            </span>
          </Link> 
          */}
        </div>
      </div> 
    )
  }
}

export default PictureViewer
