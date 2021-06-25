import React from 'react'
import './menu-item.componetnt.scss'
import { withRouter } from 'react-router-dom'
// needs to clear what the withRouter, but looks like it can replace the history
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}


// the reason for withrouter is the history which was used for session history which mean browser historty and hash history and memory history
export default withRouter(MenuItem)
