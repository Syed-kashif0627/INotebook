import React from 'react'

export default function Footer() {
  const year=new Date().getFullYear();

  return (
    <div>
        <footer className='text-center fixed-bottom'>
        <p>Copy right © { year }</p>
        </footer>
    </div>
  )
}
