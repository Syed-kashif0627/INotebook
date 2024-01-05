import React from 'react'
import noteContext from '../context/notes/noteContext';
import { useContext } from 'react'

const About = () => {
  const s=useContext(noteContext)
  return (
    <>
        <div className='text-center my-4'>
          This is About {s.name} and in class {s.class}
        </div>
    </>
  )
}

export default About
