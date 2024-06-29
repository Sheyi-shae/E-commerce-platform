
"use client";

import { makePutRequest } from "@/lib/apiRequest";
import { Label, Radio, Modal, } from "flowbite-react";
import {  useState } from "react";

export  function StatusModal({status,id}) {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading]=useState(false)
 
  const changeStatus= async(data)=>{
    const statusData = { status: data };

    await makePutRequest(setLoading,`api/order/${id}`,statusData,'Order Status')

      setOpenModal(false)
    
  }

  return (
    <>
    {status ==='SUCCESS' && <button onClick={() => setOpenModal(true)} type="button" 
    className="text-white bg-gradient-to-br from-green-800 to-lime-600 
          hover:bg-gradient-to-bl focus:ring-4 focus:outline-none dark:focus:ring-green-800 
           rounded-lg text-xs px-2 py-2 text-center me-2 mb-2">  {status}</button>}

           {/* processing button */}
           {status ==='PROCESSING' && <button onClick={() => setOpenModal(true)} type="button"
            className="text-white bg-gradient-to-br from-yellow-700 to-yellow-600 
          hover:bg-gradient-to-bl focus:ring-4 focus:outline-none  dark:focus:ring-orange-800 
           rounded-lg text-xs px-2 py-2 text-center me-2 mb-2">  {status}</button>}
           {/* failed button */}
           {status ==='FAILED' && <button type="button" onClick={() => setOpenModal(true)} className="text-white bg-gradient-to-br from-red-800 to-orange-700 
          hover:bg-gradient-to-bl focus:ring-4 focus:outline-none  dark:focus:ring-red-800 
           rounded-lg text-xs px-2 py-2 text-center me-2 mb-2">  {status}</button>}
     
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} >
        <Modal.Header />
        <Modal.Body>
          
        <fieldset className="flex max-w-md flex-col gap-4">
      <legend className="mb-4">Change order status</legend>
      <div className="flex items-center gap-2">
        <Radio id="PROCESSING" name="status" value="PROCESSING" onClick={()=>changeStatus('PROCESSING')} disabled={status==='PROCESSING'}  />
        <Label htmlFor="PROCESSING" disabled={status==='PROCESSING'}>PROCESSING</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio id="FAILED" name="status" value="FAILED" onClick={()=>changeStatus('FAILED')} disabled={status==='FAILED'}  />
        <Label htmlFor="FAILED" disabled={status==='FAILED'}>FAILED</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio id="SUCCESS" name="status" value="SUCCESS" onClick={()=>changeStatus('SUCCESS')} disabled={status==='SUCCESS'} />
        <Label htmlFor="SUCCESS" disabled={status==='SUCCESS'}>SUCCESS</Label>
      </div>
   
      
    </fieldset>
            
         
        </Modal.Body>
      </Modal>
    </>
  );
}
