import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class AudioPlayer extends Component {
  constructor(props){
    super(props)

    this.state = {
      listen: true
    }
  }

  componentDidMount() {
    var node = ReactDOM.findDOMNode(this);

    node.addEventListener('progress', this.handleProgress.bind(this));
    node.addEventListener('timeupdate', this.handleTimeUpdate.bind(this));
    node.addEventListener('ended', this.handleMediaEnd.bind(this));

    this.updateIsPlaying();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.source !== this.props.source) {
      this.updateSource();
    }

    if (prevProps.isPlaying !== this.props.isPlaying) {
      this.updateIsPlaying();
    }

    if (prevProps.defaultTime !== this.props.defaultTime) {
      this.updateCurrentTime();
    }
  }

  componentWillUnmount() {
    var node = ReactDOM.findDOMNode(this);

    if(node){
      node.removeEventListener('progress', this.handleProgress.bind(this));
      node.removeEventListener('timeupdate', this.handleTimeUpdate.bind(this));
      node.removeEventListener('ended', this.handleMediaEnd.bind(this));
    }
    console.log('unmounted', node)
  }

  render() {
    return (
      <audio preload='none' controls>
        <source src={this.props.source} type='audio/mpeg' />
      </audio>
    );
  }

  handleTimeUpdate() {
    var node = ReactDOM.findDOMNode(this),
        currentTime = node.currentTime,
        trackDuration = node.duration;

    this.props.onTimeUpdate({
      currentTime: currentTime,
      trackDuration: trackDuration
    });

    if(this.state.listen) this.handleCuePoint(node.currentTime);
  }

  handleMediaEnd() {
    ReactDOM.findDOMNode(this).currentTime = 0;
    this.props.onEnd();
  }

  handleProgress() {
    var node = ReactDOM.findDOMNode(this),
        trackDuration = node.duration,
        buffered = node.buffered;

    this.props.onProgress({
      trackDuration: trackDuration,
      buffered: buffered
    });
  }

  updateCurrentTime() {
    var node = ReactDOM.findDOMNode(this);
    if (node.readyState) {
      node.currentTime = this.props.defaultTime;
    }
  }

  updateIsPlaying() {
    var node = ReactDOM.findDOMNode(this),
        isPlaying = this.props.isPlaying;

    if (isPlaying) {
      node.play();
      
    } else {
      node.pause();
    }
  }

  updateSource() {
    var node = ReactDOM.findDOMNode(this),
        isPlaying = this.props.isPlaying;

    node.pause();
    this.props.onTimeUpdate({
      currentTime: 0,
      trackDuration: node.duration
    });

    node.load(); //LOADER
      if (isPlaying) {
      node.play();
    }

    //Secret sauce right here, may do with slideChange event later
    this.props.resetSlideCues()
    this.setState({
      listen: true
    });
    console.log('sets listen to true')
  }

/*********************ND Stuff***********************/

  handleCuePoint(_currentTime) {
    /* console.log('_cuePoint', this.props._cuePoint , this.props.stopCues , this.state.listen) */
    if(this.props._cuePoint < this.props.stopCues && this.state.listen){
      var cue = this.props.allBullets[this.props._cuePoint].user //this.state.timeArr[this.props._cuePoint].user

      var min = cue - .05 //.95
      var max = cue + .05 // 1.05

      if(_currentTime >= min && _currentTime <= max){
        //setInterval(Function, 2000)
        //console.log('cue Time:', cue, _currentTime, 'second(s)')
        /* console.log(_currentTime, this.props._cuePoint, this.props.stopCues); */
        this.props.cuePointFwd()
      }
    }else{
      console.log('cue Time: No longer listening!')
      this.setState({
        listen: false
      });
    }
  }

  /* testRange(_x, _min, _max) {
    return ((_x - _min) * (_x + _max) <= 0); //returns true if within range
  } */
}

AudioPlayer.propTypes= {
  source: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  defaultTime: PropTypes.number,
  onProgress: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  onEnd: PropTypes.func.isRequired
}

export default AudioPlayer