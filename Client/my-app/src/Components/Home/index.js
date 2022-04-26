import React from 'react';
import "./index.css"
import { AiFillHome } from 'react-icons/ai';
import {BsFileTextFill,BsFillBinocularsFill} from "react-icons/bs";
import {AiOutlineLogout} from 'react-icons/ai';
import {ImProfile} from 'react-icons/im';
import { useNavigate } from 'react-router-dom'
import About from '../About';
import Cases from '../Cases';
import Form from '../Form';
import Image from '../Image';
const Home=()=>{
    const text="<Let's Find out/>"
    let navigate = useNavigate()
    return(
        
         <div className='homeBgContainer' id="home">
             
            <div className='sideNavbar'>
                <div className="jj">
                    <h1 className='jk'>{text}</h1>
                 </div>
                <div className='navbarItem'>
                    <div className='inn'><AiFillHome className='iconss'/><h1 className='navHead'>Home</h1></div>
                </div>
                <div className='navbarItem'>
                <div className='inn'><BsFileTextFill className='iconss'/><h1 className='navHead'>Cases</h1></div>
                </div>
                <div className='navbarItem'>
                <div className='inn'><ImProfile className='iconss'/><h1 className='navHead'>About Us</h1></div>
                </div>
                <div className='navbarItem'>
                <div className='inn'><AiOutlineLogout className='iconss'/><h1 className='navHead' onClick={()=>{navigate("/login")}}>Log out</h1></div>
                </div>
            </div>
            <div className='main-container'>
            <div className='home-container'>
                
                <div className='quotes'>
                    <h1 className='quote'>Find Your People Portal</h1>
                </div>
                <div className='form-image'>
                    <div className='content'>
                        <h1>SEVAM ASMAKAM DHARMA</h1>
                        <p>-Service is our creed</p>
                        <p>      There so many people gone missing these days,
                             we are here to help you, your family just add a complient here, 
                             once we got any identity we will get in touch with you via email..
                        </p>
                        <button className='add-complient'>Add Complient</button>
                    </div>
                    <Image className='india-image'/>
                    
                </div>
            </div>
           <div className='cases-container'>
                  <Cases/>
            </div>
            <div className='abount-container'>
                   <About/>
            </div>
            </div>
             
            
           
        </div>
 
        
       
    )
}

export default Home;