"use client";
import { Plus } from "lucide-react";
import React from "react";
export default function TextInput({
    label,
    name,
    register,
    errors,
    errorMessage,
    isRequired = true,
    type = "text",
    className = "sm:col-span-2 ",
    defaultValue=""
  }) {
    return (
      <div className={className}>
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 dark:text-slate-50 text-gray-900 mb-2 "
        >
          {label}
        </label>
        <div className="mt-2">
          <input
            {...register(`${name}`, { required: isRequired })}
            type={type}
            name={name}
            id={name}
            defaultValue={defaultValue}
            autoComplete={name}
            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 focus:ring-orange-200 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
            placeholder={`Type the ${label.toLowerCase()}`}
          />
          {errors[`${name}`] ? (
  <span className="text-sm text-red-600 ">{label} is required</span>
) : (
  errorMessage && (
    <span className="text-sm text-red-600 ">{errorMessage}</span>
  )
)}

          
        </div>
      </div>
    );
  }

  export  function PasswordInput({
    label,
    name,
    register,
    errorMessage,
    errors,
    isRequired = true,
    type = "text",
    className = "sm:col-span-2 ",
    defaultValue=""
  }) {
    return (
      <div className={className}>
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 dark:text-slate-50 text-gray-900 mb-2 "
        >
          {label}
        </label>
        <div className="mt-2">
          <input
            {...register(`${name}`, { required: isRequired })}
            type={type}
            name={name}
            id={name}
            defaultValue={defaultValue}
            autoComplete={name}
            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 focus:ring-orange-200 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
            placeholder={`Type the ${label.toLowerCase()}`}
          />
          {errors[`${name}`] && (
            <span className="text-sm text-red-600 ">{label} is required</span>
          )}
          {errorMessage && (
            <span className="text-sm text-red-600 ">{errorMessage}</span>
          )}
        </div>
      </div>
    );
  }



  
export  function TextareaInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  defaultValue="",
  className = "sm:col-span-2",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block dark:text-slate-50 text-sm font-medium leading-6 text-gray-900 mb-2 "
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          {...register(`${name}`, { required: isRequired })}
          name={name}
          id={name}
          rows={3}
          placeholder={`Type the ${label.toLowerCase()}`} 
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
          defaultValue={defaultValue}
        />
        {errors[`${name}`] && (
          <span className="text-sm text-red-600 ">{label} is required</span>
        )}
      </div>
    </div>
  );
}


export  function SelectInput({
  label,
  name,
  register,
  isRequired = true,
  className = "sm:col-span-2",
  options = [],
  
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          {...register(`${name}`,{ required: isRequired })}
          id={name}
          name={name}
          className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-200 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          {options.map((option, i) => {
            return (
              <option key={i} value={option.id} className="hover:bg-orange-300">
                {option.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

//select input as options title
export  function SelectInputTitle({
  label,
  name,
  register,
  isRequired = true,
  className = "sm:col-span-2",
  options = [],
  
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          {...register(`${name}`,{ required: isRequired })}
          id={name}
          name={name}
          className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-200 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          {options.map((option, i) => {
            return (
              <option key={i} value={option.title} className="hover:bg-orange-300">
                {option.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}




export  function SubmitButton({ isLoading, title,loadingTitle }) {
  return (
    <div className="sm:col-span-1">
      {isLoading ? (
        <button
          disabled
          type="submit"
          className="mt-4 disabled:cursor-not-allowed text-white bg-black hover:bg-slate-800 font-medium 
          rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-lime-600 dark:hover:bg-lime-700 inline-flex items-center"
        >
        {/* spinner */}
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
          {/* end spinner */}
          
          {loadingTitle}
        </button>
      ) : (
        <button
        
          type="submit"
          className="mt-4 text-white bg-black hover:bg-slate-800 font-medium 
          rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-lime-800 dark:hover:bg-lime-900 inline-flex items-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          <span> {title}</span>
        </button>
      )}
    </div>
  );
}



export  function ToggleInput({
  label,
  name,
  trueTitle,
  falseTitle,
  register,
  className = "sm:col-span-2 flex flex-wrap",
}) {
  return (
    <div className={`${className}`}>
      <div className="w-full sm:w-1/2">
        <h2 className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2">
          {label}
        </h2>
      </div>
      <div className="w-full sm:w-1/2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            {...register(`${name}`)}
            type="checkbox"
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {name ? `${trueTitle}` : `${falseTitle}`}
          </span>
        </label>
      </div>
    </div>
  );
}