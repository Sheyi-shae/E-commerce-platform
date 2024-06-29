'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

import { Button, Checkbox, Label } from 'flowbite-react';
import { passwordCheck } from '@/lib/passwordCheck';
import { makePostRequestFrontend } from '@/lib/apiRequest';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import TextInput from '@/app/components/formInputs/TextInput';

export default function FormRegister() {
    const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ });

  const password = watch("password");
  useEffect(() => {
    const error = !passwordCheck(password) && "Password is weak";
    setErrorMessage(error);
  }, [password, setErrorMessage]);

  const router =useRouter()
  //form submission
   async function onSubmit(data){
makePostRequestFrontend(
    setLoading,
    "api/register",
    data,
    "Registration",
    reset,
  )

  router.push('/login')
  
 
   }
  return (
    <div className='px-2'>
          
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white capitalize">
              Create an account
            </h3>
            <form
        onSubmit={handleSubmit(onSubmit)}
        className="  mx-auto "
      >
      <div className="grid gap-2 sm:grid-cols-2 sm:gap-6">
            <TextInput
            label="First Name"
            name="firstName"
            type="text"
            register={register}
            errors={errors}
            className='grid-cols-1'
           
          />
          
          <TextInput
            label="Last Name"
            name="lastName"
            type="text"
            register={register}
            errors={errors}
            className='grid-cols-1'
          />
            <TextInput
            label="Email"
            name="email"
            type="email"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Phone Number"
            name="phone"
            type="number"
            register={register}
            errors={errors}
          />
          
          
            <TextInput
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            register={register}
            errors={errors}
            errorMessage={errorMessage}

          /> 
                    
             
          </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox className="focus:ring-0" color={'gray'}  onClick={() => setShowPassword(!showPassword)}/>
                <Label htmlFor="remember">show password</Label>
              </div>
            
            </div>
            <div className="w-full flex justify-center">
              
      {loading ?<Button gradientDuoTone="pinkToOrange" type="submit" className="px-10 md:px-12 montserrat"> 
      <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 mr-3 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
      Creating an account ...</Button>
      : <Button gradientDuoTone="pinkToOrange" disabled={errorMessage} type="submit" className="px-10 md:px-12 montserrat"> create an account</Button>}
            </div>
            </form>
            <div className="text-slate-700 w-full flex flex-col  ">
              <span className="flex" ><hr className="w-1/2"/><span className="-mt-4 p-1">or</span><hr className="w-1/2"/></span> 
           
           {/* google button */}
           
              <button type="button" disabled className="flex items-center shadow-md justify-center px-8 py-2 rounded-md bg-slate-200  hover:bg-slate-300">
  <span className="mr-2">
  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd"/>
</svg>

  </span>
  <span className="text-sm font-medium">Sign up with Google</span>
</button>
{/* google button */}
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Already have an account?&nbsp;
              
             <Link className="text-pink-700 hover:underline dark:text-pink-500" href={'/login'}>
             Log in</Link>
             
            </div>
          </div>
    </div>
  )
}
