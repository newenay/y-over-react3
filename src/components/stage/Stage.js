import React, {Component} from 'react'
import PropTypes from 'prop-types';
import PictureViewer from './stageLeft/PictureViewer'
import Bullets from './stageRight/Bullets'
import AudioPlayer from './utilities/AudioPlayer'
import './Stage.css'
//import $ from 'jquery'

class Stage extends Component {
  
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      cuePoints: [],
      stopCues: this.props.slideBullets[this.props.match.params.slideId].length || [0]
    };

    this.cuePointFwd = this.cuePointFwd.bind(this);
    this.resetSlideCues = this.resetSlideCues.bind(this);
  }

  /* Lifting State Up --> https://reactjs.org/docs/lifting-state-up.html */
  cuePointFwd = (e) => {
    if(e) e.preventDefault();

    var counter = this.state.cuePoints.length; //0, 1, 2
    
    if(counter < this.state.stopCues){
      this.setState(prevState => ({
        cuePoints: [...prevState.cuePoints, counter]
      //cuePoints: [{"name": "object"}, ...prevState.cuePoints]
      }));
      /* console.log('setState: cuePoints.length', this.state.cuePoints.length, 'stopCues:', this.state.stopCues) */
    }else{
      console.log('else (You Shall Not Pass!):', this.state.cuePoints.length, 'stopCues:', this.state.stopCues)
    }
  }
  
  //call from slideSwitch
  resetSlideCues = (e) => { 
    if(e) e.preventDefault();
    console.log('resetSlideCues called')
    this.setState({
      cuePoints: [],
      stopCues: this.props.slideBullets[this.props.match.params.slideId].length || []
    })
  }

  render () {
    let i = this.props.slideInfo.findIndex((slide) => slide.id === this.props.match.params.slideId)
    let slide = this.props.slideInfo[i] || [0] //load first slide (not working)
    let allBullets = this.props.slideBullets[this.props.match.params.slideId] || []

    // Only pass the slide bullets up to the state's cuePoints
    let _cuePoint = parseFloat(this.state.cuePoints.length)
    let _slideBullets = allBullets.slice(0, _cuePoint)
    let audioSrc = '../../../audio/'+ slide.id + '.mp3' || null //.ogg
    
    return (
      <div id="container">
        <h6>Unclassified</h6>
        <div className="d-flex justify-content-between">
            {
              // *** PhotoGrid = Stage ***
              // 'this.props.key' is not accessible from inside the Photo, so create a duplicate index
              
              /* {this.props.posts.map((post, idx) => {
                 return <Photo {...this.props} key={idx} index={idx} post={post} />
               })} */
            }
            <PictureViewer index={i} _cuePoint={_cuePoint} slide={slide} {...this.props} />
            <Bullets _cuePoint={_cuePoint} _slideBullets={_slideBullets} slide={slide} {...this.props} />
            {
              console.log('Slide', i,',', slide.id, '--> _cuePoint:', _cuePoint)
            }
        </div>

        {/************* NARRATION ************
        <div style={{background: 'grey'}}>
          <p>{slide.narration}</p>
          <p >{slide.optionalTxt}</p>
        </div>*/}
        
        {/************* STAGE CONTROLS *************/}
        <div className='d-flex justify-content-between'>
          <div className='left'>
            <button onClick={(e) => this.resetSlideCues(e)}>Reset cue(s)</button>
            <button onClick={(e) => this.cuePointFwd(e)}>(+)</button>
            &nbsp;{_cuePoint + " of " + allBullets.length /* + ':' + this.state.stopCues */}
          </div>
          <div className='right'>
            {this.checkAudioSource(slide.audio, audioSrc, _cuePoint, allBullets)}
          </div>
        </div>

        <h6>Unclassified</h6>
      </div>
    )
  }
  //Sloppy, but I have to pass all of the let(s) into the function...fix later
  checkAudioSource( _audioBooly, _audioSrc, __cuePoint, _allBullets){
    var _state = _audioBooly

    switch(_state){
      case true:
        return <AudioPlayer ref="AudioPlayerRef"
          source={_audioSrc}
          isPlaying={true}
          defaultTime={0}
          onProgress={() => this.handleProgress}
          onTimeUpdate={() => this.handleTimeUpdate}
          onEnd={() => this.handleMediaEnd}
          //ND Tweaks
          cuePointFwd={(e) => this.cuePointFwd(e)}
          resetSlideCues={(e) => this.resetSlideCues(e)}
          _cuePoint={__cuePoint}
          allBullets={_allBullets} //fix later, just grabbing sec(s)
          //Grab Markers: https://stackoverflow.com/questions/47651809/getting-audio-markers-cue-points-with-the-web-audio-api
          stopCues={this.state.stopCues}
          {...this.props}
        />;
      case false:
        return <AudioPlayer 
          source={'../../../audio/AudioPlaceholder.mp3'}
          isPlaying={false}
          defaultTime={0}
          onProgress={() => this.handleProgress}
          onTimeUpdate={() => this.handleTimeUpdate}
          onEnd={() => this.handleMediaEnd}
          //ND Tweaks
          cuePointFwd={(e) => this.cuePointFwd(e)}
          resetSlideCues={(e) => this.resetSlideCues(e)}
          _cuePoint={__cuePoint}
          allBullets={_allBullets} //fix later, just grabbing sec(s)
          stopCues={this.state.stopCues}
          {...this.props}
        />;
      default:
        return null;
    }
  }
}

Stage.propTypes= {
  //State
  cuePoints: PropTypes.array,
  stopCues: PropTypes.number,
  //Functions
  cuePointFwd: PropTypes.func,
  resetSlideCues: PropTypes.func,
  // Render Let(s)
  i: PropTypes.number,
  slide: PropTypes.string,
  allBullets: PropTypes.array,
  _cuePoint: PropTypes.number,
  _slideBullets: PropTypes.object,
  audioSrc: PropTypes.string
}

export default Stage 