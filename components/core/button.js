import Link from 'next/link'
import React from 'react'

const Button = ({
  buttonText,
  buttonLink,
  className,
}) => {
  return (
    <>
      <Link href={buttonLink} className={`bg-black/85 hover:bg-black/80 transition text-white px-10 md:px-12 xl:px-14 py-3 md:py-4 xl:py-5 rounded-xl shadow-inner hover:shadow-2xl ${className}`}>
        {buttonText}
      </Link>
    </>
  )
}

export default Button