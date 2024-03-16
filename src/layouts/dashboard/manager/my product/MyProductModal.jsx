/* eslint-disable react/prop-types */
import { Dialog, Transition } from '@headlessui/react'
import { Rating } from '@smastrom/react-rating';
import { Fragment } from 'react'

const MyProductModal = ({ isOpen, closeModal, findItem }) => {
    // console.log(Object.keys(findItem).join(","));
    const { product_name, quantity, category, rating, price, image, product_profit, discount, description, location } = findItem || {};
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0" >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95" >
                                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="text-lg font-bold leading-6 black">
                                        {product_name}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            {description}
                                        </p>
                                    </div>
                                    <div>
                                        <figure className='w-full h-[300px]'>
                                            <img src={image} alt="product-image" className='w-full h-full' />
                                        </figure>
                                        <div className='space-y-3 my-5'>
                                            <div className='flex items-center justify-between flex-wrap'>
                                                <h1 className='text-xl font-bold'>Location : <span className='font-medium text-gray-800'>{location}</span></h1>
                                                <h1 className='text-xl font-bold'>Discount : {discount}%</h1>
                                            </div>
                                            <div className='flex items-center justify-between flex-wrap'>
                                                <h1 className='text-xl font-bold'>Product Profit :<span className='font-medium text-gray-800'>{product_profit}tk</span></h1>
                                                <h1 className='text-xl font-bold'>Product Quantity : <span className='font-medium text-gray-800'>{quantity}</span></h1>
                                            </div>
                                            <div className='flex items-center justify-between flex-wrap'>
                                                <h1 className='text-xl font-bold'>Category : <span className='font-medium text-gray-800'>{category}</span></h1>
                                                <h1 className='text-xl font-bold'>Product Cost : <span className='font-medium text-gray-800'>{price} tk</span></h1>
                                            </div>
                                            <div className="w-full flex items-center justify-start my-3">
                                                <h1 className='text-xl font-bold'>Rating: </h1>
                                                <Rating
                                                    style={{ maxWidth: 130 }}
                                                    value={rating}
                                                    readOnly
                                                />
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

export default MyProductModal;