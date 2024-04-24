'use client'
import { Key } from 'lucide-react';
import React, { useState } from 'react';

const RandomPasswordGenerator = ({owner,className,onPasswordGenerated}) => {
  const [password, setPassword] = useState('');

  const generateRandomPassword = (length) => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
    onPasswordGenerated(newPassword)
  };

  return (
    <div className='' >
      <button type='button' className={`flex gap-1 ${className}`}  onClick={() => generateRandomPassword(10)}  >
      <Key/> Generate {owner} </button>
      <p className='text-slate-600 font-sans font-medium'>{owner}: {password}</p>
    </div>
  );
};

export default RandomPasswordGenerator;
