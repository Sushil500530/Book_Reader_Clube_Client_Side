import structImage from '../../assets/image/struct-image.jpg'
import { MdDataThresholding } from "react-icons/md";
import { HiComputerDesktop } from "react-icons/hi2";
import { IoCheckmark } from "react-icons/io5";
import Container from '../../shared/container/Container';



const SomeDetails = () => {
    return (
        <Container>
            <div className='p-5 overflow-hidden'>
                <h1 data-aos="fade-down" className="text-3xl font-bold text-center">
                    Strict of Furni-Track
                </h1>
                <p data-aos="fade-down" className='text-center my-5 lg:w-[1000px] mx-auto'>
                    This structure allows for a comprehensive tracking system, enabling users to manage and monitor furniture assets efficiently. The Furniture Table stores core details, the Movement History Table tracks the spatial changes of furniture, and the Maintenance Log Table records the upkeep and associated costs.
                </p>
                <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between gap-10">
                    <div
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-out"
                        className='w-full lg:w-1/2 h-auto'
                    >
                        <h1 className='text-3xl mb-6 font-bold flex gap-2 text-[#0f172c] items-center lg:justify-end'>
                            <MdDataThresholding className='w-16 h-16 rounded-full bg-blue-100 p-3' />
                            Database Schema
                        </h1>
                        <h1 className='text-2xl font-bold text-end flex items-center justify-start lg:justify-end gap-2'>
                            <IoCheckmark className='w-8 h-8 font-bold text-green-600' />
                            Furniture Table
                        </h1>
                        <p className='text-start lg:text-end'>
                            Creating a Furniture Table involves defining the structure of the table and specifying the attributes (columns) that will store information about each piece of furniture.
                        </p>
                        <h1 className='text-2xl font-bold text-end flex items-center gap-2 justify-start lg:justify-end'>
                            <IoCheckmark className='w-8 h-8 font-bold text-green-600' />
                            Movement History Table
                        </h1>
                        <p className='text-start lg:text-end'>
                            nique identifier for each movement record . Relates to the ID column in the Furniture table, establishing a foreign key constraint.Represents the date when the furniture item was moved.
                        </p>
                        <h1 className='text-2xl font-bold text-end flex items-center gap-2 justify-start lg:justify-end'>
                            <IoCheckmark className='w-8 h-8 font-bold text-green-600' />
                            Maintenance Log Table
                        </h1>
                        <p className='text-start lg:text-end'>
                            table, establishing a relationship between the two tables.Indicates the type of maintenance (e.g., repair, cleaning). Records the date when the maintenance occurred. A text field for additional details or notes about the maintenance.
                        </p>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-out"
                        className='w-full lg:w-1/2 h-auto'
                    >
                        <img
                            src={structImage}
                            className='w-full h-full'
                            alt="image"
                        />
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-out"
                        className='w-full lg:w-1/2 h-auto'
                    >
                        <h1 className='text-3xl mb-6 text-[#0f172c] font-bold flex gap-2 items-center'>
                            User Interface
                            <HiComputerDesktop className='w-16 h-16 rounded-full bg-blue-100 p-3' />
                        </h1>
                        <h1 className='text-2xl font-bold text-start flex items-center gap-2'>
                            Furniture List
                            <IoCheckmark className='w-8 h-8 font-bold text-green-600' />
                        </h1>
                        <p className='text-start'>
                            The {"Furniture List"} doesn&apos;t typically refer to a database table structure on its own but rather to a representation or display of furniture data. However, you can create a query or view in your database system to fetch and display the relevant information.
                        </p>
                        <h1 className='text-2xl font-bold text-start flex items-center gap-2'>
                            Move Furniture
                            <IoCheckmark className='w-8 h-8 font-bold text-green-600' />
                        </h1>
                        <p className='text-start'>
                            nique identifier for each movement record . Relates to the ID column in the Furniture table, establishing a foreign key constraint.Represents the date when the furniture item was moved.
                        </p>
                        <h1 className='text-2xl font-bold text-start flex items-center gap-2'>
                            Maintenance Log
                            <IoCheckmark className='w-8 h-8 font-bold text-green-600' />
                        </h1>
                        <p className='text-start'>
                            Unique identifier for each maintenance log entry (Primary Key). Adjust the data types and constraints based on your specific database system and requirements. A text field for additional details or notes about the maintenance.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default SomeDetails;