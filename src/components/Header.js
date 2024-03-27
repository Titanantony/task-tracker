import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({  title, onAdd, showAdd }) => {
  
  return (
    <header className='header'>
      <h1>
        { title }
      </h1>
      <Button color={showAdd ? 'red' :'green'} text={showAdd ? 'Close' : 'Add'} onChange={onAdd}/>
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