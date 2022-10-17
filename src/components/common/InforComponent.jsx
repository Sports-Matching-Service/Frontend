import React from 'react'
import { BsPerson } from 'react-icons/bs'
import { useClickEvent } from '../../customHooks/useClickHooks'

const InforComponent = () => {

  const { open_modal } = useClickEvent();

  return (
    <div className="infor_circle" onClick={()=>{ open_modal() }}>
      <BsPerson />
    </div>
  )
}

export default InforComponent
