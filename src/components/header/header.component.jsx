import React from 'react'
import './header.style.scss'
import { Link } from 'react-router-dom'
// react unique synax
import { ReactComponent as Logo } from '../../assests/crown.svg'
import { auth } from '../firebase/firebase.utils'
const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        Contact me
      </Link>
      {currentUser ? 
      (<div className='option' onClick ={() =>auth.signOut()}>
      Sign Out</div>)
       :
       (<Link className = 'option' to='/signin'>
       Sign IN
       </Link>) 
       }
    </div>
  </div>
)

export default Header
