import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Header from './header/Header'
import Stage from './stage/Stage'
import Footer from './footer/Footer'

class Main extends Component {
  constructor(props){
    super(props)

    /* let i = this.props.slideInfo.findIndex((slide) => slide.id === this.props.match.params.slideId)
    let slide = this.props.slideInfo[i] || [0] //load first slide (not working) */
  }
  
  render(){
    return (
      <div>
        <div>
          <Header {...this.props} />
        </div>
        <div>
          <Route 
          path={`${this.props.match.url}view/:slideId`} 
          render={({match}) =>
          <Stage slideBullets={this.props.slideBullets} slide={this.props.slide} match={match} {...this.props} />} 
          />
        </div>
        <div>
          <Footer {...this.props} />
          {/* Took off 'exact', which means everything shows */}
        </div>
        <div>
            <small>DEBUGGER <input type='text' placeholder='false' /> </small>
            <small>Module: <input type='text' placeholder='m1l1' /> </small>
            <small>Slide: <input type='text' placeholder={this.props.slideId} /> </small>
            <small>CuePoint: </small>
        </div>
      </div>
    )
  }
}

export default Main
