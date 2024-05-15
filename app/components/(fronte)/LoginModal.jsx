"use client";

import { Button, Checkbox, Label, Modal} from "flowbite-react";
import { X } from "lucide-react";
import { useState } from "react";

import LoginForm from "./regForms/LoginForm";

export function LoginModal() {
  const [openModal, setOpenModal] = useState(false);
 

  return (
    <>
      <span onClick={() => setOpenModal(true)}>Log in</span>
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
        {/* Video Background Container */}
        
            {/* Replace with the path to your video file */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-50 object-cover">
        <video
            muted
            loop
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          >
     
            <source src="/video/loginbg.mp4" type="video/mp4" />
            {/* if browser version is low */}
            Your browser does not support background video.
          </video>
        
</div>

       
        <Modal.Body className="relative"> 
        <div className="flex justify-end " ><button onClick={() => setOpenModal(false)} className=" mt-1"><X/></button></div>
         <LoginForm setOpenModal={setOpenModal}/>
        </Modal.Body>
      </Modal>
    </>
  );
}
