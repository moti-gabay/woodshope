import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';


const Order = ({setOpenOrder}) => {
  const { getValues, register, handleSubmit, reset, formState: { errors }, } = useForm();
  const {product} = useSelector(store => store.productsReducer);
  
  const onSub = (bodyData) => {
    bodyData.price = bodyData.thickness * bodyData.length * bodyData.width;
    console.log(bodyData);
    reset();

  }
  const onClose = () => {
    setOpenOrder(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

useEffect(() => {
reset();
},[product])

  return (
    <div>
      <h2 className='text-4xl text-center'>Order: "{product.name}"</h2>
      <form onSubmit={handleSubmit(onSub)}
      className='w-[80%] mx-auto'>
              <div className="">
                <h3 className='text-4xl'>Choose Thickness</h3>
                <div>                 
                   <label className='font-semibold text-sm sm:text-base md:text-lg lg:text-xl'>Thickness: (mm)</label>
                   <select
                   {...register('thickness', {
                  // required: { value: true, message: 'Choose option...' },
                   validate: (value) => value !== 'title' || 'Choose an option',
                   })}
                   className={`select select-sm block w-[55%] sm:w-[40%] md:w-[35%] lg:w-[30%] xl:w-[25%] ps-2 mt-1 mb-1 border-slate-300 text-gray-900 shadow-sm ${errors.name ? 'focus:border-red-600' : 'focus:border-indigo-600'}`}
                   >
                    <option value="title">Choose option</option>
                    {product.thickness.map((item, i) => (
                      <option key={i} value={item}>{item}</option>
                    ))}
                   </select>
                   {errors.thickness && <p className='m-0 text-red-600'>{errors.thickness.message}</p>}
                </div>
              </div>
              <div >
                <h3 className="text-4xl">Type Length & Width</h3>
                <div>
                   <label className='font-semibold text-sm sm:text-base md:text-lg lg:text-xl'>Length:</label>
                   <input
                   {...register('length', {
                   required: { value: true, message: "Length required..." },
                   min: { value: 5, message: 'min 5 cm...' },
                   max: { value: 300, message: 'max 300 cm...' },
                   })}
                   type='number'
                   className={`block w-[55%] sm:w-[40%] md:w-[35%] lg:w-[30%] xl:w-[25%] ps-2 py-1 outline-none rounded-md text-gray-900 shadow-sm border border-slate-300 focus:border-indigo-600 focus:border-2`}
                   />
                   {errors.length && <p className='m-0 text-red-600'>{errors.length.message}</p>}
                </div>
              </div>
              <div className="">
                <div>
                   <label className='font-semibold text-sm sm:text-base md:text-lg lg:text-xl'>Width:</label>
                   <input
                   {...register('width', {
                   required: { value: true, message: 'Width required...' },
                   min: { value: 5, message: 'min 5 cm...' },
                   max: { value: 300, message: 'max 300 cm...' },
                   })}
                   type='number'
                   className={`block w-[55%] sm:w-[40%] md:w-[35%] lg:w-[30%] xl:w-[25%] ps-2 py-1 outline-none rounded-md text-gray-900 shadow-sm border border-slate-300 focus:border-indigo-600 focus:border-2`}
                   />
                   {errors.width && <p className='m-0 text-red-600'>{errors.width.message}</p>}
                </div>
              </div>

              <div className="sm:col-span-4 w-[80%] mx-auto py-1">              
              </div>
              <div className='bg-slate-100 mt-2 w-[100%]'>
                <div className="sm:col-span-4 w-[80%] mx-auto py-3">
                   {/* Submit Button */}
                     <button className={`inline-flex w-full sm:mx-2 justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm bg-blue-600 hover:bg-blue-500 sm:ml-3 sm:w-auto`}>
                     <p className='mx-2'>Loading</p> <span className="loading loading-spinner loading-sm"></span>
                     </button> : 
                     <button type='submit' className={`w-full sm:me-2 justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm bg-blue-600 hover:bg-blue-500 sm:w-auto `}>
                        Add to cart
                     </button>
                    
                   <button
                   type="button"
                   className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                   onClick={()=>{ 
                     onClose();
                  }}
                   >
                   Cancel
                   </button>
                </div>
              </div>   
         </form> 
         
    </div>
  )
}

export default Order