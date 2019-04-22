import React, { Component } from 'react';
import IconFont from '../../components/IconFont'

class Remove extends Component {

  render () {
    return (
      <div className='remove-page'>
        <h1>
          <IconFont name={'404'} className=''/>
          Oops! This website has been moved to <a href="http://movie-in-one.info" >http://movie-in-one.info</a>
        </h1>
        <div>
          <a className="button" href="http://movie-in-one.info" >Go to new Movie in One</a>
        </div>
      </div>
    )
  }
}

export default Remove