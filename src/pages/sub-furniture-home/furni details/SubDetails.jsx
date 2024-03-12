/* eslint-disable react/no-unknown-property */

const SubDetails = () => {
    return (
        <div className="my-20 p-5">
            <h1 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-center">if You Want to Create Furniture Shop?</h1>
            <div className="flex flex-col lg:flex-row gap-10 mt-12">
                <div className="w-full lg:w-1/2 h-[550px] p-5">
                    <h1 className="text-2xl font-bold text-center">Steps of  furni track ....</h1>
                    <p className="text-center">
                        {`  Effective task management involves a combination of planning, organization, prioritization, and execution. Here's a step-by-step guide to help you solve any task management challenge`}
                    </p>
                    <div className="m-2 space-y-2">
                        <div className="group flex flex-col gap-2 rounded-lg p-5 bg-gradient-to-b from-[#2241b0] to-[#000000] text-white"
                            tabindex="1" >
                            <div className="flex cursor-pointer items-center justify-between">
                                <ul className="text-xl font-medium cursor-pointer list-disc">
                                    <li>Define Objectives and Scope</li>
                                </ul>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png" className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                />
                            </div>
                            <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000" >
                                Clearly define the goals and objectives of your furniture tracking system. Determine the scope of what you want to track, such as types of furniture, locations, and quantities.
                            </div>
                        </div>

                        <div className="group flex flex-col gap-2 rounded-lg p-5 bg-gradient-to-b from-[#2241b0] to-[#000000] text-white"
                            tabindex="2" >
                            <div className="flex cursor-pointer items-center justify-between">
                                <ul className="list-disc cursor-pointer text-xl font-medium">
                                    <li>Inventory Assessment</li>
                                </ul>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png" className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                />
                            </div>
                            <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000" >
                                Conduct a comprehensive inventory of all existing furniture assets. Document relevant information for each item, including type, condition, location, and any unique identifiers (e.g., serial numbers).
                            </div>
                        </div>

                        <div className="group flex flex-col gap-2 rounded-lg p-5 bg-gradient-to-b from-[#2241b0] to-[#000000] text-white"
                            tabindex="3">
                            <div className="flex cursor-pointer items-center justify-between">
                                <ul className="list-disc cursor-pointer text-xl font-medium">
                                    <li>Choose a Tracking Method</li>
                                </ul>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png" className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                />
                            </div>
                            <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000" >
                                Decide on a tracking method that suits your needs. This could include barcoding, RFID (Radio-Frequency Identification), QR codes, or a combination of these.Ensure that the chosen method aligns with your objectives and budget.
                            </div>
                        </div>
                        <div className="group flex flex-col gap-2 rounded-lg p-5 bg-gradient-to-b from-[#2241b0] to-[#000000] text-white"
                            tabindex="3">
                            <div className="flex cursor-pointer items-center justify-between">
                                <ul className="list-disc cursor-pointer text-xl font-medium">
                                    <li>Implement Tracking System</li>
                                </ul>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png" className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                />
                            </div>
                            <div
                                className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000" >
                                Apply the chosen tracking method to each piece of furniture. Record essential information in a centralized database or management system.
                            </div>
                        </div>
                        <div className="group flex flex-col gap-2 rounded-lg p-5 bg-gradient-to-b from-[#2241b0] to-[#000000] text-white"
                            tabindex="3">
                            <div className="flex cursor-pointer items-center justify-between">
                                <ul className="list-disc cursor-pointer text-xl font-medium">
                                    <li>Training and Awareness</li>
                                </ul>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png" className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                />
                            </div>
                            <div
                                className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000" >
                                Provide ongoing training to staff members involved in the tracking system.Create awareness about the importance of accurate and up-to-date furniture tracking.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 h-[550px] mt-40 md:mt-0 lg:mt-0">
                    <iframe className="h-full w-full" src="https://www.youtube.com/embed/TGHOYfjwf7g" title="Furniture: Modern (Official Trailer)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={false}></iframe>
                </div>
            </div>
        </div>
    );
};

export default SubDetails;