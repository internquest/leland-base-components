import React from 'react'
import Hero from './Hero/Hero'

const Main = () => {
  return (
    <main className='min-h-screen'>
        <div className='flex flex-col items-center overflow-hidden pt-16 sm:pt-40'>
          <Hero/>
        </div>
    </main>
  )
}

export default Main