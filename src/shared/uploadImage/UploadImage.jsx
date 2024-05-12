
const UploadImage = () => {


    // console.log("image find is------>", showImage);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        {/* <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input onChange={handleImage} type="file" placeholder="email" className="" required />
                            </div>
                            {
                                showImage && <img src={showImage} alt="showImage" className="w-44 h-44" />
                            }

                            <p>
                                {
                                    imageName && "Upload Image"
                                }
                            </p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadImage;