import React from 'react'
import { Input } from 'antd'
import PropTypes from 'prop-types'

const SearchBar = props => {
  const { onChange } = props
  return (
    <div>
      <Input
        size="large"
        placeholder="Search something"
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
}
