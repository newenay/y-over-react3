import React from 'react'
import {Route} from 'react-router-dom'
import Header from './header/Header'
import Stage from './stage/Stage'
import Footer from './footer/Footer'

//why do some props flow through with const that don't with class??
const Main = (props) => {
  return (
    <div>
      <div>
        <Header {...props} />
      </div>
      <div>
        <Route 
        path={`${props.match.url}view/:slideId`} 
        render={({match}) => 
        <Stage ref="stage" {...props} match={match} />} 
        />
      </div>
      <div>
        <Footer {...props} />
        {/* Took off 'exact', which means everything shows */}
      </div>
      <div>
          <small>DEBUGGER <input type='text' placeholder='false' /> </small>
          <small>Module: <input type='text' placeholder='m1l1' /> </small>
          <small>Slide: <input type='text' placeholder={props.slideId} /> </small>
          <small>CuePoint: </small>
      </div>
    </div>
  )
}

export default Main
