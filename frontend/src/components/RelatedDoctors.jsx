import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import TitleTextHome from './TitleTextHome'
import { useNavigate } from 'react-router-dom'
import IconButton from './IconButton'

const RelatedDoctors = ({docId,speciality}) => {

    const {doctors} = useContext(AppContext)

    const [relDoc, setRelDoc] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
     if (doctors.length > 0 && speciality ) {
        const doctorsData = doctors.filter((doc)=> doc.speciality === speciality && doc._id !== docId)
        setRelDoc(doctorsData)
     }
    },[doctors,speciality,docId])
  return (
    <div className="mt-8 flex flex-col items-center gap-4 my-16 text-gray-600 md:mx-10">
      <TitleTextHome size="sm">Related Doctors</TitleTextHome>
      <p className="sm:w-1/3 text-center text-lg">
        Simply browse through our extensive list of related doctors to this section.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            onClick={() => {navigate(`/appointments/${item._id}`); scrollTo(0,0)}}
            key={index}
            className="border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 "
          >
            <img className="bg-primary" src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-third">
                <p className="w-2 h-2 bg-secondary animate-pulse rounded-full">{}</p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-bold">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <IconButton
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        variant="primary"
      >
        More
      </IconButton>
    </div>
  )
}

export default RelatedDoctors