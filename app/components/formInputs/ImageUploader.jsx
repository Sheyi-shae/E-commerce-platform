import { UploadDropzone } from "@/lib/uploadthing";
import { UploadButton } from "@uploadthing/react";
import { Pencil, UploadCloud, XCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

export default function ImageInput({
  label,
  imageUrl ,
  setImageUrl,
  className = "col-span-full",
  endpoint ,
}) {
  const imageRemover=()=>{
setImageUrl("");
toast('Image Removed!', {
  icon: '🥶',
});
  }
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="category-image"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50"
        >
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={imageRemover}
            type="button"
            className="flex space-x-2  bg-violet-400 rounded-md shadow text-slate-50  py-2 px-4"
          >
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </button>
        )}
      </div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Item image"
          width={1000}
          height={667}
          className="w-full h-64 object-cover"
        />
      ) : (
        <UploadButton 
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            setImageUrl(res[0].url);
            // Do something with the response
            toast.success('image uploaded successfully')
            console.log("Files: ", res);
            console.log("Upload Completed");
          }}
          onUploadError={(error) => {
            // Do something with the error.
            toast.error('error uploading image')
            console.log(error);
          }}
        />
      )}
    </div>
  );
}


//drop zone



export  function ImageInputDropZone({
  label,
  imageUrl ,
  setImageUrl,
  className = "col-span-full",
  endpoint ,
}) {
  const imageRemover=()=>{
setImageUrl("");
toast('Image Removed!', {
  icon: '🥶',
});
  }
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="category-image"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50"
        >
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={imageRemover}
            type="button"
            className="flex space-x-2  bg-violet-400 rounded-md shadow text-slate-50  py-2 px-4"
          >
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </button>
        )}
      </div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Item image"
          width={1000}
          height={667}
          className="w-full h-64 object-cover"
        />
      ) : (
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            setImageUrl(res[0].url);
            // Do something with the response
            toast.success('image uploaded successfully')
            console.log("Files: ", res);
            console.log("Upload Completed");
          }}
          onUploadError={(error) => {
            // Do something with the error.
            toast.error('error uploading image')
            console.log(error);
          }}
        />
      )}
    </div>
  );
}


//multiple image uploader
export function MultipleImageInput({
  label,
  imageUrls=[],
  setImageUrls,
  className = "col-span-full",
  endpoint ,
}) {
  //the function takes in index of the we mapped
  const handleImageRemover=(imageIndex)=>{
    const updatedImages= imageUrls.filter((image,index)=> imageIndex !==index) //filter out imgs clicked and leave imageindex(mapped) != index(filtered) 
    setImageUrls(updatedImages)
  }
 
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="category-image"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50"
        >
          {label}
        </label>
       
      </div>
      {imageUrls.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
        {imageUrls.map((imageUrl,i)=>{
          return(
            <div className=" relative" key={i}>
            <button onClick={()=>handleImageRemover(i)} className="-right-2 absolute bg-red-500 rounded-full -top-2">
            <XCircle className="text-white"/>
          </button>
          <Image
          src={imageUrl}
          alt="Product image"
          width={1000}
          height={667}
          className="w-full h-32 object-cover"/>
            </div>
          )
        })}
        
          </div>
      ) : (
        <UploadButton 
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            const urls = res.map((item,i)=>item.url)
            setImageUrls(urls);
            // Do something with the response
            toast.success('image uploaded successfully')
            console.log("image urls", imageUrls);
            console.log("Upload Completed");
          }}
          onUploadError={(error) => {
            // Do something with the error.
            toast.error('error uploading image')
            console.log(error);
          }}
        />
      )}
    </div>
  );
}