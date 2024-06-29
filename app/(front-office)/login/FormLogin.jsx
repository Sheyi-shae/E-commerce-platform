'use client'
import LoadingDots from '@/app/components/(fronte)/regForms/LoadingDots';
import TextInput from '@/app/components/formInputs/TextInput';
import { Button, Checkbox, Label } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function FormLogin() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false);
  const router =useRouter()
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm({ });


      function openReg (){
        
        setRegModal(true)
      }
      //form submission
   async function onSubmit(data){
    try {
        setLoading(true)
       
        const loginData = await signIn("credentials", {
            ...data,
            redirect: false,
          });
          
          if (loginData?.error) {
            setLoading(false);
            toast.error("Invalid email or password");
          } else {
            // Sign-in was successful
            toast.success("Login Successful");
            reset();
            // router.push("/");
            router.push('/')
          
         
        }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Its seems something is wrong with your Network");
    }
  }
      
  return (
    <div className=' shadow-md rounded-md mx-auto mt-7 px-2 ring-slate-200 w-[95%] ring-1 p-2  md:p-6 lg:w-[40%] md:w-[60%]'>
        <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white capitalize">
              Sign in to your account
            </h3>
            <form
        onSubmit={handleSubmit(onSubmit)}
        className="  mx-auto "
      >
<TextInput
            label="Email"
            name="email"
            type="email"
            register={register}
            errors={errors}
          />
          
            <TextInput
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            register={register}
            errors={errors}
          />
          <div className="flex justify-between">
              <div className="flex items-center mt-1">
                <Checkbox className="focus:ring-0" color={'gray'}  onClick={() => setShowPassword(!showPassword)}/>
                <Label htmlFor="remember">show password</Label>
              </div>
            
            </div>
            <div className="w-full flex justify-center mt-2">
              
      {loading ?<Button gradientDuoTone="pinkToOrange" type="submit" className="px-10 md:px-12 montserrat"> 
      
        
     Logging in <LoadingDots/> </Button>
      : <Button gradientDuoTone="pinkToOrange"  type="submit" className="px-10 md:px-12 montserrat"> 
      Log in to your account</Button>}
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
  <span className="text-sm font-medium">Sign in with Google</span>
</button>
{/* google button */}
            </div>
      </div>
      <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              
               <Link className="text-pink-700 hover:underline dark:text-pink-500" href={'/register'}>
               Create account</Link> 
              
            </div>
    </div>
  )
}
