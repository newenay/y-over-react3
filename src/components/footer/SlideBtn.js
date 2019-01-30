import React from 'react'
import {Link} from 'react-router-dom'

const SlideBtn = (props) => {
  return (  
    <figure >
        <div className='control-buttons'>
            <Link className="button" to={ `/view/${props.slide.id}` }>
                <p> { props.slide.id.slice(5,7) } </p>
            </Link>
        </div>             
    </figure>
  )
}

export default SlideBtn