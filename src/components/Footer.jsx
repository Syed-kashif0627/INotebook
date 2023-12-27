import React from 'react'

export default function Footer() {
  const year=new Date().getFullYear();

  return (
    <div className='d-flex flex-column min-vh-100'>
        <footer className='mt-auto text-center'>
        <p>Copy right © { year }</p>
        </footer>
    </div>
  )
}
