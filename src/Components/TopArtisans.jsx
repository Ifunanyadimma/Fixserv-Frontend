import React from 'react'

const TopArtisans = () => {

  return (
    <section> 
    <div className='w-full flex flex-col font-bold justify-center mt-10'>
          <h1 className='text-[#110000C2] font-poppins '>Top Artisans</h1>
      </div>
      
      <div className='bg-[#ECF1FC] w-full flex flex-col md:flex-row justify-center items-center gap-10 mt-10'>
        <div className='bg-[#A1B7F2] rounded-xl h-[300px] w-[300px] flex flex-col justify-center'>
            <img src='' alt='' className='' />
        <h2 className='text-[#ECF1FC] '>Artisan 1</h2>
        </div>
        <div className='bg-[#A1B7F2] rounded-xl h-[300px] w-[300px] flex flex-col justify-center'>
            <img src='' alt='' className='' />
        <h2 className='text-[#ECF1FC] '>Artisan 2</h2>
        </div>
        <div className='bg-[#A1B7F2] rounded-xl h-[300px] w-[300px] flex flex-col justify-center'>
            <img src='' alt='' className='' />
        <h2 className='text-[#ECF1FC] '>Artisan 3</h2>
        </div>

      </div>

      </section>
  )
}

export default TopArtisans
