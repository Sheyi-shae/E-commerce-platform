"use client";

import { Button, Modal} from "flowbite-react";
import { User, X } from "lucide-react";
import { useState } from "react";

import LoginForm from "./regForms/LoginForm";
import RegisterForm from "./regForms/RegisterForm";

export function LoginModal({setRegModal,regModal,title,className,gradientDuoTone,size}) {
  const [openModal, setOpenModal] = useState(false);
 

  return (
    <>
    <Button onClick={() => setOpenModal(true)}  className='hidden md:flex' gradientDuoTone={gradientDuoTone}>
          <User size={size} className="mr-1" />
      {title}</Button>
      <button onClick={() => setOpenModal(true)}  className={'flex md:hidden dark:text-pink-600'} >
          <User size={size} className="mr-1" />
      {title}</button>
      <Modal show={openModal} size="xl" popup onClose={() => setOpenModal(false)}>
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
        {!regModal && <LoginForm setOpenModal={setOpenModal} setRegModal={setRegModal}/>}
        {regModal && <RegisterForm setOpenModal={setOpenModal} setRegModal={setRegModal}/>}

        </Modal.Body>
      </Modal>
    </>
  );
}
