import React from 'react'


const Home = () => {
  return (
    <>
      <div className='max-h-screen'>


        <div className='bg-gradient-to-b from-slate-500 to-black'>
          <h1 className='font-bold rounded-full text-2xl  m-4 text-center  text-white px-4 z-10'><span className='text-white font-extrabold uppercase font-serif'>all about me !!!</span></h1>
        </div>


        <div className='flex flex-col gap-4   rounded-2xl bg-gradient-to-r from-slate-500 to-black sm:flex sm:flex-row'>
          <img className='mx-4 object-cover rounded-full h-52 w-52' src='ck.jpg' alt='chandan' />


          <div className='bg-gradient-to-t from-slate-500 to-black rounded-xl bg-black text-white sm:rounded-2xl sm:bg-gray-100 p-1'>
           MY NAME IS <span className='font-extrabold font-serif text-red-700'>CHANDAN KUMAR</span>
           <br/>
           I AM <span className='font-extrabold font-serif text-red-700'>FRONTEND</span> DEVELOPER
           <br/>
           I AM ALSO WORKING ON MY <span className='font-extrabold font-serif text-red-700'>BACKEND</span> DEVLOPMENT SKILLS
          </div>

        </div>
      </div>









    </>
  )
}

export default Home
