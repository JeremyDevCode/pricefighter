import React from 'react'

export const Camera = ({ className, size = 24 }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 8-6 4 6 4V8Z"></path>
      <rect x="2" y="6" width="14" height="12" rx="2" ry="2"></rect>
    </svg>
  )
}
