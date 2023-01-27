import React from 'react'
import HorizontalBar from '../chart/HorizontalBar'

const ByChannel = () => {
  return (
    <div className="flex items-start justify-between shadow-lg rounded-md  bg-white p-3">
      <div className="flex justify-end w-full">
        <HorizontalBar />
      </div>
    </div>
  )
}

export default ByChannel