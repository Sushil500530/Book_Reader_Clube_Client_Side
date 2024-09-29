import logo from '../../../assets/image/logo/watch.gif';
import logo2 from '../../../assets/image/logo/contact.gif';
import logo3 from '../../../assets/image/logo/location.gif';
import Container from '../../../shared/container/Container';
const LocationStatus = () => {
    return (
        <Container>
            <div className='lg:mt-12 lg:mb-16 m-5'>
                <h1 className="text-2xl lg:text-3xl font-bold text-center mb-8">
                    Our Services Management and Location State
                </h1>
                <div className='w-full h-auto py-10 flex items-center justify-between border border-blue-500'>
                    <div className='bg-transparen w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center justify-between'>
                        <div className='flex item-center justify-center px-5'>
                            <div className='w-16 h-16'>
                                <img
                                    src={logo}
                                    alt='logo'
                                    className='w-full h-full'
                                />
                            </div>
                            <div>
                                <p>
                                    We are open sunday-thirstday
                                </p>
                                <h3 className="text-base md:text-2xl lg:text-3xl font-bold">
                                    8:00 am - 6:00 pm
                                </h3>
                            </div>
                        </div>
                        <div className='flex item-center justify-center px-5'>
                            <div className='w-16 h-16'>
                                <img
                                    src={logo2}
                                    alt='logo'
                                    className='w-full h-full'
                                />
                            </div>
                            <div>
                                <p>
                                    Have a question?
                                </p>
                                <h3 className="text-base md:text-2xl lg:text-3xl font-bold">
                                    +8673 5286 4752
                                </h3>
                            </div>
                        </div>
                        <div className='flex item-center justify-center px-5'>
                            <div className='w-16 h-16'>
                                <img
                                    src={logo3}
                                    alt='logo'
                                    className='w-full h-full'
                                />
                            </div>
                            <div>
                                <p>
                                    Need a repair? our address
                                </p>
                                <h3 className="text-base md:text-2xl lg:text-3xl font-bold">
                                    Pluza Street, Mirpur
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default LocationStatus;