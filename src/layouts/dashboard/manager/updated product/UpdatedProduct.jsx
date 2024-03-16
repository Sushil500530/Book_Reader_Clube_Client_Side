
const UpdatedProduct = () => {
    return (
        <div className="w-[90%] mx-auto dark:text-white">
            {/* <Helmet>
                <title>Product Added | Inventory M</title>
            </Helmet> */}
            <h3 className="text-3xl text-center font-bold mt-12 mb-5 flex items-center justify-center gap-2">Add Product  </h3>
            <div className="container mx-auto mt-12">
                <form onSubmit={handleAddedProduct}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                        <div className='space-y-6'>
                            <div className="flex flex-col md:flex-row lg:flex-row w-full gap-4">
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='dark:text-white block text-black font-medium'>
                                        Product Name
                                    </label>
                                    <input className='w-full px-4 py-3 text-gray-800 border rounded-md input input-info ' name='product_name' id='product_name' type='text' placeholder='Product name' required
                                    />
                                </div>
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block dark:text-white text-black font-medium'>
                                        Location
                                    </label>
                                    <input className='w-full px-4 py-3 text-gray-800 border rounded-md input input-info '
                                        name='location' id='location' type='text' placeholder='Location' required
                                    />
                                </div>
                            </div>

                            <div className='space-y-1 w-full'>
                                <label htmlFor='location' className='block dark:text-white text-black font-medium'>
                                    Image
                                </label>
                                <div className=' bg-white w-full m-auto rounded-lg'>
                                    <label className="my-5"></label>
                                    <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg overflow-hidden'>
                                        <input type='file' name='image' id='image' accept='image/*' className="file-input w-full file-input-info focus:border-none " />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row lg:flex-row w-full gap-4">
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block dark:text-white text-black font-medium'>
                                        Set Thumbnail1
                                    </label>
                                    <div className=' bg-white w-full m-auto rounded-lg'>
                                        <label className="my-5"></label>
                                        <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg overflow-hidden'>
                                            <input type='file' name='thumbnail1' id='thumbnail1' accept='image/*' className="file-input w-full file-input-info focus:border-none " />
                                        </div>
                                    </div>
                                </div>
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block dark:text-white text-black font-medium'>
                                        Set Thumbnail2
                                    </label>
                                    <div className=' bg-white w-full m-auto rounded-lg'>
                                        <label className="my-5"></label>
                                        <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg overflow-hidden'>
                                            <input type='file' name='thumbnail2' id='thumbnail2' accept='image/*' className="file-input w-full file-input-info focus:border-none " />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row lg:flex-row w-full gap-4">
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block dark:text-white text-black font-medium'>
                                        Quantity
                                    </label>
                                    <input className='w-full px-4 py-3 text-gray-800 border rounded-md input input-info ' name='quantity' id='quantity' type='number' placeholder='Enter quantiey' required
                                    />
                                </div>
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block dark:text-white text-black font-medium'>
                                        Product Price
                                    </label>
                                    <input className='w-full px-4 py-3 text-gray-800 border rounded-md input input-info ' name='product_cost' id='product_cost' type='number' placeholder='Product Cost' required
                                    />
                                </div>
                            </div>
                        </div>


                        <div className='space-y-6'>
                            <div className="flex flex-col md:flex-row lg:flex-row w-full gap-4">
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block dark:text-white text-black font-medium'>
                                        Category
                                    </label>
                                  {/* select options  */}
                                </div>
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block dark:text-white text-black font-medium'>
                                        Rating
                                    </label>
                                    <input className='w-full px-4 py-3 text-gray-800 border rounded-md input input-info ' name='rating' id='rating' type='number' placeholder='Product Cost' required
                                    />
                                </div>
                            </div>
                            <div className='space-y-1'>
                                <label htmlFor='description' className='block font-medium'>
                                    Description
                                </label>
                                <textarea id='description' className='block focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border rounded-md input input-info  ' name='description' placeholder="Write description"
                                ></textarea>
                            </div>
                            <div className="flex flex-col md:flex-row lg:flex-row w-full gap-4">
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block dark:text-white text-black font-medium'>
                                        Product Profit
                                    </label>
                                    <input className='w-full px-4 py-3 text-gray-800 border rounded-md input input-info ' name='product_profit' id='product_profit' type='number' placeholder='Product Profit' required
                                    />
                                </div>
                                <div className='space-y-1 w-full'>
                                    <label htmlFor='location' className='block dark:text-white text-black font-medium'>
                                        Discount %
                                    </label>
                                    <input className='w-full px-4 py-3 text-gray-800 border rounded-md input input-info ' name='discount' id='discount' type='number' placeholder='Discount %' required
                                    />
                                </div>
                            </div>
                            <button type='submit' className='btn w-full mt-5 p-3 text-[18px] text-center font-medium hover:text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-[#0939e8] to-[#ff0fdb] text-black '>
                                {/* button is here  */}
                           
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdatedProduct;