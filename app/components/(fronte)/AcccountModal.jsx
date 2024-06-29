'use client'
import React, { useState } from 'react'
import { LoginModal } from './LoginModal'
import { RegisterModal } from './RegisterModal';

export default function AcccountModal({title,className,gradientDuoTone,size}) {
    const [regModal, setRegModal] = useState(false);
  return (
    <div>
       <LoginModal setRegModal={setRegModal} title={title} size={size} gradientDuoTone={gradientDuoTone} className={className} regModal={regModal}/>

       
    </div>
  )
}
