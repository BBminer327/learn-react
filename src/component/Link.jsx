import React from 'react'

function Link({href = '#', children, className='font-semibold text-indigo-600 hover:text-indigo-500'}) {
  return (
    <a href={href} className={className}>
        {children}
    </a>
  )
}

export default Link