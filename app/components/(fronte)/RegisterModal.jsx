"use client";

import { Button, Checkbox, Label, Modal} from "flowbite-react";
import { Eye, EyeOff, X } from "lucide-react";
import { useEffect, useState } from "react";
import TextInput from "../formInputs/TextInput";
import { useForm } from "react-hook-form";
import { passwordCheck } from "@/lib/passwordCheck";
import RegisterForm from "./regForms/RegisterForm";

export function RegisterModal() {
  const [openModal, setOpenModal] = useState(false);
  
  

  return (
    <>
      <span onClick={() => setOpenModal(true)}>Register</span>
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
         
          <RegisterForm setOpenModal={setOpenModal}/>
        </Modal.Body>
      </Modal>
    </>
  );
}
