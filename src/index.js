import React from 'react'
import ReactDOM from "react-dom";

// css
import 'bootstrap/dist/css/bootstrap.min.css'; //main menu styles
import './index.css'

import App from './components/App'
import {Route} from 'react-router-dom'

import { Provider } from 'react-redux'
import store, {history} from './store'
import { ConnectedRouter } from 'react-router-redux'

// https://github.com/brillout/awesome-react-components - awesome list of every React element under the sun
// https://devarchy.com/react

//also history.listenBefore( (location, done) => doSomething(location).then(done) )
/* history.listen(location => {
  console.log(document.getElementById('container'))
  // Clear cues
  // Handle audio
})
 */
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <Route path='/' component={App} />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'))
