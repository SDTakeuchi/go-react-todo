import React from 'react'
import FilterLink from '../containers/filterlink.jsx'

const Footer = () => (
  <p>
    表示:
    {" "}
    <FilterLink filter="SHOW_ALL">
      全て
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      未完了
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      完了
    </FilterLink>
  </p>
)

export default Footer
