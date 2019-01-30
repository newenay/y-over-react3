import React, {Component} from 'react'
import "./Bullets.css";

class Bullets extends Component {
  
  renderBullets = (bullet, _cuePoint) => {
    return (
      /* What we're really talking about is adding/removing the <div key=> */
      <div key={_cuePoint} id='row' className="bulletContainer">
        
        <div className="spriteContainer" />
        <div className="animateBullet" id='right' >
          <p>
            <font className="audioTimer"><small>{bullet.user}&nbsp;</small></font>
            {bullet.text}
            {
              /* console.log('Bullet: _cuePoint', _cuePoint, 'Bullet(s):', this.props.m1l1_nar[this.props.slide.id].length ) */
            }
            <button className='remove-comment' onClick={() => this.removeBullet(_cuePoint)}>&times;</button>
          </p>
        </div>
      </div>
    )
  }

  /* handleSubmit = (e) => {
    e.preventDefault()
    let author = this.refs.author.value //user
    let bullet = this.refs.bullet.value //text
    let slideId = this.props.match.params.slideId

    console.log('props', this.props);
    this.props.addBullet(slideId, author, bullet)
    this.refs.bulletForm.reset()
  }

  removeBullet = (index) => {
    let slideId = this.props.match.params.slideId
    this.props.removeBullet(slideId, index)
  } */

  render () {

    return (
      <div  className="stage-right" /* Hover appear buttons */ > 
        <h2 className="animateTitle">Lorem Ipsum:&nbsp;{ this.props._cuePoint }</h2>
        {
          this.props._slideBullets.map(this.renderBullets)
          /* this.renderBullets(this.props.slideBullets[this.props._cuePoint], this.props._cuePoint) */
        }
        {/* <form ref='bulletForm' className='comment-form' onSubmit={this.handleSubmit}>
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='bullet' placeholder='bullet' />
          <input type='submit' hidden />
        </form>
        <button onClick={(slideId, author, bullet) => this.handleSubmit(slideId, author, bullet)}>handleSubmit</button>
        <br />
        <button onClick={() => this.props.slideBullets.map(this.renderBullets)}>renderBullets</button> */}
      </div>
    )
  }
}

export default Bullets
