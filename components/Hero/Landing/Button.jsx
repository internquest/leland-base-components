import React from 'react'

const Button = ({title}) => {
  return (
    <button
                type="button"
                className="sm:whitespace-nowrap leading-tight items-center justify-center border text-[#707070] bg-[#f5f5f5] border-[#f5f5f5] hover:bg-[#e5e5e5] hover:border-[#e5e5e5]  p-2 text-sm  space-x-1 inline-flex font-medium rounded-full cursor-pointer"
                aria-label="Medical School"
              >
                <span>{title}</span>
              </button>
  )
}

export default Button