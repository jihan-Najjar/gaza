import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
const Header: React.FC = () => {
    const navigate = useNavigate()
    const handleLogOut = () => {
        navigate('/')
    }
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === 'logout') {
            handleLogOut()
        }
    }
    return (
        <div className='header d-flex'>
            <img src={require("../assets/images/Travel_Nest-removebg-preview (1).png")} alt='hotel shape and travel nest text' style={{ width: "90px", height: "60px" }} />
            {/* <img src={require("../assets/images/finalProjLogo.png")} alt='hotel shape and travel nest text' style={{width:"90px",height:"60px"}}/> */}
            <div className='userIcon-menu '>
                {/* <IoMdMenu /> */}
                <FaUser />
                <select onChange={handleSelectChange}>
                    <option className='user-option' value="home"> jihan najjar</option>
                    <option className='user-option' value="logout">LogOut</option>

                </select>
            </div></div>


    )
}

export default Header