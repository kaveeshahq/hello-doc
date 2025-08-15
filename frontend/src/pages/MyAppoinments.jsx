import React, { useContext } from 'react'
import TitleTextHome from '../components/TitleTextHome'
import { AppContext } from '../context/AppContext'
import IconButton from '../components/IconButton'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaBan, FaCheck, FaCut } from 'react-icons/fa'

const MyAppoinments = () => {
  const {backendUrl,token , getDoctorsData} = useContext(AppContext)

  const [appointments, setAppointments] = useState([])
  const months = [ "" , "JAN", "FEB" , "MAR" , "APR" , "MAY" , "JUN" , "JUL" , "AUG" , "SEP" , "OCT" , "NOV" , "DEC" ]
  const slotDateFormat = (slotDate) => {
      const dateArray = slotDate.split('_')
      return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]

  }
  const getUsersAppointments = async () => {
    try {
      const {data} = await axios.get(backendUrl + "/api/user/appointments" , {headers: {token}} )
      if (data.success) {
        setAppointments(data.appointments.reverse())
        console.log(data.appointments);
        
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const cancelAppointment = async (appointmentId) => {
     try {
     const {data} = await axios.post(backendUrl + "/api/user/cancel-appointment" , {appointmentId} , {headers: {token}}  )
     if (data.success) {
      toast.success(data.message)
      getUsersAppointments()
      getDoctorsData()
     }else{
      toast.error(data.message)
     }      
     } catch (error) {
      console.log(error);
      toast.error(error.message)
     }
  }

  useEffect(()=>{
    if (token) {
      getUsersAppointments()
    }
  },[token])
  return (
    <div>
      <TitleTextHome>My Appointments</TitleTextHome>
      <div className='mt-6'>
        {appointments.map((item,index)=>(
          <div className='bg-white rounded-xl shadow-md mb-6 p-6 border border-primary' key={index}>
            <div className='grid grid-cols-[1fr_2fr] gap-4 mb-2 sm:flex sm:gap-6 py-2'>
              <div>
                <img className='w-32 ml-2 rounded-full bg-gradient-to-r from-primary to-third' src={item.docData.image} alt="" />
              </div>
              <div className='flex-1 text-sm text-zinc-600 space-y-3'>
                <div>
                  <p className='text-neutral-800 font-semibold text-lg mb-1'>{item.docData.name}</p>
                  <p className='text-primary font-medium'>{item.docData.speciality}</p>
                </div>
                
                <div className='bg-gray-50 rounded-lg p-3'>
                  <p className='text-zinc-700 font-medium mb-1'>Address:</p>
                  <p className='text-xs'>{item.docData.address.line1}</p>
                  <p className='text-xs'>{item.docData.address.line2}</p>
                </div>
                
                <div className='bg-primary/10 rounded-lg p-3'>
                  <p className='text-xs'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> {slotDateFormat(item.slotDate)} | {item.slotTime}</p>
                </div>
              </div>
              <div></div>
              <div className='flex flex-col gap-2 justify-end'>
                {!item.cancelled && !item.isCompleted && <IconButton>Pay Online</IconButton> }
                {!item.cancelled && !item.isCompleted &&  <IconButton onClick={()=>cancelAppointment(item._id)}>Cancel Appointment</IconButton>  }
                {item.cancelled &&  <IconButton icon={FaBan}>Appointment Cancelled</IconButton>}
                {item.isCompleted && <IconButton icon={FaCheck}>Appointment Completed</IconButton>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppoinments