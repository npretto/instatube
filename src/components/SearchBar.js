import React from 'react'
import { Input } from 'antd'
import PropTypes from 'prop-types'
import { useDebouncedCallback } from 'use-lodash-debounce'

const SearchBar = props => {
  const { onChange } = props
  const debouncedOnChange = useDebouncedCallback(onChange, 300)

  return (
    <div>
      <Input
        size="large"
        placeholder="Search something"
        onChange={e => debouncedOnChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
}
