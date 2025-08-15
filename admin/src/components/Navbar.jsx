import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import {useNavigate} from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext';

const Navbar = () => {
  const { aToken ,setAToken } = useContext(AdminContext);
  const {dToken,setDToken} = useContext(DoctorContext)
  const navigate = useNavigate()
  const logout = () => {
    navigate('/')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
  }

  return (
    <div className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-primary to-third text-white shadow-md">
      <div className="flex items-center gap-3">
        <img src={assets.logo} alt="Logo" className="h-10 rounded-full w-auto" />
        <p className="font-semibold border px-2.5 py-0.5 rounded-full text-lg">{aToken ? 'Admin' : 'Doctor'}</p>
      </div>
      <button onClick={logout} className="bg-secondary text-black font-semibold px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
