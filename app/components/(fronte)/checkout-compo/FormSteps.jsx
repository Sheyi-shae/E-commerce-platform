'use client'
import React, { useEffect, useState } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import StepsHeader from './StepsHeader'
import ShippingDetailsForm from './ShippingDetails';
import PaymentMethod from './PaymentMethod';

import OrderSummary from './OrderSummary';

export default function FormSteps({sessions,steps}) {
    let [currentStep, setCurrentStep] = useState(1);
    


const address= sessions?.user.address
const email= sessions?.user.email

    useEffect(() => {
        if(email && address){
            setCurrentStep(3)
          }else if(email)
            {
                setCurrentStep(2)
            }
    }, [email,address])
    
    

    const handleNext = () => setCurrentStep((prevStep) => prevStep + 1);
  const handlePrevious = () => setCurrentStep((prevStep) => prevStep - 1);

    function renderFormStep(step) {
        switch(step) {
            case 1:
                return <PersonalDetailsForm onNext={handleNext} />;
            case 2:
                return <ShippingDetailsForm onNext={handleNext} sessions={sessions} onPrevious={handlePrevious}/>;
            case 3:
                return <PaymentMethod onNext={handleNext} address={address} onPrevious={handlePrevious}/>;
            default:
                return <p><OrderSummary sessions={sessions} onPrevious={handlePrevious}/></p> 
        }
    }

    return (
        <div >
        <StepsHeader steps={steps} currentStep={currentStep}/>
        <div className=' w-full p-1 md:w-[90%]  md:p-2  mx-auto'>
          {renderFormStep(currentStep)}  
        </div>
        
        
        
        
        </div>
    );
}
