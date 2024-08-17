import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import SearchBar from './SearchBar';

const Header: React.FC = () => {
    return (
        <div className='header-search'>
            <div className='header d-flex'>
                <img src={require("../assets/images/Travel_Nest-removebg-preview (1).png")} alt='hotel shape and travel nest text' style={{ width: "90px", height: "60px" }} />

                {/* <img src={require("../assets/images/finalProjLogo.png")} alt='hotel shape and travel nest text' style={{width:"90px",height:"60px"}}/> */}
                <div className='userIcon-menu '>
                    {/* <IoMdMenu /> */}
                    <FaUser />
                    jihan najjar
                </div></div>


            <SearchBar />
        </div>
    )
}

export default Header