import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span className="tab_item active_tab_item">{children}</span>
  }

  return (
    <span
      className="tab_item" 
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </span>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
