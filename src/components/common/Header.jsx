import React from 'react'
import { Link } from 'react-router-dom'
import InforComponent from './InforComponent'
import SearchInput from './input/SearchInput'

const Header = () => {
  return (
    <header>
      <div className="logo_wrap">
        <Link to="/">
          <h3>Sports-Matching-Service</h3>
        </Link>
      </div>
      <div className="search_infor">
        <div className="search_wrap">
          <SearchInput />
        </div>
        <div className="infor_wrap">
          <InforComponent />
        </div>
      </div>
    </header>
  )
}

export default Header
