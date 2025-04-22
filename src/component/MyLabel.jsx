import React from 'react'

function MyLabel({ htmlFor = '', children }) {
  return (
    <label 
        htmlFor={htmlFor} 
        className="block text-sm/6 font-medium text-gray-900"
    >
        {children}
    </label>
  )
}

export default MyLabel