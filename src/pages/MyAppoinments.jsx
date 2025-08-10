import React, { useContext } from 'react'
import TitleTextHome from '../components/TitleTextHome'
import { AppContext } from '../context/AppContext'
import IconButton from '../components/IconButton'

const MyAppoinments = () => {
  const {doctors} = useContext(AppContext)
  
  return (
    <div>
      <TitleTextHome>My Appointments</TitleTextHome>
      <div className='mt-6'>
        {doctors.slice(0,2).map((item,index)=>(
          <div className='bg-white rounded-xl shadow-md mb-6 p-6 border border-primary' key={index}>
            <div className='grid grid-cols-[1fr_2fr] gap-4 mb-2 sm:flex sm:gap-6 py-2'>
              <div>
                <img className='w-32 ml-2 rounded-full bg-gradient-to-r from-primary to-third' src={item.image} alt="" />
              </div>
              <div className='flex-1 text-sm text-zinc-600 space-y-3'>
                <div>
                  <p className='text-neutral-800 font-semibold text-lg mb-1'>{item.name}</p>
                  <p className='text-primary font-medium'>{item.speciality}</p>
                </div>
                
                <div className='bg-gray-50 rounded-lg p-3'>
                  <p className='text-zinc-700 font-medium mb-1'>Address:</p>
                  <p className='text-xs'>{item.address.line1}</p>
                  <p className='text-xs'>{item.address.line2}</p>
                </div>
                
                <div className='bg-primary/10 rounded-lg p-3'>
                  <p className='text-xs'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> 21st July 2025 | 9.00 PM</p>
                </div>
              </div>
              <div></div>
              <div className='flex flex-col gap-2 justify-end'>
                <IconButton>Pay Online</IconButton>
                <IconButton>Cancel Appointment</IconButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppoinments