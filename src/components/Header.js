import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({  title}) => {
  const onChange = () => {
    console.log("Clicked")
  }
  return (
    <header className='header'>
      <h1>
        { title }
      </h1>
      <Button color='green' text='Add' onChange={onChange}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Tracking tasks',
}
Header.propTypes = {
  title: PropTypes.string,
}

export default Header