
const SubDetails = () => {
    return (
        <div className="my-20">
            <h1 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-center">if You Want to Create Furniture Shop?</h1>
            <div className="flex flex-col lg:flex-row gap-10 mt-12">
                <div className="w-full lg:w-1/2 h-[550px]">
                    <h1 className="text-2xl font-bold text-center">Steps of  furni track ....</h1>
                    <p className="text-center">
                        Effective task management involves a combination of planning, organization, prioritization, and execution. Here's a step-by-step guide to help you solve any task management challenge:
                    </p>
                    <div className="space-y-3 mt-8">
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" checked="checked" readOnly />
                            <div className="collapse-title text-xl font-medium">
                                <ul className="list-disc ml-6">
                                    <li>Define Objectives and Scope</li>
                                </ul>
                            </div>
                            <div className="collapse-content">
                                <p>Clearly define the goals and objectives of your furniture tracking system. Determine the scope of what you want to track, such as types of furniture, locations, and quantities.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" checked="checked" readOnly />
                            <div className="collapse-title text-xl font-medium">
                                <ul className="list-disc ml-6">
                                    <li>Inventory Assessment</li>
                                </ul>
                            </div>
                            <div className="collapse-content">
                                <p>Conduct a comprehensive inventory of all existing furniture assets. Document relevant information for each item, including type, condition, location, and any unique identifiers (e.g., serial numbers).</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" checked="checked" readOnly />
                            <div className="collapse-title text-xl font-medium">
                                <ul className="list-disc ml-6">
                                    <li>Choose a Tracking Method</li>
                                </ul>
                            </div>
                            <div className="collapse-content">
                                <p>Decide on a tracking method that suits your needs. This could include barcoding, RFID (Radio-Frequency Identification), QR codes, or a combination of these.Ensure that the chosen method aligns with your objectives and budget.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" checked="checked" readOnly />
                            <div className="collapse-title text-xl font-medium">
                                <ul className="list-disc ml-6">
                                    <li>Implement Tracking System</li>
                                </ul>
                            </div>
                            <div className="collapse-content">
                                <p>Apply the chosen tracking method to each piece of furniture. Record essential information in a centralized database or management system.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" readOnly />
                            <div className="collapse-title text-xl font-medium">
                                <ul className="list-disc ml-6">
                                    <li>Training and Awareness</li>
                                </ul>
                            </div>
                            <div className="collapse-content">
                                <p>Provide ongoing training to staff members involved in the tracking system.Create awareness about the importance of accurate and up-to-date furniture tracking.</p>
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