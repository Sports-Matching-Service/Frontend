import React from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchInput = () => {
  return (
    <div className="input_wrap">
      <input type="text" placeholder="종목, 시간, 장소로 검색" />
      <BiSearch />
    </div>
  )
}

export default SearchInput
