import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div
    className="d-flex flex-column align-items-center justify-content-center mt-5 shadow"
    style={{ width: "100%" , height: "330px" }}
>

        <div className="footer d-flex justify-content-evenly w-100 ">
            <div style={{width:'330px'}} className="website">
                <h4 className='fw-bold text-lights'>
                    <i className= "fa-brands fa-docker" ></i> Project Fair
                    </h4>
                <h6>Designed and build with all the love in the world by the Luminar team with the help of our contributors</h6>
                <h6>Code licencensed luminar, does CC BY 3.0</h6>
                <p>Currently v5.3.2.</p>
            </div>
            <div className="links d-flex flex-column">
                <h4>Links</h4>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}}> Home</Link>
                <Link to={'/login'} style={{textDecoration:'none',color:'white'}}> Login</Link>
                <Link to={'/register'} style={{textDecoration:'none',color:'white'}}> Register</Link>
            </div>
            <div className="guides d-flex flex-column">
                <h4>Guides</h4>
                <a href="https://react.dev/" style={{textDecoration:'none',color:'white'}} target='_blank'>React</a>
                <a href="https://react.dev/" style={{textDecoration:'none',color:'white'}} target='_blank'>React Bootstrap</a>
                <a href="https://react.dev/" style={{textDecoration:'none',color:'white'}} target='_blank'>Routing</a>
            </div>
            <div className="contact d-flex flex-column">
                <h4>Contact Us</h4>
                <div className="d-flex">
                  <input placeholder='Enter your email Id' type="text" className="form-control" />
                  <button className='btn btn-warning ms-2'><i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="icons d-flex justify-content-between mt-3">
                <a href=""style={{textDecoration:'none' ,color:'white'}} target='_blank'> <i className="fa-solid 
                  fa-envelope"></i></a>
                  <a href=""style={{textDecoration:'none' ,color:'white'}} target='_blank'> <i className="fa-brands
                  fa-twitter"></i></a>
                  <a href=""style={{textDecoration:'none' ,color:'white'}} target='_blank'> <i className="fa-brands
                  fa-linkedin"></i></a>
                  <a href=""style={{textDecoration:'none' ,color:'white'}} target='_blank'> <i className="fa-brands 
                  fa-instagram"></i></a>
                  <a href=""style={{textDecoration:'none' ,color:'white'}} target='_blank'> <i className="fa-brands 
                  fa-github"></i></a>
                  <a href=""style={{textDecoration:'none' ,color:'white'}} target='_blank'> <i className="fa-brands 
                  fa-facebook"></i></a>
                </div>
            </div>
        </div>
        <p className='text-center mt-3'>Copyright © 2024 Project Fair.Build with React.</p>
   
   </div>
  )
}

export default Footer