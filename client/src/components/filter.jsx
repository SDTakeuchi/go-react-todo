import React from 'react'
import FilterLink from '../containers/filterlink.jsx'

const Filter = () => (
  <div className="tabs">
    <FilterLink filter="SHOW_ALL">
      全て
    </FilterLink>
    <FilterLink filter="SHOW_ACTIVE">
      未完了
    </FilterLink>
    <FilterLink filter="SHOW_COMPLETED">
      完了
    </FilterLink>
  </div>
)

export default Filter
