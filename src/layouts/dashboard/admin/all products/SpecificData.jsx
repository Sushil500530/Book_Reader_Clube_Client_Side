/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react'

const SpecificData = ({ isOpen, closeModal, findData }) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0" >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto z-50">
                        <div className="flex min-h-full items-center justify-center p-4  overflow-y-auto">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95" >
                                <Dialog.Panel className="w-full max-w-lg transform overflow-y-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="text-lg font-bold leading-6 black">
                                        {findData?.title}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500 pb-2">
                                            {findData?.description}
                                        </p>
                                    </div>
                                    <div>
                                        <figure className='w-full h-[300px]'>
                                            <img src={findData?.image} alt="product-image" className='w-full h-full' />
                                        </figure>
                                        <div className='grid grid-cols-2 my-5 gap-3 !text-start'>
                                            <div className=" space-y-1 flex flex-col items-start justify-start text-start">
                                                <h1 className='text-xl font-bold'>Product Cost : <span className='font-medium text-gray-800'>{findData?.price} tk</span></h1>
                                                <h1 className='text-xl font-bold'>Discount : <span className='font-medium text-gray-800'>{findData?.discount}%</span></h1>
                                                <h1 className='text-xl font-bold'>Category : <span className='font-medium text-gray-800'>{findData?.category}</span></h1>
                                                <h1 className='text-xl font-bold'>Product Quantity : <span className='font-medium text-gray-800'>{findData?.quantity}</span></h1>
                                                <div className="w-full flex items-center justify-start my-3">
                                                    <h1 className='text-xl font-bold'>Rating: </h1>
                                                    <Rating
                                                        style={{ maxWidth: 130 }}
                                                        value={findData?.rating}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <figure className='w-full h-[70px]'>
                                                    <img src={findData?.thumbnail1} alt="product-image" className='w-full h-full' />
                                                </figure>
                                                <figure className='w-full h-[70px]'>
                                                    <img src={findData?.thumbnail2} alt="product-image" className='w-full h-full' />
                                                </figure>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button type="button" className="btn w-full text-white bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-[18px] font-medium hover:text-blue-500" onClick={closeModal} >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default SpecificData;