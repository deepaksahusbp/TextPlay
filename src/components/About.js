import React from 'react'
import pic from './deepak.jpg';

export default function About() {
  return (
    <>
    <center><h2 className='my-2 container'>Developed by : Deepak Kumar Sahu</h2></center>
    <br></br>
    <img src={pic} class="rounded mx-auto d-block"></img>
    <h2 className='my-2 container'>About Us</h2>
    <div className='container'>
        <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                About The Site
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>This is very useful site which can be used to convert upper case to lower case, lower case to upper case, remove extra spaces, listen the written text, dictate and convert speech to text, copy text etc.</strong> 
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                About Me
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>I am a Civil Engineering graduate from Veer Surendra Sai University of Technology Burla, currently pursuing Masters degree in Construction Technology and Management in NIT Trichy having keen interest in coding and development <br></br> <br></br>Phone : 8018228035 <br></br>Email : deepaksahusbp@gmail.com <br></br>LinkedIn : deepaksahusbp</strong> 
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Address
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>Mail us to : <br></br><br></br>Pankapara, Khetrajpur<br></br>Sambalpur, Odisha - 768002</strong> 
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
