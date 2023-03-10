import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <header className='main-header'> 
    {/* // ! When we use this component it will render it in between what we pass */}
    {props.children}
    </header>
        
  )
}

export default Header